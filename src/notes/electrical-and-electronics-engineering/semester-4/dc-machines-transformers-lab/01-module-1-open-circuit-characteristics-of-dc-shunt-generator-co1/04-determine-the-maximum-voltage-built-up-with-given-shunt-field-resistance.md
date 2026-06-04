---
title: "Determine the maximum voltage built up with given shunt field resistance"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 1: Open circuit characteristics of DC shunt generator (CO1)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360a5"
status: "completed"
scrapedAt: "2026-05-23T16:15:07.942Z"
---
# DC MACHINES & TRANSFORMERS LAB: Module 1 - Open Circuit Characteristics of DC Shunt Generator

## Topic: Determine the Maximum Voltage Built Up with Given Shunt Field Resistance

**Course Outcome Addressed:** CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)

---

### 1. Introduction to DC Shunt Generators

*   **Definition:** A DC shunt generator is a DC generator where the field winding is connected in parallel (shunt) with the armature winding.
*   **Princ of Operation:** Based on Faraday's law of electromagnetic induction. When the armature rotates in a magnetic field produced by the field windings, an electromotive force (EMF) is induced in the armature conductors. In a DC generator, this induced EMF is then converted into direct current by the commutator.
*   **Key Components:**
    *   **Armature:** Rotating part containing windings where EMF is induced.
    *   **Field Winding:** Stationary part that creates the magnetic field. In a shunt generator, it's connected in parallel with the armature.
    *   **Commutator:** Mechanical rectifier that converts the AC induced EMF into DC output.
    *   **Brushes:** Conductors that collect the current from the commutator.
*   **EMF Equation:** $E_a = \frac{\phi ZN}{60A}$
    *   $E_a$: Generated EMF (Volts)
    *   $\phi$: Flux per pole (Webers)
    *   $Z$: Total number of armature conductors
    *   $N$: Speed of rotation (RPM)
    *   $A$: Number of parallel paths in the armature winding

---

### 2. Open Circuit Characteristics (OCC) of a DC Shunt Generator

*   **Definition:** The Open Circuit Characteristic (OCC) curve, also known as the No-Load Saturation Curve, plots the generated EMF ($E_a$) against the field current ($I_f$) at a constant speed.
*   **Purpose:**
    *   To understand the magnetic behavior of the generator.
    *   To determine the critical field resistance.
    *   To predict the behavior of the generator under different field resistances.
    *   To demonstrate the phenomenon of residual magnetism.
*   **Factors Affecting $E_a$:**
    *   Field current ($I_f$): Directly proportional to flux ($\phi$), and thus to $E_a$ (at constant speed).
    *   Speed of rotation ($N$): Directly proportional to $E_a$.
    *   Field flux ($\phi$): Proportional to $E_a$.

---

### 3. Understanding Voltage Build-Up in a DC Shunt Generator

*   **Residual Magnetism:** Even when the field winding is not energized, the iron core of the pole possesses a small amount of residual magnetism. This is crucial for the initial voltage build-up.
*   **Process of Voltage Build-Up:**
    1.  When the armature is rotated at rated speed in the presence of residual magnetism, a small EMF is induced.
    2.  This small EMF circulates a small field current ($I_f$) through the shunt field winding (since it's connected across the armature terminals and the field resistance is greater than zero).
    3.  This field current creates a magnetic field, which increases the flux.
    4.  The increased flux leads to a higher induced EMF ($E_a$).
    5.  The increased EMF drives a larger field current, further increasing the flux and EMF.
    6.  This process continues iteratively until the generated EMF reaches a steady value where the generated EMF is just sufficient to drive the field current required to maintain that EMF. This occurs when the field resistance line intersects the OCC curve.

---

### 4. The Role of Shunt Field Resistance ($R_{sh}$)

*   The shunt field winding has a certain resistance ($R_{sh}$).
*   The relationship between generated EMF ($E_a$), field current ($I_f$), and shunt field resistance ($R_{sh}$) is given by Ohm's Law applied to the field circuit: $E_a = I_f \cdot R_{sh}$.
*   This equation represents a straight line passing through the origin with a slope of $R_{sh}$. This line is called the **Field Resistance Line**.

---

### 5. Determining the Maximum Voltage Built Up with Given Shunt Field Resistance

The maximum voltage that can be built up by a DC shunt generator with a given shunt field resistance is determined by the point of intersection of the **Open Circuit Characteristic (OCC) curve** and the **Field Resistance Line**.

*   **OCC Curve:** Represents the relationship between the generated EMF ($E_a$) and the field current ($I_f$) due to the magnetic properties of the machine. It's non-linear due to magnetic saturation.
*   **Field Resistance Line:** Represents the relationship $E_a = I_f \cdot R_{sh}$ for a given shunt field resistance. It's a straight line originating from the origin with a slope equal to $R_{sh}$.

**Graphical Representation:**

*   Plot the OCC curve with $I_f$ on the x-axis and $E_a$ on the y-axis.
*   Draw the field resistance line corresponding to the given $R_{sh}$. The slope of this line is $1/R_{sh}$ if $E_a$ is on the x-axis and $I_f$ is on the y-axis, or the slope is $R_{sh}$ if $I_f$ is on the x-axis and $E_a$ is on the y-axis (as is standard for OCC).
*   **Intersection Point:** The point where the OCC curve and the field resistance line intersect represents the steady-state operating point of the generator. The voltage at this intersection point is the maximum voltage that will be built up by the generator with that particular shunt field resistance.

---

### 6. Critical Field Resistance ($R_{crit}$)

*   **Definition:** The critical field resistance is the maximum value of shunt field resistance that will allow the generator to build up voltage.
*   **Relationship with Maximum Voltage:** The critical field resistance is the resistance of the field winding that is tangent to the initial, linear portion of the OCC curve. At this resistance, the voltage built up is the maximum possible for that speed.
*   **Significance:**
    *   If the actual shunt field resistance ($R_{sh}$) is less than $R_{crit}$, the generator will build up voltage to a certain level. The higher the $R_{sh}$ (but still less than $R_{crit}$), the higher the voltage built up, as the field resistance line will intersect the OCC at a higher EMF value.
    *   If the actual shunt field resistance ($R_{sh}$) is greater than $R_{crit}$, the field resistance line will lie above the OCC curve for all values of $I_f$ (except at the origin). In this case, the voltage will not build up to any significant value, and the generator will not produce output voltage.

---

### 7. Procedure to Determine Maximum Voltage Built Up

The experiment involves obtaining the OCC curve and then plotting the field resistance line.

**Experimental Setup:**

*   DC Shunt Generator
*   DC Motor (to drive the generator)
*   Rheostat for field control (variable resistance)
*   Rheostat for armature control (optional, for maintaining constant speed)
*   Voltmeter (across armature terminals)
*   Ammeter (in the field circuit)
*   Connecting wires
*   Load (optional, if testing under load conditions, but for OCC it's no-load)

**Steps:**

1.  **Connect the Circuit:** Connect the DC motor and DC shunt generator as per the standard circuit diagram. Ensure the field winding of the generator is connected in series with a field rheostat and in parallel with the armature.
2.  **Ensure No Residual Magnetism (Optional but good practice):** Briefly connect the shunt field winding across a DC supply in the opposite direction to demagnetize any residual magnetism. Then, disconnect the supply.
3.  **Set Constant Speed:** Start the DC motor and adjust its speed to the desired constant RPM (e.g., rated speed). Use an armature rheostat if necessary to maintain a constant speed throughout the experiment. Record this speed.
4.  **Obtain OCC:**
    *   With the field rheostat set to its maximum resistance (minimum field current), start the generator by running the prime mover (DC motor) at the desired constant speed.
    *   Slowly decrease the field rheostat resistance to increase the field current ($I_f$).
    *   For each step of increasing field current, record the corresponding generated EMF ($E_a$) from the voltmeter.
    *   Continue this process until the generated EMF reaches its maximum value or the field current reaches its rated limit.
    *   **Important:** Take readings by decreasing the field current from maximum to minimum as well to check for hysteresis (though for OCC, this is less critical than for load characteristics).
5.  **Record Shunt Field Resistance ($R_{sh}$):** Measure the resistance of the shunt field winding using an ohmmeter. Alternatively, it can be calculated using Ohm's law if a known field current and the voltage across the field winding (which is the generated EMF in this case) are measured simultaneously at a specific point.
6.  **Plot the OCC Curve:** Plot the obtained values of $E_a$ (y-axis) against $I_f$ (x-axis) on a graph paper.
7.  **Draw the Field Resistance Line:** Draw a straight line passing through the origin on the same graph paper. The slope of this line should correspond to the measured shunt field resistance ($R_{sh}$).
    *   To plot the line, choose a suitable field current value (e.g., the maximum $I_f$ recorded) and calculate the corresponding $E_a$ using $E_a = I_f \cdot R_{sh}$. Plot this point $(I_f, E_a)$ and draw a line from the origin through this point.
8.  **Determine Maximum Voltage:** Identify the point of intersection between the OCC curve and the drawn field resistance line. The y-coordinate of this intersection point represents the maximum voltage that can be built up by the generator with the given shunt field resistance.

---

### 8. Pre-Lab Calculations and Considerations

*   **Estimate $R_{sh}$:** If the exact value is not known, you can estimate it from the generator's nameplate or datasheet.
*   **Select Suitable Range for Rheostats:** Ensure the field rheostat has a sufficient range to control the field current from a very low value (limited by residual magnetism) to the rated value.
*   **Speed Control:** The prime mover's speed must be kept constant. If a DC motor is used as the prime mover, ensure its supply voltage is stable.

---

### 9. Practice Questions and Answers

**Q1:** What is the primary reason a DC shunt generator can build up voltage?
**A1:** Residual magnetism in the pole pieces.

**Q2:** If the actual shunt field resistance is made greater than the critical field resistance, what will happen to the generated voltage?
**A2:** The generator will not build up any significant voltage.

**Q3:** The OCC curve is a plot of generated EMF ($E_a$) versus which parameter?
**A3:** Field current ($I_f$).

**Q4:** How is the Field Resistance Line characterized graphically?
**A4:** It is a straight line passing through the origin with a slope equal to the shunt field resistance ($R_{sh}$).

**Q5:** At the point of intersection of the OCC and the field resistance line, what condition is met?
**A5:** The generated EMF is equal to the voltage drop across the shunt field resistance ($E_a = I_f \cdot R_{sh}$).

**Q6:** A DC shunt generator is found to build up only a very small voltage. What are the possible reasons?
**A6:**
    *   Low speed.
    *   Weak residual magnetism.
    *   Shunt field winding resistance is too high (greater than critical field resistance).
    *   Shunt field winding is incorrectly connected (e.g., series instead of shunt).
    *   Open circuit in the field winding.

**Q7:** You are given a DC shunt generator and told its shunt field resistance is $R_{sh} = 150 \Omega$. You conduct the OCC test at a constant speed and obtain the OCC curve. You then draw a field resistance line with a slope of 150. If this line intersects the OCC curve at a point where $I_f = 0.5$ A, what is the maximum voltage built up?
**A7:** Maximum Voltage Built Up = $I_f \cdot R_{sh} = 0.5 \text{ A} \cdot 150 \Omega = 75 \text{ V}$.

---

### 10. Important Points to Remember

*   **Constant Speed is Crucial:** The OCC is valid only for a specific constant speed. Any variation in speed will alter the OCC curve.
*   **Residual Magnetism is Essential:** Without it, no voltage builds up. If it's lost, the generator needs to be "flashed" (applying a DC voltage to the field in the correct direction) to re-establish it.
*   **Critical Field Resistance Limit:** The actual shunt field resistance must be less than the critical field resistance for voltage build-up.
*   **Saturation:** The OCC curve becomes non-linear at higher field currents due to magnetic saturation of the iron core.
*   **Intersection Point is Key:** The maximum voltage built up is directly read from the y-axis at the intersection of the OCC and the field resistance line.

---

### 11. Alignment with Course Outcomes

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**
    *   This topic directly addresses the "no-load tests" aspect of CO1. By conducting the OCC test, students learn to analyze the fundamental performance characteristic of a DC shunt generator under no-load conditions. They gain knowledge about how EMF is generated and how external parameters (like field resistance) affect it, which is essential for overall performance analysis.

---
