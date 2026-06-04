---
title: "Bi metallic thermometer"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 4: Flow measurement: Gross flow rate measuring meters"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464330"
status: "completed"
scrapedAt: "2026-05-20T18:11:58.638Z"
---
# ENGINEERING INSTRUMENTS AND MEASUREMENTS
## Module 4: Flow Measurement: Gross Flow Rate Measuring Meters
## Topic: Bi-metallic Thermometer

---

### **1. Introduction to Bi-metallic Thermometers**

Bi-metallic thermometers are **temperature sensing devices** that operate on the principle of **differential thermal expansion** of two dissimilar metals. They are widely used for **indicating temperature**, particularly in applications where a direct visual reading is desired. While primarily used for temperature measurement, their application in the context of "Gross Flow Rate Measuring Meters" is often in **monitoring the temperature of the fluid** or the surrounding environment where the flow is being measured, which can indirectly influence flow rate or the functioning of other flow meters.

**Key Concepts:**

*   **Differential Thermal Expansion:** Different materials expand or contract by different amounts when subjected to a change in temperature.
*   **Bimetallic Strip/Helix:** Two dissimilar metals with different coefficients of thermal expansion are joined together, typically by brazing or welding, to form a composite strip or helix.

**Textbook References:**

*   **Dobelin, E.O. (1990).** *Measurement Systems (Applications and Design)*: Discusses fundamental principles of thermal expansion and their application in sensors.
*   **Sawhney, A.K. & Sawhney, P. (2009).** *Mechanical Measurements and Instrumentation & Control*: Provides detailed explanations of various mechanical measurement devices, including bimetallic thermometers.
*   **Nakra, B.C. & Chaudhry, K.K. (2009).** *Instrumentation Measurement and Analysis*: Covers the theory and applications of thermal measuring instruments.

---

### **2. Principle of Operation**

When a bimetallic strip is heated, the metal with the **higher coefficient of thermal expansion** will expand more than the metal with the **lower coefficient of thermal expansion**. Because the two metals are bonded together, this differential expansion causes the strip to **bend**. The direction and magnitude of the bending are directly proportional to the change in temperature.

**Detailed Explanation:**

Consider a bimetallic strip made of metal A (higher coefficient of thermal expansion, $\alpha_A$) and metal B (lower coefficient of thermal expansion, $\alpha_B$). When heated by $\Delta T$, the length of metal A changes by $\Delta L_A = L_0 \alpha_A \Delta T$, and the length of metal B changes by $\Delta L_B = L_0 \alpha_B \Delta T$, where $L_0$ is the initial length. Since $\alpha_A > \alpha_B$, $\Delta L_A > \Delta L_B$.

To accommodate this difference in expansion, the strip bends. The metal with the greater expansion (metal A) will be on the **outside of the curve**, and the metal with lesser expansion (metal B) will be on the **inside of the curve**.

The curvature of the bimetallic strip is inversely proportional to the temperature change.

**Formula:**

The deflection ($\delta$) of a bimetallic strip can be approximated by:

$\delta \propto L^2 \frac{(\alpha_1 - \alpha_2) \Delta T}{t}$

Where:
*   $L$ is the length of the strip
*   $\alpha_1$ and $\alpha_2$ are the coefficients of thermal expansion of the two metals ($\alpha_1 > \alpha_2$)
*   $\Delta T$ is the change in temperature
*   $t$ is the thickness of the strip

**Important Points to Remember:**

*   The greater the difference in thermal expansion coefficients, the more sensitive the thermometer.
*   The length and thickness of the strip also influence the bending.

---

### **3. Construction and Types**

Bimetallic thermometers are typically constructed with the bimetallic strip formed into a **helix** or a **spiral** to achieve a compact and sensitive design. This helical or spiral shape allows for a longer effective length of the bimetallic strip within a limited space.

**Common Configurations:**

*   **Spiral Type:** The bimetallic strip is wound in a spiral. As temperature changes, the spiral expands or contracts, causing rotation at the center.
*   **Helical Type:** The bimetallic strip is wound into a helix. Similar to the spiral type, temperature changes cause expansion or contraction, leading to rotation.

**Components:**

1.  **Bimetallic Element:** The core of the thermometer, usually a helix or spiral.
2.  **Pointer:** Attached to the free end of the bimetallic element.
3.  **Scale:** Calibrated to indicate temperature.
4.  **Case:** Protects the internal components.
5.  **Stem:** Houses the bimetallic element and is inserted into the medium whose temperature is to be measured.

**Diagrammatic Representation (Conceptual):**

```
          ^ Pointer
          |
      --------
     /        \  <-- Bimetallic Helix/Spiral
    |          |
    |          |  <-- Stem
    ----------
      |
   (Bulb/Sensing End)
```

**Textbook References:**

*   **Sawhney, A.K. & Sawhney, P. (2009).** *Mechanical Measurements and Instrumentation & Control*: Illustrates various bimetallic thermometer designs and their components.
*   **Rajput, R.K. (2006).** *Mechanical Measurements and Instrumentation*: Provides a clear explanation of the constructional details.

---

### **4. Working Mechanism and Application in Flow Measurement**

In the context of flow measurement, bimetallic thermometers are not typically used to measure the flow rate directly. Instead, they are employed to:

*   **Monitor Fluid Temperature:** Many flow meters' accuracy and performance are dependent on fluid temperature (e.g., viscosity changes). A bimetallic thermometer can provide a visual indication of the fluid temperature.
*   **Indicate Process Temperature:** In systems where flow is a critical parameter, the overall process temperature might also be important. Bimetallic thermometers can be used to monitor this.
*   **Temperature Compensation:** While not a direct compensation mechanism, knowing the fluid temperature allows for potential manual or automated correction factors to be applied to flow readings from other instruments.

**How it works with Flow Meters:**

Imagine a pipeline carrying a fluid where the flow rate is measured by a Venturi meter or an orifice plate. The density of the fluid, which affects the flow reading, changes with temperature. A bimetallic thermometer placed in the pipeline near the flow meter will indicate the fluid's temperature. This temperature reading can then be used by an operator or a control system to adjust the flow rate calculation for accuracy.

**Example:**

In a chemical processing plant, a flow meter measures the flow of a viscous liquid. The viscosity of this liquid is highly dependent on temperature. A bimetallic thermometer is installed upstream of the flow meter to display the liquid's temperature. If the temperature is high, the liquid is less viscous, and the flow meter might read a higher flow rate for the same volumetric flow. By observing the bimetallic thermometer, an operator can understand this relationship and potentially adjust process parameters or apply a correction factor to the flow reading.

**Course Outcome Alignment:**

*   **CO4:** To measure and temperature, enabling them to address complex engineering challenges in these areas effectively. (Knowledge Level: K4) - This directly relates to using bimetallic thermometers for temperature measurement within flow systems.

---

### **5. Advantages and Disadvantages**

**Advantages:**

*   **Simplicity:** No external power source is required for basic indication.
*   **Ruggedness:** Can withstand harsh industrial environments.
*   **Cost-Effective:** Generally less expensive than other types of thermometers.
*   **Direct Reading:** Provides an easy-to-read visual indication.
*   **Good for High Temperatures:** Certain bimetallic combinations can operate at very high temperatures.
*   **No Calibration Drift (Relatively):** Less prone to calibration drift compared to some other sensors.

**Disadvantages:**

*   **Limited Accuracy:** Generally less accurate than electrical thermometers (thermocouples, RTDs).
*   **Limited Sensitivity:** The bending might not be significant for very small temperature changes.
*   **Lagging:** Has a relatively slow response time to temperature changes.
*   **Linearity Issues:** The relationship between temperature and deflection might not be perfectly linear over a wide range.
*   **Mechanical Wear:** Moving parts can be subject to wear and tear over time.
*   **Not Suitable for Remote Indication:** The indication is local; requires a separate system for remote reading.

**Reference Book Integration:**

*   **Singh, S.K. (2009).** *Industrial Instrumentation and Control*: Often discusses the practical pros and cons of various industrial sensors, including bimetallic thermometers in an industrial context.

---

### **6. Performance Characteristics (Static and Dynamic)**

**Static Characteristics:**

*   **Range:** The minimum and maximum temperature the thermometer can measure.
*   **Sensitivity:** The change in deflection per unit change in temperature. This is related to the coefficient of thermal expansion difference and the geometry of the element.
*   **Accuracy:** The degree of closeness of the measured value to the true value. This is typically expressed as a percentage of the full-scale reading.
*   **Hysteresis:** The difference in readings at a given temperature when approached from different directions (heating vs. cooling).
*   **Reproducibility:** The ability of the instrument to produce the same reading under the same conditions repeatedly.

**Dynamic Characteristics:**

*   **Response Time:** The time it takes for the thermometer's pointer to reach a certain percentage (e.g., 63.2%) of the final reading after a sudden change in temperature. This is influenced by the mass and thermal inertia of the bimetallic element and the surrounding medium.
*   **Lag:** Similar to response time, indicating the delay in the instrument's reaction to temperature changes.

**Course Outcome Alignment:**

*   **CO1:** To identify and classify different measuring instruments and their static and dynamic characteristics, ensuring proper selection and usage for various engineering applications (Knowledge Level: K2) - This section directly addresses the static and dynamic characteristics relevant for instrument selection.

---

### **7. Selection Criteria**

When selecting a bimetallic thermometer for a specific application, consider the following:

*   **Temperature Range:** Ensure the instrument's range covers the expected operating temperatures.
*   **Accuracy Requirements:** If high precision is needed, other thermometer types might be more suitable.
*   **Response Time:** For applications with rapidly changing temperatures, a bimetallic thermometer might be too slow.
*   **Environmental Conditions:** Consider vibration, shock, and corrosive atmospheres.
*   **Mounting and Installation:** The physical size and connection type should be compatible with the system.
*   **Cost:** Bimetallic thermometers are generally cost-effective for basic indication.
*   **Need for Remote Indication:** If remote monitoring is required, other technologies (e.g., thermocouples with transmitters) are necessary.

**Course Outcome Alignment:**

*   **CO5:** To select measurement system for engineering applications (Knowledge Level: K3) - This emphasizes the practical application of understanding instrument characteristics for selection.

---

### **8. Practice Questions and Answers**

**Question 1:** What is the fundamental principle behind the operation of a bimetallic thermometer?
**Answer:** The fundamental principle is the differential thermal expansion of two dissimilar metals joined together.

**Question 2:** Describe how a bimetallic strip bends when heated. Which metal will be on the outer curve?
**Answer:** When heated, the metal with the higher coefficient of thermal expansion expands more. This causes the strip to bend, with the metal having the higher coefficient of thermal expansion located on the outer (convex) side of the curve.

**Question 3:** List two advantages and two disadvantages of using bimetallic thermometers.
**Answer:**
*   **Advantages:** Simplicity, cost-effectiveness, ruggedness.
*   **Disadvantages:** Limited accuracy, slow response time, limited sensitivity.

**Question 4:** In the context of flow measurement, how might a bimetallic thermometer be used?
**Answer:** It can be used to monitor the fluid temperature, which can indirectly affect flow rate accuracy (e.g., due to viscosity changes) or be an important process parameter itself.

**Question 5:** If you need a temperature measurement with very high accuracy and a fast response time, would a bimetallic thermometer be your first choice? Justify your answer.
**Answer:** No. Bimetallic thermometers generally have limited accuracy and a relatively slow response time compared to instruments like thermocouples or RTDs.

---

### **9. Important Points to Remember (Summary)**

*   **Principle:** Differential thermal expansion of two dissimilar metals.
*   **Construction:** Utilizes bimetallic strips, often in helical or spiral forms.
*   **Function:** Bending or curling due to temperature changes, which is then indicated by a pointer.
*   **Application in Flow:** Primarily for monitoring fluid temperature, not direct flow measurement.
*   **Pros:** Simple, rugged, cost-effective for basic indication.
*   **Cons:** Lower accuracy and slower response than electrical thermometers.
*   **Key Characteristics:** Range, sensitivity, accuracy, response time.
*   **Selection:** Depends on required accuracy, response speed, operating environment, and cost.

---

This comprehensive study note provides a detailed understanding of bimetallic thermometers, their working, applications, and characteristics, aligning with the learning outcomes and course objectives for Module 4 of Engineering Instruments and Measurements.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
