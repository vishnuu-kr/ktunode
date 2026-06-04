---
title: "Static VI characteristics of Power Devices"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 1: Static VI characteristics of Power Devices"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36135"
status: "completed"
scrapedAt: "2026-05-23T16:18:01.814Z"
---
# POWER ELECTRONICS AND DRIVES LAB

## Module 1: Static VI Characteristics of Power Devices

### Topic: Static VI Characteristics of Power Devices

---

### Learning Outcomes:

*   **LO1:** To plot and analyze the static V-I characteristics of various power semiconductor devices like diodes, transistors (BJT, MOSFET), SCR, TRIAC, DIAC, IGBT, etc.
*   **LO2:** To understand the significance of different regions in the V-I characteristics (e.g., forward bias, reverse bias, breakdown region, on-state, off-state).
*   **LO3:** To determine key parameters from the V-I characteristics such as forward voltage drop, leakage current, breakdown voltage, holding current, latching current.
*   **LO4:** To compare the static V-I characteristics of different power semiconductor devices and identify their suitability for different applications.
*   **LO5:** To understand the impact of temperature on the static V-I characteristics of power devices.

---

### 1. Introduction to Power Semiconductor Devices

Power semiconductor devices are the building blocks of power electronic converters. Their operation relies on controlling the flow of electrical current using semiconductor properties. Understanding their static V-I (Voltage-Current) characteristics is fundamental to selecting and utilizing them effectively in circuit design.

**Definition:**
The **static V-I characteristic** of a power semiconductor device is a graphical representation of the relationship between the voltage across the device and the current flowing through it under steady-state (DC) conditions. It essentially describes how the device behaves electrically when a constant DC voltage is applied.

**Importance:**
*   **Device Selection:** Helps in choosing the right device for a specific application based on its voltage and current handling capabilities, switching speed, and on-state voltage drop.
*   **Parameter Extraction:** Allows for the determination of critical parameters like breakdown voltage, forward voltage drop, and leakage current.
*   **Understanding Operation:** Provides insights into the device's conduction, blocking, and switching modes.
*   **Fault Analysis:** Aids in understanding failure mechanisms and device behavior under fault conditions.

**Reference:**
*   "Power Electronics- Essentials and Applications" by L. Umanand discusses the fundamental characteristics of various power semiconductor devices in Chapter 1.
*   "Power Electronics- Converters, Applications and Design" by Mohan, Undeland, Robbins provides detailed V-I characteristics of diodes, transistors, and thyristors in their respective chapters.

---

### 2. General V-I Characteristics of a Semiconductor Junction

Before diving into specific devices, it's crucial to recall the behavior of a basic PN junction diode, as many power devices are based on this principle.

#### 2.1 PN Junction Diode

The V-I characteristic of a PN junction diode can be divided into three main regions:

*   **Forward Bias Region:**
    *   When the applied voltage ($V_D$) is positive and greater than the cut-in voltage ($V_{\gamma}$ or $V_{on}$), the diode conducts significant current ($I_D$).
    *   The forward voltage drop is relatively small and increases gradually with current.
    *   **Key Parameters:**
        *   **Cut-in Voltage ($V_{\gamma}$ or $V_{on}$):** The threshold voltage beyond which the diode starts conducting significantly. (Approx. 0.7V for Silicon, 0.3V for Germanium).
        *   **Forward Voltage Drop ($V_F$):** The voltage across the diode in the forward conducting state.
        *   **Forward Current ($I_F$):** The current flowing through the diode in the forward direction.
*   **Reverse Bias Region:**
    *   When the applied voltage ($V_D$) is negative, the diode ideally blocks current.
    *   A very small leakage current ($I_R$) flows due to minority carriers.
    *   **Key Parameters:**
        *   **Reverse Leakage Current ($I_R$):** The small current that flows in the reverse direction. This is temperature-dependent.
*   **Breakdown Region (Reverse Breakdown):**
    *   If the reverse voltage exceeds a certain limit called the **breakdown voltage ($V_{BR}$)**, the diode breaks down and conducts a large reverse current, potentially leading to damage if not limited.
    *   This breakdown can occur due to Zener breakdown or Avalanche breakdown mechanisms.

**Example:**
Imagine connecting a battery and a resistor in series with a diode. As you increase the battery voltage, initially, no current flows. Once the battery voltage exceeds the diode's cut-in voltage, the diode starts conducting, and current flows through the resistor and diode. If you reverse the battery, only a tiny leakage current flows until the reverse voltage becomes too high, causing breakdown.

---

### 3. Static V-I Characteristics of Common Power Semiconductor Devices

#### 3.1 Power Diode (Rectifier Diode)

**Structure:** Similar to a PN junction diode but optimized for high voltage and current handling with a wider depletion region.

**V-I Characteristics:**
*   **Forward Bias:** Similar to a small-signal diode but with a higher forward voltage drop (typically 0.7V to 1.5V depending on current and device type) and much higher forward current capability.
*   **Reverse Bias:** Exhibits a very low leakage current until the reverse breakdown voltage is reached.
*   **Breakdown Region:** Similar to PN junction diode, but with a specific reverse breakdown voltage rating.

**Key Parameters:**
*   **Forward Voltage Drop ($V_F$):** Higher than small-signal diodes, influencing conduction losses.
*   **Peak Inverse Voltage (PIV) / Stand-off Voltage ($V_{RRM}$):** The maximum reverse voltage the diode can withstand without breakdown.
*   **Surge Current Rating:** Maximum forward current the diode can handle for a short duration.

**Applications:** Rectification, freewheeling, protection circuits.

**Reference:**
*   Chapter 2 of "Power Electronics by D.W. Hart" details the characteristics and applications of power diodes.
*   "Power Electronics- Devices, Circuits and Applications" by Rashid provides detailed V-I curves and parameter explanations for power diodes.

#### 3.2 Silicon Controlled Rectifier (SCR) / Thyristor

**Structure:** A four-layer PNPN device with three terminals: Anode (A), Cathode (K), and Gate (G).

**V-I Characteristics:**
*   **Forward Blocking Region:**
    *   When the anode is positive with respect to the cathode ($V_{AK} > 0$) and no gate current is applied ($I_G = 0$), the SCR acts like an open switch, blocking current.
    *   A small leakage current flows.
    *   If $V_{AK}$ exceeds the **forward breakover voltage ($V_{BO}$)**, the SCR switches ON.
*   **Forward Conducting Region (ON-State):**
    *   Once triggered by a gate pulse (and $V_{AK} > 0$), the SCR turns ON and conducts current from anode to cathode.
    *   It remains ON even if the gate signal is removed, as long as the anode current ($I_A$) is greater than the **holding current ($I_H$)**.
    *   The ON-state voltage drop ($V_{TM}$) is relatively low and constant.
*   **Reverse Blocking Region:**
    *   When the anode is negative with respect to the cathode ($V_{AK} < 0$), the SCR blocks current, similar to a reverse-biased diode.
    *   A small leakage current flows.

**Key Parameters:**
*   **Forward Breakover Voltage ($V_{BO}$):** The minimum forward voltage required to turn the SCR ON without a gate signal. It is reduced by a positive gate current.
*   **Holding Current ($I_H$):** The minimum anode current required to maintain conduction after the SCR has been triggered.
*   **Latching Current ($I_L$):** The minimum anode current that must be reached to ensure that the SCR remains ON after the gate signal is removed. ($I_L > I_H$).
*   **Gate Trigger Current ($I_{GT}$):** The minimum gate current required to trigger the SCR under specified conditions.
*   **Forward Voltage Drop ($V_{TM}$):** The voltage drop across the SCR in the conducting state.

**Turning OFF:** An SCR turns OFF when the anode current falls below the holding current ($I_H$) or when the anode-cathode voltage is reversed. This is called **commutation**.

**Example:**
An SCR can be used to control the power delivered to a load. By applying a short gate pulse at a specific point in the AC cycle, the SCR switches ON, allowing current to flow through the load for the remainder of that half-cycle. By varying the timing of the gate pulse, the average power delivered to the load can be controlled.

**Reference:**
*   Chapter 3 of "Power Electronics- Essentials and Applications" by L. Umanand provides a detailed analysis of SCR characteristics.
*   "Power Electronics- Converters, Applications and Design" by Mohan, Undeland, Robbins extensively covers thyristor characteristics and triggering in Chapter 3.

#### 3.3 TRIAC (Triode for Alternating Current)

**Structure:** Essentially two SCRs connected in inverse-parallel, with a single gate terminal. It can conduct in both directions.

**V-I Characteristics:**
*   The V-I characteristics are symmetrical in the first and third quadrants, allowing conduction in both positive and negative half-cycles of an AC supply.
*   Similar to SCRs, TRIACs have forward blocking, forward conducting, and reverse blocking regions.
*   **Triggering:** Can be triggered by a gate pulse in any of the four quadrants (depending on the polarity of $V_{MT1}$ and the polarity of $V_G$). Quadrant 1 (positive $V_{MT2}$, positive $V_G$) and Quadrant 3 (negative $V_{MT2}$, negative $V_G$) are the most sensitive.
*   **Holding Current ($I_H$):** Similar to SCRs, TRIACs have a holding current. If the main terminal current drops below $I_H$, the device turns OFF.
*   **Commutation:** TRIACs naturally commutate (turn off) at the zero-crossing of the current in AC circuits.

**Key Parameters:**
*   **Main Terminal Voltages ($V_{MT1}$, $V_{MT2}$):** The two main current-carrying terminals.
*   **Gate Terminal ($G$):** Used for triggering.
*   **Holding Current ($I_H$):** The minimum current to maintain conduction.
*   **Latching Current ($I_L$):** The minimum current to ensure turn-on.
*   **Trigger Current ($I_{GT}$):** Gate current required for triggering.

**Applications:** AC power control, such as light dimming and fan speed control.

**Reference:**
*   Chapter 5 of "Power Electronics by D.W. Hart" covers TRIAC characteristics and applications.
*   "Power Electronics- Devices, Circuits and Applications" by Rashid offers a comprehensive study of TRIACs.

#### 3.4 DIAC (Diode for Alternating Current)

**Structure:** A two-layer, two-terminal semiconductor device that conducts in both directions when the applied voltage exceeds its **breakover voltage ($V_{BO}$)**.

**V-I Characteristics:**
*   **Blocking Region:** In both forward and reverse directions, it blocks current until the applied voltage reaches $V_{BO}$.
*   **Breakdown Region:** Once the voltage exceeds $V_{BO}$ (either positive or negative), the DIAC breaks down and conducts current. The voltage across it then drops to a lower **breakover voltage** value and stays relatively constant.
*   **Negative Resistance Region:** Between the breakdown point and the point where conduction is established, the DIAC exhibits a negative resistance characteristic.
*   **Turn-OFF:** It turns OFF when the current through it falls below its **holding current ($I_H$)**.

**Key Parameters:**
*   **Breakover Voltage ($V_{BO}$):** The voltage at which the DIAC starts conducting in either direction. It has a specified range.
*   **Holding Current ($I_H$):** The minimum current to keep the DIAC conducting.

**Applications:** Primarily used in conjunction with TRIACs for triggering. The DIAC, in a simple RC triggering circuit, provides a sharp voltage pulse to trigger the TRIAC reliably once the capacitor voltage reaches the DIAC's breakover voltage.

**Reference:**
*   The TRIAC section in "Power Electronics- Essentials and Applications" by L. Umanand often includes DIAC operation for triggering.
*   "Power Electronics- Converters, Applications and Design" by Mohan, Undeland, Robbins discusses DIACs in the context of TRIAC triggering circuits.

#### 3.5 Insulated Gate Bipolar Transistor (IGBT)

**Structure:** A hybrid device combining the high input impedance of MOSFETs with the low ON-state conduction losses of BJTs. It has three terminals: Gate (G), Collector (C), and Emitter (E).

**V-I Characteristics:**
*   **Input (Gate-Emitter) Characteristics:** Similar to a MOSFET, the gate-emitter voltage ($V_{GE}$) controls the conductivity of the channel. A threshold voltage ($V_{GE(th)}$) must be exceeded for the device to conduct.
*   **Output (Collector-Emitter) Characteristics:**
    *   **Off-State:** When $V_{GE} < V_{GE(th)}$, the IGBT blocks current between collector and emitter, acting like an open switch. A small leakage current flows.
    *   **On-State:** When $V_{GE}$ is sufficiently high, the IGBT conducts current from collector to emitter. The ON-state voltage drop ($V_{CE(sat)}$) is relatively low, especially at high currents, and is primarily determined by the voltage drop across the internal bipolar transistor's collector-emitter saturation voltage.
    *   **Breakdown Voltage:** IGBTs have a rated breakdown voltage between collector and emitter.

**Key Parameters:**
*   **Gate Threshold Voltage ($V_{GE(th)}$):** The minimum $V_{GE}$ required to initiate conduction.
*   **Collector-Emitter Saturation Voltage ($V_{CE(sat)}$):** The voltage drop across the IGBT in the ON-state.
*   **Collector-Emitter Breakdown Voltage ($V_{CE(max)}$):** The maximum voltage the IGBT can withstand in the OFF state.
*   **Gate-Emitter Voltage ($V_{GE}$):** Controls the turn-on and conductivity.
*   **Collector Current ($I_C$):** The current flowing through the IGBT.

**Applications:** High-power switching applications like motor drives, uninterruptible power supplies (UPS), and induction heating.

**Reference:**
*   Chapter 4 of "Power Electronics- Essentials and Applications" by L. Umanand covers the IGBT in detail.
*   "Power Electronics- Devices, Circuits and Applications" by Rashid provides comprehensive information on IGBT characteristics.
*   "Power Electronics- Converters, Applications and Design" by Mohan, Undeland, Robbins dedicates a chapter to IGBTs and their V-I curves.

#### 3.6 Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET) - Power MOSFET

**Structure:** A voltage-controlled device with a gate electrode insulated from the channel by a thin oxide layer. Terminals are Gate (G), Drain (D), and Source (S).

**V-I Characteristics:**
*   **Input (Gate-Source) Characteristics:**
    *   The gate-source voltage ($V_{GS}$) controls the conductivity of the channel between drain and source.
    *   **Threshold Voltage ($V_{GS(th)}$):** The minimum $V_{GS}$ needed to create a conducting channel.
    *   The gate current is virtually zero in the DC steady state due to the insulating oxide layer.
*   **Output (Drain-Source) Characteristics:**
    *   **Off-State:** When $V_{GS} < V_{GS(th)}$, the MOSFET blocks current, acting as an open switch. A very small leakage current flows.
    *   **On-State:** When $V_{GS} > V_{GS(th)}$, the MOSFET conducts current from drain to source. The ON-state resistance ($R_{DS(on)}$) is the key parameter. As current increases, the voltage drop ($V_{DS} = I_D \times R_{DS(on)}$) increases. Power MOSFETs are designed for low $R_{DS(on)}$.
    *   **Breakdown Voltage:** Power MOSFETs have a specified Drain-Source breakdown voltage ($V_{DS(max)}$).

**Key Parameters:**
*   **Gate Threshold Voltage ($V_{GS(th)}$):** Minimum $V_{GS}$ for conduction.
*   **Drain-Source ON-State Resistance ($R_{DS(on)}$):** The resistance of the MOSFET when fully turned ON. Lower is better for conduction losses.
*   **Drain-Source Breakdown Voltage ($V_{DS(max)}$):** Maximum voltage the MOSFET can block.
*   **Drain Current ($I_D$):** The current flowing through the MOSFET.

**Applications:** High-frequency switching applications like switch-mode power supplies (SMPS), DC-DC converters, and motor control due to their fast switching speed.

**Reference:**
*   Chapter 4 of "Power Electronics by D.W. Hart" provides an in-depth look at Power MOSFETs.
*   "Power Electronics- Devices, Circuits and Applications" by Rashid covers MOSFET characteristics and their use in power applications.

#### 3.7 Bipolar Junction Transistor (BJT) - Power BJT

**Structure:** A current-controlled device with three terminals: Base (B), Collector (C), and Emitter (E).

**V-I Characteristics:**
*   **Input (Base-Emitter) Characteristics:**
    *   The base current ($I_B$) controls the collector current ($I_C$).
    *   Similar to a diode, a base-emitter voltage ($V_{BE}$) must exceed a threshold (around 0.7V for Silicon) for the base to conduct and for the transistor to turn ON.
*   **Output (Collector-Emitter) Characteristics:**
    *   **Off-State:** When $I_B$ is zero or very low, the BJT blocks current, acting as an open switch. A small leakage current flows.
    *   **On-State (Saturation Region):** When sufficient base current is supplied, the BJT enters saturation and conducts heavily. The collector-emitter voltage ($V_{CE(sat)}$) is low.
    *   **Active Region:** The collector current is approximately proportional to the base current ($I_C \approx \beta I_B$), where $\beta$ is the current gain.
    *   **Breakdown Voltage:** Power BJTs have specified breakdown voltages ($V_{CEO}$, $V_{CBO}$).

**Key Parameters:**
*   **Base-Emitter Voltage ($V_{BE}$):** Voltage required to forward-bias the base-emitter junction.
*   **Base Current ($I_B$):** Controls the collector current.
*   **Collector Current ($I_C$):** The current flowing through the BJT.
*   **Collector-Emitter Saturation Voltage ($V_{CE(sat)}$):** The voltage drop across the BJT in saturation.
*   **Current Gain ($\beta$):** Ratio of collector current to base current ($I_C / I_B$).

**Applications:** Historically used in power switching and amplification, but largely replaced by MOSFETs and IGBTs in high-frequency applications due to lower switching speeds and higher driving power requirements. Still found in some medium-power applications.

**Reference:**
*   Chapter 4 of "Power Electronics by D.W. Hart" discusses Power BJTs.
*   "Power Electronics- Devices, Circuits and Applications" by Rashid provides a detailed analysis of BJT characteristics.

---

### 4. Determining Key Parameters from V-I Characteristics

When plotting the V-I characteristics in the lab, the following parameters can be directly observed or calculated:

*   **Forward Voltage Drop ($V_F$ or $V_{CE(sat)}$ or $V_{CE}$):** The voltage across the device when it is conducting. This can be read directly from the V-I curve at a specific forward current.
    *   **Example:** For a power diode, find the voltage corresponding to a forward current of, say, 5A on the forward characteristic curve.
*   **Leakage Current ($I_R$ or $I_{off}$):** The small current flowing when the device is supposed to be blocking. This is typically measured in the reverse bias region for diodes/thyristors or in the off-state for transistors.
    *   **Example:** For a reverse-biased diode, measure the current when the reverse voltage is just below the breakdown voltage.
*   **Breakdown Voltage ($V_{BR}$ or $V_{BO}$ or $V_{DS(max)}$ or $V_{CE(max)}$):** The voltage at which the device starts conducting significantly in the blocking state. It's the voltage at which the V-I curve shows a sharp increase in current.
    *   **Example:** For an SCR, identify the voltage on the forward characteristic (with zero gate current) where the current abruptly increases.
*   **Holding Current ($I_H$):** The minimum current required to keep a device (like SCR, TRIAC) conducting. This is determined by reducing the current after the device has been triggered ON until it turns OFF. The current at that point is $I_H$.
    *   **Example:** Trigger an SCR, then slowly reduce the anode current. The value of anode current just before the SCR turns off is the holding current.
*   **Latching Current ($I_L$):** The minimum current that must be reached to ensure sustained turn-on after the gate signal is removed. It's generally higher than the holding current.
*   **Cut-in Voltage ($V_{\gamma}$ or $V_{on}$ or $V_{GE(th)}$):** The voltage at which significant conduction begins. It's the voltage at the knee of the forward characteristic.

---

### 5. Impact of Temperature on V-I Characteristics

Temperature significantly affects the V-I characteristics of power semiconductor devices.

*   **Forward Voltage Drop ($V_F$ or $V_{CE(sat)}$):** Generally, the forward voltage drop decreases with increasing temperature. This is because the carrier mobility increases, and the bandgap energy reduces.
    *   **Effect:** This can lead to increased conduction losses at higher temperatures if not properly managed.
*   **Leakage Current ($I_R$):** Leakage current increases exponentially with temperature. This is due to the increased generation of electron-hole pairs.
    *   **Effect:** High leakage currents can lead to increased power dissipation and potential thermal runaway.
*   **Breakdown Voltage ($V_{BR}$):** For most devices (except Zener diodes), the breakdown voltage generally increases slightly with temperature due to increased scattering of carriers.
*   **Threshold Voltage ($V_{GS(th)}$ for MOSFETs, $V_{GE(th)}$ for IGBTs):** Threshold voltage usually decreases with increasing temperature.
    *   **Effect:** This can affect the gate drive requirements and the turn-on characteristics.
*   **Holding Current ($I_H$):** For SCRs and TRIACs, the holding current generally decreases with increasing temperature.

**Important Point to Remember:** Manufacturers provide data sheets with characteristics specified at a particular temperature (usually 25°C). When operating at different temperatures, these parameters will change. It's crucial to consider these temperature dependencies for reliable circuit design, especially concerning thermal management.

**Reference:**
*   "Power Electronics by D.W. Hart" discusses the thermal behavior of devices and their impact on characteristics.
*   "Power Electronics- A first course: Simulations and Laboratory Implementations" by Mohan and Raju might provide practical insights into observing temperature effects.

---

### 6. Comparison of Static V-I Characteristics

| Device          | Control Mechanism | ON-State $V_{drop}$ | Switching Speed | Key Characteristic                                        | Applications                                                              |
| :-------------- | :---------------- | :------------------ | :-------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------ |
| **Power Diode** | None (Uncontrolled) | Moderate ($V_F$)    | Moderate        | Blocks reverse voltage, conducts forward voltage $> V_{\gamma}$ | Rectification, freewheeling                                               |
| **SCR (Thyristor)** | Gate Current (Pulse) | Low ($V_{TM}$)      | Slow            | Latching characteristic, requires commutation to turn off | Phase control, high-power switching, high-voltage DC transmission (HVDC) |
| **TRIAC**       | Gate Current (Pulse) | Low ($V_{TM}$)      | Slow            | Bidirectional conduction, latching, natural commutation | AC power control (dimmers, fan speed)                                     |
| **DIAC**        | None (Uncontrolled) | Low                | Fast            | Bidirectional breakover voltage                           | TRIAC triggering                                                          |
| **Power MOSFET** | Gate Voltage ($V_{GS}$) | Very Low ($I_D \times R_{DS(on)}$) | Very Fast       | Voltage-controlled, low gate drive power, fast switching  | SMPS, DC-DC converters, high-frequency applications                       |
| **IGBT**        | Gate Voltage ($V_{GE}$) | Low ($V_{CE(sat)}$) | Fast            | Voltage-controlled, high current capability, low $V_{CE(sat)}$ | Motor drives, UPS, induction heating, medium-to-high power applications |
| **Power BJT**   | Base Current ($I_B$) | Low ($V_{CE(sat)}$) | Moderate        | Current-controlled, higher gate drive power             | Older motor control, medium power applications (less common now)          |

**Relevance to Course Outcomes:**
*   **CO1 (K5):** Understanding the V-I characteristics is crucial for selecting suitable gate driver circuits (for MOSFETs, IGBTs, BJTs) and heatsinks (based on conduction losses indicated by $V_F$, $V_{CE(sat)}$, $R_{DS(on)}$). The characteristics define the operating limits.
*   **CO2 (K4):** Phase-controlled rectifiers and AC voltage controllers heavily rely on the characteristics of SCRs and TRIACs. Analyzing their operation directly involves understanding their blocking and conducting regions, breakover, and holding currents.
*   **CO5 (K4):** Adjustable speed drives for DC and induction motors often use power transistors (MOSFETs, IGBTs) or thyristors. Their V-I characteristics dictate their suitability for the PWM switching strategies employed in these drives.

---

### 7. Practical Lab Exercises and Analysis

**Experiment Title:** Verification of Static V-I Characteristics of [Device Name]

**Objective:** To experimentally obtain the static V-I characteristics of a given power semiconductor device and compare it with theoretical curves and manufacturer's data sheet.

**Apparatus:**
*   Power supply (DC variable)
*   Ammeter
*   Voltmeter
*   Resistors (current limiting, load)
*   [Device under test] (Diode, SCR, TRIAC, MOSFET, IGBT)
*   Gate driver circuit (if applicable, e.g., for SCR, TRIAC, IGBT)
*   Breadboard/Patch panel
*   Connecting wires

**Procedure (General):**

1.  **For Diodes/BJTs (Forward Bias):**
    *   Connect the device in a forward-biased configuration with a variable DC supply and a series resistor to limit the current.
    *   Connect an ammeter in series and a voltmeter in parallel with the device.
    *   Gradually increase the supply voltage and record corresponding voltage across the device ($V_D$ or $V_{CE}$) and current through it ($I_D$ or $I_C$).
    *   Continue until the desired current or voltage limit is reached.
2.  **For Diodes/BJTs (Reverse Bias):**
    *   Reverse the polarity of the supply.
    *   Gradually increase the reverse voltage and record the reverse current ($I_R$ or $I_C$ for $I_B=0$). Note that the currents will be very small. Be careful not to exceed the breakdown voltage.
3.  **For SCRs/TRIACs:**
    *   **Forward Blocking:** Connect the device in forward bias with a variable supply and current limiting resistor. Record $V_{AK}$ vs $I_A$ (for SCR) or $V_{MT2-MT1}$ vs $I_{MT2}$ (for TRIAC) without applying any gate signal. Identify $V_{BO}$.
    *   **Forward Conduction:** Apply a suitable gate pulse. Once the device is ON, remove the gate pulse and slowly reduce the anode/main terminal current using the supply. Record $V_{TM}$ vs $I_A$ (or $I_{MT2}$) in the ON-state. Identify $I_H$.
    *   **Triggering:** Systematically vary the gate current/voltage and observe its effect on the breakover voltage ($V_{BO}$). Plot $V_{BO}$ vs $I_G$.
4.  **For MOSFETs/IGBTs:**
    *   Connect the device with the power supply to the Drain/Collector and Source/Emitter.
    *   Apply a variable gate-source/gate-emitter voltage ($V_{GS}/V_{GE}$).
    *   For each $V_{GS}/V_{GE}$ value, vary the Drain/Collector voltage ($V_{DS}/V_{CE}$) and record the corresponding current ($I_D/I_C$). Plot $I_D$ vs $V_{DS}$ for different $V_{GS}$ values (output characteristics).
    *   To find $R_{DS(on)}$, measure $V_{DS}$ at a known $I_D$ when $V_{GS}$ is sufficiently above $V_{GS(th)}$. $R_{DS(on)} = V_{DS} / I_D$.

**Analysis:**
*   Plot the obtained V-I characteristics.
*   Compare the experimental curves with the theoretical curves and data sheet values.
*   Calculate and tabulate the key parameters determined from the experiment (e.g., $V_F$, $V_{BR}$, $I_H$, $V_{CE(sat)}$, $R_{DS(on)}$).
*   Discuss any discrepancies and their possible causes (e.g., temperature variations, instrument limitations, non-ideal device behavior).
*   Comment on the device's suitability for different power electronic applications based on its characteristics.

---

### 8. Practice Questions with Answers

**Q1. What is the primary difference in the turn-off mechanism between an SCR and a Power MOSFET?**
**Answer:** An SCR requires its anode current to fall below the holding current or the anode-cathode voltage to be reversed for turn-off (commutation). A Power MOSFET turns off when its gate-source voltage ($V_{GS}$) is reduced below its threshold voltage ($V_{GS(th)}$).

**Q2. Which parameter is crucial for determining conduction losses in a power diode or IGBT operating in the forward/ON-state?**
**Answer:** The forward voltage drop ($V_F$) for a power diode and the collector-emitter saturation voltage ($V_{CE(sat)}$) for an IGBT. For MOSFETs, it is the Drain-Source ON-state resistance ($R_{DS(on)}$).

**Q3. A TRIAC is used for dimming lights. How does its V-I characteristic allow for dimming?**
**Answer:** The TRIAC's V-I characteristic shows it blocks current until a breakover voltage is reached or it's triggered by the gate. By controlling the timing of the gate pulse (phase control), the point in the AC cycle at which the TRIAC starts conducting can be delayed. This reduces the RMS current and voltage supplied to the load, effectively dimming the light. The TRIAC naturally turns off at the zero crossing of the current.

**Q4. Explain the role of the holding current ($I_H$) for an SCR.**
**Answer:** The holding current ($I_H$) is the minimum anode current that must be maintained for the SCR to remain in the conducting state after it has been triggered ON and the gate signal has been removed. If the anode current falls below $I_H$, the SCR will turn OFF.

**Q5. How does temperature generally affect the leakage current of a semiconductor device?**
**Answer:** Leakage current increases exponentially with increasing temperature.

**Q6. What is the main advantage of an IGBT over a Power MOSFET in high-power applications?**
**Answer:** IGBTs generally have a lower ON-state voltage drop ($V_{CE(sat)}$) at high current levels compared to the voltage drop ($I_D \times R_{DS(on)}$) in Power MOSFETs, leading to lower conduction losses in high-power applications. Although, MOSFETs are faster switching devices.

---

### 9. Important Points to Remember

*   **Static vs. Dynamic Characteristics:** This module focuses on **static** (DC) characteristics. Dynamic characteristics (switching behavior, turn-on/turn-off times) are also critical but studied in later modules.
*   **Data Sheets are Key:** Always refer to the manufacturer's data sheets for precise V-I characteristics and parameter values.
*   **Temperature Dependence:** Remember that most parameters are temperature-dependent.
*   **Breakdown Voltage Limits:** Never exceed the specified breakdown voltage ratings of a device, as it can lead to permanent damage.
*   **Current Limiting:** Use series resistors to limit current when exploring forward characteristics to prevent device destruction.
*   **Gate Drive:** Proper gate drive signals are essential for the controlled turn-on of devices like SCRs, TRIACs, BJTs, MOSFETs, and IGBTs.

---

This comprehensive set of notes covers the static V-I characteristics of power electronic devices, aligning with the learning outcomes and providing context relevant to the course outcomes. The inclusion of textbook references and practice questions aims to facilitate a thorough understanding for laboratory work.
