---
title: "Resistance measurement using Wheatstone’s bridge and extension of range of voltmeters."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 8: Resistance measurement using Wheatstone’s bridge and extension of range of voltmeters."
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35cf1"
status: "completed"
scrapedAt: "2026-05-23T16:11:58.376Z"
---
# CIRCUITS AND MEASUREMENTS LAB: Module 8 - Resistance Measurement and Voltmeter Range Extension

This module focuses on two fundamental aspects of electrical measurements: accurate resistance determination using the Wheatstone bridge and the practical technique of extending the measurement range of voltmeters.

---

## 8.1 Resistance Measurement using Wheatstone's Bridge

The Wheatstone bridge is a fundamental electrical circuit used to measure an unknown electrical resistance by balancing two legs of a bridge circuit, one leg of which includes the unknown component. It is one of the most accurate methods for measuring resistance, especially for medium resistances (typically between 1 $\Omega$ and 1 M$\Omega$).

### 8.1.1 Principle of Operation

The Wheatstone bridge consists of four resistors, $R_1$, $R_2$, $R_3$, and $R_4$, connected in a diamond configuration. A voltage source is applied across two opposite corners, and a galvanometer (a sensitive current-measuring device) is connected across the other two opposite corners.

**Key Concepts:**

*   **Balance Condition:** The bridge is said to be in a state of balance when no current flows through the galvanometer. This occurs when the potential difference across the galvanometer terminals is zero.
*   **Kirchhoff's Voltage Law (KVL):** Applied to the loops of the bridge, KVL helps derive the balance condition.
*   **Ohm's Law:** Used to relate voltage, current, and resistance in each branch.

**Derivation of Balance Condition (Refer to Sawhney, Gupta, Kalsi):**

Consider the Wheatstone bridge with:
*   Voltage source $V$ connected across points A and C.
*   Galvanometer $G$ connected between points B and D.
*   Resistors $R_1$, $R_2$, $R_3$, and $R_4$ forming the arms. Let $R_1$ and $R_2$ be the ratio arms, $R_3$ be the adjustable or standard arm, and $R_4$ be the unknown resistance.

At balance, the current through the galvanometer $I_g = 0$. This implies:
*   Potential at D ($V_D$) = Potential at B ($V_B$).

Applying KVL to loop ABD:
$I_1 R_1 - I_3 R_3 = 0$ (since $I_g = 0$, $I_1$ flows through $R_1$ and $R_3$)
$I_1 R_1 = I_3 R_3$  (Equation 1)

Applying KVL to loop BCD:
$I_2 R_2 - I_4 R_4 = 0$ (since $I_g = 0$, $I_2$ flows through $R_2$ and $R_4$)
$I_2 R_2 = I_4 R_4$  (Equation 2)

Also, from current division at node A:
$I_1 = I_{AC} - I_{AB}$
$I_3 = I_{AC}$
$I_2 = I_{AC}$
$I_4 = I_{AC}$

Actually, at node A, the total current $I$ splits into $I_1$ and $I_2$. At node B, $I_1$ flows through $R_1$ and $I_g$ through $G$. At node D, $I_3$ flows through $R_3$ and $I_g$ through $G$. At node C, $I_2$ flows through $R_2$ and $I_4$ through $R_4$.

If $I_g = 0$, then $I_1 = I_3$ and $I_2 = I_4$.
From node A, the current from the source $V$ splits into $I_1$ and $I_2$.
So, $I_1$ flows through $R_1$ and $R_3$.
And $I_2$ flows through $R_2$ and $R_4$.

The potential at D is $V_D = V_A - I_1 R_1$.
The potential at B is $V_B = V_A - I_2 R_2$.

For balance, $V_D = V_B$.
$V_A - I_1 R_1 = V_A - I_2 R_2$
$I_1 R_1 = I_2 R_2$  (Equation 3)

Similarly, considering potential from C:
$V_D = V_C + I_3 R_3$
$V_B = V_C + I_4 R_4$

For balance, $V_D = V_B$.
$V_C + I_3 R_3 = V_C + I_4 R_4$
$I_3 R_3 = I_4 R_4$  (Equation 4)

Now, consider the currents from the source. The total current $I$ splits at A into $I_1$ and $I_2$. At D, $I_g=0$, so the current flowing from A through $R_1$ continues through $R_3$. The current flowing from A through $R_2$ continues through $R_4$.
So, the current through $R_1$ is $I_{AB}$ and through $R_3$ is $I_{DB}$. If $I_g=0$, then $I_{AB} = I_{DB}$.
Similarly, the current through $R_2$ is $I_{AD}$ and through $R_4$ is $I_{BD}$. If $I_g=0$, then $I_{AD} = I_{BD}$.

Let the voltage source be connected between A and C.
Potential at A is $V_A$. Potential at C is $V_C$.
$V_D = V_A - I_{AB} R_{AB}$
$V_B = V_A - I_{AD} R_{AD}$

If $V_D = V_B$, then $I_{AB} R_{AB} = I_{AD} R_{AD}$.
Let the galvanometer current be $I_g$.
Current through $R_{AB}$ is $I_1$. Current through $R_{DB}$ is $I_g$. So current through $R_3$ is $I_1 - I_g$.
Current through $R_{AD}$ is $I_2$. Current through $R_{BD}$ is $I_g$. So current through $R_4$ is $I_2 - I_g$.

Applying KVL to loop ABD: $I_1 R_1 - I_g G - (I_2-I_g)R_3 = 0$
Applying KVL to loop BCD: $I_g G + (I_1-I_g)R_3 - I_2 R_2 = 0$

If $I_g = 0$:
From loop ABD: $I_1 R_1 - I_2 R_3 = 0 \implies I_1 R_1 = I_2 R_3$ (Error in previous derivation, the paths were mixed)

Let's redefine the circuit for clarity:
*   Points A and C are connected to the voltage source.
*   Points B and D are connected to the galvanometer.
*   Resistors $R_1$ (arm AB), $R_2$ (arm BC), $R_3$ (arm CD), and $R_4$ (arm DA) form the bridge.

Let $I_{AB}$ be the current through $R_1$, $I_{BC}$ through $R_2$, $I_{CD}$ through $R_3$, and $I_{DA}$ through $R_4$.
Let $I_g$ be the current through the galvanometer connected between B and D.

At balance, $I_g = 0$.
This implies:
*   Current through $R_1$ ($I_{AB}$) is the same as the current through $R_3$ ($I_{CB}$). Let this be $I_1$.
*   Current through $R_2$ ($I_{AD}$) is the same as the current through $R_4$ ($I_{BD}$). Let this be $I_2$.

Applying KVL to loop ABCD (across the source):
$V_{AC} = V_{AB} + V_{BC} = I_1 R_1 + I_2 R_2$

Applying KVL to loop ABD:
$V_{AB} = V_{AD}$ (potential difference between A and B equals potential difference between A and D, since galvanometer is zero)
$I_1 R_1 = I_2 R_3$  (Equation 5)

This derivation is still incorrect. Let's use the standard configuration where the galvanometer is between B and D.

**Standard Wheatstone Bridge Configuration:**
*   Voltage source connected between points A and C.
*   Galvanometer connected between points B and D.
*   Resistors:
    *   Arm AB: $R_1$
    *   Arm BC: $R_2$
    *   Arm CD: $R_3$ (Standard known resistance)
    *   Arm DA: $R_4$ (Unknown resistance)

At balance, $I_g = 0$.
Current through $R_1$ is $I_1$. Current through $R_2$ is $I_2$.
Current through $R_3$ is $I_3$. Current through $R_4$ is $I_4$.

At node B: $I_1 = I_g + I_3$. If $I_g=0$, then $I_1 = I_3$.
At node D: $I_4 = I_g + I_2$. If $I_g=0$, then $I_4 = I_2$.

Applying KVL to loop ABD:
$V_A - V_B = I_1 R_1$
$V_A - V_D = I_4 R_4$
Since $V_B = V_D$ at balance, $V_A - V_B = V_A - V_D$.
Therefore, $I_1 R_1 = I_4 R_4$. (Equation 6)

Applying KVL to loop BCD:
$V_B - V_C = I_3 R_3$
$V_D - V_C = I_2 R_2$
Since $V_B = V_D$ at balance, $V_B - V_C = V_D - V_C$.
Therefore, $I_3 R_3 = I_2 R_2$. (Equation 7)

We also know that current from the source splits at A into $I_1$ and $I_4$. So, $I_1 + I_4 = I_{total}$.
And current meets at C from $R_2$ and $R_3$. So, $I_2 + I_3 = I_{total}$.

From $I_1 = I_3$ and $I_4 = I_2$, and the current conservation equations:
$I_1 + I_2 = I_{total}$
$I_1 + I_2 = I_{total}$ (This doesn't help much).

Let's use the voltage drop across branches.
Potential difference $V_{BD} = 0$ at balance.
$V_{BD} = V_B - V_D$
$V_B = V_A - I_1 R_1$
$V_D = V_A - I_4 R_4$
$V_B - V_D = (V_A - I_1 R_1) - (V_A - I_4 R_4) = I_4 R_4 - I_1 R_1$.
Setting $V_{BD} = 0 \implies I_1 R_1 = I_4 R_4$.

Also, $V_B - V_C = I_3 R_3$.
$V_D - V_C = I_2 R_2$.
$V_B - V_D = (V_B - V_C) - (V_D - V_C) = I_3 R_3 - I_2 R_2$.
Setting $V_{BD} = 0 \implies I_3 R_3 = I_2 R_2$.

We have:
1.  $I_1 R_1 = I_4 R_4$
2.  $I_3 R_3 = I_2 R_2$
3.  At node B: $I_1 = I_g + I_3$. If $I_g=0$, $I_1 = I_3$.
4.  At node D: $I_4 = I_g + I_2$. If $I_g=0$, $I_4 = I_2$.

Substitute $I_3=I_1$ and $I_2=I_4$ into equation (2):
$I_1 R_3 = I_4 R_2$

Now we have two equations:
*   $I_1 R_1 = I_4 R_4$  (Equation 6)
*   $I_1 R_3 = I_4 R_2$  (Equation 8)

Divide Equation 6 by Equation 8:
$\frac{I_1 R_1}{I_1 R_3} = \frac{I_4 R_4}{I_4 R_2}$
$\frac{R_1}{R_3} = \frac{R_4}{R_2}$

Rearranging for the unknown resistance $R_4$:
$R_4 = R_3 \frac{R_1}{R_2}$

**This is the balance condition of the Wheatstone bridge.**

### 8.1.2 Components of a Wheatstone Bridge

A practical Wheatstone bridge circuit typically includes:

*   **DC Voltage Source:** A stable DC power supply (e.g., battery, regulated power supply).
*   **Resistors:**
    *   **Ratio Arms ($R_1$, $R_2$):** These are precision resistors, often provided as a set of known ratios (e.g., 1:1, 1:10, 1:100). They are used to set the approximate magnitude of the unknown resistance.
    *   **Standard Arm ($R_3$):** This is a variable, calibrated resistor (e.g., a decade resistance box or a rheostat) that is adjusted to achieve balance.
    *   **Unknown Resistance ($R_4$):** The resistor whose value is to be measured.
*   **Galvanometer:** A sensitive detector to indicate the condition of balance. It can be a moving-coil galvanometer or a more modern electronic null detector.

### 8.1.3 Procedure for Resistance Measurement

1.  **Connect the Circuit:** Assemble the Wheatstone bridge circuit with the unknown resistor ($R_4$), known resistors ($R_1$, $R_2$, $R_3$), and the DC voltage source. Connect the galvanometer between points B and D.
2.  **Set Initial Ratio:** Choose a suitable ratio for $R_1$ and $R_2$ based on the expected range of the unknown resistance. For instance, if $R_4$ is expected to be around 100 $\Omega$, a ratio of 1:1 or 1:10 might be suitable.
3.  **Adjust Standard Arm:** Adjust the standard arm resistor ($R_3$) until the galvanometer shows a null deflection (zero current). This indicates that the bridge is balanced.
4.  **Read Values:** Once balance is achieved, record the values of $R_1$, $R_2$, and $R_3$.
5.  **Calculate Unknown Resistance:** Use the balance equation: $R_4 = R_3 \times \frac{R_1}{R_2}$.
6.  **Repeat for Accuracy:** For improved accuracy, repeat the measurement with different ratios of $R_1/R_2$ and adjust $R_3$ to achieve balance. The average of the calculated $R_4$ values can be taken.

### 8.1.4 Types of Wheatstone Bridges

*   **Slide-Wire Bridge (Meter Bridge):** A simplified form of the Wheatstone bridge where $R_1$ and $R_2$ are formed by a uniform resistance wire stretched over a scale, with the sliding contact providing the variable resistance. The ratio $R_1/R_2$ is determined by the position of the slider.
*   **Post-Office Box:** A portable and compact Wheatstone bridge with built-in ratio arms and a decade resistance box.
*   **Electronic Wheatstone Bridges:** Modern bridges use electronic null detectors and digital readouts for faster and more sensitive measurements.

### 8.1.5 Advantages and Disadvantages

**Advantages:**

*   **High Accuracy:** Can provide very accurate measurements, especially for medium resistances.
*   **Simple Principle:** Based on fundamental electrical laws.
*   **Versatile:** Can be adapted for measuring other electrical quantities (e.g., inductance, capacitance).

**Disadvantages:**

*   **Not Suitable for Very Low Resistances:** Contact resistance and lead resistance can significantly affect measurements.
*   **Not Suitable for Very High Resistances:** The galvanometer might not be sensitive enough to detect small currents.
*   **Requires DC Source:** Cannot be used directly with AC power.
*   **Time-Consuming:** Manual adjustment of the standard arm can be tedious.

### 8.1.6 Practical Considerations and Sources of Error (Refer to Sawhney, Gupta, Kalsi)

*   **Galvanometer Sensitivity:** The sensitivity of the galvanometer is crucial for achieving a precise null point.
*   **Contact Resistance:** Poor connections can introduce errors, especially when measuring low resistances. Using Kelvin double bridge for very low resistance measurements.
*   **Lead Resistance:** Resistance of connecting wires can be significant for low resistance values.
*   **Accuracy of Standard Resistors:** The precision of $R_1$, $R_2$, and $R_3$ directly impacts the accuracy of $R_4$.
*   **Battery EMF Stability:** Fluctuations in the voltage source can lead to incorrect balance points.
*   **Thermoelectric EMFs:** In DC bridges, dissimilar metals in contact can generate small voltages, potentially affecting the galvanometer reading.
*   **Residual Resistance:** In decade resistance boxes, some small residual resistance may remain even at zero setting.

### 8.1.7 Application of Wheatstone Bridge

*   Measurement of unknown resistances.
*   Calibration of resistance standards.
*   Used in strain gauges, thermistors, and other sensors where resistance changes with physical parameters.

---

## 8.2 Extension of Range of Voltmeters

Voltmeters are designed to measure voltage within a specific range. To measure voltages beyond the voltmeter's inherent range, its measurement capability needs to be extended. This is commonly achieved by using a **multiplier resistor** in series with the voltmeter.

### 8.2.1 Principle of Operation

A voltmeter essentially consists of a sensitive galvanometer movement (often called a **millivoltmeter** or **microammeter**) with a low internal resistance, designed to measure a specific full-scale current. To convert this into a voltmeter, a high resistance is connected in series with the galvanometer.

When this series combination is connected across a voltage source, a current flows through the circuit. The value of the series resistor is chosen such that when the voltage to be measured is applied, the current flowing through the galvanometer is exactly its full-scale deflection current.

**Key Concepts:**

*   **Voltmeter Internal Resistance ($R_v$):** The equivalent resistance of the galvanometer movement and any pre-existing series resistance.
*   **Full-Scale Deflection Current ($I_{fs}$):** The maximum current the galvanometer can handle for full-scale deflection.
*   **Multiplier Resistor ($R_m$):** An external, high-value resistor connected in series with the voltmeter to extend its range.
*   **Voltage Range Extension:** The process of modifying a voltmeter to measure higher voltages.

### 8.2.2 Calculating the Multiplier Resistor ($R_m$)

Consider a voltmeter with an internal resistance $R_v$ and a full-scale deflection current $I_{fs}$. This voltmeter has an inherent voltage range, say $V_{fs}$ (the voltage that causes full-scale deflection with the internal $R_v$).

$V_{fs} = I_{fs} \times R_v$

Now, we want to extend the range of this voltmeter to measure a higher voltage, $V_{max}$. To do this, we connect a multiplier resistor $R_m$ in series with the voltmeter.

The total resistance of the modified voltmeter will be $R_{total} = R_v + R_m$.

When the maximum voltage $V_{max}$ is applied across this modified voltmeter, the current flowing through it must still be the full-scale deflection current $I_{fs}$ for the meter to indicate $V_{max}$ at full scale.

So, according to Ohm's Law:
$V_{max} = I_{fs} \times R_{total}$
$V_{max} = I_{fs} \times (R_v + R_m)$

We can express $I_{fs}$ from the original voltmeter's characteristic: $I_{fs} = \frac{V_{fs}}{R_v}$.
Substitute this into the equation for $V_{max}$:
$V_{max} = \frac{V_{fs}}{R_v} \times (R_v + R_m)$
$V_{max} = V_{fs} \times \left(1 + \frac{R_m}{R_v}\right)$

This equation shows the relationship between the original range ($V_{fs}$) and the new extended range ($V_{max}$).

Now, let's solve for the multiplier resistor $R_m$:
$V_{max} = I_{fs} R_v + I_{fs} R_m$
$V_{max} = V_{fs} + I_{fs} R_m$
$V_{max} - V_{fs} = I_{fs} R_m$
$R_m = \frac{V_{max} - V_{fs}}{I_{fs}}$

Alternatively, using $I_{fs} = \frac{V_{fs}}{R_v}$:
$R_m = \frac{V_{max} - V_{fs}}{V_{fs}/R_v}$
$R_m = \frac{R_v (V_{max} - V_{fs})}{V_{fs}}$
$R_m = R_v \left(\frac{V_{max}}{V_{fs}} - 1\right)$

**Key Point:** The multiplier resistor $R_m$ must have a much higher resistance than the voltmeter's internal resistance $R_v$.

### 8.2.3 The Multiplier Factor (MF)

The multiplier factor (MF) is the ratio of the new voltage range to the original voltage range:
$MF = \frac{V_{max}}{V_{fs}}$

The equation for $V_{max}$ can be rewritten using MF:
$V_{max} = V_{fs} \times MF$

Substituting this back into the equation for $R_m$:
$R_m = R_v \left(MF - 1\right)$

This is a very useful formula. If you know the voltmeter's internal resistance ($R_v$) and the desired multiplier factor (MF), you can directly calculate the required multiplier resistor.

### 8.2.4 Procedure for Extending Voltmeter Range

1.  **Determine Voltmeter Specifications:** Obtain the full-scale deflection current ($I_{fs}$) and the internal resistance ($R_v$) of the voltmeter. If not directly given, $R_v$ can be calculated using $R_v = V_{fs} / I_{fs}$, where $V_{fs}$ is the original voltage range.
2.  **Decide the New Voltage Range:** Determine the desired maximum voltage ($V_{max}$) to be measured.
3.  **Calculate the Multiplier Factor:** $MF = V_{max} / V_{fs}$.
4.  **Calculate the Multiplier Resistor:** $R_m = R_v \times (MF - 1)$.
5.  **Select or Construct the Multiplier Resistor:** Choose a resistor with the calculated value of $R_m$. This resistor should have a power rating sufficient to handle the power dissipated by it when measuring $V_{max}$. The power dissipated is $P = I_{fs}^2 \times R_m$ or $P = V_{max}^2 / (R_v + R_m)$.
6.  **Connect the Multiplier Resistor:** Connect the calculated multiplier resistor in series with the voltmeter.
7.  **Calibrate (Optional but Recommended):** Connect the modified voltmeter to a known voltage source within the new range and verify that the reading is accurate.

### 8.2.5 Power Rating of the Multiplier Resistor

The multiplier resistor will dissipate power when the voltmeter is in use. The power dissipation is given by:
$P = I_{fs}^2 \times R_m$
or
$P = (V_{max})^2 / (R_v + R_m)$

The resistor chosen must have a power rating safely above this calculated value to prevent overheating and damage.

### 8.2.6 Advantages of Using Multiplier Resistors

*   **Cost-Effective:** It is cheaper to extend the range of an existing voltmeter than to buy a new one with a higher range.
*   **Simple Implementation:** The addition of a series resistor is straightforward.
*   **Preserves Meter Sensitivity:** The original galvanometer's sensitivity and scale markings are maintained, only scaled to a higher voltage range.

### 8.2.7 Practical Considerations and Sources of Error (Refer to Sawhney, Gupta, Kalsi)

*   **Accuracy of $R_v$ and $I_{fs}$:** The accuracy of the calculated $R_m$ depends heavily on the accuracy of the voltmeter's specifications.
*   **Temperature Coefficient of $R_m$:** The resistance of the multiplier resistor should have a low temperature coefficient to ensure stable readings with varying ambient temperatures.
*   **Power Rating of $R_m$:** Overheating due to inadequate power rating can lead to a change in resistance and inaccurate readings.
*   **Contact Resistance:** Poor connections can introduce errors, though less significant than in resistance measurements.
*   **Non-linearity:** If the voltmeter's internal galvanometer is not perfectly linear, the scaling might not be perfectly accurate.
*   **Loading Effect:** Adding the multiplier resistor increases the total resistance of the voltmeter. This means the modified voltmeter will draw more current from the circuit being measured compared to the original voltmeter. This can lead to a "loading effect," where the voltage being measured is altered by the presence of the voltmeter. The higher the multiplier resistor, the higher the voltmeter's input impedance, reducing the loading effect.

### 8.2.8 Application of Voltmeter Range Extension

*   Measuring higher voltages with standard voltmeters in laboratories and industrial settings.
*   Adapting general-purpose multimeters for specific high-voltage applications.

---

## Summary of Key Concepts and Importance

*   **Wheatstone Bridge:** Crucial for accurate resistance measurement, especially for medium values. Its balance condition ($R_1/R_2 = R_3/R_4$) is fundamental. Understanding its limitations (low/high resistance) leads to using alternative bridges like Kelvin's. (CO7)
*   **Voltmeter Range Extension:** A practical technique using a series multiplier resistor to extend a voltmeter's measurement capability. The calculation of $R_m = R_v (MF - 1)$ is vital. This highlights how instrument characteristics can be modified for different applications. (CO4)

---

## Practice Questions

**Section 8.1: Wheatstone's Bridge**

1.  A Wheatstone bridge has the following resistors: $R_1 = 100 \Omega$, $R_2 = 200 \Omega$, and $R_3 = 500 \Omega$. If the bridge is balanced, what is the value of the unknown resistance $R_4$?
2.  What is the primary condition for balancing a Wheatstone bridge?
3.  List two potential sources of error when measuring low resistances using a Wheatstone bridge.
4.  Explain why a Wheatstone bridge is generally not suitable for measuring very high resistances.

**Section 8.2: Voltmeter Range Extension**

5.  A voltmeter has a full-scale deflection current ($I_{fs}$) of 5 mA and an internal resistance ($R_v$) of 2 k$\Omega$. What is its original voltage range?
6.  If you want to extend the range of the voltmeter in question 5 to 100 V, what value of multiplier resistor ($R_m$) is required?
7.  Calculate the multiplier factor (MF) for extending the voltmeter range from 50 V to 250 V.
8.  A voltmeter with an internal resistance of 1 k$\Omega$ and a full-scale range of 10 V is used with a multiplier resistor. If the multiplier resistor is 9 k$\Omega$, what is the new voltage range?
9.  What is the power rating required for the multiplier resistor calculated in question 6, assuming the resistor should operate with a safety margin of 2?

---

## Answers to Practice Questions

**Section 8.1: Wheatstone's Bridge**

1.  Using the balance condition $R_4 = R_3 \frac{R_1}{R_2}$:
    $R_4 = 500 \Omega \times \frac{100 \Omega}{200 \Omega} = 500 \Omega \times 0.5 = 250 \Omega$.
2.  The primary condition for balancing a Wheatstone bridge is that the current flowing through the galvanometer is zero (null deflection). This occurs when the potential difference between the galvanometer terminals is zero.
3.  Two potential sources of error are:
    *   Contact resistance at the connection points.
    *   Resistance of the connecting leads.
    *   Thermoelectric EMFs.
4.  A Wheatstone bridge is generally not suitable for measuring very high resistances because:
    *   The required current through the arms might be too small for the galvanometer to detect accurately, leading to a poor null point.
    *   The sensitivity of the galvanometer may not be sufficient to detect the imbalance.

**Section 8.2: Voltmeter Range Extension**

5.  Original voltage range ($V_{fs}$) = $I_{fs} \times R_v$
    $V_{fs} = 5 \text{ mA} \times 2 \text{ k}\Omega = 0.005 \text{ A} \times 2000 \Omega = 10 \text{ V}$.
    The original voltage range is 10 V.
6.  $R_v = 2 \text{ k}\Omega$, $I_{fs} = 5 \text{ mA} = 0.005 \text{ A}$. Original range $V_{fs} = 10 \text{ V}$. New range $V_{max} = 100 \text{ V}$.
    $R_m = R_v \left(\frac{V_{max}}{V_{fs}} - 1\right)$
    $R_m = 2 \text{ k}\Omega \left(\frac{100 \text{ V}}{10 \text{ V}} - 1\right) = 2000 \Omega (10 - 1) = 2000 \Omega \times 9 = 18000 \Omega = 18 \text{ k}\Omega$.
    The required multiplier resistor is 18 k$\Omega$.
7.  Multiplier Factor (MF) = $\frac{\text{New Voltage Range}}{\text{Original Voltage Range}}$
    MF = $\frac{250 \text{ V}}{50 \text{ V}} = 5$.
    The multiplier factor is 5.
8.  $R_v = 1 \text{ k}\Omega$, $V_{fs} = 10 \text{ V}$. $R_m = 9 \text{ k}\Omega$.
    $V_{max} = V_{fs} + I_{fs} R_m$
    We know $I_{fs} = V_{fs} / R_v = 10 \text{ V} / 1000 \Omega = 0.01 \text{ A} = 10 \text{ mA}$.
    $V_{max} = 10 \text{ V} + (0.01 \text{ A} \times 9000 \Omega) = 10 \text{ V} + 90 \text{ V} = 100 \text{ V}$.
    The new voltage range is 100 V.
    Alternatively, using MF:
    $R_m = R_v (MF - 1)$
    $9000 \Omega = 1000 \Omega (MF - 1)$
    $9 = MF - 1 \implies MF = 10$.
    $V_{max} = V_{fs} \times MF = 10 \text{ V} \times 10 = 100 \text{ V}$.
9.  From question 6, $R_m = 18 \text{ k}\Omega = 18000 \Omega$, $I_{fs} = 5 \text{ mA} = 0.005 \text{ A}$.
    Power dissipated in $R_m$ ($P_{dissipated}$) = $I_{fs}^2 \times R_m$
    $P_{dissipated} = (0.005 \text{ A})^2 \times 18000 \Omega = (0.000025 \text{ A}^2) \times 18000 \Omega = 0.45 \text{ W}$.
    With a safety margin of 2, the required power rating is $0.45 \text{ W} \times 2 = 0.9 \text{ W}$.
    The required power rating for the multiplier resistor is at least 0.9 W (typically, a 1 W or 2 W resistor would be selected).

---

## Alignment with Course Outcomes

This module directly contributes to the following Course Outcomes:

*   **CO7: Determine electrical parameters using various bridges (Knowledge Level: K3)**
    *   Measuring resistance using the Wheatstone bridge directly addresses this outcome.
*   **CO4: Determine the calibration characteristics of various meters used in electrical systems (Knowledge Level: K3)**
    *   Extending the range of a voltmeter involves understanding its calibration (full-scale current, internal resistance) and how to modify it to achieve a new calibration point.

---
**End of Module Notes**
