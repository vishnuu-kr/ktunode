---
title: "year round air-conditioning systems – Representation on the Psychrometric chart and estimation of quantities."
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f8e"
status: "completed"
scrapedAt: "2026-05-20T18:17:42.722Z"
---
# Module 4: Psychrometry and Applied Psychrometry - Year-Round Air-Conditioning Systems

## Topic: Year-Round Air-Conditioning Systems – Representation on the Psychrometric Chart and Estimation of Quantities

This topic focuses on understanding and analyzing air conditioning processes that operate throughout the year, encompassing both cooling and heating seasons. We will explore how these processes are represented on the psychrometric chart and learn to estimate the required energy and mass transfer quantities.

---

### 1. Introduction to Year-Round Air Conditioning

**Definition:** Year-round air conditioning refers to systems designed to maintain desired indoor air conditions (temperature, humidity, purity, and motion) regardless of the outdoor environmental conditions, catering to both summer (cooling and dehumidification) and winter (heating and humidification) seasons.

**Key Objectives of Year-Round AC:**

*   **Comfort:** Maintain thermal comfort for occupants.
*   **Health:** Ensure good indoor air quality (IAQ) by removing pollutants and controlling humidity.
*   **Process Requirements:** Meet specific environmental needs for industrial processes, laboratories, or specialized applications.

**Basic Components of a Year-Round AC System:**

*   **Sensible Heating/Cooling Coils:** Alter the dry-bulb temperature of the air.
*   **Latent Heating/Cooling Coils:** Alter the humidity ratio of the air (dehumidification/humidification).
*   **Humidifiers:** Add moisture to the air.
*   **Dehumidifiers:** Remove moisture from the air.
*   **Fans:** Circulate the conditioned air.
*   **Filters:** Remove particulate matter from the air.
*   **Dampers:** Control airflow and mixing of different air streams.
*   **Control Systems:** Regulate the operation of components to maintain desired conditions.

---

### 2. The Psychrometric Chart and its Application

**Revisiting the Psychrometric Chart:** A psychrometric chart is a graphical representation of the thermodynamic properties of moist air at a constant atmospheric pressure. It is a crucial tool for analyzing air conditioning processes.

**Key Properties on the Chart:**

*   **Dry-Bulb Temperature (DBT):** The temperature measured by a thermometer exposed to the air. (X-axis)
*   **Wet-Bulb Temperature (WBT):** The temperature measured by a thermometer with its bulb surrounded by a wet wick, cooled by the evaporation of water. (Diagonal lines)
*   **Dew Point Temperature (DPT):** The temperature at which the air becomes saturated, and condensation begins. (Horizontal lines)
*   **Specific Humidity (Humidity Ratio, $\omega$):** The mass of water vapor per unit mass of dry air. (Vertical lines)
*   **Relative Humidity (RH, $\phi$):** The ratio of the actual partial pressure of water vapor to the saturation pressure of water vapor at the same dry-bulb temperature, expressed as a percentage. (Curved lines)
*   **Enthalpy (h):** The total heat content of the moist air per unit mass of dry air. (Diagonal lines, often parallel to WBT lines)
*   **Specific Volume (v):** The volume occupied by a unit mass of dry air. (Lines sloping upwards from left to right)

**Importance for Year-Round AC:** The psychrometric chart allows us to visualize the changes in air properties as it undergoes various conditioning processes, enabling us to calculate the energy required for heating, cooling, humidification, and dehumidification.

---

### 3. Representation of Year-Round Air Conditioning Processes on the Psychrometric Chart

Year-round air conditioning involves a sequence of processes to transform the outdoor air (or a mixture of outdoor and recirculated air) to the desired indoor conditions.

#### 3.1. Summer Air Conditioning (Cooling and Dehumidification)

**Objective:** Lower both DBT and humidity ratio.

**Process:** Typically involves passing air over a cooling coil.

*   **Cooling Coil Operation:** If the coil surface temperature (apparatus dew point, ADP) is below the dew point temperature of the air, both sensible cooling and dehumidification occur.
*   **Representation:** A straight line on the psychrometric chart from the initial state point (e.g., outdoor air) to the final state point after passing over the cooling coil. This line generally moves left (lower DBT) and down (lower $\omega$).

**Example:** Cooling and dehumidifying hot, humid outdoor air (e.g., 35°C DBT, 70% RH) to a comfortable condition (e.g., 24°C DBT, 50% RH).

**Considerations:**

*   **Sensible Heat Factor (SHF):** The ratio of sensible cooling to total cooling (sensible + latent).
    *   $SHF = \frac{\text{Sensible Cooling}}{\text{Total Cooling}} = \frac{h_1 - h_2}{h_1 - h_2 + (\omega_1 - \omega_2)h_{fg}}$
    *   Where $h_1, \omega_1$ are initial enthalpy and humidity ratio, and $h_2, \omega_2$ are final.
    *   A lower SHF indicates significant dehumidification.
*   **Apparatus Dew Point (ADP):** The theoretical surface temperature of the cooling coil that would just achieve saturation. The air leaving a cooling coil will have properties such that it lies on a line connecting its initial state to the ADP. The ADP is typically a few degrees above the coil's refrigerant temperature.

**Sub-cooling and Reheating:**

*   **Overcooling and Reheating:** Sometimes, to achieve the desired low humidity, the air is cooled below its final desired dew point and then reheated to the final desired dry-bulb temperature. This is represented by two consecutive processes on the chart: cooling (left and down) followed by reheating (right).
    *   This is often done to achieve a very low humidity ratio without excessively lowering the dry-bulb temperature.
*   **Recirculation:** To reduce the cooling load, some of the conditioned indoor air is recirculated and mixed with the outdoor air before passing over the cooling coil. This mixing process is a straight line connecting the state points of the two air streams on the psychrometric chart.

#### 3.2. Winter Air Conditioning (Heating and Humidification)

**Objective:** Increase both DBT and humidity ratio.

**Processes:**

1.  **Heating:** Passing air over a heating coil.
    *   **Representation:** A horizontal line on the psychrometric chart moving to the right (higher DBT), with $\omega$ remaining constant.
2.  **Humidification:** Adding moisture to the air.
    *   **Adiabatic Humidification:** Adding moisture without adding or removing heat from the air. This is represented by a line moving down and to the right on the chart, following a constant wet-bulb temperature line. Water is evaporated, increasing humidity but decreasing the dry-bulb temperature due to evaporative cooling.
    *   **Sensible Heating followed by Adiabatic Humidification:** A common strategy where air is first heated to a comfortable temperature and then humidified. This might involve a bypass humidifier or a spray type humidifier.
    *   **Steam Humidification:** Adding steam directly to the air. This is represented by a line moving vertically upwards (increasing $\omega$) at a constant DBT.
    *   **Representation:** A line moving to the right (higher DBT) and upwards (higher $\omega$) on the chart.

**Example:** Heating and humidifying cold, dry outdoor air (e.g., 5°C DBT, 50% RH) to a comfortable condition (e.g., 22°C DBT, 40% RH).

**Considerations:**

*   **Bypass Factor (BF):** For coils, a portion of the air may bypass the coil, resulting in a mixed air stream. This leads to a process line that does not reach the theoretical final state.
*   **Recirculation:** Similar to summer AC, recirculating indoor air reduces the heating load.

#### 3.3. Year-Round Operation - Illustrative Example

Consider a space requiring 25°C DBT and 50% RH (indoor condition, $I$).
Outdoor conditions vary:
*   Summer: 35°C DBT, 28°C WBT (Hot and humid)
*   Winter: 5°C DBT, 2°C WBT (Cold and dry)

**Summer Process:**

1.  **Mixing:** Outdoor air (O) is mixed with recirculated indoor air (I). The mixing ratio determines the state of the mixed air (M).
2.  **Cooling and Dehumidification:** Mixed air (M) passes over a cooling coil to reach a supply air condition (S). Often, S is cooler and drier than I.
3.  **Optional Reheating:** If S is too cool for the desired indoor condition, reheating may occur.

**Winter Process:**

1.  **Mixing:** Outdoor air (O) is mixed with recirculated indoor air (I).
2.  **Heating:** Mixed air (M) passes over a heating coil to reach a supply air condition (S). S will be warmer than M.
3.  **Humidification:** S then passes through a humidifier to reach a final supply air condition (S') which is then supplied to the space. S' is warmer and more humid than S.

**Psychrometric Chart Representation:**

*   **Summer:** O -> M (straight line) -> S (left and down) -> (optional) S' (right, reheating)
*   **Winter:** O -> M (straight line) -> S (right, heating) -> S' (up and right, humidification)

---

### 4. Estimation of Quantities

Using the psychrometric chart and thermodynamic principles, we can estimate the mass flow rates of air and the energy transfer required for each process.

#### 4.1. Mass Flow Rates

*   **Sensible Heat Load ($Q_s$):** The rate of heat transfer that changes the dry-bulb temperature.
    $Q_s = \dot{m}_a \times (h_1 - h_2)$
    or for sensible processes only:
    $Q_s = \dot{m}_a \times c_p \times (T_{db1} - T_{db2})$
    Where:
    *   $\dot{m}_a$ is the mass flow rate of dry air (kg/s).
    *   $c_p$ is the specific heat of dry air, approximately 1.006 kJ/kg·K.
    *   $T_{db1}$ and $T_{db2}$ are the initial and final dry-bulb temperatures.

*   **Latent Heat Load ($Q_l$):** The rate of heat transfer that changes the moisture content.
    $Q_l = \dot{m}_a \times (h_{fg} + c_{pw}(T_{dp1} - T_{dp2})) \times (\omega_1 - \omega_2)$
    A simplified form, assuming $T_{dp}$ is close to $T_{db}$ for dehumidification:
    $Q_l \approx \dot{m}_a \times h_{fg} \times (\omega_1 - \omega_2)$
    Where:
    *   $h_{fg}$ is the latent heat of vaporization of water at the average temperature (approx. 2500 kJ/kg).
    *   $c_{pw}$ is the specific heat of water vapor (approx. 1.86 kJ/kg·K).
    *   $\omega_1$ and $\omega_2$ are the initial and final specific humidities.

*   **Total Heat Load ($Q_t$):** The sum of sensible and latent heat loads.
    $Q_t = Q_s + Q_l = \dot{m}_a \times (h_1 - h_2)$

#### 4.2. Heating and Cooling Coil Loads

*   **Cooling Coil Load:** The energy removed from the air.
    $Q_{cooling} = \dot{m}_a \times (h_{initial} - h_{final, coil})$
    The moisture removed is $\dot{m}_a \times (\omega_{initial} - \omega_{final, coil})$.

*   **Heating Coil Load:** The energy added to the air.
    $Q_{heating} = \dot{m}_a \times (h_{final, coil} - h_{initial})$

*   **Humidifier Load (Water Evaporated):**
    $m_{water, evap} = \dot{m}_a \times (\omega_{final} - \omega_{initial})$

*   **Dehumidifier Load (Water Condensed):**
    $m_{water, cond} = \dot{m}_a \times (\omega_{initial} - \omega_{final})$

#### 4.3. Airflow Rate Calculation

Often, the required airflow rate ($\dot{V}_a$, in m³/s or cfm) is determined based on the sensible cooling or heating load and the allowable temperature difference.

$\dot{V}_a = \frac{Q_s}{\rho_a \times c_p \times (T_{db, in} - T_{db, out})}$
Where:
*   $\rho_a$ is the density of air (approximately 1.2 kg/m³ at standard conditions).
*   For practical calculations, the volumetric flow rate is often used:
    $\dot{Q}_s = \dot{V}_a \times \rho_a \times c_p \times (T_{db, in} - T_{db, out})$
    or commonly:
    $\dot{Q}_s = 1.2 \times 1.006 \times \Delta T_{db} \times \dot{V}_a \approx 1.26 \times \Delta T_{db} \times \dot{V}_a$ (in kW, if $\dot{V}_a$ is in m³/s)
    In imperial units:
    $\dot{Q}_s = 1.08 \times \Delta T_{db} \times \dot{V}_a$ (in Btu/hr, if $\dot{V}_a$ is in cfm)

The specific humidity difference is then used to check if the latent load is also met.

**Example Calculation:**

A room requires 10 kW of sensible cooling and 4 kW of latent cooling. The supply air temperature is 15°C and the room temperature is 25°C. Assume outdoor air at 30°C DBT and 60% RH is cooled to 15°C DBT and 13°C WBT.

1.  **Find the state points on the psychrometric chart:**
    *   Outdoor air ($P_1$): 30°C DBT, 60% RH. From chart: $\omega_1 \approx 0.0199$ kg/kg, $h_1 \approx 84.6$ kJ/kg.
    *   Supply air ($P_2$): 15°C DBT, 13°C WBT. From chart: $\omega_2 \approx 0.0084$ kg/kg, $h_2 \approx 39.7$ kJ/kg.

2.  **Calculate the sensible and latent heat removed from the air:**
    *   Sensible heat removed: $Q_s = \dot{m}_a \times c_p \times (T_{db1} - T_{db2})$
    *   $Q_s = \dot{m}_a \times 1.006 \times (30 - 15) = \dot{m}_a \times 15.09$ kW
    *   Latent heat removed: $Q_l = \dot{m}_a \times h_{fg} \times (\omega_1 - \omega_2)$
    *   $Q_l = \dot{m}_a \times 2500 \times (0.0199 - 0.0084) = \dot{m}_a \times 2500 \times 0.0115 = \dot{m}_a \times 28.75$ kW
    *   Total heat removed: $Q_t = Q_s + Q_l = \dot{m}_a \times (15.09 + 28.75) = \dot{m}_a \times 43.84$ kW

3.  **Relate to room loads and find $\dot{m}_a$:**
    The problem states the room requires 10 kW sensible and 4 kW latent cooling. However, the example process cools the air from 30°C to 15°C. Let's assume the supply air condition of 15°C DBT, 13°C WBT is the condition required to meet the room loads. We need to find the airflow rate.

    Using the sensible load:
    $10 \text{ kW} = \dot{m}_a \times 1.006 \times (30 - 15)$
    $10 = \dot{m}_a \times 15.09$
    $\dot{m}_a = \frac{10}{15.09} \approx 0.663$ kg/s

    Now, check the latent load met by this airflow:
    $Q_l = 0.663 \times 2500 \times (0.0199 - 0.0084) = 0.663 \times 2500 \times 0.0115 \approx 19.07$ kW

    This indicates the cooling process specified (30°C, 60% RH to 15°C, 13°C WBT) provides significantly more latent cooling than the room requires. This suggests that either the supply air condition needs to be adjusted (e.g., by reheating), or the initial outdoor air assumption is for a worst-case scenario and the actual process involves mixing with recirculated air.

    **Alternative Approach using Volumetric Flow Rate:**
    Let's assume the required airflow rate is based on the sensible load and a typical temperature difference:
    Supply air DBT = 15°C
    Room DBT = 25°C
    $\Delta T_{db} = 25 - 15 = 10$ °C
    If the room needs 10 kW sensible cooling:
    $10 \text{ kW} = 1.26 \times \Delta T_{db} \times \dot{V}_a$
    $10 = 1.26 \times 10 \times \dot{V}_a$
    $\dot{V}_a = \frac{10}{12.6} \approx 0.794$ m³/s

    Now, calculate the mass flow rate:
    $\dot{m}_a = \dot{V}_a \times \rho_a = 0.794 \text{ m³/s} \times 1.2 \text{ kg/m³} \approx 0.953$ kg/s

    With this airflow, the sensible cooling provided is:
    $Q_s = 0.953 \times 1.006 \times (30 - 15) \approx 14.36$ kW (This is more than the required 10 kW, implying a higher airflow or a different supply air temp is used in practice, or there's a mismatch in the problem statement's assumptions).

    Let's recalculate based on the required 10 kW sensible load and assume it dictates the airflow.
    $\dot{m}_a = 0.663$ kg/s.
    $Q_l = 0.663 \times 2500 \times (0.0199 - 0.0084) \approx 19.07$ kW.
    The total cooling provided by this airflow is $10 \text{ kW} + 19.07 \text{ kW} = 29.07$ kW.
    The room requires 10 kW sensible and 4 kW latent, total 14 kW.

    This suggests the process as described (30°C/60%RH to 15°C/13°C WBT) is providing too much cooling for the room's actual load, or the example scenario implies a significant recirculation of indoor air to reduce the load on the coil.

    **Correct approach for the example problem:**
    Assume the required airflow is based on the sensible load and the specified supply air condition.
    Room sensible load = 10 kW
    Room DBT = 25°C
    Supply air DBT = 15°C
    $\Delta T_{db} = 10$ °C
    Let's use the more precise formula for airflow calculation:
    $Q_s = \dot{m}_a \times c_p \times (T_{db, room} - T_{db, supply})$
    $10 \text{ kW} = \dot{m}_a \times 1.006 \times (25 - 15)$
    $10 = \dot{m}_a \times 10.06$
    $\dot{m}_a = \frac{10}{10.06} \approx 0.994$ kg/s

    Now, check the latent cooling provided by this airflow from outdoor to supply:
    Outdoor air state (assumed): 30°C DBT, 28°C WBT (RH $\approx$ 70%, $\omega_1 \approx 0.0235$, $h_1 \approx 93.8$ kJ/kg)
    Supply air state: 15°C DBT, 13°C WBT ($\omega_2 \approx 0.0084$, $h_2 \approx 39.7$ kJ/kg)
    Latent cooling provided:
    $Q_l = \dot{m}_a \times h_{fg} \times (\omega_1 - \omega_2)$
    $Q_l = 0.994 \times 2500 \times (0.0235 - 0.0084) = 0.994 \times 2500 \times 0.0151 \approx 37.6$ kW.

    This is still too much latent cooling. The key to year-round AC and estimating quantities is often the **mixing of outdoor air and recirculated air**.

    **Revised Example Scenario:**
    Room setpoint: 24°C DBT, 50% RH.
    Outdoor air: 35°C DBT, 28°C WBT (high humidity).
    Supply air to room: 18°C DBT, 15°C WBT.

    **Summer Process:**
    1.  **Mixing:** Assume 20% outdoor air and 80% recirculated indoor air.
        *   Outdoor air ($O$): 35°C DBT, 28°C WBT ($\omega \approx 0.0235$, $h \approx 93.8$).
        *   Indoor air ($I$): 24°C DBT, 50% RH ($\omega \approx 0.0109$, $h \approx 48.2$).
        *   Mixed air ($M$): $\dot{m}_M = 0.2 \dot{m}_a + 0.8 \dot{m}_a = \dot{m}_a$.
            $T_{db,M} = 0.2 \times 35 + 0.8 \times 24 = 7 + 19.2 = 26.2^\circ C$.
            $\omega_M = 0.2 \times 0.0235 + 0.8 \times 0.0109 = 0.0047 + 0.00872 = 0.01342$ kg/kg.
            $h_M = 0.2 \times 93.8 + 0.8 \times 48.2 = 18.76 + 38.56 = 57.32$ kJ/kg.
        *   State M: 26.2°C DBT, $\omega = 0.01342$.

    2.  **Cooling & Dehumidification:** Mixed air (M) is cooled to supply air (S) at 18°C DBT, 15°C WBT.
        *   Supply air ($S$): 18°C DBT, 15°C WBT ($\omega \approx 0.0115$, $h \approx 43.3$).

    3.  **Calculate Airflow and Coil Loads:**
        Let's assume the room requires 20 kW sensible cooling.
        $Q_{s, room} = \dot{m}_a \times c_p \times (T_{db, room} - T_{db, supply})$
        $20 \text{ kW} = \dot{m}_a \times 1.006 \times (24 - 18)$
        $20 = \dot{m}_a \times 6.036$
        $\dot{m}_a \approx 3.315$ kg/s.

        Now, calculate the cooling provided by the coil:
        Sensible cooling by coil: $Q_{s, coil} = \dot{m}_a \times c_p \times (T_{db, M} - T_{db, S})$
        $Q_{s, coil} = 3.315 \times 1.006 \times (26.2 - 18) = 3.315 \times 1.006 \times 8.2 \approx 27.2$ kW.

        Latent cooling by coil: $Q_{l, coil} = \dot{m}_a \times h_{fg} \times (\omega_M - \omega_S)$
        $Q_{l, coil} = 3.315 \times 2500 \times (0.01342 - 0.0115) = 3.315 \times 2500 \times 0.00192 \approx 15.9$ kW.

        Total cooling by coil: $Q_{t, coil} = 27.2 + 15.9 = 43.1$ kW.

        The room sensible load is 20 kW. The system provides 27.2 kW sensible cooling. This means the supply air condition (18°C DBT) is lower than what's strictly needed for sensible cooling alone, or the assumption of 20% outdoor air is for a very humid condition.

        **If we need to meet exactly 20 kW sensible cooling:**
        The required supply air DBT would be:
        $20 = \dot{m}_a \times 1.006 \times (24 - T_{db, S})$
        Using $\dot{m}_a = 3.315$ kg/s:
        $20 = 3.315 \times 1.006 \times (24 - T_{db, S})$
        $20 = 3.332 \times (24 - T_{db, S})$
        $6.00 = 24 - T_{db, S}$
        $T_{db, S} = 18.00^\circ C$. This aligns with the assumed supply air DBT.

        Now, let's check the latent load requirement for the room:
        $Q_{l, room} = \dot{m}_a \times h_{fg} \times (\omega_{room} - \omega_{supply})$
        $\omega_{room} = 0.0109$ (from 24°C DBT, 50% RH)
        Assume supply air $\omega_{supply} = 0.009$ (to maintain 50% RH at 24°C, the dew point should be around 11.7°C)
        $Q_{l, room} = 3.315 \times 2500 \times (0.0109 - 0.009) = 3.315 \times 2500 \times 0.0019 \approx 15.75$ kW.

        The coil provided $15.9$ kW latent cooling, which is very close to the requirement. So, the process described (mixing 20% OA with 80% RA, cooling to 18°C DBT, 15°C WBT) seems reasonable for meeting the room loads.

#### 4.4. Winter Calculations

*   **Heating Load ($Q_{heat}$):**
    $Q_{heat} = \dot{m}_a \times c_p \times (T_{db, supply} - T_{db, mixed})$

*   **Humidification Load ($m_{water, hum}$):**
    $m_{water, hum} = \dot{m}_a \times (\omega_{supply} - \omega_{mixed})$

**Example Winter Scenario:**
Room requires 20°C DBT, 40% RH.
Outdoor air: 2°C DBT, 80% RH.
Supply air: 25°C DBT, 18°C WBT.

1.  **State Points:**
    *   Outdoor air ($O$): 2°C DBT, 80% RH ($\omega \approx 0.0020$, $h \approx 14.2$).
    *   Indoor air ($I$): 20°C DBT, 40% RH ($\omega \approx 0.0051$, $h \approx 27.2$).
    *   Supply air ($S$): 25°C DBT, 18°C WBT ($\omega \approx 0.0144$, $h \approx 62.5$).

2.  **Mixing:** Assume 30% outdoor air, 70% indoor air.
    *   $T_{db, M} = 0.3 \times 2 + 0.7 \times 20 = 0.6 + 14 = 14.6^\circ C$.
    *   $\omega_M = 0.3 \times 0.0020 + 0.7 \times 0.0051 = 0.0006 + 0.00357 = 0.00417$ kg/kg.
    *   $h_M = 0.3 \times 14.2 + 0.7 \times 27.2 = 4.26 + 19.04 = 23.3$ kJ/kg.
    *   State M: 14.6°C DBT, $\omega = 0.00417$.

3.  **Calculate Airflow and Loads:**
    Let's assume the room requires 15 kW sensible heating.
    $Q_{s, room} = \dot{m}_a \times c_p \times (T_{db, supply} - T_{db, room})$
    $15 \text{ kW} = \dot{m}_a \times 1.006 \times (25 - 20)$
    $15 = \dot{m}_a \times 5.03$
    $\dot{m}_a \approx 2.98$ kg/s.

    Heating provided by coil:
    $Q_{heat} = \dot{m}_a \times c_p \times (T_{db, S} - T_{db, M})$
    $Q_{heat} = 2.98 \times 1.006 \times (25 - 14.6) = 2.98 \times 1.006 \times 10.4 \approx 31.1$ kW.

    This indicates that if 30% OA is mixed, and the supply air is 25°C, the heating coil needs to provide 31.1 kW. The room only requires 15 kW *sensible*. The difference (31.1 - 15 = 16.1 kW) must be accounted for by additional heating or a lower outdoor air percentage.

    Let's assume the heating coil is sized for the mixed air condition:
    Heating Load = 31.1 kW.

    Humidification required:
    $\omega_{room} = 0.0051$ (for 20°C DBT, 40% RH)
    $\omega_{supply} = 0.0144$ (from 25°C DBT, 18°C WBT)
    The supply air is significantly more humid than required for the room. This suggests the system might be designed to achieve higher humidity levels or the 18°C WBT is not the target for the humidifier.

    **Revising Winter Supply Air Target:**
    If the room needs 20°C DBT and 40% RH ($\omega = 0.0051$), and mixed air is at 14.6°C DBT, $\omega = 0.00417$.
    We need to heat and humidify. A common strategy is to heat to a temperature that allows for efficient humidification.

    Let's say we heat the mixed air to 20°C DBT.
    $Q_{heat} = 2.98 \times 1.006 \times (20 - 14.6) = 2.98 \times 1.006 \times 5.4 \approx 16.16$ kW.
    Now, the air is at 20°C DBT, $\omega = 0.00417$.
    We need to humidify it to reach 40% RH at 20°C, meaning $\omega = 0.0051$.
    $m_{water, hum} = 2.98 \times (0.0051 - 0.00417) = 2.98 \times 0.00093 \approx 0.00277$ kg/s or 2.77 g/s of water.

    This revised process (Mix OA/RA -> Heat to 20°C -> Humidify to 40% RH) is more aligned with meeting the room load. The initial target of 25°C DBT, 18°C WBT was perhaps for a different scenario or a larger system.

---

### 5. Important Points to Remember

*   **Psychrometric Chart is Key:** Always use the psychrometric chart to visualize processes and determine state points accurately.
*   **Year-Round Balancing:** Systems must be designed to handle both peak summer and peak winter loads.
*   **Recirculation:** Crucial for energy efficiency by reducing the amount of outdoor air that needs conditioning.
*   **Sensible vs. Latent Loads:** Understand the distinction and how different components (cooling coils, humidifiers) address each.
*   **Airflow Rate:** The volume or mass flow rate of air is the primary multiplier for all energy calculations. It's typically determined by the sensible load.
*   **Apparatus Dew Point (ADP) and Bypass Factor (BF):** Important for accurate coil performance analysis.
*   **Enthalpy:** The most convenient property for calculating total heat transfer.
*   **Assumptions:** Be clear about any assumptions made regarding outdoor air conditions, indoor design conditions, and mixing ratios.
*   **ASHRAE Standards:** Refer to ASHRAE standards for recommended indoor design conditions for comfort and health. (Reference Book)

---

### 6. Practice Questions and Exercises

**Question 1:**
Outdoor air is at 32°C DBT and 26°C WBT. It is to be cooled and dehumidified to 22°C DBT and 16°C WBT.
a) Represent this process on a psychrometric chart.
b) Calculate the sensible cooling, latent cooling, and total cooling required per kg of dry air.
c) If the required airflow rate is 1.5 m³/s, calculate the total sensible and latent cooling loads in kW.
(Assume standard atmospheric pressure, $h_{fg}$ at 20°C $\approx$ 2450 kJ/kg)

**Answer 1:**

*   **State Point 1 (Outdoor Air):** 32°C DBT, 26°C WBT.
    From psychrometric chart: $\omega_1 \approx 0.0188$ kg/kg, $h_1 \approx 84.5$ kJ/kg.
    Specific volume $v_1 \approx 0.895$ m³/kg.
*   **State Point 2 (Supply Air):** 22°C DBT, 16°C WBT.
    From psychrometric chart: $\omega_2 \approx 0.0106$ kg/kg, $h_2 \approx 46.5$ kJ/kg.

a) Process line is a straight line from (32°C, 26°C WBT) to (22°C, 16°C WBT) on the psychrometric chart.

b) Per kg of dry air:
    *   Sensible cooling = $c_p \times (T_{db1} - T_{db2}) = 1.006 \times (32 - 22) = 1.006 \times 10 = 10.06$ kJ/kg.
    *   Latent cooling = $h_{fg} \times (\omega_1 - \omega_2) = 2450 \times (0.0188 - 0.0106) = 2450 \times 0.0082 = 20.09$ kJ/kg.
    *   Total cooling = Sensible cooling + Latent cooling = $10.06 + 20.09 = 30.15$ kJ/kg.
    *   Alternatively, Total cooling = $h_1 - h_2 = 84.5 - 46.5 = 38.0$ kJ/kg.
        *(Note: The discrepancy of 38.0 vs 30.15 is due to using approximate values from the chart and a fixed $h_{fg}$. A more precise calculation using enthalpy values directly from a calculator or table for the given conditions would yield closer results. For the purpose of these notes, we'll use enthalpy difference for total cooling, and separate calculations for sensible/latent based on temp and humidity difference respectively.)*
        Let's recalculate using the enthalpy values directly derived from assumed WBT and DBT (this assumes latent heat is constant, which is a simplification).
        Sensible cooling = $1.006 \times (32-22) = 10.06$ kJ/kg.
        Latent cooling = $2500 \times (0.0188-0.0106) = 2500 \times 0.0082 = 20.5$ kJ/kg.
        Total = $10.06 + 20.5 = 30.56$ kJ/kg.
        The direct enthalpy difference from the chart ($h_1 - h_2 = 84.5 - 46.5 = 38.0$ kJ/kg) is generally more accurate as it accounts for changes in specific heat of water vapor. Let's use this value for total cooling.
        So, Sensible = 10.06 kJ/kg, Latent = $38.0 - 10.06 = 27.94$ kJ/kg. This implies a higher moisture removal than calculated from humidity ratio difference. Always trust enthalpy differences for total heat.

c) Airflow rate $\dot{V}_1 = 1.5$ m³/s.
    Mass flow rate $\dot{m}_a = \frac{\dot{V}_1}{v_1} = \frac{1.5 \text{ m³/s}}{0.895 \text{ m³/kg}} \approx 1.676$ kg/s.
    *   Total cooling load = $\dot{m}_a \times (h_1 - h_2) = 1.676 \text{ kg/s} \times (84.5 - 46.5) \text{ kJ/kg} = 1.676 \times 38.0 = 63.69$ kW.
    *   Sensible cooling load = $\dot{m}_a \times c_p \times (T_{db1} - T_{db2}) = 1.676 \times 1.006 \times (32 - 22) = 1.676 \times 10.06 = 16.86$ kW.
    *   Latent cooling load = Total cooling load - Sensible cooling load = $63.69 - 16.86 = 46.83$ kW.

**Question 2:**
A building requires a supply air condition of 22°C DBT and 45% RH. The outdoor air during winter is 5°C DBT and 70% RH. The mixed air (outdoor and recirculated air) is at 12°C DBT and 60% RH. The air is then heated to the supply air condition.
a) Determine the state of the mixed air on the psychrometric chart.
b) Calculate the heating required per kg of dry air.
c) If the room requires 12 kW of sensible heating, and the mixed air is at 12°C DBT, what is the required supply air DBT to meet the sensible load?
d) Calculate the amount of moisture that needs to be added (humidification) if the mixed air at 12°C DBT has $\omega = 0.0055$ kg/kg, and the final supply air needs to be at 45% RH and 22°C DBT.

**Answer 2:**

*   **State Point 1 (Mixed Air):** 12°C DBT, 60% RH.
    From psychrometric chart: $\omega_1 \approx 0.0059$ kg/kg, $h_1 \approx 26.5$ kJ/kg.
*   **State Point 2 (Supply Air):** 22°C DBT, 45% RH.
    From psychrometric chart: $\omega_2 \approx 0.0073$ kg/kg, $h_2 \approx 37.6$ kJ/kg.

a) Plot the point (12°C DBT, 60% RH) on the psychrometric chart.

b) Heating per kg of dry air = $h_2 - h_1 = 37.6 - 26.5 = 11.1$ kJ/kg.
    Alternatively, Sensible heating = $c_p \times (T_{db2} - T_{db1}) = 1.006 \times (22 - 12) = 1.006 \times 10 = 10.06$ kJ/kg.
    The difference indicates some latent heat gain if the process is not purely sensible heating. In typical heating coils, it's assumed to be sensible heating. So, heating required is primarily the sensible component.

c) Room sensible heating load = 12 kW.
    Mixed air DBT = 12°C.
    Let required supply air DBT be $T_{db,S}$.
    Assuming the airflow rate is determined by this sensible load:
    $12 \text{ kW} = \dot{m}_a \times c_p \times (T_{db,S} - T_{db,M})$
    $12 = \dot{m}_a \times 1.006 \times (T_{db,S} - 12)$.
    We need the mass flow rate $\dot{m}_a$. If we assume a supply air temperature from the chart (22°C), then:
    $12 \text{ kW} = \dot{m}_a \times 1.006 \times (22 - 12) = \dot{m}_a \times 10.06$.
    $\dot{m}_a = \frac{12}{10.06} \approx 1.193$ kg/s.
    Now, if this airflow rate needs to deliver 12 kW sensible heating from mixed air at 12°C:
    $12 = 1.193 \times 1.006 \times (T_{db,S} - 12)$
    $12 = 1.20 \times (T_{db,S} - 12)$
    $10 = T_{db,S} - 12$
    $T_{db,S} = 22^\circ C$.
    This confirms that 22°C DBT supply air is required for the given sensible load and mixed air condition.

d) Mixed air: 12°C DBT, $\omega_1 = 0.0055$ kg/kg.
    Supply air: 22°C DBT, 45% RH.
    From psychrometric chart for 22°C DBT, 45% RH: $\omega_2 \approx 0.0073$ kg/kg.
    Moisture to be added = $\dot{m}_a \times (\omega_2 - \omega_1) = 1.193 \text{ kg/s} \times (0.0073 - 0.0055) \text{ kg/kg}$
    Moisture to be added = $1.193 \times 0.0018 = 0.00215$ kg/s or 2.15 g/s.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. References

*   **Arora C.P., Refrigeration and Air Conditioning, 4th ed., 2021:** Provides a strong foundation in psychrometric principles and their application to HVAC systems. Chapters on psychrometry and air conditioning processes are highly relevant.
*   **Jones W.P., Air Conditioning Engineering, 5th ed., 2001:** Offers detailed explanations of psychrometric chart usage and calculations for various air conditioning systems.
*   **ASHRAE Handbook (various volumes):** Essential for up-to-date design data, comfort criteria, and system analysis. Particularly, the Fundamentals volume is a primary reference.
*   **Kothandaraman C.P., Data book- Refrigeration tables and charts including air conditioning data, 2023:** Crucial for obtaining accurate psychrometric properties and performing calculations.

---

### Alignment with Course Outcomes:

*   **CO5:** This topic directly addresses CO5 by enabling the analysis of moist air properties using psychrometric principles and charts, and explaining the working principles of air conditioning systems. The estimation of quantities is a core part of analyzing these systems.
*   **CO1:** Understanding year-round AC systems and their representations contributes to the analysis of ideal refrigeration cycles by contextualizing their application in practical comfort control.
*   **CO2, CO3, CO4:** While not the primary focus, the psychrometric analysis of air conditioning processes provides a fundamental understanding that supports the thermodynamic analysis of vapor compression/absorption systems, selection of refrigerants, and component analysis.

This topic equips students with the essential skills to analyze and design air conditioning systems that operate effectively throughout the year by leveraging the power of the psychrometric chart and thermodynamic calculations.