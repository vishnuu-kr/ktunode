---
title: "Electrochemical Cell - Electrode potential- Nernst equation for single electrode and cell (Numerical problems)- Reference electrodes – SHE & Calomel electrode –Construction and Working - Electrochemical series - Applications – Glass Electrode & pH Measurement-Conductivity- Measurement using Digital conductivity meter."
subject: "CHEMISTRY FOR INFORMATION SCIENCE & ELECTRICAL SCIENCE"
module: "Module 1: Electrochemistry and Corrosion Science"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da073"
status: "completed"
scrapedAt: "2026-05-23T17:33:09.922Z"
---
# Chemistry for Information Science & Electrical Science

## Module 1: Electrochemistry and Corrosion Science

### Topic: Electrochemical Cells, Electrode Potentials, and the Nernst Equation

Welcome to Module 1, where we delve into the fascinating world of electrochemistry! This area is crucial for understanding how chemical reactions can generate electricity and how we can harness that for various applications, especially relevant in information and electrical sciences. We'll explore the fundamental building blocks of electrochemical systems, how we measure their "driving force," and how external factors influence these potentials.

#### Understanding Electrochemical Cells: The Heart of Electrochemistry

At its core, an electrochemical cell is a device that converts chemical energy into electrical energy, or vice versa, through spontaneous or non-spontaneous redox (reduction-oxidation) reactions. Think of it like a tiny, controlled chemical battery.

*   **Redox Reactions:** Remember your basic chemistry? Redox reactions involve the transfer of electrons. One species loses electrons (oxidation) and another gains electrons (reduction). In an electrochemical cell, these two processes are separated, forcing the electrons to travel through an external circuit, creating an electric current. This is the fundamental principle behind batteries that power your phones and laptops!

*   **Anode and Cathode:** In an electrochemical cell, we have two key components:
    *   The **Anode:** This is where oxidation occurs. Electrons are released here.
    *   The **Cathode:** This is where reduction occurs. Electrons are consumed here.
    *   A common mnemonic is "An Ox" (Anode = Oxidation) and "Red Cat" (Reduction = Cathode). It's worth remembering these!

*   **Electrolyte:** This is the medium that allows ions to move between the anode and cathode, completing the electrical circuit internally. It's often a solution or molten salt.

*   **Salt Bridge (or Porous Membrane):** To maintain electrical neutrality in the two half-cells, a salt bridge is used. It allows ions to migrate from one half-cell to the other, balancing the charge buildup caused by the electron transfer. Without it, the reaction would quickly stop. Imagine a traffic controller ensuring the flow of both electrons (external circuit) and ions (internal circuit) remains balanced.

#### Electrode Potential: The Driving Force of a Reaction

Every single electrode immersed in an electrolyte has the tendency to either gain or lose electrons, leading to a potential difference between the electrode and the electrolyte. This is the **single electrode potential**.

*   **How it Arises:** When a metal electrode is placed in a solution of its ions, two opposing processes occur:
    1.  **Dissolution (Oxidation):** Metal atoms from the electrode lose electrons and enter the solution as positive ions ($M \rightarrow M^{n+} + ne^-$).
    2.  **Deposition (Reduction):** Metal ions from the solution gain electrons and deposit as metal atoms onto the electrode ($M^{n+} + ne^- \rightarrow M$).
    *   A dynamic equilibrium is established, and the electrode develops a potential relative to the solution.

*   **Measuring Electrode Potential:** It's impossible to measure the potential of a single electrode directly. Why? Because we need a complete circuit to measure potential. To overcome this, we compare the potential of any given electrode (called the **test electrode**) with that of a **reference electrode**, which has a *defined and constant* potential.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=QXT4OVM4vFk) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=kYGDGvL4Xf8) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=l_a6hSj935s) |


#### Reference Electrodes: Our Anchors in the Electrochemical Sea

Reference electrodes are fundamental to electrochemistry. They provide a stable, reproducible potential against which other electrode potentials can be measured. Think of them as a fixed reference point on a ruler.

##### 1. Standard Hydrogen Electrode (SHE): The Universal Standard

The **Standard Hydrogen Electrode (SHE)** is the ultimate reference electrode, defined as having a potential of **0 Volts** at standard conditions.

*   **Construction:**
    *   It consists of a platinum electrode, coated with platinum black (to increase surface area and catalytic activity), immersed in a solution of **1 M HCl**.
    *   The solution contains $H^+$ ions at a concentration of 1 M.
    *   Hydrogen gas ($H_2$) at a pressure of **1 atm** is bubbled over the platinum surface.
    *   The temperature is maintained at **25°C (298 K)**.

*   **Working:**
    *   The reaction occurring at the platinum surface is: $2H^+ (aq) + 2e^- \rightleftharpoons H_2 (g)$
    *   If this electrode acts as the cathode, the reaction is $2H^+ (aq) + 2e^- \rightarrow H_2 (g)$.
    *   If it acts as the anode, the reaction is $H_2 (g) \rightarrow 2H^+ (aq) + 2e^-$.
    *   By definition, the potential for the SHE at standard conditions is **0 V**.

*   **Practicality:** While the SHE is the fundamental standard, it's not very practical for routine laboratory use due to the need for handling hydrogen gas and maintaining precise conditions. This leads us to more convenient reference electrodes.

##### 2. Saturated Calomel Electrode (SCE): A Workhorse Reference

The **Saturated Calomel Electrode (SCE)** is a widely used and very convenient reference electrode.

*   **Construction:**
    *   It consists of a glass tube containing mercury ($Hg$).
    *   A paste of **mercurous chloride** ($Hg_2Cl_2$, commonly known as calomel) is in contact with the mercury.
    *   This calomel paste is then immersed in a **saturated solution of potassium chloride** ($KCl$).
    *   A porous plug (like a sintered glass frit or a ceramic tip) allows electrical contact with the external solution.

*   **Working:** The electrode reaction involves the equilibrium between calomel and chloride ions:
    $Hg_2Cl_2 (s) + 2e^- \rightleftharpoons 2Hg (l) + 2Cl^- (aq)$
    *   The potential of the SCE is determined by the concentration of $Cl^-$ ions. Since it's a saturated solution, the $Cl^-$ concentration is effectively constant and reproducible, giving a stable potential.
    *   The potential of a saturated calomel electrode at 25°C is approximately **+0.241 V** relative to the SHE.

*   **Advantages:** SCE is relatively easy to construct, stable, and its potential is not affected by atmospheric oxygen or carbon dioxide.

#### The Nernst Equation: Linking Potential to Concentration

We've talked about electrode potentials, but what happens when the conditions aren't "standard" (i.e., concentrations are not 1 M, gas pressures are not 1 atm)? This is where the **Nernst Equation** comes in. It's a cornerstone of electrochemistry, allowing us to calculate electrode potentials under non-standard conditions. It directly connects the electrical potential of an electrode or a cell to the concentrations of the reacting species.

##### For a Single Electrode:

Consider a general electrode reaction:
$M^{n+} (aq) + ne^- \rightleftharpoons M (s)$

The Nernst equation for this single electrode is:

$E = E^0 - \frac{RT}{nF} \ln \frac{1}{[M^{n+}]}$

Where:
*   $E$ is the electrode potential under non-standard conditions.
*   $E^0$ is the **standard electrode potential** (the potential under standard conditions). This value is unique for each electrode and is tabulated.
*   $R$ is the ideal gas constant (8.314 J/mol·K).
*   $T$ is the absolute temperature in Kelvin (K).
*   $n$ is the number of moles of electrons transferred in the reaction.
*   $F$ is the Faraday constant (96,485 C/mol), the charge of one mole of electrons.
*   $[M^{n+}]$ is the molar concentration (or activity) of the metal ions in the solution.

*   **Simplifying the Equation:** For convenience, especially at 25°C (298 K), the term $\frac{RT}{F}$ can be converted to a base-10 logarithm and evaluated:
    *   $\frac{RT}{nF} \ln(x) = \frac{2.303 RT}{nF} \log_{10}(x)$
    *   At 298 K, $\frac{2.303 RT}{F} \approx 0.0591$ V.
    *   So, the equation becomes: $E = E^0 - \frac{0.0591}{n} \log_{10} \frac{1}{[M^{n+}]}$
    *   Or, more commonly written as: $E = E^0 + \frac{0.0591}{n} \log_{10} [M^{n+}]$ (by inverting the fraction and changing the sign).

*   **Key Insight:** This equation tells us that if the concentration of metal ions ($[M^{n+}]$) increases, the potential ($E$) becomes more positive (more oxidizing tendency). Conversely, if the concentration decreases, the potential becomes more negative. This makes intuitive sense: a higher concentration of positive ions in solution wants to be reduced more strongly.

##### Numerical Problem (Single Electrode):

**Problem:** Calculate the potential of a zinc electrode immersed in a 0.01 M $ZnSO_4$ solution at 25°C. The standard electrode potential ($E^0$) for the $Zn^{2+}/Zn$ couple is -0.76 V.

**Solution:**
The electrode reaction is: $Zn^{2+} (aq) + 2e^- \rightleftharpoons Zn (s)$
Here, $n=2$, $[Zn^{2+}] = 0.01$ M, and $E^0 = -0.76$ V.

Using the Nernst equation at 298 K:
$E = E^0 + \frac{0.0591}{n} \log_{10} [Zn^{2+}]$
$E = -0.76 \, V + \frac{0.0591}{2} \log_{10} (0.01)$
$E = -0.76 \, V + \frac{0.0591}{2} \log_{10} (10^{-2})$
$E = -0.76 \, V + \frac{0.0591}{2} (-2)$
$E = -0.76 \, V - 0.0591 \, V$
$E = -0.8191 \, V$

**Interpretation:** The potential of the zinc electrode in this dilute solution is more negative than its standard potential, indicating a slightly stronger tendency for zinc to be oxidized.

##### For an Electrochemical Cell:

An electrochemical cell consists of two half-cells. The overall cell potential ($E_{cell}$) is the difference between the cathode potential and the anode potential:

$E_{cell} = E_{cathode} - E_{anode}$

If both half-reactions are under non-standard conditions, we can apply the Nernst equation to each and then find the cell potential. For a general cell reaction:
$aA + bB \rightleftharpoons cC + dD$

The Nernst equation for the cell potential is:

$E_{cell} = E^0_{cell} - \frac{RT}{nF} \ln \frac{[C]^c [D]^d}{[A]^a [B]^b}$

Where:
*   $E_{cell}$ is the cell potential under non-standard conditions.
*   $E^0_{cell}$ is the **standard cell potential**, calculated as $E^0_{cell} = E^0_{cathode} - E^0_{anode}$.
*   $n$ is the total number of moles of electrons transferred in the balanced overall reaction.
*   $[A], [B], [C], [D]$ are the activities (approximated by concentrations) of the species.

*   **At 298 K (using log base 10):**
    $E_{cell} = E^0_{cell} - \frac{0.0591}{n} \log_{10} \frac{[C]^c [D]^d}{[A]^a [B]^b}$

*   **Important Note:** For pure solids and liquids (like metals $M$ or $Hg$) and solvents like water, their activities are taken as unity (1) and do not appear in the Nernst equation.

##### Numerical Problem (Cell):

**Problem:** Consider a galvanic cell constructed with a copper electrode immersed in 1 M $CuSO_4$ solution and a silver electrode immersed in 0.1 M $AgNO_3$ solution. Calculate the cell potential at 25°C.
Given: $E^0_{Cu^{2+}/Cu} = +0.34$ V, $E^0_{Ag^{+}/Ag} = +0.80$ V.

**Solution:**
First, we need to determine which electrode is the cathode and which is the anode. The species with the more positive standard reduction potential will be reduced (cathode), and the other will be oxidized (anode).
*   $E^0_{Ag^{+}/Ag} = +0.80$ V
*   $E^0_{Cu^{2+}/Cu} = +0.34$ V

Since $+0.80 > +0.34$, silver ions will be reduced, and copper will be oxidized.

*   **Cathode (Reduction):** $Ag^+ (aq) + e^- \rightarrow Ag (s)$
*   **Anode (Oxidation):** $Cu (s) \rightarrow Cu^{2+} (aq) + 2e^-$

To balance electrons, we multiply the cathode reaction by 2:
$2Ag^+ (aq) + 2e^- \rightarrow 2Ag (s)$

The overall cell reaction is: $Cu (s) + 2Ag^+ (aq) \rightarrow Cu^{2+} (aq) + 2Ag (s)$
Here, $n=2$ (since 2 electrons are transferred).

Now, calculate the standard cell potential:
$E^0_{cell} = E^0_{cathode} - E^0_{anode} = E^0_{Ag^{+}/Ag} - E^0_{Cu^{2+}/Cu}$
$E^0_{cell} = +0.80 \, V - (+0.34 \, V) = +0.46 \, V$

Now, we apply the Nernst equation. The concentrations are:
*   $[Ag^+] = 0.1$ M
*   $[Cu^{2+}] = 1$ M

$E_{cell} = E^0_{cell} - \frac{0.0591}{n} \log_{10} \frac{[Cu^{2+}]}{[Ag^+]^2}$

Notice that $Cu(s)$ and $Ag(s)$ are pure solids, so their activities are 1.
$E_{cell} = +0.46 \, V - \frac{0.0591}{2} \log_{10} \frac{1 \, M}{(0.1 \, M)^2}$
$E_{cell} = +0.46 \, V - \frac{0.0591}{2} \log_{10} \frac{1}{0.01}$
$E_{cell} = +0.46 \, V - \frac{0.0591}{2} \log_{10} (100)$
$E_{cell} = +0.46 \, V - \frac{0.0591}{2} (2)$
$E_{cell} = +0.46 \, V - 0.0591 \, V$
$E_{cell} = +0.4009 \, V$

**Interpretation:** The cell potential under these non-standard conditions (0.1 M $AgNO_3$) is lower than the standard cell potential, which makes sense because the concentration of the ion involved in the reduction ($Ag^+$) is lower than standard.

#### The Electrochemical Series: A Table of Potentials

The **Electrochemical Series** (also known as the activity series or electromotive series) is a list of elements arranged in order of their standard electrode potentials. This series is incredibly useful for predicting the spontaneity of redox reactions and the relative strengths of oxidizing and reducing agents.

*   **How it Works:** Elements are listed from the most easily oxidized (most negative $E^0$) at the top to the most easily reduced (most positive $E^0$) at the bottom.
*   **Key Principles:**
    *   A more reactive metal (lower in the series, more negative $E^0$) will displace a less reactive metal (higher in the series, more positive $E^0$) from its salt solution. For example, Zinc ($E^0 = -0.76$ V) can displace Copper ($E^0 = +0.34$ V) from $CuSO_4$ solution because Zinc is more easily oxidized.
    *   A stronger oxidizing agent is found at the top (more positive $E^0$), and a stronger reducing agent is found at the bottom (more negative $E^0$).

*   **Relevance:** This concept helps us understand material compatibility in electrical systems and predict corrosion behavior. For instance, knowing the relative positions of metals in the series can help in selecting suitable metals for different environments to prevent degradation.

#### Applications of Electrode Potentials and the Nernst Equation

The concepts of electrode potentials and the Nernst equation are vital in many areas:

*   **Batteries and Fuel Cells:** Designing and understanding the voltage output of various battery chemistries relies heavily on electrode potentials. The Nernst equation helps predict how voltage changes with reactant concentrations and operating temperature.
*   **Corrosion Prevention:** Understanding which metals will corrode and in what environment is directly related to their electrode potentials. Sacrificial anodes (more reactive metals) are used to protect less reactive metals.
*   **Electroplating:** The potentials involved determine the efficiency and quality of electroplating processes, where a thin layer of one metal is deposited onto another.
*   **Sensors:** Many sensors, especially electrochemical sensors, rely on measuring electrode potentials to determine the concentration of specific ions or molecules.

### pH Measurement and the Glass Electrode

Measuring $pH$ is a fundamental task in many scientific disciplines, and electrochemistry provides a highly effective tool for it.

#### The Glass Electrode: A Selective Ion Sensor

The **Glass Electrode** is the most common electrode used for $pH$ measurement. It's a remarkable example of how specific chemical properties can be exploited to sense ions.

*   **Construction:**
    *   It consists of a thin-walled glass bulb made of a special type of glass (e.g., Pyrex or similar borosilicate glass) that is permeable to $H^+$ ions.
    *   Inside the bulb, there is a solution of known $pH$, usually a dilute $HCl$ solution (e.g., 0.1 M).
    *   A **standard internal reference electrode** (often a $Ag/AgCl$ electrode, which has a stable potential) is immersed in this internal solution.

*   **Working Principle:**
    1.  **Ion Exchange at the Glass Surface:** When the glass bulb is immersed in a solution, an equilibrium is established between the $H^+$ ions in the solution and the $H^+$ ions bound to the silanol groups ($Si-OH$) on the surface of the glass membrane.
        *   $H^+_{solution} + OH^-_{glass} \rightleftharpoons H^+_{glass} + OH^-_{solution}$
    2.  **Potential Development:** The difference in $H^+$ ion concentration between the external solution and the internal solution across the glass membrane leads to the formation of a **potential difference** across the membrane. This potential is often called the **membrane potential**.
    3.  **pH Dependence:** Crucially, this membrane potential is directly proportional to the $pH$ of the external solution. As the $pH$ changes, the $H^+$ concentration changes, altering the ion exchange equilibrium and thus the potential across the glass.
    4.  **Electrochemical Cell:** The glass electrode, along with an **external reference electrode** (like the SCE), forms a complete electrochemical cell. The potential difference measured by a high-impedance voltmeter is the sum of the potentials of the internal reference electrode, the membrane potential, and the external reference electrode. Since the potentials of the two reference electrodes are constant, the measured potential is directly related to the membrane potential, and thus to the $pH$.

*   **The Equation:** The potential of the glass electrode ($E_{glass}$) relative to the solution can be approximated by a modified Nernst equation:
    $E_{glass} = K + \frac{2.303 RT}{F} \log_{10} [H^+]$
    where $K$ is a constant that includes the potentials of the internal reference electrode, the solution's junction potential, and the potential of the external reference electrode.

    Since $pH = -\log_{10} [H^+]$, we can rewrite this as:
    $E_{glass} = K' - \frac{2.303 RT}{F} pH$
    or, at 25°C:
    $E_{glass} = K' - 0.0591 \, pH$

*   **Calibration:** Because the constant $K'$ can vary slightly due to factors like the specific glass membrane and junction potentials, the $pH$ meter must be calibrated using buffer solutions of known $pH$.

*   **Connection to Course Outcomes:** This directly relates to CO3 (apply appropriate analytical techniques for characterization) and CO1 (explain basic concepts to explore applications). $pH$ measurement is a vital analytical technique.

#### Practical $pH$ Measurement

A typical $pH$ meter setup uses a glass electrode and a combination reference electrode (where the reference electrode is built into the same body as the glass electrode for convenience). The meter is calibrated with at least two standard buffer solutions, and then the $pH$ of the unknown sample is measured.

### Conductivity: The Ability to Conduct Electricity

In electrical science, we're very concerned with how materials conduct electricity. In electrochemistry, we're interested in the conductivity of **solutions** – their ability to conduct an electric current due to the presence of mobile ions.

*   **What is Conductivity?** Conductivity ($\kappa$, kappa) is the reciprocal of resistivity ($\rho$). It measures how easily an electric current flows through a material.
    *   $\kappa = \frac{1}{\rho}$
*   **Units:** The SI unit for conductivity is Siemens per meter ($S/m$), although $S/cm$ is also commonly used.
*   **Factors Affecting Conductivity:**
    1.  **Concentration of Ions:** Higher concentration of ions means more charge carriers, leading to higher conductivity.
    2.  **Nature of Ions:** The mobility of ions (how fast they move in an electric field) affects conductivity. Smaller, lighter ions with higher charge density tend to have higher mobility (e.g., $H^+$ and $OH^-$ are exceptionally mobile).
    3.  **Temperature:** Increased temperature generally increases ion mobility and thus conductivity.
    4.  **Viscosity of the Solvent:** In more viscous solvents, ions move slower, reducing conductivity.

#### Measurement of Conductivity using a Digital Conductivity Meter

Digital conductivity meters are sophisticated instruments designed to measure the electrical conductivity of solutions accurately. They typically work based on an **AC Wheatstone bridge** principle.

*   **The Principle:** A conductivity cell with two electrodes (or sometimes four, for more accurate measurements in dilute solutions) is immersed in the solution. An alternating voltage is applied across the electrodes. The solution's resistance ($R_{solution}$) contributes to the impedance of the circuit.
    *   The conductivity meter measures the resistance of the solution.
    *   The meter then calculates conductivity using the formula:
        $\kappa = \frac{L}{A} \times \frac{1}{R_{solution}}$
        where:
        *   $L$ is the distance between the electrodes.
        *   $A$ is the area of the electrodes.
        *   $\frac{L}{A}$ is called the **cell constant** ($K_{cell}$), which is specific to the conductivity cell and is usually provided by the manufacturer.
        *   $R_{solution}$ is the resistance of the solution.
    *   So, $\kappa = K_{cell} \times \frac{1}{R_{solution}}$

*   **Why AC Voltage?** Direct current (DC) would cause electrolysis (decomposition of the solution) and ion accumulation at the electrodes (polarization), leading to inaccurate readings. AC voltage prevents these effects.

*   **Digital Conductivity Meter Components:**
    1.  **Conductivity Cell:** Contains the electrodes. The cell constant is crucial.
    2.  **Meter:** Contains the electronics to apply AC voltage, measure resistance, and display the conductivity value.
    3.  **Temperature Sensor:** Conductivity is highly temperature-dependent. Most meters have an integrated temperature probe and automatically compensate for temperature variations, displaying the conductivity at a standard temperature (usually 25°C).

*   **Applications:**
    *   **Water Quality Monitoring:** Measuring the total dissolved solids (TDS) in water – higher conductivity usually indicates more dissolved salts and minerals. This is crucial for drinking water, boiler feed water, and environmental monitoring. (Relates to CO1 and CO4).
    *   **Process Control:** In industries, conductivity is used to monitor the concentration of solutions in chemical processes.
    *   **Electroplating Baths:** Maintaining the correct electrolyte concentration.
    *   **Pharmaceuticals:** Ensuring the purity of water used in drug manufacturing.

*   **Connection to Course Outcomes:** Conductivity measurement is a key analytical technique (CO3) and its understanding is crucial for various applications in electrical and information sciences where material properties matter (CO1, CO2).

### Electrochemical Series and Applications

Let's revisit the electrochemical series and emphasize its practical utility.

*   **Predicting Spontaneity:** A cell reaction is spontaneous if $E_{cell} > 0$. This happens when the cathode has a more positive $E^0$ than the anode.
*   **Relative Reactivity:**
    *   Metals that are easily oxidized (more negative $E^0$) are strong reducing agents. They readily lose electrons.
    *   Non-metals that are easily reduced (more positive $E^0$) are strong oxidizing agents. They readily gain electrons.

*   **Applications Summarized:**
    *   **Galvanic Cells (Batteries):** The series helps select electrode materials to achieve a desired voltage.
    *   **Electrolytic Cells:** Used to drive non-spontaneous reactions (like electrolysis of water or electroplating), where an external voltage is applied. The series helps understand the minimum voltage required.
    *   **Corrosion:** Metals higher in the series (more easily oxidized) will corrode more readily. For example, iron ($E^0 \approx -0.44$ V) corrodes in the presence of oxygen and water, while gold ($E^0 \approx +1.50$ V) does not.
        *   **Sacrificial Protection:** Attaching a more reactive metal (like zinc or magnesium) to steel (iron) will cause the more reactive metal to corrode *instead* of the steel, protecting the steel. Think of galvanized iron – the zinc coating corrodes sacrificially. This is a direct application of the electrochemical series. (Connects to CO1).
    *   **Displacement Reactions:** As mentioned, a more reactive metal can displace ions of a less reactive metal from solution.
    *   **Electroplating:** The potential applied must be carefully controlled, considering the electrode potentials of the metals involved, to ensure a smooth, adherent coating.

### Sample Questions with Answers

Here are some questions to test your understanding, covering both conceptual aspects and typical exam formats:

**Question 1 (Conceptual):**
Explain why it is impossible to measure the potential of a single electrode directly. How is this problem overcome in practice?

**Answer:**
It is impossible to measure the potential of a single electrode directly because an electrode potential arises from the tendency of an electrode to gain or lose electrons when in contact with an electrolyte. To measure a potential difference, a complete electrical circuit must be formed. A single electrode, by itself, cannot form a complete circuit that allows for the measurement of a potential difference.

This problem is overcome in practice by using a **reference electrode**. A reference electrode has a stable and well-defined potential (e.g., Standard Hydrogen Electrode with $E^0 = 0$ V, or Saturated Calomel Electrode with a known potential). The potential of the test electrode is then measured *relative* to the potential of this reference electrode, forming a complete electrochemical cell. The overall cell potential is measured, and since the reference electrode's potential is known, the potential of the test electrode can be calculated.

**Question 2 (Numerical):**
Calculate the $pH$ of a solution in which a hydrogen electrode (used as a half-cell) shows a potential of $-0.295$ V at 25°C when coupled with a Standard Hydrogen Electrode.

**Answer:**
The hydrogen electrode reaction is $2H^+ (aq) + 2e^- \rightleftharpoons H_2 (g)$.
The Nernst equation for this is: $E = E^0 - \frac{0.0591}{n} \log_{10} \frac{P_{H_2}}{[H^+]^2}$.
Here, $E^0 = 0$ V for the hydrogen electrode.
We assume the hydrogen gas pressure ($P_{H_2}$) is 1 atm (standard condition).
So, $E = - \frac{0.0591}{2} \log_{10} \frac{1}{[H^+]^2}$
$E = - \frac{0.0591}{2} \log_{10} [H^+]^{-2}$
$E = - \frac{0.0591}{2} (-2 \log_{10} [H^+])$
$E = 0.0591 \log_{10} [H^+]$

We are given $E = -0.295$ V.
$-0.295 \, V = 0.0591 \log_{10} [H^+]$
$\log_{10} [H^+] = \frac{-0.295}{0.0591} \approx -5$

Now, we know that $pH = -\log_{10} [H^+]$.
From $\log_{10} [H^+] = -5$, we get $[H^+] = 10^{-5}$ M.
Therefore, $pH = -\log_{10} (10^{-5}) = 5$.

**Question 3 (Application/Conceptual):**
A zinc rod is placed in a solution of copper sulfate. What will happen, and why? Refer to the electrochemical series.

**Answer:**
When a zinc rod is placed in a copper sulfate solution, zinc will displace copper from the solution. This happens because zinc is higher in the electrochemical series (more reactive, more easily oxidized) than copper.
*   Zinc has a more negative standard electrode potential ($E^0_{Zn^{2+}/Zn} = -0.76$ V) compared to copper ($E^0_{Cu^{2+}/Cu} = +0.34$ V).
*   This means zinc has a greater tendency to lose electrons (oxidize) than copper.
*   The reaction that will occur is: $Zn(s) + Cu^{2+}(aq) \rightarrow Zn^{2+}(aq) + Cu(s)$.
*   The zinc rod will get coated with copper, and the blue color of the copper sulfate solution will gradually disappear as $Cu^{2+}$ ions are consumed and $Zn^{2+}$ ions are formed. This is a classic displacement reaction driven by differences in electrode potentials.

**Question 4 (Multiple Choice - Exam Oriented):**
Which of the following statements about the Standard Hydrogen Electrode (SHE) is FALSE?
(a) It is defined to have a potential of 0 V at standard conditions.
(b) It consists of a platinum electrode immersed in a 1 M $HCl$ solution.
(c) Hydrogen gas at 1 atm pressure is bubbled over the platinum electrode.
(d) Its potential is dependent on the concentration of $H^+$ ions in the solution.

**Answer:**
(d) Its potential is dependent on the concentration of $H^+$ ions in the solution.

**Reasoning:** The SHE is defined to have a potential of 0 V *under standard conditions*, which includes a $1 M$ concentration of $H^+$ ions. If the concentration of $H^+$ ions deviates from 1 M, its potential would change according to the Nernst equation. However, its *defined* potential is 0 V only at standard conditions. Therefore, stating it is dependent on $H^+$ concentration as a fundamental truth about the SHE (without the context of deviation from standard conditions) makes this statement false in the context of its definition as the zero point. The question is tricky here; while its potential *does* change with $H^+$ concentration, its *definition* sets it at zero under specific conditions. The other options accurately describe its construction and definition. A more precise question would be: "Under non-standard conditions, the potential of a hydrogen electrode..."

**Question 5 (Application - Conductivity):**
A conductivity meter reading of a water sample is 200 $\mu S/cm$. What does this suggest about the water quality?

**Answer:**
A conductivity reading of 200 $\mu S/cm$ suggests that the water contains a moderate amount of dissolved ionic substances (salts, minerals).
*   Pure water has a very low conductivity (around 0.055 $\mu S/cm$ at 25°C).
*   Conductivity is often used as an indicator of Total Dissolved Solids (TDS). A reading of 200 $\mu S/cm$ generally falls within the range of good quality drinking water, although specific standards vary by region.
*   In industrial contexts, this level might require further treatment depending on the application (e.g., for boiler feed water or sensitive electronic processes, much lower conductivity would be desired).
*   It indicates that the water is not pure and contains dissolved electrolytes, which contribute to its ability to conduct electricity.

This concludes our journey through electrochemical cells, potentials, the Nernst equation, reference electrodes, $pH$ measurement, and conductivity. Remember, these fundamental principles underpin many modern technologies, from your smartphone to advanced sensors! Keep practicing the numerical problems, as they are crucial for exam success.