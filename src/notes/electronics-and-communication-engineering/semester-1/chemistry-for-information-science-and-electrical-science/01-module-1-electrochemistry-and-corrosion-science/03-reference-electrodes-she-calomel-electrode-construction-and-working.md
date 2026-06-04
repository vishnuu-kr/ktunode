---
title: "Reference electrodes – SHE & Calomel electrode –Construction and Working"
subject: "CHEMISTRY FOR INFORMATION SCIENCE AND ELECTRICAL SCIENCE"
module: "Module 1: Electrochemistry  and Corrosion  Science"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da286"
status: "completed"
scrapedAt: "2026-05-23T17:33:24.140Z"
---
# Module 1: Electrochemistry and Corrosion Science

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=IV4IUsholjg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=kYGDGvL4Xf8) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=l_a6hSj935s) |


## Topic: Reference Electrodes – SHE & Calomel Electrode – Construction and Working

Welcome to our journey into the fascinating world of electrochemistry! In this module, we're diving deep into how electrical energy and chemical reactions are intertwined. Today, we're going to talk about a crucial concept for anyone dealing with electrochemical measurements: **reference electrodes**.

Think of it this way: when you want to measure something precise, like the height of a building, you need a fixed point of reference, right? You measure from the ground. Similarly, in electrochemistry, to measure the "electrical potential" of a reaction or a system, we need a stable, unchanging reference point. This is precisely what a reference electrode provides. Without it, all our potential measurements would be relative and ultimately meaningless.

This topic is directly linked to **Course Outcome 1 (CO1)**, where we aim to explain basic concepts of electrochemistry to explore applications. Understanding reference electrodes is fundamental to understanding electrochemical measurements, which are vital in countless engineering fields, from battery technology to sensor development and corrosion prevention. It also touches upon **Course Outcome 3 (CO3)** as these electrodes are essential tools for characterizing materials and their electrochemical behavior.

Let's start with the gold standard, the ultimate benchmark.

### 1. The Standard Hydrogen Electrode (SHE)

The **Standard Hydrogen Electrode (SHE)** is the cornerstone of all electrochemical potential measurements. It's defined as having a potential of **zero volts (0 V)** at all temperatures. All other electrode potentials are measured relative to this zero point.

**Why is it called "Standard"?**
The "standard" part is key. It implies specific conditions:
*   **Concentration:** The solution must contain hydrogen ions ($H^+$) at an activity of 1. In practical terms, this usually means a 1 M concentration of a strong acid like $HCl$.
*   **Pressure:** The hydrogen gas ($H_2$) must be bubbled through the solution at a partial pressure of 1 atmosphere (atm), which is approximately 101.3 kPa.
*   **Temperature:** The electrode is typically operated at 25°C (298.15 K), though its standard potential is defined as 0V at *any* temperature.

**Construction of SHE:**

Imagine a piece of platinum metal, specially treated to have a rough surface. This is usually a platinum foil coated with finely divided platinum black. Why platinum black? It acts as an excellent catalyst for the hydrogen gas to react (or be produced) and for the electron transfer.

Here's a simplified breakdown of its construction:

*   **Platinum Electrode:** A piece of platinum foil, often coated with platinum black to increase its surface area and catalytic activity.
*   **Hydrogen Gas Supply:** A continuous stream of pure hydrogen gas is bubbled over the platinum surface.
*   **Electrolyte Solution:** A solution containing hydrogen ions, typically 1 M $HCl$, providing the $H^+$ ions for the reaction.
*   **Salt Bridge (Crucial for measurement):** To connect this electrode to the rest of the electrochemical cell without allowing the solutions to mix directly, a salt bridge is used. This is typically a U-shaped tube filled with a saturated solution of $KCl$ or $NH_4NO_3$ held in a gel like agar. The ions in the salt bridge are chosen so they don't interfere with the electrode reactions.

**Working of SHE:**

The fundamental reaction occurring at the SHE is the reversible equilibrium between hydrogen gas and hydrogen ions:

$H_2(g) \rightleftharpoons 2H^+(aq) + 2e^-$

*   **Oxidation:** If the SHE acts as the anode (negative electrode), hydrogen gas loses electrons to form hydrogen ions: $H_2 \rightarrow 2H^+ + 2e^-$.
*   **Reduction:** If the SHE acts as the cathode (positive electrode), hydrogen ions gain electrons to form hydrogen gas: $2H^+ + 2e^- \rightarrow H_2$.

This reversible nature, coupled with the specific standard conditions, ensures that the potential difference at this electrode remains constant and is defined as zero.

**Analogy:** Imagine you're a surveyor measuring elevations. The SHE is like sea level. Everything else is measured relative to it.

**Practical Challenges with SHE:**

While it's the ultimate standard, using the SHE in a laboratory setting can be quite cumbersome.
*   Handling hydrogen gas under pressure requires specialized equipment.
*   Maintaining the platinum black catalyst in its active state can be tricky. It can get poisoned by impurities.
*   The liquid junction potential at the salt bridge interface can introduce small errors.

Because of these practical difficulties, we often use **secondary reference electrodes** that are calibrated against the SHE. These are more convenient for routine use.

### 2. The Saturated Calomel Electrode (SCE)

The **Saturated Calomel Electrode (SCE)** is one of the most widely used secondary reference electrodes. It's popular because it's relatively easy to construct, stable, and reproducible. Its potential is well-established and it's less susceptible to poisoning than the SHE.

**What does "Calomel" mean?**
Calomel is the common name for mercury(I) chloride ($Hg_2Cl_2$).

**Construction of SCE:**

Let's picture the SCE. It's typically a glass tube or cell designed to contain the essential components.

*   **Mercury (Hg):** A pool of pure mercury at the bottom. This is the metallic component.
*   **Calomel Paste:** A paste made of mercury, mercury(I) chloride ($Hg_2Cl_2$), and a saturated solution of potassium chloride ($KCl$). This paste forms the active electrode material.
*   **Saturated KCl Solution:** The calomel paste is immersed in a solution that is saturated with potassium chloride ($KCl$). This maintains a constant ionic environment and a high concentration of chloride ions.
*   **Porous Pot or Fiber Junction:** To allow electrical contact with the external solution, the SCE has a junction. This could be a porous ceramic plug, a glass frit, or a fiber wick saturated with the $KCl$ solution. This junction minimizes the diffusion of $KCl$ into the sample solution while allowing ion flow.
*   **Salt Bridge (Optional but common):** Often, the SCE itself is used with a salt bridge to connect to the main electrochemical cell.

**Diagrammatic Representation (Imagine this as a blackboard sketch):**

```
+-----------------------+  <-- Outer casing (e.g., glass tube)
|                       |
|  Saturated KCl soln.  |
|                       |
|-------[Hg2Cl2/Hg paste]-------+ <-- Calomel paste (Hg + Hg2Cl2 + sat. KCl)
|                       |       |
|       Mercury (Hg)    |       | <-- Contact with
|                       |       |     external solution
+-----------------------+-------+ <-- Porous plug/junction
```

**Working of SCE:**

The SCE operates based on the reversible reduction of mercury(I) chloride ($Hg_2Cl_2$) to mercury ($Hg$) in the presence of chloride ions ($Cl^-$). The half-reaction is:

$Hg_2Cl_2(s) + 2e^- \rightleftharpoons 2Hg(l) + 2Cl^-(aq)$

In this setup:
*   Mercury ($Hg$) is the solid/liquid phase.
*   Mercury(I) chloride ($Hg_2Cl_2$) is also a solid.
*   Potassium chloride ($KCl$) is dissolved in water, providing a high and constant concentration of $Cl^-$ ions. Since the $KCl$ solution is saturated, the concentration of $Cl^-$ ions is constant and high.

The potential of the SCE depends on the concentration of chloride ions. Because it uses a *saturated* $KCl$ solution, the chloride ion concentration is constant, leading to a very stable and reproducible potential.

**The Potential of the SCE:**

The potential of the SCE is independent of the pH of the solution it's immersed in, which is a significant advantage over the SHE. The standard potential of the SCE at 25°C, with respect to the SHE, is approximately **+0.241 V**.

$E_{SCE} = +0.241 \ V$ (at 25°C)

This value is specific to the *saturated* $KCl$ solution. If you use a different concentration of $KCl$ (e.g., 0.1 M or 1 M $KCl$), the potential will be slightly different. Always ensure you know which type of calomel electrode you are using!

**Advantages of SCE:**

*   **Stability:** The potential is very stable and reproducible as long as the $KCl$ remains saturated and the calomel paste is in good contact with mercury.
*   **Convenience:** Easier to set up and use than SHE.
*   **Low Temperature Coefficient:** Its potential doesn't change drastically with small temperature fluctuations.
*   **Less Susceptible to Poisoning:** More robust than the platinum catalyst in SHE.

**Disadvantages of SCE:**

*   **Temperature Dependent:** While less so than SHE, its potential does change with temperature, and tables are available for different temperatures.
*   **Contamination:** If the saturated $KCl$ leaks into the sample solution, it can affect the sample. This is why good junction design is important.
*   **Limited Use in Certain Solutions:** The $KCl$ can react with certain ions (e.g., silver), making it unsuitable for solutions containing $Ag^+$ ions.

**Connection to Course Outcomes:**

*   **CO1 (Electrochemistry Concepts):** Understanding SHE and SCE is fundamental to grasping electrochemical potentials and how they are measured, a core concept in electrochemistry.
*   **CO2 (Engineering Materials):** These electrodes are materials used in analytical instruments. Their construction and stability are properties of engineering materials.
*   **CO3 (Analytical Techniques):** Reference electrodes are essential components of voltammetry, potentiometry, and other electrochemical analytical techniques used for material characterization.

**Exam Focus:**

When studying for exams, pay close attention to:
*   **Definitions:** What is a reference electrode? Why is it needed?
*   **SHE:** Standard conditions, half-reaction, why it's the standard, practical issues.
*   **SCE:** Components, half-reaction, the role of saturated $KCl$, its potential value relative to SHE, advantages and disadvantages.
*   **Comparison:** How does SCE compare to SHE in terms of convenience and stability?

**Quick Recall Tip:** Think of SHE as the "zero point on a ruler" and SCE as a "reliable measuring tape" that you calibrate against that zero point.

### Sample Questions and Answers

**1. Conceptual Question:**
Why is a reference electrode essential in electrochemical measurements?

**Answer:**
A reference electrode is essential because it provides a stable and known potential against which the potential of another electrode (the indicator electrode) in an electrochemical cell can be measured. Without a fixed reference, all potential measurements would be relative and would change depending on the reference electrode used, making it impossible to compare results or determine absolute electrochemical potentials of species. It's like needing a zero mark on a measuring scale to get consistent readings.

**2. Exam-Oriented Question:**
Describe the construction and working principle of the Saturated Calomel Electrode (SCE). Mention its potential value at 25°C.

**Answer:**
**Construction:**
The SCE consists of a glass vessel containing:
*   A pool of mercury at the bottom.
*   A paste of mercury(I) chloride (calomel) and saturated potassium chloride (KCl) solution covering the mercury.
*   A saturated KCl solution filling the rest of the vessel.
*   A porous plug or fiber wick at the bottom or side, which allows electrical contact with the external solution while minimizing mixing.

**Working Principle:**
The SCE works based on the reversible half-reaction:
$Hg_2Cl_2(s) + 2e^- \rightleftharpoons 2Hg(l) + 2Cl^-(aq)$
The potential of the electrode is determined by the solubility product of $Hg_2Cl_2$ and the concentration of $Cl^-$ ions. Since a saturated $KCl$ solution is used, the $Cl^-$ concentration is constant and high, making the potential stable and reproducible.

**Potential Value:**
At 25°C, the potential of the Saturated Calomel Electrode (SCE) relative to the Standard Hydrogen Electrode (SHE) is approximately **+0.241 V**.

**3. Comparison Question:**
What are the main advantages of using an SCE over an SHE in routine laboratory work?

**Answer:**
The main advantages of using an SCE over an SHE in routine laboratory work include:
*   **Convenience and Ease of Use:** SCEs are self-contained and easier to set up and maintain compared to SHE, which requires a constant supply of pure hydrogen gas and careful handling of platinum catalysts.
*   **Stability and Reproducibility:** SCEs offer excellent stability and reproducibility of potential because the saturated $KCl$ solution ensures a constant chloride ion concentration. The platinum catalyst in SHE can be easily poisoned by impurities.
*   **Lower Susceptibility to Poisoning:** The SCE is less affected by common impurities that might deactivate the platinum black in SHE.
*   **pH Independence:** The potential of the SCE is not dependent on the pH of the external solution, unlike the SHE whose potential is directly affected by $H^+$ concentration.

This concludes our introduction to reference electrodes. Mastering these concepts will pave the way for understanding a wide range of electrochemical phenomena and applications!