---
title: "grand sensible heat factor"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f89"
status: "completed"
scrapedAt: "2026-05-20T18:17:39.087Z"
---
# Module 4: Psychrometry and Applied Psychrometry - Grand Sensible Heat Factor

This module delves into the fundamental principles of psychrometry, the study of the thermodynamic properties of moist air, and its application in air conditioning systems. We will focus on understanding and calculating the Grand Sensible Heat Factor, a crucial parameter for designing and evaluating air conditioning processes.

---

## 1. Introduction to Psychrometry

Psychrometry is essential for understanding how air behaves in terms of its temperature, humidity, and related properties. This knowledge is fundamental to designing effective air conditioning systems that control the thermal comfort of occupants and the conditions required for various industrial processes.

### Key Concepts and Definitions:

*   **Moist Air:** A mixture of dry air and water vapor.
*   **Dry Air:** Air that contains no water vapor. It's primarily composed of nitrogen (approximately 78%), oxygen (approximately 21%), and small amounts of other gases like argon and carbon dioxide.
*   **Water Vapor:** Gaseous form of water present in the air.
*   **Humidity:** The amount of water vapor present in the air.
*   **Specific Humidity (ω) or Humidity Ratio (W):** The ratio of the mass of water vapor to the mass of dry air in a given quantity of moist air.
    *   Mathematically: $\omega = \frac{m_v}{m_a}$
    *   Units: kg of water vapor / kg of dry air (kgw/kga)
*   **Relative Humidity (RH):** The ratio of the actual partial pressure of water vapor in the air to the saturation pressure of water vapor at the same dry-bulb temperature, expressed as a percentage.
    *   Mathematically: $RH = \frac{P_v}{P_{vs}} \times 100\%$
    *   Where:
        *   $P_v$ = Partial pressure of water vapor
        *   $P_{vs}$ = Saturation pressure of water vapor at the dry-bulb temperature
*   **Dew Point Temperature ($T_{dp}$):** The temperature to which air must be cooled at constant pressure and humidity ratio for water vapor to begin condensing. At the dew point, the partial pressure of water vapor equals the saturation pressure at that temperature.
*   **Dry-Bulb Temperature ($T_{db}$):** The temperature of the air as measured by a standard thermometer, unaffected by the humidity of the air. This is the most common measure of air temperature.
*   **Wet-Bulb Temperature ($T_{wb}$):** The temperature read by a thermometer whose bulb is covered by a wet wick and exposed to a current of air. The cooling effect of evaporation from the wick causes the wet-bulb temperature to be lower than the dry-bulb temperature, unless the air is saturated.
*   **Enthalpy (h):** The total heat content of moist air, which includes the sensible heat of the dry air and the latent heat of the water vapor.
    *   For moist air, enthalpy is often expressed as: $h = h_a + \omega h_g$
    *   Where:
        *   $h_a$ = Enthalpy of dry air
        *   $\omega$ = Specific humidity
        *   $h_g$ = Enthalpy of water vapor
    *   A common approximation for enthalpy (in kJ/kg of dry air) is:
        $h \approx 1.006 \times T_{db} + \omega \times (2501 + 1.86 \times T_{db})$
        (This formula is typically found in textbooks like Arora C.P. and Kothandaraman's Data Book).
*   **Specific Volume (v):** The volume occupied by a unit mass of dry air, including the water vapor.

### Psychrometric Chart:

*   The psychrometric chart is a graphical representation of the thermodynamic properties of moist air at a given atmospheric pressure.
*   It plots various properties against dry-bulb temperature, allowing for the visualization and analysis of air conditioning processes.
*   Key properties plotted include: Dry-bulb temperature, wet-bulb temperature, dew point temperature, specific humidity, relative humidity, enthalpy, and specific volume.
*   **Reference:** Arora C.P. (4th edition/2021) and Kothandaraman's Data Book are excellent resources for understanding and using the psychrometric chart.

---

## 2. Sensible Heat and Latent Heat

In air conditioning, heat transfer into or out of the air can occur in two forms:

### Sensible Heat:

*   **Definition:** The heat that causes a change in the temperature of a substance without changing its state (e.g., heating dry air).
*   **Effect:** Leads to a change in the dry-bulb temperature of the air.
*   **Calculation:** The rate of sensible heat transfer ($Q_s$) is given by:
    $Q_s = m_a \times c_{pa} \times (T_{db, out} - T_{db, in})$
    *   Where:
        *   $m_a$ = Mass flow rate of dry air (kg/s)
        *   $c_{pa}$ = Specific heat of dry air at constant pressure (approx. 1.006 kJ/kg·K)
        *   $T_{db, out}$ = Final dry-bulb temperature
        *   $T_{db, in}$ = Initial dry-bulb temperature

### Latent Heat:

*   **Definition:** The heat that causes a change in the state of a substance without changing its temperature (e.g., evaporation of water into air or condensation of water vapor from air).
*   **Effect:** Leads to a change in the specific humidity (moisture content) of the air.
*   **Calculation:** The rate of latent heat transfer ($Q_l$) is given by:
    $Q_l = m_a \times h_{fg} \times (\omega_{out} - \omega_{in})$
    *   Where:
        *   $m_a$ = Mass flow rate of dry air (kg/s)
        *   $h_{fg}$ = Latent heat of vaporization of water (approx. 2501 kJ/kg at 0°C, varying slightly with temperature)
        *   $\omega_{out}$ = Final specific humidity
        *   $\omega_{in}$ = Initial specific humidity

### Total Heat:

*   **Definition:** The sum of sensible heat and latent heat.
*   **Calculation:** The rate of total heat transfer ($Q_t$) is given by:
    $Q_t = Q_s + Q_l$
    *   This is also equal to the change in enthalpy of the moist air:
        $Q_t = m_a \times (h_{out} - h_{in})$

---

## 3. Sensible Heat Factor (SHF)

The Sensible Heat Factor (SHF) is a critical parameter in air conditioning that describes the ratio of sensible heat load to the total heat load in a space or process. It helps in selecting the appropriate cooling or heating equipment and understanding the nature of the load.

### Definition of Sensible Heat Factor:

*   **Sensible Heat Factor (SHF):** The ratio of the sensible heat transfer rate to the total heat transfer rate in a process.
    *   Mathematically: $SHF = \frac{Q_s}{Q_t} = \frac{Q_s}{Q_s + Q_l}$

### Importance of SHF:

*   **Equipment Selection:** Different types of cooling coils and air treatment equipment have varying SHF capabilities. Knowing the required SHF of the process is crucial for selecting the correct equipment.
*   **Comfort Control:** The ratio of sensible to latent heat affects the perceived comfort. A high SHF implies that the primary need is to reduce temperature, while a low SHF indicates a significant need to dehumidify.
*   **System Design:** The SHF guides the design of cooling coils, bypasses, and recirculation strategies to achieve the desired supply air conditions.
*   **Psychrometric Process Analysis:** The SHF dictates the slope of the process line on the psychrometric chart.

### Types of Loads and their SHF:

| Load Type        | Description                                                                     | Typical SHF Range | Psychrometric Process Characteristic                                                                           |
| :--------------- | :------------------------------------------------------------------------------ | :---------------- | :------------------------------------------------------------------------------------------------------------- |
| **Sensible Load** | Heat gain that only affects temperature (e.g., heat from lights, people, solar). | 1.0               | Process line is horizontal (constant specific humidity, only $T_{db}$ changes).                               |
| **Latent Load**  | Heat gain that affects moisture content (e.g., respiration, perspiration, wet surfaces). | 0.0               | Process line is vertical (constant $T_{db}$, only $\omega$ changes).                                           |
| **Mixed Load**   | Combination of sensible and latent heat gains.                                  | 0.5 to 0.9        | Process line has a positive slope, indicating simultaneous changes in $T_{db}$ and $\omega$.                |
| **Dehumidification** | Cooling air below its dew point to remove moisture.                          | Very Low (< 0.5)  | Process line involves cooling and a significant decrease in $\omega$.                                          |
| **Humidification** | Adding moisture to the air without changing temperature.                       | 0.0 (for pure humidification) | Process line is vertical (constant $T_{db}$, increase in $\omega$).                                            |
| **Sensible Heating** | Heating air without adding moisture.                                           | 1.0 (for pure heating) | Process line is horizontal (constant $\omega$, increase in $T_{db}$).                                           |

**Important Point:** A higher SHF means a greater proportion of the total heat is sensible heat. A lower SHF means a greater proportion is latent heat.

---

## 4. Grand Sensible Heat Factor (GSHF)

The Grand Sensible Heat Factor is a concept used in air conditioning to analyze the overall sensible heat load relative to the total heat load for a more complex or multi-zone system, or when considering a specific air processing stage. While the basic SHF applies to a specific process (like cooling coil performance), the "Grand" aspect suggests a broader or combined perspective. However, it's crucial to clarify that the term "Grand Sensible Heat Factor" is not universally standardized in HVAC literature. It often refers to the **overall Sensible Heat Factor** of a system or a combination of processes.

For the purpose of this module, we will interpret "Grand Sensible Heat Factor" as the **Overall Sensible Heat Factor** for a specific conditioning process or a series of processes.

### Calculating GSHF for a Process:

The GSHF for a particular air conditioning process (e.g., cooling and dehumidifying air through a cooling coil) is calculated using the same formula as the basic SHF:

$GSHF = \frac{Q_s}{Q_t} = \frac{m_a \times c_{pa} \times (T_{db, in} - T_{db, out})}{m_a \times (h_{in} - h_{out})}$

This can also be expressed in terms of the difference in enthalpy components:

$GSHF = \frac{c_{pa} \times (T_{db, in} - T_{db, out})}{c_{pa} \times (T_{db, in} - T_{db, out}) + h_{fg} \times (\omega_{in} - \omega_{out})}$

### GSHF on the Psychrometric Chart:

*   Each process on the psychrometric chart can be represented by a straight line connecting the initial state (inlet) to the final state (outlet).
*   The slope of this line is directly related to the SHF.
*   A line with a steep slope (more vertical) corresponds to a lower SHF (significant latent heat effect).
*   A line with a shallow slope (more horizontal) corresponds to a higher SHF (significant sensible heat effect).

**Relationship between slope and SHF:**
The slope of the process line is given by:
$Slope = \frac{\Delta h}{\Delta T_{db}} = \frac{c_{pa} \times \Delta T_{db} + h_{fg} \times \Delta \omega}{ \Delta T_{db}} = c_{pa} + h_{fg} \frac{\Delta \omega}{\Delta T_{db}}$

From $SHF = \frac{Q_s}{Q_t} = \frac{m_a c_{pa} \Delta T_{db}}{m_a c_{pa} \Delta T_{db} + m_a h_{fg} \Delta \omega}$, we get:
$SHF = \frac{c_{pa} \Delta T_{db}}{c_{pa} \Delta T_{db} + h_{fg} \Delta \omega} = \frac{c_{pa}}{c_{pa} + h_{fg} \frac{\Delta \omega}{\Delta T_{db}}}$

This shows that as the ratio $\frac{\Delta \omega}{\Delta T_{db}}$ (which represents the slope) increases, the denominator increases, and the SHF decreases.

### Applications of GSHF in Air Conditioning Processes:

*   **Cooling and Dehumidification:**
    *   When air is passed over a cooling coil at a temperature below its dew point, both sensible and latent cooling occur. The GSHF of this process depends on the coil's surface temperature and the difference between the air's state and the coil's surface temperature.
    *   For a cooling coil, the process line typically moves from a higher enthalpy and dry-bulb temperature to a lower enthalpy and dry-bulb temperature.
*   **Reheating:**
    *   After dehumidification, air may need to be reheated to a comfortable dry-bulb temperature. This is a pure sensible heating process, so its GSHF is 1.0.
*   **Bypass Air:**
    *   To achieve a desired supply air condition with a specific GSHF, a portion of the return air might be bypassed around the cooling coil and mixed with the cooled and dehumidified air. This mixing process also has an associated GSHF.

---

## 5. Applied Psychrometry and GSHF in System Design

Understanding GSHF is crucial for designing effective air conditioning systems to meet specific load requirements.

### Load Estimation and GSHF:

*   **Sensible Heat Load:** Heat gain from occupants, lights, equipment, solar radiation through windows, and conduction through walls/roof.
*   **Latent Heat Load:** Moisture added by occupants (respiration, perspiration), infiltration of humid outdoor air, and processes like cooking or drying.
*   **Total Heat Load:** Sum of sensible and latent heat loads.

**Example:** A conference room might have a high sensible load due to people and lighting, but a lower latent load. An indoor swimming pool area will have a very high latent load due to evaporation from the water surface.

### GSHF of Air Conditioning Processes:

*   **Cooling Coils:**
    *   **Contact Factor (or Coil $\phi$):** This is the ratio of the change in enthalpy due to sensible cooling to the total enthalpy change possible across the coil if it were cooled to the coil surface temperature.
    *   $\phi = \frac{T_{db, out} - T_{coil}}{h_{out} - h_{coil}} = \frac{c_{pa}(T_{db, out} - T_{coil})}{c_{pa}(T_{db, out} - T_{coil}) + h_{fg}(\omega_{out} - \omega_{coil})}$
    *   The sensible heat factor of the air passing through the coil can be related to the contact factor and the bypass factor.
    *   **Bypass Factor (BF):** The fraction of air that passes through the coil without being cooled.
    *   **Apparatus Dew Point (ADP):** The theoretical dew point temperature that the air would reach if it were cooled to the surface temperature of the coil, assuming ideal contact (BF = 0).
    *   The GSHF of the air passing through the coil is given by:
        $GSHF_{coil} = \frac{Q_s}{Q_t} = \frac{T_{db, in} - T_{db, out}}{h_{in} - h_{out}}$
    *   This can be linked to the ADP and bypass factor. If $T_{ADP}$ is the apparatus dew point temperature:
        $GSHF_{coil} = \frac{T_{db, in} - T_{db, out}}{(T_{db, in} - T_{ADP}) \times (1 - BF) - c_{pa}(T_{db, out} - T_{ADP})(1 - BF)}$ (This relationship can be complex and might require careful derivation based on the specific model of the coil). A more common approach on the psychrometric chart is graphical.

*   **Cooling and Dehumidification with Bypass:**
    *   To achieve a specific supply air condition (e.g., 13°C DB, 75% RH) from a higher temperature and humidity, a cooling coil might be selected to cool the air to its ADP (e.g., 10°C ADP).
    *   However, the desired supply air condition might be at a higher dry-bulb temperature than the ADP. This is achieved by allowing some air to bypass the coil.
    *   The mixing of bypass air (at inlet conditions) and coil-cooled air (at ADP conditions) results in the desired supply air condition.
    *   The GSHF of this combined process (cooling and bypass) is determined by the ratio of sensible cooling to total cooling in the mixed air.

**Example Scenario:**
Consider cooling air from state 1 (35°C DB, 28°C WB) to a desired supply condition of 24°C DB, 18°C WB.
*   From the psychrometric chart or calculations:
    *   State 1: $\omega_1 \approx 0.022$ kgw/kga, $h_1 \approx 89$ kJ/kg
    *   Desired Supply State (State S): $T_{db,S} = 24^\circ C$, $T_{wb,S} = 18^\circ C$.
    *   State S: $\omega_S \approx 0.013$ kgw/kga, $h_S \approx 56$ kJ/kg.
*   Sensible cooling required: $Q_s = m_a \times 1.006 \times (35 - 24) = 11.066 \times m_a$ kJ/s
*   Latent cooling required: $Q_l = m_a \times 2501 \times (0.022 - 0.013) = 22.509 \times m_a$ kJ/s
*   Total cooling required: $Q_t = Q_s + Q_l = (11.066 + 22.509) \times m_a = 33.575 \times m_a$ kJ/s
*   GSHF of the supply air condition: $GSHF = \frac{Q_s}{Q_t} = \frac{11.066}{33.575} \approx 0.33$

This means that for every 1 kJ of total cooling required to reach this supply air condition, 0.33 kJ is sensible cooling, and 0.67 kJ is latent cooling. This indicates a strong dehumidification requirement.

To achieve this, a cooling coil might be designed to cool the air to an ADP of, say, 12°C. Then, bypass air would be mixed to achieve the 24°C DB.

---

## 6. Practice Questions and Exercises

**Question 1:**
Moist air enters an air conditioning unit at 30°C dry-bulb temperature and 25°C wet-bulb temperature. The air leaves the unit at 20°C dry-bulb temperature and 15°C wet-bulb temperature. The mass flow rate of dry air is 1 kg/s. Calculate the sensible heat, latent heat, and total heat removed per unit mass of dry air. Determine the Sensible Heat Factor for this process.

**Solution 1:**
Using a psychrometric chart or appropriate formulas:
*   **Initial State (30°C DB, 25°C WB):**
    *   $T_{db, in} = 30^\circ C$
    *   $T_{wb, in} = 25^\circ C$
    *   From chart/formula: $\omega_{in} \approx 0.021$ kgw/kga, $h_{in} \approx 83.3$ kJ/kg
*   **Final State (20°C DB, 15°C WB):**
    *   $T_{db, out} = 20^\circ C$
    *   $T_{wb, out} = 15^\circ C$
    *   From chart/formula: $\omega_{out} \approx 0.0106$ kgw/kga, $h_{out} \approx 46.8$ kJ/kg
*   **Mass flow rate of dry air ($m_a$):** 1 kg/s

*   **Sensible Heat Removed ($Q_s$):**
    $Q_s = m_a \times c_{pa} \times (T_{db, in} - T_{db, out})$
    $Q_s = 1 \text{ kg/s} \times 1.006 \text{ kJ/kg·K} \times (30^\circ C - 20^\circ C)$
    $Q_s = 10.06 \text{ kJ/s}$ (or kW)

*   **Latent Heat Removed ($Q_l$):**
    $Q_l = m_a \times h_{fg} \times (\omega_{in} - \omega_{out})$
    $Q_l = 1 \text{ kg/s} \times 2501 \text{ kJ/kg} \times (0.021 - 0.0106) \text{ kgw/kga}$
    $Q_l = 1 \times 2501 \times 0.0104 = 26.01$ kJ/s (or kW)

*   **Total Heat Removed ($Q_t$):**
    $Q_t = Q_s + Q_l = 10.06 + 26.01 = 36.07$ kJ/s (or kW)
    Alternatively, using enthalpy:
    $Q_t = m_a \times (h_{in} - h_{out}) = 1 \text{ kg/s} \times (83.3 - 46.8) \text{ kJ/kg}$
    $Q_t = 36.5$ kJ/s (or kW)
    *(Note: Slight difference due to rounding and approximations from psychrometric chart values. Using the enthalpy difference is generally more accurate if values are precise.)*

*   **Sensible Heat Factor (SHF):**
    $SHF = \frac{Q_s}{Q_t} = \frac{10.06}{36.07} \approx 0.279$

**Answer:**
*   Sensible Heat Removed: 10.06 kW
*   Latent Heat Removed: 26.01 kW
*   Total Heat Removed: 36.07 kW
*   Sensible Heat Factor: 0.279

---

**Question 2:**
A cooling coil has an ADP of 13°C. If the air enters at 32°C DB and 18°C WB, and leaves at 23°C DB. What is the bypass factor of the coil if the process line is assumed to pass through the ADP? What is the SHF of this process?

**Solution 2:**
*   **Initial State (32°C DB, 18°C WB):**
    *   $T_{db, in} = 32^\circ C$
    *   $T_{wb, in} = 18^\circ C$
    *   From chart/formula: $\omega_{in} \approx 0.0135$ kgw/kga, $h_{in} \approx 56.6$ kJ/kg
*   **Apparatus Dew Point (ADP):**
    *   $T_{ADP} = 13^\circ C$
    *   At this temperature, the air is saturated, so $T_{wb, ADP} = 13^\circ C$.
    *   From chart/formula: $\omega_{ADP} \approx 0.0094$ kgw/kga, $h_{ADP} \approx 39.5$ kJ/kg
*   **Final State (23°C DB):**
    *   $T_{db, out} = 23^\circ C$
    *   Since the air is cooled to 23°C DB and it's a cooling process with bypass, the air leaving the coil (before mixing with bypass air) is at ADP. However, the question states the air leaves the unit at 23°C DB. This implies the final state after mixing.
    *   Let's assume the air is cooled by the coil to the ADP of 13°C, and then mixed with bypass air. The final desired state is 23°C DB. We need to find the moisture content at this final state to calculate SHF. A typical assumption for such problems is that the process line on the psychrometric chart passes through the ADP.
    *   Let's assume the final state is obtained by mixing air cooled to ADP (13°C DB, 13°C WB, $\omega = 0.0094$, $h = 39.5$) with bypass air (32°C DB, 18°C WB, $\omega = 0.0135$, $h = 56.6$). The mixture is at 23°C DB.
    *   Let BF be the bypass factor. The fraction of air going through the coil is $(1-BF)$.
    *   Total dry air mass flow rate $m_a = 1$ kg/s.
    *   Mass flow through coil = $(1-BF) m_a$. Mass flow through bypass = $BF \cdot m_a$.
    *   Energy balance for enthalpy at mixing:
        $m_a h_{out} = BF \cdot m_a h_{in} + (1-BF) m_a h_{ADP}$
        $h_{out} = BF \cdot h_{in} + (1-BF) h_{ADP}$
        $h_{out} = BF \cdot 56.6 + (1-BF) \cdot 39.5$
    *   Also, the final state has $T_{db, out} = 23^\circ C$. We need to find its corresponding $h_{out}$ and $\omega_{out}$ from the psychrometric chart or by assuming a certain state at 23°C DB. A common approach is to determine the $\omega$ at the outlet based on the mixing process.
    *   Mass balance for specific humidity:
        $m_a \omega_{out} = BF \cdot m_a \omega_{in} + (1-BF) m_a \omega_{ADP}$
        $\omega_{out} = BF \cdot \omega_{in} + (1-BF) \cdot \omega_{ADP}$
        $\omega_{out} = BF \cdot 0.0135 + (1-BF) \cdot 0.0094$
    *   Now, if the final dry-bulb temperature is 23°C, we need to find the state. The process line on the psychrometric chart connecting the inlet state (32°C DB) to the outlet state (23°C DB) has a slope related to the SHF.
    *   The bypass factor can be calculated as:
        $BF = \frac{T_{db, in} - T_{db, out}}{T_{db, in} - T_{ADP}} = \frac{32 - 23}{32 - 13} = \frac{9}{19} \approx 0.474$

*   **Bypass Factor:**
    $BF = 0.474$

*   **To find SHF, we need the final specific humidity ($\omega_{out}$) at 23°C DB.**
    Assuming the process line has a constant slope for the mixed air, we can use the enthalpy balance or specific humidity balance with the bypass factor.
    If we use the bypass factor calculation:
    The air after the coil is at 13°C DB. The mixed air is at 23°C DB.
    The specific humidity of the mixed air would be:
    $\omega_{out} = BF \cdot \omega_{in} + (1-BF) \cdot \omega_{ADP}$
    $\omega_{out} = 0.474 \times 0.0135 + (1 - 0.474) \times 0.0094$
    $\omega_{out} = 0.474 \times 0.0135 + 0.526 \times 0.0094$
    $\omega_{out} = 0.00640 \times 0.00494 = 0.01134$ kgw/kga

    Now we have the final state: 23°C DB and $\omega_{out} = 0.01134$ kgw/kga.
    We need to find the enthalpy at this state.
    $h_{out} \approx 1.006 \times 23 + 0.01134 \times (2501 + 1.86 \times 23)$
    $h_{out} \approx 23.138 + 0.01134 \times (2501 + 42.78)$
    $h_{out} \approx 23.138 + 0.01134 \times 2543.78$
    $h_{out} \approx 23.138 + 28.84 \approx 51.98$ kJ/kg

*   **Sensible Heat Removed ($Q_s$):**
    $Q_s = m_a \times c_{pa} \times (T_{db, in} - T_{db, out})$
    Assuming $m_a = 1$ kg/s:
    $Q_s = 1 \times 1.006 \times (32 - 23) = 9.054$ kW

*   **Total Heat Removed ($Q_t$):**
    $Q_t = m_a \times (h_{in} - h_{out})$
    $Q_t = 1 \times (56.6 - 51.98) = 4.62$ kW
    *(Wait, this is strange. Total heat removed is less than sensible heat removed. This indicates an error in the calculation or interpretation. The assumption of mixing needs to be more rigorous or the problem statement might be interpreted differently.)*

Let's re-evaluate the interpretation for Q2. The standard way to link BF, ADP and SHF for a cooling coil process is:
$GSHF = \frac{Q_s}{Q_t} = \frac{c_{pa}(T_{db,in} - T_{db,out})}{c_{pa}(T_{db,in} - T_{db,out}) + h_{fg}(\omega_{in} - \omega_{out})}$

And for a coil with bypass:
$BF = \frac{T_{db, in} - T_{db, out}}{T_{db, in} - T_{ADP}}$
$1-BF = \frac{T_{db, out} - T_{ADP}}{T_{db, in} - T_{ADP}}$

The specific humidity of the outlet air $\omega_{out}$ is determined by the mixing:
$\omega_{out} = (1-BF)\omega_{ADP} + BF \omega_{in}$
$\omega_{out} = \frac{T_{db, out} - T_{ADP}}{T_{db, in} - T_{ADP}} \omega_{ADP} + \frac{T_{db, in} - T_{db, out}}{T_{db, in} - T_{ADP}} \omega_{in}$

Let's use the given values:
$T_{db, in} = 32^\circ C$, $T_{wb, in} = 18^\circ C \implies \omega_{in} = 0.0135$, $h_{in} = 56.6$ kJ/kg
$T_{ADP} = 13^\circ C \implies \omega_{ADP} = 0.0094$, $h_{ADP} = 39.5$ kJ/kg
$T_{db, out} = 23^\circ C$

Calculate BF first:
$BF = \frac{32 - 23}{32 - 13} = \frac{9}{19} \approx 0.474$

Now calculate $\omega_{out}$:
$\omega_{out} = (1-0.474) \times 0.0094 + 0.474 \times 0.0135$
$\omega_{out} = 0.526 \times 0.0094 + 0.474 \times 0.0135$
$\omega_{out} = 0.004944 + 0.00640 = 0.011344$ kgw/kga

Calculate $h_{out}$ for the state (23°C DB, 0.011344 kgw/kga):
$h_{out} \approx 1.006 \times 23 + 0.011344 \times (2501 + 1.86 \times 23)$
$h_{out} \approx 23.138 + 0.011344 \times (2501 + 42.78)$
$h_{out} \approx 23.138 + 0.011344 \times 2543.78$
$h_{out} \approx 23.138 + 28.85 \approx 52.0$ kJ/kg

Now calculate $Q_s$ and $Q_t$ (assuming $m_a = 1$ kg/s):
$Q_s = 1.006 \times (32 - 23) = 9.054$ kW
$Q_t = 1 \times (56.6 - 52.0) = 4.6$ kW

The problem here is that the total heat removed ($Q_t$) is less than the sensible heat removed ($Q_s$). This implies that there must be a heat gain in the process, which is incorrect for a cooling process. The error lies in assuming the calculated $h_{out}$ represents heat removal. The enthalpy of the outlet air should be less than the inlet air for cooling.

Let's re-examine the calculation of $h_{out}$ and $\omega_{out}$.
The bypass factor ($BF = 0.474$) means that 47.4% of the air passes without cooling, and 52.6% is cooled to ADP (13°C).
The specific humidity balance is correct: $\omega_{out} = 0.011344$ kgw/kga.
The enthalpy balance, assuming the cooled air is at ADP enthalpy:
$h_{out} = BF \cdot h_{in} + (1-BF) h_{ADP}$
$h_{out} = 0.474 \times 56.6 + (1 - 0.474) \times 39.5$
$h_{out} = 26.83 \times 0.474 + 0.526 \times 39.5$
$h_{out} = 26.83 + 20.77 = 47.6$ kJ/kg

Now, let's check the consistency. The state is (23°C DB, 0.011344 kgw/kga).
$h_{calc} = 1.006 \times 23 + 0.011344 \times (2501 + 1.86 \times 23) = 51.98$ kJ/kg.

There is a discrepancy between the enthalpy calculated from the bypass factor mixing ($47.6$ kJ/kg) and the enthalpy calculated directly from the state properties ($51.98$ kJ/kg). This usually means that the assumption that the process line has a constant slope (and thus the simplified bypass factor formula is applied) might not perfectly hold when the outlet temperature is specified.

However, if we assume the bypass factor formula is the intended method for calculation:
$Q_s = 1.006 \times (32 - 23) = 9.054$ kW
$Q_t = 1 \times (56.6 - 47.6) = 9.0$ kW (using $h_{out}$ from bypass calculation)

$SHF = \frac{Q_s}{Q_t} = \frac{9.054}{9.0} \approx 1.006$

This SHF of 1.006 is also problematic, as it suggests only sensible heat removal, which contradicts the fact that the air is cooled below its dew point to reach the ADP.

**Let's use a different approach for SHF directly from the states:**
$SHF = \frac{c_{pa}(T_{db,in} - T_{db,out})}{c_{pa}(T_{db,in} - T_{db,out}) + h_{fg}(\omega_{in} - \omega_{out})}$
$SHF = \frac{1.006 \times (32 - 23)}{1.006 \times (32 - 23) + 2501 \times (0.0135 - 0.011344)}$
$SHF = \frac{9.054}{9.054 + 2501 \times 0.002156}$
$SHF = \frac{9.054}{9.054 + 5.382}$
$SHF = \frac{9.054}{14.436} \approx 0.627$

This value of 0.627 for SHF seems more reasonable for a cooling and dehumidifying process with bypass. The bypass factor calculation is correct for determining the split between direct cooling and bypass air to achieve the final $T_{db}$. The SHF then comes from the actual enthalpy change.

**Revised Answer for Question 2:**
*   **Bypass Factor (BF):**
    $BF = \frac{T_{db, in} - T_{db, out}}{T_{db, in} - T_{ADP}} = \frac{32^\circ C - 23^\circ C}{32^\circ C - 13^\circ C} = \frac{9}{19} \approx 0.474$

*   **Sensible Heat Factor (SHF):**
    First, determine the specific humidity of the outlet air using the bypass factor and mass balance:
    $\omega_{out} = (1-BF)\omega_{ADP} + BF \omega_{in}$
    $\omega_{out} = (1-0.474) \times 0.0094 + 0.474 \times 0.0135 \approx 0.01134$ kgw/kga
    Now, calculate SHF using the initial and final air states:
    $SHF = \frac{c_{pa}(T_{db, in} - T_{db, out})}{c_{pa}(T_{db, in} - T_{db, out}) + h_{fg}(\omega_{in} - \omega_{out})}$
    $SHF = \frac{1.006 \times (32 - 23)}{1.006 \times (32 - 23) + 2501 \times (0.0135 - 0.01134)}$
    $SHF = \frac{9.054}{9.054 + 2501 \times 0.00216} = \frac{9.054}{9.054 + 5.402} = \frac{9.054}{14.456} \approx 0.626$

---

## 7. Important Points to Remember

*   **Psychrometric Chart is Key:** Familiarity with the psychrometric chart is essential for visualizing and analyzing air conditioning processes.
*   **Sensible vs. Latent Heat:** Understand that sensible heat changes temperature, while latent heat changes the moisture content.
*   **GSHF Indicates Load Type:** A high GSHF means a predominantly sensible load, while a low GSHF indicates a significant latent load.
*   **System Design Depends on GSHF:** The GSHF of a process dictates the type of equipment needed (e.g., cooling coil design, reheat requirements).
*   **Bypass Factor and ADP:** These concepts are used to control the supply air conditions, especially when the required SHF differs from the pure cooling coil performance.
*   **Accuracy of Formulas:** Use precise values for constants like $c_{pa}$ and $h_{fg}$ and consult psychrometric charts or accurate software for specific humidity and enthalpy values.

---

## 8. Alignment with Course Outcomes

This module directly addresses:

*   **CO1:** By understanding the basic concepts of moist air properties and analyzing processes (K2, K4).
*   **CO5:** By analyzing properties of moist air using psychrometric principles and charts, and explaining air conditioning processes (K2, K4). The GSHF is a direct application of these principles.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


## 9. Textbook References and Further Reading

*   **Arora C.P., "Refrigeration and Air Conditioning" (4th edition/2021):** Provides comprehensive coverage of psychrometric principles, charts, and their application in air conditioning systems. Chapters on psychrometric processes are particularly relevant.
*   **Kothandaraman, C.P., "Data book- Refrigeration tables and charts including air conditioning data" (2023):** Essential for obtaining accurate psychrometric properties and for understanding the construction and use of psychrometric charts.
*   **Jones, W P, "Air Conditioning Engineering" (5th edition/2001):** Offers practical insights into the engineering design of air conditioning systems, including load calculations and equipment selection based on GSHF.
*   **ASHRAE Handbooks:** Provide industry-standard data, guidelines, and calculation methods for psychrometrics and HVAC system design.

---