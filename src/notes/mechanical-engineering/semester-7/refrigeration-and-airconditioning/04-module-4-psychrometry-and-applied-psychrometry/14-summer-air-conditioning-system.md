---
title: "Summer air-conditioning system"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f8c"
status: "completed"
scrapedAt: "2026-05-20T18:17:41.280Z"
---
# Refrigeration and Air Conditioning: Module 4 - Psychrometry and Applied Psychrometry

## Topic: Summer Air-Conditioning System

This module focuses on understanding the properties of moist air and how these properties are manipulated to achieve comfortable indoor environments, particularly during the summer season. We will explore the fundamental principles of psychrometry and their application in designing and analyzing summer air-conditioning systems.

---

### Learning Outcomes Covered:

*   **Understanding the Goal of Summer Air-Conditioning:** What are the primary objectives when conditioning air for comfort during hot and humid weather?
*   **Psychrometric Properties and Their Significance:** How do specific humidity, relative humidity, dry-bulb temperature, wet-bulb temperature, and enthalpy change during summer air conditioning processes?
*   **Key Air Conditioning Processes in Summer:** What are the fundamental processes involved in cooling and dehumidifying air?
*   **Sensible Cooling and Dehumidification:** How is sensible heat removed and moisture content reduced from the air?
*   **The Role of Cooling Coils:** How do cooling coils facilitate these processes, and what are their operational considerations?
*   **Bypass Factor and Its Impact:** How does the bypass factor of a cooling coil affect the conditioning process and the final air state?
*   **Adiabatic Saturation and Its Relation to Cooling:** Understanding the concept of adiabatic saturation and its connection to cooling coil performance.
*   **Reheat and its Applications:** When and why is reheat necessary in summer air-conditioning systems?
*   **Summer Air Conditioning Systems - Types and Components:** Exploring common system configurations and their essential parts.
*   **Cooling Load Calculations (Brief Overview):** What factors contribute to the cooling load in a building during summer?

---

### Course Outcomes Addressed:

*   **CO1:** Define and describe the basic concepts and applications of refrigeration and air conditioning and analyze performance of ideal refrigeration cycles (Knowledge Level: K2, K4)
    *   *This topic contributes by explaining the application of refrigeration principles in cooling and dehumidifying air for comfort.*
*   **CO5:** Analyze properties of moist air using psychrometric principles and chart and explain the working principles and applications of air washers and air-conditioning systems. (Knowledge Level: K2, K4)
    *   *This topic is a core component of CO5, directly explaining the working principles of summer air-conditioning systems and analyzing moist air properties using psychrometric principles.*

---

### 1. Introduction to Summer Air-Conditioning

**Goal:** The primary objective of summer air-conditioning is to provide thermal comfort to occupants by maintaining desired indoor air conditions, typically characterized by:

*   **Lower Dry-Bulb Temperature:** To counteract the high outdoor temperatures.
*   **Reduced Relative Humidity:** To prevent the feeling of stickiness and promote evaporative cooling from the skin.
*   **Adequate Ventilation:** To supply fresh air and remove stale air and pollutants.
*   **Cleanliness:** To remove dust and other airborne particles.

**Key Concept:** **Comfort Zone:** Refers to a range of temperature and humidity conditions that most people find comfortable. For summer, this is generally around 22-26°C dry-bulb temperature and 50-60% relative humidity.

**Referenced Textbooks:**
*   **Arora C.P., Refrigeration and Air Conditioning (4th edition):** Chapter 16 often covers the fundamental principles of air conditioning and comfort.
*   **Jones W.P., Air Conditioning Engineering (5th edition):** Provides detailed insights into thermal comfort and environmental requirements.

---

### 2. Psychrometric Properties and Their Significance in Summer

Summer air conditioning involves manipulating several key psychrometric properties of air:

*   **Dry-Bulb Temperature ($T_{db}$):** The temperature of the air as measured by a standard thermometer. This is the primary indicator of sensible heat content.
    *   *Significance:* Needs to be lowered to a comfortable level.
*   **Wet-Bulb Temperature ($T_{wb}$):** The temperature of the air when cooled adiabatically to saturation by evaporation of water into it, with the latent heat supplied by the air itself. It's an indicator of the total heat content (sensible + latent).
    *   *Significance:* Directly related to the moisture content and enthalpy. Lowering $T_{wb}$ reduces the latent heat load.
*   **Specific Humidity ($\omega$) or Humidity Ratio:** The mass of water vapor per unit mass of dry air.
    *   *Significance:* Directly related to the moisture content. Needs to be reduced to achieve comfortable humidity levels.
*   **Relative Humidity (RH):** The ratio of the actual partial pressure of water vapor to the saturation partial pressure of water vapor at the same dry-bulb temperature, expressed as a percentage.
    *   *Significance:* High RH makes the air feel sticky and reduces the evaporative cooling from the skin. Needs to be reduced.
*   **Enthalpy (h):** The total heat content of the moist air per unit mass of dry air. It is the sum of sensible heat and latent heat.
    *   *Significance:* Cooling the air involves reducing its enthalpy.

**The Psychrometric Chart:** A graphical representation of the relationship between these properties. It is an indispensable tool for analyzing and designing air conditioning processes.

**Example:** Outdoor summer air might be $T_{db} = 35^\circ\text{C}$, RH = 70%. The goal is to condition it to $T_{db} = 24^\circ\text{C}$, RH = 55%. This requires both sensible cooling (reducing $T_{db}$) and dehumidification (reducing $\omega$ and thus RH).

**Referenced Textbooks:**
*   **Kothandaraman C.P., Data book- Refrigeration tables and charts:** Essential for understanding and using psychrometric charts.
*   **Arora S. C. and S. Domkundwar, A Course in Refrigeration and Air Conditioning:** Provides extensive examples and exercises on using the psychrometric chart.

---

### 3. Key Air Conditioning Processes in Summer

The core process in summer air-conditioning is **cooling and dehumidification**. This is typically achieved by passing the air over a cooling coil.

**3.1 Sensible Cooling:**
*   **Definition:** Cooling the air without removing any moisture. This involves reducing the dry-bulb temperature.
*   **Process on Psychrometric Chart:** A horizontal line moving from right to left.
*   **Formula:** $\dot{Q}_{sensible} = \dot{m}_a \times c_{pa} \times (T_{db,in} - T_{db,out})$
    *   Where $\dot{m}_a$ is the mass flow rate of dry air, and $c_{pa}$ is the specific heat of dry air at constant pressure.

**3.2 Dehumidification:**
*   **Definition:** Removing moisture from the air, which reduces the specific humidity and often the relative humidity.
*   **Process on Psychrometric Chart:** A vertical line moving downwards.
*   **Formula:** $\dot{m}_w = \dot{m}_a \times (\omega_{in} - \omega_{out})$
    *   Where $\dot{m}_w$ is the mass flow rate of water removed.

**3.3 Sensible Cooling and Dehumidification (Combined):**
*   **Definition:** The most common process in summer air-conditioning. Both temperature and humidity are reduced simultaneously.
*   **Process on Psychrometric Chart:** A diagonal line moving downwards and to the left.
*   **Total Heat Removal (Enthalpy Change):** $\dot{Q}_{total} = \dot{m}_a \times (h_{in} - h_{out})$

**Important Point:** Effective dehumidification is achieved when the cooling coil surface temperature is below the dew point temperature of the incoming air. This causes water vapor to condense on the coil surface.

**Referenced Textbooks:**
*   **Ameen Ahamadul, Refrigeration and air conditioning (2020):** Explains the basic processes in detail.
*   **Stoecker & Jons, Refrigeration & Air-conditioning (2nd edition):** Covers the psychrometric processes from a system perspective.

---

### 4. The Cooling Coil and Its Operation

The cooling coil is the heart of the summer air-conditioning system responsible for cooling and dehumidifying the air. It typically consists of finned tubes through which a chilled refrigerant or chilled water flows.

**4.1 Working Principle:**
*   Warm, humid air is drawn across the cold surface of the cooling coil.
*   Heat is transferred from the air to the coil. This lowers the dry-bulb temperature (sensible cooling).
*   If the coil surface temperature is below the dew point of the incoming air, water vapor condenses on the coil fins (dehumidification).
*   The condensed water is collected and drained away.

**4.2 Coil Surface Temperature and Air State:**
The relationship between the coil surface temperature ($T_{coil}$) and the resulting air state is crucial.

*   **Apparatus Dew Point (ADP) / Apparatus Surface Temperature ($T_{coil}$):** This is a hypothetical temperature that represents the average surface temperature of the cooling coil. The air leaving the coil is assumed to be very close to this temperature, and its humidity ratio is related to the saturation humidity ratio at this temperature.
*   **Bypass Factor (BF):** In reality, not all air comes into perfect contact with the cooling coil. Some air may bypass the coil, or some parts of the coil may be colder than others. The bypass factor quantifies this imperfection.

**Formula for Bypass Factor:**
$$ \text{BF} = \frac{T_{db,out} - T_{coil}}{T_{db,in} - T_{coil}} $$

*   **Low BF:** Indicates good contact between air and coil, leading to more effective cooling and dehumidification.
*   **High BF:** Indicates less effective contact, resulting in air leaving at a temperature closer to the inlet temperature, with less dehumidification.

**Effect of ADP and BF on Air State:**
The state of the air leaving the cooling coil can be approximated by assuming:

*   $T_{db,out} \approx T_{coil}$ (if BF = 0, ideal contact)
*   $\omega_{out} \approx \omega_{sat} \text{ at } T_{coil}$ (if BF = 0, ideal contact)

With bypass factor:
*   $T_{db,out} = T_{coil} + \text{BF} \times (T_{db,in} - T_{coil})$
*   The specific humidity of the leaving air is generally assumed to be $\omega_{out} \approx \omega_{sat} \text{ at } T_{coil}$.

**Example:**
Outdoor air: $T_{db,in} = 35^\circ\text{C}$, $\omega_{in} = 0.020 \text{ kg/kg}$
Cooling coil ADP ($T_{coil}$) = $12^\circ\text{C}$
Bypass Factor (BF) = 0.2

Using the formulas:
$T_{db,out} = 12 + 0.2 \times (35 - 12) = 12 + 0.2 \times 23 = 12 + 4.6 = 16.6^\circ\text{C}$

To find $\omega_{out}$, we look up the saturation humidity ratio at $T_{coil} = 12^\circ\text{C}$ from the psychrometric chart or tables. Let's assume $\omega_{sat} \text{ at } 12^\circ\text{C} \approx 0.0085 \text{ kg/kg}$.

So, the leaving air state is approximately $T_{db,out} = 16.6^\circ\text{C}$ and $\omega_{out} = 0.0085 \text{ kg/kg}$.

**Important Point:** The bypass factor is a crucial parameter for calculating the actual cooling capacity and the state of the air leaving the coil.

**Referenced Textbooks:**
*   **Arora C.P., Refrigeration and Air Conditioning (4th edition):** Discusses cooling coil performance and bypass factor in detail.
*   **Jones W.P., Air Conditioning Engineering (5th edition):** Provides practical aspects of coil design and performance.

---

### 5. Adiabatic Saturation and Its Relation to Cooling

**Adiabatic Saturation Temperature ($T_{ws}$):**
*   **Definition:** The temperature at which air would become saturated by evaporating water into it, without any heat exchange with the surroundings (adiabatically). This is a hypothetical process.
*   **Relationship to Wet-Bulb Temperature:** For ideal conditions (no superheating or cooling of the water), the adiabatic saturation temperature is approximately equal to the wet-bulb temperature ($T_{ws} \approx T_{wb}$).
*   **Significance in Cooling Coils:** The actual wet-bulb temperature of the air leaving the coil is often close to the adiabatic saturation temperature of the air entering the coil, especially for coils with low bypass factors.

**Important Point:** The wet-bulb temperature of the incoming air sets a lower limit on the achievable dehumidification and cooling in a simple cooling coil, as the leaving air's enthalpy will be close to the entering air's enthalpy.

---

### 6. Reheat and Its Applications in Summer

In many summer air-conditioning scenarios, the air leaving the cooling coil is colder than desired, or the dehumidification process has made the air too cold, leading to an uncomfortable situation. In such cases, **reheat** is employed.

*   **Definition:** Adding heat to the cooled and dehumidified air to raise its temperature to the desired setpoint.
*   **Purpose:**
    1.  **Achieving Desired Dry-Bulb Temperature:** When the cooling coil cools the air below the desired supply air temperature for comfort.
    2.  **Comfort Control:** To maintain the desired room temperature and humidity balance.
    3.  **Preventing Overcooling:** Especially in humid climates where aggressive dehumidification can lead to excessively low temperatures.
*   **Methods of Reheat:**
    *   Electric resistance heaters
    *   Hot water coils
    *   Burners (less common in comfort cooling)
    *   Utilizing waste heat from the refrigeration system (e.g., condenser heat)

**Process on Psychrometric Chart:** A horizontal line moving to the right (increasing $T_{db}$ at constant $\omega$).

**Example:**
Suppose after cooling and dehumidification, the air leaves the coil at $16^\circ\text{C}$ with $\omega = 0.0085 \text{ kg/kg}$. If the desired supply air temperature is $20^\circ\text{C}$ at the same humidity ratio, a reheat process will be applied.

**Important Point:** Reheat consumes additional energy and should be used judiciously. It's often a consequence of a cooling coil designed to achieve adequate dehumidification, which inevitably leads to overcooling.

**Referenced Textbooks:**
*   **Arora S. C. and S. Domkundwar, A Course in Refrigeration and Air Conditioning:** Explains reheat as a necessary process in many AC applications.

---

### 7. Summer Air Conditioning Systems - Types and Components

**7.1 Basic Components:**

1.  **Cooling Coil:** As discussed, for sensible cooling and dehumidification.
2.  **Fan:** To circulate the air through the system and deliver it to the conditioned space.
3.  **Filters:** To remove particulate matter (dust, pollen, etc.) from the air.
4.  **Humidifier (Optional):** Though not typically needed in summer, it might be used in specific applications or in winter.
5.  **Reheater (Optional):** For the reheat process described above.
6.  **Ductwork:** To transport conditioned air.
7.  **Dampers:** To control airflow.
8.  **Refrigeration System (Chiller):** Provides the cooling medium (chilled water or direct expansion refrigerant) for the cooling coil. This includes compressor, condenser, expansion valve, and evaporator (the cooling coil itself).

**7.2 System Configurations:**

*   **All-Air Systems:** The entire load (sensible and latent) is handled by conditioning the air. This is the most common approach.
    *   **Single Duct Systems:**
        *   **Constant Air Volume (CAV):** Supply a constant volume of air, varying the temperature of this air to meet the load. Simple but can be inefficient.
        *   **Variable Air Volume (VAV):** Supply a constant temperature air and vary the volume of air delivered to meet the cooling load. More energy-efficient.
    *   **Dual Duct Systems:** Supply two streams of air – one cold and one warm. They are mixed in the occupied space according to the required temperature. Less common due to energy usage and complexity.
*   **Fan Coil Units (FCUs):** Each unit contains a fan and a cooling/heating coil, serving a small zone. Often used in hotels and multi-room buildings.
*   **Chilled Beams:** Utilize chilled water flowing through ceiling-mounted beams to provide cooling. Primarily sensible cooling, with separate systems for dehumidification.

**Important Point:** The choice of system depends on the building type, cooling load characteristics, energy efficiency requirements, and cost considerations.

**Referenced Textbooks:**
*   **Arora C.P., Refrigeration and Air Conditioning (4th edition):** Chapter 17 often covers different types of air conditioning systems.
*   **Jones W.P., Air Conditioning Engineering (5th edition):** Provides a comprehensive overview of various air conditioning system designs.

---

### 8. Cooling Load Calculations (Brief Overview)

Calculating the cooling load is essential for sizing the air conditioning equipment. Summer cooling loads are primarily due to:

*   **Sensible Heat Gains:**
    *   Heat transfer through walls, roofs, and windows (from solar radiation and outdoor air).
    *   Internal heat gains from occupants, lighting, and equipment.
    *   Ventilation air (warming of outside air to room conditions).
*   **Latent Heat Gains:**
    *   Moisture added by occupants (respiration and perspiration).
    *   Moisture from infiltration of humid outdoor air.
    *   Moisture from processes within the building.

**Important Point:** Accurate cooling load calculation is critical for selecting correctly sized equipment, preventing short-cycling, and ensuring efficient operation.

**Referenced Textbooks:**
*   **ASHRAE Handbooks:** The primary reference for detailed cooling load calculation procedures.
*   **Arora C.P., Refrigeration and Air Conditioning (4th edition):** May include simplified methods or an introduction to load calculations.

---

### Highlight Important Points to Remember:

*   **Summer AC Goal:** Lower temperature, reduce humidity.
*   **Key Psychrometric Properties:** $T_{db}$, $T_{wb}$, $\omega$, RH, Enthalpy.
*   **Cooling Coil's Dual Role:** Sensible cooling and dehumidification.
*   **Dehumidification Condition:** Coil surface temperature must be below dew point.
*   **Bypass Factor:** Quantifies imperfect air-coil contact, affecting performance.
*   **Apparatus Dew Point (ADP):** Hypothetical coil temperature, helps estimate leaving air state.
*   **Reheat:** Used to increase the temperature of overcooled air.
*   **Comfort Zone:** The target range for temperature and humidity.
*   **Psychrometric Chart:** The fundamental tool for visualizing and analyzing AC processes.

---

### Practice Questions and Exercises:

**Question 1:**
Outdoor air is at $35^\circ\text{C}$ dry-bulb temperature and 50% relative humidity. It is to be conditioned to $24^\circ\text{C}$ dry-bulb temperature and 55% relative humidity.
(a) Determine the initial and final specific humidity and enthalpy using a psychrometric chart or tables.
(b) What type of process is required?
(c) If a cooling coil with an ADP of $13^\circ\text{C}$ is used, calculate the bypass factor if the leaving air is at $20^\circ\text{C}$ dry-bulb temperature.

**Answer 1:**
**(a) Initial State (35°C db, 50% RH):**
From psychrometric chart/tables:
*   $T_{wb} \approx 27.5^\circ\text{C}$
*   $\omega_{in} \approx 0.0195 \text{ kg/kg}$
*   $h_{in} \approx 85 \text{ kJ/kg}$

**Final State (24°C db, 55% RH):**
From psychrometric chart/tables:
*   $T_{wb} \approx 16.9^\circ\text{C}$
*   $\omega_{out} \approx 0.0110 \text{ kg/kg}$
*   $h_{out} \approx 57 \text{ kJ/kg}$

**(b) Process:** The process requires both sensible cooling (reducing $T_{db}$) and dehumidification (reducing $\omega$). This is a sensible cooling and dehumidification process, represented by a diagonal line on the psychrometric chart.

**(c) Bypass Factor Calculation:**
Given:
$T_{db,in} = 35^\circ\text{C}$
$T_{coil} (\text{ADP}) = 13^\circ\text{C}$
$T_{db,out} = 20^\circ\text{C}$

Using the bypass factor formula:
$$ \text{BF} = \frac{T_{db,out} - T_{coil}}{T_{db,in} - T_{coil}} $$
$$ \text{BF} = \frac{20 - 13}{35 - 13} = \frac{7}{22} \approx 0.318 $$

**Question 2:**
Explain the role of the bypass factor in a cooling coil and how it affects the cooling and dehumidification performance.

**Answer 2:**
The bypass factor (BF) represents the fraction of air that does not come into effective contact with the cooling coil surface. A BF of 0 means all air passes over the coil, leading to maximum cooling and dehumidification. A BF of 1 means no air passes over the coil, resulting in no cooling or dehumidification.

**Effects of Bypass Factor:**
*   **Higher BF:** Leads to a higher leaving air dry-bulb temperature and less moisture removal (lower dehumidification) compared to a coil with ideal contact (BF=0). The leaving air temperature will be closer to the entering air temperature.
*   **Lower BF:** Indicates better air-coil contact, resulting in a lower leaving air dry-bulb temperature and more effective dehumidification. The leaving air temperature will be closer to the coil's apparatus dew point (ADP).
*   **Reheat:** A higher bypass factor means the air is cooled less effectively by the coil. If the desired supply air temperature is very low, a high BF might mean the air is not cooled enough, potentially requiring less or no reheat compared to a low BF coil. Conversely, if the coil cools the air significantly below the desired supply temperature, a high BF may necessitate more reheat.

**Question 3:**
Under what circumstances is reheat necessary in a summer air-conditioning system?

**Answer 3:**
Reheat is necessary in a summer air-conditioning system primarily when the process of dehumidification also results in cooling the air to a temperature lower than the desired supply air temperature. This commonly occurs in:

1.  **High Humidity Conditions:** To achieve the target low relative humidity, the air must be cooled below its dew point temperature. This cooling process often overshoots the desired dry-bulb temperature for the supply air.
2.  **Meeting Specific Supply Air Requirements:** The design of the cooling coil might be optimized for dehumidification, leading to a very low leaving air temperature. If the supply air to the room needs to be warmer, reheat is used to raise the temperature to the setpoint.
3.  **Comfort Control:** To precisely match the room sensible heat ratio (RSHR) and latent heat ratio (LSHR), reheat can be used to adjust the supply air conditions.
4.  **Preventing Drafts:** Delivering very cold air directly into a space can cause discomfort due to drafts. Reheating the air to a moderate temperature can mitigate this.

In essence, reheat is a way to decouple the sensible cooling and latent cooling (dehumidification) processes to meet the specific comfort requirements of the conditioned space.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
