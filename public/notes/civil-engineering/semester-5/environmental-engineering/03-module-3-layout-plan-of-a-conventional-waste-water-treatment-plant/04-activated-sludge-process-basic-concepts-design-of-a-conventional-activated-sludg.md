---
title: "Activated sludge process- basic concepts-design of a conventional Activated Sludge Plant."
subject: "ENVIRONMENTAL ENGINEERING"
module: "Module 3: Layout plan of a conventional waste water treatment plant"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e0b"
status: "completed"
scrapedAt: "2026-05-20T18:48:19.068Z"
---
# Environmental Engineering: Module 3 - Layout Plan of a Conventional Wastewater Treatment Plant

## Topic: Activated Sludge Process - Basic Concepts & Design of a Conventional Activated Sludge Plant

---

### Learning Outcomes Covered:

*   **Understanding the basic principles of the Activated Sludge Process (ASP):** How it works to remove organic pollutants.
*   **Familiarity with the key components of a conventional ASP:** Identifying the purpose of each unit.
*   **Knowledge of the design parameters for a conventional ASP:** Understanding the factors considered during design.
*   **Ability to perform basic calculations for ASP design:** Applying principles to determine the size of key components.

---

### 1. Introduction to the Activated Sludge Process (ASP)

The Activated Sludge Process is a biological wastewater treatment method that uses aerobic microorganisms to remove dissolved and colloidal organic matter from wastewater. It is a widely used and effective process for secondary treatment.

*   **Core Principle:** Wastewater is mixed with a suspension of microorganisms (activated sludge) in an aeration tank. Oxygen is supplied to promote the growth and activity of these microorganisms, which then consume the organic pollutants in the wastewater as their food source. The mixture is then sent to a clarifier where the activated sludge settles out, and the treated wastewater is discharged. A portion of the settled sludge is returned to the aeration tank to maintain a high concentration of active microorganisms.

*   **Key Players:**
    *   **Microorganisms:** Primarily bacteria, but also protozoa, rotifers, and nematodes. They form flocs (clumps) which are essential for efficient settling.
    *   **Activated Sludge:** The biomass (microorganisms) that has been cultivated in the aeration tank and is returned to the influent wastewater. It's "activated" because it's actively growing and metabolizing pollutants.
    *   **Oxygen:** Essential for aerobic respiration of the microorganisms.

---

### 2. Basic Concepts of the Activated Sludge Process

#### 2.1 Aerobic Biological Treatment

*   **Definition:** The breakdown of organic matter in the presence of oxygen by microorganisms.
*   **Biochemical Reaction (Simplified):**
    Organic Matter + O₂ → CO₂ + H₂O + New Biomass + Energy
*   **Goal:** To convert soluble and colloidal organic pollutants (measured as BOD - Biochemical Oxygen Demand) into more stable forms like carbon dioxide, water, and new microbial cells.

#### 2.2 Sludge Settling and Solids Separation

*   **Importance:** For the process to be effective, the microbial flocs must be able to settle out of the treated water in the secondary clarifier. This allows for the separation of treated effluent from the microbial biomass.
*   **Factors Affecting Settling:**
    *   **Flocculation:** The aggregation of dispersed microbial cells into larger, settleable flocs. This is influenced by the presence of certain protozoa and extracellular polymeric substances produced by bacteria.
    *   **Sludge Age (Solids Retention Time - SRT):** The average time that solids (microorganisms) remain in the system. A higher sludge age generally leads to better settling due to the dominance of more mature, settled flocs.
    *   **Mixed Liquor Suspended Solids (MLSS) Concentration:** The concentration of suspended solids in the mixed liquor (wastewater + activated sludge) in the aeration tank. Higher MLSS can improve settling but may require more aeration.
    *   **Food-to-Microorganism Ratio (F/M Ratio):** The amount of organic food (BOD) available per unit of microorganism (MLSS). A balanced F/M ratio is crucial.

#### 2.3 Solids Retention Time (SRT) or Sludge Age ($\theta_c$)

*   **Definition:** The average time that biomass remains in the system. It is a critical design and operational parameter.
*   **Formula:**
    $\theta_c = \frac{\text{Total Mass of Biomass in the System (kg TSS)}}{\text{Mass of Biomass Wasted per day (kg TSS/day)}}$
    Where TSS = Total Suspended Solids.
*   **Significance:**
    *   **Low SRT (e.g., 2-5 days):** Favors the growth of rapidly growing bacteria, leading to a higher F/M ratio. Can result in bulking sludge (poor settling).
    *   **High SRT (e.g., 10-20 days):** Favors the growth of slower-growing organisms, including nitrifying bacteria. Leads to more complete oxidation of organic matter and often better settling. Crucial for nitrification.

#### 2.4 Food-to-Microorganism Ratio (F/M)

*   **Definition:** The ratio of the amount of biodegradable organic matter (BOD) entering the aeration tank per day to the mass of active microorganisms (MLSS) in the aeration tank.
*   **Formula:**
    $F/M = \frac{Q \times S_0}{V \times X}$
    Where:
    *   $Q$ = Influent flow rate ($m^3$/day)
    *   $S_0$ = Influent BOD concentration ($mg/L$ or $g/m^3$)
    *   $V$ = Aeration tank volume ($m^3$)
    *   $X$ = MLSS concentration in the aeration tank ($mg/L$ or $g/m^3$)
*   **Significance:**
    *   **High F/M (e.g., > 0.5):** Organic matter is abundant relative to microorganisms. Bacteria grow rapidly, high oxygen demand, potential for incomplete treatment, can lead to floc formation issues.
    *   **Low F/M (e.g., < 0.1):** Microorganisms are abundant relative to organic matter. Slower growth, more complete substrate removal, generally good settling.
    *   **Typical Range:** 0.2 - 0.4 $kg$ BOD/kg MLSS.day

#### 2.5 Mixed Liquor Suspended Solids (MLSS)

*   **Definition:** The concentration of suspended solids (primarily biomass) in the mixed liquor within the aeration tank.
*   **Significance:** Represents the density of the microbial population. Higher MLSS can lead to higher treatment rates but also requires more aeration and can impact settling if not managed.
*   **Typical Range:** 2,000 - 5,000 $mg/L$, but can be higher in advanced designs.

#### 2.6 Mixed Liquor Volatile Suspended Solids (MLVSS)

*   **Definition:** The volatile portion of MLSS, which is primarily the organic biomass.
*   **Significance:** MLVSS is a better indicator of the active microbial mass than total MLSS, as it excludes inert suspended solids.
*   **Typical Ratio:** MLVSS is usually 70-85% of MLSS.

#### 2.7 Return Activated Sludge (RAS) and Waste Activated Sludge (WAS)

*   **Return Activated Sludge (RAS):** The settled sludge from the secondary clarifier that is returned to the aeration tank.
    *   **Purpose:** To maintain a high concentration of active biomass in the aeration tank and to seed the incoming wastewater with microorganisms.
    *   **Flow Rate:** Typically 50-150% of the average daily influent flow rate.
*   **Waste Activated Sludge (WAS):** The excess sludge that is removed from the system to maintain the desired SRT.
    *   **Purpose:** To prevent the accumulation of too much biomass, which can lead to poor settling and inefficient treatment.
    *   **Flow Rate:** Determined by the sludge production rate and the desired SRT.

---

### 3. Components of a Conventional Activated Sludge Plant

A conventional ASP typically consists of the following main units:

#### 3.1 Preliminary Treatment (Pre-treatment)

*   **Purpose:** To remove large debris and grit that could damage equipment or interfere with downstream processes.
*   **Units:**
    *   **Screening:** Removal of rags, sticks, and other large solids (e.g., bar screens, fine screens).
    *   **Grit Removal:** Removal of sand, gravel, and other heavy inorganic solids (e.g., grit chambers).

#### 3.2 Primary Treatment (Optional but Common)

*   **Purpose:** To remove a portion of suspended solids and floating materials through sedimentation.
*   **Unit:**
    *   **Primary Clarifier:** A large tank where wastewater flows slowly, allowing heavier solids to settle to the bottom (primary sludge) and lighter materials to float to the surface (scum).
*   **Note:** In some conventional ASP designs, primary treatment might be omitted, leading to a "pre-aeration" process or direct biological treatment of raw wastewater. However, primary treatment improves the efficiency and stability of the ASP by reducing the organic load.

#### 3.3 Aeration Tank

*   **Purpose:** The core of the ASP where biological treatment occurs. Wastewater is mixed with activated sludge and aerated.
*   **Key Design Considerations:**
    *   **Aeration Method:**
        *   **Diffused Aeration:** Air is blown through diffusers at the bottom of the tank.
        *   **Mechanical Aeration:** Surface aerators (e.g., rotors, brushes) mix air into the wastewater.
    *   **Tank Configuration:**
        *   **Plug Flow:** Wastewater flows in a single direction through the tank. BOD is high at the inlet and decreases along the length.
        *   **Completely Mixed:** Wastewater is mixed thoroughly so that the concentration of MLSS and BOD is uniform throughout the tank. This provides better process stability.
        *   **Step Aeration:** Influent is introduced at multiple points along the tank to manage high BOD at the inlet.
        *   **Contact Stabilization:** The tank is divided into two zones: an aeration zone for BOD removal and a contact zone for sludge stabilization.
    *   **Hydraulic Retention Time (HRT):** The average time wastewater stays in the aeration tank.
    *   **Solids Retention Time (SRT):** As discussed earlier, crucial for biomass age and nitrification.
    *   **Oxygen Transfer Rate (OTR):** The amount of oxygen that can be transferred from the air to the mixed liquor. This needs to be sufficient to meet the oxygen demand of the microorganisms.
    *   **Mixed Liquor Dissolved Oxygen (MLDO):** The concentration of dissolved oxygen in the mixed liquor, typically maintained at 1-2 $mg/L$ or higher.

#### 3.4 Secondary Clarifier

*   **Purpose:** To separate the settled activated sludge from the treated wastewater (effluent).
*   **Key Design Considerations:**
    *   **Surface Overflow Rate (SOR):** The rate at which wastewater flows over the surface of the clarifier.
    *   **Hydraulic Loading Rate (HLR):** The flow rate per unit of surface area of the clarifier.
    *   **Sludge Blanket Depth:** The depth of settled sludge at the bottom of the clarifier.
    *   **Sludge Settling Velocity:** How fast the activated sludge settles.

#### 3.5 Sludge Handling and Disposal

*   **Purpose:** To process and dispose of the excess sludge (WAS) and primary sludge (if applicable) generated by the plant.
*   **Units (Typical):**
    *   **Thickening:** Reducing the volume of sludge by removing water (e.g., gravity thickeners, dissolved air flotation thickeners).
    *   **Dewatering:** Further reducing water content to produce a drier sludge cake (e.g., belt filter presses, centrifuges, drying beds).
    *   **Disposal:** Landfilling, incineration, land application, etc.

---

### 4. Design of a Conventional Activated Sludge Plant

The design process involves determining the size and capacity of each unit based on the wastewater characteristics and desired effluent quality.

#### 4.1 Design Parameters

*   **Influent Wastewater Characteristics:**
    *   Average and peak daily flow rates ($Q_{avg}$, $Q_{peak}$) ($m^3$/day or L/s)
    *   Influent BOD concentration ($S_0$) ($mg/L$)
    *   Influent Suspended Solids (TSS) concentration ($mg/L$)
    *   Temperature ($T$) ($^\circ C$)
    *   pH
    *   Presence of toxic substances
*   **Effluent Requirements:**
    *   Effluent BOD ($S$) ($mg/L$)
    *   Effluent TSS ($mg/L$)
    *   Ammonia-Nitrogen ($NH_3-N$) ($mg/L$) - if nitrification is required.
*   **Process Design Parameters:**
    *   Sludge Age ($\theta_c$) (days)
    *   F/M Ratio ($kg$ BOD/$kg$ MLSS.day)
    *   MLSS concentration ($X$) ($mg/L$)
    *   Temperature ($T$) ($^\circ C$)

#### 4.2 Design Calculations

**Step 1: Determine Design Flow and Load**

*   Use average daily flow ($Q_{avg}$) for most calculations, but consider peak flow ($Q_{peak}$) for hydraulic design of tanks and pipelines to prevent overflows.
*   Calculate daily BOD load: $L_0 = Q_{avg} \times S_0$ (kg BOD/day).

**Step 2: Select Design Parameters**

*   Based on effluent requirements (especially nitrification) and operational experience, select appropriate values for $\theta_c$, F/M, $X$, and $T$.
    *   For BOD removal only: $\theta_c$ typically 5-10 days.
    *   For nitrification: $\theta_c$ typically 10-20 days.
    *   F/M: 0.2-0.4
    *   MLSS ($X$): 2,000-5,000 $mg/L$
    *   Temperature: Use the minimum expected temperature for design (affects reaction rates).

**Step 3: Design the Aeration Tank**

*   **Calculate Aeration Tank Volume (V):**
    *   **Method 1: Using F/M Ratio:**
        $V = \frac{Q_{avg} \times S_0}{F/M \times X}$
        *   Ensure units are consistent. For example, if $Q_{avg}$ is $m^3$/day, $S_0$ is $mg/L$, $X$ is $mg/L$, then:
            $V (m^3) = \frac{Q_{avg} (m^3/day) \times S_0 (g/m^3)}{F/M (kg BOD/kg MLSS.day) \times X (g/m^3) \times 1000 (g/kg)}$
            *   Let's use more practical units:
                $V (m^3) = \frac{Q_{avg} (m^3/day) \times S_0 (mg/L)}{F/M (kg BOD/kg MLSS.day) \times X (mg/L) \times 1000 (mg/g) \times 10^{-6} (g/mg)}$
                *   A simpler way to think about it:
                    $V (m^3) = \frac{\text{Daily BOD Load (kg/day)}}{\text{F/M Ratio (kg BOD/kg MLSS.day)} \times \text{MLSS (kg MLSS/m}^3\text{) }}$
                    Where MLSS (kg MLSS/m$^3$) = $X (mg/L) \times 10^{-3} (kg/mg)$
                    So, $V (m^3) = \frac{L_0 (\text{kg BOD/day})}{F/M (\text{kg BOD/kg MLSS.day}) \times (X (\text{mg/L}) / 1000) (\text{kg MLSS/m}^3\text{)}}$
    *   **Method 2: Using Sludge Age ($\theta_c$) and Sludge Production:**
        *   Calculate the mass of sludge produced per day ($P_X$). This depends on the yield coefficient ($Y$) and the BOD removed.
        *   $P_X = Y \times (Q_{avg} \times S_0 - Q_{avg} \times S)$ (kg VSS/day)
        *   $V = \frac{\theta_c \times P_X}{X_{VSS}}$
            Where $X_{VSS}$ is the MLVSS concentration, typically 0.7-0.85 $X$.
*   **Calculate Hydraulic Retention Time (HRT):**
    $HRT = \frac{V}{Q_{avg}}$ (days or hours)
*   **Determine Aeration Tank Dimensions:** Based on volume, choose length, width, and depth. Depth is often around 3-5 meters.
*   **Determine Aeration Requirements:** Calculate the oxygen required based on the BOD load and the oxygen transfer efficiency of the aeration system.

**Step 4: Design the Secondary Clarifier**

*   **Calculate Surface Area:**
    *   Based on the **Surface Overflow Rate (SOR)**, a key parameter that governs the settling of solids.
    *   $A_{clarifier} = \frac{Q_{avg}}{SOR}$
    *   Typical SOR values for conventional ASP: 20-40 $m^3/m^2$.day (or $m$/day).
*   **Calculate Sludge Return Rate (RAS):**
    *   $Q_{RAS} = R \times Q_{avg}$
    *   Where $R$ is the return sludge ratio (e.g., 0.75 for 75%).
    *   The concentration of MLSS in the aeration tank is related to the RAS flow:
        $X = \frac{MLSS_{clarifier\_bottom} \times Q_{RAS}}{Q_{influent} + Q_{RAS}}$
        Where $MLSS_{clarifier\_bottom}$ is the concentration in the settled sludge at the bottom of the clarifier (higher than MLSS in the aeration tank).
*   **Determine Clarifier Depth:** Based on sludge settling velocity and sludge blanket management. A typical depth is 3-5 meters.

**Step 5: Calculate Sludge Production and Waste Rate**

*   **Calculate Daily Sludge Production ($P_X$):**
    $P_X = Q_{avg} \times (X - X_e) + Q_{RAS} \times X_{RAS} - Q_{RAS} \times X_e$
    (More simplified: $P_X = Y \times Q_{avg} \times S_0 \times (1 - Y \times \frac{S}{S_0})$ - This is a more complex kinetic model)
    *   A simplified estimation: $P_X \approx Y \times L_0$ (kg TSS/day), where $Y$ is the yield coefficient (0.4-0.6 kg VSS/kg BOD removed).
*   **Calculate Waste Activated Sludge Flow Rate ($Q_{WAS}$):**
    $Q_{WAS} = \frac{P_X}{X_{WAS}}$
    Where $X_{WAS}$ is the MLSS concentration in the waste sludge stream (usually after thickening).

#### 4.3 Example Design Calculation

**Problem:** Design a conventional activated sludge plant for a wastewater flow of 10,000 $m^3$/day with an influent BOD of 250 $mg/L$. The desired effluent BOD is 15 $mg/L$. Assume an F/M ratio of 0.3 $kg$ BOD/kg MLSS.day and an MLSS concentration of 3000 $mg/L$.

**Solution:**

1.  **Influent Characteristics:**
    *   $Q_{avg} = 10,000$ $m^3$/day
    *   $S_0 = 250$ $mg/L$
    *   Daily BOD Load ($L_0$) = $10,000$ $m^3$/day $\times 250$ $mg/L \times (10^{-3} kg/mg) \times (10^{-3} m^3/L) = 2500$ kg BOD/day

2.  **Aeration Tank Volume (V):**
    *   Using the formula:
        $V (m^3) = \frac{L_0 (\text{kg BOD/day})}{F/M (\text{kg BOD/kg MLSS.day}) \times (X (\text{mg/L}) / 1000) (\text{kg MLSS/m}^3\text{)}}$
        $V = \frac{2500 \text{ kg BOD/day}}{0.3 \text{ kg BOD/kg MLSS.day} \times (3000 \text{ mg/L} / 1000) \text{ kg MLSS/m}^3}$
        $V = \frac{2500}{0.3 \times 3} = \frac{2500}{0.9} \approx 2778$ $m^3$

3.  **Hydraulic Retention Time (HRT):**
    *   $HRT = \frac{V}{Q_{avg}} = \frac{2778 m^3}{10000 m^3/day} \approx 0.278$ days
    *   $HRT = 0.278 \text{ days} \times 24 \text{ hours/day} \approx 6.7$ hours

4.  **Secondary Clarifier Surface Area:**
    *   Assume a Surface Overflow Rate (SOR) of 30 $m^3/m^2$.day
    *   $A_{clarifier} = \frac{Q_{avg}}{SOR} = \frac{10000 m^3/day}{30 m^3/m^2.day} \approx 333.3$ $m^2$
    *   If the clarifier is circular, diameter $D = \sqrt{\frac{4 \times A}{\pi}} = \sqrt{\frac{4 \times 333.3}{\pi}} \approx 20.6$ meters.
    *   If it's rectangular, dimensions would be chosen to achieve this area (e.g., 10m x 33.3m).

5.  **Sludge Production (Simplified Estimation):**
    *   Assume yield coefficient $Y = 0.5$ kg VSS/kg BOD removed.
    *   BOD removed = $S_0 - S = 250 - 15 = 235$ $mg/L$
    *   Daily BOD removed = $10,000$ $m^3$/day $\times 235$ $mg/L \times 10^{-6}$ = $2.35$ $kg$ BOD/day.  *Correction: BOD load is 2500 kg/day. Let's use the load for calculation.*
    *   Daily sludge production ($P_X$) $\approx Y \times L_0 = 0.5$ kg VSS/kg BOD $\times 2500$ kg BOD/day = 1250 kg VSS/day.
    *   Assume MLVSS = 80% of MLSS, so $X_{VSS} = 0.8 \times 3000$ $mg/L = 2400$ $mg/L = 2.4$ kg VSS/m$^3$.
    *   The sludge removed from the clarifier has a higher concentration, let's assume the waste sludge concentration $X_{WAS}$ for simplicity is the same as MLSS for now, which is a simplification. For WAS, we typically consider thickening, so $X_{WAS}$ would be much higher. If we are to calculate the flow of WAS from the process for sludge management, we'd need to assume a concentration for WAS. Let's assume WAS is drawn off at a concentration of 15,000 mg/L (after thickening).
    *   $Q_{WAS} = \frac{P_X}{X_{WAS}} = \frac{1250 \text{ kg VSS/day}}{15000 \text{ mg/L} \times 10^{-3} \text{ kg/mg}} = \frac{1250}{15} \approx 83.3$ $m^3$/day.

---

### 5. Practice Questions and Exercises

**Question 1:** Define "Activated Sludge" and explain its role in the Activated Sludge Process.

**Answer:** Activated sludge is the biologically active flocculent mass of microorganisms (primarily bacteria, protozoa, etc.) that is cultivated in the aeration tank. Its role is to consume and remove dissolved and colloidal organic pollutants from the wastewater by metabolizing them as a food source in the presence of oxygen.

**Question 2:** What is Sludge Age ($\theta_c$), and why is it important for nitrification?

**Answer:** Sludge age ($\theta_c$) is the average time that solids (biomass) remain in the treatment system. It's important for nitrification because nitrifying bacteria (like *Nitrosomonas* and *Nitrobacter*) are slow-growing compared to heterotrophic BOD-removing bacteria. A higher sludge age (typically 10-20 days) is required to ensure these nitrifying bacteria are retained in the system long enough to effectively convert ammonia to nitrates.

**Question 3:** Calculate the required volume of an aeration tank for a plant treating 5,000 $m^3$/day of wastewater with an influent BOD of 300 $mg/L$. The design F/M ratio is 0.25 $kg$ BOD/kg MLSS.day, and the target MLSS concentration is 3,500 $mg/L$.

**Answer:**
1.  **Daily BOD Load ($L_0$)**: $5,000 m^3/day \times 300 mg/L \times 10^{-6} kg/mg = 1500$ kg BOD/day
2.  **MLSS in kg/m³**: $3500 mg/L \times 10^{-3} kg/mg = 3.5$ kg MLSS/m³
3.  **Aeration Tank Volume (V)**:
    $V = \frac{L_0}{F/M \times X} = \frac{1500 \text{ kg BOD/day}}{0.25 \text{ kg BOD/kg MLSS.day} \times 3.5 \text{ kg MLSS/m}^3} = \frac{1500}{0.875} \approx 1714$ $m^3$

**Question 4:** What is the primary function of the secondary clarifier in an ASP?

**Answer:** The primary function of the secondary clarifier is to separate the settled activated sludge from the treated wastewater (effluent) through sedimentation. This allows for the discharge of clarified effluent and the return of a portion of the settled sludge to the aeration tank.

---

### 6. Important Points to Remember

*   The Activated Sludge Process relies on **aerobic microorganisms** to break down organic matter.
*   **Oxygen** is crucial for the process.
*   **Sludge age ($\theta_c$)** is a critical design and operational parameter, especially for nitrification.
*   The **F/M ratio** dictates the rate of substrate removal relative to biomass growth.
*   The **secondary clarifier**'s efficiency depends on the settling characteristics of the activated sludge and is governed by the Surface Overflow Rate (SOR).
*   **Return Activated Sludge (RAS)** is essential for maintaining the microbial population in the aeration tank.
*   **Waste Activated Sludge (WAS)** removal is necessary to control the sludge age and prevent system overloading.
*   **Preliminary and primary treatments** are important for protecting downstream biological processes and improving overall plant performance.
*   Design calculations require careful attention to **units** to ensure accuracy.
*   **Peak flows** must be considered for hydraulic design, while **average flows** are used for most process calculations.

---

This comprehensive set of notes should provide a solid foundation for understanding the Activated Sludge Process and its design within the context of conventional wastewater treatment. Remember to practice the calculations and understand the interrelationships between the various design parameters.
