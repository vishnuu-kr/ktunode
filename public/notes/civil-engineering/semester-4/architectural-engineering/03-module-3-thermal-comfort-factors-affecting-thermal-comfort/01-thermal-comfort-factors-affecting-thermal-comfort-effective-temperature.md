---
title: "Thermal comfort: Factors affecting thermal comfort- effective Temperature"
subject: "ARCHITECTURAL ENGINEERING"
module: "Module 3: Thermal comfort: Factors affecting thermal comfort"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810bc5"
status: "completed"
scrapedAt: "2026-05-20T18:43:00.541Z"
---
# ARCHITECTURAL ENGINEERING: Module 3 - Thermal Comfort

## Topic: Thermal Comfort - Effective Temperature

---

### 1. Introduction to Thermal Comfort

**Definition:** Thermal comfort is a condition of mind that expresses satisfaction with the thermal environment. It is not solely about temperature but a complex interplay of various factors that influence how a person feels in a particular space.

**Importance in Architectural Engineering:**
*   **Occupant Well-being and Productivity:** Comfortable occupants are generally happier, healthier, and more productive.
*   **Energy Efficiency:** Understanding thermal comfort allows for the design of buildings that minimize energy consumption for heating and cooling while maintaining acceptable comfort levels.
*   **Building Performance:** Thermal comfort directly impacts the usability and appeal of a building.

---

### 2. Factors Affecting Thermal Comfort

Thermal comfort is influenced by two main categories of factors:

**A. Environmental Factors (Operative Environmental Factors)**

These are the physical conditions of the surrounding environment.

*   **Air Temperature (Dry-bulb Temperature):**
    *   **Definition:** The temperature of the air measured by a thermometer not exposed to radiation.
    *   **Impact:** The most direct measure of heat. Higher air temperatures generally lead to warmer sensations, and lower temperatures to cooler sensations.
    *   **Example:** In a room, if the air temperature is 25°C, it will feel warmer than if it is 20°C, all other factors being equal.

*   **Mean Radiant Temperature (MRT):**
    *   **Definition:** The uniform temperature of an imaginary enclosure in which an occupant would exchange the same amount of radiant heat as in the actual non-uniform environment. It represents the average temperature of all surrounding surfaces.
    *   **Impact:** Significantly affects how we perceive temperature. Warm surfaces radiate heat towards us, making us feel warmer, while cold surfaces absorb heat from us, making us feel cooler.
    *   **Example:** Standing near a large, sunny window on a cold day will make you feel warmer due to the radiant heat from the window, even if the air temperature is low. Conversely, standing near a large, cold glass facade in winter will make you feel cold due to the radiant heat loss to the glass.

*   **Air Velocity (Air Speed):**
    *   **Definition:** The speed at which air is moving past a person.
    *   **Impact:** Affects heat loss through convection and evaporation. Higher air velocity increases convective heat loss, making us feel cooler. It also enhances evaporative cooling from the skin.
    *   **Example:** A gentle breeze on a warm day provides comfort by increasing convective and evaporative heat loss. In a hot environment, strong air movement can be used to provide cooling. However, excessive air movement can cause discomfort due to draughts.

*   **Humidity (Water Vapor Content):**
    *   **Definition:** The amount of moisture present in the air. Often expressed as relative humidity (RH), which is the ratio of the actual amount of water vapor in the air to the maximum amount it can hold at that temperature.
    *   **Impact:** Primarily affects the rate of evaporative heat loss from the skin.
        *   **High Humidity:** Reduces the rate of evaporation, making it harder for the body to cool itself. This leads to a feeling of stuffiness and warmth, even at moderate air temperatures.
        *   **Low Humidity:** Increases the rate of evaporation, which can lead to dry skin, dry mucous membranes, and a feeling of coolness.
    *   **Example:** On a hot, humid day (e.g., 30°C with 80% RH), it feels much hotter and more uncomfortable than a hot, dry day (e.g., 30°C with 20% RH) because the body struggles to sweat and evaporate.

**B. Personal Factors (Physiological and Psychological)**

These are factors related to the individual occupant.

*   **Metabolic Rate:**
    *   **Definition:** The rate at which the body generates heat from internal metabolic processes, primarily influenced by physical activity. Measured in "met" units, where 1 met is the average metabolic rate of a resting person (approx. 58.2 W/m² of body surface area).
    *   **Impact:** Higher metabolic rates (e.g., during exercise) generate more internal heat, requiring more cooling. Lower metabolic rates (e.g., during rest) generate less heat, requiring more heating.
    *   **Example:** Someone sitting at a desk (low activity, ~1 met) will feel comfortable at a different operative temperature than someone performing light manual labor (higher activity, ~1.5-2 met).

*   **Clothing Insulation:**
    *   **Definition:** The thermal resistance of clothing worn by a person. Measured in "clo" units, where 1 clo is the thermal insulation of clothing for a seated and resting person (approx. 0.155 m²K/W).
    *   **Impact:** Clothing acts as a barrier to heat exchange between the body and the environment. More clothing provides more insulation, reducing heat loss and making a person feel warmer. Less clothing reduces insulation, increasing heat loss and making a person feel cooler.
    *   **Example:** Wearing a thick sweater and trousers (high clo) in a room will make you feel warmer than wearing light summer clothing (low clo) at the same operative temperature.

---

### 3. Effective Temperature (ET)

**Definition:** Effective Temperature is a **single index** that combines the effects of air temperature, humidity, and air velocity on human comfort. It represents the temperature of still, saturated air that would produce the same degree of thermal sensation as the actual condition.

**Why Effective Temperature?**
*   Historically, early attempts to quantify comfort were made by combining temperature and humidity.
*   It aims to provide a simplified measure of comfort that accounts for the combined impact of these three key environmental factors.

**Limitations of Effective Temperature:**
*   **Does not account for Mean Radiant Temperature:** ET assumes still, saturated air and does not directly incorporate the significant impact of radiant heat exchange with surrounding surfaces.
*   **Does not account for metabolic rate or clothing:** It's based on a standard person in a standard condition, neglecting individual variations in activity and clothing.
*   **Doesn't account for personal factors:** It's an environmental index, not a personal comfort index.

**Calculation:**
The calculation of Effective Temperature is complex and typically involves psychrometric charts or specialized formulas. It's more of a conceptual tool and a historical precursor to more sophisticated comfort indices.

**Example Scenario:**
Imagine two environments:
1.  **Environment A:** Air Temperature = 24°C, RH = 50%, Air Velocity = 0.1 m/s (still air)
2.  **Environment B:** Air Temperature = 22°C, RH = 80%, Air Velocity = 0.1 m/s (still air)

In Environment A, the conditions might feel moderately comfortable.
In Environment B, although the air temperature is lower, the higher humidity will reduce evaporative cooling, making it feel equally warm or even warmer than Environment A. Effective Temperature aims to quantify this equivalence. If both environments have the same Effective Temperature, it implies that a person would feel equally comfortable in both, despite the different readings of air temperature and humidity.

---

### 4. Modern Comfort Indices and their Relationship to Effective Temperature

While Effective Temperature was an early attempt, modern architectural engineering relies on more comprehensive indices that account for a wider range of factors.

*   **Operative Temperature (OT):**
    *   **Definition:** A single temperature that represents the combined effect of air temperature and mean radiant temperature. It is the temperature of a body that gains or loses heat solely by convection and radiation to the environment.
    *   **Calculation:** For typical indoor conditions where air speed is low (< 0.2 m/s), OT is approximately the average of the air temperature and the mean radiant temperature:
        *   $OT \approx \frac{T_{air} + MRT}{2}$
    *   **Significance:** More accurately reflects the combined thermal load from air and surfaces.

*   **Predicted Mean Vote (PMV):**
    *   **Definition:** A thermal comfort index developed by P.O. Fanger that predicts the mean thermal sensation vote on a seven-point scale (-3 cold to +3 hot), based on the six primary factors (air temperature, MRT, air velocity, humidity, metabolic rate, and clothing insulation).
    *   **Significance:** Widely accepted standard (e.g., ASHRAE Standard 55, ISO 7730) for assessing thermal comfort in buildings.

*   **Predicted Percentage of Dissatisfied (PPD):**
    *   **Definition:** A measure directly related to PMV, indicating the percentage of occupants expected to be dissatisfied with the thermal environment.
    *   **Significance:** Provides a quantitative measure of potential discomfort for a population.

**Relationship:** Effective temperature can be seen as a foundational concept that acknowledged the combined impact of temperature, humidity, and air motion, paving the way for more sophisticated indices like Operative Temperature and PMV/PPD, which incorporate radiant temperature, metabolic rate, and clothing for a more holistic assessment of thermal comfort.

---

### 5. Practice Questions and Exercises

**Question 1:**
Define Thermal Comfort in your own words. What are the two main categories of factors that influence it?

**Answer 1:**
Thermal comfort is a subjective feeling of satisfaction with the thermal environment. It's about how a person feels neither too hot nor too cold. The two main categories of factors are:
1.  **Environmental Factors:** Air temperature, Mean Radiant Temperature, Air Velocity, Humidity.
2.  **Personal Factors:** Metabolic Rate, Clothing Insulation.

**Question 2:**
Explain the significance of Mean Radiant Temperature (MRT) in thermal comfort. Provide an example where MRT plays a crucial role.

**Answer 2:**
Mean Radiant Temperature (MRT) is the average temperature of all surrounding surfaces. It significantly affects comfort because we exchange heat through radiation with these surfaces. Warm surfaces make us feel warmer, and cold surfaces make us feel cooler, even if the air temperature remains constant.
**Example:** Standing near a large window with direct sunlight on a cool day will make you feel warmer due to the radiant heat from the sun and the warm glass, even if the air temperature is low. Conversely, standing near a cold, uninsulated wall in winter will make you feel chilled due to radiant heat loss to the wall.

**Question 3:**
How does humidity affect thermal comfort? Differentiate between the impact of high humidity and low humidity on a hot day.

**Answer 3:**
Humidity affects thermal comfort primarily by influencing the rate of evaporative heat loss from the skin.
*   **High Humidity:** On a hot day, high humidity reduces the rate at which sweat can evaporate from the skin. This impairs the body's natural cooling mechanism, making it feel hotter and more uncomfortable (stuffy).
*   **Low Humidity:** On a hot day, low humidity allows sweat to evaporate more readily, facilitating efficient cooling and making the environment feel more comfortable. However, extremely low humidity can lead to discomfort through excessive drying of skin and mucous membranes.

**Question 4:**
What is Effective Temperature? What are its main limitations as a comfort index?

**Answer 4:**
Effective Temperature (ET) is a single index that combines the effects of air temperature, humidity, and air velocity. It represents the temperature of still, saturated air that would produce the same degree of thermal sensation as the actual condition.
**Limitations:**
*   It does not account for Mean Radiant Temperature (MRT).
*   It does not account for personal factors like metabolic rate and clothing insulation.

**Question 5 (Application/Scenario):**
A person is sitting in a room with an air temperature of 22°C. However, they are sitting next to a large window that is very cold to the touch on a winter day. They are wearing a light shirt. Would you expect them to feel comfortable? Explain your reasoning, considering the factors discussed.

**Answer 5:**
No, the person is unlikely to feel comfortable.
*   **Air Temperature:** 22°C might be acceptable.
*   **Mean Radiant Temperature (MRT):** The cold window surface will have a low MRT, causing significant radiant heat loss from the person's body to the window. This will make them feel cold, even if the air temperature is moderate.
*   **Clothing Insulation:** Wearing a light shirt provides low insulation, meaning less protection against heat loss.

The dominant factor here is likely the low MRT from the cold window, which will counteract the moderate air temperature and lead to discomfort. This scenario highlights the importance of considering MRT in addition to air temperature.

---

### 6. Important Points to Remember

*   **Thermal comfort is subjective.** What is comfortable for one person may not be for another.
*   The six primary factors influencing thermal comfort are: **Air Temperature, Mean Radiant Temperature, Air Velocity, Humidity, Metabolic Rate, and Clothing Insulation.**
*   **Effective Temperature** was an early attempt to combine temperature, humidity, and air velocity but **neglects MRT and personal factors.**
*   **Operative Temperature** is a more useful environmental index as it combines **Air Temperature and MRT.**
*   Modern standards like **PMV/PPD** are more comprehensive and account for all six primary factors.
*   Architectural design should aim to control all relevant factors to create environments that are thermally comfortable and energy-efficient.

---
