---
title: "Types of Polymerisation : Linear step polymerisation, Carothers equation, non linear step polymerization, Addition polymerization- Free radical polymerisarion,Cationic polymerization, anionic polymerization, Co- ordination polymerization, Co polymerisation, different types of copolymers, alternating, random, block and graft copolymer, copolymerization drift, derivation of copolymer equation."
subject: "POLYMERS & POLYMERISATION PRINCIPLES"
module: "Module 3: Types of Polymerisation : Linear step polymerisation, Carothers equation, non linear step polymerization, Addition polymerization"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e83a1b"
status: "completed"
scrapedAt: "2026-05-20T17:46:39.909Z"
---
# Module 3: Types of Polymerization

Welcome, everyone, to Module 3 of our journey into the fascinating world of Polymers and Polymerisation Principles! In this module, we're going to delve into the different *ways* polymers are made. Think of it like recipes for creating these amazing long-chain molecules. We'll cover how they are built, the different building blocks involved, and the very fundamental equations that govern their formation.

Our main focus today will be on **Types of Polymerisation**, specifically exploring **Linear Step Polymerisation**, the crucial **Carothers Equation**, **Non-linear Step Polymerisation**, and various forms of **Addition Polymerisation**. We’ll also unpack the intricacies of **Copolymerisation**, including different types of copolymers, the concept of copolymerization drift, and even derive a key equation that helps us understand how these mixed chains are formed.

By the end of this module, you’ll have a solid grasp on how different polymerization techniques work, how to represent the structures of simple polymers (tying into **CO1** and **CO2**), and the foundational principles behind them.

---

## 1. Step-Growth Polymerisation: Building Chains Step-by-Step

Let’s start with a fundamental concept: how do polymers actually grow? There are two main mechanisms, and the first one we'll explore is **Step-Growth Polymerisation**, often also called **Condensation Polymerisation**.

### 1.1 Linear Step Polymerisation

Imagine building a long necklace, bead by bead, but each time you add a bead, you also release a tiny, unwanted particle – like a single grain of rice. That’s essentially what happens in linear step-growth polymerisation.

Here, the polymer chain grows by the reaction between functional groups on monomer units, or between functional groups on growing chains. These reactions typically involve the **elimination of a small molecule**, such as water (H₂O), HCl, or methanol.

**Key Characteristics:**

*   **Monomers:** Typically difunctional or polyfunctional molecules. Think of monomers with two reactive "hands" (functional groups).
*   **Reaction:** The reaction happens between these functional groups.
*   **By-product:** A small molecule is released in each step.
*   **Chain Growth:** Chains grow gradually by stepwise addition of monomer units. All molecular weights are present from the beginning, and the average molecular weight increases steadily throughout the reaction.
*   **Kinetics:** The reaction rate is often dependent on the concentration of functional groups.

**A Classic Example: Polyamides (Nylons)**

Think of making nylon. We often react a diamine (like hexamethylenediamine, with two -NH₂ groups) and a dicarboxylic acid (like adipic acid, with two -COOH groups).

```
    H₂N-(CH₂)₆-NH₂  +  HOOC-(CH₂)₄-COOH  ->  [-NH-(CH₂)₆-NH-CO-(CH₂)₄-CO-]n  +  n H₂O
    (Diamine)       (Dicarboxylic Acid)        (Polyamide - Nylon)           (Water)
```

Each time an amide bond (-CO-NH-) forms, a molecule of water is released. Initially, you have lots of monomer, some dimer, trimer, etc. As the reaction progresses, these smaller chains start to link up, and the average molecular weight slowly but surely increases.

This gradual growth is a hallmark of step-growth polymerization. It’s different from another type we’ll see later, where long chains pop into existence very quickly. This relates directly to **CO1** (structural requirements of polymerization) and **CO4** (basic principles of ionic polymerization, stereo-regularity, and copolymerization – step-growth is a foundational principle before we get to the others).

---

### 1.2 The Carothers Equation: Quantifying Molecular Weight

Now, how do we predict how long these polymer chains will get? This is where the brilliant work of Wallace Carothers comes in. He developed a way to relate the extent of reaction to the average degree of polymerization.

For a step-growth polymerization involving a single type of monomer with two identical functional groups (like A-A reacting with B-B where A and B are complementary functional groups, or a monomer A-B reacting with itself), the **Carothers Equation** is:

$$DP_n = \frac{1}{1 - p}$$

Where:
*   $DP_n$ is the **Number Average Degree of Polymerization**. This tells us, on average, how many monomer units are in each polymer chain.
*   $p$ is the **Extent of Reaction** (or conversion of functional groups). This is the fraction of functional groups that have actually reacted.

**Let's unpack this:**

*   If $p = 0.5$ (50% of functional groups have reacted), then $DP_n = \frac{1}{1 - 0.5} = \frac{1}{0.5} = 2$. On average, chains have only 2 monomer units.
*   If $p = 0.9$ (90% conversion), then $DP_n = \frac{1}{1 - 0.9} = \frac{1}{0.1} = 10$. Average chain length is 10 units.
*   If $p = 0.99$ (99% conversion), then $DP_n = \frac{1}{1 - 0.99} = \frac{1}{0.01} = 100$. Average chain length is 100 units.
*   If $p = 0.999$ (99.9% conversion), then $DP_n = \frac{1}{1 - 0.999} = \frac{1}{0.001} = 1000$.

**What this tells us (and why it's crucial for exams):**

To get high molecular weight polymers via step-growth, you need extremely high conversions ($p$ must be very close to 1). Even a small amount of unreacted functional groups can drastically limit the chain length. This is a common exam point – understanding the sensitivity of molecular weight to conversion in step-growth.

**Relating to CO3:** The Carothers equation directly helps us understand **average molecular weights** by linking them to the extent of reaction. We can even relate $DP_n$ to the number average molecular weight ($\bar{M}_n$) by multiplying by the molecular weight of the repeating unit ($M_0$): $\bar{M}_n = DP_n \times M_0$.

---

### 1.3 Non-linear Step Polymerisation (Branched Polymers)

So far, we've talked about building straight chains (linear). But what if our building blocks have more than two "hands"?

If we use monomers that are **trifunctional** or **tetrafunctional** (or even higher), we introduce the possibility of branching. Instead of just A-A reacting with B-B to make linear chains, imagine a monomer like glycerol, which has three -OH groups.

If we react glycerol with a dicarboxylic acid, one glycerol molecule can react with three different growing chains, creating a junction point. This leads to **non-linear** or **branched** polymers.

**Key Features of Non-linear Step Polymerisation:**

*   **Branching Points:** Introduction of branch points where three or more chains connect.
*   **Network Formation:** If the branching becomes extensive enough, it can lead to a **cross-linked network** structure. Initially, this might be a **thermoset** precursor that can be molded, but once heated or cured, the extensive cross-linking makes it rigid and infusible. Think of epoxy resins or Bakelite.
*   **Gel Point:** A critical point in the reaction where the first macroscopic, insoluble, gel-like network forms. Before the gel point, the polymer is soluble and can flow. After the gel point, it’s an insoluble network.

This concept is vital for understanding the **different structures** polymers can take, linking to **CO1**. Imagine making a three-dimensional spiderweb versus a single strand of thread – that's the difference between linear and non-linear polymerization.

---

## 2. Addition Polymerisation: Building Chains Rapidly

Now, let's switch gears to the second major mechanism: **Addition Polymerisation**. Unlike step-growth where small molecules are eliminated, addition polymerization involves the direct joining of monomers without the loss of any atoms. It's like snapping together LEGO bricks where the bricks themselves are the entire structure.

**Key Characteristics:**

*   **Monomers:** Typically contain double or triple bonds (unsaturated monomers). Think of molecules like ethylene (CH₂=CH₂) or vinyl chloride (CH₂=CHCl).
*   **Mechanism:** Involves the formation of reactive intermediates (like free radicals, ions, or organometallic species) that propagate by adding monomer units.
*   **Chain Growth:** Polymer chains grow very rapidly, often reaching high molecular weights early in the reaction. Most of the monomer is consumed in the later stages.
*   **No By-product:** No small molecules are eliminated.
*   **Initiation, Propagation, Termination:** The process generally involves these three distinct steps.

Addition polymerization is what creates most of the common plastics we use daily – polyethylene, polypropylene, PVC, polystyrene, etc. This directly addresses **CO4** by explaining a major polymerization principle.

Let’s break down the different types of addition polymerization.

---

### 2.1 Free Radical Polymerisation

This is perhaps the most common and versatile type of addition polymerization. It's initiated by **free radicals**.

**What is a Free Radical?**
A free radical is a species with an unpaired electron, making it highly reactive and unstable. Think of it as a chemical "matchstick" that's eager to start a reaction.

**The Mechanism (Simplified):**

1.  **Initiation:**
    *   An **initiator** molecule (like benzoyl peroxide or AIBN) is heated or exposed to UV light.
    *   The initiator breaks down to form free radicals (e.g., R•).
    *   This radical then attacks the double bond of a monomer molecule (e.g., M), creating a new, larger radical.
    ```
        Initiator -> 2 R•
        R• + M -> R-M•
    ```

2.  **Propagation:**
    *   The monomer radical (R-M•) reacts with another monomer molecule, adding it to the chain and regenerating a radical at the end of the new, longer chain.
    *   This continues, adding thousands of monomer units in rapid succession.
    ```
        R-M• + M -> R-M-M•
        R-(M)n-M• + M -> R-(M)n-M-M•
    ```
    This is like a "chain reaction" where each step creates the species needed for the next step.

3.  **Termination:**
    *   The chain growth stops when two growing radicals combine or react.
    *   Common termination mechanisms are **Combination** (two radicals join to form a single, stable chain) and **Disproportionation** (one radical abstracts a hydrogen atom from another, forming one saturated and one unsaturated chain end).
    ```
        R-(M)n-M• + R'-(M)m-M• -> R-(M)n-M-M-(M)m-M-R'  (Combination)
        R-(M)n-M• + R'-(M)m-M• -> R-(M)n-M-H + R'-(M)m=M  (Disproportionation)
    ```

**Everyday Examples:**
*   **Polyethylene:** Made from ethylene gas (CH₂=CH₂).
*   **Polypropylene:** Made from propylene (CH₃-CH=CH₂).
*   **Polyvinyl Chloride (PVC):** Made from vinyl chloride (CH₂=CHCl). Used in pipes, window frames, flooring.
*   **Polystyrene:** Made from styrene (Ph-CH=CH₂). Used in disposable cups, insulation foam.

**Important Notes for Exams:**
*   Understand the role of the initiator.
*   Be familiar with the three steps: initiation, propagation, termination.
*   Recognize that chain transfer reactions can also occur, where the growing radical abstracts an atom from another molecule (solvent, monomer, or polymer chain), terminating one chain but starting another. This is how branching can occur in free radical polymerization (e.g., in Low-Density Polyethylene - LDPE).

---

### 2.2 Cationic Polymerisation

This type of addition polymerization is initiated by **cations** (positively charged species).

**The Mechanism:**

1.  **Initiation:**
    *   Requires a strong Brønsted acid (e.g., H₂SO₄, HClO₄) or a Lewis acid (e.g., BF₃, AlCl₃, TiCl₄) in the presence of a co-initiator (like water).
    *   The acid or Lewis acid complex abstracts an electron or a hydride ion from the monomer or an initiator molecule, generating a carbocation.
    ```
        Initiator (e.g., BF₃) + Co-initiator (H₂O) -> H⁺[BF₃OH]⁻ (or similar cationic species)
        H⁺[BF₃OH]⁻ + Monomer (e.g., Isobutylene) ->  [Monomer]⁺ + [BF₃OH]⁻
    ```
    Monomers that can stabilize a positive charge (like those with electron-donating groups adjacent to the double bond) are good candidates for cationic polymerization.

2.  **Propagation:**
    *   The carbocation attacks the double bond of another monomer, extending the chain and regenerating the carbocation at the end.
    ```
        [Monomer]⁺ + M -> [M-M]⁺
        [M-(M)n]⁺ + M -> [M-(M)n-M]⁺
    ```

3.  **Termination:**
    *   Termination occurs when the carbocation loses a proton (deprotonation) or reacts with a counter-ion or impurity.
    ```
        [M-(M)n-M]⁺ + Counter-ion -> [M-(M)n-M] + Neutral species
    ```
    Chain transfer by hydride ion abstraction is also common.

**Examples:**
*   **Polyisobutylene (PIB):** Used in sealants, adhesives, chewing gum. Isobutylene is very stable as a carbocation.
*   **Butyl Rubber:** A copolymer of isobutylene and a small amount of isoprene.

**Key Points for Exams:**
*   Requires monomers that can form stable carbocations.
*   Sensitive to impurities, especially water, which can act as a co-initiator.
*   Often carried out at low temperatures to prevent side reactions and control molecular weight.

---

### 2.3 Anionic Polymerisation

Here, the active species is an **anion** (a negatively charged species).

**The Mechanism:**

1.  **Initiation:**
    *   Requires a strong nucleophile or an organometallic compound as an initiator. Common initiators include alkali metals (Li, Na, K), organolithium compounds (like n-butyllithium), or Grignard reagents.
    *   The initiator adds to the monomer, creating a carbanion.
    ```
        Monomer (e.g., Styrene) + Initiator (e.g., n-BuLi) ->  Bu-[Monomer]⁻ Li⁺
    ```
    Monomers that can stabilize a negative charge (e.g., those with electron-withdrawing groups adjacent to the double bond, like acrylonitrile or methyl methacrylate) are suitable.

2.  **Propagation:**
    *   The carbanion attacks another monomer, extending the chain and regenerating the carbanion at the end.
    ```
        Bu-[Monomer]⁻ Li⁺ + M -> Bu-[M-M]⁻ Li⁺
        Bu-[M-(M)n]⁻ Li⁺ + M -> Bu-[M-(M)n-M]⁻ Li⁺
    ```
    A special case here is **"Living" Polymerisation**. If there are no termination or chain transfer steps, the polymer chain end remains an active anion even after all monomer is consumed. If you add more monomer, the chains will continue to grow. This allows for precise control over molecular weight and the synthesis of block copolymers.

3.  **Termination:**
    *   In "living" anionic polymerization, termination can be achieved by adding a terminating agent (a proton source like water or alcohol, or an electrophile).
    ```
        Bu-[M-(M)n-M]⁻ Li⁺ + H₂O -> Bu-[M-(M)n-M]-H + LiOH
    ```
    Otherwise, impurities that can react with carbanions (like CO₂ or oxygen) will terminate the chains.

**Examples:**
*   **Polystyrene:** Can be made by anionic polymerization, leading to better control over molecular weight.
*   **Polybutadiene, Polyisoprene:** Used in synthetic rubbers.
*   **Butyl Rubber:** Can also be made anionically.

**Key Points for Exams:**
*   Requires monomers that can stabilize negative charge.
*   Highly sensitive to impurities (protic solvents, oxygen, CO₂) that will quench the carbanion.
*   Leads to very narrow molecular weight distribution (low polydispersity) and the possibility of "living" polymerization.

---

### 2.4 Coordination Polymerisation (Ziegler-Natta Polymerisation)

This method revolutionized polymer synthesis, particularly for polyolefins like polyethylene and polypropylene, enabling precise control over **stereoregularity** (the arrangement of side groups along the polymer chain).

**What is Stereoregularity?**
Imagine a string of beads with a specific pattern. In polymers, this pattern relates to the spatial arrangement of the pendant groups (e.g., the -CH₃ group in polypropylene).
*   **Atactic:** Random arrangement of side groups.
*   **Isotactic:** All side groups are on the same side of the polymer backbone.
*   **Syndiotactic:** Side groups alternate regularly from one side to the other.

Coordination polymerization, often using **Ziegler-Natta catalysts**, allows us to make highly isotactic or syndiotactic polymers, which have significantly different physical properties (like higher melting points and crystallinity) compared to atactic polymers.

**The Mechanism (Simplified):**

*   **Catalyst System:** Typically consists of a transition metal compound (e.g., titanium compounds like TiCl₄, TiCl₃) and an organoaluminum compound (e.g., Al(C₂H₅)₃).
*   **Initiation/Propagation:** The monomer inserts between the transition metal atom and an alkyl group attached to it. This insertion happens in a stereoregular manner, dictated by the catalyst structure.
    ```
        Catalyst-M + CH₂=CHR -> Catalyst-CH₂-CHR-M
        Catalyst-CH₂-CHR-M + CH₂=CHR -> Catalyst-CH₂-CHR-CH₂-CHR-M
    ```
    The key is that the monomer approaches the catalyst in a specific orientation, leading to stereoregular addition.

**Examples:**
*   **High-Density Polyethylene (HDPE):** Made using Ziegler-Natta catalysts, leading to linear, crystalline polyethylene with excellent strength.
*   **Isotactic Polypropylene:** Achieved through Ziegler-Natta catalysis, making it a strong, melt-processable plastic.

**Key Points for Exams:**
*   Crucial for controlling stereoregularity.
*   Uses specific transition metal catalysts.
*   Enables the production of highly crystalline polymers.
*   Links directly to **CO4** (stereo-regularity) and **CO5** (comparing techniques).

---

## 3. Copolymerisation: Blending Monomers

So far, we’ve mostly discussed making polymers from a single type of monomer. But what happens when we combine two or more different monomers in the polymerization process? That’s **copolymerization**, and it’s a powerful way to create materials with tailored properties.

Think of it like making a fruit salad. You can have a salad of just apples, or you can mix apples, bananas, and grapes to get a completely new flavor and texture. Similarly, by combining different monomers, we can create polymers with properties that are intermediate to, or entirely different from, the homopolymers of the individual monomers.

### 3.1 Different Types of Copolymers

Based on how the different monomer units are arranged along the polymer chain, we classify copolymers into several types:

*   **Alternating Copolymers:** Monomer units alternate in a regular pattern, like A-B-A-B-A-B. This usually happens when the monomers have a strong tendency to react with each other.
    *   *Example:* A copolymer of styrene and maleic anhydride.

*   **Random Copolymers:** Monomer units are arranged randomly along the chain, like A-A-B-B-A-B-A-A-B. The probability of finding a particular monomer unit depends on its relative concentration and reactivity.
    *   *Example:* Styrene-butadiene random copolymers used in some types of synthetic rubber.

*   **Block Copolymers:** Long sequences (blocks) of one monomer type are joined to long sequences of another monomer type, like A-A-A-A-A-B-B-B-B-B. These can have interesting phase-separated morphologies, acting like molecularly-sized surfactants.
    *   *Example:* Styrene-butadiene-styrene (SBS) triblock copolymer, used in impact-resistant plastics and adhesives.

*   **Graft Copolymers:** A main polymer chain is formed from one type of monomer, and side chains made from another type of monomer are attached to this main chain. Imagine a "backbone" with "branches" growing off it.
    *   *Example:* Rubber-modified polystyrene (high-impact polystyrene - HIPS), where a polybutadiene rubber forms the graft chains on a polystyrene backbone.

These different arrangements (**CO1** and **CO2** for structural formulas) directly influence the final properties of the material, linking to **CO5** for comparison.

### 3.2 Copolymerization Drift

When we copolymerize, especially in step-growth or radical addition polymerization, the composition of the growing chains can change over time. This is known as **copolymerization drift**.

**What happens?**
If monomer A is more reactive than monomer B, the growing chain will incorporate more A units initially. As monomer A gets depleted faster, the chain will start incorporating more of monomer B. This means the composition of the polymer chains formed early in the reaction will be different from those formed later.

**Consequences:**
*   **Compositional Heterogeneity:** The overall polymer sample might have a broad distribution of compositions.
*   **Property Variations:** Different batches of polymer or even different parts of the same batch might have slightly different properties.

**How to minimize drift?**
*   **Reactant Addition:** Slowly feeding the more reactive monomer into the reactor can help maintain a relatively constant monomer ratio.
*   **"Ideal" Copolymerization:** In some cases (though rare in practice), the reactivity ratios are such that the composition of the growing chain closely mirrors the composition of the monomer mixture.

### 3.3 Derivation of the Copolymer Equation (Fineman-Ross or Kéis-O'Driscoll)

Understanding how the composition of the copolymer relates to the composition of the monomer mixture requires a mathematical model. The most fundamental equation that describes this is the **Copolymer Equation**. Let's derive a simplified version often referred to as the **Fineman-Ross equation** or relating to the **Kéis-O'Driscoll treatment**.

Consider a copolymerization of two monomers, 1 and 2.
Let:
*   $M_1$ and $M_2$ be the monomer concentrations in the feed (mol/L).
*   $m_1$ and $m_2$ be the monomer concentrations in the growing chain ends or the copolymer being formed (mol/L, representing the composition of the polymer).
*   $r_1$ and $r_2$ be the **reactivity ratios**.

The reactivity ratio $r_1$ is defined as the ratio of the rate constant for adding a monomer of type 1 to a chain ending with 1 ($k_{11}$) to the rate constant for adding a monomer of type 2 to a chain ending with 1 ($k_{12}$).
$$r_1 = \frac{k_{11}}{k_{12}}$$
Similarly,
$$r_2 = \frac{k_{22}}{k_{21}}$$

Here:
*   $k_{11}$: Rate constant for the addition of monomer 1 to a radical ending in monomer 1 (1• + 1 -> 11•)
*   $k_{12}$: Rate constant for the addition of monomer 2 to a radical ending in monomer 1 (1• + 2 -> 12•)
*   $k_{21}$: Rate constant for the addition of monomer 1 to a radical ending in monomer 2 (2• + 1 -> 21•)
*   $k_{22}$: Rate constant for the addition of monomer 2 to a radical ending in monomer 2 (2• + 2 -> 22•)

Now, let's consider the rates of formation of different dyad sequences in the copolymer:
*   Rate of incorporation of monomer 2 into chains ending with 1: $Rate_{12} = k_{12} [1•][M_2]$
*   Rate of incorporation of monomer 1 into chains ending with 1: $Rate_{11} = k_{11} [1•][M_1]$

The ratio of monomer 1 to monomer 2 incorporated into the copolymer ($m_1/m_2$) is determined by the relative rates of these addition steps. For a steady-state process, the ratio of incorporated monomer units is given by:

$$\frac{m_1}{m_2} = \frac{M_1}{M_2} \frac{k_{11}[1•]}{k_{12}[1•] + k_{21}[2•] + k_{22}[2•][M_2]/[M_1]}$$

This is getting complicated. A more direct approach using steady-state assumption on the radical concentrations ([1•] and [2•]):
The rate of formation of 1• is equal to the rate of its consumption.
*   Formation: $k_{21}[2•][M_1]$
*   Consumption: $k_{11}[1•][M_1] + k_{12}[1•]$

So, $k_{21}[2•][M_1] = [1•](k_{11}[M_1] + k_{12})$.
Rearranging for $[1•]$: $[1•] = \frac{k_{21}[2•][M_1]}{k_{11}[M_1] + k_{12}}$

Similarly for 2•:
*   Formation: $k_{12}[1•]$
*   Consumption: $k_{22}[2•][M_2] + k_{21}[2•]$

So, $k_{12}[1•] = [2•](k_{22}[M_2] + k_{21})$.
Rearranging for $[2•]$: $[2•] = \frac{k_{12}[1•]}{k_{22}[M_2] + k_{21}}$

Now, let's consider the ratio of monomer units incorporated into the polymer, which is the ratio of the rates of formation of 11 and 12 dyads (and 21 and 22 dyads):

$$ \frac{m_1}{m_2} = \frac{Rate_{11} + Rate_{12}}{Rate_{22} + Rate_{21}} $$
This is still not the simplest form. Let's go back to basics:
The fraction of monomer 1 incorporated ($f_1$) and monomer 2 incorporated ($f_2$) is related to the rate at which monomer 1 is added to both types of growing chains versus the rate at which monomer 2 is added to both types of growing chains.

$$f_1 = \frac{m_1}{m_1 + m_2} = \frac{k_{11}[1•][M_1] + k_{21}[2•][M_2]}{k_{11}[1•][M_1] + k_{12}[1•][M_2] + k_{21}[2•][M_1] + k_{22}[2•][M_2]}$$
$$f_2 = \frac{m_2}{m_1 + m_2} = \frac{k_{12}[1•][M_2] + k_{22}[2•][M_1]}{k_{11}[1•][M_1] + k_{12}[1•][M_2] + k_{21}[2•][M_1] + k_{22}[2•][M_2]}$$

Using the steady-state condition $k_{12}[1•][M_2] = k_{21}[2•][M_1]$, which implies the rate of termination of 1• by 2 equals the rate of termination of 2• by 1, we can relate the concentrations of the radicals.
From $k_{12}[1•][M_2] = k_{21}[2•][M_1]$, we get $\frac{[1•]}{[2•]} = \frac{k_{21}[M_1]}{k_{12}[M_2]}$.

Substitute this into the equation for $f_1$:
$$f_1 = \frac{k_{11}[1•][M_1] + k_{21}[2•][M_2]}{k_{11}[1•][M_1] + k_{12}[1•][M_2] + k_{21}[2•][M_1] + k_{22}[2•][M_2]}$$
Divide numerator and denominator by $[2•]$:
$$f_1 = \frac{k_{11}\frac{[1•]}{[2•]}[M_1] + k_{21}[M_2]}{k_{11}\frac{[1•]}{[2•]}[M_1] + k_{12}\frac{[1•]}{[2•]}[M_2] + k_{21}[M_1] + k_{22}[M_2]}$$
Substitute $\frac{[1•]}{[2•]} = \frac{k_{21}[M_1]}{k_{12}[M_2]}$:
$$f_1 = \frac{k_{11}\frac{k_{21}[M_1]}{k_{12}[M_2]}[M_1] + k_{21}[M_2]}{k_{11}\frac{k_{21}[M_1]}{k_{12}[M_2]}[M_1] + k_{12}\frac{k_{21}[M_1]}{k_{12}[M_2]}[M_2] + k_{21}[M_1] + k_{22}[M_2]}$$
Simplify and rearrange, dividing numerator and denominator by $k_{21}[M_1][M_2]$:
$$f_1 = \frac{\frac{k_{11}}{k_{12}}\frac{[M_1]}{[M_2]}[M_1] + [M_2]}{\frac{k_{11}}{k_{12}}\frac{[M_1]}{[M_2]}[M_1] + \frac{k_{21}}{k_{12}}[M_1] + \frac{k_{21}}{k_{12}}\frac{[M_1]}{[M_2]}[M_2] + \frac{k_{22}}{k_{12}}\frac{[M_1]}{[M_2]}[M_2]}$$
Let's use $r_1 = k_{11}/k_{12}$ and $r_2 = k_{22}/k_{21}$. We also know $k_{21}/k_{12}$ relates to the reactivities when reacting with the *other* monomer type.
A simpler derivation leads to the **Mayo-Lewis equation** (often considered more general):

$$\frac{m_1}{m_2} = \frac{M_1}{M_2} \left( \frac{r_1 M_1 + M_2}{M_1 + r_2 M_2} \right)$$

Here, $m_1/m_2$ is the ratio of monomer units in the copolymer, and $M_1/M_2$ is the ratio of monomers in the feed.

**Let's express this in terms of mole fractions:**
Let $F_1 = M_1/(M_1+M_2)$ be the mole fraction of monomer 1 in the feed.
Let $f_1 = m_1/(m_1+m_2)$ be the mole fraction of monomer 1 in the copolymer.
Then $F_2 = 1-F_1$ and $f_2 = 1-f_1$.
Also, $M_1/M_2 = F_1/(1-F_1)$ and $m_1/m_2 = f_1/(1-f_1)$.

Substituting these into the Mayo-Lewis equation:
$$\frac{f_1}{1-f_1} = \frac{F_1}{1-F_1} \left( \frac{r_1 F_1 + (1-F_1)}{F_1 + r_2 (1-F_1)} \right)$$

This is the fundamental copolymer composition equation. It allows us to predict the composition of the copolymer ($f_1$) based on the feed composition ($F_1$) and the reactivity ratios ($r_1, r_2$). This is essential for designing copolymerization processes to achieve desired properties, directly impacting **CO4** and **CO5**.

**What the equation tells us:**
*   **Ideal Copolymerization:** If $r_1 = r_2 = 1$, then $f_1 = F_1$. The copolymer composition always matches the feed composition.
*   **Alternating Tendency:** If $r_1 < 1$ and $r_2 < 1$ (and $r_1 r_2 < 1$), there's a tendency to form alternating copolymers.
*   **Block Tendency:** If $r_1 > 1$ and $r_2 > 1$, there's a tendency to form homopolymer blocks.
*   **Random Tendency:** If $r_1 \approx 1$ and $r_2 \approx 1$, the copolymerization is close to random.

---

## Module Summary and Key Takeaways

We've covered a lot of ground today! Let's recap the core concepts:

*   **Step-Growth Polymerisation:** Builds chains step-by-step with elimination of small molecules. High conversion is needed for high molecular weight (Carothers Equation: $DP_n = 1/(1-p)$). Trifunctional monomers lead to branching and networks (non-linear).
*   **Addition Polymerisation:** Joins monomers directly, often via double bonds, involving reactive intermediates.
    *   **Free Radical:** Initiated by radicals, common for many plastics.
    *   **Cationic:** Initiated by cations, requires stable carbocations.
    *   **Anionic:** Initiated by anions, sensitive to impurities, can be "living."
    *   **Coordination:** Uses specific catalysts (Ziegler-Natta) for stereoregular polymers like HDPE and isotactic polypropylene.
*   **Copolymerisation:** Combining different monomers to tailor properties. Types include alternating, random, block, and graft copolymers.
*   **Copolymer Equation (Mayo-Lewis):** Relates copolymer composition to feed composition using reactivity ratios ($r_1, r_2$).

Remember these classifications and mechanisms! They are the foundation for understanding how a vast range of polymers are synthesized and how their properties are controlled. Understanding the role of initiators, reaction conditions, and monomer structure is key.

---

## Sample Questions and Answers

Here are some questions to test your understanding, covering the key concepts and their application:

**Q1. For a linear step-growth polymerisation, what is the minimum conversion required to achieve a number-average degree of polymerisation of 100?**

**Answer:**
We use the Carothers equation: $DP_n = \frac{1}{1 - p}$.
We are given $DP_n = 100$.
So, $100 = \frac{1}{1 - p}$.
Rearranging, $1 - p = \frac{1}{100} = 0.01$.
Therefore, $p = 1 - 0.01 = 0.99$.
**Answer: 99% conversion is required.** This highlights the sensitivity of DP to conversion in step-growth.

**Q2. Explain why control of stereoregularity is important in polypropylene synthesis.**

**Answer:**
Stereoregularity refers to the spatial arrangement of the methyl (-CH₃) groups along the polypropylene backbone.
*   **Atactic polypropylene** (random arrangement) is amorphous, soft, and has a low melting point, making it unsuitable for many applications.
*   **Isotactic polypropylene** (all methyl groups on the same side) allows the polymer chains to pack closely together, forming crystalline regions. This results in a material that is strong, rigid, has a higher melting point, and is easily processed into fibers and molded objects.
Coordination polymerization (like Ziegler-Natta) is crucial for achieving isotactic polypropylene, demonstrating the importance of polymerization technique for material properties (**CO4**, **CO5**).

**Q3. Compare and contrast Free Radical Polymerisation and Anionic Polymerisation, highlighting at least two key differences.**

**Answer:**
Here's a comparison:

| Feature            | Free Radical Polymerisation                                     | Anionic Polymerisation                                                                 |
| :----------------- | :-------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **Initiating Species** | Free Radicals (neutral species with unpaired electrons)       | Anions (negatively charged species)                                                    |
| **Monomer Suitability** | Monomers with double bonds, versatile (e.g., ethylene, vinyl chloride) | Monomers with electron-withdrawing groups that stabilize negative charge (e.g., styrene, dienes) |
| **Sensitivity to Impurities** | Relatively less sensitive to polar impurities, but affected by radical scavengers. | Highly sensitive to protic impurities (water, alcohols), CO₂, oxygen which terminate the chain. |
| **Chain Control**  | Generally leads to broader molecular weight distribution. Chain transfer is common. | Can lead to "living" polymerization with very narrow molecular weight distribution (low polydispersity) and controlled architecture (block copolymers). |
| **Initiator Examples** | Benzoyl peroxide, AIBN, peroxides.                           | Organolithiums (n-BuLi), alkali metals (Na), Grignard reagents.                        |

This question tests the understanding of different addition polymerization mechanisms and their practical implications (**CO5**).

**Q4. What is a block copolymer, and how might it be useful?**

**Answer:**
A block copolymer is a polymer composed of two or more different homopolymer sequences (blocks) linked together end-to-end. For example, a chain might be ...AAAAA-BBBBB-AAAAA... (ABA triblock).

**Usefulness:**
Block copolymers can exhibit **microphase separation**. The different blocks tend to aggregate into distinct domains, similar to how oil and water separate. This can create unique morphologies with properties of both constituent polymers. A common example is **Styrene-Butadiene-Styrene (SBS) triblock copolymer**. The polystyrene blocks are glassy and hard at room temperature, while the polybutadiene blocks are rubbery and flexible. By controlling the relative amounts and arrangement of these blocks, SBS can be used as a thermoplastic elastomer – it behaves like a rubber (flexible) but can be processed like a plastic (meltable and moldable). It's used in shoe soles, tires, and adhesives.

This relates to **CO1** (structural requirements) and **CO2** (illustrating structures).

**Q5. If in a copolymerization, monomer 1 (vinyl chloride) has $r_1=0.2$ and monomer 2 (vinyl acetate) has $r_2=0.2$. If the initial feed is 50 mol% vinyl chloride and 50 mol% vinyl acetate, will the composition of the polymer formed initially be closer to pure vinyl chloride, pure vinyl acetate, or a random mixture? Explain why.**

**Answer:**
We use the Mayo-Lewis equation: $\frac{f_1}{1-f_1} = \frac{F_1}{1-F_1} \left( \frac{r_1 F_1 + (1-F_1)}{F_1 + r_2 (1-F_1)} \right)$.
Given: $F_1 = 0.5$, $F_2 = 0.5$, $r_1 = 0.2$, $r_2 = 0.2$.

Substitute the values:
$\frac{f_1}{1-f_1} = \frac{0.5}{0.5} \left( \frac{0.2 \times 0.5 + 0.5}{0.5 + 0.2 \times 0.5} \right)$
$\frac{f_1}{1-f_1} = 1 \left( \frac{0.1 + 0.5}{0.5 + 0.1} \right)$
$\frac{f_1}{1-f_1} = \frac{0.6}{0.6} = 1$

If $\frac{f_1}{1-f_1} = 1$, then $f_1 = 1 - f_1$, which means $2f_1 = 1$, so $f_1 = 0.5$.
**Answer: The initial composition of the polymer will be approximately 50 mol% vinyl chloride and 50 mol% vinyl acetate (a random mixture).**

**Explanation:** When $r_1 = r_2 = 0.2$, this indicates a strong tendency for alternating copolymerization. Monomer 1 prefers to add to a radical ending in monomer 2 ($k_{12}$ is relatively large compared to $k_{11}$), and monomer 2 prefers to add to a radical ending in monomer 1 ($k_{21}$ is relatively large compared to $k_{22}$). This leads to a copolymer composition that closely follows the feed composition, resulting in a random or alternating-like structure. This directly relates to understanding reactivity ratios and copolymer composition (**CO4**, **CO5**).

---
This concludes our session on Types of Polymerisation. Make sure to review these notes and practice applying the concepts, especially the Carothers and Copolymer equations!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
