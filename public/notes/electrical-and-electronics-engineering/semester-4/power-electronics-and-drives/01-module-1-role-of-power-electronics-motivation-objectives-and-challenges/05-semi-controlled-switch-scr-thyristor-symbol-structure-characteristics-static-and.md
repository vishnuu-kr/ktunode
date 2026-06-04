---
title: "Semi-controlled switch: SCR (Thyristor) – Symbol, Structure, Characteristics (Static and dynamic) – Turn-on and Turn-off phenomena – Ratings- Gate control of SCR – Gate pulse magnitude and duration requirements- Typical gate drive circuits – Gate synchronisation – Isolated gate drives"
subject: "POWER ELECTRONICS AND DRIVES"
module: "Module 1: Role of Power Electronics, Motivation, Objectives and Challenges"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e1e"
status: "completed"
scrapedAt: "2026-05-23T16:17:45.855Z"
---
# POWER ELECTRONICS AND DRIVES - Module 1: Role of Power Electronics, Motivation, Objectives and Challenges

## Topic: Semi-controlled switch: SCR (Thyristor)

### 1. Introduction to Semi-controlled Switches and the SCR

**1.1 Role of Power Electronics:**
*   Power electronics is the application of solid-state electronics for the control of power.
*   It involves the conversion of electrical power from one form to another (e.g., AC to DC, DC to AC, DC to DC, AC to AC) efficiently and controllably.
*   Key components include power semiconductor devices (switches), passive components (inductors, capacitors), and control circuits.
*   **Motivation:** Increased efficiency, improved power quality, miniaturization, enhanced control capabilities, renewable energy integration, and energy conservation.
*   **Objectives:** To control and convert electrical power in a highly efficient, reliable, and cost-effective manner.
*   **Challenges:** Thermal management, electromagnetic interference (EMI), device limitations (voltage/current ratings, switching speed), complexity of control, and cost.

**1.2 The SCR (Thyristor) as a Semi-controlled Switch:**
*   **Definition:** A Silicon Controlled Rectifier (SCR), also known as a Thyristor, is a four-layer, three-junction semiconductor device that acts as a controllable switch. It is a unidirectional device that conducts current only in one direction when triggered.
*   **Semi-controlled:** This means it can be turned ON by a gate signal but turns OFF naturally when the anode current falls below a certain level or reverses. It cannot be turned OFF by a gate signal (unlike fully controlled switches like IGBTs or MOSFETs).
*   **Significance:** The SCR was one of the earliest power semiconductor devices and revolutionized power control, particularly in AC power applications like phase control rectifiers and AC voltage controllers.

### 2. SCR: Symbol, Structure, and Characteristics

**2.1 Symbol:**

```
      Anode (A)
        ^
        |
    ----|----
   /    |    \
  /     |     \
G ----|----- K  Gate (G)
  \     |     /
   \    |    /
    ----|----
        |
      Cathode (K)
```

*   **Anode (A):** Positive terminal. Current flows from Anode to Cathode.
*   **Cathode (K):** Negative terminal.
*   **Gate (G):** Control terminal. A positive pulse applied to the gate with respect to the cathode triggers the SCR.

**2.2 Structure:**
*   The SCR is a P-N-P-N device. It consists of four semiconductor layers and three junctions.
*   **Layer Arrangement:** P1 - N1 - P2 - N2
    *   Anode is connected to P1.
    *   Cathode is connected to N2.
    *   Gate is connected to N1.
*   **Junctions:**
    *   J1: P1-N1 (Anode junction)
    *   J2: N1-P2 (Gate junction)
    *   J3: P2-N2 (Cathode junction)

**(Refer to Mohan, Undeland, Robbins, 3rd ed., Chapter 2 for detailed structure and formation of junctions)**

**2.3 Characteristics (Static):**

*   **Forward Characteristics:**
    *   **Forward Blocking Region:** When the anode is positive with respect to the cathode, but no gate current is applied, the SCR is OFF. Only a very small leakage current flows. Junction J2 is reverse-biased.
    *   **Forward Conduction Region:** When a sufficient positive gate current is applied (along with a positive anode-cathode voltage), the SCR turns ON. The anode-cathode voltage drops to a low value (typically 0.7V to 1.5V), and a large current flows from anode to cathode.
    *   **Breakover Voltage (VBO):** If the forward voltage across the SCR is increased in the forward blocking region (without gate current), it reaches a point where it starts conducting. This voltage is called the breakover voltage. However, it is generally not desirable to operate an SCR at its breakover voltage, as it can lead to uncontrolled switching and potential damage. Gate triggering is the preferred method.

*   **Reverse Characteristics:**
    *   When the anode is negative with respect to the cathode, the SCR is OFF. Junctions J1 and J3 are reverse-biased, and J2 is forward-biased. Only a small leakage current flows.
    *   **Peak Inverse Voltage (PIV) / Reverse Voltage Rating:** The maximum reverse voltage that can be applied to the SCR without it breaking down and conducting in the reverse direction. Exceeding PIV can lead to irreversible damage.

*   **Negative Gate Characteristics:**
    *   When the anode is negative with respect to the cathode, applying a negative gate signal does not turn the SCR ON.

*   **V-I Characteristic Curve:**
    *   Plotting anode current ($I_A$) against anode-cathode voltage ($V_{AK}$) for different gate currents ($I_G$).
    *   Shows the three regions: Forward Blocking, Forward Conduction, and Reverse Blocking.
    *   Crucially, it illustrates how the gate current reduces the breakover voltage.

**(Refer to Rashid, 4th ed., Chapter 2 for detailed V-I characteristics and regions of operation)**

**2.4 Characteristics (Dynamic):**

*   **Turn-on Time:** The time taken for the SCR to switch from the OFF state to the ON state after receiving a suitable gate pulse.
    *   Typically composed of:
        *   **Delay Time ($t_d$):** Time from the application of the gate pulse until the anode current reaches 10% of its final value.
        *   **Rise Time ($t_r$):** Time for the anode current to rise from 10% to 90% of its final value.
    *   Total Turn-on Time ($t_{on}$) = $t_d + t_r$.
    *   Factors affecting $t_{on}$: gate pulse characteristics (magnitude, duration), anode current magnitude, anode voltage, temperature.
    *   **Important Point:** Faster turn-on is desirable for high-frequency applications to minimize switching losses.

*   **Turn-off Time ($t_{off}$):** The time taken for the SCR to switch from the ON state back to the OFF state after the anode current has been reduced below the holding current and the anode voltage has become forward biased again.
    *   This is a critical parameter for SCRs as they cannot be turned off by the gate.
    *   It is composed of:
        *   **Storage Time ($t_s$):** Time from when the anode current drops below the holding current until the minority charge carriers in the P-N junctions have diffused away sufficiently.
        *   **Fall Time ($t_f$):** Time for the anode current to decay to zero.
    *   **Total Turn-off Time ($t_{off}$) = $t_s + t_f$.**
    *   **Reverse Recovery Time ($t_{rr}$):** During turn-off, the SCR is momentarily reverse-biased. The reverse recovery time is the time taken for the reverse current to decay to zero. This is part of the overall turn-off process.
    *   **Important Point:** The minimum time the SCR must be reverse-biased (or have zero forward current) before it can withstand forward voltage is longer than the turn-off time. This is the **Commutation Interval**. If the forward voltage is reapplied before the SCR has fully turned off, it will immediately turn ON.

**(Refer to Vithayathil, Chapter 4 for detailed dynamic characteristics and switching times)**

### 3. Turn-on and Turn-off Phenomena

**3.1 Turn-on Phenomena:**

1.  **Gate Pulse Application:** A gate pulse (positive voltage/current) is applied between the gate and cathode terminals, while the anode is positive with respect to the cathode.
2.  **Gate Region Conduction:** The gate pulse forward-biases the J2 junction in the region of the gate contact. This injects minority carriers into the P2 layer.
3.  **Regenerative Action:** Due to the P-N-P-N structure, this injection of carriers triggers a regenerative latching action. The P2-N1-P1-N2 structure can be viewed as two interconnected transistors (a PNP and an NPN transistor). The gate pulse essentially turns ON the transistor formed by the outer layers and the middle layer adjacent to the gate. This causes current to flow, which in turn turns ON the other transistor, leading to a rapid increase in anode current.
4.  **Anode Current Rise:** The anode current rises rapidly from a small value to the conducting state.
5.  **Latching:** Once the SCR is ON, it remains in the conducting state as long as the anode current is greater than the **Holding Current ($I_H$)**. The gate signal is no longer required to maintain conduction.

**3.2 Turn-off Phenomena:**

Since SCRs cannot be turned off by a gate signal, special commutation techniques are required.

1.  **Current Commutation:**
    *   **Natural Commutation (AC circuits):** In AC circuits, the anode current naturally falls to zero when the applied voltage reverses polarity. This automatically turns OFF the SCR. This is common in phase-controlled rectifiers.
    *   **Forced Commutation (DC circuits):** In DC circuits, the anode current must be forced to zero using external circuits. This is typically achieved by:
        *   **Shunting the SCR:** Briefly diverting the anode current through a parallel path (e.g., using a capacitor and another switch).
        *   **Reversing the Anode Voltage:** Briefly making the anode negative with respect to the cathode.

2.  **Process of Turn-off:**
    *   When the anode current ($I_A$) falls below the holding current ($I_H$), the regenerative action ceases.
    *   The SCR starts to block current.
    *   During this period, the device is still saturated with charge carriers. If a forward voltage is applied too soon, the device will immediately turn ON.
    *   The **turn-off time ($t_{off}$)** is the minimum time required for the excess charge carriers to diffuse out of the device and for it to regain its forward blocking capability.

**(Refer to Lander, Chapter 3 for commutation techniques and Hart, Chapter 4 for detailed turn-off mechanisms)**

### 4. SCR Ratings

Proper selection of an SCR requires understanding its various ratings to ensure safe and reliable operation.

*   **Peak Forward Blocking Voltage ($V_{DRM}$):** The maximum repetitive forward voltage that the SCR can block in the OFF state.
*   **Peak Repetitive Off-State Voltage ($V_{DRM}$):** Similar to $V_{DRM}$, but specifically refers to repetitive blocking.
*   **Non-Repetitive Peak Off-State Voltage ($V_{DSM}$):** The maximum non-repetitive forward voltage that the SCR can block. This is usually higher than $V_{DRM}$.
*   **Peak Reverse Voltage ($V_{RRM}$):** The maximum repetitive reverse voltage that the SCR can block. This is equivalent to the PIV rating.
*   **Peak Repetitive Reverse Voltage ($V_{RRM}$):** Similar to $V_{RRM}$, but specifically refers to repetitive blocking.
*   **Average Forward Current ($I_{AV}$):** The maximum average forward current the SCR can handle in a given conduction angle and duty cycle, typically specified at a particular case temperature.
*   **RMS Forward Current ($I_{RMS}$):** The maximum RMS value of the forward current the SCR can handle.
*   **Peak Forward Surge Current ($I_{FSM}$):** The maximum non-repetitive forward current that the SCR can withstand for a very short duration (e.g., one half-cycle of the power frequency) without damage. This is important for handling fault conditions or inrush currents.
*   **Holding Current ($I_H$):** The minimum anode current required to keep the SCR in the conducting state after it has been triggered ON.
*   **Latching Current ($I_L$):** The minimum anode current that must be reached after triggering for the SCR to remain ON even after the gate signal is removed. $I_L$ is slightly higher than $I_H$.
*   **Junction Temperature ($T_J$):** The maximum operating temperature of the semiconductor junction. This is a critical parameter for thermal management.
*   **Case Temperature ($T_C$):** The temperature of the SCR's case.
*   **Ambient Temperature ($T_A$):** The temperature of the surrounding environment.
*   **Thermal Resistance ($\theta_{JC}$, $\theta_{CS}$, $\theta_{SA}$):** Resistance to heat flow from the junction to the case ($\theta_{JC}$), case to heat sink ($\theta_{CS}$), and heat sink to ambient ($\theta_{SA}$). These are crucial for selecting appropriate heat sinks.

**(Refer to Umanand, Chapter 3 for detailed explanation of SCR ratings and their significance)**

### 5. Gate Control of SCR

The gate is the control terminal for turning ON the SCR.

**5.1 Gate Pulse Magnitude and Duration Requirements:**

*   **Minimum Gate Current for Triggering ($I_{GM}$):** A minimum gate current must flow to trigger the SCR into conduction. This current must be sufficient to initiate the regenerative process.
*   **Minimum Gate Voltage for Triggering ($V_{GM}$):** Similarly, a minimum gate voltage (with respect to the cathode) is required.
*   **Gate Pulse Width ($t_{p}$):**
    *   The gate pulse must be sufficiently wide to allow the anode current to rise above the latching current ($I_L$).
    *   If the pulse width is too short, the SCR may turn ON briefly but then turn OFF again.
    *   **For reliable triggering, the gate pulse width should be at least the turn-on time ($t_{on}$) of the SCR.**
    *   In many practical applications, the gate pulse is applied for the entire duration that the anode current needs to flow, or until natural commutation occurs.
*   **Rate of Rise of Gate Voltage ($dv/dt$):** A very fast rate of rise of anode voltage ($dv/dt$) in the forward blocking state can unintentionally trigger the SCR (false triggering). This is called **$dv/dt$ triggering**. The SCR is designed with a specific $dv/dt$ rating to prevent this.
*   **Rate of Rise of Anode Current ($di/dt$):** A very fast rate of rise of anode current can also cause issues if the gate current is not sufficient to spread the conduction uniformly across the device. This can lead to localized heating and damage. The SCR has a maximum $di/dt$ rating.

**(Refer to Mohan, Undeland, Robbins, 3rd ed., Chapter 2 for gate trigger characteristics)**

**5.2 Typical Gate Drive Circuits:**

The primary function of a gate drive circuit is to provide a suitable gate pulse (current and voltage) to the SCR, ensuring reliable turn-on, and often to provide isolation from the main power circuit.

*   **Basic Resistor Triggering:**
    *   A simple circuit using a variable resistor and a DC voltage source connected to the gate.
    *   **Limitations:** The gate current depends on the SCR's forward voltage, which can be problematic. Not ideal for AC circuits or where precise timing is needed.

*   **RC Triggering Circuit:**
    *   A capacitor is charged through a resistor. The capacitor is then discharged through the SCR's gate terminal when a certain voltage threshold is reached.
    *   Can provide a pulse-like waveform.
    *   **Limitations:** Sensitive to variations in SCR characteristics and triggering voltage.

*   **Unijunction Transistor (UJT) Triggering:**
    *   UJT is a triggering device that exhibits negative resistance characteristics.
    *   An RC network charges a capacitor. When the capacitor voltage reaches the peak point voltage of the UJT, the UJT fires, discharging the capacitor rapidly through the SCR gate.
    *   Provides a sharp, high-current pulse, leading to faster turn-on and less jitter.

*   **Pulse Transformer Triggering:**
    *   Uses a pulse transformer to couple the gate signal from a control circuit to the SCR.
    *   Provides excellent isolation between the control circuit and the high-power circuit.
    *   Can shape the gate pulse and provide high peak currents.
    *   **Challenge:** Requires a separate pulse generation circuit.

*   **Thyristor Triggering Circuits (e.g., DIAC-TRIAC Triggering):**
    *   A DIAC can be used with a TRIAC (a bidirectional SCR-like device) or in conjunction with other components to generate triggering pulses.

**(Refer to Rashid, 4th ed., Chapter 11 for various gate drive circuits)**

**5.3 Gate Synchronization:**

*   **Definition:** Gate synchronization ensures that the firing of the SCR is synchronized with the phase of the AC supply voltage. This is crucial for controlling the power delivered to a load in AC circuits.
*   **Purpose:** To control the firing angle ($\alpha$) of the SCR. The firing angle determines the point in the AC cycle at which the SCR is triggered ON, thereby controlling the output voltage and power.
*   **Mechanism:** A zero-crossing detector or phase-locked loop (PLL) circuit is used to sense the zero crossings of the AC supply voltage. This signal is then used to control the timing of the gate pulses relative to the AC waveform.
*   **Applications:** Phase-controlled rectifiers, AC voltage controllers (dimmers, motor speed controllers).

**(Refer to Vithayathil, Chapter 5 for phase control and synchronization concepts)**

**5.4 Isolated Gate Drives:**

*   **Need for Isolation:** The control circuit (low-voltage) is often physically separated from the high-power circuit where the SCR operates. Direct connection can lead to ground loops, noise injection, and safety hazards.
*   **Isolation Techniques:**
    *   **Pulse Transformers:** As mentioned earlier, pulse transformers are widely used to provide galvanic isolation. They transmit the gate pulse from the primary (low-voltage) side to the secondary (high-voltage) side without any direct electrical connection.
    *   **Optocouplers (Opto-isolators):** A light-emitting diode (LED) on the primary side emits light when a signal is applied. This light is detected by a phototransistor or photodiode on the secondary side, which then generates the gate signal. Optocouplers provide excellent isolation and are suitable for both DC and pulsed signals.
    *   **DC-DC Converters:** A small isolated DC-DC converter can power the gate drive circuitry on the high-voltage side, and the control signal can be transmitted using a high-speed optocoupler or a small signal transformer.

**(Refer to Krein, Chapter 10 for isolation techniques in gate drives)**

### 6. Course Outcome Alignment

*   **CO1: Understand the operation of modern power semiconductor devices, its characteristics and select suitable gate driver circuits & heatsinks (Knowledge Level: K3)**
    *   This entire topic directly addresses CO1 by detailing the SCR's operation, static and dynamic characteristics, and the principles behind gate drive circuits and the importance of ratings for thermal management (implicitly linking to heatsinks).

*   **CO2: Understand the features of phase-controlled rectifiers, AC voltage Controllers &Switching Regulators and analyse the operation (Knowledge Level: K3)**
    *   The SCR is a fundamental component in phase-controlled rectifiers and AC voltage controllers. Understanding its turn-on/off, gate control, and synchronization is essential for analyzing these circuits.

*   **CO4: Understand the need for improved efficiency, improved reliability, improved load &source waveforms and improved utility interface (Knowledge Level: K2)**
    *   While not directly focused on these aspects, the SCR's ability to control power efficiently (compared to older methods) and its role in shaping waveforms (e.g., in rectifiers) contributes to these broader goals. The need for reliable gate drives and proper ratings is essential for reliability.

### 7. Key Points to Remember

*   **SCR is a P-N-P-N device, a four-layer diode with a gate terminal.**
*   **It's a semi-controlled switch: ON by gate, OFF by current reversal or falling below holding current.**
*   **Forward characteristics include Blocking, Breakover, and Conduction regions.**
*   **Reverse characteristics involve blocking until PIV is exceeded.**
*   **Dynamic characteristics: Turn-on time ($t_{on}$) and Turn-off time ($t_{off}$) are critical.**
*   **Turn-off requires commutation (natural or forced).**
*   **Ratings ($V_{DRM}$, $I_{RMS}$, $I_{FSM}$, $I_H$) are crucial for safe operation.**
*   **Gate control requires sufficient pulse magnitude and duration to latch the device.**
*   **Synchronization is vital for AC power control.**
*   **Isolation (pulse transformers, optocouplers) is necessary for gate drives.**

### 8. Practice Questions and Exercises

**Question 1:** Explain the four layers and three junctions of an SCR. Draw its circuit symbol.
**Answer:** An SCR is a P-N-P-N device with junctions J1 (P1-N1), J2 (N1-P2), and J3 (P2-N2). The Anode is connected to P1, Cathode to N2, and Gate to N1. (Symbol provided in Section 2.1)

**Question 2:** Describe the forward voltage-current characteristics of an SCR. What is the holding current?
**Answer:** The forward characteristics show a blocking region (low current, high voltage), a breakover voltage at which conduction starts, and a conduction region (low voltage, high current). Holding current ($I_H$) is the minimum anode current required to maintain conduction after triggering.

**Question 3:** What is the difference between natural commutation and forced commutation for an SCR? Give an example of each.
**Answer:** Natural commutation occurs when the anode current naturally falls to zero (e.g., in AC circuits). Forced commutation involves using external circuitry to force the anode current to zero (e.g., using a parallel capacitor and switch in DC circuits).

**Question 4:** Why is isolation important in gate drive circuits for SCRs? Name two common methods of achieving isolation.
**Answer:** Isolation is important for safety and to prevent noise coupling between the high-power and low-power circuits. Common methods are pulse transformers and optocouplers.

**Question 5:** An SCR has a holding current of 50 mA. If the gate pulse is removed when the anode current is 40 mA, will the SCR turn off? Justify your answer.
**Answer:** Yes, the SCR will turn off because the anode current (40 mA) has fallen below the holding current (50 mA).

**Question 6:** What is the significance of the $V_{DRM}$ rating of an SCR?
**Answer:** $V_{DRM}$ (Peak Forward Blocking Voltage) is the maximum repetitive forward voltage the SCR can withstand in the OFF state without conducting current. Exceeding this can lead to unintended turn-on or damage.

**Question 7:** Briefly explain the process of regenerative turn-on in an SCR.
**Answer:** Upon receiving a gate pulse, the gate region becomes conductive, injecting carriers. This triggers a two-transistor regenerative process where the anode current rapidly increases, and the device latches into conduction, no longer requiring the gate signal.
