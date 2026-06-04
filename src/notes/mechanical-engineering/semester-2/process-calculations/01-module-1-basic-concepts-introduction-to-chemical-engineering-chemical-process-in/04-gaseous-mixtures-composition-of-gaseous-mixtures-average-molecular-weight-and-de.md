---
title: "Gaseous mixtures, Composition of gaseous mixtures, Average molecular weight and density, Ideal gas law, Dalton’s Law, Amagat’ Law, Vander Waals equation"
subject: "PROCESS CALCULATIONS"
module: "Module 1: Basic Concepts: Introduction to Chemical Engineering, Chemical process Industry, Unit Operations and Unit Processes."
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e83a91"
status: "completed"
scrapedAt: "2026-05-20T17:47:17.522Z"
---
# PROCESS CALCULATIONS - Module 1: Basic Concepts

Welcome, everyone! In this first module, we're laying the groundwork for everything we'll do in Process Calculations. Think of this as building the foundation of a sturdy house. Without a strong base, nothing else will stand. Our focus today is on understanding **Gaseous Mixtures**. Why gases? Because so many of the processes we'll analyze in chemical engineering involve gases – air, natural gas, steam, combustion products, and so on. Getting a handle on how these mixtures behave is absolutely crucial.

This module, specifically our discussion on gaseous mixtures, directly ties into **Course Outcome 1 (CO1)**: "Explain fundamentals of Chemical Engineering, units and dimensions and estimate chemical composition and other physical quantities of solids, liquids, solutions, gases and mixtures." We'll be learning how to describe the composition of these mixtures and how to calculate their important physical properties like molecular weight and density. This is essential for understanding the raw materials and products of chemical industries.

## The Chemical Process Industry and Its Building Blocks

Before we dive into gases, let's quickly recap where this fits in the bigger picture. The **Chemical Process Industry (CPI)** is all about transforming raw materials into useful products through chemical and physical changes. Think about making plastics, fertilizers, pharmaceuticals, fuels, and even food items.

Within this vast industry, we deal with two fundamental types of activities:

*   **Unit Operations:** These are the physical steps in a process where there's a change in physical condition or form, but not a chemical change. Examples include distillation, evaporation, filtration, drying, mixing, and heat exchange.
*   **Unit Processes:** These are the chemical transformation steps. This is where a chemical reaction occurs to create a new substance. Examples include cracking, hydrogenation, oxidation, and polymerization.

Our ability to calculate and predict the behavior of substances, especially in gaseous mixtures, is fundamental to designing, operating, and optimizing both unit operations and unit processes.

## Understanding Gaseous Mixtures: The Air We Breathe (and More!)

So, what exactly is a gaseous mixture? It's simply a collection of two or more gases that are blended together. The most common gaseous mixture we encounter is **air**, which is primarily nitrogen ($N_2$) and oxygen ($O_2$), with smaller amounts of argon, carbon dioxide, and trace gases.

When we talk about gases, they have a tendency to mix completely and uniformly. Unlike liquids or solids, where you might have distinct layers or phases, gases expand to fill their containers and intermingle freely. This is a key characteristic we'll leverage.

### Composition of Gaseous Mixtures: How Do We Describe What's Inside?

How do we quantify what's in a mixture? This is where **composition** comes in. For gaseous mixtures, we have several ways to express it, and it's vital to know which one is being used, as they are not interchangeable!

1.  **Mole Fraction ($y_i$)**: This is perhaps the most common and useful way to express composition in chemical engineering. It's the ratio of the moles of a specific component ($i$) to the total moles of all components in the mixture.
    
    $y_i = \frac{\text{moles of component } i}{\text{total moles in the mixture}}$
    
    The sum of all mole fractions in a mixture must always equal 1: $\sum y_i = 1$.
    
    *Think of it like this:* If you have a bag of marbles containing 5 red marbles and 5 blue marbles, the mole fraction of red marbles is 5 / (5 + 5) = 0.5. This is a simple analogy, but it captures the essence of the ratio.
    
    *(Narayanan & Lakshmikutty, Chapter 2)* emphasize the importance of mole fractions because many gas laws and calculations are based on moles.

2.  **Mass Fraction ($w_i$)**: This is the ratio of the mass of a specific component ($i$) to the total mass of the mixture.
    
    $w_i = \frac{\text{mass of component } i}{\text{total mass of the mixture}}$
    
    Similar to mole fractions, the sum of all mass fractions must also equal 1: $\sum w_i = 1$.
    
    *Example:* If you have 10 kg of a mixture containing 3 kg of component A and 7 kg of component B, the mass fraction of A is 3 kg / 10 kg = 0.3.

3.  **Volume Fraction ($v_f$ or $\phi_i$)**: This is the ratio of the volume of a specific component ($i$) to the total volume of the mixture. This is typically used for gases under the same temperature and pressure conditions.
    
    $v_f_i = \frac{\text{volume of component } i}{\text{total volume of the mixture}}$
    
    Again, $\sum v_f_i = 1$.
    
    *Why is this useful for gases?* Under the same temperature and pressure, the volume occupied by a gas is directly proportional to the number of moles (thanks to the Ideal Gas Law, which we'll cover soon!). So, for gases under identical conditions, mole fraction is equal to volume fraction. This is a handy shortcut, but remember the condition!

### Converting Between Compositions

It's often necessary to convert between these different ways of expressing composition. The key to this lies in understanding the relationship between moles, mass, and molecular weight.

*   **Mass = Moles × Molecular Weight**

To convert from mole fraction ($y_i$) to mass fraction ($w_i$):
1.  Assume a basis, say 1 mole of the mixture.
2.  Calculate the mass of each component: $m_i = y_i \times M_i$, where $M_i$ is the molecular weight of component $i$.
3.  Calculate the total mass of the mixture: $M_{total} = \sum m_i = \sum (y_i \times M_i)$.
4.  Calculate the mass fraction: $w_i = \frac{m_i}{M_{total}} = \frac{y_i \times M_i}{\sum (y_i \times M_i)}$.

Notice that the denominator, $\sum (y_i \times M_i)$, is actually the **average molecular weight** of the mixture! We'll get to that next.

## Average Molecular Weight ($\bar{M}$) and Density ($\rho$) of Gaseous Mixtures

These are crucial properties for any process calculation.

### Average Molecular Weight ($\bar{M}$)

The average molecular weight of a gaseous mixture is the weighted average of the molecular weights of its individual components, where the weights are the mole fractions.

$\bar{M} = \sum_{i=1}^{n} y_i M_i$

Where:
*   $\bar{M}$ is the average molecular weight of the mixture.
*   $y_i$ is the mole fraction of component $i$.
*   $M_i$ is the molecular weight of component $i$.
*   $n$ is the number of components in the mixture.

*Let's use our air example:*
Air is approximately 79% $N_2$ and 21% $O_2$ (on a molar basis for simplicity, although it's closer to 79.1% and 20.9%).
Molecular weight of $N_2$ ($M_{N_2}$) is 28 g/mol.
Molecular weight of $O_2$ ($M_{O_2}$) is 32 g/mol.

$\bar{M}_{air} = (0.79 \times 28 \text{ g/mol}) + (0.21 \times 32 \text{ g/mol})$
$\bar{M}_{air} = 22.12 \text{ g/mol} + 6.72 \text{ g/mol} = 28.84 \text{ g/mol}$

So, on average, a mole of air weighs about 28.84 grams. This is a very important number to remember for air calculations! *(Bhatt & Vora, Chapter 3)* heavily uses average molecular weight for stoichiometric calculations.

### Density ($\rho$) of Gaseous Mixtures

Density is mass per unit volume ($\rho = m/V$). For gases, density is strongly dependent on temperature and pressure. We usually calculate density using the Ideal Gas Law (which we'll get to shortly).

From the Ideal Gas Law, $PV = nRT$.
We know that $n = \frac{m}{M}$ (mass / molecular weight).
Substituting this: $PV = \frac{m}{M}RT$.

Rearranging for density ($\frac{m}{V}$):
$\frac{m}{V} = \frac{PM}{RT}$

So, the density of a gaseous mixture can be calculated as:
$\rho = \frac{PM}{RT}$

Where:
*   $\rho$ is the density of the mixture.
*   $P$ is the absolute pressure.
*   $\bar{M}$ is the average molecular weight of the mixture.
*   $R$ is the universal gas constant.
*   $T$ is the absolute temperature.

**Important Note on Units:** Be extremely careful with units when using the gas constant $R$. Common values include:
*   $R = 0.08206 \frac{\text{L} \cdot \text{atm}}{\text{mol} \cdot \text{K}}$
*   $R = 8.314 \frac{\text{J}}{\text{mol} \cdot \text{K}}$ or $8.314 \frac{\text{Pa} \cdot \text{m}^3}{\text{mol} \cdot \text{K}}$
*   $R = 1.987 \frac{\text{cal}}{\text{mol} \cdot \text{K}}$

If you use $R = 0.08206 \frac{\text{L} \cdot \text{atm}}{\text{mol} \cdot \text{K}}$ and $\bar{M}$ in g/mol, you'll get density in g/L, assuming P is in atm and T in Kelvin.
If you use $R = 8.314 \frac{\text{Pa} \cdot \text{m}^3}{\text{mol} \cdot \text{K}}$ and $\bar{M}$ in kg/mol, you'll get density in kg/m$^3$, assuming P is in Pa and T in Kelvin.

*(Himmelblau & Riggs, Chapter 3)* provides extensive tables and examples for unit conversions and gas law applications.

## The Ideal Gas Law: A Fundamental Assumption

The **Ideal Gas Law** is a cornerstone of our calculations. It provides a simple mathematical relationship between pressure, volume, temperature, and the number of moles of a gas. It's based on a simplified model of gas behavior.

**PV = nRT**

Where:
*   $P$ = Absolute Pressure
*   $V$ = Volume
*   $n$ = Number of moles
*   $R$ = Universal Gas Constant
*   $T$ = Absolute Temperature

**What is an "Ideal Gas"?**
An ideal gas is a theoretical gas composed of particles that:
1.  Have negligible volume themselves compared to the total volume of the container.
2.  Exert no attractive or repulsive forces on each other.
3.  All energy is kinetic energy, and collisions are perfectly elastic.

**When is the Ideal Gas Law a Good Approximation?**
Real gases behave *almost* ideally under conditions of **low pressure** and **high temperature**. Why?
*   **Low Pressure:** The gas molecules are far apart, so their individual volumes are truly negligible, and intermolecular forces are very weak.
*   **High Temperature:** The kinetic energy of the molecules is much higher than any potential energy due to intermolecular forces, so the forces have little effect.

Most of our initial calculations will rely on the Ideal Gas Law as a starting point, especially for common gases like air at typical process conditions. *(Felder & Rousseau, Chapter 4)* dedicates significant attention to the limitations and applications of the Ideal Gas Law.

**PV = nRT for Mixtures:**
For a gaseous mixture, the Ideal Gas Law applies to the total pressure, total volume, and the total number of moles:
$P_{total} V_{total} = n_{total} RT$

## Dalton's Law of Partial Pressures: Breaking Down the Pressure

When you have a mixture of gases, each gas contributes to the total pressure. **Dalton's Law of Partial Pressures** tells us how to account for this. It states that the total pressure exerted by a mixture of gases is equal to the sum of the partial pressures of the individual gases, *as if each gas occupied the entire volume by itself*.

$P_{total} = P_1 + P_2 + P_3 + \dots + P_n = \sum P_i$

Where $P_i$ is the partial pressure of component $i$.

**What is the Partial Pressure ($P_i$)?**
The partial pressure of a component ($i$) in an ideal gas mixture is the pressure that component would exert if it alone occupied the total volume ($V$) at the same temperature ($T$).

Using the Ideal Gas Law for a single component: $P_i V = n_i RT$.
We also know $P_{total} V = n_{total} RT$.

Dividing the first equation by the second:
$\frac{P_i V}{P_{total} V} = \frac{n_i RT}{n_{total} RT}$
$\frac{P_i}{P_{total}} = \frac{n_i}{n_{total}} = y_i$ (the mole fraction)

This gives us a very important relationship:
$P_i = y_i P_{total}$

So, the partial pressure of a gas in an ideal mixture is simply its mole fraction multiplied by the total pressure. This is a powerful concept!

*   **Analogy:** Imagine a busy classroom. The total "noise level" (total pressure) is made up of the individual "chatter" from different groups of students (partial pressures). If one group makes up half the students (mole fraction = 0.5) and the total noise level is 70 decibels, their contribution to the noise is about 35 decibels (0.5 * 70).

*(Narayanan & Lakshmikutty, Chapter 2)* highlights this relationship ($P_i = y_i P_{total}$) as critical for gas mixture analysis.

## Amagat's Law of Partial Volumes: Breaking Down the Volume

Just as Dalton's Law deals with pressure contributions, **Amagat's Law of Partial Volumes** deals with volume contributions. It states that the total volume of a gaseous mixture is equal to the sum of the partial volumes of the individual gases, *if each gas were at the total pressure ($P_{total}$) and the same temperature ($T$) as the mixture*.

$V_{total} = V_1 + V_2 + V_3 + \dots + V_n = \sum V_i$

Where $V_i$ is the partial volume of component $i$.

**What is the Partial Volume ($V_i$)?**
The partial volume of a component ($i$) is the volume that component would occupy if it were at the total pressure ($P_{total}$) and the mixture temperature ($T$).

Using the Ideal Gas Law for a single component at $P_{total}$ and $T$: $P_{total} V_i = n_i RT$.
We also know $P_{total} V_{total} = n_{total} RT$.

Dividing the first equation by the second:
$\frac{P_{total} V_i}{P_{total} V_{total}} = \frac{n_i RT}{n_{total} RT}$
$\frac{V_i}{V_{total}} = \frac{n_i}{n_{total}} = y_i$ (the mole fraction)

This gives us another crucial relationship for ideal gas mixtures:
$V_i = y_i V_{total}$

So, the partial volume of a gas in an ideal mixture is its mole fraction times the total volume. This means that the volume fraction is equal to the mole fraction for ideal gases. This confirms what we touched upon earlier!

**Relationship between Dalton's and Amagat's Laws for Ideal Gases:**
*   Dalton's Law: $P_i = y_i P_{total}$
*   Amagat's Law: $V_i = y_i V_{total}$

These laws are consistent with each other under ideal gas behavior, which is a testament to the elegance of the ideal gas model.

## Limitations of the Ideal Gas Law and Introducing Real Gases: The van der Waals Equation

We've been working with the assumption of ideal gases. But, as we know, real gases aren't perfectly ideal. They have finite molecular volumes and attractive forces between molecules. At high pressures and low temperatures, these deviations become significant.

So, how do we model real gas behavior? One of the earliest and most famous equations of state for real gases is the **van der Waals Equation**. It modifies the Ideal Gas Law by introducing two correction terms:

1.  **Correction for Molecular Volume:** The volume term $(V)$ in the ideal gas law represents the *free volume* available for molecules to move. In a real gas, the molecules themselves occupy some volume, reducing the available free volume. The correction is to subtract a term proportional to the number of moles ($nb$) from the total volume ($V$). The term '$b$' is the excluded volume per mole.

2.  **Correction for Intermolecular Forces:** The pressure term ($P$) in the ideal gas law assumes no attractive forces. Real gas molecules do attract each other. These attractive forces reduce the impact of molecules on the container walls, effectively lowering the observed pressure compared to what it would be if they were ideal. The correction adds a term proportional to the square of the molar density ($\frac{a}{V^2}$) to the observed pressure ($P$). The term '$a$' accounts for the strength of these attractive forces.

The van der Waals Equation is:

$\left( P + \frac{an^2}{V^2} \right) (V - nb) = nRT$

Or, in terms of molar volume ($v = V/n$):

$\left( P + \frac{a}{v^2} \right) (v - b) = RT$

Where:
*   $P$ = Absolute Pressure
*   $V$ = Volume
*   $n$ = Number of moles
*   $v = V/n$ = Molar volume
*   $R$ = Universal Gas Constant
*   $T$ = Absolute Temperature
*   $a$ = van der Waals constant specific to the gas (accounts for intermolecular attractive forces)
*   $b$ = van der Waals constant specific to the gas (accounts for molecular volume)

**Interpreting the Constants ($a$ and $b$):**
*   **'a'**: Larger values of 'a' mean stronger attractive forces between molecules. Gases like ammonia ($NH_3$) with polar molecules have higher 'a' values than nonpolar gases like helium ($He$).
*   **'b'**: Larger values of 'b' mean larger molecules or molecules that take up more space.

*   *(Himmelblau & Riggs, Chapter 5)* and *(Felder & Rousseau, Chapter 4)* both provide detailed discussions on equations of state, including van der Waals, and explain how to find 'a' and 'b' values (often from critical properties).

**Why is this Important?**
For processes operating at high pressures or low temperatures (like gas liquefaction or high-pressure reactions), the ideal gas law will lead to significant errors. The van der Waals equation (or other more sophisticated equations of state) is necessary for accurate calculations.

**Can we apply van der Waals to mixtures?**
Yes, but it gets more complicated. The constants 'a' and 'b' for mixtures are typically calculated using mixing rules, often involving mole fractions:
$a_{mix} = \sum_{i} \sum_{j} y_i y_j a_{ij}$
$b_{mix} = \sum_{i} y_i b_i$
(where $a_{ij} = \sqrt{a_i a_j}$ is a common mixing rule for the cross-term $a$, and $b_i$ is the constant for pure component $i$).

However, for introductory process calculations, you'll often stick to the Ideal Gas Law unless specifically told otherwise or dealing with extreme conditions.

---

## Connecting to Course Outcomes:

*   **CO1 (Composition, Physical Quantities):** We've covered how to express gas mixture composition (mole, mass, volume fractions) and how to calculate average molecular weight and density. These are the fundamental "physical quantities" for gases.
*   **CO2 (Material Balances for Unit Operations):** Understanding gas mixture composition and properties is essential for tracking materials in unit operations like gas absorbers, dryers, and heat exchangers where gases are involved. For instance, knowing the composition of air entering a dryer helps calculate how much water vapor it can hold.
*   **CO3 (Material Balances for Unit Processes):** In reactions involving gases (e.g., combustion, synthesis), knowing the molar ratios and densities of gaseous reactants and products is vital for setting up material balances.
*   **CO4 (Energy Balances):** The properties of gases (like specific heat, enthalpy) are needed for energy balances. Understanding their state (described by P, V, T) and composition is the first step.
*   **CO5 (Software Programs):** The formulas and concepts we discussed are the basis for the algorithms used in process simulation software. If you understand how to calculate properties manually, you'll better understand what the software is doing.

---

## Exam Focus & Pitfalls:

*   **Units:** Always, always, always pay attention to units when dealing with gas laws and constants! Mismatched units are the most common error.
*   **Absolute vs. Gauge Pressure/Temperature:** Gas laws *require* absolute pressure (psia, atm, Pa) and absolute temperature (K, °R). Be ready to convert from gauge.
*   **Ideal vs. Real Gas:** Know when the ideal gas law is a good approximation and when you might need a more complex equation like van der Waals (usually indicated by high pressure or low temperature).
*   **Composition Conversions:** Be comfortable converting between mole fraction and mass fraction. The average molecular weight is the bridge.
*   **Dalton's vs. Amagat's:** Understand both laws and the key relationships: $P_i = y_i P_{total}$ and $V_i = y_i V_{total}$ for ideal gases.

---

## Sample Questions and Answers

**Question 1 (Conceptual):**
Under what conditions of temperature and pressure does a real gas behave most like an ideal gas? Explain why.

**Answer 1:**
A real gas behaves most like an ideal gas under conditions of **low pressure** and **high temperature**.
*   **Low Pressure:** At low pressures, the gas molecules are far apart. This minimizes the impact of intermolecular attractive forces (which the ideal gas law assumes are zero) and makes the volume occupied by the molecules themselves negligible compared to the total volume.
*   **High Temperature:** At high temperatures, the kinetic energy of the gas molecules is much greater than the potential energy associated with intermolecular forces. This means the molecules are moving too rapidly for attractive forces to significantly influence their behavior.

**Question 2 (Calculation):**
A gaseous mixture contains 20% methane ($CH_4$) and 80% ethane ($C_2H_6$) by mole. Calculate the average molecular weight of the mixture.

**Given:**
*   Molecular weight of $CH_4 = 16.04$ g/mol
*   Molecular weight of $C_2H_6 = 30.07$ g/mol

**Solution:**
We use the formula for average molecular weight: $\bar{M} = \sum y_i M_i$.

*   Mole fraction of $CH_4$, $y_{CH_4} = 0.20$
*   Mole fraction of $C_2H_6$, $y_{C_2H_6} = 0.80$

$\bar{M} = (y_{CH_4} \times M_{CH_4}) + (y_{C_2H_6} \times M_{C_2H_6})$
$\bar{M} = (0.20 \times 16.04 \text{ g/mol}) + (0.80 \times 30.07 \text{ g/mol})$
$\bar{M} = 3.208 \text{ g/mol} + 24.056 \text{ g/mol}$
$\bar{M} = 27.264 \text{ g/mol}$

**Answer:** The average molecular weight of the mixture is approximately 27.26 g/mol.

**Question 3 (Application of Gas Laws):**
A vessel contains a mixture of ideal gases at 150°C and 5 atm. The composition by mole is 30% Nitrogen ($N_2$), 50% Hydrogen ($H_2$), and 20% Ammonia ($NH_3$).

a) What is the partial pressure of Hydrogen ($H_2$)?
b) What is the partial volume of Ammonia ($NH_3$) if the total volume is 100 Liters?

**Given:**
*   Temperature $T = 150 \text{°C}$
*   Total Pressure $P_{total} = 5 \text{ atm}$
*   Composition: $y_{N_2}=0.30$, $y_{H_2}=0.50$, $y_{NH_3}=0.20$
*   Total Volume $V_{total} = 100 \text{ L}$

**Solution:**
First, convert temperature to absolute scale: $T = 150 \text{°C} + 273.15 = 423.15 \text{ K}$.

a) **Partial Pressure of Hydrogen:**
Using Dalton's Law of Partial Pressures: $P_i = y_i P_{total}$
$P_{H_2} = y_{H_2} \times P_{total}$
$P_{H_2} = 0.50 \times 5 \text{ atm}$
$P_{H_2} = 2.5 \text{ atm}$

b) **Partial Volume of Ammonia:**
Using Amagat's Law of Partial Volumes: $V_i = y_i V_{total}$
$V_{NH_3} = y_{NH_3} \times V_{total}$
$V_{NH_3} = 0.20 \times 100 \text{ L}$
$V_{NH_3} = 20 \text{ L}$

**Answer:**
a) The partial pressure of Hydrogen is 2.5 atm.
b) The partial volume of Ammonia is 20 L.

**Question 4 (Density Calculation):**
Calculate the density of dry air at standard temperature and pressure (STP), assuming it behaves as an ideal gas. STP is defined as 0°C (273.15 K) and 1 atm. Use $\bar{M}_{air} \approx 28.97$ g/mol and $R = 0.08206 \frac{\text{L} \cdot \text{atm}}{\text{mol} \cdot \text{K}}$.

**Solution:**
We use the density formula derived from the Ideal Gas Law: $\rho = \frac{PM}{RT}$.

*   $P = 1 \text{ atm}$
*   $\bar{M} = 28.97 \text{ g/mol}$
*   $R = 0.08206 \frac{\text{L} \cdot \text{atm}}{\text{mol} \cdot \text{K}}$
*   $T = 273.15 \text{ K}$

$\rho = \frac{(1 \text{ atm}) \times (28.97 \text{ g/mol})}{\left(0.08206 \frac{\text{L} \cdot \text{atm}}{\text{mol} \cdot \text{K}}\right) \times (273.15 \text{ K})}$
$\rho = \frac{28.97 \text{ g/mol}}{22.414 \frac{\text{L} \cdot \text{atm}}{\text{mol} \cdot \text{K}} \cdot \text{K}}$
$\rho = 1.292 \text{ g/L}$

**Answer:** The density of dry air at STP is approximately 1.292 g/L. This is a commonly used value!

---
This concludes our introduction to gaseous mixtures. Remember these core concepts as we move forward!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
