---
title: "Exercises on lathe: - Measurement of cutting forces in turning Process."
subject: "MANUFACTURING TECHNOLOGY LAB"
module: "Module 1: Exercises on lathe: "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1451d0cf4804463352"
status: "completed"
scrapedAt: "2026-05-20T17:54:17.133Z"
---
# Manufacturing Technology Lab: Module 1 - Exercises on Lathe

## Topic: Measurement of Cutting Forces in Turning Process

---

### 1. Introduction to Turning and Cutting Forces

**Objective:** To understand the fundamental concepts of the turning process and the forces involved.

*   **Turning:** A machining process in which a single-point cutting tool removes material from a rotating workpiece to produce a desired shape and size. The workpiece rotates, and the cutting tool moves linearly.
*   **Cutting Forces:** When a cutting tool engages with a workpiece, several forces are generated due to the deformation and shearing of the material. These forces are crucial for understanding the machining process, tool wear, power consumption, and surface finish.
*   **Main Cutting Force (Fc):** The component of the cutting force that acts in the direction of the cutting speed. It is responsible for removing the material.
*   **Thrust Force or Feed Force (Ff):** The component of the cutting force that acts in the direction of the feed. It tends to push the workpiece away from the tool or vice-versa.
*   **Radial Force or Back Force (Fr):** The component of the cutting force that acts perpendicular to both the cutting speed and feed direction, usually towards the workpiece axis. It can cause deflection of the workpiece or tool.

---

### 2. Measurement of Cutting Forces

**Objective:** To learn the methods and equipment used to measure the cutting forces during a turning operation.

#### 2.1 Principles of Force Measurement

*   **Strain Gauges:** The most common sensing elements for measuring forces. Strain gauges are resistors whose resistance changes proportionally to the mechanical strain applied to them.
    *   They are bonded to a flexible backing material that is attached to the structure experiencing deformation.
    *   When the structure deforms due to the applied force, the strain gauge also deforms, changing its resistance.
    *   These resistance changes are then converted into electrical signals.

#### 2.2 Force Measuring Devices (Dynamometers)

*   **Definition:** A dynamometer is an instrument used for measuring force. In the context of machining, it's used to measure the cutting forces.
*   **Types of Dynamometers Used in Lathe Operations:**
    *   **Drill Force Dynamometer:** While the name suggests drilling, the principles can be adapted for turning.
    *   **Lathe Tool Dynamometer:** Specifically designed to measure forces acting on the cutting tool during turning.
    *   **Workpiece Dynamometer:** Mounted between the headstock/tailstock and the workpiece to measure forces transmitted through the workpiece.

*   **Construction and Working Principle (General):**
    *   A dynamometer typically consists of a rigid structure with strain gauges mounted at strategic locations.
    *   The cutting tool or the workpiece is mounted on a sensing element (e.g., a cantilever beam, a diaphragm, or a platform) within the dynamometer.
    *   When cutting forces act on the tool/workpiece, they cause a small deformation in the sensing element.
    *   This deformation strains the bonded strain gauges.
    *   The strain gauges are typically arranged in a Wheatstone bridge configuration to amplify the small resistance changes and compensate for temperature variations.
    *   The output voltage from the Wheatstone bridge is proportional to the applied force.
    *   This voltage signal is amplified, filtered, and then displayed or recorded by a data acquisition system.

*   **Reference (HMT Production Technology):** HMT's "Production Technology" provides detailed explanations of various measuring instruments and techniques, including those used for force measurement in machining. It would likely discuss strain gauge-based dynamometers and their application in understanding cutting parameters. (Refer to relevant chapters on measurement and machining forces).

#### 2.3 Data Acquisition System

*   **Function:** To receive, process, and record the electrical signals from the dynamometer.
*   **Components:**
    *   **Amplifier:** Increases the magnitude of the weak signal from the strain gauges.
    *   **Filter:** Removes unwanted electrical noise from the signal.
    *   **Analog-to-Digital Converter (ADC):** Converts the analog voltage signal into a digital format that can be processed by a computer.
    *   **Data Logger/Computer:** Stores and displays the force data, often in real-time graphs or tables.

---

### 3. Factors Affecting Cutting Forces

**Objective:** To understand how various machining parameters and material properties influence the cutting forces.

*   **Material Properties:**
    *   **Tensile Strength:** Higher tensile strength materials generally require higher cutting forces.
    *   **Hardness:** Harder materials result in higher cutting forces.
    *   **Ductility:** Ductile materials can undergo larger deformations, potentially leading to higher forces, especially with built-up edge (BUE).
    *   **Work Hardening:** Materials that work-harden significantly will exhibit increasing forces as the tool progresses.
*   **Cutting Parameters:**
    *   **Cutting Speed (v):** Generally, as cutting speed increases, cutting forces tend to decrease due to reduced chip thickness and improved chip flow. (Refer to CO2).
    *   **Feed Rate (f):** Cutting forces increase approximately linearly with the feed rate as it directly affects the cross-sectional area of the chip being removed.
    *   **Depth of Cut (d):** Cutting forces increase with the depth of cut as it increases the amount of material being removed per pass. The relationship is often found to be approximately linear.
*   **Tool Geometry:**
    *   **Rake Angle:** A larger (positive) rake angle generally reduces cutting forces by promoting easier chip formation and flow.
    *   **Clearance Angle:** Affects friction at the flank face. Inadequate clearance leads to rubbing and increased forces.
    *   **Cutting Edge Radius:** A larger radius can increase forces but may also improve surface finish and tool life.
*   **Cutting Fluid:** The use of appropriate cutting fluids can reduce friction between the tool and workpiece, leading to lower cutting forces and improved surface finish.

---

### 4. Experimental Procedure for Measuring Cutting Forces in Turning

**Objective:** To outline a step-by-step procedure for conducting an experiment to measure cutting forces.

**Materials and Equipment:**

*   Lathe Machine
*   Tool Dynamometer (mounted on the lathe)
*   Cutting Tool (e.g., HSS or Carbide)
*   Workpiece Material (e.g., Mild Steel, Aluminium)
*   Data Acquisition System (strain indicator, amplifier, data logger)
*   Measuring Instruments (calipers, micrometer)

**Procedure:**

1.  **Calibration of Dynamometer:**
    *   Before the experiment, calibrate the dynamometer by applying known forces (using weights or a universal testing machine) to each of its sensing elements and recording the corresponding output signals. This establishes a relationship between the output signal and the applied force.
2.  **Setup:**
    *   Mount the dynamometer securely on the lathe carriage.
    *   Mount the cutting tool into the dynamometer's tool holder.
    *   Secure the workpiece in the lathe chuck or between centers. Ensure proper alignment.
    *   Connect the dynamometer to the data acquisition system.
3.  **Initial Data Reading:**
    *   With the machine running at a specific speed but without cutting, record the zero reading from the data acquisition system to establish a baseline.
4.  **Turning Operation:**
    *   Set the desired cutting speed, feed rate, and depth of cut.
    *   Start the data acquisition system to record the force signals.
    *   Engage the cutting tool with the workpiece to begin the turning operation.
    *   Allow the tool to traverse the required length of the workpiece.
5.  **Data Recording:**
    *   The data acquisition system will continuously record the output signals corresponding to Fc, Ff, and Fr.
    *   After the cut, disengage the tool and stop the data recording.
6.  **Repeat for Different Parameters:**
    *   Repeat steps 4 and 5 for various combinations of cutting speed, feed rate, and depth of cut, as per the experimental plan.
7.  **Post-Experiment:**
    *   Switch off the machine and disconnect the equipment.
    *   Analyze the recorded data. Convert the voltage readings back to force values using the calibration data.

---

### 5. Analysis of Results and Correlation with Course Outcomes

**Objective:** To understand how the measured cutting forces relate to machining performance and course learning outcomes.

*   **Calculating Specific Cutting Force (k_c):**
    *   The specific cutting force is defined as the cutting force per unit area of the uncut chip.
    *   $k_c = \frac{F_c}{A}$, where $A$ is the uncut chip cross-sectional area.
    *   $A = f \times d$ (feed rate $\times$ depth of cut)
    *   **Significance:** $k_c$ is a material property that indicates its machinability. It is less dependent on cutting parameters than the total cutting force.

*   **Calculating Cutting Power (P_c):**
    *   The power consumed in the cutting process is directly related to the main cutting force and the cutting speed.
    *   $P_c = F_c \times v$ (in Watts, if $F_c$ is in Newtons and $v$ is in m/s)
    *   **Specific Cutting Energy ($u_c$):** Power per unit volume of material removed per unit time. $u_c = \frac{P_c}{\text{Volume removal rate}}$.
    *   **Significance:** This directly relates to CO2: "Apply cutting mechanics to metal machining based on cutting force and power consumption." Understanding power consumption is vital for selecting appropriate machine tools and ensuring energy efficiency.

*   **Workpiece Quality (Relates to CO1):**
    *   High cutting forces, especially the thrust force, can lead to increased workpiece deflection, resulting in dimensional inaccuracies and poor surface finish.
    *   Excessive radial forces can cause chatter, leading to a poor surface finish and potential damage to the tool and workpiece.
    *   By analyzing the measured forces, one can understand how to set machining parameters to achieve the desired quality.

*   **Tool Wear (Implicit):**
    *   Higher cutting forces generally correlate with increased tool wear (flank wear, crater wear). This is because higher forces imply greater stresses and friction at the tool-workpiece interface.

*   **Reference (Numerical Control of Machine Tools by Yoram Koren):** While this book focuses on CNC, the fundamental principles of cutting mechanics and force analysis are the same. It emphasizes how precise control of cutting forces is essential for achieving high precision in CNC machining (CO3).

---

### 6. Important Points to Remember

*   **Dynamometers are calibrated** to ensure accurate force readings.
*   Cutting forces are a direct result of material deformation and friction during machining.
*   **Fc, Ff, and Fr** are the three primary components of cutting force.
*   Cutting forces increase with **feed rate and depth of cut**.
*   Cutting speed has a less pronounced effect on forces, but generally, forces decrease slightly with increasing speed.
*   **Material properties** significantly influence cutting forces.
*   Measuring cutting forces is essential for **optimizing machining parameters, predicting tool life, and ensuring workpiece quality.**
*   The measured forces directly relate to the **power consumption** of the machining operation.

---

### 7. Practice Questions and Answers

**Question 1:**
What are the three main components of cutting forces in a turning operation?
**Answer:** The three main components are the Main Cutting Force (Fc), the Thrust Force or Feed Force (Ff), and the Radial Force or Back Force (Fr).

**Question 2:**
How does an increase in feed rate typically affect the main cutting force (Fc)?
**Answer:** An increase in feed rate generally leads to an increase in the main cutting force (Fc) because the cross-sectional area of the chip being removed increases.

**Question 3:**
What is the purpose of a dynamometer in a turning experiment?
**Answer:** A dynamometer is used to measure the magnitude of the cutting forces (Fc, Ff, Fr) acting on the cutting tool or workpiece during the turning process.

**Question 4:**
If the cutting force (Fc) is measured as 500 N and the cutting speed (v) is 120 m/min, calculate the cutting power in Watts.
**Answer:**
First, convert cutting speed to m/s:
$v = \frac{120 \text{ m}}{60 \text{ s}} = 2 \text{ m/s}$
Cutting Power ($P_c$) = $F_c \times v$
$P_c = 500 \text{ N} \times 2 \text{ m/s} = 1000 \text{ Watts}$

**Question 5:**
Which factor has a more significant impact on cutting forces: cutting speed or feed rate? Explain why.
**Answer:** The **feed rate** generally has a more significant impact on cutting forces compared to cutting speed. This is because the feed rate directly influences the cross-sectional area of the chip being removed. A larger feed rate means a thicker chip, requiring more force to shear. While cutting speed affects chip formation and friction, its direct impact on the magnitude of the force is usually less pronounced than the feed rate's impact on the chip's geometry.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 8. Textbook and Reference Material Integration

*   **Production Technology by HMT (2017):** Essential for understanding basic lathe operations, cutting tool nomenclature, and the principles behind various measurement techniques. Chapters on turning and measurement instruments will be highly relevant.
*   **Workshop Technology Part I by W. A. J. Chapman (1972):** Provides foundational knowledge of machine tools, including the lathe, and the forces involved in metal cutting.
*   **Numerical Control of Machine Tools by Yoram Koren (2014):** While focusing on CNC, this book delves into the mechanics of cutting and the importance of force control for precision, which is directly applicable to understanding why measuring these forces is critical.

---

### 9. Alignment with Course Outcomes (COs)

*   **CO1 (Operate machine tools):** Understanding cutting forces helps in selecting appropriate cutting parameters to achieve desired part features and quality, as well as understanding the limitations of the machine tool and workholding.
*   **CO2 (Apply cutting mechanics):** This entire topic is directly aligned with CO2. Measuring cutting forces allows for the calculation of power consumption and provides empirical data to validate cutting mechanics theories.
*   **CO3 (Programming and manufacturing complex profiles):** While this lab focuses on manual lathes, the understanding of forces is paramount in CNC programming. Knowing how forces change with parameters helps in optimizing tool paths and avoiding excessive loads, leading to precision manufacturing.
*   **CO4 & CO5 (Welding, Ferrous/Non-ferrous metals):** While not directly covered in this specific topic, the material properties discussed in CO5 (hardness, strength) are crucial for predicting cutting forces. The ability to manipulate materials (CO4) is complemented by understanding how to machine them efficiently (this topic).

---