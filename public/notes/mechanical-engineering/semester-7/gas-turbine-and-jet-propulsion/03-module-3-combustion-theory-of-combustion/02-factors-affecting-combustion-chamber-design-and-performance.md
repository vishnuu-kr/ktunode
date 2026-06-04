---
title: "factors affecting combustion chamber design and performance"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 3: Combustion – Theory of Combustion"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cb1"
status: "completed"
scrapedAt: "2026-05-20T18:14:00.069Z"
---
## GAS TURBINE AND JET PROPULSION

### Module 3: Combustion – Theory of Combustion

#### Topic: Factors Affecting Combustion Chamber Design and Performance

---

**Introduction**

The combustion chamber, or combustor, is a critical component in a gas turbine engine. Its primary function is to burn fuel efficiently and completely at high temperatures and pressures, converting chemical energy into thermal energy. The design and performance of the combustion chamber directly influence the overall efficiency, performance, reliability, and emissions of the gas turbine. This module delves into the key factors that govern the design and performance of these vital components, drawing upon established principles and practical considerations from leading textbooks.

---

### 1. Key Concepts and Definitions

*   **Combustion Efficiency ($\eta_{comb}$):** The ratio of the actual heat released to the theoretical maximum heat that could be released by the fuel. It's a measure of how completely the fuel is burned.
    *   $\eta_{comb} = \frac{\text{Actual heat released}}{\text{Theoretical maximum heat released}}$
*   **Pressure Loss ($\Delta P$):** The reduction in static pressure across the combustion chamber due to friction, flow separation, and acceleration of the gas. Minimizing pressure loss is crucial for engine efficiency.
*   **Temperature Rise ($\Delta T$):** The increase in gas temperature across the combustion chamber, a direct result of fuel combustion. This is a primary driver for the turbine's work output.
*   **Pattern Factor (PF):** A measure of the uniformity of the temperature distribution at the combustor exit. A uniform temperature profile is essential for preventing hot spots in the turbine blades.
    *   $PF = \frac{T_{max} - T_{avg}}{T_{avg} - T_{in}}$ where $T_{max}$ is the maximum exit temperature, $T_{avg}$ is the average exit temperature, and $T_{in}$ is the inlet temperature.
*   **Pattern Factor (PF) - Rolls Royce (The Jet Engine):** Rolls Royce emphasizes the importance of a low pattern factor to ensure longevity and performance of downstream turbine components.
*   **Blow-off:** The condition where combustion ceases due to insufficient air or fuel flow, or excessive airflow velocity.
*   **Rich Blow-out (RBO):** Blow-off occurring when the air-fuel ratio is too rich.
*   **Lean Blow-out (LBO):** Blow-off occurring when the air-fuel ratio is too lean.
*   **Ignition:** The process of initiating combustion.
*   **Stability:** The ability of the combustor to maintain stable combustion over a wide range of operating conditions (fuel flow, air flow, pressure).
*   **Emissions:** Unburned hydrocarbons (UHC), carbon monoxide (CO), nitrogen oxides (NOx), and smoke are undesirable byproducts of combustion.

---

### 2. Factors Affecting Combustion Chamber Design and Performance

**2.1 Air-Fuel Ratio (AFR)**

*   **Stoichiometric AFR:** The theoretically ideal ratio of air to fuel required for complete combustion. For kerosene, it's approximately 15:1.
*   **Operating AFR:** In gas turbines, the AFR is always higher than stoichiometric (leaner) to keep the peak combustion temperature below the material limits of the turbine blades and to ensure stable operation. Typical operating AFRs range from 50:1 to 70:1.
*   **Effect on Combustion Efficiency:**
    *   **Rich mixtures:** Lead to incomplete combustion (CO, UHC, smoke).
    *   **Lean mixtures:** Can lead to lean blow-off if too lean, reducing combustion efficiency.
*   **Effect on Temperature Rise:** Higher AFR (leaner mixture) results in a lower peak combustion temperature.
*   **Effect on Pressure Loss:** The AFR doesn't directly cause pressure loss but influences the volume of gases and their properties, which indirectly affects pressure loss.
*   **Textbook Reference:**
    *   **Ganesan (Gas Turbines):** Discusses the importance of AFR for managing combustion temperatures and preventing material failure.
    *   **Yahya (Turbines, Compressors and Fans):** Explains the trade-offs between AFR, efficiency, and emissions.

**2.2 Residence Time**

*   **Definition:** The average time that the fuel-air mixture spends within the combustion chamber.
*   **Importance:** Sufficient residence time is required for the chemical reactions of combustion to complete, ensuring high combustion efficiency.
*   **Factors Influencing Residence Time:**
    *   **Volume of the combustion chamber.**
    *   **Mass flow rate of air.**
    *   **Density of the gas mixture.**
*   **Design Considerations:** The volume of the combustor is designed to provide adequate residence time for the given airflow and fuel flow rates.
*   **Textbook Reference:**
    *   **Mathur & Mathur (Gas Turbine & Jet Rocket Propulsion):** Highlights residence time as a key parameter for achieving complete combustion.

**2.3 Air Swirl and Mixing**

*   **Primary Air:** The air used for combustion.
*   **Secondary Air:** The air used for cooling the chamber walls and diluting the hot combustion gases to a suitable turbine inlet temperature.
*   **Tertorial Air:** Sometimes used for further dilution.
*   **Swirlers:** Devices (e.g., vanes) at the inlet of the combustor that impart a swirling motion to the incoming air.
*   **Benefits of Swirl:**
    *   **Improved Mixing:** Promotes rapid and uniform mixing of fuel and air, leading to higher combustion efficiency and reduced formation of CO and UHC.
    *   **Recirculation Zone:** Creates a stable recirculation zone at the front of the combustor, which helps to anchor the flame and prevent blow-off.
*   **Textbook Reference:**
    *   **Cohen & Rogers (Gas Turbine Theory):** Details the role of swirl and mixing in achieving stable and efficient combustion, particularly in lean-premixed designs.
    *   **Rolls Royce (The Jet Engine):** Illustrates how airflow management and mixing are critical for performance and emissions in modern jet engines.

**2.4 Temperature and Pressure**

*   **Inlet Temperature and Pressure:** These are determined by the upstream compressor and affect the ignition and combustion process. Higher inlet pressures generally improve combustion efficiency and reduce combustor volume.
*   **Peak Combustion Temperature:** Must be controlled to be below the melting point of turbine blade materials. This is achieved through dilution with secondary and tertiary air.
*   **Effect on Reaction Rates:** Higher temperatures generally increase the rate of chemical reactions, promoting more complete combustion, but also increase NOx formation.
*   **Effect on Blow-off Limits:** Higher pressures and temperatures generally widen the stable operating range (reduces the likelihood of blow-off).
*   **Textbook Reference:**
    *   **Ganesan (Gas Turbines):** Explains how the operating conditions (pressure, temperature) influence the design requirements and performance.

**2.5 Fuel Atomization and Vaporization**

*   **Liquid Fuels:** For liquid fuels, efficient atomization (breaking the fuel into fine droplets) and vaporization are crucial for complete combustion.
*   **Atomizers:** Fuel nozzles (e.g., simplex, air-assist, dual-flow) are used to achieve fine droplet sizes.
*   **Vaporization:** The process of converting liquid fuel into a gaseous state, which then mixes with air for combustion.
*   **Droplet Size:** Smaller droplet sizes lead to faster vaporization and better mixing, improving combustion efficiency.
*   **Impact on Emissions:** Poor atomization can lead to unburned fuel and smoke.
*   **Textbook Reference:**
    *   **Mathur & Mathur (Gas Turbine & Jet Rocket Propulsion):** Provides detailed information on different types of fuel nozzles and their performance.

**2.6 Heat Release Rate**

*   **Definition:** The rate at which chemical energy is converted into thermal energy through combustion.
*   **Design Impact:** The combustor must be designed to accommodate the heat release rate without overheating the walls.
*   **Factors Affecting Heat Release Rate:**
    *   **Fuel flow rate.**
    *   **Lower Heating Value (LHV) of the fuel.**
    *   **Combustion efficiency.**
*   **Textbook Reference:**
    *   **Yahya (Turbines, Compressors and Fans):** Relates heat release rate to the overall engine performance and thermal load on the combustor.

**2.7 Emissions Control**

*   **NOx Formation:** Primarily formed at high temperatures through the Zeldovich mechanism.
*   **CO and UHC:** Formed due to incomplete combustion, often in rich zones or due to insufficient residence time.
*   **Smoke:** Formed by the incomplete combustion of heavier hydrocarbon molecules, leading to soot formation.
*   **Design Strategies for Emissions Reduction:**
    *   **Lean-premixed combustion:** Pre-mixing fuel and air at lean conditions before combustion significantly reduces NOx and CO.
    *   **Staged combustion:** Introducing fuel in stages to control the temperature profile and minimize high-temperature zones.
    *   **Rich-burn, Quick-quench, Lean-burn (RQL):** A staged combustion approach where fuel is initially burned rich, then rapidly quenched and diluted with air to achieve lean conditions before final combustion.
*   **Textbook Reference:**
    *   **Ganesan (Gas Turbines):** Discusses various strategies for controlling NOx, CO, and smoke emissions in modern gas turbine combustors.
    *   **Rolls Royce (The Jet Engine):** Provides insights into the evolution of combustor designs for meeting stringent environmental regulations.

**2.8 Aerodynamics and Flow Patterns**

*   **Flow Separation:** Can occur in regions of adverse pressure gradients, leading to recirculation zones and potential flame instability or incomplete combustion.
*   **Swirl:** As discussed earlier, swirl is crucial for good mixing and flame stabilization.
*   **Pressure Drop:** Aerodynamic design aims to minimize pressure drop across the combustor while ensuring effective mixing and stable combustion.
*   **Turbulence:** Turbulence within the combustor enhances mixing and heat transfer, but excessive turbulence can lead to flame detachment.
*   **Textbook Reference:**
    *   **Yahya (Turbines, Compressors and Fans):** Emphasizes the interplay between aerodynamics and combustion processes.

**2.9 Wall Cooling**

*   **Thermal Load:** The combustion process generates extremely high temperatures, posing a significant thermal challenge to the combustor liner.
*   **Cooling Techniques:**
    *   **Liner Cooling:** Air bled from the compressor is used to cool the combustor liner.
    *   **Film Cooling:** A layer of cooler air is injected through small holes in the liner to create a protective film.
    *   **Transpiration Cooling:** A more advanced technique where air permeates through a porous liner.
*   **Impact on Performance:** Excessive cooling air reduces the overall mass flow through the turbine, thus reducing engine performance.
*   **Textbook Reference:**
    *   **Ganesan (Gas Turbines):** Details various methods of liner cooling and their impact on thermal management.

**2.10 Combustion Chamber Geometry**

*   **Types of Combustion Chambers:**
    *   **Tubular/Can Combustor:** Individual can-like chambers arranged around the engine axis.
    *   **Annular Combustor:** A single annular chamber surrounding the engine axis. More compact and efficient.
    *   **Cannular Combustor:** A hybrid, featuring multiple cans within an annular casing.
*   **Design Considerations for Geometry:**
    *   **Flame stabilization.**
    *   **Mixing efficiency.**
    *   **Pressure loss.**
    *   **Size and weight.**
    *   **Ease of maintenance.**
*   **Textbook Reference:**
    *   **Mathur & Mathur (Gas Turbine & Jet Rocket Propulsion):** Provides a comparative analysis of different combustor geometries and their advantages.
    *   **Yahya (Turbines, Compressors and Fans):** Discusses how geometry affects flow patterns and residence times.

---

### 3. Aligning with Course Outcomes

*   **CO1 (Thermodynamics & Fluid Dynamics):** This topic directly applies thermodynamic principles (heat release, temperature rise) and fluid dynamic principles (airflow, mixing, pressure loss) to understand gas turbine performance and efficiency. The understanding of AFR, residence time, and aerodynamic effects are central to this outcome. (Knowledge Level: K3)
*   **CO2 (Compressors & Turbines):** While primarily focused on the combustor, the combustor's exit temperature and uniformity (pattern factor) directly impact turbine performance and longevity. The efficiency of the combustor influences the overall cycle efficiency, which is a key aspect of compressor and turbine analysis. (Knowledge Level: K4)
*   **CO3 (Gas Turbine System Performance):** The combustion chamber is a crucial component. Its efficiency, pressure loss, and exit temperature profile significantly impact the overall performance metrics of the gas turbine system (thrust, power output, efficiency). Understanding the factors affecting its performance is essential for analyzing the system. (Knowledge Level: K4)
*   **CO4 (Jet & Rocket Propulsion):** The principles of combustion discussed here are fundamental to understanding how jet engines generate thrust. The complete combustion of fuel to produce high-velocity exhaust gases is the core of jet propulsion. (Knowledge Level: K2)

---

### 4. Important Points to Remember

*   **Balance:** Combustor design involves a complex balance between achieving high combustion efficiency, minimizing pressure loss, ensuring stable operation, managing thermal loads, and controlling emissions.
*   **Lean Operation:** Gas turbine combustors operate with lean air-fuel ratios to limit peak temperatures and prevent damage to turbine components.
*   **Mixing is Key:** Effective mixing of fuel and air, often aided by swirl, is critical for high combustion efficiency and low emissions.
*   **Exit Temperature Uniformity:** A uniform temperature profile at the combustor exit (low pattern factor) is vital for the life of turbine blades.
*   **Emissions Regulations:** Modern combustor design is heavily influenced by the need to meet strict environmental regulations regarding NOx, CO, UHC, and smoke.
*   **Material Limitations:** The extreme temperatures and pressures necessitate advanced materials and cooling techniques for the combustor liner.

---

### 5. Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain why gas turbine combustors operate with a lean air-fuel ratio, and discuss the consequences of operating with a very rich or very lean mixture.

**Answer:**
Gas turbine combustors operate with a lean air-fuel ratio (AFR) significantly above the stoichiometric value (e.g., 50:1 or higher compared to ~15:1 for kerosene) primarily to limit the peak combustion temperature. The temperature of the combustion gases directly affects the turbine inlet temperature (TIT), which must be kept below the maximum allowable temperature for the turbine blades to prevent material failure due to melting or creep.
*   **Very Rich Mixture:** Leads to incomplete combustion, producing high levels of unburned hydrocarbons (UHC), carbon monoxide (CO), and smoke. It also results in lower temperatures, which might seem beneficial for the turbine but is inefficient and environmentally unacceptable.
*   **Very Lean Mixture:** While reducing NOx, a very lean mixture can lead to flame instability and the phenomenon of lean blow-off (LBO), where combustion ceases, shutting down the engine. It also reduces the overall thermal efficiency as less chemical energy is converted to heat.

**Question 2 (Design Application):**
Describe the role of air swirl in a gas turbine combustion chamber. How does it contribute to both combustion efficiency and stability?

**Answer:**
Air swirl is imparted to the incoming air, typically by guide vanes at the combustor inlet, to create a vortex flow. This swirl has several crucial roles:
*   **Improved Mixing:** The swirling motion promotes intense mixing of fuel and air. This rapid and uniform mixing ensures that pockets of rich or lean mixture are minimized, leading to more complete combustion and higher combustion efficiency. It also reduces the formation of CO and UHC.
*   **Flame Stabilization:** The centrifugal forces generated by the swirl create a region of high turbulence and recirculation at the front of the combustion chamber, often referred to as the "recirculation zone" or "flame-holding zone." This zone has lower axial velocity, allowing the combustion products to recirculate upstream and re-ignite the incoming fresh fuel-air mixture. This continuous reignition process anchors the flame and prevents it from being blown away by the main airflow, thus enhancing flame stability over a wider range of operating conditions.

**Question 3 (Performance Calculation - Conceptual):**
A gas turbine combustor has an inlet temperature of 600 K and an outlet temperature of 1500 K. The fuel has a lower heating value (LHV) of 43 MJ/kg. If the mass flow rate of air is 20 kg/s and the fuel flow rate is 0.3 kg/s, estimate the combustion efficiency of the combustor. Assume the specific heat of air is approximately constant at 1.005 kJ/kg·K.

**Solution:**
First, calculate the heat released by the fuel:
Actual Heat Released = Fuel Flow Rate × LHV
Actual Heat Released = 0.3 kg/s × 43 MJ/kg = 0.3 kg/s × 43,000 kJ/kg = 12,900 kJ/s

Next, calculate the heat absorbed by the air (and combustion products, assuming they behave similarly to air for this calculation):
Heat Absorbed = Mass Flow Rate × Specific Heat × Temperature Rise
Mass Flow Rate = Air Flow Rate + Fuel Flow Rate = 20 kg/s + 0.3 kg/s = 20.3 kg/s (approximately 20 kg/s for simplicity as fuel flow is small)
Temperature Rise = Outlet Temperature - Inlet Temperature = 1500 K - 600 K = 900 K
Heat Absorbed ≈ 20 kg/s × 1.005 kJ/kg·K × 900 K = 18,090 kJ/s

Now, we can estimate the combustion efficiency:
$\eta_{comb} = \frac{\text{Actual heat released}}{\text{Theoretical maximum heat released}}$
In this context, the "heat absorbed" is assumed to represent the actual heat released effectively. The theoretical maximum heat released is the LHV multiplied by the fuel flow rate. So, we equate them for efficiency calculation.
$\eta_{comb} = \frac{\text{Heat Absorbed}}{\text{Actual Heat Released}} \times 100\%$
$\eta_{comb} = \frac{18,090 \text{ kJ/s}}{12,900 \text{ kJ/s}} \times 100\%$

**Correction/Refinement:** The calculation above is conceptually flawed as it implies the heat absorbed by the air is greater than the heat released by the fuel. The actual heat released by the fuel *is* the source of the temperature rise. The equation for efficiency should use the heat gained by the working fluid.

**Corrected Calculation:**
Actual heat added to the working fluid = (Mass flow rate of air + fuel) * Cp * (T_out - T_in)
Assuming mass flow rate of air + fuel is approximately equal to air mass flow rate (20 kg/s) for simplicity, and Cp = 1.005 kJ/kg.K:
Heat Added = 20 kg/s * 1.005 kJ/kg.K * (1500 K - 600 K) = 20 * 1.005 * 900 = 18090 kJ/s

Heat released by fuel = Fuel flow rate * LHV
Heat released by fuel = 0.3 kg/s * 43,000 kJ/kg = 12900 kJ/s

Combustion Efficiency ($\eta_{comb}$) is the ratio of heat effectively transferred to the gas to the total heat available from the fuel.
$\eta_{comb} = \frac{\text{Heat Added}}{\text{Heat Released by Fuel}} \times 100\%$
$\eta_{comb} = \frac{18090 \text{ kJ/s}}{12900 \text{ kJ/s}} \times 100\%$
$\eta_{comb} \approx 140.2\%$

**Analysis of Result:** This result (140.2%) is impossible, indicating an error in the problem statement or assumptions. It suggests that the given temperatures and flow rates are inconsistent with the fuel's energy content if the specific heat is constant. In a real scenario, this discrepancy would point to:
1.  **Inaccurate input values:** The provided temperature rise or flow rates might be incorrect.
2.  **Assumption of constant Cp:** The specific heat of the gas mixture changes significantly with temperature and composition, especially after combustion. A constant Cp would be an oversimplification for such a large temperature rise.
3.  **Heat losses:** Real combustors experience heat losses to the surroundings, which would reduce the heat added to the gas.

However, if we assume the question intends to test the calculation of heat added and fuel energy, the methodology is as shown. For a realistic scenario, combustion efficiency is typically very high, often above 95%. Let's re-evaluate the question's intent. Perhaps the question intends to ask for the *efficiency of energy utilization* rather than strictly combustion efficiency.

Let's assume the heat added to the working fluid (18090 kJ/s) is the *actual* heat released, and the fuel energy available is the *theoretical* heat.
Theoretical heat available = 12900 kJ/s
Actual heat transferred to fluid = 18090 kJ/s

This still leads to an impossible efficiency. A more realistic problem would present values that result in an efficiency less than 100%.

**Let's modify the question to be more realistic:**
If the combustion efficiency is 98%, what would be the expected outlet temperature?
Actual heat released = 0.98 * 12900 kJ/s = 12642 kJ/s
This heat is added to the working fluid (mass flow rate of ~20 kg/s, Cp = 1.005 kJ/kg.K).
$\Delta T = \frac{\text{Actual heat released}}{\text{Mass flow rate} \times C_p} = \frac{12642 \text{ kJ/s}}{20 \text{ kg/s} \times 1.005 \text{ kJ/kg.K}} = \frac{12642}{20.1} \approx 629 \text{ K}$
Expected Outlet Temperature = Inlet Temperature + $\Delta T$ = 600 K + 629 K = 1229 K.

This revised example demonstrates how combustion efficiency impacts the outlet temperature.

**Question 4 (Problem Solving - Emissions):**
A lean-premixed (LPM) combustor is being designed for a new gas turbine. What are the primary advantages of LPM technology for reducing emissions, and what potential challenges need to be addressed during design?

**Answer:**
**Advantages of Lean-Premixed (LPM) Combustors for Emissions Reduction:**
*   **Reduced NOx:** The primary advantage of LPM technology is its ability to significantly reduce Nitrogen Oxide (NOx) emissions. In LPM combustors, the fuel and air are pre-mixed at a lean air-fuel ratio (much leaner than stoichiometric) before entering the primary reaction zone. This results in a more uniform and lower peak flame temperature compared to diffusion flames found in conventional combustors. Since NOx formation is highly dependent on temperature (exponentially with temperature via the Zeldovich mechanism), lowering the peak temperature drastically reduces NOx formation.
*   **Reduced CO and UHC:** While lean operation can lead to incomplete combustion if not managed properly, the excellent mixing achieved in LPM designs ensures that the mixture is sufficiently homogeneous. This leads to more complete combustion, thus minimizing the formation of Carbon Monoxide (CO) and Unburned Hydrocarbons (UHC).

**Potential Challenges in LPM Combustor Design:**
*   **Lean Blow-out (LBO):** Operating at very lean conditions makes the flame inherently less stable. The combustor must be designed to maintain stable combustion across the entire engine operating range, from idle to full load, without experiencing lean blow-out. This requires careful management of airflow, mixing, and flame holding mechanisms.
*   **Combustion Instabilities (Chirping/Screeching):** The rapid mixing and the potential for resonant acoustic phenomena can lead to combustion instabilities. These instabilities can cause large pressure oscillations, leading to mechanical damage to the engine components. Advanced aerodynamic and acoustic design techniques are required to suppress these instabilities.
*   **Pattern Factor:** While LPM aims for uniformity, achieving an extremely uniform temperature profile at the combustor exit without introducing significant pressure loss can be challenging. The distribution of fuel and air and the swirling motion need precise control.
*   **Durability:** The increased airflow through the combustor for LPM operation can lead to higher velocities and potentially increased cooling air requirements, which can affect thermal management and overall efficiency.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
