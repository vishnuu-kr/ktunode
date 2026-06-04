---
title: "Exercises on milling machine: - Measurement of cutting forces in milling process."
subject: "MANUFACTURING TECHNOLOGY LAB"
module: "Module 1: Exercises on lathe: "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1451d0cf480446335c"
status: "completed"
scrapedAt: "2026-05-20T17:54:24.245Z"
---
# MANUFACTURING TECHNOLOGY LAB: MODULE 1 - EXERCISES ON MILLING MACHINE

## Topic: Measurement of Cutting Forces in Milling Process

This module focuses on practical exercises on milling machines. A crucial aspect of understanding the milling process is the ability to measure the cutting forces involved. This will allow us to analyze the impact of various machining parameters on the forces generated, leading to improved machining efficiency and tool life.

---

### 1. Introduction to Milling and Cutting Forces

**What is Milling?**

Milling is a machining process that produces a surface by removing material with a rotating multi-point cutting tool. The workpiece is generally fed against the rotating cutter.

**What are Cutting Forces?**

Cutting forces are the forces exerted on the cutting tool and workpiece during the material removal process. In milling, these forces are complex and dynamic due to the intermittent nature of the cut. They are primarily a result of the material's resistance to deformation and shearing, friction between the chip and the tool, and friction between the workpiece and the tool flank.

---

### 2. Types of Milling

Understanding the types of milling is essential to comprehend how forces are generated and measured:

*   **Up Milling (Conventional Milling):** The cutter rotates against the direction of workpiece feed.
    *   **Force Characteristics:** The chip thickness starts at zero and increases as the tooth engages the workpiece. This results in lower cutting forces at the initial contact, leading to less tool wear and a cleaner surface finish. However, it can lead to workpiece "climb" if there's any backlash in the machine feed mechanism.
*   **Down Milling (Climb Milling):** The cutter rotates in the same direction as the workpiece feed.
    *   **Force Characteristics:** The chip thickness starts at its maximum and decreases as the tooth disengages. This leads to higher initial cutting forces and a potential for the cutter to dig into the workpiece, causing tool breakage or surface damage, especially if there's backlash. It generally results in a better surface finish and reduced cutting forces later in the cut.

---

### 3. Components of Cutting Force in Milling

The resultant cutting force in milling can be resolved into three principal components:

*   **Tangential Force ($F_t$ or $F_c$):** This force acts tangentially to the cutter's path and is responsible for the primary cutting action (shearing of the material). It's the dominant force and directly related to the power required for machining.
*   **Radial Force ($F_r$ or $F_p$):** This force acts radially inwards towards the cutter's axis. It tends to push the workpiece away from the cutter and can cause deflection.
*   **Axial Force ($F_a$):** This force acts parallel to the cutter's axis. It is significant in face milling and end milling operations.

**Reference:**
*   **HMT Production Technology (2017):** Discusses the fundamental components of cutting force in machining operations, including milling. Chapter on Machining Processes will elaborate on these forces.
*   **Workshop Technology Part I by W. A. J. Chapman (1972):** Likely provides foundational understanding of machining forces and their impact on operations.

---

### 4. Methods for Measuring Cutting Forces

Measuring cutting forces requires specialized equipment and techniques. The primary methods involve using:

*   **Force Dynamometers:** These are transducers designed to measure mechanical forces. They are typically mounted between the workpiece and the machine table, or integrated into the tool holder.
    *   **Types of Dynamometers:**
        *   **Strain Gauge Dynamometers:** The most common type. They utilize strain gauges bonded to a deformable element (e.g., a cantilever beam, a diaphragm). As force is applied, the element deforms, changing the electrical resistance of the strain gauges, which is then measured as a voltage signal proportional to the force.
            *   *Example:* A piezoelectric crystal converts mechanical stress into an electrical charge.
        *   **Piezoelectric Dynamometers:** Utilize piezoelectric materials that generate an electrical charge when subjected to mechanical stress. This charge is proportional to the applied force. They are very sensitive and have a fast response time, making them suitable for dynamic force measurements in milling.
        *   **Hydraulic/Pneumatic Dynamometers:** Use fluid pressure to measure force, often employing Bourdon tubes or diaphragms. Less common in modern milling force measurement due to slower response times compared to piezoelectric or strain gauge types.

*   **Tool-Force Measuring Systems:** These systems are designed to be integrated directly into the machine tool, often using strain gauges on the spindle or cutter arbor.

**How it Works (General Principle):**

1.  **Transducer:** A force-sensing element (dynamometer) is placed in the path of the cutting force.
2.  **Signal Generation:** The dynamometer converts the mechanical force into an electrical signal.
3.  **Signal Conditioning:** The electrical signal is amplified and filtered to remove noise.
4.  **Data Acquisition:** The conditioned signal is fed into a data acquisition system (DAQ) which converts the analog signal into digital data.
5.  **Analysis:** The digital data is processed by a computer to display the force values (e.g., as graphs of force vs. time or force vs. displacement) and calculate parameters like average force, peak force, etc.

**Reference:**
*   **Numerical Control of Machine Tools by Yoram Koren (2014):** May discuss force measurement in the context of adaptive control and process monitoring in CNC milling.
*   **HMT Production Technology (2017):** Will likely detail various measuring instruments used in machining, potentially including force measurement techniques.

---

### 5. Factors Affecting Cutting Forces in Milling

Several parameters significantly influence the cutting forces generated:

*   **Material Properties of the Workpiece:**
    *   **Hardness and Strength:** Harder and stronger materials require higher forces to shear.
    *   **Ductility:** Ductile materials tend to produce longer chips and higher friction forces.
*   **Cutting Tool:**
    *   **Material (e.g., HSS, Carbide, Ceramics):** Harder tool materials can withstand higher forces and temperatures.
    *   **Geometry:**
        *   **Rake Angle:** Positive rake angles generally reduce cutting forces.
        *   **Clearance Angle:** Proper clearance reduces flank friction.
        *   **Helix Angle:** Affects chip formation and forces.
        *   **Sharpness:** Sharp tools have lower cutting forces. Dull tools increase forces and generate more heat.
    *   **Number of Teeth (Flutes):** More teeth distribute the cutting load but can increase the complexity of force measurement due to intermittent engagement.
*   **Machining Parameters:**
    *   **Cutting Speed ($v$):** Affects chip formation and friction. Higher speeds can sometimes reduce forces due to strain rate effects but also increase temperature.
    *   **Feed Rate ($f$):** The amount of material removed per tooth per revolution. Higher feed rates increase chip thickness and thus cutting forces.
    *   **Depth of Cut ($d$ or $a_p$):** The thickness of the material being removed. Deeper cuts increase the cross-sectional area of the chip, leading to higher forces.
*   **Cutting Fluid:**
    *   **Lubrication:** Reduces friction between the chip and tool, and between the workpiece and tool flank, thus lowering forces.
    *   **Cooling:** Reduces temperature, which can influence material properties and tool wear.

**Key Concepts:**
*   **Chip Thickness:** Directly proportional to feed rate and inversely proportional to the number of teeth and cutter diameter.
*   **Chip Width:** Primarily determined by the depth of cut.

**Reference:**
*   **HMT Production Technology (2017):** Chapters on Machining Processes and Cutting Tools will detail how these factors influence cutting forces and machining outcomes.
*   **Workshop Technology Part I by W. A. J. Chapman (1972):** Will likely cover the fundamentals of how machining parameters affect cutting forces.

---

### 6. Experimental Procedure for Measuring Cutting Forces in Milling

A typical laboratory exercise for measuring cutting forces in milling would involve the following steps:

1.  **Machine Setup:**
    *   Select an appropriate milling machine (e.g., Vertical Milling Machine, Horizontal Milling Machine).
    *   Mount the workpiece securely in a vise or fixture.
    *   Mount the cutting tool (e.g., end mill, face mill) onto the milling machine spindle.

2.  **Dynamometer Installation:**
    *   If using a workpiece-mounted dynamometer, ensure it is rigidly clamped to the machine table and the workpiece is securely mounted on the dynamometer.
    *   If using a tool-mounted dynamometer, ensure proper installation on the spindle or arbor.

3.  **Instrumentation Setup:**
    *   Connect the dynamometer to the signal conditioning and data acquisition system.
    *   Calibrate the data acquisition system with the dynamometer to establish a known relationship between the measured electrical signal and the applied force.

4.  **Machining Parameter Selection:**
    *   Choose a specific workpiece material and cutting tool.
    *   Set the desired cutting speed, feed rate, and depth of cut according to a predetermined experimental plan.

5.  **Data Acquisition:**
    *   Start the data acquisition system.
    *   Initiate the milling operation.
    *   Record the force signals throughout the milling pass. It's crucial to capture the forces during the tool's engagement with the workpiece.
    *   Stop the milling operation and stop data acquisition.

6.  **Data Analysis:**
    *   Analyze the recorded force signals (usually in the form of a time-series or force-vs-position graph).
    *   Calculate the components of the cutting force (tangential, radial, axial) if the dynamometer allows for multi-component measurement.
    *   Determine key force parameters like peak force, average force, and force fluctuations.
    *   Repeat the experiment for different combinations of machining parameters to study their effect on cutting forces.

**Important Considerations:**
*   **Rigidity:** The entire setup (machine, fixture, workpiece, dynamometer, tool holder) must be rigid to avoid vibrations that can interfere with force measurements.
*   **Calibration:** Accurate calibration of the dynamometer and DAQ system is paramount.
*   **Tool Condition:** Ensure the cutting tool is sharp and has consistent geometry for repeatable measurements.
*   **Cutting Fluid:** Apply cutting fluid consistently as per the experimental design.
*   **Data Interpretation:** Understand that milling forces are dynamic. Analyze the force profile during tool engagement.

---

### 7. Importance of Measuring Cutting Forces

Measuring cutting forces in milling provides invaluable insights for:

*   **Process Optimization:** Understanding how forces change with different parameters allows for optimization of cutting speed, feed, and depth of cut to achieve desired surface finish, accuracy, and material removal rates.
*   **Tool Life Prediction:** Higher cutting forces often correlate with increased tool wear. Monitoring forces can help predict when a tool needs replacement, preventing catastrophic tool failure.
*   **Machine Tool Design and Monitoring:** Forces can indicate the structural integrity of the machine tool and potential overloading. This is crucial for adaptive control systems in CNC machines.
*   **Energy Consumption Analysis:** The tangential cutting force is directly related to the power required for machining. Minimizing forces can lead to reduced energy consumption.
*   **Surface Integrity:** Forces influence the quality of the machined surface. Excessive forces can lead to surface damage or deformation.
*   **Workpiece Deflection:** Knowing the radial forces helps predict and manage workpiece deflection, especially for thin or flexible workpieces.
*   **Validation of Theoretical Models:** Experimental force measurements can be used to validate and refine theoretical models of cutting forces in milling.

**Alignment with Course Outcomes:**
*   **CO1 (Operate machine tools):** Understanding forces is crucial for operating milling machines safely and efficiently.
*   **CO2 (Apply cutting mechanics):** This exercise directly addresses the application of cutting mechanics by relating parameters to force consumption.
*   **CO3 (CNC programming):** Knowledge of forces is vital for generating efficient and safe toolpaths in CNC milling, especially for complex profiles.
*   **CO5 (Metals structure/properties):** How metal properties (hardness, ductility) influence forces ties into this CO.

---

### 8. Practice Questions and Answers

**Q1. What are the three principal components of cutting force in milling?**
    *   **Answer:** Tangential force ($F_t$), Radial force ($F_r$), and Axial force ($F_a$).

**Q2. In up milling, does the chip thickness increase or decrease as the tooth engages the workpiece?**
    *   **Answer:** Chip thickness increases from zero to a maximum.

**Q3. Which type of dynamometer is generally preferred for dynamic force measurements in milling due to its fast response time?**
    *   **Answer:** Piezoelectric dynamometers.

**Q4. How does increasing the feed rate typically affect the cutting forces in milling?**
    *   **Answer:** Increasing the feed rate generally increases the cutting forces, as it increases the chip thickness.

**Q5. List two benefits of measuring cutting forces in a milling operation.**
    *   **Answer:**
        1.  Process Optimization (e.g., selecting optimal cutting parameters).
        2.  Tool Life Prediction (monitoring forces to predict tool wear).
        3.  Energy Consumption Analysis.
        4.  Surface Integrity Assessment.
        5.  Machine Tool Monitoring.

**Q6. Explain the difference in force generation between up milling and down milling at the initial chip engagement.**
    *   **Answer:**
        *   **Up Milling:** Chip thickness starts at zero and increases. Initial forces are lower.
        *   **Down Milling:** Chip thickness starts at maximum and decreases. Initial forces are higher, and there's a risk of cutter digging in.

---

### 9. Important Points to Remember

*   **Cutting forces are dynamic in milling** due to the intermittent nature of the cut.
*   **Proper calibration** of the force measurement system is critical for accurate results.
*   **Tool sharpness and geometry** have a significant impact on measured forces.
*   **Workpiece rigidity and fixture stability** are essential to avoid extraneous vibrations.
*   **Machining parameters (speed, feed, depth of cut)** directly influence the magnitude of cutting forces.
*   **Force measurement is a key tool for understanding and optimizing the milling process.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 10. Further Reading & References

*   **Production Technology by HMT (Tata McGraw Hill, 2017):** Refer to chapters on milling machines, cutting tools, and machining theory.
*   **Workshop Technology Part I by W. A. J. Chapman (ELBS & Edward Arnold Publishers, 1972):** Provides a solid foundation in basic machining principles and forces.
*   **Numerical Control of Machine Tools by Yoram Koren (McGraw-Hill, 2014):** Useful for understanding force measurement in the context of advanced CNC operations and adaptive control.

This comprehensive study note covers the essential aspects of measuring cutting forces in milling, aligning with the learning outcomes and course objectives. Remember to apply this knowledge practically during your lab sessions.