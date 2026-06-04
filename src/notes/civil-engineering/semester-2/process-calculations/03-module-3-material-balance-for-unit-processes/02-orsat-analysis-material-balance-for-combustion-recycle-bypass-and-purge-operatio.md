---
title: "Orsat analysis, Material Balance for combustion, Recycle, bypass and purge operations."
subject: "PROCESS CALCULATIONS"
module: "Module 3: Material Balance for unit processes "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912fb5"
status: "completed"
scrapedAt: "2026-05-20T18:38:17.416Z"
---
# Process Calculations: Module 3 - Material Balance for Unit Processes

Welcome back, everyone! In this module, we're diving deeper into the fascinating world of material balances, specifically focusing on **unit processes**. We've already covered the fundamentals, and now we're going to tackle some more complex scenarios that are absolutely critical in chemical engineering. Think about it: if we can't track where all the "stuff" is going in a chemical plant, how can we possibly control it, optimize it, or even design it safely?

Today, we'll be exploring three key areas: **Orsat Analysis**, **Material Balances for Combustion**, and the vital concepts of **Recycle, Bypass, and Purge operations**. These topics are not just theoretical; they are the backbone of understanding how chemical plants function and how we ensure efficiency and safety. They directly tie into our **Course Outcomes (COs)**, particularly **CO2** and **CO3**, which focus on developing and solving material balance equations for unit operations and processes. Understanding these will equip you to handle real-world chemical engineering problems.

Let's start by building our understanding from the ground up.

## Orsat Analysis: Unraveling the Products of Combustion

Have you ever wondered what happens after something burns? We know fuel and air react, but what exactly are the resulting gases? This is where **Orsat analysis** comes in. It's a technique used to determine the volumetric composition of exhaust gases (flue gas) from combustion processes.

Imagine you're at a barbeque. You throw charcoal (fuel) on the grill, and the air around it provides oxygen. You see smoke, but what's really in that smoke? Orsat analysis helps us quantify it. It tells us the percentages of nitrogen ($N_2$), oxygen ($O_2$), carbon monoxide ($CO$), carbon dioxide ($CO_2$), and potentially other gases like sulfur dioxide ($SO_2$) in the flue gas.

### The "Why" Behind Orsat Analysis

Why is this important? Well, for a combustion process, we want to ensure complete combustion of our fuel. Incomplete combustion leads to wasted fuel (producing $CO$ instead of $CO_2$) and potential safety hazards. Orsat analysis is our diagnostic tool. It helps us:

*   **Determine the degree of combustion:** Is it complete or incomplete?
*   **Assess the amount of excess air used:** Too much excess air can lead to energy loss as hot flue gases carry away heat. Too little can lead to incomplete combustion.
*   **Monitor for pollutants:** Gases like $CO$ and $SO_2$ are indicators of undesirable byproducts.

**Remember this:** Orsat analysis measures the composition of dry flue gas, meaning water vapor ($H_2O$) is removed before analysis. This simplifies the calculations considerably.

### How Orsat Analysis Works (The Concept, Not the Lab Manual!)

While we won't be performing the experiment here, understanding the principle is crucial for material balances. The Orsat apparatus uses a series of gas burettes filled with specific chemical absorbents. Each absorbent selectively removes a particular gas from the sample.

1.  A known volume of flue gas is taken.
2.  It's passed through an absorbent that removes $CO_2$. The volume decrease is recorded.
3.  The remaining gas is passed through an absorbent that removes $O_2$. The volume decrease is noted.
4.  Finally, it's passed through an absorbent that removes $CO$. The volume decrease is noted.
5.  The gas left is primarily nitrogen ($N_2$).

The volumes of the absorbed gases, when subtracted from the initial volume, give us the composition of the dry flue gas.

### Connecting Orsat to Material Balances (CO2, CO3)

This is where it gets exciting! Orsat analysis provides us with crucial data points for our material balance calculations in combustion. If we know the composition of the flue gas (e.g., 10% $CO_2$, 5% $O_2$, 1% $CO$, 84% $N_2$), we have a direct handle on the reaction products.

Let's say we're burning methane ($CH_4$) with air. The ideal, complete combustion reaction is:

$CH_4 + 2O_2 \rightarrow CO_2 + 2H_2O$

If our Orsat analysis shows a significant amount of $CO$ in the flue gas, it tells us the combustion wasn't complete. This means our material balance must account for both $CO_2$ and $CO$ as products of carbon.

**Example Analogy:** Imagine you're baking cookies. The recipe calls for sugar, flour, eggs, etc. After baking, you have cookies, but also some heat and aroma. Orsat analysis is like sampling the "aroma" and "heat" (flue gas) to understand how the ingredients (fuel and air) transformed. If your cookies are slightly burnt (incomplete combustion), the "aroma" will be different, and you might detect a smoky scent (like $CO$).

## Material Balances for Combustion: Mastering the Flames

Combustion is a chemical reaction where a substance reacts rapidly with an oxidant, usually oxygen, to produce heat and light. In chemical engineering, we're often dealing with the combustion of fuels like natural gas, coal, or oil to generate energy or drive processes.

Setting up a material balance for combustion involves understanding the reactants, products, and the stoichiometry of the reaction. This is a direct application of our **CO2** and **CO3**.

### Key Concepts in Combustion Material Balances:

1.  **Fuel Composition:** We need to know what we're burning. Is it pure methane? A mixture of hydrocarbons? Coal with ash content?
2.  **Oxidant (Air) Composition:** Air is not pure oxygen! It's approximately 21% $O_2$ and 79% $N_2$ by volume (or mole percent). The nitrogen in the air acts as an inert diluent and passes through the combustion unchanged, but it *must* be accounted for in the material balance. This is a common pitfall – people often forget the nitrogen in the air!
3.  **Stoichiometric Combustion:** This is the ideal scenario where there's *just enough* oxygen to completely burn the fuel into $CO_2$ and $H_2O$.
4.  **Excess Air:** In practice, we always use more air than stoichiometrically required. This is called **excess air** and is crucial for ensuring complete combustion. It's usually expressed as a percentage *of* the stoichiometric air requirement. For example, 50% excess air means we're using 1.5 times the stoichiometric air.
5.  **Incomplete Combustion:** If insufficient oxygen is supplied, the fuel may not burn completely, producing $CO$ and even soot (carbon, $C$) instead of $CO_2$.
6.  **Products of Combustion:** These typically include $CO_2$, $H_2O$, excess $O_2$, and the nitrogen that came with the air ($N_2$). If combustion is incomplete, $CO$ will also be present.

### Setting Up the Balance: A Step-by-Step Approach

Let's outline the typical process, which is very exam-oriented.

1.  **Write the balanced chemical equation(s):** This is paramount. For hydrocarbons, assume complete combustion first. For incomplete combustion, you'll need to include $CO$ and possibly $C$ as products.
2.  **Choose a Basis:** Always choose a convenient basis for your calculations. This could be:
    *   A specific amount of fuel (e.g., 100 kg of fuel).
    *   A specific amount of air.
    *   A specific amount of a product gas (like 1 kmol of $CO_2$).
3.  **Determine Stoichiometric Air Requirement:** Based on the balanced equation for complete combustion, calculate the moles of $O_2$ needed per mole of fuel. Then, using the molar ratio of $N_2$ to $O_2$ in air (approximately 79/21), calculate the moles of air needed.
4.  **Calculate Actual Air Supplied:** If excess air is given, calculate the actual amount of air used. For example, if you need 100 moles of air stoichiometrically and are using 20% excess air, you'll supply $100 \times (1 + 0.20) = 120$ moles of air.
5.  **Set Up the Material Balance:** This is usually done on a species-by-species basis or component-by-component basis. The general principle is:
    **Input + Generation = Output + Consumption**
    For non-reactive species (like $N_2$ from air) or species that don't react significantly, it simplifies to:
    **Input = Output**
    For reactants consumed or products generated, the full equation applies.

6.  **Use Orsat Analysis Data (if provided):** If you have Orsat analysis data for the flue gas, this provides known mole fractions of the dry products. This is incredibly useful for working backward or confirming your calculations. For instance, if you know the moles of $N_2$ in the flue gas (which all came from the air) and its mole fraction, you can calculate the total moles of dry flue gas.

**Example:** Burning Propane ($C_3H_8$) with 25% excess air.

First, the balanced equation for complete combustion:

$C_3H_8 + 5O_2 \rightarrow 3CO_2 + 4H_2O$

From this, 1 mole of $C_3H_8$ requires 5 moles of $O_2$ for complete combustion.
The stoichiometric air needed is: $5 \, \text{moles} \, O_2 \times \frac{100 \, \text{moles air}}{21 \, \text{moles} \, O_2} = 23.81 \, \text{moles air}$.
This stoichiometric air contains $23.81 \times 0.79 \approx 18.81$ moles of $N_2$.

Now, let's use a basis of 1 mole of $C_3H_8$ and 25% excess air:
Actual air supplied = $23.81 \times (1 + 0.25) = 29.76$ moles air.
This contains $29.76 \times 0.21 \approx 6.25$ moles $O_2$ and $29.76 \times 0.79 \approx 23.51$ moles $N_2$.

Let's track the components:

*   **$C_3H_8$ input:** 1 mole. Consumed in reaction.
*   **$O_2$ input:** 6.25 moles. Some used for combustion, some remains as excess $O_2$.
*   **$N_2$ input:** 23.51 moles. Passes through unchanged.

From the stoichiometry:
$O_2$ consumed = $1 \, \text{mole} \, C_3H_8 \times 5 \, \text{moles} \, O_2 / 1 \, \text{mole} \, C_3H_8 = 5$ moles $O_2$.
$CO_2$ produced = $1 \, \text{mole} \, C_3H_8 \times 3 \, \text{moles} \, CO_2 / 1 \, \text{mole} \, C_3H_8 = 3$ moles $CO_2$.
$H_2O$ produced = $1 \, \text{mole} \, C_3H_8 \times 4 \, \text{moles} \, H_2O / 1 \, \text{mole} \, C_3H_8 = 4$ moles $H_2O$.

**Exit streams (products):**

*   **$CO_2$:** 3 moles
*   **$H_2O$:** 4 moles
*   **$N_2$:** 23.51 moles (all input $N_2$ exits)
*   **Excess $O_2$:** $O_2$ supplied - $O_2$ consumed = $6.25 - 5 = 1.25$ moles $O_2$.

The dry flue gas composition would then be calculated by summing the moles of dry products ($CO_2$, $N_2$, $O_2$) and dividing each by the total moles of dry flue gas.

**Exam Tip:** Always check if the question asks for wet or dry flue gas composition. The difference is the presence or absence of water vapor. The Orsat analysis is for *dry* flue gas.

## Recycle, Bypass, and Purge: Managing Material Flow

Now, let's move to operational strategies that are incredibly common in industrial processes. These aren't chemical reactions themselves, but rather ways to manage the flow of materials within a plant to improve efficiency, purity, or control. They directly relate to **CO2** and **CO3** as we apply material balances to these specific operational schemes.

### 1. Recycle Operations: Bringing Material Back

**What is it?** Recycling is the process of sending a portion of the product stream or an intermediate stream back to an earlier stage in the process, often to the reactor inlet or a separation unit.

**Why do we recycle?**

*   **Increase Conversion:** In reactions where conversion per pass is low, recycling unreacted starting material back to the reactor allows it to react further, increasing the overall yield of the desired product. Think of it as giving the reactants a second (or third, or fourth!) chance to react.
*   **Improve Efficiency:** Recovering valuable unreacted materials or solvents that would otherwise be lost.
*   **Control Process Conditions:** Sometimes a recycle stream is used to dilute a feed or to maintain a certain temperature.

**Example Analogy:** Imagine you're making lemonade. You squeeze lemons, get juice, but also some pulp. You might want to filter out the pulp, but then you realize you want a stronger lemon flavor, so you take some of the *filtered* juice and add it back to a fresh batch of squeezed lemons before filtering again. You're "recycling" the juice to maximize the lemoniness.

**Setting Up the Balance for Recycle:**

This is a classic material balance problem. The key is to understand which stream is being recycled and where it's being added back.

*   **Overall Balance:** You can always do a balance around the entire process unit (reactor + separation unit). In this case, the recycle stream isn't an "input" or "output" to the *entire* system, it's an internal loop.
*   **Immediate Recycle Balance:** Often, the most effective way is to draw a "block" around the reactor and the stream *after* the separator but *before* the recycle split. The feed to the reactor is then the fresh feed *plus* the recycle stream.

Let's consider a process with a reactor and a separator. The stream leaving the separator has two branches: one goes to product/further processing, and the other is the recycle stream.

*   **Basis:** Always choose a basis. A common choice is the **fresh feed rate**.
*   **Separator Calculation:** You'll often need to analyze the stream entering the separator and the split between the product stream and the recycle stream.
*   **Reactor Input:** This is the sum of the fresh feed and the recycle stream.

**Key Terms:**

*   **Fresh Feed:** The raw material entering the process for the first time.
*   **Circulation Rate:** The flow rate of the recycle stream.
*   **Recycle Ratio:** The ratio of the circulation rate to the fresh feed rate.
*   **Single Pass Conversion:** The fraction of the reactant entering the reactor that is converted in *one pass*.
*   **Overall Conversion:** The fraction of the reactant in the *fresh feed* that is converted by the time it leaves the process as product. This is usually what we want to maximize.

**Exam Focus:** Problems often involve calculating the recycle ratio needed to achieve a certain overall conversion, or determining the composition of streams given a recycle ratio. You'll be setting up equations like:

(Flow rate of component in fresh feed) + (Flow rate of component in recycle stream) = (Flow rate of component entering reactor)

And similarly for the exit of the reactor and the separator.

### 2. Bypass Operations: Letting Some Go Around

**What is it?** In a bypass operation, a portion of the feed stream is diverted *around* a particular unit operation and rejoined with the product stream from that unit.

**Why do we bypass?**

*   **Control Throughput:** If a unit operation has a limited capacity, a bypass can be used to send excess feed around it, preventing downstream equipment from being overloaded.
*   **Maintain Product Quality:** In some cases, sending all the feed through a unit might lead to over-processing or degradation. A bypass can ensure a portion of the feed is less treated, which might be desirable for certain product specifications or to avoid issues in downstream units.
*   **Operate a Unit at its Optimal Rate:** If the feed rate is too high for a unit's efficient operation, a bypass can allow the unit to process its optimal flow while the rest goes around.

**Example Analogy:** Imagine you're watering your plants, but the hose has too much pressure for delicate seedlings. You might put your thumb partially over the nozzle to reduce the flow to the seedlings, but the rest of the water goes straight to the ground nearby. That's a bypass! The water going directly to the ground bypassed the "nozzle control" for the seedlings.

**Setting Up the Balance for Bypass:**

This is generally simpler than recycle. You're essentially dividing a stream into two streams, and then combining two streams.

*   **Basis:** Often the total feed rate.
*   **Split Point:** At the point where the bypass occurs, the total flow entering equals the flow through the unit plus the flow through the bypass line. The composition in both streams leaving the split is the same as the feed entering.
*   **Rejoining Point:** After the unit operation and the bypass line, the streams are combined. The total flow exiting this point is the sum of the flow from the unit and the flow from the bypass. The material balance involves tracking the components through the unit and then summing them up after they rejoin.

Let's say a feed stream of F flows into a separator. Part of it, Fb, bypasses the separator, and the rest, Fu, goes through it.

*   **At the split:** F = Fu + Fb
*   **Composition:** If the feed has component A with mole fraction $x_A$, then $x_{A, \text{feed}} = x_{A, Fu} = x_{A, Fb}$.
*   **After rejoining:** The stream leaving the bypass section has flow rate $F_{out} = F_{product} + Fb$. The composition of $F_{product}$ will be different from $F_{feed}$ if the separator actually separates components.

**Exam Focus:** Bypass problems are usually about tracking flows and compositions as a stream is split and then rejoined. The key is to ensure the total amount of each component is conserved.

### 3. Purge Operations: Cutting Your Losses

**What is it?** A purge stream is a stream that is intentionally removed from a process to carry away unwanted components that would otherwise build up.

**Why do we purge?**

*   **Prevent Buildup of Inerts:** In recycle systems, inert components (like $N_2$ from air in combustion, or byproducts that don't react or separate easily) can build up in the circulating stream. If these inerts accumulate to a high concentration, they can reduce the efficiency of the process, dilute reactants, or even affect reaction rates. A purge stream removes these accumulated inerts.
*   **Remove Byproducts:** To prevent the buildup of unwanted side products that might be difficult to separate completely.
*   **Control Contaminants:** To remove any contaminants that might enter the system.

**Example Analogy:** Imagine you're boiling water in a closed kettle for your tea, but you've added a tiny bit of salt. Over time, as water evaporates and turns to steam, the salt stays behind, and the water remaining in the kettle gets saltier and saltier. Eventually, it might become too salty. A "purge" would be like occasionally taking out a small amount of the salty water and replacing it with fresh, unsalted water. This prevents the salt from concentrating too much.

**Setting Up the Balance for Purge:**

Purges are typically associated with recycle loops. The purge stream is drawn from the recycle stream or from a point within the recycle loop where inerts are concentrated.

*   **Basis:** Again, fresh feed is a good basis.
*   **Steady State:** In a steady state, the rate at which an inert component enters the recycle loop must equal the rate at which it leaves the recycle loop (either as product or in the purge stream).
*   **Purge Stream Design:** The concentration of the inert in the purge stream is often specified, or the purge rate itself is specified. This allows you to calculate the amount of desirable material that is "lost" in the purge.

Consider a recycle loop where inert "I" is accumulating.

(Amount of I entering recycle loop) = (Amount of I leaving recycle loop in product) + (Amount of I leaving recycle loop in purge)

If the recycle stream has a flow rate $R$ and the inert "I" has a mole fraction $y_I$, the amount of "I" in the recycle stream is $R \times y_I$. If this stream is purged at a rate $P$, and the purge stream has a composition $y_{I, \text{purge}}$, then the amount of inert purged is $P \times y_{I, \text{purge}}$.

**Exam Focus:** Purge calculations are often linked to recycle problems. The question might be: "What purge rate is required to keep the concentration of inert X below Y% in the recycle stream?" Or, "If a purge stream removes Z kg/hr of inert X, and the recycle stream has a flow of R kg/hr with inert X at concentration $x_I$, what is the flow rate of the purge stream?"

## Integrating Concepts: Recycle, Bypass, and Purge Together

It's important to realize that these operations often occur simultaneously in a complex plant. You might have a recycle loop for unreacted material, a bypass around a filter to maintain flow, and a purge from the recycle loop to remove inerts. Each requires careful application of material balance principles.

The fundamental approach remains the same:
1.  Draw a clear process flow diagram (PFD).
2.  Label all streams with flow rates and compositions.
3.  Choose a basis.
4.  Perform balances around appropriate sections of the process (overall, individual units, recycle streams, bypass streams, purge streams).
5.  Use the known information (feed rates, product requirements, compositions, Orsat analysis) to solve for the unknowns.

These concepts are foundational for more advanced topics, including energy balances and process design. Mastering them will give you a strong toolkit for tackling any chemical engineering problem.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual and calculation-based aspects.

**Question 1 (Conceptual - CO1, CO2):**
Explain why a purge stream is often necessary in a process that utilizes a recycle loop for unreacted reactants. What is the primary purpose of a purge stream in this context?

**Answer:**
A purge stream is necessary in a recycle loop to prevent the accumulation of inert components or byproducts that do not react or are not separated from the desired product. In a recycle system, unreacted reactants are sent back to the reactor. However, if inert substances (like nitrogen from air in combustion, or non-reactive byproducts) are also present, they will also be recycled. Over time, these inerts will build up in concentration within the recycle loop. A purge stream is intentionally drawn off from the system (often from the recycle stream) to remove these accumulated inerts. If they are not purged, their increasing concentration can dilute the reactants entering the reactor, thus reducing reaction efficiency, potentially affecting reaction kinetics, and increasing the volume of gas that needs to be handled, which can lead to higher operating costs and reduced capacity. The primary purpose is to maintain the concentration of reactants at an optimal level and to remove unwanted buildup of non-reactive species.

**Question 2 (Calculation - CO2, CO3):**
Propane ($C_3H_8$) is burned with 30% excess air. The flue gas analysis shows 9.5 mole % $CO_2$, 0.5 mole % $CO$, and 4.2 mole % $O_2$. Calculate the molar composition of the dry flue gas and determine the percentage of the theoretical air used.

**Answer:**

**Step 1: Write the balanced chemical equations.**
Assuming incomplete combustion due to the presence of $CO$ in the flue gas:
Complete combustion: $C_3H_8 + 5O_2 \rightarrow 3CO_2 + 4H_2O$
Incomplete combustion: $C_3H_8 + O_2 \rightarrow CO + H_2O$ (needs balancing)
Balancing the incomplete reaction: $C_3H_8 + \frac{5}{2}O_2 \rightarrow 3CO + 4H_2O$ (multiplying by 2 for integer coefficients: $2C_3H_8 + 5O_2 \rightarrow 6CO + 8H_2O$)

Let's use the first equation with C as the basis for tracking:
Carbon balance: $C_3H_8 \rightarrow x CO_2 + y CO$
Hydrogen balance: $C_3H_8 \rightarrow z H_2O$
Oxygen balance: $O_2 \rightarrow O_2 (\text{used for } CO_2) + O_2 (\text{used for } CO) + O_2 (\text{excess})$

**Step 2: Choose a Basis.**
A convenient basis is to assume 1 mole of $C_3H_8$ is fed.

**Step 3: Determine Stoichiometric Air.**
From the complete combustion equation, 1 mole of $C_3H_8$ requires 5 moles of $O_2$.
Stoichiometric Air = $5 \, \text{moles} \, O_2 \times \frac{100 \, \text{moles air}}{21 \, \text{moles} \, O_2} = 23.81 \, \text{moles air}$
This contains $23.81 \times 0.79 = 18.81$ moles of $N_2$.

**Step 4: Calculate Actual Air Supplied.**
With 30% excess air:
Actual Air = $23.81 \times (1 + 0.30) = 30.95 \, \text{moles air}$
This contains $30.95 \times 0.21 = 6.50 \, \text{moles} \, O_2$ and $30.95 \times 0.79 = 24.45 \, \text{moles} \, N_2$.

**Step 5: Set up Material Balances.**
Let's use the basis of 1 mole $C_3H_8$. We need to determine the moles of $O_2$ consumed to form $CO_2$ and $CO$. Let $n_{CO_2}$ and $n_{CO}$ be the moles of $CO_2$ and $CO$ formed.
From the balanced equations (using $C_3H_8$ as the basis for simplicity here):
For $CO_2$ formation: $C_3H_8 + 5O_2 \rightarrow 3CO_2 + 4H_2O$
For $CO$ formation: $C_3H_8 + \frac{5}{2}O_2 \rightarrow 3CO + 4H_2O$ (This equation is commonly used to relate carbon in CO to oxygen consumed. If we use the $2C_3H_8$ basis from earlier, it's $2C_3H_8 + 5O_2 \rightarrow 6CO + 8H_2O$, so $1 \, C_3H_8$ produces $3 \, CO$ and consumes $5/2 \, O_2$).

Let's use the elemental balance, which is more robust:
Carbon Balance: Moles of C in fuel = Moles of C in $CO_2$ + Moles of C in $CO$.
Since 1 mole of $C_3H_8$ has 3 moles of C: $3 = n_{CO_2} + n_{CO}$ (where $n_{CO_2}$ and $n_{CO}$ are moles produced per mole of fuel).

Oxygen Balance: Moles of $O_2$ supplied = Moles of $O_2$ in $CO_2$ + Moles of $O_2$ in $CO$ + Moles of $O_2$ in $H_2O$ + Moles of $O_2$ left as excess.
Moles of $O_2$ in $CO_2 = n_{CO_2}$
Moles of $O_2$ in $CO = n_{CO}$
Moles of $O_2$ in $H_2O$: From $C_3H_8 + 5O_2 \rightarrow 3CO_2 + 4H_2O$, 1 mole $C_3H_8$ produces 4 moles $H_2O$. This requires $4/2 = 2$ moles of $O_2$ via the $H_2$ part.
So, $O_2$ supplied = $n_{CO_2} + n_{CO} + 2 + \text{excess } O_2$.
We supplied 6.50 moles of $O_2$. So, $6.50 = n_{CO_2} + n_{CO} + 2 + \text{excess } O_2$.

**Step 6: Use Orsat Data to Solve.**
The dry flue gas composition is given: 9.5% $CO_2$, 0.5% $CO$, 4.2% $O_2$. The remaining component must be $N_2$.
Let $N_{total, dry}$ be the total moles of dry flue gas.
Moles of $CO_2 = 0.095 \times N_{total, dry}$
Moles of $CO = 0.005 \times N_{total, dry}$
Moles of $O_2 = 0.042 \times N_{total, dry}$
Moles of $N_2 = (1 - 0.095 - 0.005 - 0.042) \times N_{total, dry} = 0.858 \times N_{total, dry}$

The nitrogen in the flue gas comes entirely from the air supplied. So, Moles of $N_2$ in flue gas = Moles of $N_2$ in air supplied.
$0.858 \times N_{total, dry} = 24.45 \, \text{moles} \, N_2$
$N_{total, dry} = \frac{24.45}{0.858} = 28.50 \, \text{moles}$

Now we can find the moles of each component in the dry flue gas:
Moles $CO_2 = 0.095 \times 28.50 = 2.71 \, \text{moles}$
Moles $CO = 0.005 \times 28.50 = 0.14 \, \text{moles}$
Moles $O_2 = 0.042 \times 28.50 = 1.20 \, \text{moles}$
Moles $N_2 = 0.858 \times 28.50 = 24.45 \, \text{moles}$
Total dry moles = $2.71 + 0.14 + 1.20 + 24.45 = 28.50$ moles.

**Molar composition of dry flue gas:**
$CO_2$: $\frac{2.71}{28.50} \times 100\% = 9.5\%$
$CO$: $\frac{0.14}{28.50} \times 100\% = 0.49\% (\approx 0.5\%)$
$O_2$: $\frac{1.20}{28.50} \times 100\% = 4.21\% (\approx 4.2\%)$
$N_2$: $\frac{24.45}{28.50} \times 100\% = 85.79\% (\approx 85.8\%)$
(The slight differences are due to rounding the given percentages).

**Calculate percentage of theoretical air used:**
Theoretical air provides 5 moles $O_2$ and 18.81 moles $N_2$ per mole $C_3H_8$.
Actual air supplied provided 6.50 moles $O_2$ and 24.45 moles $N_2$ per mole $C_3H_8$.

We can use the $O_2$ or $N_2$ to calculate the excess air percentage. Using $N_2$ is more reliable as it's inert.
Ratio of $N_2/O_2$ in air is $\frac{0.79}{0.21} \approx 3.76$.
Theoretical $O_2$ needed for $2.71 \, \text{moles} \, CO_2$: $2.71 \, \text{moles} \, CO_2 \times \frac{1 \, \text{mole} \, C_3H_8}{3 \, \text{moles} \, CO_2} \times \frac{5 \, \text{moles} \, O_2}{1 \, \text{mole} \, C_3H_8} = 4.52 \, \text{moles} \, O_2$ (This is using $CO_2$ to backtrack the $C_3H_8$, which assumes complete combustion for that carbon).
Let's use the carbon balance and oxygen balance on the products:
Moles of C in fuel = Moles of C in $CO_2$ + Moles of C in $CO$.
This suggests 3 moles of C were in the fuel.
From flue gas: Moles of $C = 2.71 \, \text{moles} \, CO_2 + 0.14 \, \text{moles} \, CO = 2.85$ moles.
Wait, the number of moles of C in the flue gas should equal the number of moles of C in the fuel. So if we assume 1 mole of $C_3H_8$, we have 3 moles of C.
Total moles of C in products $= 2.71 + 0.14 = 2.85$. This is slightly less than 3. This indicates that either the initial assumption of 1 mole of $C_3H_8$ or the Orsat analysis has slight inconsistencies, or that some carbon might have formed soot which isn't accounted for in Orsat analysis.

Let's re-approach using the known flue gas composition and the nitrogen balance.
We found that the flue gas corresponds to a system where $24.45$ moles of $N_2$ were supplied.
The ratio of $O_2$ to $N_2$ in the supplied air is $0.21/0.79$.
So, the moles of $O_2$ supplied $= 24.45 \, \text{moles} \, N_2 \times \frac{0.21 \, \text{moles} \, O_2}{0.79 \, \text{moles} \, N_2} = 6.50 \, \text{moles} \, O_2$.
Total moles of air supplied $= 6.50 + 24.45 = 30.95$ moles air.

Now, let's consider the theoretical air requirement for the actual amount of fuel burned to produce these products.
In the dry flue gas, we have $2.71$ moles $CO_2$ and $0.14$ moles $CO$.
This means the total carbon in the fuel that went to $CO_2$ and $CO$ is $2.71 + 0.14 = 2.85$ moles.
From the elemental analysis of $C_3H_8$, each mole of $C_3H_8$ contains 3 moles of carbon. So, the amount of fuel that reacted is $\frac{2.85 \, \text{moles C}}{3 \, \text{moles C/mole} \, C_3H_8} = 0.95 \, \text{moles of } C_3H_8$.

Now we calculate theoretical air for $0.95$ moles of $C_3H_8$:
Stoichiometric $O_2 = 0.95 \, \text{moles} \, C_3H_8 \times 5 \, \text{moles} \, O_2/\text{mole} \, C_3H_8 = 4.75 \, \text{moles} \, O_2$.
Stoichiometric air $= 4.75 \, \text{moles} \, O_2 \times \frac{100}{21} = 22.62 \, \text{moles air}$.

Actual air supplied = $30.95$ moles air.
Percentage of theoretical air used = $\frac{\text{Actual Air}}{\text{Theoretical Air}} \times 100\% = \frac{30.95 \, \text{moles}}{22.62 \, \text{moles}} \times 100\% = 136.8\%$.
This means 36.8% excess air was used. This matches the given condition of 30% excess air reasonably well, given potential rounding in Orsat analysis and fuel composition.

Let's verify with oxygen balance on the products of combustion for the 0.95 moles of $C_3H_8$:
$O_2$ used for $CO_2$: $2.71 \, \text{moles} \, CO_2 \times \frac{1 \, \text{mole} \, O_2}{1 \, \text{mole} \, CO_2} = 2.71 \, \text{moles} \, O_2$.
$O_2$ used for $CO$: $0.14 \, \text{moles} \, CO \times \frac{0.5 \, \text{mole} \, O_2}{1 \, \text{mole} \, CO} = 0.07 \, \text{moles} \, O_2$.
$O_2$ for $H_2O$: Water formed from $0.95 \, \text{moles} \, C_3H_8$. $C_3H_8 \rightarrow 4H_2O$. So $0.95 \times 4 = 3.8$ moles $H_2O$.
$O_2$ used for $H_2O$: $3.8 \, \text{moles} \, H_2O \times \frac{1 \, \text{mole} \, O_2}{2 \, \text{moles} \, H_2O} = 1.90 \, \text{moles} \, O_2$.
Total $O_2$ consumed $= 2.71 + 0.07 + 1.90 = 4.68 \, \text{moles} \, O_2$.
Excess $O_2$ in flue gas $= 1.20 \, \text{moles}$ (from Orsat analysis).
Total $O_2$ supplied $= O_2$ consumed + Excess $O_2 = 4.68 + 1.20 = 5.88 \, \text{moles} \, O_2$.

This supplied $O_2$ (5.88 moles) corresponds to the fuel reacted (0.95 moles $C_3H_8$).
Theoretical $O_2$ for $0.95$ moles $C_3H_8$ is $4.75$ moles $O_2$.
Percentage of theoretical air $= \frac{5.88}{4.75} \times 100\% = 123.8\%$.

There's a discrepancy between the initial 30% excess air condition and what the Orsat analysis suggests. This is common in real problems. If the question gives Orsat analysis, you *must* use it. The percentage of theoretical air calculation should be based on the actual products observed.

Let's stick to the calculation based on the Orsat analysis:
Actual $O_2$ supplied $= 5.88$ moles (to combust $0.95$ moles $C_3H_8$).
Theoretical $O_2$ needed for $0.95$ moles $C_3H_8$ $= 4.75$ moles.
Percentage of theoretical air = $123.8\%$.

**Final Answer for Q2:**
*   **Molar composition of dry flue gas:** $CO_2$: 9.5%, $CO$: 0.5%, $O_2$: 4.2%, $N_2$: 85.8%
*   **Percentage of theoretical air used:** 123.8%

**Question 3 (Conceptual/Calculation - CO2, CO3):**
In a process designed to produce chemical X, the fresh feed contains 100 kmol/hr of reactant A and 50 kmol/hr of inert B. The reaction is $A \rightarrow X$. The reactor conversion of A is 40% per pass. The product stream leaving the reactor is sent to a separator where 95% of the X produced is recovered, and all unreacted A and inert B go to the recycle stream. The recycle stream is mixed with the fresh feed before entering the reactor. A purge stream removes 10% of the inert B entering the recycle stream. Calculate the flow rate of the recycle stream and the purge stream.

**Answer:**

**Step 1: Define Streams and Basis.**
Basis: 1 hour of operation.
Fresh Feed: $F_F = 100 \, \text{kmol}$, $A_{in} = 100 \, \text{kmol}$, $B_{in} = 50 \, \text{kmol}$.
Reactor: $A \rightarrow X$, 40% conversion of A per pass.
Separator: Recovers 95% of X. All unreacted A and B go to recycle.
Recycle Stream: $R$ (kmol/hr)
Purge Stream: $P$ (kmol/hr)

Let's denote streams:
$F_F$: Fresh feed
$R$: Recycle stream
$F_R$: Feed to reactor ($F_R = F_F + R$)
$P_R$: Product stream from reactor
$S_X$: Stream containing X going to product recovery
$S_{A,B}$: Stream containing unreacted A and B going to recycle

**Step 2: Analyze the Reactor.**
Let the flow of A entering the reactor be $A_R$ and B be $B_R$.
Conversion of A per pass = 40%.
$A$ consumed $= 0.40 \times A_R$.
$A$ exiting reactor $= A_R - 0.40 A_R = 0.60 A_R$.
$X$ produced $= 0.40 A_R$.

**Step 3: Analyze the Separator.**
The stream $P_R$ enters the separator.
Stream $S_X$: $0.95 \times (0.40 A_R) = 0.38 A_R$ (This is the flow of X to product).
Stream $S_{A,B}$: All unreacted A and B go here.
$A$ in $S_{A,B} = 0.60 A_R$.
$B$ in $S_{A,B} = B_R$.

**Step 4: Analyze the Recycle and Purge.**
The stream $S_{A,B}$ is recycled. However, a purge stream removes 10% of the inert B.
This means $S_{A,B}$ stream contains A and B. Let the flow rate of $S_{A,B}$ be $R$.
$R$ consists of unreacted A and all of B that was fed to the reactor.
The composition of the stream entering the recycle point ($S_{A,B}$) is $A$ and $B$.
The stream $S_{A,B}$ is split into the recycle stream ($R$) and the purge stream.
This description seems slightly ambiguous. A more typical setup is:
1. Fresh feed mixed with recycle.
2. Feed goes to reactor.
3. Reactor effluent goes to separator.
4. Separator splits into product (X) and a stream containing unreacted A and B.
5. This stream (A+B) is partially purged (removing 10% of B) and the remainder is recycled.

Let's assume this common setup:
Feed to Recycle Point = $S_{A,B}$ = $R_{stream}$
$R_{stream}$ splits into Purge ($P$) and Recycle ($R$).
So, $R_{stream} = P + R$.
The purge removes 10% of B. This means B in the recycle stream $R$ is 90% of B entering the recycle point.

Let $A_R$ and $B_R$ be the moles of A and B entering the reactor.
$A_{entering \, reactor} = 100 + A_{recycle}$
$B_{entering \, reactor} = 50 + B_{recycle}$

$A$ exiting reactor $= 0.60 \times A_{entering \, reactor}$
$X$ produced $= 0.40 \times A_{entering \, reactor}$

Separator output:
$X$ to product $= 0.95 \times (0.40 A_{entering \, reactor}) = 0.38 A_{entering \, reactor}$
Unreacted A to recycle stream $= 0.60 A_{entering \, reactor}$
Inert B to recycle stream $= B_{entering \, reactor}$

So, the stream $S_{A,B}$ has $0.60 A_{entering \, reactor}$ kmol/hr of A and $B_{entering \, reactor}$ kmol/hr of B.
This stream is designated as the recycle stream *before* purge. Let's call its flow $R_{pre-purge}$.
$R_{pre-purge}$ = $0.60 A_{entering \, reactor} + B_{entering \, reactor}$.

The purge stream ($P$) removes 10% of the inert B. This means the B in the recycle stream ($R$) is 90% of B in $R_{pre-purge}$.
$B_{recycle} = 0.90 \times B_{entering \, reactor}$.
The purge stream composition is not specified, only the amount of B removed.
Let's assume the purge stream is drawn from the recycle stream ($R_{pre-purge}$).
So, $B_{in \, purge} = 0.10 \times B_{entering \, reactor}$.
$A_{in \, purge} = ?$ (We need to assume a composition for the purge or its flow rate).

A common interpretation is that the purge stream is taken from the combined recycle stream and it removes a fraction of *all* components in that stream to remove the inerts. However, if it only removes B, and we want to calculate the recycle stream rate, we should consider the flow of B.

Let's assume the recycle stream flow rate $R$ is the flow *after* purge.
So, $B_{recycle} = 0.90 \times B_{entering \, reactor}$.
And $B_{entering \, reactor} = 50 \, \text{kmol/hr} + B_{recycle}$.
Substitute: $B_{recycle} = 0.90 \times (50 + B_{recycle})$
$B_{recycle} = 45 + 0.90 B_{recycle}$
$0.10 B_{recycle} = 45$
$B_{recycle} = 450 \, \text{kmol/hr}$.

Now we know the flow of inert B in the recycle stream.
The amount of A in the recycle stream is $A_{recycle} = 0.60 \times A_{entering \, reactor}$.
Also, $A_{entering \, reactor} = 100 \, \text{kmol/hr} + A_{recycle}$.
$A_{recycle} = 0.60 \times (100 + A_{recycle})$
$A_{recycle} = 60 + 0.60 A_{recycle}$
$0.40 A_{recycle} = 60$
$A_{recycle} = 150 \, \text{kmol/hr}$.

So, the recycle stream $R$ has $A_{recycle} = 150$ kmol/hr and $B_{recycle} = 450$ kmol/hr.
Total flow rate of recycle stream $R = A_{recycle} + B_{recycle} = 150 + 450 = 600 \, \text{kmol/hr}$.

**Check the flows into the reactor:**
$A_{entering \, reactor} = 100 \, \text{kmol/hr} + A_{recycle} = 100 + 150 = 250 \, \text{kmol/hr}$.
$B_{entering \, reactor} = 50 \, \text{kmol/hr} + B_{recycle} = 50 + 450 = 500 \, \text{kmol/hr}$.

The conversion of A per pass is 40%:
$A$ consumed $= 0.40 \times 250 = 100 \, \text{kmol/hr}$.
$A$ exiting reactor $= 0.60 \times 250 = 150 \, \text{kmol/hr}$. This matches $A_{recycle}$.

**Purge Stream Calculation:**
The purge stream removes 10% of the inert B entering the recycle stream.
The stream entering the recycle point (after separator) had B flow rate $= B_{entering \, reactor} = 500 \, \text{kmol/hr}$.
Amount of B removed by purge $= 0.10 \times 500 \, \text{kmol/hr} = 50 \, \text{kmol/hr}$.
This is the flow rate of B in the purge stream.

The problem phrasing "A purge stream removes 10% of the inert B entering the recycle stream" implies that the flow rate of B in the purge stream is 10% of the total B that would have been recycled *if there was no purge*. This is the B flow rate after the separator but before the purge/recycle split.

Let's assume the purge is drawn from the stream that *would have been recycled*.
Stream $S_{A,B}$ has $A_{SAB} = 0.60 \times A_{entering}$ and $B_{SAB} = B_{entering}$.
$A_{entering} = 100 + A_{recycle}$
$B_{entering} = 50 + B_{recycle}$
$A_{SAB} = 0.60 (100 + A_{recycle})$
$B_{SAB} = 50 + B_{recycle}$

The recycle stream $R$ has composition same as $S_{A,B}$ but with reduced B.
$A_R = A_{SAB} = 0.60 (100 + A_R) \implies 0.4 A_R = 60 \implies A_R = 150$ kmol/hr.
$B_{recycle}$ means flow of B in the stream that goes back to the feed mixer.
$B_{SAB} = B_{recycle} + B_{purge}$
$B_{purge} = 0.10 \times B_{SAB}$
So, $B_{recycle} = 0.90 \times B_{SAB}$.
$B_{SAB} = 50 + B_{recycle}$.
$B_{recycle} = 0.90 (50 + B_{recycle}) \implies 0.1 B_{recycle} = 45 \implies B_{recycle} = 450$ kmol/hr.

So, the stream going back to the mixer is $R$ which contains $A_R = 150$ kmol/hr and $B_{recycle} = 450$ kmol/hr.
Total recycle stream flow rate $R = 150 + 450 = 600 \, \text{kmol/hr}$.

Now for the purge stream:
The stream *before* the split into recycle and purge ($S_{A,B}$) has $B_{SAB} = B_{recycle} + B_{purge} = 450 + B_{purge}$.
We found $B_{recycle} = 0.90 \times B_{SAB}$.
$450 = 0.90 \times B_{SAB} \implies B_{SAB} = 500 \, \text{kmol/hr}$.
So, the stream from the separator contains 500 kmol/hr of B.
The purge stream removes 10% of this B.
$B_{purge} = 0.10 \times B_{SAB} = 0.10 \times 500 = 50 \, \text{kmol/hr}$.

The problem does not specify the composition of the purge stream, only the amount of B it carries. If the purge stream is taken such that it contains only B, then its flow rate is 50 kmol/hr. If it contains other components, its flow rate would be higher. Often, the purge is taken from a stream where the inert is concentrated.

Assuming the purge stream composition matches the stream it's drawn from ($S_{A,B}$), which has $A_{SAB} = 0.60 \times A_{entering}$.
$A_{entering} = 100 + A_{recycle} = 100 + 150 = 250$ kmol/hr.
$A_{SAB} = 0.60 \times 250 = 150$ kmol/hr.
So, stream $S_{A,B}$ has 150 kmol/hr A and 500 kmol/hr B.
If the purge is 10% of B, and it has the same composition as $S_{A,B}$:
Total flow of $S_{A,B} = 150 + 500 = 650$ kmol/hr.
Ratio of A in $S_{A,B} = 150/650$. Ratio of B in $S_{A,B} = 500/650$.
Purge stream flow rate $P = (150/650) \times 650 + (500/650) \times 650 \times \text{fraction for B}$.
The statement "purge stream removes 10% of inert B" is key.
This means $B_{purge} = 0.10 \times B_{SAB} = 0.10 \times 500 = 50$ kmol/hr.
If the purge is taken from the $S_{A,B}$ stream, and it's a stream removed *from* that stream, then $R_{stream} = S_{A,B} = P + R$.
$B_{SAB} = B_{purge} + B_{recycle}$.
$500 = 50 + B_{recycle} \implies B_{recycle} = 450$. This matches.
If the purge stream flow rate is simply the amount of B removed, then $P=50$ kmol/hr. This is the simplest interpretation.

**Final Answer for Q3:**
*   **Flow rate of the recycle stream (R):** 600 kmol/hr (150 kmol/hr A + 450 kmol/hr B).
*   **Flow rate of the purge stream (P):** 50 kmol/hr (assuming the purge stream only contains the specified inert B). If the purge is drawn from the stream leaving the separator and maintains its composition, its flow rate would be higher, carrying both A and B in proportion. However, typically, "removes X% of Y" implies the flow of Y in the purge.

---
This concludes our session on Orsat analysis, combustion balances, and recycle/bypass/purge operations. Keep practicing these problems, as they are fundamental to understanding chemical process operations!
