---
title: "Simulation of any Power Electronic circuit using a SPICE based software such as LTSpice, ORCAD, PSpice, and Proteus"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 1"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36130"
status: "completed"
scrapedAt: "2026-05-23T16:17:59.308Z"
---
# Power Electronics and Drives Lab - Module 1: Simulation of Power Electronic Circuits

## Topic: Simulation of any Power Electronic circuit using a SPICE based software such as LTSpice, ORCAD, PSpice, and Proteus

---

### **1. Introduction to Power Electronic Circuit Simulation**

Power electronic circuits are essential for controlling and converting electrical power. Due to the high switching frequencies, voltage/current levels, and potential complexity of these circuits, simulation plays a crucial role in their design, analysis, and verification before physical implementation. SPICE (Simulation Program with Integrated Circuit Emphasis) based software is the industry standard for simulating analog and mixed-signal circuits, including power electronics.

#### **1.1. Why Simulate Power Electronic Circuits?**

*   **Design Verification:** Confirm circuit functionality, component selection, and control strategies.
*   **Performance Analysis:** Evaluate parameters like efficiency, output voltage/current waveforms, harmonic distortion, switching losses, etc.
*   **Troubleshooting:** Identify potential issues or design flaws early in the development cycle.
*   **Cost Reduction:** Minimize the need for expensive prototypes and testing.
*   **Safety:** Simulate under various operating conditions, including fault conditions, without risk to personnel or equipment.
*   **Understanding Complex Behavior:** Visualize and analyze transient and steady-state responses of switching circuits.

#### **1.2. Common SPICE-Based Software for Power Electronics**

*   **LTSpice:** Free, powerful, and widely used for analog and switching circuit simulation. Excellent for power electronics due to its efficient algorithms and extensive library of power components. (Highly Recommended for this Lab)
*   **PSpice (Cadence):** A professional and comprehensive circuit simulator, often integrated into larger design flows. Offers advanced features and extensive component libraries.
*   **ORCAD (Cadence):** A suite of electronic design automation software that includes PSpice for simulation.
*   **Proteus (Labcenter Electronics):** A popular choice for microcontroller-based systems and embedded systems, but also offers strong SPICE simulation capabilities, particularly with its graphical interface for schematic capture and PCB design.

#### **1.3. Key Concepts in SPICE Simulation**

*   **Schematic Capture:** Drawing the circuit diagram using graphical symbols for components and connections.
*   **Component Models:** SPICE uses mathematical models to represent the behavior of electronic components (resistors, capacitors, inductors, diodes, transistors, MOSFETs, IGBTs, etc.). Accurate models are crucial for realistic simulation results.
*   **Simulation Types:**
    *   **Operating Point (OP):** Calculates the DC steady-state conditions of the circuit.
    *   **DC Sweep:** Varies a DC source over a range and observes the circuit's response.
    *   **AC Sweep (Frequency Domain):** Analyzes the circuit's response to AC signals across a range of frequencies.
    *   **Transient Analysis:** Simulates the circuit's behavior over time, showing how voltages and currents change. This is the most common type for power electronics.
*   **Analysis Commands/Directives:** Instructions given to the simulator to perform specific analyses (e.g., `.tran`, `.ac`, `.op`).
*   **Probes/Cursors:** Tools to measure voltages and currents at specific points in the circuit during simulation.
*   **Waveform Viewer:** Displays the simulation results (voltages, currents, power) as graphs.

---

### **2. General Steps for Simulating a Power Electronic Circuit**

The following steps outline the general process applicable to most SPICE-based software. Specific menu commands might vary slightly.

1.  **Create a New Project/Schematic:** Start a new file for your circuit design.
2.  **Place Components:** Select and place the required components (sources, switches, passive components, active components) from the software's library.
3.  **Wire Components:** Connect the components using wires according to the circuit topology.
4.  **Define Component Values and Models:**
    *   Assign realistic values to passive components (R, L, C).
    *   Select appropriate models for active components (diodes, transistors, MOSFETs, IGBTs). For power electronics, specific power device models are often available or need to be created.
    *   Define the characteristics of voltage and current sources (DC, AC, pulsed, sinusoidal).
5.  **Add Control Signals/Sources:** For switching circuits, you'll need pulse generators or other sources to drive the switching devices (e.g., gate drivers).
6.  **Place Probes:** Add voltage and current probes to monitor the parameters of interest.
7.  **Define Simulation Parameters (Analysis Directives):**
    *   Specify the type of analysis (e.g., Transient analysis).
    *   Set the simulation stop time (for transient analysis).
    *   Define the time step or maximum timestep for accurate results.
8.  **Run the Simulation:** Execute the simulation.
9.  **Analyze Results:** View and interpret the generated waveforms in the waveform viewer. Use cursors to measure specific values.
10. **Modify and Re-simulate:** Based on the results, adjust component values, control signals, or topology and re-simulate until the desired performance is achieved.

---

### **3. Simulating a Basic Buck Converter (Step-Down DC-DC Converter)**

This is a fundamental power electronic circuit and a great starting point for learning simulation.

#### **3.1. Circuit Description**

A buck converter steps down a DC voltage to a lower DC voltage using a switch (typically a MOSFET), a diode, an inductor, and a capacitor. The switch is controlled by a Pulse Width Modulation (PWM) signal.

#### **3.2. Circuit Diagram (Conceptual)**

```
      Vin --+----SW---- L ----+---- Cout ---- GND
            |         |       |
            D---------+------- R_load
            |
           GND
```

*   **Vin:** Input DC Voltage Source.
*   **SW:** Switching Element (MOSFET).
*   **L:** Inductor.
*   **D:** Freewheeling Diode.
*   **Cout:** Output Capacitor.
*   **R_load:** Load Resistor.

#### **3.3. Simulation Steps (Example using LTSpice)**

1.  **Create a New Schematic:** `File -> New Schematic`.
2.  **Place Components:**
    *   **Voltage Source (Vdc):** `Component -> Source -> Vdc`. Place and set its value (e.g., `Vin=12V`).
    *   **MOSFET:** `Component -> Transistor -> NMOS`. Choose a suitable model if available, or use a generic one and specify parameters.
    *   **Diode:** `Component -> Diode -> D1N4007` (or a fast-switching diode like a Schottky diode for better results).
    *   **Inductor:** `Component -> Inductor -> L`. Set its value (e.g., `L=100uH`).
    *   **Capacitor:** `Component -> Capacitor -> C`. Set its value (e.g., `C=470uF`).
    *   **Load Resistor:** `Component -> Resistor -> R`. Set its value (e.g., `Rload=10ohm`).
    *   **PULSE Source (for Gate Drive):** `Component -> Source -> Vpulse`. Configure its parameters:
        *   `V_HIGH`: Gate-ON voltage (e.g., 5V or 10V).
        *   `V_LOW`: Gate-OFF voltage (e.g., 0V).
        *   `T_DELAY`: Delay before the first pulse (e.g., `1u`).
        *   `T_RISE`: Rise time of the pulse (e.g., `1n`).
        *   `T_FALL`: Fall time of the pulse (e.g., `1n`).
        *   `T_ON`: Pulse width. This determines the Duty Cycle (`D = T_ON / T_period`). Set `T_ON` for your desired output voltage (e.g., for Vout = Vin/2, D=0.5). If `Vin=12V`, `Vout` should be around `6V`. So, `T_ON` could be `5u` and `T_period` could be `10u`.
        *   `T_PERIOD`: Switching period (e.g., `10u` for a 100kHz switching frequency).
3.  **Wire Components:** Connect the components using the "Add wire" tool. Connect the gate of the MOSFET to the output of the `Vpulse` source. Connect the source of the MOSFET to ground. Connect the anode of the diode to the drain of the MOSFET and the output of the inductor. Connect the cathode of the diode to ground. Connect the input voltage `Vin` to the switch and the inductor. Connect the inductor to the output capacitor and load. Connect the capacitor and load to ground.
4.  **Add Ground:** Ensure all ground connections are present (`Component -> Source -> Gnd_e`).
5.  **Set Up Simulation:**
    *   Go to `Simulate -> Simulation Settings`.
    *   Select "Transient".
    *   Set the "Stop time" to a value that shows several switching cycles (e.g., `100u`).
    *   Consider setting a "Maximum Timestep" for accuracy if needed (e.g., `10n`).
    *   Click "OK".
6.  **Run Simulation:** Click the "Run" button (the running man icon).
7.  **Analyze Waveforms:**
    *   The waveform viewer will open.
    *   Click on nodes to plot voltages. Click on component terminals (e.g., inductor, MOSFET drain) to plot currents.
    *   **Observe:**
        *   `Vin` waveform (DC).
        *   Voltage across the MOSFET (Vds). It should switch between `Vin` and `0`.
        *   Current through the inductor (Id). It should ramp up and down.
        *   Voltage across the diode (Vd). It should be near zero when conducting and reverse biased when the MOSFET is on.
        *   Output voltage (Vout) across the capacitor/load. It should be a DC voltage with some ripple.
        *   Output current (Iload).
    *   **Calculate Duty Cycle:** `D = T_ON / T_PERIOD`.
    *   **Verify Output Voltage:** `Vout ≈ D * Vin` (ignoring losses).
    *   **Measure Output Voltage Ripple:** Use cursors to find the peak-to-peak ripple.
    *   **Observe Switching Losses:** The voltage and current overlap during switching transitions on the MOSFET and diode.

#### **3.4. Important Points to Remember for Buck Converter Simulation:**

*   **MOSFET Gate Drive:** Ensure the gate drive signal has appropriate voltage levels, rise/fall times, and duty cycle.
*   **Switching Frequency:** A higher switching frequency generally leads to smaller passive components but higher switching losses.
*   **Inductor Value:** Affects the inductor current ripple. A smaller inductor means higher current ripple.
*   **Capacitor Value:** Affects the output voltage ripple. A larger capacitor means lower voltage ripple.
*   **Diode Selection:** For higher frequencies, use a fast-switching diode (Schottky) to minimize reverse recovery losses.
*   **Load:** Simulate with different load resistances to observe the effect on efficiency and regulation.
*   **Parasitics:** For advanced simulations, consider parasitic inductance and resistance in components.

---

### **4. Simulating a Basic Boost Converter (Step-Up DC-DC Converter)**

A boost converter increases a DC voltage to a higher DC voltage.

#### **4.1. Circuit Description**

A boost converter uses a switch (MOSFET), an inductor, a diode, and a capacitor. The inductor is charged when the switch is ON and discharges into the output capacitor and load when the switch is OFF.

#### **4.2. Circuit Diagram (Conceptual)**

```
      Vin --+----SW---- D ----+---- Cout ---- GND
            |         |       |
            L---------+------- R_load
            |
           GND
```

*   **Vin:** Input DC Voltage Source.
*   **SW:** Switching Element (MOSFET).
*   **L:** Inductor.
*   **D:** Diode.
*   **Cout:** Output Capacitor.
*   **R_load:** Load Resistor.

#### **4.3. Simulation Steps (Example using LTSpice)**

1.  **Create a New Schematic:** Similar to the buck converter.
2.  **Place Components:**
    *   `Vin`, `NMOS`, `D1N4007` (or Schottky), `L`, `C`, `Rload` as before.
    *   `Vpulse` for gate drive.
3.  **Wire Components:**
    *   Connect `Vin` to one terminal of the inductor `L`.
    *   Connect the other terminal of `L` to the drain of the `NMOS` and the anode of the diode `D`.
    *   Connect the source of the `NMOS` to ground.
    *   Connect the cathode of the diode `D` to the positive terminal of the `Cout` and one side of `Rload`.
    *   Connect the other side of `Cout` and `Rload` to ground.
    *   Connect the gate of the `NMOS` to the `Vpulse` output.
4.  **Set Up Simulation:** Transient analysis, similar to the buck converter.
5.  **Run Simulation:**
6.  **Analyze Waveforms:**
    *   **Observe:**
        *   `Vin` waveform.
        *   Voltage across the MOSFET (Vds).
        *   Current through the inductor (Id). It should ramp up when the switch is ON and ramp down when the switch is OFF.
        *   Voltage across the diode (Vd).
        *   Output voltage (Vout) across the capacitor/load. It should be a DC voltage higher than `Vin` with ripple.
        *   Output current (Iload).
    *   **Verify Output Voltage:** `Vout ≈ Vin / (1 - D)` (ignoring losses).
        *   For example, if `Vin=12V` and `D=0.5`, `Vout ≈ 12 / (1 - 0.5) = 24V`.

#### **4.4. Important Points to Remember for Boost Converter Simulation:**

*   **Inductor Charging/Discharging:** The inductor current builds up when the switch is ON and discharges into the output when the switch is OFF.
*   **Continuous Conduction Mode (CCM):** In CCM, the inductor current never reaches zero during the switching cycle. This is the typical operating mode.
*   **Discontinuous Conduction Mode (DCM):** If the inductor current drops to zero before the end of the switching cycle, the converter operates in DCM. The output voltage equation is different in DCM.
*   **MOSFET and Diode Stress:** The voltage stress across the MOSFET and diode is `Vout`.

---

### **5. Simulating a Single-Phase Half-Wave Rectifier**

This is a simple AC to DC conversion circuit.

#### **5.1. Circuit Description**

A half-wave rectifier uses a single diode to conduct current during only half of the AC input cycle, converting AC voltage to pulsating DC voltage.

#### **5.2. Circuit Diagram (Conceptual)**

```
      VAC ---+---- D ----+---- L ----+---- Cout ---- GND
             |         |       |
             R ---+----+------- R_load
             |    |
            GND  GND
```
*(Note: Often simulated with a series RL load or Rload for simplicity)*

```
      VAC ---+---- D ----+---- R_load ---- GND
             |         |
            GND       GND
```
*(Simpler R load circuit)*

*   **VAC:** AC Voltage Source (Sinusoidal).
*   **D:** Diode.
*   **R_load:** Load Resistor.
*   **(Optional) L:** Inductor.
*   **(Optional) Cout:** Capacitor.

#### **5.3. Simulation Steps (Example using LTSpice)**

1.  **Create a New Schematic.**
2.  **Place Components:**
    *   **AC Voltage Source (Vac):** `Component -> Source -> Vac`. Configure its parameters:
        *   `V_AC` (amplitude, e.g., `12V` for RMS 12V, so `amplitude = 12 * sqrt(2) ≈ 16.97V`).
        *   `FREQUENCY`: (e.g., `50Hz` or `60Hz`).
    *   **Diode:** `Component -> Diode -> D1N4007`.
    *   **Load Resistor:** `Component -> Resistor -> R`. Set its value (e.g., `Rload=100ohm`).
3.  **Wire Components:** Connect the AC source to the anode of the diode. Connect the cathode of the diode to the load resistor. Connect the other end of the load resistor to ground. Connect the AC source's negative terminal to ground.
4.  **Set Up Simulation:**
    *   Transient analysis.
    *   Set "Stop time" to show several cycles (e.g., `40ms` for 50Hz to show 2 cycles).
    *   Set "Maximum Timestep" for accuracy (e.g., `10u`).
5.  **Run Simulation:**
6.  **Analyze Waveforms:**
    *   **Observe:**
        *   `VAC` waveform (sinusoidal).
        *   Voltage across the diode (Vd). It should be positive when conducting, negative when reverse-biased.
        *   Current through the diode (Id). It should be positive only during the positive half-cycles of `VAC`.
        *   Output voltage (Vout) across the load resistor. It should be the positive half-cycles of `VAC`.
        *   Output current (Iload).

#### **5.4. Important Points to Remember for Half-Wave Rectifier Simulation:**

*   **Forward Conduction:** The diode conducts only when the anode voltage is higher than the cathode voltage by the forward voltage drop (Vf).
*   **Reverse Blocking:** The diode blocks current during the negative half-cycle.
*   **Output Waveform:** The output is pulsating DC with zero current during the negative half-cycles.
*   **RMS Output Voltage:** For a sinusoidal input `V_in = V_m * sin(wt)`, the RMS output voltage is `V_out_rms = V_m / 2`.
*   **Half-Wave Rectification:** Only half of the AC input is utilized.

---

### **6. Simulating a Single-Phase Full-Wave Center-Tapped Rectifier**

This configuration uses two diodes and a center-tapped transformer.

#### **6.1. Circuit Description**

A center-tapped rectifier uses two diodes connected to a center-tapped transformer secondary winding. The transformer's center tap serves as the neutral point. Each diode conducts during half of the AC cycle, with the output polarity being the same for both halves.

#### **6.2. Circuit Diagram (Conceptual)**

```
      +------------------+
      |                  |
     VAC1 -----+---- D1 ----+---- L ----+---- Cout ---- GND
      |       |         |       |
      |-------+---------+-------+------- R_load
      |       |         |       |
     VAC2 -----+---- D2 ----+----
      |                  |
      +------------------+
```

*   **VAC1, VAC2:** AC voltages from the two halves of the center-tapped transformer secondary. They are 180 degrees out of phase.
*   **D1, D2:** Diodes.
*   **L:** Inductor (optional, for smoothing).
*   **Cout:** Capacitor (optional, for smoothing).
*   **R_load:** Load Resistor.

#### **6.3. Simulation Steps (Example using LTSpice)**

1.  **Create a New Schematic.**
2.  **Place Components:**
    *   **Two AC Voltage Sources (Vac):** `Component -> Source -> Vac`.
        *   Configure `VAC1`: e.g., `V_AC = 12V * sqrt(2)`, `FREQUENCY = 50Hz`.
        *   Configure `VAC2`: e.g., `V_AC = 12V * sqrt(2)`, `FREQUENCY = 50Hz`. To simulate the center tap correctly, `VAC2` should be defined to be negative with respect to `VAC1`'s positive half-cycle. A simpler way is to use a transformer model if available. If using individual sources, ensure their phase relationship is correct or use a transformer component.
        *   *Alternative:* Use a transformer component. Create a transformer by placing `K` (mutual inductor) and two inductors. Define coupling.
    *   **Two Diodes:** `Component -> Diode -> D1N4007`.
    *   **Load Resistor:** `Component -> Resistor -> R`. Set value.
    *   **(Optional) L and Cout.**
3.  **Wire Components:**
    *   Connect `VAC1` to the anode of `D1`.
    *   Connect the cathode of `D1` to the load resistor and the positive terminal of `Cout`.
    *   Connect `VAC2` to the anode of `D2`.
    *   Connect the cathode of `D2` to the load resistor and the positive terminal of `Cout`.
    *   Connect the common point of `VAC1` and `VAC2` (the transformer's center tap) to ground.
    *   Connect the other end of `R_load` and `Cout` to ground.
4.  **Set Up Simulation:** Transient analysis, suitable stop time and timestep.
5.  **Run Simulation:**
6.  **Analyze Waveforms:**
    *   **Observe:**
        *   `VAC1`, `VAC2` waveforms.
        *   Diode currents (`Id1`, `Id2`). Each conducts for half a cycle.
        *   Output voltage (`Vout`). It will be pulsating DC, with positive pulses occurring during both positive half-cycles of `VAC1` and `VAC2` (because of the center tap connection).
        *   Output current (`Iload`).

#### **6.4. Important Points to Remember for Center-Tapped Rectifier Simulation:**

*   **Two-Diode Operation:** Two diodes are used, each conducting for one half-cycle.
*   **Transformer Requirement:** Requires a center-tapped transformer, which can be bulky and expensive.
*   **PIV:** The Peak Inverse Voltage (PIV) rating required for each diode is `V_m` (peak of the voltage across one half of the secondary winding).
*   **Output Ripple:** The output ripple frequency is twice the input frequency, leading to easier filtering compared to half-wave rectification.
*   **RMS Output Voltage:** For a sinusoidal input `V_m` from each half-secondary, `V_out_rms = V_m / sqrt(2)`.

---

### **7. Connecting Simulation to Course Outcomes (COs)**

*   **CO1 (Device Characteristics & Drivers):** Simulating MOSFETs, diodes, IGBTs allows observation of their voltage/current characteristics, switching behavior, and losses. You can model gate drivers by simulating pulse generators with specific rise/fall times and voltage levels. (K5 - Analyzing operation)
*   **CO2 (Rectifiers & AC Voltage Controllers):** This module directly covers the simulation of phase-controlled rectifiers (like the ones simulated here). You can extend this to simulating AC voltage controllers (e.g., using TRIACs or SCRs) to control AC power. (K4 - Analyzing operation)
*   **CO3 (DC-AC Inverters):** While not directly covered in the basic examples, you can extend these simulations to half-bridge or full-bridge inverters by using multiple switches and PWM control strategies. This directly relates to analyzing inverter operation. (K3 - Understanding features)
*   **CO4 (Efficiency, Reliability, Waveforms, Utility Interface):** Simulation allows direct measurement of switching losses, conduction losses, and overall efficiency. Observing ripple in output waveforms and input current distortion relates to waveform quality and utility interface. Component stress analysis (e.g., voltage/current ratings) can hint at reliability. (K3 - Understanding need)
*   **CO5 (Adjustable Speed Drives):** While not simulating a full motor drive, the DC-DC converters (Buck, Boost) simulated are fundamental building blocks for motor drive power supplies or intermediate stages. Understanding their voltage/current control through PWM is essential for drive control. (K4 - Analyzing basic drive schemes indirectly)

---

### **8. Practice Questions and Answers**

**Question 1:** In the LTSpice simulation of a buck converter with `Vin = 12V`, `D = 0.5`, what is the expected ideal output voltage (`Vout`)?
    *   **Answer:** `Vout = D * Vin = 0.5 * 12V = 6V`.

**Question 2:** When simulating a boost converter with `Vin = 12V` and a duty cycle `D = 0.4`, what is the ideal output voltage (`Vout`)?
    *   **Answer:** `Vout = Vin / (1 - D) = 12V / (1 - 0.4) = 12V / 0.6 = 20V`.

**Question 3:** In a half-wave rectifier simulation with `Vin = 10V RMS`, what is the approximate RMS output voltage if a load resistor is connected?
    *   **Answer:** The peak input voltage is `V_m = 10V * sqrt(2) ≈ 14.14V`. The RMS output voltage is `V_out_rms = V_m / 2 ≈ 14.14V / 2 ≈ 7.07V`.

**Question 4:** What is the primary advantage of a full-wave center-tapped rectifier over a half-wave rectifier in terms of output quality?
    *   **Answer:** The output frequency of the ripple is twice the input frequency, making it easier to filter and resulting in a smoother DC output compared to the half-wave rectifier.

**Question 5:** When simulating a MOSFET in a power converter, what parameters of the `Vpulse` source are most critical for controlling the output voltage of a DC-DC converter?
    *   **Answer:** The **duty cycle** (determined by `T_ON` and `T_PERIOD`) and the **switching frequency** (determined by `T_PERIOD`). The `V_HIGH` and `V_LOW` values are also important for ensuring the MOSFET turns on and off properly.

---

### **9. Important Points to Remember**

*   **SPICE Models:** Use accurate SPICE models for power semiconductor devices. Generic models might not capture important characteristics like switching speed, conduction losses, and reverse recovery.
*   **Simulation Accuracy vs. Time:** Smaller timesteps and longer simulation times increase accuracy but also computation time. Find a balance.
*   **Component Selection:** Choose passive component values (L, C) and switching frequencies that are realistic for practical power electronic designs.
*   **Understanding Limitations:** SPICE simulations are models. Real-world components have parasitic effects, tolerances, and temperature dependencies that might not be fully captured.
*   **Validation:** Always compare simulation results with theoretical calculations and, eventually, experimental results.
*   **Practice Makes Perfect:** The more you simulate, the more comfortable you'll become with the software and the nuances of power electronic circuit behavior.
*   **Textbook References:**
    *   **Umanand (2009):** Provides good fundamentals on converter operation and component characteristics, which you can map to simulation parameters.
    *   **Agrawal (2006):** Offers detailed design procedures and analysis techniques that can guide your simulation setup and interpretation.
    *   **Mohan, Undeland, Robbins (2022):** An excellent resource for understanding the fundamental principles and applications of power electronics, directly applicable to setting up and verifying simulations.
    *   **Hart (2010):** Focuses on practical aspects and applications, useful for selecting realistic component values and load conditions for simulation.
    *   **Krein (2017):** Provides a strong theoretical foundation and discusses modeling aspects, which are crucial for accurate SPICE simulations.
    *   **Rashid (2014):** Comprehensive coverage of devices, circuits, and applications, offering insights into various circuit topologies you might simulate.
    *   **Mohan & Raju (2023):** Specifically targets simulations and lab implementations, making it highly relevant for this module.
    *   **Xiao (2021):** "Step by Step" approach is invaluable for learning the practical aspects of design, modeling, simulation, and control.

---

This comprehensive set of notes provides a strong foundation for Module 1 of your Power Electronics and Drives Lab, focusing on the essential skills of simulating power electronic circuits using SPICE-based software. Remember to explore the specific features of the software provided in your lab.
