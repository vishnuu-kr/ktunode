---
title: "Signal conditioning for instrumentation systems: Voltage to Current Converter, Transducer bridges: null type and deflection bridges, AC bridges using push pull transducers"
subject: "ELECTRONIC INSTRUMENTATION"
module: "Module 2: Signal conditioning for instrumentation systems: Voltage to Current Converter, Transducer bridges: null type and deflection bridges, AC bridges using push pull transducers"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e78"
status: "completed"
scrapedAt: "2026-05-23T16:16:13.093Z"
---
# Module 2: Signal Conditioning for Instrumentation Systems

**Topic:** Voltage to Current Converter, Transducer Bridges: Null Type and Deflection Bridges, AC Bridges using Push-Pull Transducers

**Course Outcomes Addressed:**

*   **CO1:** Identify the sensors/transducers suitable for industrial applications. (Knowledge Level: K3)
*   **CO2:** Design the signal conditioning circuits for industrial instrumentation and automation. (Knowledge Level: K3)
*   **CO3:** Understand the concepts of data transmission methods applicable to electronic instrumentation systems. (Knowledge Level: K2)

---

## 1. Introduction to Signal Conditioning

Signal conditioning is a crucial stage in any instrumentation system. It involves the processing of raw signals from sensors/transducers to make them suitable for further processing, display, or transmission. This typically involves amplification, filtering, linearization, and converting the signal into a more usable format.

**Key Concepts:**

*   **Raw Signal:** The electrical output directly from a sensor/transducer, which might be small, noisy, or in an inappropriate format.
*   **Conditioned Signal:** The processed signal that is amplified, filtered, and converted to a standard format (e.g., 4-20 mA current loop, 0-5V voltage).

**Importance of Signal Conditioning (Ref: Kalsi, Ch 7):**

*   **Amplification:** To boost weak signals from transducers to measurable levels.
*   **Filtering:** To remove unwanted noise and interference.
*   **Linearization:** To correct non-linear outputs from certain transducers.
*   **Impedance Matching:** To ensure efficient power transfer between stages.
*   **Conversion:** To convert signals to standard formats for compatibility with other system components.

---

## 2. Voltage to Current (V/I) Converters

V/I converters are essential signal conditioning circuits that convert an input voltage signal into a proportional output current signal. This is particularly useful in industrial environments due to the robustness and noise immunity of current signals over long transmission distances. The 4-20 mA current loop is a ubiquitous standard in industrial process control.

### 2.1. Basic V/I Converter Principles

The core idea is to create a circuit where the output current ($I_{out}$) is directly proportional to the input voltage ($V_{in}$).

$I_{out} = k \times V_{in}$

where $k$ is the conversion constant.

### 2.2. Op-Amp Based V/I Converters

Operational amplifiers (op-amps) are widely used to implement V/I converters due to their high input impedance and low output impedance.

#### 2.2.1. V/I Converter with Load Connected to Ground

**Circuit Diagram:**

```
      R1
Vin o--/\/\/--+------o Vout
              |
              |     +-----o Iout
              +-----|
              |     |     RL
              |     +-----/\/\/--o
              |     |
             -ve    |
         Op-Amp     |
             +ve ---+
              |
             GND
```

**Explanation:**

*   The non-inverting input of the op-amp is connected to the input voltage ($V_{in}$).
*   The inverting input is connected to the junction of $R_1$ and the output.
*   The output current flows through the load resistor ($R_L$).

**Analysis:**

Since the op-amp tries to keep its inverting and non-inverting inputs at the same potential (virtual short), the voltage at the inverting input will be equal to $V_{in}$.

Voltage across $R_1 = V_{in} - V_{out}$
Current through $R_1 = \frac{V_{in} - V_{out}}{R_1}$

This current flows from the op-amp output into the junction.

Voltage across $R_L = I_{out} \times R_L$
The current flowing into the junction from $R_1$ is the output current.

$I_{out} = \frac{V_{in} - V_{out}}{R_1}$

However, the op-amp's output voltage is designed to adjust such that the current through $R_L$ is proportional to $V_{in}$. The key is that the op-amp output will force a voltage across $R_L$ to drive the desired current.

A more practical analysis of this circuit:
The op-amp output voltage will adjust to maintain $V_{in}$ at the inverting input. Therefore, the current through $R_1$ will be $I_{R1} = V_{in}/R_1$.
This current $I_{R1}$ is supplied by the op-amp output.
The op-amp output current is then forced through $R_L$.
So, $I_{out} = I_{R1} = \frac{V_{in}}{R_1}$.

**Key Points:**

*   The output current is independent of the load resistance ($R_L$), as long as $R_L$ is within the op-amp's output voltage and current capabilities.
*   The conversion constant is $k = 1/R_1$.
*   The op-amp must be able to swing its output voltage to provide the necessary current through $R_L$.

#### 2.2.2. V/I Converter with Load Connected to a Voltage Source (e.g., 20 mA loop)

This is more common for 4-20 mA applications.

**Circuit Diagram:**

```
      R1
Vin o--/\/\/--+------o
              |     +-----o Iout
              |     |     RL
              +-----|     /\/\/--o
              |     |     Vsup (e.g., 24V)
             -ve    |
         Op-Amp     |
             +ve ---+
              |
             GND
```

**Explanation:**

*   The non-inverting input of the op-amp is connected to $V_{in}$.
*   The inverting input is connected to the junction of $R_1$ and the load resistor $R_L$.
*   The load resistor $R_L$ is connected between the op-amp output and a supply voltage ($V_{sup}$).

**Analysis:**

The op-amp aims to keep $V_{in}$ at the inverting input.
The current through $R_1$ is $I_{R1} = V_{in}/R_1$.
This current is supplied by the op-amp output.
The op-amp output drives current through $R_L$ to maintain the voltage at the inverting input.
The current through $R_L$ is $I_{out}$.

The op-amp will adjust its output voltage ($V_{out\_opamp}$) such that the voltage at the inverting input is $V_{in}$.
The voltage at the inverting input is also $V_{sup} - I_{out} \times R_L$.
Therefore, $V_{in} = V_{sup} - I_{out} \times R_L$.

This isn't ideal as $I_{out}$ still depends on $V_{sup}$. A better V/I converter for current loops uses a slightly different topology.

#### 2.2.3. Improved V/I Converter (4-20 mA)

**Circuit Diagram:**

```
      R1
Vin o--/\/\/--+------o Vout (op-amp output)
              |
              |
              +------o
              |      |
              |      +-----o Iout
              |      |     RL
              +------|     /\/\/--o
              |      |     Vsup
             -ve     |
         Op-Amp      |
             +ve ----+
              |
             GND
```

**Explanation:**

*   The non-inverting input of the op-amp is connected to $V_{in}$.
*   The inverting input is connected to the junction of $R_1$ and the load resistor $R_L$.
*   $R_1$ is connected between the op-amp output and the inverting input.
*   $R_L$ is connected between the inverting input and ground.

**Analysis:**

Due to the virtual short, $V_{in}$ is also present at the inverting input.
The voltage across $R_1$ is $V_{out\_opamp} - V_{in}$.
The current through $R_1$ is $I_{R1} = (V_{out\_opamp} - V_{in})/R_1$.

The voltage across $R_L$ is $V_{in}$ (since the inverting input is at $V_{in}$ and the other end is grounded).
The current through $R_L$ is $I_{out} = V_{in}/R_L$.

This circuit is a **Voltage to Voltage converter with a fixed output impedance**. The current is determined by the voltage across $R_L$.

Let's reconsider a standard 4-20mA transmitter circuit. These often use a bridge, an op-amp, and a transistor.

**Standard 4-20 mA Transmitter Circuit (Conceptual):**

1.  **Sensing:** A transducer provides a voltage proportional to the measured parameter.
2.  **Amplification/Offset:** An op-amp amplifies and offsets this voltage to scale it for the 4-20 mA range. For instance, a 0-100°C input might need to map to 4-20 mA.
3.  **V/I Conversion:** A circuit, often involving a transistor (like a BJT or MOSFET) controlled by the op-amp's output, drives the current through a sensing resistor. The op-amp regulates the voltage across this sensing resistor, which in turn sets the output current.

**Example:** If the transducer output is 0-100 mV for 0-100°C, and we want 4-20 mA, we need to map 0 mV to 4 mA and 100 mV to 20 mA. This means a span of 100 mV corresponds to a change of 16 mA. The scaling factor is 16 mA / 100 mV = 0.16 mA/mV. An offset of 4 mA is also needed.

**Ref: Kalsi, Ch 7 (Signal Conditioning):** Discusses various amplifier configurations and their roles. V/I converters are a key application of operational amplifiers.

---

## 3. Transducer Bridges

Transducer bridges are electrical circuits used to measure changes in resistance, capacitance, or inductance of a transducer element. They are particularly useful for small changes in these parameters.

### 3.1. Wheatstone Bridge

The Wheatstone bridge is the most common type of transducer bridge. It consists of four resistors arranged in a diamond configuration.

**Circuit Diagram:**

```
      A
      |\
      | \
     R1  R2
      |   |
 Vin --+---+--o Output Voltage (Vout)
      |   |
     R3  Rx
      |   |
      | /
      |/
      B
```

**Explanation:**

*   $V_{in}$ is the excitation voltage.
*   $R_1$, $R_2$, and $R_3$ are known, fixed resistors.
*   $R_x$ is the transducer whose resistance changes with the measured physical quantity.
*   $V_{out}$ is the voltage difference between points A and B.

**Principle of Operation:**

The bridge is balanced when the voltage at point A is equal to the voltage at point B. This occurs when the ratio of resistances in adjacent arms is equal.

For balance: $\frac{R_1}{R_3} = \frac{R_2}{R_x}$

Or, $R_1 R_x = R_2 R_3$.

When $R_x$ changes, the bridge becomes unbalanced, and a voltage $V_{out}$ appears across the output terminals.

**Analysis for $V_{out}$:**

$V_A = V_{in} \times \frac{R_3}{R_1 + R_3}$
$V_B = V_{in} \times \frac{R_x}{R_2 + R_x}$

$V_{out} = V_A - V_B = V_{in} \left( \frac{R_3}{R_1 + R_3} - \frac{R_x}{R_2 + R_x} \right)$

If the bridge is initially balanced with $R_{x0}$ such that $R_1/R_3 = R_2/R_{x0}$, we can analyze the change in $V_{out}$ for a small change $\Delta R_x$ in $R_x$, so $R_x = R_{x0} + \Delta R_x$.

For small unbalance, the output voltage $V_{out}$ is approximately proportional to the change in resistance $\Delta R_x$.

**Ref: Sawhney, Ch 10 (Measurement of Resistance):** Provides a detailed analysis of the Wheatstone bridge.
**Ref: Gupta, Ch 10 (Bridge Methods):** Covers various bridge circuits, including the Wheatstone bridge.

---

### 3.2. Null Type Bridges

**Definition:** In a null type bridge, the output is adjusted (e.g., by varying one of the bridge arms) until a null detector (like a galvanometer or a sensitive voltmeter) indicates zero output voltage. The measurement is then made by reading the value of the variable component that achieves this null condition.

**Advantages:**

*   **High Accuracy:** The null condition is precise, leading to accurate measurements.
*   **Independence from Excitation Voltage:** The measurement is independent of the exact value of the excitation voltage, as long as it's sufficient to detect the null.
*   **Minimal Loading on Transducer:** The null detector draws negligible current, thus not loading the transducer.

**Disadvantages:**

*   **Manual Operation:** Typically requires manual adjustment, making it slow.
*   **Not Suitable for Dynamic Measurements:** Difficult to track rapidly changing quantities.

**Example:** The standard Wheatstone bridge can be used as a null type detector if $R_1$ or $R_3$ is made variable and adjusted until $V_{out} = 0$.

---

### 3.3. Deflection Type Bridges

**Definition:** In a deflection type bridge, the excitation voltage is applied to the bridge, and the output voltage ($V_{out}$) is directly measured. This output voltage is then correlated to the change in the transducer resistance. The deflection of a meter (or the reading on a digital voltmeter) indicates the magnitude of the measured quantity.

**Advantages:**

*   **Continuous and Direct Reading:** Provides a real-time reading.
*   **Suitable for Dynamic Measurements:** Can track changing quantities.
*   **Can be Automated:** Easily interfaced with electronic displays and control systems.

**Disadvantages:**

*   **Lower Accuracy:** The output reading depends on the accuracy of the excitation voltage and the calibration of the deflection instrument.
*   **Loading Effects:** The measuring instrument might draw some current, affecting the bridge balance.
*   **Sensitivity to Excitation Voltage Variations:** Changes in $V_{in}$ directly affect the output reading.

**Circuit Configuration:**

*   The Wheatstone bridge is configured with $R_x$ as the transducer.
*   $R_1$, $R_2$, $R_3$ are fixed values.
*   A voltmeter (or other measuring device) is connected across the output terminals.

**Ref: Doebelin's Measurement Systems, Ch 6 (Force and Torque):** Discusses the application of strain gauges in deflection bridge configurations. Strain gauges are common transducers used with Wheatstone bridges.

**Example:** Measuring temperature with a resistance temperature detector (RTD) using a Wheatstone bridge. As temperature changes, the RTD's resistance changes, causing the bridge to unbalance and produce a voltage output proportional to the temperature.

---

## 4. AC Bridges using Push-Pull Transducers

AC bridges are used to measure parameters that can be represented by changes in impedance (resistance, capacitance, inductance). Push-pull transducers are often used in differential configurations, where two elements respond oppositely to a physical stimulus.

### 4.1. Push-Pull Transducer Principle

A push-pull transducer typically involves two sensing elements that are affected in opposite ways by the same physical input. For example, in a strain gauge configuration, one gauge might be in tension while the other is in compression due to a force.

*   **Advantages:**
    *   **Increased Sensitivity:** The output is the sum of the effects on both elements, doubling the response.
    *   **Cancellation of Common-Mode Effects:** Environmental factors (like temperature changes) that affect both elements equally can be cancelled out.

### 4.2. AC Bridge Configurations for Push-Pull Transducers

Push-pull transducers are often employed in AC bridges to measure quantities like pressure, force, or acceleration. The bridge elements are typically reactances (capacitors or inductors) or resistances.

#### 4.2.1. Maxwell-Wien Bridge (for Inductance)

While not directly for push-pull strain gauges, it illustrates AC bridge principles. Used for measuring unknown inductance in terms of known resistance and capacitance.

#### 4.2.2. Schering Bridge (for Capacitance)

Used for measuring unknown capacitance and its dielectric loss.

#### 4.2.3. Application with Strain Gauges (using a modified Wheatstone bridge concept with AC excitation)

Consider a Wheatstone bridge where two arms are push-pull strain gauges.

**Circuit Diagram (Conceptual):**

```
      A
      |\
      | \
    Gauge1 Gauge2 (opposite effect)
      |   |
 Vin --+---+--o Output Voltage (Vout)
 (AC) |   |
    R_fixed R_fixed
      |   |
      | /
      |/
      B
```

*   Let $R_{gauge1} = R_0 + \Delta R$.
*   Let $R_{gauge2} = R_0 - \Delta R$ (due to push-pull action, where $\Delta R$ is the change in resistance due to the stimulus).
*   $R_0$ is the nominal resistance.

**Analysis:**

$V_A = V_{in} \times \frac{R_{fixed}}{R_{gauge1} + R_{fixed}} = V_{in} \times \frac{R_{fixed}}{(R_0 + \Delta R) + R_{fixed}}$
$V_B = V_{in} \times \frac{R_{fixed}}{R_{gauge2} + R_{fixed}} = V_{in} \times \frac{R_{fixed}}{(R_0 - \Delta R) + R_{fixed}}$

$V_{out} = V_A - V_B = V_{in} \left( \frac{R_{fixed}}{R_0 + \Delta R + R_{fixed}} - \frac{R_{fixed}}{R_0 - \Delta R + R_{fixed}} \right)$

For small $\Delta R$:
$V_{out} \approx V_{in} \times \frac{2 \Delta R \cdot R_{fixed}}{(R_0 + R_{fixed})^2}$

The output voltage is proportional to $\Delta R$, which is proportional to the measured physical quantity. Using AC excitation allows for phase-sensitive detection (PSD) which can further improve accuracy and distinguish between different types of impedance changes or distinguish signal from noise.

**Ref: Golding E.W and Widdis, Ch 12 (AC Bridges):** Discusses various AC bridge circuits and their applications, including those for measuring impedance.

**Ref: Tumanski, Ch 5 (Bridge Measurement):** Covers bridge circuits and their application with transducers like strain gauges.

**Key Benefits of AC Bridges with Push-Pull:**

*   **Sensitivity to Change:** Amplifies the effect of the transducer.
*   **Common-Mode Rejection:** Improves noise immunity by cancelling out common environmental effects.
*   **Phase Information:** AC bridges can provide information about the phase of the impedance, which can be useful for certain transducers.

---

## 5. Summary and Important Points to Remember

*   **Signal Conditioning:** Essential for preparing raw sensor signals for processing, display, or transmission.
*   **V/I Converters:** Convert voltage signals to current signals, commonly using op-amps. The 4-20 mA current loop is a standard in industrial automation for its robustness.
*   **Transducer Bridges:** Wheatstone bridge is the most common for resistive transducers.
    *   **Null Type:** High accuracy, manual adjustment, suitable for static measurements.
    *   **Deflection Type:** Continuous reading, faster, suitable for dynamic measurements, but less accurate and sensitive to excitation voltage.
*   **Push-Pull Transducers:** Used in differential configurations to increase sensitivity and cancel common-mode effects.
*   **AC Bridges:** Used for measuring impedance changes, often employing phase-sensitive detection for improved accuracy.

---

## 6. Practice Questions and Exercises

**Question 1:**
A voltage-to-current converter is to be designed to produce an output current of 4 mA to 20 mA for an input voltage range of 0 V to 5 V. Design a simple op-amp based V/I converter circuit and specify the component values required.

**Answer:**
We can use the V/I converter discussed in Section 2.2.1 or a modified version for current loops. Let's aim for a circuit that outputs 4-20mA for 0-5V.

Consider the circuit from section 2.2.3, but with an offset.
If $V_{in}$ goes from 0V to 5V.

A common method is to use a circuit that outputs a current $I_{out} = A \cdot V_{in} + B$.
We want:
When $V_{in} = 0$ V, $I_{out} = 4$ mA.
When $V_{in} = 5$ V, $I_{out} = 20$ mA.

The span is $20 \text{ mA} - 4 \text{ mA} = 16 \text{ mA}$.
The input span is $5 \text{ V} - 0 \text{ V} = 5 \text{ V}$.
The slope $A = \frac{16 \text{ mA}}{5 \text{ V}} = 3.2 \text{ mA/V}$.
The offset $B = 4 \text{ mA}$.
So, $I_{out} = 3.2 \text{ mA/V} \times V_{in} + 4 \text{ mA}$.

A standard 4-20mA transmitter circuit typically involves an op-amp and a transistor. A simpler conceptual V/I converter achieving this scaling is more complex than a basic V/I. However, if we consider a basic V/I where the output current is proportional to input voltage ($I_{out} = k \cdot V_{in}$), this is for unipolar signals (e.g., 0-20mA for 0-5V).

For a 4-20mA output, an offset is required. A common approach involves adding a constant current source to the output of a V/I converter.

Let's use a circuit that sets a voltage across a sensing resistor, which then determines the current.

Consider an op-amp where $V_{in}$ is applied to the non-inverting input. The output of this op-amp drives the base of a transistor (e.g., PNP) acting as a current source. A sensing resistor ($R_{sense}$) is placed in the emitter path of the transistor.

Let the op-amp output voltage be $V_{opamp}$.
The voltage across $R_{sense}$ would be $V_{opamp} - V_{BE\_transistor}$.
$I_{out} = \frac{V_{opamp} - V_{BE\_transistor}}{R_{sense}}$.

To achieve 4-20mA for 0-5V:
If $V_{in} = 0$, $V_{opamp}$ needs to be adjusted such that $I_{out} \approx 4$ mA.
If $V_{in} = 5$ V, $V_{opamp}$ needs to be adjusted such that $I_{out} \approx 20$ mA.

A common circuit uses a Burr-Brown VFC100 or similar dedicated IC.

**Simpler Op-Amp Circuit (Conceptual for proportional current):**
To get a 0-20mA output for 0-5V, we need $I_{out} = 4 \text{ mA/V} \times V_{in}$.
Using the circuit from Section 2.2.1, $I_{out} = V_{in}/R_1$.
To get 20 mA for 5 V, $R_1 = V_{in} / I_{out} = 5 \text{ V} / 20 \text{ mA} = 5 \text{ V} / 0.020 \text{ A} = 250 \text{ } \Omega$.
This would give 0-20 mA. To get 4-20 mA, an offset of 4 mA needs to be added. This is typically done by a separate constant current source.

**Question 2:**
Explain the difference between null type and deflection type transducer bridges. Under what conditions would you prefer one over the other?

**Answer:**
*   **Null Type Bridge:** The bridge is balanced by adjusting a component until the output voltage is zero (null). Measurement is taken from the adjusted component.
    *   **Preference:** High accuracy applications, static measurements, when precision is paramount and speed is not.
*   **Deflection Type Bridge:** The output voltage is measured directly with a meter. Measurement is taken from the meter reading.
    *   **Preference:** Dynamic measurements, real-time monitoring, applications where speed and continuous output are more important than absolute accuracy.

**Question 3:**
A Wheatstone bridge is used with a strain gauge where $R_1 = R_2 = R_3 = 120 \text{ } \Omega$. The excitation voltage is 10 V. If the strain gauge resistance changes from $120 \text{ } \Omega$ to $120.3 \text{ } \Omega$, calculate the output voltage of the bridge.

**Answer:**
Given: $R_1 = R_2 = R_3 = 120 \text{ } \Omega$, $V_{in} = 10$ V.
Initial $R_x = 120 \text{ } \Omega$.
New $R_x = 120.3 \text{ } \Omega$.

Using the formula for $V_{out}$:
$V_{out} = V_{in} \left( \frac{R_3}{R_1 + R_3} - \frac{R_x}{R_2 + R_x} \right)$

$V_A = V_{in} \times \frac{R_3}{R_1 + R_3} = 10 \text{ V} \times \frac{120 \text{ } \Omega}{120 \text{ } \Omega + 120 \text{ } \Omega} = 10 \text{ V} \times \frac{120}{240} = 10 \text{ V} \times 0.5 = 5 \text{ V}$.

$V_B = V_{in} \times \frac{R_x}{R_2 + R_x} = 10 \text{ V} \times \frac{120.3 \text{ } \Omega}{120 \text{ } \Omega + 120.3 \text{ } \Omega} = 10 \text{ V} \times \frac{120.3}{240.3}$
$V_B \approx 10 \text{ V} \times 0.500624 = 5.00624 \text{ V}$.

$V_{out} = V_A - V_B = 5 \text{ V} - 5.00624 \text{ V} = -0.00624 \text{ V} = -6.24 \text{ mV}$.

*(Note: The small change in resistance results in a small output voltage, which is typical for deflection bridges. Amplification is usually required.)*

**Question 4:**
What is the primary advantage of using push-pull transducers in bridge circuits compared to single element transducers?

**Answer:**
The primary advantages are:
1.  **Increased Sensitivity:** The output signal is effectively doubled as both elements contribute to the signal in opposite ways.
2.  **Common-Mode Rejection:** Environmental factors that affect both transducers equally (e.g., temperature changes, vibration) tend to cancel each other out, leading to better noise immunity and accuracy.

---
