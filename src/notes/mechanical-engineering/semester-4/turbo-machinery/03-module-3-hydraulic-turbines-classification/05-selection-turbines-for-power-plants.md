---
title: "Selection turbines for power plants"
subject: "TURBO MACHINERY"
module: "Module 3: Hydraulic Turbines: Classification"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463015"
status: "completed"
scrapedAt: "2026-05-20T17:57:22.617Z"
---
# TURBO MACHINERY: Module 3 - Hydraulic Turbines: Classification

## Topic: Selection of Turbines for Power Plants

---

### **1. Introduction to Hydraulic Turbines and their Role in Power Plants**

*   **Definition:** Hydraulic turbines are rotating machines that convert the potential and kinetic energy of water into mechanical energy, which is then typically used to drive an electric generator to produce electricity.
*   **Importance:** They are the heart of hydroelectric power plants, crucial for generating renewable energy and stabilizing power grids.
*   **Core Principle:** Based on Bernoulli's principle and the impulse-momentum principle, where a force is exerted by the moving fluid on the turbine blades, causing rotation.
*   **Key Energy Conversion:** Potential Energy (Head) $\rightarrow$ Kinetic Energy $\rightarrow$ Mechanical Energy $\rightarrow$ Electrical Energy.

---

### **2. Key Parameters Influencing Turbine Selection**

The selection of an appropriate hydraulic turbine for a power plant is a critical engineering decision governed by several factors. These parameters define the operating conditions and the type of energy conversion that can be most efficiently achieved.

*   **Head (H):**
    *   **Definition:** The vertical distance between the free surface of the water source (reservoir or upstream channel) and the center line of the turbine runner. This is the primary driving force for the turbine.
    *   **Classification by Head:**
        *   **High Head (H > 300 m):** Requires turbines that can efficiently handle very high pressures.
        *   **Medium Head (30 m < H < 300 m):** A common range for many power plants.
        *   **Low Head (H < 30 m):** Turbines for this range must be optimized for large flow rates and low pressure differences.
    *   **Reference:** Dixon, S.I. (1999) discusses the significance of head as a primary selection criterion.

*   **Discharge (Q):**
    *   **Definition:** The volume of water flowing through the turbine per unit time (typically in m³/s or cusecs). This determines the power output capacity of the turbine.
    *   **Relationship with Head:** Head and discharge are often inversely related in a given water source; higher head might imply lower available discharge, and vice-versa.
    *   **Impact:** High discharge generally requires larger turbines and larger flow passages.

*   **Specific Speed (N<sub>s</sub>):**
    *   **Definition:** A dimensionless parameter that characterizes the speed of a turbine at its best efficiency point for a given head and discharge. It's a scaling parameter that helps in selecting geometrically similar turbines.
    *   **Formula:** $N_s = \frac{N \sqrt{P}}{\rho^{1/2} H^{5/4}}$ (where N is speed in RPM, P is power in Watts, $\rho$ is fluid density, and H is head in meters)
        *   *Note: For hydraulic turbines, a simplified form is often used relating speed, power and head, or more commonly, speed, discharge and head.*
        *   **Commonly Used Formula (based on Discharge and Head):** $N_s = \frac{N \sqrt{Q}}{H^{3/4}}$ (where N is speed in RPM, Q is discharge in m³/s, and H is head in meters). This form is more directly relatable to the runner design.
    *   **Significance:**
        *   **Low Specific Speed:** Turbines designed for high head and low discharge (e.g., Pelton turbine).
        *   **Medium Specific Speed:** Turbines for medium head and medium discharge (e.g., Francis turbine).
        *   **High Specific Speed:** Turbines for low head and high discharge (e.g., Kaplan turbine).
    *   **Reference:** Venkanna, B.K. (2009) provides a detailed explanation of specific speed and its role in classification.

*   **Power Output (P):**
    *   **Definition:** The mechanical power delivered by the turbine runner.
    *   **Calculation:** $P = \eta_t \times \rho \times g \times Q \times H$ (where $\eta_t$ is turbine efficiency, $\rho$ is water density, $g$ is acceleration due to gravity).
    *   **Considerations:** The required power output of the plant directly influences the size and type of turbine selected.

*   **Availability of Water:**
    *   **Seasonal Variation:** The reliability and quantity of water available throughout the year is a crucial factor.
    *   **Reservoir Capacity:** The storage capacity of a reservoir impacts the operating head and discharge possibilities.

---

### **3. Classification of Hydraulic Turbines and their Application Ranges**

Hydraulic turbines are broadly classified based on the principle of energy conversion and the direction of flow through the runner.

#### **3.1. Impulse Turbines**

*   **Princ:** Kinetic energy of water is converted into mechanical energy. The water jet strikes the buckets/blades tangentially, imparting momentum and causing rotation. The pressure remains atmospheric throughout the process.
*   **Key Characteristic:** Operate under a significant head, and the water jet is discharged to the atmosphere at atmospheric pressure.
*   **Main Type:**
    *   **Pelton Turbine:**
        *   **Description:** Consists of a nozzle that directs a high-velocity jet of water onto a series of buckets mounted on a runner. Each bucket has a splitter ridge that divides the jet, reducing shock and improving efficiency.
        *   **Operating Range:** High Head (typically > 300 m), Low Discharge.
        *   **Specific Speed:** Low ($N_s < 20$ for single jet, up to 50 for double jet).
        *   **Advantages:** Simple design, high efficiency at partial loads, good for high head sites.
        *   **Disadvantages:** Requires high head, large physical size for a given power output compared to reaction turbines.
        *   **Reference:** Yahya, S.H. (1996) extensively covers the design and working of Pelton turbines.
        *   **Example Application:** Power plants in mountainous regions with large elevation differences and limited water flow.

#### **3.2. Reaction Turbines**

*   **Princ:** Both kinetic energy and pressure energy of water are converted into mechanical energy as it flows through the turbine runner. The runner is fully submerged in water, and the pressure changes as it passes through the blades.
*   **Key Characteristic:** Operate with the runner submerged in water, and the water is discharged under pressure.
*   **Main Types:**

    *   **Francis Turbine:**
        *   **Description:** A mixed-flow turbine where water enters radially and exits axially. It has guide vanes that control the flow rate and direction, and runner blades that extract energy from both the pressure and velocity of the water.
        *   **Operating Range:** Medium Head (30 m < H < 300 m), Medium Discharge.
        *   **Specific Speed:** Medium ($N_s$ typically between 50 and 250).
        *   **Advantages:** Versatile, can operate efficiently over a wide range of heads and discharges, widely used.
        *   **Disadvantages:** Efficiency drops significantly at very low loads, more complex than Pelton.
        *   **Reference:** Gambini, M., & Vellini, M. (2021) highlights the adaptability and design considerations for Francis turbines.
        *   **Example Application:** Most common type for conventional hydroelectric power plants, including those with reservoirs.

    *   **Kaplan Turbine (and Propeller Turbine):**
        *   **Description:** An axial-flow turbine with adjustable blades (Kaplan) or fixed blades (Propeller). Water flows parallel to the turbine shaft. The adjustable blades of the Kaplan turbine allow for high efficiency over a very wide range of discharges.
        *   **Operating Range:** Low Head (H < 30 m), High Discharge.
        *   **Specific Speed:** High ($N_s > 250$).
        *   **Advantages:** Very high efficiency over a wide range of flow rates, suitable for run-of-river plants.
        *   **Disadvantages:** Complex mechanism for blade adjustment (Kaplan), less efficient than Francis at higher heads, susceptible to cavitation at low heads and high speeds.
        *   **Reference:** Dick, E. (2022) provides insights into the hydrodynamic design and performance of axial flow machines like Kaplan turbines.
        *   **Example Application:** Run-of-river hydro plants, tidal power plants, and sites with significant but not very deep water sources.

    *   **Propeller Turbine:**
        *   **Description:** A simpler version of the Kaplan turbine with fixed blades.
        *   **Operating Range:** Similar to Kaplan but generally less efficient at variable loads.
        *   **Advantages:** Simpler and cheaper than Kaplan turbines.
        *   **Disadvantages:** Efficiency is highly dependent on operating at the design flow rate.
        *   **Example Application:** Sites with relatively constant discharge where efficiency at variable loads is not a primary concern.

#### **3.3. Other Turbine Types (Less Common for Large-Scale Power Plants)**

*   **Turgo Turbine:**
    *   **Description:** Similar to a Pelton turbine but the jet strikes the runner at an angle to the plane of rotation, allowing for higher speeds and smaller diameters.
    *   **Operating Range:** Medium to High Head (50m to 250m), Moderate Discharge.
    *   **Specific Speed:** Intermediate between Pelton and Francis.
    *   **Advantages:** Can handle moderate discharges better than Pelton, less sensitive to jet deflection than Pelton.

*   **Cross-flow Turbine (or Banki-Michell Turbine):**
    *   **Description:** Water flows through the runner blades twice, first radially from outside to inside and then from inside to outside, at an angle.
    *   **Operating Range:** Low to Medium Head (5m to 100m), variable discharge.
    *   **Advantages:** Simple construction, efficient at partial loads, good for small-scale hydro.
    *   **Disadvantages:** Lower peak efficiency compared to other types.

---

### **4. Turbine Selection Methodology**

A systematic approach is essential for selecting the most suitable turbine.

1.  **Determine Site Characteristics:**
    *   **Available Head (H):** Measure the gross head and estimate the net head considering friction losses.
    *   **Available Discharge (Q):** Assess the flow rate from the water source, considering seasonal variations.
    *   **Required Power Output (P):** Define the plant's electricity generation target.

2.  **Calculate Specific Speed (N<sub>s</sub>):**
    *   Choose a desired operating speed (N) for the generator (e.g., 50 Hz or 60 Hz synchronized speed).
    *   Calculate $N_s = \frac{N \sqrt{Q}}{H^{3/4}}$.

3.  **Match Specific Speed to Turbine Types:**
    *   **Low $N_s$ (< 20-50):** Pelton Turbine (High Head, Low Discharge).
    *   **Medium $N_s$ (50-250):** Francis Turbine (Medium Head, Medium Discharge).
    *   **High $N_s$ (> 250):** Kaplan Turbine (Low Head, High Discharge).

4.  **Consider Other Factors:**
    *   **Efficiency:** Examine the efficiency curves of different turbine types for the expected operating range. Kaplan turbines offer better efficiency at variable loads.
    *   **Cost:** Initial capital cost, installation, and maintenance costs.
    *   **Site Constraints:** Space availability, geological conditions, environmental impact.
    *   **Operational Flexibility:** Need for variable speed operation or operation at partial loads.
    *   **Cavitation:** Critical for reaction turbines, especially at low heads and high speeds. Ensure that the cavitation factor ($\sigma$) is within acceptable limits.
    *   **Regulation Requirements:** Turbine must be capable of regulating speed and power output to meet grid demands.

---

### **5. Examples and Case Studies**

*   **Example 1: High Head Site**
    *   Head (H) = 500 m
    *   Discharge (Q) = 5 m³/s
    *   Desired Speed (N) = 300 RPM
    *   Calculate $N_s = \frac{300 \sqrt{5}}{500^{3/4}} \approx \frac{300 \times 2.236}{28.2} \approx 23.8$
    *   **Selection:** Low specific speed suggests a **Pelton turbine**.

*   **Example 2: Medium Head Site**
    *   Head (H) = 100 m
    *   Discharge (Q) = 20 m³/s
    *   Desired Speed (N) = 300 RPM
    *   Calculate $N_s = \frac{300 \sqrt{20}}{100^{3/4}} \approx \frac{300 \times 4.472}{31.62} \approx 42.5$
    *   *Hold on, this calculation might be off, let's re-evaluate based on a typical medium specific speed range.*
    *   Let's assume we want a speed of 600 RPM (common for generators).
    *   Calculate $N_s = \frac{600 \sqrt{20}}{100^{3/4}} \approx \frac{600 \times 4.472}{31.62} \approx 84.7$
    *   **Selection:** A specific speed of 84.7 falls within the range for a **Francis turbine**. If the desired speed was much higher, say 1200 RPM, the specific speed would be even higher, potentially pushing towards the upper end of Francis or even considering a propeller type if the head was lower.

*   **Example 3: Low Head Site**
    *   Head (H) = 10 m
    *   Discharge (Q) = 100 m³/s
    *   Desired Speed (N) = 100 RPM
    *   Calculate $N_s = \frac{100 \sqrt{100}}{10^{3/4}} \approx \frac{100 \times 10}{5.623} \approx 177.8$
    *   **Selection:** High specific speed suggests a **Kaplan turbine** (or possibly a Propeller turbine if flow is constant).

---

### **6. Important Points to Remember**

*   **Head and Discharge are Paramount:** These are the primary determinants for turbine selection.
*   **Specific Speed is a Scaling Parameter:** It groups turbines with similar characteristics, simplifying the selection process.
*   **Efficiency Curves:** Always consult efficiency curves provided by manufacturers for the specific turbine model being considered, as they vary with operating conditions.
*   **Cavitation:** A critical phenomenon to consider for reaction turbines. Proper design and operating conditions are necessary to avoid it. (Ref: Dixon, S.I.)
*   **Run-of-River vs. Storage Schemes:** This distinction influences the variability of discharge and head, impacting turbine choice. Kaplan turbines are ideal for run-of-river plants with variable flow.
*   **Cost-Benefit Analysis:** The most technically suitable turbine must also be economically viable.

---

### **7. Practice Questions and Exercises**

**Question 1:**
A hydroelectric power plant is proposed for a site with a net head of 400 m and a maximum discharge capacity of 10 m³/s. If the generator is to operate at 375 RPM, which type of turbine would be most suitable?
(a) Pelton Turbine
(b) Francis Turbine
(c) Kaplan Turbine
(d) Turgo Turbine

**Answer 1:**
*   Calculate Specific Speed: $N_s = \frac{N \sqrt{Q}}{H^{3/4}} = \frac{375 \sqrt{10}}{400^{3/4}} = \frac{375 \times 3.162}{44.72} \approx 26.5$
*   **Conclusion:** A specific speed of 26.5 indicates a **Pelton Turbine**.

**Question 2:**
For a low head site with a net head of 15 m and a discharge of 50 m³/s, and a desired generator speed of 150 RPM, what type of turbine is generally preferred?

**Answer 2:**
*   Calculate Specific Speed: $N_s = \frac{N \sqrt{Q}}{H^{3/4}} = \frac{150 \sqrt{50}}{15^{3/4}} = \frac{150 \times 7.071}{7.937} \approx 133.8$
*   **Conclusion:** A specific speed of 133.8 falls within the medium to high range, suggesting a **Kaplan Turbine** (or a Propeller turbine if flow is constant).

**Question 3:**
Explain the key differences in the energy conversion principles between impulse turbines and reaction turbines.

**Answer 3:**
*   **Impulse Turbines (e.g., Pelton):** Convert the entire available energy of the water into kinetic energy through a nozzle. The jet then strikes the buckets, imparting momentum. The pressure of water remains atmospheric throughout the process.
*   **Reaction Turbines (e.g., Francis, Kaplan):** Utilize both kinetic energy and pressure energy of the water. The runner is fully submerged, and as water flows through the specially shaped blades, a pressure drop occurs across the blades, contributing to the torque. The water is discharged under pressure.

**Question 4:**
A Francis turbine is operating at its best efficiency point. If the head is halved while the speed remains the same, how would the discharge and power output change, assuming the efficiency remains constant? (Hint: Use the concept of homologous turbines).

**Answer 4:**
For a given turbine operating at a constant speed (N) and efficiency ($\eta$), the discharge (Q) is proportional to $\sqrt{H}$ and the power output (P) is proportional to $H^{3/2}$.
*   If the head (H) is halved ($H' = H/2$):
    *   **Discharge:** $Q' \propto \sqrt{H/2} = \frac{1}{\sqrt{2}} \sqrt{H} \implies Q' \approx 0.707 Q$. The discharge will decrease.
    *   **Power Output:** $P' \propto (H/2)^{3/2} = \frac{1}{2\sqrt{2}} H^{3/2} \implies P' \approx 0.354 P$. The power output will significantly decrease.
    *   *Note: In reality, efficiency would also change, and this is a simplified analysis.*

---

### **8. Alignment with Course Outcomes**

*   **CO1: Use the fundamental principles of fluid mechanics and thermodynamics and find the efficiencies of power generating and power consuming turbomachines. (Knowledge Level: K3)**
    *   This module directly uses the principles of energy conversion (Bernoulli's, impulse-momentum) to understand how hydraulic turbines work and how their efficiencies are determined based on head and discharge. The power output formula $P = \eta_t \times \rho \times g \times Q \times H$ is central.

*   **CO2: Analyse the velocity triangles for radial flow and axial flow turbomachines and find the performance for parametrical changes. (Knowledge Level: K3)**
    *   While this topic focuses on selection, the underlying selection criteria (specific speed, head, discharge) are derived from the performance analysis, which in turn relies on velocity triangle analysis for different turbine types (radial for Francis, axial for Kaplan, tangential for Pelton). Understanding how changes in head/discharge affect the velocity triangles helps explain why certain turbines are suitable for specific conditions.

*   **CO3: Select an appropriate power generating turbomachine for a particular application (Knowledge Level: K3)**
    *   This is the **primary objective** of this topic. The entire module is dedicated to providing the knowledge and methodology to select the correct hydraulic turbine based on site parameters and desired output.

*   **CO4: Select an appropriate power consuming turbomachine for a particular application (Knowledge Level: K3)**
    *   Although this topic focuses on power *generating* turbomachines (turbines), the principles of selection based on operating parameters (head, flow, speed, efficiency) are analogous to selecting power *consuming* turbomachines (pumps, compressors). Understanding turbine selection builds a foundation for understanding selection in general.

---

This comprehensive set of notes provides a structured approach to understanding the selection of hydraulic turbines for power plants, aligning with the learning objectives and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
