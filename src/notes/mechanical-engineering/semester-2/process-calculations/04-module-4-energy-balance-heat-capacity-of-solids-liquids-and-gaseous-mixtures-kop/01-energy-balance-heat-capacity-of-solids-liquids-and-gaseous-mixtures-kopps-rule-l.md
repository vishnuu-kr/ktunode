---
title: "Energy Balance : Heat capacity of solids, liquids and gaseous mixtures, Kopp’s Rule, Latent Heats-Heat of fusion, heat of vaporization, Estimation of Heat of Vaporization - Kistyakowsky Equation, Trouton’s rule, Watson equation."
subject: "PROCESS CALCULATIONS"
module: "Module 4: Energy Balance : Heat capacity of solids, liquids and gaseous mixtures, Kopp’s Rule, Latent Heats"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e83a99"
status: "completed"
scrapedAt: "2026-05-20T17:47:23.657Z"
---
# Process Calculations: Module 4 - Energy Balance

Welcome, everyone! In this module, we're going to dive deep into one of the most crucial aspects of chemical engineering: **Energy Balances**. If material balances tell us *what* goes in and out of a process, energy balances tell us *how much energy* is involved – heating, cooling, phase changes, and so on. This is fundamental for designing efficient and safe chemical plants. Our focus today is on understanding how different substances behave when you change their temperature or phase, and how we can predict these energy changes.

Specifically, we'll be covering:

*   **Heat Capacity:** How much energy it takes to heat up solids, liquids, and gases.
*   **Kopp's Rule:** A handy way to estimate heat capacities for solids and liquids.
*   **Latent Heats:** The "hidden" energy involved in phase changes (like melting and boiling).
*   **Estimating Heat of Vaporization:** How to predict the energy needed for vaporization when experimental data isn't readily available.

By the end of this module, you'll be able to tackle problems involving temperature changes and phase transitions, directly contributing to **Course Outcome 4 (CO4): Develop and solve energy balance equations for various physical and chemical processes.** You'll also see how this relates to understanding the composition of materials (CO1) and handling different states of matter, which is the foundation for material balances (CO2, CO3).

Let's start with the basics of how substances respond to heat.

## 1. Heat Capacity: The "Thermal Inertia" of Matter

Think about cooking. When you put a pot of water on the stove, it takes time to heat up. If you put a metal pan on the same burner, it heats up much faster. Why? Because different materials have different capacities to absorb heat. This property is quantified by **heat capacity**.

**Definition:** Heat capacity is the amount of heat required to raise the temperature of a substance by one degree Celsius (or Kelvin, or Fahrenheit).

We usually deal with two forms:

*   **Specific Heat Capacity ($c_p$ or $c_v$):** The heat required per unit mass (e.g., J/kg·K or cal/g·°C). This is what we commonly refer to as "specific heat."
*   **Molar Heat Capacity ($\hat{c}_p$ or $\hat{c}_v$):** The heat required per mole (e.g., J/mol·K or cal/mol·°C).

The subscript 'p' denotes constant pressure, and 'v' denotes constant volume. For most engineering applications, especially with liquids and solids, the difference between $c_p$ and $c_v$ is negligible. However, for gases, it can be significant. We'll primarily focus on $c_p$ (constant pressure) as it's more common in process streams.

The amount of heat, $Q$, required to change the temperature of a substance from $T_1$ to $T_2$ is given by:

$$ Q = m \int_{T_1}^{T_2} c_p \, dT $$

where:
*   $Q$ is the heat transferred (Joules, calories, BTU)
*   $m$ is the mass of the substance (kg, g, lb)
*   $c_p$ is the specific heat capacity (J/kg·K, cal/g·°C, BTU/lb·°F)
*   $T_1$ is the initial temperature
*   $T_2$ is the final temperature

### 1.1 Heat Capacity of Solids and Liquids

For many solids and liquids, their specific heat capacities ($c_p$) are relatively constant over moderate temperature ranges. In such cases, the integral simplifies to:

$$ Q = m \cdot c_p \cdot \Delta T $$

where $\Delta T = T_2 - T_1$.

**Example:** Imagine you have 2 kg of water at 20°C and you want to heat it to 80°C. The specific heat of water is approximately 4.18 J/g·°C or 4180 J/kg·°C.

$$ Q = (2 \text{ kg}) \times (4180 \text{ J/kg·°C}) \times (80°C - 20°C) $$
$$ Q = 2 \times 4180 \times 60 \text{ J} = 501,600 \text{ J} \text{ or } 501.6 \text{ kJ} $$

This is the energy you need to supply to heat the water. This concept directly aids in calculating energy requirements for heating/cooling tanks, reactors, and pipelines, crucial for CO4.

**Textbook Connection:** You'll find detailed tables of specific heats for various substances in appendices of books like *Bhatt & Vora* and *Himmelblau & Riggs*. They often provide empirical correlations for $c_p$ as a function of temperature, which look like this:

$$ c_p = a + bT + cT^2 + dT^3 $$

where $a, b, c, d$ are empirical constants specific to the substance. When these correlations are provided, the calculation involves integrating this polynomial.

### 1.2 Heat Capacity of Gaseous Mixtures

Handling gases and their mixtures requires a bit more attention. The heat capacity of gases is highly dependent on temperature. For ideal gases, the molar heat capacity can often be related to molecular structure.

For a mixture of gases, the specific heat capacity is a weighted average of the specific heat capacities of its components:

$$ c_{p, \text{mixture}} = \sum_{i=1}^{n} x_i \cdot c_{p,i} $$

where:
*   $x_i$ is the mole fraction of component $i$
*   $c_{p,i}$ is the specific heat capacity of pure component $i$

Similarly, for molar heat capacity:

$$ \hat{c}_{p, \text{mixture}} = \sum_{i=1}^{n} y_i \cdot \hat{c}_{p,i} $$

where $y_i$ is the mole fraction of component $i$.

**Analogy:** Think of a fruit salad. The overall "sweetness" of the salad depends on the proportion of each type of fruit and how sweet each individual fruit is. Similarly, the heat capacity of a gas mixture depends on the "amount" (mole fraction) and the inherent heat capacity of each gas.

**Exam Tip:** Remember that when using molar heat capacities, ensure your mole fractions ($y_i$) are mole fractions, not mass fractions.

### 1.3 Kopp's Rule: Estimating Heat Capacity for Solids and Liquids

What if you need the heat capacity of a compound, but it's not in a table? This is where empirical rules like Kopp's Rule come in handy, especially for inorganic solids and some organic compounds. Kopp's Rule states that the molar heat capacity of a solid compound is approximately the sum of the atomic heat capacities of its constituent atoms.

**The Rule:**

$$ \hat{c}_{p, \text{compound}} \approx \sum (\text{atomic heat capacity of element}) \times (\text{number of atoms of that element in the molecule}) $$

Here are some commonly used approximate atomic heat capacities at room temperature (around 25°C or 298 K):

| Element     | Atomic Heat Capacity (cal/g-atom·°C) |
| :---------- | :----------------------------------- |
| C           | 1.8                                  |
| H           | 2.3                                  |
| O           | 1.8                                  |
| N           | 2.0                                  |
| S           | 2.4                                  |
| P           | 1.7                                  |
| Si          | 1.5                                  |
| Halogens (F, Cl, Br, I) | 2.0                                  |
| Alkali Metals (Li, Na, K) | 2.4                                  |
| Alkaline Earth Metals (Mg, Ca, Ba) | 2.5                                  |
| Fe, Ni, Co  | 1.7                                  |

**Example:** Let's estimate the molar heat capacity of Calcium Carbonate ($CaCO_3$) at 25°C using Kopp's Rule.

*   Calcium (Ca): 1 atom $\times$ 2.5 cal/g-atom·°C = 2.5 cal/g-atom·°C
*   Carbon (C): 1 atom $\times$ 1.8 cal/g-atom·°C = 1.8 cal/g-atom·°C
*   Oxygen (O): 3 atoms $\times$ 1.8 cal/g-atom·°C = 5.4 cal/g-atom·°C

Total $\hat{c}_p$ for $CaCO_3 \approx 2.5 + 1.8 + 5.4 = 9.7$ cal/g-atom·°C.

To convert this to cal/mol·°C, we sum the atomic weights:
Ca (40.08) + C (12.01) + 3*O (16.00) = 40.08 + 12.01 + 48.00 = 100.09 g/mol.
So, the molar heat capacity is approximately $9.7 \text{ cal/g-atom·°C} \times 1 \text{ mol } CaCO_3 / 100.09 \text{ g } CaCO_3 \approx 0.097 \text{ cal/mol·°C}$. Oh wait, the unit is cal/g-atom·°C and we have a molar mass of g/mol. The unit for molar heat capacity is cal/mol·°C.
The sum of atomic heat capacities gives the molar heat capacity directly if we consider "g-atom" as a mole of atoms.
So, $ \hat{c}_p(CaCO_3) \approx 9.7 $ cal/mol·°C.

**Important Note:** Kopp's Rule is an approximation. Its accuracy decreases for organic compounds with complex structures and at temperatures far from 25°C. For precise calculations, always use experimental data or more sophisticated correlations if available. However, it's a good starting point for estimation, connecting to CO1 (estimating physical quantities).

## 2. Latent Heats: Energy of Transformation

So far, we've discussed the energy required to change the *temperature* of a substance. But what about changing its *state*? When a substance melts, boils, or freezes, its temperature remains constant, yet energy is absorbed or released. This energy is called **latent heat**.

**Definition:** Latent heat is the heat absorbed or released during a phase transition at constant temperature and pressure.

The two most common latent heats we encounter are:

*   **Heat of Fusion ($Q_{fus}$ or $\Delta H_{fus}$):** The heat absorbed to change a substance from solid to liquid at its melting point.
*   **Heat of Vaporization ($Q_{vap}$ or $\Delta H_{vap}$):** The heat absorbed to change a substance from liquid to gas at its boiling point.

Conversely, when a substance freezes or condenses, the same amount of heat is released.

**Example:** Imagine melting ice. You can have ice at -5°C, then heat it to 0°C. The temperature increases. At 0°C, you add more heat, but the ice starts turning into water, and the temperature stays at 0°C until all the ice has melted. The heat added during this melting process is the latent heat of fusion. Once all the ice is water, further heating will increase the water's temperature.

Similarly, when water boils at 100°C, it turns into steam, and the temperature remains at 100°C until all the water has vaporized. The energy added during this phase change is the latent heat of vaporization.

The calculation is straightforward if the phase change occurs at a constant temperature:

$$ Q_{\text{phase change}} = m \cdot \Delta H_{\text{phase change}} $$

where:
*   $Q_{\text{phase change}}$ is the total heat transferred for the phase change
*   $m$ is the mass of the substance
*   $\Delta H_{\text{phase change}}$ is the specific latent heat (e.g., J/kg, cal/g)

**Relatability:** Think about making ice cubes. You take water from the tap, cool it down to 0°C, and then it freezes at 0°C. To freeze 1 kg of water, you need to remove about 334 kJ of energy (the latent heat of fusion for water). That's why the freezer needs to work even when the ice is already at 0°C.

### 2.1 Heat of Vaporization ($\Delta H_{vap}$): The Energy to Boil

The heat of vaporization is a critical property for many processes, especially distillation and evaporation. It's always an endothermic process (heat is absorbed).

**Factors Affecting $\Delta H_{vap}$:**

*   **Temperature:** $\Delta H_{vap}$ generally decreases as temperature increases. At the critical point, $\Delta H_{vap}$ becomes zero, as there's no distinction between liquid and gas.
*   **Pressure:** $\Delta H_{vap}$ is usually reported at the normal boiling point (boiling at 1 atm), but it changes with pressure.

**Where to find data?** Again, textbooks like *Narayanan & Lakshmikutty* and *Felder & Rousseau* provide tables of latent heats for common substances at their normal boiling points.

## 3. Estimation of Heat of Vaporization: When Data is Scarce

Experimental data for $\Delta H_{vap}$ might not always be available, especially for conditions other than the normal boiling point. Fortunately, we have several empirical equations to estimate it.

### 3.1 Trouton's Rule: A Simple Approximation

Trouton's rule is one of the oldest and simplest rules for estimating the molar heat of vaporization. It states that for many liquids, the molar entropy of vaporization at the normal boiling point is approximately constant, around 85-88 J/mol·K (or about 20 cal/mol·K).

**The Rule:**

$$ \Delta H_{vap, \text{normal}} \approx 85-88 \, \text{J/mol·K} \times T_b $$

where:
*   $\Delta H_{vap, \text{normal}}$ is the molar heat of vaporization at the normal boiling point ($T_b$).
*   $T_b$ is the normal boiling point in Kelvin.

**Example:** Let's estimate the molar heat of vaporization for water, which boils at 100°C (373.15 K).

Using Trouton's Rule:
$$ \Delta H_{vap, \text{normal}} \approx 85 \, \text{J/mol·K} \times 373.15 \, \text{K} \approx 31,718 \, \text{J/mol} \approx 31.7 \, \text{kJ/mol} $$

The actual value for water is about 40.7 kJ/mol. As you can see, Trouton's rule is a rough estimate. It works best for non-polar liquids like hydrocarbons. Polar liquids (like water, alcohols) and associated liquids often deviate significantly.

**Quick Recall:** If asked for a quick estimate of $\Delta H_{vap}$ at $T_b$ and no other data is given, Trouton's rule is your go-to. Just remember its limitations.

### 3.2 Kistyakowsky Equation: For Non-Associated Liquids

The Kistyakowsky equation provides a better estimate for non-associated liquids, especially over a wider range of temperatures. It relates the heat of vaporization to the boiling point and is more accurate than Trouton's rule.

**The Equation:**

$$ \frac{\Delta H_{vap}}{T_b} = 15.2 \cdot R + \log \left(\frac{P_b}{P_c}\right) \cdot R \cdot \frac{T_c}{T_b - T_b / \ln(P_c/P_b)} $$

This looks complicated, but it simplifies under certain conditions. A more common form is:

$$ \Delta H_{vap} = 8.314 \times (5.76 \cdot T_b) \quad \text{(for non-associated liquids)} $$

Or more generally, it can be expressed as:
$$ \Delta H_{vap} = R \cdot T_b \cdot (5.76 + \log(P_c/P_b)) $$
where:
*   $\Delta H_{vap}$ is the molar latent heat of vaporization.
*   $T_b$ is the normal boiling point in Kelvin.
*   $R$ is the ideal gas constant (8.314 J/mol·K).
*   $P_c$ is the critical pressure.
*   The term $5.76$ is an empirical constant derived from the rule of thumb that the entropy of vaporization is $5.76 R$ at the boiling point.

**Refined Kistyakowsky:** A more refined version states that for non-associated liquids:

$$ \Delta H_{vap} = R \cdot T_b \cdot (5.76 + \log(P_c/P_b)) $$
where $P_b$ is the vapor pressure at temperature $T_b$. For normal boiling point, $P_b = 1$ atm.

**Example:** Let's try Kistyakowsky for ethanol (non-associated liquid).
$T_b = 78.37^\circ C = 351.52 K$
$P_c = 6.34 \, MPa = 63.4 \, atm$
$R = 8.314 \, J/mol \cdot K$

Using the simplified Kistyakowsky:
$ \Delta H_{vap} \approx 8.314 \times (5.76 \times 351.52) \approx 16880 \, J/mol $ -- This seems very low. Let's re-check the correlation.

A better form of Kistyakowsky's correlation for non-associated liquids is:
$$ \Delta H_{vap} = R \times T_b \times (5.76 + \log(P_c / P_b)) $$
For normal boiling point, $P_b = 1 \text{ atm}$.
So, $\Delta H_{vap} = R \times T_b \times (5.76 + \log(P_c))$.
Ethanol: $T_b = 78.37^\circ C = 351.52 K$. $P_c = 6.34 \, MPa = 62.5 \, atm$.

$\Delta H_{vap} = 8.314 \frac{J}{mol \cdot K} \times 351.52 \, K \times (5.76 + \log(62.5))$
$\Delta H_{vap} = 8.314 \times 351.52 \times (5.76 + 1.796)$
$\Delta H_{vap} = 8.314 \times 351.52 \times 7.556 \approx 22180 \, J/mol \approx 22.2 \, kJ/mol$.

The actual value for ethanol is around 42.5 kJ/mol. So even Kistyakowsky isn't perfect and the constants and forms can vary. The key takeaway is that it attempts to account for critical properties.

**From Textbooks:** *Himmelblau & Riggs* and *Narayanan & Lakshmikutty* will likely offer specific forms and constants for these equations, often tailored for the types of problems they present.

### 3.3 Watson Equation: Estimating $\Delta H_{vap}$ at Different Temperatures

The Watson equation is extremely useful because it allows us to estimate the heat of vaporization at a temperature ($T$) different from the normal boiling point ($T_b$), provided we know $\Delta H_{vap}$ at $T_b$ and the critical temperature ($T_c$).

**The Equation:**

$$ \frac{\Delta H_{vap, T}}{\Delta H_{vap, T_b}} = \left( \frac{1 - (T/T_c)}{1 - (T_b/T_c)} \right)^n $$

where:
*   $\Delta H_{vap, T}$ is the molar heat of vaporization at temperature $T$ (in Kelvin).
*   $\Delta H_{vap, T_b}$ is the molar heat of vaporization at the normal boiling point $T_b$ (in Kelvin).
*   $T$ is the desired temperature (in Kelvin).
*   $T_b$ is the normal boiling point (in Kelvin).
*   $T_c$ is the critical temperature (in Kelvin).
*   $n$ is an empirical exponent, typically taken as 0.38.

**Analogy:** Imagine you have a balloon that you're inflating with air. The pressure inside the balloon increases as you add air. Similarly, as you heat a liquid, its vapor pressure increases, and the energy needed to turn the last bit of liquid into vapor changes. The Watson equation helps us track this change in "effort" (energy) required as we move away from the standard boiling point.

**Example:** Let's estimate the heat of vaporization of water at 120°C (393.15 K), knowing its $\Delta H_{vap}$ at 100°C (373.15 K).
We need:
*   $T_b = 100^\circ C = 373.15 K$
*   $T = 120^\circ C = 393.15 K$
*   $T_c$ for water = $374.1^\circ C = 647.25 K$
*   $\Delta H_{vap, T_b}$ for water $\approx 40.7 \, kJ/mol$ (from tables, or estimated by Trouton's Rule as ~31.7 kJ/mol, but using actual value is better)
*   $n = 0.38$ (typical value)

First, calculate the temperature ratios:
$T/T_c = 393.15 / 647.25 \approx 0.6074$
$T_b/T_c = 373.15 / 647.25 \approx 0.5765$

Now, plug into the Watson equation:
$$ \frac{\Delta H_{vap, 120^\circ C}}{\Delta H_{vap, 100^\circ C}} = \left( \frac{1 - 0.6074}{1 - 0.5765} \right)^{0.38} $$
$$ \frac{\Delta H_{vap, 120^\circ C}}{40.7 \, kJ/mol} = \left( \frac{0.3926}{0.4235} \right)^{0.38} $$
$$ \frac{\Delta H_{vap, 120^\circ C}}{40.7 \, kJ/mol} = (0.9270)^{0.38} $$
$$ \frac{\Delta H_{vap, 120^\circ C}}{40.7 \, kJ/mol} \approx 0.9641 $$

$$ \Delta H_{vap, 120^\circ C} \approx 0.9641 \times 40.7 \, kJ/mol \approx 39.2 \, kJ/mol $$

This makes sense: as the temperature increases towards the critical point, the heat of vaporization decreases.

**Exam Strategy:** The Watson equation is frequently tested. Make sure you correctly identify $T$, $T_b$, $T_c$, and know the typical value of $n$. Pay close attention to units (Kelvin is essential!). This method directly supports CO4 by allowing us to calculate energy requirements under different operating conditions.

## Summary and Key Takeaways

Today, we've covered the essential concepts for understanding energy balances related to temperature and phase changes:

*   **Heat Capacity ($c_p$ or $\hat{c}_p$):** Measures heat needed to change temperature. $Q = m \cdot c_p \cdot \Delta T$ (if $c_p$ is constant).
*   **Gaseous Mixtures:** Use mole fractions and individual component heat capacities.
*   **Kopp's Rule:** An approximation for molar heat capacity of solids and inorganic compounds based on atomic contributions. Useful for estimations (CO1).
*   **Latent Heats ($\Delta H_{fus}$, $\Delta H_{vap}$):** Energy for phase changes at constant T. $Q = m \cdot \Delta H_{\text{phase change}}$.
*   **Trouton's Rule:** Rough estimate for $\Delta H_{vap}$ at $T_b$: $\Delta H_{vap, \text{normal}} \approx 85-88 \, \text{J/mol·K} \times T_b$. Best for non-associated liquids.
*   **Kistyakowsky Equation:** A more refined estimation for $\Delta H_{vap}$ at $T_b$ for non-associated liquids, often involving critical properties.
*   **Watson Equation:** Estimates $\Delta H_{vap}$ at any temperature $T$, given $\Delta H_{vap}$ at $T_b$, $T_b$, $T_c$, and using $n=0.38$. Crucial for applying energy balances across various operating temperatures (CO4).

Remember, these rules and equations are tools. Always check the limitations and conditions for their application. Mastering these concepts is vital for accurately calculating the energy requirements of chemical processes, which directly impacts design, efficiency, and safety.

---

## Sample Questions with Answers

**Q1. Conceptual:** Explain the difference between sensible heat and latent heat. When would you need to consider both in an energy balance calculation for heating a stream?

**Answer:**
Sensible heat is the heat absorbed or released by a substance when its temperature changes, without changing its phase. The amount of sensible heat is calculated using the heat capacity ($Q = m \cdot c_p \cdot \Delta T$).
Latent heat is the heat absorbed or released during a phase transition (e.g., melting, boiling) at a constant temperature and pressure. The amount of latent heat is calculated using the latent heat of transition ($Q = m \cdot \Delta H_{\text{transition}}$).

You would need to consider both sensible heat and latent heat if the process involves changing the temperature of a substance *and* changing its phase. For example, if you are heating water from 20°C to steam at 120°C at atmospheric pressure, you would need to:
1.  Calculate the sensible heat to raise the water temperature from 20°C to 100°C ($Q_1 = m \cdot c_{p, \text{water}} \cdot (100^\circ C - 20^\circ C)$).
2.  Calculate the latent heat of vaporization to convert water at 100°C to steam at 100°C ($Q_2 = m \cdot \Delta H_{vap, 100^\circ C}$).
3.  Calculate the sensible heat to raise the steam temperature from 100°C to 120°C ($Q_3 = m \cdot c_{p, \text{steam}} \cdot (120^\circ C - 100^\circ C)$).
The total heat required would be $Q_{total} = Q_1 + Q_2 + Q_3$. This directly relates to CO4.

**Q2. Calculation/Exam-Oriented:** Estimate the molar heat of vaporization of benzene at its normal boiling point of 80.1°C using Trouton's Rule.

**Answer:**
Trouton's Rule: $\Delta H_{vap, \text{normal}} \approx 85-88 \, \text{J/mol·K} \times T_b$
First, convert the boiling point to Kelvin:
$T_b = 80.1^\circ C + 273.15 = 353.25 \, K$

Using the average value of 86.5 J/mol·K for Trouton's rule:
$\Delta H_{vap, \text{normal}} \approx 86.5 \, \text{J/mol·K} \times 353.25 \, K$
$\Delta H_{vap, \text{normal}} \approx 30559 \, J/mol$
$\Delta H_{vap, \text{normal}} \approx 30.6 \, kJ/mol$

*(Note: The actual value for benzene is about 30.7 kJ/mol, so Trouton's rule is quite good here, typical for non-associated liquids).* This is a direct application of estimation techniques relevant to CO4.

**Q3. Calculation/Exam-Oriented:** Using the Watson equation, estimate the heat of vaporization of n-hexane at 60°C, given that its normal boiling point is 68.7°C and its critical temperature is 197.2°C. Assume $\Delta H_{vap}$ at the normal boiling point is 26.0 kJ/mol and $n=0.38$.

**Answer:**
Watson Equation: $\frac{\Delta H_{vap, T}}{\Delta H_{vap, T_b}} = \left( \frac{1 - (T/T_c)}{1 - (T_b/T_c)} \right)^n$

Given:
*   $T = 60^\circ C = 333.15 \, K$
*   $T_b = 68.7^\circ C = 341.85 \, K$
*   $T_c = 197.2^\circ C = 470.35 \, K$
*   $\Delta H_{vap, T_b} = 26.0 \, kJ/mol$
*   $n = 0.38$

Calculate temperature ratios:
$T/T_c = 333.15 \, K / 470.35 \, K \approx 0.7082$
$T_b/T_c = 341.85 \, K / 470.35 \, K \approx 0.7268$

Substitute into the Watson equation:
$\frac{\Delta H_{vap, 60^\circ C}}{26.0 \, kJ/mol} = \left( \frac{1 - 0.7082}{1 - 0.7268} \right)^{0.38}$
$\frac{\Delta H_{vap, 60^\circ C}}{26.0 \, kJ/mol} = \left( \frac{0.2918}{0.2732} \right)^{0.38}$
$\frac{\Delta H_{vap, 60^\circ C}}{26.0 \, kJ/mol} = (1.0681)^{0.38}$
$\frac{\Delta H_{vap, 60^\circ C}}{26.0 \, kJ/mol} \approx 1.0246$

$\Delta H_{vap, 60^\circ C} \approx 1.0246 \times 26.0 \, kJ/mol$
$\Delta H_{vap, 60^\circ C} \approx 26.64 \, kJ/mol$

This calculation shows how to predict energy requirements at different operating conditions, a core aspect of CO4.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
