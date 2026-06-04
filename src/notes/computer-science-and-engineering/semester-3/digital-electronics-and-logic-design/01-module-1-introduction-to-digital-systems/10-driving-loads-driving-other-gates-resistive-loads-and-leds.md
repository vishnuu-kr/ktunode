---
title: "Driving loads - driving other gates, resistive loads and LEDs."
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 1: Introduction to digital Systems :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad4a"
status: "completed"
scrapedAt: "2026-05-20T16:23:46.475Z"
---
# Digital Electronics and Logic Design: Module 1 - Introduction to Digital Systems
## Topic: Driving Loads - Driving Other Gates, Resistive Loads, and LEDs

**Learning Outcomes:**

*   Understand the concept of fan-out and its impact on gate performance.
*   Analyze the requirements for driving other logic gates.
*   Calculate appropriate resistor values for driving resistive loads.
*   Design circuits to drive LEDs using digital logic gates.
*   Explain the importance of current limiting when driving LEDs.
*   Identify the limitations of digital gates for driving high current loads.

**1. Introduction to Driving Loads**

Digital logic gates are designed to output either a high (logic 1) or low (logic 0) voltage.  However, these outputs are not ideal voltage sources and have limited current sourcing and sinking capabilities.  "Driving a load" refers to the ability of a logic gate to provide enough current at the correct voltage level to operate the load connected to its output. The 'load' could be another gate, a resistor, an LED, or other components.  Understanding driving loads is crucial for reliable circuit operation.

**2. Driving Other Logic Gates (Fan-Out)**

*   **Definition of Fan-Out:** Fan-out is the maximum number of logic gate inputs that a single gate output can drive reliably without compromising its performance.  A gate's output must provide sufficient current and voltage to drive all the inputs connected to it.

*   **Understanding Input and Output Characteristics:**
    *   **Input Low Current (I<sub>IL</sub>):** The maximum current that an input draws from the driving gate when the input is at a low voltage (V<sub>IL</sub>).
    *   **Input High Current (I<sub>IH</sub>):** The maximum current that an input draws from the driving gate when the input is at a high voltage (V<sub>IH</sub>).
    *   **Output Low Current (I<sub>OL</sub>):** The maximum current that the gate output can sink (draw in) when the output is at a low voltage (V<sub>OL</sub>).
    *   **Output High Current (I<sub>OH</sub>):** The maximum current that the gate output can source (provide) when the output is at a high voltage (V<sub>OH</sub>).
    *   **Input Low Voltage (V<sub>IL</sub>):**  The maximum input voltage considered a logic LOW.
    *   **Input High Voltage (V<sub>IH</sub>): The minimum input voltage considered a logic HIGH.
    *   **Output Low Voltage (V<sub>OL</sub>):**  The maximum output voltage when the output is at logic LOW.
    *   **Output High Voltage (V<sub>OH</sub>):** The minimum output voltage when the output is at logic HIGH.

*   **Fan-Out Calculation:**
    *   **Fan-Out for Low Output (N<sub>L</sub>):**  N<sub>L</sub> = |I<sub>OL</sub> / I<sub>IL</sub>| (The absolute value of I<sub>OL</sub> divided by I<sub>IL</sub>)
    *   **Fan-Out for High Output (N<sub>H</sub>):**  N<sub>H</sub> = |I<sub>OH</sub> / I<sub>IH</sub>| (The absolute value of I<sub>OH</sub> divided by I<sub>IH</sub>)
    *   **Fan-Out (N):** The minimum of N<sub>L</sub> and N<sub>H</sub>.   N = min(N<sub>L</sub>, N<sub>H</sub>)

*   **Example:**

    A particular logic gate has the following specifications:

    *   I<sub>OL</sub> = 8 mA
    *   I<sub>IL</sub> = 1.6 mA
    *   I<sub>OH</sub> = -400 μA (-0.4 mA)
    *   I<sub>IH</sub> = 10 μA (0.01 mA)

    Calculate the fan-out.

    *   N<sub>L</sub> = |8 mA / 1.6 mA| = 5
    *   N<sub>H</sub> = |-0.4 mA / 0.01 mA| = 40
    *   Fan-Out (N) = min(5, 40) = 5

    Therefore, the gate can reliably drive a maximum of 5 similar gate inputs.

*   **Consequences of Exceeding Fan-Out:**

    *   **Voltage Degradation:** The output voltage levels (V<sub>OL</sub> and V<sub>OH</sub>) may fall outside the acceptable ranges for logic levels, leading to incorrect operation of the driven gates.
    *   **Increased Propagation Delay:** The switching speed of the gate may be reduced, affecting the overall timing of the circuit.
    *   **Gate Damage:** In extreme cases, exceeding the current limits can damage the driving gate.

*   **Important Points to Remember:** Always consult the datasheet of the logic gates you are using to determine their input and output characteristics.

**3. Driving Resistive Loads**

*   **Calculating Resistor Values:** When driving a resistive load, the goal is to ensure the correct voltage and current are delivered to the load.

    *   **Output High (V<sub>OH</sub>):** When the gate output is high, the current flowing through the resistor is (V<sub>CC</sub> - V<sub>OH</sub>) / R, where V<sub>CC</sub> is the supply voltage. The gate must be able to source this current (I<sub>OH</sub>).  R should be chosen such that the current drawn is within the I<sub>OH</sub> specification.

    *   **Output Low (V<sub>OL</sub>):** When the gate output is low, the current flowing through the resistor is V<sub>OL</sub> / R. The gate must be able to sink this current (I<sub>OL</sub>). R should be chosen such that the current sunk is within the I<sub>OL</sub> specification.

*   **Example:**

    A 74LS04 inverter (V<sub>CC</sub> = 5V) drives a resistor R.  The 74LS04 datasheet provides the following (simplified) information:

    *   V<sub>OH</sub> (min) = 2.7 V
    *   I<sub>OH</sub> (max) = -0.4 mA
    *   V<sub>OL</sub> (max) = 0.5 V
    *   I<sub>OL</sub> (max) = 8 mA

    Determine the allowable range of values for R.

    *   **When Output is High:**  The current through the resistor is (V<sub>CC</sub> - V<sub>OH</sub>) / R = (5V - 2.7V) / R = 2.3V / R. This must be less than or equal to |I<sub>OH</sub>| = 0.4 mA.

        2.  3V / R <= 0.0004 A
        R >= 2.3V / 0.0004 A = 5750 ohms

    *   **When Output is Low:** The current through the resistor is V<sub>OL</sub> / R = 0.5V / R. This must be less than or equal to I<sub>OL</sub> = 8 mA.

        0.  5V / R <= 0.008 A
        R >= 0.5V / 0.008 A = 62.5 ohms

    Therefore, the value of R must be greater than or equal to 5750 ohms to satisfy the HIGH output condition, and greater than or equal to 62.5 ohms to satisfy the LOW output condition. For the circuit to work correctly, both conditions must be satisfied. So R >= 5750 ohms is selected.

**4. Driving LEDs**

*   **LED Characteristics:**
    *   **Forward Voltage (V<sub>F</sub>):** The voltage required across the LED for it to illuminate (typically 1.7V - 3.3V depending on the LED color).
    *   **Forward Current (I<sub>F</sub>):** The current required to achieve the desired brightness (typically 10mA - 20mA).  Exceeding the maximum I<sub>F</sub> can damage the LED.

*   **Current Limiting Resistor:**  A resistor is *always* required in series with the LED to limit the current and prevent damage.  The resistor value is calculated based on the supply voltage (V<sub>CC</sub>), the forward voltage of the LED (V<sub>F</sub>), and the desired forward current (I<sub>F</sub>).

*   **Resistor Calculation:**

    *   R = (V<sub>CC</sub> - V<sub>F</sub>) / I<sub>F</sub>

*   **Example:**

    Connect an LED (V<sub>F</sub> = 2V, I<sub>F</sub> = 20mA) to a 74LS04 inverter (V<sub>CC</sub> = 5V) output. Calculate the required resistor value. The LED is connected in series with the resistor between the inverter output and ground.

    R = (5V - 2V) / 0.02 A = 3V / 0.02 A = 150 ohms

    Therefore, a 150-ohm resistor is needed to limit the current to 20mA.  A standard value resistor close to 150 ohms (e.g., 150, 160, or 180 ohms) should be used.

*   **Connecting the LED:**
    *   **Anode (+):** Connect the longer leg of the LED (anode) to the resistor.  The resistor is then connected to the output of the logic gate.
    *   **Cathode (-):** Connect the shorter leg of the LED (cathode) to ground (or the negative terminal of the power supply).  This creates a "low-side switch".  The logic gate "pulls down" the voltage to ground when it outputs a logic LOW, turning the LED ON.  Conversely, when the gate outputs a logic HIGH, the LED turns OFF. This means the LED turns on for logic LOW and off for logic HIGH.  To reverse this, you would need a different circuit topology.

*   **Important Points to Remember:**
    *   **Always use a current limiting resistor.**
    *   Select a resistor value that keeps the current within the LED's specifications.
    *   Be mindful of the LED's polarity (anode and cathode).
    *   Check the output voltage characteristics (V<sub>OL</sub>, V<sub>OH</sub>) of the gate when driving LEDs to ensure correct operation.

**5. Limitations of Digital Gates for High Current Loads**

*   Standard logic gates have limited current sourcing and sinking capabilities.  Driving loads requiring significant current (e.g., motors, relays, large numbers of LEDs) directly from a logic gate can damage the gate or prevent the load from operating correctly.

*   **Solutions:**
    *   **Transistors:** Use a transistor (e.g., BJT or MOSFET) as a switch. The logic gate controls the transistor, which then switches the larger current to the load. The transistor acts as a current amplifier.
    *   **Relays:** Use a relay to switch higher voltage or current circuits.  The logic gate can control the relay coil current (often through a transistor), and the relay contacts then switch the main power to the load.
    *   **Gate Drivers:** Specialized gate driver ICs are designed to provide the high current and voltage needed to drive certain loads, such as MOSFET gates in power applications.

**Practice Questions:**

1.  A 74HC04 inverter has the following specifications: I<sub>OL</sub> = 4 mA, I<sub>IL</sub> = 1 mA, I<sub>OH</sub> = -0.4 mA, I<sub>IH</sub> = 0.001 mA.  What is its fan-out?
2.  An LED with V<sub>F</sub> = 1.8V and I<sub>F</sub> = 15mA is to be driven by a 5V logic gate. What resistor value is needed?
3.  Explain why a current limiting resistor is required when driving an LED with a digital logic gate.
4.  What happens if the fan-out of a gate is exceeded?
5.  Why can't a typical logic gate directly drive a small DC motor? What solution would you use?

**Answers:**

1.  N<sub>L</sub> = 4 mA / 1 mA = 4; N<sub>H</sub> = |-0.4 mA / 0.001 mA| = 400; Fan-Out = min(4, 400) = 4.
2.  R = (5V - 1.8V) / 0.015 A = 3.2V / 0.015 A = 213.33 ohms. Use a standard resistor value close to this, such as 220 ohms.
3.  The current limiting resistor prevents the LED from drawing excessive current, which would damage or destroy the LED. Without the resistor, the LED's forward voltage drop would cause a very high current flow from the gate's output, exceeding the gate and/or LED's maximum current rating.
4.  Exceeding the fan-out can lead to voltage degradation (V<sub>OL</sub> rising too high or V<sub>OH</sub> dropping too low), increased propagation delay, and potentially damage to the driving gate.
5.  A typical logic gate cannot directly drive a small DC motor because the motor requires significantly more current than the gate can provide. A transistor (e.g., BJT or MOSFET) can be used as a switch to control the motor. The logic gate output would control the base or gate of the transistor, which would then switch the higher current required by the motor. A flyback diode should also be added across the motor terminals to protect the transistor from inductive kickback.

**Important Points to Remember:**

*   Always consult datasheets for component specifications (current, voltage, fan-out).
*   Current limiting is crucial for LEDs and other sensitive loads.
*   Transistors or relays are needed for driving high-current loads.
*   Understanding the relationship between voltage, current, and resistance is fundamental to designing reliable digital circuits.
