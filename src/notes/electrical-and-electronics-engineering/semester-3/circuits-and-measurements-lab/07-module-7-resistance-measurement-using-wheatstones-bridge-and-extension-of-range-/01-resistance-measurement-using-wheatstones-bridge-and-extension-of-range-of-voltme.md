---
title: "Resistance measurement using Wheatstone’s bridge and extension of range of voltmeters."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 7: Resistance measurement using Wheatstone’s bridge and extension of range of voltmeters."
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35cef"
status: "completed"
scrapedAt: "2026-05-23T16:11:57.637Z"
---
# CIRCUITS AND MEASUREMENTS LAB: Module 7 - Resistance Measurement using Wheatstone's Bridge and Extension of Range of Voltmeters

## 1. Introduction to Resistance Measurement

This module focuses on two fundamental aspects of electrical measurements: accurate resistance determination using the Wheatstone's bridge and enhancing the measurement capabilities of voltmeters.

### 1.1 Importance of Resistance Measurement
Resistance is a fundamental electrical property of materials. Accurate measurement of resistance is crucial for:
*   **Component Identification and Verification:** Ensuring resistors are within their specified tolerance.
*   **Circuit Analysis:** Determining the behavior of circuits and verifying theoretical calculations.
*   **Fault Diagnosis:** Identifying faulty components in electrical systems.
*   **Material Characterization:** Understanding the electrical properties of new materials.

### 1.2 Methods of Resistance Measurement
Resistors are broadly classified into three categories based on their resistance value, which dictates the appropriate measurement technique:

*   **Low Resistance (typically < 1 Ohm):** Kelvin's Double Bridge (Sawhney, Chapter 4; Gupta, Chapter 4)
*   **Medium Resistance (typically 1 Ohm to 100 kOhm):** Wheatstone's Bridge (Sawhney, Chapter 4; Gupta, Chapter 4)
*   **High Resistance (typically > 100 kOhm):** Megger, Insulation Tester, Voltmeter-Ammeter Method (with precautions) (Sawhney, Chapter 5; Gupta, Chapter 5)

## 2. Wheatstone's Bridge for Medium Resistance Measurement

The Wheatstone's bridge is a widely used and highly accurate method for measuring unknown resistances in the medium range. It operates on the principle of **null deflection**.

### 2.1 Principle of Operation
The Wheatstone's bridge consists of four resistive arms. A galvanometer is connected across one diagonal, and a voltage source (battery) is connected across the other diagonal. The bridge is balanced when the galvanometer shows zero deflection, indicating no current flow through it.

### 2.2 Circuit Diagram and Components
*   **Four Resistive Arms:**
    *   $R_1$: Known fixed resistance (often called the "standard arm").
    *   $R_2$: Known variable resistance (often a resistance box or decade resistance).
    *   $R_3$: Known fixed resistance (ratio arm).
    *   $R_x$: The unknown resistance to be measured.
*   **Galvanometer (G):** A sensitive instrument to detect null current.
*   **DC Voltage Source (Battery):** Provides the excitation for the bridge.

**Circuit Diagram:**

```
      A ---- R1 ---- B ---- R2 ---- D
      |              |              |
      Rx             G              Vs (Battery)
      |              |              |
      C ------------- R3 ------------ C
```

*   $V_{AC}$ is the voltage source.
*   Galvanometer is connected between points B and C.

### 2.3 Condition for Balance
When the bridge is balanced, the potential at point B is equal to the potential at point C. This means no current flows through the galvanometer.

Under balanced conditions, the voltage drop across $R_1$ is equal to the voltage drop across $R_x$ (assuming they are in series in their respective branches), and similarly for $R_2$ and $R_3$.

$I_1 R_1 = I_2 R_x$
$I_1 R_2 = I_2 R_3$

Dividing the two equations:
$\frac{R_1}{R_2} = \frac{R_x}{R_3}$

Therefore, the unknown resistance $R_x$ can be calculated as:

$R_x = R_3 \frac{R_1}{R_2}$

**Important Note:** The ratio $\frac{R_1}{R_2}$ is called the **multiplication ratio** or **gauge factor**. The resistances $R_1$ and $R_2$ are often referred to as the ratio arms.

### 2.4 Procedure for Measurement
1.  **Connect the Circuit:** Connect the unknown resistor $R_x$ and the known resistors $R_1$, $R_2$ (variable), and $R_3$ in the Wheatstone bridge configuration as shown in the diagram. Connect the galvanometer and the DC voltage source.
2.  **Initial Settings:** Start with the ratio arms $R_1$ and $R_2$ set to values that are likely to produce a balance. For example, set $R_1 = R_2 = 100 \Omega$ or $R_1 = 100 \Omega, R_2 = 1000 \Omega$ or vice-versa depending on the expected value of $R_x$.
3.  **Adjust Variable Resistance:** Adjust the variable resistance $R_2$ (or sometimes $R_1$ if it's the variable one) until the galvanometer shows **zero deflection**.
4.  **Record Values:** Once zero deflection is achieved, record the values of $R_1$, $R_2$, and $R_3$.
5.  **Calculate $R_x$**: Use the formula $R_x = R_3 \frac{R_1}{R_2}$ to calculate the unknown resistance.
6.  **Repeat for Accuracy:** Repeat the measurement with different settings of the ratio arms to ensure accuracy and to check for consistency.

### 2.5 Sensitivity and Factors Affecting it
*   **Sensitivity:** The sensitivity of a Wheatstone bridge refers to its ability to detect small imbalances. A more sensitive bridge will show a larger galvanometer deflection for a given small change in resistance.
*   **Factors Affecting Sensitivity:**
    *   **Galvanometer Sensitivity:** A more sensitive galvanometer leads to higher bridge sensitivity.
    *   **Battery Voltage:** Higher battery voltage generally increases sensitivity, but it's limited by the heating effects and potential damage to components.
    *   **Arm Resistances:** Sensitivity is maximum when all four arms have equal resistance. The bridge is most sensitive when the ratio arms ($R_1/R_2$) are close to 1 (i.e., $R_1 = R_2$ and $R_3 = R_x$). This means the resistances in the bridge should be as close as possible to the expected value of $R_x$.
    *   **Resistance of Connecting Wires:** Low resistance connecting wires are essential.

### 2.6 Advantages of Wheatstone's Bridge
*   **High Accuracy:** Capable of measuring resistances with high precision.
*   **Simple Principle:** Based on a straightforward null detection method.
*   **Versatile:** Suitable for measuring a wide range of medium resistances.

### 2.7 Disadvantages of Wheatstone's Bridge
*   **Not Suitable for Very Low or Very High Resistances:** Requires modifications or different methods.
*   **Galvanometer Sensitivity:** Performance depends heavily on the galvanometer's sensitivity.
*   **Contact Resistance:** Can affect accuracy for very low resistances.
*   **Thermal EMFs:** Can introduce errors if not accounted for or if the battery polarity is reversed.

### 2.8 Course Outcome Alignment
*   **CO7: Determine electrical parameters using various bridges.** This topic directly addresses this by detailing the use of Wheatstone's bridge to measure resistance.

## 3. Extension of Range of Voltmeters

Voltmeters are designed to measure voltage within a specific range. To measure voltages exceeding this range, an extension of the voltmeter's range is required. This is achieved by adding a **multiplier resistance** in **series** with the voltmeter.

### 3.1 Principle of Extension
A voltmeter typically consists of a sensitive galvanometer (or microammeter) with a high internal resistance ($R_m$). When a voltage is applied across the voltmeter, a small current flows through it, causing a deflection proportional to the voltage.

To extend the range, a high resistance, called a **multiplier resistance** ($R_{sh}$), is connected in series with the voltmeter. This multiplier resistance limits the current flowing through the voltmeter for a higher applied voltage, bringing it back within the galvanometer's acceptable current range.

### 3.2 Circuit Diagram for Range Extension
```
                                  V_applied
                                     |
     +----------------------------+  |
     |                            |  |
     |        Vm (Voltmeter)      |  |
     |    +------------------+    |  |
     |    |                  |    |  |
     |    |    Rm (Internal  |    |  |
     |    |    Resistance)   |    |  |
     |    |                  |    |  |
     |    +------------------+    |  |
     |             |              |  |
     +-------------+--------------+  |
                   |                 |
                   Rsh (Multiplier)  |
                   |                 |
                   +-----------------+
```

### 3.3 Derivation of Multiplier Resistance
Let:
*   $V$: The maximum voltage of the original range of the voltmeter.
*   $I_{fsd}$: The full-scale deflection current of the voltmeter (the current required for maximum deflection).
*   $R_m$: The internal resistance of the voltmeter.
*   $V_{new}$: The new, extended maximum voltage to be measured.
*   $R_{sh}$: The required multiplier resistance.

When the voltage across the voltmeter is $V$, the current flowing through it is $I_{fsd}$.
$V = I_{fsd} \times R_m$

When the voltage applied to the extended range voltmeter is $V_{new}$, the total resistance in the circuit is $R_m + R_{sh}$. The current flowing through the circuit must still be $I_{fsd}$ to achieve full-scale deflection on the voltmeter.

$V_{new} = I_{fsd} \times (R_m + R_{sh})$

We can rewrite this as:
$V_{new} = I_{fsd} \times R_m + I_{fsd} \times R_{sh}$

Since $V = I_{fsd} \times R_m$, we substitute this into the equation:
$V_{new} = V + I_{fsd} \times R_{sh}$

Rearranging to find $R_{sh}$:
$V_{new} - V = I_{fsd} \times R_{sh}$

$R_{sh} = \frac{V_{new} - V}{I_{fsd}}$

Alternatively, we can express $I_{fsd}$ in terms of $V$ and $R_m$: $I_{fsd} = \frac{V}{R_m}$.
Substituting this into the equation for $R_{sh}$:
$R_{sh} = \frac{V_{new} - V}{\frac{V}{R_m}}$
$R_{sh} = \frac{R_m (V_{new} - V)}{V}$
$R_{sh} = R_m \left(\frac{V_{new}}{V} - 1\right)$

**Key Formula:** $R_{sh} = R_m \left(\frac{V_{new}}{V} - 1\right)$

*   $\frac{V_{new}}{V}$ is the **multiplication factor** for the voltage range.

### 3.4 Example Calculation
A voltmeter has a full-scale deflection current of 1 mA (0.001 A) and an internal resistance of 100 $\Omega$. It is intended to measure voltages up to 10 V. Calculate the multiplier resistance required to extend its range to 100 V.

**Given:**
*   $I_{fsd} = 1 \, \text{mA} = 0.001 \, \text{A}$
*   $R_m = 100 \, \Omega$
*   $V = 10 \, \text{V}$ (original full-scale voltage)
*   $V_{new} = 100 \, \text{V}$ (new desired full-scale voltage)

**Method 1: Using $R_{sh} = \frac{V_{new} - V}{I_{fsd}}$**
$R_{sh} = \frac{100 \, \text{V} - 10 \, \text{V}}{0.001 \, \text{A}}$
$R_{sh} = \frac{90 \, \text{V}}{0.001 \, \text{A}}$
$R_{sh} = 90,000 \, \Omega = 90 \, \text{k}\Omega$

**Method 2: Using $R_{sh} = R_m \left(\frac{V_{new}}{V} - 1\right)$**
$R_{sh} = 100 \, \Omega \left(\frac{100 \, \text{V}}{10 \, \text{V}} - 1\right)$
$R_{sh} = 100 \, \Omega (10 - 1)$
$R_{sh} = 100 \, \Omega \times 9$
$R_{sh} = 900 \, \Omega$

**Hold on! There's a mistake in the second method's result when applied directly.** Let's re-check the formula and application.

The original voltmeter measures up to $V = 10 \, \text{V}$ with current $I_{fsd} = 1 \, \text{mA}$ and $R_m = 100 \, \Omega$. This means the voltmeter itself has a maximum voltage rating of $V = I_{fsd} \times R_m = 0.001 \, \text{A} \times 100 \, \Omega = 0.1 \, \text{V}$.
**This indicates that the problem statement likely means the voltmeter's internal mechanism (galvanometer) has a full-scale deflection current of 1 mA and an internal resistance of 100 $\Omega$, and it has been previously scaled to read up to 10 V.**

Let's assume the original voltmeter reads up to 10V, and its internal components are:
*   $I_{fsd} = 1 \, \text{mA} = 0.001 \, \text{A}$
*   $R_m = 100 \, \Omega$

The voltage that the internal mechanism can *actually* measure is $V_{internal} = I_{fsd} \times R_m = 0.001 \, \text{A} \times 100 \, \Omega = 0.1 \, \text{V}$.
This means that to make it read 10V full scale, a series resistance must have already been present or the scaling is done through the dial. However, the standard approach to range extension assumes we start with the known internal parameters ($I_{fsd}$ and $R_m$).

Let's re-read the problem carefully: "A voltmeter has a full-scale deflection current of 1 mA (0.001 A) and an internal resistance of 100 $\Omega$. It is intended to measure voltages up to 10 V."
This implies that the voltmeter *as it is* can measure up to 10V. So, the $V$ in the formula should indeed be 10V.

Let's re-derive the formula using the concept of total resistance.

The original voltmeter measures $V=10 \, \text{V}$ at $I_{fsd}=1 \, \text{mA}$.
The resistance required to limit the current to 1mA at 10V is $R_{total\_original} = \frac{V}{I_{fsd}} = \frac{10 \, \text{V}}{0.001 \, \text{A}} = 10,000 \, \Omega$.
This $10,000 \, \Omega$ is the total resistance of the voltmeter for its 10V range. This total resistance is $R_m + R_{series\_original}$, where $R_{series\_original}$ is any existing series resistance.
So, $R_m = 100 \, \Omega$ means $R_{series\_original} = 10000 \, \Omega - 100 \, \Omega = 9900 \, \Omega$.

Now, to extend the range to $V_{new} = 100 \, \text{V}$:
The total resistance required for the new range is $R_{total\_new} = \frac{V_{new}}{I_{fsd}} = \frac{100 \, \text{V}}{0.001 \, \text{A}} = 100,000 \, \Omega$.

This new total resistance is $R_m + R_{sh} + R_{series\_original}$.
$100,000 \, \Omega = 100 \, \Omega + R_{sh} + 9900 \, \Omega$
$100,000 \, \Omega = 10,000 \, \Omega + R_{sh}$
$R_{sh} = 100,000 \, \Omega - 10,000 \, \Omega = 90,000 \, \Omega$.

This confirms the first calculation and the formula $R_{sh} = \frac{V_{new} - V}{I_{fsd}}$.

Let's re-examine the second formula $R_{sh} = R_m \left(\frac{V_{new}}{V} - 1\right)$.
Here, $V$ is the *original* full-scale voltage, and $R_m$ is the internal resistance of the moving coil galvanometer itself.
The problem states "A voltmeter has a full-scale deflection current of 1 mA (0.001 A) and an internal resistance of 100 $\Omega$." This implies $I_{fsd} = 1 \, \text{mA}$ and $R_m = 100 \, \Omega$.
And it "is intended to measure voltages up to 10 V." This means the voltmeter *as a whole unit* has a 10V range.
This implies that the original voltmeter uses its internal mechanism $R_m$ and *some other resistances* to measure 10V.

If we assume the voltmeter *only* consists of $R_m$ and needs to be extended:
Then the original voltage range would be $V = I_{fsd} \times R_m = 0.001 \, \text{A} \times 100 \, \Omega = 0.1 \, \text{V}$.
If this is the case, then to extend to 100V:
$R_{sh} = R_m \left(\frac{V_{new}}{V} - 1\right) = 100 \, \Omega \left(\frac{100 \, \text{V}}{0.1 \, \text{V}} - 1\right) = 100 \, \Omega (1000 - 1) = 100 \, \Omega \times 999 = 99,900 \, \Omega \approx 100 \, \text{k}\Omega$.

**This ambiguity needs to be clarified based on how the voltmeter is presented in the lab context.**
However, the standard way these problems are posed is that the voltmeter *as a device* has a range $V$, and we are adding a multiplier to extend it. The internal parameters ($I_{fsd}$ and $R_m$) are fundamental to the moving coil movement.

Let's assume the problem means:
Voltmeter's moving coil movement: $I_{fsd} = 1 \, \text{mA}$, $R_m = 100 \, \Omega$.
This movement is *configured* to be a voltmeter with a 10V range.

Therefore, when 10V is applied across the entire voltmeter, the current through the movement is 1mA.
The total resistance of the voltmeter for the 10V range is $R_{total\_10V} = V/I_{fsd} = 10 \, \text{V} / 0.001 \, \text{A} = 10,000 \, \Omega$.
This 10,000 $\Omega$ is made up of the internal resistance $R_m$ and any other series resistance already present in the voltmeter for the 10V range.

Now, to extend the range to 100V, the total resistance needed is $R_{total\_100V} = V_{new}/I_{fsd} = 100 \, \text{V} / 0.001 \, \text{A} = 100,000 \, \Omega$.
This new total resistance is $R_{total\_100V} = R_{total\_10V} + R_{sh}$ (where $R_{sh}$ is the *additional* multiplier resistance).
So, $100,000 \, \Omega = 10,000 \, \Omega + R_{sh}$.
$R_{sh} = 90,000 \, \Omega = 90 \, \text{k}\Omega$.

**Conclusion:** The formula $R_{sh} = \frac{V_{new} - V}{I_{fsd}}$ is correct when $V$ is the *existing* full-scale voltage of the voltmeter and $I_{fsd}$ is its full-scale deflection current. The internal resistance $R_m$ is used to understand the voltmeter's basic movement. If the voltmeter *already* has internal series resistance to achieve its 10V range, then adding $R_{sh}$ to this modified voltmeter effectively extends the range.

Let's use the definition of $R_m$ more directly:
The voltmeter's internal moving coil movement has resistance $R_m$. To make it read 10V full scale, a current of $I_{fsd} = 1 \, \text{mA}$ is required.
The voltage across the movement itself at full scale is $V_m = I_{fsd} \times R_m = 0.001 \, \text{A} \times 100 \, \Omega = 0.1 \, \text{V}$.
This means that for the 10V range, there must be an additional series resistance $R_{series\_original}$ such that $V = V_m + I_{fsd} \times R_{series\_original}$.
$10 \, \text{V} = 0.1 \, \text{V} + 0.001 \, \text{A} \times R_{series\_original}$
$9.9 \, \text{V} = 0.001 \, \text{A} \times R_{series\_original}$
$R_{series\_original} = 9900 \, \Omega$.

Now, to extend the range to 100V, the same current $I_{fsd}=1 \, \text{mA}$ must flow.
The total voltage is $V_{new} = 100 \, \text{V}$.
The total resistance required is $R_{total\_new} = \frac{V_{new}}{I_{fsd}} = \frac{100 \, \text{V}}{0.001 \, \text{A}} = 100,000 \, \Omega$.
This total resistance is the sum of the internal resistance of the movement, the original series resistance, and the new multiplier resistance:
$R_{total\_new} = R_m + R_{series\_original} + R_{sh}$
$100,000 \, \Omega = 100 \, \Omega + 9900 \, \Omega + R_{sh}$
$100,000 \, \Omega = 10,000 \, \Omega + R_{sh}$
$R_{sh} = 90,000 \, \Omega = 90 \, \text{k}\Omega$.

This confirms the result. The key is understanding that the voltmeter's *original range* ($V$) is achieved by the internal moving coil ($R_m$, $I_{fsd}$) plus whatever other series resistances are already present. The multiplier ($R_{sh}$) is added to this *entire existing voltmeter*.

### 3.5 Procedure for Range Extension
1.  **Identify Voltmeter Specifications:** Determine the full-scale deflection current ($I_{fsd}$), internal resistance ($R_m$), and the original voltage range ($V$) of the voltmeter.
2.  **Determine Desired New Range:** Decide on the new maximum voltage ($V_{new}$) you want to measure.
3.  **Calculate Multiplier Resistance:** Use the formula $R_{sh} = R_m \left(\frac{V_{new}}{V} - 1\right)$ or $R_{sh} = \frac{V_{new} - V}{I_{fsd}}$ to calculate the required multiplier resistance.
4.  **Select and Connect Multiplier:** Obtain a suitable resistor with the calculated value. Connect this resistor in **series** with the existing voltmeter terminals. Ensure the connections are secure.
5.  **Test the Extended Range:** Apply a voltage within the new range to verify the voltmeter's reading.

### 3.6 Important Considerations
*   **Multiplier Resistance Value:** The multiplier resistance must be precise. A deviation can lead to inaccurate readings. It should also have a high power rating if significant current is expected.
*   **Series Connection:** The multiplier resistor must *always* be connected in series with the voltmeter. A parallel connection would essentially create a shunt and would not extend the range; it would likely damage the voltmeter.
*   **Accuracy of $I_{fsd}$ and $R_m$:** The accuracy of the calculated multiplier resistance depends directly on the accuracy of the voltmeter's specified $I_{fsd}$ and $R_m$.
*   **Power Dissipation:** The multiplier resistance will dissipate power ($P = I_{fsd}^2 \times R_{sh}$). The resistor must be rated to handle this power to prevent overheating and failure.

### 3.7 Course Outcome Alignment
*   **CO4: Determine the calibration characteristics of various meters used in electrical systems.** While not directly calibration, understanding how to extend a voltmeter's range is crucial for its proper functioning and application in measuring different voltage levels. This also relates to understanding the "characteristics" of the meter (its internal resistance and sensitivity).

## 4. Practice Questions

**Question 1 (Wheatstone's Bridge):**
A Wheatstone's bridge is used to measure an unknown resistance $R_x$. The known resistances are $R_1 = 100 \Omega$, $R_2 = 200 \Omega$, and $R_3 = 300 \Omega$. If the bridge is balanced, what is the value of $R_x$?

**Answer 1:**
Using the balance condition $R_x = R_3 \frac{R_1}{R_2}$:
$R_x = 300 \, \Omega \times \frac{100 \, \Omega}{200 \, \Omega} = 300 \, \Omega \times 0.5 = 150 \, \Omega$.

**Question 2 (Wheatstone's Bridge):**
For maximum sensitivity in a Wheatstone bridge, the resistances in all four arms should be as close as possible. If an unknown resistance is expected to be around 500 $\Omega$, which of the following ratio arm settings would likely provide the best sensitivity?
a) $R_1 = 10 \Omega, R_2 = 1000 \Omega$
b) $R_1 = 100 \Omega, R_2 = 100 \Omega$
c) $R_1 = 1000 \Omega, R_2 = 10 \Omega$
d) $R_1 = 1 \Omega, R_2 = 1000 \Omega$

**Answer 2:**
b) $R_1 = 100 \Omega, R_2 = 100 \Omega$.
This setting makes the ratio arms equal ($R_1/R_2 = 1$), which is ideal for sensitivity, especially if the third arm ($R_3$) is also set close to the unknown resistance ($R_x \approx 500 \, \Omega$). Option b sets the ratio to 1, which is the most sensitive condition.

**Question 3 (Voltmeter Range Extension):**
A voltmeter has an internal resistance of $R_m = 2 \, \text{k}\Omega$ and a full-scale deflection current of $I_{fsd} = 50 \, \mu\text{A}$ ($0.00005 \, \text{A}$). Its original range is 0-10 V. What value of multiplier resistance must be added in series to extend its range to 0-50 V?

**Answer 3:**
Given:
$R_m = 2 \, \text{k}\Omega = 2000 \, \Omega$
$I_{fsd} = 50 \, \mu\text{A} = 0.00005 \, \text{A}$
Original range $V = 10 \, \text{V}$
New range $V_{new} = 50 \, \text{V}$

Using the formula $R_{sh} = \frac{V_{new} - V}{I_{fsd}}$:
$R_{sh} = \frac{50 \, \text{V} - 10 \, \text{V}}{0.00005 \, \text{A}}$
$R_{sh} = \frac{40 \, \text{V}}{0.00005 \, \text{A}}$
$R_{sh} = 800,000 \, \Omega = 800 \, \text{k}\Omega$.

Alternatively, using $R_{sh} = R_m \left(\frac{V_{new}}{V} - 1\right)$:
$R_{sh} = 2000 \, \Omega \left(\frac{50 \, \text{V}}{10 \, \text{V}} - 1\right)$
$R_{sh} = 2000 \, \Omega (5 - 1)$
$R_{sh} = 2000 \, \Omega \times 4$
$R_{sh} = 8000 \, \Omega = 8 \, \text{k}\Omega$.

**Wait, there's a significant discrepancy again!** Let's re-examine the interpretation of $R_m$ and $V$.

If $R_m = 2 \, \text{k}\Omega$ and $I_{fsd} = 50 \, \mu\text{A}$, then the voltage that the basic movement can measure is $V_{movement} = I_{fsd} \times R_m = 0.00005 \, \text{A} \times 2000 \, \Omega = 0.1 \, \text{V}$.
The problem states the original range is 0-10 V.
So, to achieve the 10V range from a 0.1V movement:
The total resistance required for the 10V range is $R_{total\_10V} = V/I_{fsd} = 10 \, \text{V} / 0.00005 \, \text{A} = 200,000 \, \Omega = 200 \, \text{k}\Omega$.
This 200 k$\Omega$ is $R_m + R_{series\_original}$.
$200 \, \text{k}\Omega = 2 \, \text{k}\Omega + R_{series\_original} \implies R_{series\_original} = 198 \, \text{k}\Omega$.

Now, to extend to 50V:
The total resistance required for the 50V range is $R_{total\_50V} = V_{new}/I_{fsd} = 50 \, \text{V} / 0.00005 \, \text{A} = 1,000,000 \, \Omega = 1 \, \text{M}\Omega$.
This new total resistance is $R_m + R_{series\_original} + R_{sh}$.
$1 \, \text{M}\Omega = 2 \, \text{k}\Omega + 198 \, \text{k}\Omega + R_{sh}$
$1 \, \text{M}\Omega = 200 \, \text{k}\Omega + R_{sh}$
$R_{sh} = 1 \, \text{M}\Omega - 200 \, \text{k}\Omega = 1,000,000 \, \Omega - 200,000 \, \Omega = 800,000 \, \Omega = 800 \, \text{k}\Omega$.

So, the first calculation using $R_{sh} = \frac{V_{new} - V}{I_{fsd}}$ is correct, and my second attempt using the $R_m \left(\frac{V_{new}}{V} - 1\right)$ formula interpretation was flawed due to not properly accounting for the existing series resistance in the voltmeter.

**Corrected understanding of $R_{sh} = R_m \left(\frac{V_{new}}{V} - 1\right)$:**
This formula is used when the voltmeter *itself* is considered to be *just* the moving coil mechanism with resistance $R_m$. In that case, the original range $V$ would be the voltage needed to drive $I_{fsd}$ through $R_m$ (which we found to be $0.1V$ in the example). If the problem intends for us to treat the *entire existing voltmeter* as a unit with range $V$ and then add $R_{sh}$ to it, the first formula is more direct.

In this lab context, it's more common to treat the voltmeter as a device with a stated range $V$ and given internal parameters $R_m, I_{fsd}$. Thus, $R_{sh} = \frac{V_{new} - V}{I_{fsd}}$ is the most appropriate formula.

**Question 4 (Voltmeter Range Extension - Multiple Choice):**
A voltmeter with an internal resistance of 1 k$\Omega$ and a full-scale deflection current of 1 mA is used to measure up to 20 V. To extend its range to 100 V, what multiplier resistance is needed?
a) 4 k$\Omega$
b) 80 k$\Omega$
c) 100 k$\Omega$
d) 400 k$\Omega$

**Answer 4:**
Given: $R_m = 1 \, \text{k}\Omega = 1000 \, \Omega$, $I_{fsd} = 1 \, \text{mA} = 0.001 \, \text{A}$, $V = 20 \, \text{V}$, $V_{new} = 100 \, \text{V}$.

Using $R_{sh} = \frac{V_{new} - V}{I_{fsd}}$:
$R_{sh} = \frac{100 \, \text{V} - 20 \, \text{V}}{0.001 \, \text{A}}$
$R_{sh} = \frac{80 \, \text{V}}{0.001 \, \text{A}}$
$R_{sh} = 80,000 \, \Omega = 80 \, \text{k}\Omega$.

The correct answer is **b) 80 k$\Omega$**.

## 5. Important Points to Remember

*   **Wheatstone's Bridge:** Primarily for medium resistances. Balance condition is key. Sensitivity is crucial for accuracy. Ratio arms are critical for adjusting the measurement range.
*   **Voltmeter Range Extension:** Achieved by adding a **multiplier resistor in series**. This limits the current through the voltmeter's movement for higher voltages.
*   **Multiplier Resistance Formula:** $R_{sh} = \frac{V_{new} - V}{I_{fsd}}$ is the most direct formula to use when the voltmeter's current sensitivity and its current range are known.
*   **Power Rating:** Ensure the multiplier resistor can handle the power dissipation.
*   **Connection:** Always connect the multiplier resistor in series.
