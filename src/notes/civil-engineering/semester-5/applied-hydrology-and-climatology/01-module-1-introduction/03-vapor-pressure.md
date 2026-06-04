---
title: "vapor pressure"
subject: "APPLIED HYDROLOGY AND CLIMATOLOGY"
module: "Module 1: Introduction "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810ef7"
status: "completed"
scrapedAt: "2026-05-20T18:47:22.215Z"
---
# Applied Hydrology and Climatology: Module 1 - Introduction
## Topic: Vapor Pressure

### 1. Understanding Vapor Pressure

Vapor pressure is a fundamental concept in hydrology and climatology, representing the partial pressure exerted by water vapor in an atmosphere. It's a crucial indicator of the atmospheric moisture content and plays a significant role in various hydrological processes like evaporation, transpiration, and condensation.

#### 1.1 Key Concepts and Definitions

*   **Partial Pressure:** In a mixture of gases, the pressure exerted by each individual gas as if it were the only gas present.
*   **Water Vapor:** Water in its gaseous state.
*   **Atmospheric Pressure:** The total pressure exerted by the Earth's atmosphere at a given point.
*   **Saturation:** The condition where the atmosphere can hold no more water vapor at a given temperature and pressure.
*   **Equilibrium:** A state where the rate of evaporation equals the rate of condensation.

#### 1.2 Learning Outcomes Covered

*   **Define vapor pressure and its significance in hydrological and climatological processes.**
*   **Differentiate between actual vapor pressure and saturation vapor pressure.**
*   **Explain the relationship between vapor pressure, temperature, and the capacity of the atmosphere to hold water vapor.**
*   **Introduce the concept of relative humidity and its dependence on actual and saturation vapor pressure.**
*   **Discuss the implications of vapor pressure for evaporation and condensation rates.**

---

### 2. Actual Vapor Pressure ($e$)

#### 2.1 Definition

Actual vapor pressure ($e$) is the partial pressure exerted by the water vapor that is *actually* present in the atmosphere at a given time and location. It directly reflects the amount of water vapor in the air.

#### 2.2 Measurement and Units

*   Vapor pressure is typically measured in units of pressure, such as:
    *   **Pascals (Pa):** The SI unit of pressure.
    *   **Kilopascals (kPa):** Commonly used in meteorology.
    *   **Millibars (mb):** Also frequently used in meteorology (1 mb = 0.1 kPa).
    *   **Hectopascals (hPa):** Equivalent to millibars (1 hPa = 1 mb).
    *   **Inches of Mercury (inHg):** Less common in scientific contexts but still encountered.

#### 2.3 Significance

*   **Direct measure of moisture content:** A higher actual vapor pressure indicates more water vapor in the air.
*   **Drives evaporation:** The difference between saturation vapor pressure and actual vapor pressure is a primary driver of evaporation.

#### 2.4 Example

If at a particular time and place, the atmospheric pressure is 100 kPa and the partial pressure due to water vapor is 2 kPa, then the actual vapor pressure ($e$) is 2 kPa.

---

### 3. Saturation Vapor Pressure ($e_s$)

#### 3.1 Definition

Saturation vapor pressure ($e_s$) is the maximum partial pressure that water vapor can exert at a specific temperature. It represents the vapor pressure at which the air is saturated, meaning it can hold no more water vapor without condensation occurring.

#### 3.2 Dependence on Temperature

*   **Crucial Relationship:** Saturation vapor pressure is *highly dependent* on temperature.
*   **Warmer air holds more moisture:** As temperature increases, the capacity of the air to hold water vapor increases, and thus, the saturation vapor pressure also increases.
*   **Colder air holds less moisture:** As temperature decreases, the capacity decreases, leading to a lower saturation vapor pressure.

#### 3.3 Calculation (Approximations)

While complex equations exist, simplified approximations are often used:

*   **Bolton's Equation (1980):** A widely used empirical formula.
    $e_s = 0.6108 \times \exp\left(\frac{17.27 \times T}{T + 237.3}\right)$
    Where:
    *   $e_s$ is the saturation vapor pressure in kPa.
    *   $T$ is the temperature in degrees Celsius (°C).
    *   $\exp()$ is the exponential function (e raised to the power of the argument).

*   **Other approximations:** Magnus formula, Goff-Gratch formula (more complex and accurate).

#### 3.4 Significance

*   **Defines the upper limit of moisture:** It sets the maximum amount of water vapor the air can contain at a given temperature.
*   **Key component of relative humidity:** Used in conjunction with actual vapor pressure to determine how "full" the air is with water vapor.

#### 3.5 Example

At 20°C, the saturation vapor pressure ($e_s$) is approximately 2.34 kPa. At 30°C, it increases to approximately 4.24 kPa. This demonstrates how warmer air can hold significantly more moisture.

---

### 4. Relative Humidity (RH)

#### 4.1 Definition

Relative humidity (RH) is the ratio of the actual vapor pressure ($e$) to the saturation vapor pressure ($e_s$) at a given temperature, expressed as a percentage.

#### 4.2 Formula

$RH = \frac{e}{e_s} \times 100\%$

Where:
*   $RH$ is Relative Humidity in percent.
*   $e$ is the actual vapor pressure.
*   $e_s$ is the saturation vapor pressure at the same temperature.

#### 4.3 Interpretation

*   **100% RH:** The air is saturated. Any further addition of water vapor or decrease in temperature will lead to condensation (e.g., fog, dew, clouds).
*   **< 100% RH:** The air is not saturated. Evaporation can occur.
*   **Low RH:** Indicates dry air with a high capacity for evaporation.
*   **High RH:** Indicates moist air with a low capacity for evaporation.

#### 4.4 Dependence on Temperature

*   **Indirect dependence:** While RH is directly calculated from vapor pressures, it *indirectly* depends on temperature because $e_s$ changes with temperature.
*   **Example:** If the actual vapor pressure remains constant, but the temperature increases, $e_s$ increases, and thus RH decreases. Conversely, if the temperature decreases, $e_s$ decreases, and RH increases.

#### 4.5 Significance

*   **Comfort indicator:** Affects human comfort and the rate of perspiration evaporation.
*   **Evaporation potential:** A key indicator of how readily water will evaporate.
*   **Plant transpiration:** Influences the rate at which plants release water vapor.

#### 4.6 Example

If the actual vapor pressure ($e$) is 1.5 kPa and the saturation vapor pressure ($e_s$) at that temperature is 2.34 kPa, then:

$RH = \frac{1.5 \text{ kPa}}{2.34 \text{ kPa}} \times 100\% \approx 64.1\%$

This means the air is holding about 64.1% of the maximum amount of water vapor it can at that temperature.

---

### 5. Vapor Pressure Gradient and Evaporation

#### 5.1 Driving Force for Evaporation

The difference between the saturation vapor pressure over a water surface ($e_{sw}$) and the actual vapor pressure in the air above it ($e$) is known as the **vapor pressure deficit** or **vapor pressure gradient**. This gradient is the primary driving force for evaporation.

#### 5.2 Formula

$Vapor\ Pressure\ Deficit = e_{sw} - e$

Where:
*   $e_{sw}$ is the saturation vapor pressure over the water surface at the water temperature.
*   $e$ is the actual vapor pressure of the air.

#### 5.3 Relationship to Evaporation Rate

*   **Larger deficit = Higher evaporation:** A larger difference between $e_{sw}$ and $e$ means there is a stronger "pull" for water molecules to escape the liquid phase and enter the gaseous phase.
*   **Smaller deficit = Lower evaporation:** If $e$ is close to $e_{sw}$, evaporation will be slow.
*   **Zero or negative deficit:** If $e \ge e_{sw}$, condensation or no net evaporation will occur.

#### 5.4 Factors Affecting Evaporation (related to vapor pressure)

*   **Temperature:** Higher temperatures increase both $e_{sw}$ (of the water surface) and the air's potential to hold moisture, but the net effect is usually increased evaporation due to a larger $e_{sw}$ and often an increase in $e$.
*   **Wind:** Wind removes moist air from the surface, effectively lowering the actual vapor pressure ($e$) near the surface and maintaining a steeper vapor pressure gradient, thus increasing evaporation.

#### 5.5 Example

Consider a water surface at 25°C. The saturation vapor pressure over this surface ($e_{sw}$) is approximately 3.17 kPa.

*   **Scenario 1:** The air above the water has an actual vapor pressure ($e$) of 1.5 kPa.
    Vapor Pressure Deficit = 3.17 kPa - 1.5 kPa = 1.67 kPa. This is a significant deficit, leading to substantial evaporation.
*   **Scenario 2:** The air above the water is very humid with an actual vapor pressure ($e$) of 3.0 kPa.
    Vapor Pressure Deficit = 3.17 kPa - 3.0 kPa = 0.17 kPa. This is a small deficit, resulting in very slow evaporation.

---

### 6. Condensation and Dew Point

#### 6.1 Condensation

Condensation is the process by which water vapor in the air changes into liquid water. It occurs when the air becomes saturated (RH = 100%) and then cools further, or when more water vapor is added to the air.

#### 6.2 Dew Point Temperature ($T_d$)

*   **Definition:** The dew point temperature is the temperature to which air must be cooled, at constant actual vapor pressure ($e$) and pressure, to become saturated.
*   **Significance:** The dew point is a direct measure of the actual amount of moisture in the air. It is equal to the actual vapor pressure ($e$).
*   **Relationship to $e$:** The actual vapor pressure ($e$) of the air is precisely the saturation vapor pressure ($e_s$) at the dew point temperature ($T_d$).
    $e = e_s(T_d)$

#### 6.3 Condensation Processes

*   **Cooling:** As air cools, its saturation vapor pressure ($e_s$) decreases. If it cools to its dew point temperature, condensation begins. Examples:
    *   **Dew:** Forms on surfaces when they cool below the dew point of the surrounding air.
    *   **Fog/Clouds:** Form when a large volume of air cools to its dew point.
*   **Addition of Moisture:** Adding water vapor to air increases the actual vapor pressure ($e$). If $e$ reaches $e_s$ at the current temperature, condensation occurs. Example:
    *   Breathing on a cold window.

#### 6.4 Example

If the dew point temperature ($T_d$) is 10°C, then the actual vapor pressure ($e$) in the air is the saturation vapor pressure at 10°C. Using Bolton's equation:

$e = 0.6108 \times \exp\left(\frac{17.27 \times 10}{10 + 237.3}\right) \approx 1.23 \text{ kPa}$

If the current air temperature is 20°C, the saturation vapor pressure ($e_s$) at 20°C is approximately 2.34 kPa.
$RH = \frac{1.23 \text{ kPa}}{2.34 \text{ kPa}} \times 100\% \approx 52.6\%$

If this air cools to 10°C, its RH will become 100%, and condensation (dew) might start forming on surfaces that reach 10°C.

---

### 7. Practice Questions and Exercises

**Instructions:** Attempt the following questions. Answers are provided below.

**Question 1:**
Define vapor pressure and explain why it is a critical parameter in applied hydrology and climatology.

**Question 2:**
If the actual vapor pressure ($e$) in the air is 1.8 kPa and the saturation vapor pressure ($e_s$) at that temperature is 3.0 kPa, what is the relative humidity?

**Question 3:**
Using Bolton's equation, calculate the saturation vapor pressure ($e_s$) at a temperature of 15°C.
$e_s = 0.6108 \times \exp\left(\frac{17.27 \times T}{T + 237.3}\right)$

**Question 4:**
Explain how wind affects the evaporation rate in terms of vapor pressure.

**Question 5:**
If the dew point temperature ($T_d$) is 12°C, what is the actual vapor pressure ($e$) in the air? (Use Bolton's equation for $e_s(T_d)$). If the air temperature is 22°C, calculate the relative humidity.

---

### 8. Answers to Practice Questions

**Answer 1:**
Vapor pressure is the partial pressure exerted by water vapor in the atmosphere. It is critical in hydrology and climatology because:
*   It directly indicates the amount of moisture in the air.
*   The difference between actual vapor pressure and saturation vapor pressure (vapor pressure deficit) drives evaporation and transpiration.
*   It is a key factor in determining condensation processes (dew, fog, clouds).
*   It influences relative humidity, which affects comfort and many natural processes.

**Answer 2:**
$RH = \frac{e}{e_s} \times 100\% = \frac{1.8 \text{ kPa}}{3.0 \text{ kPa}} \times 100\% = 60\%$

**Answer 3:**
Using Bolton's equation with $T = 15^\circ C$:
$e_s = 0.6108 \times \exp\left(\frac{17.27 \times 15}{15 + 237.3}\right)$
$e_s = 0.6108 \times \exp\left(\frac{259.05}{252.3}\right)$
$e_s = 0.6108 \times \exp(1.0267)$
$e_s \approx 0.6108 \times 2.792$
$e_s \approx 1.706 \text{ kPa}$

**Answer 4:**
Wind removes moist air from the surface of a water body or moist surface. This action lowers the actual vapor pressure ($e$) in the immediate vicinity of the surface, thereby increasing the vapor pressure deficit ($e_{sw} - e$) between the water surface and the air. A larger vapor pressure deficit provides a stronger driving force for evaporation, thus increasing the evaporation rate.

**Answer 5:**
*   **Actual Vapor Pressure ($e$):** The actual vapor pressure is equal to the saturation vapor pressure at the dew point temperature ($T_d = 12^\circ C$).
    Using Bolton's equation:
    $e = 0.6108 \times \exp\left(\frac{17.27 \times 12}{12 + 237.3}\right)$
    $e = 0.6108 \times \exp\left(\frac{207.24}{249.3}\right)$
    $e = 0.6108 \times \exp(0.8313)$
    $e \approx 0.6108 \times 2.296$
    $e \approx 1.403 \text{ kPa}$

*   **Saturation Vapor Pressure ($e_s$) at 22°C:**
    Using Bolton's equation:
    $e_s = 0.6108 \times \exp\left(\frac{17.27 \times 22}{22 + 237.3}\right)$
    $e_s = 0.6108 \times \exp\left(\frac{379.94}{259.3}\right)$
    $e_s = 0.6108 \times \exp(1.4653)$
    $e_s \approx 0.6108 \times 4.329$
    $e_s \approx 2.645 \text{ kPa}$

*   **Relative Humidity (RH):**
    $RH = \frac{e}{e_s} \times 100\% = \frac{1.403 \text{ kPa}}{2.645 \text{ kPa}} \times 100\% \approx 53.0\%$

---

### 9. Important Points to Remember

*   **Vapor pressure is a partial pressure**, reflecting the amount of water vapor in the air.
*   **Saturation vapor pressure ($e_s$) increases exponentially with temperature.** Warmer air can hold significantly more water vapor.
*   **Actual vapor pressure ($e$) is the moisture content.** It remains constant unless water is added or removed.
*   **Relative humidity (RH) is a ratio** that tells us how "full" the air is with moisture relative to its capacity at a given temperature.
*   **The vapor pressure deficit ($e_{sw} - e$) is the engine for evaporation.** A larger deficit means more evaporation.
*   **Dew point temperature ($T_d$) is a direct measure of actual vapor pressure.** $e = e_s(T_d)$.
*   **Condensation occurs when air reaches its dew point** (100% RH) and cools further, or when more moisture is added.
