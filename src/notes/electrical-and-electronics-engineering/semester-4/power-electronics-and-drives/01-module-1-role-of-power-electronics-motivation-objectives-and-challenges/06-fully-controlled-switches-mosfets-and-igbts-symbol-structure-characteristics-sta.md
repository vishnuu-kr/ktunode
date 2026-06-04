---
title: "Fully-controlled switches: MOSFETS and IGBTs: Symbol, Structure, Characteristics (Static and Dynamic) -Device ratings -Gate drive requirements–Typical gate drive circuits"
subject: "POWER ELECTRONICS AND DRIVES"
module: "Module 1: Role of Power Electronics, Motivation, Objectives and Challenges"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e1f"
status: "completed"
scrapedAt: "2026-05-23T16:17:46.647Z"
---
# POWER ELECTRONICS AND DRIVES - Module 1: Role of Power Electronics, Motivation, Objectives and Challenges

## Topic: Fully-controlled switches: MOSFETS and IGBTs: Symbol, Structure, Characteristics (Static and Dynamic) - Device Ratings - Gate Drive Requirements – Typical Gate Drive Circuits

---

### **Introduction to Fully-Controlled Switches**

In power electronics, controlled switches are essential for shaping and controlling electrical power. Fully-controlled switches, also known as gate-controlled switches, offer the ability to be turned ON and OFF by applying a signal to their control terminal (gate). This provides a high degree of flexibility and precision in power conversion applications.

The two most prominent fully-controlled switches used in modern power electronics are:

1.  **Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET)**
2.  **Insulated-Gate Bipolar Transistor (IGBT)**

This module will delve into their symbols, structures, characteristics, ratings, and gate drive requirements.

---

### **1. MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor)**

#### **1.1 Symbol**

The symbol for a power MOSFET typically shows three terminals: Gate (G), Drain (D), and Source (S). It can be represented as either an N-channel or P-channel device.

*   **N-channel Enhancement Mode MOSFET:**
    ```
        G -----|----- D
               |
               |
               S
    ```
    *Note: The arrow on the body connection usually points away from the channel for N-channel.*

*   **P-channel Enhancement Mode MOSFET:**
    ```
        G -----|----- D
               |
               |
               S
    ```
    *Note: The arrow on the body connection usually points towards the channel for P-channel.*

#### **1.2 Structure**

Power MOSFETs are unipolar devices, meaning their conduction relies on only one type of charge carrier (either electrons for N-channel or holes for P-channel). This contributes to their fast switching speeds.

*   **Key Structural Features:**
    *   **Source Regions:** Heavily doped regions for efficient carrier injection.
    *   **Channel Region:** A lightly doped region between the drain and source, where the conductivity is modulated by the gate voltage.
    *   **Gate Electrode:** A metal or polysilicon electrode insulated from the channel by a thin layer of silicon dioxide (SiO2). This insulation gives it the "insulated-gate" characteristic.
    *   **Drain Region:** A lightly doped region that forms the main current path.
    *   **Body (Substrate):** The semiconductor material (typically silicon) on which the device is built. For enhancement-mode MOSFETs, the body is usually connected internally to the source.
    *   **Vertical Structure:** Power MOSFETs often employ a vertical structure where the current flows from the drain at the top, through the channel, to the source at the bottom. This allows for a larger current-carrying capability.

*   **Simplified Cross-Sectional View (N-channel Enhancement Mode):**
    ```
    +--------------------+  <-- Metal Contact (Drain)
    |    Drain Region    |
    +--------------------+
    | P-type Body/Substrate|
    +-------+------------+
    | N+    | N-Channel  | <-- Gate Oxide (SiO2)
    | Source|            |     Metal Gate
    +-------+------------+
    | N+    | N-         |
    | Source| Drift      |
    +-------+------------+
    | P+ Bulk (Substrate)| <-- Body/Substrate
    +--------------------+
        ^
        |
        Gate Terminal
    ```
    *Note: The N-channel is formed when a positive voltage is applied to the gate, attracting electrons to the surface of the P-type body.*

#### **1.3 Characteristics (Static and Dynamic)**

##### **1.3.1 Static Characteristics**

*   **Output Characteristics ($I_D$ vs. $V_{DS}$ for constant $V_{GS}$):**
    *   **Cut-off Region:** When $V_{GS} < V_{th}$ (threshold voltage), the channel is not formed, and $I_D$ is very small (leakage current). The device acts as an open switch.
    *   **Ohmic/Linear Region:** When $V_{GS}$ is sufficiently greater than $V_{th}$ and $V_{DS}$ is small, the channel resistance is relatively constant, and $I_D$ is approximately proportional to $V_{DS}$. The device acts as a voltage-controlled resistor.
    *   **Saturation Region:** As $V_{DS}$ increases, the channel near the drain becomes "pinched off," and $I_D$ becomes largely independent of $V_{DS}$, primarily controlled by $V_{GS}$. The device acts as a current source.

    *Key Parameters:*
    *   **Threshold Voltage ($V_{th}$):** The minimum gate-source voltage required to initiate conduction.
    *   **On-resistance ($R_{DS(on)}$):** The resistance between drain and source when the MOSFET is fully turned ON. A lower $R_{DS(on)}$ is desirable for lower conduction losses. It is typically specified at a particular $V_{GS}$ and junction temperature.

*   **Transfer Characteristics ($I_D$ vs. $V_{GS}$ for constant $V_{DS}$):**
    *   This plot shows how the drain current changes with the gate-source voltage. It is roughly linear in the saturation region (for $V_{GS} \gg V_{th}$).

##### **1.3.2 Dynamic Characteristics**

These relate to the switching performance of the MOSFET.

*   **Switching Times:** The time taken to turn the MOSFET ON or OFF.
    *   **Turn-on time ($t_{on}$):** Time from applying the gate voltage to achieving the desired ON-state current. It comprises:
        *   **Delay Time ($t_d$):** Time for the gate-source voltage to reach $V_{th}$.
        *   **Rise Time ($t_r$):** Time for the drain current to rise from 10% to 90% of its final value.
    *   **Turn-off time ($t_{off}$):** Time taken for the drain current to fall to a specified low value after the gate voltage is removed. It comprises:
        *   **Fall Time ($t_f$):** Time for the drain current to fall from 90% to 10% of its ON-state value.
        *   **Storage Time ($t_s$):** Time during which the drain current remains at its ON-state value due to the presence of charge carriers that need to be removed from the channel and drift region. This is usually negligible in MOSFETs as they are majority carrier devices.

*   **Switching Losses:** Energy dissipated during the switching transitions. MOSFETs have low switching losses due to their fast switching speeds.

*   **Capacitances:** MOSFETs exhibit significant parasitic capacitances, which affect their switching speed and gate drive requirements.
    *   **Input Capacitance ($C_{iss}$):** The capacitance between the gate and source terminals ($C_{iss} = C_{gs} + C_{gd}$).
    *   **Output Capacitance ($C_{oss}$):** The capacitance between the drain and source terminals ($C_{oss} = C_{ds} + C_{gd}$).
    *   **Reverse Transfer Capacitance ($C_{rss}$):** The capacitance between the gate and drain terminals ($C_{rss} = C_{gd}$). This is also known as the Miller capacitance, as it plays a significant role during switching.

#### **1.4 Device Ratings**

These are crucial for selecting the appropriate MOSFET for a given application and ensuring safe operation.

*   **Drain-Source Voltage ($V_{DS}$):** The maximum continuous voltage that can be applied between the drain and source terminals when the device is OFF.
*   **Continuous Drain Current ($I_D$):** The maximum average current that can be conducted continuously without exceeding the maximum junction temperature. This is usually specified at a certain case temperature.
*   **Pulsed Drain Current ($I_{DM}$):** The maximum peak current that can be conducted for short durations.
*   **Gate-Source Voltage ($V_{GS}$):** The voltage applied to the gate. There's a maximum continuous $V_{GS}$ (to avoid gate oxide breakdown) and an operating range of $V_{GS}$ for ON and OFF states.
*   **Power Dissipation ($P_D$):** The maximum power that can be dissipated by the device, usually specified at a particular case temperature. This determines the maximum allowable junction temperature.
*   **Maximum Junction Temperature ($T_J(max)$):** The highest temperature the semiconductor junction can reach without permanent damage.
*   **Thermal Resistance ($R_{thJC}$):** The thermal resistance between the junction and the case. This is essential for calculating the junction temperature when power is dissipated.

#### **1.5 Gate Drive Requirements**

To operate a MOSFET effectively, the gate terminal needs to be driven with appropriate voltage and current.

*   **Gate-Source Voltage ($V_{GS}$):** A sufficient $V_{GS}$ (typically 10-15V for ON-state) is required to drive the MOSFET into the low $R_{DS(on)}$ state. A negative $V_{GS}$ (typically -5V to -10V) is needed to ensure it is fully OFF.
*   **Gate Current ($I_G$):** While the gate is insulated and draws very little DC current, it acts like a capacitor ($C_{iss}$). To charge and discharge this capacitance quickly during switching, a significant peak current is required from the gate driver. This peak current can be several amperes.
    *   $I_G = C_{iss} \times \frac{dV_{GS}}{dt}$
*   **Switching Speed:** The gate driver must be able to supply enough current to charge/discharge the gate capacitance rapidly to achieve fast switching speeds and minimize switching losses.

#### **1.6 Typical Gate Drive Circuits**

A gate drive circuit provides the necessary voltage and current levels to the MOSFET gate.

*   **Simple RC Driver (Not Recommended for high power/speed):**
    A resistor and capacitor in series with the gate can be used for very basic applications but lack control and speed.

*   **Common Gate Driver ICs:**
    Dedicated gate driver ICs are commonly used. These ICs typically provide:
    *   **Level Shifting:** To interface with low-voltage control signals (e.g., from a microcontroller).
    *   **High Peak Current Capability:** To charge and discharge the gate capacitance quickly.
    *   **Short Propagation Delay:** To ensure fast switching.
    *   **Under-Voltage Lockout (UVLO):** To prevent operation if the supply voltage to the driver is too low.
    *   **Protection Features:** Such as over-current protection.

*   **Basic Gate Driver Circuit Example:**
    ```
    Control Signal (from Microcontroller) --> Logic Inverter --> Gate Driver IC --> R_G --> MOSFET Gate

                                                                            |
                                                                            --- MOSFET Source
    ```
    *   **R_G (Gate Resistor):** Often included in series with the gate to limit the peak gate current, prevent ringing, and dampen oscillations. Choosing the right value is crucial.
    *   **Bootstrap Circuit:** For high-side driving of N-channel MOSFETs, where the source terminal is not at ground potential, a bootstrap circuit is often used to generate the required gate-source voltage.

---

### **2. IGBT (Insulated-Gate Bipolar Transistor)**

#### **2.1 Symbol**

The IGBT combines the desirable features of MOSFETs (low input drive requirement) and bipolar transistors (high current handling, low saturation voltage).

*   **N-channel IGBT:**
    ```
        G -----|----- C (Collector)
               |
               |
               E (Emitter)
    ```
    *Note: The symbol resembles a MOSFET but implies bipolar action in the output.*

#### **2.2 Structure**

The IGBT has a multi-layer structure that leads to its unique characteristics.

*   **Key Structural Features:**
    *   **Gate:** Similar to a MOSFET, insulated by silicon dioxide.
    *   **Emitter:** Similar to a MOSFET source.
    *   **Collector:** Similar to a bipolar transistor collector, but it's a P+ layer that injects minority carriers into the drift region.
    *   **Drift Region:** A lightly doped region that sustains the high voltage when the device is OFF.
    *   **Conductivity Modulation:** During ON-state, minority carriers are injected from the P+ collector layer into the N- drift region, significantly reducing the on-state resistance compared to a comparable MOSFET. This is the bipolar action.

*   **Simplified Cross-Sectional View (N-channel IGBT):**
    ```
    +--------------------+  <-- Metal Contact (Collector)
    | P+ Collector Layer |
    +--------------------+
    | N- Drift Region    |
    +-------+------------+
    | N+    | N-Channel  | <-- Gate Oxide (SiO2)
    | Emitter|            |     Metal Gate
    +-------+------------+
    | N+    | N-         |
    | Emitter|            |
    +-------+------------+
    | P+ Bulk (Substrate)| <-- Body/Substrate (usually connected to Emitter)
    +--------------------+
        ^
        |
        Gate Terminal
    ```
    *Note: The channel is formed by the gate voltage, similar to a MOSFET, allowing current flow from Collector to Emitter. The P+ layer at the collector injects holes into the N- drift region, reducing its resistivity.*

#### **2.3 Characteristics (Static and Dynamic)**

##### **2.3.1 Static Characteristics**

*   **Output Characteristics ($I_C$ vs. $V_{CE}$ for constant $V_{GE}$):**
    *   **Cut-off Region:** When $V_{GE} < V_{GE(th)}$ (gate-emitter threshold voltage), $I_C$ is very small.
    *   **Active Region:** $I_C$ is controlled by $V_{GE}$.
    *   **Saturation Region:** When the IGBT is fully ON, the voltage between collector and emitter ($V_{CE(sat)}$) is low. This low $V_{CE(sat)}$ is a key advantage over MOSFETs for high current applications, as conduction losses are lower. It's similar to the saturation voltage of a bipolar transistor.

    *Key Parameters:*
    *   **Gate-Emitter Threshold Voltage ($V_{GE(th)}$):** The minimum gate-emitter voltage required for conduction.
    *   **Collector-Emitter Saturation Voltage ($V_{CE(sat)}$):** The voltage drop across the IGBT when it is fully ON.

##### **2.3.2 Dynamic Characteristics**

*   **Switching Times:** IGBTs are generally slower than MOSFETs.
    *   **Turn-on time ($t_{on}$):** Consists of delay time, rise time, and is generally faster than turn-off.
    *   **Turn-off time ($t_{off}$):** This is significantly longer than in MOSFETs. It comprises:
        *   **Fall Time ($t_f$):** Current falls rapidly.
        *   **Tail Time ($t_{tail}$):** A slow decay of current due to the minority carrier recombination process in the drift region. This tail current causes significant switching losses, especially at higher frequencies.

*   **Switching Losses:** Due to the longer turn-off time (tail current), IGBTs have higher switching losses than MOSFETs at higher frequencies. They are generally preferred for lower to medium switching frequencies (up to tens of kHz).

*   **Capacitances:** Similar to MOSFETs, IGBTs also have parasitic capacitances ($C_{GE}$, $C_{GC}$, $C_{CE}$), which influence their dynamic behavior and gate drive requirements. The Miller capacitance ($C_{GC}$) is also important.

#### **2.4 Device Ratings**

*   **Collector-Emitter Voltage ($V_{CE}$):** The maximum continuous voltage that can be applied between the collector and emitter when the device is OFF.
*   **Continuous Collector Current ($I_C$):** The maximum average current that can be conducted continuously.
*   **Pulsed Collector Current ($I_{CM}$):** The maximum peak current for short durations.
*   **Gate-Emitter Voltage ($V_{GE}$):** The voltage applied to the gate. A positive $V_{GE}$ (typically 15V for ON-state) turns it ON, and $V_{GE} \le 0V$ (typically -5V to 0V) turns it OFF.
*   **Power Dissipation ($P_D$):** Maximum power that can be dissipated.
*   **Maximum Junction Temperature ($T_J(max)$):** Highest allowable junction temperature.
*   **Thermal Resistance ($R_{thJC}$):** Junction-to-case thermal resistance.

#### **2.5 Gate Drive Requirements**

*   **Gate-Emitter Voltage ($V_{GE}$):** A gate-emitter voltage of around +15V is typically required to drive the IGBT fully ON to achieve low $V_{CE(sat)}$. A voltage of 0V or slightly negative (-5V) is needed to turn it OFF.
*   **Gate Current ($I_G$):** Similar to MOSFETs, the gate of an IGBT is insulated, and it requires current to charge and discharge the gate capacitance ($C_{GE}$). However, the gate capacitance of an IGBT is generally larger than that of a MOSFET, requiring drivers with even higher peak current capability.
*   **Dynamic Behavior:** The driver must be fast enough to charge and discharge the gate capacitance to minimize switching losses, especially the turn-off tail.

#### **2.6 Typical Gate Drive Circuits**

Gate drive circuits for IGBTs are similar in concept to those for MOSFETs but often require higher current capability and careful design to handle the slower switching.

*   **Dedicated IGBT Gate Driver ICs:** These ICs are specifically designed for IGBTs and offer features like:
    *   High peak output current.
    *   Fast switching speeds.
    *   Short propagation delays.
    *   Level shifting for control signals.
    *   Protection features (e.g., DESAT detection to monitor saturation voltage and prevent over-current).
    *   Miller clamping to prevent false turn-on.

*   **Basic Gate Driver Circuit Example for IGBT:**
    ```
    Control Signal (from Microcontroller) --> Logic Inverter --> Gate Driver IC --> R_G --> IGBT Gate

                                                                                    |
                                                                                    --- IGBT Emitter
    ```
    *   **R_G (Gate Resistor):** Essential for limiting gate current and controlling switching speed. A smaller $R_G$ leads to faster switching but higher peak gate current and potential for ringing.
    *   **Miller Clamping:** A common issue with IGBTs is false turn-on during the switching transition (especially turn-off) due to the Miller effect ($C_{GC}$ coupling voltage from collector to gate). Miller clamping circuits (often integrated into driver ICs) provide a low-impedance path to ground for the gate during these transitions.
    *   **Decoupling Capacitors:** To supply the high peak currents required by the gate driver IC.

---

### **3. Device Ratings - A Comparative View**

| Parameter                 | MOSFET (Power)                                | IGBT                                     |
| :------------------------ | :-------------------------------------------- | :--------------------------------------- |
| **Conduction Mechanism**  | Unipolar (Majority Carriers)                  | Bipolar (Majority + Minority Carriers)   |
| **On-State Voltage**      | $V_{DS(on)} \approx I_D \times R_{DS(on)}$ (Higher for high voltage/current) | $V_{CE(sat)}$ (Low, similar to BJT)     |
| **Switching Speed**       | Very Fast (tens to hundreds of ns)            | Slower than MOSFETs (hundreds of ns to µs) |
| **Switching Losses**      | Low                                           | Higher (especially tail current)         |
| **Gate Drive Power**      | Lower for DC, higher for high-frequency switching (needs current pulses) | Higher peak current needed due to larger capacitance |
| **Breakdown Voltage**     | Available up to 600-900V typically          | Available up to 1200-1700V and higher    |
| **Current Handling**      | Good, but $R_{DS(on)}$ increases rapidly with voltage rating | Excellent due to conductivity modulation |
| **Applications**          | High-frequency switching, low to medium power | Medium to high power, lower frequencies  |

---

### **4. Learning Outcomes & Course Outcome Alignment**

*   **Learning Outcome 1:** Covered by the detailed description of MOSFET and IGBT symbols, structures, static and dynamic characteristics, ratings, and gate drive requirements.
*   **Course Outcome 1 (CO1):** "Understand the operation of modern power semiconductor devices, its characteristics and select suitable gate driver circuits & heatsinks."
    *   This topic directly addresses the "operation" and "characteristics" of MOSFETs and IGBTs. The discussion on gate drive requirements and device ratings is crucial for selecting appropriate driver circuits. While heatsinks are not explicitly detailed here, the concept of thermal resistance (mentioned in ratings) is the foundation for heatsink selection.

---

### **5. Key Points to Remember**

*   **MOSFETs:** Voltage-controlled, unipolar, fast switching, low switching losses, higher $R_{DS(on)}$ at high voltages.
*   **IGBTs:** Voltage-controlled (like MOSFETs), but with bipolar output characteristics, offering low $V_{CE(sat)}$ and high current handling, but slower switching with tail current losses.
*   **Gate Drive:** Crucial for proper operation. Requires appropriate voltage and significant current pulses for rapid charging/discharging of gate capacitance.
*   **Ratings:** Essential for safe and reliable operation. Never exceed specified voltage, current, and temperature limits.
*   **Switching Frequency:** MOSFETs are generally preferred for higher frequencies, while IGBTs are better suited for lower to medium frequencies where their low conduction losses are advantageous.

---

### **6. Practice Questions and Answers**

**Question 1:**
What is the primary advantage of a MOSFET over a Bipolar Junction Transistor (BJT) in power switching applications?

**Answer:**
The primary advantage of a MOSFET is that it is a voltage-controlled device, meaning its gate requires very little DC current for control. BJTs, on the other hand, are current-controlled devices and require a continuous base current, leading to higher drive power requirements and lower input impedance. MOSFETs also offer faster switching speeds.

**Question 2:**
Explain why an IGBT typically has lower conduction losses than a MOSFET of similar voltage and current rating at low switching frequencies.

**Answer:**
An IGBT utilizes conductivity modulation. During the ON-state, minority carriers are injected into the drift region, significantly reducing its resistance. This results in a lower $V_{CE(sat)}$ compared to the $V_{DS(on)}$ of a MOSFET, which relies solely on the resistance of the drift and channel regions. Lower voltage drop means lower conduction power loss ($P_{cond} = V_{CE(sat)} \times I_C$).

**Question 3:**
What is the "tail current" in an IGBT, and why is it a concern?

**Answer:**
The "tail current" is the slow decay of current during the turn-off transition of an IGBT. It is caused by the recombination of excess minority carriers stored in the drift region. This tail current contributes significantly to switching power losses, making IGBTs less efficient than MOSFETs at high switching frequencies.

**Question 4:**
Describe the role of the gate resistor ($R_G$) in a MOSFET/IGBT gate drive circuit.

**Answer:**
The gate resistor ($R_G$) serves to limit the peak current flowing into or out of the gate during switching. This prevents excessive ringing and oscillations at the gate terminals, which can lead to erratic behavior or damage. It also helps in controlling the switching speed; a larger $R_G$ results in slower switching and lower peak gate current, while a smaller $R_G$ leads to faster switching but higher peak gate current and potentially more ringing.

**Question 5:**
Which device, MOSFET or IGBT, would you typically choose for a 100kHz, 500W switched-mode power supply, and why?

**Answer:**
A MOSFET would typically be chosen for a 100kHz, 500W SMPS. MOSFETs are much faster than IGBTs and have significantly lower switching losses at these higher frequencies. While IGBTs offer lower conduction losses, their higher switching losses at 100kHz would likely lead to overall lower efficiency and greater heat dissipation challenges.

---
