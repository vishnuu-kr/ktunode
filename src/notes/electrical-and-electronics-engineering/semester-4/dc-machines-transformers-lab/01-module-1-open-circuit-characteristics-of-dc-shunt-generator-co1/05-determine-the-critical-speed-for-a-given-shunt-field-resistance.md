---
title: "Determine the critical speed for a given shunt field resistance"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 1: Open circuit characteristics of DC shunt generator (CO1)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360a6"
status: "completed"
scrapedAt: "2026-05-23T16:15:08.718Z"
---
# DC Machines & Transformers Lab: Module 1 - Open Circuit Characteristics of DC Shunt Generator

## Topic: Determine the Critical Speed for a Given Shunt Field Resistance

### Course Outcome Alignment:
This topic directly addresses **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**. Specifically, it focuses on understanding the operational limits and fundamental principles of a DC shunt generator.

### Learning Outcomes for this Topic:
*   Understand the concept of critical speed in a DC shunt generator.
*   Identify the factors affecting critical speed.
*   Perform experimental procedure to determine the critical speed.
*   Analyze the results and plot the relevant characteristics.
*   Relate critical speed to the open-circuit characteristic (OCC) of a DC shunt generator.

---

## 1. Introduction to DC Shunt Generators

A DC shunt generator is a DC generator where the field winding is connected in parallel (shunt) with the armature winding. It generates a voltage when driven at a certain speed and is excited by its own field.

**Key Concepts:**
*   **EMF Equation:** $E_a = \frac{PNZ}{60A}$, where $E_a$ is the generated EMF, $P$ is the number of poles, $N$ is the speed in RPM, $Z$ is the total number of conductors, and $A$ is the number of parallel paths.
*   **Armature Reaction:** The magnetic effect of the armature current on the main field flux.
*   **Field Flux ($\phi$):** In a shunt generator, the field flux is produced by the shunt field current ($I_{sh}$) flowing through the shunt field winding.
*   **Open Circuit Characteristic (OCC):** This curve plots the generated EMF ($E_a$) against the field current ($I_{f}$) when the armature is open-circuited and the generator is driven at a constant rated speed.

---

## 2. Understanding Critical Speed

The **critical speed** of a DC shunt generator is the minimum speed at which it can generate voltage when connected to its self-excitation circuit, assuming a specific value of shunt field resistance. If the generator is driven below its critical speed, it will not be able to build up voltage.

**Key Concepts & Definitions:**
*   **Self-Excitation:** A DC shunt generator builds up its voltage due to residual magnetism in the field poles. This residual magnetism produces a small EMF, which causes a small field current to flow. This field current then strengthens the magnetic field, leading to a higher EMF, and so on, until a stable operating point is reached.
*   **Shunt Field Resistance Line:** On the Open Circuit Characteristic (OCC) graph, the shunt field resistance line represents the relationship between generated EMF and field current for a given shunt field resistance. The voltage drop across the field resistance ($V_{sh} = I_f \cdot R_{sh}$) is equal to the generated EMF ($E_a$) when the armature is open and the field winding is connected directly to the armature terminals. Therefore, $E_a = I_f \cdot R_{sh}$. This equation represents a straight line passing through the origin with a slope equal to $R_{sh}$.

---

## 3. Factors Affecting Critical Speed

The critical speed of a DC shunt generator is influenced by several factors:

*   **Shunt Field Resistance ($R_{sh}$):**
    *   **Higher $R_{sh}$ leads to a higher critical speed.** A higher resistance means a steeper field resistance line. For self-excitation to occur, the field resistance line must intersect the OCC curve at a point where the generated EMF is significant. A steeper line (higher $R_{sh}$) will intersect the OCC at a higher EMF, which corresponds to a higher speed.
    *   **Lower $R_{sh}$ leads to a lower critical speed.** A lower resistance means a shallower field resistance line. It will intersect the OCC at a lower EMF, which can be achieved at a lower speed.

*   **Residual Magnetism:** The presence of residual magnetism is essential for self-excitation. If residual magnetism is too low, the initial EMF will be very small, and the generator may not build up voltage even at rated speed.

*   **Shunt Field Winding Characteristics:** The magnetic properties of the field poles influence the shape of the OCC. If the magnetic circuit is unsaturated, the OCC will be more linear. Saturation of the magnetic poles causes the OCC to curve over at higher EMF values.

---

## 4. Experimental Determination of Critical Speed

The critical speed can be determined experimentally by varying the speed of the generator and observing the generated voltage for a fixed shunt field resistance.

**Princ of Operation:**
For self-excitation, the shunt field resistance line must intersect the OCC curve at a point of significant voltage. If the generator is driven at a speed $N$, the generated EMF for a given field current $I_f$ is given by the OCC curve at that speed. The terminal voltage (which is equal to the generated EMF in open circuit) is also related to the field current by $V_{terminal} = I_f \cdot R_{sh}$. For voltage build-up, the intersection of the OCC (at speed $N$) and the field resistance line must occur at a non-zero EMF.

**Critical Speed Condition:**
The critical speed is the minimum speed at which the OCC curve at that speed intersects the shunt field resistance line at a voltage higher than the voltage produced due to residual magnetism alone. In other words, the shunt field resistance line must intersect the OCC at a point where the slope of the OCC is greater than or equal to the slope of the field resistance line.

**Experimental Setup:**
*   DC Shunt Generator (driven by a DC motor or prime mover)
*   DC Shunt Motor (as a prime mover)
*   Rheostats (for controlling armature voltage of driving motor and for shunt field)
*   Voltmeter (to measure armature voltage)
*   Ammeter (to measure armature current and field current)
*   Tachometer (to measure the speed of the generator shaft)
*   Connecting wires

**Procedure:**
1.  **Ensure Residual Magnetism:** Ensure that the DC shunt generator has residual magnetism. If not, connect it to a DC source and excite it briefly with the correct polarity. Then disconnect the external source.
2.  **Connect the Circuit:** Connect the DC shunt generator as follows:
    *   Armature terminals are open-circuited.
    *   Shunt field winding is connected across the armature terminals through a rheostat.
    *   A voltmeter is connected across the armature terminals to measure the generated EMF.
    *   An ammeter is connected in series with the shunt field winding to measure the field current.
    *   The generator is driven by a DC motor.
3.  **Set the Shunt Field Resistance:** Adjust the shunt field rheostat to a specific, fixed resistance value ($R_{sh1}$). Note this value.
4.  **Vary the Speed:** Start the driving motor and adjust its speed to the lowest possible stable speed.
5.  **Observe and Record:**
    *   Gradually increase the speed of the generator.
    *   For each increase in speed, observe the voltmeter reading across the armature terminals.
    *   When the voltmeter reading starts to rise significantly (indicating voltage build-up), record the speed from the tachometer and the corresponding field current and terminal voltage.
    *   Continue increasing the speed and record the generated EMF for different speeds, keeping the shunt field resistance constant at $R_{sh1}$.
6.  **Repeat for Different Field Resistances:** Repeat steps 3-5 for different fixed values of shunt field resistance ($R_{sh2}, R_{sh3}$, etc.).
7.  **Determine Critical Speed for Each Resistance:** For each fixed $R_{sh}$, the critical speed ($N_{crit}$) is the lowest speed at which the generator can build up voltage to a noticeable level. You will observe that below a certain speed, no voltage is generated, regardless of the field current. As you increase the speed, the generated voltage will start to increase. The speed at which this build-up begins is the critical speed for that particular shunt field resistance.

**Alternative Method using OCC:**
This method involves obtaining the OCC at various speeds.

1.  **Obtain OCC at Rated Speed:** Drive the generator at its rated speed ($N_{rated}$). Keep the armature open. Vary the shunt field rheostat to change the field current ($I_f$) from zero upwards. Record the generated EMF ($E_a$) from the voltmeter for each field current. This gives the OCC at $N_{rated}$.
2.  **Obtain OCC at Lower Speeds:** Reduce the speed of the generator by adjusting the driving motor's speed control. Obtain the OCC curve at this new, lower speed. Repeat this for several lower speeds.
3.  **Plot Field Resistance Lines:** For the given shunt field resistance ($R_{sh}$), draw the field resistance line ($E_a = I_f \cdot R_{sh}$) on the OCC graph. This line will pass through the origin with a slope of $1/R_{sh}$.
4.  **Determine Critical Speed:**
    *   Identify the shunt field resistance line corresponding to the desired $R_{sh}$.
    *   Locate the point on the OCC curve (at $N_{rated}$) where the generated voltage is such that if you were to decrease the speed, the OCC curve at that lower speed would *just touch* or *intersect* the field resistance line at a non-zero voltage.
    *   Alternatively, and more practically, plot the OCC curves for *different speeds*. For a fixed $R_{sh}$, find the lowest speed at which the corresponding OCC curve intersects the field resistance line at a voltage greater than that produced by residual magnetism alone.
    *   **A direct method:** Plot the OCC at rated speed. Then, for a specific $R_{sh}$, draw the resistance line. Find the point of intersection. The speed at which the OCC curve *at that same point* would be tangent to the resistance line (or just above it) is the critical speed. This requires careful interpretation.

**Simpler Practical Approach for Determining Critical Speed for a given $R_{sh}$:**
1.  Set the shunt field rheostat to a fixed resistance $R_{sh}$.
2.  Start the generator at a very low speed.
3.  Gradually increase the speed.
4.  As the speed increases, the generated voltage will remain zero or very low until a certain speed is reached.
5.  At this specific speed, the generated voltage will start to build up. This speed is the critical speed for the given $R_{sh}$.
6.  Record this speed using the tachometer.

---

## 5. Analyzing Results and Plotting Characteristics

**Data Table Example:**

**Given Shunt Field Resistance ($R_{sh1}$):** [Value] $\Omega$

| Speed (N) in RPM | Field Current ($I_f$) in A | Generated EMF ($E_a$) in V |
| :--------------- | :------------------------- | :----------------------- |
| 400              | 0.5                        | 0 (No build-up)          |
| 500              | 0.5                        | 0 (No build-up)          |
| 600              | 0.5                        | 5                        |
| 700              | 0.6                        | 30                       |
| 800              | 0.7                        | 60                       |
| 900              | 0.8                        | 90                       |
| 1000 (Rated)     | 0.9                        | 120                      |

From the above table, for $R_{sh1}$, the critical speed is approximately 600 RPM, as this is the first speed where significant voltage build-up is observed with the field current at 0.5A (corresponding to $R_{sh1}$).

**Graph:**

*   **Plot the OCC curve:** Typically, you would plot $E_a$ (Y-axis) vs. $I_f$ (X-axis) for the rated speed.
*   **Plot the Field Resistance Line:** On the same graph, draw the line $E_a = I_f \cdot R_{sh1}$. This line will have a slope $1/R_{sh1}$ and pass through the origin.
*   **Relating to Critical Speed:** The critical speed is related to the slope of the OCC. If you had OCCs at different speeds, you could plot them. The critical speed is the speed at which the OCC curve becomes tangent to the $R_{sh}$ line. More practically, for a given $R_{sh}$, the critical speed is the lowest speed where the OCC *at that speed* intersects the $R_{sh}$ line at a voltage greater than that produced by residual magnetism alone.

**Key Relationship:**
The intersection of the OCC and the field resistance line ($E_a = I_f \cdot R_{sh}$) indicates the operating point of the self-excited shunt generator. For voltage build-up, this intersection must occur at a voltage above the knee of the OCC curve, which is determined by residual magnetism.

**Visualizing Critical Speed:**
Imagine plotting multiple OCC curves, each for a different speed ($N_1 > N_2 > N_3...$). As speed decreases, the OCC curves shift downwards. The critical speed ($N_{crit}$) for a given $R_{sh}$ is the speed at which the OCC curve is tangent to the field resistance line. If the speed drops below $N_{crit}$, the field resistance line will lie above the OCC, and no voltage will build up.

---

## 6. Key Points to Remember

*   **Residual Magnetism is Crucial:** Without residual magnetism, the generator cannot start the self-excitation process.
*   **Critical Speed is Dependent on $R_{sh}$:** Higher $R_{sh}$ requires a higher speed to build up voltage.
*   **Voltage Build-up Condition:** The field resistance line must intersect the OCC at a voltage significantly higher than that generated by residual magnetism alone.
*   **OCC Shape:** The curvature of the OCC (due to magnetic saturation) plays a vital role. If the magnetic circuit saturates early, a lower speed might be sufficient.
*   **Practical Measurement:** The most straightforward way to determine critical speed for a given $R_{sh}$ is to gradually increase the speed from zero and note the speed at which voltage build-up begins.
*   **Generator Will Not Build Up Voltage Below Critical Speed:** This is the fundamental principle being demonstrated.

---
