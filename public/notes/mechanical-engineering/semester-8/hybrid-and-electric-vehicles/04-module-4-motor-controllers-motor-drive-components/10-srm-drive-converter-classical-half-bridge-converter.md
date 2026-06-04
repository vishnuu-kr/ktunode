---
title: "SRM drive converter - classical half-bridge converter."
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 4: Motor controllers – motor drive components"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464467"
status: "completed"
scrapedAt: "2026-05-20T18:21:17.289Z"
---
# Module 4: Motor Controllers – Motor Drive Components

## Topic: SRM Drive Converter - Classical Half-Bridge Converter

This topic focuses on a fundamental building block for controlling Switched Reluctance Motors (SRMs) in hybrid and electric vehicles: the classical half-bridge converter. Understanding this converter is crucial for comprehending how SRMs are powered and modulated to achieve desired torque and speed.

### 1. Introduction to Switched Reluctance Motors (SRMs)

**Key Concepts:**

*   **SRM Operation:** SRMs are doubly salient machines meaning they have salient poles on both the stator and rotor. Torque is produced by aligning the stator and rotor poles to minimize the reluctance path. This requires sequential energization of stator phases based on rotor position.
*   **Stepped Nature of Torque:** Due to the nature of SRM operation, the instantaneous torque is often pulsating.
*   **Disadvantages of SRMs:**
    *   Requires complex control for efficient operation.
    *   Lower power factor compared to other motor types.
    *   Higher acoustic noise.
*   **Advantages of SRMs:**
    *   Simple and robust rotor construction (no windings, cage, or permanent magnets).
    *   High reliability and fault tolerance.
    *   Low cost.
    *   Good performance at high temperatures.

**Relevance to HEVs/EVs (CO3):** SRMs are considered for EV applications due to their inherent robustness and potential for cost reduction, especially in applications where high torque density and reliability are paramount. Their ability to operate with fewer components can simplify the powertrain.

### 2. The Role of the Converter in SRM Drives

**Key Concepts:**

*   **Power Conditioning:** The DC power from the battery pack needs to be converted into a controllable AC-like waveform to drive the SRM phases.
*   **Phase Energization Control:** The converter is responsible for switching the voltage applied to each SRM phase on and off at the correct rotor positions and durations to produce the desired torque.
*   **Current Control:** The converter also plays a vital role in controlling the current flowing through each phase, which directly influences the torque produced.

**Relevance to HEVs/EVs (CO4):** The selection and design of the power converter are critical for the overall efficiency, performance, and responsiveness of the electric vehicle's powertrain. The converter is a key component in power transmission.

### 3. The Classical Half-Bridge Converter for SRM Drives

**Key Concepts:**

*   **Basic Structure:** A half-bridge converter is the simplest converter topology for driving an SRM phase. It consists of two switches (typically MOSFETs or IGBTs) and two diodes.
*   **Components:**
    *   **Switches (S1, S2):** These are controlled semiconductor devices that connect or disconnect the SRM phase winding from the DC bus.
    *   **Diodes (D1, D2):** These provide freewheeling paths for the current when the switches are turned off, preventing voltage spikes and dissipating stored energy.
*   **Operation Modes:**
    *   **Phase Energization (Switch S1 ON, S2 OFF):** When S1 is turned ON, the SRM phase winding is connected to the positive DC bus. Current flows into the winding, building up the magnetic flux and producing torque.
    *   **Phase De-energization (Switch S1 OFF, S2 ON):** When S1 is turned OFF and S2 is turned ON, the SRM phase winding is connected to the negative DC bus (or ground). The current path is completed through S2. This mode is used to reduce the current and the magnetic flux, effectively controlling the torque.
    *   **Freewheeling (Switch S1 OFF, S2 OFF):** If both switches are turned OFF, the current can freewheel through the diodes. This is often used to rapidly demagnetize the phase winding and control the current decay.

**Diagram:**

```
      +Vdc
       |
       S1 --+-- Winding --+-- S2
            |             |
           D1           D2
            |             |
           GND           GND
```

*Where S1 and S2 are typically MOSFETs or IGBTs, and D1 and D2 are their corresponding freewheeling diodes.*

**Operation Details:**

*   **Energization:** To energize a phase, switch S1 is turned ON. The DC voltage is applied across the winding, causing the current to rise. The rate of rise depends on the winding inductance and the applied voltage.
*   **Torque Production:** Torque is produced as the rotor moves into alignment with the energized stator pole. The torque is proportional to the current and the rate of change of inductance with respect to rotor angle.
*   **Current Control During Energization:** The current can be controlled by pulse-width modulation (PWM) of the energizing switch (S1). By switching S1 ON and OFF rapidly, the average voltage applied to the winding can be controlled, thus regulating the current.
*   **De-energization/Freewheeling:** When a phase needs to be turned OFF, S1 is switched OFF.
    *   If S2 is turned ON, the winding is connected to the negative rail, and the current will decay.
    *   If both S1 and S2 are turned OFF, the current freewheels through the diodes. The direction of current flow through the diodes depends on the polarity of the voltage across the winding at the moment of switching.

**Reference (Husain, 2nd Ed., Chapter 7):** Husain's text extensively covers the fundamentals of SRM drives, including various converter topologies. The half-bridge is presented as the basic building block, highlighting its role in controlling the voltage and current applied to each phase. The book emphasizes the importance of controlling the switching instants to optimize torque production and minimize ripple.

**Reference (Ehsani et al., 3rd Ed., Chapter 6):** Ehsani's book provides a comprehensive overview of electric machine drives, including SRMs. It details the power electronic converters required for SRM control, with the half-bridge being a foundational topology. The authors discuss the switching strategies and their impact on efficiency and performance.

**Reference (Larminie & Lowry, 2nd Ed., Chapter 5):** Larminie and Lowry's text focuses on electric vehicle technology. While not exclusively on SRMs, their discussion on motor drives and power converters is relevant. They explain the basic principles of DC-DC and DC-AC converters, which are the underlying principles for SRM converters.

### 4. Control Strategies using the Half-Bridge Converter

**Key Concepts:**

*   **Angle Control:** The most fundamental control strategy involves controlling the switching angles (turn-on and turn-off angles) of the switches relative to the rotor position.
*   **Current Control:** The current in each phase is typically regulated using PWM.
    *   **Chopping Control:** This involves chopping the voltage applied to the winding by switching the energizing switch (S1) ON and OFF. This is done to regulate the average current.
    *   **Clipped-Sine Current Control:** A more advanced strategy where the current is shaped to approximate a sinusoidal waveform, reducing torque ripple.
*   **Position Sensing:** Accurate rotor position sensing is crucial for implementing these control strategies.

**Example (Angle Control):**

Consider a single phase of an SRM.
1.  **Detection:** The rotor position sensor indicates that the leading edge of a rotor pole is approaching the energized stator pole.
2.  **Energization:** Switch S1 is turned ON, connecting the phase winding to the DC bus. The current begins to rise.
3.  **Torque Production:** As the rotor aligns with the stator pole, positive torque is produced.
4.  **De-energization:** Before the rotor starts moving away from alignment (where the inductance would decrease, leading to negative torque), switch S1 is turned OFF.
5.  **Freewheeling/Current Decay:** The current freewheels through the diodes (or is actively commutated depending on the sophistication of the converter). The controlled decay of current is important for efficiency and torque ripple reduction.

**Reference (Husain, 2nd Ed., Chapter 7):** Husain elaborates on various control schemes, including angle control and current control techniques like chopping. He emphasizes how these strategies impact SRM performance, efficiency, and torque ripple.

**Reference (Ehsani et al., 3rd Ed., Chapter 6):** Ehsani's book delves into the detailed control algorithms for SRMs, discussing how the switching angles and current profiles are managed to achieve specific operating points.

### 5. Advantages and Disadvantages of the Half-Bridge Converter for SRMs

**Advantages:**

*   **Simplicity:** It's the most basic and cost-effective converter topology.
*   **Fewer Components:** Requires only two active switches and two diodes per phase.
*   **Basic Control Implementation:** Relatively straightforward to implement basic switching logic.

**Disadvantages:**

*   **Limited Current Control Capability:** While PWM can control current, the freewheeling path through diodes can lead to less precise current control and higher switching losses compared to more advanced topologies.
*   **Reverse Current:** In some de-energization strategies, the current might flow in the reverse direction through the switches or diodes, which needs careful consideration.
*   **Torque Ripple:** Achieving smooth torque with a simple half-bridge converter and basic control can be challenging, leading to higher torque ripple.
*   **Limited Regenerative Braking:** The basic half-bridge is not inherently designed for efficient regenerative braking.

**Reference (Ehsani et al., 3rd Ed., Chapter 6):** This textbook discusses the limitations of simpler converter topologies like the half-bridge, particularly concerning current control accuracy and efficiency. They often advocate for more complex converters for higher performance.

### 6. Practical Considerations in EV Applications

**Key Concepts:**

*   **Component Selection:** Choosing appropriate switches (MOSFETs vs. IGBTs) based on voltage, current, and switching frequency requirements. Diodes must also be rated correctly.
*   **Heat Dissipation:** Converters generate heat due to switching and conduction losses. Effective thermal management is crucial for reliability.
*   **EMI/EMC:** The high-frequency switching can generate electromagnetic interference (EMI), requiring proper filtering and shielding.
*   **Integration with Battery Management System (BMS):** The converter's operation needs to be coordinated with the BMS to ensure safe voltage and current limits are respected.

**Relevance to HEVs/EVs (CO1, CO2, CO4):** The converter is a critical part of the electric vehicle's powertrain architecture (CO1). Its efficiency directly impacts the vehicle's range, which is linked to battery management (CO2). Selecting the correct converter components and ensuring their reliable operation is vital for power transmission (CO4).

### Summary and Key Points to Remember

*   The classical half-bridge converter is a fundamental topology for driving SRM phases.
*   It uses two switches (S1, S2) and two diodes (D1, D2) to control the voltage applied to the SRM winding.
*   Operation involves energizing a phase by connecting it to the DC bus and de-energizing it by switching off the energizing transistor.
*   Rotor position sensing is essential for timing the switching events correctly.
*   Current control is typically achieved using PWM on the energizing switch.
*   While simple and cost-effective, the half-bridge has limitations in current control precision and regenerative braking capability.
*   For improved performance, more complex converter topologies (e.g., four-quadrant converters) are often used for SRMs in EVs.

---

## Practice Questions and Answers

**Question 1:** What are the primary components of a classical half-bridge converter used for an SRM phase?

**Answer:** The primary components are two power switches (e.g., MOSFETs or IGBTs) and two freewheeling diodes.

**Question 2:** Explain the function of the freewheeling diodes in an SRM drive using a half-bridge converter.

**Answer:** The freewheeling diodes provide a path for the current to flow when the main switches are turned off. This allows the magnetic flux in the winding to decay safely, preventing excessive voltage spikes and dissipating the stored inductive energy.

**Question 3:** What is the main advantage of using a half-bridge converter for an SRM phase?

**Answer:** The main advantage is its simplicity and cost-effectiveness due to the minimal number of components required.

**Question 4:** Which component is crucial for determining when to turn the switches ON and OFF in an SRM drive to produce torque?
    a) Voltage source
    b) Current sensor
    c) Rotor position sensor
    d) DC bus capacitor

**Answer:** c) Rotor position sensor

**Question 5:** Briefly describe how current is controlled in an SRM phase using a half-bridge converter.

**Answer:** Current is typically controlled using Pulse-Width Modulation (PWM) on the energizing switch. By rapidly switching the switch ON and OFF, the average voltage applied to the winding is controlled, which in turn regulates the current.

**Question 6:** What is a significant limitation of the classical half-bridge converter regarding regenerative braking in SRMs?

**Answer:** The basic half-bridge converter topology is not inherently designed for efficient regenerative braking. It primarily handles motoring operation. More advanced converter topologies are needed to facilitate efficient energy return to the battery during braking.

---

This concludes the study notes for the SRM drive converter – classical half-bridge converter. Ensure you review the referenced textbook chapters for a deeper understanding of the concepts and their mathematical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
