---
title: "Heat effects accompanying chemical reactions - Standard heats of reaction, standard heat of combustion, and standard heat of formation, Hess’s law of constant heat summation. Effect of temperature and pressure on heat of reaction, temperature of reaction, adiabatic reaction temperature."
subject: "PROCESS CALCULATIONS"
module: "Module 4: Energy Balance : Heat capacity of solids, liquids and gaseous mixtures, Kopp’s Rule, Latent Heats"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912fb9"
status: "completed"
scrapedAt: "2026-05-20T18:38:19.535Z"
---
## Module 4: Energy Balance - Heat Effects Accompanying Chemical Reactions

Welcome, everyone! Today, we're diving into a crucial aspect of energy balances in chemical processes: the **heat effects that accompany chemical reactions**. We’ve already explored heat capacities and latent heats, which deal with physical changes. Now, we’re looking at the energy changes that occur when molecules transform into entirely new substances. This is where the magic of chemistry meets the rigor of engineering calculations. Understanding these heat effects is fundamental for designing reactors, controlling temperatures, and ensuring the safety and efficiency of chemical plants. This ties directly into our **Course Outcome 4 (CO4)**: "Develop and solve energy balance equations for various physical and chemical processes." Specifically, we'll be focusing on the "K3" knowledge level, meaning we need to understand and apply these concepts.

### The Heart of the Matter: Heat of Reaction

When a chemical reaction happens, energy is either released or absorbed. This is because the chemical bonds in the reactants have different energy levels than the chemical bonds in the products.

*   **Exothermic Reactions:** If the bonds in the products are more stable (lower energy) than the bonds in the reactants, the excess energy is released, usually as heat. Think of burning wood – it gets hot! We denote the heat of reaction ($\Delta H_R$) as **negative** for exothermic reactions.
*   **Endothermic Reactions:** If the bonds in the products are less stable (higher energy) than the bonds in the reactants, energy must be supplied to the system, usually in the form of heat, to drive the reaction. Think of baking a cake – you need to add heat to make it cook. We denote $\Delta H_R$ as **positive** for endothermic reactions.

The amount of heat released or absorbed depends on the specific reaction and, importantly, on the **stoichiometry** – the molar ratios of reactants and products. When we talk about the heat of reaction, we're typically referring to the heat change associated with the reaction as written in the balanced chemical equation.

### Standard States: A Universal Language for Heat Effects

To compare heat effects of different reactions accurately, we need a common reference point. This is where **standard heats** come in. A **standard state** is a defined set of conditions. For substances:

*   **Solids:** Pure substance in its most stable form at a given temperature and pressure.
*   **Liquids:** Pure liquid at the given temperature and pressure.
*   **Gases:** A gas at a pressure of 1 bar (or sometimes 1 atm, though 1 bar is the current IUPAC standard) and a specified temperature. The behavior of gases is often approximated as ideal gas behavior.

We usually consider a standard temperature of **298.15 K (25 °C)** and a standard pressure of **1 bar**.

#### Standard Heat of Formation ($\Delta H_f^\circ$)

This is arguably the most fundamental of the standard heats. It's defined as the heat change that occurs when **one mole of a compound is formed from its constituent elements in their standard states**.

*   **Example:** The formation of water from hydrogen and oxygen:
    $H_2(g) + \frac{1}{2} O_2(g) \rightarrow H_2O(l)$
    The standard heat of formation of liquid water ($\Delta H_f^\circ (H_2O, l)$) is approximately -285.8 kJ/mol.

*   **Key Point:** By definition, the standard heat of formation of any element in its most stable standard state is **zero**. For example, $\Delta H_f^\circ (H_2, g) = 0$, $\Delta H_f^\circ (O_2, g) = 0$, $\Delta H_f^\circ (C, graphite) = 0$. This is a critical concept often tested in exams!

#### Standard Heat of Combustion ($\Delta H_c^\circ$)

This refers to the heat released when **one mole of a substance is completely burned (oxidized) in oxygen under standard conditions**. The products are usually the most stable oxides of the elements involved.

*   **Example:** The combustion of methane:
    $CH_4(g) + 2O_2(g) \rightarrow CO_2(g) + 2H_2O(l)$
    The standard heat of combustion of methane ($\Delta H_c^\circ (CH_4, g)$) is approximately -890.3 kJ/mol. Notice it's negative, as combustion is typically exothermic.

*   **Why it's important:** We often burn fuels in industrial processes, so knowing their heat of combustion is vital for energy calculations, like designing boilers or calculating energy output.

#### Standard Heat of Reaction ($\Delta H_R^\circ$)

This is the general term for the heat change accompanying a reaction when all reactants and products are in their standard states. It's what we've been discussing – the heat released or absorbed for the balanced equation.

### Hess's Law: The Cornerstone of Calculating Heats of Reaction

Now, what if we want to find the heat of reaction for a process for which we don't have direct experimental data? Or what if the reaction is difficult to carry out directly? This is where **Hess's Law of Constant Heat Summation** comes to our rescue!

**Hess's Law states that the total enthalpy change for a chemical reaction is independent of the pathway taken; it is the same whether the reaction occurs in one step or in a series of steps.**

Think of it like climbing a mountain. You can take a direct, steep path, or a winding, gradual path. The total change in altitude from the base to the summit is the same, regardless of the route you choose. Similarly, the total heat effect of a reaction is the sum of the heat effects of the intermediate steps.

#### How to Use Hess's Law: The "Building Blocks" Approach

Hess's Law allows us to calculate the heat of reaction for a target reaction by combining known heats of formation or other known reactions. The general strategy is:

1.  **Identify the Target Reaction:** Write down the balanced chemical equation for the reaction whose heat effect you want to find.
2.  **Find Known Reactions:** Gather a set of known chemical reactions (often involving heats of formation, combustion, or other standard enthalpies) that, when manipulated, can be added together to yield your target reaction.
3.  **Manipulate Known Reactions:**
    *   **Reverse a reaction:** If you reverse a reaction, you change the sign of its enthalpy change.
    *   **Multiply a reaction:** If you multiply all coefficients in a reaction by a number, you multiply its enthalpy change by the same number.
4.  **Sum the Manipulated Reactions:** Add the manipulated equations and their corresponding enthalpy changes. The intermediate species should cancel out, leaving you with the target reaction.

#### The Shortcut: Using Standard Heats of Formation

A very common and powerful application of Hess's Law involves using standard heats of formation. For any reaction:

$aA + bB \rightarrow cC + dD$

The standard heat of reaction ($\Delta H_R^\circ$) can be calculated as:

$\Delta H_R^\circ = \sum (\nu_p \Delta H_f^\circ)_{\text{products}} - \sum (\nu_r \Delta H_f^\circ)_{\text{reactants}}$

where:
*   $\nu$ represents the stoichiometric coefficients.
*   $\Delta H_f^\circ$ is the standard heat of formation.

Remember the rule: **(Products) - (Reactants)**. And remember that elements in their standard states have $\Delta H_f^\circ = 0$. This formula is your best friend when dealing with heats of reaction, and it's a direct consequence of Hess's Law. It’s a very exam-oriented formula!

*   **Example (Hess's Law with Formations):** Let's calculate the heat of reaction for the synthesis of ammonia:
    $N_2(g) + 3H_2(g) \rightarrow 2NH_3(g)$

    We are given the following standard heats of formation:
    $\Delta H_f^\circ (NH_3, g) = -46.1 \text{ kJ/mol}$
    $\Delta H_f^\circ (N_2, g) = 0 \text{ kJ/mol}$ (element in standard state)
    $\Delta H_f^\circ (H_2, g) = 0 \text{ kJ/mol}$ (element in standard state)

    Using the shortcut formula:
    $\Delta H_R^\circ = [2 \times \Delta H_f^\circ (NH_3, g)] - [1 \times \Delta H_f^\circ (N_2, g) + 3 \times \Delta H_f^\circ (H_2, g)]$
    $\Delta H_R^\circ = [2 \times (-46.1)] - [1 \times 0 + 3 \times 0]$
    $\Delta H_R^\circ = -92.2 \text{ kJ/mol}$

    This reaction is exothermic, releasing 92.2 kJ for every mole of $N_2$ reacted (or for every two moles of $NH_3$ formed).

### Effect of Temperature and Pressure on Heat of Reaction

So far, we've been talking about *standard* heats of reaction, which are at specific temperatures (usually 298.15 K). But in a real plant, reactions don't always happen at 25 °C. What happens to the heat of reaction if we change the temperature or pressure?

#### Effect of Temperature

The heat of reaction *does* depend on temperature. This is because the heat capacities of reactants and products are different. We can use a form of Hess's Law to derive the relationship.

Consider a reaction $A \rightarrow B$. The heat of reaction at temperature $T_2$ can be related to the heat of reaction at $T_1$ using the following equation, often referred to as the **Kirchhoff's Law** relation for reactions:

$\Delta H_R^\circ(T_2) = \Delta H_R^\circ(T_1) + \int_{T_1}^{T_2} (\Delta C_p) dT$

where:
*   $\Delta H_R^\circ(T_1)$ is the standard heat of reaction at the initial temperature $T_1$.
*   $\Delta H_R^\circ(T_2)$ is the standard heat of reaction at the final temperature $T_2$.
*   $\Delta C_p$ is the change in heat capacity for the reaction: $\Delta C_p = \sum (\nu_p C_{p,p}) - \sum (\nu_r C_{p,r})$, where $C_p$ are the molar heat capacities of products and reactants.

*   **Practical Implication:** If $\Delta C_p$ is constant over the temperature range, the integral simplifies to $\Delta C_p (T_2 - T_1)$. If $\Delta C_p$ is positive (products have higher heat capacity), the reaction becomes less exothermic (or more endothermic) at higher temperatures. Conversely, if $\Delta C_p$ is negative, the reaction becomes more exothermic at higher temperatures.

**How do we get $C_p$ values?** This is where our earlier module on heat capacities comes in! For solids, liquids, and gases, we often use polynomial expressions for $C_p$ as a function of temperature (e.g., $C_p = a + bT + cT^2$). We sum these up, weighted by stoichiometry, to find $\Delta C_p$.

*   **Exam Tip:** Be prepared to integrate $C_p$ expressions! Also, remember that if a substance is involved in a phase change (e.g., melting or boiling) within the temperature range, you must include the latent heat of that phase change in the calculation.

#### Effect of Pressure

In general, the effect of pressure on the heat of reaction for reactions involving liquids and solids is relatively small, especially at moderate pressures. This is because the volumes of solids and liquids are much less sensitive to pressure changes than gases.

However, for reactions involving gases, especially those where the number of moles of gas changes, pressure can have a more noticeable effect, primarily through changes in concentration or partial pressures, which can alter equilibrium and thus the heat absorbed or released. For ideal gases, the heat of reaction is largely independent of pressure. For real gases, deviations from ideality can cause pressure dependence.

In most introductory process calculations, we often assume the pressure effect on the heat of reaction is negligible unless specifically stated otherwise or dealing with very high pressures or reactions involving significant changes in the number of gas moles. So, for many practical purposes, we focus on the temperature effect.

### Temperature of Reaction: Adiabatic Reaction Temperature

This is a very practical concept. What happens if we have a reaction in an insulated reactor (an **adiabatic** reactor)? In an adiabatic process, no heat is exchanged with the surroundings ($\mathbf{Q = 0}$).

For an **adiabatic reaction**, all the heat released by an exothermic reaction (or the heat absorbed by an endothermic reaction) goes into changing the temperature of the products.

Let's consider an adiabatic reactor where reactants at temperature $T_1$ enter and products leave at temperature $T_2$. An energy balance on the adiabatic reactor would look something like this:

$\sum (\text{Enthalpy of Reactants} \text{ entering}) = \sum (\text{Enthalpy of Products} \text{ leaving})$

This can be broken down using heats of formation and heat capacities:

$\sum (\nu_r \Delta H_f^\circ)_{\text{reactants}} + \sum (\nu_r \int_{T_{ref}}^{T_1} C_{p,r} dT)_{\text{reactants}} = \sum (\nu_p \Delta H_f^\circ)_{\text{products}} + \sum (\nu_p \int_{T_{ref}}^{T_2} C_{p,p} dT)_{\text{products}}$

where $T_{ref}$ is the reference temperature for heats of formation (usually 298.15 K).

Rearranging this, we get:

$\sum (\nu_p \Delta H_f^\circ)_{\text{products}} - \sum (\nu_r \Delta H_f^\circ)_{\text{reactants}} + \sum (\nu_p \int_{T_{ref}}^{T_2} C_{p,p} dT)_{\text{products}} - \sum (\nu_r \int_{T_{ref}}^{T_1} C_{p,r} dT)_{\text{reactants}} = 0$

The first term is the standard heat of reaction, $\Delta H_R^\circ (T_{ref})$. The integrals represent the sensible heat changes.
So, it simplifies to:

$\Delta H_R^\circ (T_{ref}) + \sum (\nu_p \int_{T_{ref}}^{T_2} C_{p,p} dT)_{\text{products}} - \sum (\nu_r \int_{T_{ref}}^{T_1} C_{p,r} dT)_{\text{reactants}} = 0$

The term $\Delta H_R^\circ (T_{ref})$ is the heat released or absorbed at the reference temperature. If the reaction is exothermic, $\Delta H_R^\circ$ is negative. This released heat then raises the temperature of the products.

The **adiabatic reaction temperature** ($T_{ad}$) is the highest temperature a reaction mixture can reach under adiabatic conditions.

*   **For Exothermic Reactions:** The released heat increases the temperature of the products from $T_1$ to $T_{ad}$. The calculation involves solving for $T_2$ (which is $T_{ad}$) in the energy balance equation above. This is often an iterative process if $C_p$ is temperature-dependent.
*   **For Endothermic Reactions:** Heat must be supplied from the product stream to drive the reaction. This means the product stream will be cooler than the reactant stream, so $T_{ad} < T_1$.

*   **Real-World Analogy:** Imagine a perfectly insulated barbecue pit. When you light the charcoal (exothermic), it gets very hot, transferring its heat to the food. The adiabatic reaction temperature is like the maximum temperature the coals could reach if all the heat stayed within the pit, warming the food and any smoke produced.

*   **Significance:** Knowing the adiabatic reaction temperature is crucial for:
    *   **Reactor Design:** Ensuring materials of construction can withstand the high temperatures.
    *   **Safety:** Preventing runaway reactions or thermal decomposition of products.
    *   **Process Control:** Understanding potential temperature excursions.

### Kopp's Rule and Heat Capacity of Mixtures

We touched upon heat capacities earlier. Let's quickly revisit Kopp's Rule, which is useful for estimating the heat capacity of solid compounds when specific data is unavailable.

**Kopp's Rule:** The molar heat capacity of a solid compound is approximately equal to the sum of the atomic heats of its constituent elements.

*   **Approximate Atomic Heats (at room temp):**
    *   C: 8.3 J/mol·K
    *   H: 9.6 J/mol·K
    *   O: 15.0 J/mol·K
    *   N: 11.3 J/mol·K
    *   S: 25.5 J/mol·K
    *   Halogens: ~25-28 J/mol·K
    *   Metals: ~28-30 J/mol·K

*   **Example:** Estimate the heat capacity of $Al_2O_3$:
    $C_p(Al_2O_3) \approx 2 \times C_p(Al) + 3 \times C_p(O)$
    $C_p(Al_2O_3) \approx 2 \times 28 \text{ J/mol·K} + 3 \times 15.0 \text{ J/mol·K}$
    $C_p(Al_2O_3) \approx 56 + 45 = 101 \text{ J/mol·K}$

This is an estimation, and actual values might differ, but it's a handy rule of thumb.

For **mixtures**, the heat capacity is generally the **mass-weighted average** of the heat capacities of the components, assuming no heat of mixing (which is a reasonable assumption for ideal mixtures).

$C_{p, \text{mixture}} = \sum (x_i C_{p,i})$ (mole fraction basis)
or
$C_{p, \text{mixture}} = \sum (w_i C_{p,i})$ (mass fraction basis, where $C_{p,i}$ is specific heat capacity)

When we use the integral form of the energy balance for a reaction mixture, we'll need the $\Delta C_p$ for the *entire* reaction as written, considering all reactants and products, each multiplied by its stoichiometric coefficient.

### Connecting to Course Outcomes

Let's see how this all ties back to our course objectives:

*   **CO1 (Fundamentals, Composition, Physical Quantities):** We've defined fundamental terms like heats of formation, combustion, and reaction. We've discussed standard states, which are essential for defining physical quantities like enthalpy. Understanding atomic heats and Kopp's Rule relates to estimating physical properties of substances.
*   **CO2 & CO3 (Material Balances):** While this module focuses on energy, the stoichiometric coefficients we use in enthalpy calculations ($\Delta H_R^\circ = \sum \nu_p \Delta H_f^\circ - \sum \nu_r \Delta H_f^\circ$) are directly from material balances. Accurate material balances are the foundation for energy balances.
*   **CO4 (Energy Balance Equations):** This entire module is dedicated to CO4. We've learned to calculate heat effects for reactions using Hess's Law and heats of formation, and we've explored how temperature affects these heats using Kirchhoff's Law. We've also set up the energy balance for adiabatic reactors to find the adiabatic reaction temperature.
*   **CO5 (Software Implementation):** The formulas we've discussed, especially for calculating $\Delta H_R^\circ$ and for temperature correction of $\Delta H_R$, are directly implementable in software. Numerical integration of $C_p$ functions is also a common task for chemical engineering software.

### Key Takeaways to Remember

*   **Heats of reaction** quantify energy changes in chemical transformations.
*   **Standard states** provide a baseline for comparing heats of reaction.
*   **Standard heats of formation** are the building blocks: $\Delta H_f^\circ(\text{element, standard state}) = 0$.
*   **Hess's Law** is paramount: $\Delta H_R^\circ = \sum \nu_p \Delta H_f^\circ (\text{products}) - \sum \nu_r \Delta H_f^\circ (\text{reactants})$.
*   **Temperature affects $\Delta H_R$** via $\Delta C_p$ (Kirchhoff's Law).
*   **Adiabatic reaction temperature** is the maximum temperature reached in an insulated reactor.
*   **Kopp's Rule** estimates solid heat capacities.

Mastering these concepts will equip you to perform vital energy balance calculations for chemical processes, ensuring efficient and safe operations.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** Explain why the standard heat of formation of elemental oxygen ($O_2(g)$) is defined as zero.

**Answer:** The standard heat of formation is defined as the enthalpy change when one mole of a compound is formed from its constituent elements in their most stable standard states. For oxygen, its most stable standard state at 298.15 K and 1 bar is the gaseous state as diatomic molecules ($O_2(g)$). Since oxygen is already in its elemental and stable standard state, no formation reaction is occurring from simpler substances. Therefore, by definition, its heat of formation is zero. This serves as a reference point from which the heats of formation of oxygen-containing compounds are measured.

**Question 2 (Calculation - Hess's Law):** Calculate the standard heat of reaction for the combustion of propane ($C_3H_8$) to form carbon dioxide and liquid water:
$C_3H_8(g) + 5O_2(g) \rightarrow 3CO_2(g) + 4H_2O(l)$

Given the following standard heats of formation at 298.15 K:
$\Delta H_f^\circ (C_3H_8, g) = -103.8 \text{ kJ/mol}$
$\Delta H_f^\circ (CO_2, g) = -393.5 \text{ kJ/mol}$
$\Delta H_f^\circ (H_2O, l) = -285.8 \text{ kJ/mol}$
$\Delta H_f^\circ (O_2, g) = 0 \text{ kJ/mol}$

**Solution:**
We use the formula:
$\Delta H_R^\circ = \sum (\nu_p \Delta H_f^\circ)_{\text{products}} - \sum (\nu_r \Delta H_f^\circ)_{\text{reactants}}$

For the given reaction:
$\Delta H_R^\circ = [3 \times \Delta H_f^\circ (CO_2, g) + 4 \times \Delta H_f^\circ (H_2O, l)] - [1 \times \Delta H_f^\circ (C_3H_8, g) + 5 \times \Delta H_f^\circ (O_2, g)]$

Substitute the given values:
$\Delta H_R^\circ = [3 \times (-393.5 \text{ kJ/mol}) + 4 \times (-285.8 \text{ kJ/mol})] - [1 \times (-103.8 \text{ kJ/mol}) + 5 \times (0 \text{ kJ/mol})]$
$\Delta H_R^\circ = [-1180.5 \text{ kJ/mol} - 1143.2 \text{ kJ/mol}] - [-103.8 \text{ kJ/mol} + 0 \text{ kJ/mol}]$
$\Delta H_R^\circ = -2323.7 \text{ kJ/mol} - (-103.8 \text{ kJ/mol})$
$\Delta H_R^\circ = -2323.7 + 103.8 \text{ kJ/mol}$
$\Delta H_R^\circ = -2219.9 \text{ kJ/mol}$

The standard heat of reaction for the combustion of propane is -2219.9 kJ/mol. The negative sign indicates that the reaction is exothermic.

**Question 3 (Application - Temperature Effect):** The standard heat of formation of sulfur dioxide ($SO_2$) from sulfur ($S$, rhombic) and oxygen ($O_2$) at 298 K is -296 kJ/mol.
$S(s, \text{rhombic}) + O_2(g) \rightarrow SO_2(g) \quad \Delta H_{298}^\circ = -296 \text{ kJ/mol}$

Estimate the heat of reaction at 500 K, given the following average molar heat capacities:
$C_p(S, \text{rhombic}) = 30 \text{ J/mol·K}$
$C_p(O_2, g) = 30 \text{ J/mol·K}$
$C_p(SO_2, g) = 45 \text{ J/mol·K}$

**Solution:**
First, we need to calculate $\Delta C_p$ for the reaction.
$\Delta C_p = \sum (\nu_p C_{p,p}) - \sum (\nu_r C_{p,r})$
$\Delta C_p = [1 \times C_p(SO_2, g)] - [1 \times C_p(S, \text{rhombic}) + 1 \times C_p(O_2, g)]$
$\Delta C_p = [1 \times 45 \text{ J/mol·K}] - [1 \times 30 \text{ J/mol·K} + 1 \times 30 \text{ J/mol·K}]$
$\Delta C_p = 45 \text{ J/mol·K} - 60 \text{ J/mol·K}$
$\Delta C_p = -15 \text{ J/mol·K}$

Now, we use Kirchhoff's Law, assuming $\Delta C_p$ is constant over the temperature range:
$\Delta H_R^\circ(T_2) = \Delta H_R^\circ(T_1) + \Delta C_p (T_2 - T_1)$

Here, $T_1 = 298 \text{ K}$, $T_2 = 500 \text{ K}$, and $\Delta H_R^\circ(T_1) = -296 \text{ kJ/mol}$.
We need to ensure units are consistent. $\Delta C_p = -15 \text{ J/mol·K} = -0.015 \text{ kJ/mol·K}$.

$\Delta H_R^\circ(500 \text{ K}) = -296 \text{ kJ/mol} + (-0.015 \text{ kJ/mol·K}) \times (500 \text{ K} - 298 \text{ K})$
$\Delta H_R^\circ(500 \text{ K}) = -296 \text{ kJ/mol} + (-0.015 \text{ kJ/mol·K}) \times (202 \text{ K})$
$\Delta H_R^\circ(500 \text{ K}) = -296 \text{ kJ/mol} - 3.03 \text{ kJ/mol}$
$\Delta H_R^\circ(500 \text{ K}) = -299.03 \text{ kJ/mol}$

The heat of reaction at 500 K is approximately -299.03 kJ/mol. Since $\Delta C_p$ is negative, the reaction becomes slightly more exothermic at higher temperatures, as expected.

**Question 4 (Conceptual - Adiabatic Temperature):** A highly exothermic reaction is carried out in an adiabatic reactor. If no reactants are left unreacted, what can be said about the final temperature of the products compared to the initial temperature of the reactants?

**Answer:** In an adiabatic reactor, there is no heat exchange with the surroundings. For a highly exothermic reaction, a significant amount of heat is released. This released heat is absorbed by the product stream, causing its temperature to rise. Therefore, the final temperature of the products will be **higher** than the initial temperature of the reactants. This maximum possible temperature achieved is the adiabatic reaction temperature.

**Question 5 (Definitions):** Define Standard Heat of Combustion.

**Answer:** The Standard Heat of Combustion ($\Delta H_c^\circ$) is the heat change that occurs when one mole of a substance is completely burned (oxidized) in pure oxygen under standard conditions (typically 298.15 K and 1 bar pressure). The products of combustion are assumed to be in their most stable forms at these standard conditions. For example, for hydrocarbons, complete combustion yields carbon dioxide and liquid water. It is a specific type of heat of reaction that quantifies the energy content of a fuel.
