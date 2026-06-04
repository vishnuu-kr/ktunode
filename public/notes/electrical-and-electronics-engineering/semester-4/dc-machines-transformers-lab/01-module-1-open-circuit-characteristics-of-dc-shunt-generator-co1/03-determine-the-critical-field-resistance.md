---
title: "Determine the critical field resistance"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 1: Open circuit characteristics of DC shunt generator (CO1)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360a4"
status: "completed"
scrapedAt: "2026-05-23T16:15:07.188Z"
---
# DC Machines & Transformers Lab: Module 1 - Open Circuit Characteristics of DC Shunt Generator (CO1)

## Topic: Determine the Critical Field Resistance

This module focuses on understanding the behavior of a DC shunt generator under open-circuit conditions. A crucial parameter to determine is the **critical field resistance ($R_{fc}$)**, which is directly related to the generator's ability to self-excite.

---

### 1. Introduction to DC Shunt Generators and Self-Excitation

**1.1 What is a DC Shunt Generator?**
A DC shunt generator is a DC electrical generator where the field winding is connected in parallel (shunt) with the armature winding. This means the field winding is connected directly across the armature terminals.

**1.2 Principle of Operation:**
DC generators work on the principle of electromagnetic induction (Faraday's Law of Electromagnetic Induction). When a conductor (armature winding) moves in a magnetic field (produced by field winding), an electromotive force (EMF) is induced across the conductor. In a DC generator, a commutator is used to convert this induced AC EMF into a DC EMF.

**1.3 Self-Excitation:**
DC shunt generators are typically **self-excited**. This means that the magnetic field required for induction is produced by the current flowing through its own field winding. This process relies on the presence of **residual magnetism** in the field poles.

**1.4 Residual Magnetism:**
Even after the field current is switched off, the iron core of the field poles retains a small amount of magnetism. This residual magnetism is crucial for initiating the generation process.

**1.5 The Self-Excitation Process (Simplified):**
1.  **Initial State:** Armature is at rest, no field current, only residual magnetism present.
2.  **Rotation:** The prime mover (e.g., engine, motor) rotates the armature.
3.  **Induced EMF:** Due to residual magnetism, a small EMF is induced in the armature conductors.
4.  **Field Current Initiation:** This small induced EMF causes a small current to flow through the shunt field winding (as it's connected across the armature).
5.  **Field Strengthening:** The field current produces a magnetic field that adds to the residual magnetism, strengthening the overall magnetic field.
6.  **Increased EMF:** A stronger magnetic field leads to a higher induced EMF in the armature.
7.  **Positive Feedback Loop:** This process continues in a positive feedback loop, with increasing EMF leading to increasing field current, which leads to a stronger field, and so on, until the magnetic circuit saturates.

**Key Concept:** The self-excitation process is a **cumulative process** where the induced EMF and field current reinforce each other.

---

### 2. Open Circuit Characteristics (OCC) of a DC Shunt Generator

**2.1 Definition:**
The Open Circuit Characteristic (OCC) curve, also known as the **No-Load Saturation Curve**, plots the generated EMF ($E_0$) against the field current ($I_f$) when the armature terminals are open-circuited (no load connected).

**2.2 Why Open Circuit?**
At no load, the generated EMF is primarily determined by the field flux and the speed of rotation. There are no voltage drops across the armature resistance or brush contact drops. Therefore, the OCC represents the relationship between the field excitation and the generated EMF without the influence of external load.

**2.3 Factors Affecting OCC:**
*   **Speed of Rotation:** The generated EMF is directly proportional to the speed. The OCC is typically obtained at a constant rated speed. If the speed changes, the entire curve shifts.
*   **Residual Magnetism:** The presence and strength of residual magnetism affect the initial EMF generated.
*   **Magnetic Saturation:** As the field current increases, the magnetic flux in the iron core also increases, but eventually, the iron core saturates, and the flux increases less rapidly. This causes the OCC curve to bend over.

**2.4 Plotting the OCC Curve:**
The OCC curve is obtained by gradually increasing the field current from a low value (starting with residual magnetism) and measuring the corresponding generated EMF.

*   **Typical Shape:** The curve starts from a small EMF (due to residual magnetism) and rises almost linearly at first. As the field current increases, the magnetic circuit starts to saturate, and the curve bends over, becoming less steep.

**Reference (Bimbhra, Chapter 4):** Bimbhra's "Electrical Machinery" provides a detailed explanation of the principles of DC generators and the generation of the OCC curve, including the influence of residual magnetism and saturation.

---

### 3. Determining the Critical Field Resistance ($R_{fc}$)

**3.1 Definition of Critical Field Resistance ($R_{fc}$):**
The critical field resistance ($R_{fc}$) is the **maximum value of the shunt field circuit resistance** for which the DC shunt generator will self-excite at a given speed. If the actual shunt field resistance ($R_{sh}$) is less than $R_{fc}$ ($R_{sh} < R_{fc}$), the generator will self-excite. If $R_{sh} > R_{fc}$, the generator will not self-excite, and the generated EMF will remain at a very low value due to residual magnetism only.

**3.2 The Concept of Field Resistance Line:**
The relationship between the generated EMF ($E_0$) and the field current ($I_f$) in a DC shunt circuit is given by Ohm's Law for the field circuit:
$E_0 = I_f \times R_{sh}$

This equation can be represented as a straight line on the same graph as the OCC curve. This straight line is called the **field resistance line**.

*   **Slope of the Field Resistance Line:** The slope of this line is $1/R_{sh}$.
*   **Y-intercept:** At zero field current, the EMF is zero, so the line passes through the origin (0,0).

**3.3 Graphical Method to Determine $R_{fc}$:**

1.  **Plot the OCC Curve:** Conduct the experiment to obtain the open-circuit characteristic curve of the DC shunt generator at a constant rated speed. Plot $E_0$ on the y-axis and $I_f$ on the x-axis.
2.  **Draw Field Resistance Lines:** Starting from the origin, draw a series of straight lines with increasing slopes (decreasing resistance values $R_{sh}$). Each line represents a specific field circuit resistance.
3.  **Identify the Critical Point:** The **critical field resistance line** is the straight line drawn from the origin that is **tangent** to the OCC curve.
4.  **Calculate $R_{fc}$:**
    *   From the point of tangency, determine the corresponding field current ($I_{f,crit}$) and generated EMF ($E_{0,crit}$).
    *   The critical field resistance ($R_{fc}$) can then be calculated using the equation of the tangent line:
        $R_{fc} = \frac{E_{0,crit}}{I_{f,crit}}$

**Visual Aid:** Imagine the OCC curve as a curved line. You are trying to find the steepest possible straight line originating from the origin that still touches the OCC curve. The point where this line touches the curve is the critical point. Any line with a steeper slope (lower $R_{sh}$) will intersect the OCC curve at two points (one before saturation and one after), indicating self-excitation. Any line with a shallower slope (higher $R_{sh}$) will not intersect the OCC curve (except at the origin), indicating no self-excitation.

**Reference (Kothari & Nagrath, Chapter 5):** Kothari & Nagrath's "Electric Machines" discusses the excitation characteristics of DC generators, including the critical field resistance and its graphical determination from the OCC curve.

---

### 4. Experimental Procedure to Determine Critical Field Resistance

**Objective:** To determine the critical field resistance of a DC shunt generator.

**Apparatus Required:**
*   DC Shunt Generator with separately excited field winding (allows external control of $R_{sh}$)
*   DC Shunt Motor (as prime mover)
*   Rheostat for field control of the DC shunt motor (to maintain constant speed)
*   Rheostat for controlling the field current of the DC shunt generator (variable resistance in the shunt field circuit)
*   Voltmeter (to measure generated EMF $E_0$)
*   Ammeter (to measure field current $I_f$)
*   Tachometer (to monitor speed)
*   Connecting wires
*   Load (not strictly necessary for OCC, but useful for ensuring the generator is capable of producing voltage)

**Circuit Diagram:**
(A typical circuit diagram would show the DC shunt motor connected to a DC supply, with its field rheostat. The DC shunt generator's armature is kept open-circuited. The generator's field winding is connected in series with a variable rheostat and an ammeter. A voltmeter is connected across the armature terminals.)

**Procedure:**

1.  **Setup:** Connect the DC shunt motor to the DC supply and the DC shunt generator as per the circuit diagram. Ensure the armature of the generator is open-circuited. Connect the variable rheostat in the shunt field circuit of the generator in series with an ammeter. Connect a voltmeter across the armature terminals of the generator.
2.  **Initial Adjustment:** Ensure the variable rheostat in the shunt field circuit of the generator is set to its maximum resistance.
3.  **Start the Motor:** Start the DC shunt motor and bring it to its rated speed using its field rheostat. Maintain a constant speed throughout the experiment using the motor's field rheostat and monitoring with the tachometer.
4.  **Obtain OCC Data:**
    *   Gradually decrease the resistance of the variable rheostat in the generator's field circuit.
    *   For each setting of the field rheostat, record the field current ($I_f$) from the ammeter and the generated EMF ($E_0$) from the voltmeter.
    *   Start with a low field current (just enough to show some residual voltage) and increase it gradually until the magnetic circuit saturates (i.e., the EMF increases slowly with further increase in field current).
5.  **Reverse Polarity (Optional but recommended):** After taking readings in one direction, reduce the field current to zero. Then, reverse the field connections and repeat the process of gradually increasing the field current. This ensures that the residual magnetism does not hinder the process and that you are tracing the entire characteristic. Record these readings as well.
6.  **Record Speed:** Note down the constant speed of the prime mover.
7.  **Post-Experiment Check:** Turn off the supply to the motor.

**Data Table:**

| Sr. No. | Field Current, $I_f$ (A) | Generated EMF, $E_0$ (V) | Field Resistance $R_{sh} = E_0 / I_f$ (Ω) |
| :------ | :----------------------- | :----------------------- | :---------------------------------------- |
| 1       |                          |                          |                                           |
| 2       |                          |                          |                                           |
| ...     |                          |                          |                                           |

---

### 5. Data Analysis and Graphing

1.  **Plot the OCC Curve:** Using the recorded data, plot a graph of Generated EMF ($E_0$) on the y-axis against Field Current ($I_f$) on the x-axis.
2.  **Calculate Field Resistance for each point:** For each pair of ($I_f$, $E_0$) readings, calculate the corresponding field resistance $R_{sh} = E_0 / I_f$. This value represents the resistance of the shunt field circuit *at that particular operating point*.
3.  **Draw the Critical Field Resistance Line:**
    *   Draw a straight line from the origin (0,0) that is **tangent** to the plotted OCC curve.
    *   Identify the point of tangency ($I_{f,crit}$, $E_{0,crit}$).
4.  **Determine $R_{fc}$:** Calculate the critical field resistance using the values at the point of tangency:
    $R_{fc} = \frac{E_{0,crit}}{I_{f,crit}}$
5.  **Alternative Method (Plotting $R_{sh}$ vs. $I_f$):** Some lab manuals might suggest plotting $R_{sh}$ (calculated as $E_0/I_f$) against $I_f$. The critical field resistance is where this calculated $R_{sh}$ is equal to the actual field resistance of the generator. However, the graphical method of drawing the tangent line directly from the OCC curve is more commonly used and conceptually clearer for understanding the *maximum* resistance.

---

### 6. Factors Affecting Critical Field Resistance

The critical field resistance is not a fixed value for a generator; it depends on other operating conditions, primarily:

1.  **Speed of Rotation:**
    *   **Higher Speed:** The OCC curve shifts upwards. This means a steeper field resistance line (higher $R_{sh}$) can be tangent to the curve. Therefore, **higher speed leads to a higher critical field resistance ($R_{fc}$)**. The generator can self-excite even with a larger field circuit resistance.
    *   **Lower Speed:** The OCC curve shifts downwards. This means a shallower field resistance line (lower $R_{sh}$) will be tangent to the curve. Therefore, **lower speed leads to a lower critical field resistance ($R_{fc}$)**. If the speed drops too low, $R_{fc}$ might become less than the actual field resistance, and the generator will not self-excite.

2.  **Residual Magnetism:**
    *   **Stronger Residual Magnetism:** The initial EMF is higher, and the OCC curve will be slightly higher overall. This generally leads to a slightly higher critical field resistance.
    *   **Weaker Residual Magnetism:** The initial EMF is lower, and the OCC curve will be lower. This can lead to a lower critical field resistance. If residual magnetism is too low, the generator might not self-excite at all, even with a very low field resistance.

**Important Point to Remember:** The critical field resistance is the *resistance of the field winding itself plus any external resistance added in series with it*. In this experiment, we are essentially finding the maximum allowable external resistance (or the total resistance of the field circuit including the winding) that allows self-excitation.

---

### 7. Implications of Critical Field Resistance

*   **Generator Design:** The critical field resistance is an important parameter in the design of DC shunt generators. The actual shunt field winding resistance is always chosen to be significantly *less* than the critical field resistance to ensure reliable self-excitation under normal operating conditions.
*   **Troubleshooting:** If a DC shunt generator fails to build up voltage, one of the first checks is the field circuit resistance. If the resistance is too high (due to a faulty rheostat or internal winding issue), it might exceed the critical field resistance for the given speed, preventing self-excitation.
*   **Speed Limits:** The critical field resistance also implies a limit on how much the speed of a self-excited shunt generator can be reduced before it stops building voltage.

---

### 8. Practice Questions and Answers

**Question 1:** Define the critical field resistance of a DC shunt generator.
**Answer:** The critical field resistance is the maximum value of the shunt field circuit resistance at which a DC shunt generator will self-excite at a given speed.

**Question 2:** How does the speed of the prime mover affect the critical field resistance?
**Answer:** An increase in the speed of the prime mover increases the critical field resistance, and a decrease in speed decreases the critical field resistance.

**Question 3:** If the actual resistance of the shunt field winding is $R_{sh}$, for the generator to self-excite, what condition must be met with respect to the critical field resistance ($R_{fc}$)?
**Answer:** The actual field resistance must be less than the critical field resistance ($R_{sh} < R_{fc}$).

**Question 4:** Sketch the typical Open Circuit Characteristic (OCC) curve of a DC shunt generator and show how to graphically determine the critical field resistance.
**Answer:**
*   **Sketch:** A curve starting from the origin, rising almost linearly, and then bending over due to saturation. The y-axis is $E_0$ (Generated EMF), and the x-axis is $I_f$ (Field Current).
*   **Graphical Method:** Draw a straight line from the origin that is tangent to the OCC curve. The slope of this tangent line ($E_{0,crit} / I_{f,crit}$) gives the critical field resistance.

**Question 5:** What is the primary factor that allows a DC shunt generator to self-excite?
**Answer:** Residual magnetism in the field poles.

---

### 9. Important Points to Remember

*   **Self-excitation** relies on **residual magnetism**.
*   The **OCC curve** shows $E_0$ vs. $I_f$ at no load and constant speed.
*   **Saturation** causes the OCC curve to bend over.
*   The **critical field resistance ($R_{fc}$)** is the resistance of the field circuit that is tangent to the OCC curve from the origin.
*   For self-excitation, **actual field resistance ($R_{sh}$) < critical field resistance ($R_{fc}$)**.
*   **Higher speed** leads to a **higher $R_{fc}$**.
*   **Lower speed** leads to a **lower $R_{fc}$**.
*   The actual field winding resistance is always designed to be significantly *less* than the critical field resistance.

---

### 10. Alignment with Course Outcomes

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**
    *   This topic directly addresses the "no-load tests" aspect by studying the Open Circuit Characteristic. Analyzing the OCC and determining $R_{fc}$ is a key step in understanding the generator's performance and its ability to generate voltage under excitation. This involves understanding the underlying physical principles and applying them.

---
This set of study notes provides a comprehensive overview of determining the critical field resistance of a DC shunt generator, covering its theoretical basis, experimental procedure, data analysis, and practical implications, while aligning with the specified course outcomes.
