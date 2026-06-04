---
title: "Removal of gaseous pollutants by adsorption"
subject: "AIR AND NOISE POLLUTION CONTROL ENGINEERING"
module: "Module 3: Control principles"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811678"
status: "completed"
scrapedAt: "2026-05-20T18:57:09.874Z"
---
# AIR AND NOISE POLLUTION CONTROL ENGINEERING

## Module 3: Control Principles

## Topic: Removal of Gaseous Pollutants by Adsorption

---

### 1. Introduction to Adsorption

**Adsorption** is a surface phenomenon where molecules of a gas or liquid (the **adsorbate**) adhere to the surface of a solid material (the **adsorbent**). This is a physical process driven by intermolecular forces, distinct from **absorption**, where a substance dissolves or penetrates into the bulk of another material.

**Key Concepts:**

*   **Adsorbent:** The solid material with a large surface area that attracts and holds the adsorbate molecules. Common adsorbents include activated carbon, zeolites, silica gel, and activated alumina.
*   **Adsorbate:** The gaseous pollutant that is removed from the air stream by adhering to the adsorbent.
*   **Surface Area:** A critical property of adsorbents. The higher the surface area per unit mass, the greater the adsorption capacity.
*   **Porous Structure:** Most effective adsorbents have a highly porous structure with a network of pores of various sizes. This significantly increases their effective surface area.
*   **Intermolecular Forces:** Adsorption is driven by weak Van der Waals forces (physisorption) or stronger chemical bonds (chemisorption).

**Types of Adsorption:**

*   **Physisorption (Physical Adsorption):**
    *   Driven by weak Van der Waals forces.
    *   Reversible (can be easily reversed by increasing temperature or decreasing pressure).
    *   Low activation energy.
    *   Adsorbate molecules form weak bonds with the adsorbent.
    *   Typically occurs at low temperatures.
    *   Example: Water vapor adsorbed by silica gel.
*   **Chemisorption (Chemical Adsorption):**
    *   Driven by stronger chemical bonds (covalent or ionic).
    *   Often irreversible or requires significant energy for reversal.
    *   Higher activation energy.
    *   Adsorbate molecules form chemical bonds with the adsorbent.
    *   Can occur at higher temperatures.
    *   Example: Sulfur dioxide ($\text{SO}_2$) adsorption onto activated alumina.

---

### 2. Adsorption Isotherms

**Adsorption isotherms** describe the relationship between the amount of adsorbate adsorbed onto a unit mass of adsorbent and the equilibrium pressure (or concentration) of the adsorbate at a constant temperature.

**Key Concepts:**

*   **Langmuir Isotherm:**
    *   Assumes that adsorption occurs at specific sites on the adsorbent surface and that each site can hold only one molecule.
    *   Predicts a monolayer of adsorbate.
    *   Valid for physisorption and chemisorption where surface binding is strong.
    *   Mathematically represented as: $\frac{q}{q_m} = \frac{Kb}{1 + Kb}$
        *   $q$: Amount of adsorbate adsorbed per unit mass of adsorbent (e.g., mg/g).
        *   $q_m$: Maximum adsorption capacity (monolayer capacity) of the adsorbent (e.g., mg/g).
        *   $b$: Langmuir constant related to the energy of adsorption.
        *   $P$: Partial pressure of the adsorbate gas.
    *   **Shape:** Typically shows an initial rapid increase in adsorption with pressure, followed by a plateau as the surface becomes saturated.
*   **Freundlich Isotherm:**
    *   An empirical relationship that does not assume a fixed number of adsorption sites or a monolayer.
    *   Assumes that the adsorption capacity increases indefinitely with pressure, which is not physically realistic at very high pressures.
    *   Valid for heterogeneous surfaces and for a range of concentrations.
    *   Mathematically represented as: $q = K_F P^{1/n}$
        *   $q$: Amount of adsorbate adsorbed per unit mass of adsorbent.
        *   $K_F$: Freundlich constant.
        *   $P$: Partial pressure of the adsorbate gas.
        *   $n$: Freundlich exponent (typically > 1).
    *   **Shape:** Shows a continuously increasing adsorption with pressure, often with a decreasing slope at higher pressures.
*   **BET (Brunauer-Emmett-Teller) Isotherm:**
    *   Extends the Langmuir theory to multilayer adsorption.
    *   Assumes that adsorption can occur in multiple layers, with the energy of adsorption for subsequent layers being the same as the heat of liquefaction.
    *   More accurate for describing the adsorption of gases at pressures closer to their saturation pressure.
    *   Primarily used for determining the surface area of adsorbents.

**Importance of Isotherms:**

*   Predict the adsorption capacity of an adsorbent for a specific pollutant under different conditions.
*   Aid in the selection of appropriate adsorbents.
*   Help in designing and optimizing adsorption systems.

---

### 3. Adsorbents for Gaseous Pollutants

Various solid materials are used as adsorbents for removing gaseous pollutants from air. The choice depends on the specific pollutant, operating conditions, and regeneration requirements.

**Common Adsorbents and Their Applications:**

*   **Activated Carbon:**
    *   **Properties:** Extremely high surface area ($500 - 2500 \text{ m}^2/\text{g}$) due to a highly porous structure. Made from carbonaceous materials like coal, wood, coconut shells, etc., through activation processes.
    *   **Applications:** Widely used for removing organic vapors (VOCs), sulfur dioxide ($\text{SO}_2$), hydrogen sulfide ($\text{H}_2\text{S}$), mercury ($\text{Hg}$), nitrogen oxides ($\text{NO}_x$), and many other gaseous pollutants.
    *   **Types:** Granular activated carbon (GAC), powdered activated carbon (PAC).
    *   **Mechanism:** Primarily physisorption, but can be modified (impregnated) to enhance chemisorption for specific pollutants (e.g., $\text{KOH}$ impregnated for $\text{H}_2\text{S}$).
*   **Zeolites (Molecular Sieves):**
    *   **Properties:** Crystalline aluminosilicates with uniform pore sizes and a rigid cage-like structure. Can be natural or synthetic.
    *   **Applications:** Effective for removing polar molecules like water vapor ($\text{H}_2\text{O}$), ammonia ($\text{NH}_3$), and some organic compounds. Their selectivity is based on pore size and polarity.
    *   **Mechanism:** Physisorption based on pore size exclusion and polarity.
*   **Silica Gel:**
    *   **Properties:** Amorphous form of silicon dioxide ($\text{SiO}_2$). High surface area and strong affinity for polar molecules.
    *   **Applications:** Primarily used as a desiccant for removing moisture from air streams. Can adsorb some organic vapors.
    *   **Mechanism:** Physisorption, particularly effective for water vapor.
*   **Activated Alumina:**
    *   **Properties:** Porous form of aluminum oxide ($\text{Al}_2\text{O}_3$). High surface area and mechanical strength.
    *   **Applications:** Used for drying air and gases, and for removing pollutants like hydrogen fluoride ($\text{HF}$), hydrogen chloride ($\text{HCl}$), and sulfur dioxide ($\text{SO}_2$), especially when impregnated.
    *   **Mechanism:** Physisorption and chemisorption (when impregnated).

---

### 4. Adsorption Process Design and Operation

Designing an effective adsorption system involves considering the properties of the pollutant, the adsorbent, and the operational parameters.

**Key Components of an Adsorption System:**

*   **Adsorption Bed:** The vessel containing the adsorbent material.
*   **Inlet/Outlet Ports:** For introducing the polluted air and discharging the treated air.
*   **Distribution System:** To ensure uniform flow of air through the adsorbent bed.
*   **Regeneration System:** To remove the adsorbed pollutants and restore the adsorbent's capacity.

**Operational Parameters:**

*   **Contact Time (Residence Time):** The time the polluted air spends in contact with the adsorbent. Longer contact time generally leads to higher removal efficiency.
*   **Flow Rate:** The volume of air passing through the adsorbent bed per unit time.
*   **Temperature:** Affects adsorption capacity (higher temperature usually reduces capacity for physisorption).
*   **Pressure:** Affects adsorption capacity (higher pressure usually increases capacity).
*   **Initial Pollutant Concentration:** Higher concentrations require more adsorbent or longer contact times.
*   **Adsorbent Bed Depth and Diameter:** Influences pressure drop and capacity.

**Adsorption Bed Configurations:**

*   **Single Bed:** Simple but requires downtime for regeneration.
*   **Multiple Beds (Lead-Lag Configuration):** Allows for continuous operation. One bed is adsorbing while the other is being regenerated or is on standby.
*   **Moving Bed Adsorbers:** Adsorbent moves continuously through the adsorber, with fresh adsorbent fed in and spent adsorbent removed. Offers higher adsorbent utilization but is more complex.

---

### 5. Regeneration of Adsorbents

As the adsorbent becomes saturated with pollutants, its adsorption capacity decreases, and it needs to be regenerated to be reused.

**Regeneration Methods:**

*   **Thermal Swing Adsorption (TSA):**
    *   Involves heating the adsorbent bed to desorb the adsorbed pollutants.
    *   Can be done by passing hot gas through the bed or by heating the bed itself.
    *   Effective for pollutants with moderate to strong adsorption bonds.
    *   **Example:** Regenerating activated carbon saturated with VOCs by passing hot nitrogen gas.
*   **Pressure Swing Adsorption (PSA):**
    *   Involves reducing the pressure in the adsorbent bed to desorb the adsorbed pollutants.
    *   Effective for pollutants with weak adsorption bonds (physisorption).
    *   Often used with inert gases like nitrogen.
    *   **Example:** Regenerating a zeolite bed saturated with $\text{O}_2$ by reducing the pressure.
*   **Steam Stripping:**
    *   Passing steam through the adsorbent bed to desorb the pollutants.
    *   Commonly used for regenerating activated carbon from VOCs and other organic compounds.
    *   The desorbed pollutants are carried away with the steam.
*   **Flushing with Inert Gas:**
    *   Passing a clean inert gas (like nitrogen) through the bed at ambient or elevated temperatures to sweep away adsorbed molecules.
    *   Suitable for weakly adsorbed species.

**Factors Affecting Regeneration:**

*   **Type of Adsorbent:** Different adsorbents require different regeneration conditions.
*   **Type of Adsorbate:** The strength of the bond between the adsorbate and adsorbent dictates the regeneration method and energy required.
*   **Desired Regeneration Efficiency:** How completely the adsorbent needs to be regenerated.

---

### 6. Advantages and Disadvantages of Adsorption

**Advantages:**

*   **High Removal Efficiency:** Can achieve very high removal efficiencies for a wide range of pollutants, including trace contaminants.
*   **Versatility:** Effective for both organic and inorganic gaseous pollutants.
*   **Selectivity:** Can be selective for specific pollutants, especially with modified adsorbents or molecular sieves.
*   **Simplicity (in some designs):** Basic adsorption systems can be relatively simple to operate.
*   **Potential for Pollutant Recovery:** In some cases, adsorbed pollutants can be recovered and reused (e.g., solvent recovery).

**Disadvantages:**

*   **Adsorbent Cost:** High-quality adsorbents can be expensive.
*   **Regeneration Requirements:** Regeneration is necessary, which adds complexity and cost to the system.
*   **Adsorbent Fouling/Deactivation:** Adsorbents can be fouled by particulate matter or deactivated by chemical reactions, requiring replacement.
*   **Pressure Drop:** Adsorbent beds can cause a significant pressure drop in the air stream, increasing fan power requirements.
*   **Limited Capacity:** Adsorbent has a finite capacity and requires regular regeneration or replacement.
*   **Disposal of Spent Adsorbent:** Spent adsorbent may be hazardous and require special disposal.

---

### 7. Learning Outcome Checklist & Practice Questions

**Learning Outcomes Covered:**

*   **Understanding the fundamental principles of adsorption:** Covered in Sections 1 & 2.
*   **Identifying common adsorbents and their properties:** Covered in Section 3.
*   **Explaining the mechanisms of physisorption and chemisorption:** Covered in Section 1.
*   **Describing adsorption isotherms (Langmuir, Freundlich):** Covered in Section 2.
*   **Discussing the design and operational considerations for adsorption systems:** Covered in Section 4.
*   **Explaining various regeneration techniques for adsorbents:** Covered in Section 5.
*   **Evaluating the advantages and disadvantages of adsorption as a control technology:** Covered in Section 6.

---

**Practice Questions:**

**Question 1:**
Define adsorption and distinguish it from absorption. Explain the role of surface area in the effectiveness of an adsorbent.

**Answer 1:**
Adsorption is a surface phenomenon where molecules of a gas or liquid adhere to the surface of a solid material. Absorption, in contrast, is a process where a substance dissolves or penetrates into the bulk of another material.
The effectiveness of an adsorbent is directly proportional to its surface area. A larger surface area provides more sites for the adsorbate molecules to attach to, thereby increasing the adsorption capacity of the material.

**Question 2:**
Differentiate between physisorption and chemisorption, providing an example for each.

**Answer 2:**
*   **Physisorption:** Driven by weak Van der Waals forces. It is reversible, has low activation energy, and occurs at low temperatures.
    *   *Example:* Water vapor adsorption by silica gel.
*   **Chemisorption:** Driven by stronger chemical bonds. It is often irreversible or requires significant energy for reversal, has higher activation energy, and can occur at higher temperatures.
    *   *Example:* Sulfur dioxide ($\text{SO}_2$) adsorption onto activated alumina.

**Question 3:**
What are the key assumptions of the Langmuir adsorption isotherm? How does the Freundlich isotherm differ from the Langmuir isotherm?

**Answer 3:**
Key assumptions of the Langmuir isotherm:
1.  Adsorption occurs at specific, localized sites on the adsorbent surface.
2.  Each adsorption site can hold only one adsorbate molecule.
3.  The adsorption energy is constant for all sites.
4.  There are no interactions between adsorbed molecules.
5.  The surface is energetically homogeneous.

The Freundlich isotherm is an empirical relationship that does not make these assumptions. It does not assume a fixed number of adsorption sites or a monolayer and is considered valid for heterogeneous surfaces and a range of concentrations. It predicts continuously increasing adsorption with pressure, unlike the Langmuir isotherm's plateau.

**Question 4:**
List three common adsorbents used for air pollution control and specify one typical application for each.

**Answer 4:**
1.  **Activated Carbon:** Removing volatile organic compounds (VOCs) from industrial emissions.
2.  **Zeolites:** Removing moisture ($\text{H}_2\text{O}$) from air streams in climate control or gas drying.
3.  **Silica Gel:** Used as a desiccant to keep air dry in sensitive environments or packaging.

**Question 5:**
Describe two common methods for regenerating adsorbents and the conditions under which each is typically used.

**Answer 5:**
1.  **Thermal Swing Adsorption (TSA):** Involves heating the adsorbent to desorb the pollutants. Used for pollutants with moderate to strong adsorption bonds.
2.  **Pressure Swing Adsorption (PSA):** Involves reducing the pressure in the adsorbent bed to desorb the pollutants. Used for pollutants with weak adsorption bonds (physisorption).

---

### 8. Important Points to Remember

*   Adsorption is a **surface phenomenon**.
*   **Surface area** and **porous structure** are critical properties of adsorbents.
*   **Physisorption** is reversible and driven by weak forces; **chemisorption** is often irreversible and driven by chemical bonds.
*   Adsorption isotherms (Langmuir, Freundlich) help predict adsorbent performance.
*   **Activated carbon** is a versatile and widely used adsorbent.
*   **Regeneration** is essential for the reuse of adsorbents.
*   **TSA** and **PSA** are common regeneration techniques.
*   Adsorption offers high removal efficiency but comes with costs related to adsorbent and regeneration.
