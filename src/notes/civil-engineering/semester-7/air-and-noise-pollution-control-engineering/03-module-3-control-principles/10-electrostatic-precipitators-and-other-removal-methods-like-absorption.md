---
title: "electrostatic precipitators and other removal methods like absorption"
subject: "AIR AND NOISE POLLUTION CONTROL ENGINEERING"
module: "Module 3: Control principles"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811680"
status: "completed"
scrapedAt: "2026-05-20T18:57:15.935Z"
---
# Air and Noise Pollution Control Engineering: Module 3 - Control Principles

## Topic: Electrostatic Precipitators and Other Removal Methods (Absorption)

---

### **1. Introduction to Air Pollution Control Principles**

*   **Objective:** To effectively remove pollutants from gaseous streams, preventing their release into the atmosphere and protecting human health and the environment.
*   **Key Principle:** Transferring pollutants from the gas phase to a separate phase (solid or liquid) or transforming them into less harmful substances.
*   **Factors influencing control method selection:**
    *   Nature of the pollutant (particulate or gaseous).
    *   Concentration of the pollutant.
    *   Flow rate of the gas stream.
    *   Required removal efficiency.
    *   Cost (capital and operating).
    *   Physical and chemical properties of the pollutant.
    *   Physical and chemical properties of the gas stream.

---

### **2. Electrostatic Precipitators (ESPs)**

**Learning Outcome 1: Understand the fundamental principles of electrostatic precipitation and its applications.**

*   **Definition:** An electrostatic precipitator (ESP) is a device that removes particulate matter from a gas stream by imparting an electrical charge to the particles and then attracting them to a collecting electrode with an opposite charge.
*   **Fundamental Principles:**
    *   **Charging of Particles:**
        *   **Corona Discharge:** High voltage is applied to discharge electrodes (typically wires or needles) creating a region of ionized gas (plasma).
        *   **Negative Corona:** Most common, where negative ions (electrons and negative ions) bombard the incoming dust particles, giving them a negative charge.
        *   **Positive Corona:** Less common due to lower efficiency for fine particles.
    *   **Particle Migration:** The charged particles are then moved towards oppositely charged collecting electrodes (typically plates or baskets) due to electrostatic forces. The force is proportional to the particle charge and the electric field strength.
        *   $F_e = qE$
            *   $F_e$: Electrostatic force
            *   $q$: Charge on the particle
            *   $E$: Electric field strength
    *   **Particle Collection:** Particles accumulate on the collecting electrodes as a layer of dust.
    *   **Dust Removal:** The collected dust layer is periodically removed from the collecting electrodes through mechanical means (e.g., rapping or vibrating the plates). The dislodged dust falls into hoppers for disposal.

*   **Key Components of an ESP:**
    *   **Gas Inlet:** Directs the polluted gas stream into the precipitator.
    *   **Discharge Electrodes:** High-voltage electrodes that generate the corona discharge to charge the particles.
    *   **Collecting Electrodes:** Grounded or oppositely charged electrodes that attract and collect the charged particles.
    *   **High Voltage Power Supply:** Provides the necessary DC voltage for corona generation.
    *   **Rapping System:** Mechanical system to dislodge collected dust from the collecting electrodes.
    *   **Hopper:** Collects the dislodged dust.
    *   **Gas Outlet:** Releases the cleaned gas stream.

*   **Types of ESPs:**
    *   **Dry ESPs:** The most common type, used for collecting dry dust particles.
    *   **Wet ESPs:** Used for collecting sticky, oily, or highly resistive dusts, or for simultaneous removal of gases and particulates. The collecting electrodes are washed with liquid.
    *   **Plate ESPs:** Consist of parallel plates.
    *   **Cylindrical ESPs:** Consist of concentric cylindrical electrodes.

*   **Applications of ESPs:**
    *   **Power Plants:** Removal of fly ash from flue gas of coal-fired power plants.
    *   **Cement Plants:** Control of dust emissions from kilns and grinding operations.
    *   **Steel Mills:** Removal of dust and fumes from furnaces.
    *   **Pulp and Paper Mills:** Control of particulate emissions from recovery boilers.
    *   **Incinerators:** Removal of particulate matter from combustion gases.
    *   **Chemical Plants:** Removal of various particulate pollutants.

---

**Learning Outcome 2: Evaluate the performance and factors affecting electrostatic precipitator efficiency.**

*   **Performance Metrics:**
    *   **Removal Efficiency:** The percentage of particulate matter removed from the gas stream.
    *   **Collection Efficiency:** The percentage of charged particles that are successfully collected on the electrodes.

*   **Factors Affecting ESP Efficiency:**
    *   **Gas Flow Rate:** Higher flow rates can reduce residence time and collection efficiency.
    *   **Particle Characteristics:**
        *   **Particle Size:** Smaller particles are harder to charge and migrate.
        *   **Particle Resistivity:**
            *   **Low Resistivity:** Particles may not hold their charge well, leading to re-entrainment (particles jumping off the collecting electrode back into the gas stream).
            *   **High Resistivity:** Particles may not accept a sufficient charge, or may cause back corona (ionization within the dust layer, reducing collection efficiency).
            *   **Optimal Resistivity:** Typically in the range of $10^6$ to $10^{10}$ $\Omega \cdot$cm for efficient collection.
        *   **Particle Surface Area:** Finer particles have larger surface area, which can influence charging.
    *   **Electrical Parameters:**
        *   **Voltage:** Higher voltage increases electric field strength and particle charging, but can lead to sparking or back corona.
        *   **Current:** Current density is related to charging and migration.
    *   **ESP Design Parameters:**
        *   **Electrode Spacing:** Affects electric field strength and migration distance.
        *   **Electrode Geometry:** Shape and arrangement of discharge and collecting electrodes.
        *   **Number of Stages/Fields:** Multiple stages can improve overall collection efficiency, especially for fine particles.
        *   **Aspect Ratio (Height/Width of Plates):** Affects gas distribution and particle deposition.
    *   **Gas Temperature and Moisture Content:** Affects gas density, particle resistivity, and corona characteristics.
    *   **Dust Loading:** Higher inlet dust concentrations can impact performance.
    *   **Rapping Intensity and Frequency:** Ineffective rapping can lead to dust re-entrainment.

*   **Deutsch-Anderson Equation (Simplified Model):**
    *   Provides a theoretical basis for ESP performance.
    *   $N_0 = \exp\left(-\frac{w_e A}{Q}\right)$
        *   $N_0$: Fractional penetration (fraction of particles escaping collection)
        *   $w_e$: Effective migration velocity of particles (depends on particle charging and electric field)
        *   $A$: Total collecting electrode area
        *   $Q$: Gas flow rate
    *   **Key takeaway:** Efficiency increases with collecting area and effective migration velocity, and decreases with gas flow rate.

---

**Learning Outcome 3: Discuss the advantages and disadvantages of electrostatic precipitators.**

*   **Advantages:**
    *   **High Collection Efficiency:** Can achieve very high efficiencies ($>99\%$) for a wide range of particle sizes, especially for fine particles.
    *   **Low Pressure Drop:** Compared to many other particulate control devices, ESPs have a relatively low pressure drop, leading to lower fan power requirements.
    *   **Handles Large Gas Volumes:** Suitable for large industrial applications with high gas flow rates.
    *   **Can Operate at High Temperatures:** Can be designed to operate at elevated temperatures.
    *   **Handles Sticky and Hygroscopic Particles:** Wet ESPs are effective for such materials.
    *   **Durable Construction:** Can be built to withstand corrosive environments.
    *   **Low Operating Costs (excluding maintenance):** Once installed, operating costs related to energy consumption are generally lower than some alternatives due to low pressure drop.

*   **Disadvantages:**
    *   **High Capital Cost:** ESPs generally have higher initial installation costs compared to some other devices like cyclones.
    *   **Sensitivity to Particle Resistivity:** Performance is significantly affected by the electrical resistivity of the dust.
    *   **Susceptible to Gas Flow Distribution Issues:** Poor gas distribution can lead to reduced efficiency.
    *   **Potential for Sparking and Back Corona:** Can occur with inappropriate operating conditions or dust properties.
    *   **Requires High Voltage:** Safety precautions and maintenance are crucial due to high voltage operation.
    *   **Space Requirements:** ESPs can be large and require significant installation space.
    *   **Maintenance of Rapping System:** The rapping system needs regular maintenance to prevent dust re-entrainment.
    *   **Not Suitable for Very Fine Sub-micron Particles with Low Resistivity:** May struggle to collect these particles effectively.

---

### **3. Absorption (Gas Absorption)**

**Learning Outcome 4: Explain the principles of absorption and its application in air pollution control.**

*   **Definition:** Absorption is a mass transfer process where one or more components of a gas mixture are dissolved or reacted with a liquid solvent. The pollutant transfers from the gas phase to the liquid phase.
*   **Fundamental Principles:**
    *   **Mass Transfer:** Pollutant molecules move from the gas phase to the liquid phase. This is driven by the concentration difference (driving force) between the gas and liquid phases.
    *   **Solubility:** The extent to which a gas can dissolve in a liquid is a key factor. "Like dissolves like" is a general principle.
    *   **Chemical Reaction (Reactive Absorption):** In many cases, the pollutant reacts with the absorbent liquid to form a more stable or easily handled product. This enhances the removal rate.
    *   **Interfacial Area:** A large contact area between the gas and liquid is crucial for efficient mass transfer.

*   **Absorption Process Components:**
    *   **Absorbent Liquid:** The liquid used to absorb the pollutant.
    *   **Mass Transfer Equipment:** Devices designed to bring the gas and liquid into intimate contact.

*   **Types of Absorbents:**
    *   **Water:** Effective for highly soluble gases like HCl, NH3, SO2 (partially).
    *   **Caustic Solutions (e.g., NaOH):** Effective for acidic gases like SO2, HCl, H2S.
    *   **Acidic Solutions (e.g., Sulfuric Acid):** Used for alkaline gases like NH3.
    *   **Ammonia Solutions:** Used for acidic gases like SO2.
    *   **Organic Solvents:** Used for specific organic pollutants.

*   **Types of Mass Transfer Equipment (Absorption Towers):**
    *   **Packed Towers:** Filled with packing material (e.g., rings, saddles) to provide a large surface area for gas-liquid contact.
        *   **Mechanism:** Gas flows up, liquid flows down (counter-current flow) or in the same direction (co-current flow).
        *   **Example:** Removal of SO2 from flue gas using lime slurry in a packed tower.
    *   **Tray Towers:** Contain perforated trays or plates where liquid accumulates and gas bubbles up through the liquid.
        *   **Mechanism:** Gas and liquid are brought into contact on each tray.
        *   **Example:** Removal of ammonia from air using a tray tower.
    *   **Spray Towers:** Gas flows through a chamber where liquid is sprayed as fine droplets.
        *   **Mechanism:** Droplet surface provides the contact area.
        *   **Example:** Dust removal and simultaneous gas absorption.
    *   **Venturi Scrubbers:** Combine particle collection and gas absorption.
        *   **Mechanism:** High-velocity gas stream atomizes the liquid, creating a fine mist for high interfacial area.
        *   **Example:** Removal of HCl fumes and particulate matter in chemical plants.

*   **Applications of Absorption:**
    *   **SO2 Removal (Flue Gas Desulfurization - FGD):** One of the most common applications, using lime, limestone, or caustic soda as absorbents.
    *   **HCl Removal:** From process vents in chemical industries.
    *   **NH3 Removal:** From industrial emissions.
    *   **H2S Removal:** From natural gas and refinery gases.
    *   **Removal of Acidic or Alkaline Gases:** From various industrial processes.
    *   **Odor Control:** Removing odorous compounds.

---

**Learning Outcome 5: Analyze the factors affecting absorption efficiency and compare absorption with other removal methods.**

*   **Factors Affecting Absorption Efficiency:**
    *   **Solubility of the Pollutant:** Higher solubility leads to better absorption.
    *   **Henry's Law Constant (H):** For physical absorption, $P_i = H x_i$, where $P_i$ is partial pressure and $x_i$ is mole fraction. A lower H means higher solubility.
    *   **Gas-Liquid Contact Time (Residence Time):** Longer contact time improves mass transfer.
    *   **Interfacial Area:** Larger interfacial area (achieved through fine droplets or efficient packing) increases mass transfer rate.
    *   **Mass Transfer Coefficients:** These depend on fluid properties, flow regimes, and turbulence.
    *   **Absorbent Properties:**
        *   **Concentration:** Higher absorbent concentration (for reactive absorption) increases driving force.
        *   **Temperature:** Affects solubility and reaction rates. Generally, lower temperatures favor solubility.
        *   **pH:** Crucial for reactive absorbents.
    *   **Gas Flow Rate and Liquid-to-Gas Ratio (L/G):** Higher L/G ratio generally leads to higher absorption efficiency.
    *   **Presence of Other Gases:** Inert gases can dilute the pollutant and affect partial pressure.
    *   **Back Pressure:** Can influence gas flow and solubility.
    *   **Packing Characteristics (for Packed Towers):** Surface area, void fraction, and wetting properties.
    *   **Tray Design (for Tray Towers):** Efficiency of bubbling and liquid holdup.

*   **Comparison of Absorption with Other Removal Methods:**

    | Feature           | Electrostatic Precipitators (ESPs)                                  | Absorption (Scrubbers)                                                 |
    | :---------------- | :------------------------------------------------------------------ | :--------------------------------------------------------------------- |
    | **Pollutant Type** | Primarily Particulates (dust, fly ash, fumes)                       | Primarily Gases (SO2, HCl, NH3, H2S, organic vapors)                   |
    | **Efficiency**    | High for particulates ($>99\%$). Less effective for gases.        | High for soluble/reactive gases. Can remove some fine particulates.    |
    | **Mechanism**     | Electrostatic attraction of charged particles                       | Mass transfer (dissolution/reaction) of gas into liquid                |
    | **Pressure Drop** | Low                                                                 | Moderate to High (depending on type, e.g., packed vs. spray)         |
    | **Energy Cost**   | Primarily electrical (for voltage). Lower fan power.              | Fan power, pumping power for liquid circulation.                       |
    | **Capital Cost**  | High                                                                | Moderate to High (depending on complexity and materials)             |
    | **Operating Cost**| Electrical energy, maintenance (rapping, electrodes).               | Absorbent cost, energy, waste disposal (spent liquid/sludge).          |
    | **Waste Product** | Dry dust cake (handled in hoppers)                                  | Spent liquid, sludge, or solid product (depending on absorbent).       |
    | **Applications**  | Fly ash control, cement dust, metallurgical fumes.                  | Flue gas desulfurization (SO2), acid gas scrubbing, odor control.      |
    | **Advantages**    | High particulate efficiency, low pressure drop, handles large flows. | Effective for gases, can remove multiple pollutants simultaneously.      |
    | **Disadvantages** | Ineffective for gases, sensitive to particle resistivity, high capital. | Can have high pressure drop, requires absorbent and waste disposal.      |

---

### **4. Practice Questions and Exercises**

**Question 1:** Describe the three main stages involved in the operation of a dry electrostatic precipitator.

**Answer:**
The three main stages are:
1.  **Charging:** Particulate matter in the gas stream is electrically charged, typically negatively, as it passes through a corona discharge generated by high-voltage electrodes.
2.  **Migration:** The charged particles are propelled towards collecting electrodes of opposite polarity (usually grounded plates) by the electrostatic force.
3.  **Collection:** The particles accumulate on the collecting electrodes as a dust layer, and are periodically removed by mechanical means (e.g., rapping).

---

**Question 2:** What is meant by "particle resistivity" in the context of ESPs, and how does it affect performance?

**Answer:**
Particle resistivity is a measure of a material's ability to resist the flow of electric current. In ESPs, it refers to the resistance of the collected dust layer to the passage of charge.
*   **Low resistivity:** Particles may not hold their charge well, leading to them being re-entrained into the gas stream by the gas flow or turbulence, reducing collection efficiency.
*   **High resistivity:** Particles may not accept sufficient charge, or may cause "back corona," where ionization occurs within the dust layer, reducing the electric field and collection efficiency. An optimal resistivity range exists for peak ESP performance.

---

**Question 3:** List three key advantages and three key disadvantages of using electrostatic precipitators for air pollution control.

**Answer:**
**Advantages:**
1.  High collection efficiency for particulate matter, especially fine particles.
2.  Low pressure drop across the device, leading to lower fan energy consumption.
3.  Can handle large volumes of gas.

**Disadvantages:**
1.  High capital cost.
2.  Performance is highly sensitive to particle resistivity.
3.  Ineffective for gaseous pollutants.

---

**Question 4:** Explain the basic principle of absorption as a gas pollution control method.

**Answer:**
Absorption is a mass transfer process where a pollutant gas is dissolved into a liquid solvent. This transfer is driven by the concentration difference between the gas and liquid phases. In many cases, the pollutant also reacts chemically with the solvent to enhance its removal and form a more stable compound in the liquid phase. The key is to maximize the contact area between the gas and liquid phases.

---

**Question 5:** What is the primary application of absorption technology in industrial air pollution control? Give an example of an absorbent used for this application.

**Answer:**
The primary application of absorption technology is the removal of gaseous pollutants, most notably **sulfur dioxide (SO2)** from flue gases, a process known as Flue Gas Desulfurization (FGD).
An example of an absorbent used for SO2 removal is **lime (calcium oxide, CaO) slurry** or **limestone (calcium carbonate, CaCO3) slurry**.

---

**Question 6:** A packed tower absorber is used to remove SO2 from flue gas using a limestone slurry. What are three key factors that would influence the efficiency of this absorption process?

**Answer:**
Three key factors influencing the efficiency of absorption in a packed tower are:
1.  **Gas-Liquid Contact Time:** Determined by the flow rates and the height of the packing.
2.  **Interfacial Area:** Provided by the packing material and its wetting by the liquid. The type and surface area of the packing are critical.
3.  **Liquid-to-Gas Ratio (L/G):** A higher L/G ratio generally increases the concentration driving force and thus the absorption efficiency.
4.  **SO2 Solubility and Reactivity:** How well SO2 dissolves in water and reacts with the limestone slurry.
5.  **Absorbent Properties:** Concentration and pH of the limestone slurry.

---

### **5. Important Points to Remember**

*   **ESP Core Concept:** Charge it, move it, collect it.
*   **Particle Resistivity is Critical for ESPs:** It dictates how well particles accept a charge and stay collected.
*   **Absorption is for Gases:** It relies on dissolution or reaction with a liquid.
*   **Mass Transfer is Key for Absorption:** Maximizing gas-liquid contact is paramount.
*   **Trade-offs Exist:** No single pollution control method is perfect. Selection depends on the specific pollutant, concentration, flow rate, and economic factors.
*   **ESP vs. Absorber:** ESPs are primarily for particulates, while absorption is for gases. They can sometimes be used in series for multi-pollutant control.
*   **High Voltage in ESPs:** Requires careful engineering and safety protocols.
*   **Absorbent Handling:** Requires management of the liquid phase and any resulting solid waste.

---
