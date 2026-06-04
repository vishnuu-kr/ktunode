---
title: "Material Balance for unit processes - Definition of terms - limiting reactant, excess reactant, percentage yield, conversion, selectivity"
subject: "PROCESS CALCULATIONS"
module: "Module 3: Material Balance for unit processes "
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e83a96"
status: "completed"
scrapedAt: "2026-05-20T17:47:21.354Z"
---
# PROCESS CALCULATIONS - MODULE 3: MATERIAL BALANCE FOR UNIT PROCESSES

## Introduction: From Unit Operations to Unit Processes

Welcome back, everyone! In our previous discussions, we've extensively covered **Unit Operations**, which are physical steps in a chemical process, like distillation, evaporation, or filtration. Think of them as the "physical transformations" in a plant. Today, we're diving into **Unit Processes**. What's the difference?

A **Unit Process**, on the other hand, involves a chemical transformation. It’s where a chemical reaction occurs, changing one set of chemical compounds into another. Examples include oxidation, reduction, esterification, or polymerization. And just as we need to track the flow of materials in physical operations, it's even *more* critical to do so when chemical reactions are involved. Why? Because chemical reactions don't always go to completion, and sometimes, we want to favor the formation of one product over another. This is where our new set of crucial terms comes in.

Our journey today is all about understanding these terms: **limiting reactant, excess reactant, percentage yield, conversion, and selectivity**. These concepts are fundamental to mastering material balances in chemical reactions, and they directly help us achieve **Course Outcome 2 (CO2)** and **Course Outcome 3 (CO3)** – developing and solving material balance equations for both unit operations *and* unit processes. Understanding these will allow us to predict how much product we can *actually* get from a process, not just what the stoichiometry *theoretically* suggests.

Let's imagine we're baking cookies. The recipe calls for 2 cups of flour and 1 cup of sugar. If you have 4 cups of flour but only 1 cup of sugar, you can only make as many cookies as your sugar allows. The sugar runs out first, limiting the number of cookies you can bake. That sugar is your "limiting reactant" in this analogy. We'll explore this in detail with chemical examples.

## Understanding Reaction Stoichiometry: The Foundation

Before we define our key terms, let's quickly revisit the bedrock: **stoichiometry**. Remember, stoichiometry is the quantitative relationship between reactants and products in a chemical reaction, derived from the balanced chemical equation. It tells us the exact molar ratios in which substances react and are formed.

For instance, consider the synthesis of ammonia:
N₂(g) + 3H₂(g) → 2NH₃(g)

This equation tells us that 1 mole of nitrogen reacts with 3 moles of hydrogen to produce 2 moles of ammonia. This perfect 1:3:2 molar ratio is the ideal. In reality, chemical reactions often don't behave this ideally. This is precisely why we need the concepts we're about to discuss.

---

## Defining Key Terms in Chemical Reactions

### 1. Limiting Reactant (or Limiting Reagent)

Let's go back to our cookie analogy. In the baking scenario with 4 cups of flour and 1 cup of sugar, the sugar is the limiting reactant. Why? Because it's the ingredient that will be *completely consumed* first, thereby determining the maximum amount of cookies (the product) that can be produced. Once the sugar is gone, you can't make any more cookies, even if you have plenty of flour left.

In a chemical reaction, the **limiting reactant** is the reactant that is completely consumed first. It dictates the maximum possible yield of the products based on the stoichiometry of the reaction.

**How to Identify the Limiting Reactant:**

To find the limiting reactant in a chemical reaction, you need to compare the available moles of each reactant to the stoichiometric ratio required for the reaction. Here’s a common approach:

1.  **Convert all given quantities of reactants to moles.**
2.  **Use the stoichiometric coefficients from the balanced chemical equation to calculate the moles of *one* of the reactants that would be required to completely react with the *other* reactant.**
3.  **Alternatively, and often more straightforwardly:** For each reactant, calculate the *moles of product* that could be formed if that reactant were completely consumed. The reactant that produces the *least* amount of product is the limiting reactant.

Let's take a chemical example: the reaction between hydrogen and oxygen to form water.
2H₂(g) + O₂(g) → 2H₂O(l)

Suppose we have 10 moles of H₂ and 5 moles of O₂.

*   **Method 1 (Comparing reactant requirements):**
    *   According to stoichiometry, 1 mole of O₂ reacts with 2 moles of H₂.
    *   If we have 5 moles of O₂, we would need 5 moles O₂ * (2 moles H₂ / 1 mole O₂) = 10 moles of H₂ to react completely with all the O₂.
    *   We *have* exactly 10 moles of H₂. This suggests a perfect stoichiometric ratio, and both would be consumed simultaneously.

*   **Method 2 (Calculating product yield for each reactant):**
    *   If all 10 moles of H₂ react, how much H₂O can be formed?
        10 moles H₂ * (2 moles H₂O / 2 moles H₂) = 10 moles H₂O
    *   If all 5 moles of O₂ react, how much H₂O can be formed?
        5 moles O₂ * (2 moles H₂O / 2 moles H₂) = 10 moles H₂O

In this specific case, both reactants are present in the exact stoichiometric ratio. If, however, we had 12 moles of H₂ and 5 moles of O₂:

*   **Method 1:**
    *   To react with 5 moles of O₂, we need 5 moles O₂ * (2 moles H₂ / 1 mole O₂) = 10 moles of H₂.
    *   We have 12 moles of H₂, which is *more* than the 10 moles needed. So, H₂ is in excess.
    *   This means O₂ will be completely consumed. Therefore, O₂ is the limiting reactant.

*   **Method 2:**
    *   If all 12 moles of H₂ react: 12 moles H₂ * (2 moles H₂O / 2 moles H₂) = 12 moles H₂O.
    *   If all 5 moles of O₂ react: 5 moles O₂ * (2 moles H₂O / 2 moles H₂) = 10 moles H₂O.
    *   Since O₂ produces the *least* amount of H₂O (10 moles), O₂ is the limiting reactant.

This concept is crucial for **CO2** and **CO3** because it dictates the maximum theoretical output of our process. If you're aiming for a specific product quantity, you must ensure your limiting reactant is supplied in the correct amount.

### 2. Excess Reactant

Following logically from the limiting reactant, the **excess reactant** is simply any reactant that is *not* completely consumed when the reaction stops. It’s present in a greater amount than is required by the stoichiometry to react with the limiting reactant. In our cookie analogy, the flour would be the excess reactant.

**How to Calculate the Amount of Excess Reactant Remaining:**

1.  **Identify the limiting reactant.**
2.  **Calculate how much of the excess reactant is *consumed* by reacting completely with the limiting reactant.** Use the stoichiometric ratio for this.
3.  **Subtract the consumed amount from the initial amount of the excess reactant** to find out how much is left over.

Let's use the example of 12 moles of H₂ and 5 moles of O₂ reacting to form water (2H₂ + O₂ → 2H₂O):

*   We established O₂ is the limiting reactant (5 moles).
*   How much H₂ is consumed by 5 moles of O₂?
    5 moles O₂ * (2 moles H₂ / 1 mole O₂) = 10 moles H₂ consumed.
*   We started with 12 moles of H₂.
*   Amount of H₂ remaining = Initial H₂ - Consumed H₂
    = 12 moles - 10 moles = 2 moles of H₂ remaining.

So, H₂ is the excess reactant, and 2 moles of H₂ will be left unreacted.

Understanding excess reactants is important for process design. Sometimes, we intentionally use one reactant in excess to ensure that a more valuable or critical reactant is completely consumed. For example, in many organic reactions, an excess of a cheaper reagent is used to drive the reaction to completion for a more expensive or complex substrate. This is a practical application of stoichiometry that helps us optimize processes, directly impacting **CO2** and **CO3**.

### 3. Percentage Conversion

Now, let's talk about how "far" a reaction has proceeded. **Percentage conversion** measures the extent to which a reactant has been consumed in a reaction. It’s typically defined with respect to the *limiting reactant*.

The formula is:

$$ \text{Percentage Conversion (of Limiting Reactant)} = \left( \frac{\text{Moles of Limiting Reactant Reacted}}{\text{Initial Moles of Limiting Reactant}} \right) \times 100\% $$

Think of it like this: if you were supposed to eat 5 apples (your limiting "reactant" for the day!) and you’ve eaten 3, your conversion is (3/5) * 100% = 60%.

Let's revisit our H₂/O₂ example: 12 moles H₂ (excess) and 5 moles O₂ (limiting) reacting.
2H₂(g) + O₂(g) → 2H₂O(l)

*   We know O₂ is limiting, and we started with 5 moles of O₂.
*   We calculated that 5 moles of O₂ are consumed (because it's the limiting reactant and it reacts until it's gone).
*   So, the percentage conversion of O₂ is:
    $$ \left( \frac{5 \text{ moles O₂ reacted}}{5 \text{ moles O₂ initial}} \right) \times 100\% = 100\% $$
    In this case, the limiting reactant is fully converted.

What if the reaction didn't go to completion? Suppose we started with 5 moles of O₂ and only 4 moles of O₂ reacted.

*   Initial moles of O₂ = 5 moles
*   Moles of O₂ reacted = 4 moles
*   Percentage Conversion of O₂ = (4 moles / 5 moles) * 100% = 80%

**Important Note:** Conversion is always based on the *limiting reactant*. You can't have a conversion greater than 100%. If the question gives you amounts of both reactants, always identify the limiting one first before calculating conversion. This is a common exam point – failing to identify the limiting reactant first can lead to incorrect conversion calculations. This directly relates to our ability to quantify reaction progress, a key aspect of **CO3**.

### 4. Percentage Yield

This is where things can get a little nuanced, and it’s a concept that often trips students up. While conversion tells us how much of a reactant *reacted*, **percentage yield** tells us how much of the *desired product* we actually obtained compared to what we *theoretically* could have obtained.

The formula is:

$$ \text{Percentage Yield} = \left( \frac{\text{Actual Moles of Desired Product Obtained}}{\text{Theoretical Moles of Desired Product}} \right) \times 100\% $$

*   **Actual Yield:** This is the amount of product experimentally measured after the reaction is carried out. It’s what you *actually* collect in the lab or plant.
*   **Theoretical Yield:** This is the maximum amount of product that *could* be formed if the limiting reactant is completely consumed and there are no side reactions or losses. This is calculated from stoichiometry, using the limiting reactant.

Let's go back to our water formation: 12 moles H₂ (excess) and 5 moles O₂ (limiting).
2H₂(g) + O₂(g) → 2H₂O(l)

*   We already calculated the theoretical yield of H₂O from 5 moles of O₂:
    Theoretical yield of H₂O = 10 moles H₂O.
*   Now, suppose in our experiment, we only managed to collect 8 moles of H₂O.
*   Percentage Yield of H₂O = (8 moles H₂O actual / 10 moles H₂O theoretical) * 100% = 80%.

**Why is Percentage Yield often less than 100%?**

This is a crucial point for understanding real-world processes. Unlike conversion, which is about reactant disappearance, yield is about product formation. Several factors can reduce the actual yield:

*   **Incomplete Reaction:** The reaction might not reach completion, even if the limiting reactant is present.
*   **Side Reactions:** The reactants might react to form unwanted by-products.
*   **Equilibrium Limitations:** Some reactions are reversible and reach an equilibrium where not all reactants are converted.
*   **Losses during Handling and Purification:** Product can be lost during separation, filtration, drying, or transfer steps.

The concept of percentage yield is vital for economic viability. It tells us how efficiently our process is converting raw materials into the desired product. This directly informs our understanding of process efficiency and links to **CO2** and **CO3**. Often, exam questions will provide actual yield data and ask you to calculate percentage yield, or vice-versa, assuming a certain yield and asking for actual or theoretical amounts.

### 5. Selectivity

This is a more advanced concept, particularly important when a reactant can undergo *multiple* different reactions simultaneously, leading to different products. **Selectivity** measures the preference of a reaction for forming one desired product over another.

It's typically defined as the ratio of the rate of formation of the desired product to the rate of formation of the undesired product, or more commonly in terms of moles:

$$ \text{Selectivity} = \frac{\text{Moles of Desired Product Formed}}{\text{Moles of Undesired Product Formed}} $$

Or, in terms of conversion:

$$ \text{Selectivity} = \frac{\text{Conversion to Desired Product}}{\text{Conversion to Undesired Product}} $$

Let's imagine a scenario where reactant A can react to form product B (desired) or product C (undesired).
A → B (desired)
A → C (undesired)

Suppose we have a process where A reacts, and we get 10 moles of B and 2 moles of C.

*   Selectivity for B over C = (10 moles B) / (2 moles C) = 5.
    This means for every mole of C formed, 5 moles of B are formed.

Often, selectivity is expressed as a percentage if we are considering the distribution of products from a single reactant. For example, if a reactant can be converted to Product 1 or Product 2, and we are focused on the conversion to Product 1:

$$ \text{Selectivity} = \frac{\text{Moles of Reactant Converted to Desired Product}}{\text{Total Moles of Reactant Converted}} \times 100\% $$

This is sometimes called **fractional selectivity** or **selectivity factor**. However, the most common definition is the ratio of moles of desired product to undesired product.

**When is Selectivity critical?**

Selectivity is paramount in processes where multiple reaction pathways exist. Consider the oxidation of ethylene to ethylene oxide (desired) and carbon dioxide (undesired):
2C₂H₄ + O₂ → 2C₂H₄O (desired)
C₂H₄ + 3O₂ → 2CO₂ + 2H₂O (undesired)

If you want to maximize ethylene oxide production, you need a catalyst and conditions that favor the first reaction pathway. If the selectivity is low, a significant amount of ethylene will be wasted as CO₂, reducing overall efficiency and yield.

Understanding selectivity allows us to choose optimal reaction conditions (temperature, pressure, catalyst) to maximize the production of the desired product and minimize the formation of unwanted by-products. This is a core concept for process optimization and is directly relevant to **CO3**. It helps us move beyond just "how much reacted" to "how much of the *right thing* was made."

---

## Connecting Concepts to Course Outcomes

Let's quickly recap how these terms directly map to our course objectives:

*   **CO1 (Chemical Composition & Physical Quantities):** Understanding these terms requires a solid grasp of stoichiometry, which itself relies on knowing the chemical composition of reactants and products and their molar masses.
*   **CO2 & CO3 (Material Balances for Unit Operations & Processes):** This is the heart of it! Limiting reactant, excess reactant, conversion, and yield are all *essential* for setting up and solving material balance equations for chemical reactions. Without them, we can't accurately track material flow or predict product quantities in unit processes. Selectivity helps us define how the material *splits* into different product streams.
*   **CO4 (Energy Balances):** While this module focuses on material balances, understanding the extent of reaction (conversion, yield) is foundational for energy balances too, as reaction enthalpy depends on the amount of reactant consumed or product formed.
*   **CO5 (Software Implementation):** The logic used to calculate these quantities (identifying limiting reactant, calculating theoretical yield, etc.) is directly translated into algorithms for process simulation software.

---

## Illustrative Example: The Haber-Bosch Process

Let's tie all these concepts together with a real-world example: the Haber-Bosch process for ammonia synthesis.
N₂(g) + 3H₂(g) ⇌ 2NH₃(g)

This reaction is reversible, and typically, excess hydrogen is used to maximize ammonia production. Let's say we feed 100 kg of N₂ and 25 kg of H₂ into a reactor.

**Step 1: Convert to Moles**
*   Molar mass of N₂ ≈ 28 g/mol
*   Molar mass of H₂ ≈ 2 g/mol

*   Initial moles of N₂ = 100,000 g / 28 g/mol ≈ 3571 moles
*   Initial moles of H₂ = 25,000 g / 2 g/mol = 12,500 moles

**Step 2: Identify Limiting Reactant**
*   Stoichiometric ratio: 1 mole N₂ reacts with 3 moles H₂.
*   If we use all 3571 moles of N₂, we need: 3571 moles N₂ * (3 moles H₂ / 1 mole N₂) ≈ 10,713 moles H₂.
*   We have 12,500 moles of H₂, which is *more* than the 10,713 moles required.
*   Therefore, N₂ is the **limiting reactant**. H₂ is the **excess reactant**.

**Step 3: Calculate Theoretical Yield of NH₃**
*   From the stoichiometry, 1 mole of N₂ produces 2 moles of NH₃.
*   Theoretical moles of NH₃ = 3571 moles N₂ * (2 moles NH₃ / 1 mole N₂) ≈ 7142 moles NH₃.
*   Molar mass of NH₃ ≈ 17 g/mol
*   Theoretical yield of NH₃ (mass) = 7142 moles * 17 g/mol ≈ 121,414 g ≈ 121.4 kg NH₃.

**Step 4: Calculate Amount of Excess Reactant Consumed and Remaining**
*   Amount of H₂ consumed by 3571 moles of N₂:
    Moles of H₂ consumed = 3571 moles N₂ * (3 moles H₂ / 1 mole N₂) ≈ 10,713 moles H₂.
*   Amount of H₂ remaining (unreacted):
    Initial moles H₂ - Moles H₂ consumed = 12,500 moles - 10,713 moles ≈ 1787 moles H₂.

**Step 5: Calculate Percentage Conversion (of N₂)**
*   Assuming the reaction proceeds until the limiting reactant (N₂) is completely consumed *in theory*:
    Percentage Conversion of N₂ = (3571 moles N₂ reacted / 3571 moles N₂ initial) * 100% = 100%.
    *(Note: In a real Haber-Bosch process, conversion is much lower, around 10-20% per pass due to equilibrium limitations, and ammonia is continuously removed to drive the reaction forward.)*

**Step 6: Consider Percentage Yield and Selectivity**
*   Let's assume the actual process yielded 90 kg of NH₃.
*   Actual moles of NH₃ = 90,000 g / 17 g/mol ≈ 5294 moles NH₃.
*   **Percentage Yield:**
    Percentage Yield = (5294 moles actual / 7142 moles theoretical) * 100% ≈ 74.1%.
*   **Selectivity:** This becomes relevant if there were side reactions, e.g., N₂ + H₂ → N₂H₄ (hydrazine). If, for instance, 100 moles of N₂ reacted and produced 150 moles of NH₃ and 5 moles of N₂H₄, the selectivity for NH₃ over N₂H₄ would be 150/5 = 30.

This example illustrates how all these terms are interconnected and how they are used to analyze the performance of a chemical process.

---

## Conclusion and Key Takeaways

So, to wrap up today's session, remember these distinctions:

*   The **limiting reactant** is the one that runs out first and dictates the maximum theoretical product.
*   The **excess reactant** is what's left over after the limiting reactant is consumed.
*   **Conversion** measures how much of the limiting reactant *actually reacted*.
*   **Yield** measures how much of the desired product was *actually produced* compared to the theoretical maximum.
*   **Selectivity** tells us how well the reaction favors the desired product over unwanted by-products when multiple reaction pathways exist.

Mastering these terms is crucial for solving problems in chemical process calculations. They allow us to move from theoretical possibilities to practical realities, enabling us to design, analyze, and optimize chemical processes. Keep practicing with different examples, and don't hesitate to ask questions!

---

## Sample Questions with Answers

**Question 1 (Conceptual):** If you have 10 moles of A and 10 moles of B, and the reaction is A + 2B → C, which reactant is limiting? Explain why.

**Answer:**
First, we need to determine the stoichiometric ratio and compare it to the initial moles. The reaction A + 2B → C requires 1 mole of A for every 2 moles of B.

*   **If A is the limiting reactant:** 10 moles of A would require 10 moles A * (2 moles B / 1 mole A) = 20 moles of B. We only have 10 moles of B, so A cannot be the limiting reactant.
*   **If B is the limiting reactant:** 10 moles of B would require 10 moles B * (1 mole A / 2 moles B) = 5 moles of A. We have 10 moles of A, which is more than enough.

Therefore, B is the **limiting reactant** because it will be completely consumed first, and there isn't enough of it to react with all of reactant A.

**Question 2 (Calculation - Yield):** In the reaction P + Q → R, 50 g of P (MW = 50 g/mol) reacts with 75 g of Q (MW = 75 g/mol). The reaction produces 60 g of R (MW = 100 g/mol). Calculate the percentage yield of R.

**Answer:**
**Step 1: Convert to Moles**
*   Initial moles of P = 50 g / 50 g/mol = 1 mole
*   Initial moles of Q = 75 g / 75 g/mol = 1 mole

**Step 2: Identify Limiting Reactant**
*   Stoichiometric ratio: 1 mole P reacts with 1 mole Q.
*   We have 1 mole of P and 1 mole of Q. They are present in the exact stoichiometric ratio. Both P and Q will be consumed completely, and either can be considered the limiting reactant for theoretical yield calculation.

**Step 3: Calculate Theoretical Yield of R**
*   From the stoichiometry, 1 mole of P (or Q) produces 1 mole of R.
*   Theoretical moles of R = 1 mole.
*   Theoretical mass of R = 1 mole * 100 g/mol = 100 g.

**Step 4: Calculate Percentage Yield**
*   Actual yield of R = 60 g (given).
*   Percentage Yield = (Actual Yield / Theoretical Yield) * 100%
    Percentage Yield = (60 g / 100 g) * 100% = 60%.

The percentage yield of R is 60%.

**Question 3 (Conceptual - Selectivity):** A common industrial process involves the oxidation of methanol. Methanol can be oxidized to formaldehyde (desired product) or to carbon dioxide (undesired product). If the selectivity for formaldehyde is high, what does this imply about the reaction conditions and catalyst used?

**Answer:**
A high selectivity for formaldehyde implies that the chosen reaction conditions (temperature, pressure) and the specific catalyst used strongly favor the reaction pathway leading to formaldehyde over the pathway leading to carbon dioxide. This means the catalyst is efficient at guiding the reaction towards the desired product, minimizing the formation of the undesired by-product (CO₂). This is critical for maximizing the economic efficiency of the process, as it reduces the consumption of methanol for producing unwanted materials.

**Question 4 (Calculation - Conversion):** Consider the reaction 2A + B → 3C. If you start with 4 moles of A and 2 moles of B, and after the reaction, you find that 0.5 moles of B remain unreacted, what is the percentage conversion of A?

**Answer:**
**Step 1: Identify Limiting Reactant**
*   Stoichiometric ratio: 2 moles A react with 1 mole B.
*   Initial moles of A = 4 moles
*   Initial moles of B = 2 moles
*   If A is limiting: 4 moles A * (1 mole B / 2 moles A) = 2 moles B needed. We have exactly 2 moles of B. So, A and B are in stoichiometric proportion. Both can be used to determine conversion.

**Step 2: Determine Moles Reacted**
*   We are given that 0.5 moles of B remain unreacted.
*   Since B is not limiting (or both are in proportion), all of B is consumed up to its stoichiometric limit.
*   Moles of B reacted = Initial moles of B - Remaining moles of B
    Moles of B reacted = 2 moles - 0.5 moles = 1.5 moles of B.

Wait, this is a contradiction. If A and B are in stoichiometric proportion, both should be consumed fully if the reaction goes to completion. The problem states 0.5 moles of B remain. This implies that B is *not* the limiting reactant if we take the initial amounts, but the *fact* that B remains means the reaction stopped before B was fully consumed. However, conversion is typically calculated based on the limiting reactant.

Let's re-evaluate the problem statement. If A and B are in stoichiometric proportion (4 moles A : 2 moles B, which is 2:1, matching the reaction), and 0.5 moles of B *remain*, it means that the reaction did not go to completion for either reactant. In this scenario, we must pick a reactant to base conversion on. Usually, if there's no clear limiting reactant based on initial amounts, you can pick either *if* the problem doesn't specify. However, it's better to clarify.

Let's assume the problem implies that the reaction *stopped*, and we need to find the conversion of *A*, given that B is present in excess *relative to the amount of A that reacted*.

Let's assume B is in excess for the sake of calculating conversion of A.
If 0.5 moles of B remain, then moles of B reacted = 2 - 0.5 = 1.5 moles.
According to stoichiometry (2A + B → 3C), 1 mole of B reacts with 2 moles of A.
So, moles of A reacted = 1.5 moles B * (2 moles A / 1 mole B) = 3 moles of A.

We started with 4 moles of A.
Percentage Conversion of A = (Moles of A reacted / Initial moles of A) * 100%
Percentage Conversion of A = (3 moles / 4 moles) * 100% = 75%.

This result assumes B was in excess relative to the amount of A that actually reacted. If they were truly in stoichiometric proportion, then both would run out simultaneously. The presence of remaining B implies either B was in excess or equilibrium was reached. For conversion calculation, we stick to the definition.

*Self-Correction/Clarification*: The initial check showed A and B are in stoichiometric proportion (4 moles A : 2 moles B = 2:1 ratio). If the reaction went to completion, both would be consumed. The fact that B remains means the reaction did not go to completion. Conversion is defined as (Reactant Reacted / Initial Reactant). Since both A and B are in stoichiometric proportion, we can base the conversion on either reactant.
Let's use B:
Moles of B reacted = Initial B - Remaining B = 2 moles - 0.5 moles = 1.5 moles.
Percentage Conversion of B = (1.5 moles / 2 moles) * 100% = 75%.

Now, let's use A. If 1.5 moles of B reacted, how many moles of A reacted?
From stoichiometry, 2 moles A react with 1 mole B.
Moles of A reacted = 1.5 moles B * (2 moles A / 1 mole B) = 3 moles of A.
Percentage Conversion of A = (3 moles / 4 moles) * 100% = 75%.

Both give the same result, as expected when reactants are in stoichiometric proportion. The percentage conversion is 75%.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
