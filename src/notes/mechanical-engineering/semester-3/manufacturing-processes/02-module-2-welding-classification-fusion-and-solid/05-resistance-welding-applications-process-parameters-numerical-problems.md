---
title: "Resistance welding-applications, process parameters, numerical problems"
subject: "MANUFACTURING PROCESSES"
module: "Module 2: Welding: Classification, Fusion and Solid"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d55"
status: "completed"
scrapedAt: "2026-05-20T17:50:10.178Z"
---
# MANUFACTURING PROCESSES: Module 2: Welding: Classification, Fusion and Solid

## Topic: Resistance Welding - Applications, Process Parameters, Numerical Problems

**Course Outcomes Addressed:**
*   **CO3:** Categorize welding processes according to welding principles and materials. (Knowledge Level: K2) - *This topic focuses on a specific category of welding (resistance welding).*
*   **CO4:** Determine forming load associated with rolling, forging, drawing, extrusion, and sheet metal forming (Knowledge Level: K3) - *While not directly about forming loads, understanding the pressure and force applied in resistance welding relates to the forces involved in forming processes.*

**Learning Outcomes Addressed:**
*   To understand the principles of resistance welding.
*   To differentiate between fusion and solid-state welding.
*   To classify resistance welding processes.
*   To discuss the applications of resistance welding.
*   To explain the important process parameters in resistance welding.
*   To solve numerical problems related to resistance welding.

---

### 1. Introduction to Resistance Welding

Resistance welding is a **solid-state welding process** where joining of metal pieces is achieved by the heat generated from the **electrical resistance** at the interface of the parts and the **pressure** applied to them. No filler material or flux is generally used.

**Key Concepts:**

*   **Solid-State Welding:** Joining of materials without melting the base metals. The bond is formed through the application of pressure and, often, elevated temperature, allowing diffusion and bonding at the atomic level.
*   **Joule Heating (I²R Heating):** The fundamental principle of heat generation in resistance welding. When electric current (I) flows through a resistance (R), heat (Q) is generated according to the formula $Q = I^2Rt$, where $t$ is time.

**Distinction from Fusion Welding:**
In fusion welding (e.g., arc welding), the base metals are melted by an external heat source (like an electric arc) and allowed to solidify, forming a joint. Resistance welding relies on localized heating at the interface due to inherent resistance and applied pressure.

**Reference:**
*   **Ghosh & Mallik, Chapter 18: Welding Processes:** Discusses various welding categories, including resistance welding, and explains its underlying principles.
*   **Kalpakjian & Schmid, Chapter 14: Solid-State Joining Processes:** Provides a comprehensive overview of solid-state welding techniques, with a significant section on resistance welding.

---

### 2. Classification of Resistance Welding Processes

Resistance welding processes are primarily classified based on the **method of applying heat and pressure** and the **geometrical configuration of the parts to be joined**.

**Major Types:**

*   **Spot Welding:**
    *   **Principle:** Two overlapping sheets are joined at localized points by circular copper electrodes. Current flows through the electrodes, concentrating heat at the intersection. Pressure is applied to form a solid "button" weld.
    *   **Figure:** (Imagine two metal sheets with a circular weld spot in between.)
    *   **Reference:** **Ghosh & Mallik, Chapter 18.5.1 Spot Welding:** Details the process, equipment, and applications.

*   **Seam Welding:**
    *   **Principle:** Similar to spot welding, but uses rotating wheel electrodes to produce a continuous leak-proof seam weld. It can be performed as intermittent or continuous welding.
    *   **Figure:** (Imagine two overlapping metal sheets being joined by two rolling wheels, creating a linear weld.)
    *   **Reference:** **Kalpakjian & Schmid, Chapter 14.3 Resistance Welding:** Explains seam welding as an extension of spot welding.

*   **Projection Welding:**
    *   **Principle:** Projections (small raised areas) are formed on one or both workpieces. These projections concentrate the current and heat, leading to a weld at the location of the projections. This allows for multiple welds to be made simultaneously.
    *   **Figure:** (Imagine one workpiece with small raised bumps, pressed against another flat workpiece, with current flowing through electrodes.)
    *   **Reference:** **Ghosh & Mallik, Chapter 18.5.3 Projection Welding:** Discusses the use of projections for controlled welding.

*   **Flash Welding:**
    *   **Principle:** Two workpieces are brought together with a small gap, and current flows across the gap, causing arcing and flashing (hence the name). As the metal heats up and becomes molten, the workpieces are forcefully brought together to forge the joint. This process is suitable for joining solid sections.
    *   **Figure:** (Imagine two rods or bars being abutted, current causes sparking, then they are forced together.)
    *   **Reference:** **Kalpakjian & Schmid, Chapter 14.3 Resistance Welding:** Covers flash welding as a butt welding resistance process.

*   **Upset Welding:**
    *   **Principle:** Similar to flash welding but without the flashing. Workpieces are brought into direct contact and current flows through them, heating them to the forging temperature. Pressure is then applied to forge the joint.
    *   **Figure:** (Imagine two rods being brought into direct contact, current heats them, then they are pressed together.)
    *   **Reference:** **Ghosh & Mallik, Chapter 18.5.4 Upset Welding:** Explains the process and its application for joining rods and bars.

---

### 3. Applications of Resistance Welding

Resistance welding is a highly versatile and widely used process in various industries due to its speed, cost-effectiveness, and suitability for mass production.

**Key Applications:**

*   **Automotive Industry:**
    *   **Body-in-white assembly:** Spot welding is extensively used for joining car body panels.
    *   **Exhaust systems:** Seam welding for leak-proof joints.
    *   **Component manufacturing:** Joining small parts for various automotive sub-assemblies.
    *   **Reference:** **Kalpakjian & Schmid, Chapter 14.3.1 Applications of Resistance Welding:** Highlights the automotive sector as a major user.

*   **Appliance Manufacturing:**
    *   **Refrigerators, washing machines, ovens:** Manufacturing of panels, frames, and internal structures.
    *   **Reference:** **Ghosh & Mallik, Chapter 18.5.1 Spot Welding Applications:** Mentions appliance manufacturing as a key area.

*   **Aerospace Industry:**
    *   Joining thin sheet metals and components where precision is required.
    *   **Reference:** **ASM Metals Handbook, Vol. 14, Forming and Forging:** May contain specific applications in aerospace for joining dissimilar metals or thin sheets.

*   **Electrical and Electronics Industry:**
    *   Joining of wires, connectors, and components.
    *   **Reference:** **Kalpakjian & Schmid, Chapter 14.3.1 Applications:** Mentions electrical connection applications.

*   **General Manufacturing:**
    *   Joining of wire mesh, metal furniture, and small assemblies.
    *   **Projection welding** is used for attaching nuts, bolts, and brackets to sheet metal parts.

**Important Point:** Resistance welding is ideal for joining similar metals, especially low-carbon steels, stainless steels, and aluminum alloys. Dissimilar metal joining is possible but requires careful control of parameters and electrode materials.

---

### 4. Resistance Welding Process Parameters

The quality and integrity of a resistance weld are critically dependent on the control of several process parameters.

**Key Parameters:**

*   **Welding Current (I):**
    *   **Effect:** Directly influences the heat generated ($I^2R$). Too low a current results in incomplete fusion, while too high a current can lead to electrode damage, splashing, or expulsion of molten metal.
    *   **Control:** Typically controlled by transformer tap settings and timing controls.
    *   **Reference:** **Ghosh & Mallik, Chapter 18.5.1 Spot Welding:** Discusses the role of current in weld formation.

*   **Welding Time (t):**
    *   **Effect:** The duration for which the current is applied. It determines the amount of heat input. Longer times allow more heat to flow into the workpieces, potentially causing larger heat-affected zones or distortion.
    *   **Control:** Electronic timers are used to precisely control the duration.
    *   **Reference:** **Kalpakjian & Schmid, Chapter 14.3 Resistance Welding:** Emphasizes the importance of timing control for optimal heat input.

*   **Electrode Force (Pressure, F):**
    *   **Effect:** Essential for:
        *   Ensuring good electrical contact between the workpieces and electrodes.
        *   Bringing the workpieces into intimate contact to promote fusion.
        *   Forging the molten nugget as it forms, to consolidate the weld and reduce porosity.
        *   Maintaining contact during solidification.
    *   **Control:** Hydraulic, pneumatic, or mechanical systems are used to apply electrode force.
    *   **Reference:** **Ghosh & Mallik, Chapter 18.5.1 Spot Welding:** Explains the dual role of pressure in contact and forging.

*   **Electrode Material and Design:**
    *   **Material:** High electrical conductivity and good mechanical strength at elevated temperatures are crucial. Common materials include copper alloys (e.g., chromium copper, beryllium copper).
    *   **Design:** Electrode shape (e.g., domed, flat, pointed) affects current density and pressure distribution.
    *   **Reference:** **Kalpakjian & Schmid, Chapter 14.3.3 Electrodes:** Details electrode materials, types, and their impact on weld quality.

*   **Workpiece Material Properties:**
    *   **Electrical Resistivity:** Higher resistivity leads to more heat generation.
    *   **Thermal Conductivity:** Lower thermal conductivity helps localize heat.
    *   **Melting Point:** Affects the amount of heat required.
    *   **Strength:** Influences the electrode force needed.
    *   **Reference:** **Ghosh & Mallik, Chapter 18.5.1 Spot Welding:** Discusses how material properties affect weldability.

*   **Workpiece Thickness and Overlap:**
    *   **Effect:** Affects the electrical resistance path and the amount of material to be heated. Proper overlap is crucial for sufficient weld strength.
    *   **Reference:** **Kalpakjian & Schmid, Chapter 14.3 Resistance Welding:** Mentions overlap as a key factor for weld strength.

**Important Point:** A key concept in resistance welding is the **"weld nugget"** – the molten zone formed at the interface. Its size and shape determine the weld strength. The goal is to achieve a nugget of adequate size without excessive expulsion of molten metal or excessive heat-affected zone.

---

### 5. Numerical Problems in Resistance Welding

These problems typically involve calculating heat generated, energy required, or determining if a weld can be made based on given parameters and material properties.

**Key Formulas:**

1.  **Heat Generated (Joule Heating):**
    $Q = I^2 \times R_{total} \times t$
    Where:
    *   $Q$ = Heat generated (Joules)
    *   $I$ = Welding current (Amperes)
    *   $R_{total}$ = Total electrical resistance of the circuit (Ohms)
    *   $t$ = Welding time (seconds)

2.  **Total Resistance ($R_{total}$):**
    $R_{total} = R_{electrode1} + R_{workpiece1} + R_{interface} + R_{workpiece2} + R_{electrode2}$
    In simplified models, the dominant resistance is often at the interface ($R_{interface}$) and within the workpieces. The resistance of the workpieces can be calculated using $R = \rho \times (L/A)$, where $\rho$ is resistivity, $L$ is length, and $A$ is cross-sectional area.

3.  **Energy Required for Melting:**
    $E = m \times c \times \Delta T + m \times L_f$
    Where:
    *   $E$ = Energy required (Joules)
    *   $m$ = Mass of the material to be melted (kg)
    *   $c$ = Specific heat capacity of the material (J/kg°C)
    *   $\Delta T$ = Temperature rise from ambient to melting point (°C)
    *   $L_f$ = Latent heat of fusion (J/kg)

4.  **Efficiency ($\eta$):**
    The ratio of useful heat for welding to the total electrical energy supplied.
    $\eta = \frac{\text{Heat for Welding}}{\text{Total Electrical Energy Supplied}} = \frac{Q_{useful}}{I^2 \times R_{total} \times t}$

**Example Problems:**

**Problem 1:** Two steel sheets of 1 mm thickness are to be spot welded. The resistance of the circuit, excluding the interface, is 10 micro-ohms ($10 \times 10^{-6} \Omega$). The contact resistance at the interface is 100 micro-ohms ($100 \times 10^{-6} \Omega$). The welding current is 5000 A and the welding time is 0.2 seconds. Calculate the total heat generated.

**Solution:**
*   $I = 5000$ A
*   $R_{total} = R_{circuit} + R_{interface}$
*   $R_{circuit} = 10 \times 10^{-6} \Omega$
*   $R_{interface} = 100 \times 10^{-6} \Omega$
*   $R_{total} = (10 + 100) \times 10^{-6} \Omega = 110 \times 10^{-6} \Omega$
*   $t = 0.2$ s

Heat Generated, $Q = I^2 \times R_{total} \times t$
$Q = (5000 \, A)^2 \times (110 \times 10^{-6} \, \Omega) \times 0.2 \, s$
$Q = (25 \times 10^6 \, A^2) \times (110 \times 10^{-6} \, \Omega) \times 0.2 \, s$
$Q = 25 \times 110 \times 0.2 \times 10^3 \, J$
$Q = 550 \times 10^3 \, J = 550 \, kJ$

**Answer:** The total heat generated is 550 kJ.

**Problem 2:** A spot weld is to be made on two pieces of aluminum alloy. Each piece is 2 mm thick. The required nugget diameter is 5 mm. The density of the aluminum alloy is $2700 \, kg/m^3$, its melting point is $660 \, ^\circ C$, and its latent heat of fusion is $397 \, kJ/kg$. Assume the specific heat capacity is $900 \, J/(kg \cdot ^\circ C)$. The ambient temperature is $20 \, ^\circ C$. If the welding efficiency is 70%, and the welding current is 8000 A, and the total resistance is $80 \, \mu\Omega$, what should be the welding time?

**Solution:**
*   **Calculate the mass of the nugget:**
    *   Nugget diameter, $d = 5 \, mm = 0.005 \, m$
    *   Nugget thickness is typically assumed to be the thickness of one sheet for simplicity in these calculations, so $h = 2 \, mm = 0.002 \, m$.
    *   Nugget volume, $V = \frac{\pi d^2}{4} \times h = \frac{\pi (0.005 \, m)^2}{4} \times 0.002 \, m \approx 3.927 \times 10^{-8} \, m^3$
    *   Mass of nugget, $m = V \times \rho = (3.927 \times 10^{-8} \, m^3) \times (2700 \, kg/m^3) \approx 1.06 \times 10^{-4} \, kg$

*   **Calculate the energy required for melting (E):**
    *   $\Delta T = 660 \, ^\circ C - 20 \, ^\circ C = 640 \, ^\circ C$
    *   $E = m \times c \times \Delta T + m \times L_f$
    *   $E = (1.06 \times 10^{-4} \, kg) \times (900 \, J/(kg \cdot ^\circ C)) \times (640 \, ^\circ C) + (1.06 \times 10^{-4} \, kg) \times (397 \times 10^3 \, J/kg)$
    *   $E \approx 61.056 \, J + 42.082 \, J \approx 103.138 \, J$

*   **Calculate the total electrical energy supplied required:**
    *   Efficiency, $\eta = 0.70$
    *   Total Electrical Energy = $E / \eta = 103.138 \, J / 0.70 \approx 147.34 \, J$

*   **Calculate the welding time (t):**
    *   Total Electrical Energy = $I^2 \times R_{total} \times t$
    *   $147.34 \, J = (8000 \, A)^2 \times (80 \times 10^{-6} \, \Omega) \times t$
    *   $147.34 \, J = (64 \times 10^6 \, A^2) \times (80 \times 10^{-6} \, \Omega) \times t$
    *   $147.34 \, J = 5120 \, A^2 \Omega \times t$
    *   $t = \frac{147.34 \, J}{5120 \, \Omega} \approx 0.02878 \, s$

**Answer:** The welding time should be approximately 0.0288 seconds.

**Important Points for Numerical Problems:**
*   Always pay attention to units and convert them to a consistent system (e.g., SI units).
*   Remember that resistance is often given in micro-ohms ($\mu\Omega$) and needs to be converted to ohms ($\Omega$).
*   Latent heat of fusion is usually in kJ/kg and needs to be converted to J/kg.
*   The nugget thickness is often assumed to be the thickness of one of the sheets being welded, unless otherwise specified.

---

### 6. Key Concepts and Important Points to Remember

*   **Resistance Welding is a Solid-State Process:** No melting of base metals is the defining characteristic.
*   **Joule Heating (I²R) is the Heat Source:** Current flow through resistance is key.
*   **Pressure is Crucial:** For electrical contact, nugget formation, and forging.
*   **Four Main Types:** Spot, Seam, Projection, Flash, and Upset welding are the primary categories.
*   **Key Parameters:** Current, Time, Force, Electrode characteristics, and Material properties are interdependent.
*   **Weld Nugget:** The localized molten zone that solidifies to form the joint.
*   **Efficiency:** Not all electrical energy is converted into useful weld heat.
*   **Applications:** Widely used in automotive, appliance, and electronics industries due to speed and automation potential.
*   **Material Compatibility:** Best suited for similar metals with suitable resistivity and conductivity.

---

### 7. Practice Questions

**Question 1:**
Which of the following is NOT a type of resistance welding?
a) Spot Welding
b) Gas Tungsten Arc Welding (GTAW)
c) Seam Welding
d) Projection Welding

**Question 2:**
The heat generated in resistance welding is primarily due to:
a) Friction
b) Electrical Resistance (Joule Heating)
c) Arc Plasma
d) Chemical Reactions

**Question 3:**
In resistance welding, what is the primary role of the electrode force?
a) To conduct electricity
b) To provide the welding heat
c) To ensure good contact, form the nugget, and forge it
d) To cool the workpiece

**Question 4:**
A joint formed by the resistance welding of two overlapping metal sheets, using rotating wheel electrodes to create a continuous weld, is called:
a) Spot weld
b) Projection weld
c) Seam weld
d) Flash weld

**Question 5:**
Two steel plates of 2 mm thickness are resistance welded. The contact resistance at the interface is $150 \, \mu\Omega$. The total resistance of the welding circuit excluding the interface is $20 \, \mu\Omega$. If a current of 6000 A is passed for 0.25 seconds, calculate the total heat generated.

---

### 8. Answers to Practice Questions

**Answer 1:**
b) Gas Tungsten Arc Welding (GTAW) - GTAW is an arc welding process, not a resistance welding process.

**Answer 2:**
b) Electrical Resistance (Joule Heating) - The fundamental principle is $Q = I^2Rt$.

**Answer 3:**
c) To ensure good contact, form the nugget, and forge it - The force is multi-functional, ensuring good electrical contact, holding the pieces together as the nugget forms, and forging the molten metal.

**Answer 4:**
c) Seam weld - This describes the process of seam welding.

**Answer 5:**
*   $I = 6000$ A
*   $R_{circuit} = 20 \times 10^{-6} \, \Omega$
*   $R_{interface} = 150 \times 10^{-6} \, \Omega$
*   $R_{total} = R_{circuit} + R_{interface} = (20 + 150) \times 10^{-6} \, \Omega = 170 \times 10^{-6} \, \Omega$
*   $t = 0.25$ s

Heat Generated, $Q = I^2 \times R_{total} \times t$
$Q = (6000 \, A)^2 \times (170 \times 10^{-6} \, \Omega) \times 0.25 \, s$
$Q = (36 \times 10^6 \, A^2) \times (170 \times 10^{-6} \, \Omega) \times 0.25 \, s$
$Q = 36 \times 170 \times 0.25 \times 10^3 \, J$
$Q = 1530 \times 10^3 \, J = 1530 \, kJ$

**Answer:** The total heat generated is 1530 kJ.

---
**End of Module 2, Topic: Resistance Welding**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
