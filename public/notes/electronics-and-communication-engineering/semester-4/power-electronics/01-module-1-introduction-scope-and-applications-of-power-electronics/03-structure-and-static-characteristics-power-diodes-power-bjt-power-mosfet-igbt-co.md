---
title: "Structure and static characteristics:  Power diodes, Power BJT, Power MOSFET & IGBT – comparison."
subject: "POWER ELECTRONICS"
module: "Module 1: Introduction:  Scope and applications of Power Electronics"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5f4"
status: "completed"
scrapedAt: "2026-05-23T17:52:07.044Z"
---
# Power Electronics: Module 1 - Introduction: Scope, Applications, and Power Semiconductor Devices

## 1. Introduction to Power Electronics

### 1.1 Scope and Applications of Power Electronics

**Definition:** Power electronics is the field of electrical engineering that deals with the control and conversion of electric power using semiconductor devices. It bridges the gap between the AC power grid and the DC loads/sources, or between different AC/DC voltage levels and frequencies.

**Key Concepts:**

*   **Power Conversion:** Changing electrical energy from one form to another (e.g., AC to DC, DC to AC, DC to DC, AC to AC).
*   **Power Control:** Regulating the magnitude of voltage, current, or frequency of electrical power.
*   **Efficiency:** Minimizing energy losses during conversion and control.
*   **Reliability:** Ensuring continuous and safe operation of the power electronic systems.

**Applications:** Power electronics is ubiquitous in modern life, impacting various sectors.

*   **Consumer Electronics:**
    *   **Switching Power Supplies (SMPS):** Found in computers, TVs, chargers, offering high efficiency and compact size (Rashid, Ch. 1).
    *   **Lighting Control:** Dimmable LED drivers.
    *   **Appliances:** Motor speed control in washing machines, fans, air conditioners.
*   **Industrial Applications:**
    *   **Motor Drives:** Variable frequency drives (VFDs) for AC motors, DC motor drives for precise speed and torque control (Mohan et al., Ch. 1). Used in pumps, conveyors, elevators.
    *   **Industrial Heating:** Induction heating, dielectric heating.
    *   **Welding:** Controlled power sources for arc welding.
    *   **Robotics:** Precise motor control and power management.
*   **Renewable Energy Systems:**
    *   **Solar PV Systems:** Maximum Power Point Tracking (MPPT) converters to extract maximum power from solar panels, inverters to convert DC to AC for grid connection (Umanand, Ch. 1).
    *   **Wind Turbines:** Power converters for grid synchronization and voltage/frequency control.
    *   **Battery Energy Storage Systems (BESS):** Charging and discharging control, DC-DC conversion.
*   **Electric Transportation:**
    *   **Electric Vehicles (EVs):** Battery chargers, DC-DC converters, inverters for traction motors (Hart, Ch. 1).
    *   **Hybrid Electric Vehicles (HEVs).**
*   **Power Systems:**
    *   **High Voltage DC (HVDC) Transmission:** Efficient long-distance power transmission (Rashid, Ch. 17).
    *   **Flexible AC Transmission Systems (FACTS):** Improving power flow control and stability in AC grids.
    *   **Uninterruptible Power Supplies (UPS):** Providing continuous power during mains failure.
*   **Telecommunications:** Power supplies for base stations and data centers.
*   **Aerospace and Defense:** Power conditioning for satellite systems, aircraft power generation and distribution.

**Example:** A variable speed drive for an industrial fan uses a power electronic converter (inverter) to vary the frequency supplied to the motor, thereby controlling its speed. This is more efficient than mechanical throttling.

**Important Point:** Power electronic converters are characterized by their ability to switch power semiconductor devices on and off at high frequencies to achieve power conversion and control.

---

## 2. Structure and Static Characteristics of Power Semiconductor Devices

Power semiconductor devices are the building blocks of power electronic converters. Their ability to handle high voltage and current, coupled with fast switching speeds and low power losses, makes them suitable for these applications.

### 2.1 Power Diodes

**Structure:** A power diode is a two-terminal PN junction device designed to conduct current in one direction (forward bias) and block current in the other (reverse bias).

*   **P-N Junction:** The fundamental structure.
*   **Doping Levels:** Different doping concentrations in P and N regions to optimize breakdown voltage, forward voltage drop, and switching speed.
    *   **Anode (P-type):** Heavily doped.
    *   **Cathode (N-type):** Lightly doped (drift region) to withstand high reverse voltage.
*   **Drift Region:** A lightly doped region that supports the full depletion layer in reverse bias, enabling higher voltage blocking capability.

**Static Characteristics:**

*   **Forward Voltage Drop ($V_F$):** The voltage across the diode when it conducts current. It's relatively constant for a given current and device type (e.g., 0.7-1.2V for silicon diodes). Lower $V_F$ means lower conduction loss.
    *   $P_{cond} = V_F \times I_{avg}$
*   **Reverse Blocking Voltage ($V_{RRM}$):** The maximum reverse voltage the diode can withstand before breakdown.
*   **Forward Current Rating ($I_{F(AV)}$):** The average forward current the diode can handle continuously.
*   **Surge Current Rating ($I_{FSM}$):** The maximum non-repetitive forward current the diode can withstand for a short duration.
*   **Reverse Leakage Current ($I_R$):** The small current that flows in the reverse direction when the diode is reverse-biased. This contributes to power loss.
*   **Switching Characteristics (Dynamic):**
    *   **Forward Recovery Time:** Time taken to reach steady-state forward voltage after switching from reverse bias to forward bias.
    *   **Reverse Recovery Time ($t_{rr}$):** The time taken for the diode to stop conducting when switched from forward bias to reverse bias. This is crucial for switching losses (Umanand, Ch. 2). It's characterized by a reverse recovery charge ($Q_{rr}$).

**Types:**

*   **General Purpose Diodes:** Slow switching, suitable for line-commutated rectifiers.
*   **Fast Recovery Diodes:** Reduced reverse recovery time, suitable for PWM converters.
*   **Schottky Diodes:** Lower $V_F$, very fast switching (no minority carrier storage), but lower reverse voltage ratings.

**Example:** In a rectifier circuit, a power diode converts AC to pulsating DC.

### 2.2 Power Bipolar Junction Transistor (BJT)

**Structure:** A three-terminal bipolar device that acts as a voltage-controlled current source, but is triggered by a base current.

*   **Layers:** Emitter (E), Base (B), Collector (C). Typically PNP or NPN.
*   **Doping:** Similar to signal BJTs but designed for higher power handling:
    *   **Base:** Thin and lightly doped for good switching speed.
    *   **Collector:** Heavily doped, with a drift region to increase breakdown voltage.
*   **Operation:** A small base current ($I_B$) controls a larger collector current ($I_C$).
    *   $I_C = \beta I_B$, where $\beta$ is the current gain.
*   **Control:** Current-controlled device. Requires a continuous base current to remain ON.

**Static Characteristics:**

*   **Collector-Emitter Saturation Voltage ($V_{CE(sat)}$):** The voltage drop across the transistor when it's fully ON (saturated). This is a critical parameter for conduction loss:
    *   $P_{cond} = V_{CE(sat)} \times I_{C(avg)}$
*   **Current Gain ($\beta$):** Ratio of collector current to base current ($I_C/I_B$). Power BJTs have lower $\beta$ compared to signal BJTs.
*   **Collector Current Rating ($I_{C(max)}$):** Maximum continuous collector current.
*   **Collector-Emitter Breakdown Voltage ($V_{CEV(BR)}$ or $V_{CES(BR)}$):** Maximum voltage the device can withstand in the OFF state.
*   **Base Current Requirement ($I_B$):** The base current needed to drive the transistor into saturation for a given collector current.
*   **Switching Characteristics (Dynamic):**
    *   **Turn-on Time:** Delay time, rise time.
    *   **Turn-off Time:** Storage time (due to stored charge in the base), fall time. Storage time is a major limitation for switching speed in BJTs.

**Advantages:**

*   High current handling capability.
*   Relatively low $V_{CE(sat)}$ compared to MOSFETs at high current densities.
*   Good gain.

**Disadvantages:**

*   Requires base current drive, leading to static power loss in the base circuit.
*   Slow switching speed due to storage time.
*   Lower input impedance.

**Example:** Used in DC-DC converters (choppers) and DC-AC converters (inverters) where moderate switching frequencies are acceptable.

### 2.3 Power Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET)

**Structure:** A three-terminal unipolar device whose conduction is controlled by an electric field applied to the gate.

*   **Terminals:** Gate (G), Drain (D), Source (S).
*   **Layers:**
    *   **Substrate:** P-type or N-type semiconductor.
    *   **Channel:** N-channel or P-channel region formed by inversion or accumulation of charge carriers.
    *   **Source and Drain Regions:** Heavily doped.
    *   **Gate Oxide:** A thin insulating layer (SiO2) between the gate and the channel.
*   **Operation:** A positive voltage applied to the gate (for N-channel enhancement mode) relative to the source attracts minority carriers to form a conductive channel between drain and source. It is a voltage-controlled device.
    *   $I_D$ is controlled by $V_{GS}$.
*   **Body Diode:** An intrinsic parasitic diode exists between drain and source due to the device structure. This can be used in some circuit configurations but often needs to be bypassed by a fast-switching external diode for better performance.

**Static Characteristics:**

*   **On-Resistance ($R_{DS(on)}$):** The resistance between drain and source when the MOSFET is fully ON. This is the primary parameter for conduction loss:
    *   $P_{cond} = I_D^2 \times R_{DS(on)}$
    *   $R_{DS(on)}$ increases with temperature and voltage rating.
*   **Gate-Source Threshold Voltage ($V_{GS(th)}$):** The gate-source voltage required to start forming the channel.
*   **Drain-Source On-State Voltage ($V_{DS(on)}$):** The voltage drop when conducting. For a MOSFET, $V_{DS(on)} \approx I_D \times R_{DS(on)}$.
*   **Drain Current Rating ($I_D$):** Maximum continuous drain current.
*   **Drain-Source Breakdown Voltage ($V_{DS(BR)}$):** Maximum voltage the device can withstand in the OFF state.
*   **Gate Leakage Current:** Very small due to the insulating oxide layer.

**Advantages:**

*   Voltage-controlled device, requiring very little gate current (only for charging/discharging gate capacitance).
*   Very fast switching speeds (no minority carrier storage).
*   High input impedance.
*   Positive temperature coefficient for $R_{DS(on)}$, which helps in paralleling devices.

**Disadvantages:**

*   Higher conduction losses ($I_D^2 R_{DS(on)}$) than BJTs at high current densities.
*   Gate capacitance requires a dedicated gate driver circuit.
*   Susceptible to gate oxide breakdown due to static electricity.

**Example:** Widely used in high-frequency applications like switch-mode power supplies (SMPS), DC-DC converters, and inverters due to their fast switching speed.

### 2.4 Insulated Gate Bipolar Transistor (IGBT)

**Structure:** A hybrid device combining the advantages of MOSFETs and BJTs. It's a three-terminal device.

*   **Input:** Voltage-controlled gate (like MOSFET).
*   **Output:** Current conduction between collector and emitter, with BJT-like characteristics.
*   **Structure:** Essentially a MOSFET driving a BJT output stage. The MOSFET gate controls the conductivity of the BJT's base region.
    *   **MOSFET Gate:** Controls the formation of the channel.
    *   **BJT Output:** Current flows from collector to emitter.
*   **Operation:** A positive gate-source voltage ($V_{GS}$) turns on the internal MOSFET, which injects carriers into the BJT base, turning the BJT ON.

**Static Characteristics:**

*   **Collector-Emitter Saturation Voltage ($V_{CE(sat)}$):** Similar to BJT, but generally lower than MOSFETs at higher current ratings. It's relatively constant and does not increase quadratically with current like MOSFETs.
    *   $P_{cond} = V_{CE(sat)} \times I_{C(avg)}$
*   **Gate-Source Threshold Voltage ($V_{GS(th)}$):** Similar to MOSFET.
*   **Collector Current Rating ($I_{C(max)}$):** High current handling capability.
*   **Collector-Emitter Breakdown Voltage ($V_{CE(BR)}$):** High voltage blocking capability.
*   **Switching Characteristics (Dynamic):**
    *   **Turn-on Time:** Fast, dominated by the MOSFET part.
    *   **Turn-off Time:** Slower than MOSFETs due to the minority carrier storage in the BJT output stage, but faster than BJTs. This is a trade-off.
    *   **Tail Current:** A characteristic feature during turn-off, contributing to switching losses.

**Advantages:**

*   High input impedance (voltage controlled).
*   Lower conduction losses ($V_{CE(sat)}$) than MOSFETs at high current/voltage ratings.
*   Good switching speed, faster than BJTs.
*   High current and voltage handling capabilities.

**Disadvantages:**

*   Slower switching speed than MOSFETs due to tail current during turn-off.
*   Requires a gate driver circuit.
*   Susceptible to latch-up under certain conditions (though modern IGBTs have latch-up protection).
*   Body diode performance is generally not as good as a discrete fast recovery diode.

**Example:** Widely used in medium to high power applications like motor drives, induction heating, and UPS systems where a balance between switching speed and conduction loss is required.

---

## 3. Comparison of Power Semiconductor Devices

| Feature                   | Power Diode (Fast Recovery)                | Power BJT                                  | Power MOSFET                                  | IGBT                                           |
| :------------------------ | :----------------------------------------- | :----------------------------------------- | :-------------------------------------------- | :--------------------------------------------- |
| **Control Type**          | None (two-terminal)                        | Current-controlled (base current $I_B$)    | Voltage-controlled ($V_{GS}$)                 | Voltage-controlled ($V_{GS}$)                  |
| **Carrier Type**          | Unipolar (majority) & Bipolar (minority)   | Bipolar (both majority and minority)       | Unipolar (majority)                           | Hybrid (MOSFET input, BJT output)              |
| **Switching Speed**       | Moderate (limited by $t_{rr}$)             | Slow (limited by storage time)             | Very Fast                                     | Fast (faster than BJT, slower than MOSFET)     |
| **Conduction Loss**       | $V_F \times I_{avg}$ (low $V_F$)           | $V_{CE(sat)} \times I_C$ (low $V_{CE(sat)}$) | $I_D^2 \times R_{DS(on)}$ (high $R_{DS(on)}$) | $V_{CE(sat)} \times I_C$ (moderate $V_{CE(sat)}$) |
| **Switching Loss**        | Moderate (related to $t_{rr}$)             | High (due to storage time)                 | Low                                           | Moderate (due to tail current)                 |
| **Gate Drive Power**      | None                                       | Requires base current drive (constant loss) | Very low (for charging/discharging capacitance) | Low (for charging/discharging capacitance)     |
| **Input Impedance**       | N/A                                        | Low                                        | Very High                                     | High                                           |
| **On-State Voltage Drop** | Low $V_F$                                  | Low $V_{CE(sat)}$                          | Can be high ($I_D \times R_{DS(on)}$)         | Low $V_{CE(sat)}$ (for higher currents)        |
| **Voltage Rating**        | High                                       | High                                       | Moderate (high voltage MOSFETs are expensive) | High                                           |
| **Current Rating**        | High                                       | Very High                                  | Moderate (current limited by $R_{DS(on)}$)    | High                                           |
| **Temperature Coefficient** | $V_F$ increases with temp.                 | $V_{CE(sat)}$ increases with temp.         | $R_{DS(on)}$ increases with temp.             | $V_{CE(sat)}$ generally increases with temp.   |
| **Typical Applications**  | Rectifiers, freewheeling diodes            | Motor drives (lower freq), switch-mode PSUs | SMPS, DC-DC converters, high-freq inverters | Motor drives, UPS, Induction heating, Traction |
| **Parasitic Elements**    | $Q_{rr}$, $t_{rr}$                         | Storage time                               | Gate capacitance ($C_{iss}, C_{oss}$), body diode | Gate capacitance, tail current, body diode     |

**Important Point:** The choice of device depends on the specific application requirements: operating frequency, voltage and current levels, efficiency targets, and cost.

**Example Scenario:**
*   For a 1 MHz SMPS, a **Power MOSFET** is preferred due to its fast switching speed, even though its $R_{DS(on)}$ might lead to higher conduction losses than a comparable IGBT.
*   For a 10 kW, 20 kHz induction heating system, an **IGBT** might be a better choice, offering lower conduction losses than a MOSFET at that current level, with acceptable switching losses.
*   For a simple 50 Hz rectifier, a **general-purpose diode** is sufficient.

---

## 4. Learning Outcomes & Course Outcome Alignment

**Learning Outcomes:**

*   **Structure and static characteristics: Power diodes, Power BJT, Power MOSFET & IGBT – comparison.**
    *   This entire set of notes covers this outcome in detail, describing the structure and key static parameters ($V_F$, $V_{CE(sat)}$, $R_{DS(on)}$, $\beta$, $V_{GS(th)}$, etc.) and comparing them.

**Course Outcomes (COs):**

*   **CO1: Outline the operation of power semiconductor devices and its characteristics. (Knowledge Level: K2)**
    *   **Covered:** The notes describe how each device operates (PN junction, base current control, gate voltage control) and details their key static and dynamic characteristics. The comparison table further reinforces this.
*   **CO2: Design and analyze various rectifier circuits for power devices (Knowledge Level: K3)**
    *   **Foundation:** Understanding power diodes is essential for rectifier analysis. The characteristics of diodes ($V_F$, $V_{RRM}$) directly impact rectifier performance and design decisions (e.g., choice of diode for a given voltage/current). This module provides the foundational device knowledge for later rectifier analysis.
*   **CO3: Analyze different power converter circuits (Knowledge Level: K3)**
    *   **Foundation:** All power converters (DC-DC, DC-AC, AC-AC) rely on the switching action of power semiconductor devices. Knowledge of their static and dynamic characteristics (conduction loss, switching loss, $V_{CE(sat)}$, $R_{DS(on)}$, switching times) is crucial for analyzing the efficiency, performance, and limitations of these converters. This module lays the groundwork.
*   **CO4: Illustrate different types of inverter circuits (Knowledge Level: K2)**
    *   **Foundation:** Similar to CO2 and CO3, understanding the characteristics of MOSFETs, IGBTs, and BJTs is fundamental to understanding how they are used to synthesize AC waveforms in inverter circuits. Their switching speeds and voltage/current ratings dictate the inverter's operating frequency and power capability.

---

## 5. Practice Questions and Exercises

**Question 1:**
A power MOSFET has an $R_{DS(on)}$ of 50 m$\Omega$ at room temperature. If the device conducts an average current of 10 A, calculate the conduction power loss. If the device temperature increases, and $R_{DS(on)}$ doubles, what is the new conduction loss?

**Answer:**
*   Initial Conduction Loss: $P_{cond} = I_D^2 \times R_{DS(on)} = (10 \text{ A})^2 \times 50 \text{ m}\Omega = 100 \times 0.050 \Omega = 5$ W.
*   New Conduction Loss: $P_{cond\_new} = (10 \text{ A})^2 \times (2 \times 50 \text{ m}\Omega) = 100 \times 0.100 \Omega = 10$ W.
    *   This demonstrates the positive temperature coefficient of $R_{DS(on)}$ for MOSFETs, which is beneficial for paralleling but leads to increased losses with temperature.

**Question 2:**
Compare the gate drive requirements for a Power MOSFET and a Power BJT. Which device generally offers lower switching losses and why?

**Answer:**
*   **Gate Drive:**
    *   **Power MOSFET:** Voltage-controlled. Requires a voltage to be applied to the gate terminal relative to the source ($V_{GS}$) to turn it ON. The drive circuit needs to supply current to charge and discharge the gate-source capacitance ($C_{gs}$) and gate-drain capacitance ($C_{gd}$), but once the gate is charged, the static power consumption is negligible.
    *   **Power BJT:** Current-controlled. Requires a continuous base current ($I_B$) to maintain it in the ON state. This base current is typically a significant fraction of the collector current and leads to continuous power loss in the base drive circuit ($P_{drive} = V_{BE} \times I_B$).
*   **Switching Losses:**
    *   **Power MOSFET** generally offers lower switching losses because it is a majority carrier device. Its switching speed is primarily limited by the charging/discharging time of its internal capacitances, not by minority carrier storage effects as in BJTs. BJTs suffer from significant storage time during turn-off, which extends the time the device spends in the active region, leading to higher switching losses.

**Question 3:**
What is the primary limitation of a power diode when used in high-frequency PWM converters? Explain the parameter responsible for this limitation.

**Answer:**
The primary limitation of a power diode in high-frequency PWM converters is its **reverse recovery time ($t_{rr}$)**. When the diode switches from conducting forward current to blocking reverse voltage, it doesn't stop conducting instantaneously. Instead, there's a brief period during which it conducts a reverse current. This reverse current is due to the stored minority carriers in the PN junction. This phenomenon causes significant switching losses, especially at high frequencies, as the diode is subjected to both high voltage and significant current simultaneously during this recovery period. The reverse recovery charge ($Q_{rr}$) is a measure of the stored charge that causes this effect.

**Question 4:**
Explain the concept of $V_{CE(sat)}$ in a Power BJT and an IGBT. How does it affect the conduction losses in these devices?

**Answer:**
*   **$V_{CE(sat)}$ (Collector-Emitter Saturation Voltage):** This is the voltage drop across the output terminals (Collector-Emitter) of a BJT or IGBT when it is fully turned ON (saturated). It represents the "on-state" resistance of the device.
*   **Conduction Losses:** Conduction losses occur when the device is conducting current and are calculated as $P_{cond} = V_{CE(sat)} \times I_{C(avg)}$ for BJTs and IGBTs.
*   **Impact:** A lower $V_{CE(sat)}$ for a given current leads to lower conduction power losses.
    *   **Power BJT:** Generally has a low $V_{CE(sat)}$ due to bipolar action, making it efficient for conduction at high currents.
    *   **IGBT:** Combines MOSFET input with BJT output. It typically exhibits a low $V_{CE(sat)}$ similar to or better than BJTs at high current densities, making it suitable for medium to high power applications where conduction losses are significant. This low $V_{CE(sat)}$ is a key advantage over MOSFETs at higher current levels where the MOSFET's $I_D^2 \times R_{DS(on)}$ losses become dominant.

---

## 6. Important Points to Remember

*   **Power electronic devices are the heart of power conversion.** Their characteristics dictate the performance of the converters.
*   **Conduction loss** ($P_{cond}$) occurs when the device is ON, proportional to voltage drop and current.
*   **Switching loss** ($P_{sw}$) occurs during transitions (ON/OFF) and is related to the overlap of voltage and current, and switching times.
*   **Power Diodes:** Characterized by $V_F$ and $t_{rr}$. $t_{rr}$ is critical for high-frequency applications.
*   **Power BJTs:** Current-controlled, low $V_{CE(sat)}$, but slow due to storage time. Require base drive.
*   **Power MOSFETs:** Voltage-controlled, fast switching, high input impedance, but can have high $R_{DS(on)}$ leading to significant conduction losses at high currents.
*   **IGBTs:** Voltage-controlled, combine MOSFET input with BJT output. Offer a good balance of low $V_{CE(sat)}$ and moderate switching speeds, making them versatile for medium-to-high power applications.
*   **The choice of device** is a trade-off between switching speed, conduction losses, voltage/current ratings, and cost.
*   **Wide Bandgap (WBG) devices** like SiC and GaN (mentioned in reference books) offer superior performance (higher frequency, higher temperature, lower losses) compared to silicon-based devices, but are typically more expensive.

---

This study material provides a comprehensive overview of the structure and static characteristics of key power semiconductor devices, aligning with the stated learning and course outcomes. The comparison table and practice questions aim to solidify understanding and prepare for further analysis in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
