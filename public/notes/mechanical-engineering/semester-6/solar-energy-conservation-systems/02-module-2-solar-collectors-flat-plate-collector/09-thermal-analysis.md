---
title: "thermal analysis"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 2: Solar collectors: Flat plate collector"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bc1"
status: "completed"
scrapedAt: "2026-05-20T18:08:12.848Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS

## Module 2: Solar Collectors: Flat Plate Collector

### Topic: Thermal Analysis of Flat Plate Collectors

This module delves into the thermal performance and design of Flat Plate Collectors (FPCs), a fundamental component in solar energy systems. We will focus on understanding how these collectors capture and convert solar energy into usable thermal energy through detailed thermal analysis.

---

### **Learning Outcomes Covered:**

*   Understanding the fundamental principles governing the thermal performance of flat plate collectors.
*   Identifying and quantifying various heat losses from a flat plate collector.
*   Deriving and applying energy balance equations for flat plate collectors under steady-state conditions.
*   Evaluating the overall heat loss coefficient and collector efficiency.
*   Analyzing the impact of design parameters and environmental conditions on collector performance.

---

### **Key Concepts and Definitions:**

*   **Solar Collector:** A device designed to absorb solar radiation and convert it into useful thermal energy.
*   **Flat Plate Collector (FPC):** A non-concentrating solar collector consisting of a flat absorber plate enclosed in a casing with a transparent cover, which absorbs solar radiation and transfers heat to a fluid.
*   **Absorber Plate:** The component within the collector that absorbs solar radiation. Typically made of a metal with a selective coating to maximize absorption and minimize emission.
*   **Selective Coating:** A surface coating that has high absorptivity for solar radiation and low emissivity for thermal radiation.
*   **Transparent Cover (Glazing):** One or more layers of glass or plastic placed over the absorber plate to reduce heat losses due to convection and radiation.
*   **Heat Transfer Fluid:** The medium (e.g., water, air, antifreeze solution) that circulates through the collector to absorb heat from the absorber plate.
*   **Insulation:** Material placed around the collector casing to minimize heat losses to the surroundings.
*   **Useful Heat Gain ($Q_u$):** The rate at which thermal energy is transferred from the collector to the heat transfer fluid.
*   **Incident Solar Radiation ($I$):** The rate of solar energy incident on the collector aperture per unit area.
*   **Collector Efficiency ($\eta$):** The ratio of the useful heat gain to the incident solar radiation.
*   **Overall Heat Loss Coefficient ($U_L$):** A parameter representing the total heat loss from the collector to the surroundings per unit area per degree Celsius temperature difference between the absorber plate and the ambient air.

---

### **1. Principles of Heat Transfer in FPCs**

Flat plate collectors operate based on fundamental principles of heat transfer: absorption, convection, and radiation.

*   **Absorption:** Solar radiation incident on the transparent cover passes through and strikes the absorber plate. The absorber plate, ideally with a selective coating, absorbs a significant portion of this radiation.
*   **Conduction:** Heat is conducted from the absorber plate to the heat transfer fluid flowing through tubes attached to it. Heat is also conducted through the absorber plate itself and to the surrounding insulation.
*   **Convection:** Heat is transferred by convection from the absorber plate to the fluid within the tubes. Convective heat losses occur from the top surface of the absorber plate to the underside of the transparent cover, from the transparent cover to the ambient air, and from the sides and back of the collector casing to the surroundings.
*   **Radiation:** Heat is lost by radiation from the absorber plate to the transparent cover, and from the transparent cover to the surroundings.

---

### **2. Thermal Analysis: Energy Balance**

The thermal performance of an FPC is analyzed by considering the energy balance of the absorber plate. Under steady-state conditions, the rate at which solar energy is absorbed by the plate equals the rate at which heat is transferred to the fluid plus the rate at which heat is lost to the surroundings.

**Schematic of Energy Flows in an FPC:**

```
     Solar Radiation (I)
          ↓
   Transparent Cover
          ↓
  Absorber Plate
     ↗ | ↘
    ↓  |  ↓
 Fluid  |  Heat Losses (Q_loss)
        |
        |  (Convection & Radiation)
```

**Energy Balance Equation:**

The useful heat gain ($Q_u$) by the heat transfer fluid can be expressed as:

$Q_u = \dot{m} c_p (T_{out} - T_{in})$

where:
*   $\dot{m}$ is the mass flow rate of the heat transfer fluid (kg/s)
*   $c_p$ is the specific heat capacity of the fluid (J/kg·K)
*   $T_{out}$ is the outlet temperature of the fluid (°C or K)
*   $T_{in}$ is the inlet temperature of the fluid (°C or K)

The overall energy balance for the absorber plate can be written as:

$G \alpha A_p - U_L A_p (T_{pm} - T_a) = Q_u$

where:
*   $G$ is the solar irradiance on the collector plane (W/m²)
*   $\alpha$ is the absorptivity of the absorber plate
*   $A_p$ is the area of the absorber plate (m²)
*   $U_L$ is the overall heat loss coefficient (W/m²·K)
*   $T_{pm}$ is the mean temperature of the absorber plate (°C or K)
*   $T_a$ is the ambient air temperature (°C or K)

**Simplification for Collector Efficiency (FDR Equation):**

A more practical approach often uses the **Fluid Delivery Rate (FDR) equation**, also known as the **Hottel-Whillier-Bliss equation**. This equation relates the useful heat gain to the average fluid temperature ($T_f$) and the ambient temperature ($T_a$):

$Q_u = F_R A_c \left[ G \alpha - U_L \left( T_{f,in} - T_a \right) \right]$

where:
*   $F_R$ is the **collector efficiency factor** (dimensionless). It accounts for the fact that the fluid outlet temperature is usually higher than the plate temperature. $F_R$ is always less than 1.
*   $A_c$ is the collector aperture area (m²).
*   $T_{f,in}$ is the inlet temperature of the heat transfer fluid (°C or K).

The collector efficiency ($\eta$) is then given by:

$\eta = \frac{Q_u}{G A_c} = F_R \left[ \alpha - U_L \frac{\left( T_{f,in} - T_a \right)}{G} \right]$

This equation is crucial as it shows how the collector efficiency depends on the solar irradiance, the temperature difference between the fluid inlet and ambient air, and the collector properties ($\alpha$, $U_L$, $F_R$).

---

### **3. Components of Heat Loss ($U_L$)**

The overall heat loss coefficient ($U_L$) is the sum of individual heat transfer coefficients for different loss mechanisms:

$U_L = U_{top} + U_{side} + U_{back}$

*   **$U_{top}$:** Heat loss from the top surface of the absorber plate to the ambient air, primarily through convection and radiation to the underside of the glazing and then to the ambient.
*   **$U_{side}$:** Heat loss from the sides of the collector to the surroundings. This is usually smaller and often neglected or grouped with back losses for simplification.
*   **$U_{back}$:** Heat loss from the back of the absorber plate through the insulation to the ambient air.

**Detailed breakdown of $U_{top}$:**

$U_{top} = \left[ \frac{1}{U_{p-g}} + \frac{1}{U_{g-a}} \right]^{-1}$

where:
*   $U_{p-g}$ is the combined radiative and convective heat transfer coefficient between the absorber plate and the underside of the glazing.
    *   $U_{p-g} = U_{rad, p-g} + U_{conv, p-g}$
    *   $U_{rad, p-g} = \frac{\sigma (T_{pm}^4 - T_g^4)}{T_{pm} - T_g}$ (can be approximated using emissivity)
    *   $U_{conv, p-g}$ is the convective heat transfer coefficient between the plate and glass.
*   $U_{g-a}$ is the combined radiative and convective heat transfer coefficient between the top of the glazing and the ambient air.
    *   $U_{g-a} = U_{rad, g-a} + U_{conv, g-a}$
    *   $U_{rad, g-a}$ is the radiative heat transfer coefficient from the glazing to the sky.
    *   $U_{conv, g-a}$ is the convective heat transfer coefficient from the glazing to the ambient air.

**Simplification for $U_L$:**

In many practical applications, $U_L$ is approximated by considering only the top losses, as they are the dominant ones. For a single-glazed collector with a selective surface, a typical correlation for $U_L$ (as found in Sukhatme's "Solar Energy") is:

$U_L \approx (U_{conv, p-g} + U_{rad, p-g}) + U_{back}$

The term $(U_{conv, p-g} + U_{rad, p-g})$ represents the heat transfer from the plate to the glazing, and then from the glazing to the ambient.

**Factors Affecting $U_L$:**

*   **Number of Glazing Layers:** Double or triple glazing reduces convective and radiative losses.
*   **Glazing Properties:** Emissivity of the glazing, transmission characteristics.
*   **Gap Between Glazing and Plate:** A smaller gap reduces convection but can increase radiation losses (if not well coated).
*   **Presence of Selective Coating:** Significantly reduces radiative losses.
*   **Insulation Thickness and Material:** Reduces back and side losses.
*   **Wind Speed:** Increases convective heat losses from the outer surface of the glazing.
*   **Plate Temperature:** Higher plate temperatures lead to higher radiative losses.

---

### **4. Collector Efficiency Factor ($F_R$)**

The collector efficiency factor ($F_R$) is a crucial parameter that relates the useful heat gain to the incident solar radiation based on the inlet fluid temperature. It accounts for thermal resistance between the fluid and the absorber plate, and the thermal capacitance of the collector.

$F_R = \frac{F'}{1 + \frac{F' U_L A_c}{\dot{m} c_p}}$

where:
*   $F'$ is the **plate efficiency factor** (dimensionless). It accounts for the thermal resistance between the absorber plate and the fluid.
    $F' = \frac{1}{U_L} \left( \frac{1}{U_L} + \frac{W}{\alpha G} + \frac{1}{h_i + U_{side, plate}} \right)^{-1}$  (This is a complex form, often simplified)
    A simpler and more common definition of $F'$ is:
    $F' = \frac{1}{U_L} \left( \frac{1}{U_L} + \frac{1}{U_{plate-fluid}} \right)^{-1}$  (This is also complex and often simplified)

    A more practical way to understand $F'$ is related to how effectively the absorber plate transfers heat to the fluid, considering the internal resistances.

    A common correlation for $F'$ is:
    $F' = \frac{\dot{m} c_p}{A_c U_L} \left[ 1 - \exp\left(-\frac{F' U_L A_c}{\dot{m} c_p}\right) \right]$  (This is an implicit equation that requires iteration)

    A simplified approximation for $F'$ can be derived by considering the thermal resistance due to convection to the fluid and the plate resistance. For a typical flat plate collector with tubes attached to the absorber plate, $F'$ is often found to be close to 1, but it's always less than 1.

    **Key factors influencing $F'$:**
    *   **Heat transfer coefficient of the fluid ($h_i$):** Higher $h_i$ (due to turbulent flow) improves $F'$.
    *   **Thermal conductivity of the absorber plate:** Higher conductivity improves $F'$.
    *   **Spacing and diameter of the tubes:** Closer spacing and smaller diameter tubes improve $F'$.
    *   **Overall heat loss coefficient ($U_L$):** Higher $U_L$ reduces $F'$.
    *   **Mass flow rate ($\dot{m}$):** Higher mass flow rates generally increase $F_R$ but decrease $F'$ slightly.

**Relationship between $F_R$ and $F'$:**

*   As the mass flow rate ($\dot{m}$) increases, $\frac{F' U_L A_c}{\dot{m} c_p}$ decreases, making the exponential term approach 1. In the limit of very high flow rates, $F_R \rightarrow F'$.
*   As the mass flow rate decreases, $\frac{F' U_L A_c}{\dot{m} c_p}$ increases, making the exponential term approach 0. In the limit of very low flow rates, $F_R \rightarrow \frac{F' U_L A_c}{\dot{m} c_p}$, which can be very small.

**Important Note:** The value of $F_R$ is a strong function of the mass flow rate per unit area of the collector.

---

### **5. Calculating Collector Performance**

The performance of an FPC is typically evaluated using the FDR equation.

**Example Calculation:**

Consider a single-glazed flat plate collector with the following properties:
*   Absorber area ($A_c$) = 2.0 m²
*   Absorptivity ($\alpha$) = 0.95
*   Transmissivity of glazing ($\tau$) = 0.88
*   Overall heat loss coefficient ($U_L$) = 5.5 W/m²·K
*   Collector efficiency factor ($F'$) = 0.92
*   Inlet fluid temperature ($T_{f,in}$) = 30 °C
*   Ambient air temperature ($T_a$) = 20 °C
*   Solar irradiance ($G$) = 800 W/m²
*   Mass flow rate ($\dot{m}$) = 0.02 kg/s
*   Specific heat of fluid ($c_p$) = 4186 J/kg·K

**Steps:**

1.  **Calculate $F_R$:**
    *   First, calculate the term $\frac{F' U_L A_c}{\dot{m} c_p}$:
        $\frac{F' U_L A_c}{\dot{m} c_p} = \frac{0.92 \times 5.5 \times 2.0}{0.02 \times 4186} \approx 0.1309$
    *   Now, calculate $F_R$:
        $F_R = \frac{0.92}{1 + \frac{0.92 \times 5.5 \times 2.0}{0.02 \times 4186}} = \frac{0.92}{1 + 0.1309} \approx \frac{0.92}{1.1309} \approx 0.8135$

2.  **Calculate Useful Heat Gain ($Q_u$):**
    *   $Q_u = F_R A_c \left[ G \alpha - U_L \left( T_{f,in} - T_a \right) \right]$
    *   $Q_u = 0.8135 \times 2.0 \left[ 800 \times 0.95 - 5.5 \times (30 - 20) \right]$
    *   $Q_u = 1.627 \left[ 760 - 5.5 \times 10 \right]$
    *   $Q_u = 1.627 \left[ 760 - 55 \right]$
    *   $Q_u = 1.627 \times 705 \approx 1147.4 \text{ W}$

3.  **Calculate Collector Efficiency ($\eta$):**
    *   $\eta = \frac{Q_u}{G A_c} = \frac{1147.4}{800 \times 2.0} = \frac{1147.4}{1600} \approx 0.717$ or 71.7%

**Alternative calculation using the efficiency equation directly:**

*   $\eta = F_R \left[ \alpha - U_L \frac{\left( T_{f,in} - T_a \right)}{G} \right]$
*   $\eta = 0.8135 \left[ 0.95 - 5.5 \frac{(30 - 20)}{800} \right]$
*   $\eta = 0.8135 \left[ 0.95 - 5.5 \frac{10}{800} \right]$
*   $\eta = 0.8135 \left[ 0.95 - 5.5 \times 0.0125 \right]$
*   $\eta = 0.8135 \left[ 0.95 - 0.06875 \right]$
*   $\eta = 0.8135 \times 0.88125 \approx 0.717$ or 71.7%

---

### **6. Effect of Design Parameters and Environmental Conditions**

*   **Solar Irradiance (G):** Higher irradiance leads to higher absorber plate temperature and thus higher useful heat gain and efficiency, up to a point where losses start dominating. The FDR equation shows a linear dependence on G.
*   **Ambient Temperature ($T_a$):** Lower ambient temperatures increase the temperature difference $(T_{f,in} - T_a)$, leading to higher heat losses and thus lower efficiency.
*   **Inlet Fluid Temperature ($T_{f,in}$):** Higher inlet fluid temperatures increase the temperature difference $(T_{f,in} - T_a)$, leading to higher heat losses and thus lower efficiency. This is evident in the term $U_L(T_{f,in} - T_a)$ in the FDR equation.
*   **Wind Speed:** Affects the convective heat loss coefficient from the outer glazing surface ($U_{g-a}$), thus increasing $U_L$ and reducing efficiency.
*   **Collector Tilt Angle:** Affects the incident solar radiation ($G$) and can influence heat loss by changing the orientation relative to the wind.
*   **Mass Flow Rate ($\dot{m}$):** As discussed, a higher mass flow rate increases $F_R$, generally leading to higher useful heat gain for a given incident radiation. However, it also means the fluid passes through the collector more quickly, so the temperature rise of the fluid might be smaller. The optimal flow rate balances these effects.
*   **Number of Glazing Layers:** Multiple glazing layers significantly reduce convective and radiative heat losses from the top surface by creating stagnant air layers. This reduces $U_L$.
*   **Selective Coatings:** Crucial for reducing radiative losses from the absorber plate to the glazing. This effectively lowers the radiative component of $U_{p-g}$ and thus $U_L$.
*   **Insulation:** Good insulation on the back and sides of the collector reduces $U_{side}$ and $U_{back}$, contributing to a lower overall $U_L$.

---

### **7. Important Points to Remember:**

*   The thermal analysis of an FPC is based on the energy balance of the absorber plate.
*   The **Hottel-Whillier-Bliss equation** is the fundamental equation for predicting the useful heat gain and efficiency of an FPC.
*   **Collector efficiency** decreases as the temperature difference between the fluid inlet and ambient air increases, and as solar irradiance decreases.
*   **Heat losses** are categorized into top, side, and back losses. Top losses are typically dominant.
*   The **overall heat loss coefficient ($U_L$)** is a critical parameter that quantifies the total heat lost to the environment. It is influenced by glazing, insulation, wind speed, and temperature differences.
*   The **collector efficiency factor ($F_R$)** accounts for the thermal resistance between the absorber plate and the fluid and is strongly dependent on the mass flow rate.
*   **Selective coatings** are vital for improving collector performance by reducing radiative heat losses.
*   Optimizing collector design involves minimizing heat losses while maximizing solar energy absorption.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **References & Further Reading:**

*   **Solar Energy by S P Sukhatme:** Provides comprehensive theoretical background on heat transfer mechanisms in FPCs, derivation of heat loss coefficients, and performance analysis. Chapters on flat plate collectors are highly relevant.
*   **Principles of Solar Engineering by D. Yogi Goswami, Frank Kreith, and Jan F. Kreider:** Offers in-depth analysis of thermodynamic principles, heat transfer modes, and detailed methodologies for calculating $F_R$ and $U_L$.
*   **Handbook of Solar Energy: Theory, Analysis and Applications by G. N. Tiwari:** Contains practical formulas, correlations for heat loss coefficients, and examples of thermal analysis for various collector designs.
*   **Renewable Energy: Power for a Sustainable Future by Godfrey Boyle:** Offers a good overview of FPC principles and applications, with simplified explanations of thermal analysis.

---

### **Practice Questions and Exercises:**

**Question 1:**
Define the terms "collector efficiency factor ($F_R$)" and "plate efficiency factor ($F'$)" for a flat plate collector. Explain the relationship between them and how they are affected by the mass flow rate of the heat transfer fluid.

**Answer:**
*   **Collector Efficiency Factor ($F_R$):** A dimensionless parameter that relates the useful heat gain of a solar collector to the incident solar radiation, taking into account the collector's thermal resistances and fluid flow. It's defined by the equation: $Q_u = F_R A_c [\alpha G - U_L(T_{f,in} - T_a)]$.
*   **Plate Efficiency Factor ($F'$):** A dimensionless parameter that accounts for the thermal resistance between the absorber plate and the heat transfer fluid, and the resistance within the plate itself. It represents how efficiently the absorber plate can transfer heat to the fluid, independent of the overall collector heat losses and fluid flow rate.
*   **Relationship:** $F_R = \frac{F'}{1 + \frac{F' U_L A_c}{\dot{m} c_p}}$. $F_R$ is always less than $F'$.
*   **Effect of Mass Flow Rate:** As the mass flow rate ($\dot{m}$) increases, the term $\frac{F' U_L A_c}{\dot{m} c_p}$ decreases. This causes the denominator $(1 + \text{small value})$ to approach 1, making $F_R$ approach $F'$. Therefore, higher mass flow rates increase $F_R$, meaning the collector operates more efficiently in delivering the heat to the fluid.

---

**Question 2:**
A single-glazed flat plate collector has the following parameters:
*   Collector area ($A_c$) = 2.5 m²
*   Absorptivity ($\alpha$) = 0.92
*   Overall heat loss coefficient ($U_L$) = 6.0 W/m²·K
*   Solar irradiance ($G$) = 700 W/m²
*   Inlet fluid temperature ($T_{f,in}$) = 35 °C
*   Ambient air temperature ($T_a$) = 25 °C
*   Mass flow rate per unit area = 0.005 kg/s per m²
*   Specific heat of fluid ($c_p$) = 4186 J/kg·K
*   Plate efficiency factor ($F'$) = 0.90

Calculate the collector efficiency ($\eta$).

**Answer:**

1.  **Calculate total mass flow rate ($\dot{m}$):**
    $\dot{m} = (\text{mass flow rate per unit area}) \times A_c$
    $\dot{m} = 0.005 \text{ kg/s/m}^2 \times 2.5 \text{ m}^2 = 0.0125 \text{ kg/s}$

2.  **Calculate the term $\frac{F' U_L A_c}{\dot{m} c_p}$:**
    $\frac{F' U_L A_c}{\dot{m} c_p} = \frac{0.90 \times 6.0 \times 2.5}{0.0125 \times 4186} = \frac{13.5}{52.325} \approx 0.258$

3.  **Calculate $F_R$:**
    $F_R = \frac{F'}{1 + \frac{F' U_L A_c}{\dot{m} c_p}} = \frac{0.90}{1 + 0.258} = \frac{0.90}{1.258} \approx 0.7154$

4.  **Calculate Collector Efficiency ($\eta$):**
    $\eta = F_R \left[ \alpha - U_L \frac{\left( T_{f,in} - T_a \right)}{G} \right]$
    $\eta = 0.7154 \left[ 0.92 - 6.0 \frac{(35 - 25)}{700} \right]$
    $\eta = 0.7154 \left[ 0.92 - 6.0 \frac{10}{700} \right]$
    $\eta = 0.7154 \left[ 0.92 - 6.0 \times 0.014286 \right]$
    $\eta = 0.7154 \left[ 0.92 - 0.085716 \right]$
    $\eta = 0.7154 \times 0.834284 \approx 0.597$ or 59.7%

---

**Question 3:**
List at least three factors that significantly affect the overall heat loss coefficient ($U_L$) of a flat plate collector. For each factor, explain how it influences $U_L$.

**Answer:**
1.  **Number of Glazing Layers:**
    *   **Influence:** More glazing layers reduce $U_L$.
    *   **Explanation:** Each additional layer of glass creates an air gap between it and the layer below. These air gaps act as insulators, reducing convective heat transfer from the absorber plate to the outer cover and then to the ambient air. They also reduce radiative heat transfer between surfaces.
2.  **Presence of Selective Coating on the Absorber Plate:**
    *   **Influence:** Selective coatings significantly reduce $U_L$.
    *   **Explanation:** Selective coatings have high absorptivity for solar radiation (reducing energy reflected back) and low emissivity for thermal radiation (reducing emitted infrared radiation). By reducing the emissivity, the radiative heat transfer from the absorber plate to the glazing is significantly decreased, thus lowering $U_L$.
3.  **Wind Speed:**
    *   **Influence:** Higher wind speeds increase $U_L$.
    *   **Explanation:** Wind blowing over the outer surface of the transparent cover increases the convective heat transfer coefficient ($U_{g-a}$) from the glazing to the ambient air. This enhanced convection leads to greater heat loss from the collector, increasing the overall heat loss coefficient ($U_L$).

---

### **Alignment with Course Outcomes:**

*   **CO1 (Understand solar radiation, sun-earth, atmosphere effects):** While not the primary focus, the concept of solar irradiance ($G$) is central to thermal analysis, implicitly linking to the availability of solar radiation.
*   **CO2 (Recall types of solar collectors, principles):** This topic directly addresses the theoretical principles of flat plate collectors, their construction, and how they capture solar energy.
*   **CO3 (Apply thermal analysis techniques to collectors):** This entire topic is dedicated to applying thermal analysis techniques. We derived energy balance equations, defined key performance parameters ($F_R$, $U_L$), and used them to calculate efficiency. This aligns directly with the "apply thermal analysis techniques" aspect.
*   **CO4 (Understand plant economy, cost, payback):** This topic provides the technical basis (efficiency, heat gain) needed for economic evaluations. Understanding how efficiently a collector operates is fundamental to calculating the energy produced, which then feeds into cost analysis and payback period calculations for a complete solar energy system.

---