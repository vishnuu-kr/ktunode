---
title: "Force measuring devices: Torque and shaft power measurement"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 3: Force measuring devices: Torque and shaft power measurement"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464315"
status: "completed"
scrapedAt: "2026-05-20T18:11:40.311Z"
---
# Engineering Instruments and Measurements

## Module 3: Force Measuring Devices: Torque and Shaft Power Measurement

---

### 1. Introduction to Torque and Shaft Power Measurement

**Learning Outcomes:**
*   Understand the fundamental principles of torque and shaft power measurement.
*   Classify different methods for measuring torque and shaft power.
*   Identify the applications of torque and shaft power measurement in engineering.

**Key Concepts & Definitions:**

*   **Torque (T):** A twisting or turning force that tends to cause rotation about an axis. It is the product of a force and the perpendicular distance from the axis of rotation to the line of action of the force.
    *   Formula: $T = F \times r$
    *   Units: Newton-meters (Nm), Pound-feet (lb-ft)
*   **Shaft Power (P):** The mechanical power transmitted by a rotating shaft. It is the rate at which work is done by the torque.
    *   Formula: $P = T \times \omega$
        *   Where $\omega$ is the angular velocity in radians per second.
    *   Units: Watts (W), Horsepower (hp)
    *   Conversion: $1 \text{ hp} = 745.7 \text{ W}$
*   **Angular Velocity ($\omega$):** The rate of change of angular displacement, measured in radians per second or revolutions per minute (RPM).
    *   Conversion: $\omega (\text{rad/s}) = \text{RPM} \times \frac{2\pi}{60}$

**Importance in Engineering:**

*   **Engine Performance:** Measuring torque and power is crucial for evaluating the performance of engines, motors, and turbines.
*   **Machine Design:** Essential for designing mechanical systems to ensure they can withstand the transmitted torques and powers without failure.
*   **Efficiency Testing:** Used to determine the efficiency of various power transmission systems.
*   **Process Control:** Monitoring torque can be used to control processes like mixers, grinders, and conveyor belts.

**References:**

*   **Dobelin (4th Ed):** Chapter on Torque and Power Measurement (likely covered within force measurement or mechanical power transmission sections).
*   **Sawhney & Sawhney (12th Ed):** Chapters on Torque Measurement and Shaft Power Measurement.
*   **Nakra & Chaudhry (3rd Ed):** Sections dealing with torsional measurements and power transmission.

---

### 2. Torque Measuring Devices

**Learning Outcomes:**
*   Explain the working principles of various torque measuring devices.
*   Classify torque measuring devices based on their operating principles.
*   Discuss the advantages and disadvantages of different torque measuring devices.
*   Apply knowledge to select appropriate torque measuring devices for specific applications (CO5).

**Key Concepts & Definitions:**

*   **Torquemeter:** A device used to measure torque.
*   **Torsional Strain:** The deformation of a material due to applied torque, resulting in an angular twist.

**Classification of Torquemeters:**

**2.1. Mechanical Torquemeters**

*   **Principle:** Directly measure the reaction torque or the resulting deformation.
*   **Examples:**
    *   **Lever and Spring Balance/Load Cell:** The torque is resisted by a lever arm, and the resulting force is measured by a spring balance or load cell.
        *   *Example:* Measuring the torque output of a motor by applying a brake to the shaft and measuring the force on a lever arm attached to the brake.
    *   **Hydraulic and Pneumatic Dynamometers (for measuring reaction torque):** These devices absorb power and provide a reaction torque that is measured using a load cell or spring balance.
        *   *Example:* Water brake dynamometers and eddy-current dynamometers use fluid friction or electromagnetic forces to create a resistive torque.
*   **Advantages:** Simple, often robust, can handle high torques.
*   **Disadvantages:** Can be bulky, may require physical attachment to the rotating shaft, not suitable for measuring torque on the move.

**2.2. Electrical Torquemeters (Shaft-Mounted)**

*   **Principle:** Measure the torsional strain or angular twist of a shaft, which is then converted to an electrical signal.
*   **Key Components:** Strain Gauges, Slip Rings and Commutators (or telemetry).
*   **Types:**
    *   **Bonded Resistance Strain Gauge Torquemeters:**
        *   **Working Principle:** Resistance strain gauges are bonded to the surface of the shaft, typically at 45 degrees to the axis of the shaft. When torque is applied, the shaft twists, causing the gauges to elongate in one direction and compress in the perpendicular direction. This change in resistance is measured using a Wheatstone bridge.
        *   **Measurement of Twist:** The twist angle ($\theta$) is proportional to the applied torque. For a solid shaft of length L and diameter d, the shear stress ($\tau$) is given by $\tau = \frac{16T}{\pi d^3}$ and the angle of twist is $\theta = \frac{TL}{GJ}$, where G is the shear modulus and J is the polar moment of inertia.
        *   **Wheatstone Bridge Arrangement:** Four strain gauges are typically used in a Wheatstone bridge configuration. Two are placed in the direction of maximum tensile strain and two in the direction of maximum compressive strain. This arrangement provides a differential output, increasing sensitivity and reducing errors due to temperature changes or axial loads.
        *   **Signal Transmission:**
            *   **Slip Rings and Brushes:** The output signal from the strain gauges on the rotating shaft is transmitted to stationary instrumentation via slip rings and brushes. This method can be prone to noise and wear.
            *   **Telemetry:** A transmitter is mounted on the rotating shaft, which wirelessly transmits the signal to a stationary receiver. This is a contactless method and is preferred for high-speed applications.
        *   *Example:* Measuring the torque output of an engine crankshaft during testing.
        *   **Advantages:** High accuracy, good sensitivity, can measure torque dynamically, contactless transmission (telemetry).
        *   **Disadvantages:** Requires precise bonding of strain gauges, can be expensive, slip rings can be a source of error.
    *   **Variable Reluctance Transducers (VRTs):**
        *   **Working Principle:** Two toothed wheels are attached to the shaft, one on each side of a magnetic sensor. As the shaft twists, the relative position of the teeth changes, causing a variation in the magnetic flux. This variation induces a voltage in the sensor coil, which is proportional to the twist and thus the torque.
        *   *Example:* Used in some automotive applications.
        *   **Advantages:** Robust, can operate in harsh environments.
        *   **Disadvantages:** Lower sensitivity compared to strain gauges.
    *   **Capacitive Torquemeters:**
        *   **Working Principle:** Changes in capacitance due to the relative angular displacement of two discs attached to the shaft are measured.
        *   **Advantages:** High accuracy, low sensitivity to temperature variations.
        *   **Disadvantages:** Can be sensitive to vibration and dirt.
    *   **Optical Torquemeters:**
        *   **Working Principle:** Uses optical encoders or patterns on the shaft surface to measure the angular twist. Light beams are passed through or reflected from these patterns, and the phase shift or change in the reflected pattern is measured.
        *   *Example:* Using a light source and detector to measure the twist between two points on a shaft.
        *   **Advantages:** Non-contact, suitable for high speeds and harsh environments.
        *   **Disadvantages:** Can be affected by dirt or contamination on the shaft surface.

**2.3. Torsional Measuring Devices**

*   **Principle:** Directly measure the angular twist of the shaft.
*   **Examples:**
    *   **Torsion Bars:** A calibrated bar is used, and its twist is measured using mechanical or electrical means. The torque is determined from the relationship between twist and torque for the torsion bar.
    *   **Optical Twisting Angle Measurement:** Using two discs with markings attached to the shaft at a known distance. The relative angular displacement of these markings due to torque is measured optically.

**Important Points to Remember:**

*   The accuracy of strain gauge torquemeters depends heavily on the proper bonding of the gauges and the calibration of the system.
*   Telemetry is preferred over slip rings for high-speed or demanding applications.
*   The choice of torquemeter depends on the torque range, speed, accuracy requirements, and environmental conditions.

**Practice Questions:**

1.  What is the basic principle behind using resistance strain gauges for torque measurement?
2.  Explain the difference between slip ring transmission and telemetry for transmitting signals from a shaft-mounted torquemeter.
3.  A shaft rotating at 1000 RPM transmits a torque of 50 Nm. Calculate the shaft power in kW.
    *   **Answer:**
        *   Angular velocity $\omega = 1000 \text{ RPM} \times \frac{2\pi}{60} \text{ rad/s} = \frac{1000 \times 2\pi}{60} \text{ rad/s} \approx 104.72 \text{ rad/s}$
        *   Power $P = T \times \omega = 50 \text{ Nm} \times 104.72 \text{ rad/s} = 5236 \text{ W} = 5.236 \text{ kW}$

---

### 3. Shaft Power Measurement

**Learning Outcomes:**
*   Relate torque measurement to shaft power measurement.
*   Describe methods for measuring shaft speed.
*   Explain how torque and speed are combined to calculate shaft power.

**Key Concepts & Definitions:**

*   **Shaft Power:** As defined earlier, the power transmitted by a rotating shaft.
*   **Shaft Speed:** The rotational speed of the shaft, typically measured in Revolutions Per Minute (RPM).

**Relationship between Torque and Shaft Power:**

The fundamental relationship is:
$$ P = T \times \omega $$
Where:
*   $P$ is shaft power (Watts)
*   $T$ is torque (Newton-meters)
*   $\omega$ is angular velocity (radians per second)

To measure shaft power, both torque and shaft speed must be measured.

**Methods for Measuring Shaft Speed:**

**3.1. Mechanical Tachometers:**

*   **Principle:** Utilizes gears and a centrifugal mechanism to drive a pointer on a calibrated dial, directly indicating RPM.
*   **Types:** Centrifugal, chronometric.
*   **Advantages:** Simple, direct reading.
*   **Disadvantages:** Can be bulky, wear and tear on moving parts, accuracy can be affected by vibration.

**3.2. Electrical Tachometers:**

*   **Principle:** Generate an electrical signal whose frequency or voltage is proportional to the shaft speed.
*   **Types:**
    *   **DC Generators (Tachogenerators):** A small DC generator is coupled to the shaft. The output voltage is directly proportional to the speed.
        *   *Example:* A common type used for speed feedback in motor control systems.
        *   **Advantages:** Simple, linear output.
        *   **Disadvantages:** Requires a separate DC power supply, can be affected by temperature.
    *   **AC Generators (Alternators):** Similar to DC generators but produce an AC voltage. The frequency of the AC output is proportional to the speed.
        *   **Advantages:** More robust than DC generators, can be used at higher speeds.
        *   **Disadvantages:** Output voltage can vary with speed, requiring conditioning.
    *   **Proximity Sensors (Eddy Current/Inductive Tachometers):** A magnet or a ferrous rotor attached to the shaft passes by a sensor. This generates a pulse for each rotation or revolution.
        *   *Example:* Used in automotive engines to measure crankshaft speed.
        *   **Advantages:** Non-contact, robust, reliable.
        *   **Disadvantages:** Requires a target on the shaft.
    *   **Photoelectric Tachometers:** A disc with slots or reflective markers is attached to the shaft. A light beam is interrupted or reflected by these markers, generating pulses detected by a photodetector.
        *   *Example:* Handheld digital tachometers used for quick measurements.
        *   **Advantages:** Non-contact, high accuracy, can measure very low speeds.
        *   **Disadvantages:** Requires optical access to the shaft, sensitive to ambient light and dirt.
    *   **Hall Effect Sensors:** Similar to proximity sensors, but utilize the Hall effect to detect the presence of a magnetic field as a magnet on the shaft rotates past the sensor.
        *   **Advantages:** Non-contact, reliable, good for high speeds.
        *   **Disadvantages:** Requires magnets on the shaft.

**3.3. Integrating Torque and Speed for Power Measurement:**

Once torque ($T$) and angular velocity ($\omega$) are measured, the shaft power ($P$) can be calculated using the formula: $P = T \times \omega$.

*   **Instrumentation Systems:** Modern torque measurement systems often integrate speed measurement and power calculation capabilities. The torquemeter provides the torque signal, and a separate speed sensor (or an integrated one) provides the RPM. An electronic unit then processes these signals to display shaft power directly.

**Examples:**

*   **Engine Dynamometer:** An engine is coupled to a dynamometer, which absorbs the power. The dynamometer measures the reaction torque, and a tachometer measures the engine speed. The control system calculates and displays the engine's shaft power.
*   **Electric Motor Testing:** The output shaft of an electric motor is coupled to a load. A torquemeter measures the torque transmitted by the shaft, and a speed sensor measures the motor's RPM. The shaft power is then calculated.

**Important Points to Remember:**

*   Shaft power measurement requires simultaneous measurement of torque and speed.
*   The accuracy of shaft power measurement is limited by the accuracy of both the torque and speed measurements.
*   Photoelectric and proximity tachometers are widely used due to their non-contact nature and reliability.

**Practice Questions:**

1.  What are the two primary parameters that need to be measured to determine shaft power?
2.  Describe how a photoelectric tachometer works.
3.  An electric motor operates at 1500 RPM and produces a torque of 25 Nm. Calculate the power delivered by the motor in horsepower.
    *   **Answer:**
        *   Angular velocity $\omega = 1500 \text{ RPM} \times \frac{2\pi}{60} \text{ rad/s} = 50\pi \text{ rad/s} \approx 157.08 \text{ rad/s}$
        *   Power $P = T \times \omega = 25 \text{ Nm} \times 157.08 \text{ rad/s} = 3927 \text{ W}$
        *   Power in horsepower $P_{\text{hp}} = \frac{3927 \text{ W}}{745.7 \text{ W/hp}} \approx 5.266 \text{ hp}$

---

### 4. Calibration of Torque and Shaft Power Measuring Devices

**Learning Outcomes:**
*   Understand the necessity of calibration.
*   Describe common methods for calibrating torque and speed measuring devices.
*   Discuss the sources of error in torque and shaft power measurements and how calibration helps mitigate them.

**Key Concepts & Definitions:**

*   **Calibration:** The process of comparing a measuring instrument with a standard or reference instrument to determine the accuracy of the instrument and to adjust or correct it if necessary.
*   **Traceability:** The ability to relate the results of a measurement to a stated reference through an unbroken chain of comparisons, each having a stated uncertainty.
*   **Standards:** Highly accurate instruments or devices used for calibration.

**Necessity of Calibration:**

*   **Accuracy:** Ensures that the measured values are close to the true values.
*   **Reliability:** Guarantees consistent performance over time.
*   **Compliance:** Meeting industry standards and regulatory requirements.
*   **Error Mitigation:** Identifies and quantifies systematic errors.

**Calibration of Torque Measuring Devices:**

*   **Method 1: Using Dead Weights and Levers:**
    *   **Principle:** A known torque is applied by using calibrated weights at a known lever arm. The torquemeter is subjected to this known torque, and its output is compared to the applied torque.
    *   **Procedure:** A known torque is applied by hanging weights from a lever arm attached to the torque sensor. The applied torque is calculated as $T = F \times L$, where $F$ is the force due to the weight and $L$ is the lever arm length. The output of the torquemeter is then read and compared to the applied torque.
    *   **References:** This method is generally described in metrology textbooks like those by Jain or Raghavendra.
*   **Method 2: Using a Master Torque Transducer:**
    *   **Principle:** The device under calibration is placed in series with a highly accurate, calibrated "master" torque transducer. Both are subjected to the same applied torque, and the outputs are compared.
    *   **Advantages:** Can be more practical for in-situ calibration and for higher torque ranges.
    *   **Disadvantages:** Requires a reliable master transducer.
*   **Method 3: Using a Calibrated Torque Wrench:** For certain types of torque measurement (like in torque wrenches), calibration can involve applying a known force at a known point and measuring the resulting torque, comparing it to the wrench's setting.

**Calibration of Speed Measuring Devices (Tachometers):**

*   **Method 1: Using a Master Tachometer or Frequency Counter:**
    *   **Principle:** The device under calibration is driven at various known speeds by a calibrated variable speed drive (e.g., a calibrated motor). The output of the device is compared with the speed indicated by a highly accurate reference tachometer or by counting the pulses from the device using a frequency counter.
    *   **Procedure:**
        *   **For Tachogenerators:** The output voltage at different known RPMs is measured and compared to the expected voltage.
        *   **For Pulse-Output Tachometers:** The generated pulses are counted by a frequency counter. The number of pulses per revolution is known, allowing for direct verification of speed.
*   **Method 2: Stroboscopic Method:**
    *   **Principle:** A stroboscope, which emits flashes of light at a controllable frequency, is used. When the flash frequency matches the rotational speed of a marked object on the shaft, the object appears stationary. This matching frequency gives the rotational speed.
    *   **Advantages:** Non-contact, can be used for visual verification.
    *   **Disadvantages:** Accuracy can be affected by the observer's judgment and ambient light.

**Sources of Error in Torque and Shaft Power Measurement:**

*   **Torque Measurement Errors:**
    *   **Strain Gauge Errors:** Poor bonding, temperature drift, gauge factor variation.
    *   **Zero Drift:** The output of the torquemeter is not zero when no torque is applied.
    *   **Non-linearity:** The output is not linearly proportional to the applied torque.
    *   **Hysteresis:** The output differs depending on whether the torque is increasing or decreasing.
    *   **Environmental Factors:** Temperature, vibration, humidity.
    *   **Mechanical Errors:** Misalignment, friction in bearings.
    *   **Signal Transmission Errors:** Noise, attenuation in wires or via telemetry.
*   **Speed Measurement Errors:**
    *   **Tachometer Calibration Errors:** Inaccurate reference standard.
    *   **Electrical Noise:** Affecting signal integrity.
    *   **Mechanical Issues:** Wear in moving parts of mechanical tachometers.
    *   **Optical Issues:** Dirt, ambient light in photoelectric tachometers.
*   **Power Calculation Errors:** Propagation of errors from torque and speed measurements.

**Role of Calibration in Error Mitigation:**

*   **Correcting Zero Offset:** Calibration establishes the zero point.
*   **Determining Calibration Curves:** Calibration establishes the relationship between the instrument's output and the true value, allowing for correction of non-linearities.
*   **Quantifying Hysteresis:** Calibration can reveal and quantify hysteresis.
*   **Verifying Performance:** Periodic calibration ensures the instrument continues to perform within its specified accuracy limits.

**Important Points to Remember:**

*   Calibration should be performed regularly and traceable to national or international standards.
*   The calibration procedure should simulate the actual operating conditions as closely as possible.
*   Calibration certificates provide evidence of the instrument's accuracy and traceability.

**Practice Questions:**

1.  Why is it important to calibrate torque measuring devices?
2.  Describe one common method for calibrating a tachogenerator.
3.  List three potential sources of error in strain gauge-based torquemeters.

---

### 5. Course Outcome Alignment

*   **CO1 (K2):** Understanding the basic principles and classification of torque and power measuring devices aligns with identifying and classifying instruments.
*   **CO2 (K3):** While this module focuses on force, the concept of measuring twist (strain) indirectly relates to strain measurement principles. Understanding how torque is related to torsional strain is key.
*   **CO3 (K5):** This entire module is dedicated to examining devices to measure force, specifically torque, and how that leads to shaft power measurement. The detailed descriptions of devices and their principles fulfill this outcome.
*   **CO4 (K4):** This module is outside the scope of flow and temperature, so no direct alignment.
*   **CO5 (K3):** Understanding the different types of torque and speed measurement devices, their advantages, disadvantages, and calibration methods allows students to select appropriate measurement systems for various engineering applications.

---

### Summary of Key Concepts and Important Points to Remember:

*   **Torque** is a twisting force, and **Shaft Power** is the rate of work done by torque.
*   **Power = Torque x Angular Velocity**.
*   Torquemeters can be **mechanical** (e.g., reaction torque measurement) or **electrical** (e.g., strain gauge-based, optical).
*   Strain gauge torquemeters measure torsional strain, with signals transmitted via **slip rings** or **telemetry**.
*   Shaft speed is measured using **tachometers** (mechanical or electrical: DC/AC generators, proximity, photoelectric, Hall effect).
*   **Calibration** is essential for ensuring accuracy and reliability of both torque and speed measuring devices.
*   Common calibration methods involve using **dead weights**, **master transducers**, and **reference tachometers/frequency counters**.
*   Errors can arise from **instrumentation limitations**, **environmental factors**, and **improper usage**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
