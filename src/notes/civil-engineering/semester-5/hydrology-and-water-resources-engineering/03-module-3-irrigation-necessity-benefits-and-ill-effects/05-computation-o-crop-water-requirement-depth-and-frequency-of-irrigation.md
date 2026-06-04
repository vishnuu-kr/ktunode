---
title: "Computation o crop water requirement: depth and frequency of Irrigation"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 3: Irrigation– Necessity, Benefits and ill effects"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d96"
status: "completed"
scrapedAt: "2026-05-20T18:49:20.750Z"
---
# Hydrology and Water Resources Engineering - Module 3: Irrigation

## Topic: Computation of Crop Water Requirement: Depth and Frequency of Irrigation

---

### **Introduction**

Irrigation is the artificial application of water to land or soil to supplement the natural rainfall and support the growth of crops. Understanding crop water requirements is fundamental to efficient irrigation design and management. This topic focuses on how to determine the amount of water a crop needs and how often it should be irrigated.

---

### **Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   **Define and explain crop water requirement (CWR).**
*   **Identify and describe the factors influencing crop water requirement.**
*   **Explain the concept of evapotranspiration (ET) and its components.**
*   **Understand and apply methods for estimating crop evapotranspiration (ETc).**
*   **Calculate the net irrigation requirement (NIR) and gross irrigation requirement (GIR).**
*   **Determine the frequency of irrigation.**
*   **Calculate the depth of irrigation.**
*   **Discuss the relationship between depth and frequency of irrigation.**

---

### **Key Concepts and Definitions**

*   **Crop Water Requirement (CWR):** The total amount of water required by a crop for its healthy growth and yield, measured as the depth of water (usually in mm or cm) over the cropped area. It primarily accounts for water lost through evapotranspiration (ET).

*   **Evapotranspiration (ET):** The combined process of water loss from a cropped area through evaporation from the soil surface and transpiration from the plant canopy.
    *   **Evaporation (E):** The process by which liquid water is converted into water vapor and enters the atmosphere.
    *   **Transpiration (T):** The process by which plants absorb water through their roots and then give off water vapor through pores in their leaves (stomata).

*   **Reference Evapotranspiration (ETo):** The rate of evapotranspiration from a reference surface, which is a hypothetical grass crop not limited by water or nutrient availability, with an actively growing canopy covering the soil, and well-fertilized. It's a climatic demand for water.

*   **Crop Coefficient (Kc):** A dimensionless coefficient used to adjust the reference evapotranspiration (ETo) to estimate the evapotranspiration of a specific crop (ETc). It accounts for the specific characteristics of different crops (e.g., height, leaf area, canopy cover, albedo).
    *   $ETc = ETo \times Kc$

*   **Net Irrigation Requirement (NIR):** The total amount of water that needs to be supplied to the crop, excluding effective rainfall and contribution from groundwater. It's the difference between the crop water requirement (ETc) and the available soil moisture and effective rainfall.
    *   $NIR = ETc - (Effective Rainfall + Soil Moisture Contribution)$

*   **Effective Rainfall:** That portion of rainfall that is actually available for crop use. It excludes rainfall that is lost due to surface runoff or deep percolation beyond the root zone.

*   **Soil Moisture Contribution:** The water already present in the root zone of the soil that can be utilized by the crop.

*   **Gross Irrigation Requirement (GIR):** The total amount of water that needs to be applied through irrigation to meet the NIR, considering the inefficiencies of the irrigation system (e.g., application efficiency, conveyance efficiency).
    *   $GIR = \frac{NIR}{Application Efficiency}$

*   **Irrigation Frequency:** The number of days between successive irrigations, which is determined by the available soil moisture holding capacity and the daily water consumption rate of the crop.

*   **Depth of Irrigation:** The depth of water to be applied to the soil surface during each irrigation event to replenish the depleted soil moisture in the root zone.

*   **Irrigation Interval:** The period between consecutive irrigations, essentially the same as irrigation frequency.

*   **Field Capacity (FC):** The maximum amount of water that a soil can hold against the force of gravity after excess water has drained away.

*   **Permanent Wilting Point (PWP):** The moisture content in the soil at which plants can no longer extract water and will wilt permanently.

*   **Available Soil Moisture (ASM):** The amount of water that is available for crop use, which is the difference between the water content at Field Capacity and the water content at Permanent Wilting Point.
    *   $ASM = FC - PWP$

*   **Readily Available Soil Moisture (RASM):** The portion of ASM that can be depleted by the crop without causing significant stress. It's often expressed as a fraction of ASM.
    *   $RASM = (\text{Allowable Depletion}) \times ASM$

---

### **Factors Influencing Crop Water Requirement (CWR)**

The CWR of a crop is not constant and depends on several factors:

1.  **Climatic Factors:**
    *   **Temperature:** Higher temperatures increase ET.
    *   **Solar Radiation:** High solar radiation increases ET.
    *   **Humidity:** Low humidity increases ET.
    *   **Wind Speed:** Higher wind speeds increase ET.
    *   **Rainfall:** The amount and distribution of rainfall significantly impact the irrigation needs.

2.  **Crop Factors:**
    *   **Crop Type:** Different crops have different ET rates (e.g., rice vs. wheat).
    *   **Crop Growth Stage:** CWR varies throughout the crop's life cycle, being lowest during germination and highest during the flowering and grain-filling stages.
    *   **Crop Geometry:** Height, leaf area index (LAI), and canopy cover affect ET.
    *   **Rooting Depth:** Deeper roots can access more soil moisture, potentially reducing irrigation needs.

3.  **Soil Factors:**
    *   **Soil Texture:** Sandy soils have lower water holding capacity than clay soils.
    *   **Soil Structure:** Affects infiltration and drainage.
    *   **Soil Depth:** The depth of the root zone determines the volume of soil from which water can be extracted.

4.  **Management Factors:**
    *   **Irrigation Method:** Efficiency of water application.
    *   **Fertilization:** Proper fertilization can improve crop vigor and water use efficiency.
    *   **Weed Control:** Weeds compete for water.
    *   **Salinity:** High soil salinity can reduce water uptake by plants.

---

### **Computation of Crop Evapotranspiration (ETc)**

The most widely accepted method for estimating ETc is the **FAO Penman-Monteith method**, which considers various meteorological parameters. However, simplified methods are often used for practical applications.

**1. FAO Penman-Monteith Method (Reference Method):**

This method provides a standardized and reliable estimate of ETo.
$$ET_o = \frac{0.408 \Delta (R_n - G) + \gamma \frac{900}{T+273} u_2 (e_s - e_a)}{\Delta + \gamma (1 + 0.34 u_2)}$$
Where:
*   $ET_o$ = Reference evapotranspiration [mm day⁻¹]
*   $\Delta$ = Slope of the saturation vapor pressure curve [kPa °C⁻¹]
*   $R_n$ = Net radiation at the crop surface [MJ m⁻² day⁻¹]
*   $G$ = Soil heat flux density [MJ m⁻² day⁻¹] (often negligible for daily calculations)
*   $\gamma$ = Psychrometric constant [kPa °C⁻¹]
*   $T$ = Mean daily air temperature at 2m height [°C]
*   $u_2$ = Wind speed at 2m height [m s⁻¹]
*   $e_s$ = Saturation vapor pressure [kPa]
*   $e_a$ = Actual vapor pressure [kPa]
*   $(e_s - e_a)$ = Saturation vapor pressure deficit [kPa]

**2. Simplified Methods (Often used in practical scenarios):**

*   **Pan Evaporation Method:**
    $ET_c = K_p \times E_{pan}$
    Where:
    *   $K_p$ = Pan coefficient (accounts for the difference between pan and crop ET, depends on crop type, pan type, and surrounding environment).
    *   $E_{pan}$ = Evaporation from a standard pan (e.g., Class A Evaporation Pan).

*   **Blaney-Criddle Method:**
    $ET_c = k_c \times P (0.46 T + 8.13)$ (monthly basis)
    Where:
    *   $k_c$ = Crop coefficient.
    *   $P$ = Percentage of daytime hours of the year at a given latitude.
    *   $T$ = Mean monthly temperature (°C).

**Calculation of Crop Evapotranspiration (ETc) from ETo:**

Once ETo is determined, ETc is calculated using the crop coefficient (Kc):

$$ETc = ETo \times Kc$$

The $Kc$ value varies with crop type and growth stage. FAO provides tables with $Kc$ values for various crops at different stages.

---

### **Calculating Net Irrigation Requirement (NIR)**

The NIR is the amount of water that needs to be supplied by irrigation.

$$NIR = ETc - (Effective Rainfall + Soil Moisture Contribution)$$

*   **Effective Rainfall:** Various methods exist to estimate effective rainfall, a common one being:
    *   $ER = \sum_{i=1}^{n} \frac{P_i - 4 \times (D_i - P_i)}{1000}$ (for daily rainfall $P_i$ and depth to impermeable layer $D_i$)
    *   A simpler approach for estimation: Assume a percentage of total rainfall is effective (e.g., 70-80% depending on soil type and intensity).

*   **Soil Moisture Contribution:** This is the moisture already available in the root zone. It can be approximated as the difference between the soil moisture at field capacity and the moisture at the point of "readily available moisture."

---

### **Calculating Gross Irrigation Requirement (GIR)**

The GIR accounts for losses during irrigation application.

$$GIR = \frac{NIR}{E_a}$$

Where:
*   $E_a$ = Application Efficiency (typically 60-80% depending on the irrigation method: surface irrigation, sprinkler, drip).

---

### **Determining Irrigation Frequency (Interval)**

The irrigation frequency (or interval) is the period between consecutive irrigations. It depends on the readily available soil moisture (RASM) and the daily ETc.

**1. Calculating Allowable Depletion (AD):**

The AD is the maximum amount of water that can be depleted from the root zone before irrigation is needed. It's usually a fraction of the Available Soil Moisture (ASM).

$$AD = D \times (FC - PWP)$$
Where:
*   $D$ = Depth of root zone (mm or cm).
*   $FC$ = Field Capacity (expressed as % by mass or volume).
*   $PWP$ = Permanent Wilting Point (expressed as % by mass or volume).

**Note:** If FC and PWP are in % by mass, they need to be converted to % by volume:
% by volume = (% by mass) * (Bulk Density) / (Density of water)
Assuming Density of water = 1 g/cm³ = 1000 kg/m³

**2. Calculating Readily Available Soil Moisture (RASM):**

RASM is often taken as a percentage of ASM, which is a management decision based on the crop's sensitivity to water stress.
$RASM = D \times (FC - PWP) \times \text{Allowable Depletion Factor}$
The Allowable Depletion Factor (often denoted as $p$) is a fraction (e.g., 0.5 for crops sensitive to wilting, 0.7 for less sensitive crops).
$RASM = D \times (FC - PWP) \times p$

**3. Calculating Irrigation Interval (I):**

The irrigation interval is the time it takes for the crop to deplete the RASM.

$$I = \frac{RASM}{ETc_{\text{daily}}}$$
Where:
*   $ETc_{\text{daily}}$ = Daily crop evapotranspiration (ETc / number of days in the period, if ETc is calculated for a longer duration).

**Important Note:** The calculated interval should be rounded to a whole number of days and should not exceed the crop's sensitivity to water stress.

---

### **Calculating Depth of Irrigation**

The depth of irrigation is the amount of water to be applied during each irrigation event to replenish the depleted soil moisture in the root zone. It should aim to bring the soil moisture back up to field capacity.

**Depth of Irrigation (d) = RASM**

This implies that each irrigation event should aim to replace the amount of water that the crop has used since the last irrigation, up to the point where it needs to be re-irrigated.

*   **If applying to meet the Gross Irrigation Requirement (GIR):**
    $Depth \ of \ Irrigation = \frac{GIR \times A}{A}$
    Where A is the area.
    So, Depth of Irrigation = GIR (in mm or cm).

**Relationship between Depth and Frequency:**

*   **High Frequency, Low Depth:** If the RASM is low (meaning the crop can't tolerate much depletion) and/or daily ETc is high, then frequent, smaller irrigations will be needed.
*   **Low Frequency, High Depth:** If the RASM is high (crop can tolerate more depletion) and/or daily ETc is low, then less frequent, larger irrigations can be applied.

---

### **Example Calculation**

Let's calculate the depth and frequency of irrigation for a crop:

**Given Data:**

*   Crop: Wheat
*   Root Zone Depth (D): 80 cm
*   Field Capacity (FC): 25% (by volume)
*   Permanent Wilting Point (PWP): 10% (by volume)
*   Allowable Depletion Factor (p): 0.6 (i.e., 60% of ASM can be depleted)
*   Average daily ETc: 5 mm/day
*   Application Efficiency (Ea): 70%
*   Effective Rainfall in a 7-day period: 20 mm

**Calculations:**

1.  **Available Soil Moisture (ASM):**
    $ASM = D \times (FC - PWP)$
    $ASM = 80 \text{ cm} \times (0.25 - 0.10)$
    $ASM = 80 \text{ cm} \times 0.15 = 12 \text{ cm} = 120 \text{ mm}$

2.  **Readily Available Soil Moisture (RASM):**
    $RASM = D \times (FC - PWP) \times p$
    $RASM = 120 \text{ mm} \times 0.6$
    $RASM = 72 \text{ mm}$

3.  **Irrigation Interval (Frequency):**
    $I = \frac{RASM}{ETc_{\text{daily}}}$
    $I = \frac{72 \text{ mm}}{5 \text{ mm/day}}$
    $I = 14.4 \text{ days}$
    **Therefore, the irrigation frequency is approximately every 14 days.**

4.  **Depth of Irrigation:**
    The depth of irrigation needed to bring the soil back to field capacity, replacing the depleted RASM, is equal to the RASM itself.
    **Depth of Irrigation = RASM = 72 mm**

5.  **Net Irrigation Requirement (NIR) over the interval (14 days):**
    Assuming a constant daily ETc of 5 mm/day:
    $ETc_{\text{14 days}} = 5 \text{ mm/day} \times 14 \text{ days} = 70 \text{ mm}$
    $NIR = ETc_{\text{14 days}} - Effective Rainfall$
    $NIR = 70 \text{ mm} - 20 \text{ mm}$
    $NIR = 50 \text{ mm}$

6.  **Gross Irrigation Requirement (GIR) over the interval (14 days):**
    $GIR = \frac{NIR}{E_a}$
    $GIR = \frac{50 \text{ mm}}{0.70}$
    $GIR \approx 71.4 \text{ mm}$

**Interpretation:**

*   The crop needs to be irrigated approximately every **14 days**.
*   The **depth of irrigation** to be applied to replenish the depleted soil moisture (RASM) is **72 mm**. This is the amount of water to be applied at each irrigation to restore the soil moisture to field capacity within the root zone.
*   Over the 14-day interval, the **NIR** is 50 mm, and the **GIR** (the amount to be applied through the irrigation system) is approximately **71.4 mm**. This means that the irrigation system must deliver 71.4 mm of water to the field to account for losses, so that the crop receives the required 50 mm to meet its needs during that period.

---

### **Practice Questions**

**Question 1:**
Define evapotranspiration and list the key factors that influence it.

**Question 2:**
A crop has a root zone depth of 90 cm. The Field Capacity of the soil is 28% by volume, and the Permanent Wilting Point is 12% by volume. The crop coefficient ($K_c$) is 1.2, and the reference evapotranspiration ($E_T0$) is 6 mm/day. If the allowable depletion factor is 0.5, calculate:
a) Available Soil Moisture (ASM)
b) Readily Available Soil Moisture (RASM)
c) Irrigation Interval
d) Depth of irrigation

**Question 3:**
Explain the difference between Net Irrigation Requirement (NIR) and Gross Irrigation Requirement (GIR).

**Question 4:**
A farmer irrigates a field using a sprinkler system with an application efficiency of 75%. The crop requires 80 mm of water over a 10-day period, and effective rainfall during this period is 15 mm. Calculate the Gross Irrigation Requirement (GIR).

**Question 5:**
How does the depth of irrigation influence the frequency of irrigation?

---

### **Answers to Practice Questions**

**Answer 1:**
Evapotranspiration (ET) is the combined loss of water from a cropped area through evaporation from the soil surface and transpiration from the plant canopy.
Key factors influencing ET include:
*   **Climatic Factors:** Temperature, solar radiation, humidity, wind speed.
*   **Crop Factors:** Crop type, growth stage, leaf area index, canopy cover, rooting depth.
*   **Soil Factors:** Soil texture, soil structure, soil depth.
*   **Management Factors:** Irrigation method, fertilization, weed control.

**Answer 2:**
a) **Available Soil Moisture (ASM):**
   $ASM = D \times (FC - PWP)$
   $ASM = 90 \text{ cm} \times (0.28 - 0.12)$
   $ASM = 90 \text{ cm} \times 0.16 = 14.4 \text{ cm} = 144 \text{ mm}$

b) **Readily Available Soil Moisture (RASM):**
   $RASM = D \times (FC - PWP) \times p$
   $RASM = 144 \text{ mm} \times 0.5$
   $RASM = 72 \text{ mm}$

c) **Irrigation Interval:**
   First, calculate daily ETc:
   $ETc = ETo \times Kc = 6 \text{ mm/day} \times 1.2 = 7.2 \text{ mm/day}$
   $Irrigation \ Interval (I) = \frac{RASM}{ETc_{\text{daily}}} = \frac{72 \text{ mm}}{7.2 \text{ mm/day}} = 10 \text{ days}$

d) **Depth of irrigation:**
   The depth of irrigation should be equal to the RASM.
   Depth of irrigation = 72 mm

**Answer 3:**
*   **Net Irrigation Requirement (NIR):** The actual amount of water required by the crop that needs to be supplied from irrigation, after accounting for ETc and excluding effective rainfall and soil moisture contribution.
*   **Gross Irrigation Requirement (GIR):** The total amount of water that must be applied through the irrigation system to meet the NIR, considering the inefficiencies of the system (e.g., losses due to evaporation, runoff, deep percolation during application).

**Answer 4:**
*   Total water required by the crop over 10 days ($ETc_{10 \text{ days}}$): Assume average daily ETc = $80 \text{ mm} / 10 \text{ days} = 8 \text{ mm/day}$.
    $ETc_{10 \text{ days}} = 8 \text{ mm/day} \times 10 \text{ days} = 80 \text{ mm}$
*   Net Irrigation Requirement (NIR) over 10 days:
    $NIR = ETc_{10 \text{ days}} - \text{Effective Rainfall}$
    $NIR = 80 \text{ mm} - 15 \text{ mm} = 65 \text{ mm}$
*   Gross Irrigation Requirement (GIR) over 10 days:
    $GIR = \frac{NIR}{E_a}$
    $GIR = \frac{65 \text{ mm}}{0.75} = 86.67 \text{ mm}$
    The Gross Irrigation Requirement is 86.67 mm over the 10-day period.

**Answer 5:**
There is an inverse relationship between the depth and frequency of irrigation.
*   If the **depth of irrigation** is **high**, it means the RASM is high or the ETc is low. This allows the soil moisture to be depleted more before needing replenishment, resulting in **lower irrigation frequency** (i.e., longer intervals between irrigations).
*   If the **depth of irrigation** is **low**, it means the RASM is low or the ETc is high. This requires more frequent replenishment of soil moisture, resulting in **higher irrigation frequency** (i.e., shorter intervals between irrigations).

---

### **Important Points to Remember**

*   **ETc is the primary driver:** Crop water requirement is directly linked to evapotranspiration.
*   **$K_c$ is crucial:** The crop coefficient is essential for converting climatic demand (ETo) into crop-specific demand (ETc).
*   **Soil moisture dynamics:** Understanding FC, PWP, and ASM is vital for determining how much water can be stored and used by the plant.
*   **RASM dictates frequency:** The concept of readily available soil moisture determines how often irrigation is needed.
*   **Efficiency matters:** Always account for system efficiencies when determining the amount of water to apply (GIR vs. NIR).
*   **Integrated approach:** Effective irrigation planning requires considering climatic data, crop characteristics, soil properties, and management practices.
*   **Dynamic nature:** Crop water requirements and consequently irrigation schedules change with crop growth stages and weather variations.

---
