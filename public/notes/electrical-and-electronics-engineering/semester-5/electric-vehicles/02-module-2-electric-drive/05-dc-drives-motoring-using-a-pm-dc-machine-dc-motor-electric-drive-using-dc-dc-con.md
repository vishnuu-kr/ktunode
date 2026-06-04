---
title: "DC Drives: Motoring using a PM DC Machine - DC motor electric drive using DC-DC converter - Generating/Braking using a PM DC Machine. (3hrs)"
subject: "ELECTRIC VEHICLES"
module: "Module 2: Electric Drive"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362a5"
status: "completed"
scrapedAt: "2026-05-23T16:21:33.175Z"
---
# ELECTRIC VEHICLES: Module 2 - Electric Drive

## Topic: DC Drives: Motoring using a PM DC Machine - DC motor electric drive using DC-DC converter - Generating/Braking using a PM DC Machine. (3hrs)

---

### **1. Introduction to DC Drives for Electric Vehicles**

*   **Context:** DC motors, particularly Permanent Magnet DC (PM DC) motors, have historically played a significant role in electric vehicle (EV) propulsion due to their simplicity, good torque characteristics, and controllability. While modern EVs predominantly use AC drives (PMSM, Induction Motors), understanding DC drives provides a foundational understanding of electric propulsion systems.
*   **Relevance to EVs:** DC drives are crucial for understanding the evolution of EV propulsion and form a basis for appreciating the complexities of more advanced AC drive systems. They are still found in some auxiliary systems or older EV designs.
*   **Learning Outcomes Addressed:**
    *   CO1: Familiarise with the performance of conventional vehicles and electric vehicles (K2) - *Understanding DC drives helps in comparing performance characteristics with conventional ICE vehicles.*
    *   CO3: Discuss the propulsion unit for electric vehicles and selection of drive systems (K3) - *This topic directly addresses a propulsion unit option.*
*   **Textbook Reference:**
    *   Chau, K. T. (2015). *Electric Vehicles Machines and Drives- Design, Analysis and Application.* (Chapter on DC motor drives)
    *   Hussein, I. (2003). *Electric and Hybrid Vehicles: Design Fundamentals.* (Chapters on electric motors and drives)

---

### **2. Permanent Magnet DC (PM DC) Machine: Fundamentals**

*   **Definition:** A DC motor where the field excitation is provided by permanent magnets instead of electromagnets.
*   **Key Components:**
    *   **Stator:** Contains permanent magnets to create a stationary magnetic field.
    *   **Rotor (Armature):** Contains windings carrying current, which interact with the stator's magnetic field to produce torque.
    *   **Commutator:** A mechanical switch that reverses the direction of current in the armature windings as the rotor rotates, ensuring continuous torque production.
    *   **Brushes:** Conductive contacts that press against the commutator to supply current to the armature windings.
*   **Operating Principle:**
    1.  When a DC voltage is applied to the armature winding through brushes and the commutator, current flows.
    2.  This armature current interacts with the magnetic field produced by the permanent magnets.
    3.  According to Fleming's Left-Hand Rule, a force is exerted on the current-carrying conductors in the magnetic field, generating torque.
    4.  As the rotor turns, the commutator switches the current direction in the armature coils, ensuring that the torque continues to act in the same direction.
*   **Torque and Speed Relationship:**
    *   **Torque ($T_e$):** Proportional to the armature current ($I_a$) and the magnetic flux ($\Phi$) produced by the permanent magnets.
        $T_e = k_T \Phi I_a$
        where $k_T$ is the motor torque constant. For PM DC motors, $\Phi$ is constant. Therefore, $T_e \propto I_a$.
    *   **Back EMF ($E_b$):** Generated in the armature winding due to its rotation in the magnetic field. It opposes the applied voltage.
        $E_b = k_E \Phi \omega_m$
        where $k_E$ is the motor voltage constant and $\omega_m$ is the rotor mechanical speed (rad/s). For PM DC motors, $\Phi$ is constant. Therefore, $E_b \propto \omega_m$.
    *   **Motor Terminal Voltage ($V_t$):** The applied voltage minus the voltage drop across the armature resistance ($R_a$) and inductance ($L_a$), and the back EMF.
        $V_t = I_a R_a + L_a \frac{dI_a}{dt} + E_b$
        In steady-state: $V_t = I_a R_a + E_b$
    *   **Speed Control:** From the above equations, we can derive the speed-torque characteristic:
        $\omega_m = \frac{V_t - I_a R_a}{k_E \Phi}$
        For a given voltage, speed is inversely proportional to armature current (which is related to torque).
*   **Advantages of PM DC Motors:**
    *   High efficiency (no field winding losses).
    *   Good power-to-weight ratio.
    *   Simple construction.
    *   Good starting torque.
*   **Disadvantages of PM DC Motors:**
    *   Limited by the magnetic strength of permanent magnets.
    *   Susceptible to demagnetization at high temperatures or fault conditions.
    *   Commutation issues at high speeds and currents.
    *   Speed cannot be controlled by field weakening.
*   **Important Point to Remember:** The constant magnetic flux from permanent magnets simplifies the torque-speed relationship, making PM DC motors inherently controllable by armature voltage/current.

---

### **3. DC Motor Electric Drive using DC-DC Converter**

*   **Necessity of DC-DC Converters:**
    *   The battery voltage in an EV is typically fixed (e.g., 48V, 72V, 100V, 400V).
    *   The PM DC motor requires variable voltage to control its speed and torque effectively.
    *   A DC-DC converter acts as a voltage regulator between the battery and the DC motor.
*   **Types of DC-DC Converters for EV Drives:**
    *   **Buck Converter:** Steps down the DC voltage (output voltage < input voltage). Used for reducing battery voltage to the motor.
    *   **Boost Converter:** Steps up the DC voltage (output voltage > input voltage). Less common for direct motor drive from a battery, but can be used in specific topologies or for charging.
    *   **Buck-Boost Converter:** Can step up or step down the voltage.
*   **Buck Converter for Motoring:**
    *   **Circuit Topology:** Consists of a switch (MOSFET or IGBT), a diode, an inductor, and a capacitor.
        *   **Switch (S):** Controls the flow of current to the motor.
        *   **Diode (D):** Provides a path for inductive current when the switch is off.
        *   **Inductor (L):** Stores energy when the switch is on and releases it when the switch is off, smoothing the current.
        *   **Capacitor (C):** Filters the output voltage.
    *   **Operation:**
        *   **Switch ON (Duration $DT$):** The inductor is connected across the battery voltage ($V_{bat}$). Current through the inductor ($I_L$) ramps up, and this current also flows to the motor and charging the capacitor. The diode is reverse-biased.
        *   **Switch OFF (Duration $(1-D)T$):** The inductor is connected to the motor and the diode. The inductor releases its stored energy, and current continues to flow to the motor and capacitor. The diode is forward-biased.
    *   **Voltage Transfer Ratio:** The output DC voltage ($V_{out}$) is related to the input DC voltage ($V_{bat}$) by the duty cycle ($D$) of the switch.
        $V_{out} = D \cdot V_{bat}$ (assuming ideal components and continuous conduction mode)
    *   **Control:** The speed of the PM DC motor is controlled by varying the duty cycle ($D$) of the DC-DC converter. A higher duty cycle means a higher average voltage applied to the motor, resulting in higher speed and torque (for a given load).
*   **Control Strategies:**
    *   **Voltage Control:** Directly control the average voltage delivered to the motor by varying $D$.
    *   **Current Control:** Control the armature current ($I_a$) by regulating the duty cycle based on armature current feedback. This is often preferred for smoother torque delivery and protection.
*   **Textbook Reference:**
    *   Chau, K. T. (2015). *Electric Vehicles Machines and Drives- Design, Analysis and Application.* (Chapters on DC-DC converters and their application in EV drives)
    *   Miller, J. M. (2010). *Propulsion Systems for Hybrid Vehicles.* (Sections on power electronics converters for EV powertrains)
    *   Mi, C., Masrur, M. A., & Gao, D. W. (2011). *Hybrid Electric Vehicles – Principles and applications with practical perspectives.* (Chapters on power electronics converters)
*   **Course Outcome Alignment:**
    *   CO2: Analyse the various drive train topologies for electric vehicles (K3) - *Understanding DC-DC converters is key to understanding a DC drive train topology.*
    *   CO3: Discuss the propulsion unit for electric vehicles and selection of drive systems (K3) - *Explains how a DC motor is controlled in an EV.*

---

### **4. Generating/Braking using a PM DC Machine**

*   **Princ of Regenerative Braking:** When a DC motor is driven by an external mechanical force (e.g., vehicle deceleration), it acts as a generator. The kinetic energy of the vehicle is converted into electrical energy.
*   **Mechanism in DC Motors:**
    *   In motoring mode, voltage ($V_t$) is applied to the armature, and current ($I_a$) flows.
    *   In generating mode, the motor is driven at a speed $\omega_m > \frac{V_t}{k_E \Phi}$ (or $V_{bat}$ if $V_t$ is replaced by battery voltage). This means the back EMF ($E_b$) becomes greater than the applied armature voltage (or zero if no voltage is applied).
    *   When the motor acts as a generator, the generated voltage ($E_b$) now drives current in the opposite direction through the armature winding.
    *   $E_b = I_a R_a + V_{out}$ (where $V_{out}$ is the voltage supplied by the generator to the load/battery)
    *   The direction of armature current reverses.
*   **DC-DC Converter in Generating Mode:**
    *   To transfer the generated electrical energy back to the battery, the DC-DC converter must operate in **reverse mode** (as a **boost converter** or a reversible buck converter).
    *   **Boost Converter Operation for Charging:**
        *   The PM DC motor now acts as a DC voltage source ($E_b$).
        *   The switch and diode in the DC-DC converter circuit are reconfigured or controlled to enable energy transfer from the motor to the battery.
        *   **Switch ON:** The inductor is connected in series with the motor, and current ramps up. The diode is reverse-biased.
        *   **Switch OFF:** The inductor's stored energy is released to the battery through the diode. The switch is off.
        *   The voltage across the battery ($V_{bat}$) is higher than the generated voltage ($E_b$) from the motor at that instant, hence the "boost" operation to push current into the battery.
        *   The duty cycle ($D$) of the converter now controls the charging current to the battery.
*   **Braking Types:**
    *   **Regenerative Braking:** Captures energy and returns it to the battery. This is the most efficient form of braking.
    *   **Dynamic Braking (Rheostatic Braking):** The motor is disconnected from the battery and connected to a braking resistor. The generated energy is dissipated as heat in the resistor. This is used when the battery is fully charged or to supplement regenerative braking.
*   **Control of Regenerative Braking:**
    *   The level of braking torque is controlled by adjusting the duty cycle ($D$) of the DC-DC converter, which in turn regulates the current flowing back to the battery.
    *   When the driver lifts off the accelerator pedal, the controller adjusts the converter to allow the motor to generate.
*   **Textbook Reference:**
    *   Chau, K. T. (2015). *Electric Vehicles Machines and Drives- Design, Analysis and Application.* (Sections on regenerative braking and DC motor generator operation)
    *   Hussein, I. (2003). *Electric and Hybrid Vehicles: Design Fundamentals.* (Chapters on braking systems and energy recovery)
*   **Course Outcome Alignment:**
    *   CO1: Familiarise with the performance of conventional vehicles and electric vehicles (K2) - *Understanding regenerative braking is key to EV performance, especially energy efficiency.*
    *   CO3: Discuss the propulsion unit for electric vehicles and selection of drive systems (K3) - *Essential for understanding the complete operational cycle of an EV's propulsion system.*

---

### **5. Torque-Speed Characteristics and Control**

*   **Motoring Mode:**
    *   As discussed, $T_e \propto I_a$.
    *   $V_t = I_a R_a + E_b = I_a R_a + k_E \Phi \omega_m$.
    *   $\omega_m = \frac{V_t - I_a R_a}{k_E \Phi}$.
    *   **Constant Torque Region:** Achieved by controlling the armature current ($I_a$) through the DC-DC converter's duty cycle. $V_t$ is adjusted to keep $I_a$ constant, leading to constant torque. This is usually the desired operating region for starting and moderate acceleration.
    *   **Constant Power Region:** Achieved by reducing the armature voltage ($V_t$) as speed increases, while keeping the current relatively constant. In this region, $T_e \propto 1/\omega_m$ (approximately constant power $P = T_e \omega_m$). This is useful for higher speed operation.
*   **Generating Mode:**
    *   $E_b = I_a R_a + V_{out}$ (where $V_{out}$ is the charging voltage).
    *   $\omega_m = \frac{V_{out} + I_a R_a}{k_E \Phi}$.
    *   In regenerative braking, we control the current $I_a$ (charging current) to control the braking torque.
    *   The braking torque is proportional to the armature current: $T_{brake} = k_T \Phi I_a$.
    *   By adjusting the duty cycle of the DC-DC converter (operating as a boost charger), we control $I_a$, and thus the braking torque.
*   **Important Point to Remember:** The ability to control both torque and speed by varying the armature voltage (via the DC-DC converter) and armature current is fundamental to the operation of DC drives.

---

### **6. Practical Considerations and Limitations**

*   **Brush Wear:** Brushes and commutators are mechanical components that wear out over time, requiring maintenance and limiting the motor's lifespan. This is a major drawback compared to brushless AC motors.
*   **Commutation Sparking:** At high speeds and currents, sparking can occur between brushes and the commutator, leading to efficiency loss and increased wear.
*   **Efficiency:** While PM DC motors are efficient, the overall drive system efficiency is also affected by the DC-DC converter losses.
*   **Control Complexity:** While simpler than some AC drives, precise control of the DC-DC converter is crucial for smooth operation and energy management.
*   **Limited Field Weakening:** Unlike wound-field DC motors, PM DC motors cannot be operated in a field-weakening region to achieve speeds beyond their base speed.
*   **Magnetic Demagnetization:** Extreme operating conditions (high temperatures, fault currents) can permanently weaken the permanent magnets.
*   **Textbook Reference:**
    *   Ehsani, M., Gao, Y., & Gay, S. E. (n.d.). *Modern Electric, Hybrid and Fuel Cell Vehicles: Fundamentals, Theory and Design.* (Chapters discussing motor technologies and their limitations)
    *   Krishnan, R. (n.d.). *Permanent Magnet Synchronous and Brushless DC Motors Drives.* (While focusing on PMSM/BLDC, it highlights advantages over brushed DC)

---

### **7. Practice Questions and Answers**

**Question 1:** Explain the role of a DC-DC converter in an electric vehicle equipped with a PM DC motor for motoring.
**Answer:** A DC-DC converter is essential to regulate the battery voltage to the variable voltage required by the PM DC motor for speed and torque control. It acts as a voltage regulator, stepping down the fixed battery voltage to a desired level for the motor by controlling its duty cycle.

**Question 2:** Describe the principle of regenerative braking using a PM DC motor. How does the DC-DC converter facilitate this process?
**Answer:** In regenerative braking, the PM DC motor acts as a generator when driven by the vehicle's kinetic energy. The motor's generated back EMF exceeds the applied voltage (or is applied to a circuit that allows energy transfer). The DC-DC converter, operating in reverse (like a boost converter), steps up the generated voltage to charge the battery, thus recovering energy. The converter's duty cycle controls the charging current and hence the braking torque.

**Question 3:** What is the primary disadvantage of brushed DC motors, including PM DC motors, compared to brushless motor technologies in modern EVs?
**Answer:** The primary disadvantage is the presence of brushes and a commutator. These are mechanical components that are subject to wear and tear, leading to reduced lifespan, maintenance requirements, and potential for sparking and reduced reliability at high speeds compared to brushless motor systems.

**Question 4:** If a PM DC motor has a back EMF constant $k_E \Phi = 0.5$ V/(rad/s) and an armature resistance $R_a = 0.1 \Omega$, what is the motor speed when a voltage of 50V is applied and it draws an armature current of 10A?
**Answer:**
Using the motor voltage equation: $V_t = I_a R_a + E_b$
$50 \text{ V} = (10 \text{ A} \times 0.1 \Omega) + E_b$
$50 \text{ V} = 1 \text{ V} + E_b$
$E_b = 49 \text{ V}$

Now, using the back EMF equation: $E_b = k_E \Phi \omega_m$
$49 \text{ V} = 0.5 \text{ V/(rad/s)} \times \omega_m$
$\omega_m = \frac{49}{0.5} \text{ rad/s} = 98 \text{ rad/s}$

Motor speed in RPM = $\frac{98 \text{ rad/s} \times 60 \text{ s/min}}{2\pi \text{ rad/rev}} \approx 936 \text{ RPM}$

**Question 5:** In the context of electric vehicle drives, differentiate between regenerative braking and dynamic braking for a DC motor.
**Answer:**
*   **Regenerative Braking:** The generated electrical energy is captured and returned to the battery or other energy storage devices. This improves the overall energy efficiency of the vehicle.
*   **Dynamic Braking:** The generated electrical energy is dissipated as heat in a resistor. This is used when regenerative braking is not possible (e.g., battery full) or to supplement it. It does not recover energy.

---

### **8. Summary and Key Takeaways**

*   **PM DC Motors:** Offer good performance characteristics (efficiency, torque) and simplicity.
*   **DC-DC Converter:** Crucial for regulating the battery voltage to the variable voltage required by the DC motor for motoring and for managing the flow of energy during regenerative braking.
*   **Motoring:** Speed is controlled by varying the armature voltage (via converter duty cycle), which affects back EMF. Torque is controlled by armature current.
*   **Generating/Braking:** Motor acts as a generator, producing back EMF. The DC-DC converter (in boost mode) transfers generated energy back to the battery.
*   **Limitations:** Brush wear, commutation issues, and lack of field weakening are significant drawbacks compared to brushless motor technologies used in most modern EVs.
*   **Evolution:** Understanding DC drives provides a strong foundation for appreciating the advantages and complexities of AC drives (PMSM, Induction Motors) that dominate current EV technology.

---
