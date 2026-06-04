---
title: "Generators and speed control used in wind power energy: Fixed speed with capacitor bank"
subject: "RENEWABLE ENERGY SYSTEMS"
module: "Module 3: Wind Energy: Sources and potentials, of Wind Intensity, Topography"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff61a"
status: "completed"
scrapedAt: "2026-05-23T18:48:32.842Z"
---
# RENEWABLE ENERGY SYSTEMS

## Module 3: Wind Energy: Sources and Potentials, Wind Intensity, Topography

### Topic: Generators and Speed Control Used in Wind Power Energy: Fixed Speed with Capacitor Bank

---

### 1. Introduction to Wind Turbine Generators and Speed Control

Wind turbines convert the kinetic energy of wind into mechanical energy, which is then converted into electrical energy by a generator. The efficiency of this conversion depends heavily on the generator technology and how its speed is controlled. For fixed-speed wind turbines, specific approaches are used to manage the generator's operation, particularly concerning its electrical characteristics and interaction with the grid.

**Key Concepts:**

*   **Wind Turbine:** A device that converts wind energy into mechanical rotational energy, which then drives a generator to produce electricity.
*   **Generator:** An electrical machine that converts mechanical energy into electrical energy.
*   **Speed Control:** The process of regulating the rotational speed of the generator to optimize power extraction or meet grid requirements.
*   **Fixed Speed Operation:** A mode of operation where the generator's rotational speed is maintained at a relatively constant value, often dictated by the grid frequency.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding the need for efficient generators in renewable energy systems like wind power.
*   **CO2 (K2):** Outlining the technologies related to wind energy systems, specifically focusing on generators and their control mechanisms in simpler configurations.

---

### 2. Generators Used in Fixed-Speed Wind Turbines

Historically, fixed-speed wind turbines predominantly used **Squirrel Cage Induction Generators (SCIGs)**. These generators are robust, relatively simple, and cost-effective, making them suitable for early wind turbine designs.

**2.1. Squirrel Cage Induction Generator (SCIG)**

*   **Working Principle:** SCIGs operate on the principle of electromagnetic induction. When the stator windings are connected to an AC supply, a rotating magnetic field is produced. This field induces currents in the rotor bars. The interaction between the magnetic field and the induced rotor currents produces torque, causing the rotor to rotate.
*   **Asynchronous Operation:** The rotor always rotates at a speed slightly less than the synchronous speed of the magnetic field. This speed difference, known as "slip," is essential for inducing current in the rotor and generating torque.
*   **Fixed Speed Characteristic:** In a typical grid-connected SCIG, the stator is directly connected to the grid. The grid dictates the frequency, and therefore the synchronous speed of the rotating magnetic field. The rotor speed will naturally settle at a speed just below this synchronous speed, resulting in a nearly fixed operating speed for the wind turbine.
*   **Advantages of SCIG:**
    *   Simple construction and robust design.
    *   Lower cost compared to synchronous generators.
    *   Requires minimal maintenance.
    *   Can directly connect to the grid without complex power electronic converters for basic operation.
*   **Disadvantages of SCIG:**
    *   **Reactive Power Consumption:** SCIGs inherently consume reactive power from the grid to establish their magnetic field. This can negatively impact the power factor of the grid.
    *   **Limited Speed Flexibility:** Operates at a fixed speed, which limits its ability to adapt to varying wind conditions and maximize energy capture (especially at lower wind speeds).
    *   **Starting Current:** SCIGs draw a large starting current when connected directly to the grid, which can cause voltage dips.

**Textbook References:**

*   **Muhannad H. R., Power Electronics: Circuits, Devices and Applications (4/e, 2017):** Discusses induction motor principles and their application as generators, including their characteristics and limitations.
*   **Ahmed F Zobaa and Ramesh Bansal, Handbook of renewable energy technology (1/e, 2011):** Provides an overview of various generator types used in wind turbines, including detailed descriptions of induction generators.

**Alignment with Course Outcomes:**

*   **CO2 (K2):** Explains the fundamental technology of generators used in wind energy systems.

---

### 3. Speed Control in Fixed-Speed Wind Turbines: The Role of the Capacitor Bank

Since fixed-speed wind turbines, particularly those using SCIGs, cannot inherently adjust their speed to match wind fluctuations, their operation is optimized through auxiliary components. One such component is the **capacitor bank**.

**3.1. Capacitor Bank for Fixed-Speed Operation**

*   **Purpose:** Capacitor banks are primarily used to improve the **power factor** of the wind turbine system and, in some cases, to help with **soft starting**.
*   **Power Factor Correction:**
    *   **Problem:** As mentioned, SCIGs are inductive loads and consume reactive power. This leads to a lagging power factor, which can cause voltage drops and increased losses in the transmission network.
    *   **Solution:** Capacitor banks provide leading reactive power. By connecting a suitably sized capacitor bank in parallel with the generator, the net reactive power consumed by the system can be reduced, bringing the overall power factor closer to unity.
    *   **How it Works:** The capacitor bank's capacitance creates an electric field that stores energy. This stored energy is released as capacitive reactive power, which compensates for the inductive reactive power demanded by the generator.
*   **Soft Starting:**
    *   **Problem:** Direct connection of SCIGs to the grid results in high inrush currents during startup.
    *   **Solution:** In some older fixed-speed designs, capacitors were sometimes used in conjunction with starting resistors or auto-transformers to limit the initial surge of current. However, the primary role of capacitor banks in modern fixed-speed systems is power factor correction.
*   **Fixed Speed and Power Factor:** Even though the speed is fixed, the wind's intensity varies. This variation affects the generator's slip and thus its reactive power demand. Capacitor banks are often sized to provide optimal power factor correction at a *specific operating point* or across a *range* of typical wind speeds for the given turbine size.

**3.2. Sizing and Placement of Capacitor Banks**

*   **Sizing:** The size of the capacitor bank is critical.
    *   **Under-sizing:** Will not adequately improve the power factor.
    *   **Over-sizing:** Can lead to a leading power factor, which can also be detrimental to the grid and cause overvoltage.
    *   Capacitor banks are typically sized to achieve a power factor between 0.95 and 1.0 at the intended operating point.
*   **Placement:** Capacitor banks are usually connected in parallel with the generator's output terminals, close to the generator or at the point of common coupling with the grid.
*   **Switching:** For larger wind farms, capacitor banks might be switchable to adjust reactive power output based on real-time grid conditions and the collective output of the turbines. However, in a truly "fixed-speed" context, they might be permanently connected or switched less frequently.

**Textbook References:**

*   **Muhannad H. R., Power Electronics: Circuits, Devices and Applications (4/e, 2017):** Chapter on power factor correction and compensation techniques for AC machines.
*   **Garg H. P. and Prakash S., Solar Energy: Fundamental and Application (2/e, 2015):** While focused on solar, this book might offer general principles of electrical system compensation that are applicable.
*   **Ali Keyhani, Design of Smart Power Grid Renewable Energy Systems (1/e, 2016):** Discusses grid integration challenges and solutions, including reactive power compensation in renewable energy systems.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Explains how components like capacitor banks are crucial for the efficient and stable integration of wind energy into the power system.
*   **CO3 (K3):** Illustrates a basic method of integrating a renewable energy system (wind) with the grid, highlighting the role of passive components for grid compatibility.

---

### 4. Advantages and Disadvantages of Fixed Speed with Capacitor Bank Configuration

**4.1. Advantages**

*   **Simplicity and Low Cost:** The SCIG and capacitor bank configuration is relatively simple and less expensive than variable speed systems requiring complex power electronics.
*   **Robustness:** SCIGs are very robust and reliable.
*   **Direct Grid Connection:** Minimal power electronics are needed for basic grid connection, reducing system complexity and potential failure points.
*   **Improved Power Factor:** Capacitor banks effectively mitigate the reactive power consumption of the SCIG, leading to better grid efficiency and reduced transmission losses.

**4.2. Disadvantages**

*   **Limited Energy Capture:** Fixed speed operation prevents the turbine from operating at its optimal tip-speed ratio across varying wind speeds. This results in lower annual energy production compared to variable-speed systems.
*   **Grid Disturbances:** The direct connection means that the turbine's speed and power output are directly coupled to grid frequency. Grid voltage sags or frequency variations can significantly impact performance and potentially lead to disconnection.
*   **Starting Current Issues:** While capacitor banks help, the high starting current of SCIGs can still be a concern for grid stability if not managed properly.
*   **Noisy Operation:** Fixed-speed turbines tend to produce more audible noise due to their consistent operating speed, which is less optimized for aerodynamic efficiency.

**Textbook References:**

*   **Ahmed F Zobaa and Ramesh Bansal, Handbook of renewable energy technology (1/e, 2011):** Compares different wind turbine configurations and their pros and cons.
*   **Teodorescu R. Liserre M. Rodriguez P., Grid Converters for Photovoltaic and wind Power Systems (1/e, 2011):** Provides a context for why more advanced converter-based systems (variable speed) have become dominant due to their performance advantages.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding the trade-offs in choosing specific renewable energy technologies.
*   **CO2 (K2):** Comparing fixed-speed technologies with potential more advanced options.

---

### 5. Practice Questions and Answers

**Question 1:** What type of generator is most commonly used in fixed-speed wind turbines?
**Answer:** Squirrel Cage Induction Generator (SCIG).

**Question 2:** What is the primary purpose of a capacitor bank in a fixed-speed wind turbine system with an SCIG?
**Answer:** To improve the power factor by compensating for the reactive power consumed by the SCIG.

**Question 3:** Explain why fixed-speed wind turbines are less efficient in capturing wind energy compared to variable-speed turbines.
**Answer:** Fixed-speed turbines cannot adjust their rotational speed to maintain the optimal tip-speed ratio across varying wind conditions, leading to suboptimal aerodynamic efficiency and reduced energy capture.

**Question 4:** Briefly describe the disadvantage of SCIGs regarding reactive power consumption.
**Answer:** SCIGs are inductive loads and require significant reactive power from the grid to establish their magnetic field, leading to a lagging power factor.

**Question 5:** If a capacitor bank is oversized in a fixed-speed wind turbine system, what potential issue can arise?
**Answer:** It can lead to a leading power factor and potentially cause overvoltage on the grid.

---

### 6. Important Points to Remember

*   **SCIGs are the workhorses of older, fixed-speed wind turbine designs.**
*   **The main role of capacitor banks is power factor correction for SCIGs.**
*   **Fixed-speed systems sacrifice energy capture efficiency for simplicity and lower cost.**
*   **Reactive power compensation (via capacitor banks) is crucial for grid compatibility of SCIGs.**
*   **Understanding the limitations of fixed-speed systems highlights the benefits of modern variable-speed technologies.**

---

### 7. Relevance to Course Outcomes

This topic directly addresses:

*   **CO1 (K2):** By explaining the functional components of wind energy systems and the necessity of managing their electrical characteristics for grid integration.
*   **CO2 (K2):** By outlining the specific generator technology (SCIG) and a key control/compensation component (capacitor bank) used in early wind energy systems.
*   **CO3 (K3):** By demonstrating a basic aspect of grid integration (power factor correction) using a passive component in a renewable energy system.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
