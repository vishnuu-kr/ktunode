---
title: "Electrochemical Cell - Electrode potential- Nernst equation for single electrode and cell (Numerical problems)- Reference electrodes – SHE & Calomel electrode –Construction and Working - Electrochemical series - Applications – Glass Electrode & pH Measurement-Conductivity- Measurement using Digital conductivity meter. Li-ion battery & H 2-O2 fuel cell (acid electrolyte only) construction and working."
subject: "CHEMISTRY FOR INFORMATION SCIENCE AND ELECTRICAL SCIENCE"
module: "Module 1: Electrochemistry and Corrosion Science"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5dc7"
status: "completed"
scrapedAt: "2026-05-20T16:37:14.506Z"
---
## Module 1: Electrochemistry and Corrosion Science - Electrochemical Cells, Electrode Potentials, and Applications

Welcome, everyone, to our journey into the fascinating world of electrochemistry! This module, "Electrochemistry and Corrosion Science," is absolutely crucial for understanding how chemical reactions can generate electricity and, conversely, how electrical energy can drive chemical changes. For us, in Information Science and Electrical Science, this understanding is not just academic; it's the bedrock for technologies like batteries powering our devices, sensors detecting environmental changes, and preventing the degradation of materials we rely on.

Our focus today is on **Electrochemical Cells**, the fundamental devices that harness these electron transfers. We'll delve into the concept of **Electrode Potential**, understand the vital **Nernst Equation**, explore how we measure these potentials using **Reference Electrodes** like SHE and the Calomel electrode, and how these relate to the **Electrochemical Series**. We'll also see practical applications like **pH measurement** using the Glass Electrode and how **Conductivity** is measured. Finally, we'll touch upon the powerhouses of modern technology: **Li-ion Batteries** and **H₂-O₂ Fuel Cells** (specifically with acid electrolytes).

Think of this module as building the fundamental building blocks. Once we grasp these, we can start to appreciate and even design advanced systems. So, let's get started!

---

### 1. Electrochemical Cells: The Heart of Electrochemistry

What exactly *is* an electrochemical cell? At its core, it's a system where a **redox reaction** (that's a reduction-oxidation reaction, where electrons are transferred) occurs, and this transfer of electrons can be used to do work, like lighting up an LED, or can be driven by an external source of energy.

There are two main types of electrochemical cells:

*   **Galvanic Cells (or Voltaic Cells):** These are the ones that *produce* electricity. They convert chemical energy into electrical energy. Think of a simple battery in your remote control – that’s a galvanic cell! The spontaneous redox reaction inside it generates the electrical current. This directly relates to **Course Outcome 1 (CO1)**, where we explain basic concepts of electrochemistry to explore applications.
*   **Electrolytic Cells:** These *consume* electricity to drive a non-spontaneous redox reaction. This is how we electroplate metals or purify materials. You're forcing a chemical reaction to happen using electrical power. This also ties into **CO1** and, as we'll see later, **CO3** when we discuss analytical techniques.

In both cases, we have two key components: **electrodes**.

#### 1.1 Electrodes: The Reaction Sites

An electrode is essentially a conductor (usually a metal or graphite) through which electric current enters or leaves an electrolyte. We have two types of electrodes in a cell:

*   **Anode:** This is where **oxidation** occurs. Remember: **Anode = Oxidation**. Electrons are *released* at the anode. In a galvanic cell, the anode is the negative terminal.
*   **Cathode:** This is where **reduction** occurs. Remember: **Cathode = Reduction**. Electrons are *consumed* at the cathode. In a galvanic cell, the cathode is the positive terminal.

Now, the magic happens at the interface between the electrode and the electrolyte. This is where the chemical reactions directly interact with the electrical flow.

---

### 2. Electrode Potential: The Driving Force of Electron Transfer

When a metal electrode is immersed in a solution of its own ions, a potential difference arises between the electrode and the solution. This is called the **electrode potential**. Why does this happen?

Imagine a piece of zinc metal placed in a solution of zinc sulfate (ZnSO₄). Zinc atoms (Zn) in the metal have a tendency to lose electrons and become zinc ions (Zn²⁺) that dissolve into the solution.

$$ \text{Zn(s)} \rightarrow \text{Zn}^{2+}\text{(aq)} + 2e^- $$

This process leaves excess electrons on the zinc metal, making it negatively charged. However, some Zn²⁺ ions from the solution might also come into contact with the electrode and pick up electrons to become neutral Zn atoms, depositing onto the electrode.

$$ \text{Zn}^{2+}\text{(aq)} + 2e^- \rightarrow \text{Zn(s)} $$

These two opposing processes – metal dissolving into ions and ions depositing as metal – establish an **equilibrium**. At this equilibrium, there's a specific potential difference across the electrode-solution interface. This is the **single electrode potential**.

The magnitude of this potential depends on the metal's inherent tendency to lose or gain electrons and the concentration of ions in the solution. Metals like Sodium or Potassium are very eager to lose electrons (get oxidized), so they have a high tendency to form positive ions and thus a significant negative electrode potential. Metals like Copper or Gold are more reluctant to lose electrons; they tend to *gain* electrons (get reduced), so they have more positive electrode potentials.

---

### 3. The Nernst Equation: Quantifying Electrode Potential

While we understand *why* electrode potential arises, we need a way to *calculate* it, especially when conditions aren't standard. This is where the brilliant **Nernst Equation** comes in. It was developed by Walther Nernst and is fundamental to electrochemistry. It connects the electrode potential to the standard electrode potential and the concentrations (or activities) of the species involved.

#### 3.1 Nernst Equation for a Single Electrode

Consider a general reversible electrode reaction:

$$ \text{M}^{n+}\text{(aq)} + ne^- \rightleftharpoons \text{M(s)} $$

Here, Mⁿ⁺ is the metal ion in solution, M is the solid metal, and 'n' is the number of electrons transferred.

The Nernst equation for this half-cell is:

$$ E_{\text{electrode}} = E^0_{\text{electrode}} - \frac{RT}{nF} \ln \left( \frac{[\text{M(s)}]}{[\text{M}^{n+}]\text{(aq)}} \right) $$

Let's break this down:

*   $E_{\text{electrode}}$: This is the electrode potential under non-standard conditions (what we want to find).
*   $E^0_{\text{electrode}}$: This is the **standard electrode potential**. This is a fixed value for each electrode reaction, measured under standard conditions (1 M concentration for ions, 1 atm pressure for gases, usually at 25°C). This is a crucial value we'll refer to again.
*   $R$: The ideal gas constant (8.314 J/mol·K).
*   $T$: The absolute temperature in Kelvin (remember, 25°C = 298.15 K).
*   $n$: The number of moles of electrons transferred in the reaction.
*   $F$: Faraday's constant (96,485 C/mol), which is the charge of one mole of electrons.
*   $[\text{M(s)}]$: The activity (or concentration) of the solid metal M. For pure solids, this is taken as 1.
*   $[\text{M}^{n+}]\text{(aq)}$: The molar concentration (or activity) of the metal ion in solution.

Since the activity of a pure solid is 1, the equation simplifies to:

$$ E_{\text{electrode}} = E^0_{\text{electrode}} - \frac{RT}{nF} \ln \left( \frac{1}{[\text{M}^{n+}]\text{(aq)}} \right) $$

Or, using the property of logarithms:

$$ E_{\text{electrode}} = E^0_{\text{electrode}} + \frac{RT}{nF} \ln [\text{M}^{n+}]\text{(aq)} $$

Often, we use the base-10 logarithm ($\log_{10}$) instead of the natural logarithm ($\ln$). The conversion is $\ln(x) = 2.303 \log_{10}(x)$. Also, at the common temperature of 298.15 K (25°C), the term $\frac{RT}{F}$ becomes approximately 0.0257 V. So, the equation becomes:

$$ E_{\text{electrode}} = E^0_{\text{electrode}} + \frac{0.0591}{n} \log_{10} [\text{M}^{n+}]\text{(aq)} \quad \text{(at 25°C)} $$

**Key Takeaway:** This equation tells us that as the concentration of metal ions increases, the electrode potential becomes *more positive* (because metal ions are more available to be reduced), and vice versa. This is vital for understanding how concentration changes affect the cell's voltage.

**Exam Tip:** Always check the temperature and whether you need to use $\ln$ or $\log_{10}$. Most standard problems are at 25°C and use the $\log_{10}$ form.

#### 3.2 Nernst Equation for the Whole Cell

An electrochemical cell consists of two half-cells. The **cell potential** ($E_{\text{cell}}$), also called the electromotive force (EMF), is the difference in potential between the two electrodes.

$$ E_{\text{cell}} = E_{\text{cathode}} - E_{\text{anode}} $$

If the reaction is spontaneous and producing electricity (galvanic cell), $E_{\text{cell}}$ will be positive.

For a general cell reaction:

$$ a\text{A} + b\text{B} \rightarrow c\text{C} + d\text{D} $$

The Nernst equation for the cell potential is:

$$ E_{\text{cell}} = E^0_{\text{cell}} - \frac{RT}{nF} \ln \left( \frac{[\text{C}]^c [\text{D}]^d}{[\text{A}]^a [\text{B}]^b} \right) $$

Where:
*   $E^0_{\text{cell}} = E^0_{\text{cathode}} - E^0_{\text{anode}}$ (Standard cell potential).
*   $n$ is the total number of electrons transferred in the balanced redox reaction.
*   $[\text{A}], [\text{B}], [\text{C}], [\text{D}]$ are the concentrations (or activities) of the reactants and products. Pure solids and liquids are omitted (activity = 1).

**Numerical Problem Example:**

Let's consider a Daniell cell: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)
The reactions are:
Anode (Oxidation): Zn(s) → Zn²⁺(aq) + 2e⁻
Cathode (Reduction): Cu²⁺(aq) + 2e⁻ → Cu(s)
Overall: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)

Given:
*   $E^0_{\text{Zn}^{2+}/\text{Zn}} = -0.76$ V
*   $E^0_{\text{Cu}^{2+}/\text{Cu}} = +0.34$ V
*   Temperature = 25°C
*   Concentration of Zn²⁺ = 0.1 M
*   Concentration of Cu²⁺ = 0.01 M

**Solution:**

1.  **Calculate the standard cell potential ($E^0_{\text{cell}}$):**
    The cathode is where reduction happens (Cu²⁺/Cu), and the anode is where oxidation happens (Zn/Zn²⁺).
    $E^0_{\text{cell}} = E^0_{\text{cathode}} - E^0_{\text{anode}} = E^0_{\text{Cu}^{2+}/\text{Cu}} - E^0_{\text{Zn}^{2+}/\text{Zn}}$
    $E^0_{\text{cell}} = (+0.34 \text{ V}) - (-0.76 \text{ V}) = +1.10 \text{ V}$

2.  **Identify $n$:** The number of electrons transferred in both half-reactions is 2. So, $n=2$.

3.  **Apply the Nernst Equation:**
    We use the form at 25°C: $E_{\text{cell}} = E^0_{\text{cell}} - \frac{0.0591}{n} \log_{10} \left( \frac{[\text{Products}]}{[\text{Reactants}]} \right)$
    In our overall reaction, Zn(s) and Cu(s) are solids (activity = 1).
    $E_{\text{cell}} = E^0_{\text{cell}} - \frac{0.0591}{n} \log_{10} \left( \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]} \right)$

    Substitute the values:
    $E_{\text{cell}} = 1.10 \text{ V} - \frac{0.0591}{2} \log_{10} \left( \frac{0.1}{0.01} \right)$
    $E_{\text{cell}} = 1.10 \text{ V} - 0.02955 \log_{10} (10)$
    $E_{\text{cell}} = 1.10 \text{ V} - 0.02955 \times 1$
    $E_{\text{cell}} = 1.07045 \text{ V}$

So, the cell potential under these non-standard conditions is approximately 1.07 V. Notice how the voltage decreased slightly from the standard value due to the different concentrations. This is a very common type of problem in exams.

---
