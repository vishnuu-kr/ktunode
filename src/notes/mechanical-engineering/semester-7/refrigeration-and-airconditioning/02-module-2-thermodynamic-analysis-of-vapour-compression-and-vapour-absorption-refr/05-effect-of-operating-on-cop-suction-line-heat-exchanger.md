---
title: "Effect of operating on COP suction line heat exchanger"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f65"
status: "completed"
scrapedAt: "2026-05-20T18:17:14.222Z"
---
# Refrigeration and Air Conditioning: Module 2 - Thermodynamic Analysis of Vapour Compression and Vapour Absorption Refrigeration Systems

## Topic: Effect of Operating on COP with a Suction Line Heat Exchanger

---

### 1. Introduction and Learning Outcomes

This module focuses on the thermodynamic analysis of vapour compression and vapour absorption refrigeration systems. Specifically, this topic delves into the impact of a suction line heat exchanger on the Coefficient of Performance (COP) of a vapour compression refrigeration system.

**Learning Outcomes:**

*   Understand the working principle of a suction line heat exchanger.
*   Analyze the thermodynamic effects of a suction line heat exchanger on the refrigeration cycle.
*   Quantify the impact of a suction line heat exchanger on the COP of the system.
*   Identify the advantages and disadvantages of using a suction line heat exchanger.
*   Apply thermodynamic principles to evaluate the performance enhancement with a suction line heat exchanger.

---

### 2. Key Concepts and Definitions

#### 2.1. Vapour Compression Refrigeration Cycle

The standard vapour compression refrigeration cycle consists of four main components:
1.  **Compressor:** Compresses the low-pressure refrigerant vapour into a high-pressure, high-temperature vapour.
2.  **Condenser:** Condenses the high-pressure, high-temperature vapour into a high-pressure liquid by rejecting heat to the surroundings.
3.  **Expansion Valve (or Throttling Device):** Reduces the pressure and temperature of the high-pressure liquid refrigerant.
4.  **Evaporator:** Evaporates the low-pressure, low-temperature liquid refrigerant by absorbing heat from the refrigerated space.

#### 2.2. Coefficient of Performance (COP)

The COP of a refrigeration system is defined as the ratio of the desired output (refrigerating effect) to the required input (work input).

$$
\text{COP}_R = \frac{\text{Refrigerating Effect (Desired Output)}}{\text{Work Input to Compressor (Required Input)}}
$$

*   **Refrigerating Effect (kJ/kg):** The heat absorbed by the refrigerant in the evaporator.
*   **Work Input to Compressor (kJ/kg):** The work done by the compressor to raise the pressure of the refrigerant.

#### 2.3. Suction Line Heat Exchanger (Liquid-Suction Heat Exchanger)

A suction line heat exchanger is a device where the cold, low-pressure liquid refrigerant leaving the expansion valve is used to pre-cool the warm, low-pressure vapour refrigerant entering the compressor. This is achieved by exchanging heat between the liquid and vapour streams.

**Diagrammatic Representation:**

```
                        --------------------
                        |                  |
                        |  Evaporator      |
                        |                  |
                        --------------------
                                  | (Low-pressure, low-temperature vapour)
                                  V
                       ----------------------
                       |                    |
                       | Suction Line       |
                       | Heat Exchanger     |  <-- Liquid refrigerant from condenser (high-pressure,
                       |                    |      low-temperature liquid)
                       ----------------------
                                  | (Pre-cooled vapour)
                                  V
                              Compressor
```

---

### 3. Thermodynamic Analysis of the Effect of a Suction Line Heat Exchanger

A suction line heat exchanger introduces a heat transfer process between the refrigerant in the liquid state (leaving the expansion valve) and the refrigerant in the vapour state (entering the compressor).

Let's analyze the changes in the vapour compression cycle:

**Standard Cycle (without Heat Exchanger):**

1.  **Evaporator:** Absorbs heat ($q_{evap}$). Refrigerant enters as a saturated liquid-vapour mixture and leaves as a superheated vapour.
2.  **Compressor:** Compresses the vapour from low pressure ($P_L$) to high pressure ($P_H$). Work input ($w_c$).
3.  **Condenser:** Rejects heat ($q_{cond}$). Refrigerant enters as a superheated vapour and leaves as a saturated liquid.
4.  **Expansion Valve:** Throttles the liquid refrigerant from high pressure ($P_H$) to low pressure ($P_L$). No heat transfer or work done.

**Cycle with Suction Line Heat Exchanger:**

1.  **Evaporator:** Absorbs heat ($q'_{evap}$). Refrigerant enters as a saturated liquid-vapour mixture and leaves as a slightly superheated vapour.
2.  **Suction Line Heat Exchanger:**
    *   The **liquid refrigerant** leaving the expansion valve is further cooled (subcooled). This heat transfer to the vapour stream reduces its enthalpy.
    *   The **vapour refrigerant** entering the compressor is pre-heated (superheated) by the liquid refrigerant. This increases its enthalpy and temperature.
3.  **Compressor:** Compresses the pre-heated vapour from low pressure ($P_L$) to high pressure ($P_H$). Work input ($w'_c$).
4.  **Condenser:** Rejects heat ($q'_{cond}$). Refrigerant enters as a superheated vapour (at a higher temperature than before) and leaves as a saturated liquid.
5.  **Expansion Valve:** Throttles the subcooled liquid refrigerant from high pressure ($P_H$) to low pressure ($P_L$).

---

### 4. Impact on Refrigerating Effect

*   The liquid refrigerant entering the expansion valve is subcooled in the heat exchanger. This means it enters the expansion valve with a lower enthalpy ($h_4'$ < $h_4$, where 4 is the point after the expansion valve).
*   In the evaporator, the refrigerant absorbs heat. Since the liquid entering the expansion valve has lower enthalpy, the enthalpy of the refrigerant leaving the expansion valve (as a mixture of liquid and vapour) is also lower.
*   The heat absorbed in the evaporator is given by the difference in enthalpy between the refrigerant leaving the evaporator and the refrigerant entering the evaporator.
*   **Crucially, the mass flow rate of the refrigerant entering the evaporator is now slightly reduced** because a portion of the refrigerant has been converted to vapour in the heat exchanger due to the heat absorbed from the vapour stream. The specific heat absorbed per unit mass of refrigerant *entering the evaporator* is increased (due to lower enthalpy entering expansion valve), but the overall refrigerating effect per unit mass of *circulating refrigerant* (which includes the mass that vaporized in the heat exchanger) is generally reduced.

Let's consider the states on a T-s diagram:

*   **Standard Cycle:** 1 (in) -> 2 (out) compressor -> 3 (in) condenser -> 4 (out) expansion valve -> 1 (in) evaporator.
*   **With Heat Exchanger:** 1 (in) -> 1' (pre-heated) compressor -> 2' (out) compressor -> 3' (in) condenser -> 4' (subcooled) expansion valve -> 1 (in) evaporator.

The refrigerating effect per unit mass of refrigerant entering the evaporator is $h_1 - h_4$.
With the heat exchanger, the refrigerant entering the evaporator is still at state 1. However, the liquid leaving the expansion valve is at $h_{4'}$. The amount of refrigerant that evaporates in the evaporator per unit mass *entering the compressor* is what matters for the COP calculation.

Let $m_{evap}$ be the mass flow rate entering the evaporator and $m_{compressor}$ be the mass flow rate entering the compressor. $m_{evap} = m_{compressor}$.

*   **Refrigerating Effect (per unit mass entering compressor):**
    *   Without HX: $q_{evap} = h_1 - h_4$ (where $h_1$ is enthalpy leaving evaporator, $h_4$ is enthalpy after expansion valve).
    *   With HX: The liquid refrigerant at state 4' enters the evaporator. The heat absorbed is $q'_{evap} = h_1 - h_{4'}$.
    *   However, the state 1 (leaving the evaporator) is now at a higher temperature due to pre-heating. Let's denote the enthalpy leaving the evaporator as $h_{1\_std}$ and $h_{1\_hx}$.
    *   The heat absorbed in the evaporator *per unit mass entering the compressor* becomes: $q_{evap\_hx} = h_{1\_hx} - h_{4'}$.
    *   The state 1' is the superheated vapour entering the compressor, and its enthalpy is $h_{1'}$.
    *   The liquid leaving the condenser is at $h_3$. The liquid leaving the expansion valve is at $h_4 = h_3$.
    *   In the HX, the liquid at $h_3$ cools to $h_{4'}$, and the vapour at $h_1$ heats up to $h_{1'}$.
    *   By energy balance across the heat exchanger: $m_{compressor} (h_{1'} - h_1) = m_{compressor} (h_3 - h_{4'})$. (Assuming same mass flow rate through both streams for simplicity in explanation, though in reality, the mass flow rate entering the compressor is what dictates the system capacity).
    *   The actual refrigerating effect is the heat absorbed in the evaporator. Let $m_{compressor}$ be the mass flow rate entering the compressor. The mass flow rate leaving the evaporator is also $m_{compressor}$. The liquid entering the expansion valve is $m_{compressor}$.
    *   Refrigerating effect per unit mass of *refrigerant passing through compressor*: $q_{evap} = h_{leaving\_evap} - h_{entering\_evap}$.
    *   With HX, $h_{entering\_evap}$ is still at state 1 (leaving evaporator). The liquid leaving expansion valve is at $h_{4'}$.
    *   So, the heat absorbed in the evaporator per unit mass of refrigerant circulated *through the evaporator* is $h_1 - h_{4'}$.
    *   However, the **mass flow rate through the compressor is slightly reduced** if we consider the same refrigerating capacity, or the refrigerating capacity per unit mass of refrigerant *entering the compressor* is affected.

Let's re-evaluate based on standard analysis of HX:
*   Liquid from condenser is at state 3 (high-pressure liquid).
*   Vapour from evaporator is at state 1 (low-pressure superheated vapour).
*   After expansion valve, liquid is at state 4 (low-pressure liquid-vapour mixture).
*   With HX: Liquid at state 3 cools to state 4'. Vapour at state 1 heats to state 1'.

Energy balance across HX (per unit mass):
$h_{1'} - h_1 = h_3 - h_{4'}$ (heat gained by vapour = heat lost by liquid)

*   **Refrigerating Effect:** $q_{evap} = h_1 - h_{4'}$
    *   The enthalpy of the refrigerant entering the evaporator is $h_{4'}$. The enthalpy leaving the evaporator is $h_1$.
    *   Since $h_{4'} < h_4$, the refrigerating effect ($h_1 - h_{4'}$) is **increased** compared to ($h_1 - h_4$). This is a common misconception if not carefully analyzed. The heat absorbed in the evaporator *per unit mass of refrigerant entering the expansion valve* increases.

#### Let's use a common example from textbooks:

Assume:
*   Evaporation temperature: $T_e = -10^\circ C$
*   Condensation temperature: $T_c = 40^\circ C$
*   Superheating in evaporator: $5^\circ C$ (Refrigerant leaves evaporator at $-5^\circ C$)
*   Subcooling in condenser: $0^\circ C$ (Refrigerant leaves condenser as saturated liquid)
*   Subcooling in HX: $10^\circ C$ (Liquid cools by $10^\circ C$)

Using Refrigerant R-134a properties:
*   State 1 (leaving evaporator, before HX): $T_1 = -5^\circ C$, pressure $P_e = 293.0$ kPa. Assume it's saturated vapour at this temperature plus $5^\circ C$ superheat. From tables, $h_1 \approx 252.2$ kJ/kg, $s_1 \approx 0.9275$ kJ/kg.K.
*   State 3 (leaving condenser, before expansion valve): $T_3 = 40^\circ C$, saturated liquid, $P_c = 1017.1$ kPa. $h_3 \approx 108.5$ kJ/kg.
*   State 4 (after expansion valve, without HX): $h_4 = h_3 = 108.5$ kJ/kg. This is a liquid-vapour mixture at $P_e$.

**Without Suction Line Heat Exchanger:**
*   $h_4 = 108.5$ kJ/kg.
*   Refrigerating effect per kg: $q_{evap} = h_1 - h_4 = 252.2 - 108.5 = 143.7$ kJ/kg.
*   Assume isentropic compression from state 1 ($s_1 = 0.9275$ kJ/kg.K, $P_1 = 293.0$ kPa) to $P_2 = P_c = 1017.1$ kPa.
*   From R-134a tables, at $P_2 = 1017.1$ kPa and $s_2 = 0.9275$ kJ/kg.K, $h_2 \approx 285.3$ kJ/kg.
*   Work input to compressor per kg: $w_c = h_2 - h_1 = 285.3 - 252.2 = 33.1$ kJ/kg.
*   COP: $\text{COP}_R = \frac{q_{evap}}{w_c} = \frac{143.7}{33.1} \approx 4.34$.

**With Suction Line Heat Exchanger:**
*   Liquid refrigerant at $h_3 = 108.5$ kJ/kg is subcooled by $10^\circ C$. So, $h_{4'} \approx 108.5 - C_p^{liquid} \times 10$. Assuming $C_p^{liquid} \approx 1.5$ kJ/kg.K, $h_{4'} \approx 108.5 - 1.5 \times 10 = 93.5$ kJ/kg. (This value might differ based on precise specific heat of liquid R134a at that temperature/pressure). Let's use a direct value from tables if available, or use the given subcooling temperature. If subcooling by 10 deg C, its enthalpy $h_{4'}$ is the enthalpy of liquid at $40-10 = 30^\circ C$. From tables for R134a, enthalpy of liquid at $30^\circ C$ is approx. $93.0$ kJ/kg.
*   So, $h_{4'} = 93.0$ kJ/kg.
*   **Refrigerating Effect per kg of refrigerant *entering the expansion valve***: $q'_{evap} = h_1 - h_{4'} = 252.2 - 93.0 = 159.2$ kJ/kg.
*   Now, let's find the state 1' (pre-heated vapour entering compressor). Using energy balance across HX:
    $h_{1'} - h_1 = h_3 - h_{4'}$
    $h_{1'} - 252.2 = 108.5 - 93.0 = 15.5$ kJ/kg
    $h_{1'} = 252.2 + 15.5 = 267.7$ kJ/kg.
*   The enthalpy of the vapour entering the compressor is now $267.7$ kJ/kg.
*   Work input to compressor per kg: Assume isentropic compression from state 1' ($h_{1'} = 267.7$ kJ/kg, $s_{1'} = s_1 + C_p^{vap} \ln(T_{1'}/T_1)$). A simpler approach is to find the state at $P_2$ with the new enthalpy and calculate work. Assuming the specific entropy of the superheated vapour doesn't change drastically, or we find the new pressure-enthalpy state.
    Alternatively, if we compress from $h_{1'}$ to the same $P_c$ isentropically, we need the entropy at state 1'. A more accurate way is to find the new state at compressor exit.
    Let's find the specific entropy at state 1' if it's superheated vapour at $T_1 + \Delta T_{sh}$ where $\Delta T_{sh}$ is the temperature rise in HX. $T_1$ was $-5^\circ C$. If $h_1$ was taken at saturated vapour, let's say state 1 is at $-5^\circ C$ and $293.0$ kPa. After HX, it's superheated.
    Let's assume $h_{1'} = 267.7$ kJ/kg. If we assume $s_{1'} \approx s_1 = 0.9275$ kJ/kg.K (this is an approximation), then $h_{2'}$ at $P_c = 1017.1$ kPa would be approximately $299.0$ kJ/kg.
    $w'_c = h_{2'} - h_{1'} = 299.0 - 267.7 = 31.3$ kJ/kg.
    (A more precise calculation would involve finding the actual state 1' with its specific entropy and then computing the compression work).

*   **COP with HX:** $\text{COP}'_R = \frac{q'_{evap}}{w'_c} = \frac{159.2}{31.3} \approx 5.08$.

**Analysis of Results:**
*   Refrigerating effect increased (from 143.7 kJ/kg to 159.2 kJ/kg).
*   Work input to compressor per kg decreased (from 33.1 kJ/kg to 31.3 kJ/kg - this is due to starting compression from a higher enthalpy but potentially lower specific entropy effect than enthalpy rise).
*   **Overall COP increased significantly (from 4.34 to 5.08).**

**Important Note:** The specific increase in COP depends on the refrigerant used, the operating temperatures, and the degree of superheating and subcooling achieved in the heat exchanger.

---

### 5. Effect on Work Input to Compressor

*   The refrigerant entering the compressor is pre-heated (superheated). This increases its enthalpy ($h_{1'} > h_1$).
*   However, the specific volume of the refrigerant also increases with temperature.
*   While the enthalpy difference ($h_{2'} - h_{1'}$) is the work input, the increase in initial enthalpy ($h_{1'}$) is generally less than the increase in final enthalpy ($h_{2'}$) due to the superheating, leading to a **slight reduction in work input per unit mass of refrigerant.**
*   More significantly, the **specific volume** of the refrigerant entering the compressor increases. For a given compressor displacement volume, this means a lower mass flow rate can be compressed. However, if the compressor speed is maintained, the work done per unit mass is what matters for COP.

**Key Observation:** The work input per unit mass generally **decreases or remains similar**. The increase in enthalpy going into the compressor is offset by the higher specific volume, and the isentropic path for compression from a higher enthalpy can sometimes result in less work.

---

### 6. Effect on Condenser Heat Rejection

*   The heat rejected in the condenser is given by $q_{cond} = h_2 - h_3$.
*   With the heat exchanger, the refrigerant enters the condenser at a higher enthalpy ($h_{2'} > h_2$) due to pre-heating in the suction line heat exchanger.
*   Therefore, the heat rejected in the condenser per unit mass of refrigerant **increases**.
*   $q'_{cond} = h_{2'} - h_{3'} $. Here $h_3'$ is still the liquid enthalpy at condenser pressure. If the liquid is subcooled further in HX, $h_{4'}$ becomes the entering enthalpy to evaporator. The liquid leaving condenser $h_3$ is the same.
*   So, $q'_{cond} = h_{2'} - h_3$. Since $h_{2'} > h_2$, $q'_{cond} > q_{cond}$.

---

### 7. Overall Impact on COP

The COP of a vapour compression system is given by:
$$
\text{COP}_R = \frac{q_{evap}}{w_c}
$$
*   **Refrigerating Effect ($q_{evap}$): Increases.**
*   **Work Input ($w_c$): Decreases or remains similar.**

Since both effects contribute positively to the COP, the overall COP of the refrigeration system **increases** when a suction line heat exchanger is used.

---

### 8. Advantages of Using a Suction Line Heat Exchanger

*   **Increased COP:** This is the primary advantage, leading to lower energy consumption for the same refrigerating capacity.
*   **Improved Subcooling:** The liquid refrigerant is subcooled before entering the expansion valve, which helps in reducing flashing in the evaporator and ensures more liquid refrigerant is available for evaporation. This leads to better utilization of the evaporator.
*   **Increased Refrigerating Capacity (per unit mass of refrigerant):** As shown in the example, the heat absorbed in the evaporator per unit mass of refrigerant entering the expansion valve increases.
*   **Reduced Superheating at Compressor Inlet (if evaporator is not sized for full load):** In some cases, it can help manage superheat. However, the primary effect is to increase superheat.
*   **Potentially Reduced Work per unit Mass:** As discussed, the work input per kg can decrease slightly.

---

### 9. Disadvantages and Limitations

*   **Increased Superheating:** While beneficial for some aspects, excessive superheating can lead to higher discharge temperatures from the compressor, potentially causing lubrication issues or damaging compressor components if not designed for it.
*   **Reduced Refrigerating Capacity (for a given compressor displacement):** Because the specific volume of the refrigerant entering the compressor increases with pre-heating, a given compressor displacement volume will handle a lower mass flow rate. If the system is designed for a specific capacity based on compressor displacement, the capacity might decrease. However, the question is usually about COP for a given mass flow rate or capacity.
*   **Cost and Complexity:** Adding a heat exchanger increases the initial cost and complexity of the system.
*   **Potential for Pressure Drop:** Heat exchangers introduce a small pressure drop in both the suction and liquid lines, which can slightly offset the gains.
*   **Freezing Risk:** If the liquid refrigerant becomes too cold due to excessive heat transfer, there might be a risk of it solidifying.

---

### 10. Applications

Suction line heat exchangers are commonly used in various refrigeration and air conditioning systems, especially where energy efficiency is a priority, such as:

*   **Commercial and Industrial Refrigeration:** Large-scale systems benefit significantly from COP improvements.
*   **Air Conditioning Systems:** Particularly in larger systems and in regions where electricity costs are high.
*   **Systems using refrigerants with lower latent heat:** To maximize the benefit from subcooling.

---

### 11. Connection to Course Outcomes

*   **CO1 (Knowledge Level K2, K4):** This topic helps in understanding the basic concepts of refrigeration cycles and analyzing their performance under different operating conditions, specifically with the addition of a heat exchanger.
*   **CO3 (Knowledge Level K3, K4):** The thermodynamic analysis involving enthalpy and entropy changes directly relates to performing thermodynamic analysis of vapour compression systems. Quantifying the impact on COP requires applying thermodynamic principles.
*   **CO4 (Knowledge Level K2, K3):** Understanding how a system component (heat exchanger) affects the overall performance (COP) is crucial for selecting appropriate system components and analyzing their interaction.

---

### 12. Important Points to Remember

*   A suction line heat exchanger transfers heat from the cold liquid refrigerant to the warm vapour refrigerant entering the compressor.
*   This **subcools** the liquid refrigerant and **superheats** the vapour refrigerant.
*   The refrigerating effect per unit mass of refrigerant *entering the expansion valve* **increases**.
*   The work input per unit mass of refrigerant to the compressor generally **decreases or remains similar**.
*   The net effect is an **increase in the COP** of the refrigeration system.
*   However, increased superheating at compressor discharge needs careful consideration to avoid operational problems.
*   The benefit in COP is significant and makes it a widely used device for energy efficiency.

---

### 13. Practice Questions and Exercises

**Question 1:**
Explain the working principle of a suction line heat exchanger in a vapour compression refrigeration system. How does it affect the refrigerating effect and the work input to the compressor? (CO1, CO3)

**Answer 1:**
A suction line heat exchanger (or liquid-suction heat exchanger) is a device where the cold liquid refrigerant leaving the expansion valve is used to pre-heat the low-pressure vapour refrigerant entering the compressor. This heat transfer subcools the liquid and superheats the vapour.

*   **Effect on Refrigerating Effect:** The liquid refrigerant entering the expansion valve is subcooled. This means it enters the evaporator at a lower enthalpy, leading to an increase in the heat absorbed per unit mass of refrigerant circulated through the evaporator ($q_{evap} = h_{leaving\_evap} - h_{entering\_evap}$).
*   **Effect on Work Input:** The vapour entering the compressor is pre-heated, increasing its enthalpy. While this increases the starting enthalpy, the specific volume also increases. The work input per unit mass of refrigerant generally decreases or remains similar due to these competing factors.

**Question 2:**
For a vapour compression refrigeration system using R-134a, the following conditions are observed:
*   Evaporator pressure: 2.0 bar
*   Condenser pressure: 8.0 bar
*   Refrigerant leaves evaporator as superheated vapour at $-5^\circ C$.
*   Refrigerant leaves condenser as saturated liquid.
*   In a suction line heat exchanger, the liquid refrigerant is subcooled by $5^\circ C$.
Assume isentropic compression. Using appropriate R-134a property tables (you may need to refer to a standard R-134a table for actual values), calculate:
    a) The COP of the system without the heat exchanger.
    b) The COP of the system with the heat exchanger.
    (CO3, CO4)

**Note:** This question requires specific property values. For demonstration purposes, we'll use approximate values or typical trends. Actual calculations would require precise R-134a tables.

**Approximate Property Values (for illustration):**
*   State 1 (leaving evaporator, superheated vapour at $-5^\circ C$, $P_1 \approx 1.84$ bar): $h_1 \approx 252.2$ kJ/kg, $s_1 \approx 0.9275$ kJ/kg.K
*   State 3 (leaving condenser, saturated liquid at $P_2 \approx 8.0$ bar): $h_3 \approx 93.0$ kJ/kg

**Solution Steps (Conceptual):**

**a) Without Heat Exchanger:**
1.  $h_4 = h_3 = 93.0$ kJ/kg.
2.  $q_{evap} = h_1 - h_4 = 252.2 - 93.0 = 159.2$ kJ/kg.
3.  Isentropic compression from State 1 ($h_1=252.2$, $s_1=0.9275$) to $P_2=8.0$ bar. Find $h_2$ at 8.0 bar with $s_2 = s_1$. Let's assume $h_2 \approx 285.3$ kJ/kg (as in previous example, this may vary slightly with exact pressure).
4.  $w_c = h_2 - h_1 = 285.3 - 252.2 = 33.1$ kJ/kg.
5.  $\text{COP}_R = \frac{159.2}{33.1} \approx 4.81$.

**b) With Heat Exchanger:**
1.  Subcooling of liquid by $5^\circ C$. Enthalpy of liquid at $P_c = 8.0$ bar is $h_3 = 93.0$ kJ/kg. If subcooled by $5^\circ C$, $h_{4'} \approx h_3 - C_p^{liquid} \times 5$. Assume $C_p^{liquid} \approx 1.5$. $h_{4'} \approx 93.0 - 1.5 \times 5 = 85.5$ kJ/kg.
2.  $q'_{evap} = h_1 - h_{4'} = 252.2 - 85.5 = 166.7$ kJ/kg.
3.  Energy balance across HX: $h_{1'} - h_1 = h_3 - h_{4'}$.
    $h_{1'} - 252.2 = 93.0 - 85.5 = 7.5$ kJ/kg.
    $h_{1'} = 252.2 + 7.5 = 259.7$ kJ/kg.
4.  Isentropic compression from State 1' ($h_{1'} = 259.7$, $s_{1'}$ needs to be calculated or assumed). Assuming $s_{1'} \approx s_1 = 0.9275$ kJ/kg.K (approximation), find $h_{2'}$ at $P_2=8.0$ bar with $s_2 = s_{1'}$. Let's assume $h_{2'} \approx 292.0$ kJ/kg.
5.  $w'_c = h_{2'} - h_{1'} = 292.0 - 259.7 = 32.3$ kJ/kg.
6.  $\text{COP}'_R = \frac{166.7}{32.3} \approx 5.16$.

**Answer:**
a) COP $\approx 4.81$
b) COP $\approx 5.16$

The COP increases due to the use of the suction line heat exchanger.

**Question 3:**
What is the primary benefit of using a suction line heat exchanger in a vapour compression refrigeration system? Discuss one potential disadvantage. (CO1, CO2)

**Answer 3:**
*   **Primary Benefit:** The primary benefit is the **increase in the Coefficient of Performance (COP)** of the refrigeration system. This leads to improved energy efficiency and reduced operating costs.
*   **Potential Disadvantage:** A significant disadvantage is the **potential for excessively high discharge temperatures from the compressor**. This is because the refrigerant entering the compressor is pre-heated, increasing its enthalpy and consequently, the discharge temperature after compression. High discharge temperatures can affect compressor lubrication and potentially lead to premature wear or failure if the system is not designed to handle it.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 14. References and Further Reading

*   **Arora C.P, Refrigeration and Air Conditioning (4th edition/2021):** Provides detailed thermodynamic analysis of refrigeration cycles, including the effects of various components. Chapters on Vapour Compression Cycles will be most relevant.
*   **Ramesh Chandra Arora, Refrigeration and Air Conditioning (4th Printing/2015):** Similar to Arora C.P, this book offers comprehensive coverage of refrigeration cycles and performance analysis.
*   **A Course in Refrigeration and Air Conditioning by Arora S. C. and S. Domkundwar (2018):** Useful for understanding fundamental principles and problem-solving approaches.
*   **Ahamadul Ameen, Refrigeration and air conditioning (2020):** Offers a practical perspective on system components and their thermodynamic implications.
*   **ASHRAE Handbook:** The ASHRAE Handbooks (particularly the Fundamentals volume) provide extensive data, methodologies, and best practices for HVAC&R systems, including detailed performance analysis.

---
This concludes the notes on the effect of a suction line heat exchanger on the COP of vapour compression refrigeration systems. Remember to consult the recommended textbooks for detailed property data and more complex examples.