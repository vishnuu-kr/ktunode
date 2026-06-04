---
title: "saturation vapor pressure–temperature relation (simple problems)"
subject: "APPLIED HYDROLOGY AND CLIMATOLOGY"
module: "Module 1: Introduction "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810ef8"
status: "completed"
scrapedAt: "2026-05-20T18:47:22.906Z"
---
# APPLIED HYDROLOGY AND CLIMATOLOGY - MODULE 1: INTRODUCTION

## Topic: Saturation Vapor Pressure–Temperature Relation (Simple Problems)

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Define saturation vapor pressure.
*   Understand the relationship between saturation vapor pressure and temperature.
*   Apply common empirical equations to calculate saturation vapor pressure at a given temperature.
*   Calculate saturation vapor pressure at different temperatures and understand the implications.
*   Interpret and use saturation vapor pressure data in simple hydrological and climatological contexts.

---

### 2. Key Concepts and Definitions

*   **Vapor Pressure:** The partial pressure exerted by water vapor in a mixture of gases (like air). It's a measure of the "amount" of water vapor present.
*   **Saturation:** The condition where the air can hold no more water vapor at a given temperature and pressure. At saturation, the rate of evaporation equals the rate of condensation.
*   **Saturation Vapor Pressure ($e_s$):** The maximum vapor pressure that air can hold at a specific temperature. Beyond this pressure, excess water vapor will condense into liquid water.
*   **Temperature:** A measure of the average kinetic energy of the molecules in a substance. In the context of vapor pressure, higher temperatures mean air molecules have more energy, allowing them to hold more water vapor.
*   **Dew Point Temperature:** The temperature to which air must be cooled at constant pressure and water content to reach saturation. At the dew point, the actual vapor pressure equals the saturation vapor pressure at that dew point temperature.

---

### 3. The Saturation Vapor Pressure–Temperature Relationship

**Core Principle:** Saturation vapor pressure is **strongly dependent** on temperature. As temperature increases, the saturation vapor pressure **increases exponentially**.

**Why does this happen?**

*   **Kinetic Energy:** At higher temperatures, water molecules in both liquid and gaseous states have greater kinetic energy.
*   **Evaporation:** More molecules in the liquid phase have enough energy to escape into the gaseous phase (evaporate).
*   **Condensation:** Simultaneously, molecules in the gaseous phase have more energy, leading to more collisions and a higher rate of condensation back into the liquid phase.
*   **Equilibrium:** Saturation is reached when the rate of evaporation equals the rate of condensation. For a higher vapor pressure (more water molecules in the air), a higher temperature is required to achieve this equilibrium due to the increased kinetic energy needed to overcome intermolecular forces.

**Visualizing the Relationship:**

Imagine a graph with temperature on the x-axis and saturation vapor pressure on the y-axis. The relationship is not linear; it's a curve that gets steeper as temperature increases.

---

### 4. Empirical Equations for Saturation Vapor Pressure

Several empirical formulas have been developed to approximate the saturation vapor pressure ($e_s$) as a function of temperature ($T$). These are essential for calculations in hydrology and climatology. The most common ones are:

#### 4.1. August-Roche-Magnus Formula (and its variations)

This is a widely used and relatively simple formula. A common form is:

$e_s(T) = 0.611 \times \exp\left(\frac{17.27 \times T}{T + 237.3}\right)$

Where:
*   $e_s(T)$ is the saturation vapor pressure in kilopascals (kPa).
*   $T$ is the air temperature in degrees Celsius (°C).
*   `exp()` is the exponential function ($e^x$).
*   0.611 is a constant (approximately the saturation vapor pressure at 0°C in kPa).
*   17.27 and 237.3 are empirical constants specific to this formula (derived for water vapor over liquid water).

**Important Note:** Different sources might use slightly different constants (e.g., 17.27 vs. 17.62, 237.3 vs. 243.2). The choice often depends on the specific application or the water phase (liquid or ice). For most general purposes in applied hydrology and climatology focusing on above-freezing temperatures, the formula above is commonly used.

#### 4.2. Tetens' Formula

Another popular formula, often used in meteorological contexts:

$e_s(T) = 0.6108 \times \exp\left(\frac{17.27 \times T}{T + 237.3}\right)$

*   This is very similar to the August-Roche-Magnus formula, with a slightly different pre-exponential constant (0.6108 vs. 0.611). The difference is usually minor for typical atmospheric temperatures.

#### 4.3. Goff-Gratch Equation

This is a more complex and accurate equation, derived from thermodynamic principles. It's often considered the most accurate but is computationally more demanding. It's less commonly used for "simple problems" but is the basis for many standard tables.

**For the purpose of this introductory module and simple problems, we will focus on the August-Roche-Magnus type formula.**

---

### 5. Examples and Calculations

**Example 1: Calculating Saturation Vapor Pressure at a given Temperature**

**Problem:** Calculate the saturation vapor pressure of air at 20°C using the August-Roche-Magnus formula: $e_s(T) = 0.611 \times \exp\left(\frac{17.27 \times T}{T + 237.3}\right)$.

**Solution:**
Given: $T = 20^\circ$C
Formula: $e_s(T) = 0.611 \times \exp\left(\frac{17.27 \times T}{T + 237.3}\right)$

Substitute $T = 20$:
$e_s(20) = 0.611 \times \exp\left(\frac{17.27 \times 20}{20 + 237.3}\right)$
$e_s(20) = 0.611 \times \exp\left(\frac{345.4}{257.3}\right)$
$e_s(20) = 0.611 \times \exp(1.3424)$
$e_s(20) = 0.611 \times 3.8276$
$e_s(20) \approx 2.338$ kPa

**Answer:** The saturation vapor pressure at 20°C is approximately 2.338 kPa.

**Example 2: Comparing Saturation Vapor Pressure at Different Temperatures**

**Problem:** How much does the saturation vapor pressure increase when the temperature rises from 10°C to 30°C? Use the August-Roche-Magnus formula.

**Solution:**
First, calculate $e_s$ at 10°C:
$e_s(10) = 0.611 \times \exp\left(\frac{17.27 \times 10}{10 + 237.3}\right)$
$e_s(10) = 0.611 \times \exp\left(\frac{172.7}{247.3}\right)$
$e_s(10) = 0.611 \times \exp(0.6983)$
$e_s(10) = 0.611 \times 2.0103$
$e_s(10) \approx 1.228$ kPa

Next, calculate $e_s$ at 30°C:
$e_s(30) = 0.611 \times \exp\left(\frac{17.27 \times 30}{30 + 237.3}\right)$
$e_s(30) = 0.611 \times \exp\left(\frac{518.1}{267.3}\right)$
$e_s(30) = 0.611 \times \exp(1.9383)$
$e_s(30) = 0.611 \times 6.9463$
$e_s(30) \approx 4.244$ kPa

Increase in saturation vapor pressure:
$\Delta e_s = e_s(30) - e_s(10)$
$\Delta e_s \approx 4.244 - 1.228$
$\Delta e_s \approx 3.016$ kPa

**Answer:** The saturation vapor pressure increases by approximately 3.016 kPa when the temperature rises from 10°C to 30°C. This highlights the non-linear, increasing nature of the relationship.

**Example 3: Understanding Actual vs. Saturation Vapor Pressure**

**Problem:** On a particular day, the air temperature is 25°C and the actual vapor pressure is 1.8 kPa.
a) What is the saturation vapor pressure at 25°C?
b) Is the air saturated? If not, what is the relative humidity?

**Solution:**
Given: $T = 25^\circ$C, actual vapor pressure ($e$) = 1.8 kPa.
Formula: $e_s(T) = 0.611 \times \exp\left(\frac{17.27 \times T}{T + 237.3}\right)$

a) Calculate saturation vapor pressure at 25°C:
$e_s(25) = 0.611 \times \exp\left(\frac{17.27 \times 25}{25 + 237.3}\right)$
$e_s(25) = 0.611 \times \exp\left(\frac{431.75}{262.3}\right)$
$e_s(25) = 0.611 \times \exp(1.6457)$
$e_s(25) = 0.611 \times 5.183$
$e_s(25) \approx 3.167$ kPa

b) **Saturation Check:**
Compare actual vapor pressure ($e$) with saturation vapor pressure ($e_s$).
$e = 1.8$ kPa
$e_s = 3.167$ kPa

Since $e < e_s$ (1.8 kPa < 3.167 kPa), the air is **not saturated**.

**Relative Humidity (RH):**
Relative humidity is the ratio of the actual vapor pressure to the saturation vapor pressure, expressed as a percentage.
$RH = \left(\frac{e}{e_s}\right) \times 100\%$

$RH = \left(\frac{1.8 \text{ kPa}}{3.167 \text{ kPa}}\right) \times 100\%$
$RH = 0.5686 \times 100\%$
$RH \approx 56.9\%$

**Answers:**
a) The saturation vapor pressure at 25°C is approximately 3.167 kPa.
b) The air is not saturated. The relative humidity is approximately 56.9%.

---

### 6. Implications in Hydrology and Climatology

Understanding the saturation vapor pressure–temperature relation is crucial for:

*   **Evaporation:** The rate of evaporation from water bodies (lakes, rivers) and soil surfaces is directly related to the difference between saturation vapor pressure at the surface temperature and the actual vapor pressure in the air above it. Higher temperatures lead to higher potential evaporation.
*   **Transpiration:** Similar to evaporation, plant transpiration rates are influenced by vapor pressure deficits.
*   **Condensation and Precipitation:** When air cools to its dew point (where actual vapor pressure equals saturation vapor pressure), condensation occurs, forming clouds and eventually precipitation. The amount of moisture the atmosphere can hold is dictated by temperature.
*   **Humidity Measurement:** Understanding $e_s$ is fundamental to interpreting humidity measurements like relative humidity and dew point.
*   **Climate Modeling:** These relationships are embedded in climate models to predict atmospheric moisture content, cloud formation, and precipitation patterns.
*   **Drought Assessment:** Understanding how much moisture the atmosphere can hold at different temperatures helps in assessing drought conditions and their potential severity.

---

### 7. Important Points to Remember

*   **Non-linear Relationship:** Saturation vapor pressure increases **exponentially** with temperature, not linearly.
*   **Higher Temp = More Moisture:** Warmer air can hold significantly more water vapor than colder air.
*   **Empirical Formulas:** Use validated formulas (like August-Roche-Magnus) for calculations. Be aware of the constants used.
*   **Units:** Ensure consistency in units, especially for temperature (°C) and vapor pressure (kPa).
*   **Saturation means Equilibrium:** At saturation, evaporation and condensation rates are equal.
*   **Actual vs. Saturation:** The difference between actual vapor pressure and saturation vapor pressure at a given temperature is a key driver of evaporation and humidity levels.

---

### 8. Practice Questions

1.  **Calculate** the saturation vapor pressure at 15°C using the formula: $e_s(T) = 0.611 \times \exp\left(\frac{17.27 \times T}{T + 237.3}\right)$.
2.  If the air temperature is 28°C and the actual vapor pressure is 2.0 kPa, **determine**:
    a) The saturation vapor pressure at 28°C.
    b) Whether the air is saturated.
    c) The relative humidity.
3.  **Explain** why the saturation vapor pressure increases with temperature.
4.  **Compare** the saturation vapor pressure at 5°C and 35°C. What is the difference? What does this difference imply about the atmosphere's ability to hold moisture at these temperatures?
5.  A farmer is concerned about frost. The air temperature overnight is forecast to drop to -2°C. The current actual vapor pressure is 0.3 kPa.
    a) **Calculate** the saturation vapor pressure at -2°C. (Note: The constants in the formula are generally for water, but can be used as an approximation for vapor over ice at slightly below freezing).
    b) **Determine** if frost is likely to form. (Frost forms when air cools to its frost point, which is analogous to dew point but for ice. If the actual vapor pressure is equal to or greater than the saturation vapor pressure over ice at that temperature, condensation/deposition will occur).

---

### 9. Answers to Practice Questions

1.  **Calculation for 15°C:**
    $e_s(15) = 0.611 \times \exp\left(\frac{17.27 \times 15}{15 + 237.3}\right)$
    $e_s(15) = 0.611 \times \exp\left(\frac{259.05}{252.3}\right)$
    $e_s(15) = 0.611 \times \exp(1.0267)$
    $e_s(15) = 0.611 \times 2.7918$
    $e_s(15) \approx 1.706$ kPa

2.  **For T = 28°C, e = 2.0 kPa:**
    a) **Saturation Vapor Pressure at 28°C:**
    $e_s(28) = 0.611 \times \exp\left(\frac{17.27 \times 28}{28 + 237.3}\right)$
    $e_s(28) = 0.611 \times \exp\left(\frac{483.56}{265.3}\right)$
    $e_s(28) = 0.611 \times \exp(1.8227)$
    $e_s(28) = 0.611 \times 6.1875$
    $e_s(28) \approx 3.781$ kPa

    b) **Saturation Check:**
    Since $e$ (2.0 kPa) < $e_s$ (3.781 kPa), the air is **not saturated**.

    c) **Relative Humidity:**
    $RH = \left(\frac{2.0 \text{ kPa}}{3.781 \text{ kPa}}\right) \times 100\%$
    $RH \approx 0.5289 \times 100\%$
    $RH \approx 52.9\%$

3.  **Explanation for Increasing Saturation Vapor Pressure:**
    As temperature increases, water molecules gain more kinetic energy. This increased energy allows more molecules in the liquid phase to escape into the gaseous phase (evaporation). It also increases the likelihood of gas molecules condensing back into the liquid. Saturation is an equilibrium state where the rate of evaporation equals the rate of condensation. At higher temperatures, a greater concentration of water vapor (higher vapor pressure) is needed to achieve this equilibrium, meaning more molecules are in the air at any given time before condensation balances evaporation.

4.  **Comparison at 5°C and 35°C:**
    *   **At 5°C:**
        $e_s(5) = 0.611 \times \exp\left(\frac{17.27 \times 5}{5 + 237.3}\right) = 0.611 \times \exp\left(\frac{86.35}{242.3}\right) = 0.611 \times \exp(0.3564) \approx 0.611 \times 1.428 \approx 0.873$ kPa
    *   **At 35°C:**
        $e_s(35) = 0.611 \times \exp\left(\frac{17.27 \times 35}{35 + 237.3}\right) = 0.611 \times \exp\left(\frac{604.45}{272.3}\right) = 0.611 \times \exp(2.2198) \approx 0.611 \times 9.199 \approx 5.621$ kPa

    *   **Difference:** $5.621 \text{ kPa} - 0.873 \text{ kPa} = 4.748$ kPa.
    *   **Implication:** This significant difference (nearly 6.5 times more moisture capacity at 35°C compared to 5°C) highlights how much more water vapor the atmosphere can hold at higher temperatures, directly impacting potential evaporation and the atmosphere's ability to hold moisture for cloud formation.

5.  **Frost Scenario (T = -2°C, e = 0.3 kPa):**
    *   a) **Saturation Vapor Pressure at -2°C (approximated over ice):**
        Using the same formula as an approximation:
        $e_s(-2) = 0.611 \times \exp\left(\frac{17.27 \times (-2)}{-2 + 237.3}\right)$
        $e_s(-2) = 0.611 \times \exp\left(\frac{-34.54}{235.3}\right)$
        $e_s(-2) = 0.611 \times \exp(-0.1468)$
        $e_s(-2) = 0.611 \times 0.8634$
        $e_s(-2) \approx 0.528$ kPa (This is the approximate saturation vapor pressure over ice at -2°C).

    *   b) **Frost Likelihood:**
        Actual vapor pressure ($e$) = 0.3 kPa
        Saturation vapor pressure over ice ($e_s$) at -2°C $\approx 0.528$ kPa

        Since $e$ (0.3 kPa) < $e_s$ (0.528 kPa), the air is **not saturated** with respect to ice. Therefore, frost is **not likely** to form *if these conditions persist*. The air needs to reach or exceed the saturation vapor pressure (over ice) for deposition (frost) to occur. If the actual vapor pressure were, for example, 0.55 kPa, then frost would be very likely.
