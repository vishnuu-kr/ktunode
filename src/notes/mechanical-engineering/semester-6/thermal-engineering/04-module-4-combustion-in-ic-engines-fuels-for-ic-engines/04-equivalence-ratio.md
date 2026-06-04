---
title: "equivalence ratio."
subject: "THERMAL ENGINEERING"
module: "Module 4: Combustion in IC Engines : Fuels for IC engines"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044639ab"
status: "completed"
scrapedAt: "2026-05-20T18:08:59.800Z"
---
# Thermal Engineering: Module 4 - Combustion in IC Engines: Fuels for IC Engines

## Topic: Equivalence Ratio

### 1. Introduction to Equivalence Ratio

The **equivalence ratio ($\phi$)** is a crucial parameter in understanding the combustion process in Internal Combustion (IC) engines. It quantifies the ratio of the actual fuel-air ratio to the stoichiometric fuel-air ratio. It provides a normalized measure of the fuel-air mixture's richness or leanness.

**Key Concepts:**

*   **Stoichiometric Mixture:** A mixture of fuel and air where there is exactly enough oxygen available to completely burn all the fuel, producing only carbon dioxide ($CO_2$) and water ($H_2O$) as combustion products (assuming complete combustion of a hydrocarbon fuel).
*   **Rich Mixture:** A mixture where there is more fuel than required for stoichiometric combustion. This means there is insufficient oxygen to burn all the fuel completely, leading to the formation of unburnt hydrocarbons (HC), carbon monoxide (CO), and potentially soot.
*   **Lean Mixture:** A mixture where there is less fuel than required for stoichiometric combustion. This means there is excess oxygen available, leading to complete combustion of the fuel but potentially higher combustion temperatures and increased formation of nitrogen oxides ($NO_x$).

**Definition:**

The equivalence ratio ($\phi$) is defined as:

$\qquad \phi = \frac{(F/A)_{actual}}{(F/A)_{stoichiometric}}$

Where:
*   $(F/A)_{actual}$ is the actual mass ratio of fuel to air supplied to the engine.
*   $(F/A)_{stoichiometric}$ is the stoichiometric mass ratio of fuel to air required for complete combustion.

**Relationship with Air-Fuel Ratio (AFR):**

The equivalence ratio can also be expressed in terms of air-fuel ratio (AFR):

$\qquad \phi = \frac{(A/F)_{stoichiometric}}{(A/F)_{actual}}$

This form highlights that a higher equivalence ratio (richer mixture) corresponds to a lower actual AFR compared to the stoichiometric AFR.

**Important Points to Remember:**

*   **$\phi < 1$**: Lean mixture (excess air)
*   **$\phi = 1$**: Stoichiometric mixture
*   **$\phi > 1$**: Rich mixture (excess fuel)

### 2. Calculating Stoichiometric Fuel-Air Ratio (F/A)$_{stoichiometric}$

To calculate the equivalence ratio, we first need to determine the stoichiometric fuel-air ratio for a given fuel. This involves considering the fuel's chemical composition and the combustion reaction.

**Example: Combustion of Gasoline (approximated as Octane, $C_8H_{18}$)**

The balanced stoichiometric combustion equation for octane is:

$2 C_8H_{18} + 25 O_2 \rightarrow 16 CO_2 + 18 H_2O$

**Steps to calculate (F/A)$_{stoichiometric}$:**

1.  **Determine the molecular weights:**
    *   Molecular weight of $C_8H_{18}$ (Octane) = (8 × 12.011) + (18 × 1.008) ≈ 114.228 g/mol
    *   Molecular weight of $O_2$ = 2 × 15.999 ≈ 31.998 g/mol
    *   Molecular weight of $N_2$ (assuming air is 21% $O_2$ and 79% $N_2$ by volume, which is approximately 23.3% $O_2$ and 76.7% $N_2$ by mass) ≈ 28.014 g/mol
    *   Molecular weight of Air ≈ 28.97 g/mol (using molar masses of $O_2$ and $N_2$)

2.  **Calculate the mass of oxygen required per mole of fuel:**
    From the balanced equation, 2 moles of octane require 25 moles of $O_2$.
    Mass of $O_2$ required per mole of $C_8H_{18}$ = 25 moles $O_2$ × 31.998 g/mol $O_2$ = 799.95 g

3.  **Calculate the mass of air required per mole of fuel:**
    The mass of air is required, not just oxygen. We use the molar ratio of air to oxygen.
    From the balanced equation, 2 moles of octane require 25 moles of $O_2$. In air, oxygen is approximately 23.3% by mass.
    Mass of Air required per mole of $C_8H_{18}$ = $\frac{\text{Mass of } O_2 \text{ required}}{\text{Mass fraction of } O_2 \text{ in air}}$
    Mass of Air required per mole of $C_8H_{18}$ = $\frac{799.95 \text{ g } O_2}{0.233} \approx 3433.26 \text{ g}$

4.  **Calculate the stoichiometric fuel-air ratio (F/A)$_{stoichiometric}$:**
    $(F/A)_{stoichiometric} = \frac{\text{Molecular weight of fuel}}{\text{Mass of air required per mole of fuel}}$
    $(F/A)_{stoichiometric} = \frac{114.228 \text{ g/mol}}{3433.26 \text{ g/mol}} \approx 0.0333$

    Alternatively, using molar ratios:
    Moles of Air = Moles of $O_2$ / (mole fraction of $O_2$ in air) = 25 moles $O_2$ / 0.21 ≈ 119.05 moles of Air
    Mass of Air = 119.05 moles Air × 28.97 g/mol Air ≈ 3448.87 g
    $(F/A)_{stoichiometric} = \frac{\text{Mass of fuel}}{\text{Mass of air}} = \frac{2 \times 114.228 \text{ g}}{3448.87 \text{ g}} \approx 0.0331$

    **For gasoline, the stoichiometric AFR is typically around 14.7:1 (by mass), meaning (F/A)$_{stoichiometric}$ is approximately 1/14.7 ≈ 0.068.** This difference arises from the fact that gasoline is a mixture of hydrocarbons, not just pure octane.

**General Approach for Hydrocarbon Fuels $C_xH_y$:**

Balanced equation: $C_xH_y + (x + y/4) O_2 \rightarrow x CO_2 + (y/2) H_2O$

Mass of $O_2$ required per mole of fuel = $(x + y/4) \times MW_{O_2}$
Mass of Air required per mole of fuel = $\frac{(x + y/4) \times MW_{O_2}}{\text{Mass fraction of } O_2 \text{ in air}}$

$(F/A)_{stoichiometric} = \frac{MW_{Fuel}}{\text{Mass of Air required per mole of fuel}}$

**References:**

*   Rudra Moorthy, "Thermal Engineering," McGraw Hill Education India, 2003 (Chapter on Combustion)
*   R.K Rajput, "Thermal Engineering," Laxmi publications, 2010 (Chapter on Combustion)
*   J.B.Heywood, "I.C engine fundamentals," McGraw-Hill, 2011 (Chapter on Combustion Chemistry)

### 3. Impact of Equivalence Ratio on Engine Performance and Emissions

The equivalence ratio significantly influences various aspects of IC engine operation:

#### 3.1. Performance Parameters (CO3: Evaluate performance)

*   **Power Output:**
    *   **Rich Mixtures ($\phi > 1$):** While more fuel is supplied, complete combustion is hindered by lack of oxygen. This can lead to incomplete combustion products and reduced power output per unit of fuel. However, for a fixed air intake, a slightly rich mixture can sometimes yield maximum power due to factors like flame speed and reduced pumping losses.
    *   **Lean Mixtures ($\phi < 1$):** With excess air, complete combustion is ensured, but the amount of fuel per cycle is reduced, leading to lower power output.
    *   **Stoichiometric Mixture ($\phi = 1$):** Generally provides a good balance for power output and efficiency, especially in modern engines with catalytic converters.

*   **Thermal Efficiency:**
    *   **Rich Mixtures ($\phi > 1$):** Lower thermal efficiency due to incomplete combustion, formation of CO, and HC. The presence of excess fuel also contributes to heat losses.
    *   **Lean Mixtures ($\phi < 1$):** Can achieve higher thermal efficiency because of the excess air, which leads to lower combustion temperatures (reducing heat losses) and a higher expansion ratio for the burned gases. However, very lean mixtures can suffer from slow and incomplete combustion, reducing efficiency.
    *   **Stoichiometric Mixture ($\phi = 1$):** Offers a good trade-off for efficiency.

*   **Fuel Consumption:**
    *   **Rich Mixtures ($\phi > 1$):** Higher fuel consumption per unit of power due to incomplete combustion.
    *   **Lean Mixtures ($\phi < 1$):** Lower fuel consumption for a given power output, up to the point where combustion becomes unstable or incomplete.

*   **Flame Speed and Combustion Duration:**
    *   **Stoichiometric and slightly rich mixtures** tend to have higher flame speeds, leading to faster and more complete combustion.
    *   **Lean mixtures** have slower flame speeds, which can increase combustion duration and potentially lead to misfires or incomplete combustion if the mixture is too lean.

*   **Knock Tendency:**
    *   **Rich mixtures** generally have a lower tendency to knock due to lower combustion temperatures and the presence of excess fuel acting as a diluent.
    *   **Lean mixtures** tend to have a higher tendency to knock because of higher combustion temperatures.

#### 3.2. Emissions (CO4: Explain combustion phenomenon and pollution)

The equivalence ratio is a primary determinant of exhaust gas composition.

*   **Carbon Monoxide (CO):**
    *   **Rich Mixtures ($\phi > 1$):** High CO emissions due to incomplete combustion (insufficient oxygen to oxidize carbon to $CO_2$).
    *   **Lean Mixtures ($\phi < 1$):** Very low CO emissions as there is ample oxygen for complete oxidation.

*   **Unburnt Hydrocarbons (HC):**
    *   **Rich Mixtures ($\phi > 1$):** High HC emissions due to incomplete combustion and quenching near cylinder walls.
    *   **Lean Mixtures ($\phi < 1$):** Low HC emissions under stable combustion conditions. However, very lean mixtures can lead to misfires and increased HC emissions due to incomplete flame propagation.
    *   **Stoichiometric Mixture ($\phi = 1$):** Moderate HC emissions, typically lower than rich mixtures.

*   **Nitrogen Oxides ($NO_x$):**
    *   **Rich Mixtures ($\phi > 1$):** Low $NO_x$ emissions because the limited availability of oxygen suppresses $NO_x$ formation.
    *   **Lean Mixtures ($\phi < 1$):** High $NO_x$ emissions due to the presence of excess oxygen and high combustion temperatures.
    *   **Stoichiometric Mixture ($\phi = 1$):** Generally results in the highest $NO_x$ emissions. This is because there is a sufficient amount of oxygen, and the combustion temperatures are high enough for rapid $NO_x$ formation (Zeldovich mechanism).

*   **Soot:**
    *   **Rich Mixtures ($\phi > 1$):** High soot formation due to the incomplete oxidation of fuel in a fuel-rich environment.

**Summary Table of Equivalence Ratio Effects:**

| Parameter        | Lean Mixture ($\phi < 1$) | Stoichiometric Mixture ($\phi = 1$) | Rich Mixture ($\phi > 1$) |
| :--------------- | :------------------------ | :---------------------------------- | :------------------------ |
| **Power Output** | Lower                     | High                                | Can be high (slightly rich) |
| **Efficiency**   | High (optimal lean)       | Good                                | Lower                     |
| **Fuel Economy** | Best                      | Good                                | Poor                      |
| **CO Emissions** | Very Low                  | Low                                 | High                      |
| **HC Emissions** | Low (stable) / High (misfire) | Moderate                            | High                      |
| **$NO_x$ Emissions** | High                    | Highest                             | Low                       |
| **Soot Emissions** | Very Low                  | Low                                 | High                      |
| **Knock Tendency** | High                    | Moderate                            | Low                       |

**References:**

*   V. Ganesan, "Fundamentals of IC engines," Tata McGraw-Hill, 2002 (Chapter on Combustion)
*   H N Gupta, "Fundamentals of IC engines," PHI, Second Edition, 2018 (Chapter on Combustion)
*   V Sajith and Shijo Thomas, "Internal Combustion Engines," Oxford University Press, 2017 (Chapter on Combustion and Emissions)

### 4. Equivalence Ratio in Engine Control and Applications

Understanding and controlling the equivalence ratio is fundamental to modern engine management systems.

*   **Catalytic Converters:**
    *   Modern gasoline engines with three-way catalytic converters operate most effectively at or very close to the **stoichiometric equivalence ratio ($\phi \approx 1$)**.
    *   The three-way catalyst simultaneously oxidizes CO and HC to $CO_2$ and $H_2O$, and reduces $NO_x$ to $N_2$.
    *   Operating too far from stoichiometric will significantly reduce the catalyst's efficiency in treating all three pollutants.
    *   Engine control units (ECUs) use oxygen sensors (lambda sensors) in the exhaust to monitor the actual AFR and adjust fuel injection to maintain $\phi \approx 1$.

*   **Diesel Engines:**
    *   Diesel engines inherently operate with **lean mixtures ($\phi < 1$)** throughout their operating range, even under full load.
    *   This is known as **diffusion combustion**, where fuel and air mix as combustion progresses.
    *   The excess air helps in controlling combustion temperatures and reducing soot and $NO_x$ formation, but also limits the maximum power output achievable.
    *   Diesel engines are less sensitive to precise AFR control for emissions control compared to gasoline engines with catalytic converters.

*   **Lean Burn Engines:**
    *   Some gasoline engines are designed to operate with **leaner mixtures ($\phi < 1$)** under certain conditions (e.g., part-load cruising) to improve fuel economy.
    *   These engines require advanced combustion technologies (e.g., stratified charge, pre-chamber ignition) to ensure stable and complete combustion.
    *   Emissions control for lean-burn gasoline engines is more challenging and often requires specialized oxidation catalysts or lean $NO_x$ traps.

*   **Gasoline Direct Injection (GDI) Engines:**
    *   GDI engines offer greater flexibility in controlling the in-cylinder fuel-air mixture.
    *   They can operate with **stratified charge** (local rich zones near the spark plug for ignition, surrounded by lean mixture) for low loads and **homogenous charge** (near stoichiometric) for higher loads, allowing optimization of performance and emissions across the operating map.

**References:**

*   J.B.Heywood, "I.C engine fundamentals," McGraw-Hill, 2011 (Chapter on Engine Control)
*   V Sajith and Shijo Thomas, "Internal Combustion Engines," Oxford University Press, 2017 (Chapter on Engine Management Systems)

### 5. Practice Questions and Exercises

**Question 1:**
Define equivalence ratio and explain its significance in IC engines. What are the conditions for rich, lean, and stoichiometric mixtures?

**Answer:**
The equivalence ratio ($\phi$) is the ratio of the actual fuel-air ratio to the stoichiometric fuel-air ratio. It is defined as $\phi = \frac{(F/A)_{actual}}{(F/A)_{stoichiometric}}$.
*   $\phi < 1$: Lean mixture (excess air)
*   $\phi = 1$: Stoichiometric mixture (chemically correct proportions)
*   $\phi > 1$: Rich mixture (excess fuel)

It is significant as it dictates the completeness of combustion, engine performance (power, efficiency), and exhaust emissions (CO, HC, $NO_x$, soot).

**Question 2:**
Calculate the stoichiometric fuel-air ratio by mass for methane ($CH_4$). Assume air is composed of 23.3% oxygen by mass.
Molecular weight of $CH_4$ = 16.04 g/mol.
Molecular weight of $O_2$ = 32 g/mol.

**Answer:**
1.  **Balanced Combustion Equation for Methane:**
    $CH_4 + 2 O_2 \rightarrow CO_2 + 2 H_2O$

2.  **Mass of $O_2$ required per mole of $CH_4$:**
    2 moles $O_2$ $\times$ 32 g/mol $O_2$ = 64 g $O_2$

3.  **Mass of Air required per mole of $CH_4$:**
    Mass of Air = Mass of $O_2$ / Mass fraction of $O_2$ in air
    Mass of Air = 64 g $O_2$ / 0.233 $\approx$ 274.68 g Air

4.  **Stoichiometric Fuel-Air Ratio (F/A)$_{stoichiometric}$:**
    $(F/A)_{stoichiometric} = \frac{\text{Mass of Fuel}}{\text{Mass of Air}} = \frac{16.04 \text{ g}}{274.68 \text{ g}} \approx 0.0584$

**Question 3:**
An engine operates with an actual AFR of 13:1. If the stoichiometric AFR for the fuel is 15:1, calculate the equivalence ratio and determine if the mixture is rich or lean.

**Answer:**
Given:
$(A/F)_{actual} = 13:1$
$(A/F)_{stoichiometric} = 15:1$

$\phi = \frac{(A/F)_{stoichiometric}}{(A/F)_{actual}} = \frac{15}{13} \approx 1.154$

Since $\phi > 1$, the mixture is **rich**.

**Question 4:**
How does the equivalence ratio affect $NO_x$ emissions? Explain the underlying reason.

**Answer:**
$NO_x$ emissions are highest at stoichiometric or slightly lean conditions. In rich mixtures ($\phi > 1$), $NO_x$ emissions are low because of the limited availability of oxygen, which is essential for the formation of nitrogen oxides. The primary mechanism for $NO_x$ formation (e.g., Zeldovich mechanism) requires high temperatures and the presence of oxygen. In lean mixtures ($\phi < 1$), while oxygen is abundant, very high combustion temperatures (which further accelerate $NO_x$ formation) coupled with excess oxygen lead to higher $NO_x$.

**Question 5:**
Why do modern gasoline engines with three-way catalytic converters operate near the stoichiometric equivalence ratio?

**Answer:**
Modern gasoline engines with three-way catalytic converters operate near the stoichiometric equivalence ratio ($\phi \approx 1$) because this is the window where the catalyst is most effective at simultaneously oxidizing CO and HC and reducing $NO_x$. Deviating significantly from stoichiometric conditions dramatically reduces the catalyst's efficiency in treating all three major pollutants.

### 6. Important Points to Remember

*   **Equivalence Ratio ($\phi$):** A measure of fuel-air mixture richness/leanness.
*   **Stoichiometric:** $\phi = 1$. Complete combustion, ideal proportions.
*   **Lean:** $\phi < 1$. Excess air. Good fuel economy, low CO/HC, high $NO_x$.
*   **Rich:** $\phi > 1$. Excess fuel. Poor fuel economy, high CO/HC/Soot, low $NO_x$.
*   **Gasoline Engines with 3-Way Catalysts:** Operate near $\phi=1$ for optimal emissions control.
*   **Diesel Engines:** Inherently lean-burn ($\phi < 1$).
*   **AFR vs. F/A:** Be careful to use the correct ratio (Air/Fuel or Fuel/Air) when calculating $\phi$. The ratio of ratios must be consistent.
*   **Fuel Composition:** The stoichiometric AFR varies with fuel type.

### 7. Alignment with Course Outcomes

*   **CO1 (K4):** While this topic doesn't directly deal with steam cycles, the fundamental concept of chemical reactions and energy release is common to thermal engineering. Understanding the conditions for complete combustion is a prerequisite for analyzing any combustion-related power cycles.
*   **CO2 (K3):** Not directly applicable to this topic.
*   **CO3 (K3):** Directly applicable. The equivalence ratio is a key parameter for evaluating engine performance metrics like power output and thermal efficiency. Understanding how $\phi$ affects these parameters is crucial for evaluating engine performance.
*   **CO4 (K2):** Directly applicable. This topic is central to explaining the combustion phenomenon and its associated pollution. The equivalence ratio directly influences the formation of key exhaust pollutants like CO, HC, and $NO_x$.
*   **CO5 (K6):** While this topic itself is theoretical, the principles of equivalence ratio control are implemented in engine simulations and testing (e.g., varying AFR to observe performance and emissions), which fall under this outcome. Understanding $\phi$ is essential for designing and optimizing combustion systems.

This comprehensive set of notes covers the definition, calculation, impact, and application of the equivalence ratio in IC engines, drawing upon the specified learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
