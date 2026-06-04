---
title: "Floods-methods of design flood estimation –Empirical methods"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 2: Runoff"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d8c"
status: "completed"
scrapedAt: "2026-05-20T18:49:13.533Z"
---
# Hydrology and Water Resources Engineering: Module 2 - Runoff

## Topic: Floods - Methods of Design Flood Estimation - Empirical Methods

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of a design flood and its importance in water resources engineering.
*   Identify and explain various empirical methods used for estimating design floods.
*   Apply selected empirical methods to calculate design flood magnitudes for given catchment characteristics.
*   Recognize the limitations and applicability of empirical flood estimation methods.

---

### 1. Introduction to Design Floods

#### Key Concepts:

*   **Flood:** An overflow of a large amount of water beyond its normal confines, especially over what is normally dry land.
*   **Design Flood:** A flood event with a specified probability of exceedance, used as a basis for the design of hydraulic structures (e.g., dams, bridges, spillways, culverts). It represents a flood that the structure is designed to withstand without catastrophic failure.
*   **Return Period (or Recurrence Interval):** The average time interval between occurrences of an event of a certain magnitude or greater. For example, a 100-year flood has a 1% chance of occurring in any given year.
*   **Probability of Exceedance (P):** The chance that a flood of a certain magnitude will be equaled or exceeded in any given year. $P = 1 / T$, where $T$ is the return period.
*   **Risk:** The probability of an undesirable event occurring during the design life of a structure. Risk is related to the return period of the design flood.

#### Importance of Design Floods:

*   **Safety:** Ensures the safety of lives and property by preventing catastrophic failures of hydraulic structures.
*   **Economic Viability:** Balances the cost of over-design (too conservative) with the risk of under-design (potential for large economic losses).
*   **Environmental Considerations:** Influences the ecological impact of structures on riverine ecosystems.
*   **Regulatory Requirements:** Many government agencies mandate specific design flood magnitudes based on the type and importance of the structure.

---

### 2. Empirical Methods for Design Flood Estimation

Empirical methods are simplified approaches that use relationships between catchment characteristics and flood magnitudes, often derived from observed data. They are generally used for preliminary estimates or in data-scarce regions.

**Advantages:**

*   Simple to apply.
*   Require readily available data (catchment area, slope, etc.).
*   Useful for reconnaissance studies.

**Disadvantages:**

*   Often based on limited data and regional assumptions.
*   May not accurately represent specific local hydrological conditions.
*   Less accurate than rainfall-runoff or hydro-meteorological methods for complex catchments.

---

#### 2.1. Rational Method

The Rational Method is one of the oldest and most widely used empirical methods for estimating peak discharge (Q) from small to medium-sized catchments (typically less than $20 \text{ km}^2$ or $5 \text{ sq mi}$).

**Formula:**

$Q = C \times i \times A$

Where:

*   $Q$ = Peak discharge ($m^3/s$ or $cfs$)
*   $C$ = Runoff coefficient (dimensionless)
*   $i$ = Average rainfall intensity for the **time of concentration** (mm/hr or in/hr)
*   $A$ = Drainage area ($km^2$ or acres)

**Key Components and Steps:**

1.  **Drainage Area (A):**
    *   Determine the catchment area from topographical maps or GIS data.
    *   Units must be consistent with the units of $i$ and $C$ for the desired output $Q$.

2.  **Runoff Coefficient (C):**
    *   Represents the fraction of rainfall that becomes direct runoff.
    *   It depends on land use, soil type, antecedent moisture conditions, and slope.
    *   Values are typically obtained from tables or charts.

    | Land Use/Cover      | C (Approximate Range) |
    | :------------------ | :-------------------- |
    | Lawns (poor soil)   | 0.10 - 0.15           |
    | Lawns (good soil)   | 0.15 - 0.35           |
    | Gardens             | 0.20 - 0.45           |
    | Parks, woods        | 0.10 - 0.40           |
    | Pasture             | 0.10 - 0.45           |
    | Row crops           | 0.30 - 0.60           |
    | Bare soil           | 0.30 - 0.70           |
    | Paved areas (roads, roofs) | 0.70 - 0.95           |
    | Industrial areas    | 0.70 - 0.95           |
    | Residential (single family) | 0.30 - 0.50           |

3.  **Rainfall Intensity (i):**
    *   This is the **critical** component for the Rational Method. It's not just any rainfall intensity, but the intensity of rainfall that lasts for the **time of concentration ($t_c$)**.
    *   **Time of Concentration ($t_c$):** The time it takes for water to travel from the hydraulically most distant point in the catchment to the outlet.
        *   It is usually estimated as the sum of overland flow time and channel flow time.
        *   **Overland flow time ($t_{of}$):** Time taken for water to travel across the surface to a channel. Can be estimated using:
            $t_{of} = 0.007 \times (1.2 \times L)^{0.5} / S^{0.5}$ (for impervious surfaces, approximate)
            $t_{of} = 0.007 \times (L)^{0.5} / S^{0.5}$ (for pervious surfaces, approximate)
            Where:
            *   $L$ = Length of overland flow path (m)
            *   $S$ = Slope of the overland flow path (m/m)
            More commonly, simpler methods like the "Kinematic wave" approach or empirical equations are used based on Manning's equation for shallow flow. A common simplified approach is:
            $t_{of} = 0.007 \times (L^{0.5}) / (S^{0.25})$ (approximate for paved surfaces)
            $t_{of} = 0.007 \times (L^{0.5}) / (S^{0.3})$ (approximate for pervious surfaces)
            A very common simplified empirical approach is:
            $t_{of} = (0.007 \times L) / (V_{avg})$ where $V_{avg}$ is average overland flow velocity.
            Or, even simpler: $t_{of} = 0.007 \times L^{0.5}$ for a representative slope.
        *   **Channel flow time ($t_{cf}$):** Time taken for water to travel through the stream network. Can be estimated using Manning's equation:
            $V_{avg} = (1/n) \times R^{2/3} \times S^{1/2}$
            $t_{cf} = L_{channel} / V_{avg}$
            Where:
            *   $L_{channel}$ = Length of the channel (m)
            *   $n$ = Manning's roughness coefficient
            *   $R$ = Hydraulic radius (m)
            *   $S$ = Slope of the channel (m/m)
            A simpler empirical approach for channel flow time is:
            $t_{cf} = L_{channel} / 6$ (for natural streams, km/hr, if velocity is assumed to be ~6 km/hr)
        *   **Total Time of Concentration ($t_c$)**: $t_c = t_{of} + t_{cf}$
    *   **IDF (Intensity-Duration-Frequency) Curves:** These curves are used to find the rainfall intensity ($i$) corresponding to the calculated $t_c$ and a chosen **design return period**. These curves are specific to a geographical region. The duration on the IDF curve corresponds to the $t_c$.

4.  **Peak Discharge Calculation:**
    *   Once $C$, $i$, and $A$ are determined, plug them into the Rational Method formula.
    *   **Unit Conversion:** Be extremely careful with units. If $A$ is in hectares, $i$ in mm/hr, and $C$ is dimensionless, the formula for $Q$ in $m^3/s$ becomes:
        $Q (\text{m}^3/\text{s}) = C \times i (\text{mm}/\text{hr}) \times A (\text{ha}) \times (10^{-3} \text{ km}^2/\text{ha}) \times (10^3 \text{ m}^3/\text{km}^3) / (3600 \text{ s}/\text{hr})$
        $Q (\text{m}^3/\text{s}) = 0.00278 \times C \times i \times A$ (where A is in hectares and i is in mm/hr)
        If $A$ is in $km^2$ and $i$ is in $mm/hr$:
        $Q (\text{m}^3/\text{s}) = C \times i (\text{mm}/\text{hr}) \times A (\text{km}^2) \times (10^6 \text{ m}^3/\text{km}^3) / (3600 \text{ s}/\text{hr})$
        $Q (\text{m}^3/\text{s}) = 0.278 \times C \times i \times A$ (where A is in $km^2$ and i is in mm/hr)

**Example of Rational Method Application:**

**Problem:** Estimate the peak discharge for a 50-year return period storm for a small urban catchment with the following characteristics:
*   Drainage area ($A$) = 20 hectares
*   Land use: 60% paved surfaces (roads, roofs), 40% lawns (good soil).
*   Average slope of the catchment ($S$) = 0.02 (m/m).
*   The most hydraulically distant point is 200m from the outlet via overland flow, and then 500m through a concrete channel.
*   Manning's 'n' for the channel = 0.013.
*   Assume a representative overland flow velocity of 3 m/s.
*   IDF curve for the region indicates:
    *   For 5-min duration: 100 mm/hr
    *   For 10-min duration: 80 mm/hr
    *   For 15-min duration: 65 mm/hr

**Solution:**

1.  **Calculate Time of Concentration ($t_c$):**
    *   **Overland flow time ($t_{of}$):**
        Using the simple approach: $t_{of} = L_{overland} / V_{avg} = 200 \text{ m} / 3 \text{ m/s} = 66.7 \text{ seconds} \approx 1.1 \text{ minutes}$.
    *   **Channel flow time ($t_{cf}$):**
        Assume channel slope ($S$) = 0.02 m/m (same as catchment slope for simplicity, though often it's steeper).
        Assume hydraulic radius ($R$) = 0.3m (typical for a small channel).
        $V_{avg} = (1/0.013) \times (0.3)^{2/3} \times (0.02)^{1/2} \approx 1.31 \times 0.448 \times 0.141 \approx 0.82 \text{ m/s}$
        $t_{cf} = L_{channel} / V_{avg} = 500 \text{ m} / 0.82 \text{ m/s} = 610 \text{ seconds} \approx 10.2 \text{ minutes}$.
    *   **Total $t_c$**: $t_c = t_{of} + t_{cf} = 1.1 \text{ min} + 10.2 \text{ min} = 11.3 \text{ minutes}$.

2.  **Determine Rainfall Intensity (i):**
    *   The closest duration on the IDF curve to 11.3 minutes is 10 minutes.
    *   From the IDF curve, for a 10-minute duration, the rainfall intensity ($i$) for a 50-year return period is 80 mm/hr.

3.  **Calculate Weighted Runoff Coefficient (C):**
    *   Paved surfaces: $C_{paved} = 0.90$
    *   Lawns (good soil): $C_{lawn} = 0.25$
    *   Weighted $C = (0.60 \times 0.90) + (0.40 \times 0.25) = 0.54 + 0.10 = 0.64$.

4.  **Calculate Peak Discharge (Q):**
    *   $A = 20$ hectares
    *   $C = 0.64$
    *   $i = 80 \text{ mm/hr}$
    *   Using the formula for $A$ in hectares and $i$ in mm/hr to get $Q$ in $m^3/s$:
        $Q = 0.00278 \times C \times i \times A$
        $Q = 0.00278 \times 0.64 \times 80 \times 20$
        $Q = 28.47 \text{ m}^3/\text{s}$

**Therefore, the estimated design peak discharge is 28.47 m³/s.**

**Important Considerations for Rational Method:**

*   **Catchment Size:** Best suited for catchments < 20 $km^2$. For larger catchments, different methods are preferred.
*   **Rainfall Uniformity:** Assumes uniform rainfall intensity over the entire catchment for the duration of $t_c$. This is often not true for larger catchments.
*   **Peak Occurs at $t_c$:** Assumes the peak discharge occurs when the rainfall intensity corresponding to $t_c$ is applied.
*   **No Infiltration Losses:** The runoff coefficient implicitly accounts for some losses, but it's not a detailed infiltration model.
*   **Shape of Hydrograph:** Provides only the peak flow, not the shape of the flood hydrograph.

---

#### 2.2. Empirical Formulas based on Catchment Characteristics

These formulas relate peak discharge directly to catchment area and other physiographic parameters like slope, shape, and land cover, often combined with rainfall data.

##### 2.2.1. Maximum Flood Formula (Creager's Formula)

Creager's formula relates the maximum flood discharge ($Q_{max}$) to the catchment area ($A$) and a coefficient ($C_{creager}$) which accounts for regional factors and storm characteristics.

**Formula:**

$Q_{max} = C_{creager} \times A^{3/4}$

Where:

*   $Q_{max}$ = Maximum flood discharge ($m^3/s$ or $cfs$)
*   $C_{creager}$ = Creager's coefficient (dimensionless, varies regionally)
*   $A$ = Drainage area ($km^2$ or $sq mi$)

**Creager's Coefficient ($C_{creager}$):**

*   This coefficient is empirically derived and varies significantly by region.
*   It generally ranges from about 2 to 60 for $m^3/s$ and $km^2$. Higher values indicate a higher propensity for large floods.
*   It reflects factors like:
    *   Maximum probable rainfall intensity.
    *   Antecedent conditions.
    *   Catchment response characteristics (shape, slope, soil).
    *   Presence of significant storage.

**Example of Creager's Formula:**

**Problem:** Estimate the maximum flood discharge for a catchment of $A = 500 km^2$. Assume a region where $C_{creager} = 18$.

**Solution:**

*   $Q_{max} = 18 \times (500)^{3/4}$
*   $Q_{max} = 18 \times (26.57)$
*   $Q_{max} = 478.26 \text{ m}^3/\text{s}$

**Important Considerations for Creager's Formula:**

*   **Regional Applicability:** $C_{creager}$ must be calibrated for the specific region. Using a value from a different region can lead to significant errors.
*   **Maximum Flood:** This formula is intended to estimate the *maximum possible* flood, not a flood for a specific return period. It's more of a "probable maximum flood" estimation technique.
*   **Limited Basis:** Less physically based than other methods.

##### 2.2.2. Dickens' Formula

Dickens' formula is another empirical relationship for estimating peak flood discharge, primarily used in India.

**Formula:**

$Q_{peak} = C_D \times A^{3/4}$ (often written as $Q_{peak} = C_D \times A^{0.75}$)

Where:

*   $Q_{peak}$ = Peak flood discharge ($m^3/s$)
*   $C_D$ = Dickens' coefficient (dimensionless, varies regionally)
*   $A$ = Drainage area ($km^2$)

**Dickens' Coefficient ($C_D$):**

*   Values of $C_D$ are typically between 6 and 15 for Indian catchments.
*   Higher values are used for regions with steeper slopes, higher rainfall intensity, and more intense storms.

**Example of Dickens' Formula:**

**Problem:** Estimate the peak flood discharge for a catchment of $A = 750 km^2$ in a region where Dickens' coefficient $C_D = 12$.

**Solution:**

*   $Q_{peak} = 12 \times (750)^{0.75}$
*   $Q_{peak} = 12 \times 41.33$
*   $Q_{peak} = 495.96 \text{ m}^3/\text{s}$

**Important Considerations for Dickens' Formula:**

*   **Regional Specificity:** Developed for and most applicable to Indian catchments.
*   **Return Period Ambiguity:** Similar to Creager's, it doesn't explicitly define a return period. It's often used to estimate a significant flood.
*   **Catchment Size Limitation:** Most suitable for catchments between $25 \text{ km}^2$ and $5000 \text{ km}^2$.

##### 2.2.3. Inglis' Formula

Inglis' formula is also used for peak discharge estimation, particularly in India, and considers catchment area and coastal influences.

**Formula:**

$Q_{peak} = C_I \times A^{n}$ (where $n$ is typically between 0.5 and 0.75)

Inglis' formula can take various forms depending on the specific application and region. A common form is:

$Q_{peak} = 114 \times A^{0.6}$ (for the west coast of India)
$Q_{peak} = 174 \times A^{0.4}$ (for the east coast of India)

Where:

*   $Q_{peak}$ = Peak flood discharge ($m^3/s$)
*   $C_I$ = Inglis' coefficient (dimensionless, reflects region)
*   $A$ = Drainage area ($km^2$)

**Important Considerations for Inglis' Formula:**

*   **Regional Specificity:** Strongly tied to specific regions in India and their hydrological characteristics.
*   **Variable Exponent:** The exponent $n$ and coefficient $C_I$ vary significantly based on coastal or inland location and geographical factors.

---

#### 2.3. Empirical Formulas based on Rainfall and Catchment Characteristics (e.g., Unit Hydrograph - though often considered a rainfall-runoff method, its empirical basis is important)

While the Unit Hydrograph theory is a more sophisticated rainfall-runoff transformation, its application often relies on empirical assumptions and data. It's worth noting as a method that bridges empirical and analytical approaches.

**Key Concept:**

*   **Unit Hydrograph (UH):** A direct runoff hydrograph resulting from a unit depth (e.g., 1 cm or 1 inch) of excess rainfall occurring uniformly over the catchment at a uniform rate for a specified duration.

**How it's used for flood estimation:**

1.  **Develop a Unit Hydrograph:** Based on observed storm and resulting runoff data for a catchment.
2.  **Determine Excess Rainfall:** From a design storm hyetograph, deduct infiltration losses (using methods like SCS curve number, Horton's infiltration, etc.) to find excess rainfall.
3.  **Synthesize a Flood Hydrograph:** Multiply the unit hydrograph ordinates by the depth of excess rainfall for each duration and then by the appropriate unit depth (e.g., 1 cm).
4.  **Peak Discharge:** The peak of the synthesized hydrograph is the estimated peak discharge.

**Empirical Aspects:**

*   The shape and duration of the unit hydrograph are empirically determined from past events.
*   The choice of loss rates is often empirical.

**Note:** Unit Hydrograph is generally considered a rainfall-runoff method rather than purely empirical like Rational or Creager's. However, its reliance on observed data and empirical derivation of the UH shape places it closer to empirical methods in practice for simpler applications.

---

### 3. Selecting an Empirical Method

The choice of an empirical method depends on:

*   **Catchment Size:** Rational Method for small catchments, others for larger ones.
*   **Data Availability:** Availability of IDF curves, catchment parameters, and regional coefficients.
*   **Purpose of Study:** Reconnaissance vs. detailed design.
*   **Required Accuracy:** Empirical methods are less accurate than physically-based models.
*   **Regional Appropriateness:** Using formulas developed for similar hydrological conditions is crucial.

---

### 4. Limitations of Empirical Methods

*   **Limited Accuracy:** They are approximations and do not capture the full complexity of hydrological processes.
*   **Regional Dependence:** Coefficients and formulas are often specific to the region where they were developed. Extrapolation to different regions can be unreliable.
*   **Assumptions:** Many assumptions are made (e.g., uniform rainfall, specific travel times) that may not hold true in reality.
*   **No Hydrograph Shape:** Most empirical methods only provide peak discharge, not the full flood hydrograph.
*   **Design Storm:** The quality of the design storm (intensity, duration, pattern) significantly impacts the estimated flood.

---

### 5. Practice Questions and Exercises

**Question 1:**

A small urban catchment of 30 hectares has a composite runoff coefficient of 0.65. The time of concentration is estimated to be 15 minutes. Using an Intensity-Duration-Frequency (IDF) curve, the rainfall intensity for a 15-minute duration and a 25-year return period is found to be 70 mm/hr. Calculate the peak discharge using the Rational Method.

**Answer:**

*   Formula: $Q = 0.00278 \times C \times i \times A$
*   $C = 0.65$
*   $i = 70 \text{ mm/hr}$
*   $A = 30 \text{ hectares}$
*   $Q = 0.00278 \times 0.65 \times 70 \times 30$
*   $Q = 38.05 \text{ m}^3/\text{s}$

**Question 2:**

For a catchment of $400 \text{ km}^2$, estimate the probable maximum flood discharge using Creager's formula, assuming a coefficient $C_{creager} = 20$.

**Answer:**

*   Formula: $Q_{max} = C_{creager} \times A^{3/4}$
*   $C_{creager} = 20$
*   $A = 400 \text{ km}^2$
*   $Q_{max} = 20 \times (400)^{3/4}$
*   $Q_{max} = 20 \times 112.25$
*   $Q_{max} = 2245 \text{ m}^3/\text{s}$

**Question 3:**

A catchment area of $600 \text{ km}^2$ is located in a region where Dickens' coefficient is 11. Calculate the peak flood discharge using Dickens' formula.

**Answer:**

*   Formula: $Q_{peak} = C_D \times A^{0.75}$
*   $C_D = 11$
*   $A = 600 \text{ km}^2$
*   $Q_{peak} = 11 \times (600)^{0.75}$
*   $Q_{peak} = 11 \times 38.36$
*   $Q_{peak} = 421.96 \text{ m}^3/\text{s}$

---

### 6. Important Points to Remember

*   **Design Flood for Safety:** Design floods are crucial for ensuring the safety of hydraulic structures and preventing disasters.
*   **Rational Method:** Best for small catchments (< $20 \text{ km}^2$), relies on $C \times i \times A$, and requires accurate estimation of $t_c$ and $i$ from IDF curves.
*   **Empirical Formulas (Creager, Dickens, Inglis):** Useful for preliminary estimates and regional flood potential, but coefficients are critical and region-specific. They often estimate maximum or significant floods rather than specific return periods.
*   **Units Matter:** Always pay close attention to units in all calculations.
*   **Limitations:** Understand that empirical methods are simplifications and have significant limitations, especially for larger or complex catchments.
*   **Data Quality:** The accuracy of any flood estimation method is highly dependent on the quality and relevance of the input data.

---
