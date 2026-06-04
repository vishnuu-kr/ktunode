---
title: "Measurement of two port network parameters."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 4: Measurement of two port network parameters."
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35ce9"
status: "completed"
scrapedAt: "2026-05-23T16:11:55.441Z"
---
# CIRCUITS AND MEASUREMENTS LAB

## Module 4: Measurement of Two-Port Network Parameters

### Topic: Measurement of Two-Port Network Parameters

---

### 1. Introduction to Two-Port Networks

A two-port network is a fundamental concept in circuit analysis, particularly for analyzing complex circuits containing active and passive components. It's a circuit with two distinct pairs of terminals, each pair acting as a port.

**Key Concepts:**

*   **Port:** A pair of terminals through which current can enter or leave the network.
*   **Two-Port Network:** A network characterized by an input port and an output port.
*   **Reciprocal Network:** A network where the transfer characteristics are the same in both directions. For example, if a voltage applied to port 2 produces a current at port 1, the same voltage applied to port 1 will produce the same current at port 2.
*   **Symmetric Network:** A network where the input and output characteristics are identical.

**Importance of Two-Port Parameters:**

*   **Simplification of Complex Circuits:** Large and complex circuits can be represented as interconnected two-port networks, simplifying analysis.
*   **Characterization of Active and Passive Devices:** Transistors, amplifiers, filters, and transmission lines can all be modeled as two-port networks.
*   **System Analysis:** Facilitates the analysis of cascaded, parallel, or series combinations of networks.
*   **Design and Optimization:** Understanding parameter behavior aids in the design and optimization of electronic systems.

**Textbook References:**

*   **A. K. Sawhney:** Chapter 18, "Two-Port Networks." Sawhney provides a foundational understanding of two-port network representation and various parameter sets.
*   **J. B. Gupta:** Chapter 15, "Two-Port Network Parameters." Gupta offers detailed derivations and practical applications of these parameters.
*   **Kalsi H. S.:** Chapter 14, "Two-Port Network Analysis." Kalsi focuses on the practical aspects and measurement techniques.

---

### 2. Types of Two-Port Network Parameters

Two-port networks can be characterized by different sets of parameters, each offering a unique perspective on the network's behavior. The most common parameter sets are:

*   **Impedance (z) Parameters:** Open-circuit parameters.
*   **Admittance (y) Parameters:** Short-circuit parameters.
*   **Hybrid (h) Parameters:** A mix of impedance and admittance parameters.
*   **Transmission (ABCD) Parameters:** Forward and reverse transmission parameters.

**General Two-Port Network Equations:**

Let $V_1$, $I_1$ be the voltage and current at the input port, and $V_2$, $I_2$ be the voltage and current at the output port.

**(Note: Conventionally, $I_2$ is taken as flowing *out* of the network, so the equations use $-I_2$ for current flowing *into* the network at port 2.)**

---

#### 2.1 Impedance (z) Parameters

These parameters are defined under **open-circuit conditions** at the output port.

**Equations:**
$V_1 = z_{11}I_1 + z_{12}I_2$
$V_2 = z_{21}I_1 + z_{22}I_2$

**Parameter Definitions:**

*   $z_{11} = \frac{V_1}{I_1} \bigg|_{I_2=0}$ (Input Impedance with output open-circuited)
*   $z_{12} = \frac{V_1}{I_2} \bigg|_{I_1=0}$ (Reverse Transfer Impedance)
*   $z_{21} = \frac{V_2}{I_1} \bigg|_{I_2=0}$ (Forward Transfer Impedance)
*   $z_{22} = \frac{V_2}{I_2} \bigg|_{I_1=0}$ (Output Impedance with input open-circuited)

**Interpretation:**

*   $z_{11}$ and $z_{22}$ represent input and output impedances respectively, under the condition that the other port is open-circuited.
*   $z_{12}$ and $z_{21}$ represent transfer impedances. In a reciprocal network, $z_{12} = z_{21}$.

**Textbook Reference:** Sawhney (Chapter 18), Gupta (Chapter 15), Kalsi (Chapter 14).

---

#### 2.2 Admittance (y) Parameters

These parameters are defined under **short-circuit conditions** at the output port.

**Equations:**
$I_1 = y_{11}V_1 + y_{12}V_2$
$I_2 = y_{21}V_1 + y_{22}V_2$

**Parameter Definitions:**

*   $y_{11} = \frac{I_1}{V_1} \bigg|_{V_2=0}$ (Input Admittance with output short-circuited)
*   $y_{12} = \frac{I_1}{V_2} \bigg|_{V_1=0}$ (Reverse Transfer Admittance)
*   $y_{21} = \frac{I_2}{V_1} \bigg|_{V_2=0}$ (Forward Transfer Admittance)
*   $y_{22} = \frac{I_2}{V_2} \bigg|_{V_1=0}$ (Output Admittance with input short-circuited)

**Interpretation:**

*   $y_{11}$ and $y_{22}$ represent input and output admittances respectively, under the condition that the other port is short-circuited.
*   $y_{12}$ and $y_{21}$ represent transfer admittances. In a reciprocal network, $y_{12} = y_{21}$.

**Textbook Reference:** Sawhney (Chapter 18), Gupta (Chapter 15), Kalsi (Chapter 14).

---

#### 2.3 Hybrid (h) Parameters

These parameters mix voltage and current variables and are useful for characterizing active devices like transistors.

**Equations:**
$V_1 = h_{11}I_1 + h_{12}V_2$
$I_2 = h_{21}I_1 + h_{22}V_2$

**Parameter Definitions:**

*   $h_{11} = \frac{V_1}{I_1} \bigg|_{V_2=0}$ (Input Impedance with output short-circuited)
*   $h_{12} = \frac{V_1}{V_2} \bigg|_{I_1=0}$ (Reverse Voltage Transfer Ratio)
*   $h_{21} = \frac{I_2}{I_1} \bigg|_{V_2=0}$ (Forward Current Transfer Ratio)
*   $h_{22} = \frac{I_2}{V_2} \bigg|_{I_1=0}$ (Output Admittance with input open-circuited)

**Interpretation:**

*   $h_{11}$ is similar to $z_{11}$ (input impedance with output shorted).
*   $h_{12}$ is a voltage gain (often called reverse voltage gain).
*   $h_{21}$ is a current gain (often called forward current gain).
*   $h_{22}$ is similar to $y_{22}$ (output admittance with input open).

**Textbook Reference:** Sawhney (Chapter 18), Gupta (Chapter 15), Kalsi (Chapter 14).

---

#### 2.4 Transmission (ABCD) Parameters

These parameters are often used in transmission line theory and for analyzing cascaded networks. They relate the input voltage and current to the output voltage and current.

**Equations:**
$V_1 = AV_2 - BI_2$
$I_1 = CV_2 - DI_2$

**(Note: The minus sign in the equations for $I_1$ and $V_1$ is a common convention. Some texts might use $V_1 = AV_2 + BI_2$ and $I_1 = CV_2 + DI_2$ if $I_2$ is defined as flowing *into* the network.)**

**Parameter Definitions:**

*   $A = \frac{V_1}{V_2} \bigg|_{I_2=0}$ (Open-circuit forward voltage ratio)
*   $B = -\frac{V_1}{I_2} \bigg|_{V_2=0}$ (Open-circuit forward transfer impedance)
*   $C = \frac{I_1}{V_2} \bigg|_{I_2=0}$ (Open-circuit forward transfer admittance)
*   $D = -\frac{I_1}{I_2} \bigg|_{V_2=0}$ (Open-circuit reverse current ratio)

**Interpretation:**

*   These parameters describe how voltage and current at the input are related to voltage and current at the output.
*   They are particularly useful for analyzing cascaded two-port networks, as the ABCD parameters of the overall system are the product of the individual ABCD parameter matrices.

**Textbook Reference:** Sawhney (Chapter 18), Gupta (Chapter 15).

---

### 3. Measurement of Two-Port Network Parameters

Measuring these parameters involves applying known voltages or currents at one port while the other port is either open-circuited or short-circuited, and then measuring the resulting currents or voltages.

**General Procedure:**

1.  **Set up the circuit:** Connect the two-port network to the measurement instruments (power supply, voltmeter, ammeter, signal generator, oscilloscope).
2.  **Ensure correct port conditions:** For z-parameters, keep the output port open. For y-parameters, keep the output port shorted. For h-parameters, use a combination of open and short circuit conditions.
3.  **Apply excitation:** Apply a known voltage or current to the input port.
4.  **Measure response:** Measure the voltage and current at both ports.
5.  **Calculate parameters:** Use the measured values and the parameter definitions to calculate the parameter values.
6.  **Repeat for different conditions:** Vary the excitation or measure at the other port to determine all parameters.

**Important Equipment:**

*   **Signal Generator:** To provide controlled AC voltages.
*   **Oscilloscope:** To measure voltages and observe waveforms. Dual-channel oscilloscopes are essential for measuring voltages at both ports simultaneously.
*   **AC Voltmeters and Ammeters:** For RMS measurements.
*   **Resistors:** For creating open-circuit (high resistance) or short-circuit (low resistance) conditions, and for load impedance.
*   **Variable DC/AC Power Supply:** To provide excitation.

---

#### 3.1 Measurement of z-Parameters

**Circuit Setup:**

*   Connect a signal generator to the input port (Port 1).
*   Connect a voltmeter ($V_1$) across Port 1.
*   Connect an ammeter ($I_1$) in series with Port 1.
*   Leave Port 2 open-circuited.
*   Connect a voltmeter ($V_2$) across Port 2.

**Procedure:**

1.  **Measure $z_{11}$:**
    *   Set $I_2 = 0$ (by keeping Port 2 open).
    *   Apply a voltage $V_1$ across Port 1 and measure $I_1$.
    *   $z_{11} = \frac{V_1}{I_1} \bigg|_{I_2=0}$

2.  **Measure $z_{21}$:**
    *   Keep Port 2 open-circuited ($I_2 = 0$).
    *   Apply a voltage $V_1$ across Port 1 and measure $I_1$.
    *   Simultaneously, measure the voltage $V_2$ across Port 2.
    *   $z_{21} = \frac{V_2}{I_1} \bigg|_{I_2=0}$

3.  **Measure $z_{12}$:**
    *   Set $I_1 = 0$ (by keeping Port 1 open).
    *   Apply a voltage $V_2$ across Port 2 and measure $I_2$.
    *   Measure the voltage $V_1$ across Port 1.
    *   $z_{12} = \frac{V_1}{I_2} \bigg|_{I_1=0}$

4.  **Measure $z_{22}$:**
    *   Keep Port 1 open-circuited ($I_1 = 0$).
    *   Apply a voltage $V_2$ across Port 2 and measure $I_2$.
    *   $z_{22} = \frac{V_2}{I_2} \bigg|_{I_1=0}$

**Note:** This method requires keeping ports open, which can be challenging with inductive loads or at higher frequencies.

**Textbook Reference:** Sawhney (Chapter 18), Gupta (Chapter 15).

---

#### 3.2 Measurement of y-Parameters

**Circuit Setup:**

*   Connect a signal generator to the input port (Port 1).
*   Connect a voltmeter ($V_1$) across Port 1.
*   Connect an ammeter ($I_1$) in series with Port 1.
*   Short-circuit Port 2 (e.g., connect a very low resistance wire across it).
*   Connect a voltmeter ($V_2$) across Port 2 (this will be ideally zero if shorted perfectly).
*   Connect an ammeter ($I_2$) in series with Port 2 for measuring output current.

**Procedure:**

1.  **Measure $y_{11}$:**
    *   Set $V_2 = 0$ (by shorting Port 2).
    *   Apply a voltage $V_1$ across Port 1 and measure $I_1$.
    *   $y_{11} = \frac{I_1}{V_1} \bigg|_{V_2=0}$

2.  **Measure $y_{21}$:**
    *   Keep Port 2 short-circuited ($V_2 = 0$).
    *   Apply a voltage $V_1$ across Port 1 and measure $I_1$.
    *   Simultaneously, measure the current $I_2$ flowing out of Port 2.
    *   $y_{21} = \frac{I_2}{V_1} \bigg|_{V_2=0}$

3.  **Measure $y_{12}$:**
    *   Set $V_1 = 0$ (by shorting Port 1).
    *   Apply a voltage $V_2$ across Port 2 and measure $I_2$.
    *   Measure the current $I_1$ flowing into Port 1.
    *   $y_{12} = \frac{I_1}{V_2} \bigg|_{V_1=0}$

4.  **Measure $y_{22}$:**
    *   Keep Port 1 short-circuited ($V_1 = 0$).
    *   Apply a voltage $V_2$ across Port 2 and measure $I_2$.
    *   $y_{22} = \frac{I_2}{V_2} \bigg|_{V_1=0}$

**Note:** This method requires short-circuiting ports, which can be challenging with inductive loads or at higher frequencies. It's more suitable for networks with capacitive characteristics.

**Textbook Reference:** Sawhney (Chapter 18), Gupta (Chapter 15).

---

#### 3.3 Measurement of h-Parameters

**Circuit Setup:**

*   Connect a signal generator to the input port (Port 1).
*   Connect an ammeter ($I_1$) in series with Port 1.
*   Connect a voltmeter ($V_1$) across Port 1.
*   Connect an output load resistor ($R_L$) or a short circuit across Port 2.
*   Connect a voltmeter ($V_2$) across Port 2.
*   Connect an ammeter ($I_2$) in series with Port 2 (measuring current flowing out).

**Procedure:**

1.  **Measure $h_{11}$:**
    *   Short-circuit Port 2 ($V_2 = 0$).
    *   Apply a voltage $V_1$ across Port 1 and measure $I_1$.
    *   $h_{11} = \frac{V_1}{I_1} \bigg|_{V_2=0}$
    *   (This is the same as $z_{11}$ measured with output shorted).

2.  **Measure $h_{21}$:**
    *   Keep Port 2 short-circuited ($V_2 = 0$).
    *   Apply a current $I_1$ to Port 1 and measure the output current $I_2$.
    *   $h_{21} = \frac{I_2}{I_1} \bigg|_{V_2=0}$
    *   (This is also the same as $y_{21}$ when $V_1=0$ and $V_2$ is varied).

3.  **Measure $h_{12}$:**
    *   Open-circuit Port 2 ($I_2 = 0$).
    *   Apply a voltage $V_2$ across Port 2 and measure the resulting voltage $V_1$ at Port 1.
    *   $h_{12} = \frac{V_1}{V_2} \bigg|_{I_1=0}$
    *   (This is the same as $z_{12}$ measured with input open).

4.  **Measure $h_{22}$:**
    *   Open-circuit Port 2 ($I_2 = 0$).
    *   Apply a voltage $V_2$ across Port 2 and measure the resulting current $I_1$ into Port 1.
    *   $h_{22} = \frac{I_1}{V_2} \bigg|_{I_1=0}$
    *   (This is the same as $y_{22}$ measured with input open).

**Textbook Reference:** Sawhney (Chapter 18), Gupta (Chapter 15).

---

#### 3.4 Measurement of ABCD Parameters

ABCD parameters are often derived from other parameter sets (like z or y) rather than measured directly. However, some direct measurement methods exist.

**Method 1: Using Open and Short Circuit Conditions**

This method involves applying voltages and measuring currents under open and short circuit conditions.

1.  **Measure A and C:**
    *   Keep Port 2 open ($I_2 = 0$).
    *   Apply a voltage $V_1$ at Port 1 and measure $I_1$.
    *   Measure $V_2$ at Port 2.
    *   $A = \frac{V_1}{V_2} \bigg|_{I_2=0}$ (requires applying $V_2$ and measuring $V_1$ for direct measurement of A)
    *   $C = \frac{I_1}{V_2} \bigg|_{I_2=0}$ (requires applying $V_2$ and measuring $I_1$ for direct measurement of C)

2.  **Measure B and D:**
    *   Short-circuit Port 2 ($V_2 = 0$).
    *   Apply a voltage $V_1$ at Port 1 and measure $I_1$.
    *   Measure $I_2$ flowing out of Port 2.
    *   $B = -\frac{V_1}{I_2} \bigg|_{V_2=0}$ (requires applying $I_2$ and measuring $V_1$ for direct measurement of B)
    *   $D = -\frac{I_1}{I_2} \bigg|_{V_2=0}$ (requires applying $I_2$ and measuring $I_1$ for direct measurement of D)

**Method 2: Using Load Impedances (more practical for instrumentation)**

This method avoids perfect open/short circuits and uses practical loads.

1.  **Measure parameters with a known load $Z_{L1}$ at Port 2:**
    *   Apply $V_1$ and measure $I_1$.
    *   Measure $V_2$ and $I_2$ (where $I_2 = V_2 / Z_{L1}$).
    *   Substitute these values into the ABCD equations:
        *   $V_1 = AV_2 - BI_2$
        *   $I_1 = CV_2 - DI_2$

2.  **Measure parameters with a different known load $Z_{L2}$ at Port 2:**
    *   Repeat the above with $Z_{L2}$.
    *   This provides a second set of equations.

3.  **Solve the system of equations:** With two sets of measurements and four unknowns (A, B, C, D), you can solve for the parameters.

**Example:**

Let $Z_{L1} = R_1$ and $Z_{L2} = R_2$.
For $Z_{L1}$:
$V_1^{(1)} = AR_1 I_2^{(1)} - BR_1 I_2^{(1)}$
$I_1^{(1)} = C R_1 I_2^{(1)} - D I_2^{(1)}$

For $Z_{L2}$:
$V_1^{(2)} = AR_2 I_2^{(2)} - BR_2 I_2^{(2)}$
$I_1^{(2)} = C R_2 I_2^{(2)} - D I_2^{(2)}$

This method is more common in practical instrumentation setups.

**Textbook Reference:** Sawhney (Chapter 18), Gupta (Chapter 15).

---

### 4. Conversion Between Parameter Sets

It's often useful to convert from one parameter set to another. This is done through algebraic manipulation of the defining equations.

**Key Relationships:**

*   **z to y:**
    *   $y_{11} = \frac{z_{22}}{\Delta z}$, $y_{12} = -\frac{z_{12}}{\Delta z}$
    *   $y_{21} = -\frac{z_{21}}{\Delta z}$, $y_{22} = \frac{z_{11}}{\Delta z}$
    *   where $\Delta z = z_{11}z_{22} - z_{12}z_{21}$

*   **y to z:**
    *   $z_{11} = \frac{y_{22}}{\Delta y}$, $z_{12} = -\frac{y_{12}}{\Delta y}$
    *   $z_{21} = -\frac{y_{21}}{\Delta y}$, $z_{22} = \frac{y_{11}}{\Delta y}$
    *   where $\Delta y = y_{11}y_{22} - y_{12}y_{21}$

*   **z to h:**
    *   $h_{11} = \frac{\Delta z}{\Delta y}$, $h_{12} = -\frac{z_{12}}{\Delta y}$
    *   $h_{21} = -\frac{z_{21}}{\Delta y}$, $h_{22} = \frac{1}{\Delta y}$
    *   where $\Delta y$ is the determinant of y-parameters

*   **y to h:**
    *   $h_{11} = \frac{1}{y_{11}}$, $h_{12} = -\frac{y_{12}}{y_{11}}$
    *   $h_{21} = \frac{y_{21}}{y_{11}}$, $h_{22} = \frac{\Delta y}{y_{11}}$

*   **h to z:**
    *   $z_{11} = \frac{h_{11}}{\Delta h}$, $z_{12} = \frac{h_{12}}{\Delta h}$
    *   $z_{21} = -\frac{h_{21}}{\Delta h}$, $z_{22} = \frac{1}{\Delta h}$
    *   where $\Delta h = h_{11}h_{22} - h_{12}h_{21}$

*   **ABCD to z:**
    *   $z_{11} = \frac{A}{C}$, $z_{12} = \frac{\Delta_{ABCD}}{C}$
    *   $z_{21} = -\frac{1}{C}$, $z_{22} = \frac{D}{C}$
    *   where $\Delta_{ABCD} = AD - BC$

**Textbook Reference:** All textbooks provide detailed conversion formulas. Sawhney (Chapter 18) and Gupta (Chapter 15) are excellent resources for these.

---

### 5. Practical Considerations and Errors in Measurement

*   **Accuracy of Instruments:** The accuracy of voltmeters, ammeters, and signal generators directly impacts the measured parameter values.
*   **Instrument Loading:** Voltmeters have finite input impedance, and ammeters have finite series impedance, which can affect the circuit being measured.
*   **Open/Short Circuit Imperfections:** Achieving perfect open or short circuits is difficult. Real short circuits have small resistance, and open circuits have some stray capacitance.
*   **Frequency Effects:** Parameters can vary significantly with frequency, especially for reactive components and active devices. Measurements should be made at the intended operating frequency.
*   **Environmental Factors:** Temperature and humidity can affect component values and instrument readings.
*   **Calibration:** Instruments should be regularly calibrated to ensure accuracy.
*   **Two-Port Network Limitations:** These parameters are generally valid for linear, time-invariant (LTI) networks. For non-linear devices, specialized techniques are required.

**Addressing Errors:**

*   Use high-quality, calibrated instruments.
*   For open-circuit conditions, ensure the impedance of the measuring device is much higher than the load impedance at the port.
*   For short-circuit conditions, use low-resistance, short, and direct connections.
*   Consider using an oscilloscope with high input impedance to minimize loading effects.
*   Perform measurements at various frequencies to understand frequency response.

**Textbook Reference:** Kalsi H. S. (Chapter 14) emphasizes practical measurement issues and error analysis.

---

### 6. Linking to Course Outcomes (COs)

*   **CO1: Analyse voltage current phasor relations of RLC circuits (Knowledge Level: K3):** Understanding two-port parameters inherently involves analyzing the voltage-current relationships within a network, expressed through phasor representations. The parameters themselves are derived from these relationships.
*   **CO2: Verify DC network theorems by setting up various electric circuits (Knowledge Level: K3):** While this module focuses on AC, the principles of applying controlled sources and measuring responses to deduce circuit properties are similar to verifying DC theorems.
*   **CO3: Measure power in single and three phase circuits by various methods (Knowledge Level: K3):** This CO relates to measurement techniques. The careful measurement of voltages and currents to determine parameters is analogous to measuring power.
*   **CO4: Determine the calibration characteristics of various meters used in electrical systems (Knowledge Level: K3):** Accurate measurement of two-port parameters relies on the correct functioning and calibration of meters (voltmeters, ammeters). Understanding meter characteristics is crucial for interpreting measurement results.
*   **CO7: Determine electrical parameters using various bridges (Knowledge Level: K3):** Bridge circuits are another method for measuring electrical parameters (like R, L, C). While this module uses direct measurement, the underlying principle of using knowns to find unknowns is shared.

---

### 7. Practice Questions and Answers

**Question 1:** For a two-port network, if $V_1 = 2I_1 + 4I_2$ and $V_2 = 3I_1 + 5I_2$, what are the z-parameters?

**Answer:**
From the given equations:
$z_{11} = \frac{V_1}{I_1} \bigg|_{I_2=0} = 2 \ \Omega$
$z_{12} = \frac{V_1}{I_2} \bigg|_{I_1=0} = 4 \ \Omega$
$z_{21} = \frac{V_2}{I_1} \bigg|_{I_2=0} = 3 \ \Omega$
$z_{22} = \frac{V_2}{I_2} \bigg|_{I_1=0} = 5 \ \Omega$
So, the z-parameters are:
$z_{11} = 2 \ \Omega$, $z_{12} = 4 \ \Omega$, $z_{21} = 3 \ \Omega$, $z_{22} = 5 \ \Omega$.

**Question 2:** If the y-parameters of a two-port network are $y_{11} = 0.1 \ S$, $y_{12} = -0.02 \ S$, $y_{21} = 1.5 \ S$, and $y_{22} = 0.05 \ S$, calculate its corresponding z-parameters.

**Answer:**
First, calculate the determinant of the y-parameters:
$\Delta y = y_{11}y_{22} - y_{12}y_{21} = (0.1)(0.05) - (-0.02)(1.5)$
$\Delta y = 0.005 - (-0.03) = 0.005 + 0.03 = 0.035 \ S^2$

Now, use the conversion formulas:
$z_{11} = \frac{y_{22}}{\Delta y} = \frac{0.05}{0.035} = \frac{50}{35} = \frac{10}{7} \ \Omega \approx 1.43 \ \Omega$
$z_{12} = -\frac{y_{12}}{\Delta y} = -\frac{-0.02}{0.035} = \frac{0.02}{0.035} = \frac{20}{35} = \frac{4}{7} \ \Omega \approx 0.57 \ \Omega$
$z_{21} = -\frac{y_{21}}{\Delta y} = -\frac{1.5}{0.035} = -\frac{1500}{35} = -\frac{300}{7} \ \Omega \approx -42.86 \ \Omega$
$z_{22} = \frac{y_{11}}{\Delta y} = \frac{0.1}{0.035} = \frac{100}{35} = \frac{20}{7} \ \Omega \approx 2.86 \ \Omega$

**Question 3:** To measure $h_{11}$, what condition must be applied at the output port of the two-port network, and what quantities should be measured?

**Answer:**
To measure $h_{11}$ (input impedance), the output port (Port 2) must be **short-circuited** ($V_2 = 0$). The quantities to be measured are the input voltage ($V_1$) and the input current ($I_1$).
$h_{11} = \frac{V_1}{I_1} \bigg|_{V_2=0}$

**Question 4:** What is the primary advantage of using ABCD parameters for analyzing cascaded networks?

**Answer:**
The primary advantage is that the ABCD parameters of cascaded two-port networks are obtained by the **matrix multiplication** of the individual ABCD parameter matrices. If Network 1 has parameters $A_1, B_1, C_1, D_1$ and Network 2 has parameters $A_2, B_2, C_2, D_2$, and they are cascaded such that Network 1's output is connected to Network 2's input, the overall ABCD parameters $(A, B, C, D)$ are given by:
$\begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} A_1 & B_1 \\ C_1 & D_1 \end{bmatrix} \begin{bmatrix} A_2 & B_2 \\ C_2 & D_2 \end{bmatrix}$
This makes analysis of complex interconnected systems much simpler compared to other parameter sets.

---

### 8. Important Points to Remember

*   **Port Convention:** Be consistent with the convention for current direction (usually entering the network at Port 1 and leaving at Port 2).
*   **Open vs. Short Circuit:** Understand which parameter set is defined under which condition.
*   **Reciprocity:** For reciprocal networks, $z_{12} = z_{21}$ and $y_{12} = y_{21}$. This can be used as a check.
*   **Conversions:** Memorize or have the conversion formulas handy.
*   **Measurement Accuracy:** Be mindful of instrument limitations and potential loading effects.
*   **Frequency Domain:** Most parameter analysis is done in the frequency domain (using phasors).

---

### 9. Exercises

1.  **Derive the relationship between z-parameters and ABCD parameters.** (Hint: Use the defining equations and substitutions.)
2.  **A two-port network has the following h-parameters: $h_{11} = 100 \ \Omega$, $h_{12} = 0.01$, $h_{21} = 50$, $h_{22} = 0.001 \ S$. Calculate its y-parameters.**
3.  **Describe the experimental setup and procedure to measure the z-parameters of a given two-port network.**

---

This comprehensive set of notes covers the fundamental aspects of measuring two-port network parameters, aligning with the learning outcomes and course objectives. Referencing the provided textbooks will further solidify your understanding and provide deeper insights into the theoretical derivations and practical applications.
