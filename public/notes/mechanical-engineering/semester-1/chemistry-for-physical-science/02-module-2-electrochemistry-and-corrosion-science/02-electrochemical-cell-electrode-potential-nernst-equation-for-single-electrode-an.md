---
title: "Electrochemical Cell- Electrode potential- Nernst equation for single electrode and cell (Numerical problems)- Reference electrodes – SHE & Calomel electrode –Construction and Working"
subject: "CHEMISTRY FOR PHYSICAL SCIENCE"
module: "Module 2: Electrochemistry and Corrosion Science"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1eddfeb4799d95e833b1"
status: "completed"
scrapedAt: "2026-05-20T17:37:02.902Z"
---
# Chemistry for Physical Science: Module 2 - Electrochemistry and Corrosion Science

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=QXT4OVM4vFk) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=x00oX54G0Cg) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=l_a6hSj935s) |


## Topic: Electrochemical Cells, Electrode Potentials, Nernst Equation, and Reference Electrodes

Welcome, everyone! Today, we're diving into a really exciting area of chemistry – **Electrochemistry**. This isn't just about reactions in test tubes; it's the science behind batteries powering your phones, the processes that prevent rust, and much more. In this session, we’ll build a strong foundation by understanding how electrochemical cells work, how we measure the 'driving force' of these reactions (electrode potential), and how we can predict their behavior under different conditions using the Nernst equation. We'll also get to know some crucial tools of the trade: reference electrodes like the Standard Hydrogen Electrode (SHE) and the Calomel electrode.

This topic is fundamental for our **Course Outcome CO2: Explain the Basic Concepts of Electrochemistry and Corrosion to Explore the Possible Applications in Various Engineering Fields.** Understanding these principles will directly help us see how we can harness electrical energy from chemical reactions and prevent the degradation of materials, which are critical in many engineering applications.

### 1. Introduction to Electrochemical Cells

So, what exactly is an electrochemical cell? Imagine two different metal rods dipped into solutions of their own ions. If we connect these rods with a wire and the solutions with a salt bridge, something remarkable happens: a spontaneous chemical reaction occurs, and electricity flows! This setup is an **electrochemical cell**.

At its heart, an electrochemical cell converts chemical energy into electrical energy (like in a battery) or uses electrical energy to drive a non-spontaneous chemical reaction (like in electrolysis). We often classify them into two main types:

*   **Galvanic Cells (or Voltaic Cells):** These are the "powerhouses." They utilize spontaneous redox (reduction-oxidation) reactions to generate electricity. Think of a standard AA battery – that's a galvanic cell at work! The chemical reactions *happen naturally* and release energy as electrical work.
*   **Electrolytic Cells:** These are the "energy consumers." They use external electrical energy to force a non-spontaneous chemical reaction to occur. An example is electroplating, where we use electricity to deposit a thin layer of metal onto another object. The reaction wouldn't happen on its own; we need to 'push' it with electricity.

For our discussion today, we'll focus primarily on **galvanic cells** as they are the basis for understanding electrode potentials and the Nernst equation.

### 2. Electrode Potential: The "Push" of a Reaction

Every metal (or other substance capable of participating in a redox reaction) immersed in a solution of its ions has a tendency to either gain or lose electrons. This tendency is quantified by the **electrode potential**.

Think of it like this: imagine two people with different desires to give away money. One might be very generous and willing to part with their cash easily, while the other is quite stingy. The "generous" person has a higher tendency to give away money. Similarly, some metals have a greater tendency to lose electrons (oxidize) than others.

When a metal electrode (say, zinc, Zn) is placed in a solution containing its ions (e.g., Zn²⁺), two things can happen at the electrode surface:

1.  **Oxidation:** The metal atoms can lose electrons and enter the solution as positive ions:
    `Zn(s) → Zn²⁺(aq) + 2e⁻`
2.  **Reduction:** If there are electrons available (perhaps from another process), positive metal ions from the solution can gain electrons and deposit as metal atoms onto the electrode:
    `Zn²⁺(aq) + 2e⁻ → Zn(s)`

These two processes are always occurring simultaneously, but one will usually dominate. The **electrode potential** is a measure of the electrical potential difference that develops between the electrode and the electrolyte solution due to these electron transfer processes.

A more positive electrode potential indicates a greater tendency for reduction to occur (ions gaining electrons). A more negative electrode potential indicates a greater tendency for oxidation to occur (metal losing electrons).

**Important Point:** We can never measure the potential of a single electrode directly. Potential is always a *difference* between two points. Therefore, to measure the potential of an electrode, we always compare it to a **reference electrode**, which has a defined and constant potential. We'll discuss these crucial reference electrodes shortly.

### 3. Standard Electrode Potential ($E^0$)

To compare the potentials of different electrodes fairly, we need a standard set of conditions. This is where **standard electrode potential ($E^0$)** comes in. It's the potential measured when:

*   The electrode is immersed in a 1 molar (1 M) solution of its ions.
*   The temperature is a constant 25°C (298 K).
*   The pressure of any gases involved is 1 atmosphere (or 1 bar, depending on the convention).

These conditions allow us to create a standard scale of electrode potentials. The values are typically listed as *reduction potentials*. A higher (more positive) standard reduction potential means the substance is more easily reduced.

For example, the standard reduction potential for Zinc is $E^0(Zn^{2+}/Zn) = -0.76$ V, while for Copper it's $E^0(Cu^{2+}/Cu) = +0.34$ V. This tells us that copper ions have a much greater tendency to be reduced (gain electrons) than zinc ions. Conversely, zinc metal has a greater tendency to be oxidized (lose electrons) than copper metal. This is why, if you place a zinc rod in a copper sulfate solution, the zinc will corrode (oxidize) and deposit copper!

This concept of standard electrode potential is vital for **CO2**, as it helps us predict the feasibility of redox reactions and thus the potential for corrosion or energy generation.

### 4. The Nernst Equation: Beyond Standard Conditions

The real world rarely operates under standard conditions (1 M concentrations, 25°C). What happens when concentrations change or the temperature is different? That’s where the **Nernst equation** comes to the rescue. Developed by Walther Nernst, it allows us to calculate the electrode potential (or cell potential) under *non-standard* conditions.

Let's consider a general reversible electrode reaction:
`Oxidized form + ne⁻ ⇌ Reduced form`

For example, in the reduction of a metal ion:
`Mⁿ⁺(aq) + ne⁻ ⇌ M(s)`

The Nernst equation relates the electrode potential ($E$) to the standard electrode potential ($E^0$) and the concentrations (or activities) of the reactants and products.

The equation for a single electrode is:

$E = E^0 - \frac{RT}{nF} \ln \frac{[\text{Reduced Form}]}{[\text{Oxidized Form}]}$

Where:
*   $E$ is the electrode potential under non-standard conditions.
*   $E^0$ is the standard electrode potential.
*   $R$ is the ideal gas constant (8.314 J/mol·K).
*   $T$ is the absolute temperature in Kelvin.
*   $n$ is the number of moles of electrons transferred in the balanced reaction.
*   $F$ is Faraday's constant (96485 C/mol).
*   $[\text{Reduced Form}]$ and $[\text{Oxidized Form}]$ are the activities (or concentrations, for simplicity) of the reduced and oxidized species, respectively.

**Quick Tip for Exams:** At 25°C (298 K), the term $\frac{RT}{F}$ can be converted to a more commonly used constant.
$\frac{RT}{F} = \frac{8.314 \text{ J/mol·K} \times 298 \text{ K}}{96485 \text{ C/mol}} \approx 0.0257 \text{ V}$

And if we use the base-10 logarithm (log), the equation becomes:

$E = E^0 - \frac{0.0592}{n} \log \frac{[\text{Reduced Form}]}{[\text{Oxidized Form}]}$ (at 25°C)

**Let's break this down with an example:**

Consider the zinc electrode: `Zn²⁺(aq) + 2e⁻ ⇌ Zn(s)`

Here, the oxidized form is Zn²⁺(aq) and the reduced form is Zn(s). The concentration of a pure solid is taken as 1.
So, the Nernst equation for this half-reaction is:

$E_{Zn^{2+}/Zn} = E^0_{Zn^{2+}/Zn} - \frac{0.0592}{2} \log \frac{[Zn(s)]}{[Zn^{2+}(aq)]}$
$E_{Zn^{2+}/Zn} = E^0_{Zn^{2+}/Zn} - \frac{0.0592}{2} \log \frac{1}{[Zn^{2+}(aq)]}$
$E_{Zn^{2+}/Zn} = E^0_{Zn^{2+}/Zn} + \frac{0.0592}{2} \log [Zn^{2+}(aq)]$  (since $\log(1/x) = -\log x$)

This equation tells us:
*   If the concentration of Zn²⁺ ions *increases*, the potential becomes *more positive* (more favorable for reduction, less favorable for oxidation).
*   If the concentration of Zn²⁺ ions *decreases*, the potential becomes *more negative* (less favorable for reduction, more favorable for oxidation).

This is a crucial concept for **CO3: Apply appropriate analytical techniques for different engineering materials.** Understanding how potentials change with concentration helps in designing sensors and analytical methods.

#### 4.1 Nernst Equation for a Cell

An electrochemical cell is made of two half-cells. The overall cell potential ($E_{cell}$) is the difference between the potentials of the two half-cells:

$E_{cell} = E_{cathode} - E_{anode}$

Where $E_{cathode}$ is the potential of the cathode (where reduction occurs) and $E_{anode}$ is the potential of the anode (where oxidation occurs). Both $E_{cathode}$ and $E_{anode}$ can be calculated using the Nernst equation for their respective half-reactions.

The **standard cell potential ($E^0_{cell}$)** is the difference between the standard electrode potentials:

$E^0_{cell} = E^0_{cathode} - E^0_{anode}$

This $E^0_{cell}$ tells us the maximum voltage the cell can produce under standard conditions.

Now, let's combine these for a cell under non-standard conditions. If we have a cell reaction:
`aA + bB → cC + dD`

The Nernst equation for the cell potential is:

$E_{cell} = E^0_{cell} - \frac{RT}{nF} \ln \frac{[C]^c [D]^d}{[A]^a [B]^b}$

Or at 25°C:

$E_{cell} = E^0_{cell} - \frac{0.0592}{n} \log \frac{[C]^c [D]^d}{[A]^a [B]^b}$

Where $n$ is the total number of electrons transferred in the overall balanced redox reaction.

**Example: Daniel Cell**
A classic example is the Daniel Cell, consisting of a Zinc electrode in ZnSO₄ solution and a Copper electrode in CuSO₄ solution.

*   **Anode (Oxidation):** `Zn(s) → Zn²⁺(aq) + 2e⁻` ($E^0_{Zn^{2+}/Zn} = -0.76$ V)
*   **Cathode (Reduction):** `Cu²⁺(aq) + 2e⁻ → Cu(s)` ($E^0_{Cu^{2+}/Cu} = +0.34$ V)
*   **Overall Reaction:** `Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)`
*   **Standard Cell Potential:** $E^0_{cell} = E^0_{cathode} - E^0_{anode} = +0.34 \text{ V} - (-0.76 \text{ V}) = +1.10 \text{ V}$

Now, let's say the concentrations are: [Zn²⁺] = 0.1 M and [Cu²⁺] = 0.01 M.
The Nernst equation for the Daniel cell would be:

$E_{cell} = E^0_{cell} - \frac{0.0592}{2} \log \frac{[Zn^{2+}]}{[Cu^{2+}]}$

$E_{cell} = 1.10 \text{ V} - \frac{0.0592}{2} \log \frac{0.1}{0.01}$
$E_{cell} = 1.10 \text{ V} - \frac{0.0592}{2} \log(10)$
$E_{cell} = 1.10 \text{ V} - \frac{0.0592}{2} \times 1$
$E_{cell} = 1.10 \text{ V} - 0.0296 \text{ V}$
$E_{cell} = 1.0704 \text{ V}$

See? The cell voltage is slightly lower than the standard potential because the concentrations are not 1 M. This is crucial for understanding how batteries discharge over time as concentrations change.

### 5. Numerical Problems on Nernst Equation

Let's work through a couple of numerical examples to solidify your understanding. This is a common area for exam questions!

**Problem 1:**
Calculate the electrode potential of a Magnesium electrode immersed in a 0.01 M Mg²⁺ solution at 25°C.
Given: $E^0_{Mg^{2+}/Mg} = -2.37$ V.

**Solution:**
The half-reaction is: `Mg²⁺(aq) + 2e⁻ → Mg(s)`
Here, $n=2$. The concentration of Mg²⁺ is 0.01 M.
Using the Nernst equation for a single electrode at 25°C:
$E_{Mg^{2+}/Mg} = E^0_{Mg^{2+}/Mg} - \frac{0.0592}{2} \log \frac{1}{[Mg^{2+}]}$
$E_{Mg^{2+}/Mg} = -2.37 \text{ V} - \frac{0.0592}{2} \log \frac{1}{0.01}$
$E_{Mg^{2+}/Mg} = -2.37 \text{ V} - \frac{0.0592}{2} \log (100)$
$E_{Mg^{2+}/Mg} = -2.37 \text{ V} - \frac{0.0592}{2} \times 2$
$E_{Mg^{2+}/Mg} = -2.37 \text{ V} - 0.0592 \text{ V}$
$E_{Mg^{2+}/Mg} = -2.4292 \text{ V}$

Remember this: as the concentration of the metal ion decreases, the potential becomes more negative, meaning the metal is *more* likely to oxidize.

**Problem 2:**
Consider a cell with the following reaction: `Ni(s) + 2Ag⁺(aq) → Ni²⁺(aq) + 2Ag(s)`
Given: $E^0_{Ni^{2+}/Ni} = -0.25$ V and $E^0_{Ag^{+}/Ag} = +0.80$ V.
Calculate the standard cell potential ($E^0_{cell}$). Then, calculate the cell potential if $[Ni^{2+}] = 0.02$ M and $[Ag^{+}] = 0.01$ M at 25°C.

**Solution:**
First, identify the cathode and anode. The species with the higher standard reduction potential acts as the cathode (reduction occurs), and the one with the lower potential acts as the anode (oxidation occurs).
*   Silver: $E^0_{Ag^{+}/Ag} = +0.80$ V (Higher, so Cathode)
*   Nickel: $E^0_{Ni^{2+}/Ni} = -0.25$ V (Lower, so Anode)

*   **Standard Cell Potential:**
    $E^0_{cell} = E^0_{cathode} - E^0_{anode}$
    $E^0_{cell} = E^0_{Ag^{+}/Ag} - E^0_{Ni^{2+}/Ni}$
    $E^0_{cell} = +0.80 \text{ V} - (-0.25 \text{ V})$
    $E^0_{cell} = +1.05 \text{ V}$

*   **Cell Potential under Non-Standard Conditions:**
    The overall reaction is `Ni(s) + 2Ag⁺(aq) → Ni²⁺(aq) + 2Ag(s)`
    Here, $n=2$ (since 2 electrons are transferred).
    The Nernst equation for the cell is:
    $E_{cell} = E^0_{cell} - \frac{0.0592}{n} \log \frac{[\text{Products}]}{[\text{Reactants}]}$
    $E_{cell} = E^0_{cell} - \frac{0.0592}{2} \log \frac{[Ni^{2+}]}{[Ag^{+}]^2}$ (Note: [Ni(s)] and [Ag(s)] are 1)

    Now, plug in the given concentrations:
    $E_{cell} = 1.05 \text{ V} - \frac{0.0592}{2} \log \frac{0.02}{(0.01)^2}$
    $E_{cell} = 1.05 \text{ V} - \frac{0.0592}{2} \log \frac{0.02}{0.0001}$
    $E_{cell} = 1.05 \text{ V} - \frac{0.0592}{2} \log (200)$
    $E_{cell} = 1.05 \text{ V} - 0.0296 \times \log(200)$
    $E_{cell} = 1.05 \text{ V} - 0.0296 \times 2.301$
    $E_{cell} = 1.05 \text{ V} - 0.0681 \text{ V}$
    $E_{cell} = 0.9819 \text{ V}$

The cell potential decreases when concentrations deviate from standard conditions. This is a direct application for **CO3**.

### 6. Reference Electrodes: The Benchmarks of Potential

As I mentioned earlier, we can't measure the potential of a single electrode in isolation. We need a stable, known potential to compare against. These are called **reference electrodes**. They are designed to maintain a constant electrode potential regardless of the composition of the test solution.

Two very common and important reference electrodes are the **Standard Hydrogen Electrode (SHE)** and the **Calomel Electrode**.

#### 6.1 The Standard Hydrogen Electrode (SHE)

The SHE is the **ultimate reference electrode** by definition. It's the baseline against which all other electrode potentials are measured.

*   **Construction:**
    The SHE consists of a platinum electrode that is coated with finely divided platinum black (a catalyst for hydrogen reactions). This platinum electrode is immersed in a 1 M solution of hydrogen ions (H⁺), typically HCl. Pure hydrogen gas at a pressure of 1 atm is bubbled continuously over the platinum surface.

    Imagine a glass tube with a platinum wire inside, coated with platinum black, which is dipped into an acidic solution. A stream of hydrogen gas is bubbled through a side arm onto the platinum surface.

*   **Working:**
    The electrode reaction occurring at the platinum surface is the reversible reaction of hydrogen gas and hydrogen ions:
    `2H⁺(aq) + 2e⁻ ⇌ H₂(g)`

    By convention, the standard electrode potential of the SHE is defined as **zero volts (0.00 V)** at all temperatures.

*   **Why it's a Standard:**
    Because its potential is fixed at zero, any measured potential of another electrode when coupled with the SHE will be the potential of that other electrode itself. For example, if we set up a cell with a Zinc electrode (in 1 M Zn²⁺) and the SHE, and we measure a cell potential of -0.76 V, it means the Zinc electrode has a potential of -0.76 V relative to the SHE.

*   **Limitations:**
    The SHE is excellent for defining standards but is impractical for routine laboratory use.
    *   It requires a continuous supply of pure hydrogen gas, which can be inconvenient and potentially hazardous.
    *   The concentration of H⁺ ions must be maintained at exactly 1 M, and the H₂ gas pressure at exactly 1 atm. Any deviation from these conditions means it's no longer the *standard* hydrogen electrode, and its potential will change.
    *   The platinum catalyst can be poisoned by impurities in the solution.

#### 6.2 The Saturated Calomel Electrode (SCE)

Because of the practical difficulties with the SHE, we often use other, more convenient reference electrodes. The Saturated Calomel Electrode (SCE) is one of the most widely used.

*   **Construction:**
    The SCE typically consists of a glass tube containing mercury (Hg), a paste of mercury and calomel (mercurous chloride, Hg₂Cl₂), and a saturated solution of potassium chloride (KCl). The electrode system is in contact with the test solution through a porous junction, often a porous ceramic plug or a salt bridge.

    Picture a glass tube. Inside, there's mercury. Resting on the mercury is a thick, grey paste made of Hg and Hg₂Cl₂. This paste is in contact with a saturated KCl solution, and this solution then connects to your experimental setup via a porous plug.

*   **Working:**
    The electrode reaction involves the equilibrium between solid calomel, mercury, and chloride ions:
    `Hg₂Cl₂(s) + 2e⁻ ⇌ 2Hg(l) + 2Cl⁻(aq)`

    The potential of the SCE depends on the concentration of Cl⁻ ions. If we use a *saturated* KCl solution, the concentration of Cl⁻ ions is effectively constant and high, leading to a stable and reproducible electrode potential. The potential of the SCE at 25°C is approximately **+0.241 V** relative to the SHE.

*   **Advantages:**
    *   **Convenient:** Easy to prepare and maintain.
    *   **Stable:** Provides a reproducible and stable potential.
    *   **No Gas:** Doesn't require handling flammable hydrogen gas.
    *   **Relatively Inexpensive:** Compared to some other reference electrodes.

*   **Disadvantages:**
    *   **Temperature Sensitive:** Its potential changes with temperature, though it's less sensitive than some other electrodes.
    *   **Contamination:** If the KCl solution leaks into the test solution, it can affect the electrolyte.

**Connection to Learning Outcomes:** Understanding reference electrodes is crucial for **CO3**, as they are the backbone of electrochemical measurements and analytical techniques. Without a stable reference, it would be impossible to accurately measure potentials that tell us about material properties or reaction conditions.

### Summary and Key Takeaways

*   **Electrochemical Cells** convert chemical energy to electrical energy (galvanic) or vice versa (electrolytic).
*   **Electrode Potential** is the potential difference between an electrode and its electrolyte, indicating its tendency to undergo oxidation or reduction.
*   **Standard Electrode Potential ($E^0$)** is measured under defined conditions (1 M, 25°C, 1 atm).
*   The **Nernst Equation** allows us to calculate electrode and cell potentials under non-standard conditions, which is vital for real-world applications. Remember the formula: $E = E^0 - \frac{0.0592}{n} \log Q$ (at 25°C), where $Q$ is the reaction quotient.
*   **Reference Electrodes** (like SHE and Calomel) provide a stable, known potential for comparison.
    *   **SHE:** Defined as 0 V, impractical for routine use.
    *   **SCE:** Convenient and stable, with a potential of about +0.241 V (at 25°C).

These concepts are the building blocks for understanding battery technology, electroplating, corrosion prevention, and many analytical electrochemical techniques. Keep practicing those Nernst equation problems – they are excellent for exam preparation!

---

### Sample Questions and Answers

**1. Conceptual Question:**
What is the fundamental difference between a galvanic cell and an electrolytic cell?

**Answer:**
A galvanic cell utilizes a spontaneous redox reaction to generate electrical energy. In contrast, an electrolytic cell uses external electrical energy to drive a non-spontaneous redox reaction. Think of a galvanic cell as a battery that powers something, and an electrolytic cell as a process that uses electricity to force a reaction, like electroplating. This directly relates to **CO2**.

**2. Numerical Question:**
Calculate the potential of a silver electrode immersed in a 0.005 M AgNO₃ solution at 25°C. The standard electrode potential for Ag⁺/Ag is +0.80 V.

**Answer:**
The half-reaction is: `Ag⁺(aq) + e⁻ → Ag(s)`. Here, $n=1$.
The Nernst equation at 25°C is: $E = E^0 - \frac{0.0592}{n} \log \frac{1}{[Ag^{+}]}$
Given: $E^0 = +0.80$ V, $[Ag^{+}] = 0.005$ M, $n=1$.
$E = +0.80 \text{ V} - \frac{0.0592}{1} \log \frac{1}{0.005}$
$E = +0.80 \text{ V} - 0.0592 \log (200)$
$E = +0.80 \text{ V} - 0.0592 \times 2.301$
$E = +0.80 \text{ V} - 0.1363 \text{ V}$
$E = +0.6637 \text{ V}$

This demonstrates the application of the Nernst equation for calculating potentials under non-standard conditions, aligning with **CO3**.

**3. Conceptual Question related to Reference Electrodes:**
Why is the Standard Hydrogen Electrode (SHE) defined to have a potential of 0 V, and what is a practical disadvantage of using it?

**Answer:**
The SHE is defined as 0 V to serve as the universal reference point against which all other electrode potentials are measured. This allows for the creation of a consistent and comparable scale of electrode potentials. A significant practical disadvantage is that it requires a constant supply of pure hydrogen gas at a specific pressure and a 1 M concentration of H⁺ ions, making it inconvenient and potentially hazardous for routine laboratory work compared to electrodes like the Saturated Calomel Electrode. This connects to the understanding required for **CO2** and **CO3**.

**4. Numerical Question on Cell Potential:**
A galvanic cell is constructed with a Nickel electrode in a 1 M NiSO₄ solution and a Lead electrode in a 1 M Pb(NO₃)₂ solution. Calculate the standard cell potential. If the concentrations are changed to [Ni²⁺] = 0.1 M and [Pb²⁺] = 0.01 M, what is the new cell potential at 25°C?
Given: $E^0_{Ni^{2+}/Ni} = -0.25$ V, $E^0_{Pb^{2+}/Pb} = -0.13$ V.

**Answer:**
*   **Identify Cathode and Anode:**
    *   Lead: $E^0_{Pb^{2+}/Pb} = -0.13$ V (Higher potential, so Cathode)
    *   Nickel: $E^0_{Ni^{2+}/Ni} = -0.25$ V (Lower potential, so Anode)

*   **Standard Cell Potential ($E^0_{cell}$):**
    The reaction is: `Ni(s) + Pb²⁺(aq) → Ni²⁺(aq) + Pb(s)` (Nickel oxidizes, Lead reduces)
    $E^0_{cell} = E^0_{cathode} - E^0_{anode}$
    $E^0_{cell} = E^0_{Pb^{2+}/Pb} - E^0_{Ni^{2+}/Ni}$
    $E^0_{cell} = -0.13 \text{ V} - (-0.25 \text{ V})$
    $E^0_{cell} = +0.12 \text{ V}$

*   **Cell Potential under Non-Standard Conditions:**
    The reaction is: `Ni(s) + Pb²⁺(aq) → Ni²⁺(aq) + Pb(s)`
    Here, $n=2$.
    The Nernst equation is: $E_{cell} = E^0_{cell} - \frac{0.0592}{n} \log \frac{[Ni^{2+}]}{[Pb^{2+}]}$
    Given: $E^0_{cell} = +0.12$ V, $n=2$, $[Ni^{2+}] = 0.1$ M, $[Pb^{2+}] = 0.01$ M.
    $E_{cell} = 0.12 \text{ V} - \frac{0.0592}{2} \log \frac{0.1}{0.01}$
    $E_{cell} = 0.12 \text{ V} - \frac{0.0592}{2} \log (10)$
    $E_{cell} = 0.12 \text{ V} - \frac{0.0592}{2} \times 1$
    $E_{cell} = 0.12 \text{ V} - 0.0296 \text{ V}$
    $E_{cell} = +0.0904 \text{ V}$

This problem tests the ability to calculate both standard and non-standard cell potentials, a key skill for **CO3**.