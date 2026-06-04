---
title: "Determination of viscosity of lubricating oils and fuels and its variation with Temperature"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 1: Determination of viscosity of lubricating oils and fuels and its variation with Temperature"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636ad"
status: "completed"
scrapedAt: "2026-05-20T18:02:09.615Z"
---
# THERMAL ENGINEERING LAB-1: Determination of Viscosity of Lubricating Oils and Fuels and its Variation with Temperature

## Module 1: Determination of Viscosity of Lubricating Oils and Fuels and its Variation with Temperature

### Topic: Determination of Viscosity of Lubricating Oils and Fuels and its Variation with Temperature

---

### 1. Introduction to Viscosity

**Definition:** Viscosity is a measure of a fluid's resistance to flow. It quantifies the internal friction between layers of fluid as they move past each other.

**Importance in Thermal Engineering:**
*   **Lubrication:** Viscosity is crucial for lubricating oils. It determines how well a lubricant can reduce friction and wear between moving parts. An oil that is too thin might not provide adequate film strength, while an oil that is too thick can increase frictional losses and pumping power requirements.
*   **Fluid Transport:** For fuels and other fluids, viscosity affects the ease with which they can be pumped, atomized (for combustion), or transported through pipelines.
*   **Heat Transfer:** Viscosity plays a role in convective heat transfer. Higher viscosity generally leads to less efficient convection due to increased resistance to fluid motion.
*   **System Performance:** In various thermal systems (e.g., hydraulic systems, cooling systems), the viscosity of the working fluid directly impacts system efficiency and performance.

**Course Outcome Alignment:**
*   **CO1: Measure thermo-physical properties of solid, liquid and gaseous fuels (Knowledge Level: K4)** - This topic directly addresses the measurement of a key thermo-physical property (viscosity) of liquid fuels.

---

### 2. Types of Viscosity

There are two main types of viscosity:

*   **Dynamic Viscosity (Absolute Viscosity), $\mu$:**
    *   **Definition:** Dynamic viscosity is the ratio of shear stress to shear rate in a Newtonian fluid. It represents the internal resistance to flow.
    *   **Units:**
        *   SI Units: Pascal-second (Pa·s) or Newton-second per square meter (N·s/m²).
        *   CGS Units: Poise (P), where 1 P = 0.1 Pa·s.
        *   Commonly used unit: centiPoise (cP), where 1 cP = 0.01 P = 0.001 Pa·s.
    *   **Formula:** $\tau = \mu \frac{du}{dy}$
        *   $\tau$: Shear stress (N/m²)
        *   $\mu$: Dynamic viscosity (Pa·s)
        *   $\frac{du}{dy}$: Velocity gradient or shear rate (s⁻¹)
    *   **Reference (Cengel, Heat Transfer: A Practical Approach):** Cengel likely discusses viscosity in the context of fluid properties and their impact on heat transfer, potentially defining dynamic viscosity.

*   **Kinematic Viscosity, $\nu$:**
    *   **Definition:** Kinematic viscosity is the ratio of dynamic viscosity to density. It represents the resistance to flow under gravity.
    *   **Units:**
        *   SI Units: Square meter per second (m²/s).
        *   CGS Units: Stokes (St), where 1 St = 10⁻⁴ m²/s.
        *   Commonly used unit: centiStokes (cSt), where 1 cSt = 10⁻⁶ m²/s.
    *   **Formula:** $\nu = \frac{\mu}{\rho}$
        *   $\nu$: Kinematic viscosity (m²/s)
        *   $\mu$: Dynamic viscosity (Pa·s)
        *   $\rho$: Density (kg/m³)
    *   **Reference (Sachdeva, Fundamentals of Engineering, Heat and Mass Transfer):** Sachdeva's book is a strong candidate for detailing the relationship between dynamic and kinematic viscosity and their importance in fluid mechanics and heat transfer calculations.

**Important Point:** For many practical applications, especially in lubrication and fuel handling, kinematic viscosity is more commonly used because it directly relates to flow behavior under gravity, which is often relevant in engine operation and storage.

---

### 3. Factors Affecting Viscosity

The primary factor affecting the viscosity of liquids (like lubricating oils and fuels) is **temperature**.

*   **Effect of Temperature on Liquid Viscosity:**
    *   **General Trend:** For liquids, viscosity **decreases** significantly as temperature **increases**.
    *   **Reason:** In liquids, viscosity arises from intermolecular cohesive forces. As temperature rises, molecules gain kinetic energy, overcome these cohesive forces more easily, and slide past each other with less resistance.
    *   **Reference (Incropera & DeWitt, Heat and Mass Transfer):** Incropera and DeWitt will likely provide a detailed explanation of the molecular mechanisms behind the temperature dependence of viscosity in liquids, especially when discussing forced convection.

*   **Effect of Temperature on Gas Viscosity:**
    *   **General Trend:** For gases, viscosity **increases** as temperature **increases**.
    *   **Reason:** In gases, viscosity arises from the transfer of momentum between layers due to molecular collisions. As temperature rises, molecules move faster, leading to more frequent and energetic collisions, thus increasing momentum transfer and viscosity.
    *   **Note:** While this lab focuses on liquids, understanding the contrasting behavior in gases provides a comprehensive view.

---

### 4. Experimental Determination of Viscosity

Several methods can be used to determine the viscosity of liquids. The most common ones in a lab setting are:

*   **Capillary Viscometers (e.g., Ostwald Viscometer, Ubbelohde Viscometer):**
    *   **Princ:** These viscometers measure the time taken for a fixed volume of liquid to flow through a narrow capillary tube of known dimensions under the influence of gravity.
    *   **Procedure (General):**
        1.  Clean the viscometer thoroughly.
        2.  Fill the viscometer with the liquid sample to the marked level.
        3.  Place it in a thermostat bath maintained at the desired temperature.
        4.  Allow sufficient time for the liquid to reach the bath temperature.
        5.  Using suction or pressure, draw the liquid up into the upper bulb and beyond the upper timing mark.
        6.  Release the suction and allow the liquid to flow down.
        7.  Start the stopwatch when the liquid meniscus passes the upper timing mark and stop it when it passes the lower timing mark.
        8.  Record the flow time ($t$).
        9.  Repeat measurements for accuracy.
    *   **Calculation:**
        *   **For known viscosity standards (e.g., distilled water):** The viscometer constant ($K$) can be determined using a liquid of known viscosity ($\mu_{std}$) and density ($\rho_{std}$) at the same temperature:
            $K = \frac{\nu_{std}}{t_{std}} = \frac{\mu_{std}}{\rho_{std} t_{std}}$
        *   **For unknown sample:** The kinematic viscosity of the unknown sample ($\nu_{unk}$) is calculated using the viscometer constant and the measured flow time ($t_{unk}$):
            $\nu_{unk} = K \cdot t_{unk}$
        *   The dynamic viscosity can then be calculated if the density of the sample at that temperature is known: $\mu_{unk} = \nu_{unk} \cdot \rho_{unk}$.
    *   **Reference (Holman, Heat Transfer):** Holman might describe capillary viscometry as a method for determining fluid properties relevant to heat transfer.

*   **Falling Sphere Viscometer:**
    *   **Princ:** This method measures the time taken for a sphere of known diameter and density to fall through a column of the fluid under gravity. The terminal velocity of the sphere is related to the fluid's viscosity.
    *   **Formula (Stokes' Law):** For a sphere falling slowly through a viscous fluid, the drag force is given by $F_D = 6 \pi \mu R v$, where R is the sphere radius and v is its velocity. At terminal velocity, the drag force balances the net gravitational force (buoyancy included).
    *   **Calculation:** The viscosity can be calculated from the terminal velocity, sphere properties, and fluid density.
    *   **Application:** Suitable for more viscous fluids where capillary methods might be slow.

*   **Rotational Viscometers (e.g., Brookfield Viscometer, Searle Viscometer):**
    *   **Princ:** These viscometers measure the torque required to rotate a spindle (or cup) submerged in the fluid at a known speed. The torque is directly related to the viscosity.
    *   **Procedure:**
        1.  Select an appropriate spindle and speed.
        2.  Immerse the spindle in the fluid sample.
        3.  Set the viscometer to the desired rotational speed.
        4.  The instrument directly displays the viscosity (often after applying a factor).
    *   **Advantages:** Can measure a wide range of viscosities, suitable for non-Newtonian fluids (though we assume Newtonian for basic labs), and can often provide continuous readings.

---

### 5. Determining Viscosity Variation with Temperature

To study the variation of viscosity with temperature, the experiment needs to be conducted at multiple controlled temperatures.

*   **Experimental Setup:**
    *   **Viscometer:** As described above (e.g., Ostwald or Ubbelohde).
    *   **Thermostat Bath:** A precisely controlled water bath or oil bath capable of maintaining different temperatures accurately (e.g., ±0.1°C).
    *   **Thermometer:** A calibrated thermometer or digital temperature probe to monitor the bath temperature.
    *   **Stopwatch:** For timing the fluid flow.
    *   **Sample:** Lubricating oil or fuel.
    *   **Other Equipment:** Beakers, pipettes, distilled water (for cleaning and calibration), density meter or hydrometer.

*   **Procedure:**
    1.  **Preparation:** Clean the viscometer and fill it with the sample.
    2.  **Temperature Control:**
        *   Set the thermostat bath to the lowest desired temperature.
        *   Immerse the viscometer in the bath and allow sufficient time for thermal equilibrium (typically 10-15 minutes).
        *   Ensure the fluid in the viscometer has reached the bath temperature by observing no further change in its level or by measuring directly.
    3.  **Measurement:**
        *   Record the temperature of the bath accurately.
        *   Perform the viscosity measurement (e.g., time of flow in a capillary viscometer) as described previously. Take multiple readings (at least 3) at this temperature and calculate the average flow time.
    4.  **Repeat for Different Temperatures:**
        *   Increase the bath temperature to the next desired value.
        *   Allow for thermal equilibrium again.
        *   Record the temperature and perform viscosity measurements.
        *   Continue this process for a range of temperatures (e.g., every 5°C or 10°C) relevant to the application.
    5.  **Density Measurement:** If calculating dynamic viscosity, measure the density of the sample at each experimental temperature using a hydrometer or density meter.

*   **Data Analysis and Presentation:**
    *   **Table:** Create a table summarizing the results: Temperature (°C or K), Flow Time (s), Density (kg/m³ or g/cm³), Kinematic Viscosity (cSt or m²/s), Dynamic Viscosity (cP or Pa·s).
    *   **Graph:** Plot the viscosity (kinematic or dynamic) on the y-axis against temperature on the x-axis. This will visually represent the relationship.

---

### 6. Viscosity-Temperature Relationships and Indices

*   **Empirical Correlations:** The relationship between viscosity and temperature for liquids is not linear but is typically exponential. Several empirical formulas exist, such as:
    *   **Arrhenius-type equation:** $\mu = A e^{B/T}$ (where T is absolute temperature).
    *   ** Andrade's equation:** $\mu = A e^{B/(T-T_0)}$
    *   **Reference (Cengel):** Cengel might present such empirical correlations to model viscosity changes, especially for heat transfer applications where fluid properties change significantly with temperature.

*   **Viscosity Index (VI):**
    *   **Definition:** The Viscosity Index is an empirical number used to characterize the change in viscosity of lubricating oils with temperature. A higher VI indicates less change in viscosity with temperature, which is desirable for lubricants.
    *   **Calculation:** The VI is calculated by comparing the viscosity of the oil at 40°C and 100°C to the viscosity of two reference oils (one with a high VI, one with a low VI) that have the same viscosity at 100°C. The method is standardized by organizations like ASTM.
    *   **Importance:** It's a key specification for engine oils and other lubricants, indicating their performance over a wide temperature range.

---

### 7. Examples and Applications

*   **Lubricating Oils:**
    *   **Engine Oils:** SAE (Society of Automotive Engineers) viscosity grades (e.g., SAE 30, SAE 10W-30) are based on viscosity measurements at specific temperatures (e.g., 100°C for the number without 'W', and 0°C or -18°C for the 'W' viscosity). The 'W' denotes winter grade. Multi-grade oils (like 10W-30) are designed to have a low viscosity at cold temperatures (for easy starting) and a higher viscosity at operating temperatures (for lubrication).
    *   **Hydraulic Oils:** Viscosity is critical for hydraulic systems to ensure proper operation of pumps and actuators.
*   **Fuels:**
    *   **Diesel Fuel:** Viscosity affects atomization in diesel engines. If too low, it may lead to poor combustion. If too high, it can strain the fuel injection pump.
    *   **Gasoline:** While less critical than in diesel, viscosity still influences fuel delivery and spray patterns.
    *   **Jet Fuel:** Viscosity is important for fuel pumpability at low temperatures in aircraft.

---

### 8. Practice Questions and Answers

**Question 1:** Define dynamic viscosity and kinematic viscosity. What are their respective SI units?
**Answer:**
*   **Dynamic Viscosity ($\mu$):** It is the ratio of shear stress to shear rate in a Newtonian fluid, representing internal resistance to flow. SI unit: Pascal-second (Pa·s).
*   **Kinematic Viscosity ($\nu$):** It is the ratio of dynamic viscosity to density ($\nu = \mu / \rho$), representing resistance to flow under gravity. SI unit: square meter per second (m²/s).

**Question 2:** How does the viscosity of lubricating oil change with an increase in temperature? Explain the underlying reason.
**Answer:** The viscosity of lubricating oil (a liquid) **decreases** with an increase in temperature. This is because higher temperatures increase the kinetic energy of the molecules, allowing them to overcome the intermolecular cohesive forces more easily, thus reducing internal friction and resistance to flow.

**Question 3:** An Ostwald viscometer is used to determine the kinematic viscosity of an oil. The time of flow for a fixed volume of oil is 120 seconds. If the viscometer constant is $0.000002 \text{ m²/s²}$ and the density of the oil at the experimental temperature is $850 \text{ kg/m³}$, calculate the kinematic and dynamic viscosity of the oil.
**Answer:**
*   **Kinematic Viscosity ($\nu_{oil}$):**
    $\nu_{oil} = K \cdot t$
    $\nu_{oil} = (0.000002 \text{ m²/s²}) \cdot (120 \text{ s})$
    $\nu_{oil} = 0.00024 \text{ m²/s}$
    To convert to centiStokes (cSt): $0.00024 \text{ m²/s} \times \frac{10^6 \text{ cSt}}{1 \text{ m²/s}} = 240 \text{ cSt}$

*   **Dynamic Viscosity ($\mu_{oil}$):**
    $\mu_{oil} = \nu_{oil} \cdot \rho_{oil}$
    $\mu_{oil} = (0.00024 \text{ m²/s}) \cdot (850 \text{ kg/m³})$
    $\mu_{oil} = 0.204 \text{ Pa·s}$
    To convert to centiPoise (cP): $0.204 \text{ Pa·s} \times \frac{100 \text{ cP}}{1 \text{ Pa·s}} = 20.4 \text{ cP}$

**Question 4:** What is the Viscosity Index (VI)? What does a high VI indicate for a lubricating oil?
**Answer:** The Viscosity Index (VI) is an empirical number that characterizes the change in viscosity of a lubricating oil with temperature. A high VI indicates that the oil's viscosity changes relatively little with temperature variations, which is desirable for lubricants operating over a wide temperature range.

---

### 9. Important Points to Remember

*   **Viscosity is a measure of a fluid's resistance to flow.**
*   For **liquids**, viscosity **decreases** as temperature **increases**.
*   For **gases**, viscosity **increases** as temperature **increases**.
*   **Kinematic viscosity** ($\nu$) is often preferred for flow calculations involving gravity.
*   **Dynamic viscosity** ($\mu$) is related to shear forces and is used in fundamental fluid mechanics equations.
*   Accurate **temperature control** is paramount for reliable viscosity measurements.
*   Allow sufficient **thermal equilibrium** time for the sample and viscometer.
*   Use **clean equipment** to avoid contamination and erroneous results.
*   **Multiple readings** at each temperature are essential for accuracy.
*   The **Viscosity Index (VI)** is a crucial parameter for lubricants, indicating their stability over temperature changes.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 10. References

*   **Cengel, Yunus A.** *Heat Transfer: A Practical Approach.* Tata McGraw-Hill Education, 4th Edition, 2012. (Likely covers fluid properties relevant to heat transfer, potentially viscosity and its temperature dependence).
*   **Sachdeva, R. C.** *Fundamentals of Engineering, Heat and Mass Transfer.* New Age International, 3rd Edition, 2012. (Strong candidate for detailed explanations of fluid properties, including viscosity and its behavior).
*   **Holman, J. P.** *Heat Transfer.* McGraw-Hill, 10th Edition, 2009. (May include experimental methods for determining fluid properties related to heat transfer).
*   **Incropera, Frank P., and David P. DeWitt.** *Fundamentals of Heat and Mass Transfer.* John Wiley & Sons, 2011. (Highly likely to contain detailed theoretical and practical aspects of viscosity, especially in relation to convection heat transfer).
*   **Kothandaraman, C. P.** *Fundamentals of Heat and Mass Transfer.* New Age International, New Delhi, 2006. (Similar to Sachdeva, this book should cover the fundamental principles of viscosity).

---