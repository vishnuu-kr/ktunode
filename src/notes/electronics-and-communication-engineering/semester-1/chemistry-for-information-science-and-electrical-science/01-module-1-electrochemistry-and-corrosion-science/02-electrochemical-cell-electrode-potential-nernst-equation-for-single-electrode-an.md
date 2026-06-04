---
title: "Electrochemical Cell - Electrode potential- Nernst equation for single electrode and cell (Numerical problems)"
subject: "CHEMISTRY FOR INFORMATION SCIENCE AND ELECTRICAL SCIENCE"
module: "Module 1: Electrochemistry  and Corrosion  Science"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da285"
status: "completed"
scrapedAt: "2026-05-23T17:33:23.484Z"
---
# Module 1: Electrochemistry and Corrosion Science

## Topic: Electrochemical Cells, Electrode Potential, and the Nernst Equation

Welcome everyone to our exploration of electrochemistry! In this module, we’re diving into a fascinating area that bridges chemistry and a lot of the electrical science you’ll be dealing with. Think about batteries that power your phones, the way metals corrode in your environment, or even how we can measure concentrations of substances using electrical signals – all these are rooted in electrochemistry. Today, we're going to focus on the very heart of it: the electrochemical cell, how we quantify the "driving force" of reactions within these cells (electrode potential), and a crucial equation, the Nernst equation, that helps us understand how this potential changes.

This topic directly contributes to **CO1: Explain the Basic Concepts of Electrochemistry and Corrosion to explore the possible applications in various engineering fields**. Understanding electrochemical cells is fundamental to appreciating how chemical reactions can generate electricity or be driven by it, which has immense applications in energy storage, sensors, and even understanding metal degradation.

### 1. What is an Electrochemical Cell? The Foundation of Our Study

At its core, an **electrochemical cell** is a device that converts chemical energy into electrical energy or vice versa. It's all about the transfer of electrons between different chemical species.

Think about a simple battery in your remote control. What's happening inside? There are two different materials (electrodes) in contact with an electrolyte (a substance that conducts electricity through ion movement). At one electrode, a chemical reaction causes electrons to be released – this is **oxidation**. At the other electrode, another chemical reaction *consumes* these electrons – this is **reduction**. This flow of electrons through an external circuit is what we perceive as electric current!

There are two main types of electrochemical cells:

*   **Galvanic (or Voltaic) Cells:** These are the "energy-producing" cells, like batteries. They harness the energy released from spontaneous chemical reactions to generate electricity. The classic example is the Daniell cell, which uses zinc and copper electrodes in solutions of their respective sulfates. A spontaneous reaction occurs, driving electrons from zinc to copper, creating a voltage. This is where **CO2: Describe the use of various engineering materials in different industries** comes into play. The choice of materials for electrodes and electrolytes is critical for the performance and application of these cells.

*   **Electrolytic Cells:** These are the "energy-consuming" cells. They use an external source of electrical energy (like a power supply) to drive a non-spontaneous chemical reaction. Think of electroplating, where you use electricity to deposit a thin layer of one metal onto another (like chrome plating on car parts). This process wouldn't happen on its own; it needs that electrical "push."

The fundamental principle in both is the transfer of electrons via **redox reactions** (reduction-oxidation reactions). One half of the cell involves oxidation (loss of electrons), and the other half involves reduction (gain of electrons).

### 2. Electrode Potential: The Electrical "Personality" of a Half-Reaction

Now, let's get more specific. Each metal, when placed in a solution of its ions, has a tendency to either lose electrons (oxidize) or gain electrons (reduce). This tendency is quantified by its **electrode potential**.

Imagine dipping a piece of zinc metal into a solution of zinc sulfate. Some zinc atoms might lose electrons and become zinc ions, entering the solution. The electrons they leave behind accumulate on the metal surface. This creates a charge difference between the metal and the solution. This potential difference is the **electrode potential**.

*   **Oxidation:** $\text{M} \rightarrow \text{M}^{n+} + n\text{e}^-$
*   **Reduction:** $\text{M}^{n+} + n\text{e}^- \rightarrow \text{M}$

It's a bit like assigning a "personality score" to each metal – how eager is it to give away its electrons (oxidation) or how eager is it to snatch electrons from others (reduction)?

We can't measure the absolute potential of a single electrode directly because a complete electrical circuit is needed for current flow and potential measurement. So, what do we do? We use a **reference electrode**. The most common one is the **Standard Hydrogen Electrode (SHE)**.

The **Standard Hydrogen Electrode (SHE)** is assigned an electrode potential of **0 volts** under standard conditions:
*   Pressure of $\text{H}_2$ gas = 1 atm (or 1 bar)
*   Concentration of $\text{H}^+$ ions = 1 M
*   Temperature = 25°C (298.15 K)

By coupling our metal electrode to the SHE, we can measure the potential difference. This measured potential is the **standard electrode potential** ($E^\circ$), relative to the SHE.

*   If our metal has a *negative* standard electrode potential, it means it has a greater tendency to be oxidized than hydrogen. It's more "electropositive." For instance, Zinc has $E^\circ = -0.76$ V. This means if we set up a cell with zinc and SHE, zinc will be oxidized ($\text{Zn} \rightarrow \text{Zn}^{2+} + 2\text{e}^-$) and hydrogen ions will be reduced ($\text{2H}^+ + 2\text{e}^- \rightarrow \text{H}_2$).

*   If our metal has a *positive* standard electrode potential, it means it has a greater tendency to be reduced than hydrogen. It's more "electronegative." Copper, for example, has $E^\circ = +0.34$ V. In a cell with SHE, copper ions will be reduced ($\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$) and hydrogen will be oxidized ($\text{H}_2 \rightarrow 2\text{H}^+ + 2\text{e}^-$).

This concept of electrode potential is crucial for predicting the spontaneity of reactions. A reaction is spontaneous if the overall cell potential (voltage generated) is positive. Remember this: a more negative electrode potential indicates a stronger tendency to get oxidized. This relates to **CO1** as it helps us understand the driving force behind electrochemical processes.

### 3. The Nernst Equation: Bringing Non-Standard Conditions into the Picture

So far, we've talked about *standard* conditions. But in real-world applications – in your phone battery, in a sensor, or when metals corrode in the atmosphere – conditions are rarely standard. Concentrations aren't 1 M, and temperatures might vary. This is where the **Nernst Equation** becomes our best friend.

The Nernst equation, derived from fundamental thermodynamic principles (specifically, the relationship between Gibbs free energy and cell potential), allows us to calculate the electrode potential (or cell potential) under *non-standard conditions*. It connects the potential to the concentrations (or activities) of the reactants and products.

Let's consider a general reversible electrode reaction:
$\text{Ox} + n\text{e}^- \rightleftharpoons \text{Red}$

Where 'Ox' is the oxidized species and 'Red' is the reduced species.

The Nernst equation for a single electrode potential ($E$) is given by:

$E = E^\circ - \frac{RT}{nF} \ln \left( \frac{[\text{Red}]}{[\text{Ox}]} \right)$

Where:
*   $E$ = electrode potential at non-standard conditions (Volts).
*   $E^\circ$ = standard electrode potential (Volts). This is the potential under standard conditions (1 M concentration, 1 atm pressure, 298.15 K).
*   $R$ = ideal gas constant (8.314 J/mol·K).
*   $T$ = absolute temperature in Kelvin.
*   $n$ = number of moles of electrons transferred in the balanced half-reaction.
*   $F$ = Faraday constant (96,485 C/mol). This is the charge of one mole of electrons.
*   $[\text{Red}]$ = concentration (or activity) of the reduced species.
*   $[\text{Ox}]$ = concentration (or activity) of the oxidized species.

Often, we work at a standard temperature of 25°C (298.15 K). At this temperature, the term $\frac{RT}{nF}$ can be simplified.
We use the relationship: $\ln(x) = 2.303 \log_{10}(x)$.
So, $\frac{RT}{nF} \ln \left( \frac{[\text{Red}]}{[\text{Ox}]} \right) = \frac{2.303 RT}{nF} \log_{10} \left( \frac{[\text{Red}]}{[\text{Ox}]} \right)$.

At $T = 298.15$ K:
$\frac{2.303 RT}{F} = \frac{2.303 \times 8.314 \text{ J/mol·K} \times 298.15 \text{ K}}{96,485 \text{ C/mol}} \approx 0.0592 \text{ V}$

Therefore, at 25°C, the Nernst equation for a single electrode becomes:

$E = E^\circ - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Red}]}{[\text{Ox}]} \right)$

This equation is incredibly powerful. It tells us how the electrode potential changes as the concentrations of the species involved in the redox reaction change.

*   If $[\text{Red}] < [\text{Ox}]$, the ratio $\frac{[\text{Red}]}{[\text{Ox}]}$ is less than 1. $\log_{10}$ of a number less than 1 is negative. So, the term $\frac{0.0592}{n} \log_{10} \left( \frac{[\text{Red}]}{[\text{Ox}]} \right)$ becomes negative, and $E$ increases (becomes less negative or more positive). This means reduction is favored.
*   If $[\text{Red}] > [\text{Ox}]$, the ratio $\frac{[\text{Red}]}{[\text{Ox}]}$ is greater than 1. $\log_{10}$ of a number greater than 1 is positive. So, the term becomes positive, and $E$ decreases (becomes more negative or less positive). This means oxidation is favored.

This is fundamental for **CO3: Apply appropriate analytical techniques for the synthesis and characterization of various engineering materials**, as measuring electrode potentials is a key analytical technique in electrochemistry, often used to monitor reaction progress or determine concentrations.

### 4. Nernst Equation for a Cell: Predicting the Overall Voltage

Just as we can calculate the potential of a single electrode, we can also calculate the **cell potential** ($E_{\text{cell}}$) for an electrochemical cell.

A galvanic cell consists of two half-cells. Let's say we have a general cell reaction:
$\text{a Red}_1 + \text{b Ox}_2 \rightarrow \text{a Ox}_1 + \text{b Red}_2$

This can be thought of as:
*   **Anode (Oxidation):** $\text{Red}_1 \rightarrow \text{Ox}_1 + n\text{e}^-$
*   **Cathode (Reduction):** $\text{Ox}_2 + m\text{e}^- \rightarrow \text{Red}_2$

For a balanced reaction, the number of electrons lost must equal the number of electrons gained. Let's assume $n$ electrons are transferred.

The cell potential is the difference between the cathode potential and the anode potential:
$E_{\text{cell}} = E_{\text{cathode}} - E_{\text{anode}}$

Using the Nernst equation for each electrode:
$E_{\text{cathode}} = E^\circ_{\text{cathode}} - \frac{RT}{nF} \ln \left( \frac{[\text{Red}_2]}{[\text{Ox}_2]} \right)$
$E_{\text{anode}} = E^\circ_{\text{anode}} - \frac{RT}{nF} \ln \left( \frac{[\text{Ox}_1]}{[\text{Red}_1]} \right)$

Substituting these into the $E_{\text{cell}}$ equation:
$E_{\text{cell}} = \left( E^\circ_{\text{cathode}} - \frac{RT}{nF} \ln \left( \frac{[\text{Red}_2]}{[\text{Ox}_2]} \right) \right) - \left( E^\circ_{\text{anode}} - \frac{RT}{nF} \ln \left( \frac{[\text{Ox}_1]}{[\text{Red}_1]} \right) \right)$

$E_{\text{cell}} = (E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}) - \frac{RT}{nF} \left( \ln \left( \frac{[\text{Red}_2]}{[\text{Ox}_2]} \right) - \ln \left( \frac{[\text{Ox}_1]}{[\text{Red}_1]} \right) \right)$

$E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{RT}{nF} \ln \left( \frac{[\text{Red}_2]}{[\text{Ox}_2]} \cdot \frac{[\text{Red}_1]}{[\text{Ox}_1]} \right)$

The term $\frac{[\text{Red}_2]}{[\text{Ox}_2]} \cdot \frac{[\text{Red}_1]}{[\text{Ox}_1]}$ is essentially the reaction quotient (Q) for the overall cell reaction. For the general reaction $\text{a Red}_1 + \text{b Ox}_2 \rightarrow \text{a Ox}_1 + \text{b Red}_2$, assuming each step involves $n$ electrons, the Nernst equation for the cell is:

$E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{RT}{nF} \ln \left( \frac{[\text{Ox}_1]^a [\text{Red}_2]^b}{[\text{Red}_1]^a [\text{Ox}_2]^b} \right)$

Where $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$.

At 25°C (298.15 K), this simplifies to:

$E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Ox}_1]^a [\text{Red}_2]^b}{[\text{Red}_1]^a [\text{Ox}_2]^b} \right)$

This is vital for predicting whether a reaction will be spontaneous under given conditions. If $E_{\text{cell}} > 0$, the reaction proceeds spontaneously in the forward direction. If $E_{\text{cell}} < 0$, the reaction is spontaneous in the reverse direction. This directly links to **CO1** and **CO2** as it helps predict material behavior and suitability for various applications.

**Important Note:** When writing the Nernst equation for a cell, the species on the product side of the overall reaction appear in the numerator of the log term, and those on the reactant side appear in the denominator. The exponents correspond to the stoichiometric coefficients. For pure solids or liquids, their activity is considered unity and they don't appear in the expression.

### 5. Numerical Problems: Putting Theory into Practice

Let's work through some examples. These types of problems are very common in exams!

**Problem 1: Single Electrode Potential**

Calculate the potential of a zinc electrode at 25°C immersed in a solution of $\text{ZnSO}_4$ with a $\text{Zn}^{2+}$ concentration of $0.001$ M.
Given: $E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.76$ V.

*   **Understanding the problem:** We need to find the electrode potential of zinc under non-standard conditions (concentration is not 1 M). The reaction is $\text{Zn}^{2+} + 2\text{e}^- \rightleftharpoons \text{Zn}$. Here, $\text{Ox}$ is $\text{Zn}^{2+}$ and $\text{Red}$ is $\text{Zn}$ (solid, so its activity is 1). The number of electrons transferred ($n$) is 2.

*   **Applying the Nernst equation:**
    $E = E^\circ - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Red}]}{[\text{Ox}]} \right)$
    $E = E^\circ - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Zn}]}{[\text{Zn}^{2+}]} \right)$
    Since $\text{Zn}$ is a solid, $[\text{Zn}] = 1$.
    $E = E^\circ - \frac{0.0592}{2} \log_{10} \left( \frac{1}{[\text{Zn}^{2+}]} \right)$

*   **Substituting values:**
    $E^\circ = -0.76$ V
    $n = 2$
    $[\text{Zn}^{2+}] = 0.001$ M $= 1 \times 10^{-3}$ M

    $E = -0.76 - \frac{0.0592}{2} \log_{10} \left( \frac{1}{1 \times 10^{-3}} \right)$
    $E = -0.76 - 0.0296 \log_{10} (10^3)$
    $E = -0.76 - 0.0296 \times 3$
    $E = -0.76 - 0.0888$
    $E = -0.8488$ V

*   **Conclusion:** The potential of the zinc electrode in this dilute solution is $-0.8488$ V. Notice it's more negative than the standard potential. This makes sense: with fewer $\text{Zn}^{2+}$ ions in solution, the zinc metal has an even greater tendency to lose electrons and become ions. This is a key concept for understanding how concentration affects electrochemical driving forces.

**Problem 2: Cell Potential (Daniell Cell)**

Consider a Daniell cell made from a zinc electrode in 1 M $\text{ZnSO}_4$ and a copper electrode in 1 M $\text{CuSO}_4$, both at 25°C.
Given: $E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.76$ V and $E^\circ_{\text{Cu}^{2+}/\text{Cu}} = +0.34$ V.
Calculate the cell potential. What would be the cell potential if the $\text{Cu}^{2+}$ concentration was $0.01$ M and $\text{Zn}^{2+}$ concentration was $0.1$ M?

*   **Part 1: Standard Conditions**
    *   **Identify half-reactions and standard potentials:**
        Anode (oxidation): $\text{Zn} \rightarrow \text{Zn}^{2+} + 2\text{e}^-$, $E^\circ_{\text{anode}} = -0.76$ V
        Cathode (reduction): $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$, $E^\circ_{\text{cathode}} = +0.34$ V
    *   **Calculate standard cell potential:**
        $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$
        $E^\circ_{\text{cell}} = +0.34 \text{ V} - (-0.76 \text{ V})$
        $E^\circ_{\text{cell}} = +1.10$ V
    *   **Conclusion:** Under standard conditions, the Daniell cell produces a voltage of 1.10 V. This is a spontaneous reaction.

*   **Part 2: Non-Standard Conditions**
    *   **Given values:**
        $[\text{Zn}^{2+}] = 0.1$ M
        $[\text{Cu}^{2+}] = 0.01$ M
        $n = 2$ (since 2 electrons are transferred in both half-reactions)
        Temperature = 25°C
    *   **Write the overall reaction:**
        $\text{Zn} + \text{Cu}^{2+} \rightarrow \text{Zn}^{2+} + \text{Cu}$
    *   **Apply Nernst equation for the cell:**
        $E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Products}]}{[\text{Reactants}]} \right)$
        $E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]} \right)$
        (Note: $\text{Zn}$ and $\text{Cu}$ are solids, so their concentrations/activities are 1 and don't appear in the log term.)
    *   **Substitute values:**
        $E_{\text{cell}} = 1.10 \text{ V} - \frac{0.0592}{2} \log_{10} \left( \frac{0.1}{0.01} \right)$
        $E_{\text{cell}} = 1.10 - 0.0296 \log_{10} (10)$
        $E_{\text{cell}} = 1.10 - 0.0296 \times 1$
        $E_{\text{cell}} = 1.10 - 0.0296$
        $E_{\text{cell}} = 1.0704$ V

    *   **Conclusion:** Under these non-standard conditions, the cell potential is slightly lower (1.0704 V) than the standard potential. This is because the ratio of products to reactants ($[\text{Zn}^{2+}]/[\text{Cu}^{2+}]$) is greater than 1, which, according to the Nernst equation, reduces the cell potential. This highlights how changes in concentration directly impact the voltage output, a critical factor in battery design and lifespan.

**Problem 3: Determining an Unknown Concentration**

Consider an electrochemical cell at 25°C where a silver electrode is in a $0.005$ M $\text{AgNO}_3$ solution, and a standard hydrogen electrode (SHE) is used as the reference. The measured cell potential is $0.45$ V. Calculate the concentration of $\text{Ag}^+$ ions in the $\text{AgNO}_3$ solution.
Given: $E^\circ_{\text{Ag}^{+}/\text{Ag}} = +0.80$ V.

*   **Understanding the setup:** This is a cell formed by a silver electrode and SHE. Since SHE has $E^\circ=0$, the measured cell potential will be simply the potential of the silver electrode relative to SHE. The silver electrode will act as the cathode if the reaction is reduction of $\text{Ag}^+$. Let's assume this setup.
    The cell reaction (simplified): $\text{Ag}^+ + \text{e}^- \rightleftharpoons \text{Ag}$
    Here, $\text{Ox}$ is $\text{Ag}^+$ and $\text{Red}$ is $\text{Ag}$ (solid, activity=1). $n=1$.
    $E^\circ_{\text{Ag}^{+}/\text{Ag}} = +0.80$ V.
    The cell potential is $E_{\text{cell}} = E_{\text{Ag}^{+}/\text{Ag}} - E_{\text{SHE}}$. Since $E_{\text{SHE}} = 0$ and $E^\circ_{\text{SHE}} = 0$, the cell potential measured is $E_{\text{Ag}^{+}/\text{Ag}}$.

*   **Applying the Nernst equation for the silver electrode:**
    $E = E^\circ - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Red}]}{[\text{Ox}]} \right)$
    $E = E^\circ_{\text{Ag}^{+}/\text{Ag}} - \frac{0.0592}{1} \log_{10} \left( \frac{[\text{Ag}]}{[\text{Ag}^{+}]} \right)$
    Since $\text{Ag}$ is solid, $[\text{Ag}] = 1$.
    $E = E^\circ_{\text{Ag}^{+}/\text{Ag}} - 0.0592 \log_{10} \left( \frac{1}{[\text{Ag}^{+}]} \right)$

*   **Substituting known values and solving for $[\text{Ag}^{+}]$:**
    $E = 0.45$ V
    $E^\circ_{\text{Ag}^{+}/\text{Ag}} = +0.80$ V
    $n = 1$

    $0.45 = 0.80 - 0.0592 \log_{10} \left( \frac{1}{[\text{Ag}^{+}]} \right)$
    $0.0592 \log_{10} \left( \frac{1}{[\text{Ag}^{+}]} \right) = 0.80 - 0.45$
    $0.0592 \log_{10} \left( \frac{1}{[\text{Ag}^{+}]} \right) = 0.35$
    $\log_{10} \left( \frac{1}{[\text{Ag}^{+}]} \right) = \frac{0.35}{0.0592}$
    $\log_{10} \left( \frac{1}{[\text{Ag}^{+}]} \right) \approx 5.912$

    Now, take the antilog (10 to the power of both sides):
    $\frac{1}{[\text{Ag}^{+}]} = 10^{5.912}$
    $\frac{1}{[\text{Ag}^{+}]} \approx 816680$

    $[\text{Ag}^{+}] = \frac{1}{816680}$
    $[\text{Ag}^{+}] \approx 1.22 \times 10^{-6}$ M

*   **Conclusion:** The calculated concentration of $\text{Ag}^{+}$ ions is approximately $1.22 \times 10^{-6}$ M. This demonstrates how electrochemical measurements can be used for quantitative analysis, a core aspect of **CO3**. The measured potential (0.45 V) is less than the standard potential (0.80 V), indicating that the silver ions are less available for reduction (lower concentration) than under standard conditions, which shifts the equilibrium and lowers the potential.

### Summary and Key Takeaways

*   **Electrochemical cells** are devices that convert chemical energy to electrical energy (galvanic) or vice versa (electrolytic), based on redox reactions.
*   **Electrode potential** quantifies the tendency of a half-reaction to occur, measured relative to a standard electrode (like SHE). Standard electrode potentials ($E^\circ$) are tabulated values under standard conditions.
*   The **Nernst equation** allows us to calculate electrode and cell potentials under non-standard conditions of temperature and concentration.
    *   For a single electrode: $E = E^\circ - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Reduced species}]}{[\text{Oxidized species}]} \right)$ at 25°C.
    *   For a cell: $E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Products}]}{[\text{Reactants}]} \right)$ at 25°C.
*   **Concentration effects:** Lowering the concentration of reactants or increasing the concentration of products generally reduces the cell potential, while the opposite increases it.
*   These principles are fundamental to understanding batteries, fuel cells, electroplating, sensors, and even corrosion mechanisms, directly impacting **CO1** and **CO2**. The ability to calculate and predict potentials based on conditions is key for **CO3**.

Remember these relationships well, as they are the bedrock of quantitative electrochemistry. Understanding how concentrations and temperature affect potential is crucial for designing and analyzing electrochemical systems in various engineering fields.

---

## Sample Questions with Answers

**Question 1 (Conceptual):**
Explain why the Nernst equation is essential for understanding electrochemical processes in real-world applications.

**Answer:**
Real-world electrochemical systems (like batteries, sensors, or during corrosion) rarely operate under standard conditions (1 M concentrations, 1 atm pressure, 25°C). The Nernst equation allows us to calculate the electrode or cell potential under these varying, non-standard conditions. This is critical for:
1.  **Predicting performance:** How much voltage will a battery produce when its electrolyte concentration changes as it discharges?
2.  **Designing systems:** How can we adjust concentrations or temperatures to achieve a desired potential or reaction rate?
3.  **Quantitative analysis:** How can we determine the concentration of a species by measuring the electrode potential (as in Problem 3)?
4.  **Understanding spontaneity:** Will a reaction proceed spontaneously under specific environmental conditions?
Without the Nernst equation, our understanding of electrochemistry would be limited to idealized scenarios. This directly addresses **CO1** by showing the practical applicability of electrochemical concepts.

**Question 2 (Numerical):**
A concentration cell is made by immersing a copper electrode in a $0.1$ M $\text{CuSO}_4$ solution and another copper electrode in a $0.001$ M $\text{CuSO}_4$ solution, both at 25°C. Calculate the cell potential.
Given: $E^\circ_{\text{Cu}^{2+}/\text{Cu}} = +0.34$ V.

**Answer:**
*   **Analysis:** This is a concentration cell. The half-reaction is $\text{Cu}^{2+} + 2\text{e}^- \rightleftharpoons \text{Cu}$. The standard electrode potential for copper is $+0.34$ V. Since both electrodes are copper and the electrolyte is a copper salt solution, the reaction will involve the movement of $\text{Cu}^{2+}$ ions from the more concentrated solution to the less concentrated solution to equalize concentrations. The electrode in the more concentrated solution will act as the anode (oxidation), and the electrode in the less concentrated solution will act as the cathode (reduction).
*   **Setup:**
    *   Anode (oxidation): $\text{Cu} \rightarrow \text{Cu}^{2+} (0.1 \text{ M}) + 2\text{e}^-$ ; $E^\circ_{\text{anode}} = +0.34$ V
    *   Cathode (reduction): $\text{Cu}^{2+} (0.001 \text{ M}) + 2\text{e}^- \rightarrow \text{Cu}$ ; $E^\circ_{\text{cathode}} = +0.34$ V
    *   $n = 2$, Temperature = 25°C
*   **Overall reaction:** $\text{Cu} (\text{in } 0.1 \text{ M}) + \text{Cu}^{2+} (0.001 \text{ M}) \rightarrow \text{Cu}^{2+} (0.1 \text{ M}) + \text{Cu} (\text{in } 0.001 \text{ M})$ - *Wait, this looks wrong. The overall reaction should drive towards equalizing concentrations.*

Let's re-think: In a concentration cell, the *spontaneous* reaction is always from the higher concentration to the lower concentration to reduce the difference.
*   **Corrected Setup:**
    *   Anode (Oxidation): $\text{Cu} (\text{in } 0.1 \text{ M } \text{CuSO}_4) \rightarrow \text{Cu}^{2+} (0.1 \text{ M}) + 2\text{e}^-$
        $E_{\text{anode}} = E^\circ_{\text{Cu}^{2+}/\text{Cu}} - \frac{0.0592}{2} \log_{10} \left( \frac{[0.1]}{1} \right) = 0.34 - 0.0296 \log_{10}(0.1) = 0.34 - 0.0296(-1) = 0.34 + 0.0296 = 0.3696$ V
    *   Cathode (Reduction): $\text{Cu}^{2+} (0.001 \text{ M}) + 2\text{e}^- \rightarrow \text{Cu} (\text{in } 0.001 \text{ M } \text{CuSO}_4)$
        $E_{\text{cathode}} = E^\circ_{\text{Cu}^{2+}/\text{Cu}} - \frac{0.0592}{2} \log_{10} \left( \frac{[1]}{0.001} \right) = 0.34 - 0.0296 \log_{10}(1000) = 0.34 - 0.0296(3) = 0.34 - 0.0888 = 0.2512$ V
*   **Cell Potential Calculation:**
    $E_{\text{cell}} = E_{\text{cathode}} - E_{\text{anode}}$
    $E_{\text{cell}} = 0.2512 \text{ V} - 0.3696 \text{ V}$
    $E_{\text{cell}} = -0.1184$ V

*   **Alternative Nernst for Cell:**
    $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = 0.34 - 0.34 = 0$ V.
    Overall Reaction: $\text{Cu} (\text{anode}) + \text{Cu}^{2+} (0.001 \text{ M}) \rightarrow \text{Cu}^{2+} (0.1 \text{ M}) + \text{Cu} (\text{cathode})$
    $E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Products}]}{[\text{Reactants}]} \right)$
    $E_{\text{cell}} = 0 - \frac{0.0592}{2} \log_{10} \left( \frac{0.1}{0.001} \right)$
    $E_{\text{cell}} = -0.0296 \log_{10} (100)$
    $E_{\text{cell}} = -0.0296 \times 2$
    $E_{\text{cell}} = -0.0592$ V

*   **Re-evaluation and Correction:** Ah, the mistake is in assigning anode/cathode for the *calculation*. The convention for $E_{\text{cell}} = E_{\text{cathode}} - E_{\text{anode}}$ uses the *actual potentials* at the electrodes. The Nernst equation for the *cell* is more straightforward if we consider the overall reaction. The spontaneous direction drives the system towards equilibrium. The species in higher concentration tends to react (oxidize) to produce more ions in the lower concentration solution.
    *   **Correct approach using the Nernst equation for the cell:**
        The overall reaction is driven by the difference in concentration. The electrode with the higher $\text{Cu}^{2+}$ concentration ($0.1$ M) will be the anode (oxidation), and the electrode with the lower $\text{Cu}^{2+}$ concentration ($0.001$ M) will be the cathode (reduction).
        Anode: $\text{Cu} \rightarrow \text{Cu}^{2+}(0.1 \text{ M}) + 2\text{e}^-$
        Cathode: $\text{Cu}^{2+}(0.001 \text{ M}) + 2\text{e}^- \rightarrow \text{Cu}$
        Overall reaction: $\text{Cu} (\text{anode}) + \text{Cu}^{2+}(0.001 \text{ M}) \rightarrow \text{Cu}^{2+}(0.1 \text{ M}) + \text{Cu} (\text{cathode})$
        $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = +0.34 - (+0.34) = 0$ V.
        Nernst equation for the cell:
        $E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Products}]}{[\text{Reactants}]} \right)$
        $E_{\text{cell}} = 0 - \frac{0.0592}{2} \log_{10} \left( \frac{[\text{Cu}^{2+}]_{\text{anode}}}{[\text{Cu}^{2+}]_{\text{cathode}}} \right)$
        $E_{\text{cell}} = -0.0296 \log_{10} \left( \frac{0.1}{0.001} \right)$
        $E_{\text{cell}} = -0.0296 \log_{10} (100)$
        $E_{\text{cell}} = -0.0296 \times 2$
        $E_{\text{cell}} = -0.0592$ V

*   **Final Answer:** The cell potential is $-0.0592$ V. (Note: The negative sign indicates that the reaction as written (anode in higher conc, cathode in lower conc) is not spontaneous. The spontaneous direction is the reverse reaction, meaning electrons flow from the lower concentration electrode to the higher concentration electrode. A positive voltage would be obtained if we reversed the electrodes' roles in the calculation or simply took the absolute value of the driving force for concentration equalization. However, the standard calculation yields $-0.0592$ V for the described setup.)

**Question 3 (Application/Exam-Oriented):**
When a metal M is placed in a solution of its ions, its electrode potential is measured to be $-0.45$ V at 25°C. The standard electrode potential for M is $-0.52$ V. Assuming the reaction involves $n=2$ electrons, calculate the concentration of the metal ions in the solution.

**Answer:**
*   **Understanding:** We are given the actual electrode potential ($E$) and the standard electrode potential ($E^\circ$) and need to find the concentration of the metal ions. The reaction is $\text{M}^{2+} + 2\text{e}^- \rightleftharpoons \text{M}$. Here, $\text{Ox} = \text{M}^{2+}$ and $\text{Red} = \text{M}$ (solid, activity=1).
*   **Nernst Equation:**
    $E = E^\circ - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{Red}]}{[\text{Ox}]} \right)$
    $E = E^\circ - \frac{0.0592}{n} \log_{10} \left( \frac{[\text{M}]}{[\text{M}^{2+}]} \right)$
    Since $[\text{M}]$ (solid metal) = 1:
    $E = E^\circ - \frac{0.0592}{n} \log_{10} \left( \frac{1}{[\text{M}^{2+}]} \right)$
*   **Substituting Values:**
    $E = -0.45$ V
    $E^\circ = -0.52$ V
    $n = 2$

    $-0.45 = -0.52 - \frac{0.0592}{2} \log_{10} \left( \frac{1}{[\text{M}^{2+}]} \right)$
*   **Solving for $[\text{M}^{2+}]$:**
    $\frac{0.0592}{2} \log_{10} \left( \frac{1}{[\text{M}^{2+}]} \right) = -0.52 - (-0.45)$
    $0.0296 \log_{10} \left( \frac{1}{[\text{M}^{2+}]} \right) = -0.07$
    $\log_{10} \left( \frac{1}{[\text{M}^{2+}]} \right) = \frac{-0.07}{0.0296}$
    $\log_{10} \left( \frac{1}{[\text{M}^{2+}]} \right) \approx -2.365$
*   **Taking the antilog:**
    $\frac{1}{[\text{M}^{2+}]} = 10^{-2.365}$
    $\frac{1}{[\text{M}^{2+}]} \approx 0.004315$
*   **Final Concentration:**
    $[\text{M}^{2+}] = \frac{1}{0.004315}$
    $[\text{M}^{2+}] \approx 0.2317$ M

*   **Conclusion:** The concentration of metal ions in the solution is approximately $0.2317$ M. The measured potential ($-0.45$ V) is less negative than the standard potential ($-0.52$ V). This means the reaction is less prone to oxidation than under standard conditions. According to the Nernst equation, this implies a higher concentration of $\text{M}^{2+}$ ions in the solution (which we calculated), making the reduction of $\text{M}^{2+}$ slightly more favorable. This type of calculation is very common in electroanalytical chemistry, linking to **CO3**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=IV4IUsholjg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=kYGDGvL4Xf8) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=l_a6hSj935s) |
