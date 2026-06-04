---
title: "Electrochemical series - Applications"
subject: "CHEMISTRY FOR INFORMATION SCIENCE AND ELECTRICAL SCIENCE"
module: "Module 1: Electrochemistry  and Corrosion  Science"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f93ff"
status: "completed"
scrapedAt: "2026-05-23T16:01:25.105Z"
---
# Module 1: Electrochemistry and Corrosion Science

## Topic: Electrochemical Series - Applications

Welcome, everyone! Today, we're diving into a really fundamental and incredibly useful concept in electrochemistry: the **Electrochemical Series** and, more importantly, its **applications**. Think of this series as a ranking system for how easily different elements want to gain or lose electrons. It's a powerful tool that helps us understand and predict a wide range of chemical reactions, especially those involving electricity and the degradation of materials.

**(Connecting to Course Outcomes)**

*   **CO1 (Basic Concepts of Electrochemistry and Corrosion):** This entire topic directly addresses CO1. Understanding the electrochemical series is foundational to grasping how electrochemical cells work and why corrosion happens. We'll see how this "ranking" dictates spontaneous reactions and the driving force behind many electrochemical processes.
*   **CO2 (Engineering Materials in Industries):** The applications we'll discuss are directly tied to how we select and use materials in various industries. Knowing the electrochemical series helps us choose the right metals for specific environments to prevent failure and ensure longevity.
*   **CO3 (Analytical Techniques):** While not directly about analytical techniques, the electrochemical series underpins methods used to analyze electrochemical systems, such as potentiometry.

### What is the Electrochemical Series?

Before we jump into applications, let's quickly recap what the electrochemical series is. You've likely encountered the concept of standard reduction potentials ($E^0$). The electrochemical series, often presented as the **Standard Electrode Potential Table** or sometimes the **Activity Series**, is essentially a list of elements (or more accurately, half-reactions) ordered by their standard reduction potentials.

*   **Standard Reduction Potential ($E^0$):** This is the potential of an electrode measured at 25°C (298 K) and 1 atm pressure, with all ion concentrations at 1 M. It quantifies the tendency of a chemical species to gain electrons and be reduced. A more positive $E^0$ means a greater tendency to be reduced. Conversely, a more negative $E^0$ indicates a greater tendency to be oxidized (lose electrons).

Think of it like a "want-to-be-reduced" scale. Elements at the top of the series (more positive $E^0$) are strong oxidizing agents – they readily accept electrons. Elements at the bottom (more negative $E^0$) are strong reducing agents – they readily give up electrons.

**(Referencing Textbooks)**

As you'll find in texts like **Tembe, Kamaluddin, & Krishnan (NPTEL Web-book)** or **Atkins' Physical Chemistry**, this series is derived from the Gibbs Free Energy change of a reaction ($\Delta G^0 = -nFE^0$), where $n$ is the number of electrons transferred and $F$ is Faraday's constant. A more negative $\Delta G^0$ (more spontaneous reaction) corresponds to a more positive $E^0$ for the overall cell reaction (when written as reduction-oxidation).

### Key Concepts to Remember

*   **Oxidation:** Loss of electrons (occurs at the anode).
*   **Reduction:** Gain of electrons (occurs at the cathode).
*   **Electrochemical Cell:** A device that converts chemical energy into electrical energy (galvanic/voltaic cell) or uses electrical energy to drive a non-spontaneous chemical reaction (electrolytic cell).
*   **Spontaneity:** A reaction is spontaneous if the overall cell potential ($E^0_{cell} = E^0_{cathode} - E^0_{anode}$) is positive.

### Applications of the Electrochemical Series

Now, let's get to the really exciting part: where do we use this information? The electrochemical series is incredibly versatile and pops up in many areas of science and engineering.

#### 1. Predicting Spontaneity of Redox Reactions (CO1)

This is the most direct application. If you have two half-reactions, you can predict whether a reaction will occur spontaneously by comparing their standard reduction potentials.

**How it works:**

1.  Identify the two half-reactions involved.
2.  Look up their standard reduction potentials ($E^0$).
3.  The species with the *higher* (more positive) reduction potential will be *reduced* (act as the cathode).
4.  The species with the *lower* (more negative) reduction potential will be *oxidized* (act as the anode).
5.  Calculate the standard cell potential: $E^0_{cell} = E^0_{reduction} - E^0_{oxidation}$.
6.  If $E^0_{cell}$ is positive, the reaction is spontaneous under standard conditions.

**Relatable Example:**

Imagine you have a piece of zinc metal and a solution containing copper ions ($Cu^{2+}$). Let's check the electrochemical series:

*   $Zn^{2+} + 2e^- \rightleftharpoons Zn \quad E^0 = -0.76 \text{ V}$
*   $Cu^{2+} + 2e^- \rightleftharpoons Cu \quad E^0 = +0.34 \text{ V}$

Here, copper ions have a much higher reduction potential (+0.34 V) than zinc ions (-0.76 V). This means $Cu^{2+}$ is more eager to gain electrons than $Zn^{2+}$ is. So, in a reaction between zinc metal and copper ions:

*   **Reduction:** $Cu^{2+} + 2e^- \rightarrow Cu$ (Copper ions get reduced to copper metal)
*   **Oxidation:** $Zn \rightarrow Zn^{2+} + 2e^-$ (Zinc metal gets oxidized to zinc ions)

The overall reaction would be: $Zn(s) + Cu^{2+}(aq) \rightarrow Zn^{2+}(aq) + Cu(s)$

And the cell potential: $E^0_{cell} = (+0.34 \text{ V}) - (-0.76 \text{ V}) = +1.10 \text{ V}$. Since it's positive, this reaction happens spontaneously!

**What does this mean in practice?** If you dip a zinc-coated nail into a solution of copper sulfate (which has $Cu^{2+}$ ions), the zinc will corrode, and you'll see copper metal depositing on the nail. This is a classic demonstration of displacement reactions.

**Exam Tip:** Be careful when you set up the cell potential calculation. Always use $E^0_{cathode} - E^0_{anode}$, where cathode is the species being reduced and anode is the species being oxidized. Or, think of it as $E^0_{higher potential} - E^0_{lower potential}$.

#### 2. Galvanic Corrosion and Cathodic Protection (CO1, CO2)

This is a critical application in preventing material degradation, especially for metals. Corrosion is essentially an electrochemical process. When two dissimilar metals are in contact in an electrolyte (like saltwater or even just moist air), a galvanic cell is formed.

**How it works:**

*   The **less noble** metal (the one with the more negative electrode potential, i.e., more easily oxidized) acts as the **anode** and corrodes.
*   The **more noble** metal (the one with the more positive electrode potential, i.e., more easily reduced) acts as the **cathode**. It is protected from corrosion.

**Real-world Example: Ships and Pipelines**

Think about the hull of a ship. It's often made of steel (primarily iron). If propellers or other components are made of a different metal, say bronze or even stainless steel, a galvanic couple is formed. Iron has a more negative standard electrode potential than most common alloys used in marine environments.

*   **Iron ($Fe$) vs. Copper ($Cu$):** $E^0_{Fe^{2+}/Fe} = -0.44 \text{ V}$, $E^0_{Cu^{2+}/Cu} = +0.34 \text{ V}$. Iron will corrode.
*   **Steel vs. Stainless Steel (e.g., $Cr$ alloys):** The exact potentials vary, but generally, steel (iron) is less noble than many stainless steel grades.

So, the iron in the steel will preferentially corrode, acting as the anode, while the less reactive metal acts as the cathode. This is **galvanic corrosion**.

**Cathodic Protection:** How do we prevent this? We can use **cathodic protection**. The principle is to force the metal we want to protect (e.g., the steel hull) to act as the cathode in a galvanic cell.

There are two main ways:

*   **Sacrificial Anodes:** Attach blocks of a more active metal (more negative potential) to the structure. Metals like magnesium ($E^0_{Mg^{2+}/Mg} = -2.37 \text{ V}$), aluminum, or zinc are often used. These "sacrificial anodes" will corrode preferentially, "sacrificing" themselves to protect the main structure (e.g., the steel hull). This is why you see greyish blocks attached to ship hulls and offshore platforms – those are the sacrificial anodes!
    *   **Connecting to CO2:** This directly relates to choosing materials and understanding their behavior in service. Using zinc anodes for steel protection is a direct application of the electrochemical series.
*   **Impressed Current Cathodic Protection (ICCP):** Use an external DC power source to supply electrons to the structure, forcing it to be the cathode. Inert anodes (like platinum or graphite) are used, and the power source drives the reduction process. This is common for large pipelines or structures where sacrificial anodes would be impractical or require frequent replacement.

**Remember this:** The more negative the electrode potential, the more readily it oxidizes and acts as an anode. To protect a metal, make it a cathode by connecting it to something even *more* negative.

#### 3. Predicting Displacement Reactions (CO1)

We saw the zinc-copper example. The electrochemical series allows us to predict whether a metal will displace the ions of another metal from a solution.

**General Rule:** A metal higher in the electrochemical series (more reactive, more negative $E^0$) can displace a metal lower in the series (less reactive, more positive $E^0$) from its salt solution.

**Analogy:** Think of it as a competition for electrons. The "stronger" competitor (lower $E^0$, more willing to lose electrons) can snatch electrons from the "weaker" competitor (higher $E^0$, less willing to lose electrons).

**Example:**

*   Will silver metal ($Ag$) displace copper ions ($Cu^{2+}$) from a $CuSO_4$ solution?
    *   $Ag^+ + e^- \rightleftharpoons Ag \quad E^0 = +0.80 \text{ V}$
    *   $Cu^{2+} + 2e^- \rightleftharpoons Cu \quad E^0 = +0.34 \text{ V}$
    *   Silver has a higher reduction potential than copper. This means $Ag^+$ is *more easily reduced* than $Cu^{2+}$. So, silver metal cannot displace copper ions. If you put silver into copper sulfate, nothing happens.

*   Will copper metal ($Cu$) displace silver ions ($Ag^+$) from a $AgNO_3$ solution?
    *   $Cu^{2+} + 2e^- \rightleftharpoons Cu \quad E^0 = +0.34 \text{ V}$
    *   $Ag^+ + e^- \rightleftharpoons Ag \quad E^0 = +0.80 \text{ V}$
    *   Copper has a lower reduction potential than silver. Copper metal is more easily oxidized than silver metal. So, copper metal *will* displace silver ions.
    *   Reaction: $Cu(s) + 2Ag^+(aq) \rightarrow Cu^{2+}(aq) + 2Ag(s)$. You'll see silver metal forming on the copper.

**Practical Use:** This is important in refining processes or when dealing with solutions containing multiple metal ions. You can selectively plate one metal over another, or predict if a metal container will react with its contents.

#### 4. Designing Batteries and Electrochemical Cells (CO1)

The electrochemical series is the bedrock of battery technology. A battery is essentially a galvanic cell designed to produce electricity.

**How it works:**

A typical galvanic cell consists of two half-cells: an anode (where oxidation occurs) and a cathode (where reduction occurs), connected by an electrolyte and an external circuit. To get a useful voltage, you need to pair a good oxidizing agent (high $E^0$) with a good reducing agent (low $E^0$).

*   **Higher $E^0$ species (e.g., $Cu^{2+}$ or $Ag^+$) will likely be the cathode.**
*   **Lower $E^0$ species (e.g., $Zn$ or $Li$) will likely be the anode.**

**Examples:**

*   **Daniell Cell:** A classic example, often used for demonstration. Zinc ($E^0 = -0.76 \text{ V}$) and Copper ($E^0 = +0.34 \text{ V}$) half-cells. $E^0_{cell} = +1.10 \text{ V}$. This was an early voltaic cell.
*   **Alkaline Batteries (e.g., $Zn/MnO_2$):** Zinc is the anode ($E^0_{Zn^{2+}/Zn} = -0.76 \text{ V}$), and Manganese Dioxide is the cathode (reduction potential is around +0.6 V for the half-reaction, but depends on the specific chemistry). The potential difference gives the battery its voltage.
*   **Lithium-ion Batteries:** These use lithium as the anode (very low $E^0$, highly reactive) and various metal oxides or sulfides as the cathode. The large difference in electrode potentials between lithium and cathode materials results in high cell voltages. This is why lithium batteries are so powerful and energy-dense.
    *   **Connecting to CO2:** The choice of materials directly impacts the performance, energy density, and lifespan of batteries used in countless electronic devices, from your phone to electric vehicles.

**Exam Question Hint:** Questions often ask to predict the voltage of a cell made from two specific half-cells or to identify which metal will corrode when coupled. Always consult the electrochemical series.

#### 5. Metal Refining and Purification (CO1, CO3)

Electrochemical principles, guided by the series, are crucial in refining metals like copper, aluminum, and zinc.

**Electrolytic Refining of Copper:**

Copper ore is often impure. To get high-purity copper, electrolysis is used.

1.  **Anode:** Impure copper metal.
2.  **Cathode:** Thin sheets of pure copper.
3.  **Electrolyte:** Copper sulfate solution ($CuSO_4$).

When a current is passed:

*   **At the Anode (Oxidation):** Impure copper dissolves. Copper atoms from the impure anode lose electrons to become $Cu^{2+}$ ions and enter the solution. Other less reactive metals (like gold, silver, platinum – which are *more noble* than copper) don't oxidize and fall to the bottom as "anode sludge." More reactive metals (like iron, zinc – which are *less noble* than copper) also oxidize, but their ions ($Fe^{2+}, Zn^{2+}$) are more soluble and remain in the electrolyte.
    $Cu(s, \text{impure}) \rightarrow Cu^{2+}(aq) + 2e^-$
*   **At the Cathode (Reduction):** Pure copper ions ($Cu^{2+}$) from the electrolyte gain electrons and deposit as pure copper metal on the cathode. Since the electrolyte has a sufficient concentration of $Cu^{2+}$ and the cathode potential is controlled, $Cu^{2+}$ ions are preferentially reduced over other metal ions that might be present.
    $Cu^{2+}(aq) + 2e^- \rightarrow Cu(s, \text{pure})$

The electrochemical series tells us why this works: copper has a high enough potential that it will oxidize at the anode, and its ions will be reduced at the cathode, while metals with much higher potentials (like Au, Pt) won't oxidize easily, and metals with much lower potentials (like Fe, Zn) will oxidize but their ions are kept in solution under controlled conditions.

**Connecting to CO3:** This process involves applying electrochemical principles for material characterization and purification. The efficiency and purity depend on controlling the electrode potentials, which is informed by the series.

#### 6. Metallurgy (CO2)

The electrochemical series plays a role in understanding metal extraction.

*   **Metals with very low electrode potentials** (very reactive, e.g., Sodium, Potassium, Aluminum, Magnesium) cannot be easily extracted by simple chemical reduction using carbon or other reducing agents in a blast furnace. Their affinity for oxygen is too strong. For these metals, **electrolysis of their molten salts** is the primary method of extraction. For example, aluminum is extracted by electrolysis of aluminum oxide ($Al_2O_3$) dissolved in molten cryolite.
*   **Metals with intermediate electrode potentials** (e.g., Iron, Zinc, Copper) can often be extracted using chemical reduction methods, though electrolysis is also used for high purity.

**Connecting to CO2:** Understanding where a metal sits on the electrochemical series dictates the economic feasibility and method of its production. For instance, aluminum extraction is energy-intensive due to electrolysis, reflecting its high reactivity.

#### 7. Analytical Chemistry (CO3)

*   **Potentiometry:** This is an electrochemical method used to determine the concentration of a specific ion in a solution. A measuring electrode (which develops a potential dependent on the ion concentration) is used in conjunction with a reference electrode (with a stable, known potential). The measured potential difference is related to the concentration of the analyte via the Nernst equation. The electrochemical series and standard potentials are fundamental to understanding how these electrodes work.

**Example:** A glass electrode used to measure pH works on potentiometric principles, relating the potential difference across a glass membrane to the concentration of hydrogen ions.

### Important Considerations and Pitfalls

*   **Standard vs. Non-Standard Conditions:** The electrochemical series lists *standard* reduction potentials ($E^0$). Real-world conditions (different temperatures, concentrations, pressures) will lead to different actual potentials ($E$). The **Nernst Equation** relates these: $E = E^0 - \frac{RT}{nF}\ln Q$, where $Q$ is the reaction quotient.
    *   **Exam Tip:** If a problem doesn't specify standard conditions, you might need the Nernst equation, or at least be aware that potentials can shift. Concentration is a key factor!
*   **Passivation:** Some metals, like aluminum or chromium, form a thin, protective oxide layer on their surface. This layer can prevent further corrosion even though the metal itself is quite reactive according to the series. This is called passivation.
*   **Overpotential:** Sometimes, reactions at electrode surfaces might not occur as predicted by equilibrium potentials due to an extra energy barrier, known as overpotential. This can affect things like hydrogen evolution or metal deposition.
*   **Rate vs. Spontaneity:** The electrochemical series tells us if a reaction *can* happen (thermodynamics, spontaneity), but not necessarily *how fast* it will happen (kinetics). A reaction might be spontaneous but incredibly slow.

### Summary

The electrochemical series is a vital tool that allows us to:

*   Predict the spontaneity of redox reactions.
*   Understand and prevent galvanic corrosion using cathodic protection.
*   Select appropriate materials for specific environments.
*   Design batteries and electrochemical cells.
*   Guide metal extraction and refining processes.

Mastering the electrochemical series and its applications will equip you to tackle many problems related to material science, corrosion, and energy storage in your future engineering careers.

---

## Sample Questions with Answers

**Q1. Will aluminum metal displace zinc from an aqueous solution of zinc chloride ($ZnCl_2$)? Justify your answer using standard electrode potentials.**

**Answer:**
To answer this, we need to compare the standard electrode potentials for aluminum and zinc.
From the electrochemical series:
*   $Al^{3+} + 3e^- \rightleftharpoons Al \quad E^0 = -1.66 \text{ V}$
*   $Zn^{2+} + 2e^- \rightleftharpoons Zn \quad E^0 = -0.76 \text{ V}$

The reaction would involve aluminum metal being oxidized ($Al \rightarrow Al^{3+} + 3e^-$) and zinc ions being reduced ($Zn^{2+} + 2e^- \rightarrow Zn$).

For this to happen, aluminum must be the anode (oxidation) and zinc ions must be the cathode (reduction). This means aluminum must have a *lower* (more negative) reduction potential than zinc, which it does (-1.66 V is lower than -0.76 V).

Let's set up the half-reactions for a cell:
*   Anode (Oxidation): $Al \rightarrow Al^{3+} + 3e^- \quad E^0_{ox} = +1.66 \text{ V}$ (reverse of reduction)
*   Cathode (Reduction): $Zn^{2+} + 2e^- \rightarrow Zn \quad E^0_{red} = -0.76 \text{ V}$

The standard cell potential is $E^0_{cell} = E^0_{red} + E^0_{ox} = -0.76 \text{ V} + 1.66 \text{ V} = +0.90 \text{ V}$.
Alternatively, using $E^0_{cell} = E^0_{cathode} - E^0_{anode}$ (where both are reduction potentials):
$E^0_{cell} = E^0_{Zn^{2+}/Zn} - E^0_{Al^{3+}/Al} = (-0.76 \text{ V}) - (-1.66 \text{ V}) = +0.90 \text{ V}$.

Since $E^0_{cell}$ is positive, the reaction is spontaneous. Therefore, aluminum metal will displace zinc from an aqueous solution of zinc chloride.

**Q2. Explain why a piece of iron left in contact with a piece of copper in a humid atmosphere will rust faster than iron alone.**

**Answer:**
This is a classic example of galvanic corrosion. When two dissimilar metals are in electrical contact in the presence of an electrolyte (humid atmosphere acts as the electrolyte), they form a galvanic cell. The relative positions in the electrochemical series determine which metal acts as the anode (corrodes) and which acts as the cathode (is protected).

From the electrochemical series:
*   $Fe^{2+} + 2e^- \rightleftharpoons Fe \quad E^0 = -0.44 \text{ V}$
*   $Cu^{2+} + 2e^- \rightleftharpoons Cu \quad E^0 = +0.34 \text{ V}$

Iron has a significantly more negative (lower) standard electrode potential than copper. This means iron is more easily oxidized (loses electrons more readily) than copper.

When iron and copper are in contact in a humid atmosphere:
*   **Iron acts as the anode:** It oxidizes, forming iron ions and releasing electrons. This is the first step of rusting.
    $Fe(s) \rightarrow Fe^{2+}(aq) + 2e^-$
*   **Copper acts as the cathode:** It receives the electrons released by iron. At the cathode, reduction occurs. In the presence of oxygen and water, the electrons are used to reduce oxygen to hydroxide ions, which then react with iron ions to form rust.
    $O_2(g) + 2H_2O(l) + 4e^- \rightarrow 4OH^-(aq)$
    Then, $Fe^{2+}$ reacts with $OH^-$ and oxygen to form hydrated iron(III) oxide (rust).

Crucially, the presence of the more noble metal (copper) at the cathode accelerates the oxidation of the anodic metal (iron). The electrons needed for the oxygen reduction at the copper surface are readily supplied by the dissolving iron. Therefore, the iron corrodes faster than it would if it were alone, because it is forced to act as the anode in this galvanic couple.

**Q3. How does the electrochemical series help in the selection of materials for constructing ships' hulls?**

**Answer:**
Ships operate in a highly corrosive environment – saltwater, which is an excellent electrolyte. Ships are often constructed from steel (an iron alloy) but may have components made from other metals or alloys, such as propellers made of bronze or stainless steel fittings.

The electrochemical series is essential for predicting and mitigating **galvanic corrosion**.
1.  **Identifying the Anode and Cathode:** When two dissimilar metals are in contact in saltwater, the metal with the more negative (less noble) electrode potential will act as the anode and corrode, while the metal with the more positive (more noble) electrode potential will act as the cathode and be protected. For example, steel (iron) has a more negative potential than many common propeller materials like bronze (copper alloy).
2.  **Preventing Galvanic Corrosion:** If the hull (steel) is in contact with a less noble metal component, the hull will corrode preferentially. Conversely, if it's in contact with a more noble metal, the more noble metal will be protected, and the steel hull will corrode.
3.  **Cathodic Protection:** To protect the steel hull, engineers employ cathodic protection. This is directly guided by the electrochemical series.
    *   **Sacrificial Anodes:** Blocks of metals with potentials significantly more negative than iron (e.g., zinc, aluminum, magnesium alloys) are attached to the hull. These metals are more easily oxidized, so they corrode preferentially, "sacrificing" themselves to protect the steel hull, which is forced to act as the cathode.
    *   **Impressed Current:** In systems using impressed current, an external power source forces the hull to be the cathode.

Therefore, by understanding the relative potentials of the metals used in ship construction and maintenance, engineers can select appropriate materials and apply protective measures (like sacrificial anodes) to prevent catastrophic corrosion of the hull, ensuring structural integrity and safety.
