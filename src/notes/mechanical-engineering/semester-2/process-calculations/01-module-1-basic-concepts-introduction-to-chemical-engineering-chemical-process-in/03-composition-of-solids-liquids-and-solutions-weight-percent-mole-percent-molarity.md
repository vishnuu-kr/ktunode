---
title: "Composition of solids, liquids and solutions - weight percent, mole percent, molarity, normality, molality, ppm"
subject: "PROCESS CALCULATIONS"
module: "Module 1: Basic Concepts: Introduction to Chemical Engineering, Chemical process Industry, Unit Operations and Unit Processes."
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e83a90"
status: "completed"
scrapedAt: "2026-05-20T17:47:16.764Z"
---
# PROCESS CALCULATIONS: Module 1 - Basic Concepts

## Introduction to Chemical Engineering, Chemical Process Industry, Unit Operations and Unit Processes

Welcome, everyone! Today, we're diving into the foundational concepts of Process Calculations. Think of this module as building the very bedrock of our understanding of how chemical processes work. We'll start by understanding what chemical engineering is all about, the landscape of the chemical industry, and then we'll introduce the building blocks of any chemical plant: unit operations and unit processes. This knowledge is crucial for everything we'll do later, especially in material and energy balances, which directly relates to our Course Outcome CO1: *Explain fundamentals of Chemical Engineering, units and dimensions and estimate chemical composition and other physical quantities of solids, liquids, solutions, gases and mixtures.*

### What is Chemical Engineering?

At its heart, chemical engineering is about transforming raw materials into valuable products through chemical and physical changes. It's not just about reactions in a flask; it's about scaling these reactions up to industrial levels, ensuring safety, efficiency, and economic viability. We design, operate, and optimize these processes.

### The Chemical Process Industry

The chemical industry is vast and touches almost every aspect of our lives. From the fuels we use, the plastics in our everyday items, the pharmaceuticals that keep us healthy, to the fertilizers that feed the world – all are products of the chemical industry. Understanding the composition of the materials involved in these processes is absolutely fundamental. This directly links to our CO1, as we need to quantify these materials accurately.

### Unit Operations and Unit Processes

Imagine a chemical plant as a complex puzzle. This puzzle is made up of smaller, distinct steps. These steps are broadly categorized into **Unit Operations** and **Unit Processes**.

*   **Unit Operations:** These involve physical changes to a substance. Think about separating mixtures, changing temperature or pressure, or moving materials. Examples include distillation, filtration, evaporation, and pumping. These are the physical workhorses of a chemical plant.
*   **Unit Processes:** These involve chemical transformations. Here, the chemical identity of the substance changes through a chemical reaction. Examples include oxidation, hydrogenation, and polymerization.

Many chemical processes are a combination of several unit operations and unit processes. Our ability to calculate and analyze what's happening within each of these steps relies heavily on understanding the **composition** of the materials we're dealing with. This is where our main focus today comes in.

## Composition of Solids, Liquids, and Solutions

When we talk about processes, we're always dealing with *stuff* – raw materials, intermediate products, final products, and by-products. To perform calculations, we need a way to precisely describe *how much* of each component is present in a mixture or stream. This is what "composition" means in chemical engineering. We'll explore several ways to express this, each useful in different contexts. This is core to CO1, as we learn to quantify these physical quantities.

### 1. Weight Percent (% w/w)

This is perhaps the most intuitive way to express composition. It tells us how many kilograms (or pounds, or grams) of a particular component are present in 100 kilograms (or pounds, or grams) of the total mixture.

**Definition:**
Weight percent of component A = (Mass of component A / Total mass of the mixture) * 100

**Example:**
Let's say you're making a saltwater solution. You dissolve 10 grams of salt (NaCl) in 90 grams of water (H₂O).
*   Mass of salt = 10 g
*   Mass of water = 90 g
*   Total mass = 10 g + 90 g = 100 g

So, the weight percent of salt is (10 g / 100 g) * 100 = **10% w/w**. The weight percent of water is (90 g / 100 g) * 100 = **90% w/w**. Simple, right?

**Relatable Example:**
Imagine you're baking. A recipe might call for "15% by weight of sugar in the flour mix." This means for every 100 kg of your flour mix, 15 kg should be sugar. This is super common in food science and many industrial formulations where the physical mass is what matters for handling and mixing.

**Why it's important:** Many industrial processes deal with mass directly. For instance, when you buy raw materials, they are usually sold by weight. Balances and scales measure mass. So, weight percent is very practical for inventory and material handling.

### 2. Mole Percent (% mol/mol)

Chemical reactions, as we'll see in later modules, happen on a *molecular* or *atomic* level. The fundamental unit that participates in a chemical reaction is the mole. Therefore, understanding composition in terms of moles is critical for stoichiometry and predicting reaction yields. This is also essential for CO1.

**Definition:**
Mole percent of component A = (Moles of component A / Total moles of the mixture) * 100

**How to Calculate Moles:**
To get moles from mass, we use the molar mass (also called molecular weight).
Moles of component A = (Mass of component A) / (Molar mass of component A)

Let's use our saltwater example again.
*   Mass of salt (NaCl) = 10 g
*   Molar mass of NaCl = 22.99 g/mol (Na) + 35.45 g/mol (Cl) = 58.44 g/mol
*   Moles of salt = 10 g / 58.44 g/mol = 0.171 mol

*   Mass of water (H₂O) = 90 g
*   Molar mass of H₂O = 2 * 1.01 g/mol (H) + 16.00 g/mol (O) = 18.02 g/mol
*   Moles of water = 90 g / 18.02 g/mol = 4.994 mol

*   Total moles in the solution = Moles of salt + Moles of water = 0.171 mol + 4.994 mol = 5.165 mol

Now, let's calculate mole percent:
*   Mole percent of salt = (0.171 mol / 5.165 mol) * 100 = **3.31% mol/mol**
*   Mole percent of water = (4.994 mol / 5.165 mol) * 100 = **96.69% mol/mol**

**Notice the difference!** 10% by weight of salt is only 3.31% by moles. This is because salt (NaCl) has a much higher molar mass than water. One mole of salt is much heavier than one mole of water. This highlights why it's crucial to know *which* basis (weight or mole) you're working with.

**Relatable Example:**
Think about baking a cake with a specific chemical reaction, like leavening with baking soda. The amount of baking soda needed is dictated by how many moles of acid it will react with in the batter, not just its weight. So, mole percent is vital for chemical reaction calculations. This directly relates to our CO1 for estimating chemical composition.

### 3. Molarity (M)

Molarity is a very common way to express the concentration of **solutions**, particularly in chemistry laboratories and in processes involving liquid reactions. It's defined based on the volume of the solution.

**Definition:**
Molarity (M) = Moles of solute / Liters of solution

The unit for molarity is moles per liter (mol/L). A 1 M solution means there is 1 mole of solute dissolved in exactly 1 liter of the final solution.

**Example:**
If you dissolve 58.44 grams of NaCl (which is 1 mole of NaCl) in enough water to make exactly 1 liter of solution, you have a **1 Molar** NaCl solution.

**Relatable Example:**
When you buy acids or bases for your experiments, they are usually labeled with their molarity, like "12 M HCl" or "6 M NaOH". This tells you how concentrated they are in terms of reactive molecules per unit volume, which is essential for titration or reaction calculations.

**Important Note on Volume:** Molarity is tricky because it depends on the *final volume* of the solution. When you dissolve a solid in a liquid, the total volume might not be the sum of the volumes of the solvent and the solute. You have to be careful to reach the specified final volume.

**Exam Tip:** Be mindful if a problem gives you the volume of the *solvent* versus the volume of the *solution*. Molarity always uses the volume of the *solution*.

### 4. Normality (N)

Normality is another concentration unit for solutions, but it's more specific to **acid-base reactions** and **redox reactions**. It's based on the concept of "equivalents" rather than moles. An equivalent is the amount of a substance that can donate or accept one mole of hydrogen ions (H⁺) in an acid-base reaction, or participate in one mole of electron transfer in a redox reaction.

**Definition:**
Normality (N) = Number of equivalents of solute / Liters of solution

**How to determine Equivalents:**
*   **Acids:** Number of equivalents = Moles * (Number of H⁺ ions donated per molecule)
    *   For HCl, it donates 1 H⁺, so equivalents = moles * 1
    *   For H₂SO₄, it can donate 2 H⁺, so equivalents = moles * 2
*   **Bases:** Number of equivalents = Moles * (Number of OH⁻ ions donated or H⁺ ions accepted per molecule)
    *   For NaOH, it donates 1 OH⁻, so equivalents = moles * 1
    *   For Ca(OH)₂, it can donate 2 OH⁻, so equivalents = moles * 2
*   **Redox Reactions:** This is more complex and depends on the specific reaction and the change in oxidation state.

**Example:**
Consider a 1 M H₂SO₄ solution. Sulfuric acid can donate two protons (H⁺).
*   Moles of H₂SO₄ = 1 mol
*   Number of equivalents of H₂SO₄ = 1 mol * 2 = 2 equivalents
*   Normality (N) = 2 equivalents / 1 L = **2 N**

**Relationship between Molarity and Normality:**
Normality = Molarity * (Number of equivalents per mole)

**Why is it used?**
The beauty of normality is that **at a given temperature and pressure, one equivalent of an acid reacts completely with one equivalent of a base.** This makes titration calculations very straightforward. For example, N₁V₁ = N₂V₂ (where V is volume), which is simpler than M₁V₁ = M₂V₂ if the stoichiometric ratio isn't 1:1.

**Caution:** Normality is reaction-specific. The normality of a solution can change if you use it in a different type of reaction. This is why molarity is generally preferred in modern chemical engineering as it's independent of the reaction. However, you will still encounter normality in older literature or specific fields.

### 5. Molality (m)

Molality is similar to molarity but is based on the mass of the **solvent**, not the volume of the solution. This makes it independent of temperature changes, as mass doesn't change with temperature, while volume can.

**Definition:**
Molality (m) = Moles of solute / Kilograms of solvent

The unit for molality is moles per kilogram (mol/kg).

**Example:**
Let's go back to our saltwater. We had 10 g of NaCl and 90 g of water.
*   Moles of NaCl = 0.171 mol (calculated earlier)
*   Mass of water (solvent) = 90 g = 0.090 kg

Molality (m) of NaCl = 0.171 mol / 0.090 kg = **1.9 mol/kg**

**Relatable Example:**
In physical chemistry and some advanced thermodynamics, molality is preferred when studying colligative properties (like boiling point elevation or freezing point depression) because these properties depend on the ratio of solute molecules to solvent molecules, not the solution volume.

**When to use Molality:** When temperature changes are significant and you need a concentration unit that remains constant. Also, for properties that are directly related to the solvent.

### 6. Parts Per Million (ppm)

"Parts per million" is used for very dilute solutions or mixtures, where the concentration of a component is extremely low. It's essentially a weight fraction multiplied by a million.

**Definition:**
ppm = (Mass of component / Total mass of the mixture) * 10⁶

It can also be expressed as moles per million moles, or volume per million volumes, but the mass basis is most common.

**Example:**
If a water sample contains 0.01 grams of lead (Pb) in 1000 kg of water.
*   Mass of lead = 0.01 g
*   Mass of water = 1000 kg = 1,000,000 g
*   Total mass of mixture = 0.01 g + 1,000,000 g = 1,000,000.01 g

ppm of lead = (0.01 g / 1,000,000.01 g) * 10⁶ ≈ **0.01 ppm**

**Relatable Example:**
You'll often see ppm used in environmental monitoring – for pollutants in air or water, or in food labeling for trace ingredients or additives. For instance, "drinking water should contain less than 0.05 ppm of arsenic."

**Other "Parts Per..." Units:**
You might also encounter:
*   **ppb (parts per billion):** Mass of component / Total mass * 10⁹
*   **ppth (parts per thousand) or ‰ (permille):** Mass of component / Total mass * 10³ (same as weight percent, but expressed differently)

**Key takeaway for ppm:** It's for tiny concentrations. Think of it as "how many units of a substance are there for every million units of the whole."

## Connecting to Course Outcomes

Let's quickly recap how these composition units tie into our course outcomes:

*   **CO1: Explain fundamentals of Chemical Engineering, units and dimensions and estimate chemical composition and other physical quantities of solids, liquids, solutions, gases and mixtures.**
    *   This entire topic directly addresses CO1. We've learned *how* to express chemical composition using weight percent, mole percent, molarity, normality, molality, and ppm. These are the fundamental "quantities" we need to estimate and track in any chemical process. Understanding the differences between these units and when to use them is a core part of the fundamentals.

*   **CO2: Develop and solve basic material balance equations for the unit operations employed in process industries.**
    *   To do material balances, we absolutely need to know the composition of the streams entering and leaving a unit operation. If a stream is a mixture, we need to track the mass or moles of each component. Weight percent and mole percent are essential for this. For example, if 100 kg of a mixture containing 20% NaCl by weight enters a filter, we know we have 20 kg of NaCl and 80 kg of water, which we can then use to track losses or yields.

*   **CO3: Develop and solve basic material balance equations for the unit processes employed in process industries.**
    *   Similar to CO2, but even more critical for chemical reactions. Chemical reactions are governed by stoichiometry, which is based on moles. So, mole percent becomes paramount. If we know the composition of reactants in moles, we can use molar ratios to predict the amount of product formed.

*   **CO4: Develop and solve energy balance equations for various physical and chemical processes.**
    *   While this topic focuses on composition, it's indirectly related to energy balances. The heat of reaction, for example, is often given per mole of reactant. The specific heat capacity of a mixture depends on the composition and the properties of its components. So, knowing the composition accurately is a prerequisite for calculating heat effects.

*   **CO5: Implement and run software programs for solving stoichiometric problems.**
    *   Software tools often require input in specific formats, which might be weight fractions, mole fractions, or molarities. Understanding these units allows you to correctly input data into simulation software or solve problems using spreadsheets.

## Summary and Key Points to Remember

*   **Composition is Key:** Accurately describing the amount of each substance in a stream or mixture is fundamental to process calculations.
*   **Weight vs. Mole:** Always be aware of whether you are working with mass (weight percent) or number of molecules (mole percent). They are not interchangeable and lead to different numerical values. Use molar masses to convert between them.
*   **Context Matters:** The choice of concentration unit (Molarity, Normality, Molality, ppm) depends on the application:
    *   **Weight % / Mole %:** General composition for mixtures and streams, crucial for material balances.
    *   **Molarity (M):** For liquid solutions, common in lab and reaction stoichiometry (moles/Liter).
    *   **Normality (N):** For solutions involved in acid-base or redox reactions (equivalents/Liter), often simplifies calculations for specific reactions.
    *   **Molality (m):** For solutions where temperature-independent concentration is needed, or for colligative properties (moles/kg solvent).
    *   **ppm:** For very dilute concentrations.
*   **Units:** Pay close attention to units (g vs kg, L vs mL) when performing calculations.
*   **Textbook References:** Narayanan & Lakshmikutty and Bhatt & Vora are excellent resources for detailed examples and further practice. Himmelblau & Riggs provides a strong foundation in the fundamental principles.

This topic lays the groundwork. Mastering these different ways of expressing composition will make tackling material balances and other calculations much smoother.

---

## Sample Questions with Answers

**Q1. Conceptual Understanding:** Explain why mole percent is often more important than weight percent in chemical reaction stoichiometry.

**Answer:** Chemical reactions occur at the molecular level. The Law of Definite Proportions and the Law of Multiple Proportions, which govern chemical combination, are based on the ratio of atoms or molecules. Stoichiometric coefficients in balanced chemical equations represent the molar ratios in which reactants combine and products are formed. Therefore, to predict the amount of product formed from a given amount of reactant, or vice versa, we need to work with the number of moles, making mole percent (or mole fraction) the appropriate basis for these calculations. Weight percent, while useful for material handling, doesn't directly reflect the molecular ratios involved in a reaction.

**Q2. Calculation Practice:** A fertilizer solution contains 15% ammonium nitrate (NH₄NO₃) by weight. Calculate the mole percent of ammonium nitrate in the solution. Assume the rest of the solution is water (H₂O).

**Solution:**
Let's assume we have 100 kg of the fertilizer solution.
*   Mass of NH₄NO₃ = 15% of 100 kg = 15 kg
*   Mass of H₂O = 100 kg - 15 kg = 85 kg

Now, we need the molar masses:
*   Molar mass of NH₄NO₃: N (14.01) + H₄ (4 * 1.01) + N (14.01) + O₃ (3 * 16.00) = 14.01 + 4.04 + 14.01 + 48.00 = **80.06 g/mol**
*   Molar mass of H₂O: H₂ (2 * 1.01) + O (16.00) = 2.02 + 16.00 = **18.02 g/mol**

Calculate moles:
*   Moles of NH₄NO₃ = 15 kg / 80.06 g/mol = 15,000 g / 80.06 g/mol = **187.36 mol**
*   Moles of H₂O = 85 kg / 18.02 g/mol = 85,000 g / 18.02 g/mol = **4717.09 mol**

Total moles = 187.36 mol + 4717.09 mol = **4904.45 mol**

Calculate mole percent:
*   Mole percent of NH₄NO₃ = (Moles of NH₄NO₃ / Total moles) * 100
*   Mole percent of NH₄NO₃ = (187.36 mol / 4904.45 mol) * 100 = **3.82% mol/mol**

**Answer:** The mole percent of ammonium nitrate in the solution is 3.82%.

**Q3. Application of Concepts:** A 0.5 M solution of sulfuric acid (H₂SO₄) is prepared. What is its normality, assuming it reacts as a diprotic acid (donates two H⁺ ions)?

**Solution:**
We are given:
*   Molarity (M) = 0.5 M
*   The acid is diprotic, meaning it can donate 2 moles of H⁺ per mole of H₂SO₄.

The relationship between molarity and normality for acids is:
Normality (N) = Molarity (M) * (Number of equivalents per mole)
Normality (N) = Molarity (M) * (Number of H⁺ ions donated per molecule)

In this case, the number of H⁺ ions donated per molecule is 2.
N = 0.5 M * 2
N = **1 N**

**Answer:** The normality of the 0.5 M H₂SO₄ solution is 1 N.

**Q4. Identification of Correct Unit:** In environmental monitoring, the concentration of dissolved oxygen in water is often reported as ppm. What type of concentration basis is most likely being used here?

**Solution:**
When referring to the concentration of a substance dissolved in a solvent (like oxygen in water), and particularly when the concentration is very low, the most common basis is **mass per unit volume of solution** or **mass per unit mass of solution**. "ppm" is typically used to express **parts per million by weight**, often implying mass of solute per mass of solution. In the context of water quality, it's often understood as milligrams of solute per liter of water (mg/L), which is numerically equivalent to ppm for dilute aqueous solutions because the density of water is approximately 1 kg/L.

**Answer:** Parts per million by weight (or its equivalent for dilute solutions, mg/L).

**Q5. Critical Thinking:** You have a concentrated sulfuric acid solution that is 96% H₂SO₄ by weight. You need to prepare a 2 M solution. If the density of the concentrated acid is 1.84 g/mL, how would you proceed? (This question hints at future calculations but tests understanding of initial composition).

**Solution (Conceptual Outline):**
1.  **Determine Mass of Solute:** You need to figure out how much of the concentrated acid's weight is actually H₂SO₄.
2.  **Convert Mass to Moles:** Use the molar mass of H₂SO₄ to convert the mass of H₂SO₄ to moles.
3.  **Determine Required Volume of Concentrated Acid:** You know you want the final solution to be 2 M. This means you need 2 moles of H₂SO₄ per liter of final solution. By comparing the moles of H₂SO₄ you have (or need) to the moles of H₂SO₄ in a given volume of concentrated acid (using its density and weight percentage), you can calculate the volume of concentrated acid required.
4.  **Dilution:** Carefully add the calculated volume of concentrated acid to a volumetric flask and dilute it with water up to the mark to achieve the desired final volume.

This problem emphasizes that to prepare a solution of a specific molarity from a concentrated solution, you need to know its weight percentage composition, molar mass of solute, and density.

**Answer:** To prepare a 2 M H₂SO₄ solution from a 96% by weight solution with a density of 1.84 g/mL, you would first determine the mass of H₂SO₄ required per liter of final solution (2 mol/L * 98.08 g/mol = 196.16 g H₂SO₄/L). Then, using the weight percentage and density of the concentrated acid, you'd calculate the volume of concentrated acid that contains this mass of H₂SO₄. Finally, you would dilute this volume of concentrated acid with water to a final volume of 1 liter.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
