---
title: "Air pollution indices"
subject: "WATER AND AIR QUALITY MANAGEMENT"
module: "Module 4: Air Pollution: Types, Sources, Effects on human health, vegetation, materials, global environmental issues"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba811861"
status: "completed"
scrapedAt: "2026-05-20T19:06:18.621Z"
---
# Water and Air Quality Management

## Module 4: Air Pollution: Types, Sources, Effects on Human Health, Vegetation, Materials, Global Environmental Issues

---

## Topic: Air Pollution Indices

### Introduction to Air Pollution Indices

Air pollution indices are crucial tools for communicating the level of air pollution to the public and policymakers. They translate complex measurements of various air pollutants into a single, understandable number or category, allowing for informed decision-making regarding public health advisories and environmental protection.

### Learning Outcomes Covered:

This topic will address the following learning outcomes:

*   **Understand the purpose and importance of air pollution indices.**
*   **Identify and describe common air quality indices used globally.**
*   **Explain the methodology behind calculating these indices.**
*   **Recognize the significance of different index categories and their associated health impacts.**
*   **Discuss the benefits and limitations of using air pollution indices.**

---

### 1. Purpose and Importance of Air Pollution Indices

*   **Communication:** To simplify complex air quality data into an easily understandable format for the general public.
*   **Public Health Protection:** To alert individuals to potential health risks associated with poor air quality, enabling them to take precautions.
*   **Decision-Making:** To support governmental agencies and policymakers in implementing appropriate control measures and issuing advisories.
*   **Awareness and Education:** To raise public awareness about air pollution issues and their consequences.
*   **Trend Analysis:** To track changes in air quality over time and evaluate the effectiveness of pollution control strategies.

---

### 2. Common Air Quality Indices

Several air quality indices are used worldwide, each with its specific pollutants, calculation methods, and category scales.

#### 2.1 Air Quality Index (AQI) - United States Environmental Protection Agency (US EPA)

The AQI is a widely recognized index used in the US and many other countries.

*   **Purpose:** To report daily air quality for ozone, particle pollution, carbon monoxide, sulfur dioxide, and nitrogen dioxide.
*   **Calculation:**
    *   Calculated for each pollutant separately.
    *   The highest individual pollutant AQI is reported as the overall AQI.
    *   Uses a breakpoint system to assign a numerical value to a specific concentration of a pollutant.
    *   The formula for calculating the AQI for a specific pollutant is:

        $$AQI = \frac{(I_{high} - I_{low})}{(V_{high} - V_{low})} \times (C - V_{low}) + I_{low}$$

        Where:
        *   $I$ = The AQI value
        *   $V$ = The concentration of the pollutant
        *   $C$ = The actual concentration of the pollutant measured
        *   $V_{low}$ = The concentration breakpoint that is less than or equal to the actual concentration ($C$)
        *   $V_{high}$ = The concentration breakpoint that is greater than or equal to the actual concentration ($C$)
        *   $I_{low}$ = The AQI value corresponding to $V_{low}$
        *   $I_{high}$ = The AQI value corresponding to $V_{high}$

*   **Categories and Health Impacts:**

    | AQI Value     | Category      | Health Implications                                                                                             | Recommendations                                                                                                                                                                                          |
    | :------------ | :------------ | :-------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 0-50          | Good          | Air quality is satisfactory, and air pollution poses little or no risk.                                         | No recommendations needed.                                                                                                                                                                               |
    | 51-100        | Moderate      | Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution. | Unusually sensitive individuals should consider reducing prolonged or heavy exertion.                                                                                                                     |
    | 101-150       | Unhealthy for Sensitive Groups | Members of sensitive groups may experience health effects. The general public is less likely to be affected. | General public: No precautions needed. Sensitive groups: Reduce prolonged or heavy exertion.                                                                                                              |
    | 151-200       | Unhealthy     | General public may experience health effects; members of sensitive groups may experience more serious health effects. | General public: Reduce prolonged or heavy exertion. Sensitive groups: Avoid prolonged or heavy exertion.                                                                                                   |
    | 201-300       | Very Unhealthy | General public may experience more serious health effects.                                                      | General public: Reduce prolonged or heavy exertion. Sensitive groups: Avoid all outdoor exertion.                                                                                                        |
    | 301-500       | Hazardous     | Health alert: Everyone may experience more serious health effects.                                                | General public: Avoid prolonged or heavy exertion. Sensitive groups: Remain indoors and avoid all outdoor exertion.                                                                                         |

*   **Key Pollutants Monitored:** Ground-level ozone ($\text{O}_3$), Particle Pollution (PM2.5 and PM10), Carbon Monoxide (CO), Sulfur Dioxide ($\text{SO}_2$), Nitrogen Dioxide ($\text{NO}_2$).

#### 2.2 Air Quality Health Index (AQHI) - Canada

The AQHI provides a more health-focused approach, using a scale that directly reflects the health risk.

*   **Purpose:** To inform people about the health effects of air pollution and when to take protective measures.
*   **Calculation:** Based on the combined health risk of several pollutants, primarily fine particulate matter ($\text{PM}_{2.5}$), ozone ($\text{O}_3$), and nitrogen dioxide ($\text{NO}_2$). It's calculated using a more complex equation that considers the health impacts of these pollutants.

    $$AQHI = 0.7 \times \frac{PM_{2.5}}{10} + 0.3 \times \frac{O_3}{10} + 0.1 \times \frac{NO_2}{10}$$ (This is a simplified representation; the actual calculation involves health risk estimations).

*   **Categories and Health Impacts:**

    | AQHI Value   | Risk Level | Health Implications
