---
title: "Single electron devices  –Coulomb blockade in a Nano capacitor, tunnel junctions, Double tunnel junction--Coulomb staircase, Single electron transistor."
subject: "NANOELECTRONICS"
module: "Module 4: Applications of Quantum mechanics and Quantum devices"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feee1"
status: "completed"
scrapedAt: "2026-05-23T18:02:06.404Z"
---
# NANOELECTRONICS: Module 4 - Applications of Quantum Mechanics and Quantum Devices

## Topic: Single Electron Devices

This module delves into the fascinating world of single electron devices, where the quantum mechanical behavior of individual electrons dictates their operation. We will explore the fundamental principles behind these devices, including Coulomb blockade, tunnel junctions, and their realization in structures like the single-electron transistor (SET).

---

### 1. Introduction to Single Electron Devices (SEDs)

*   **Motivation for SEDs:** As conventional MOSFET scaling approaches its physical limits (due to short channel effects, quantum tunneling, and power consumption), there's a growing need for novel devices that can operate with fewer electrons and consume less power. SEDs leverage quantum phenomena to achieve this.
*   **Key Principle:** The core concept behind SEDs is the ability to control and detect the movement of individual electrons. This requires overcoming thermal fluctuations and quantum mechanical tunneling barriers.
*   **Quantum Mechanical Foundation:** The behavior of electrons in SEDs is governed by quantum mechanics, specifically:
    *   **Quantization of Charge:** Charge is not continuous but exists in discrete packets (electrons).
    *   **Quantum Tunneling:** Electrons can pass through potential barriers even if they don't have enough classical energy to overcome them.
    *   **Indistinguishability of Electrons:** Electrons are identical, leading to Fermi-Dirac statistics and the Pauli exclusion principle.

**Referenced Textbooks:**
*   *Fundamentals of Modern VLSI Devices* by Taur and Ning (Chapter on scaling and future devices)
*   *Nanoelectronics and Nanosystems* by Goser, GlÖsekötter, and Dienstuhl (Chapter on quantum effects and single-electron devices)
*   *Fundamentals of nano electronics* by Hanson (Chapter on quantum transport and single-electron phenomena)

---

### 2. Coulomb Blockade in a Nano Capacitor

*   **Concept:** Coulomb blockade is a phenomenon where the addition of a single electron to a small conducting island is energetically unfavorable due to the strong electrostatic repulsion (Coulomb repulsion) from the electrons already present on the island.
*   **Nano Capacitor Structure:** A typical nano capacitor consists of:
    *   A small conducting island (often a quantum dot or a metallic nanoparticle) with capacitance $C$.
    *   Two tunnel junctions connecting the island to source and drain electrodes.
    *   A gate electrode capacitively coupled to the island.
*   **Energy Cost of Adding an Electron:** To add an electron of charge $-e$ to an island that already has $n$ electrons, the island's electrostatic energy increases by $\frac{(n+1)^2 e^2}{2C} - \frac{n^2 e^2}{2C} = \frac{(2n+1)e^2}{2C}$. This energy cost is the Coulomb energy, $E_C = \frac{e^2}{2C}$.
*   **Coulomb Blockade Condition:** For an electron to tunnel onto the island, its energy must be at least equal to the energy required to add an electron to the island. At low temperatures and low source-drain voltages ($V_{SD}$), if the Coulomb energy $E_C$ is significantly larger than the thermal energy $k_B T$, the addition of an electron is "blocked." This occurs when the source-drain voltage is not sufficient to overcome the Coulomb repulsion.
*   **Gate Voltage Influence:** The gate voltage ($V_G$) can alter the charge state of the island by electrostatically controlling the number of electrons on it. By adjusting $V_G$, we can tune the Coulomb blockade. When the gate voltage aligns the energy levels, an electron can tunnel onto the island, overcoming the blockade.

**Example:** Imagine a tiny metallic sphere. Adding the first electron is easy. Adding the second electron requires overcoming the repulsion from the first. If the sphere is very small (nanoscale), this repulsion becomes significant.

**Important Points to Remember:**
*   Coulomb blockade is essential for the operation of SEDs.
*   It arises from the electrostatic repulsion between discrete charges on a confined island.
*   Requires small capacitance ($C$) and low temperatures ($k_B T \ll E_C$).
*   Gate voltage is used to control the blockade.

**Referenced Textbooks:**
*   *Nanoelectronics and Nanosystems* by Goser, GlÖsekötter, and Dienstuhl (Chapter on Coulomb blockade)
*   *Fundamentals of nano electronics* by Hanson (Chapter on single-electron charging and Coulomb blockade)
*   *Quantum Transport Atom to Transistor* by Datta (Chapter on charging effects and Coulomb blockade)

---

### 3. Tunnel Junctions

*   **Definition:** A tunnel junction is a structure consisting of two conducting materials separated by a thin insulating barrier. Electrons can tunnel through this barrier quantum mechanically.
*   **Mechanism:** The barrier must be thin enough (typically a few nanometers) to allow significant tunneling probability. The transmission probability ($T$) of an electron through a rectangular barrier of height $V_0$ and width $d$ is approximately $T \approx e^{-2\kappa d}$, where $\kappa = \sqrt{2m(V_0 - E)}/\hbar$ (for energy $E < V_0$).
*   **Key Parameters:**
    *   **Tunneling Resistance ($R_T$):** Represents the ease with which electrons tunnel. It's inversely related to the transmission probability. For metallic tunnel junctions, $R_T$ can range from k$\Omega$ to M$\Omega$.
    *   **Tunneling Capacitance ($C_T$):** The capacitance of the insulator layer. This is crucial for determining the Coulomb energy $E_C = e^2 / (2(C_{island} + C_T))$.
*   **Role in SEDs:** Tunnel junctions are used to isolate the conducting island from the source and drain electrodes, allowing for controlled electron transfer. They also contribute to the overall capacitance of the island.

**Example:** Metal-Insulator-Metal (MIM) sandwich structures. The insulator can be SiO$_2$, Al$_2$O$_3$, etc.

**Important Points to Remember:**
*   Tunnel junctions are the "gates" for electron passage in SEDs.
*   Barrier thickness and height are critical for tunneling probability.
*   Low tunneling resistance is desired for efficient electron transfer.
*   Tunneling capacitance influences the charging energy.

**Referenced Textbooks:**
*   *Fundamentals of Modern VLSI Devices* by Taur and Ning (Chapter on quantum tunneling)
*   *Nanoelectronics and Nanosystems* by Goser, GlÖsekötter, and Dienstuhl (Section on tunneling phenomena)
*   *Nanotechnology for microelectronics and optoelectronics* by Duart, Palma, and Rueda (Chapter on quantum tunneling in nanostructures)
*   *Quantum Transport Atom to Transistor* by Datta (Chapter on tunneling transport)

---

### 4. Double Tunnel Junction - Coulomb Staircase

*   **Structure:** A double tunnel junction (also known as a Cooper-pair box or a quantum dot with two tunnel barriers) consists of a conducting island connected to a source and drain electrode via two successive tunnel junctions.
*   **Coulomb Staircase Phenomenon:** When a voltage is applied across the double tunnel junction, and the Coulomb blockade is active, electrons do not flow continuously. Instead, they tunnel one by one onto the island as the source-drain voltage is increased.
*   **Energy Levels and Tunneling:**
    *   The island can accommodate a discrete number of electrons ($n$).
    *   Each addition of an electron increases the island's charge and potential, raising its energy level due to Coulomb repulsion.
    *   Tunneling occurs when the energy of an electron from the source electrode matches an available energy level on the island, and then it tunnels from the island to the drain electrode.
*   **Staircase Characteristic:** The current-voltage ($I_{SD}-V_{SD}$) characteristics exhibit a series of steps. Each step corresponds to the tunneling of an additional electron onto the island. Between these steps, the current is suppressed due to Coulomb blockade.
*   **Energy Steps:** The voltage separation between consecutive steps in the $I_{SD}-V_{SD}$ curve is related to the Coulomb energy and the voltage division between the two tunnel junctions. For a symmetric double tunnel junction, the step separation is approximately $2E_C/e$.
*   **Gate Voltage Influence:** The gate voltage can shift the entire staircase pattern, allowing for precise control over the electron occupancy of the island.

**Example:** A metallic nanoparticle sandwiched between two electrodes. As $V_{SD}$ increases, the island can only accept an electron when its potential is lowered enough to overcome the Coulomb blockade.

**Important Points to Remember:**
*   The Coulomb staircase is a direct manifestation of sequential tunneling of individual electrons.
*   It occurs in structures with multiple tunnel junctions and a confined island.
*   The steps in the $I_{SD}-V_{SD}$ curve are quantized by the Coulomb charging energy.
*   This phenomenon is a key signature of single-electron transport.

**Referenced Textbooks:**
*   *Nanoelectronics and Nanosystems* by Goser, GlÖsekötter, and Dienstuhl (Chapter on Coulomb staircase)
*   *Fundamentals of nano electronics* by Hanson (Section on Coulomb staircase)
*   *Quantum Transport Atom to Transistor* by Datta (Chapter on Coulomb staircase)

---

### 5. Single Electron Transistor (SET)

*   **Structure:** A SET is a three-terminal device comprising:
    *   A small conducting island (quantum dot).
    *   Two tunnel junctions connecting the island to source (S) and drain (D) electrodes.
    *   A gate electrode capacitively coupled to the island.
*   **Operation Principle:** The SET operates by modulating the Coulomb blockade on the island using the gate voltage.
    *   **Coulomb Blockade Region:** At certain gate voltages, the Coulomb blockade prevents electron tunneling between the source and drain, resulting in very low current.
    *   **Turning ON:** By adjusting the gate voltage, the energy levels of the island can be shifted, allowing electrons to tunnel onto the island from the source and then from the island to the drain. This overcomes the Coulomb blockade and results in a significant current flow.
    *   **Coulomb Oscillations:** As the gate voltage is swept, the SET current exhibits periodic oscillations. These are called Coulomb oscillations. Each oscillation corresponds to the addition or removal of a single electron from the island. The period of these oscillations is related to the gate capacitance ($C_G$).
*   **Transistor Action:** The gate voltage controls the source-drain current, just like in a conventional transistor, but at the single-electron level.
*   **Key Parameters:**
    *   **Island Size:** Must be small enough for the Coulomb energy ($E_C = e^2 / (2C_{total})$) to be significant compared to thermal energy ($k_B T$) and the applied voltage ($V_{SD}$). $C_{total} \approx C_G + C_S + C_D$, where $C_S$ and $C_D$ are capacitances of the tunnel junctions.
    *   **Tunneling Resistance ($R_T$):** Should be larger than the quantum resistance $R_Q \approx h/e^2 \approx 25.8$ k$\Omega$ to ensure proper Coulomb blockade.
    *   **Temperature:** Low operating temperatures are crucial for observing the full effect of Coulomb blockade.
*   **Applications:**
    *   Extremely sensitive electrometers.
    *   Low-power digital logic circuits.
    *   Quantum computing (qubits).
    *   Single-photon detectors.

**Example:** Imagine a "gate" that controls a tiny trap for electrons. When the trap is "full" (due to Coulomb repulsion), no more electrons can enter. The gate voltage can "empty" or "prepare" the trap to accept an electron, thus controlling the flow.

**Important Points to Remember:**
*   SETs are the quintessential single-electron devices.
*   They utilize Coulomb blockade controlled by a gate voltage.
*   Coulomb oscillations are the characteristic signature of SET operation.
*   They offer extreme sensitivity and low power consumption.

**Referenced Textbooks:**
*   *Fundamentals of Modern VLSI Devices* by Taur and Ning (Chapter on advanced and future devices, including SETs)
*   *Nanoelectronics and Nanosystems* by Goser, GlÖsekötter, and Dienstuhl (Chapter on Single Electron Transistors)
*   *Fundamentals of nano electronics* by Hanson (Chapter on Single Electron Transistors)
*   *Quantum Transport Atom to Transistor* by Datta (Chapter on Single Electron Transistors)

---

### 6. Scaling Challenges and Relevance to Course Outcomes

*   **CO1: Describe the challenges of scaling of electron devices to Nano meter scales:**
    *   **Short Channel Effects:** As devices shrink, gate control over the channel diminishes, leading to issues like DIBL (Drain-Induced Barrier Lowering), GIDL (Gate-Induced Drain Leakage), and velocity saturation.
    *   **Quantum Tunneling:** Gate dielectric tunneling and source-drain tunneling become significant, leading to leakage currents and increased power consumption.
    *   **Random Dopant Fluctuations:** In highly scaled devices, the discrete nature of dopant atoms becomes significant, leading to variations in device threshold voltage and performance.
    *   **Device-to-Device Variation:** Manufacturing variations become more pronounced at the nanoscale, making it challenging to achieve uniform device characteristics.
    *   **Heat Dissipation:** Higher current densities and increased device density lead to thermal management challenges.
    *   **SEDs as a Solution:** Single electron devices offer a path to overcome some of these scaling limits by operating with single electrons, potentially leading to ultra-low power consumption and higher integration densities. However, they introduce their own set of challenges like operating temperature and fabrication complexity.

*   **CO2: Design novel transistor devices to reduce the short channel effects and improve performance:**
    *   While this module focuses on fundamental SEDs, the principles learned (like electrostatic control and charge confinement) are directly applicable to designing advanced transistors like FinFETs and gate-all-around (GAA) FETs. These devices offer improved electrostatic integrity and better control over the channel, mitigating short channel effects. The conceptual understanding of how to isolate and control charge carriers is transferable.

*   **CO3: Outline the Nano scale quantum transport in Nano electronic devices from atom to transistor:**
    *   This module directly addresses quantum transport at the nanoscale. We have discussed:
        *   **Tunneling:** As the primary mechanism for charge transport across barriers.
        *   **Coulomb Blockade:** A direct consequence of quantum mechanical charging effects and electrostatic interactions of discrete charges.
        *   **Sequential Tunneling:** The step-by-step transfer of electrons, as seen in the Coulomb staircase.
        *   **Quantum Confinement:** The island in an SET can be considered a quantum dot where electron energy levels are quantized.

*   **CO4: Apply quantum mechanics in materials and quantum devices:**
    *   **Quantum Mechanics in Materials:** The understanding of tunneling through thin insulating barriers relies on quantum mechanical wave functions and the transmission probability. The quantized energy levels within a quantum dot are a direct application of quantum mechanics (e.g., particle-in-a-box model).
    *   **Quantum Devices:** The entire operation of the SET is a demonstration of applying quantum mechanics to build a functional device. Coulomb blockade, Coulomb staircase, and Coulomb oscillations are all quantum phenomena that are harnessed for device operation.

---

### 7. Practice Questions and Answers

**Question 1:** What is the fundamental principle behind Coulomb blockade, and in what types of devices is it primarily observed?

**Answer:** The fundamental principle behind Coulomb blockade is the electrostatic repulsion (Coulomb repulsion) experienced by an electron when it attempts to tunnel onto a small conducting island that already contains one or more electrons. This repulsion increases the energy required for the addition of the next electron, effectively "blocking" tunneling at low voltages and temperatures if the charging energy ($E_C$) is sufficiently large compared to thermal energy ($k_B T$). It is primarily observed in single-electron devices (SEDs) with small conducting islands.

**Question 2:** Explain the Coulomb staircase phenomenon. What physical parameters dictate the voltage separation between the steps in the $I_{SD}-V_{SD}$ characteristics of a double tunnel junction?

**Answer:** The Coulomb staircase is a phenomenon observed in devices with a double tunnel junction where the current flows in discrete steps as the source-drain voltage is increased. Each step corresponds to the sequential tunneling of an individual electron onto the conducting island, overcoming the Coulomb blockade. The voltage separation between consecutive steps in the $I_{SD}-V_{SD}$ curve is primarily dictated by the Coulomb charging energy ($E_C$) of the island and the voltage division between the two tunnel junctions. For a symmetric double tunnel junction, this separation is approximately $2E_C/e$, where $E_C = e^2 / (2C_{total})$.

**Question 3:** Describe the basic structure and operation of a Single Electron Transistor (SET). What are Coulomb oscillations?

**Answer:** A Single Electron Transistor (SET) consists of a small conducting island connected to source and drain electrodes via two tunnel junctions, and a gate electrode capacitively coupled to the island. Its operation relies on modulating the Coulomb blockade on the island using the gate voltage. By adjusting the gate voltage, the SET can be switched between a high-conductance state (when Coulomb blockade is overcome) and a low-conductance state (when Coulomb blockade is active). Coulomb oscillations are periodic variations in the source-drain current as the gate voltage is swept. Each oscillation corresponds to the addition or removal of a single electron from the island due to the change in the gate's electrostatic potential.

**Question 4:** If you have a quantum dot with a capacitance of $C = 1$ aF ($10^{-18}$ F) and you want to observe Coulomb blockade at room temperature ($T \approx 300$ K), would this be feasible? Justify your answer.

**Answer:**
To observe Coulomb blockade, the Coulomb charging energy ($E_C$) must be significantly larger than the thermal energy ($k_B T$).
*   Coulomb charging energy: $E_C = \frac{e^2}{2C}$
    *   $e = 1.602 \times 10^{-19}$ C
    *   $C = 1 \times 10^{-18}$ F
    *   $E_C = \frac{(1.602 \times 10^{-19} \text{ C})^2}{2 \times (1 \times 10^{-18} \text{ F})} = \frac{2.566 \times 10^{-38} \text{ C}^2}{2 \times 10^{-18} \text{ F}} \approx 1.283 \times 10^{-20}$ J

*   Thermal energy: $k_B T$
    *   $k_B = 1.381 \times 10^{-23}$ J/K
    *   $T = 300$ K
    *   $k_B T = (1.381 \times 10^{-23} \text{ J/K}) \times 300 \text{ K} \approx 4.143 \times 10^{-21}$ J

Now, compare $E_C$ and $k_B T$:
*   $E_C \approx 1.283 \times 10^{-20}$ J
*   $k_B T \approx 4.143 \times 10^{-21}$ J

In this case, $E_C > k_B T$ (approximately $3 \times k_B T$). This suggests that Coulomb blockade *might* be observable at room temperature, but the effect would be significantly reduced compared to lower temperatures. For clear observation of Coulomb blockade, it's generally preferred that $E_C \gg k_B T$. A capacitance of 1 aF is quite small, and a more robust demonstration of Coulomb blockade would typically require even lower temperatures or even smaller capacitances.

---

### 8. Important Points to Remember

*   Single electron devices leverage quantum mechanical phenomena like **Coulomb blockade** and **tunneling**.
*   **Coulomb blockade** arises from the electrostatic repulsion between discrete charges on a nanoscale island, requiring $E_C \gg k_B T$ and small island capacitance.
*   **Tunnel junctions** are crucial for controlling electron flow by allowing quantum mechanical tunneling. Their resistance and capacitance are key parameters.
*   The **Coulomb staircase** demonstrates sequential tunneling of single electrons, resulting in quantized steps in the current-voltage characteristics.
*   The **Single Electron Transistor (SET)** is a three-terminal device that uses gate voltage to control Coulomb blockade, exhibiting **Coulomb oscillations**.
*   SEDs offer potential solutions for **ultra-low power electronics** and **highly sensitive measurements**, addressing some of the scaling challenges in conventional transistors.
*   Achieving reliable operation of SEDs often requires **low temperatures** and highly precise **nanofabrication**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
