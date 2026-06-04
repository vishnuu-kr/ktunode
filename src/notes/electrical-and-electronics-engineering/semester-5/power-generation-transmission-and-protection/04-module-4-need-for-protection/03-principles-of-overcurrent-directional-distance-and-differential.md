---
title: "Principles of overcurrent, directional, distance and differential"
subject: "POWER GENERATION, TRANSMISSION AND PROTECTION"
module: "Module 4: Need for protection"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36193"
status: "completed"
scrapedAt: "2026-05-23T16:23:35.899Z"
---
# Module 4: Need for Protection - Principles of Overcurrent, Directional, Distance, and Differential Protection

This module delves into the fundamental principles of protective relaying, which are crucial for ensuring the reliability and safety of power systems. We will explore four key types of relays: overcurrent, directional, distance, and differential, understanding how they detect and respond to fault conditions.

## 1. Need for Protection in Power Systems

**Why is protection necessary?**

*   **Prevent Equipment Damage:** Faults (short circuits, open circuits) can lead to dangerously high currents and voltages, causing severe damage to expensive power system equipment like generators, transformers, transmission lines, and busbars.
*   **Maintain System Stability:** Faults disrupt the balance between generation and load, potentially leading to instability, voltage collapse, and cascading outages (blackouts). Protective relays quickly isolate the faulted section, helping to maintain the stability of the remaining healthy parts of the system.
*   **Ensure Personnel Safety:** High fault currents pose a significant risk to human life. Proper protection systems prevent contact with live, damaged parts and reduce the likelihood of electrical hazards.
*   **Minimize Outage Duration:** By rapidly detecting and isolating faults, protective relays minimize the area and duration of power outages, ensuring continuity of supply to as many customers as possible.
*   **Economic Considerations:** Preventing equipment damage and minimizing downtime translates directly into significant economic savings by avoiding repair costs and loss of revenue.

**Key Concepts:**

*   **Fault:** An abnormal condition in a power system that causes current to flow in an unintended path. Common faults include:
    *   **Short Circuits:**
        *   Three-phase fault (LLL)
        *   Line-to-line fault (LL)
        *   Line-to-ground fault (LG)
        *   Double line-to-ground fault (LLG)
    *   **Open Circuits:** (e.g., broken conductors, blown fuses in series)
*   **Protection System:** The coordinated arrangement of protective relays, current transformers (CTs), voltage transformers (VTs or PTs), circuit breakers, and associated wiring designed to detect faults and isolate the faulted equipment.
*   **Protective Relay:** A device that detects a fault and initiates a command to a circuit breaker to interrupt the fault current.
*   **Circuit Breaker:** A switching device that can interrupt large fault currents safely.
*   **Current Transformer (CT):** A transformer used to produce a reduced current proportional to the system current for measurement and relaying purposes.
*   **Voltage Transformer (VT/PT):** A transformer used to produce a reduced voltage proportional to the system voltage for measurement and relaying purposes.

**Reference:**
*   Wadhwa C. L., "Electrical Power Systems," Chapter 14: Protection of Power Systems.
*   Mehta V. K. and Mehta R., "Principles of Power System," Chapter 21: Protection.

**Important Point to Remember:** The primary goal of protection is to isolate the *faulted* portion of the power system as quickly as possible, while leaving the healthy portions in service.

## 2. Principles of Overcurrent Protection

Overcurrent relays are the simplest and most common type of protective relays. They operate when the current in the circuit exceeds a predetermined threshold (pickup value).

**2.1. Working Principle:**

*   **Detection:** The relay continuously monitors the current in the protected circuit. This current is usually derived from a CT.
*   **Comparison:** The monitored current is compared to a set pickup current value.
*   **Operation:** If the monitored current exceeds the pickup value, the relay operates. The time taken to operate can be dependent on the magnitude of the overcurrent (time-current characteristic).

**2.2. Types of Overcurrent Relays:**

*   **Instantaneous Overcurrent Relay:** Operates immediately when the current exceeds the pickup value. It has a very fast operating time.
    *   **Application:** Used for high fault currents where rapid clearing is essential, often for protecting short, heavily loaded lines or transformer feeders where fault levels are high.
    *   **Limitations:** Prone to nuisance tripping due to transient currents during motor starting or load switching. Requires a high pickup setting to avoid false operation.
*   **Definite Time Overcurrent Relay:** Operates after a fixed time delay once the current exceeds the pickup value, regardless of the magnitude of the overcurrent.
    *   **Application:** Useful for providing time selectivity between different zones of protection.
    *   **Limitation:** Does not take advantage of the fact that higher fault currents should be cleared faster.
*   **Inverse Time Overcurrent Relay (IDMT - Inverse Definite Minimum Time):** Operates with a time delay that is inversely proportional to the magnitude of the overcurrent. The higher the fault current, the shorter the operating time. This provides a better combination of sensitivity and selectivity.
    *   **Time-Current Characteristics:**
        *   **Very Inverse:** Operates faster for higher currents than standard inverse.
        *   **Extremely Inverse:** Operates even faster for higher currents.
        *   **Normal Inverse:** Standard inverse time characteristic.

**2.3. Key Concepts and Settings:**

*   **Pickup Current ($I_{pickup}$):** The minimum current at which the relay starts to operate (or the current at which the operating mechanism becomes energized).
*   **Plug Setting Multiplier (PSM) or Current Setting ($I_{setting}$):** A multiplier applied to the current transformer secondary rating or a tap setting on the relay to set the pickup current. $I_{pickup}$ is usually expressed as a multiple of the CT secondary rating (e.g., 1A or 5A).
    *   For example, if a relay has a tap range of 50% to 200% of its rated current (e.g., 5A), a setting of 100% means $I_{pickup}$ is 5A. If the CT ratio is 100/5, this corresponds to 100A primary.
*   **Time Multiplier Setting (TMS) or Time Dial Setting (TDS):** A setting that adjusts the operating time of an inverse time relay. A lower TMS results in a faster operation for a given fault current.
*   **Operating Time:** The actual time from the moment the fault current reaches the relay until the relay contacts close.
*   **Time-Current Curve:** A graph showing the operating time of an inverse time relay as a function of the fault current, usually plotted on a log-log scale.

**2.4. Coordination (Selectivity):**

*   **Purpose:** To ensure that only the relay closest to the fault operates, thereby isolating the minimum amount of the system.
*   **Methods:**
    *   **Time Coordination:** Setting different TMS values for relays in series. The relay closer to the fault is set to operate faster (lower TMS) than relays further upstream.
    *   **Current Coordination:** Setting different pickup values. The relay closer to the fault is set to have a higher pickup setting, but this is less common for overcurrent protection as it reduces sensitivity.

**2.5. Example:**

Consider a radial feeder with three overcurrent relays R1, R2, and R3 in series.
*   R1 is closest to the source, R3 is at the end of the feeder.
*   A fault occurs at location F.
*   For proper coordination, R3 should operate first, then R2, then R1.
*   This is achieved by setting R3 with the lowest TMS, R2 with a higher TMS, and R1 with the highest TMS, ensuring adequate time difference (e.g., 0.3-0.5 seconds) between successive operations to allow the upstream breaker to clear the fault before the downstream breaker trips unnecessarily.

**Reference:**
*   Wadhwa C. L., "Electrical Power Systems," Chapter 14.
*   Mehta V. K. and Mehta R., "Principles of Power System," Chapter 21.
*   Badri Ram and D.N. Viswakarma, "Power System Protection and Switchgear," Chapter 3: Overcurrent Protection.

**Important Points to Remember:**
*   Overcurrent relays are simple and cost-effective.
*   Coordination is crucial to avoid cascading trips.
*   Sensitivity vs. Selectivity trade-off is important. Higher sensitivity means picking up smaller faults, but can lead to nuisance tripping. Better selectivity means isolating fewer healthy parts, but requires careful coordination.

## 3. Principles of Directional Protection

Directional relays are used to ensure that protection operates only for faults in a specific direction. They are essential in meshed networks or systems with multiple sources where fault current can flow in either direction.

**3.1. Working Principle:**

*   **Directional Element:** A directional relay has a directional element that compares the phase angle between the voltage and current.
*   **Operation:** The relay operates only when the fault current flows in a pre-defined "forward" direction. If the current flows in the "reverse" direction, the relay does not operate (or is "blocked").
*   **Voltage and Current Inputs:** Directional relays require both voltage and current inputs from the protected circuit (usually derived from VTs and CTs). The phase relationship between voltage and current determines the direction of power flow and fault current.
*   **Characteristic Angle ($\phi$):** This is the angle between the voltage and current at which the relay has maximum torque (maximum sensitivity). For a resistive fault, this is typically 0° or 180°. For inductive circuits, the characteristic angle is often set at or near the phase angle of the line impedance to ensure maximum sensitivity at the desired fault condition.

**3.2. Types of Directional Relays:**

*   **Directional Overcurrent Relay:** Combines overcurrent detection with directional control. It operates only if the current exceeds the pickup value AND the fault current is in the forward direction. This is a very common and effective protection scheme.
*   **Directional Power Relay:** Operates when power flow exceeds a certain threshold and is in a specified direction.

**3.3. Key Concepts and Settings:**

*   **Pickup Current:** The minimum current for the overcurrent element to operate.
*   **Voltage Pickup:** The minimum voltage below which the directional element will operate (to ensure it operates during low-voltage fault conditions).
*   **Characteristic Angle ($\phi$):** The angle of maximum torque.
*   **Torque Equation (Conceptual):** The operating torque of a directional relay is typically proportional to $V \cdot I \cdot \cos(\theta - \phi)$, where:
    *   $V$ is the voltage magnitude.
    *   $I$ is the current magnitude.
    *   $\theta$ is the phase angle between voltage and current.
    *   $\phi$ is the characteristic angle.
    *   The relay operates when this torque is positive and exceeds a threshold.

**3.4. Application Examples:**

*   **Ring Mains:** In a ring main, fault current can flow in two directions. Directional relays are used at each busbar to ensure that only the section containing the fault is isolated.
*   **Parallel Feeders:** In systems with parallel feeders, directional relays prevent tripping of the healthy feeder when a fault occurs on the other feeder if the fault current flows in the reverse direction for the healthy feeder.
*   **Generator and Transformer Protection:** To prevent operation due to reverse power flow or to ensure correct fault clearing in systems with multiple sources.

**Reference:**
*   Wadhwa C. L., "Electrical Power Systems," Chapter 14.
*   Mehta V. K. and Mehta R., "Principles of Power System," Chapter 21.
*   Badri Ram and D.N. Viswakarma, "Power System Protection and Switchgear," Chapter 4: Directional Relays.

**Important Points to Remember:**
*   Directional relays are crucial for selectivity in networks with multiple sources.
*   They utilize the phase relationship between voltage and current to determine the direction of fault current.
*   Proper setting of the characteristic angle is vital for effective operation.

## 4. Principles of Distance Protection

Distance relays are highly efficient and widely used for the protection of transmission lines. They operate based on the impedance of the line, which is directly related to the distance to the fault.

**4.1. Working Principle:**

*   **Impedance Measurement:** Distance relays measure the impedance ($Z = V/I$) of the line segment between the relay location and the fault.
*   **Fault Location Estimation:** For a uniform transmission line, the impedance is proportional to its length. Therefore, by measuring the impedance, the relay can estimate the distance to the fault.
*   **Operating Zones:** Distance relays are typically set to provide multiple zones of protection. Each zone has a specific time delay associated with it.

**4.2. Zones of Protection:**

*   **Zone 1 (Primary Protection):**
    *   **Coverage:** Typically set to cover 80-90% of the line length.
    *   **Operation:** Instantaneous operation (zero time delay).
    *   **Purpose:** To provide the fastest possible fault clearing for the majority of the line.
    *   **Coordination:** Overreaching slightly is acceptable because the Zone 1 relay of the adjacent line will provide backup protection for the remaining portion.
*   **Zone 2 (Secondary Protection/Backup):**
    *   **Coverage:** Covers the remaining 10-20% of the line plus a portion of the adjacent line.
    *   **Operation:** Operates with a short time delay (e.g., 0.3-0.5 seconds).
    *   **Purpose:** To provide backup protection for the end of the line that is not covered by Zone 1, and to cover any faults on the busbar at the remote end. Also, to coordinate with the Zone 1 of the adjacent line.
*   **Zone 3 (Tertiary Protection/Long-term Backup):**
    *   **Coverage:** Covers the entire line and often extends significantly into the next section of the system.
    *   **Operation:** Operates with a longer time delay (e.g., 1-1.5 seconds or more).
    *   **Purpose:** To provide backup protection for the entire line and for faults further out in the system if the primary and secondary zones fail to operate. This provides general backup for the entire protected area.

**4.3. Types of Distance Relays (Based on Impedance Characteristics):**

*   **Impedance Relay:** Operates when the measured impedance is below a set value. This provides a circular characteristic in the R-X plane.
*   **Mho Relay:** Operates when the impedance falls within a circular characteristic in the R-X plane, centered on the impedance of the protected line. This provides a directional characteristic and better sensitivity for faults at the end of the line.
*   **Quadrilateral Relay:** Provides a more flexible quadrilateral characteristic, allowing independent setting of resistance and reactance reach. This offers better coverage for different fault resistances and line angles.

**4.4. Key Concepts and Settings:**

*   **Impedance Setting (Reach):** The impedance value (magnitude and/or phase angle) that the relay considers as the boundary for its operating zone. This is usually set in ohms, and then converted to primary current or voltage settings based on CT/VT ratios.
*   **Time Setting:** The time delay for Zone 2 and Zone 3 operation.
*   **Characteristic Angle ($\phi$):** Similar to directional relays, this angle is set to match the impedance angle of the line for maximum sensitivity.
*   **Off-set Mho Relay:** A variation of the Mho relay that shifts the circle to improve coverage for faults with high resistance.
*   **Load Encroachment:** A phenomenon where heavy load current flowing through the line can cause the measured impedance to fall within the operating zone of the distance relay, leading to nuisance tripping. This is mitigated by using appropriate Zone 1 reach (not covering 100% of the line) and sometimes by using directional blocking for Zone 2 or Zone 3.

**4.5. Application Examples:**

*   **Transmission Line Protection:** The primary application, providing fast and selective protection.
*   **Busbar Protection (Indirectly):** Can provide backup for busbar faults by tripping for faults on connected lines.
*   **Transformer Protection (Indirectly):** Can provide backup for transformer faults.

**Reference:**
*   Wadhwa C. L., "Electrical Power Systems," Chapter 14.
*   Mehta V. K. and Mehta R., "Principles of Power System," Chapter 21.
*   Badri Ram and D.N. Viswakarma, "Power System Protection and Switchgear," Chapter 5: Distance Protection.

**Important Points to Remember:**
*   Distance relays provide fast and selective protection for transmission lines.
*   They operate based on the measured impedance, which is proportional to the distance to the fault.
*   The multi-zone approach allows for different levels of selectivity and backup.
*   Load encroachment is a critical consideration during setting.

## 5. Principles of Differential Protection

Differential protection is a highly sensitive and selective form of protection that operates based on the difference between currents entering and leaving a protected zone. It is used for static or lumped equipment like transformers, generators, and busbars.

**5.1. Working Principle:**

*   **Princ of Kirchhoff's Current Law:** In a healthy circuit, the sum of currents entering a zone must equal the sum of currents leaving the zone.
*   **Detection:** CTs are connected at all terminals of the protected equipment (e.g., primary and secondary of a transformer). The secondary currents from these CTs are connected in a way that they oppose each other.
*   **Operation:**
    *   **Healthy Condition:** In normal operation, the secondary currents from the CTs connected to all terminals are equal and opposing, resulting in zero net current circulating in the relay.
    *   **Fault Condition (within the zone):** If a fault occurs within the protected zone, the current entering the zone will not equal the current leaving it. This creates a difference in the secondary currents, causing a net current to flow through the differential relay. When this difference current exceeds a set pickup value, the relay operates to trip the associated circuit breakers.
    *   **Fault Condition (outside the zone):** If a fault occurs outside the protected zone, the currents entering and leaving the zone are generally equal (or nearly equal, considering minor differences). The circulating current in the relay remains zero or very small, and the relay does not operate.

**5.2. Application Examples:**

*   **Transformer Protection:**
    *   CTs are placed on both the high-voltage and low-voltage sides.
    *   Due to the different current magnitudes and turns ratios, the CTs need to be "matched" or "corrected" to ensure equal secondary currents for through-faults. This is achieved through:
        *   **Tap changing transformers:** Adjusting the CT ratio on one side.
        *   **Percentage bias (or Restraint):** The operating current required for tripping is made proportional to the through-current (sum of currents from both sides). This also provides additional security against nuisance tripping during external faults and overexcitation.
*   **Generator Protection:** Similar principle, with CTs on all generator terminals.
*   **Busbar Protection:** CTs are placed on all incoming and outgoing feeders connected to the busbar. This provides excellent busbar protection.

**5.3. Key Concepts and Settings:**

*   **Differential Current ($I_{diff}$):** The difference between the currents entering and leaving the protected zone ($I_{diff} = \sum I_{in} - \sum I_{out}$). In the secondary circuit of the relay, it's the sum of currents from the CTs.
*   **Circulating Current:** The current flowing in the secondary circuit of the differential relay circuit.
*   **Pickup Current:** The minimum differential current required to initiate relay operation.
*   **Slope or Bias Characteristic:** This setting ensures that the relay operates only when the differential current is significantly larger than the through-current. The characteristic is usually a plot of differential current vs. average current (or maximum current). It has multiple "slopes" (e.g., 10%, 20%, 50% bias).
    *   **Restraining Current ($I_{rest}$):** A measure of the through-current (e.g., average or maximum of the currents entering/leaving the zone).
    *   **Operating Current ($I_{op}$):** The differential current.
    *   **Bias Characteristic:** $I_{op} = m \cdot I_{rest} + I_{pickup}$, where 'm' is the slope.
*   **Harmonic Restraint:** Used for transformer differential relays to prevent maloperation during inrush current (which is rich in second harmonic) or during overexcitation (which is rich in fifth harmonic). The relay is designed to be less sensitive to these harmonics, allowing the differential current from internal faults to operate the relay.

**5.4. Challenges and Considerations:**

*   **CT Mismatch:** Differences in CT performance (saturation, ratio errors) can lead to false differential current during external faults.
*   **Transformer Tap Changers:** The changing turns ratio of a transformer with tap changers requires appropriate CT settings or compensation.
*   **Transformer Inrush Current:** During energization, a transformer experiences a high transient current called inrush current, which can be several times the rated current. This current is primarily drawn from one side and does not flow through the other side, leading to a large differential current. Harmonic restraint is essential to prevent false tripping.

**Reference:**
*   Wadhwa C. L., "Electrical Power Systems," Chapter 14.
*   Mehta V. K. and Mehta R., "Principles of Power System," Chapter 21.
*   Badri Ram and D.N. Viswakarma, "Power System Protection and Switchgear," Chapter 6: Differential Protection.

**Important Points to Remember:**
*   Differential protection offers very fast and selective protection for static equipment.
*   It relies on the principle of current balance.
*   Proper CT selection, matching, and biasing are crucial for effective operation and security.
*   Harmonic restraint is vital for transformer differential protection.

## Practice Questions and Exercises

**Instructions:** Attempt the following questions to test your understanding of the principles covered in this module.

---

**Question 1 (Overcurrent Protection):**

A radial feeder is protected by two overcurrent relays, R1 and R2, in series. R1 is closer to the source. A fault occurs near R2.

*   R1 has a pickup setting of 100A and a TMS of 0.4s.
*   R2 has a pickup setting of 80A and a TMS of 0.2s.
*   The fault current measured at R1 is 500A, and at R2 is 400A.
*   Both relays have a standard inverse time characteristic where the operating time $t = \frac{k}{I^2}$, with $k = 1$ for these relays.

a) Calculate the operating time for R1 and R2 for the given fault.
b) Assuming a coordination requirement of 0.3s between R1 and R2, comment on whether the settings provide adequate coordination.

**Answer:**

a) **For R1:**
   Pickup current ($I_{pickup1}$) = 100A
   Fault current ($I_{fault1}$) = 500A
   PSM = $I_{fault1} / I_{pickup1} = 500A / 100A = 5$
   Operating time $t_1 = TMS_1 \times (\frac{k}{PSM^2}) = 0.4 \times (\frac{1}{5^2}) = 0.4 \times \frac{1}{25} = 0.016$ seconds.

   **For R2:**
   Pickup current ($I_{pickup2}$) = 80A
   Fault current ($I_{fault2}$) = 400A
   PSM = $I_{fault2} / I_{pickup2} = 400A / 80A = 5$
   Operating time $t_2 = TMS_2 \times (\frac{k}{PSM^2}) = 0.2 \times (\frac{1}{5^2}) = 0.2 \times \frac{1}{25} = 0.008$ seconds.

b) **Coordination Analysis:**
   R2 is closer to the fault and should operate first. Its operating time is 0.008s.
   R1 is further from the fault and should operate after R2. Its operating time is 0.016s.
   The time difference between their operations is $0.016s - 0.008s = 0.008s$.
   This is much less than the required coordination time of 0.3s. The settings are inadequate for proper coordination. To improve coordination, R1's TMS would need to be significantly increased, or R2's TMS decreased.

---

**Question 2 (Directional Protection):**

A simple radial feeder fed from Substation A has a directional overcurrent relay at Substation B. The line impedance is $Z = (5 + j20) \Omega$. The relay is set with a pickup current of 100A (primary) and its characteristic angle is set to match the line impedance angle.

*   **Scenario 1:** A fault occurs on the line, 70% of the way from Substation A to B. The fault current flowing from A to B is 800A.
*   **Scenario 2:** Due to a fault on an adjacent network, a reverse power flow occurs, and the current flowing from B to A is 200A.

Assuming the voltage at Substation B is $V_B = 132 \angle 0^\circ$ kV and the line impedance angle is $\tan^{-1}(20/5) = 76^\circ$.

a) Determine the operating condition of the directional relay in Scenario 1.
b) Determine the operating condition of the directional relay in Scenario 2.
c) What would happen if the characteristic angle of the relay was set to $0^\circ$ in Scenario 1?

**Answer:**

a) **Scenario 1 (Forward Fault):**
   The fault current is 800A flowing from A to B (forward direction).
   The relay pickup is 100A. Since 800A > 100A, the overcurrent condition is met.
   The voltage and current will have a phase relationship corresponding to power flow from A to B. The angle between $V_B$ and $I_{fault}$ will be approximately $180^\circ$ minus the line impedance angle (for a fault at 70% distance).
   With the characteristic angle set to the line impedance angle ($76^\circ$), the relay will correctly detect the forward direction of fault current.
   **Conclusion:** The relay will operate.

b) **Scenario 2 (Reverse Fault):**
   The fault current is 200A flowing from B to A (reverse direction).
   The overcurrent condition (200A > 100A) is met.
   However, the directional element will detect that the current is flowing in the reverse direction relative to the set characteristic angle.
   **Conclusion:** The relay will not operate (it will be blocked).

c) **Characteristic Angle at $0^\circ$:**
   If the characteristic angle was set to $0^\circ$, the relay would expect the current to lead the voltage by close to $0^\circ$ for forward operation (in an inductive circuit, it would be closer to the angle of the impedance). In Scenario 1, the fault current at B would likely lag the voltage $V_B$ by an angle close to $90^\circ$ plus the line impedance angle. The angle difference between the current and the characteristic angle ($0^\circ$) would be large, and the $\cos(\theta - \phi)$ term in the torque equation would be small or negative.
   **Conclusion:** The directional relay might not operate correctly or might be less sensitive to the forward fault if the characteristic angle is not set appropriately.

---

**Question 3 (Distance Protection):**

A $132$ kV transmission line has an impedance of $Z_{line} = (0.5 + j2.0) \Omega$ per phase per km. The relay is located at Substation A.

a) If the relay is set to provide Zone 1 protection covering 85% of the line length, what is the impedance reach of Zone 1 in ohms?
b) A fault occurs at a distance of 40 km from Substation A. Calculate the impedance seen by the relay at Substation A.
c) If the relay has a time delay of 0.4s for Zone 2 and a pickup current of 50A for Zone 1, and the fault current measured at Substation A for the 40km fault is 1000A, would Zone 1 or Zone 2 operate for this fault?

**Answer:**

a) **Zone 1 Impedance Reach:**
   Total line impedance = $0.5 + j2.0 \Omega$/km * Length (assume 100km for simplicity of calculation). Let's consider the reach directly as a percentage.
   If the line length is L, Zone 1 reach = $0.85 \times Z_{line}$.
   If we assume a line length of 100 km for illustration:
   Total impedance = $0.5 \Omega/km \times 100 km + j2.0 \Omega/km \times 100 km = 50 + j200 \Omega$.
   Zone 1 reach = $0.85 \times (50 + j200) \Omega = 42.5 + j170 \Omega$.
   **Impedance reach of Zone 1 = 42.5 + j170 $\Omega$** (per phase).

b) **Impedance Seen by Relay:**
   Fault distance = 40 km.
   Impedance to fault = $40 \text{ km} \times (0.5 + j2.0) \Omega/\text{km} = 20 + j80 \Omega$.
   **Impedance seen by relay = $20 + j80 \Omega$** (per phase).

c) **Zone Operation:**
   Zone 1 reach = $42.5 + j170 \Omega$.
   Impedance seen by relay = $20 + j80 \Omega$.
   Since the impedance seen by the relay ($20 + j80 \Omega$) is less than the Zone 1 reach ($42.5 + j170 \Omega$) in both magnitude and phase angle (assuming the characteristic is set correctly), Zone 1 will operate.
   Pickup current for Zone 1 is 50A. Fault current is 1000A, which is much higher than 50A.
   **Conclusion:** Zone 1 will operate instantaneously. Zone 2 will not operate because Zone 1 operates first.

---

**Question 4 (Differential Protection):**

A transformer with a rating of $100$ MVA, $132/33$ kV is protected by a differential relay. The CTs on the HV side have a ratio of $100/1$. The CTs on the LV side have a ratio of $2000/1$.

a) Calculate the required CT ratio on the LV side if the HV CT ratio is $100/1$ and the transformer is delta-star connected (HV delta, LV star). Assume no tap changing.
b) What is the primary purpose of using bias/slope in transformer differential relays?

**Answer:**

a) **CT Ratio Calculation for Delta-Star Transformer:**
   Transformer ratio = $132 \text{ kV} / 33 \text{ kV} = 4:1$.
   Nominal Current on HV side (3-phase) $I_{HV} = \frac{100 \times 10^6}{\sqrt{3} \times 132 \times 10^3} \approx 437.4$ A.
   Nominal Current on LV side (3-phase) $I_{LV} = \frac{100 \times 10^6}{\sqrt{3} \times 33 \times 10^3} \approx 1749.6$ A.

   The current ratio on the LV side is $1749.6 / 437.4 \approx 4:1$.

   HV CT ratio is $100/1$. This means for 100A primary current, the secondary is 1A.
   To balance the currents in the differential relay for normal through-load conditions, the secondary currents from both sides should be equal.
   So, if 1A is produced by 437.4A on the HV side, we need 1A to be produced by 1749.6A on the LV side.

   Let the LV CT ratio be $X/1$. Then, $1749.6 / X = 1$.
   Therefore, $X = 1749.6$ A.
   The required CT ratio on the LV side should be approximately $1750/1$ or a standard ratio close to it. The given LV CT ratio of $2000/1$ is close and would be adjusted with transformer taps or CT tap settings.

   **More precisely:**
   HV CT secondary current for 437.4A primary is $437.4A / 100 = 4.374A$.
   We need LV CT secondary current to be also $4.374A$ for 1749.6A primary.
   LV CT ratio = $1749.6 / 4.374 \approx 400/1$.
   *(Correction: The standard way is to match the secondary currents. If HV CT is 100/1, then for a primary current of 437.4A, the secondary current is 4.374A. For balancing, the LV CT secondary must also be 4.374A for a primary current of 1749.6A. So, the LV CT ratio should be $1749.6 / 4.374 \approx 400/1$. The given LV CT of $2000/1$ is likely for a different CT standard or requires significant tap adjustments.)*

   **Assuming the question implies matching the currents based on the provided CTs:**
   HV side: CT ratio is $100/1$. Current in protected zone is 437.4A. Secondary current from HV CT = $437.4A / 100 = 4.374A$.
   LV side: CT ratio is $2000/1$. Current in protected zone is 1749.6A. Secondary current from LV CT = $1749.6A / 2000 = 0.8748A$.
   These secondary currents (4.374A and 0.8748A) are not equal. For differential protection to work correctly for through-faults, these secondary currents must be balanced. This requires either adjusting the transformer taps or using CT taps on the LV side to achieve balance. The required LV CT ratio should be $1749.6 / 4.374 \approx 400/1$.

b) **Purpose of Bias/Slope:**
   The primary purpose of using bias or slope in transformer differential relays is to **improve security against false tripping during external faults and transformer inrush current**.
   *   **External Faults:** During faults outside the protected zone, the CTs on both sides may not perfectly match due to saturation or manufacturing tolerances. This can lead to a small circulating current in the relay, even when the system is healthy. The bias characteristic ensures that the relay requires a significant differential current (relative to the through-current) before it operates, thus preventing nuisance tripping.
   *   **Transformer Inrush Current:** When a transformer is energized, it experiences a high inrush current, which is rich in harmonics (primarily second harmonic). This inrush current flows only into the transformer and not out, creating a large differential current. Harmonic restraint features (often built into modern relays that use bias) prevent the relay from tripping during inrush. The bias characteristic also helps by requiring a higher differential current relative to the large through-current.

---

## Key Takeaways and Important Points to Remember

*   **Protection is paramount** for power system reliability, safety, and equipment longevity.
*   **Overcurrent relays** are simple, cost-effective, and widely used. **Coordination** is their main challenge.
*   **Directional relays** are essential for selectivity in meshed systems and utilize the phase angle between voltage and current.
*   **Distance relays** provide fast and selective protection for transmission lines by measuring impedance, effectively estimating distance to the fault. They operate in multiple zones.
*   **Differential protection** offers high sensitivity and selectivity for static equipment (transformers, generators, busbars) by comparing currents entering and leaving a zone.
*   **CT and VT selection, ratio matching, and proper settings** (pickup, TMS, characteristic angle, bias) are critical for the effective and secure operation of all protective relays.
*   **Harmonic restraint** is a vital feature for transformer differential protection to prevent maloperation due to inrush current.

This module has laid the groundwork for understanding the fundamental principles of power system protection. Subsequent modules will build upon these principles to explore more advanced protection schemes and their practical implementation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
