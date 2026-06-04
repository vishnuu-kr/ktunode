---
title: "Determination of Dissolved Oxygen"
subject: "ENVIRONMENTAL ENGINEERING LAB"
module: "Module 7: Determination of Dissolved Oxygen"
branch: "Civil Engineering"
semester: 6
topicId: "689f15cf56b5e963ba8113e0"
status: "completed"
scrapedAt: "2026-05-20T18:53:04.860Z"
---
# ENVIRONMENTAL ENGINEERING LAB - Module 7: Determination of Dissolved Oxygen

## Topic: Determination of Dissolved Oxygen

### 1. Introduction to Dissolved Oxygen (DO)

*   **Definition:** Dissolved Oxygen (DO) refers to the amount of free oxygen molecules dissolved in a body of water. It is a crucial parameter for the survival of aquatic life and a key indicator of water quality.
*   **Importance of DO:**
    *   **Aquatic Life Support:** Most aquatic organisms, including fish, invertebrates, and beneficial bacteria, require DO for respiration and survival. Low DO levels can lead to stress, suffocation, and death of aquatic life.
    *   **Water Quality Indicator:** DO levels are directly influenced by various factors like photosynthesis, respiration, decomposition, and aeration. High DO generally indicates healthy water, while low DO can signify pollution.
    *   **Aerobic Decomposition:** Sufficient DO is essential for aerobic bacteria to break down organic matter in water bodies, preventing the buildup of toxic substances.

### 2. Factors Affecting Dissolved Oxygen Levels

*   **Photosynthesis:** Aquatic plants and algae produce oxygen as a byproduct of photosynthesis, increasing DO levels, especially during daylight hours.
*   **Respiration:** All aquatic organisms, including fish, bacteria, and plants, consume oxygen during respiration, decreasing DO levels.
*   **Decomposition of Organic Matter:** When organic pollutants (e.g., sewage, agricultural runoff) enter water, microorganisms decompose them. This process is highly oxygen-consuming, leading to a significant drop in DO.
*   **Aeration:** The transfer of atmospheric oxygen into water, primarily at the water surface. Factors like turbulence (e.g., waterfalls, wind) and temperature influence aeration rates.
*   **Temperature:** DO solubility in water is inversely proportional to temperature. Colder water can hold more DO than warmer water. This is why DO levels often decrease in summer.
*   **Salinity:** Similar to temperature, DO solubility decreases with increasing salinity. Saltier water holds less oxygen.
*   **Atmospheric Pressure:** Higher atmospheric pressure generally leads to higher DO solubility.
*   **Turbidity:** Suspended solids can block sunlight, reducing photosynthesis by aquatic plants and algae, thereby impacting DO production. They can also settle and increase the oxygen demand from benthic organisms.

### 3. Methods for Determining Dissolved Oxygen

There are two primary methods for determining DO in the lab:

#### 3.1. Winkler Method (Iodometric Titration)

This is a classic and widely used chemical method for DO determination. It relies on a series of chemical reactions that lead to the liberation of iodine, which is then titrated with a standard solution of sodium thiosulfate.

**Key Concepts and Definitions:**

*   **Manganous Sulfate (MnSO₄):** Reacts with dissolved oxygen in alkaline conditions to form a precipitate of manganous hydroxide.
*   **Alkaline Iodide-Azide:** Provides the alkaline environment and the iodide ions necessary for the reaction. Azide is added to prevent interference from nitrites.
*   **Sulfuric Acid (H₂SO₄):** Acidifies the solution, dissolving the precipitate.
*   **Iodine (I₂):** Liberated in proportion to the amount of dissolved oxygen initially present.
*   **Sodium Thiosulfate (Na₂S₂O₃):** A reducing agent used as the titrant to quantify the liberated iodine.
*   **Starch Indicator:** Used to detect the endpoint of the titration. It forms a deep blue complex with iodine.

**Procedure Outline:**

1.  **Sample Collection:** Collect water samples carefully to avoid introducing atmospheric oxygen. Fill the DO bottle completely, allowing a small amount to overflow.
2.  **Fixation:** Immediately add manganous sulfate solution and alkaline iodide-azide solution to the DO bottle. Stopper the bottle carefully to exclude air bubbles. The precipitate formed is Mn(OH)₂.
    *   **Reaction:**
        *   $\text{Mn}^{2+} + 2\text{OH}^- \rightarrow \text{Mn(OH)}_2 \downarrow$ (in the presence of alkali)
        *   $2\text{Mn(OH)}_2 + \text{O}_2 \rightarrow 2\text{Mn(OH)}_3$ (oxidation by DO)
3.  **Acidification:** After allowing the precipitate to settle, add concentrated sulfuric acid. The manganic hydroxide (Mn(OH)₃) reacts with iodide ions in the acidified solution to liberate iodine.
    *   **Reaction:** $2\text{Mn(OH)}_3 + 6\text{H}^+ + 2\text{I}^- \rightarrow 2\text{Mn}^{2+} + 2\text{I}_2 + 6\text{H}_2\text{O}$
4.  **Titration:** Titrate the liberated iodine with a standardized sodium thiosulfate solution.
    *   **Reaction:** $\text{I}_2 + 2\text{S}_2\text{O}_3^{2-} \rightarrow 2\text{I}^- + \text{S}_4\text{O}_6^{2-}$
5.  **Endpoint:** The disappearance of the blue color indicates the endpoint of the titration, which is then sharpened by adding starch indicator (turns blue in the presence of iodine) and continuing titration until the blue color disappears.

**Calculation:**

$\text{DO (mg/L)} = \frac{(\text{Volume of } \text{Na}_2\text{S}_2\text{O}_3 \text{ used in mL}) \times (\text{Normality of } \text{Na}_2\text{S}_2\text{O}_3 \text{ N}) \times (\text{Equivalent weight of } \text{O}_2)}{\text{Volume of DO bottle in mL}}$

*   Equivalent weight of $\text{O}_2$ = 8 g/eq (since $\text{O}_2$ + 4e⁻ -> 2O²⁻, or O₂ -> 2O, 1 O = 2e⁻, so O₂ = 4e⁻, MW of O₂ = 32, EqWt = 32/4 = 8)
*   Normality of $\text{Na}_2\text{S}_2\text{O}_3$ is typically 0.025 N.

**Important Points to Remember (Winkler Method):**

*   **Avoid Air Bubbles:** Crucial during sample collection and fixation.
*   **Immediate Fixation:** Prevents DO changes in the sample.
*   **Sufficient Settling:** Allow the precipitate to settle before acidification.
*   **Starch Indicator:** Add only when the yellow iodine color is nearly gone to avoid temporary adsorption of iodine by the starch.
*   **Standardization of Thiosulfate:** The normality of sodium thiosulfate solution must be accurately known.

#### 3.2. DO Meter (Electrochemical Method)

This method uses an electrochemical sensor to directly measure the concentration of dissolved oxygen.

**Key Concepts and Definitions:**

*   **Electrode:** Consists of a cathode and an anode.
*   **Electrolyte:** A solution that conducts ions between the electrodes.
*   **Membrane:** A permeable membrane (usually Teflon) separates the sample from the electrolyte. Oxygen diffuses across the membrane into the electrolyte.
*   **Galvanic or Polarographic Principle:**
    *   **Galvanic:** The sensor generates its own voltage, powered by a chemical reaction.
    *   **Polarographic:** Requires an external voltage to drive the reaction.
*   **Diffusion Rate:** The rate at which oxygen diffuses across the membrane is proportional to the partial pressure of oxygen in the sample, which in turn is related to the DO concentration.
*   **Amperometric Measurement:** The diffusion of oxygen to the cathode causes a reduction reaction, generating an electrical current that is proportional to the DO concentration.

**Procedure Outline:**

1.  **Calibration:** Calibrate the DO meter using a known standard (e.g., air-saturated water at a known temperature and pressure, or a zero-DO solution).
2.  **Temperature Compensation:** Most DO meters have a built-in temperature sensor and automatically compensate for temperature effects on oxygen solubility and sensor response.
3.  **Measurement:** Immerse the DO probe into the water sample, ensuring the membrane is submerged. Allow the reading to stabilize.
4.  **Record:** Record the DO concentration (usually in mg/L or % saturation) and the corresponding temperature.

**Advantages of DO Meter:**

*   **Rapid Measurement:** Provides quick results.
*   **Direct Reading:** No complex calculations or titrations required.
*   **Field Use:** Portable and suitable for in-situ measurements.

**Disadvantages of DO Meter:**

*   **Calibration Required:** Needs regular calibration for accuracy.
*   **Membrane Maintenance:** The membrane needs to be kept clean and may need replacement.
*   **Interference:** Certain substances can interfere with sensor readings.
*   **Temperature Dependence:** Accuracy is highly dependent on accurate temperature compensation.

**Important Points to Remember (DO Meter):**

*   **Proper Calibration:** Essential for accurate readings.
*   **Temperature Compensation:** Ensure the meter is properly compensating for temperature.
*   **Membrane Care:** Keep the membrane clean and intact.
*   **Avoid Air Bubbles:** Ensure the probe is fully submerged and free of air bubbles around the membrane.
*   **Stabilization:** Allow sufficient time for the reading to stabilize before recording.

### 4. Reporting Dissolved Oxygen Levels

DO is typically reported in two ways:

*   **Concentration (mg/L):** This is the direct measure of the mass of oxygen dissolved in a unit volume of water.
*   **Percent Saturation (% Saturation):** This expresses the DO concentration as a percentage of the maximum amount of oxygen that water can hold at a given temperature and atmospheric pressure.
    *   **Calculation:**
        *   $\text{% Saturation} = \frac{\text{Actual DO concentration (mg/L)}}{\text{DO saturation concentration (mg/L) at given T and P}} \times 100$
    *   DO saturation concentration tables are available for various temperatures and pressures.

### 5. Practice Questions & Exercises

**Question 1:**
A water sample was collected for DO determination. The Winkler method was used. The DO bottle had a volume of 300 mL. The titration required 4.5 mL of 0.025 N sodium thiosulfate solution. Calculate the dissolved oxygen concentration in mg/L.

**Answer 1:**
Using the formula:
$\text{DO (mg/L)} = \frac{(\text{Volume of } \text{Na}_2\text{S}_2\text{O}_3 \text{ used in mL}) \times (\text{Normality of } \text{Na}_2\text{S}_2\text{O}_3 \text{ N}) \times (\text{Equivalent weight of } \text{O}_2)}{\text{Volume of DO bottle in mL}}$
$\text{DO (mg/L)} = \frac{(4.5 \text{ mL}) \times (0.025 \text{ N}) \times (8 \text{ g/eq})}{300 \text{ mL}}$
$\text{DO (mg/L)} = \frac{0.9}{300} \times 1000$  (Multiplying by 1000 to convert mL to L)
$\text{DO (mg/L)} = 3 \text{ mg/L}$

**Question 2:**
List three factors that can cause a decrease in dissolved oxygen levels in a lake.

**Answer 2:**
1.  High temperature
2.  Decomposition of organic matter (e.g., due to sewage discharge)
3.  Increased respiration by aquatic organisms

**Question 3:**
Explain the role of starch indicator in the Winkler method.

**Answer 3:**
Starch indicator is used to visually detect the endpoint of the titration. It forms a deep blue complex with the liberated iodine. As sodium thiosulfate is added, it reacts with iodine, decolorizing the solution. When all the iodine has reacted, the blue color disappears, signaling the endpoint.

**Question 4:**
What is the relationship between water temperature and dissolved oxygen concentration?

**Answer 4:**
Dissolved oxygen solubility in water is inversely proportional to temperature. This means that colder water can hold more dissolved oxygen than warmer water.

**Question 5:**
A DO meter reads 7.5 mg/L at a temperature of 20°C. The saturation DO concentration at 20°C and standard atmospheric pressure is 9.09 mg/L. Calculate the percent saturation of DO.

**Answer 5:**
$\text{% Saturation} = \frac{\text{Actual DO concentration (mg/L)}}{\text{DO saturation concentration (mg/L) at given T and P}} \times 100$
$\text{% Saturation} = \frac{7.5 \text{ mg/L}}{9.09 \text{ mg/L}} \times 100$
$\text{% Saturation} \approx 82.5 \%$

---

### Summary of Learning Outcomes Covered:

*   **Understanding the significance of DO in aquatic environments:** Covered in the introduction, discussing its importance for aquatic life and as a water quality indicator.
*   **Identifying factors influencing DO levels:** Detailed in Section 2, covering photosynthesis, respiration, decomposition, aeration, temperature, salinity, atmospheric pressure, and turbidity.
*   **Explaining the principles and procedures of the Winkler method for DO determination:** Covered in Section 3.1, including key reagents, reactions, and procedural steps.
*   **Performing calculations to determine DO concentration from titration data:** Demonstrated in the practice questions and the formula provided.
*   **Describing the working principles of a DO meter:** Covered in Section 3.2, explaining the electrochemical basis of its operation.
*   **Understanding the advantages and limitations of different DO measurement methods:** Discussed in Sections 3.1 and 3.2.
*   **Reporting DO levels in appropriate units (mg/L and % saturation):** Explained in Section 4, including the calculation for percent saturation.

---

### **Important Points to Remember:**

*   **DO is vital for aquatic life.**
*   **Temperature significantly impacts DO solubility.**
*   **Winkler method is a chemical titration requiring careful technique to avoid errors.**
*   **DO meters offer speed and convenience but require accurate calibration.**
*   **Always collect DO samples to avoid aeration.**
*   **Report DO in both mg/L and % saturation for a complete picture.**
