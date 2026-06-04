---
title: "Parabolic trough collector"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 2: Solar collectors: Flat plate collector"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bc0"
status: "completed"
scrapedAt: "2026-05-20T18:08:12.128Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS

## Module 2: Solar Collectors: Flat Plate Collector

### Topic: Parabolic Trough Collector

---

### 1. Introduction to Concentrating Solar Collectors (CSCs)

*   **Definition:** Concentrating Solar Collectors (CSCs) are devices that use optical elements (mirrors or lenses) to focus a large area of sunlight onto a smaller area, such as the receiver of a collector. This concentration significantly increases the solar flux incident on the receiver, leading to higher operating temperatures.
*   **Comparison with Flat Plate Collectors (FPCs):** While FPCs absorb diffuse and direct solar radiation, CSCs primarily utilize **direct normal irradiance (DNI)**. This is a crucial distinction as it means CSCs are most effective in locations with high DNI and clear skies.
*   **Applications:** CSCs are generally employed for applications requiring higher temperatures than those achievable with FPCs, such as:
    *   Industrial process heat
    *   Electricity generation (e.g., solar thermal power plants)
    *   Absorption refrigeration

*(Refer to Sukhatme, Chapter 6: Concentrating Collectors)*

---

### 2. Parabolic Trough Collector (PTC)

*   **Definition:** A parabolic trough collector is a type of CSC that uses a parabolic-shaped reflector to focus sunlight onto a linear receiver tube positioned along the focal line of the parabola.
*   **Key Components:**
    *   **Parabolic Reflector:** A curved mirror that accurately reflects incoming parallel solar rays onto the focal line. The shape is a parabola of revolution or a parabolic cylinder.
    *   **Receiver Tube:** A metal tube, typically coated with a selective surface, located at the focal line. A heat transfer fluid (HTF) flows through this tube to absorb the concentrated solar energy.
    *   **Selective Coating:** A coating applied to the outer surface of the receiver tube that has high absorptance for solar radiation and low emittance for thermal radiation. This maximizes energy absorption and minimizes heat loss.
    *   **Glass Envelope (Optional but common):** A glass tube surrounding the receiver tube, often evacuated to create a vacuum. This significantly reduces convective and conductive heat losses from the receiver.
    *   **Tracking System:** A mechanism that precisely tracks the sun's movement to ensure the parabolic reflector continuously focuses sunlight onto the receiver tube. Typically, single-axis tracking is used, following the sun from east to west.

*(Refer to Sukhatme, Chapter 6.2: Parabolic Trough Collectors)*
*(Refer to Goswami, Kreith, & Kreider, Chapter 9: Solar Thermal Electric Power Generation)*

---

### 3. Optical Analysis of Parabolic Trough Collectors

*   **Concentration Ratio:** The ratio of the aperture area (the area of sunlight incident on the collector) to the receiver area. A higher concentration ratio generally leads to higher temperatures.
    *   **Aperture Area:** The area of the parabolic reflector opening. For a parabolic cylinder, it's typically $W \times L$, where $W$ is the width of the aperture and $L$ is the length of the collector.
    *   **Receiver Area:** The outer surface area of the receiver tube.
*   **Optical Efficiency ($\eta_{opt}$):** The fraction of incident solar energy on the aperture that is absorbed by the receiver. It depends on various optical losses:
    *   **Mirror Reflectivity:** Losses due to the mirror not reflecting 100% of incident sunlight.
    *   **Mirror Surface Errors:** Deviations from the ideal parabolic shape, causing reflected rays to miss the focal line.
    *   **Spillage:** Sunlight reflecting off the edges of the reflector and not reaching the receiver.
    *   **Shading by Support Structures:** The receiver tube and its supports can shade parts of the reflector.
    *   **Receiver Shading:** The receiver tube itself blocks some sunlight from reaching the reflector.
    *   **Absorption by the Glass Cover:** If a glass cover is present, some solar radiation is absorbed by it.
    *   **Absorption by the Receiver Coating:** While the coating is designed to absorb solar radiation, some wavelengths might not be absorbed.
    *   **Angularity of Incidence:** The reflectivity of mirrors and the absorptance of the receiver coating can vary with the angle of incidence of sunlight.

*   **Importance of Tracking Accuracy:** Precise tracking is vital to maintain high optical efficiency. Even small deviations can cause significant spillage of concentrated sunlight.

*(Refer to Sukhatme, Section 6.2.2: Optical Characteristics)*
*(Refer to Tiwari, Chapter 4: Solar Collectors - Concentrating Type)*

---

### 4. Thermal Analysis of Parabolic Trough Collectors

The thermal performance of a PTC is governed by the energy balance on the receiver tube. The useful heat gained ($Q_u$) is the absorbed solar energy minus the thermal losses.

*   **Energy Absorbed by Receiver:** $Q_{abs} = \text{DNI} \times A_{ap} \times \rho_{mirror} \times \tau_{glass} \times \alpha_{receiver}$
    *   DNI: Direct Normal Irradiance
    *   $A_{ap}$: Aperture area of the collector
    *   $\rho_{mirror}$: Reflectivity of the mirror surface
    *   $\tau_{glass}$: Transmittance of the glass cover (if present)
    *   $\alpha_{receiver}$: Absorptance of the receiver coating

*   **Thermal Losses ($Q_{loss}$):** These occur from the receiver tube to the surroundings and are primarily due to:
    *   **Convection and Conduction:** To the glass cover (if present) and then to the ambient air. These are significantly reduced in evacuated tubes.
    *   **Radiation:** From the receiver surface to the glass cover and then to the surroundings. The selective coating minimizes emitted radiation.

*   **Heat Transfer Fluid (HTF) Outlet Temperature ($T_{out}$):**
    $Q_u = \dot{m} \times C_p \times (T_{out} - T_{in})$
    *   $\dot{m}$: Mass flow rate of the HTF
    *   $C_p$: Specific heat capacity of the HTF
    *   $T_{in}$: Inlet temperature of the HTF

*   **Collector Efficiency ($\eta_{coll}$):** The ratio of useful heat gained to the incident solar energy on the aperture.
    $\eta_{coll} = \frac{Q_u}{DNI \times A_{ap}} = \frac{\dot{m} C_p (T_{out} - T_{in})}{DNI \times A_{ap}}$

*   **Overall Heat Transfer Coefficient ($U_L$):** Represents the total thermal losses per unit area per unit temperature difference between the receiver and the ambient.
    $U_L = U_{conv} + U_{rad}$
    *   $U_{conv}$: Convective and conductive loss coefficient
    *   $U_{rad}$: Radiative loss coefficient

    The useful heat gain can also be expressed as:
    $Q_u = F' A_{receiver} [ G_b \tau \alpha - U_L (T_r - T_a) ]$
    *   $F'$: Collector heat removal factor
    *   $A_{receiver}$: Receiver surface area
    *   $G_b$: Solar flux density on the receiver surface
    *   $\tau$: Transmittance of the glass cover
    *   $\alpha$: Absorptance of the receiver coating
    *   $T_r$: Average receiver temperature
    *   $T_a$: Ambient temperature

*(Refer to Sukhatme, Section 6.2.3: Thermal Performance)*
*(Refer to Goswami, Kreith, & Kreider, Chapter 9.2.1: Heat Transfer)*

---

### 5. Heat Transfer Fluid (HTF) Selection

The choice of HTF is critical for PTC performance, especially at higher operating temperatures. Common HTFs include:

*   **Water:** Suitable for lower temperature applications (up to ~100°C). Freezes easily.
*   **Thermic Oils (e.g., Dowtherm A, Marlotherm):** Can operate at higher temperatures (up to ~300-400°C). They are stable at these temperatures and do not freeze easily. However, they are flammable and can degrade over time.
*   **Molten Salts:** Used for very high-temperature applications (up to ~550°C) and are often employed in thermal power plants. They have good heat transfer properties but are corrosive and require careful handling.

*(Refer to Sukhatme, Section 6.2.4: Heat Transfer Fluids)*
*(Refer to Tiwari, Chapter 4.3: Heat Transfer Fluids)*

---

### 6. Applications of Parabolic Trough Collectors

*   **Solar Thermal Power Plants:** The most common application. PTCs heat an HTF (often molten salt or synthetic oil) which then generates steam to drive a turbine for electricity generation. This is a form of **Concentrating Solar Power (CSP)**.
    *   **Example:** The Crescent Dunes Solar Energy Project in Nevada, USA, uses molten salt as the HTF.
*   **Industrial Process Heat:** Providing high-temperature heat for various industrial processes, such as chemical manufacturing, food processing, and textile production.
*   **Absorption Cooling:** Using the heat to power absorption chillers for air conditioning.

*(Refer to Goswami, Kreith, & Kreider, Chapter 9: Solar Thermal Electric Power Generation)*
*(Refer to Boyle, Chapter 5: Solar thermal power)*

---

### 7. Advantages and Disadvantages of Parabolic Trough Collectors

**Advantages:**

*   **High Temperatures:** Can achieve significantly higher temperatures than FPCs, making them suitable for electricity generation and industrial heat.
*   **High Efficiency at High Temperatures:** Thermal losses are relatively lower at higher concentration ratios and operating temperatures when evacuated tubes and selective coatings are used.
*   **Good for DNI Regions:** Performs very well in areas with high direct normal irradiance.
*   **Scalability:** Can be scaled to large power plant sizes.

**Disadvantages:**

*   **Requires Direct Sunlight:** Only utilizes DNI, rendering them ineffective during cloudy periods or when used with diffuse radiation.
*   **Requires Tracking:** Needs a precise tracking system, adding complexity and cost.
*   **Higher Capital Cost:** Generally more expensive to manufacture and install than FPCs.
*   **Susceptible to Soiling:** Dust and dirt on the reflector surface can significantly reduce performance.
*   **Limited by Mirror Surface Accuracy:** The quality and accuracy of the parabolic mirror are crucial for optimal performance.

*(Refer to Sukhatme, Chapter 6 Summary)*
*(Refer to Tiwari, Chapter 4.7: Advantages and Disadvantages of Concentrating Collectors)*

---

### 8. Practice Questions and Answers

**Question 1:**
What is the primary type of solar radiation utilized by a parabolic trough collector?
(a) Diffuse solar radiation
(b) Direct normal irradiance (DNI)
(c) Global horizontal irradiance (GHI)
(d) Indirect solar radiation

**Answer 1:**
(b) Direct normal irradiance (DNI)

**Question 2:**
Name two key components of a parabolic trough collector that are essential for achieving high operating temperatures.

**Answer 2:**
1.  **Selective coating on the receiver tube:** High absorptance and low emittance.
2.  **Vacuum in the glass envelope (if present):** Minimizes convective and conductive heat losses.
    *(Other valid answers could include precise parabolic reflector shape, accurate tracking, or high reflectivity mirrors.)*

**Question 3:**
The optical efficiency of a parabolic trough collector is affected by several factors. List three such factors.

**Answer 3:**
Any three of the following:
*   Mirror reflectivity
*   Mirror surface errors
*   Spillage of reflected rays
*   Shading by support structures
*   Absorption by the glass cover
*   Absorption/reflection by the receiver coating
*   Angularity of incidence effects

**Question 4:**
Explain why parabolic trough collectors are not effective in areas with predominantly diffuse solar radiation.

**Answer 4:**
Parabolic trough collectors rely on focusing parallel rays of sunlight onto a receiver. Diffuse solar radiation comes from all directions in the sky and cannot be effectively focused by a parabolic reflector. Therefore, PTCs are most effective in locations with clear skies and high direct normal irradiance (DNI).

**Question 5:**
Calculate the thermal efficiency of a parabolic trough collector if the useful heat gained by the HTF is 2 kW, and the incident solar radiation on the aperture is 5 kW.

**Calculation:**
Thermal Efficiency ($\eta_{coll}$) = (Useful Heat Gained) / (Incident Solar Radiation)
$\eta_{coll} = \frac{Q_u}{DNI \times A_{ap}} = \frac{2 \text{ kW}}{5 \text{ kW}} \times 100\%$
$\eta_{coll} = 40\%$

**Answer 5:**
The thermal efficiency of the parabolic trough collector is 40%.

---

### 9. Important Points to Remember

*   **DNI is Crucial:** PTCs are highly dependent on direct normal irradiance.
*   **Concentration Ratio:** Higher concentration ratios allow for higher operating temperatures.
*   **Selective Coating & Evacuation:** Essential for minimizing thermal losses and maximizing efficiency at high temperatures.
*   **Tracking Accuracy:** Directly impacts optical efficiency.
*   **HTF Choice:** Dictates the maximum achievable operating temperature and system design.
*   **Applications:** Primarily for high-temperature applications like solar thermal power plants and industrial process heat.

---

### Alignment with Course Outcomes:

*   **CO1 (Solar Radiation, Sun-Earth Relationship, Atmosphere Effects):** Understood implicitly through the need for DNI and the understanding of how atmospheric conditions (clouds) affect PTC performance. (Knowledge Level: K2)
*   **CO2 (Types of Solar Collectors, Theoretical Principles):** Directly addressed by detailing the PTC, its components, and optical/thermal principles. (Knowledge Level: K1)
*   **CO3 (Thermal Analysis, Design Principles):** Covered in the thermal analysis section, including efficiency calculations and component functions. Designing PV systems is beyond this specific topic, but the thermal analysis principles are transferable. (Knowledge Level: K3)
*   **CO4 (Plant Economy, Life Cycle Cost, Payback Period):** While not explicitly covered in this topic note, the efficiency and operating temperature discussed are key inputs for economic analyses of PTC systems. (Knowledge Level: K2)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
