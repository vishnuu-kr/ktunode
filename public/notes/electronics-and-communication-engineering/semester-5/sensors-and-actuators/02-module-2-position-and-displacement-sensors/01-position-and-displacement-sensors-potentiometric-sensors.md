---
title: "Position and Displacement Sensors - Potentiometric Sensors"
subject: "SENSORS AND ACTUATORS"
module: "Module 2: Position and Displacement Sensors "
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea6c"
status: "completed"
scrapedAt: "2026-05-23T17:57:50.008Z"
---
# Sensors and Actuators: Module 2 - Position and Displacement Sensors
## Topic: Potentiometric Sensors

---

### **Introduction to Potentiometric Sensors**

Potentiometric sensors, also known as **potentiometers** or **variable resistors**, are widely used for measuring linear and angular displacement. They operate on the principle of a voltage divider, where a movable wiper contacts a resistive element. The position of the wiper along the resistive element determines the output voltage, which is directly proportional to the displacement.

**Key Concepts:**

*   **Resistance:** The opposition to the flow of electric current.
*   **Voltage Divider:** A circuit that produces an output voltage that is a fraction of its input voltage.
*   **Wiper:** A movable contact that slides along a resistive track.
*   **Resistive Element:** The material through which current flows and whose resistance varies with the position of the wiper.

**Learning Outcome Alignment:**

*   **CO2:** Explain the basic principles and concepts of commonly used different types of sensors, including their purpose, how they work, and the various types of sensors available. (Potentiometric sensors are a fundamental type of displacement sensor.)

---

### **Working Principle**

1.  **Basic Setup:** A potentiometric sensor consists of a resistive element (track) with a movable wiper.
2.  **Voltage Application:** A constant voltage is applied across the ends of the resistive element. Let this voltage be $V_{in}$.
3.  **Wiper Movement:** As the wiper moves along the resistive element, it changes the resistance between one end of the element and the wiper contact.
4.  **Output Voltage:** The output voltage ($V_{out}$) is taken between one end of the resistive element and the wiper. This output voltage is proportional to the position of the wiper.

**Mathematical Representation:**

Assuming a linear resistive element and a uniform distribution of resistance:

*   Let $R_{total}$ be the total resistance of the resistive element.
*   Let $L$ be the total length of the resistive element (for linear potentiometers) or the total angular range (for rotary potentiometers).
*   Let $x$ be the position of the wiper from one end of the resistive element (corresponding to a displacement).

The resistance between the end and the wiper is $R_w$. For a linear potentiometer:
$R_w = (R_{total} / L) * x$

The output voltage, $V_{out}$, using the voltage divider principle:
$V_{out} = V_{in} * (R_w / R_{total})$
Substituting $R_w$:
$V_{out} = V_{in} * ((R_{total} / L) * x / R_{total})$
$V_{out} = V_{in} * (x / L)$

This equation shows that $V_{out}$ is directly proportional to the displacement $x$.

**Reference from Textbooks:**

*   **Fraden (2010), Chapter 5: Position Sensors:** This chapter likely details the fundamental principles of potentiometric sensors, including the voltage divider concept and the relationship between displacement and output voltage.
*   **Johnson (2019), Chapter 4: Resistive Sensors:** Johnson's book would provide a thorough explanation of resistive elements, wiper mechanisms, and the electrical characteristics of potentiometric sensors.

---

### **Types of Potentiometric Sensors**

Potentiometric sensors are primarily classified based on their resistive element shape and the type of motion they measure.

**1. Linear Potentiometric Sensors:**

*   **Description:** The resistive element is a straight rod or track. The wiper moves linearly along this track.
*   **Applications:** Measuring the position of a sliding mechanism, the stroke of a hydraulic cylinder, or the position of a control lever.
*   **Examples:**
    *   **Actuator Position Feedback:** In hydraulic or pneumatic systems, a linear potentiometer can be used to provide feedback on the position of a piston rod. (Parr, 1999, Chapter 5: Actuator Control)
    *   **Robotic Arm Joint Position:** Measuring the extension or retraction of a robotic arm segment.

**2. Rotary Potentiometric Sensors (Potentiometers):**

*   **Description:** The resistive element is a circular arc or a full circle. The wiper moves in a rotary fashion.
*   **Applications:** Measuring angular position, shaft rotation, or the angle of a control surface.
*   **Examples:**
    *   **Steering Wheel Angle:** In automotive applications, a rotary potentiometer can measure the angle of the steering wheel.
    *   **Aircraft Control Surfaces:** Indicating the position of flaps or ailerons.
    *   **Joysticks:** The tilt angle of a joystick often uses rotary potentiometers.

**Important Points to Remember:**

*   The output is an **analog voltage** that is directly proportional to the displacement.
*   They provide **absolute position** feedback (the output voltage uniquely corresponds to a specific position).

---

### **Construction and Materials**

The performance and longevity of potentiometric sensors depend heavily on the materials used for the resistive element and the wiper.

**Resistive Element:**

*   **Materials:**
    *   **Wire-wound:** The resistive element is made of a resistive wire (e.g., nichrome, stainless steel) wound around a core. Good for high power applications, but can have discrete steps in resistance due to the windings, leading to lower resolution.
    *   **Conductive Plastic:** The resistive element is a molded plastic track with embedded conductive particles (e.g., carbon). Offers smooth output and good resolution.
    *   **Cermet:** A composite of ceramic and metal. Offers high temperature stability and durability.
    *   **Thick Film:** A resistive paste is screen-printed onto a substrate.

**Wiper:**

*   **Materials:** Typically made of conductive metals like phosphor bronze, silver alloy, or conductive plastic. The contact material is chosen to ensure good electrical contact with the resistive element while minimizing wear.

**Important Points to Remember:**

*   The **resolution** of a wire-wound potentiometer is limited by the number of turns of wire, while conductive plastic potentiometers offer continuous resolution.
*   **Wear and tear** on the resistive element and wiper is a significant limitation, especially in applications with frequent or high-speed movements.

---

### **Advantages and Disadvantages**

Like all sensors, potentiometric sensors have specific strengths and weaknesses.

**Advantages:**

*   **Simple and Inexpensive:** Relatively easy to manufacture and thus cost-effective.
*   **Absolute Position Measurement:** Provides a unique output for every position, unlike incremental encoders.
*   **High Resolution (Conductive Plastic):** Can offer very fine control with conductive plastic types.
*   **Direct Analog Output:** The output is a voltage, making it easy to interface with analog circuits.
*   **No External Power Source Required for the Resistance Element:** Only needs a voltage source for operation.

**Disadvantages:**

*   **Mechanical Wear:** The wiper constantly contacts the resistive element, leading to wear and a limited lifespan, especially under high cycling conditions.
*   **Limited Life:** Finite number of wiper sweeps before failure.
*   **Contact Resistance and Noise:** Mechanical contact can introduce resistance variations and electrical noise, especially at higher speeds or with dirty contacts.
*   **Limited Bandwidth/Frequency Response:** The mechanical nature and contact friction limit how quickly they can respond to changes in position.
*   **Susceptibility to Vibration and Shock:** Can affect the contact between the wiper and the resistive element, leading to erratic readings.
*   **Non-linearity (in some types):** Wire-wound potentiometers might not have perfectly linear resistance.
*   **Limited Temperature Range:** Certain materials used can degrade at extreme temperatures.

**Reference from Textbooks:**

*   **Patranabis (2021), Chapter 3: Sensors and Transducers:** This chapter will likely cover a comparative analysis of different sensor types, including a discussion of the pros and cons of potentiometric sensors.
*   **Bishop (2022), Chapter 5: Position and Displacement Sensors:** Bishop's book will likely provide detailed comparisons of various position sensing technologies, highlighting the trade-offs associated with potentiometric sensors.

---

### **Applications**

Potentiometric sensors are found in a wide range of applications due to their simplicity and cost-effectiveness.

*   **Industrial Automation:**
    *   Position feedback for hydraulic and pneumatic cylinders (Parr, 1999).
    *   Valve position indication.
    *   Robotic arm joint angle measurement.
*   **Automotive:**
    *   Throttle position sensors (TPS).
    *   Steering angle sensors.
    *   Seat position adjustment.
*   **Consumer Electronics:**
    *   Volume control knobs (traditional analog systems).
    *   Joysticks.
    *   Dimmer controls.
*   **Medical Devices:**
    *   Positioning of medical equipment.

---

### **Interfacing and Signal Conditioning**

To use the analog voltage output from a potentiometric sensor effectively, some signal conditioning might be necessary.

*   **Voltage Following:** Often, the raw output voltage is directly fed into an Analog-to-Digital Converter (ADC) on a microcontroller.
*   **Amplification:** If the voltage range is small or noisy, an operational amplifier (op-amp) circuit can be used to amplify and filter the signal.
*   **Calibration:** The relationship between voltage and displacement needs to be calibrated for accurate measurements.

**Example of Interfacing:**

A linear potentiometer with a full stroke of 10 cm is connected to a 5V supply. The wiper is connected to an ADC input of a microcontroller. If the wiper is at 3 cm, the output voltage will be:

$V_{out} = 5V * (3 cm / 10 cm) = 1.5V$

The microcontroller reads this 1.5V and, using the calibration factor (10 cm / 5V = 2 cm/V), converts it to a displacement of 1.5V * 2 cm/V = 3 cm.

---

### **Practice Questions and Answers**

**Question 1:**

Which of the following is a primary disadvantage of potentiometric sensors?

a) Low resolution
b) High cost
c) Mechanical wear
d) Limited bandwidth

**Answer:** c) Mechanical wear

**Explanation:** Potentiometric sensors rely on a physical contact between a wiper and a resistive element, leading to wear over time. This is a significant limitation compared to non-contact sensors.

---

**Question 2:**

A rotary potentiometric sensor has a total resistance of 10 k$\Omega$ and is connected to a 10V supply. If the wiper is at an angle corresponding to 1/4th of the total rotation, what is the output voltage (assuming a linear resistance distribution)?

a) 2.5 V
b) 5.0 V
c) 7.5 V
d) 10.0 V

**Answer:** a) 2.5 V

**Explanation:**
The output voltage is $V_{out} = V_{in} * (\text{fraction of rotation})$.
$V_{out} = 10V * (1/4) = 2.5V$.
The total resistance of 10 k$\Omega$ is not directly used in calculating the output voltage for a given position if the input voltage is known and the resistance is linear.

---

**Question 3:**

Explain the difference between wire-wound and conductive plastic resistive elements in potentiometric sensors, focusing on their impact on resolution and lifespan.

**Answer:**

*   **Wire-wound:** The resistive element is made of resistive wire wound around a core.
    *   **Resolution:** Limited by the number of turns. The wiper's contact point can jump between adjacent turns, leading to discrete steps in resistance and thus output voltage.
    *   **Lifespan:** Can be good, but the wire can wear down or break with repeated contact.
*   **Conductive Plastic:** The resistive element is a plastic track with conductive particles.
    *   **Resolution:** Offers virtually infinite resolution because the wiper slides continuously along the conductive track, providing a smooth change in resistance.
    *   **Lifespan:** Generally has a longer lifespan than wire-wound types in terms of the number of cycles due to smoother contact, but the plastic material can degrade over time or with exposure to certain environments.

---

### **Important Points to Remember Summary**

*   **Principle:** Voltage divider based on wiper position.
*   **Output:** Analog voltage proportional to displacement.
*   **Types:** Linear and Rotary.
*   **Key Advantage:** Absolute position measurement, simplicity, low cost.
*   **Key Disadvantage:** Mechanical wear, limited lifespan, susceptibility to noise and vibration.
*   **Materials:** Wire-wound (discrete steps, lower resolution) vs. Conductive Plastic (smooth output, higher resolution).
*   **Applications:** Position feedback in various mechanical and electronic systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **Further Reading (Referenced Textbooks)**

*   **Handbook of Modern Sensors** by Jacob Fraden (Springer, Fourth Edition, 2010) - For fundamental sensor principles.
*   **Hydraulics and Pneumatics** by Andrew Parr (Elsevier Science, Second edition, 1999) - For applications in fluid power systems.
*   **Process Control** by K. Krishnaswamy (New Age International, Second edition, 2009) - For understanding sensor integration in control loops.
*   **Sensors and Actuators in Mechatronics, Design and Applications** by Andrzej M. Pawlak (Taylor & Francis Group, 1/e, 2016)
*   **Mechatronic systems, Sensors and Actuators Fundamentals and Modelling** by Robert H. Bishop (Taylor & Francis Group, 3/e, 2022)
*   **Process Control Instrumentation Technology** by Curtis D. Johnson (Pearson/Prentice Hall, 8/e, 2019)
*   **Sensors and Transducers** by D. Patranabis (PHI Learning, 4/e, 2021)

---