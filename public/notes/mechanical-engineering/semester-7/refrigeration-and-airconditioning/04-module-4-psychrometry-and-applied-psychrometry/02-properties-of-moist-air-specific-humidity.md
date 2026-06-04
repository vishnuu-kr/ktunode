---
title: "Properties of moist air- specific humidity."
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f80"
status: "completed"
scrapedAt: "2026-05-20T18:17:32.670Z"
---
# Module 4: Psychrometry and Applied Psychrometry - Properties of Moist Air: Specific Humidity

This module delves into the fundamental principles of psychrometry, which is the study of the thermodynamic properties of moist air. Understanding these properties is crucial for analyzing and designing air conditioning systems. We will focus on the properties of moist air, with a particular emphasis on **specific humidity**.

## 1. Introduction to Moist Air

Moist air is a mixture of dry air and water vapor. Dry air itself is a mixture of gases, primarily nitrogen ($N_2$) and oxygen ($O_2$), with smaller amounts of argon ($Ar$), carbon dioxide ($CO_2$), and trace gases. Water vapor ($H_2O$) is present in the atmosphere as a gas.

*   **Assumption:** For psychrometric calculations, moist air is treated as an ideal gas mixture, following Dalton's Law of Partial Pressures. This means the total pressure of the mixture is the sum of the partial pressures of its components.

    $P_{total} = P_{dry air} + P_{water vapor}$

    Where:
    *   $P_{total}$ = Total atmospheric pressure (e.g., 101.325 kPa at sea level)
    *   $P_{dry air}$ = Partial pressure of dry air
    *   $P_{water vapor}$ = Partial pressure of water vapor

*   **Importance:** Understanding the composition and properties of moist air is fundamental to controlling indoor environmental conditions for comfort and for various industrial processes. This directly relates to **CO1** (analyze performance of ideal refrigeration cycles - indirectly, as HVAC systems often work in conjunction with refrigeration) and especially **CO5** (Analyze properties of moist air using psychrometric principles and chart).

## 2. Properties of Moist Air

Moist air is characterized by several thermodynamic properties. While we will cover many of them in this module, our primary focus today is on **specific humidity**.

### 2.1. Specific Humidity (ω or W)

**Definition:** Specific humidity is defined as the ratio of the mass of water vapor ($m_v$) to the mass of dry air ($m_a$) in a given quantity of moist air.

$\omega = \frac{m_v}{m_a}$

*   **Units:** Typically expressed in kg of water vapor per kg of dry air (kg/kg da) or grams of water vapor per kg of dry air (g/kg da).

*   **Calculation using Partial Pressures:**
    Using the ideal gas law ($PV = mRT$), we can relate the mass of dry air and water vapor to their partial pressures and temperatures. Assuming both dry air and water vapor occupy the same volume ($V$) and are at the same temperature ($T$):

    $P_a V = m_a R_a T$
    $P_v V = m_v R_v T$

    Where:
    *   $R_a$ = Specific gas constant for dry air (287 J/kg·K)
    *   $R_v$ = Specific gas constant for water vapor (461.5 J/kg·K)

    Dividing the second equation by the first:
    $\frac{P_v}{P_a} = \frac{m_v R_v}{m_a R_a}$

    Rearranging for the mass ratio ($m_v/m_a$):
    $\omega = \frac{m_v}{m_a} = 0.622 \frac{P_v}{P_a}$

    We know that $P_a = P_{total} - P_v$. Substituting this into the equation:

    $\omega = 0.622 \frac{P_v}{P_{total} - P_v}$

    Where:
    *   0.622 is the ratio of the molar mass of water vapor (18.015 g/mol) to the average molar mass of dry air (28.964 g/mol), often referred to as the *humidity ratio constant* or *ratio of gas constants* ($R_v / R_a$).

    **(Kothandaraman, 2023, Chapter 3; Arora, C.P., 2021, Chapter 3)**
    **(Ameen, 2020, Chapter 2)**

*   **Significance of Specific Humidity:**
    *   It is a measure of the actual amount of moisture in the air.
    *   Unlike relative humidity, specific humidity remains constant during adiabatic processes (like throttling or expansion) where no heat or mass is added or removed. This is crucial for analyzing certain HVAC processes.
    *   It directly impacts the enthalpy and density of the moist air.

*   **Relationship with Relative Humidity:** Specific humidity and relative humidity are related but are not the same. Relative humidity is a measure of how "saturated" the air is with water vapor relative to the maximum it can hold at a given temperature.

### 2.2. Examples and Calculations

**Example 1:**
Consider a sample of moist air at standard atmospheric pressure of 101.3 kPa. The partial pressure of water vapor ($P_v$) is measured to be 1.5 kPa. Calculate the specific humidity ($\omega$) of the air.

**Solution:**
Given:
$P_{total} = 101.3$ kPa
$P_v = 1.5$ kPa

Using the formula:
$\omega = 0.622 \frac{P_v}{P_{total} - P_v}$
$\omega = 0.622 \frac{1.5}{101.3 - 1.5}$
$\omega = 0.622 \frac{1.5}{99.8}$
$\omega \approx 0.00932$ kg/kg da

So, the specific humidity is approximately 0.00932 kg of water vapor per kg of dry air.

**Example 2:**
At a certain location, the atmospheric pressure is 95 kPa. The partial pressure of water vapor is 1.2 kPa. Calculate the specific humidity.

**Solution:**
Given:
$P_{total} = 95$ kPa
$P_v = 1.2$ kPa

Using the formula:
$\omega = 0.622 \frac{P_v}{P_{total} - P_v}$
$\omega = 0.622 \frac{1.2}{95 - 1.2}$
$\omega = 0.622 \frac{1.2}{93.8}$
$\omega \approx 0.00797$ kg/kg da

The specific humidity is approximately 0.00797 kg/kg da.

**(Arora, Ramesh Chandra, 2015, Chapter 4; Domkundwar & Arora, 2018, Chapter 5)**

### 2.3. Range of Specific Humidity

The specific humidity can vary significantly depending on the temperature and pressure.

*   **Cold, Dry Air:** Very low specific humidity (e.g., -0.001 kg/kg da or less in extremely cold regions).
*   **Hot, Humid Air:** Can have high specific humidity (e.g., 0.025 kg/kg da or more in tropical climates).

**Important Point:** The maximum possible partial pressure of water vapor at a given temperature is the saturation pressure ($P_{sat}$), which corresponds to 100% relative humidity. Therefore, the specific humidity has an upper limit based on the temperature.

### 2.4. Other Related Properties (Brief Introduction)

While our focus is on specific humidity, it's important to be aware of other key properties that are used in conjunction with it:

*   **Dry Bulb Temperature (DBT):** The temperature of the air as measured by a thermometer shielded from radiation and moisture. (CO5)
*   **Wet Bulb Temperature (WBT):** The temperature reached by air if cooled adiabatically to saturation by evaporation of water into it, with the latent heat supplied by the air. (CO5)
*   **Dew Point Temperature (DPT):** The temperature at which the air becomes saturated, and condensation begins to form, for a constant specific humidity and pressure. (CO5)
*   **Relative Humidity (RH):** The ratio of the actual partial pressure of water vapor to the saturation pressure of water vapor at the same dry bulb temperature, expressed as a percentage.
*   **Enthalpy (h):** The total heat content of the moist air, including the sensible heat of dry air and water vapor, and the latent heat of the water vapor. It's usually expressed per kg of dry air.

## 3. Importance in Refrigeration and Air Conditioning (CO1, CO5)

Understanding specific humidity is fundamental to several AC processes:

*   **Dehumidification:** Cooling the air below its dew point removes water vapor, thus reducing specific humidity. This is a primary function of many air conditioning systems to control indoor comfort.
*   **Humidification:** Adding water vapor to the air increases its specific humidity.
*   **Cooling and Heating:** While sensible heat exchange (changing DBT) is common, latent heat exchange (changing specific humidity) also plays a significant role, especially in comfort applications.
*   **Psychrometric Chart:** The specific humidity is a key coordinate on the psychrometric chart, which visually represents the thermodynamic properties of moist air and is indispensable for analyzing AC processes. (CO5)

**(Jones, 2001, Chapter 2; Stoecker & Jones, Chapter 3)**

## 4. Practice Questions

1.  Define specific humidity and provide its typical units.
2.  Derive the formula for specific humidity ($\omega$) in terms of the partial pressure of water vapor ($P_v$) and the total pressure ($P_{total}$).
3.  Moist air is at an atmospheric pressure of 100 kPa and the partial pressure of water vapor is 2.2 kPa. Calculate the specific humidity of the air.
4.  If the specific humidity of air is 0.015 kg/kg da and the total pressure is 101.3 kPa, calculate the partial pressure of water vapor.
5.  Explain why specific humidity is a useful property for analyzing adiabatic processes.

## 5. Answers to Practice Questions

1.  **Definition:** Specific humidity is the ratio of the mass of water vapor to the mass of dry air in a given quantity of moist air.
    **Units:** kg of water vapor per kg of dry air (kg/kg da) or g/kg da.

2.  **Derivation:**
    From the ideal gas law:
    $P_v V = m_v R_v T$
    $P_a V = m_a R_a T$
    Dividing the first by the second:
    $\frac{P_v}{P_a} = \frac{m_v R_v}{m_a R_a}$
    Since $\omega = \frac{m_v}{m_a}$ and $R_v/R_a = 0.622$:
    $\omega = 0.622 \frac{P_v}{P_a}$
    Substituting $P_a = P_{total} - P_v$:
    $\omega = 0.622 \frac{P_v}{P_{total} - P_v}$

3.  **Calculation:**
    $P_{total} = 100$ kPa, $P_v = 2.2$ kPa
    $\omega = 0.622 \frac{2.2}{100 - 2.2} = 0.622 \frac{2.2}{97.8} \approx 0.0140$ kg/kg da

4.  **Calculation:**
    $\omega = 0.015$ kg/kg da, $P_{total} = 101.3$ kPa
    $0.015 = 0.622 \frac{P_v}{101.3 - P_v}$
    $0.015 (101.3 - P_v) = 0.622 P_v$
    $1.5195 - 0.015 P_v = 0.622 P_v$
    $1.5195 = 0.637 P_v$
    $P_v = \frac{1.5195}{0.637} \approx 2.385$ kPa

5.  **Explanation:** In adiabatic processes (e.g., throttling, adiabatic mixing without mass addition/removal), no heat or mass is exchanged with the surroundings. Under these conditions, the total mass of dry air ($m_a$) remains constant, and the mass of water vapor ($m_v$) also remains constant (as no water is added or removed). Since specific humidity is defined as $\omega = m_v / m_a$, it remains constant during such adiabatic processes. This makes it a convenient property to track.

## 6. Important Points to Remember

*   Moist air is a mixture of dry air and water vapor.
*   Specific humidity ($\omega$) is the mass of water vapor per unit mass of dry air.
*   The formula $\omega = 0.622 \frac{P_v}{P_{total} - P_v}$ is crucial for calculations.
*   Specific humidity is a measure of the absolute moisture content.
*   It remains constant during adiabatic processes (e.g., throttling, adiabatic mixing).
*   Specific humidity is a key parameter used on the psychrometric chart.

This foundational understanding of specific humidity is essential for progressing to more complex psychrometric analyses and understanding the practical applications in refrigeration and air conditioning systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
