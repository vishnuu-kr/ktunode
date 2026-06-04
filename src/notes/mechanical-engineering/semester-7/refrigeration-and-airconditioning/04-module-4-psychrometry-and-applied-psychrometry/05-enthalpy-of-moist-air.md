---
title: "Enthalpy of moist air"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f83"
status: "completed"
scrapedAt: "2026-05-20T18:17:34.765Z"
---
## REFRIGERATION AND AIR CONDITIONING

### Module 4: Psychrometry and Applied Psychrometry

#### Topic: Enthalpy of Moist Air

---

**Course Outcome Addressed:** CO5 (Analyse properties of moist air using psychrometric principles and chart and explain the working principles and applications of air washers and air-conditioning systems.)

**Knowledge Level:** K2 (Understanding), K4 (Analysis)

**Learning Outcomes for this Topic:**

*   Define and explain the concept of enthalpy of moist air.
*   Derive and understand the formula for enthalpy of moist air.
*   Analyze the significance of enthalpy in various psychrometric processes.
*   Relate enthalpy to the total energy content of moist air.
*   Utilize psychrometric charts to determine the enthalpy of moist air under different conditions.

---

### 1. Introduction to Moist Air

Moist air is a mixture of dry air and water vapor. In air conditioning and refrigeration applications, understanding the properties of this mixture is crucial for analyzing and designing systems. Psychrometry is the study of these properties and their relationships.

*   **Dry Air:** Primarily composed of nitrogen (N₂), oxygen (O₂), argon (Ar), and trace amounts of other gases. Its composition is relatively constant under normal atmospheric conditions.
*   **Water Vapor:** Water in its gaseous state. The amount of water vapor in the air varies significantly depending on temperature, pressure, and humidity.

---

### 2. Defining Enthalpy of Moist Air

**Enthalpy (h)** is a thermodynamic property that represents the total energy of a system, including its internal energy and the energy associated with its pressure and volume. For moist air, it accounts for the energy stored in both the dry air component and the water vapor component.

*   **Definition:** Enthalpy of moist air is the total heat content per unit mass of dry air. It encompasses the internal energy of the dry air, the internal energy of the water vapor, and the flow work (pressure-volume product) of both components.

---

### 3. Derivation of Enthalpy of Moist Air

The enthalpy of moist air can be expressed as the sum of the enthalpy of dry air and the enthalpy of the water vapor present in it.

Let:
*   $m_a$ = mass of dry air (kg)
*   $m_v$ = mass of water vapor (kg)
*   $c_{pa}$ = specific heat of dry air at constant pressure (kJ/kg·K)
*   $h_g$ = enthalpy of water vapor (kJ/kg)
*   $T$ = dry bulb temperature (°C or K)
*   $P$ = total pressure (kPa or Pa)

The total mass of moist air is $m_a + m_v$. However, it is customary to express enthalpy on a "per unit mass of dry air" basis.

**Enthalpy of Dry Air:**
The enthalpy of dry air can be approximated as:
$h_{a} = c_{pa} \cdot T$
where $T$ is the temperature above a reference point (e.g., 0°C or 273.15 K).

**Enthalpy of Water Vapor:**
The enthalpy of water vapor ($h_g$) at a given temperature is typically taken as the enthalpy of saturated vapor at that temperature. This value includes the latent heat of vaporization and the sensible heat of the vapor above a reference state.

The enthalpy of water vapor is often expressed relative to a reference state, such as saturated liquid water at 0°C. A common approximation for the enthalpy of water vapor in kJ/kg is:
$h_g = 2501 + 1.86 \cdot T$
where $T$ is in °C. This formula accounts for the latent heat of vaporization at 0°C (2501 kJ/kg) and the specific heat of water vapor (1.86 kJ/kg·K).

**Total Enthalpy of Moist Air (h):**
The total enthalpy per unit mass of dry air is the sum of the enthalpy of the dry air and the enthalpy of the water vapor present in that unit mass of dry air.

Let $\omega$ be the humidity ratio (mass of water vapor per unit mass of dry air).
$\omega = \frac{m_v}{m_a}$

Then, the enthalpy of moist air ($h$) is given by:

$h = h_a + \omega \cdot h_g$

Substituting the expressions for $h_a$ and $h_g$:

$h = c_{pa} \cdot T + \omega \cdot (2501 + 1.86 \cdot T)$

Where:
*   $h$ is in kJ/kg of dry air
*   $T$ is in °C
*   $c_{pa}$ is approximately 1.006 kJ/kg·K

**Therefore, the primary formula for the enthalpy of moist air is:**

$\boxed{h = 1.006 \cdot T + \omega \cdot (2501 + 1.86 \cdot T)}$

**Important Note:** The reference temperature for the enthalpy of dry air and water vapor is typically taken as 0°C (or 273.15 K). The constants in the formula might vary slightly depending on the source and the specific reference conditions used.

---

### 4. Significance of Enthalpy in Psychrometric Processes

Enthalpy is a fundamental property in analyzing air conditioning processes because it represents the total heat content. Changes in enthalpy directly correspond to heat transfer to or from the air.

*   **Heating and Cooling:** When moist air is heated, its enthalpy increases. When it is cooled (without condensation), its enthalpy decreases.
*   **Humidification:** Adding water vapor to air increases its enthalpy (assuming the water is added as vapor or at a temperature above the air).
*   **Dehumidification:** Removing water vapor from air decreases its enthalpy.
*   **Adiabatic Processes:** In adiabatic processes (no heat transfer with the surroundings), changes in enthalpy are solely due to internal energy changes within the system. For example, in adiabatic saturation, the enthalpy of the air remains constant.

**Relevance to Course Outcome CO5:** Understanding enthalpy allows for the analysis of heat loads in HVAC systems, the efficiency of air treatment processes, and the energy required for conditioning.

---

### 5. Enthalpy and Total Heat

Enthalpy is often referred to as "total heat" in psychrometric contexts. This is because it includes both the sensible heat (associated with temperature change) and the latent heat (associated with the phase change of water, i.e., evaporation or condensation).

*   **Sensible Heat:** The heat added or removed that causes a change in temperature without a change in phase.
*   **Latent Heat:** The heat added or removed that causes a change in phase (e.g., liquid to vapor) without a change in temperature.

The enthalpy formula $h = c_{pa} \cdot T + \omega \cdot h_g$ clearly separates these components:
*   $1.006 \cdot T$ represents the sensible heat component related to the dry air and the sensible heat of the vapor.
*   $\omega \cdot (2501 + 1.86 \cdot T)$ represents the total heat of the water vapor, which includes its latent heat component.

---

### 6. Enthalpy on a Psychrometric Chart

The psychrometric chart is a graphical representation of the thermodynamic properties of moist air at a given atmospheric pressure. Enthalpy is a key parameter plotted on the psychrometric chart.

*   **Lines of Constant Enthalpy:** These lines run diagonally from the upper left to the lower right on a standard psychrometric chart.
*   **Determination of Enthalpy:** Given the dry bulb temperature and either the humidity ratio or relative humidity, one can locate the intersection point on the chart and read the corresponding enthalpy value from the enthalpy scale (usually along the left or bottom edge).

**Example:** If the dry bulb temperature is 25°C and the humidity ratio is 0.015 kg/kg, you would find 25°C on the dry bulb temperature axis and 0.015 on the humidity ratio axis, then follow the corresponding lines to find the enthalpy value on the chart.

**Referencing Textbooks:**
*   **Arora C.P (4th edition/2021):** Chapter on Psychrometry, discusses the enthalpy of moist air and its representation on psychrometric charts extensively.
*   **Arora Ramesh Chandra (4th Printing/2015):** Similar coverage of psychrometric properties, including enthalpy and its graphical representation.
*   **Jones W P (5th edition/2001):** Chapter on Psychrometry will provide a detailed explanation of enthalpy calculations and chart usage.
*   **Kothandaraman (2023):** The data book will contain psychrometric charts and tables that are essential for practical determination of enthalpy.

---

### 7. Practice Questions and Exercises

**Question 1:**
Calculate the enthalpy of moist air at a dry bulb temperature of 30°C and a relative humidity of 60%. Assume the atmospheric pressure is standard (101.325 kPa).
*   **Given:** $T_{db} = 30^\circ C$, $RH = 60\%$
*   **Needed:** Humidity ratio ($\omega$) at these conditions.

    *   First, find the saturation pressure of water vapor at 30°C. From steam tables or a psychrometric chart, $P_{sat} @ 30^\circ C \approx 4.243$ kPa.
    *   Calculate the partial pressure of water vapor ($P_v$) using the relative humidity formula:
        $RH = \frac{P_v}{P_{sat}}$
        $P_v = RH \cdot P_{sat} = 0.60 \cdot 4.243 \, \text{kPa} = 2.546 \, \text{kPa}$
    *   Calculate the humidity ratio ($\omega$) using the partial pressure of water vapor and total pressure:
        $P = P_a + P_v$ (Dalton's Law of Partial Pressures)
        $P_a = P - P_v = 101.325 \, \text{kPa} - 2.546 \, \text{kPa} = 98.779 \, \text{kPa}$
        $\omega = 0.622 \cdot \frac{P_v}{P_a}$
        $\omega = 0.622 \cdot \frac{2.546 \, \text{kPa}}{98.779 \, \text{kPa}} \approx 0.0160 \, \text{kg/kg of dry air}$
    *   Now, calculate the enthalpy using the formula:
        $h = 1.006 \cdot T + \omega \cdot (2501 + 1.86 \cdot T)$
        $h = 1.006 \cdot 30 + 0.0160 \cdot (2501 + 1.86 \cdot 30)$
        $h = 30.18 + 0.0160 \cdot (2501 + 55.8)$
        $h = 30.18 + 0.0160 \cdot (2556.8)$
        $h = 30.18 + 40.91 \approx 71.09 \, \text{kJ/kg of dry air}$

**Answer 1:** The enthalpy of the moist air is approximately 71.09 kJ/kg of dry air.

**Question 2:**
Moist air enters a cooling coil at a dry bulb temperature of 35°C and an enthalpy of 88 kJ/kg of dry air. If the air leaves the coil at 20°C with a humidity ratio of 0.008 kg/kg, calculate the enthalpy of the leaving air.

*   **Given:** $T_{db,in} = 35^\circ C$, $h_{in} = 88 \, \text{kJ/kg}$, $\omega_{out} = 0.008 \, \text{kg/kg}$, $T_{db,out} = 20^\circ C$.
*   **Needed:** $h_{out}$.

    *   Use the enthalpy formula for the leaving air:
        $h_{out} = 1.006 \cdot T_{db,out} + \omega_{out} \cdot (2501 + 1.86 \cdot T_{db,out})$
        $h_{out} = 1.006 \cdot 20 + 0.008 \cdot (2501 + 1.86 \cdot 20)$
        $h_{out} = 20.12 + 0.008 \cdot (2501 + 37.2)$
        $h_{out} = 20.12 + 0.008 \cdot (2538.2)$
        $h_{out} = 20.12 + 20.31 \approx 40.43 \, \text{kJ/kg of dry air}$

**Answer 2:** The enthalpy of the leaving air is approximately 40.43 kJ/kg of dry air.

**Question 3 (Conceptual):**
Explain why enthalpy is considered a more comprehensive measure of the total heat content of moist air compared to just sensible heat.

**Answer 3:** Enthalpy accounts for both the sensible heat (related to temperature) and the latent heat (related to the phase of water). In many air conditioning processes, both sensible and latent heat transfer occur simultaneously (e.g., cooling and dehumidification). Therefore, enthalpy provides a complete picture of the total energy content and is essential for analyzing these combined effects. Sensible heat alone only considers the temperature component and would be insufficient for processes involving moisture changes.

---

### 8. Important Points to Remember

*   **Enthalpy is per unit mass of dry air.** This is a standard convention to simplify calculations, as the mass of dry air usually remains constant in many air conditioning processes (except humidification/dehumidification).
*   **The enthalpy formula $h = 1.006 \cdot T + \omega \cdot (2501 + 1.86 \cdot T)$ is an approximation.** Precise values can be obtained from psychrometric charts or more complex equations using steam tables, especially for extreme conditions.
*   **Enthalpy changes dictate heat transfer.** An increase in enthalpy signifies heat addition, while a decrease signifies heat removal.
*   **The psychrometric chart is your best friend.** Familiarize yourself with its layout and how to read enthalpy values from it.
*   **Understand the distinction between sensible and latent heat** and how they contribute to the total enthalpy.

---

### 9. Alignment with Course Outcomes

*   **CO5:** This topic directly addresses CO5 by providing the fundamental understanding of moist air properties (enthalpy) necessary to analyze psychrometric processes and the working principles of air conditioning systems. The ability to calculate and interpret enthalpy is crucial for diagnosing system performance and designing efficient solutions. The knowledge level K2 (Understanding) is met by defining and explaining enthalpy, while K4 (Analysis) is met by deriving the formula and applying it to solve problems.

---

This concludes the notes on the Enthalpy of Moist Air. Understanding this concept is foundational for all subsequent topics in psychrometry and applied psychrometry within HVAC.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
