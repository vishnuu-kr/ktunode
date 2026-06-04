---
title: "Bridge circuit"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 2: Displacement measurement: Transducers for displacement measurement – Potentiometers"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464311"
status: "completed"
scrapedAt: "2026-05-20T18:11:38.218Z"
---
# ENGINEERING INSTRUMENTS AND MEASUREMENTS

## Module 2: Displacement Measurement: Transducers for Displacement Measurement – Potentiometers

### Topic: Bridge Circuit

---

### 1. Introduction to Bridge Circuits

Bridge circuits are fundamental electrical circuits used to measure unknown electrical resistance, impedance, or capacitance. In the context of potentiometers, bridge circuits are crucial for accurately converting the change in resistance (due to displacement) into a measurable voltage output. They offer higher sensitivity and accuracy compared to simply measuring the voltage drop across a part of the potentiometer.

**Key Concept:** A bridge circuit typically consists of four arms, each containing a component (resistor, capacitor, inductor, or even a transducer like a potentiometer). The circuit is designed such that when the components are balanced, there is no voltage difference across the output terminals.

**Course Outcome Alignment:** CO1 (K2) - Understanding the basic principles of electrical circuits used in measurement. CO2 (K3) - Applying these principles to analyze displacement measurement devices.

---

### 2. Wheatstone Bridge Circuit

The Wheatstone bridge is the most common type of bridge circuit used with potentiometers. It is particularly effective for measuring small changes in resistance.

**2.1 Circuit Configuration:**

*   **Four Arms:** Consists of four resistive arms: R1, R2, R3, and Rx.
*   **Input Voltage (Vs):** Applied across two opposite corners of the bridge.
*   **Output Voltage (Vout):** Measured across the other two opposite corners.

**Diagram (Conceptual):**

```
      Vs
      |
     R1 -- R2
     |     |
 Vout+----Rx----Vout-
     |     |
     R3----
      |
     GND
```

*   **R1 and R2:** Often fixed resistors.
*   **R3:** Can be a fixed resistor or another component.
*   **Rx:** The unknown resistance, which in our case, will be the potentiometer or a part of it.

**2.2 Principle of Operation:**

*   **Balanced Condition:** The bridge is balanced when the ratio of resistances in opposite arms is equal. That is, **R1/R2 = R3/Rx**. In this state, **Vout = 0**.
*   **Unbalanced Condition:** When Rx changes (due to displacement in a potentiometer), the balance is disturbed, and a voltage difference (Vout) appears across the output terminals.

**2.3 Potentiometer as a Variable Resistance in a Wheatstone Bridge:**

A linear potentiometer can be used in a Wheatstone bridge in several ways:

    a)  **Single Potentiometer:** One arm of the bridge (e.g., Rx) is replaced by a potentiometer. As the wiper moves, Rx changes, unbalancing the bridge.

        *   **Configuration:**
            *   Arm 1: R1 (Fixed)
            *   Arm 2: R2 (Fixed)
            *   Arm 3: R3 (Fixed)
            *   Arm 4: Potentiometer (Rx = Resistance between wiper and one end)

        *   **Output Voltage:** The output voltage is proportional to the change in resistance of the potentiometer.

    b)  **Two Potentiometers (Differential Connection):** Two potentiometers are used, one increasing its resistance as the other decreases. This offers higher sensitivity and cancellation of common-mode effects.

        *   **Configuration:**
            *   Arm 1: Potentiometer 1 (Wiper to one end)
            *   Arm 2: Potentiometer 2 (Wiper to one end)
            *   Arm 3: Fixed Resistor
            *   Arm 4: Fixed Resistor
            *   *Alternatively, one potentiometer's resistance is Rx, and the other acts as a variable reference.*

        *   **Balancing:** The bridge is often balanced initially by adjusting one of the fixed resistors or the positioning of one potentiometer.

**2.4 Calculation of Output Voltage (Vout) for a Wheatstone Bridge:**

Let the voltage at the junction between R1 and R2 be V_A, and the voltage at the junction between R3 and Rx be V_B.
The input voltage is applied across points 0 (ground) and S (source).

$V_A = V_s \frac{R2}{R1 + R2}$
$V_B = V_s \frac{Rx}{R3 + Rx}$

Therefore, $V_{out} = V_A - V_B = V_s \left( \frac{R2}{R1 + R2} - \frac{Rx}{R3 + Rx} \right)$

**For a balanced bridge, R1/R2 = R3/Rx, which implies R1*Rx = R2*R3. In this case, Vout = 0.**

**Special Case: Balanced Bridge with R1=R2 and R3=Rx**
In this ideal case, $V_A = V_s/2$ and $V_B = V_s/2$, so $V_{out} = 0$.

**When Rx changes slightly, and we assume R1=R2=R and R3=R_fixed:**
$V_{out} = V_s \left( \frac{R}{R + R} - \frac{Rx}{R_{fixed} + Rx} \right)$
$V_{out} = V_s \left( \frac{1}{2} - \frac{Rx}{R_{fixed} + Rx} \right)$

If Rx is a linear potentiometer with total resistance $R_p$, and the wiper is at a fraction 'x' of its travel (where x=0 is one end, x=1 is the other end), then $Rx = x R_p$.

$V_{out} = V_s \left( \frac{1}{2} - \frac{x R_p}{R_{fixed} + x R_p} \right)$

**Sensitivity:** The sensitivity of the bridge is the change in output voltage per unit change in resistance (or displacement). Bridge circuits generally provide higher sensitivity than direct voltage division.

**Reference:**
*   **Dobelin, E.O. (1990). Measurement Systems (Applications and Design).** This textbook likely discusses the principles of bridge circuits and their application in various transducers.
*   **Sawhney, A.K. & Sawhney, P. (2009). Mechanical Measurements and Instrumentation & Control.** Likely provides detailed circuit diagrams and mathematical derivations for Wheatstone bridges in measurement applications.
*   **Nakra, B.C. & Chaudhry, K.K. (2009). Instrumentation Measurement and Analysis.** This book is expected to cover the practical aspects and applications of bridge circuits for displacement measurement.

**Course Outcome Alignment:** CO1 (K2) - Identifying and classifying measuring instruments (bridge circuits). CO2 (K3) - Measuring and analyzing displacement using these devices. CO5 (K3) - Selecting appropriate measurement systems (bridge configurations).

---

### 3. Potentiometer Configurations for Displacement Measurement Using Bridge Circuits

**3.1 Single Potentiometer Bridge:**

*   **Purpose:** To measure linear or angular displacement.
*   **Setup:** A linear or rotary potentiometer acts as one arm (Rx) of a Wheatstone bridge. The displacement directly changes the position of the wiper, thus changing Rx.
*   **Output:** A DC or AC voltage proportional to the displacement.
*   **Advantages:** Simple, inexpensive.
*   **Disadvantages:** Limited resolution (due to wiper contact), linearity can be an issue, wear and tear.
*   **Example:** Measuring the stroke of a hydraulic cylinder using a linear potentiometer connected in a bridge.

**3.2 Differential Potentiometer Bridge:**

*   **Purpose:** To measure small displacements or differential displacements with high sensitivity.
*   **Setup:** Two identical potentiometers are used, connected in a specific configuration within the bridge. Often, one potentiometer's resistance increases while the other decreases with displacement.
*   **Configuration Example:**
    *   One potentiometer is connected as Rx.
    *   The other potentiometer is connected in the opposite arm (e.g., R3) and its wiper is mechanically linked to the same displacement but in an opposing manner, or its terminals are reversed.
*   **Output:** A voltage that is sensitive to the difference in resistance between the two potentiometers.
*   **Advantages:** Higher sensitivity, linearity can be improved, better common-mode rejection.
*   **Disadvantages:** More complex, requires two matched potentiometers.
*   **Example:** Measuring the strain on an object where two strain gauges (which can be modeled as variable resistors) are placed – one in tension and one in compression.

**3.3 Self-Balancing Potentiometer Bridge:**

*   **Purpose:** To provide a continuous and automatically balanced output, indicating the displacement.
*   **Setup:** The bridge output (Vout) is fed into a servo amplifier, which drives a motor to reposition the wiper of a second potentiometer (acting as a feedback element) until the bridge is re-balanced (Vout = 0).
*   **Output:** The position of the servo-driven wiper, which is mechanically linked to a recording device or indicator, directly represents the displacement.
*   **Advantages:** Highly accurate, continuous indication, can drive recording devices directly.
*   **Disadvantages:** Mechanically complex, slower response time due to servo system.
*   **Reference:** Rajput, R. K. (2006). Mechanical Measurements and Instrumentation. Might discuss servo-mechanisms with potentiometers.

**Course Outcome Alignment:** CO2 (K3) - Analyzing displacement measurement techniques using potentiometers and bridge circuits. CO5 (K3) - Selecting appropriate potentiometer configurations for specific displacement measurement tasks.

---

### 4. Advantages and Disadvantages of Potentiometers in Bridge Circuits

**4.1 Advantages:**

*   **Simplicity and Low Cost:** Potentiometers are relatively inexpensive and easy to implement.
*   **Direct Voltage Output:** The bridge circuit converts resistance changes into a voltage signal, which is easily processed by other electronic systems.
*   **High Sensitivity (with bridge):** Bridge configurations, especially differential ones, can amplify small resistance changes, leading to higher sensitivity.
*   **Good Resolution (with bridge):** Can achieve good resolution when properly implemented with a bridge.
*   **DC Operation:** Can be operated with DC voltage sources.

**4.2 Disadvantages:**

*   **Wear and Tear:** The wiper making physical contact with the resistive element leads to wear, reducing lifespan and potentially causing noise or intermittent contact.
*   **Limited Life:** Due to wear, their lifespan is not as long as non-contact transducers.
*   **Noise:** Mechanical noise from the wiper contact can be a problem, especially in vibration-prone environments.
*   **Loading Effects:** The measuring instrument connected to the potentiometer can draw current, affecting the accuracy of the measurement (though bridge circuits help mitigate this compared to simple voltage division).
*   **Resolution Limitations:** The resolution is inherently limited by the physical spacing of the resistive element's track (e.g., wire-wound vs. conductive plastic).
*   **Non-linearity:** While linear potentiometers exist, perfect linearity is difficult to achieve, and the output may not be perfectly proportional to displacement.

**Important Point to Remember:** The choice of potentiometer (wire-wound for better resolution, conductive plastic for smoother operation and longer life) and the bridge circuit design significantly impact performance.

**Course Outcome Alignment:** CO1 (K2) - Understanding characteristics of measuring instruments. CO2 (K3) - Analyzing performance aspects of displacement transducers. CO5 (K3) - Evaluating and selecting suitable transducers based on their pros and cons.

---

### 5. Applications in Displacement Measurement

*   **Linear Position Sensing:** Measuring the position of moving parts in machinery, actuators, and control systems.
*   **Angular Position Sensing:** Used in control sticks, steering wheels, and robotic joints.
*   **Measurement of Vibration:** Can be used to convert mechanical vibration into an electrical signal.
*   **Manifold Pressure Sensors:** In automotive applications, a diaphragm deforms and moves a wiper on a pressure-sensitive resistive element.
*   **Control Valves:** Positioning of control valve stems.

**Reference:**
*   **Raghavendra, N.V. (2013). Engineering Metrology and Measurements.** Likely discusses applications of metrology devices, including potentiometers.
*   **Jain, R.K. (2022). A Text Book of Engineering Metrology.** Expected to cover measurement principles and instruments used in engineering.
*   **Kumar, D.S. (2012). Mechanical Measurement and Control.** Could detail how potentiometers are used in control loops.
*   **Singh, S.K. (2009). Industrial Instrumentation and Control.** Likely covers industrial applications of transducers.

**Course Outcome Alignment:** CO2 (K3) - Applying displacement measurement techniques in practical scenarios. CO4 (K4) - Understanding temperature and flow measurements, but this context is displacement. CO5 (K3) - Selecting systems for engineering applications.

---

### 6. Practice Questions and Exercises

**Q1. What is the fundamental principle behind a Wheatstone bridge used for displacement measurement with a potentiometer?**

**Answer:** The bridge is designed to be balanced (zero output voltage) when the potentiometer's resistance is at a specific value. When displacement causes the potentiometer's resistance to change, the bridge becomes unbalanced, producing an output voltage proportional to the change in resistance, and thus proportional to the displacement.

**Q2. In a Wheatstone bridge with R1=R2=R and R3=100 Ω, if a potentiometer of total resistance 1 kΩ is used as Rx, and the bridge is initially balanced with the wiper at the center (Rx = 500 Ω), what is the output voltage when Vs = 5V?**

**Answer:**
The bridge is initially balanced, so the output voltage *is* 0V when Rx = 500 Ω.
The question asks for the output voltage *at that balanced condition*.

Let's verify the balance condition: R1/R2 = 100/100 = 1. R3/Rx = 100/500 = 0.2.
Wait, the bridge is *not* balanced with Rx=500 if R3=100. Let's rephrase the question to ensure a balance is possible.

**Revised Q2. In a Wheatstone bridge with R1=R2=1 kΩ and R3=1 kΩ, if a potentiometer of total resistance 1 kΩ is used as Rx, and the bridge is initially balanced by adjusting R3 to 500 Ω when the potentiometer wiper is at the center (Rx = 500 Ω), what is the output voltage if Vs = 5V?**

**Answer:**
If the bridge is initially balanced, the output voltage is 0V. The question implies the system is set up for measurement. Let's assume the intent is to find Vout when Rx changes from the balanced point.

Let's consider a scenario where the bridge is balanced at a specific displacement.
Let R1=R2=R_fixed and R3 be adjustable or set such that when Rx = Rx_initial (at a reference displacement), the bridge is balanced.
R1/R2 = R3/Rx_initial  => R_fixed/R_fixed = R3/Rx_initial => R3 = Rx_initial.

If a potentiometer with $R_p = 1k\Omega$ is used, and initial displacement is at the center, $Rx_{initial} = R_p/2 = 500\Omega$.
So, if R3 is set to 500Ω, the bridge is balanced when Rx = 500Ω.

Now, let the displacement change, moving the wiper such that $Rx$ changes to $600\Omega$.
$V_s = 5V$, $R1 = R2 = 1k\Omega$, $R3 = 500\Omega$, $Rx = 600\Omega$.

$V_A = V_s \frac{R2}{R1 + R2} = 5V \frac{1k\Omega}{1k\Omega + 1k\Omega} = 5V \times 0.5 = 2.5V$
$V_B = V_s \frac{Rx}{R3 + Rx} = 5V \frac{600\Omega}{500\Omega + 600\Omega} = 5V \frac{600}{1100} = 5V \times \frac{6}{11} \approx 2.727V$

$V_{out} = V_A - V_B = 2.5V - 2.727V = -0.227V$

*(Self-correction: It's important to specify the initial balanced state clearly in the question to avoid ambiguity.)*

**Q3. What are the main drawbacks of using potentiometers for displacement measurement compared to other transducers like LVDTs?**

**Answer:** The primary drawbacks are the mechanical wear and tear due to the wiper contact, which limits their lifespan and can introduce noise. They also have limitations in resolution and can suffer from non-linearity and loading effects.

**Q4. Explain the advantage of using a differential potentiometer arrangement in a bridge circuit for measuring displacement.**

**Answer:** A differential potentiometer arrangement allows for higher sensitivity, better linearity, and improved rejection of common-mode voltage variations. By using two potentiometers that respond in opposite ways to displacement, small changes can be amplified, and interference that affects both equally can be cancelled out.

**Course Outcome Alignment:** All questions touch upon the understanding of bridge circuits and potentiometers, aligning with CO1, CO2, and CO5.

---

### 7. Important Points to Remember

*   **Bridge Balance:** The key to accurate measurement with bridge circuits is achieving and maintaining balance or precisely measuring the degree of imbalance.
*   **Potentiometer Type:** Choose between wire-wound (higher resolution, less smooth) and conductive plastic (smoother operation, longer life, potentially lower resolution) based on application needs.
*   **Linearity:** Be aware of the linearity specifications of the potentiometer and the potential for non-linear output.
*   **Loading Effects:** Ensure the impedance of the measuring instrument is high enough not to load the bridge output significantly.
*   **Environmental Factors:** Temperature changes can affect resistance values and thus bridge balance.
*   **Applications:** Bridge circuits are vital for converting resistance changes from potentiometers into usable voltage signals for displacement measurement.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
