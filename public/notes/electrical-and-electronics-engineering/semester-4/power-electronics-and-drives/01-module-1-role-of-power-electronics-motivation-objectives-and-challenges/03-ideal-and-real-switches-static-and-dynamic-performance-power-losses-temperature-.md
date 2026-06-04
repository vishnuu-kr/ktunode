---
title: "Ideal and real switches- Static and dynamic Performance – Power losses- Temperature rise- Thermal Analogy- Use of Heat sinks- Need for high efficiency, small size, high reliability and low cost- Overview of Applications"
subject: "POWER ELECTRONICS AND DRIVES"
module: "Module 1: Role of Power Electronics, Motivation, Objectives and Challenges"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e1c"
status: "completed"
scrapedAt: "2026-05-23T16:17:44.263Z"
---
Here are comprehensive study notes for the specified topic in Power Electronics and Drives, structured to meet your requirements:

# Module 1: Role of Power Electronics, Motivation, Objectives and Challenges

## Topic: Ideal and Real Switches - Static and Dynamic Performance, Power Losses, Temperature Rise, Thermal Analogy, Heat Sinks, Need for High Efficiency, Small Size, High Reliability, Low Cost, and Overview of Applications

---

### 1. Introduction to Power Electronics

Power electronics is the application of solid-state electronics for the control of power. It deals with the conversion of electrical power from one form to another using semiconductor switching devices. This conversion is crucial for a wide range of applications, from powering your mobile phone to controlling large industrial motors.

**Key Concept:** Power electronics bridges the gap between electrical power sources and electrical loads, enabling efficient and controllable power conversion.

---

### 2. The Role of the Switch in Power Electronics

At the heart of any power electronic converter is the **switching element**. These devices act like electronically controlled switches, turning power ON and OFF at high frequencies to achieve the desired power conversion.

**Motivation:** Traditional methods of power control often involved dissipative elements (like resistors) or complex electromechanical components. Power electronics offers a more efficient, faster, and smaller alternative by utilizing semiconductor switches.

---

### 3. Ideal vs. Real Switches

Understanding the difference between an ideal switch and a real switching device is fundamental to analyzing power electronic converters.

#### 3.1. Ideal Switch

An ideal switch has the following characteristics:

*   **Zero ON-state Resistance ($R_{on} = 0$):** When switched ON, it offers no resistance, leading to zero voltage drop across it and hence zero conduction loss.
*   **Infinite OFF-state Resistance ($R_{off} = \infty$):** When switched OFF, it blocks current completely, allowing no current to flow.
*   **Zero Switching Time:** It transitions instantaneously from ON to OFF state and vice-versa. No time is lost during switching.
*   **Zero Control Power:** It requires no power to turn ON or OFF.
*   **Infinite Current Rating:** Can carry any amount of current when ON.
*   **Infinite Voltage Rating:** Can withstand any amount of voltage when OFF.

**Example:** A conceptual switch in basic circuit theory.

**Importance:** Ideal switches simplify initial circuit analysis and provide a baseline for understanding the fundamental operation of converters.

#### 3.2. Real Switches

Real switching devices (like MOSFETs, IGBTs, Thyristors) deviate from ideal behavior and exhibit certain limitations:

*   **Non-zero ON-state Resistance ($R_{on} > 0$):** When ON, there is a small but finite voltage drop across the device, leading to conduction losses.
*   **Finite OFF-state Resistance ($R_{off}$ is very large but not infinite):** When OFF, there can be a small leakage current, which contributes to small losses.
*   **Finite Switching Times:** Real switches take a finite amount of time to turn ON and OFF. This is characterized by rise time, fall time, delay time, and storage time. This leads to switching losses.
*   **Control Power Requirement:** Gate drive circuits are needed to control the switching, which consume some power.
*   **Finite Current and Voltage Ratings:** Devices have maximum limits for voltage and current they can handle. Exceeding these can lead to device failure.

**Examples:**
*   **MOSFET:** Low ON-state resistance for conduction, fast switching, voltage-controlled.
*   **IGBT:** Combines low conduction loss of MOSFETs with high breakdown voltage of Thyristors.
*   **Thyristor (SCR):** High voltage/current capability, but slower switching and requires commutation circuitry.

**Importance:** Real switches are the components that are actually used in power electronic circuits, and their non-ideal characteristics dictate the design, efficiency, and performance of the converters.

---

### 4. Static and Dynamic Performance of Real Switches

#### 4.1. Static Performance

Static performance refers to the behavior of the switch when it is either fully ON or fully OFF, assuming no changes in current or voltage over time.

*   **ON-State Characteristics:**
    *   **Voltage Drop ($V_{DS(on)}$ for MOSFET, $V_{CE(sat)}$ for IGBT/BJT):** This is the voltage across the switch when it's conducting current. It's a key factor in determining conduction losses. For MOSFETs, $V_{DS(on)}$ increases with drain current ($I_D$). For IGBTs, $V_{CE(sat)}$ is relatively constant over a range of collector currents.
    *   **ON-State Resistance ($R_{on}$):** For MOSFETs, $R_{on}$ is approximately constant at lower currents but can increase at higher currents due to temperature effects. It's a critical parameter for conduction loss calculation ($P_{cond} = I_{rms}^2 R_{on}$).
*   **OFF-State Characteristics:**
    *   **Blocking Voltage ($V_{DS}$ for MOSFET, $V_{CE}$ for IGBT/BJT):** The maximum voltage the switch can withstand when turned OFF.
    *   **Leakage Current ($I_D(off)$, $I_C(off)$):** A small current that flows even when the switch is OFF. This is usually very small and contributes to minimal losses.

**Textbook Reference:** Mohan, Undeland, Robbins (3rd Ed., Indian Adaptation) Chapter 2: Semiconductor Switches. Discusses the characteristics of various switching devices.

#### 4.2. Dynamic Performance

Dynamic performance refers to the behavior of the switch during the transition from ON to OFF or OFF to ON. This is where switching losses occur.

*   **Switching Times:**
    *   **Turn-ON Time:**
        *   **Delay Time ($t_d$):** Time from the application of the gate signal to the point where the drain/collector current starts to rise.
        *   **Rise Time ($t_r$):** Time taken for the drain/collector current to rise from 10% to 90% of its final value.
    *   **Turn-OFF Time:**
        *   **Storage Time ($t_s$):** Time from the removal of the gate signal to the point where the drain/collector current starts to decrease significantly. This is particularly important for bipolar devices like BJTs and IGBTs due to minority carrier storage.
        *   **Fall Time ($t_f$):** Time taken for the drain/collector current to fall from 90% to 10% of its initial value.
*   **Switching Losses:** These occur during the transition periods when both voltage and current are non-zero across the switch.
    *   **Turn-ON Loss:** Occurs as current rises while voltage is still high.
    *   **Turn-OFF Loss:** Occurs as voltage rises while current is still high.
    *   **Tail Current Loss (for IGBTs):** A significant part of turn-off loss in IGBTs is due to the "tail current" which decays slowly after the gate voltage is removed.
    *   **Reverse Recovery Loss (for Diodes):** When a diode stops conducting and starts blocking, it has a reverse recovery period where it conducts current in the reverse direction, causing losses.

**Textbook Reference:** Rashid (4th Ed.) Chapter 4: Switching Transients and Switching Losses. Provides detailed explanations and calculations for switching losses.

**Example:** A MOSFET switching a load. During turn-ON, the gate-source voltage ($V_{GS}$) must rise above the threshold voltage ($V_{th}$), then the drain current ($I_D$) starts flowing. During turn-OFF, $V_{GS}$ drops, and $I_D$ falls. The time taken for these transitions determines the switching losses.

---

### 5. Power Losses in Real Switches

Power losses are a critical concern in power electronics as they reduce efficiency, generate heat, and impact the overall system design.

#### 5.1. Conduction Losses ($P_{cond}$)

Occur when the switch is in the ON state due to the voltage drop across it.

*   **Calculation:**
    *   For MOSFETs (using $R_{on}$): $P_{cond} \approx I_{rms}^2 R_{on}$ (for continuous current) or $P_{cond} = \frac{1}{T} \int_0^T v_{ON}(t) i_{ON}(t) dt$.
    *   For IGBTs/BJTs (using $V_{CE(sat)}$): $P_{cond} = V_{CE(sat)} \times I_{avg}$ (for average current) or $P_{cond} = \frac{1}{T} \int_0^T v_{CE(sat)}(t) i_C(t) dt$.
*   **Factors affecting Conduction Loss:** ON-state resistance/voltage drop, RMS/average current.

#### 5.2. Switching Losses ($P_{sw}$)

Occur during the transient periods of switching (turn-ON and turn-OFF).

*   **Calculation:**
    *   Approximate formula for one switching cycle: $P_{sw} \approx \frac{1}{2} V_{DS(max)} I_{DS(max)} (t_r + t_f) f_{sw}$ for MOSFETs, where $f_{sw}$ is the switching frequency.
    *   More accurate calculation involves integrating the instantaneous power during transitions.
*   **Factors affecting Switching Loss:** Maximum voltage and current, switching times ($t_r, t_f, t_s$), switching frequency ($f_{sw}$).

#### 5.3. Gate Drive Losses ($P_{drive}$)

Power consumed by the gate drive circuit to switch the device ON and OFF. This involves charging and discharging the gate capacitance.

*   **Calculation:** $P_{drive} = f_{sw} \times C_g \times V_{gs}^2$ where $C_g$ is the gate capacitance and $V_{gs}$ is the gate voltage swing.

#### 5.4. Other Losses

*   **Leakage Losses:** Minimal losses due to small leakage currents in the OFF state.
*   **Body Diode Conduction Losses:** If a body diode is used for freewheeling, it contributes conduction losses when forward biased.

**Important Point:** Total losses in a switching device are the sum of conduction losses, switching losses, and gate drive losses. Efficiency is generally defined as $\eta = \frac{P_{out}}{P_{in}} = \frac{P_{out}}{P_{out} + P_{losses}}$.

---

### 6. Temperature Rise and Thermal Analogy

#### 6.1. Temperature Rise

The power losses generated within a semiconductor switch dissipate as heat, causing its junction temperature to rise above the ambient temperature.

*   **Junction Temperature ($T_j$):** The operating temperature of the semiconductor junction, which is the hottest part of the device.
*   **Ambient Temperature ($T_a$):** The temperature of the surrounding environment.
*   **Case Temperature ($T_c$):** The temperature of the device package.
*   **Heatsink Temperature ($T_h$):** The temperature of the heatsink.

**Relationship:** $T_j = T_a + \Delta T_j$, where $\Delta T_j$ is the total temperature rise.

**Consequence of High Temperature:**
*   Reduced device performance and increased $R_{on}$ or $V_{CE(sat)}$.
*   Degradation of device characteristics.
*   Reduced reliability and potential for thermal runaway or catastrophic failure.
*   **Maximum Junction Temperature ($T_{j,max}$):** A critical datasheet parameter that must not be exceeded.

#### 6.2. Thermal Analogy

The flow of heat from the semiconductor junction to the ambient environment can be analogously represented by an electrical circuit.

| Thermal Parameter       | Electrical Analogy       | Symbol    | Unit        |
| :---------------------- | :----------------------- | :-------- | :---------- |
| Temperature Difference  | Voltage                  | $\Delta T$  | K or °C     |
| Heat Flow Rate          | Current                  | $P$       | W           |
| Thermal Resistance      | Electrical Resistance    | $R_{th}$    | K/W or °C/W |
| Heat Capacity           | Capacitance              | $C_{th}$    | J/K or J/°C |
| Thermal Conductance     | Electrical Conductance   | $G_{th}$    | W/K or W/°C |

**Thermal Resistance ($R_{th}$):** Analogous to electrical resistance, it quantifies how much temperature rise occurs for a given heat flow. Lower thermal resistance means better heat dissipation.

*   **Junction-to-Case Thermal Resistance ($R_{th,jc}$):** Resistance from the semiconductor junction to the device case.
*   **Case-to-Heatsink Thermal Resistance ($R_{th,ch}$):** Resistance from the device case to the heatsink. This is influenced by thermal interface materials (TIMs) like grease or pads.
*   **Heatsink-to-Ambient Thermal Resistance ($R_{th,ha}$):** Resistance from the heatsink to the ambient air. This is the primary characteristic of the heatsink.

**Total Thermal Resistance:** $R_{th,ja} = R_{th,jc} + R_{th,ch} + R_{th,ha}$

**Relationship for Temperature Rise:** $\Delta T_j = P_{total} \times R_{th,ja}$

**Example:** A MOSFET dissipates 5W of power. Its $R_{th,jc} = 1.5 \, ^\circ\text{C/W}$, the thermal paste provides $R_{th,ch} = 0.3 \, ^\circ\text{C/W}$, and the heatsink has $R_{th,ha} = 2.0 \, ^\circ\text{C/W}$. If the ambient temperature is $40 \, ^\circ\text{C}$, the junction temperature is:

$R_{th,ja} = 1.5 + 0.3 + 2.0 = 3.8 \, ^\circ\text{C/W}$
$\Delta T_j = 5 \, \text{W} \times 3.8 \, ^\circ\text{C/W} = 19 \, ^\circ\text{C}$
$T_j = T_a + \Delta T_j = 40 \, ^\circ\text{C} + 19 \, ^\circ\text{C} = 59 \, ^\circ\text{C}$

**Textbook Reference:** Hart (2nd Ed.) Chapter 7: Thermal Management. Provides an excellent explanation of thermal concepts and calculations using analogies.

---

### 7. Use of Heat Sinks

A heat sink is a passive heat exchanger that cools a device by increasing the surface area for heat transfer to the surrounding fluid (usually air).

**Purpose:** To reduce the heatsink-to-ambient thermal resistance ($R_{th,ha}$) and thereby lower the junction temperature ($T_j$) of the semiconductor device.

**Types of Heat Sinks:**
*   **Natural Convection:** Rely on the natural circulation of air. Suitable for low-power applications.
*   **Forced Convection:** Use a fan to increase airflow. Suitable for higher power applications.
*   **Liquid Cooling:** Uses a liquid medium for heat transfer, offering very high cooling capacity.

**Selection Criteria for a Heat Sink:**
1.  **Determine the maximum allowable junction temperature ($T_{j,max}$).**
2.  **Calculate the maximum allowable total thermal resistance ($R_{th,ja,max}$).**
    $R_{th,ja,max} = \frac{T_{j,max} - T_a}{P_{total}}$
3.  **Subtract known thermal resistances:**
    $R_{th,ha,max} = R_{th,ja,max} - R_{th,jc} - R_{th,ch}$
4.  **Select a heatsink with an $R_{th,ha}$ less than or equal to $R_{th,ha,max}$.**

**Thermal Interface Materials (TIMs):** Used between the device package and the heatsink to fill microscopic air gaps, significantly reducing $R_{th,ch}$. Examples include thermal grease, thermal pads, and phase change materials.

**Example:** If a device needs to operate at $T_j = 100 \, ^\circ\text{C}$ with $T_a = 40 \, ^\circ\text{C}$ and dissipates $20 \, \text{W}$, and its $R_{th,jc} = 0.5 \, ^\circ\text{C/W}$ and $R_{th,ch} = 0.2 \, ^\circ\text{C/W}$.

$R_{th,ja,max} = \frac{100 - 40}{20} = \frac{60}{20} = 3.0 \, ^\circ\text{C/W}$
$R_{th,ha,max} = 3.0 - 0.5 - 0.2 = 2.3 \, ^\circ\text{C/W}$
A heatsink with $R_{th,ha} \le 2.3 \, ^\circ\text{C/W}$ must be chosen.

**Course Outcome Alignment:** CO1 (Understand the operation of modern power semiconductor devices, its characteristics and select suitable gate driver circuits & heatsinks). This section directly addresses heatsink selection.

---

### 8. Need for High Efficiency, Small Size, High Reliability, and Low Cost

These are the primary driving forces behind the development and application of power electronics.

#### 8.1. High Efficiency

*   **Motivation:**
    *   **Reduced Energy Waste:** Less power is converted into heat, saving energy.
    *   **Lower Operating Costs:** Reduced electricity bills, especially in high-power applications.
    *   **Reduced Cooling Requirements:** Less heat means smaller or no heatsinks are needed, contributing to smaller size and lower cost.
    *   **Environmental Benefits:** Reduced carbon footprint.
*   **How Power Electronics Achieves High Efficiency:** By using switching devices that spend most of their time in the OFF state (low conduction loss) or ON state (low voltage drop), rather than in linear regions where significant power dissipation occurs (like in linear regulators or variable resistors).

#### 8.2. Small Size (Miniaturization)

*   **Motivation:**
    *   **Portability:** Essential for mobile devices and portable electronics.
    *   **Space Constraints:** In automotive, aerospace, and telecommunications equipment, space is at a premium.
    *   **Integration:** Allows power converters to be integrated closer to the load.
*   **How Power Electronics Achieves Small Size:**
    *   **High Switching Frequencies:** Allows the use of smaller passive components (inductors and capacitors).
    *   **Efficient Heat Dissipation:** Effective thermal management (heat sinks, thermal interface materials) allows for smaller overall packages.
    *   **Integrated Circuits (ICs):** Many power control functions can be integrated onto silicon chips.

#### 8.3. High Reliability

*   **Motivation:**
    *   **Reduced Downtime:** Critical for industrial processes, medical equipment, and safety systems.
    *   **Lower Maintenance Costs:** Less frequent replacements or repairs.
    *   **Longer Product Lifespan:** Enhances customer satisfaction and brand reputation.
*   **How Power Electronics Achieves High Reliability:**
    *   **Solid-State Devices:** No moving parts, unlike electromechanical relays or switches, leading to greater durability.
    *   **Overload and Protection Features:** Modern power electronic devices incorporate built-in protection against overcurrent, overvoltage, and overtemperature.
    *   **Component Selection:** Using components rated well above their operating conditions (derating).
    *   **Effective Thermal Management:** Prevents components from overheating, a major cause of failure.

#### 8.4. Low Cost

*   **Motivation:**
    *   **Market Competitiveness:** Essential for mass-market adoption of products.
    *   **Economies of Scale:** Mass production of semiconductor devices and passive components drives down costs.
    *   **System Cost Reduction:** High efficiency and smaller size can reduce overall system costs by requiring less power, smaller cooling systems, and less space.
*   **How Power Electronics Achieves Low Cost:**
    *   **Advancements in Semiconductor Manufacturing:** Leading to higher yields and lower prices for power devices.
    *   **Integration:** Reduces the number of discrete components.
    *   **Standardization:** Commonality of components across different applications.

**Course Outcome Alignment:** CO4 (Understand the need for improved efficiency, improved reliability, improved load & source waveforms and improved utility interface). This section directly addresses efficiency and reliability.

---

### 9. Overview of Applications

Power electronics has revolutionized countless industries by enabling efficient and controllable power conversion.

*   **Consumer Electronics:**
    *   **Power Supplies:** For laptops, TVs, mobile chargers (AC-DC conversion, voltage regulation).
    *   **Lighting:** LED drivers, dimmers.
    *   **Audio Amplifiers:** Class D amplifiers for high efficiency.
*   **Industrial Applications:**
    *   **Motor Drives:** Variable frequency drives (VFDs) for induction motors, DC motor control (AC-DC-AC, DC-DC conversion).
    *   **Industrial Heating:** Induction heating.
    *   **Power Factor Correction (PFC):** Improving the power factor of inductive loads.
    *   **Uninterruptible Power Supplies (UPS):** Providing backup power during outages (AC-DC-AC conversion).
*   **Renewable Energy Systems:**
    *   **Solar Power:** Inverters to convert DC from solar panels to AC for the grid.
    *   **Wind Power:** Converters for controlling wind turbine operation and grid connection.
    *   **Battery Charging:** For electric vehicles and energy storage systems.
*   **Transportation:**
    *   **Electric Vehicles (EVs) and Hybrid Electric Vehicles (HEVs):** Motor controllers, battery chargers, DC-DC converters.
    *   **Aerospace:** Power distribution, power supplies for avionics.
*   **Telecommunications:**
    *   **DC-DC Converters:** For powering electronic equipment within base stations and data centers.
*   **Power Systems:**
    *   **High Voltage DC (HVDC) Transmission:** Efficiently transmitting power over long distances.
    *   **FACTS (Flexible AC Transmission Systems):** Improving power grid stability and capacity.

**Course Outcome Alignment:** This broad overview supports all COs by illustrating the practical relevance and impact of power electronics principles. CO5 is particularly relevant for adjustable speed drives.

---

### 10. Key Points to Remember

*   **Ideal vs. Real Switches:** Ideal switches simplify analysis; real switches have losses (conduction, switching, drive).
*   **Conduction Loss:** $P_{cond} \approx I_{rms}^2 R_{on}$ or $V_{ON} \times I_{avg}$. Depends on ON-state resistance/voltage and current.
*   **Switching Loss:** Occurs during transitions. Depends on voltage, current, switching times, and frequency.
*   **Thermal Management:** Essential to prevent overheating. $T_j = T_a + P_{total} \times R_{th,ja}$.
*   **Thermal Resistance:** Analogous to electrical resistance; lower is better. $R_{th,ja} = R_{th,jc} + R_{th,ch} + R_{th,ha}$.
*   **Heat Sinks:** Reduce $R_{th,ha}$ to lower $T_j$. Selection based on thermal resistance and operating conditions.
*   **TIMs:** Improve heatsink contact by reducing $R_{th,ch}$.
*   **Goals of Power Electronics:** High efficiency, small size, high reliability, low cost. These are often interrelated.
*   **Applications:** Ubiquitous across industries due to their ability to control and convert electrical power efficiently.

---

### 11. Practice Questions and Exercises

**Question 1:**
A power MOSFET has an ON-state resistance ($R_{on}$) of $0.05 \, \Omega$. If it conducts a continuous RMS current of $10 \, \text{A}$, calculate the conduction loss.

**Answer 1:**
$P_{cond} = I_{rms}^2 R_{on} = (10 \, \text{A})^2 \times 0.05 \, \Omega = 100 \times 0.05 = 5 \, \text{W}$.

**Question 2:**
A switching device has a voltage drop of $2 \, \text{V}$ when conducting an average current of $5 \, \text{A}$. Calculate the conduction loss.

**Answer 2:**
$P_{cond} = V_{ON} \times I_{avg} = 2 \, \text{V} \times 5 \, \text{A} = 10 \, \text{W}$.

**Question 3:**
A switching device has turn-ON time ($t_{on}$) and turn-OFF time ($t_{off}$) of $100 \, \text{ns}$ each. It switches at a frequency of $50 \, \text{kHz}$. The maximum voltage across it is $400 \, \text{V}$, and the maximum current through it is $15 \, \text{A}$. Estimate the switching loss per cycle and the total switching power loss per second.
(Assume switching loss per cycle $\approx \frac{1}{2} V_{max} I_{max} (t_{on} + t_{off})$).

**Answer 3:**
Switching loss per cycle ($P_{sw,cycle}$) = $\frac{1}{2} \times 400 \, \text{V} \times 15 \, \text{A} \times (100 \times 10^{-9} \, \text{s} + 100 \times 10^{-9} \, \text{s})$
$P_{sw,cycle} = \frac{1}{2} \times 400 \times 15 \times (200 \times 10^{-9}) = 200 \times 15 \times 200 \times 10^{-9} = 600000 \times 10^{-9} = 0.0006 \, \text{J}$

Total switching power loss per second ($P_{sw,total}$) = $P_{sw,cycle} \times f_{sw}$
$P_{sw,total} = 0.0006 \, \text{J} \times 50 \times 10^3 \, \text{Hz} = 30 \, \text{W}$.

**Question 4:**
A semiconductor device dissipates $20 \, \text{W}$ of power. The junction-to-case thermal resistance is $R_{th,jc} = 1.0 \, ^\circ\text{C/W}$, the case-to-heatsink resistance is $R_{th,ch} = 0.2 \, ^\circ\text{C/W}$, and the heatsink-to-ambient resistance is $R_{th,ha} = 2.5 \, ^\circ\text{C/W}$. If the ambient temperature ($T_a$) is $30 \, ^\circ\text{C}$, calculate the junction temperature ($T_j$).

**Answer 4:**
Total thermal resistance ($R_{th,ja}$) = $R_{th,jc} + R_{th,ch} + R_{th,ha} = 1.0 + 0.2 + 2.5 = 3.7 \, ^\circ\text{C/W}$.
Temperature rise ($\Delta T_j$) = $P_{total} \times R_{th,ja} = 20 \, \text{W} \times 3.7 \, ^\circ\text{C/W} = 74 \, ^\circ\text{C}$.
Junction temperature ($T_j$) = $T_a + \Delta T_j = 30 \, ^\circ\text{C} + 74 \, ^\circ\text{C} = 104 \, ^\circ\text{C}$.

**Question 5:**
What are the primary reasons why a designer would aim for a small physical size in a power converter?

**Answer 5:**
The primary reasons are portability (for mobile devices), space constraints (in automotive, aerospace, etc.), and the ability to integrate power electronics closer to the load, which can also improve performance and reduce wiring losses.

---
This set of notes covers the fundamental aspects of switches in power electronics, their performance metrics, the crucial concept of thermal management, and the overarching goals that drive the field, aligning with the learning outcomes and course outcomes.
