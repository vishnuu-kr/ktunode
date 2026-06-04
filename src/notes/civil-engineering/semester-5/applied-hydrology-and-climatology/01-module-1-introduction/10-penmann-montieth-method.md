---
title: "Penmann-Montieth method"
subject: "APPLIED HYDROLOGY AND CLIMATOLOGY"
module: "Module 1: Introduction "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810efe"
status: "completed"
scrapedAt: "2026-05-20T18:47:26.980Z"
---
# APPLIED HYDROLOGY AND CLIMATOLOGY - Module 1: Introduction

## Topic: Penman-Montieth Method

This module introduces fundamental concepts in hydrology and climatology. The Penman-Montieth (PM) equation is a cornerstone in understanding and calculating **evapotranspiration (ET)**, a crucial process linking water and energy cycles.

---

### **1. Understanding Evapotranspiration (ET)**

*   **Definition:** Evapotranspiration (ET) is the combined process of water loss from the Earth's surface to the atmosphere. It comprises two main components:
    *   **Evaporation:** The direct conversion of liquid water to water vapor from surfaces like soil, water bodies (lakes, rivers), and wet vegetation.
    *   **Transpiration:** The release of water vapor from plants into the atmosphere, primarily through stomata in their leaves.

*   **Significance of ET:**
    *   **Water Balance:** ET is a major component of the hydrological cycle and significantly impacts water availability in catchments.
    *   **Crop Yield:** For agriculture, understanding and predicting ET is vital for irrigation scheduling and maximizing crop production.
    *   **Climate Studies:** ET influences atmospheric moisture, cloud formation, and temperature.
    *   **Ecosystem Health:** ET is critical for plant growth and the functioning of ecosystems.

---

### **2. The Need for a Comprehensive ET Model**

*   **Limitations of Simpler Methods:** Earlier methods for estimating ET often relied on single factors (e.g., temperature, pan evaporation) which were insufficient to capture the complex interactions involved.
*   **Key Drivers of ET:** ET is influenced by a combination of factors:
    *   **Energy Availability:** Solar radiation provides the energy for phase change (liquid to vapor).
    *   **Vapor Pressure Gradient:** The difference in water vapor concentration between the evaporating surface and the surrounding air drives the diffusion of water vapor.
    *   **Wind Speed:** Wind removes moist air from the evaporating surface, maintaining a steeper vapor pressure gradient.
    *   **Aerodynamic Resistance:** The resistance to vapor movement from the surface to the atmosphere, influenced by surface roughness and wind.
    *   **Surface Resistance:** The resistance to water movement from within the soil or plant to the evaporating surface, particularly important for transpiration through stomata.

---

### **3. The Penman-Montieth (PM) Equation: A Unified Approach**

The Penman-Montieth equation, developed by Howard Penman and later modified by John Montieth, is a physically-based model that integrates both **energy balance** and **aerodynamic** principles to estimate ET. It is considered the **"gold standard"** for calculating **reference evapotranspiration (ETo)**.

*   **Concept:** The PM equation considers the energy available for evaporation and the rate at which water vapor can be transported away from the evaporating surface. It balances the energy required for evaporation with the atmospheric demand for moisture.

*   **The Penman-Montieth Equation (General Form):**

    $$ET_0 = \frac{\Delta (R_n - G) + \rho_a c_p \frac{(e_s - e_a)}{\lambda r_a}}{\Delta + \gamma (1 + \frac{r_s}{r_a})}$$

    Where:
    *   $ET_0$: Reference evapotranspiration (mm/day or mm/hour)
    *   $\Delta$: Slope of the saturation vapor pressure curve at the mean air temperature ($kPa/^\circ C$)
    *   $R_n$: Net radiation at the surface ($MJ/m^2/day$ or $MJ/m^2/hour$)
    *   $G$: Soil heat flux density ($MJ/m^2/day$ or $MJ/m^2/hour$) - often negligible for daily calculations.
    *   $\rho_a$: Mean air density at the surface ($kg/m^3$)
    *   $c_p$: Specific heat of air at constant pressure ($MJ/kg/^\circ C$)
    *   $e_s$: Saturation vapor pressure at the mean air temperature ($kPa$)
    *   $e_a$: Actual vapor pressure of the air ($kPa$)
    *   $(e_s - e_a)$: Saturation vapor pressure deficit (VPD) of the air ($kPa$)
    *   $\lambda$: Latent heat of vaporization ($MJ/kg$)
    *   $r_a$: Aerodynamic resistance ($s/m$)
    *   $\gamma$: Psychrometric constant ($kPa/^\circ C$)
    *   $r_s$: Surface resistance ($s/m$) - specific to the vegetation.

*   **Reference Evapotranspiration (ETo):**
    *   **Definition:** ETo is the ET rate from a hypothetical reference crop with a specified height (0.12 m), a surface resistance of 70 $s/m$, and a albedo of 0.23, closely approximating an open water surface or a well-watered, short grass surface.
    *   **Why ETo?** ETo provides a standardized basis for comparing ET rates under different climatic conditions and for different crops. Actual ET ($ET_c$) for a specific crop is then calculated by multiplying ETo by a crop coefficient ($K_c$).
        *   $ET_c = K_c \times ETo$

---

### **4. Key Components of the Penman-Montieth Equation and Their Calculation**

Understanding how to calculate each variable is crucial for applying the PM equation.

#### **4.1. Radiation Components**

*   **Net Radiation ($R_n$):** The balance between incoming and outgoing radiation.
    *   $R_n = R_{ns} - R_{nl}$
    *   $R_{ns}$: Net shortwave radiation (incoming solar radiation minus reflected solar radiation).
        *   $R_{ns} = (1 - \alpha) R_s$
        *   $\alpha$: Albedo (reflectivity of the surface). Varies with surface type.
        *   $R_s$: Incoming solar radiation (measured or estimated).
    *   $R_{nl}$: Net longwave radiation (incoming atmospheric radiation minus outgoing surface radiation). Depends on air temperature, humidity, and cloud cover.
        *   *Simplified calculation often involves empirical relationships based on air temperature and vapor pressure.*

#### **4.2. Aerodynamic Components**

*   **Saturation Vapor Pressure ($e_s$):** The maximum amount of water vapor the air can hold at a given temperature. Calculated using empirical formulas like the August-Roche-Magnus formula.
    *   Example Formula: $e_s(T) = 0.6108 \exp\left(\frac{17.27T}{T+237.3}\right)$ where T is temperature in $^\circ C$ and $e_s$ is in $kPa$.

*   **Actual Vapor Pressure ($e_a$):** The amount of water vapor currently in the air. Calculated from relative humidity (RH) and saturation vapor pressure:
    *   $e_a = \frac{RH}{100} \times e_s(T)$

*   **Saturation Vapor Pressure Deficit (VPD) ($e_s - e_a$):** The difference between the saturation vapor pressure and the actual vapor pressure. This is a key driver of ET, representing the "drying power" of the air.

*   **Aerodynamic Resistance ($r_a$):** Represents the resistance to vapor transfer from the surface to the reference height (typically 2 m). It is primarily influenced by wind speed and surface roughness.
    *   For a reference crop (grass): $r_a = \frac{204}{u_2}$ ($s/m$) where $u_2$ is wind speed at 2 m height ($m/s$).

#### **4.3. Thermometric Components**

*   **Slope of Saturation Vapor Pressure Curve ($\Delta$):** The rate of change of saturation vapor pressure with respect to temperature. Calculated from the derivative of the $e_s$ formula.
    *   Example Formula: $\Delta = \frac{4098 \times e_s}{(T+237.3)^2}$ ($kPa/^\circ C$)

*   **Psychrometric Constant ($\gamma$):** Relates atmospheric pressure to the latent heat of vaporization and the specific heat of air.
    *   $\gamma = \frac{c_p P}{\lambda \epsilon}$ where $P$ is atmospheric pressure and $\epsilon$ is the ratio of molecular weights of water vapor to dry air.
    *   $\gamma \approx 0.0665 \times (1 + 0.001 \times T_{avg})$ ($kPa/^\circ C$) where $T_{avg}$ is average air temperature. It can also be approximated as a constant value (e.g., 0.067 $kPa/^\circ C$ at sea level).

#### **4.4. Surface Components**

*   **Surface Resistance ($r_s$):** Represents the resistance to water vapor movement from within the plant and soil to the evaporating surface.
    *   **For Reference Crop:** $r_s = 70$ $s/m$ (for the defined ETo).
    *   **For Actual Crops:** $r_s$ varies significantly based on crop type, growth stage, soil moisture, and environmental conditions (e.g., stomatal closure due to water stress). This is a key factor differentiating ETo from actual ETc.

#### **4.5. Other Parameters**

*   **Soil Heat Flux ($G$):** Energy used for heating the soil. Usually small for daily ET calculations, hence often ignored. For hourly calculations, it can be significant.

*   **Latent Heat of Vaporization ($\lambda$):** Energy required to convert water from liquid to vapor. Varies slightly with temperature but is often taken as a constant (e.g., 2.45 $MJ/kg$ at $20^\circ C$).

*   **Air Density ($\rho_a$) and Specific Heat of Air ($c_p$):** Can be calculated from air temperature and pressure, or approximated with standard values.

---

### **5. Applying the Penman-Montieth Equation for ETo**

The FAO (Food and Agriculture Organization of the United Nations) has published a refined version of the PM equation tailored for ETo estimation, often referred to as the **FAO-56 PM Method**. This version simplifies some calculations and provides standard values for parameters like albedo and surface resistance for the reference crop.

**FAO-56 PM Equation (for daily ET):**

$$ETo = \frac{0.409 \Delta (R_n - G) + \gamma \frac{900}{T + 273} u_2 (e_s - e_a)}{\Delta + \gamma (1 + 0.34 u_2)}$$

Where:
*   $ETo$ is in $mm/day$.
*   $R_n$ is in $MJ/m^2/day$.
*   $G$ is in $MJ/m^2/day$.
*   $T$ is mean daily air temperature at 2 m height ($^\circ C$).
*   $u_2$ is mean daily wind speed at 2 m height ($m/s$).
*   $e_s - e_a$ is the mean daily saturation vapor pressure deficit ($kPa$).
*   $\Delta$ is the saturation vapor pressure curve slope ($kPa/^\circ C$).
*   $\gamma$ is the psychrometric constant ($kPa/^\circ C$).

**Important Notes for FAO-56 PM:**
*   $R_n$ is calculated based on incoming and outgoing shortwave and longwave radiation, often using empirical relationships with sunshine hours or cloud cover.
*   $G$ is assumed to be zero for daily calculations.
*   $u_2$ is the wind speed at 2m, and if measured at a different height, it needs to be adjusted.
*   $e_s$ and $e_a$ are calculated based on daily mean, maximum, and minimum temperatures.

---

### **6. Advantages and Limitations of the Penman-Montieth Method**

#### **6.1. Advantages**

*   **Physically Based:** Incorporates fundamental physical principles of energy and mass transfer.
*   **Accurate:** Widely considered the most accurate method for estimating ETo, especially when detailed meteorological data is available.
*   **Versatile:** Applicable to various climatic conditions.
*   **Standardized:** The FAO-56 version provides a consistent framework for ETo calculation.

#### **6.2. Limitations**

*   **Data Requirements:** Requires a comprehensive set of meteorological data (radiation, temperature, humidity, wind speed), which may not always be readily available.
*   **Complexity:** The calculations can be complex, requiring specialized software or tools.
*   **Assumptions:** The reference crop assumptions might not perfectly represent all agricultural or natural surfaces.
*   **Surface Resistance:** Accurate estimation of surface resistance ($r_s$) for actual ETc calculation can be challenging.

---

### **7. Practice Questions and Exercises**

**Question 1:** Define evapotranspiration and explain its two main components.

**Question 2:** Why is the Penman-Montieth method considered a significant advancement in ET estimation compared to simpler methods?

**Question 3:** List the key meteorological variables required for the Penman-Montieth equation.

**Question 4:** What is "reference evapotranspiration" (ETo), and how is it used to estimate actual crop evapotranspiration ($ET_c$)?

**Question 5:** Briefly explain the role of:
    a) Net radiation ($R_n$)
    b) Saturation vapor pressure deficit ($e_s - e_a$)
    c) Aerodynamic resistance ($r_a$)
    in the Penman-Montieth equation.

**Question 6:** What are the main advantages and limitations of the Penman-Montieth method?

---

### **Answers to Practice Questions**

**Answer 1:**
Evapotranspiration (ET) is the combined process of water loss from the Earth's surface to the atmosphere. Its two main components are:
*   **Evaporation:** Direct conversion of liquid water to water vapor from surfaces like soil and water bodies.
*   **Transpiration:** Release of water vapor from plants through their stomata.

**Answer 2:**
The Penman-Montieth method is a significant advancement because it is physically based, integrating both energy balance and aerodynamic principles. This allows it to account for the interplay of factors like radiation, temperature, humidity, and wind, leading to a more accurate estimation of ET compared to simpler methods that rely on fewer variables.

**Answer 3:**
The key meteorological variables required for the Penman-Montieth equation are:
*   Solar radiation (or sunshine hours/cloudiness)
*   Air temperature (mean, maximum, minimum)
*   Relative humidity (or dew point temperature)
*   Wind speed

**Answer 4:**
Reference evapotranspiration (ETo) is the ET rate from a hypothetical reference crop with specific characteristics (e.g., well-watered, short grass). It serves as a standardized benchmark. Actual crop evapotranspiration ($ET_c$) is estimated by multiplying ETo by a crop coefficient ($K_c$) specific to the crop and its growth stage: $ET_c = K_c \times ETo$.

**Answer 5:**
    a) **Net radiation ($R_n$):** Provides the energy input required for the phase change of water from liquid to vapor. It's the balance between incoming solar radiation and outgoing longwave radiation.
    b) **Saturation vapor pressure deficit ($e_s - e_a$):** Represents the "drying power" of the air. A larger deficit means the air can hold more moisture, driving a higher rate of ET.
    c) **Aerodynamic resistance ($r_a$):** Represents the resistance to the movement of water vapor from the evaporating surface into the atmosphere. It is influenced by wind speed and surface roughness; higher wind speeds reduce $r_a$, facilitating greater ET.

**Answer 6:**
**Advantages:**
*   Physically sound and accurate.
*   Accounts for multiple influencing factors.
*   Provides a standardized measure (ETo).

**Limitations:**
*   High data requirements.
*   Can be computationally complex.
*   Surface resistance for actual ET calculation can be difficult to determine.

---

### **Important Points to Remember**

*   **ET is a critical hydrological variable.**
*   **The Penman-Montieth equation is the FAO standard for ETo.**
*   **ETo is a reference, actual ET requires crop coefficients ($K_c$).**
*   **Key drivers of ET are energy availability and atmospheric demand.**
*   **Accurate meteorological data is essential for applying the PM equation.**
*   **The FAO-56 PM method provides a practical framework for ETo estimation.**
