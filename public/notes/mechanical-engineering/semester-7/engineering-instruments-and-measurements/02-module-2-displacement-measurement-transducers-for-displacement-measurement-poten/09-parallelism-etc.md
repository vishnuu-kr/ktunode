---
title: "parallelism etc."
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 2: Displacement measurement: Transducers for displacement measurement – Potentiometers"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446430c"
status: "completed"
scrapedAt: "2026-05-20T18:11:34.790Z"
---
# Engineering Instruments and Measurements - Module 2: Displacement Measurement

## Topic: Potentiometers for Displacement Measurement (Parallelism, etc.)

---

### **1. Introduction to Displacement Measurement**

Displacement is a fundamental physical quantity representing the change in position of an object. Accurate displacement measurement is crucial in various engineering applications, including process control, robotics, manufacturing, and structural monitoring. Transducers play a vital role in converting mechanical displacement into an electrical signal that can be easily processed, displayed, or used for control.

**Key Concepts:**
*   **Displacement:** The change in position of an object.
*   **Transducer:** A device that converts one form of energy into another. In this context, it converts mechanical displacement into an electrical signal.
*   **Linear Displacement:** Movement along a straight line.
*   **Angular Displacement:** Movement around a fixed axis.

**Course Outcome Alignment:**
*   **CO1 (K2):** Understanding the classification of transducers, including potentiometers, and their basic working principles.
*   **CO2 (K3):** Applying potentiometers for measuring displacement, a core aspect of this outcome.
*   **CO5 (K3):** Selecting potentiometers as a suitable measurement system for displacement applications.

---

### **2. Potentiometers as Displacement Transducers**

A potentiometer is a passive electrical transducer that converts linear or angular displacement into a corresponding change in voltage. It operates on the principle of a variable voltage divider.

**Key Concepts:**
*   **Variable Voltage Divider:** A circuit where the output voltage can be varied by changing the resistance ratio.
*   **Resistive Element:** A resistive track or element along which a wiper moves.
*   **Wiper:** A sliding contact that moves along the resistive element, changing the resistance path.
*   **Excitation Voltage:** A constant DC or AC voltage applied across the ends of the resistive element.

**Working Principle:**
When a constant excitation voltage ($V_{in}$) is applied across the ends of the resistive element, the voltage at the wiper terminal ($V_{out}$) is directly proportional to the position of the wiper along the resistive element.

For a linear potentiometer:
$V_{out} = V_{in} \times \frac{R_{wiper-to-terminal}}{R_{total}}$

Where:
*   $R_{wiper-to-terminal}$ is the resistance between the wiper and one end of the resistive element.
*   $R_{total}$ is the total resistance of the resistive element.

If the resistive element has a uniform resistance distribution, and the wiper moves linearly from one end to the other, then:
$V_{out} = V_{in} \times \frac{x}{L}$

Where:
*   $x$ is the displacement of the wiper from the reference end.
*   $L$ is the total length of the resistive element.

**Types of Potentiometers Used for Displacement Measurement:**
*   **Linear Potentiometers (Potentiometers):** Used for measuring linear displacement. The resistive element is a straight track.
*   **Rotary Potentiometers:** Used for measuring angular displacement. The resistive element is a curved or circular track.

**Reference Textbook Integration:**
*   **Dobelin (1990):** Likely discusses the basic principles of resistive transducers, including potentiometers, in its chapters on electrical transducers. It would emphasize the voltage divider action and linearity.
*   **Sawhney & Sawhney (2009):** This textbook is expected to provide detailed explanations of various transducers, with a dedicated section on potentiometers, covering their construction, working, and types for linear and angular measurements.
*   **Nakra & Chaudhry (2009):** Similar to Sawhney, this book would delve into the application of potentiometers in displacement measurement, possibly discussing their accuracy, limitations, and practical considerations.

---

### **3. Characteristics of Potentiometric Transducers**

Understanding the characteristics of a potentiometer is crucial for selecting it for a specific application and evaluating its performance.

**Key Characteristics:**

*   **Resolution:** The smallest change in displacement that can be detected. For a wire-wound potentiometer, resolution is limited by the number of turns in the resistive wire. For a conductive plastic potentiometer, resolution is theoretically infinite, but practically limited by noise and amplifier capabilities.
    *   **Important Point:** Higher resolution generally means a finer resistive track or more turns.
*   **Linearity:** The degree to which the output voltage ($V_{out}$) is directly proportional to the input displacement ($x$). Non-linearity can arise from non-uniform winding of wires or variations in the resistive material.
    *   **Types of Linearity:**
        *   **Independent Linearity:** Maximum deviation of the actual output from the ideal straight line, measured from the best-fit straight line drawn between the end points of the transfer curve.
        *   **Terminal Linearity:** Maximum deviation from a straight line drawn between the actual start and end points of the transfer curve.
    *   **Example:** A linearity of ±0.1% means the output can deviate by up to 0.1% of the full-scale output from the ideal linear relationship.
*   **Sensitivity:** The change in output voltage per unit change in displacement.
    *   $Sensitivity = \frac{\Delta V_{out}}{\Delta x}$
    *   For a linear potentiometer with uniform resistance, $Sensitivity = \frac{V_{in}}{L}$.
*   **Input Impedance (Load Resistance):** The resistance of the transducer itself. It should be high to avoid significant voltage drop across the resistive element due to the wiper's current.
*   **Output Impedance (Source Impedance):** The impedance seen by the load connected to the wiper. This is generally variable and depends on the wiper's position. It is highest at the center of the resistive element and zero at the ends.
    *   **Important Point:** The load connected to the potentiometer's wiper should have a much higher resistance than the potentiometer's total resistance to minimize loading errors.
*   **Accuracy:** The overall closeness of the measured value to the true value, considering all sources of error (linearity, resolution, environmental factors).
*   **Repeatability:** The ability of the transducer to produce the same output for the same input displacement over multiple trials.
*   **Life Expectancy:** The operational life of the potentiometer, often specified in millions of cycles or operating hours, particularly for the moving parts (wiper and resistive track).

**Reference Textbook Integration:**
*   **Dobelin (1990):** Would likely cover accuracy, linearity, and resolution as fundamental characteristics of any measuring instrument.
*   **Sawhney & Sawhney (2009):** Would elaborate on these characteristics with specific examples related to potentiometers, discussing how each parameter affects the measurement.
*   **Nakra & Chaudhry (2009):** Might provide detailed mathematical treatments of linearity errors and loading effects.

---

### **4. Applications of Potentiometers in Displacement Measurement**

Potentiometers are widely used due to their simplicity, cost-effectiveness, and direct electrical output.

**Examples:**

*   **Linear Displacement Measurement:**
    *   **Position Feedback in Actuators:** Measuring the stroke of hydraulic or pneumatic cylinders.
    *   **Machine Tool Positioning:** Indicating the position of cutting tools or workpieces.
    *   **Robotics:** Providing joint angle or linear position feedback for robotic arms.
    *   **Joysticks:** Used as a simple displacement input device.
    *   **Aircraft Control Surfaces:** Measuring the deflection of flaps or ailerons.

*   **Angular Displacement Measurement:**
    *   **Rotary Actuator Position:** Measuring the angle of a rotating shaft.
    *   **Steering Wheel Angle:** In vehicles for electronic power steering systems.
    *   **Control Knobs:** In audio equipment or industrial control panels.
    *   **Robotic Joint Angles:** Measuring the rotation of robotic arm joints.

**Addressing "Parallelism, etc.":**

The "parallelism" mentioned in the topic likely refers to the **linearity of the potentiometer's resistive element**. For a linear potentiometer to accurately measure linear displacement, the resistive track must be a straight line, and the resistance must change uniformly along its length. Any deviation from this straightness or uniform resistance distribution leads to non-linearity errors.

The "etc." could encompass other aspects of the potentiometer's mechanical design and application, such as:
*   **Alignment:** Ensuring the potentiometer shaft (for rotary) or wiper mechanism (for linear) is properly aligned with the object whose displacement is being measured. Misalignment can introduce errors.
*   **Mounting:** Secure and stable mounting is crucial to avoid vibrations or external forces affecting the measurement.
*   **Environmental Factors:** Temperature changes can affect the resistance of the track, leading to errors. Humidity can also be a factor for some types.
*   **Mechanical Wear:** The friction between the wiper and the track can cause wear over time, affecting linearity and potentially leading to intermittent contact.

**Reference Textbook Integration:**
*   **Sawhney & Sawhney (2009) / Rajput (2006):** These books would likely have dedicated sections on applications of various transducers, showcasing specific examples of potentiometers in action across different industries.
*   **Kumar (2012) / Singh (2009):** Might focus on industrial applications and how potentiometers are integrated into larger control systems for displacement sensing.
*   **Raghavendra (2013) / Jain (2022):** These metrology-focused books would emphasize the precision aspects and how potentiometers are used for dimensional measurement and verification.

---

### **5. Advantages and Disadvantages of Potentiometers**

**Advantages:**
*   **Simple construction and operation.**
*   **Low cost.**
*   **Direct analog output (voltage).**
*   **High sensitivity (can provide significant voltage change for small displacements).**
*   **Good resolution (especially with finer tracks).**
*   **No external power source needed for the transducer itself (passive device), but requires excitation voltage.**

**Disadvantages:**
*   **Limited life span:** Mechanical wear due to wiper movement can cause issues.
*   **Contact resistance and wiper noise:** Can lead to intermittent contact and measurement inaccuracies.
*   **Loading effects:** Output voltage is affected by the resistance of the connected load.
*   **Susceptible to vibration and shock.**
*   **Non-linearity can be an issue, requiring calibration.**
*   **Temperature sensitivity:** Resistance changes with temperature.
*   **Limited frequency response:** Due to the mechanical movement of the wiper and potential capacitive effects.
*   **Limited stroke length/angular range for some types.**

**Reference Textbook Integration:**
*   **All Textbooks:** A comparative analysis of different transducer types would likely include a summary of the pros and cons of potentiometers.

---

### **6. Practice Questions and Exercises**

**Question 1:**
A linear potentiometer has a total resistance of 10 kΩ and a maximum stroke length of 200 mm. If it is excited by a 10 V DC supply, what is the output voltage when the wiper is at a displacement of 50 mm from one end? (Assume uniform resistance distribution).

**Answer:**
$V_{out} = V_{in} \times \frac{x}{L}$
$V_{out} = 10 \text{ V} \times \frac{50 \text{ mm}}{200 \text{ mm}}$
$V_{out} = 10 \text{ V} \times 0.25$
$V_{out} = 2.5 \text{ V}$

**Question 2:**
Explain the concept of linearity in a potentiometer and how it is typically specified. Why is it important for displacement measurement?

**Answer:**
Linearity refers to the degree to which the output voltage of a potentiometer is directly proportional to the input displacement. It is typically specified as a percentage deviation from an ideal straight-line relationship (e.g., ±0.1% linearity). Linearity is crucial for displacement measurement because it ensures that equal changes in displacement result in equal changes in the output signal, allowing for accurate interpretation of the measured position. Deviations from linearity introduce systematic errors in the measurement.

**Question 3:**
What is the main advantage of using a potentiometer as a displacement transducer compared to a strain gauge in certain applications?

**Answer:**
A primary advantage of a potentiometer is its **direct analog voltage output** and **simpler signal conditioning**. Strain gauges typically require bridge configurations and more complex amplification and processing to obtain a usable output signal related to strain (and thus displacement). Potentiometers provide a more direct and often more cost-effective solution for basic displacement sensing where high precision or dynamic response is not the absolute priority.

**Question 4 (Practical Consideration):**
You are using a 5 kΩ linear potentiometer with a 5 V excitation to measure the position of a machine part. You connect a 100 kΩ load resistor to the wiper. How does this load resistor affect the output voltage compared to the ideal case (infinite load resistance)?

**Answer:**
The load resistor will cause a **loading error**. The voltage divider formed by the potentiometer's resistance and the load resistor will result in a lower output voltage than if there were no load.
Let $R_{total}$ be the total resistance of the potentiometer (5 kΩ).
Let $R_L$ be the load resistance (100 kΩ).
Let $x$ be the wiper position (e.g., halfway, $x = L/2$).
The effective resistance from the wiper to the output terminal will be the parallel combination of the resistance from the wiper to one end ($R_{wiper-to-end}$) and the load resistance ($R_L$).
At the halfway point, $R_{wiper-to-end} = R_{total}/2 = 2.5$ kΩ.
The parallel resistance $R_{parallel} = \frac{R_{wiper-to-end} \times R_L}{R_{wiper-to-end} + R_L} = \frac{2.5 \text{ kΩ} \times 100 \text{ kΩ}}{2.5 \text{ kΩ} + 100 \text{ kΩ}} \approx 2.44$ kΩ.
The output voltage would be $V_{out} = V_{in} \times \frac{R_{parallel}}{R_{total}/2} = 5 \text{ V} \times \frac{2.44 \text{ kΩ}}{2.5 \text{ kΩ}} \approx 4.88$ V.
The ideal output voltage at the halfway point would be $V_{in} \times 0.5 = 5 \text{ V} \times 0.5 = 2.5$ V.
**Correction:** The formula for loading error is more complex. A simpler way to view it is that the resistance from the wiper to the output terminal effectively becomes $R_{wiper-to-terminal} || R_L$.
At the halfway point ($x=L/2$), $R_{wiper-to-terminal} = R_{total}/2 = 2.5$ kΩ.
The output voltage is $V_{out} = V_{in} \times \frac{R_{wiper-to-terminal} || R_L}{R_{total}} = 5 \text{ V} \times \frac{(2.5 \text{ kΩ} || 100 \text{ kΩ})}{5 \text{ kΩ}} = 5 \text{ V} \times \frac{2.44 \text{ kΩ}}{5 \text{ kΩ}} \approx 2.44$ V.
The ideal output at halfway is 2.5 V. The loading effect has reduced the output voltage, indicating a deviation from ideal behavior. The smaller the ratio $R_{total}/R_L$, the greater the loading error. In this case, the output is slightly lower than ideal.

**Question 5:**
What are the practical implications of "parallelism" in a linear potentiometer used for measuring the position of a sliding rail?

**Answer:**
"Parallelism" here refers to the straightness of the resistive track and the uniform distribution of resistance along that track. If the track is not straight or the resistance is not uniform:
1.  **Non-linear Output:** The output voltage will not be linearly proportional to the actual position of the sliding rail. For example, if the track bows out, the potentiometer might indicate a larger displacement than actual in that region, and vice-versa.
2.  **Inaccurate Measurement:** The absolute position measurement will be incorrect, leading to errors in control systems or data logging.
3.  **Calibration Challenges:** Compensating for non-linearity due to poor parallelism can be complex and may require extensive calibration or specialized linearization circuits.

---

### **7. Important Points to Remember**

*   Potentiometers convert **mechanical displacement** into a **variable voltage**.
*   They operate as **voltage dividers**.
*   **Linearity** and **resolution** are key performance characteristics.
*   **Loading effect** is a significant consideration: the load connected to the wiper should have a much higher resistance than the potentiometer's total resistance.
*   **Mechanical wear** is a limiting factor for the lifespan of potentiometers.
*   They are suitable for applications requiring **simplicity, low cost, and direct analog output**.
*   "Parallelism" in linear potentiometers relates to the **straightness and uniformity of the resistive track**.

---

### **8. Conclusion**

Potentiometers are fundamental and widely used transducers for measuring both linear and angular displacement. Their simplicity, cost-effectiveness, and direct electrical output make them suitable for a vast array of engineering applications. However, careful consideration must be given to their limitations, including linearity, loading effects, and mechanical wear, when selecting and implementing them in a measurement system. Understanding their characteristics, as discussed in textbooks like Dobelin, Sawhney & Sawhney, and Nakra & Chaudhry, is crucial for effective displacement measurement.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
