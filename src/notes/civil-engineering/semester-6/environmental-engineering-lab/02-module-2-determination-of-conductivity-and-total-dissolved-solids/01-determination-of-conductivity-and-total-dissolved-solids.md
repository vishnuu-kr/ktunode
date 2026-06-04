---
title: "Determination of Conductivity and Total dissolved solids"
subject: "ENVIRONMENTAL ENGINEERING LAB"
module: "Module 2: Determination of Conductivity and Total dissolved solids"
branch: "Civil Engineering"
semester: 6
topicId: "689f15cf56b5e963ba8113d6"
status: "completed"
scrapedAt: "2026-05-20T18:53:01.053Z"
---
# Environmental Engineering Lab: Module 2 - Determination of Conductivity and Total Dissolved Solids (TDS)

## 1. Introduction

This module focuses on two fundamental water quality parameters: **Conductivity** and **Total Dissolved Solids (TDS)**. Understanding these parameters is crucial in environmental engineering for assessing water suitability for various uses, monitoring pollution, and optimizing water treatment processes.

## 2. Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the theoretical basis for measuring electrical conductivity of water.
*   Understand the theoretical basis for measuring total dissolved solids (TDS) in water.
*   Identify the principles and methods for determining electrical conductivity of water.
*   Identify the principles and methods for determining total dissolved solids (TDS) in water.
*   Perform laboratory determination of electrical conductivity of water.
*   Perform laboratory determination of total dissolved solids (TDS) in water.
*   Correlate conductivity and TDS of water.
*   Analyze and interpret the results obtained from conductivity and TDS analysis.
*   Discuss the significance of conductivity and TDS in environmental engineering applications.

## 3. Key Concepts and Definitions

### 3.1. Electrical Conductivity (EC)

*   **Definition:** Electrical Conductivity (EC) is a measure of a water sample's ability to conduct an electric current. It is directly related to the concentration of dissolved ions in the water.
*   **Units:** Typically expressed in microsiemens per centimeter ($\mu$S/cm) or millisiemens per centimeter (mS/cm).
*   **Factors Affecting EC:**
    *   **Concentration of dissolved ions:** Higher ion concentration leads to higher EC.
    *   **Type of ions:** Different ions have different mobilities and conductivities.
    *   **Temperature:** EC generally increases with increasing temperature.
    *   **Presence of suspended solids:** Can slightly affect readings if they coat the electrodes.

### 3.2. Total Dissolved Solids (TDS)

*   **Definition:** Total Dissolved Solids (TDS) is the total amount of dissolved inorganic and organic substances in water. These substances are typically present as ions, but can also include some non-ionic dissolved organic compounds.
*   **Units:** Typically expressed in milligrams per liter (mg/L) or parts per million (ppm).
*   **Methods of Determination:**
    *   **Gravimetric Method (Evaporation):** This is the most common and accurate method. It involves evaporating a known volume of water to dryness and weighing the residue.
    *   **Conductivity Method (Estimation):** TDS can be estimated from conductivity measurements using a correlation factor. This is a faster but less precise method.

### 3.3. Ions in Water

*   **Cations (positively charged ions):** Common examples include Sodium ($\text{Na}^+$), Potassium ($\text{K}^+$), Calcium ($\text{Ca}^{2+}$), Magnesium ($\text{Mg}^{2+}$).
*   **Anions (negatively charged ions):** Common examples include Chloride ($\text{Cl}^-$), Sulfate ($\text{SO}_4^{2-}$), Bicarbonate ($\text{HCO}_3^-$), Nitrate ($\text{NO}_3^-$).
*   **Electrolytes:** Substances that dissociate into ions when dissolved in water, making the solution conductive.

### 3.4. Correlation between EC and TDS

*   **Relationship:** There is a strong positive correlation between EC and TDS. As the concentration of dissolved ions (measured by EC) increases, the total amount of dissolved solids (TDS) also increases.
*   **Correlation Factor (K):** A factor is used to convert EC readings to TDS. This factor is typically between 0.55 and 0.75, depending on the predominant ions present in the water.
    *   **Formula:** $\text{TDS (mg/L)} = \text{EC (} \mu\text{S/cm)} \times K$
    *   **Example:** If the EC is 500 $\mu$S/cm and the correlation factor is 0.6, then $\text{TDS} = 500 \times 0.6 = 300$ mg/L.

## 4. Principles and Methods of Determination

### 4.1. Determination of Electrical Conductivity (EC)

*   **Principle:** The conductivity of a solution is determined by measuring the electrical resistance between two electrodes immersed in the solution. The conductance is the reciprocal of resistance. The conductivity cell has a known cell constant, which accounts for the geometry of the electrodes.
*   **Instrumentation:** A **conductivity meter** (or conductivity bridge) is used. This instrument typically consists of:
    *   **Conductivity Probe/Cell:** Contains two or more electrodes (usually platinum or graphite) that are immersed in the water sample. The distance between the electrodes and their surface area define the **cell constant (C)**.
    *   **Electronic Measurement Unit:** Applies a known AC voltage across the electrodes and measures the resulting current. It then calculates the conductance and, using the cell constant, the conductivity.
    *   **Temperature Compensation:** Most modern conductivity meters have built-in temperature sensors and compensation circuitry, as EC is highly temperature-dependent. Readings are usually reported at $25^\circ\text{C}$.

*   **Method:**
    1.  **Calibration:** Calibrate the conductivity meter using a standard solution of known conductivity (e.g., 1413 $\mu$S/cm or 12.88 mS/cm Potassium Chloride solution).
    2.  **Temperature Measurement:** Note the temperature of the standard solution and the sample.
    3.  **Probe Immersion:** Immerse the conductivity probe into the water sample, ensuring the electrodes are fully submerged.
    4.  **Reading:** Allow the reading to stabilize and record the conductivity value. If the meter does not have automatic temperature compensation, adjust the reading to $25^\circ\text{C}$ using the following formula:
        $\text{EC}_{25} = \frac{\text{EC}_T}{1 + \alpha(T - 25)}$
        Where:
        *   $\text{EC}_{25}$ is the conductivity at $25^\circ\text{C}$.
        *   $\text{EC}_T$ is the conductivity at temperature $T$.
        *   $T$ is the temperature of the sample in $^\circ\text{C}$.
        *   $\alpha$ is the temperature coefficient of conductivity (approximately 0.019 to 0.021 per $^\circ\text{C}$ for most natural waters).

### 4.2. Determination of Total Dissolved Solids (TDS)

#### 4.2.1. Gravimetric Method (Evaporation)

*   **Principle:** Dissolved solids are left behind after the solvent (water) is evaporated. The mass of the residue is then determined by weighing.
*   **Instrumentation:**
    *   **Analytical Balance:** For precise weighing.
    *   **Evaporating Dish:** Usually porcelain or silica, known weight.
    *   **Drying Oven:** Capable of maintaining a constant temperature, typically $180^\circ\text{C}$.
    *   **Desiccator:** To cool the evaporated residue without absorbing moisture.
    *   **Volumetric Flask/Pipette:** For measuring precise volumes of the sample.

*   **Method:**
    1.  **Sample Preparation:** Mix the water sample thoroughly. If the sample contains significant suspended solids, it may need to be filtered through a fine-pore filter paper (e.g., GF/C) to remove suspended matter before taking a subsample for TDS analysis if only *dissolved* solids are to be measured. However, for *total* solids, filtration is omitted. For *total dissolved solids*, it is standard practice to use a filtered sample. Let's assume for this context we are determining **Total Dissolved Solids**, so a filtered sample is used.
    2.  **Evaporating Dish Preparation:** Clean, dry, and weigh an evaporating dish to a constant weight.
    3.  **Sample Transfer:** Pipette a precisely measured volume of the filtered water sample into the pre-weighed evaporating dish.
    4.  **Evaporation:** Place the evaporating dish containing the sample in a drying oven set at $180^\circ\text{C}$. Evaporate the water to dryness. This temperature is chosen to remove water but not to significantly decompose organic matter.
    5.  **Drying to Constant Weight:** Once all visible moisture has evaporated, continue heating the dish in the oven until the residue reaches a constant weight. This typically involves heating for an hour, cooling in a desiccator, weighing, and repeating until consecutive weighings do not differ significantly (e.g., by more than 0.5 mg).
    6.  **Cooling and Weighing:** Allow the evaporating dish and residue to cool in a desiccator to room temperature. Weigh the dish with the residue.
    7.  **Calculation:**
        $\text{TDS (mg/L)} = \frac{(\text{Weight of residue + dish}) - (\text{Weight of dish})}{\text{Volume of sample (L)}}$

    *   **Important Note:** For very low TDS concentrations, a larger sample volume might be required to obtain a measurable residue.

#### 4.2.2. Conductivity Method (Estimation)

*   **Principle:** As mentioned earlier, this method uses the correlation between EC and TDS.
*   **Method:**
    1.  Measure the EC of the water sample using a calibrated conductivity meter.
    2.  Apply the appropriate correlation factor (K) to estimate TDS:
        $\text{TDS (mg/L)} = \text{EC (} \mu\text{S/cm)} \times K$

    *   **Choosing the Correlation Factor (K):**
        *   For general purposes, a K of 0.6 or 0.65 is often used for natural waters.
        *   For waters with high concentrations of specific ions, a specific K value might be determined experimentally. For example, if a water is rich in calcium and bicarbonate, a lower K might be appropriate. If it's rich in sodium chloride, a higher K might be used.

## 5. Laboratory Determination of EC and TDS

### 5.1. Procedure for EC Measurement

1.  **Turn on the conductivity meter and allow it to warm up.**
2.  **Select the appropriate conductivity range on the meter.**
3.  **Calibrate the meter:**
    *   Rinse the conductivity probe with distilled water.
    *   Immerse the probe in a standard conductivity solution.
    *   Adjust the calibration knob on the meter to match the known conductivity of the standard solution.
4.  **Rinse the probe thoroughly with distilled water.**
5.  **Immerse the probe in the water sample.** Ensure the electrodes are completely submerged.
6.  **Record the conductivity reading.** Note the temperature of the sample if automatic temperature compensation is not available.
7.  **If necessary, correct the reading to $25^\circ\text{C}$ using the formula.**
8.  **Rinse the probe with distilled water after use.**

### 5.2. Procedure for TDS Measurement (Gravimetric Method)

1.  **Turn on the drying oven and set it to $180^\circ\text{C}$.**
2.  **Clean and dry an evaporating dish.**
3.  **Weigh the clean, dry evaporating dish using an analytical balance.** Record the weight ($W_{\text{dish}}$).
4.  **Carefully pipette a known volume (e.g., 100 mL) of the filtered water sample into the evaporating dish.** Record the volume ($V_{\text{sample}}$).
5.  **Place the evaporating dish in the preheated oven.**
6.  **Evaporate the water to dryness.** This can take several hours.
7.  **Once dry, remove the dish, place it in a desiccator to cool.**
8.  **Weigh the dish with the residue ($W_{\text{residue+dish}}$).**
9.  **Return the dish to the oven for another 30-60 minutes, cool in the desiccator, and re-weigh.** Repeat this until constant weight is achieved.
10. **Calculate TDS using the formula:**
    $\text{TDS (mg/L)} = \frac{(W_{\text{residue+dish}} - W_{\text{dish}}) \times 1000}{\text{Volume of sample (mL)}}$
    *(Multiplying by 1000 to convert grams to milligrams and mL to Liters)*

## 6. Correlation and Analysis

*   **Compare the TDS value obtained from the gravimetric method with the TDS value estimated from the EC measurement.**
*   **Discuss any discrepancies and potential reasons for them** (e.g., choice of correlation factor, presence of specific ions affecting EC, accuracy of the gravimetric method).
*   **Analyze the obtained values in the context of water quality standards** for intended uses (e.g., drinking water, irrigation, industrial processes).

## 7. Significance in Environmental Engineering Applications

*   **Water Quality Assessment:**
    *   **Drinking Water:** High TDS can affect taste and may indicate the presence of undesirable dissolved substances. Regulations often set limits for TDS in drinking water (e.g., WHO guideline is 1000 mg/L, often desirable < 600 mg/L).
    *   **Irrigation:** High TDS can negatively impact crop growth due to osmotic stress and ion toxicity. EC is often used as an indicator for irrigation suitability.
*   **Wastewater Treatment:**
    *   **Monitoring Effluent Quality:** EC and TDS can be used to monitor the effectiveness of treatment processes and to ensure compliance with discharge standards.
    *   **Process Control:** Changes in EC can indicate changes in the composition of wastewater or inefficiencies in treatment.
*   **Pollution Monitoring:**
    *   **Salinity Intrusion:** In coastal areas, increased EC can indicate the intrusion of saltwater into freshwater sources.
    *   **Industrial Discharges:** Industrial wastewaters can significantly alter the EC and TDS of receiving waters.
*   **Desalination and Water Treatment Plant Operations:** EC is a key parameter for monitoring the performance of reverse osmosis (RO) and other desalination processes.
*   **Groundwater Quality:** EC is used to characterize groundwater and to identify areas affected by geological formations or pollution.

## 8. Practice Questions and Exercises

**Question 1:** A water sample has an electrical conductivity of 750 $\mu$S/cm at $25^\circ\text{C}$. Estimate the TDS if the correlation factor (K) is 0.6.
    **Answer:**
    TDS = EC * K
    TDS = 750 $\mu$S/cm * 0.6
    TDS = 450 mg/L

**Question 2:** You measured the conductivity of a water sample to be 600 $\mu$S/cm at $28^\circ\text{C}$. If the temperature coefficient ($\alpha$) is 0.020 per $^\circ\text{C}$, what is the conductivity at $25^\circ\text{C}$?
    **Answer:**
    $\text{EC}_{25} = \frac{\text{EC}_T}{1 + \alpha(T - 25)}$
    $\text{EC}_{25} = \frac{600 \mu\text{S/cm}}{1 + 0.020(28 - 25)}$
    $\text{EC}_{25} = \frac{600 \mu\text{S/cm}}{1 + 0.020(3)}$
    $\text{EC}_{25} = \frac{600 \mu\text{S/cm}}{1 + 0.060}$
    $\text{EC}_{25} = \frac{600 \mu\text{S/cm}}{1.060}$
    $\text{EC}_{25} \approx 566.04 \mu\text{S/cm}$

**Question 3:** In the gravimetric method for TDS determination, a 200 mL sample of filtered water was evaporated to dryness. The weight of the clean evaporating dish was 50.1234 g. After evaporation and drying to constant weight, the dish plus residue weighed 50.1987 g. Calculate the TDS of the water sample in mg/L.
    **Answer:**
    Weight of residue = $W_{\text{residue+dish}} - W_{\text{dish}}$
    Weight of residue = 50.1987 g - 50.1234 g = 0.0753 g
    Convert residue weight to milligrams: 0.0753 g * 1000 mg/g = 75.3 mg
    Volume of sample = 200 mL = 0.2 L
    TDS (mg/L) = $\frac{\text{Weight of residue (mg)}}{\text{Volume of sample (L)}}$
    TDS (mg/L) = $\frac{75.3 \text{ mg}}{0.2 \text{ L}}$
    TDS (mg/L) = 376.5 mg/L

**Question 4:** Why is temperature compensation important when measuring electrical conductivity?
    **Answer:** Electrical conductivity of water is highly dependent on temperature. As temperature increases, the mobility of ions increases, leading to higher conductivity. Temperature compensation ensures that conductivity measurements are standardized to a specific temperature (usually $25^\circ\text{C}$) for accurate comparison and reporting.

**Question 5:** What is the primary difference in sample preparation for determining "Total Dissolved Solids" versus "Total Suspended Solids" using the gravimetric method?
    **Answer:** For "Total Dissolved Solids," the water sample is typically **filtered** through a fine-pore filter (e.g., GF/C) before evaporation to remove suspended particles. For "Total Suspended Solids," the water sample is **not filtered**, and the entire sample is evaporated. The residue in the case of TSS would include both dissolved and suspended solids.

## 9. Important Points to Remember

*   **Calibration is Crucial:** Always calibrate your conductivity meter with a fresh standard solution before use.
*   **Temperature Matters:** Be mindful of temperature, especially if your meter doesn't have automatic temperature compensation. Record the temperature of your samples.
*   **Filtration for TDS:** For "Total Dissolved Solids," ensure you are using a filtered sample to exclude suspended matter.
*   **Constant Weight:** For the gravimetric TDS method, drying to constant weight is essential for accurate results.
*   **Correlation Factor Variability:** The TDS estimated from EC is an approximation. The accuracy depends on the chosen correlation factor, which can vary depending on the water's ionic composition.
*   **Units:** Pay close attention to units ($\mu$S/cm for EC, mg/L for TDS).
*   **Interference:** While EC and TDS are generally straightforward measurements, very high concentrations of certain substances or extreme sample turbidity could potentially interfere with readings.
