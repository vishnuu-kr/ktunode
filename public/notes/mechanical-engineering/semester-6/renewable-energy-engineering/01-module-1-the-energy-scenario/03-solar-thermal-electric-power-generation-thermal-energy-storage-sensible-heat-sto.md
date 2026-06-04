---
title: "Solar thermal electric power generation -Thermal Energy storage, sensible heat storage, latent heat storage , Thermo chemical storage , photovoltaic system for power generation , Solar pond -Solar Cells-Types of solar cells , principle of working and performance characteristics, Production process- Block diagram only"
subject: "RENEWABLE ENERGY ENGINEERING"
module: "Module 1: The Energy Scenario"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463adf"
status: "completed"
scrapedAt: "2026-05-20T18:07:45.309Z"
---
# Renewable Energy Engineering: Module 1 - The Energy Scenario

## Topic: Solar Thermal Electric Power Generation

This module introduces the fundamental concepts of solar thermal electric power generation, focusing on energy storage technologies, photovoltaic systems, solar ponds, and solar cells.

### 1. Solar Thermal Electric Power Generation (STE)

Solar Thermal Electric (STE) power generation systems concentrate sunlight to heat a working fluid, which then drives a turbine connected to a generator to produce electricity. This approach differs from photovoltaic (PV) systems, which directly convert sunlight into electricity using semiconductor materials.

**Key Concepts:**

*   **Concentration:** STE systems rely on concentrating solar power (CSP) technologies to focus sunlight over a larger area onto a smaller receiver.
*   **Heat Transfer:** The concentrated solar energy heats a working fluid (e.g., water, oil, molten salt).
*   **Power Cycle:** The heated fluid is used in a conventional power cycle (like a Rankine cycle) to generate steam, which drives a turbine and generator.

**Types of STE Systems:**

*   **Parabolic Troughs:** Use parabolic mirrors to focus sunlight onto a receiver tube containing a heat transfer fluid.
*   **Solar Power Towers (Central Receivers):** Utilize a field of mirrors (heliostats) that track the sun and reflect sunlight onto a central receiver mounted on a tower.
*   **Dish-Stirling Systems:** Employ a parabolic dish concentrator to focus sunlight onto a Stirling engine, which directly converts heat into mechanical work.
*   **Linear Fresnel Reflectors:** Use long, flat or slightly curved mirrors to focus sunlight onto elevated receiver tubes.

---

### 2. Thermal Energy Storage (TES) for STE

A critical aspect of STE systems is the ability to store thermal energy for use when sunlight is unavailable (e.g., at night or during cloudy periods). This allows for continuous power generation and grid stability.

**Key Concepts:**

*   **Buffering:** TES systems smooth out fluctuations in solar energy input, ensuring a consistent power output.
*   **Dispatchability:** Stored energy can be released on demand, making STE systems more dispatchable than direct PV systems without battery storage.

#### 2.1 Sensible Heat Storage

Sensible heat storage relies on the principle that the temperature of a material changes when heat is added or removed. The amount of heat stored is proportional to the material's mass, specific heat capacity, and the temperature change.

**Principle:**
$Q = m \cdot c_p \cdot \Delta T$
Where:
*   $Q$ = Heat stored (Joules)
*   $m$ = Mass of the storage material (kg)
*   $c_p$ = Specific heat capacity of the material (J/kg·K)
*   $\Delta T$ = Change in temperature (K)

**Key Characteristics:**

*   **Temperature Change:** The material's temperature rises as it absorbs heat and falls as it releases heat.
*   **Simplicity:** Relatively simple to implement and widely used.
*   **Requires Large Volumes:** To store significant amounts of energy, large quantities of storage material are needed due to the moderate energy density.

**Storage Materials:**

*   **Water:** Abundant, low cost, but limited to lower temperatures due to its boiling point.
*   **Oils (e.g., thermal oil):** Can operate at higher temperatures than water, but are flammable and have lower specific heat capacities.
*   **Molten Salts:** Excellent for high-temperature applications (up to 600°C or more), offering good thermal stability and reasonable cost. Common examples include nitrate salts (e.g., sodium nitrate, potassium nitrate).
*   **Solids (e.g., rock, concrete, ceramics):** Can be used in packed beds or as structural components. They have good thermal stability but lower thermal conductivity.

**Example (Sukhatme & Nayak, 2015):**
A solar thermal plant using parabolic troughs might heat a synthetic oil to 400°C. This hot oil can then be used to heat a molten salt storage system. During periods of low solar radiation, the hot molten salt can be circulated through a heat exchanger to generate steam and electricity.

#### 2.2 Latent Heat Storage (Phase Change Materials - PCMs)

Latent heat storage utilizes the energy absorbed or released during a phase change (e.g., solid to liquid, liquid to gas) of a material, without a significant change in temperature.

**Principle:**
$Q = m \cdot L$
Where:
*   $Q$ = Heat stored (Joules)
*   $m$ = Mass of the storage material (kg)
*   $L$ = Latent heat of fusion (J/kg)

**Key Characteristics:**

*   **High Energy Density:** PCMs can store significantly more energy per unit volume compared to sensible heat storage at specific temperature ranges.
*   **Isothermal Operation:** Heat is stored or released at a nearly constant temperature, which is advantageous for maintaining consistent process temperatures.
*   **Phase Change Temperature:** The effectiveness of a PCM depends on its melting/solidification temperature aligning with the operating temperature range of the STE system.

**Storage Materials:**

*   **Salt Hydrates:** Inorganic salts that incorporate water of crystallization. Examples include sodium sulfate decahydrate ($Na_2SO_4 \cdot 10H_2O$) and calcium chloride hexahydrate ($CaCl_2 \cdot 6H_2O$). They are relatively inexpensive but can suffer from segregation and subcooling.
*   **Paraffins (Organic Compounds):** Hydrocarbons with a range of melting points. They are chemically stable and don't segregate, but are more expensive and less thermally conductive than salt hydrates.
*   **Metallic Alloys:** Offer high thermal conductivity and melting points, but are generally more expensive.

**Example (Tiwari & Ghosal, 2007):**
Consider a solar collector operating at 100°C. A PCM with a melting point of 100°C would absorb a large amount of heat as it melts from solid to liquid without its temperature rising above 100°C. This stored latent heat can later be released to maintain the 100°C temperature as the PCM solidifies.

#### 2.3 Thermochemical Storage

Thermochemical storage involves reversible chemical reactions where heat is absorbed or released. These systems can potentially offer very high energy storage densities.

**Principle:**
Involves chemical reactions where:
*   **Endothermic Reaction:** Absorbs heat, storing energy in chemical bonds.
*   **Exothermic Reaction:** Releases heat when the reaction is reversed, recovering the stored energy.

**Key Characteristics:**

*   **Very High Energy Density:** Can store large amounts of energy in a small volume.
*   **Long-Term Storage:** Energy is stored in chemical bonds, allowing for potentially long-duration storage with minimal loss.
*   **Complexity:** Requires sophisticated reactor designs and control systems.

**Storage Materials/Reactions:**

*   **Absorption/Adsorption Pairs:** Solid sorbents (e.g., zeolites, metal hydrides) that absorb/adsorb a fluid (e.g., water, ammonia) endothermically. The reverse reaction, releasing the fluid exothermically, recovers the stored heat.
*   **Decomposition Reactions:** Reversible decomposition of compounds like metal carbonates or hydroxides. For example, $Ca(OH)_2 \leftrightarrow CaO + H_2O$. The forward reaction (decomposition) requires heat, and the reverse reaction (hydration) releases heat.

**Example (Tester et al., 2006):**
A thermochemical storage system might involve heating a metal hydride, causing it to release hydrogen gas. The hydrogen is stored separately. When heat is needed, the hydrogen is recombined with the metal hydride, releasing the stored heat.

---

### 3. Photovoltaic (PV) System for Power Generation

Photovoltaic systems directly convert solar radiation into electricity using the photovoltaic effect in semiconductor materials.

**Key Concepts:**

*   **Photovoltaic Effect:** The generation of an electromotive force (voltage) across a material when it is exposed to light.
*   **Semiconductor Materials:** Materials like silicon, which have electrical conductivity between that of a conductor and an insulator, and whose conductivity can be altered by impurities (doping).

**Principle of Working (Solar Cells):**

1.  **Photon Absorption:** When sunlight (photons) strikes a semiconductor material (typically silicon), the photons with sufficient energy are absorbed.
2.  **Electron-Hole Pair Generation:** This absorption excites electrons in the semiconductor lattice, creating free electrons and "holes" (vacancies left by electrons).
3.  **Charge Separation:** A built-in electric field at the p-n junction of the semiconductor material separates these charge carriers. Electrons are swept to the n-type side, and holes are swept to the p-type side.
4.  **Current Flow:** When an external circuit is connected, the separated electrons flow through the circuit to the p-type side to recombine with holes, creating an electric current.

---

### 4. Solar Pond

A solar pond is a large, shallow basin of water with a high concentration of salt at the bottom and a lower concentration near the surface. This layered structure creates a "solar gradient" that traps heat.

**Principle of Working:**

1.  **Sunlight Penetration:** Sunlight penetrates the clear surface layer of the pond.
2.  **Heat Absorption:** The dark bottom layer of the pond (often a liner) absorbs the solar radiation and heats the water.
3.  **Convection Suppression:** The salt gradient prevents natural convection. Hotter, less dense water at the bottom cannot rise through the cooler, denser salt layers above it. This effectively insulates the hot bottom layer.
4.  **Heat Extraction:** Heat can be extracted from the hot, saline bottom layer by circulating the water through a heat exchanger to generate electricity (often using a Rankine cycle with a low-boiling-point fluid like R-11).

**Key Characteristics:**

*   **Low Efficiency:** Solar ponds typically have low overall thermal conversion efficiencies.
*   **Large Surface Area:** Require significant land area.
*   **Cost-Effective for Specific Applications:** Can be cost-effective for electricity generation in regions with high solar radiation and available land.

**Example:** The Dead Sea is a large natural salt pond. Industrial solar ponds are designed to mimic this effect for energy generation.

---

### 5. Solar Cells

Solar cells are the fundamental building blocks of PV systems.

#### 5.1 Types of Solar Cells

Solar cells are classified based on the semiconductor materials used and their manufacturing processes.

**1. Crystalline Silicon (c-Si) Solar Cells:**
The most dominant technology in the market.

*   **Monocrystalline Silicon (mono-Si):**
    *   **Description:** Made from a single, continuous crystal lattice of silicon.
    *   **Characteristics:** High purity, uniform structure, higher efficiency (15-22%), higher cost due to complex manufacturing.
    *   **Appearance:** Usually have rounded or octagonal corners due to the cylindrical shape of silicon ingots.

*   **Polycrystalline Silicon (poly-Si):**
    *   **Description:** Made from multiple silicon crystals melted and solidified together.
    *   **Characteristics:** Lower purity and more grain boundaries than mono-Si, resulting in lower efficiency (13-18%), lower cost, easier manufacturing.
    *   **Appearance:** Typically have a mosaic-like pattern of visible crystal grains.

**2. Thin-Film Solar Cells:**
Manufactured by depositing thin layers of photovoltaic materials onto a substrate.

*   **Cadmium Telluride (CdTe) Cells:**
    *   **Description:** Consist of a layer of CdTe deposited on a substrate (often glass).
    *   **Characteristics:** Lower cost, flexible manufacturing, good performance in low light conditions, efficiency typically 10-18%. Environmental concerns regarding cadmium toxicity exist.

*   **Copper Indium Gallium Selenide (CIGS) Cells:**
    *   **Description:** Made from a compound semiconductor of copper, indium, gallium, and selenium.
    *   **Characteristics:** Higher efficiency than CdTe (up to 20%), good performance, but more complex manufacturing.

*   **Amorphous Silicon (a-Si) Cells:**
    *   **Description:** Silicon deposited in a non-crystalline, disordered atomic structure.
    *   **Characteristics:** Lower efficiency (6-10%), can be deposited on flexible substrates, cost-effective for low-power applications (e.g., calculators, small electronics), can degrade over time under light.

**3. Emerging/Next-Generation Solar Cells:**

*   **Perovskite Solar Cells:**
    *   **Description:** Utilize perovskite crystal structures as the light-harvesting active layer.
    *   **Characteristics:** Rapidly increasing efficiency (approaching 25%), low manufacturing cost potential, can be printed, but face challenges with stability and lead content.

*   **Organic Photovoltaics (OPVs):**
    *   **Description:** Use organic (carbon-based) molecules or polymers as the active material.
    *   **Characteristics:** Flexible, transparent, low manufacturing cost potential, but have lower efficiency and shorter lifespan compared to silicon.

*   **Dye-Sensitized Solar Cells (DSSCs):**
    *   **Description:** Use a layer of dye molecules adsorbed onto a wide-bandgap semiconductor (like $TiO_2$) to absorb light.
    *   **Characteristics:** Low cost, can be semi-transparent, but have moderate efficiency and potential stability issues.

#### 5.2 Principle of Working (Solar Cells)

As described in Section 3, the core principle is the **photovoltaic effect**:
1.  **Photon Absorption:** Sunlight hits the semiconductor.
2.  **Electron-Hole Pair Generation:** Photons create electron-hole pairs.
3.  **Charge Separation:** The internal electric field at the p-n junction separates these carriers.
4.  **Current Generation:** External circuit allows electrons to flow, creating electricity.

#### 5.3 Performance Characteristics

*   **Open-Circuit Voltage ($V_{oc}$):** The maximum voltage across the solar cell when no current is flowing (infinite load resistance).
*   **Short-Circuit Current ($I_{sc}$):** The maximum current that can be drawn from the solar cell when the terminals are short-circuited (zero load resistance).
*   **Fill Factor (FF):** A measure of the "squareness" of the I-V curve, representing how close the cell's maximum power output is to the product of $V_{oc}$ and $I_{sc}$.
    $FF = \frac{V_{mp} \cdot I_{mp}}{V_{oc} \cdot I_{sc}}$
    Where $V_{mp}$ and $I_{mp}$ are the voltage and current at the maximum power point.
*   **Maximum Power Point (MPP):** The point on the I-V curve where the product of voltage and current is maximized, representing the peak power output of the cell.
*   **Efficiency ($\eta$):** The ratio of the maximum electrical power output to the incident solar power.
    $\eta = \frac{P_{max}}{P_{in}} = \frac{V_{mp} \cdot I_{mp}}{A \cdot G_{in}} \times 100\%$
    Where:
    *   $P_{max}$ is the maximum power output.
    *   $P_{in}$ is the incident solar power.
    *   $A$ is the area of the solar cell ($m^2$).
    *   $G_{in}$ is the incident solar irradiance ($W/m^2$).
*   **Temperature Coefficient:** Solar cell performance degrades with increasing temperature. The temperature coefficient indicates how much the voltage and power decrease per degree Celsius increase in temperature.

**Important Point to Remember:** The performance of solar cells is typically rated under Standard Test Conditions (STC): 1000 $W/m^2$ irradiance, AM1.5 spectrum, and 25°C cell temperature. Real-world performance will vary.

#### 5.4 Production Process (Block Diagram Only)

This outlines the general process for manufacturing crystalline silicon solar cells.

```mermaid
graph TD
    A[Silicon Ingot Growth] --> B{Wafer Slicing};
    B --> C[Wafer Cleaning];
    C --> D[Texturing];
    D --> E[Diffusion (p-n Junction)];
    E --> F[Edge Isolation];
    F --> G[Anti-Reflective Coating (ARC) Deposition];
    G --> H[Metallization (Front & Back Contacts)];
    H --> I[Screen Printing/Firing];
    I --> J[Testing & Sorting];
    J --> K[Assembly into Modules];

    classDef process fill:#f9f,stroke:#333,stroke-width:2px;
    class A,B,C,D,E,F,G,H,I,J,K process;
```

---

### Practice Questions

**Question 1:**
Explain the difference between sensible heat storage and latent heat storage in the context of solar thermal electric power generation. Provide an example material for each. (CO1, K2)

**Answer:**
*   **Sensible Heat Storage:** Stores heat by changing the temperature of a material. Heat stored ($Q = m \cdot c_p \cdot \Delta T$). Example: Molten salts (like nitrates), water, oils.
*   **Latent Heat Storage:** Stores heat by utilizing the phase change of a material at a constant temperature. Heat stored ($Q = m \cdot L$). Example: Paraffins, salt hydrates.

**Question 2:**
Describe the basic principle of operation of a solar cell. (CO1, K2)

**Answer:**
A solar cell works on the photovoltaic effect. When photons from sunlight strike a semiconductor material, they excite electrons, creating electron-hole pairs. A built-in electric field at the p-n junction separates these carriers, causing electrons to flow through an external circuit, generating electricity.

**Question 3:**
List three types of solar cells and briefly mention a key characteristic of each. (CO1, K2)

**Answer:**
1.  **Monocrystalline Silicon:** High efficiency (15-22%), made from a single silicon crystal.
2.  **Cadmium Telluride (CdTe):** Lower cost, good performance in low light, but uses cadmium.
3.  **Perovskite:** High efficiency potential, low manufacturing cost, but stability issues.

**Question 4:**
What is the primary function of thermal energy storage in a solar thermal electric power plant? (CO1, K2)

**Answer:**
The primary function is to store thermal energy generated from solar radiation, allowing the plant to continue producing electricity during periods when sunlight is not available (e.g., at night, during cloudy weather), thus ensuring a more consistent and dispatchable power output.

**Question 5:**
A solar pond is designed to suppress convection. What is the physical property that enables this suppression? (CO1, K2)

**Answer:**
The physical property is the **salt gradient** (or concentration gradient) in the water. The higher salt concentration at the bottom makes the water denser, preventing the warmer, less dense water at the bottom from rising and mixing with the cooler layers above.

---

### Important Points to Remember

*   **STE vs. PV:** STE uses thermal energy to drive a turbine, while PV directly converts sunlight to electricity.
*   **TES is Crucial for STE:** Thermal energy storage (sensible, latent, or thermochemical) is vital for making STE systems dispatchable and reliable.
*   **Solar Cell Performance:** Key metrics include $V_{oc}$, $I_{sc}$, Fill Factor, and Efficiency. Performance is highly dependent on temperature and irradiance.
*   **Crystalline Silicon Dominance:** Monocrystalline and polycrystalline silicon cells are the most widely used solar cell technologies.
*   **Thin-Film Advantages:** Thin-film cells offer potential for lower cost and flexibility but generally have lower efficiencies.
*   **Solar Pond Insulation:** The salt gradient is the key to preventing heat loss through convection in a solar pond.

---

This study material covers the core aspects of solar thermal electric power generation, thermal energy storage, and photovoltaic systems as per the learning outcomes and course objectives. The references provided in the prompt offer more in-depth information on these topics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
