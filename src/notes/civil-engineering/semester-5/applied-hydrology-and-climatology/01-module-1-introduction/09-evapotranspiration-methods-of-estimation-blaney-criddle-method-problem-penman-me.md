---
title: "Evapotranspiration - methods of estimation-Blaney Criddle method (problem)- penman method"
subject: "APPLIED HYDROLOGY AND CLIMATOLOGY"
module: "Module 1: Introduction "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810efd"
status: "completed"
scrapedAt: "2026-05-20T18:47:26.289Z"
---
# Applied Hydrology and Climatology - Module 1: Introduction

## Topic: Evapotranspiration - Methods of Estimation

### 1. Introduction to Evapotranspiration (ET)

Evapotranspiration (ET) is a fundamental process in the water cycle, representing the total amount of water transferred from the land surface to the atmosphere. It's the sum of two distinct processes:

*   **Evaporation:** The process by which liquid water changes into water vapor and rises into the atmosphere. This occurs from soil surfaces, free water bodies (lakes, rivers), and wet vegetation surfaces.
*   **Transpiration:** The process by which water is absorbed by plant roots, moves up through the plant, and is released as water vapor into the atmosphere through small pores in the leaves called stomata.

**Key Concepts:**

*   **Potential Evapotranspiration (PET):** The maximum amount of water that could be evaporated and transpired from a well-watered, uniformly vegetated surface under prevailing atmospheric conditions. It's a measure of the atmospheric demand for ET.
*   **Actual Evapotranspiration (AET):** The amount of water that is actually evaporated and transpired from a surface. AET is often less than PET when water is not readily available (e.g., during drought or when soil moisture is depleted).
*   **Reference Evapotranspiration (ET₀):** The evapotranspiration rate from a standardized reference surface, typically a well-maintained grass vegetation with an assumed crop height, albedo, and soil resistance. This provides a baseline for comparison and is often used as an input for crop-specific ET calculations.

**Importance of ET Estimation:**

Accurate estimation of ET is crucial for various hydrological applications, including:

*   **Water resource management:** Planning for irrigation, reservoir operations, and water allocation.
*   **Agricultural planning:** Determining crop water requirements and irrigation scheduling.
*   **Drought monitoring and prediction:** Assessing water availability and the impact of dry periods.
*   **Hydrological modeling:** Simulating water balance and predicting streamflow.
*   **Climate studies:** Understanding the role of ET in energy and water exchange between the land and atmosphere.

### 2. Methods of Evapotranspiration Estimation

There are various methods to estimate ET, broadly categorized into:

*   **Empirical Methods:** Based on statistical relationships with readily available meteorological data (temperature, precipitation, sunshine, wind). These are generally simpler but less physically robust.
*   **Physical Methods (or Process-Based Methods):** Based on fundamental physical principles governing evaporation and transpiration, often requiring more complex input data.
*   **Direct Measurement Methods:** Involve instruments that directly measure ET (e.g., lysimeters, eddy covariance towers). These are accurate but often expensive and localized.

In this module, we focus on two commonly used empirical methods:

#### 2.1 Blaney-Criddle Method

The Blaney-Criddle method is an empirical approach that relates ET to temperature and daylight hours. It's relatively simple and requires minimal input data, making it suitable for regions with limited meteorological information.

**Underlying Principle:** The method assumes that ET is primarily influenced by temperature (which reflects atmospheric energy availability) and the length of daylight hours (which determines the potential duration of solar radiation influence).

**The Blaney-Criddle Equation (General Form):**

$ETP = p \cdot (0.46 \cdot T + 8.13)$

Where:

*   $ETP$: Potential evapotranspiration (mm/day)
*   $p$: The mean daily percentage of annual daylight hours for a given month and latitude.
*   $T$: Mean daily air temperature (°C)

**Calculation of 'p':**

The value of 'p' is dependent on latitude and the time of year (month). It's typically obtained from tables or calculated using formulas.

**Monthly Calculation:**

For monthly estimations, the equation is often expressed as:

$ETP_m = c \cdot f$

Where:

*   $ETP_m$: Monthly potential evapotranspiration (mm/month)
*   $c$: A crop-specific coefficient (often assumed to be 1 for general PET or adjusted based on crop type).
*   $f$: A monthly consumptive-use factor, calculated as $f = p \cdot T_{mean}$

    *   $p$: Monthly percentage of annual daylight hours.
    *   $T_{mean}$: Mean monthly air temperature (°C)

**Example Problem: Blaney-Criddle Method**

**Problem:** Estimate the monthly potential evapotranspiration (PET) for a location at 30° North latitude during July. The mean monthly temperature for July is 25°C. Assume a crop coefficient ($c$) of 1.0 for a reference crop.

**Solution:**

1.  **Determine the mean monthly percentage of annual daylight hours ('p') for July at 30°N latitude.**
    *   *Note:* This value needs to be looked up from tables or calculated. For July at 30°N, the approximate percentage of daylight hours is around 10.5%. (This is a critical step that requires reference data.)
    *   Let's assume $p = 10.5\%$ or $0.105$.

2.  **Calculate the monthly consumptive-use factor ('f').**
    *   $f = p \cdot T_{mean}$
    *   $f = 0.105 \cdot 25$
    *   $f = 2.625$

3.  **Calculate the monthly potential evapotranspiration (PET).**
    *   $ETP_m = c \cdot f$
    *   $ETP_m = 1.0 \cdot 2.625$
    *   $ETP_m = 2.625$ (This unit depends on the factor 'c' and how 'p' is defined. If 'p' is a fraction and T is in Celsius, this value needs to be scaled to mm/month using the original Blaney-Criddle formula's constants, or by using a simplified monthly form where 'f' directly relates to mm/month if the constants are implicitly included).

    *   **Revisiting the original form for monthly estimation for better clarity:**
        The original Blaney-Criddle formula is often presented as:
        $ETP = \frac{P}{100} (0.44 T + 8.17)$
        Where $ETP$ is in inches for the month, $P$ is the monthly percentage of daytime hours, and $T$ is the mean monthly temperature in Fahrenheit.

        Let's convert to metric and use the more common monthly form:
        $ETP_m = c \times K_t \times (0.0173 \times P \times T_{mean} - 0.174)$  (This is one variation, constants can differ slightly based on source and calibration).

        A simpler and more common formulation for monthly PET (in mm) is often derived:
        $ETP_m = K_c \times [a + b T_{mean}]$
        where $K_c$ is the crop coefficient and $(a + b T_{mean})$ represents the monthly ET based on temperature and daylight hours.

        Let's use a more standard Blaney-Criddle monthly formula directly in mm:
        **$ETP_m = K_c \times [0.46 \times T_{mean} + 8.13] \times \frac{P}{100}$**

        Where:
        *   $ETP_m$ = Monthly potential evapotranspiration (mm)
        *   $K_c$ = Crop coefficient (dimensionless, assume 1.0 for this example, representing a reference crop)
        *   $T_{mean}$ = Mean monthly temperature (°C)
        *   $P$ = Percentage of annual daylight hours for the month (obtained from tables/formulas)

        **Recalculating with the direct monthly formula:**

        1.  **Assume $P$ for July at 30°N is 10.5% (or 0.105 as a fraction in the formula).**
        2.  **$T_{mean}$ = 25°C**
        3.  **$K_c = 1.0$**

        $ETP_m = 1.0 \times [0.46 \times 25 + 8.13] \times \frac{10.5}{100}$
        $ETP_m = [11.5 + 8.13] \times 0.105$
        $ETP_m = 19.63 \times 0.105$
        $ETP_m \approx 2.061$ mm/day (if the formula yields daily, and then multiplied by days in month, or if the formula is directly for monthly total based on average daily values).

        **Crucially, the Blaney-Criddle method's original formulation is often a daily one that's summed over the month. Let's clarify the unit and application:**

        The core Blaney-Criddle equation: $ET = p (0.46 T + 8.13)$
        Where $ET$ is in **mm/day**.

        So, for the month of July (31 days):
        Mean daily PET = $0.105 \times (0.46 \times 25 + 8.13)$
        Mean daily PET = $0.105 \times (11.5 + 8.13)$
        Mean daily PET = $0.105 \times 19.63$
        Mean daily PET $\approx 2.061$ mm/day

        Monthly PET = Mean daily PET $\times$ Number of days in the month
        Monthly PET = $2.061$ mm/day $\times$ 31 days
        Monthly PET $\approx 63.89$ mm

        **Therefore, the estimated monthly potential evapotranspiration for July is approximately 63.89 mm.**

**Limitations of the Blaney-Criddle Method:**

*   **Relies heavily on temperature:** Doesn't explicitly account for other significant factors like humidity, wind speed, and solar radiation.
*   **Empirical nature:** Accuracy is limited by the region and conditions for which it was developed and calibrated.
*   **Daylight hour estimation:** The 'p' factor can be difficult to determine accurately without precise tables or algorithms.
*   **Assumes uniform conditions:** Doesn't account for variations in crop cover or soil moisture status.

**Important Points to Remember (Blaney-Criddle):**

*   It's a temperature-based empirical method.
*   Requires mean daily/monthly temperature and daylight hour percentages.
*   Simpler to use but less accurate than physically based methods.
*   Accuracy is sensitive to the 'p' factor and the calibration region.

#### 2.2 Penman Method (and Penman-Monteith)

The Penman method (and its more widely used refinement, the Penman-Monteith method) is a physically based approach that combines energy balance and aerodynamic principles to estimate ET. It's considered one of the most accurate methods for estimating PET when sufficient meteorological data are available.

**Underlying Principles:**

*   **Energy Balance:** Evapotranspiration is an energy-consuming process. The energy available for ET is influenced by net radiation, ground heat flux, and air temperature.
*   **Aerodynamic Transport:** Water vapor needs to be removed from the evaporating surface into the atmosphere. This process is influenced by wind speed and the vapor pressure deficit of the air.

**Penman Equation (Simplified):**

The original Penman equation integrates these two components:

$ET_0 = \frac{\Delta (R_n - G) + \gamma E_a}{\Delta + \gamma}$

Where:

*   $ET_0$: Reference evapotranspiration (mm/day)
*   $\Delta$: Slope of the saturation vapor pressure curve at the mean air temperature (°C) (kPa/°C)
*   $R_n$: Net radiation at the surface (MJ/m²/day)
*   $G$: Soil heat flux density (MJ/m²/day)
*   $\gamma$: Psychrometric constant (kPa/°C)
*   $E_a$: Saturation deficit of the air, related to evaporation from a free water surface (MJ/m²/day)

**Key Components to Calculate:**

*   **Net Radiation ($R_n$):** This is the balance between incoming and outgoing radiation. It's calculated from:
    *   Solar radiation (incoming shortwave)
    *   Albedo (reflectivity of the surface)
    *   Longwave radiation (incoming and outgoing)
*   **Saturation Vapor Pressure ($e_s$):** The maximum amount of water vapor the air can hold at a given temperature.
*   **Actual Vapor Pressure ($e_a$):** The actual amount of water vapor in the air, often derived from relative humidity or dew point temperature.
*   **Vapor Pressure Deficit (VPD):** $VPD = e_s - e_a$. This drives the evaporation process.
*   **Aerodynamic Term ($E_a$):** This term represents the evaporation from a free water surface and is a function of wind speed and VPD.
*   **Latent Heat of Vaporization ($\lambda$):** The energy required to convert water into vapor.

**Penman-Monteith Equation:**

The Penman-Monteith equation is a further refinement that accounts for the resistance to vapor movement from within the plant (stomata) and the aerodynamic resistance. It is the FAO (Food and Agriculture Organization of the United Nations) recommended method for calculating reference evapotranspiration (ET₀).

$ET_0 = \frac{0.408 \Delta (R_n - G) + \gamma \frac{900}{T + 273} u_2 (e_s - e_a)}{\Delta + \gamma (1 + 0.34 u_2)}$

Where:

*   $ET_0$: Reference evapotranspiration (mm/day)
*   $\Delta$: Slope of the saturation vapor pressure curve (°C)
*   $R_n$: Net radiation at the crop surface (MJ/m²/day)
*   $G$: Soil heat flux density (MJ/m²/day) - often assumed to be zero for daily calculations.
*   $\gamma$: Psychrometric constant (kPa/°C)
*   $T$: Mean daily air temperature at 2 m height (°C)
*   $u_2$: Wind speed at 2 m height (m/s)
*   $e_s$: Saturation vapor pressure (kPa)
*   $e_a$: Actual vapor pressure (kPa)
*   $(e_s - e_a)$: Saturation vapor pressure deficit (kPa)
*   $0.408$: Conversion factor from MJ/m²/day to mm/day (using $\lambda$)

**Input Data for Penman-Monteith:**

*   Mean daily air temperature (°C)
*   Maximum and minimum air temperature (°C) (to calculate $e_s$)
*   Wind speed at 2 m height (m/s)
*   Relative humidity (%) or dew point temperature (°C) (to calculate $e_a$)
*   Solar radiation (MJ/m²/day) or sunshine hours (to estimate $R_n$)

**Example Problem: Penman-Monteith (Conceptual)**

**Problem:** Given the following data for a specific day, calculate the reference evapotranspiration ($ET_0$) using the Penman-Monteith equation.

**Data:**

*   Mean daily air temperature ($T$): 25°C
*   Wind speed at 2 m ($u_2$): 2 m/s
*   Saturation vapor pressure ($e_s$): 3.169 kPa (corresponding to 25°C)
*   Actual vapor pressure ($e_a$): 1.5 kPa (e.g., from relative humidity of 47.6%)
*   Net radiation ($R_n$): 15 MJ/m²/day
*   Soil heat flux ($G$): 0 MJ/m²/day

**Steps to Solve (Conceptual - full calculation requires sub-calculations for $\Delta$ and $\gamma$):**

1.  **Calculate the slope of the saturation vapor pressure curve ($\Delta$).** This is a function of temperature and requires a specific formula or lookup table.
2.  **Calculate the psychrometric constant ($\gamma$).** This is also a function of atmospheric pressure and temperature.
3.  **Calculate the saturation vapor pressure deficit ($e_s - e_a$).**
4.  **Plug all the calculated values and given data into the Penman-Monteith equation.**

**Let's calculate the components needed for the equation:**

*   **Assume $\Delta \approx 0.0835$ kPa/°C** (This is a value for $T = 25^\circ$C, precise calculation needed)
*   **Assume $\gamma \approx 0.067$ kPa/°C** (This is a standard value at sea level, and for typical atmospheric pressures)

**Now, let's plug into the Penman-Monteith equation:**

$ET_0 = \frac{0.408 \times 0.0835 \times (15 - 0) + 0.067 \times \frac{900}{25 + 273} \times 2 \times (3.169 - 1.5)}{0.0835 + 0.067 \times (1 + 0.34 \times 2)}$

$ET_0 = \frac{0.408 \times 0.0835 \times 15 + 0.067 \times \frac{900}{298} \times 2 \times 1.669}{0.0835 + 0.067 \times (1 + 0.68)}$

$ET_0 = \frac{0.510 + 0.067 \times 3.02 \times 2 \times 1.669}{0.0835 + 0.067 \times 1.68}$

$ET_0 = \frac{0.510 + 0.673}{0.0835 + 0.11376}$

$ET_0 = \frac{1.183}{0.19726}$

$ET_0 \approx 6.00$ mm/day

**Therefore, the estimated reference evapotranspiration ($ET_0$) for the day is approximately 6.00 mm.**

**Limitations of the Penman Method/Penman-Monteith:**

*   **Data requirements:** Requires a comprehensive set of meteorological data, which may not be available in all regions.
*   **Complexity:** The calculations are more involved and require accurate estimation of various parameters.
*   **Assumptions:** While physically based, it still involves some assumptions regarding surface properties and atmospheric conditions.
*   **Reference vs. Actual ET:** Penman-Monteith calculates $ET_0$. To get actual ET for a specific crop (ETc), a crop coefficient ($K_c$) must be applied: $ET_c = K_c \times ET_0$.

**Important Points to Remember (Penman/Penman-Monteith):**

*   Physically based method combining energy balance and aerodynamic principles.
*   Penman-Monteith is the FAO-recommended method for $ET_0$.
*   Requires detailed meteorological data (temperature, wind, humidity, radiation).
*   More accurate than empirical methods when data is available.
*   $ET_0$ needs to be adjusted with crop coefficients ($K_c$) to get actual crop evapotranspiration ($ET_c$).

### 3. Practice Questions

**Question 1 (Blaney-Criddle):**

Estimate the potential evapotranspiration (PET) in mm/day for a location at 40° North latitude during August, given:
*   Mean monthly temperature = 28°C
*   The percentage of annual daylight hours for August at 40°N is approximately 9.5%.
*   Assume the crop coefficient ($K_c$) is 1.2 for a specific crop.

**(Use the formula: $ETP = K_c \times [0.46 \times T_{mean} + 8.13] \times \frac{P}{100}$ for monthly calculation and then divide by days in month if needed to get daily, or if the formula is inherently daily, use it directly.)**

**Answer 1:**

1.  **$T_{mean}$ = 28°C**
2.  **$P$ = 9.5% = 0.095**
3.  **$K_c = 1.2$**

Using the formula for monthly PET:
$ETP_m = 1.2 \times [0.46 \times 28 + 8.13] \times \frac{9.5}{100}$
$ETP_m = 1.2 \times [12.88 + 8.13] \times 0.095$
$ETP_m = 1.2 \times 21.01 \times 0.095$
$ETP_m = 2.395$ (This result implicitly contains information for the month).

To get daily PET, we need to know how this formula is structured. If the formula is designed to give a monthly total from monthly averages:
Let's assume the core Blaney-Criddle equation is meant to yield daily PET.
Mean daily PET (reference) = $[0.46 \times 28 + 8.13] \times 0.095$
Mean daily PET (reference) = $21.01 \times 0.095 \approx 1.996$ mm/day.

Now apply the crop coefficient:
Actual Crop ET ($ET_c$) = $K_c \times$ Mean daily PET (reference)
$ET_c = 1.2 \times 1.996$
$ET_c \approx 2.395$ mm/day.

**So, the estimated daily ET for the crop is approximately 2.395 mm/day.**

**Question 2 (Penman-Monteith - Conceptual):**

Which of the following factors *least* directly influences the Penman-Monteith method for estimating reference evapotranspiration ($ET_0$)?

a) Air temperature
b) Wind speed
c) Solar radiation
d) Soil moisture content

**Answer 2:**

The correct answer is **d) Soil moisture content**.

*   **Explanation:** The Penman-Monteith method, when calculating $ET_0$, estimates the evapotranspiration from a hypothetical reference surface (like grass) that is assumed to be well-watered. Therefore, soil moisture content is not a direct input into the $ET_0$ calculation itself. While soil moisture is critical for determining *actual* ET (AET), $ET_0$ represents the atmospheric demand, which is driven by atmospheric factors (temperature, wind, radiation, humidity). Soil moisture content becomes a limiting factor when calculating AET from $ET_0$ ($AET = K_c \times ET_0 \times K_s$, where $K_s$ is a soil moisture stress coefficient).

**Question 3 (Conceptual):**

The Blaney-Criddle method is generally considered:

a) A physically based method requiring detailed atmospheric data.
b) An empirical method primarily relying on temperature and daylight hours.
c) A direct measurement technique using lysimeters.
d) A method that accounts for aerodynamic and energy balance principles explicitly.

**Answer 3:**

The correct answer is **b) An empirical method primarily relying on temperature and daylight hours.**

### 4. Summary and Key Takeaways

*   **Evapotranspiration (ET)** is the combined process of evaporation and transpiration.
*   **PET** is the maximum possible ET, while **AET** is the actual amount. **ET₀** is a standardized reference ET.
*   **Blaney-Criddle** is an **empirical** method, simple, using temperature and daylight hours, suitable for data-scarce regions but less accurate.
*   **Penman** and **Penman-Monteith** are **physically based** methods, more complex, requiring extensive meteorological data, and are considered more accurate for estimating ET₀.
*   The Penman-Monteith method is the FAO's recommended standard for $ET_0$.
*   Actual crop evapotranspiration ($ET_c$) is often calculated as $ET_c = K_c \times ET_0$ (or $ET_c = K_c \times K_s \times ET_0$ when water is limited), where $K_c$ is the crop coefficient and $K_s$ is the soil water stress coefficient.
*   Understanding ET estimation methods is crucial for water resource management, agriculture, and hydrological modeling.

This concludes Module 1's introduction to Evapotranspiration methods. Continue to practice applying these methods and understanding their underlying principles and limitations.
