---
title: "Single phase current regulated VSI –Tolerance band current control- Fixed  frequency operation - Single phase current source Inverters (IGBT based)- Comparison"
subject: "POWER ELECTRONICS AND DRIVES"
module: "Module 3: Switch mode DC"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e2a"
status: "completed"
scrapedAt: "2026-05-23T16:17:53.796Z"
---
# Module 3: Switch Mode DC - Single Phase Current Regulated VSI and CSI

This module delves into the operation and control of single-phase Voltage Source Inverters (VSIs) and Current Source Inverters (CSIs) with a focus on current regulation and fixed-frequency operation. We will explore different control strategies, analyze the behavior of these inverters, and compare their characteristics.

## Learning Outcomes Addressed:

*   **LO1:** Understand the principle of operation of single-phase current-regulated VSI with tolerance band current control and fixed frequency operation.
*   **LO2:** Understand the principle of operation of single-phase current source inverters (IGBT based).
*   **LO3:** Compare the single-phase current-regulated VSI and single-phase current source inverters.

## Course Outcomes Alignment:

*   **CO3:** Understand the features of different types of switch mode DC-AC Inverters and analyse the operation (Knowledge Level: K3). This module directly addresses CO3 by detailing the operation of single-phase VSIs and CSIs.

---

## 1. Single-Phase Current-Regulated VSI (Voltage Source Inverter)

A Voltage Source Inverter (VSI) is a DC-to-AC converter that uses a DC voltage source to synthesize an AC output voltage. In a current-regulated VSI, the control objective is to regulate the AC output current waveform, often to a sinusoidal shape.

### 1.1 Principle of Operation

The basic structure of a single-phase VSI consists of four switching elements (typically IGBTs with anti-parallel diodes) arranged in a bridge configuration. By controlling the switching sequence of these devices, a variable AC voltage can be generated from a DC input.

**Key Components:**

*   **DC Voltage Source ($V_{dc}$):** Provides the input DC power.
*   **Switching Elements:** IGBTs are commonly used for their fast switching speeds and efficiency. Each IGBT is typically paired with a freewheeling diode to handle inductive loads.
*   **Load:** The AC load to which the inverter is connected.

**Basic Operation (Square Wave Inverter):**

*   **Mode 1:** Switches S1 and S4 are ON. The DC voltage $V_{dc}$ is applied across the load in one direction.
*   **Mode 2:** Switches S2 and S3 are ON. The DC voltage $V_{dc}$ is applied across the load in the opposite direction.

This basic operation produces a quasi-square wave AC voltage. For sinusoidal output current, the voltage waveform needs to be modulated.

### 1.2 Tolerance Band Current Control

Tolerance band current control is a type of hysteresis or bang-bang control used in current-regulated VSIs to maintain the output current within a specified range around a reference current. This method offers fast dynamic response and simplicity.

**Concept:**

A reference current ($i_{ref}$) is generated, typically a sine wave for AC applications. The actual output current ($i_{out}$) is monitored. A hysteresis band (tolerance band) is defined around $i_{ref}$, with an upper limit ($i_{ref} + \Delta i$) and a lower limit ($i_{ref} - \Delta i$), where $\Delta i$ is the hysteresis width.

**Control Logic:**

*   If $i_{out}$ rises above the upper limit ($i_{ref} + \Delta i$), the inverter switches to reduce the current.
*   If $i_{out}$ falls below the lower limit ($i_{ref} - \Delta i$), the inverter switches to increase the current.

**Advantages:**

*   **Fast Dynamic Response:** The current closely follows the reference.
*   **Simplicity:** The control logic is straightforward.
*   **Self-Synchronizing:** No separate oscillator is required.

**Disadvantages:**

*   **Variable Switching Frequency:** The switching frequency is not constant and depends on the load impedance, DC voltage, and hysteresis band. This can lead to EMI issues and switching losses at higher frequencies.
*   **Current Ripple:** The output current has a ripple dictated by the hysteresis band.

**Example Application:**

In a grid-connected solar inverter, the objective is to inject sinusoidal current into the grid. Tolerance band control can be used to regulate this current based on a sinusoidal reference.

### 1.3 Fixed Frequency Operation

While tolerance band control offers fast response, its variable switching frequency can be problematic. To achieve fixed frequency operation in a current-regulated VSI, Pulse Width Modulation (PWM) techniques are employed.

**PWM Techniques:**

*   **Sinusoidal PWM (SPWM):** A sinusoidal reference wave is compared with a high-frequency triangular carrier wave. The switches are turned ON and OFF when the reference and carrier waveforms cross. This generates a variable-width pulse train that approximates a sine wave.
*   **Other PWM schemes:** Such as space vector PWM (SVPWM) for three-phase systems, can also be adapted for single-phase applications for better performance.

**How it achieves fixed frequency:**

The switching frequency of the PWM signal is determined by the frequency of the triangular carrier wave. By keeping the carrier frequency constant, the switching frequency of the inverter also remains constant.

**Advantages of Fixed Frequency:**

*   **Predictable EMI Spectrum:** Easier to design filters for electromagnetic interference (EMI).
*   **Reduced Switching Losses:** Switching losses are more predictable and can be optimized by selecting an appropriate carrier frequency.
*   **Easier for Harmonic Analysis:** Predictable switching patterns simplify harmonic analysis.

**Disadvantages of Fixed Frequency (compared to hysteresis):**

*   **Slower Dynamic Response:** The current may not track the reference as precisely as with hysteresis control, especially for rapid changes.
*   **Requires a Carrier Signal:** Needs a synchronized carrier signal generator.

**Important Point:** The term "current-regulated VSI with fixed frequency operation" implies using a PWM strategy to regulate the output current to be sinusoidal at a fixed fundamental frequency, while the switching occurs at a higher, fixed carrier frequency.

---

## 2. Single-Phase Current Source Inverters (IGBT Based)

A Current Source Inverter (CSI) is a DC-to-AC converter that uses a DC current source to synthesize an AC output current. Unlike VSIs, CSIs maintain a near-constant current in their DC link, which is supplied by a current source.

### 2.1 Principle of Operation

A single-phase CSI typically consists of four switching elements (IGBTs with anti-parallel diodes) connected in a bridge, with an inductor in series with the DC input. This inductor acts as the DC current source, smoothing out any current ripple.

**Key Components:**

*   **DC Current Source ($I_{dc}$):** This is a critical difference from VSI. It can be achieved using a large inductor in series with a DC voltage source, or a controlled current source itself. The inductor's primary role is to establish and maintain a nearly constant DC current.
*   **Switching Elements:** IGBTs with anti-parallel diodes are common.
*   **Load:** The AC load.

**Basic Operation (Square Wave Current Inverter):**

The control strategy for a CSI is different from a VSI. Instead of controlling voltage levels, it controls the switching to direct the constant DC current through the load in alternating directions.

*   **Mode 1:** Switches S1 and S4 are ON. The DC current $I_{dc}$ flows through the load in one direction.
*   **Mode 2:** Switches S2 and S3 are ON. The DC current $I_{dc}$ flows through the load in the opposite direction.

This operation produces a quasi-square wave AC current.

**Key Characteristics of CSIs:**

*   **Constant DC Current:** The output current magnitude is inherently regulated by the DC current source.
*   **Inductive Load Preferred:** CSIs are naturally suited for inductive loads. When connected to a capacitive load, a freewheeling path for the current is essential to prevent voltage spikes.
*   **Short-Circuit Robustness:** CSIs are generally more robust to short circuits on the AC side because the DC current source limits the fault current.
*   **Voltage Spikes:** Switching off inductive elements can lead to voltage spikes, necessitating proper snubber circuits.

### 2.2 IGBT-Based CSI Implementation

Modern CSIs often utilize IGBTs for their efficiency and controllability. The switching pattern is similar to that of a VSI bridge, but the control objective and the behavior of the DC link are different.

**Control for Sinusoidal Current:**

To achieve sinusoidal AC current output from a CSI, PWM techniques are used. However, the PWM strategy for a CSI is different from that of a VSI. Instead of modulating the voltage, the switching is controlled to shape the **current waveform**.

*   **Current Modulation:** A reference current is generated. The switching pattern of the IGBTs is controlled to ensure that the DC current is effectively switched through the load to synthesize the desired AC current waveform.
*   **Fixed DC Current:** The key is that the DC current $I_{dc}$ remains relatively constant throughout the operation, dictated by the DC current source.

**Example:**

A common way to generate sinusoidal current from a CSI is to use a PWM scheme where the fundamental component of the output current is controlled. The switching pattern effectively chops the DC current to create an AC current waveform with the desired fundamental frequency and amplitude.

---

## 3. Comparison: Single-Phase Current-Regulated VSI vs. Single-Phase CSI

Here's a comparison of the two inverter types based on their characteristics and operation.

| Feature                  | Single-Phase Current-Regulated VSI                                   | Single-Phase CSI (IGBT Based)                                   |
| :----------------------- | :------------------------------------------------------------------- | :-------------------------------------------------------------- |
| **DC Input**             | DC Voltage Source ($V_{dc}$)                                         | DC Current Source ($I_{dc}$), typically with a large inductor. |
| **Primary Controlled Quantity** | Output AC voltage waveform.                                          | Output AC current waveform.                                     |
| **Current Regulation**   | Achieved by modulating the output voltage (e.g., using PWM).       | Inherent in the DC current source, modulated by switching.      |
| **Load Type Suitability**| Can handle resistive, inductive, and capacitive loads.               | Naturally suited for inductive loads. Needs careful handling for capacitive loads. |
| **Short Circuit Robustness** | Less robust; short circuits can lead to high current and device failure if not protected. | More robust; the DC current source limits fault current.        |
| **Switching Frequency**  | Can be variable (hysteresis control) or fixed (PWM control).       | Typically controlled by the switching frequency of the IGBTs.   |
| **Commutation**          | Forced commutation (using gate signals).                             | Naturally commutated by the DC current (diodes assist).      |
| **Power Factor**         | Can control the power factor of the load.                            | Output current is sinusoidal, so power factor is determined by the load. |
| **Complexity**           | Control can be complex for precise current regulation (e.g., digital controllers). | Control can be simpler for current regulation, but DC current source management adds complexity. |
| **Output Ripple**        | Voltage ripple is inherent; current ripple depends on control.     | Current ripple depends on DC inductor and switching.             |
| **Efficiency**           | Generally higher efficiency for a wide range of loads.               | Efficiency can be lower due to the DC inductor losses and higher switching losses. |
| **Applications**         | UPS, AC motor drives, grid-connected inverters.                      | DC motor drives, battery chargers, welding power supplies.      |

**Important Considerations for Comparison:**

*   **Nature of the DC Source:** This is the most fundamental difference. A VSI is voltage-stiff, while a CSI is current-stiff.
*   **Control Strategy:** VSI control focuses on shaping the output voltage, while CSI control shapes the output current by modulating the DC current.
*   **Robustness:** The inherent current limiting of CSIs makes them more tolerant to short circuits.

---

## 4. Practice Questions and Answers

**Question 1:** What is the primary advantage of using tolerance band current control in a single-phase VSI?

**Answer 1:** The primary advantage of tolerance band current control is its **fast dynamic response**, allowing the output current to closely track the reference current. It is also relatively simple to implement.

**Question 2:** How does a single-phase CSI achieve a sinusoidal AC output current?

**Answer 2:** A single-phase CSI achieves a sinusoidal AC output current by using Pulse Width Modulation (PWM) techniques to control the switching of its IGBTs. This switching pattern effectively "chops" the constant DC current from the current source to synthesize the desired AC current waveform.

**Question 3:** List two disadvantages of tolerance band current control in VSIs.

**Answer 3:**
1.  **Variable switching frequency:** This can lead to unpredictable EMI.
2.  **Current ripple:** The output current has a ripple directly related to the hysteresis band.

**Question 4:** Which type of inverter, VSI or CSI, is inherently more robust to AC side short circuits and why?

**Answer 4:** The **CSI** is inherently more robust to AC side short circuits. This is because the DC current source limits the magnitude of the fault current that can be drawn, unlike a VSI where a short circuit can lead to very high currents if not properly protected.

**Question 5:** What is the main component responsible for establishing the DC current source in a typical CSI?

**Answer 5:** The main component responsible for establishing the DC current source is a **large inductor** connected in series with the DC input. This inductor smooths out current variations and acts as a current source.

---

## 5. Important Points to Remember

*   **VSI vs. CSI - DC Source:** VSI uses a DC voltage source; CSI uses a DC current source. This is the fundamental distinguishing factor.
*   **Control Objective:** VSI control aims to regulate the output voltage; CSI control aims to regulate the output current.
*   **Tolerance Band Control:** Offers fast response but variable switching frequency.
*   **Fixed Frequency Operation (for VSI):** Typically achieved using PWM techniques, offering predictable switching and easier EMI filtering.
*   **CSI Suitability:** CSIs are well-suited for inductive loads and are more robust to short circuits.
*   **IGBTs:** Both modern VSIs and CSIs commonly utilize IGBTs for their efficient switching capabilities.
*   **Harmonic Distortion:** Both inverter types, when using PWM, aim to minimize harmonic distortion in the output waveform.

---
