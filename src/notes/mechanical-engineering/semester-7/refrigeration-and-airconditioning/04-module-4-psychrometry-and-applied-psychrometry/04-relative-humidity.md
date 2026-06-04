---
title: "Relative humidity"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f82"
status: "completed"
scrapedAt: "2026-05-20T18:17:34.108Z"
---
Sure, here are comprehensive study notes on Relative Humidity for Module 4: Psychrometry and Applied Psychrometry in Refrigeration and Air Conditioning, aligned with your provided learning outcomes and course outcomes.

---

# Module 4: Psychrometry and Applied Psychrometry - Relative Humidity

## 1. Introduction to Psychrometry and Moist Air

**Key Concept:** Psychrometry is the study of the properties of moist air and the relationship between these properties. Moist air is a mixture of dry air and water vapor.

**Definition:**
*   **Dry Air:** Air that contains no water vapor. It's primarily composed of nitrogen (N₂), oxygen (O₂), argon (Ar), and small amounts of other gases like carbon dioxide (CO₂).
*   **Moist Air:** A mixture of dry air and water vapor.
*   **Saturated Air:** Moist air in which the water vapor is in equilibrium with liquid water. At a given temperature, saturated air contains the maximum amount of water vapor it can hold.

**Why is Psychrometry Important in HVAC&R?**
Understanding the properties of moist air is fundamental to air conditioning and refrigeration systems. It allows us to:
*   Control indoor air quality.
*   Design efficient heating and cooling systems.
*   Predict the comfort levels of occupants.
*   Analyze and troubleshoot various HVAC&R processes.

---

## 2. Properties of Moist Air

**Key Concepts:** The properties of moist air are influenced by the dry air component and the water vapor component.

**Important Properties:**
*   **Dry Bulb Temperature ($T_{db}$):** The temperature of air measured by a thermometer that is not affected by the humidity of the air. It's the primary temperature reading.
*   **Wet Bulb Temperature ($T_{wb}$):** The temperature registered by a thermometer whose bulb is covered with a wet wick, exposed to the air. As water evaporates from the wick, it cools the bulb. The wet bulb temperature is an indication of the latent heat present in the air.
*   **Dew Point Temperature ($T_{dp}$):** The temperature to which air must be cooled, at constant pressure, to become saturated with water vapor. At the dew point, condensation begins to form.
*   **Specific Humidity ($W$ or $w$):** The ratio of the mass of water vapor to the mass of dry air in a given sample of moist air.
    *   $W = \frac{m_{v}}{m_{a}}$
    *   Where $m_v$ is the mass of water vapor and $m_a$ is the mass of dry air.
    *   It is often expressed in kg of water vapor per kg of dry air or grains of water vapor per lb of dry air.
*   **Humidity Ratio ($W$):** This is synonymous with Specific Humidity.
*   **Enthalpy ($h$):** The total heat content of the moist air, including the sensible heat of the dry air and the latent heat of the water vapor.
*   **Specific Volume ($v$):** The volume occupied by a unit mass of moist air.

---

## 3. Relative Humidity (RH)

**Learning Outcome:** Students will be able to analyze properties of moist air using psychrometric principles and chart and explain the working principles and applications of air washers and air-conditioning systems. (CO5)

**Definition:**
**Relative Humidity (RH)** is the ratio of the actual partial pressure of water vapor in the air to the saturation partial pressure of water vapor at the same dry bulb temperature. It is usually expressed as a percentage.

**Mathematical Expression:**

$$
\phi = \frac{p_v}{p_{vs}} \times 100\%
$$

Where:
*   $\phi$ = Relative Humidity
*   $p_v$ = Actual partial pressure of water vapor in the moist air.
*   $p_{vs}$ = Saturation partial pressure of water vapor at the same dry bulb temperature ($T_{db}$).

**Conceptual Understanding:**
*   Relative humidity indicates how "full" the air is with water vapor compared to its maximum capacity at that temperature.
*   If $p_v$ increases (more water vapor), RH increases.
*   If $T_{db}$ increases (air can hold more vapor), $p_{vs}$ increases, and for the same $p_v$, RH decreases.
*   If $T_{db}$ decreases, $p_{vs}$ decreases. If $p_v$ remains constant, RH increases. If $p_v$ exceeds $p_{vs}$ at the new lower temperature, condensation occurs.

**Relationship to Other Properties:**

*   **Dew Point Temperature ($T_{dp}$):** At the dew point temperature, the actual partial pressure of water vapor ($p_v$) is equal to the saturation pressure ($p_{vs}$) at that temperature. Thus, $p_v = p_{vs}(T_{dp})$. Substituting this into the RH equation:
    $$
    \phi = \frac{p_{vs}(T_{dp})}{p_{vs}(T_{db})} \times 100\%
    $$
    This shows that for a given $p_v$, RH is higher when $T_{dp}$ is closer to $T_{db}$.

*   **Specific Humidity ($W$):** While not directly a formula, RH is indirectly related to specific humidity because $p_v$ is directly related to specific humidity.

**Factors Affecting Relative Humidity:**

1.  **Amount of Water Vapor in the Air:** More water vapor means higher $p_v$, leading to higher RH, assuming temperature remains constant.
2.  **Temperature of the Air:** This is the most significant factor. As temperature increases, the air's capacity to hold water vapor ($p_{vs}$) increases. If the actual amount of water vapor ($p_v$) stays the same, the RH will decrease. Conversely, as temperature decreases, the air's capacity to hold water vapor decreases, and the RH increases.

**Examples of Relative Humidity:**

*   **Comfort:** Humans generally feel comfortable at RH levels between 40% and 60%.
    *   Low RH (<30%): Can cause dry skin, chapped lips, static electricity, and irritation to mucous membranes.
    *   High RH (>60%): Can feel sticky and uncomfortable, promote mold growth, and lead to condensation on surfaces.
*   **Storage:** Different materials require specific RH levels for preservation (e.g., museums for artifacts, food storage).
*   **Industrial Processes:** Many manufacturing processes (e.g., textile manufacturing, printing) require precise humidity control.

**Practice Problem 1:**
At a dry bulb temperature of $25^\circ$C, the actual partial pressure of water vapor in the air is $1.5$ kPa. The saturation pressure of water vapor at $25^\circ$C is $3.1698$ kPa. Calculate the relative humidity of the air.

**Solution:**
Using the formula for Relative Humidity:
$$
\phi = \frac{p_v}{p_{vs}} \times 100\%
$$
Given:
$p_v = 1.5$ kPa
$p_{vs} = 3.1698$ kPa

$$
\phi = \frac{1.5 \text{ kPa}}{3.1698 \text{ kPa}} \times 100\%
$$
$$
\phi \approx 0.4732 \times 100\%
$$
$$
\phi \approx 47.32\%
$$

**Answer:** The relative humidity of the air is approximately 47.32%.

**Practice Problem 2:**
Air at a dry bulb temperature of $30^\circ$C has a relative humidity of 70%. If the temperature of the air is lowered to $20^\circ$C while the humidity ratio remains constant, what will be the new relative humidity? (Assume the original $p_v$ is such that when $T_{db}=30^\circ$C, RH is 70%. You will need to look up saturation pressures from a psychrometric chart or table.)

**Solution Approach:**
1.  **Find $p_v$ at the initial condition:**
    *   Look up $p_{vs}$ at $30^\circ$C from psychrometric tables/charts. Let's assume $p_{vs}(30^\circ\text{C}) \approx 4.246$ kPa (from Kothandaraman's data book or ASHRAE Handbook).
    *   Calculate $p_v = \phi \times p_{vs}(30^\circ\text{C}) / 100\% = 0.70 \times 4.246 \text{ kPa} = 2.9722$ kPa.
2.  **Check the dew point temperature:** The humidity ratio is constant, which means the partial pressure of water vapor ($p_v$) is constant. Thus, $p_v = 2.9722$ kPa. We can find the dew point temperature corresponding to this $p_v$.
    *   Find the temperature at which $p_{vs}(T_{dp}) = 2.9722$ kPa. From tables, this is approximately $T_{dp} \approx 23.9^\circ$C.
3.  **Calculate the new relative humidity at $20^\circ$C:**
    *   The new dry bulb temperature is $T_{db\_new} = 20^\circ$C.
    *   Look up $p_{vs}$ at $20^\circ$C. Let's assume $p_{vs}(20^\circ\text{C}) \approx 2.339$ kPa.
    *   The actual partial pressure of water vapor ($p_v$) remains $2.9722$ kPa because the humidity ratio is constant.
    *   **However, a critical point emerges:** Since the dew point temperature is $23.9^\circ$C and the new dry bulb temperature is $20^\circ$C, the air is supersaturated with respect to its capacity at $20^\circ$C. This means condensation will occur until the $p_v$ drops to the saturation pressure at $20^\circ$C.
    *   **If condensation occurs:** The actual partial pressure of water vapor in the air will be limited by the saturation pressure at the new dry bulb temperature ($20^\circ$C). So, the new $p_v$ becomes $p_{vs}(20^\circ\text{C}) \approx 2.339$ kPa.
    *   Calculate the new relative humidity:
        $$
        \phi_{new} = \frac{p_{v\_new}}{p_{vs}(20^\circ\text{C})} \times 100\%
        $$
        If condensation occurs and the air reaches saturation at $20^\circ$C (which it will, as $23.9^\circ\text{C} > 20^\circ\text{C}$), then $p_{v\_new} = p_{vs}(20^\circ\text{C})$.
        $$
        \phi_{new} = \frac{2.339 \text{ kPa}}{2.339 \text{ kPa}} \times 100\% = 100\%
        $$

**Answer:** If condensation occurs (which it will, as $T_{dp} > 20^\circ$C), the new relative humidity will be 100%. The excess water vapor will condense out of the air.

---

## 4. Psychrometric Chart and Relative Humidity

**Key Concept:** The psychrometric chart is a graphical representation of the properties of moist air at a standard atmospheric pressure. It's an invaluable tool for analyzing psychrometric processes.

**How RH is Represented on a Psychrometric Chart:**
*   Relative humidity is typically shown as a series of curved lines on the psychrometric chart.
*   These lines represent constant values of relative humidity, ranging from 0% (unsaturated air) to 100% (saturated air).
*   The 100% RH line is the saturation curve, which also represents the dew point temperature scale on the right or bottom edge of the chart.

**Using the Psychrometric Chart to Determine RH:**
1.  Locate the intersection of the known dry bulb temperature ($T_{db}$) and another known property (e.g., specific humidity $W$, wet bulb temperature $T_{wb}$, or enthalpy $h$).
2.  Follow the curved line of relative humidity passing through this intersection point to read the RH value on the scale.

**Example of Using the Chart:**
If you know the dry bulb temperature is $25^\circ$C and the wet bulb temperature is $18^\circ$C, you would find the intersection of these two lines on the psychrometric chart. Then, you would trace the curved RH line that passes through this intersection point to determine the relative humidity.

**Important Point:** The accuracy of reading values from a psychrometric chart depends on the resolution of the chart and the skill of the user. For precise calculations, use psychrometric equations or software.

---

## 5. Significance and Applications of Relative Humidity in HVAC&R

**Learning Outcome:** Students will be able to analyze properties of moist air using psychrometric principles and chart and explain the working principles and applications of air washers and air-conditioning systems. (CO5)
**Course Outcome Alignment:** CO1 (Basic concepts and applications), CO5 (Analyze properties of moist air).

**Human Comfort:**
*   **Physiological Response:** RH affects the rate of evaporation of sweat from the skin, which is the body's primary cooling mechanism.
    *   **High RH:** Reduces evaporation, making it feel hotter and more uncomfortable (muggy).
    *   **Low RH:** Increases evaporation, which can lead to dehydration and dry skin, feeling cooler.
*   **Optimal Range:** Generally, 40-60% RH is considered comfortable for most people, alongside appropriate temperatures.

**Health and Well-being:**
*   **Mold and Mildew Growth:** High RH (above 60-70%) encourages the growth of mold, mildew, and dust mites, which can exacerbate allergies and respiratory problems.
*   **Virus Survival:** Some viruses tend to survive longer in dry air, while others thrive in high humidity.
*   **Static Electricity:** Low RH is associated with increased static electricity, which can be an annoyance and even a hazard in some environments.

**Material Preservation:**
*   **Wood and Furniture:** High RH can cause wood to swell and warp, while very low RH can cause it to shrink and crack.
*   **Paper and Books:** Sensitive to moisture, can degrade in high humidity.
*   **Artwork and Antiques:** Require stable humidity conditions to prevent deterioration.
*   **Food Storage:** Different foods have different optimal RH levels for storage to prevent spoilage, drying out, or microbial growth.

**Industrial Processes:**
*   **Textile Industry:** The strength and processing of many fibers are highly dependent on RH.
*   **Printing Industry:** Prevents paper from expanding or contracting unevenly, which affects print registration.
*   **Electronics Manufacturing:** Critical for preventing static discharge and ensuring component reliability.
*   **Pharmaceuticals:** Many medicines require controlled humidity environments during manufacturing and storage.

**Dehumidification and Humidification:**
*   **Dehumidifiers:** Devices used to remove excess moisture from the air when RH is too high. This is a common application in air conditioning systems and standalone units.
*   **Humidifiers:** Devices used to add moisture to the air when RH is too low. Used in winter heating systems or in specific environments.

**Air Washers:**
*   **Function:** Air washers are used to simultaneously cool, humidify, or dehumidify air, and also to clean it by removing dust and particulate matter.
*   **RH Control:** In the humidifying mode, water is sprayed into the air stream, increasing the RH. In the cooling mode, if the spray water is colder than the air's dew point, it leads to dehumidification (as water vapor condenses out) and hence a change in RH.

---

## 6. Important Points to Remember

*   **Relative Humidity ($\phi$) is a ratio of actual vapor pressure ($p_v$) to saturation vapor pressure ($p_{vs}$) at the same dry bulb temperature.**
*   **RH is always expressed as a percentage.**
*   **As temperature increases, the air's capacity to hold water vapor increases, so if $p_v$ is constant, RH decreases.**
*   **As temperature decreases, the air's capacity to hold water vapor decreases. If $p_v$ remains constant, RH increases, potentially leading to condensation if $T_{db}$ drops below $T_{dp}$.**
*   **The dew point temperature ($T_{dp}$) is the temperature at which air becomes saturated ($RH = 100\%$) if cooled at constant pressure and constant specific humidity.**
*   **Psychrometric charts are graphical tools to visualize and determine the properties of moist air, including RH.**
*   **Maintaining optimal RH levels (typically 40-60%) is crucial for human comfort, health, and the preservation of materials and industrial processes.**

---

## 7. Practice Questions and Answers

**Question 1:**
Define Relative Humidity and write its mathematical expression. Explain how temperature affects relative humidity if the absolute humidity remains constant.
*   **Answer:** Relative Humidity ($\phi$) is the ratio of the actual partial pressure of water vapor ($p_v$) to the saturation partial pressure of water vapor ($p_{vs}$) at the same dry bulb temperature, expressed as a percentage: $\phi = (p_v / p_{vs}) \times 100\%$. If absolute humidity (or specific humidity) is constant, it means $p_v$ is constant. As temperature increases, $p_{vs}$ increases. Therefore, $\phi$ decreases. As temperature decreases, $p_{vs}$ decreases, and $\phi$ increases.

**Question 2:**
Air at $28^\circ$C dry bulb temperature has a relative humidity of 60%. The saturation pressure of water vapor at $28^\circ$C is 3.783 kPa. Calculate:
a) The actual partial pressure of water vapor ($p_v$).
b) The relative humidity if the air is cooled to $20^\circ$C while the specific humidity remains unchanged. (Assume saturation pressure at $20^\circ$C is 2.339 kPa).
*   **Answer:**
    a) $p_v = \phi \times p_{vs} / 100 = 60 \times 3.783 / 100 = 2.2698$ kPa.
    b) Since specific humidity remains unchanged, $p_v$ remains $2.2698$ kPa. At $20^\circ$C, $p_{vs}(20^\circ\text{C}) = 2.339$ kPa.
    The new relative humidity $\phi_{new} = (p_v / p_{vs}(20^\circ\text{C})) \times 100 = (2.2698 / 2.339) \times 100 \approx 97.04\%$.
    *(Note: The dew point temperature for $p_v = 2.2698$ kPa is approximately $18.3^\circ$C. Since $20^\circ$C is above the dew point, condensation does not occur in this specific part b.)*

**Question 3:**
What is the importance of controlling relative humidity in an office environment?
*   **Answer:** Controlling relative humidity in an office environment is important for:
    *   **Occupant Comfort:** Maintaining RH between 40-60% prevents feelings of being too hot/sticky (high RH) or too dry/irritated (low RH).
    *   **Health:** Prevents growth of mold, mildew, and dust mites (high RH) and reduces static electricity and potential respiratory irritation (low RH).
    *   **Equipment:** Sensitive electronic equipment can be affected by static electricity (low RH) or moisture damage (high RH).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## 8. References from Textbooks and Reference Books

This section highlights where you can find further details on Relative Humidity and related psychrometric concepts in your provided textbooks.

*   **Arora C.P. (Tata McGraw hill, 4th edition/2021):** Chapter on "Psychrometry" will cover the fundamental definitions, properties of moist air, psychrometric charts, and processes involving changes in relative humidity. Look for sections specifically defining and discussing relative humidity. (CO5, CO1)
*   **Ramesh Chandra Arora (PHI, 4th Printing/2015):** Similar to Arora C.P., this book will have a dedicated chapter on psychrometry, explaining relative humidity in detail, its calculation, and its significance. (CO5, CO1)
*   **Arora S. C. and S. Domkundwar (Dhanpat Rai and Company., 2018):** This textbook is likely to provide a clear explanation of psychrometric properties, including relative humidity, with examples and possibly problems related to its calculation and application. (CO5)
*   **Ahamadul Ameen (Eastern economy addition, 2020):** Expect a comprehensive treatment of psychrometry, including the definition and behavior of relative humidity under various conditions. (CO5)
*   **W P Jones (Spon Press, 5th edition/ 2001):** Chapter on Psychrometrics will thoroughly cover relative humidity, its measurement, and its role in air conditioning system design and performance. (CO5)
*   **C P Kothandaraman (New Age International., 2023) - Data book:** This is essential for looking up saturation pressures and other properties needed for calculations involving relative humidity. It will likely include psychrometric charts as well. (CO5)
*   **ASHRAE Handbook:** The ASHRAE Handbook is a definitive source for all aspects of HVAC&R. The Fundamentals volume will contain extensive information on psychrometrics, including detailed discussions on relative humidity, comfort standards, and its impact on various applications. (CO5, CO1)
*   **P Nananthanarayanan (McGraw Hill, 4th Edition 2013):** Will cover psychrometric principles, providing definitions and likely examples of relative humidity calculations and their practical relevance. (CO5)
*   **Stoecker & Jons (McGraw Hill, 2nd edition):** This classic text will offer a strong theoretical foundation for psychrometric properties, including a thorough explanation of relative humidity and its implications in air conditioning. (CO5)

---