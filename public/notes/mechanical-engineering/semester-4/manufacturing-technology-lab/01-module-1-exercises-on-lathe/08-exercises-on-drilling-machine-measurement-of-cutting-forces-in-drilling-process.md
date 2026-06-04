---
title: "Exercises on drilling machine: - Measurement of cutting forces in drilling process."
subject: "MANUFACTURING TECHNOLOGY LAB"
module: "Module 1: Exercises on lathe: "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1451d0cf4804463356"
status: "completed"
scrapedAt: "2026-05-20T17:54:19.977Z"
---
# Manufacturing Technology Lab - Module 1: Exercises on Drilling Machine

## Topic: Measurement of Cutting Forces in Drilling Process

This module focuses on understanding and measuring the forces involved in the drilling process using a drilling machine. This is crucial for optimizing drilling parameters, selecting appropriate tools, and understanding the underlying mechanics of metal machining.

---

### 1. Introduction to Drilling and Cutting Forces

Drilling is a fundamental machining process used to create cylindrical holes in solid materials. It involves a rotating cutting tool (drill bit) that advances into the workpiece. During this process, various forces are generated due to the interaction between the cutting tool and the workpiece material. Understanding and measuring these forces is essential for:

*   **Tool Life Optimization:** Excessive forces can lead to rapid tool wear and failure.
*   **Process Optimization:** Identifying force-speed-feed relationships helps in achieving optimal material removal rates and surface finish.
*   **Machine Tool Design:** Knowledge of cutting forces influences the design and rigidity of machine tools.
*   **Power Consumption Estimation:** Cutting forces are directly related to the power required for the drilling operation.
*   **Workpiece Fixturing:** Proper fixturing is necessary to withstand the generated forces and prevent workpiece movement.

**Course Outcome Alignment:**
*   **CO1:** Operating drilling machines requires understanding the forces to ensure proper workpiece fixturing and achieve desired hole quality. (K3)
*   **CO2:** This topic directly addresses applying cutting mechanics by quantifying cutting force and its relation to power consumption. (K3)

---

### 2. Types of Forces in Drilling

The primary forces encountered during the drilling process can be broadly categorized into three components:

*   **Axial Force (Feed Force, $F_z$):**
    *   This is the force applied along the axis of the drill bit, pushing it into the workpiece.
    *   It is primarily responsible for the chip formation and penetration of the drill.
    *   It is also known as the thrust force.

*   **Tangential Force (Cutting Force, Torque, $F_t$):**
    *   This force acts tangentially to the rotational path of the drill bit.
    *   It is responsible for the shearing of the material as the cutting edges rotate.
    *   This force, when multiplied by the radius of action, produces the torque required to rotate the drill.

*   **Radial Force (Perpendicular Force, $F_r$):**
    *   This force acts perpendicular to the axis of the drill bit.
    *   It is typically smaller than the axial and tangential forces, but can become significant, especially in cases of drill runout or misalignment.
    *   It can influence hole eccentricity and surface finish.

**Key Concepts:**

*   **Chip Formation:** The process of material removal through shearing and plastic deformation.
*   **Shear Angle:** The angle at which the material is sheared during chip formation.
*   **Friction:** Occurs between the chip and the rake face of the cutting tool, and between the flank of the drill and the machined surface.

**Textbook Reference:**
*   **HMT's Production Technology (2017):** Chapter on Drilling provides detailed explanations of the mechanics of drilling and the forces involved.

---

### 3. Factors Affecting Cutting Forces

Several factors influence the magnitude of the cutting forces during drilling:

*   **Material Properties:**
    *   **Hardness and Strength:** Harder and stronger materials generally require higher cutting forces.
    *   **Ductility:** More ductile materials tend to produce longer chips, which can increase friction and force.
    *   **Thermal Conductivity:** Materials with low thermal conductivity can experience higher temperatures at the cutting edge, affecting tool wear and forces.

*   **Drill Bit Parameters:**
    *   **Material of Drill Bit:** High-speed steel (HSS) or carbide drills will have different force characteristics.
    *   **Geometry of Drill Bit:**
        *   **Point Angle:** A smaller point angle requires more force.
        *   **Helix Angle:** Affects chip evacuation and cutting forces.
        *   **Rake Angle:** Influences the shearing action and friction.
        *   **Clearance Angle:** Prevents rubbing between the flank and the workpiece.
    *   **Drill Diameter:** Larger diameter drills generally experience higher forces.
    *   **Condition of Drill Bit:** Sharpness and wear of the cutting edges significantly impact forces.

*   **Machining Parameters:**
    *   **Cutting Speed ($v$):** Higher cutting speeds generally lead to lower specific cutting forces (force per unit area of cut), but can increase tool temperature.
    *   **Feed Rate ($f$):** Higher feed rates increase the chip thickness and thus increase the cutting forces.
    *   **Depth of Cut:** In drilling, this is inherently linked to the feed rate.

*   **Coolant/Lubricant:**
    *   Proper use of coolant can reduce friction, lower cutting temperature, and consequently reduce cutting forces and improve tool life.

**Key Concepts:**
*   **Specific Cutting Force:** The cutting force per unit cross-sectional area of the cut.
*   **Tool Wear:** Degradation of the cutting tool's geometry and sharpness.

**Example:**
Drilling a hardened steel workpiece will generally require significantly higher axial and tangential forces compared to drilling an aluminum workpiece, due to the difference in material strength.

---

### 4. Methods and Equipment for Measuring Cutting Forces

Measuring cutting forces in drilling typically involves using specialized equipment to quantify the forces exerted by the drill on the workpiece or the forces exerted by the machine spindle on the drill.

**Common Methods/Equipment:**

*   **Dynamometers:** These are force-measuring instruments that convert mechanical force into an electrical signal.
    *   **Drill-Mounting Dynamometers:** The drill bit is mounted in a dynamometer attached to the spindle. The dynamometer measures the forces acting on the drill.
    *   **Workpiece-Mounting Dynamometers:** The workpiece is mounted on a dynamometer that is fixed to the drilling machine table. This is more common as it directly measures the forces transmitted through the workpiece.

    *   **Types of Dynamometers:**
        *   **Strain Gauge Dynamometers:** These are the most common type. They use strain gauges bonded to a flexible element (e.g., a diaphragm or beam). When a force is applied, the element deforms, causing a change in resistance of the strain gauges, which is then measured as an electrical signal.
        *   **Piezoelectric Dynamometers:** Utilize the piezoelectric effect, where certain materials generate an electric charge when subjected to mechanical stress. They are known for their fast response times.

*   **Force Transducers:** Similar to dynamometers, these convert mechanical force into an electrical signal, often using strain gauges or piezoelectric elements.

*   **Data Acquisition System (DAQ):**
    *   This system is used to record the electrical signals generated by the dynamometer/transducer.
    *   It typically includes an amplifier to boost the signal and an analog-to-digital converter (ADC) to convert the analog signal into digital data.
    *   Software is used to display, analyze, and store the force data over time.

**Experimental Setup:**

1.  **Mounting the Dynamometer:** Securely mount the workpiece-mounting dynamometer onto the drilling machine table. Ensure proper alignment.
2.  **Mounting the Workpiece:** Clamp the workpiece firmly onto the dynamometer. The clamping method should not introduce significant pre-stresses that interfere with the measurement.
3.  **Mounting the Drill Bit:** Secure the drill bit in the drilling machine spindle.
4.  **Connecting the DAQ:** Connect the output of the dynamometer to the data acquisition system.
5.  **Calibration:** Calibrate the dynamometer to ensure accurate force readings. This involves applying known forces and recording the corresponding electrical output.
6.  **Zeroing:** Before starting the drilling operation, ensure the DAQ system is zeroed to account for any residual forces.
7.  **Drilling Operation:** Perform the drilling operation at specified cutting speeds, feed rates, and with or without coolant.
8.  **Data Recording:** Record the force data (axial and tangential) throughout the drilling process.

**Key Concepts:**
*   **Calibration:** The process of comparing a measuring instrument to a known standard.
*   **Strain Gauge:** A sensor whose resistance changes when it is deformed.
*   **Analog-to-Digital Converter (ADC):** A device that converts an analog signal into a digital signal.

**Textbook Reference:**
*   **HMT's Production Technology (2017):** Likely discusses various measuring instruments and experimental techniques used in machining.
*   **Workshop Technology Part I by W. A. J. Chapman (1972):** May provide foundational knowledge on measuring forces and the types of instruments used in workshops.

---

### 5. Analyzing and Interpreting Force Data

The recorded force data can be analyzed to derive valuable insights into the drilling process.

*   **Force Profiles:**
    *   Plotting axial and tangential forces against time or depth of cut reveals the force variations during drilling.
    *   Initially, as the drill penetrates, axial force rises to a peak.
    *   Tangential force might be lower initially and then stabilize.

*   **Specific Cutting Energy:**
    *   The energy consumed per unit volume of material removed.
    *   Can be calculated from force and power measurements.

*   **Force Components in Relation to Machining Parameters:**
    *   **Effect of Feed Rate:** Increasing feed rate generally increases both axial and tangential forces. The relationship is often non-linear.
    *   **Effect of Cutting Speed:** Higher cutting speeds can reduce specific cutting forces but may increase tool temperature and wear. The effect on overall force might be complex.
    *   **Effect of Drill Diameter:** Axial and tangential forces typically increase with drill diameter.

*   **Tool Wear Monitoring:**
    *   An increase in cutting forces over multiple drilling operations on the same drill bit can indicate tool wear.

*   **Hole Quality Assessment:**
    *   Unstable or excessively high forces can correlate with poor hole quality (e.g., chatter marks, burrs, oversized holes).

**Example Analysis:**

Consider a scenario where you have drilled a hole at a feed rate of 0.1 mm/rev and then again at 0.2 mm/rev. If the recorded average axial force at 0.1 mm/rev was 500 N and at 0.2 mm/rev was 900 N, this demonstrates the direct impact of feed rate on axial force. A plot of force vs. feed would likely show an increasing trend.

**Course Outcome Alignment:**
*   **CO2:** Analyzing force data directly relates to applying cutting mechanics, understanding the impact of parameters on force, and inferring power consumption. (K3)

---

### 6. Safety Precautions

Working with drilling machines and force measurement equipment requires strict adherence to safety protocols.

*   **Personal Protective Equipment (PPE):** Always wear safety glasses, appropriate footwear, and potentially gloves when handling tools and workpieces.
*   **Machine Guarding:** Ensure all machine guards are in place and functional.
*   **Workpiece Securing:** The workpiece must be securely clamped to prevent it from spinning or moving during the operation.
*   **Tool Handling:** Handle sharp drill bits with care. Ensure they are properly secured in the chuck.
*   **Electrical Safety:** Be mindful of electrical connections for the dynamometer and DAQ system. Ensure proper grounding.
*   **Emergency Stop:** Familiarize yourself with the location and operation of the emergency stop button.
*   **Clear Workspace:** Keep the work area clean and free from clutter.

---

### 7. Practice Questions and Exercises

**Question 1:**
What are the three main components of cutting forces in the drilling process? Briefly describe each.

**Answer:**
1.  **Axial Force ($F_z$):** The force along the drill axis, responsible for penetration.
2.  **Tangential Force ($F_t$):** The force acting tangentially to the drill's rotation, causing material shearing and contributing to torque.
3.  **Radial Force ($F_r$):** The force perpendicular to the drill axis, which can affect hole concentricity.

**Question 2:**
List at least three factors that influence the magnitude of cutting forces during drilling.

**Answer:**
Any three from the following:
*   Material properties (hardness, strength, ductility)
*   Drill bit geometry (point angle, helix angle, rake angle)
*   Drill bit material and condition (sharpness)
*   Cutting speed
*   Feed rate
*   Coolant usage

**Question 3:**
Describe the basic principle of a strain gauge dynamometer used for measuring cutting forces.

**Answer:**
A strain gauge dynamometer uses strain gauges bonded to a flexible element. When a force is applied to the element, it deforms, changing the electrical resistance of the strain gauges. This change in resistance is measured as an electrical signal, which is proportional to the applied force.

**Question 4 (Lab Exercise Concept):**
You are tasked with measuring the axial and tangential forces for drilling AISI 1018 mild steel using a 10mm diameter HSS drill bit.
*   **Task:** Conduct drilling experiments at two different feed rates: 0.1 mm/rev and 0.2 mm/rev, while keeping the cutting speed constant.
*   **Data Collection:** Record the average axial force ($F_z$) and tangential force ($F_t$) for each feed rate using a dynamometer and DAQ system.
*   **Analysis:**
    1.  Create a table showing the feed rate and the corresponding measured axial and tangential forces.
    2.  Plot axial force vs. feed rate and tangential force vs. feed rate.
    3.  Based on your observations, how does the feed rate affect the axial and tangential forces in drilling?

**Expected Observation/Answer:**
You would expect to observe that both axial and tangential forces increase as the feed rate increases. The plots would show an upward trend. For instance, the forces at 0.2 mm/rev would be higher than those at 0.1 mm/rev. This demonstrates the direct relationship between feed rate and cutting forces.

**Course Outcome Alignment:**
*   **CO2:** This practice question directly relates to measuring and analyzing cutting forces as a function of machining parameters. (K3)

---

### 8. Important Points to Remember

*   **Forces are interdependent:** While we often analyze axial and tangential forces separately, they are both results of the complex interaction at the cutting edge.
*   **Tool condition is paramount:** A sharp drill will produce significantly lower forces than a worn drill.
*   **Feed rate is a major driver of force:** Increasing feed rate directly increases the volume of material being cut per revolution, thus increasing forces.
*   **Cutting speed has a complex effect:** While higher speeds can reduce specific cutting energy, they also increase heat generation, which can lead to increased wear and potentially higher forces if tool life is compromised.
*   **Dynamometers need proper calibration:** Accurate force measurements are dependent on the correct calibration of the measuring instruments.
*   **Safety first:** Always prioritize safety when operating any machine tool.

---

This comprehensive study note provides a foundation for understanding and measuring cutting forces in the drilling process within the context of a Manufacturing Technology Lab. It aligns with the stated course outcomes by emphasizing the practical application of cutting mechanics and machine tool operation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
