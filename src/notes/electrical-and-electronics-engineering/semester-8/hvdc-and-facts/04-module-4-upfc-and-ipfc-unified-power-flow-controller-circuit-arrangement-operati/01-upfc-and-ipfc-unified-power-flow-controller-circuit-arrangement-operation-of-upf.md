---
title: "UPFC AND IPFC: Unified Power Flow Controller: Circuit Arrangement, Operation of UPFC- Basic principle of P and Q control- independent real and reactive power flow control- Applications"
subject: "HVDC AND FACTS"
module: "Module 4: UPFC AND IPFC: Unified Power Flow Controller: Circuit Arrangement, Operation of UPFC"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b7b"
status: "completed"
scrapedAt: "2026-05-23T16:41:07.824Z"
---
# HVDC AND FACTS: Module 4 - UPFC and IPFC

## Topic: Unified Power Flow Controller (UPFC)

This module delves into the Unified Power Flow Controller (UPFC), a sophisticated FACTS device capable of independently controlling real and reactive power flow in a transmission line.

---

### 1. Introduction to UPFC

*   **Definition:** The UPFC is the most versatile FACTS controller, capable of simultaneously controlling three essential parameters of a power system:
    *   Series voltage magnitude
    *   Series voltage phase angle
    *   Shunt voltage magnitude

*   **Purpose:** To provide flexible and independent control over real and reactive power flow on a transmission line, thereby enhancing power system stability, controllability, and power transfer capability.

*   **Key Feature:** It is a **unified** controller because it utilizes a single voltage source converter (VSC) system to inject a series voltage with controllable magnitude and phase angle, and a separate shunt converter to draw or inject reactive power.

*   **References:**
    *   Hingorani & Gyugyi, "Understanding FACTS," Chapter 6.
    *   Song & Jones, "Flexible AC Transmission systems (FACTS)," Chapter 4.
    *   Sood, "HVDC and FACTS Controllers," Chapter 8.

---

### 2. Circuit Arrangement of UPFC

The UPFC consists of two voltage source converters (VSCs) sharing a common DC link.

#### 2.1 Components:

*   **Shunt Converter (Shunt Subsystem):**
    *   **Function:** To inject or absorb reactive power from the AC bus to which it is connected. It also acts as a converter to establish and maintain the DC link voltage.
    *   **Configuration:** Typically a two-level or multi-level VSC.
    *   **Connection:** Connected in shunt to the transmission line through a coupling transformer.

*   **Series Converter (Series Subsystem):**
    *   **Function:** To inject a series voltage (of controllable magnitude and phase angle) into the transmission line. This injected voltage directly influences the real and reactive power flow through the line.
    *   **Configuration:** Typically a two-level or multi-level VSC.
    *   **Connection:** Connected in series with the transmission line through series coupling transformers.

*   **DC Link:**
    *   **Function:** Provides a common DC voltage link for both converters. Energy can be transferred between the two converters through this link.
    *   **Capacitor:** Usually a large capacitor is used to maintain a stable DC voltage.

*   **Coupling Transformers:**
    *   **Shunt Transformer:** Connects the shunt converter to the AC bus. It also isolates the converter from harmonics.
    *   **Series Transformer(s):** Connect the series converter to the transmission line. These transformers are essential for injecting the series voltage into the line. They are typically designed to handle the full line current.

#### 2.2 Block Diagram:

```
                   AC Bus
                    |
                    --- (Shunt Coupling Transformer)
                   /   \
       (Shunt Converter) ---- DC Link ---- (Series Converter)
                   \   /                   /   \
                    --- (Shunt Converter)     --- (Series Coupling Transformer)
                                                |
                                            Transmission Line
```

#### 2.3 Operating Principle (Simplified):

1.  **Shunt Converter:** Operates as a STATCOM (Static Synchronous Compensator) to control the voltage at the connection bus and/or inject/absorb reactive power. It also regulates the DC link voltage.
2.  **Series Converter:** Operates to inject a voltage vector ($V_{se}$) into the transmission line. This voltage vector is synthesized by the series converter and is perpendicular to the line current ($I_{ac}$).
    *   The magnitude of $V_{se}$ is controlled by the voltage across the DC link capacitor.
    *   The phase angle of $V_{se}$ is controlled by the switching sequence of the series converter.

*   **Important Point:** The DC link is crucial as it enables the exchange of energy between the shunt and series converters, allowing for independent control of real and reactive power.

*   **References:**
    *   Sood, "HVDC and FACTS Controllers," Section 8.2.
    *   Hingorani & Gyugyi, "Understanding FACTS," Section 6.2.

---

### 3. Operation of UPFC

The UPFC offers simultaneous control of:
1.  **Shunt Reactive Power (Q_shunt):** Controlled by the shunt converter.
2.  **Series Voltage Magnitude ($\|V_{se}\|$):** Controlled by the voltage across the DC link capacitor, which is regulated by the shunt converter.
3.  **Series Voltage Phase Angle ($\angle V_{se}$):** Controlled by the series converter's switching strategy.

#### 3.1 Basic Principle of Real and Reactive Power Control:

The power flow in a transmission line can be represented by:

$P = \frac{\|V_s\| \|V_r\|}{X} \sin(\delta)$
$Q = \frac{\|V_s\| \|V_r\|}{X} \cos(\delta) - \frac{\|V_s\|^2}{X}$

where:
*   $V_s$: Sending end voltage
*   $V_r$: Receiving end voltage
*   $X$: Line reactance
*   $\delta$: Voltage angle difference between sending and receiving ends

The UPFC injects a series voltage $V_{se}$ in series with the line. The equivalent circuit becomes:

$V_s' = V_s + V_{se}$

The power flow through the line is then influenced by $V_s'$:

$P = \frac{\|V_s'\| \|V_r\|}{X} \sin(\delta')$
$Q = \frac{\|V_s'\| \|V_r\|}{X} \cos(\delta') - \frac{\|V_s'\|^2}{X}$

By controlling the magnitude and phase angle of $V_{se}$, the UPFC can effectively control $P$ and $Q$.

#### 3.2 Independent Real and Reactive Power Flow Control:

The UPFC's unique capability lies in its ability to achieve independent control of real and reactive power flow through the line. This is accomplished by appropriately controlling the injected series voltage $V_{se}$ and the shunt injected/absorbed reactive power.

**Control Strategy:**

The series converter injects a voltage $V_{se}$ with magnitude $|V_{se}|$ and phase angle $\phi_{se}$. The total voltage at the sending end can be viewed as $V_s' = V_s + V_{se}$.

*   **Real Power Control (P):**
    *   Real power flow is primarily controlled by the **phase angle** ($\phi_{se}$) of the injected series voltage $V_{se}$.
    *   By adjusting $\phi_{se}$, the UPFC can accelerate or decelerate the sending end voltage vector relative to the receiving end voltage, thus controlling the real power flow.
    *   For instance, injecting a voltage component in phase with the line current increases real power flow, while injecting an out-of-phase component decreases it.
    *   **Example:** To increase real power flow ($P$) on a line, the series converter injects a voltage $V_{se}$ with a phase angle that leads the line current.

*   **Reactive Power Control (Q):**
    *   Reactive power flow through the line can be controlled by the **magnitude** ($|V_{se}|$) of the injected series voltage $V_{se}$ and the **reactive power injected by the shunt converter** ($Q_{shunt}$).
    *   **Series Voltage Magnitude Control:** Increasing $|V_{se}|$ can increase or decrease the reactive power flow depending on the phase angle. When $V_{se}$ is in phase with $V_s$, it effectively increases $|V_s|$, which impacts $Q$.
    *   **Shunt Reactive Power Control:** The shunt converter acts like a STATCOM, independently controlling the reactive power supplied to the bus. This directly affects the bus voltage and indirectly influences the reactive power flow through the line.
    *   **Independent Control:** The UPFC can achieve independent control by coordinating the actions of both converters.
        *   **To control P:** Adjust the phase of $V_{se}$. This might slightly affect Q.
        *   **To control Q:** Adjust the magnitude of $V_{se}$ and/or the reactive power output of the shunt converter to compensate for any changes in Q caused by P control, thereby maintaining the desired Q.
        *   The shunt converter also plays a crucial role in regulating the DC link voltage, which is essential for controlling the magnitude of $V_{se}$.

*   **Important Distinction:**
    *   **FACTS devices like SSSC (Series Synchronous Static Compensator) can only control real power by injecting series voltage.** They cannot independently control reactive power flow without affecting real power flow.
    *   **STATCOMs and SVCs (Static Var Compensators) can only control reactive power.** They cannot directly control real power flow on a line.
    *   **UPFC combines the capabilities of both SSSC and STATCOM**, allowing for independent control of both real and reactive power.

#### 3.3 Example of UPFC Operation:

Consider a transmission line with sending voltage $V_s$ and receiving voltage $V_r$, connected by a line reactance $X$. The UPFC is connected to the sending end bus.

*   **Scenario 1: Increase Real Power Flow:**
    *   The UPFC needs to inject a voltage $V_{se}$ with a phase angle that leads the line current $I_{ac}$.
    *   The shunt converter maintains the DC link voltage and may inject reactive power to support the bus voltage.

*   **Scenario 2: Increase Reactive Power Absorption by the Line:**
    *   The shunt converter injects reactive power ($Q_{shunt} > 0$) into the bus, increasing the bus voltage.
    *   Alternatively, the series converter can inject a voltage $V_{se}$ with a specific magnitude and phase to achieve the desired reactive power flow. For instance, injecting a voltage $V_{se}$ that is in quadrature with the line current ($I_{ac}$) can control the reactive power flow.

*   **Scenario 3: Decoupled Control:**
    *   **Objective:** Increase real power flow ($P$) by 10% without changing the reactive power flow ($Q$).
    *   **Action:**
        1.  **Phase Adjustment:** The series converter adjusts the phase of $V_{se}$ to increase $P$. This might cause a small change in $Q$.
        2.  **Reactive Power Compensation:** The shunt converter injects or absorbs reactive power, or the series converter adjusts its voltage magnitude ($|V_{se}|$), to counteract the change in $Q$ caused by the phase adjustment, bringing $Q$ back to its desired value.

*   **References:**
    *   Padiyar, "FACTS Controllers in Power Transmission and distribution," Chapter 5.
    *   Miller, "Reactive Power control in Power systems," Chapter 6.
    *   Hingorani & Gyugyi, "Understanding FACTS," Section 6.3.

---

### 4. Basic Principle of P and Q Control (Revisited with Phasor Diagrams)

The UPFC's ability to control $P$ and $Q$ independently stems from the vector relationship between the voltages and currents involved.

Let:
*   $V_s$: Sending end voltage
*   $V_r$: Receiving end voltage
*   $I_{ac}$: Line current
*   $V_{se}$: Series injected voltage
*   $V_{shunt}$: Shunt converter voltage (typically injecting reactive power or regulating DC link)

The fundamental equation for the line current is:
$I_{ac} = \frac{V_s - V_r}{jX}$ (assuming no resistance for simplicity)

With UPFC, the sending end voltage seen by the line is effectively $V_s' = V_s + V_{se}$.
So, $I_{ac} = \frac{(V_s + V_{se}) - V_r}{jX}$

Let $V_s$ be at angle 0, $V_r$ at angle $-\delta$.
$V_s = \|V_s\| \angle 0$
$V_r = \|V_r\| \angle -\delta$
$V_{se} = \|V_{se}\| \angle \phi_{se}$

Then, $I_{ac} = \frac{\|V_s\| \angle 0 + \|V_{se}\| \angle \phi_{se} - \|V_r\| \angle -\delta}{jX}$

The real and reactive power injected into the line are:
$P = \text{Re}(V_s' \cdot I_{ac}^*)$
$Q = \text{Im}(V_s' \cdot I_{ac}^*)$

**Control of Real Power (P):**

The real power flow is primarily determined by the component of $V_{se}$ that is in phase with $I_{ac}$. To control $P$, the phase angle $\phi_{se}$ of $V_{se}$ is adjusted.

*   If $\phi_{se}$ is such that $V_{se}$ has a component in phase with $I_{ac}$, then real power is transferred from the series converter.
*   To increase $P$, $\phi_{se}$ is set to a value that aligns $V_{se}$ with $I_{ac}$.
*   To decrease $P$, $\phi_{se}$ is set to a value that opposes $I_{ac}$.

**Control of Reactive Power (Q):**

The reactive power flow is influenced by the magnitude of the voltages and the phase angle difference between them.

*   **Series Voltage Magnitude ($|V_{se}|$):** By varying $|V_{se}|$, the overall voltage magnitude $V_s'$ changes, affecting $Q$. If $V_{se}$ is injected in phase with $V_s$, it increases $|V_s'|$ and tends to increase $Q$.
*   **Series Voltage Phase ($\phi_{se}$):** While primarily controlling $P$, the phase angle control of $V_{se}$ also has a secondary effect on $Q$.
*   **Shunt Converter ($Q_{shunt}$):** The shunt converter can independently inject or absorb reactive power into the bus. This directly controls the reactive power at the bus and influences the line's reactive power flow. This is the primary mechanism for independent Q control.

**Decoupling:**

The UPFC uses the shunt converter to maintain the DC link voltage and to provide reactive power support at the bus. This allows the series converter to focus on injecting a voltage $V_{se}$ with a specific magnitude and phase angle to control the real power flow. Any reactive power fluctuations caused by the series converter's real power control are compensated for by the shunt converter or by adjusting $|V_{se}|$.

**Phasor Diagram Example (Simplified):**

Assume $V_r$ is the reference.
*   $V_r = \|V_r\| \angle 0$
*   $I_{ac}$ flows from right to left. So, $I_{ac}^*$ is to the left.
*   $V_s = V_r + jX I_{ac}$
*   $V_{se}$ is injected in series.
*   $V_s' = V_s + V_{se}$

If the UPFC's goal is to inject a certain amount of real power $P$ and reactive power $Q$ into the line.
*   The series converter adjusts $V_{se}$ (magnitude and phase) to achieve the desired $P$.
*   The shunt converter adjusts $Q_{shunt}$ to maintain bus voltage and absorb/inject reactive power to fulfill the $Q$ requirement for the line, compensating for any reactive power consumed/generated by the series converter.

*   **Important Note:** The UPFC can be configured to control:
    1.  Real power flow on the line and voltage at the connected bus.
    2.  Real power flow on the line and reactive power flow on the line.
    3.  Voltage at the connected bus and reactive power flow on the line.

*   **References:**
    *   Sood, "HVDC and FACTS Controllers," Section 8.3.
    *   Hingorani & Gyugyi, "Understanding FACTS," Section 6.3.
    *   Padiyar, "HVDC Transmission," Chapter 5 (for fundamental VSC concepts).

---

### 5. Applications of UPFC

The UPFC is a powerful tool for enhancing power system performance, finding applications in various scenarios:

#### 5.1 Power Flow Control:

*   **Congestion Management:** Redirects power flow away from heavily loaded lines to underutilized ones, improving transmission utilization and preventing overloads.
*   **Load Balancing:** Distributes power more evenly across parallel transmission paths.
*   **Pre-scheduling of Power:** Allows for reliable scheduling of power transactions by ensuring power flows along contracted paths.

#### 5.2 Voltage Control:

*   **Bus Voltage Support:** The shunt converter acts as a STATCOM, providing dynamic voltage support and improving stability at critical buses.
*   **Maintain Voltage Profile:** Keeps bus voltages within acceptable limits during load variations or disturbances.

#### 5.3 Stability Enhancement:

*   **Transient Stability Improvement:** By rapidly adjusting power flow, it can help machines swing back into synchronism after a fault.
*   **Dynamic Stability Improvement:** Damps power oscillations by injecting appropriate series voltage.
*   **Steady-State Stability:** Can increase the stability margin of the power system.

#### 5.4 Reactive Power Compensation:

*   **Accurate Reactive Power Compensation:** The shunt converter provides precise and fast reactive power compensation.
*   **System Compensation:** Can compensate for the reactive power requirements of the transmission line itself.

#### 5.5 IPFC (Interline Power Flow Controller) - Brief Mention:

While the topic focuses on UPFC, IPFC is closely related. IPFC is a controller that comprises multiple SSSCs connected in series on different parallel lines. It controls the power flow in multiple lines simultaneously and improves the overall efficiency of the network. UPFC is a single-line controller, while IPFC is a multi-line controller.

*   **References:**
    *   Sood, "HVDC and FACTS Controllers," Section 8.5.
    *   Hingorani & Gyugyi, "Understanding FACTS," Section 6.6.
    *   Song & Jones, "Flexible AC Transmission systems (FACTS)," Chapter 4.

---

### 6. Learning Outcomes Addressed

*   **CO1: Analyse current source and voltage source converters for HVDC systems (Knowledge Level: K4)**
    *   While UPFC uses VSCs for AC to DC conversion, the principles of VSC operation are fundamental. Understanding how VSCs synthesize voltages and control power flow is key to understanding UPFC. The module implicitly builds upon the understanding of VSCs used in HVDC systems.
*   **CO2: Describe the control schemes for HVDC systems (Knowledge Level: K2)**
    *   The control schemes of UPFC (regulating DC link voltage, controlling shunt reactive power, and controlling series voltage magnitude and phase) are analogous to control concepts in HVDC, particularly in how converters are modulated.
*   **CO3: Explain the need for FACTS devices (Knowledge Level: K2)**
    *   The applications of UPFC clearly demonstrate the need for FACTS devices to enhance power system controllability, stability, and efficiency.
*   **CO4: Classify reactive power compensators in power system (Knowledge Level: K2)**
    *   The shunt converter of UPFC functions as a STATCOM, a type of advanced reactive power compensator.
*   **CO5: Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2)**
    *   UPFC combines both series (SSSC functionality) and shunt (STATCOM functionality) FACTS devices, illustrating their combined application and benefits.
*   **CO6: Explain the dynamic interconnection mechanisms of FACTS devices (Knowledge Level: K2)**
    *   The DC link and its role in enabling energy transfer between the shunt and series converters highlight the dynamic interconnection and operation of different FACTS converter functionalities within a single device.

---

### 7. Important Points to Remember

*   **UPFC = SSSC + STATCOM:** It combines the capabilities of both series and shunt FACTS controllers.
*   **Independent Control:** The key advantage of UPFC is its ability to independently control real and reactive power flow on a transmission line.
*   **DC Link:** Essential for energy transfer and enabling simultaneous control by both converters.
*   **Series Voltage:** The injected series voltage $V_{se}$ (magnitude and phase) is the primary means to control real power.
*   **Shunt Converter:** Crucial for DC link voltage regulation and reactive power compensation at the bus.
*   **Applications:** Power flow control, voltage support, stability enhancement.

---

### 8. Practice Questions and Answers

**Question 1:** What are the main components of a Unified Power Flow Controller (UPFC)?

**Answer:** The main components of a UPFC are:
1.  Shunt Converter
2.  Series Converter
3.  DC Link (with a DC capacitor)
4.  Shunt Coupling Transformer
5.  Series Coupling Transformer(s)

**Question 2:** How does the UPFC achieve independent control of real and reactive power flow in a transmission line?

**Answer:** The UPFC achieves independent control by utilizing:
*   **Series Converter:** Controls the real power flow primarily by injecting a series voltage with a controllable phase angle relative to the line current. The magnitude of this voltage also influences reactive power.
*   **Shunt Converter:** Controls the reactive power flow at the bus to which it is connected. It also regulates the DC link voltage, which in turn affects the magnitude of the series injected voltage.
By coordinating the actions of both converters, any change in reactive power caused by real power control can be compensated for, thus decoupling the control of P and Q.

**Question 3:** The shunt converter of a UPFC primarily functions as which type of FACTS device?

**Answer:** The shunt converter of a UPFC primarily functions as a STATCOM (Static Synchronous Compensator).

**Question 4:** What is the role of the DC link in a UPFC?

**Answer:** The DC link provides a common DC voltage path that connects the shunt and series converters. It allows for the transfer of active power between the two converters, which is essential for their coordinated operation and for enabling the series converter to inject real power or absorb it from the line. It also allows the shunt converter to regulate the DC voltage, which is necessary for controlling the magnitude of the series injected voltage.

**Question 5:** List three major applications of the UPFC in a power system.

**Answer:** Three major applications of UPFC are:
1.  **Power Flow Control:** Congestion management, load balancing.
2.  **Voltage Control:** Bus voltage support, maintaining voltage profiles.
3.  **Stability Enhancement:** Improving transient and dynamic stability, damping oscillations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. Further Reading and References

*   **Primary Textbook:** Hingorani, N.G., & Gyugyi, L. (2000). *Understanding FACTS*. IEEE Press. (Chapters on UPFC are highly recommended).
*   **Secondary Textbooks:**
    *   Sood, V.K. (2004). *HVDC and FACTS Controllers*. Springer.
    *   Padiyar, K.R. (2007). *FACTS Controllers in Power Transmission and distribution*. New Age International Publishers.
    *   Song, Y.H., & Jones, A.T. (1999). *Flexible AC Transmission systems (FACTS)*. IEEE Press.
    *   Miller, T.J.E. (1982). *Reactive Power control in Power systems*. John Wiley.

This concludes the study notes for Module 4, focusing on the Unified Power Flow Controller (UPFC). Remember to refer to the textbooks for detailed mathematical derivations and specific examples.