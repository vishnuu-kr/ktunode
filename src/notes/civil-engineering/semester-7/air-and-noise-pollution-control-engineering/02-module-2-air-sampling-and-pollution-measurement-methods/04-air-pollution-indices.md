---
title: "Air pollution indices"
subject: "AIR AND NOISE POLLUTION CONTROL ENGINEERING"
module: "Module 2: Air sampling and pollution measurement methods"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811673"
status: "completed"
scrapedAt: "2026-05-20T18:57:06.906Z"
---
# AIR AND NOISE POLLUTION CONTROL ENGINEERING

## Module 2: Air Sampling and Pollution Measurement Methods

### Topic: Air Pollution Indices

---

### 1. Introduction to Air Pollution Indices

**Definition:** Air Pollution Indices (APIs) are simplified, numerical values that represent the overall air quality on a given day or at a specific time. They are designed to communicate the level of air pollution and its potential health effects to the public in an easily understandable format.

**Purpose of APIs:**

*   **Public Communication:** To convey complex air quality information in a clear and actionable manner.
*   **Health Risk Assessment:** To inform individuals about potential health impacts associated with different air pollution levels.
*   **Decision Making:** To guide policy decisions related to air pollution control and public health advisories.
*   **Trend Monitoring:** To track changes in air quality over time and assess the effectiveness of control measures.

**Key Pollutants Monitored in APIs:**

Most APIs focus on the following criteria pollutants, which are regulated by national environmental agencies due to their significant health impacts:

*   **Particulate Matter (PM2.5 and PM10):** Fine particles (PM2.5) and coarse particles (PM10) that can penetrate deep into the lungs.
*   **Ozone (O3):** A gas that can irritate the respiratory system.
*   **Nitrogen Dioxide (NO2):** A gas that can contribute to respiratory problems.
*   **Sulfur Dioxide (SO2):** A gas that can cause respiratory issues and acid rain.
*   **Carbon Monoxide (CO):** A colorless, odorless gas that can reduce the oxygen-carrying capacity of blood.

**How APIs Work:**

1.  **Measurement:** Air quality monitoring stations continuously measure the concentrations of key pollutants.
2.  **Sub-indices:** For each pollutant, a sub-index is calculated based on its measured concentration and a predefined scale that relates concentration to health effects.
3.  **Overall Index:** The highest sub-index value among all monitored pollutants is typically designated as the overall Air Pollution Index for that location and time. This is because the pollutant with the highest sub-index is considered the dominant contributor to the current air quality and potential health risk.

---

### 2. Common Air Pollution Index Systems

Different countries and regions have developed their own API systems. Here are some prominent examples:

#### 2.1. Air Quality Index (AQI) - United States

*   **Developed by:** The U.S. Environmental Protection Agency (EPA).
*   **Focus:** Communicates air quality on a daily basis using a scale from 0 to 500.
*   **Categories and Health Effects:**
    *   **Good (0-50):** Air quality is satisfactory, and air pollution poses little or no risk.
    *   **Moderate (51-100):** Air quality is acceptable; however, for some people who are unusually sensitive to air pollution, there may be at least moderate respiratory symptoms.
    *   **Unhealthy for Sensitive Groups (101-150):** Members of sensitive groups may experience health effects. The general public is less likely to be affected.
    *   **Unhealthy (151-200):** General public may begin to experience health effects. Members of sensitive groups may experience more serious health effects.
    *   **Very Unhealthy (201-300):** Health alert: everyone may experience more serious health effects.
    *   **Hazardous (301-500):** Health warnings of emergency conditions. The entire population is more likely to be affected.
*   **Colors:** Each category is assigned a distinct color for easy identification (Green, Yellow, Orange, Red, Purple, Maroon).
*   **Pollutants Included:** Ozone (O3), Particulate Matter (PM2.5, PM10), Carbon Monoxide (CO), Sulfur Dioxide (SO2), Nitrogen Dioxide (NO2).

**Example Calculation (Simplified AQI for Ozone):**

*   Assume an hourly ozone concentration of 0.080 ppm.
*   The AQI calculation involves a linear interpolation between breakpoints defined by the EPA.
*   **Breakpoint:** For O3, the concentration range 0.071-0.085 ppm corresponds to an AQI range of 101-150.
*   **Formula:**
    `AQI = [(AQI_high - AQI_low) / (Conc_high - Conc_low)] * (Concentration - Conc_low) + AQI_low`
*   Using the EPA's AQI calculation for O3:
    *   `AQI_low = 101`
    *   `AQI_high = 150`
    *   `Conc_low = 0.071 ppm`
    *   `Conc_high = 0.085 ppm`
    *   `Concentration = 0.080 ppm`
*   `AQI = [(150 - 101) / (0.085 - 0.071)] * (0.080 - 0.071) + 101`
*   `AQI = [49 / 0.014] * 0.009 + 101`
*   `AQI = 3500 * 0.009 + 101`
*   `AQI = 31.5 + 101 = 132.5`
*   The AQI for this ozone concentration would be approximately **133** (rounded to the nearest integer), falling into the "Unhealthy for Sensitive Groups" category.

#### 2.2. Air Quality Health Index (AQHI) - Canada

*   **Developed by:** Health Canada.
*   **Focus:** Measures the health risk associated with air pollution on an hourly basis, using a scale from 1 to 10+.
*   **Categories and Health Effects:**
    *   **Low Risk (1-3):** No or mild health effects.
    *   **Moderate Risk (4-6):** Some people who are sensitive to air pollution may experience mild health effects.
    *   **High Risk (7-10):** People sensitive to air pollution may experience more serious health effects. The general population may experience some health effects.
    *   **Very High Risk (10+):** Sensitive people may experience more serious health effects. The general population may experience health effects.
*   **Pollutants Included:** Ozone (O3), Nitrogen Dioxide (NO2), Sulfur Dioxide (SO2), and Particulate Matter (PM2.5).
*   **Calculation:** The AQHI is calculated using a rolling average of the past 8 hours of pollutant concentrations, giving more weight to recent measurements. This better reflects the cumulative health impacts.
    *   `AQHI = 0.74 * (NO2) + 0.59 * (O3) + 0.42 * (PM2.5) + 0.23 * (SO2)` (This is a simplified representation; the actual calculation involves scaling and normalization).

#### 2.3. Air Quality Health Index (AQHI) - Hong Kong

*   **Developed by:** Environmental Protection Department of Hong Kong.
*   **Focus:** Provides hourly air quality information on a scale of 0 to 50.
*   **Categories and Health Effects:**
    *   **Low (0-12):** Good air quality.
    *   **Moderate (13-25):** Fair air quality.
    *   **High (26-50):** Poor air quality.
    *   **Very High (51-100):** Very poor air quality.
    *   **Serious (101-200):** Severe air pollution.
    *   **Severe (Above 200):** Extremely severe air pollution.
*   **Pollutants Included:** Ozone (O3), Nitrogen Dioxide (NO2), Sulfur Dioxide (SO2), Particulate Matter (PM2.5, PM10), and Carbon Monoxide (CO).
*   **Calculation:** Similar to the US AQI, it uses sub-indices for each pollutant, and the highest sub-index determines the overall index.

#### 2.4. Air Pollution Index (API) - India (SAFAR System)

*   **Developed by:** System of Air Quality and Weather Forecasting And Research (SAFAR).
*   **Focus:** Provides real-time air quality index for major cities.
*   **Categories and Health Effects:**
    *   **Good (0-50):** Minimal impact.
    *   **Satisfactory (51-100):** May cause mild breathing discomfort to sensitive people.
    *   **Moderate (101-200):** May cause breathing discomfort to sensitive people.
    *   **Poor (201-300):** May cause breathing discomfort to most people.
    *   **Very Poor (301-400):** May cause respiratory illness to people on long exposure.
    *   **Severe (401-500):** May cause respiratory illness on prolonged exposure.
*   **Pollutants Included:** Ozone (O3), Nitrogen Dioxide (NO2), Sulfur Dioxide (SO2), Particulate Matter (PM2.5, PM10), Carbon Monoxide (CO), Lead (Pb), and Ammonia (NH3).

---

### 3. Construction and Application of Air Pollution Indices

#### 3.1. Common Methodologies for Index Calculation

The core principle for most APIs is the conversion of pollutant concentrations into a standardized index value.

**General Steps:**

1.  **Define Pollutant Categories:** Establish concentration ranges for each pollutant corresponding to different levels of health risk (e.g., Good, Moderate, Unhealthy).
2.  **Define Breakpoints:** Within each category, specific concentration breakpoints are defined. These breakpoints are crucial for the interpolation process.
3.  **Linear Interpolation:** For a measured pollutant concentration, a linear interpolation formula is used to calculate the sub-index value.

    `Index = I_low + [(I_high - I_low) / (C_high - C_low)] * (C - C_low)`

    Where:
    *   `Index`: The calculated sub-index value for the pollutant.
    *   `I_low`: The index value at the lower concentration breakpoint of the category.
    *   `I_high`: The index value at the higher concentration breakpoint of the category.
    *   `C_low`: The lower concentration breakpoint.
    *   `C_high`: The higher concentration breakpoint.
    *   `C`: The measured concentration of the pollutant.

4.  **Determine Overall Index:** The highest sub-index value among all monitored pollutants becomes the overall Air Pollution Index.

#### 3.2. Factors Influencing API Values

*   **Pollutant Concentrations:** Directly driven by emissions from sources (vehicles, industries, domestic burning) and meteorological conditions.
*   **Meteorological Conditions:** Wind speed and direction, temperature, humidity, and atmospheric stability significantly influence pollutant dispersion and accumulation. For example, low wind speeds and stable atmospheric conditions can lead to high pollution levels.
*   **Time of Measurement:** Diurnal patterns of emissions and meteorological conditions can cause variations in API values throughout the day.
*   **Geographic Location:** Urban areas with high traffic density and industrial activity generally experience higher API values. Topography also plays a role.

#### 3.3. Applications of Air Pollution Indices

*   **Public Health Advisories:** Issuing alerts and recommendations for vulnerable populations (children, elderly, individuals with respiratory or heart conditions) and the general public during periods of high pollution.
*   **Environmental Regulations:** Informing policymakers about the effectiveness of emission control strategies and the need for stricter regulations.
*   **Awareness Campaigns:** Raising public awareness about air quality issues and encouraging behavioral changes to reduce pollution.
*   **Transportation Management:** In some cities, high API values might trigger traffic restrictions or odd-even vehicle schemes.
*   **School and Outdoor Activity Management:** Decisions to cancel or modify outdoor activities for schools can be based on API levels.

---

### 4. Learning Outcomes Covered

This topic directly addresses the following learning outcomes:

*   **Understanding the purpose and importance of air pollution indices:** This section covers the "Why" behind APIs – their role in communication, health risk assessment, and decision-making.
*   **Identifying key pollutants commonly included in air pollution indices:** The notes list and briefly describe the main criteria pollutants monitored.
*   **Describing different air pollution index systems (e.g., AQI, AQHI):** The notes detail prominent API systems, their scales, categories, and the pollutants they consider.
*   **Explaining the basic principles of air pollution index calculation:** The methodology involving breakpoints and linear interpolation is explained.
*   **Recognizing factors that influence air pollution index values:** The impact of pollutant concentrations and meteorological conditions is discussed.
*   **Understanding the applications of air pollution indices in public health and environmental management:** The notes outline how APIs are used for advisories, policy, and public awareness.

---

### 5. Practice Questions and Exercises

**Question 1:**

Which of the following pollutants is *least* commonly included in major air pollution index systems?
a) Particulate Matter (PM2.5)
b) Ozone (O3)
c) Lead (Pb)
d) Carbon Monoxide (CO)

**Question 2:**

If the measured concentration of a pollutant falls between `C_low` and `C_high`, corresponding to an index range of `I_low` to `I_high`, what is the formula used for calculating the sub-index?

**Question 3:**

The US EPA's Air Quality Index (AQI) uses a scale from 0 to 500. What category does an AQI value of 135 typically fall into, and what is the general health implication associated with it?

**Question 4:**

Briefly explain why the highest sub-index value among all monitored pollutants is often used as the overall Air Pollution Index.

**Question 5:**

Canada's Air Quality Health Index (AQHI) uses a rolling average of the past 8 hours of pollutant concentrations. What is the potential benefit of this approach compared to using instantaneous measurements?

---

### 6. Answers to Practice Questions

**Answer 1:**

c) Lead (Pb)

*   **Explanation:** While lead is a regulated pollutant, it's less frequently included in the daily, publicly reported air pollution indices compared to PM2.5, O3, CO, NO2, and SO2, which have more immediate and widespread health impacts on a daily basis. SAFAR's API in India does include Lead, but it's less common globally.

**Answer 2:**

The formula used for calculating the sub-index is:
`Index = I_low + [(I_high - I_low) / (C_high - C_low)] * (C - C_low)`

**Answer 3:**

An AQI value of 135 typically falls into the **Unhealthy for Sensitive Groups** category. The general health implication is that members of sensitive groups (e.g., those with asthma or heart disease) may experience health effects, while the general public is less likely to be affected.

**Answer 4:**

The highest sub-index value is used as the overall Air Pollution Index because it represents the pollutant that is contributing the most to the current air quality problem and is therefore the primary driver of potential health risks for the population at that time. This simplifies the communication by highlighting the dominant threat.

**Answer 5:**

The benefit of using a rolling average (like the 8-hour average in Canada's AQHI) is that it provides a more representative measure of the cumulative health impact of air pollution. Air pollutants can have lingering effects, and an average better reflects the total exposure over a period, rather than just an instantaneous snapshot which might be affected by short-term fluctuations.

---

### 7. Important Points to Remember

*   **APIs are a simplification:** They translate complex scientific data into easily understandable terms for public communication.
*   **Varying systems:** Different countries have different API systems with their own scales, categories, and pollutant inclusions.
*   **Health-focused:** APIs are designed to inform the public about potential health risks.
*   **Dominant pollutant:** The highest sub-index typically determines the overall API, indicating the most significant pollutant of concern.
*   **Meteorology matters:** Wind, temperature, and other weather conditions heavily influence API values by affecting pollutant dispersion.
*   **Vulnerable groups:** Always pay attention to advisories for sensitive populations during periods of high API values.
*   **Actionable information:** APIs are intended to guide personal actions and inform policy decisions.

---
