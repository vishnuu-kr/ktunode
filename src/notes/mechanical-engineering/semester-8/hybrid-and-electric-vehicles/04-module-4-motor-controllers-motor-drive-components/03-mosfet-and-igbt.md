---
title: "MOSFET and IGBT"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 4: Motor controllers – motor drive components"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464460"
status: "completed"
scrapedAt: "2026-05-20T18:21:12.336Z"
---
# HYBRID AND ELECTRIC VEHICLES

## Module 4: Motor Controllers – Motor Drive Components

### Topic: MOSFET and IGBT

---

### **Introduction to Power Semiconductor Devices in Electric Vehicle (EV) Motor Drives**

Modern Electric Vehicles (EVs) rely heavily on sophisticated motor controllers to efficiently manage the power flow between the battery and the electric motor. At the heart of these controllers are power semiconductor devices that act as electronic switches. Two of the most prevalent types of power switches used in EV motor drives are **Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs)** and **Insulated Gate Bipolar Transistors (IGBTs)**. Understanding their fundamental principles, characteristics, advantages, and disadvantages is crucial for comprehending EV powertrain design.

---

### **1. Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET)**

#### 1.1. Fundamental Principle of Operation

A MOSFET is a voltage-controlled semiconductor device. It uses an electric field to control the conductivity of a channel, thereby controlling the flow of current.

*   **Structure:** A MOSFET consists of a semiconductor substrate (usually silicon), with a source and a drain terminal. Between the source and drain is a channel, and above this channel is an insulating layer of silicon dioxide (SiO2), topped with a gate terminal.
*   **Operation:** Applying a voltage to the gate terminal creates an electric field that either accumulates or depletes charge carriers in the channel, thus modulating the channel's conductivity and controlling the current flow between the source and drain.
*   **Types:**
    *   **N-channel MOSFET (NMOS):** Current flows from drain to source. Requires a positive gate-source voltage ($V_{GS}$) to turn ON.
    *   **P-channel MOSFET (PMOS):** Current flows from source to drain. Requires a negative gate-source voltage ($V_{GS}$) to turn ON.
    *   **Enhancement Mode:** The channel needs to be created by applying a gate voltage. This is the most common type for power switching.
    *   **Depletion Mode:** The channel exists even without a gate voltage, and applying a gate voltage reduces conductivity.

#### 1.2. Key Characteristics and Parameters

*   **$V_{DS}$ (Drain-Source Voltage):** The maximum voltage that can be applied between the drain and source when the device is OFF.
*   **$I_D$ (Drain Current):** The current flowing through the drain terminal.
*   **$V_{GS}$ (Gate-Source Voltage):** The voltage applied to the gate terminal, which controls the drain current.
*   **$V_{GS(th)}$ (Threshold Voltage):** The minimum $V_{GS}$ required to initiate conduction in the channel.
*   **On-Resistance ($R_{DS(on)}$):** The resistance of the channel when the MOSFET is fully turned ON. A lower $R_{DS(on)}$ is desirable to minimize conduction losses.
*   **Switching Speed:** MOSFETs are generally very fast switching devices. This is due to the absence of minority carrier storage and the voltage-controlled nature of their operation.
*   **Gate Charge ($Q_G$):** The amount of charge that needs to be supplied to the gate to turn the device ON. This influences the switching speed and the required gate drive circuitry.

#### 1.3. Advantages of MOSFETs in EV Applications

*   **Fast Switching Speed:** Enables high-frequency operation, leading to smaller passive components (inductors and capacitors) in the motor drive circuits, thus reducing the overall size and weight of the system. (Larminie & Lowry, 2nd ed.)
*   **High Input Impedance:** Requires very little gate current to maintain the ON state, simplifying the gate drive circuit.
*   **Low Switching Losses at High Frequencies:** Their fast switching capability contributes to lower switching losses compared to some other devices, especially at higher frequencies.
*   **Good for Low Voltage Applications:** Typically preferred for battery voltages up to around 600-800V, common in many EVs. (Husain, 2nd ed.)

#### 1.4. Disadvantages of MOSFETs in EV Applications

*   **High Conduction Losses:** $R_{DS(on)}$ can be significant, especially for higher voltage and higher current devices, leading to substantial conduction losses ($P_{cond} = I_D^2 \cdot R_{DS(on)}$).
*   **Temperature Sensitivity:** $R_{DS(on)}$ increases with temperature, which can lead to thermal runaway if not properly managed.
*   **Limited Voltage and Current Ratings:** For very high power applications (e.g., heavy-duty trucks or high-performance EVs), MOSFETs might not be suitable due to limitations in voltage and current handling capabilities.

#### 1.5. Applications in EVs

MOSFETs are widely used in various EV subsystems:

*   **DC-DC Converters:** For stepping down the high voltage from the main battery to lower voltages required by auxiliary systems (e.g., 12V systems).
*   **Low-Power Motor Drives:** Smaller EVs or specific motor control applications where current and voltage requirements are moderate.
*   **Battery Charging Systems:** Efficiently managing the charging process.
*   **On-Board Chargers (OBCs):** Converting AC power from the grid to DC power for the battery.

---

### **2. Insulated Gate Bipolar Transistor (IGBT)**

#### 2.1. Fundamental Principle of Operation

An IGBT is a hybrid semiconductor device that combines the advantages of MOSFETs (voltage-controlled input) and bipolar junction transistors (BJTs) (high current handling and low saturation voltage).

*   **Structure:** An IGBT has a MOSFET structure on its input (gate) and a BJT structure on its output (collector/drain and emitter/source). It consists of a P+ substrate, an N-drift region, a P-well, and an N+ source region, with a gate electrode insulated by an oxide layer.
*   **Operation:** Similar to a MOSFET, the gate voltage controls the current flow. When the gate-source voltage ($V_{GS}$) is above the threshold voltage, it creates a channel that allows current to flow from the collector to the emitter. The output stage acts like a BJT, where the injected carriers from the P+ substrate into the N-drift region reduce the conductivity of the drift region, leading to a lower on-state voltage drop.
*   **Types:**
    *   **N-channel IGBT:** Current flows from collector to emitter. Requires a positive $V_{GS}$ to turn ON. This is the most common type.
    *   **P-channel IGBT:** Current flows from emitter to collector. Requires a negative $V_{GS}$ to turn ON. Less common for power applications.

#### 2.2. Key Characteristics and Parameters

*   **$V_{CE}$ (Collector-Emitter Voltage):** The maximum voltage that can be applied between the collector and emitter when the device is OFF.
*   **$I_C$ (Collector Current):** The current flowing through the collector terminal.
*   **$V_{GS}$ (Gate-Source Voltage):** The voltage applied to the gate terminal, controlling the collector current.
*   **$V_{GE(th)}$ (Gate-Emitter Threshold Voltage):** The minimum $V_{GS}$ required to initiate conduction.
*   **On-State Voltage Drop ($V_{CE(sat)}$):** The voltage drop across the IGBT when it is fully turned ON. This is typically lower than the $R_{DS(on)}$ drop in comparable MOSFETs, especially at higher currents.
*   **Switching Speed:** IGBTs are generally slower than MOSFETs due to the presence of minority carriers in the bipolar output stage, which need to be removed during turn-off. This leads to longer turn-off times and tail current.
*   **Gate Charge ($Q_G$):** Similar to MOSFETs, the gate charge influences the switching performance.
*   **Di/dt and dV/dt Capabilities:** IGBTs have good capabilities to handle fast changes in current and voltage, but their switching speeds are limited by the minority carrier recombination.

#### 2.3. Advantages of IGBTs in EV Applications

*   **High Voltage and High Current Capability:** IGBTs are well-suited for high-power applications, offering higher voltage and current ratings compared to MOSFETs. This makes them ideal for EV traction inverters. (Ehsani et al., 3rd ed.)
*   **Low On-State Voltage Drop ($V_{CE(sat)}$):** At high currents, $V_{CE(sat)}$ is significantly lower than the conduction losses in MOSFETs with equivalent current ratings. This results in lower conduction losses, leading to higher efficiency in high-power applications.
*   **Voltage-Controlled Device:** Like MOSFETs, they are voltage-controlled, simplifying the gate drive circuit compared to current-controlled devices like Thyristors.

#### 2.4. Disadvantages of IGBTs in EV Applications

*   **Slower Switching Speed:** The presence of minority carriers in the BJT part of the IGBT leads to slower turn-off times and a "tail current" effect, which increases switching losses, especially at higher switching frequencies. This limits the maximum switching frequency they can operate at efficiently. (Larminie & Lowry, 2nd ed.)
*   **Higher Gate Drive Power:** While voltage-controlled, the gate drive power requirement can be higher than for MOSFETs due to the larger gate capacitance.
*   **Negative Temperature Coefficient:** The $V_{CE(sat)}$ exhibits a negative temperature coefficient, which can lead to current sharing issues and potential thermal runaway in parallel operation if not managed carefully.

#### 2.5. Applications in EVs

IGBTs are the workhorses for high-power motor control in EVs:

*   **Traction Inverters:** The primary application, controlling the power flow to the electric traction motor (e.g., inverters for AC induction motors or permanent magnet synchronous motors).
*   **High-Power DC-DC Converters:** For boosting or bucking the battery voltage in applications requiring higher power.
*   **On-Board Chargers (OBCs):** Especially for high-power charging systems.

---

### **3. MOSFET vs. IGBT: Comparison and Selection Criteria**

The choice between MOSFETs and IGBTs for EV motor drives depends on the specific application requirements, particularly voltage, current, switching frequency, and efficiency targets.

| Feature             | MOSFET                                     | IGBT                                         |
| :------------------ | :----------------------------------------- | :------------------------------------------- |
| **Control Type**    | Voltage-controlled                         | Voltage-controlled                           |
| **Switching Speed** | Very Fast                                  | Slower than MOSFET (due to minority carriers) |
| **On-State Drop**   | Higher ($R_{DS(on)}$)                      | Lower ($V_{CE(sat)}$) at high currents        |
| **Conduction Losses** | Higher at high currents                    | Lower at high currents                       |
| **Switching Losses**| Lower at high frequencies                  | Higher at high frequencies (tail current)    |
| **Voltage Ratings** | Typically up to 600-800V                   | Up to 1200V, 1700V, and higher               |
| **Current Ratings** | Lower to moderate                          | High                                         |
| **Gate Drive**      | Simpler, lower power                       | More complex, higher power                   |
| **Thermal Runaway** | $R_{DS(on)}$ increases with temperature      | $V_{CE(sat)}$ decreases with temperature      |
| **Applications**    | DC-DC converters, low-power motor drives   | Traction inverters, high-power motor drives  |
| **Primary Loss Mech.**| Conduction ($I^2R$)                      | Switching losses, conduction ($V_{CE(sat)} \cdot I$) |

**Selection Criteria:**

*   **Low Voltage, High Frequency:** MOSFETs are preferred for applications operating at lower battery voltages (e.g., 48V, 96V) and requiring high switching frequencies for efficiency and size reduction.
*   **High Voltage, High Current:** IGBTs are the standard for traction inverters in most EVs due to their superior voltage and current handling capabilities and lower conduction losses at the high currents demanded by traction motors. (Husain, 2nd ed.; Ehsani et al., 3rd ed.)
*   **Efficiency at Low Load:** MOSFETs might offer better efficiency at very light loads due to their lower $R_{DS(on)}$ compared to the $V_{CE(sat)}$ of IGBTs.
*   **Efficiency at High Load:** IGBTs generally offer better efficiency at high load conditions due to their lower $V_{CE(sat)}$.
*   **Cost:** Historically, IGBTs have been more cost-effective for high-power applications.

---

### **4. SiC and GaN Devices (Emerging Technologies)**

While MOSFETs and IGBTs are dominant, **Silicon Carbide (SiC)** and **Gallium Nitride (GaN)** power semiconductor devices are gaining significant traction in EV applications. These wide-bandgap (WBG) semiconductors offer superior performance characteristics compared to traditional silicon-based devices.

*   **SiC MOSFETs:** Offer much lower $R_{DS(on)}$ for a given voltage rating, higher operating temperatures, and faster switching speeds than silicon IGBTs. They are increasingly being used in traction inverters and DC-DC converters. (Larminie & Lowry, 2nd ed.)
*   **GaN HEMTs (High Electron Mobility Transistors):** Even faster switching speeds and higher efficiency than SiC MOSFETs. They are well-suited for high-frequency applications like on-board chargers and DC-DC converters, and are starting to appear in traction inverters.

---

### **5. Motor Drive Component Selection in EVs (Connecting to CO4)**

The selection of power switches (MOSFETs/IGBTs) is a critical aspect of motor drive design, directly impacting the EV's performance, efficiency, and cost.

*   **Traction Motor Inverter:** For AC induction motors or Permanent Magnet Synchronous Motors (PMSMs) commonly used for traction, IGBTs are the traditional choice due to the high voltage and current requirements. However, SiC MOSFETs are increasingly replacing IGBTs in newer EV models, offering improved efficiency and power density. (Ehsani et al., 3rd ed.)
*   **DC-DC Converters:**
    *   **High-voltage to low-voltage (e.g., 400V to 12V):** MOSFETs are commonly used for these converters, especially if the power level is moderate and the switching frequency needs to be high to reduce component size.
    *   **Bidirectional DC-DC Converters:** For vehicle-to-grid (V2G) or vehicle-to-load (V2L) applications, efficient bidirectional converters are needed. Both MOSFETs and IGBTs (or increasingly SiC devices) are used depending on the power levels.
*   **On-Board Chargers (OBCs):** High-frequency switching is crucial for compact and efficient OBCs. MOSFETs are often used, but GaN devices are becoming prevalent for even higher efficiency and power density.

**Example Scenario:** Consider designing the traction inverter for a performance EV. The motor operates at 400V and draws up to 300A.
*   **IGBTs:** Would be a suitable choice, offering good efficiency at these high power levels with lower conduction losses than a comparable silicon MOSFET.
*   **SiC MOSFETs:** Would likely offer even better efficiency (lower switching and conduction losses), allowing for higher switching frequencies, smaller passive components, and potentially higher power density for the inverter. The higher initial cost of SiC might be offset by these benefits.

---

### **Important Points to Remember**

*   **MOSFETs:** Fast switching, good for lower voltage/current, higher $R_{DS(on)}$ can lead to conduction losses.
*   **IGBTs:** High voltage/current capability, lower $V_{CE(sat)}$ at high currents, slower switching speeds (tail current) lead to higher switching losses at high frequencies.
*   **Trade-off:** The choice is always a trade-off between switching speed, conduction losses, voltage/current ratings, switching frequency capabilities, and cost.
*   **WBG Devices (SiC, GaN):** Represent the future, offering significant improvements in efficiency, power density, and operating temperature.
*   **Gate Drive:** Essential for proper switching of both MOSFETs and IGBTs, but requirements differ.

---

### **Practice Questions**

**Question 1:**
Which power semiconductor device is generally preferred for traction inverters in electric vehicles due to its high voltage and current handling capabilities?
a) MOSFET
b) IGBT
c) Thyristor
d) TRIAC

**Question 2:**
What is the primary advantage of MOSFETs over IGBTs in terms of switching speed?
a) IGBTs have minority carriers that need to be removed during turn-off, slowing them down.
b) MOSFETs have a lower threshold voltage.
c) IGBTs have a higher on-state voltage drop.
d) MOSFETs are voltage-controlled, while IGBTs are current-controlled.

**Question 3:**
In a high-frequency DC-DC converter for an EV's auxiliary systems (low power), which device would likely be chosen and why?
a) IGBT, for high voltage handling.
b) MOSFET, for fast switching speeds to reduce component size and losses at high frequencies.
c) Thyristor, for its simple on/off control.
d) GTO, for high power dissipation.

**Question 4:**
What is the main disadvantage of using MOSFETs in high-power EV motor drives at high currents?
a) Slow switching speed.
b) High on-resistance leading to significant conduction losses.
c) Low input impedance requiring complex gate drive.
d) Inability to handle AC voltage.

**Question 5:**
Discuss the trade-offs between MOSFETs and IGBTs when selecting them for an EV traction inverter. Relate your answer to Course Outcome CO4.

---

### **Answers**

**Answer 1:**
b) IGBT. IGBTs are capable of handling the high voltages and currents required to drive EV traction motors efficiently.

**Answer 2:**
a) IGBTs have minority carriers that need to be removed during turn-off, slowing them down. MOSFETs are majority carrier devices and do not suffer from this minority carrier storage effect, making them faster.

**Answer 3:**
b) MOSFET, for fast switching speeds to reduce component size and losses at high frequencies. The fast switching allows for higher operating frequencies, leading to smaller passive components and potentially better overall efficiency for lower power systems.

**Answer 4:**
b) High on-resistance leading to significant conduction losses. While MOSFETs are fast, their $R_{DS(on)}$ can be a limiting factor in high-current applications, leading to substantial power dissipation as heat.

**Answer 5:**
For an EV traction inverter, which handles high voltage (e.g., 400V+) and high current (e.g., 100-300A+), the selection between MOSFETs and IGBTs involves critical trade-offs related to efficiency and power handling.

*   **IGBTs:**
    *   **Advantage:** They offer superior voltage and current ratings compared to silicon MOSFETs. Crucially, at the high currents typical of traction motors, IGBTs exhibit a lower on-state voltage drop ($V_{CE(sat)}$) than the $I^2R_{DS(on)}$ drop in MOSFETs. This leads to lower conduction losses, which is a major factor in overall inverter efficiency during normal driving conditions.
    *   **Disadvantage:** Their switching speed is slower due to minority carrier storage. This results in higher switching losses, especially if the inverter needs to operate at higher switching frequencies. This can limit the switching frequency or require more robust cooling.

*   **MOSFETs (Silicon):**
    *   **Advantage:** They have significantly faster switching speeds, which enables higher switching frequencies. This can lead to smaller passive components (inductors, capacitors), reducing the overall size and weight of the inverter. They also have simpler gate drive requirements.
    *   **Disadvantage:** At the high currents required for traction, the $R_{DS(on)}$ of silicon MOSFETs becomes very high, leading to substantial conduction losses. For high-power traction, silicon MOSFETs are generally less efficient than IGBTs due to these conduction losses.

*   **Modern Trend (SiC MOSFETs):** Silicon Carbide (SiC) MOSFETs offer the advantages of both worlds: much lower $R_{DS(on)}$ for their voltage rating (leading to lower conduction losses than silicon IGBTs) and significantly faster switching speeds (leading to lower switching losses than silicon IGBTs). This allows for higher efficiency, higher power density, and improved thermal performance, making them increasingly the preferred choice for advanced EV traction inverters.

Therefore, when selecting components for a traction inverter, designers must balance the need for high current/voltage handling and low conduction losses (favoring IGBTs or SiC MOSFETs) with the benefits of fast switching (favoring MOSFETs or SiC/GaN). For traditional silicon-based solutions, IGBTs have been the standard for traction due to the dominance of conduction losses at high power. However, the advent of SiC MOSFETs is shifting this paradigm towards more efficient and compact power electronics. This directly aligns with **CO4: Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement.**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
