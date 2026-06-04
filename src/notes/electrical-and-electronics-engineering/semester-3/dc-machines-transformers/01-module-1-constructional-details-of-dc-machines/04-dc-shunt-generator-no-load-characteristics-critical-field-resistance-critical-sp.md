---
title: "DC shunt generator - no-load characteristics – critical field resistance, critical speed, voltage build-up - load characteristics – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 1: Constructional details of dc machines "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b20"
status: "completed"
scrapedAt: "2026-05-23T16:12:15.763Z"
---
# DC MACHINES & TRANSFORMERS - Module 1: Constructional Details of DC Machines

## Topic: DC Shunt Generator - No-Load and Load Characteristics, Voltage Build-up, Critical Field Resistance and Critical Speed

---

### **1. Introduction to DC Shunt Generators**

*   **Definition:** A DC shunt generator is a DC generator in which the field winding is connected in parallel (shunt) with the armature winding.
*   **Purpose:** To produce a DC voltage.
*   **Fundamental Principle:** Electromagnetic induction. When a conductor moves in a magnetic field or a magnetic field changes around a conductor, an electromotive force (EMF) is induced. In a DC generator, rotation of the armature conductors in a stationary magnetic field induces an EMF.
*   **Key Components (Referencing CO1 & Textbooks like Bimbhra, Kothari & Nagrath):**
    *   **Armature:** Rotating part containing coils where EMF is induced.
    *   **Field Winding:** Stationery winding that produces the magnetic field. In a shunt generator, it has a large number of turns of thin wire and is connected in parallel with the armature.
    *   **Commutator:** A mechanical rectifier that converts the induced AC EMF into pulsating DC EMF.
    *   **Brushes:** Stationary contacts that collect the current from the commutator.
    *   **Yoke/Frame:** Outer casing providing mechanical support and magnetic path for the field flux.

---

### **2. Voltage Build-up in a DC Shunt Generator**

*   **Requirement:** For a DC shunt generator to build up voltage, the following conditions must be met:
    1.  **Presence of Residual Magnetism:** The field poles must retain some residual magnetism from previous operation. This residual magnetism produces a small initial EMF.
    2.  **Correct Field Winding Connection:** The field winding must be connected in such a way that the magnetic field produced by it aids the residual magnetism.
    3.  **Sufficiently High Speed:** The armature must be driven at a speed above a certain minimum value (critical speed).
    4.  **Field Resistance Less Than Critical Field Resistance:** The resistance of the field circuit must be less than the critical field resistance.

*   **Process of Voltage Build-up:**
    1.  When the armature is rotated at a speed $N$ in the presence of residual magnetism, a small EMF, $E_{residual}$, is induced.
    2.  This $E_{residual}$ causes a small current to flow through the shunt field winding (since it's connected across the armature).
    3.  This field current produces a magnetic flux.
    4.  This flux, added to the residual flux, increases the magnetic field strength.
    5.  The increased magnetic field strength leads to a higher induced EMF, $E'$, in the armature.
    6.  This higher EMF causes a larger field current, which further strengthens the flux, and so on.
    7.  This process continues iteratively until the induced EMF (and hence the terminal voltage) stabilizes at a certain value.
    8.  The voltage build-up stops when the field current, and consequently the magnetic flux, reaches a point where the magnetic circuit becomes saturated. At this point, further increases in field current produce negligible increases in flux, and hence negligible increases in induced EMF.

---

### **3. No-Load Characteristics of a DC Shunt Generator (Open Circuit Characteristics - OCC)**

*   **Definition:** The relationship between the induced EMF ($E_0$) and the field current ($I_f$) when the armature is driven at a constant rated speed and the armature terminals are open-circuited (no load).
*   **Curve:** Typically plotted as $E_0$ (y-axis) vs. $I_f$ (x-axis).
*   **Shape of the Curve:**
    *   **Initial Stage:** Starts from the origin, showing a linear relationship between $E_0$ and $I_f$. This is because the magnetic circuit is unsaturated, and the flux is directly proportional to the field current.
    *   **Saturation Stage:** As $I_f$ increases, the magnetic field poles start to saturate. The rate of increase of flux with field current decreases, resulting in a non-linear, drooping curve.
*   **Significance (Referencing CO1 & Textbooks like Bimbhra, Kothari & Nagrath):**
    *   This curve represents the magnetic characteristic of the machine.
    *   It's crucial for understanding the voltage build-up process and determining critical parameters.
    *   It is used to predict the behavior of the generator under load conditions.

---

### **4. Critical Field Resistance ($R_{sh, crit}$)**

*   **Definition:** The maximum value of the shunt field circuit resistance for which the shunt generator will build up voltage at a given speed.
*   **Determination from OCC:**
    *   Draw a straight line from the origin of the OCC such that it is tangent to the OCC at some point.
    *   The slope of this tangent line represents $R_{sh, crit}$.
    *   **Mathematical Explanation:** At any point on the OCC, the induced EMF is $E_0$ and the field current is $I_f$. The field circuit resistance is $R_{sh}$. The voltage available across the field winding is $E_0$. Therefore, $E_0 = I_f R_{sh}$. This equation represents a straight line passing through the origin with a slope of $R_{sh}$. For voltage to build up, the $E_0 - I_f$ characteristic (the OCC) must intersect this line. The limiting case is when the line is tangent to the OCC. Any field resistance greater than this tangent slope will not allow the generator to build up voltage.
*   **Effect of Field Resistance:**
    *   If $R_{sh} < R_{sh, crit}$: Voltage builds up.
    *   If $R_{sh} = R_{sh, crit}$: Voltage builds up to a very low value or just barely builds up.
    *   If $R_{sh} > R_{sh, crit}$: Voltage does not build up (due to insufficient field flux).

---

### **5. Critical Speed ($N_{crit}$)**

*   **Definition:** The minimum speed at which the shunt generator will build up voltage for a given value of shunt field resistance ($R_{sh}$).
*   **Determination from OCC and Field Resistance Line:**
    *   The OCC is obtained at a specific rated speed ($N$). Let's call this the "reference OCC."
    *   The relationship $E_0 = I_f R_{sh}$ is a straight line with slope $R_{sh}$.
    *   If the $R_{sh}$ line intersects the OCC, voltage builds up at that speed.
    *   To find the critical speed, we need to find the speed at which the $R_{sh}$ line is tangent to the OCC. This tangent point represents the maximum field current that can be sustained.
    *   **Relationship between Speed and OCC:** The OCC is directly proportional to the speed. If the speed is doubled, the EMF induced for the same field current will also be doubled. So, we can plot multiple OCCs for different speeds, or we can scale a single OCC.
    *   **Practical Method:**
        1.  Obtain the OCC at a rated speed $N$.
        2.  Draw the field resistance line ($E_0 = I_f R_{sh}$) on the same graph.
        3.  If the line intersects the OCC, voltage builds up.
        4.  To find $N_{crit}$, determine the point of tangency on the OCC. Let this point be $(I_{f,max}, E_{0,max})$.
        5.  The slope of the tangent line at this point is $R_{sh, crit} = E_{0,max} / I_{f,max}$.
        6.  Now, with the given $R_{sh}$ (which is less than $R_{sh, crit}$), we need to find the speed $N_{crit}$ at which the field resistance line ($E_0 = I_f R_{sh}$) is tangent to the *scaled* OCC.
        7.  Alternatively, and more commonly: For a given $R_{sh}$, find the point of intersection on the OCC. The voltage $E_0$ and field current $I_f$ at this intersection are produced at the rated speed $N$. If we have a different speed $N'$, the OCC will be scaled. The critical speed $N_{crit}$ is the speed at which the field resistance line becomes tangent to the OCC.
        8.  **Key Insight:** $E_0 \propto N$. If the tangent point on the OCC (at speed $N$) is $(I_{f,crit}, E_{0,crit})$, then $R_{sh, crit} = E_{0,crit} / I_{f,crit}$. For a speed $N_{crit}$, the OCC will be such that the line with slope $R_{sh}$ is tangent to it. The voltage at this tangent point will be $E_{0,crit}'$, and the field current will be $I_{f,crit}'$. The ratio of speeds is related to the ratio of EMFs: $N_{crit} / N = E_{0,crit}' / E_{0,crit}$.
*   **Effect of Critical Speed:**
    *   If the generator is driven at a speed $> N_{crit}$: Voltage builds up.
    *   If the generator is driven at a speed $< N_{crit}$: Voltage does not build up.
    *   If the generator is driven at a speed $= N_{crit}$: Voltage builds up to a very low value.

---

### **6. Load Characteristics of a DC Shunt Generator**

*   **Definition:** The relationship between the terminal voltage ($V$) and the armature current ($I_a$) or the load current ($I_L$) when the generator is operating under load conditions.
*   **Curve:** Typically plotted as $V$ (y-axis) vs. $I_a$ or $I_L$ (x-axis).
*   **Factors Affecting Load Characteristics:**
    *   **Armature Reaction:** The magnetic field produced by the armature currents distorts and weakens the main magnetic field, reducing the induced EMF.
    *   **Armature Resistance Drop:** There is a voltage drop ($I_a R_a$) across the armature resistance.
    *   **Commutation:** Due to armature reaction and the inductance of the armature coils, sparking may occur at the brushes, further affecting the voltage.
*   **Shape of the Curve:**
    *   The terminal voltage decreases as the load current increases.
    *   The voltage drops more steeply at higher load currents due to the combined effects of armature resistance drop and armature reaction.
    *   At very heavy loads, the voltage may drop to zero or even reverse if the armature reaction becomes very strong and the field is significantly weakened.
*   **Significance (Referencing CO2 & Textbooks like Bimbhra, Kothari & Nagrath, Gupta):**
    *   Indicates how the terminal voltage varies with the load.
    *   Crucial for understanding the generator's regulation.
    *   Helps in selecting a generator for a particular application.

---

### **7. Numerical Problems and Examples**

**Example 1: Voltage Build-up and Critical Resistance**

A DC shunt generator has the following open-circuit characteristic at 1200 rpm:

| Field Current (A) | Induced EMF $E_0$ (V) |
| :---------------- | :-------------------- |
| 0                 | 0                     |
| 1                 | 90                    |
| 2                 | 170                   |
| 3                 | 230                   |
| 4                 | 275                   |
| 5                 | 305                   |
| 6                 | 325                   |

The generator is connected as a shunt generator with a field winding resistance of $R_{sh} = 50 \Omega$.

**(a) Will the generator build up voltage?**
**(b) If not, what is the maximum field resistance for voltage to build up at 1200 rpm?**
**(c) If the field resistance is changed to $30 \Omega$, what will be the approximate terminal voltage?**

**Solution:**

**(a) Will the generator build up voltage?**
To check if voltage builds up, we need to compare the shunt field resistance line with the OCC.
The equation for the field resistance line is $E_0 = I_f R_{sh}$.
Here, $R_{sh} = 50 \Omega$. So, $E_0 = 50 I_f$.

Let's plot a few points for this line:
*   If $I_f = 1$ A, $E_0 = 50 \times 1 = 50$ V.
*   If $I_f = 2$ A, $E_0 = 50 \times 2 = 100$ V.
*   If $I_f = 3$ A, $E_0 = 50 \times 3 = 150$ V.
*   If $I_f = 4$ A, $E_0 = 50 \times 4 = 200$ V.
*   If $I_f = 5$ A, $E_0 = 50 \times 5 = 250$ V.
*   If $I_f = 6$ A, $E_0 = 50 \times 6 = 300$ V.

Now compare these values with the OCC:
*   At $I_f = 3$ A, OCC gives $E_0 = 230$ V. Field line gives $E_0 = 150$ V. OCC is higher.
*   At $I_f = 4$ A, OCC gives $E_0 = 275$ V. Field line gives $E_0 = 200$ V. OCC is higher.
*   At $I_f = 5$ A, OCC gives $E_0 = 305$ V. Field line gives $E_0 = 250$ V. OCC is higher.
*   At $I_f = 6$ A, OCC gives $E_0 = 325$ V. Field line gives $E_0 = 300$ V. OCC is higher.

Since the OCC is always above the field resistance line for $I_f > 0$, the voltage will build up. The intersection point would be at a field current slightly higher than 6 A, where the OCC would be around 330-350V, and the field line would be $50 \times 6.5 \approx 325$V. Let's estimate the intersection to be around $I_f = 6.5$ A, $E_0 \approx 325$ V.

**Answer (a): Yes, the generator will build up voltage.**

**(b) Maximum field resistance for voltage to build up at 1200 rpm?**
This is the critical field resistance ($R_{sh, crit}$), which is the slope of the tangent to the OCC from the origin.
Let's try to find the tangent point. We can calculate the ratio $E_0/I_f$ for various points on the OCC:
*   $I_f = 1$ A, $E_0 = 90$ V, $E_0/I_f = 90$
*   $I_f = 2$ A, $E_0 = 170$ V, $E_0/I_f = 85$
*   $I_f = 3$ A, $E_0 = 230$ V, $E_0/I_f = 76.67$
*   $I_f = 4$ A, $E_0 = 275$ V, $E_0/I_f = 68.75$
*   $I_f = 5$ A, $E_0 = 305$ V, $E_0/I_f = 61$
*   $I_f = 6$ A, $E_0 = 325$ V, $E_0/I_f = 54.17$

The ratio $E_0/I_f$ is decreasing as we move along the curve, which indicates that the tangent has already been passed or is at a very low field current. Let's re-examine the OCC data. The initial part of the curve is almost linear. The data provided seems to imply that the saturation starts early. A more typical OCC would have a longer linear region.

Let's re-evaluate the "tangent". We are looking for the maximum $E_0/I_f$ ratio.
From the data:
*   $E_0/I_f$ at $I_f=1$ is 90.
*   $E_0/I_f$ at $I_f=2$ is 85.
*   $E_0/I_f$ at $I_f=3$ is 76.67.

This indicates the maximum slope is likely between 0 and 1A. Let's assume the initial part is a straight line from origin to $I_f=1A, E_0=90V$. The slope here is 90.
However, the definition of critical resistance is the slope of the tangent from the origin.
Looking at the data, the slope is decreasing: 90, 85, 76.67. This suggests the highest slope is at the beginning. If we assume the OCC is linear from origin up to some point, the tangent will be that line.

Let's consider a hypothetical point between 0 and 1A.
If we interpolate for a field current of 0.5A, the EMF might be around 45V. $E_0/I_f = 45/0.5 = 90$.
If we consider the data provided and assume the tangent is somewhere between the points, we are looking for the maximum ratio. It seems the maximum ratio is around $90 \Omega$. However, if the OCC is truly represented by these points, the tangent might be slightly higher.

Let's assume the data is accurate and the tangent from the origin has the highest slope. From the given points, the initial slope $E_0/I_f$ is highest at the first point, $90 \Omega$.

**Assuming the steepest initial slope is the limiting factor, $R_{sh, crit} \approx 90 \Omega$.**
*(Note: In a real OCC, the linear region would extend further, and the tangent point would be identifiable from a list of $E_0/I_f$ ratios consistently decreasing after a certain point.)*

**(c) Approximate terminal voltage with $R_{sh} = 30 \Omega$?**
We need to find the intersection of $E_0 = 30 I_f$ (field line) with the OCC.
Let's check values:
*   If $I_f = 3$ A, OCC gives $E_0 = 230$ V. Field line gives $E_0 = 30 \times 3 = 90$ V. OCC is higher.
*   If $I_f = 4$ A, OCC gives $E_0 = 275$ V. Field line gives $E_0 = 30 \times 4 = 120$ V. OCC is higher.
*   If $I_f = 5$ A, OCC gives $E_0 = 305$ V. Field line gives $E_0 = 30 \times 5 = 150$ V. OCC is higher.
*   If $I_f = 6$ A, OCC gives $E_0 = 325$ V. Field line gives $E_0 = 30 \times 6 = 180$ V. OCC is higher.

This indicates that the intersection will occur at a field current greater than 6A. Let's try a higher field current, extrapolating the OCC slightly. If we assume a roughly constant rate of increase in EMF per Ampere in the unsaturated region, and then a diminishing rate.
Let's assume at $I_f = 7$ A, $E_0 \approx 340$ V. Field line: $E_0 = 30 \times 7 = 210$ V. OCC is higher.
Let's assume at $I_f = 8$ A, $E_0 \approx 355$ V. Field line: $E_0 = 30 \times 8 = 240$ V. OCC is higher.
Let's assume at $I_f = 9$ A, $E_0 \approx 365$ V. Field line: $E_0 = 30 \times 9 = 270$ V. OCC is higher.
Let's assume at $I_f = 10$ A, $E_0 \approx 370$ V. Field line: $E_0 = 30 \times 10 = 300$ V. OCC is higher.
Let's assume at $I_f = 11$ A, $E_0 \approx 372$ V. Field line: $E_0 = 30 \times 11 = 330$ V. OCC is higher.
Let's assume at $I_f = 12$ A, $E_0 \approx 373$ V. Field line: $E_0 = 30 \times 12 = 360$ V. OCC is higher.

The intersection is likely between $I_f = 12$ A and $I_f = 13$ A.
Let's try to estimate the point more precisely. We need $E_0 = 30 I_f$.
From the OCC, we can see the EMF increase is slowing down.
Let's try interpolating between $I_f=6$ and a hypothetical $I_f=7$.
At $I_f=6$, $E_0=325$. $E_0/I_f = 54.17$.
At $I_f=5$, $E_0=305$. $E_0/I_f = 61$.
At $I_f=4$, $E_0=275$. $E_0/I_f = 68.75$.

Let's assume a field current of $I_f = 8$ A. The field line voltage is $30 \times 8 = 240$ V. The OCC at $I_f=8$ (extrapolated) might be around 350V.
We need the OCC and the field line to be equal.
Let's check the field line values against the OCC:
| $I_f$ (Field) | $E_{0,field}$ ($30 \times I_f$) | $E_0$ (OCC from data) | Difference ($E_{0,OCC} - E_{0,field}$) |
| :------------ | :--------------------------- | :-------------------- | :----------------------------------------- |
| 1             | 30                           | 90                    | 60                                         |
| 2             | 60                           | 170                   | 110                                        |
| 3             | 90                           | 230                   | 140                                        |
| 4             | 120                          | 275                   | 155                                        |
| 5             | 150                          | 305                   | 155                                        |
| 6             | 180                          | 325                   | 145                                        |

The difference is still positive and decreasing. This means the intersection is at a higher $I_f$.
Let's try extrapolating the OCC. The increase from 5A to 6A was $325 - 305 = 20$ V.
Let's assume the increase from 6A to 7A is 15 V, so $E_0$ at 7A is $325 + 15 = 340$ V.
Field line at $I_f=7$ A: $30 \times 7 = 210$ V. Difference = $340 - 210 = 130$ V.
Let's assume the increase from 7A to 8A is 10 V, so $E_0$ at 8A is $340 + 10 = 350$ V.
Field line at $I_f=8$ A: $30 \times 8 = 240$ V. Difference = $350 - 240 = 110$ V.
Let's assume the increase from 8A to 9A is 5 V, so $E_0$ at 9A is $350 + 5 = 355$ V.
Field line at $I_f=9$ A: $30 \times 9 = 270$ V. Difference = $355 - 270 = 85$ V.
Let's assume the increase from 9A to 10A is 2 V, so $E_0$ at 10A is $355 + 2 = 357$ V.
Field line at $I_f=10$ A: $30 \times 10 = 300$ V. Difference = $357 - 300 = 57$ V.
Let's assume the increase from 10A to 11A is 1 V, so $E_0$ at 11A is $357 + 1 = 358$ V.
Field line at $I_f=11$ A: $30 \times 11 = 330$ V. Difference = $358 - 330 = 28$ V.
Let's assume the increase from 11A to 12A is 0.5 V, so $E_0$ at 12A is $358 + 0.5 = 358.5$ V.
Field line at $I_f=12$ A: $30 \times 12 = 360$ V. Difference = $358.5 - 360 = -1.5$ V.

The intersection occurs between 11A and 12A. It's very close to 12A, where the field line voltage slightly exceeds the extrapolated OCC voltage.
So, the stable operating field current is approximately $I_f \approx 11.9$ A.
The terminal voltage will be $V = I_f R_{sh} = 11.9 \times 30 \approx 357$ V.

**Answer (c): The approximate terminal voltage will be around 357 V.**

---

**Example 2: Critical Speed**

A DC shunt generator has an OCC at 1000 rpm given by the following points:

| Field Current (A) | Induced EMF $E_0$ (V) |
| :---------------- | :-------------------- |
| 0                 | 0                     |
| 1                 | 80                    |
| 2                 | 150                   |
| 3                 | 200                   |
| 4                 | 230                   |
| 5                 | 250                   |

The generator is required to operate with a shunt field resistance of $R_{sh} = 60 \Omega$.
Find the critical speed at which the generator will just build up voltage.

**Solution:**

First, let's find the critical field resistance at 1000 rpm. This is the slope of the tangent to the OCC from the origin.
Calculate $E_0/I_f$ for each point:
*   $I_f = 1$ A, $E_0 = 80$ V, $E_0/I_f = 80$
*   $I_f = 2$ A, $E_0 = 150$ V, $E_0/I_f = 75$
*   $I_f = 3$ A, $E_0 = 200$ V, $E_0/I_f = 66.67$
*   $I_f = 4$ A, $E_0 = 230$ V, $E_0/I_f = 57.5$
*   $I_f = 5$ A, $E_0 = 250$ V, $E_0/I_f = 50$

The ratio $E_0/I_f$ is decreasing, indicating that the tangent is likely at the beginning of the curve. The highest ratio is 80 at $I_f = 1$ A. This suggests that the critical field resistance at 1000 rpm is approximately $R_{sh, crit, 1000rpm} \approx 80 \Omega$.

The condition for voltage build-up is that the shunt field resistance must be less than the critical field resistance at that speed.
We are given $R_{sh} = 60 \Omega$. Since $60 \Omega < 80 \Omega$, the generator will build up voltage at 1000 rpm.

Now, we need to find the critical speed $N_{crit}$. At the critical speed, the field resistance line ($E_0 = I_f R_{sh}$) will be tangent to the OCC.
Let $N$ be the speed. The OCC at speed $N$ is related to the OCC at 1000 rpm by scaling. If $E_{0,N}$ is the EMF at speed $N$ for a field current $I_f$, then:
$E_{0,N} / N = E_{0,1000rpm} / 1000$
$E_{0,N} = (N/1000) \times E_{0,1000rpm}$

At the critical speed $N_{crit}$, the line $E_0 = I_f \times 60$ must be tangent to the OCC.
The point of tangency $(I_{f,crit}, E_{0,crit})$ satisfies $E_{0,crit} = I_{f,crit} \times 60$.
This point $(I_{f,crit}, E_{0,crit})$ lies on the OCC scaled to $N_{crit}$.

The critical resistance at $N_{crit}$ must be equal to $R_{sh} = 60 \Omega$.
Let the OCC at $N_{crit}$ be $E_{0,crit} = f(I_f, N_{crit})$.
The critical resistance at speed $N_{crit}$ is $R_{sh, crit, N_{crit}} = dE_{0,crit} / dI_f$ at the tangent point.
Since $E_{0,N} \propto N$, the shape of the OCC remains the same, only scaled vertically.
The tangent point on the OCC at 1000 rpm is approximately $(1 \text{ A}, 80 \text{ V})$. The slope there is 80.

We need to find the speed $N_{crit}$ such that the line $E_0 = 60 I_f$ is tangent to the OCC at speed $N_{crit}$.
This means the slope of the OCC at the tangent point must be $60 \Omega$.
Let the tangent point on the OCC at $N_{crit}$ be $(I_{f,t}, E_{0,t})$.
We have $E_{0,t} = 60 I_{f,t}$.
This point lies on the OCC at speed $N_{crit}$.

Consider the OCC at 1000 rpm. The line $E_0 = 60 I_f$ intersects it.
*   $I_f = 1$ A, $E_{0,field} = 60$ V, $E_{0,OCC} = 80$ V. OCC is higher.
*   $I_f = 2$ A, $E_{0,field} = 120$ V, $E_{0,OCC} = 150$ V. OCC is higher.
*   $I_f = 3$ A, $E_{0,field} = 180$ V, $E_{0,OCC} = 200$ V. OCC is higher.
*   $I_f = 4$ A, $E_{0,field} = 240$ V, $E_{0,OCC} = 230$ V. Field line is higher.

This implies that the tangent point for $R_{sh} = 60 \Omega$ occurs at a field current between 3 A and 4 A, where the OCC at 1000 rpm is still above the field line.
The tangent point condition means that the field line is tangent to the OCC.

Let's consider the $E_0/I_f$ ratios again. We are looking for a point on the OCC where $E_0/I_f = 60$. This is not directly achievable with the given data points, as the lowest ratio is 50. This implies the tangent point would be at a field current higher than 5A for an OCC shape similar to the one provided.

However, the question asks for the critical speed for $R_{sh} = 60 \Omega$. This means at $N_{crit}$, the tangent from the origin to the OCC must have a slope of $60 \Omega$.
Let's look at the $E_0/I_f$ ratios at 1000 rpm: 80, 75, 66.67, 57.5, 50.
The tangent point for a resistance of $60 \Omega$ will be where the slope of the OCC is $60 \Omega$.
This slope of $60 \Omega$ occurs at a field current somewhere between 3A and 4A, where the OCC is still quite linear. If we assume the OCC is linear from 0 to 1A with slope 80, and then starts to saturate.

Let's find the point on the OCC where the slope is 60.
If we approximate the OCC between 3A and 4A:
Slope = $(230 - 200) / (4 - 3) = 30 / 1 = 30$. This is too low.
Let's assume the initial linear portion is the most relevant for the tangent.
The tangent point on the OCC is likely at low field currents.
The ratio $E_0/I_f$ is highest (80) at $I_f=1A$. If the tangent point is here, then $R_{sh, crit} = 80 \Omega$.

We need the speed $N_{crit}$ such that the line $E_0 = 60 I_f$ is tangent to the OCC at $N_{crit}$.
This means at $N_{crit}$, the ratio $E_{0,crit} / I_{f,crit}$ must be $60 \Omega$.
Let the tangent point on the OCC at speed $N$ be $(I_{f,t}, E_{0,t})$.
$E_{0,t} = (N/1000) \times E_{0,1000rpm, t}$
$I_{f,t}$ is the same.
So, $E_{0,t} / I_{f,t} = (N/1000) \times (E_{0,1000rpm, t} / I_{f,t})$.
We want this ratio to be $60 \Omega$.

Let's find the point on the OCC at 1000 rpm where the slope is $60 \Omega$.
Looking at the $E_0/I_f$ ratios: 80, 75, 66.67, 57.5.
The slope of 60 will occur between 3A and 4A.
Let's assume the OCC is linear between $(3, 200)$ and $(4, 230)$.
Equation of the line: $E_0 - 200 = \frac{230-200}{4-3} (I_f - 3)$
$E_0 - 200 = 30 (I_f - 3)$
$E_0 = 30 I_f - 90 + 200$
$E_0 = 30 I_f + 110$

We need the slope to be $60 \Omega$. This is not a straight line slope.
We are looking for the tangent.

The critical resistance for the *shape* of the OCC is $80 \Omega$ (at $I_f=1A$).
For $R_{sh} = 60 \Omega$, the line $E_0 = 60 I_f$ will intersect the OCC at 1000 rpm.
Let's find this intersection point. We saw it's between 3A and 4A.
At $I_f = 3.5$ A, $E_{0,field} = 60 \times 3.5 = 210$ V.
From the interpolated line $E_0 = 30 I_f + 110$: at $I_f=3.5$, $E_0 = 30 \times 3.5 + 110 = 105 + 110 = 215$ V.
So the intersection is very close to $I_f = 3.5$ A, $E_0 = 210$ V.
Let's say the intersection point at 1000 rpm is $(I_{f, intersect}, E_{0, intersect}) \approx (3.5 \text{ A}, 210 \text{ V})$.

At the critical speed $N_{crit}$, the line $E_0 = 60 I_f$ will be tangent to the OCC.
This means the tangent point on the OCC at $N_{crit}$ will satisfy $E_{0,t} = 60 I_{f,t}$.
Let this tangent point occur at a field current $I_{f,t}$.

The ratio $E_0/I_f$ at the tangent point for speed $N$ is given by $R_{sh, crit, N}$.
We need to find $N_{crit}$ such that $R_{sh, crit, N_{crit}} = 60 \Omega$.
We know $R_{sh, crit, 1000rpm} \approx 80 \Omega$ (at $I_f=1A$).

The ratio of critical resistances is related to the ratio of speeds.
$R_{sh, crit, N} / R_{sh, crit, 1000rpm} = N / 1000$.
We want to find $N_{crit}$ such that $R_{sh, crit, N_{crit}} = 60 \Omega$.
However, the critical resistance itself depends on the shape of the OCC.

Let's rethink the critical speed. At the critical speed $N_{crit}$, the field resistance line $E_0 = 60 I_f$ is tangent to the OCC.
This means there is a point $(I_{f,t}, E_{0,t})$ on the OCC at speed $N_{crit}$ such that:
1. $E_{0,t} = 60 I_{f,t}$ (field line equation)
2. $E_{0,t} / I_{f,t}$ corresponds to the tangent slope at this point.

The shape of the OCC is independent of speed.
Let the OCC at 1000 rpm be $E_0 = f(I_f)$.
The OCC at speed $N$ is $E_0' = (N/1000) f(I_f)$.
We need to find $N_{crit}$ such that the line $E_0' = 60 I_f$ is tangent to $E_0' = (N_{crit}/1000) f(I_f)$.
This means the tangent to $f(I_f)$ at some point $(I_{f,t}, f(I_{f,t}))$ must have a slope such that when scaled by $N_{crit}/1000$, it matches the line $E_0' = 60 I_f$.

A simpler approach:
The critical speed is the speed at which the field resistance line $E_0 = R_{sh} I_f$ is tangent to the OCC.
We have the OCC at 1000 rpm.
Let the tangent point on this OCC be $(I_{f,t}, E_{0,t})$. The slope of the OCC at this point is $m = E_{0,t} / I_{f,t}$.
This slope $m$ is the critical resistance at 1000 rpm.

We are given $R_{sh} = 60 \Omega$. We need to find $N_{crit}$ such that the OCC at speed $N_{crit}$ is tangent to the line $E_0 = 60 I_f$.
This means the slope of the OCC at the tangent point *at speed $N_{crit}$* is $60 \Omega$.
Let the OCC at speed $N_{crit}$ be $E_0' = g(I_f)$.
The tangent to $g(I_f)$ at $(I_{f,t}', E_{0,t}')$ must have slope $60 \Omega$.

The tangent slope is determined by the derivative of the OCC shape.
Let $E_0 = f(I_f)$ be the OCC at 1000 rpm.
The OCC at $N$ rpm is $E_0(N) = \frac{N}{1000} f(I_f)$.
We want the line $E_0 = 60 I_f$ to be tangent to $E_0(N_{crit}) = \frac{N_{crit}}{1000} f(I_f)$.
The tangent to $E_0(N_{crit})$ has slope $dE_0(N_{crit})/dI_f = \frac{N_{crit}}{1000} f'(I_f)$.
At the tangent point $(I_{f,t}, E_{0,t})$, we have $E_{0,t} = 60 I_{f,t}$.
Also, the slope of the OCC at this point is $60 \Omega$.
So, $\frac{dE_0(N_{crit})}{dI_f} = 60$.
$\frac{N_{crit}}{1000} f'(I_f) = 60$.

The condition for tangency is that the line $E_0 = 60 I_f$ touches the OCC.
Let's assume the OCC shape is such that the tangent occurs at $(I_{f,t}, E_{0,t})$ on the OCC at 1000 rpm, and the slope there is $m_{1000} = E_{0,t} / I_{f,t}$.
We need to find $N_{crit}$ such that the line $E_0 = 60 I_f$ is tangent to the OCC at speed $N_{crit}$.

Consider the line $E_0 = 60 I_f$. This line must be tangent to the OCC scaled by $N_{crit}/1000$.
Let's consider the point on the OCC at 1000 rpm where the slope is 60.
The $E_0/I_f$ values are: 80, 75, 66.67, 57.5.
The slope of 60 occurs where the ratio $E_0/I_f$ is 60.
This happens at a field current between 3A and 4A. Let's approximate this point.
If we assume a linear segment between (3A, 200V) and (4A, 230V), the equation is $E_0 = 30 I_f + 110$.
The slope of this line is 30, which is not 60.

Let's go back to the definition of critical speed. It's the speed at which the field resistance line is tangent to the OCC.
For $R_{sh} = 60 \Omega$, we need to find the speed $N_{crit}$ where the OCC at that speed is tangent to $E_0 = 60 I_f$.
This means the slope of the OCC at the tangent point is $60 \Omega$.
The critical resistance of the OCC is speed-dependent. $R_{sh, crit}(N) \propto N$.
We found that $R_{sh, crit}(1000 \text{ rpm}) \approx 80 \Omega$ (at $I_f=1A$).
We need to find $N_{crit}$ such that $R_{sh, crit}(N_{crit}) = 60 \Omega$.

The relationship is $R_{sh, crit}(N) = R_{sh, crit}(N_{ref}) \times (N / N_{ref})$.
Here, $N_{ref} = 1000$ rpm. $R_{sh, crit}(1000 \text{ rpm}) \approx 80 \Omega$.
We want to find $N_{crit}$ such that $R_{sh, crit}(N_{crit}) = 60 \Omega$.
$60 = 80 \times (N_{crit} / 1000)$
$N_{crit} / 1000 = 60 / 80 = 0.75$
$N_{crit} = 0.75 \times 1000 = 750$ rpm.

**Answer: The critical speed is 750 rpm.**

*(Self-correction: The assumption that $R_{sh, crit}(N) \propto N$ holds is valid if the shape of the OCC remains the same and only gets scaled vertically. This is the basis of applying the concept.)*

---

### **8. Practice Questions**

1.  **Multiple Choice:** Which of the following is NOT a condition for voltage build-up in a DC shunt generator?
    (a) Presence of residual magnetism.
    (b) Field winding resistance is greater than critical field resistance.
    (c) Armature is driven at a speed above critical speed.
    (d) Field winding is connected in shunt with the armature.

2.  **Short Answer:** Define critical field resistance and critical speed. How are they related?

3.  **Problem:** A DC shunt generator is operating at 1500 rpm. Its open-circuit characteristic at this speed is given below.
    | Field Current (A) | Induced EMF $E_0$ (V) |
    | :---------------- | :-------------------- |
    | 0                 | 0                     |
    | 1                 | 120                   |
    | 2                 | 230                   |
    | 3                 | 310                   |
    | 4                 | 360                   |
    | 5                 | 390                   |

    **(a)** Determine the critical field resistance for this generator at 1500 rpm.
    **(b)** If the shunt field resistance is adjusted to $80 \Omega$, will the generator build up voltage? If so, what will be the approximate no-load terminal voltage?
    **(c)** Calculate the critical speed if the shunt field resistance is $100 \Omega$.

---

### **9. Answers to Practice Questions**

1.  **Answer:** (b) Field winding resistance is greater than critical field resistance. (For voltage to build up, $R_{sh} < R_{sh, crit}$)

2.  **Answer:**
    *   **Critical Field Resistance ($R_{sh, crit}$):** The maximum value of the shunt field circuit resistance for which the shunt generator will build up voltage at a given speed. It is the slope of the tangent drawn from the origin to the OCC.
    *   **Critical Speed ($N_{crit}$):** The minimum speed at which the shunt generator will build up voltage for a given value of shunt field resistance.
    *   **Relationship:** Both parameters are interdependent. If the field resistance is increased, the critical speed must also increase for voltage to build up. Conversely, if the speed is decreased, the critical field resistance decreases. For a given speed, if the field resistance exceeds the critical field resistance, voltage will not build up. For a given field resistance, if the speed drops below the critical speed, voltage will not build up.

3.  **Solution:**
    **(a) Critical field resistance at 1500 rpm:**
    Calculate $E_0/I_f$:
    *   $I_f = 1$ A, $E_0 = 120$ V, $E_0/I_f = 120 \Omega$
    *   $I_f = 2$ A, $E_0 = 230$ V, $E_0/I_f = 115 \Omega$
    *   $I_f = 3$ A, $E_0 = 310$ V, $E_0/I_f = 103.33 \Omega$
    *   $I_f = 4$ A, $E_0 = 360$ V, $E_0/I_f = 90 \Omega$
    *   $I_f = 5$ A, $E_0 = 390$ V, $E_0/I_f = 78 \Omega$

    The ratio is decreasing. The maximum ratio is $120 \Omega$ at $I_f=1$ A.
    **Answer (a): $R_{sh, crit}$ at 1500 rpm is approximately $120 \Omega$.**

    **(b) Voltage build-up with $R_{sh} = 80 \Omega$:**
    Since $R_{sh} = 80 \Omega < R_{sh, crit} = 120 \Omega$, the generator **will build up voltage**.
    To find the approximate no-load voltage, we need to find the intersection of $E_0 = 80 I_f$ (field line) with the OCC.
    | $I_f$ (Field) | $E_{0,field}$ ($80 \times I_f$) | $E_0$ (OCC) | Difference ($E_{0,OCC} - E_{0,field}$) |
    | :------------ | :--------------------------- | :---------- | :----------------------------------------- |
    | 1             | 80                           | 120         | 40                                         |
    | 2             | 160                          | 230         | 70                                         |
    | 3             | 240                          | 310         | 70                                         |
    | 4             | 320                          | 360         | 40                                         |
    | 5             | 400                          | 390         | -10                                        |

    The intersection occurs between $I_f = 4$ A and $I_f = 5$ A.
    Let's interpolate for the point where $E_{0,OCC} = E_{0,field}$.
    At $I_f = 4$, difference is 40. At $I_f = 5$, difference is -10.
    The crossover is closer to 5A.
    Let's try $I_f = 4.8$ A. $E_{0,field} = 80 \times 4.8 = 384$ V.
    The OCC is very flat here. Let's estimate $E_0$ at $I_f = 4.8$ A as approximately 388 V.
    Difference = $388 - 384 = 4$ V.
    Let's try $I_f = 4.9$ A. $E_{0,field} = 80 \times 4.9 = 392$ V.
    Estimate $E_0$ at $I_f = 4.9$ A as approximately 389 V.
    Difference = $389 - 392 = -3$ V.

    The intersection is around $I_f \approx 4.85$ A.
    The no-load voltage is $E_0 = 80 \times 4.85 \approx 388$ V.

    **Answer (b): Yes, it will build up voltage. Approximate no-load voltage $\approx 388$ V.**

    **(c) Critical speed for $R_{sh} = 100 \Omega$:**
    We need to find $N_{crit}$ such that $R_{sh, crit}(N_{crit}) = 100 \Omega$.
    We know $R_{sh, crit}(1500 \text{ rpm}) = 120 \Omega$.
    Using the relation $R_{sh, crit}(N) = R_{sh, crit}(N_{ref}) \times (N / N_{ref})$:
    $100 = 120 \times (N_{crit} / 1500)$
    $N_{crit} / 1500 = 100 / 120 = 5/6$
    $N_{crit} = (5/6) \times 1500 = 5 \times 250 = 1250$ rpm.

    **Answer (c): The critical speed is 1250 rpm.**

---

### **10. Important Points to Remember**

*   **Residual Magnetism:** Essential for voltage build-up. If absent, the generator must be "flashed" by briefly connecting a DC voltage to the field winding in the correct direction.
*   **Shunt Connection:** The field winding must be in parallel with the armature for shunt generator operation.
*   **Field Resistance vs. Critical Resistance:** Voltage builds up only if $R_{sh} < R_{sh, crit}$ at the operating speed.
*   **Speed vs. Critical Speed:** Voltage builds up only if $N > N_{crit}$ for a given field resistance.
*   **Load Characteristics:** Terminal voltage decreases with increasing load due to armature resistance drop and armature reaction.
*   **OCC:** Represents magnetic saturation and is fundamental for analyzing performance.
*   **Tangency:** The critical resistance is the tangent slope from the origin to the OCC.
*   **Scaling:** OCCs at different speeds are vertical scalings of each other.

---
