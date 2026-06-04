---
title: "Basic method of force measurements"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 3: Force measuring devices: Torque and shaft power measurement"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464316"
status: "completed"
scrapedAt: "2026-05-20T18:11:41.007Z"
---
# Engineering Instruments and Measurements - Module 3: Force Measuring Devices: Torque and Shaft Power Measurement

## Topic: Basic Methods of Force Measurement

---

### 1. Introduction to Force Measurement

*   **Definition of Force:** Force is an external agent that causes or tends to cause a change in the state of motion or rest of a body. It is a vector quantity, having both magnitude and direction. (Sawhney & Sawhney, 2009)
*   **Importance of Force Measurement:** Force measurement is fundamental in numerous engineering applications, including:
    *   Structural analysis and testing
    *   Material testing (tensile, compressive, shear strength)
    *   Process control in manufacturing
    *   Dynamometry (measuring engine power)
    *   Weighing and batching systems
    *   Monitoring and control of mechanical systems
*   **Classification of Force Measuring Devices:** Force measuring devices can be broadly classified based on their operating principles:
    *   **Elastic Deformation Devices:** Utilize the deformation of elastic materials (springs, diaphragms, beams) under applied force. (Dobelin, 1990)
    *   **Inertial Force Devices:** Based on Newton's second law of motion (F=ma), where force is measured through acceleration of a known mass.
    *   **Strain Gauge Based Devices:** Employ strain gauges to measure the strain induced in an elastic member by the applied force.
    *   **Piezoelectric Devices:** Generate an electric charge proportional to the applied mechanical stress.
    *   **Hydraulic/Pneumatic Devices:** Utilize the pressure generated in a fluid due to an applied force.

---

### 2. Basic Principles and Methods of Force Measurement

This section will delve into the core principles behind common force measuring techniques, aligning with CO3 (examining devices to measure force) and CO1 (identifying and classifying instruments).

#### 2.1. Elastic Deformation Methods

These methods rely on the principle of Hooke's Law, which states that within the elastic limit, the deformation of an elastic material is directly proportional to the applied force. (Nakra & Chaudhry, 2009)

##### 2.1.1. Spring Balances

*   **Princ:** Based on the extension or compression of a spring. The extension ($ \Delta L $) is proportional to the applied force ($ F $). $ F = k \Delta L $, where $ k $ is the spring stiffness.
*   **Types:**
    *   **Compression Springs:** Used for measuring compressive forces.
    *   **Tension Springs:** Used for measuring tensile forces.
*   **Construction:** Typically consist of a calibrated spring, a pointer, and a scale. The applied force causes the spring to extend or compress, moving the pointer along the scale.
*   **Applications:** Weighing scales, dynamometers, general force measurement.
*   **Advantages:** Simple, relatively inexpensive, good sensitivity for small forces.
*   **Disadvantages:** Non-linearity can occur at higher loads, susceptible to temperature variations and creep.
*   **Reference:** Discussed in detail in Sawhney & Sawhney (2009) and Rajput (2006).

**Example:** A common bathroom scale utilizes a spring mechanism. When you stand on it, your weight (a force) compresses a spring, and a dial indicates the corresponding weight.

##### 2.1.2. Proving Rings

*   **Princ:** A precisely machined ring made of high-quality steel, designed to deform elastically under load. The deformation (usually radial or diametrical) is measured and related to the applied force.
*   **Construction:** A circular or slightly oval ring with calibrated deformation under known loads. A precise measurement system (e.g., dial indicator) is used to measure the deformation.
*   **Applications:** Primarily used as a force standard in calibration laboratories for testing other force measuring devices (e.g., universal testing machines).
*   **Advantages:** High accuracy, good linearity over a wide range, robust.
*   **Disadvantages:** Relatively expensive, sensitive to mounting conditions.
*   **Reference:** Covered in Nakra & Chaudhry (2009) and Raghavendra (2013).

**Example:** A proving ring is used to calibrate a testing machine by applying a known force to the proving ring and verifying that the machine's output matches the calibrated value of the proving ring.

##### 2.1.3. Load Cells (General Concept)

While specific types of load cells will be covered later, the fundamental principle of many load cells involves elastic deformation.

*   **Princ:** An elastic member (often a beam, column, or diaphragm) is deformed by the applied force. This deformation is then converted into an electrical signal.
*   **Reference:** Introduction to load cells can be found in most of the listed textbooks, including Dobelin (1990) and Singh (2009).

#### 2.2. Strain Gauge Based Force Measurement

This is a very common and versatile method.

##### 2.2.1. Strain Gauges

*   **Princ:** Based on the piezoresistive effect, where the electrical resistance of a conductor changes when it is subjected to mechanical strain. For a wire of length $ L $, cross-sectional area $ A $, and resistivity $ \rho $, the resistance $ R = \frac{\rho L}{A} $. When strained, $ L $ changes, $ A $ changes (due to Poisson's ratio), and $ \rho $ can also change. (Dobelin, 1990)
*   **Gauge Factor ($ GF $):** A crucial parameter for strain gauges, defined as the ratio of fractional change in resistance to the fractional change in length (strain).
    $ GF = \frac{\Delta R/R}{\Delta L/L} = \frac{\Delta R/R}{\epsilon} $
    where $ \Delta R $ is the change in resistance, $ R $ is the initial resistance, $ \Delta L $ is the change in length, and $ \epsilon $ is the strain.
*   **Types of Strain Gauges:**
    *   **Wire Strain Gauges:** Made of thin wires wound in a grid pattern.
    *   **Foil Strain Gauges:** Made by etching a thin foil (e.g., Constantan) on a plastic backing. These are the most common type.
    *   **Semiconductor Strain Gauges:** Made of semiconductor materials, offering higher gauge factors but are more temperature-sensitive.
*   **Applications:** Measuring strain in structures, stress analysis, and as transducers in load cells, pressure sensors, torque sensors.
*   **Reference:** Detailed explanation in Nakra & Chaudhry (2009), Sawhney & Sawhney (2009), and Rajput (2006).

**Example:** A strain gauge bonded to a metal beam will stretch or compress with the beam. This change in length alters the resistance of the strain gauge, which can be measured.

##### 2.2.2. Load Cells using Strain Gauges

*   **Princ:** A precisely engineered elastic body (load cell body) is designed to deform predictably under load. Strain gauges are bonded to the surface of this elastic body at locations where strain is maximum and is directly proportional to the applied force.
*   **Types of Load Cells:**
    *   **S-type:** The elastic body is shaped like an 'S'. Good for tension and compression.
    *   **Cantilever type:** Utilizes a cantilever beam.
    *   **Bending Beam type:** A beam subjected to bending.
    *   **Shear Beam type:** An elastic member subjected to shear.
    *   **Compression type:** Designed specifically for compressive loads.
    *   **Canister/Pancake type:** Compact and robust, suitable for both tension and compression.
*   **Wheatstone Bridge Configuration:** Strain gauges are typically wired in a Wheatstone bridge circuit to maximize sensitivity and compensate for temperature effects.
    *   **Quarter Bridge:** One active strain gauge.
    *   **Half Bridge:** Two active strain gauges.
    *   **Full Bridge:** Four active strain gauges. A full bridge configuration offers the highest sensitivity and best temperature compensation.
*   **Advantages:** High accuracy, good linearity, wide range of measurement, can be designed for specific load capacities and environmental conditions, electrical output is easily processed.
*   **Disadvantages:** Requires excitation voltage, sensitive to temperature variations if not properly compensated, can be susceptible to side loads.
*   **Reference:** Comprehensive coverage in Nakra & Chaudhry (2009), Dobelin (1990), and Singh (2009).

**Example:** A truck weighing scale uses load cells placed under the weighing platform. When a truck drives onto the platform, the force (weight) is distributed to the load cells, which generate an electrical signal proportional to the force, and this signal is displayed as the truck's weight.

---

#### 2.3. Hydraulic Force Measurement

*   **Princ:** Based on Pascal's law, which states that pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel. Force applied to a piston in a cylinder generates pressure in the fluid. $ P = F/A $, where $ P $ is pressure, $ F $ is force, and $ A $ is the piston area. The pressure can then be measured by a pressure gauge. (Kumar, 2012)
*   **Construction:** Consists of a cylinder, a piston, and a pressure gauge. The applied force acts on the piston, generating fluid pressure.
*   **Applications:** Hydraulic jacks, hydraulic presses, some types of weighing scales.
*   **Advantages:** Can measure very large forces, simple construction, self-generating (no external power required for basic systems).
*   **Disadvantages:** Prone to leakage, temperature effects on fluid viscosity, response time can be slow.
*   **Reference:** Covered in Sawhney & Sawhney (2009) and Rajput (2006).

**Example:** A hydraulic car jack uses a small piston to apply force to a hydraulic fluid, generating high pressure that acts on a larger piston to lift the car.

#### 2.4. Pneumatic Force Measurement

*   **Princ:** Similar to hydraulic systems, but uses compressed air. Pressure changes in a pneumatic system are used to indicate force.
*   **Applications:** Pneumatic load cells, force-balancing systems.
*   **Advantages:** Can be used in environments where hydraulic fluids are undesirable, relatively clean.
*   **Disadvantages:** Requires compressed air supply, compressibility of air can affect accuracy.
*   **Reference:** Mentioned in context with hydraulic systems in Sawhney & Sawhney (2009).

#### 2.5. Piezoelectric Force Measurement

*   **Princ:** Based on the piezoelectric effect, where certain crystalline materials (like quartz or ceramics) generate an electric charge when subjected to mechanical stress or pressure. The amount of charge generated is proportional to the applied force. (Dobelin, 1990)
*   **Construction:** A piezoelectric crystal element is placed between two electrodes. When force is applied, the crystal deforms, creating a charge on the electrodes. This charge is then measured.
*   **Applications:** High-frequency force measurements, dynamic force measurements, impact testing, accelerometers (which measure acceleration by sensing the force due to inertia).
*   **Advantages:** Very high stiffness, excellent dynamic response, self-generating.
*   **Disadvantages:** Sensitive to temperature changes, susceptible to noise, typically used for dynamic or rapidly changing forces (DC response is poor).
*   **Reference:** Detailed in Nakra & Chaudhry (2009) and Dobelin (1990).

**Example:** In a microphone, sound waves (pressure variations) cause a piezoelectric element to vibrate, generating a corresponding electrical signal.

---

### 3. Static and Dynamic Characteristics of Force Measuring Devices

This section addresses CO1 (static and dynamic characteristics).

#### 3.1. Static Characteristics

These describe the performance of the device when measuring a constant or slowly changing force.

*   **Accuracy:** The degree of closeness of the measured value to the true value of the force. (Dobelin, 1990)
*   **Precision:** The degree of agreement among several measurements of the same force. It is the repeatability or reproducibility of measurements.
*   **Sensitivity:** The ratio of the change in output signal to the change in input force. For linear devices, it's the slope of the calibration curve. $ S = \frac{\Delta Output}{\Delta Force} $.
*   **Linearity:** The degree to which the actual calibration curve deviates from a straight line. Ideal devices have linear behavior.
*   **Hysteresis:** The difference in output readings for the same input force when approached from increasing and decreasing values. This is due to mechanical friction or material properties. (Nakra & Chaudhry, 2009)
*   **Resolution:** The smallest change in force that can be detected by the instrument.
*   **Zero Drift:** The change in the output reading when no force is applied.
*   **Range:** The difference between the maximum and minimum forces that can be measured.
*   **Span:** The difference between the maximum and minimum output readings.
*   **Threshold:** The minimum input force that is required to produce a detectable output.

#### 3.2. Dynamic Characteristics

These describe the performance of the device when measuring a force that is changing with time.

*   **Response Time:** The time taken by the instrument to reach its final steady reading after a sudden change in the input force.
*   **Natural Frequency ($ \omega_n $):** The frequency at which the system would oscillate if it were disturbed from its equilibrium position and there were no damping.
*   **Damping Ratio ($ \zeta $):** A dimensionless parameter that describes how oscillations in a system decay after a disturbance.
*   **Frequency Response:** How well the instrument's output follows the changes in the input force over a range of frequencies. For a first-order system, $ TF(s) = \frac{K}{1+\tau s} $; for a second-order system, $ TF(s) = \frac{K}{\frac{s^2}{\omega_n^2} + \frac{2\zeta s}{\omega_n} + 1} $. (Dobelin, 1990)

**Important Point to Remember:** For dynamic measurements, the natural frequency of the force measuring device should be at least 5-10 times higher than the maximum frequency component of the force being measured to avoid significant distortion.

---

### 4. Torque and Shaft Power Measurement (Introduction)

While this topic is about *basic* force measurement, it's essential to understand its relation to torque and shaft power as outlined in the module title.

*   **Torque ($ \tau $):** A twisting force that tends to cause rotation. It is calculated as the product of force ($ F $) and the perpendicular distance from the axis of rotation to the line of action of the force ($ r $). $ \tau = F \times r $.
*   **Shaft Power ($ P_{shaft} $):** The mechanical power delivered by a rotating shaft. It is the product of torque ($ \tau $) and angular velocity ($ \omega $).
    *   In SI units: $ P_{shaft} = \tau \times \omega $ (Watts, where $ \tau $ is in N-m and $ \omega $ is in rad/s).
    *   In imperial units (common in automotive): $ P_{shaft} = \frac{2 \pi N \tau}{550 \times 12} $ (horsepower, where $ N $ is in RPM and $ \tau $ is in lb-ft).
*   **Measurement of Torque and Shaft Power:** These are typically measured indirectly.
    *   **Torque Measurement:** Often done by measuring the strain on a shaft subjected to torsion or by measuring the reaction force on a dynamometer.
    *   **Shaft Power Measurement:** Requires measuring both torque and angular speed.
*   **Relevance to Basic Force Measurement:** The measurement of reaction forces in dynamometers is a direct application of force measurement principles discussed earlier.

---

### 5. Practice Questions and Exercises

**(Note: Answers are provided at the end.)**

**Question 1 (CO3, K5):**
Explain the working principle of a strain gauge load cell. What are the advantages of using a Wheatstone bridge configuration with strain gauges for force measurement?

**Question 2 (CO1, K2):**
Define "linearity" and "hysteresis" in the context of instrument characteristics. Provide an example of why hysteresis is undesirable in a force measuring device.

**Question 3 (CO3, K5):**
Describe the basic principle of hydraulic force measurement. What is the main limitation of hydraulic systems for precise dynamic force measurements?

**Question 4 (CO1, K2):**
What is the Gauge Factor ($ GF $) of a strain gauge? If a strain gauge with $ GF = 2 $ has an initial resistance of $ 120 \Omega $ and experiences a change in resistance of $ 0.012 \Omega $, what is the strain applied to it?

**Question 5 (CO5, K3):**
You need to measure the force exerted by a human hand for a gripping strength testing device. Which type of force measuring device would you consider most suitable and why, considering accuracy, cost, and ease of use?

**Question 6 (CO1, K2):**
For dynamic force measurements, why is it important for the measuring instrument's natural frequency to be significantly higher than the highest frequency component of the force being measured?

---

### 6. Important Points to Remember

*   **Hooke's Law:** The foundation for most elastic deformation-based force sensors.
*   **Strain Gauge Principle:** Resistance changes with strain due to changes in length, area, and resistivity.
*   **Gauge Factor:** Key parameter for strain gauge sensitivity.
*   **Wheatstone Bridge:** Essential for maximizing signal and minimizing errors in strain gauge applications.
*   **Dynamometers:** Devices used to measure torque and power, often employing force measurement principles for reaction force.
*   **Static vs. Dynamic Characteristics:** Understand the difference and which applies to your measurement scenario.
*   **Choosing the Right Device:** Consider the magnitude of force, whether it's static or dynamic, accuracy requirements, environmental conditions, and cost.

---

### 7. Answers to Practice Questions

**Answer 1:**
A strain gauge load cell works by attaching strain gauges to an elastic member designed to deform predictably under load. When a force is applied, the elastic member deforms, causing strain in the attached gauges. This strain changes the resistance of the gauges. These changes in resistance are measured, typically using a Wheatstone bridge, and converted into a force reading.
Advantages of Wheatstone bridge configuration:
1.  **Increased Sensitivity:** Using multiple strain gauges (especially in a full bridge) allows for summation of output signals, leading to higher overall sensitivity.
2.  **Temperature Compensation:** By arranging gauges such that temperature changes cause equal and opposite changes in resistance in different arms of the bridge, the effect of temperature on the output can be nullified.
3.  **Cancellation of Non-Linearities:** Careful arrangement can help cancel out some non-linear effects.
4.  **Improved Signal-to-Noise Ratio:** The differential output of the bridge can help reject common-mode noise.

**Answer 2:**
*   **Linearity:** Linearity is the degree to which the output of a measuring instrument follows a straight line with respect to the input, over its operating range. A perfectly linear instrument has an output that is directly proportional to the input.
*   **Hysteresis:** Hysteresis is the phenomenon where the output of an instrument depends on its past history. For a given input force, the output reading will be different depending on whether the input force was increasing or decreasing.
*   **Undesirability of Hysteresis:** Hysteresis introduces uncertainty in measurement. If you don't know whether the force is increasing or decreasing, you cannot predict the exact output reading, leading to errors. For example, in weighing, if a scale exhibits hysteresis, you might get a different reading for the same object depending on whether it was weighed after a heavier object or a lighter object.

**Answer 3:**
**Princ of Hydraulic Force Measurement:** Hydraulic force measurement relies on Pascal's Law. When a force ($ F $) is applied to a piston of area ($ A_1 $) in a confined fluid, it generates a pressure ($ P = F/A_1 $). This pressure is transmitted undiminished throughout the fluid to a larger piston of area ($ A_2 $). The force exerted by the larger piston is $ F_2 = P \times A_2 = (F/A_1) \times A_2 $. A pressure gauge connected to the system measures this fluid pressure, which is then related back to the applied force.
**Main Limitation for Dynamic Measurements:** The compressibility of hydraulic fluids, though low, is not zero. For rapidly changing forces, the fluid may compress or expand slightly before the pressure can equalize, leading to a lag in the response and potential inaccuracies in capturing rapid force fluctuations. Also, inertia of the fluid and mechanical friction can affect dynamic response.

**Answer 4:**
Given:
*   Gauge Factor ($ GF $) = 2
*   Initial Resistance ($ R $) = $ 120 \Omega $
*   Change in Resistance ($ \Delta R $) = $ 0.012 \Omega $

The formula for Gauge Factor is $ GF = \frac{\Delta R/R}{\epsilon} $.
We need to find the strain ($ \epsilon $).
Rearranging the formula: $ \epsilon = \frac{\Delta R/R}{GF} $

First, calculate the fractional change in resistance:
$ \frac{\Delta R}{R} = \frac{0.012 \Omega}{120 \Omega} = 0.0001 $

Now, calculate the strain:
$ \epsilon = \frac{0.0001}{2} = 0.00005 $

The strain is $ 0.00005 $. Strain is often expressed in microstrain ($ \mu \epsilon $), so $ 0.00005 \times 10^6 = 50 \mu \epsilon $.

**Answer 5:**
For measuring human hand grip strength, a **strain gauge-based load cell** would be most suitable.
**Reasoning:**
*   **Accuracy:** Strain gauge load cells can offer high accuracy and good linearity, which is important for quantifying grip strength precisely.
*   **Response:** They can capture the dynamic nature of grip strength (e.g., the peak force achieved during a grip).
*   **Design Flexibility:** They can be designed into ergonomic grips that are comfortable for users.
*   **Cost:** While more expensive than simple spring scales, they are generally more accurate and reliable for this application.
*   **Ease of Use:** The electrical output can be easily interfaced with digital displays or data acquisition systems, making the results readily available.
A simple spring balance might be too imprecise, and piezoelectric sensors are generally for higher frequency dynamic measurements and might not be ideal for the slower application of grip strength. Hydraulic systems could work but are often bulkier and less convenient for handheld devices.

**Answer 6:**
For dynamic force measurements, the measuring instrument's natural frequency ($ \omega_n $) should be significantly higher (typically 5-10 times) than the highest frequency component of the force being measured. This is to ensure that the instrument can faithfully track the variations in the force without distorting the signal. If the natural frequency is too low, the instrument will act as a low-pass filter, attenuating the higher frequency components and causing the measured output to lag behind or be a smoothed-out version of the actual input force. This leads to inaccurate representation of the dynamic behavior of the force.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
