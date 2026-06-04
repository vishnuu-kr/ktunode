---
title: "Determination of Chlorides"
subject: "ENVIRONMENTAL ENGINEERING LAB"
module: "Module 4: Determination of Chlorides"
branch: "Civil Engineering"
semester: 6
topicId: "689f15cf56b5e963ba8113da"
status: "completed"
scrapedAt: "2026-05-20T18:53:02.654Z"
---
# Environmental Engineering Lab: Module 4 - Determination of Chlorides

## 1. Introduction to Chlorides

Chlorides are ubiquitous in natural waters and can originate from various sources:

*   **Natural Sources:** Dissolution of minerals in rocks and soil (e.g., halite, rock salt).
*   **Anthropogenic Sources:**
    *   **Wastewater Discharges:** Domestic sewage (urine, feces), industrial effluents.
    *   **Agricultural Runoff:** Fertilizers, de-icing salts.
    *   **Saline Intrusion:** In coastal areas, saltwater can seep into freshwater aquifers.
    *   **Industrial Processes:** Chemical manufacturing, food processing.

**Importance of Chloride Determination:**

*   **Palatability:** High chloride concentrations can impart a salty taste to drinking water.
*   **Corrosion:** Chlorides can contribute to the corrosion of metal pipes and infrastructure.
*   **Ecological Impact:** Excessive chlorides can be toxic to aquatic life.
*   **Indicator of Pollution:** Elevated chloride levels can indicate the presence of sewage or industrial contamination.
*   **Process Control:** In water treatment, monitoring chloride levels is important for various processes.

## 2. Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Understand the principles of titrimetric methods for chloride determination.**
*   **Identify and explain the most common titrimetric methods used for chloride analysis (Mohr, Volhard, Fajans).**
*   **Perform laboratory experiments to determine chloride concentration in water samples using a chosen titrimetric method.**
*   **Calibrate the equipment and glassware used for titration.**
*   **Calculate the chloride concentration in a given water sample using experimental data and appropriate formulas.**
*   **Understand the sources and significance of chlorides in water and wastewater.**
*   **Recognize the limitations and potential interferences of different chloride determination methods.**

## 3. Principles of Chloride Determination (Titrimetric Methods)

The determination of chlorides typically involves **argentometric titration**, where chloride ions ($\text{Cl}^-$) react with silver ions ($\text{Ag}^+$) to form insoluble silver chloride ($\text{AgCl}$). The endpoint of the titration is detected using an indicator.

The fundamental reaction is:

$\text{Ag}^+ (\text{aq}) + \text{Cl}^- (\text{aq}) \rightarrow \text{AgCl} (\text{s})$

The key challenge in argentometric titrations is the accurate detection of the endpoint, as both $\text{AgCl}$ and other silver salts ($\text{Ag}_2\text{CrO}_4$, $\text{AgSCN}$) can precipitate. Different methods employ different indicators and conditions to achieve this.

## 4. Common Titrimetric Methods for Chloride Determination

### 4.1. Mohr Method

*   **Princ:** This method uses potassium chromate ($\text{K}_2\text{CrO}_4$) as an indicator. In neutral or slightly alkaline solution, chromate ions ($\text{CrO}_4^{2-}$) react with silver ions to form reddish-brown silver chromate ($\text{Ag}_2\text{CrO}_4$) precipitate **only after all chloride ions have been precipitated as $\text{AgCl}$**.

*   **Reaction:**
    *   Precipitation of $\text{AgCl}$: $\text{Ag}^+ (\text{aq}) + \text{Cl}^- (\text{aq}) \rightarrow \text{AgCl} (\text{s})$ (white precipitate)
    *   Endpoint reaction: $2\text{Ag}^+ (\text{aq}) + \text{CrO}_4^{2-} (\text{aq}) \rightarrow \text{Ag}_2\text{CrO}_4 (\text{s})$ (reddish-brown precipitate)

*   **Conditions:** The titration must be carried out in a **neutral or slightly alkaline solution** (pH 6.5-7.5). This is crucial because in acidic solutions, chromate is converted to dichromate ($\text{Cr}_2\text{O}_7^{2-}$), which is yellow and does not form a visible precipitate with silver. In strongly alkaline solutions, silver hydroxide ($\text{AgOH}$) can precipitate.

*   **Procedure:**
    1.  Take a known volume of water sample.
    2.  Add a few drops of potassium chromate indicator.
    3.  Titrate with a standardized silver nitrate ($\text{AgNO}_3$) solution.
    4.  The endpoint is reached when the first permanent reddish-brown color appears.

*   **Interferences:**
    *   **Bromides and Iodides:** These will precipitate as $\text{AgBr}$ and $\text{AgI}$ before $\text{AgCl}$, leading to overestimation of chlorides.
    *   **Sulfite ($\text{SO}_3^{2-}$), Thiosulfate ($\text{S}_2\text{O}_3^{2-}$), and Ferrous ions ($\text{Fe}^{2+}$):** These can react with $\text{AgNO}_3$ or affect the indicator, leading to inaccurate results. They need to be oxidized or removed beforehand.
    *   **Turbidity:** Suspended solids can mask the endpoint.

### 4.2. Volhard Method

*   **Princ:** This is a back-titration method. An excess of silver nitrate ($\text{AgNO}_3$) is added to the sample containing chlorides. The unreacted $\text{AgNO}_3$ is then titrated with a standardized potassium thiocyanate ($\text{KSCN}$) or ammonium thiocyanate ($\text{NH}_4\text{SCN}$) solution. Ferric ammonium sulfate ($\text{FeNH}_4(\text{SO}_4)_2$ or $\text{Fe}^{3+}$) is used as the indicator.

*   **Reaction:**
    *   Precipitation of $\text{AgCl}$: $\text{Ag}^+ (\text{aq}) + \text{Cl}^- (\text{aq}) \rightarrow \text{AgCl} (\text{s})$
    *   Endpoint reaction: $\text{Fe}^{3+} (\text{aq}) + \text{SCN}^- (\text{aq}) \rightarrow \text{Fe(SCN)} (\text{aq})^{2+}$ (blood-red complex)
        *   Note: This reaction occurs when the concentration of $\text{Ag}^+$ ions remaining in the solution is high enough to precipitate $\text{AgSCN}$ first. Once all $\text{Ag}^+$ is consumed by $\text{SCN}^-$, the $\text{SCN}^-$ then reacts with $\text{Fe}^{3+}$ to form the colored complex.

*   **Conditions:** The titration is performed in a **strongly acidic solution**. This prevents the precipitation of silver chromate (if chromate were present) and also keeps the ferric indicator in the $\text{Fe}^{3+}$ form.

*   **Procedure:**
    1.  Take a known volume of water sample.
    2.  Acidify the sample with nitric acid ($\text{HNO}_3$).
    3.  Add an excess amount of standardized $\text{AgNO}_3$ solution.
    4.  Allow the $\text{AgCl}$ precipitate to settle.
    5.  Add ferric ammonium sulfate indicator.
    6.  Titrate with standardized $\text{KSCN}$ or $\text{NH}_4\text{SCN}$ solution.
    7.  The endpoint is reached when the first permanent pale blood-red color appears.

*   **Interferences:**
    *   **Bromides and Iodides:** Similar to the Mohr method, these will react with $\text{AgNO}_3$ and lead to overestimation of chlorides.
    *   **Thiosulfates and Sulfites:** These must be removed as they react with $\text{Ag}^+$.
    *   **Color of the Sample:** If the sample is colored, it can mask the endpoint.
    *   **Ferric Ions:** High concentrations of $\text{Fe}^{3+}$ in the sample itself can interfere with the indicator.

### 4.3. Fajans Method

*   **Princ:** This method uses an **adsorption indicator**. These are organic dyes that adsorb onto the surface of a precipitate (like $\text{AgCl}$) at or near the equivalence point. The adsorption is dependent on the charge of the precipitate.
    *   Before the equivalence point: Excess $\text{Cl}^-$ in solution. The precipitate ($\text{AgCl}$) is negatively charged due to the adsorption of $\text{Cl}^-$.
    *   At the equivalence point: No excess $\text{Cl}^-$ or $\text{Ag}^+$.
    *   After the equivalence point: Excess $\text{Ag}^+$ in solution. The precipitate ($\text{AgCl}$) becomes positively charged due to the adsorption of $\text{Ag}^+$.

    Common adsorption indicators for chloride determination are **Eosin** or **Dichlorofluorescein**. Eosin is an anionic dye, while dichlorofluorescein is also anionic. These indicators adsorb to the positively charged $\text{AgCl}$ precipitate formed in the presence of excess $\text{Ag}^+$. The color change occurs due to the adsorption of the indicator anion to the positively charged colloidal $\text{AgCl}$ particles, forming a colored adsorption complex.

*   **Reaction (with Dichlorofluorescein):**
    *   Before endpoint: $\text{AgCl}/\text{Cl}^-$ (negative charge)
    *   After endpoint: $\text{AgCl}/\text{Ag}^+$ (positive charge)
    *   Endpoint indicator complex formation: $\text{AgCl}/\text{Ag}^+ - \text{Indicator}$ (e.g., adsorbed dichlorofluorescein)

*   **Conditions:** The titration is carried out in a **neutral solution**. The $\text{pH}$ is critical for the adsorption of the indicator. A slightly acidic $\text{pH}$ (around 4.5-5.5) is often maintained to prevent the precipitation of silver hydroxide.

*   **Procedure:**
    1.  Take a known volume of water sample.
    2.  Add a few drops of dichlorofluorescein or eosin indicator.
    3.  Titrate with standardized $\text{AgNO}_3$ solution.
    4.  The endpoint is indicated by a distinct color change (e.g., from pink to green or vice versa, depending on the indicator and its initial state).

*   **Interferences:**
    *   **Bromides and Iodides:** These precipitate more readily than chlorides. Bromides will adsorb the indicator first, leading to an overestimation of chlorides.
    *   **Color and Turbidity:** Can mask the endpoint.
    *   **pH:** Deviations from the optimal $\text{pH}$ can affect indicator behavior.
    *   **Protective Agents:** Substances that form protective colloids can prevent the adsorption of the indicator.

**Summary of Methods:**

| Method | Indicator                       | Titrant             | Conditions        | Advantages                                    | Disadvantages                                      |
| :----- | :------------------------------ | :------------------ | :---------------- | :-------------------------------------------- | :------------------------------------------------- |
| Mohr   | Potassium Chromate ($\text{K}_2\text{CrO}_4$) | $\text{AgNO}_3$     | Neutral/Slightly alkaline | Simple, direct titration                      | Sensitive to $\text{pH}$, interferences from other halides |
| Volhard| Ferric Ammonium Sulfate ($\text{Fe}^{3+}$) | $\text{KSCN}$ / $\text{NH}_4\text{SCN}$ | Strongly acidic   | Less sensitive to other halides, can analyze in colored/turbid solutions | Back-titration, requires $\text{HNO}_3$          |
| Fajans | Dichlorofluorescein/Eosin       | $\text{AgNO}_3$     | Neutral           | Sharp endpoint, less sensitive to turbidity   | Sensitive to $\text{pH}$, interferences from other halides |

**Choice of Method:** The Mohr method is suitable for relatively pure water with low concentrations of interfering ions. The Volhard method is preferred for samples with higher chloride concentrations or when other halides might be present, as the acidic condition helps differentiate. The Fajans method offers a sharp endpoint but requires careful $\text{pH}$ control.

## 5. Laboratory Procedure (General Steps - Example using Mohr Method)

**Objective:** To determine the concentration of chloride in a given water sample using the Mohr method.

**Materials and Reagents:**

*   Water sample
*   Standardized Silver Nitrate ($\text{AgNO}_3$) solution (e.g., 0.1 N)
*   Potassium Chromate ($\text{K}_2\text{CrO}_4$) indicator solution
*   Distilled water
*   Beakers
*   Erlenmeyer flasks
*   Burette
*   Pipette
*   Volumetric flask
*   Conical flask

**Procedure:**

1.  **Preparation of Standard $\text{AgNO}_3$ Solution:** If not already standardized, prepare and standardize the $\text{AgNO}_3$ solution. This is crucial for accurate results.
2.  **Sample Preparation:**
    *   Take a precisely measured volume (e.g., 50 mL) of the water sample using a pipette and transfer it into a clean conical flask.
    *   If the sample is acidic, neutralize it by adding a dilute solution of sodium carbonate ($\text{Na}_2\text{CO}_3$) or sodium hydroxide ($\text{NaOH}$) until a faint pink color appears with phenolphthalein indicator. Then, add a few drops of dilute nitric acid ($\text{HNO}_3$) until the pink color just disappears. This ensures the $\text{pH}$ is around 6.5-7.0.
    *   If the sample is alkaline, neutralize it with dilute nitric acid ($\text{HNO}_3$) until the $\text{pH}$ is around 6.5-7.0.
3.  **Adding Indicator:** Add 1-2 mL of potassium chromate indicator solution to the conical flask. The solution should turn yellow.
4.  **Titration:**
    *   Fill the burette with the standardized $\text{AgNO}_3$ solution. Record the initial burette reading.
    *   Slowly titrate the sample, swirling the flask continuously.
    *   As titration proceeds, a white precipitate of $\text{AgCl}$ will form.
    *   As the endpoint approaches, the yellow color of the indicator will become more pronounced.
    *   The endpoint is reached when the addition of a single drop of $\text{AgNO}_3$ solution causes the entire solution to turn a faint but persistent reddish-brown color. This color should persist for at least 30 seconds.
    *   Record the final burette reading.
5.  **Blank Titration (Optional but Recommended):** Perform a blank titration using distilled water (to account for any impurities in reagents) treated exactly as the sample.
6.  **Repeat Titrations:** Repeat the titration at least twice more for accuracy and consistency. The results should be within $\pm 0.1$ mL of each other.

## 6. Calculations

**1. Normality of $\text{AgNO}_3$ Solution (if not given):**
$N_1V_1 = N_2V_2$
Where:
$N_1$ = Normality of standard $\text{AgNO}_3$
$V_1$ = Volume of standard $\text{AgNO}_3$ used in standardization
$N_2$ = Normality of standard $\text{NaCl}$ (or other known chloride source)
$V_2$ = Volume of standard $\text{NaCl}$ used in standardization

**2. Chloride Concentration Calculation (Mohr Method):**

**Volume of $\text{AgNO}_3$ used for sample = Final burette reading - Initial burette reading**

**Volume of $\text{AgNO}_3$ for blank (if performed) = Final burette reading - Initial burette reading**

**Net volume of $\text{AgNO}_3$ used = Volume of $\text{AgNO}_3$ for sample - Volume of $\text{AgNO}_3$ for blank**

The reaction between $\text{AgNO}_3$ and $\text{Cl}^-$ is 1:1 equivalent.

$N_{\text{AgNO}_3} \times V_{\text{AgNO}_3} = N_{\text{Cl}^-} \times V_{\text{sample}}$

Where:
$N_{\text{AgNO}_3}$ = Normality of $\text{AgNO}_3$ solution
$V_{\text{AgNO}_3}$ = Net volume of $\text{AgNO}_3$ used (in mL)
$N_{\text{Cl}^-}$ = Normality of chloride in the sample
$V_{\text{sample}}$ = Volume of the water sample taken (in mL)

**Calculating Normality of Chloride:**

$N_{\text{Cl}^-} = \frac{N_{\text{AgNO}_3} \times V_{\text{AgNO}_3}}{V_{\text{sample}}}$

**Converting Normality to Concentration (mg/L or ppm):**

*   **Molar Mass of Chloride (Cl) = 35.45 g/mol**
*   **Equivalent Weight of Chloride = Molar Mass / Valency = 35.45 / 1 = 35.45 g/equivalent**

**Concentration of Chloride (mg/L or ppm) = $N_{\text{Cl}^-} \times \text{Equivalent Weight of Chloride} \times 1000$**

**Concentration of Chloride (mg/L) = $N_{\text{Cl}^-} \times 35.45 \times 1000$**

Alternatively, if using ppm/mg/L directly:

**mg/L $\text{Cl}^-$ = $\frac{(V_{\text{AgNO}_3} \times N_{\text{AgNO}_3} \times 35.45 \times 1000) \text{ (for sample - blank)}}{V_{\text{sample}}}$**

**Units:**
*   $N$ = equivalents/Liter
*   $V$ = Liters (or mL, if consistently used)
*   35.45 = mg/meq of Chloride

**Example Calculation:**

Suppose:
*   Volume of water sample taken ($V_{\text{sample}}$) = 50 mL
*   Normality of $\text{AgNO}_3$ solution ($N_{\text{AgNO}_3}$) = 0.05 N
*   Volume of $\text{AgNO}_3$ used in titration ($V_{\text{AgNO}_3}$) = 15.2 mL
*   Volume of $\text{AgNO}_3$ used in blank titration = 0.2 mL

Net volume of $\text{AgNO}_3$ used = 15.2 mL - 0.2 mL = 15.0 mL

**Calculation of Chloride Concentration:**

mg/L $\text{Cl}^-$ = $\frac{(15.0 \text{ mL} \times 0.05 \text{ eq/L} \times 35.45 \text{ mg/meq} \times 1000 \text{ mL/L})}{50 \text{ mL}}$
mg/L $\text{Cl}^-$ = $\frac{(15.0 \times 0.05 \times 35.45 \times 1000)}{50}$
mg/L $\text{Cl}^-$ = $\frac{26587.5}{50}$
**mg/L $\text{Cl}^-$ = 531.75 ppm**

## 7. Calibration of Equipment and Glassware

*   **Pipettes and Burettes:** These must be calibrated to ensure accurate volume measurements. This typically involves weighing the volume of distilled water delivered or held by the glassware and comparing it to the theoretical weight based on density. Calibration is usually done by the manufacturer or a specialized laboratory.
*   **Standardization of Reagents:**
    *   **Silver Nitrate ($\text{AgNO}_3$) Solution:** This is the most critical standardization. It is usually standardized against a known concentration of sodium chloride ($\text{NaCl}$) or by using a primary standard like pure $\text{NaCl}$.
    *   **Potassium Thiocyanate ($\text{KSCN}$) Solution (for Volhard):** Standardized against standardized $\text{AgNO}_3$ solution.

## 8. Important Points to Remember

*   **$\text{pH}$ Control:** The $\text{pH}$ is critical for the Mohr and Fajans methods. Ensure it is within the recommended range to avoid inaccurate results.
*   **Indicator Selection:** Choose the correct indicator for the chosen method.
*   **Endpoint Observation:** Observe the endpoint carefully. Over-titration will lead to falsely high results.
*   **Standardization:** Always use standardized reagents, especially $\text{AgNO}_3$.
*   **Blank Correction:** Perform a blank titration to account for impurities in reagents and glassware.
*   **Interferences:** Be aware of potential interferences and take appropriate measures to mitigate them (e.g., masking, removal).
*   **Sample Dilution:** If the chloride concentration is very high, the sample may need to be diluted to ensure the titration is within the burette's capacity and to maintain accuracy.
*   **Freshly Prepared Indicators:** Use freshly prepared or properly stored indicators for best results.

## 9. Practice Questions and Exercises

**Question 1:**
Which of the following is the indicator used in the Mohr method for chloride determination?
(a) Ferric ammonium sulfate
(b) Potassium chromate
(c) Dichlorofluorescein
(d) Phenolphthalein

**Answer:** (b) Potassium chromate

**Question 2:**
In the Volhard method, what is the primary function of nitric acid?
(a) To precipitate silver chloride
(b) To provide a neutral medium for titration
(c) To prevent the precipitation of silver chromate and keep the ferric indicator in the $\text{Fe}^{3+}$ form
(d) To act as an oxidizing agent for interferences

**Answer:** (c) To prevent the precipitation of silver chromate and keep the ferric indicator in the $\text{Fe}^{3+}$ form

**Question 3:**
A water sample of 100 mL was titrated for chloride content using the Mohr method. The titration required 12.5 mL of 0.05 N $\text{AgNO}_3$. Calculate the chloride concentration in ppm. (Assume no blank correction needed for simplicity).

**Calculation:**
Normality of $\text{AgNO}_3$ ($N_{\text{AgNO}_3}$) = 0.05 N
Volume of $\text{AgNO}_3$ used ($V_{\text{AgNO}_3}$) = 12.5 mL
Volume of sample ($V_{\text{sample}}$) = 100 mL
Equivalent Weight of Chloride = 35.45 mg/meq

Concentration of Chloride (mg/L) = $\frac{(V_{\text{AgNO}_3} \times N_{\text{AgNO}_3} \times 35.45 \times 1000)}{V_{\text{sample}}}$
Concentration of Chloride (mg/L) = $\frac{(12.5 \text{ mL} \times 0.05 \text{ eq/L} \times 35.45 \text{ mg/meq} \times 1000 \text{ mL/L})}{100 \text{ mL}}$
Concentration of Chloride (mg/L) = $\frac{(12.5 \times 0.05 \times 35.45 \times 1000)}{100}$
Concentration of Chloride (mg/L) = $\frac{22156.25}{100}$
**Concentration of Chloride (mg/L) = 221.56 ppm**

**Question 4:**
Explain why bromides and iodides are considered interferences in chloride determination by argentometric titration.

**Answer:** Bromides and iodides precipitate as silver bromide ($\text{AgBr}$) and silver iodide ($\text{AgI}$), respectively, at lower concentrations of silver ions than silver chloride ($\text{AgCl}$) due to their lower solubility products ($\text{Ksp}$). This means they will react with the titrant ($\text{AgNO}_3$) before all the chlorides have precipitated, leading to an overestimation of the chloride concentration.

**Question 5:**
Describe the visual endpoint detection in the Fajans method using dichlorofluorescein.

**Answer:** In the Fajans method with dichlorofluorescein, the solution is titrated with $\text{AgNO}_3$. Before the equivalence point, there is an excess of $\text{Cl}^-$ ions, making the $\text{AgCl}$ precipitate negatively charged. Dichlorofluorescein, an anionic dye, is repelled. After the equivalence point, there is an excess of $\text{Ag}^+$ ions, making the $\text{AgCl}$ precipitate positively charged. The dichlorofluorescein anions are then adsorbed onto the precipitate, forming a colored adsorption complex. The endpoint is marked by a distinct color change, often from a pale pink or colorless in the neutral solution to a distinct pink or violet color as the indicator is adsorbed onto the positively charged precipitate.

---
