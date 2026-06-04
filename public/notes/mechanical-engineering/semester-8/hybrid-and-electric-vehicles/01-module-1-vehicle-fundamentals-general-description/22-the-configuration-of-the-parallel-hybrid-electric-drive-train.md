---
title: "the configuration of the parallel hybrid electric drive train."
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 1: Vehicle fundamentals – general description"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464431"
status: "completed"
scrapedAt: "2026-05-20T18:20:41.053Z"
---
## HYBRID AND ELECTRIC VEHICLES

---

### **Module 1: Vehicle Fundamentals – General Description**

---

### **Topic: The Configuration of the Parallel Hybrid Electric Drive Train**

---

**Learning Outcomes Covered:**

*   Understanding the fundamental architecture of a parallel hybrid electric drive train.
*   Identifying the key components and their roles within this configuration.
*   Explaining the different operating modes of a parallel hybrid system.
*   Analyzing the advantages and disadvantages of the parallel hybrid configuration.
*   Relating the parallel hybrid configuration to the broader architecture of electric vehicles (CO1).
*   Understanding the power transmission aspects of this configuration (CO4).

---

**Key Concepts and Definitions:**

*   **Hybrid Electric Vehicle (HEV):** A vehicle that utilizes both an internal combustion engine (ICE) and an electric motor for propulsion.
*   **Drive Train:** The system of components that delivers power from the engine to the wheels.
*   **Parallel Hybrid:** A configuration where both the ICE and the electric motor can independently or jointly provide power to the drive wheels. The key characteristic is that both power sources are connected in parallel to the mechanical drivetrain.
*   **Electric Machine (Motor/Generator):** A device that converts electrical energy into mechanical energy (motor) or mechanical energy into electrical energy (generator). In HEVs, a single electric machine often performs both functions.
*   **Internal Combustion Engine (ICE):** A heat engine that burns fuel to generate mechanical power.
*   **Transmission:** A system of gears that allows the engine and/or electric motor to operate efficiently at various vehicle speeds.
*   **Clutch/Torque Coupler:** A mechanism used to engage or disengage the ICE from the drivetrain, allowing for independent operation of the electric motor.
*   **Power Split Device (PSD):** A complex gearbox, often using planetary gear sets, that allows for the management and distribution of power from multiple sources (ICE, electric motor) to the output shaft. While not strictly mandatory for all parallel hybrids, advanced parallel configurations may incorporate PSDs.
*   **Battery Pack:** Stores electrical energy to power the electric motor.
*   **Power Electronics:** Devices such as inverters and converters that control the flow of electrical power between the battery pack, electric motor, and other components.

---

**1. General Description of the Parallel Hybrid Electric Drive Train:**

The parallel hybrid electric drive train is characterized by its ability to propel the vehicle using either the Internal Combustion Engine (ICE) or the electric motor, or both simultaneously. This offers significant flexibility in operation and can lead to improved fuel efficiency and reduced emissions.

*   **Parallel Connection:** The defining feature is that both the ICE and the electric motor are mechanically connected in parallel to the driven wheels, typically through a transmission. This means that both power sources can exert torque on the drivetrain independently or in combination.

    *   *Example:* Think of a bicycle where you can pedal with your legs (ICE) and also have an electric motor assisting (electric motor), both turning the same wheel.

*   **Power Flow:** Power from the ICE and the electric motor can flow to the wheels. When acting as a generator, the electric machine can also recover energy during braking or from the ICE to charge the battery.

**2. Key Components of a Parallel Hybrid Drive Train:**

*   **Internal Combustion Engine (ICE):** The primary source of motive power in conventional vehicles. In a parallel hybrid, it is often downsized or optimized for efficiency due to the electric motor's assistance.
*   **Electric Machine (Motor/Generator):**
    *   **Motor Function:** Provides propulsion, either alone or in conjunction with the ICE.
    *   **Generator Function:** Recovers kinetic energy during regenerative braking and/or generates electricity from the ICE to charge the battery.
    *   *Location:* Can be placed in various locations:
        *   **Behind the ICE:** Connected to the transmission input shaft.
        *   **On the output shaft:** Connected after the transmission.
        *   **At the wheels:** In-wheel motors (less common in traditional parallel hybrids but represents a "series-parallel" or "e-axle" concept).
*   **Transmission:**
    *   **Traditional Automatic or Manual Transmission:** Can be adapted. The electric motor is integrated into the transmission system.
    *   **Continuously Variable Transmission (CVT):** Often used in parallel hybrids for smoother power delivery and better fuel efficiency by allowing the ICE to operate at its most efficient RPM.
    *   **Dedicated Hybrid Transmission (e.g., with integrated PSD):** Some advanced parallel hybrids employ specialized transmissions that include power-splitting capabilities.
*   **Battery Pack:** Stores electrical energy. The size and type of battery depend on the hybrid's design (e.g., mild, full, plug-in).
*   **Power Electronics (Inverter/Converter):**
    *   **Inverter:** Converts DC power from the battery to AC power for the electric motor and vice-versa (for regenerative braking).
    *   **Converter:** Steps up or down voltage as needed for charging and discharging the battery.
*   **Clutch/Torque Coupler:**
    *   **Single Clutch:** Connects/disconnects the ICE from the drivetrain.
    *   **Dual Clutch (as in DCT):** Can also be used, offering more seamless shifting and potential for electric-only operation.
    *   **Torque Converter:** In some automatic transmission-based parallel hybrids, the torque converter can serve a similar function to a clutch.
*   **Engine Control Unit (ECU) & Hybrid Control Unit (HCU):** The brains of the system, managing the operation of the ICE, electric motor, battery, and transmission to optimize performance, fuel efficiency, and emissions based on driving conditions.

**3. Types of Parallel Hybrid Configurations:**

Based on the integration of the electric motor, parallel hybrids are often categorized:

*   **Mild Hybrid (MHEV):**
    *   **Description:** The electric motor is typically smaller and primarily assists the ICE, rather than propelling the vehicle solely on electric power. It can provide a torque boost during acceleration and enable start-stop functionality.
    *   **Electric Motor Placement:** Often integrated into the accessory drive or between the ICE and transmission.
    *   **Battery:** Smaller battery, often 48V systems.
    *   **Example:** Some starter-generators in modern ICE vehicles that assist with acceleration.
    *   *Reference:* Ehsani et al. (2018) discusses mild hybrids as a foundational step towards full hybrids.

*   **Full Parallel Hybrid:**
    *   **Description:** The electric motor is sufficiently powerful to propel the vehicle independently of the ICE. Both can work together to provide maximum power.
    *   **Electric Motor Placement:** Can be located either before or after the transmission.
    *   **Clutch:** Typically required to disengage the ICE for electric-only drive.
    *   **Example:** Toyota Prius (though it uses an innovative e-CVT that blends series and parallel characteristics, it operates largely in a parallel manner for torque delivery).
    *   *Reference:* Husain (2010) provides detailed schematics of various parallel hybrid configurations, including full parallel designs.

*   **Series-Parallel Hybrid (or Power-Split Hybrid):**
    *   **Description:** While technically a distinct category, many "parallel" hybrids employ a power-split device (often a planetary gearset) that allows for both series and parallel operation. This is a very common and efficient configuration. The electric motor and ICE can drive the wheels directly (parallel), or the ICE can drive a generator which powers the electric motor driving the wheels (series).
    *   **Power Split Device:** Essential component.
    *   **Example:** Toyota's Hybrid Synergy Drive (HSD) system, as found in the Prius, is a prime example.
    *   *Reference:* Larminie & Lowry (2012) extensively cover power-split devices and their role in achieving efficient hybrid operation.

**4. Operating Modes of a Parallel Hybrid:**

The Hybrid Control Unit (HCU) dynamically switches between these modes:

*   **Electric-Only Driving (EV Mode):**
    *   **Description:** Vehicle is propelled solely by the electric motor. ICE is shut off.
    *   **Conditions:** Low speeds, light acceleration, sufficient battery charge.
    *   **Benefit:** Zero tailpipe emissions, quiet operation.

*   **ICE-Only Driving:**
    *   **Description:** Vehicle is propelled solely by the ICE. Electric motor is disengaged or used as a generator.
    *   **Conditions:** Higher speeds, sustained cruising, low battery charge.
    *   **Benefit:** Efficient use of ICE under steady load.

*   **Hybrid Driving (ICE + Electric Motor Assist):**
    *   **Description:** Both the ICE and the electric motor work together to propel the vehicle.
    *   **Conditions:** High power demand (e.g., hard acceleration, climbing hills).
    *   **Benefit:** Maximizes performance and can allow for engine downsizing.

*   **Regenerative Braking:**
    *   **Description:** During deceleration, the electric motor acts as a generator, converting kinetic energy back into electrical energy and storing it in the battery.
    *   **Conditions:** Braking, downhill coasting.
    *   **Benefit:** Recovers energy that would otherwise be lost as heat in conventional braking systems, improving overall efficiency.

*   **Battery Charging:**
    *   **Description:** The ICE can drive the electric motor as a generator to charge the battery, or the electric motor can be used as a generator during regenerative braking.
    *   **Conditions:** Low battery charge, during deceleration.

**5. Advantages of Parallel Hybrid Drive Trains:**

*   **Improved Fuel Efficiency:** By utilizing electric power, assisting the ICE, and recovering energy through regenerative braking, fuel consumption is significantly reduced compared to conventional ICE vehicles.
*   **Reduced Emissions:** Lower fuel consumption leads to lower tailpipe emissions. Electric-only operation produces zero tailpipe emissions.
*   **Enhanced Performance:** The electric motor can provide instant torque, improving acceleration and responsiveness, especially when combined with the ICE.
*   **Flexibility in Design:** Various configurations (mild, full, series-parallel) can be implemented to suit different vehicle types and performance requirements.
*   **Simpler Mechanical Integration (compared to Series):** In a pure parallel hybrid, the ICE and electric motor directly contribute torque to the wheels, potentially simplifying the mechanical drivetrain compared to a pure series hybrid where the ICE is always disconnected from the wheels.
*   **Relatively Lower Cost (than Series):** Pure parallel designs can sometimes be less complex and costly than series hybrids that rely heavily on powerful electric motors and generators.
*   **Good for Highway Cruising:** Can operate efficiently with the ICE at steady speeds while the electric motor provides assists or is off.

**6. Disadvantages of Parallel Hybrid Drive Trains:**

*   **Complexity:** Integrating two distinct power sources and managing their interaction adds significant complexity to the vehicle's control system and drivetrain.
*   **Weight:** The addition of an electric motor, battery pack, and associated power electronics increases the overall vehicle weight, which can partially offset fuel efficiency gains if not managed carefully.
*   **Cost:** Hybrid systems are generally more expensive to manufacture than conventional ICE vehicles.
*   **Packaging:** The components (ICE, electric motor, battery, transmission) can be challenging to package efficiently within the vehicle's chassis.
*   **Efficiency Limitations in Certain Modes:** Pure parallel hybrids might not be as efficient as series hybrids in scenarios where the ICE is consistently inefficient (e.g., low speed, stop-and-go traffic) if they cannot effectively operate the ICE in its optimal range. Series-parallel designs mitigate this.

**7. Relation to Course Outcomes:**

*   **CO1: Explain the general architecture of Electric vehicles:** The parallel hybrid is a fundamental architecture within the broader HEV landscape, showcasing how ICE and electric power are integrated. This module provides a direct example of such integration.
*   **CO4: Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement:** Understanding the parallel configuration directly addresses power transmission. It highlights the roles of the ICE, electric motor, transmission, clutches, and how they deliver torque to the wheels. This knowledge is crucial for component selection based on desired performance and efficiency.

---

**Important Points to Remember:**

*   The defining characteristic of a parallel hybrid is that *both* the ICE and electric motor can *directly* drive the wheels, either individually or simultaneously.
*   The electric machine in a parallel hybrid usually functions as both a motor and a generator.
*   A clutch or torque coupler is often necessary to disconnect the ICE from the drivetrain for electric-only operation.
*   Mild, full, and series-parallel are common classifications within the parallel hybrid architecture, each with different levels of electric assistance and integration.
*   The Hybrid Control Unit (HCU) is critical for managing the complex interactions between the ICE, electric motor, and battery.
*   Regenerative braking is a key feature for improving efficiency in all hybrid types.

---

**Practice Questions:**

1.  **Definition:** What is the primary characteristic that defines a parallel hybrid electric drive train?
    *   **Answer:** The ability of both the internal combustion engine (ICE) and the electric motor to independently or simultaneously drive the wheels.

2.  **Component Identification:** Name at least three essential components of a parallel hybrid drive train and briefly describe their function.
    *   **Answer:**
        *   **ICE:** Provides motive power.
        *   **Electric Machine:** Acts as a motor for propulsion and a generator for charging/regen braking.
        *   **Transmission:** Transmits power to the wheels and manages speed/torque.
        *   **Battery Pack:** Stores electrical energy.
        *   **Power Electronics:** Controls electrical power flow.
        *   **Clutch/Torque Coupler:** Engages/disengages the ICE.

3.  **Operating Mode:** Describe the "Electric-Only Driving" mode in a parallel hybrid and under what conditions it typically occurs.
    *   **Answer:** In this mode, the vehicle is propelled solely by the electric motor, with the ICE shut off. It typically occurs at low speeds, during light acceleration, or when sufficient battery charge is available.

4.  **Classification:** Differentiate between a mild hybrid and a full parallel hybrid.
    *   **Answer:** A mild hybrid's electric motor primarily assists the ICE and cannot propel the vehicle alone. A full parallel hybrid's electric motor is powerful enough to drive the vehicle independently.

5.  **Advantage/Disadvantage:** List one significant advantage and one significant disadvantage of the parallel hybrid configuration.
    *   **Answer:**
        *   **Advantage:** Improved fuel efficiency and reduced emissions.
        *   **Disadvantage:** Increased complexity and weight due to the addition of electric components.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
