---
title: "Electrochemical series - Applications – Glass Electrode & pH Measurement-Conductivity- Measurement using Digital conductivity meter."
subject: "CHEMISTRY FOR PHYSICAL SCIENCE"
module: "Module 2: Electrochemistry and Corrosion Science"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1eddfeb4799d95e833b2"
status: "completed"
scrapedAt: "2026-05-20T17:37:03.639Z"
---
# CHEMISTRY FOR PHYSICAL SCIENCE - MODULE 2: ELECTROCHEMISTRY AND CORROSION SCIENCE

## Topic: Electrochemical Series - Applications: The Glass Electrode & pH Measurement; Conductivity Measurement Using a Digital Conductivity Meter

Welcome, everyone, to our exploration of electrochemistry! In this session, we're going to dive into some really fascinating and practical applications of electrochemical principles. We've already touched upon the fundamental ideas of electrochemistry, like how a spontaneous redox reaction can generate electricity. Today, we’re building on that by looking at how we can *use* these principles to measure important quantities like pH and conductivity. Think about it – we're going to learn how to measure the "acidity" of a solution and how well it conducts electricity, all thanks to electrochemistry. This directly ties into our Course Outcome 2 (CO2): "Explain the Basic Concepts of Electrochemistry and Corrosion to Explore the Possible Applications in Various Engineering Fields," and even CO3: "Apply appropriate analytical techniques for different engineering materials," because these measurements are crucial analytical tools.

### The Electrochemical Series: A Quick Recap and Its Significance

Before we jump into the applications, let’s briefly recall what the electrochemical series is all about. Remember, it's essentially a ranked list of elements (or more accurately, half-reactions) based on their standard electrode potentials ($E^o$). This series tells us which species are more likely to be oxidized (lose electrons) and which are more likely to be reduced (gain electrons).

Think of it like a "tug-of-war" for electrons. Species higher up in the series (with more negative $E^o$ values) are strong reducing agents – they readily give up electrons. Species lower down (with more positive $E^o$ values) are strong oxidizing agents – they readily accept electrons. This ranking is fundamental because it predicts whether a reaction will be spontaneous. A more reactive metal will displace a less reactive metal from its salt solution – that's a direct application of the electrochemical series. For instance, zinc will displace copper from copper sulfate solution because zinc is higher in the series than copper. This is a key concept for understanding corrosion prevention and even battery operation.

### Application 1: The Glass Electrode and pH Measurement

Now, let's move to our first major application: measuring pH. You’ve all heard of pH, right? It's a measure of how acidic or basic a solution is. But how do we *quantify* that acidity? We use electrochemical methods, and the star player here is the **glass electrode**.

#### What is pH?

Before we talk about the electrode, let's quickly define pH. It's defined as the negative logarithm (base 10) of the hydrogen ion concentration:

$pH = -\log_{10}[H^+]$

A low pH (e.g., 1-6) indicates an acidic solution (high $[H^+]$), a pH of 7 is neutral, and a high pH (e.g., 8-14) indicates a basic or alkaline solution (low $[H^+]$, high $[OH^-]$).

#### The Glass Electrode: A Window to Acidity

The glass electrode is a remarkable invention that allows us to measure the hydrogen ion activity (which is closely related to concentration) in a solution electrochemically. It's actually a type of **ion-selective electrode (ISE)**, meaning it's designed to respond specifically to a particular ion.

**How it Works:**

Imagine a special glass bulb at the tip of the electrode. This glass is made of a specific composition (usually a silicate glass with a high sodium oxide content, as mentioned in textbooks like Willard, Merritt, and SPhase, like Tembe, Kamaluddin, and Krishnan, discuss the specific compositions of such glasses). This glass has a unique property: when it's immersed in a solution containing hydrogen ions, a thin, hydrated gel layer forms on its surface.

Within this gel layer, there's an exchange of ions, particularly protons ($H^+$). Critically, this exchange creates a potential difference across the glass membrane. This potential difference is directly proportional to the difference in hydrogen ion activity between the *inside* of the glass bulb and the *outside* solution.

So, what's inside the bulb? Typically, it's a solution of known, constant pH (like a buffer solution) and an internal reference electrode (often a silver/silver chloride electrode). The external solution, whose pH we want to measure, also has a reference electrode immersed in it.

The overall setup looks something like this:

*   **The Glass Electrode:** Contains a high-pH internal buffer and an internal reference electrode. It has a thin glass membrane permeable to $H^+$ ions.
*   **The Sample Solution:** The solution whose pH is to be measured.
*   **The Reference Electrode:** This is crucial. It provides a stable, known potential against which the potential of the glass electrode can be compared. A common example is the saturated calomel electrode (SCE) or the silver/silver chloride (Ag/AgCl) electrode.

The potential generated by the glass electrode ($E_{glass}$) can be described by a form of the **Nernst equation**, adapted for this system:

$E_{glass} = K_1 + \frac{2.303RT}{nF} \log_{10}[H^+]$

Where:
*   $K_1$ is a constant that includes the potential of the internal reference electrode and the potential across the glass membrane due to fixed internal conditions.
*   $R$ is the gas constant.
*   $T$ is the absolute temperature.
*   $n$ is the number of electrons transferred (which is 1 for $H^+$ ions).
*   $F$ is Faraday's constant.
*   $\log_{10}[H^+]$ is related to the pH.

If we rearrange this, we can see the direct link to pH:

$E_{glass} = K_1 - \frac{2.303RT}{F} pH$

**The pH Meter:**

This is where the "meter" part comes in. A **pH meter** is essentially a high-impedance voltmeter. Why high impedance? Because the glass electrode has a very high resistance, and if the meter had low impedance, it would draw current and alter the potential we're trying to measure, leading to inaccurate readings.

The pH meter measures the **cell potential ($E_{cell}$)**, which is the difference in potential between the glass electrode and the reference electrode:

$E_{cell} = E_{glass} - E_{reference}$

Since $E_{reference}$ is constant and $E_{glass}$ is related to pH by the equation above, the $E_{cell}$ measured by the pH meter is directly proportional to the pH of the solution.

$E_{cell} = (K_1 - E_{reference}) - \frac{2.303RT}{F} pH$

Let $K = K_1 - E_{reference}$. Then:

$E_{cell} = K - \frac{2.303RT}{F} pH$

The pH meter is calibrated using buffer solutions of known pH. This calibration process determines the constant $K$ and adjusts for temperature variations, ensuring accurate measurements.

**Real-World Relevance:**

Think about industries:
*   **Food and Beverage:** Ensuring the correct acidity in everything from yogurt and wine to soft drinks.
*   **Water Treatment:** Monitoring pH to optimize chemical processes and ensure water safety.
*   **Biochemistry and Medicine:** Measuring the pH of blood, cell cultures, or drug formulations. Even your backyard swimming pool needs regular pH checks!

The glass electrode, coupled with a pH meter, is an indispensable tool for countless applications because it provides a direct, reliable, and relatively easy way to measure hydrogen ion activity. It's a perfect example of how fundamental electrochemical principles (like potential differences arising from ion concentration gradients) are translated into practical analytical instruments. This directly supports CO3 by showcasing an analytical technique.

**Important Note for Exams:** Understand the principle of potential development across the glass membrane and how the Nernst equation relates it to $H^+$ concentration. Know why a high-impedance voltmeter is necessary. Calibration is key!

### Application 2: Conductivity Measurement Using a Digital Conductivity Meter

Our second application today is measuring **conductivity**. What is conductivity? It's a measure of a material's ability to conduct electric current. In the context of solutions, it's essentially how well ions in the solution can carry charge. This is incredibly important in many areas, especially when dealing with water purity.

#### What is Conductivity?

Electrical conductivity ($\kappa$ or $\sigma$) is the reciprocal of resistivity ($\rho$). Resistivity is a material's opposition to the flow of electric current.

$\kappa = \frac{1}{\rho}$

For solutions, conductivity depends on:
*   **Concentration of ions:** More ions, more charge carriers, higher conductivity.
*   **Charge of ions:** Ions with higher charges can carry more current per ion.
*   **Mobility of ions:** How easily ions can move through the solution. This is influenced by factors like ion size, hydration, and viscosity of the solvent.

#### The Conductivity Cell and Meter

Measuring the conductivity of a solution typically involves a **conductivity cell** and a **digital conductivity meter**.

The conductivity cell usually consists of two **inert electrodes** (often platinum or graphite) separated by a fixed distance. These electrodes are immersed in the solution. The distance between the electrodes and their surface area are important parameters that define the **cell constant ($K_{cell}$)**.

The cell constant is given by:

$K_{cell} = \frac{L}{A}$

Where:
*   $L$ is the distance between the electrodes.
*   $A$ is the surface area of each electrode.

The conductivity meter applies an alternating current (AC) voltage across the electrodes. Why AC? To prevent polarization – the buildup of charge at the electrode surfaces that would occur with a direct current (DC), which would distort the measurement. The meter then measures the current that flows through the solution and calculates the conductance ($G$).

**Conductance ($G$)** is the reciprocal of resistance ($R$):

$G = \frac{1}{R}$

The relationship between conductivity ($\kappa$), conductance ($G$), and the cell constant ($K_{cell}$) is:

$\kappa = G \times K_{cell}$

**The Digital Conductivity Meter:**

The digital conductivity meter takes the measured conductance and, using the known cell constant (which is usually pre-set or determined during calibration), calculates and displays the conductivity, typically in units of Siemens per centimeter (S/cm) or millisiemens per centimeter (mS/cm), or microsiemens per centimeter ($\mu$S/cm).

**Calibration:**

Just like with the pH meter, calibration is crucial for accurate conductivity measurements. A standard solution of known conductivity (e.g., a potassium chloride solution of a specific concentration) is used to calibrate the instrument. The meter adjusts its internal settings to match the known conductivity of the standard, ensuring that when it measures the conductivity of an unknown sample, it's accurate.

**Real-World Relevance:**

*   **Water Purity:** This is perhaps the most common application.
    *   **Boiler Feedwater:** In power plants, extremely pure water is needed for boilers. Impurities (dissolved salts) would increase conductivity and lead to scaling and corrosion. Monitoring conductivity is a key quality control measure.
    *   **Drinking Water:** While drinking water has some dissolved minerals, excessively high or low conductivity can indicate problems.
    *   **Wastewater Treatment:** Measuring conductivity helps assess the total dissolved solids (TDS) in wastewater.
*   **Food Industry:** Monitoring salt concentration in brines or liquids.
*   **Agriculture:** Assessing the salinity of irrigation water.
*   **Pharmaceuticals:** Ensuring the purity of water used in drug manufacturing.

Understanding conductivity is vital for CO1 (use of materials in industries) and CO4 (water treatment), as conductivity is a direct indicator of dissolved ionic impurities. It also aligns with CO3, as it's a fundamental analytical technique.

**Quick Tip for Exams:** Remember that conductivity measures the *total* dissolved ionic content. High conductivity means high concentration of dissolved salts. Also, recall that AC voltage is used to prevent polarization. The formula $\kappa = G \times K_{cell}$ is your go-to here.

### Connecting Back to the Electrochemical Series

While the glass electrode and conductivity meters don't directly "use" the electrochemical series in the sense of predicting spontaneous redox reactions, the underlying principles are deeply rooted. The potential difference in the glass electrode arises from ion activity, which is a consequence of electrochemical equilibrium. Similarly, conductivity depends on the movement of ions, which are the charge carriers in electrochemical systems. The very fact that ions exist and carry charge is a consequence of the electrochemical behavior of elements.

### Summary of Key Takeaways

*   The **glass electrode** is a pH-sensitive electrode that generates a potential proportional to the hydrogen ion activity in a solution. It works based on ion exchange across a special glass membrane.
*   A **pH meter** is a high-impedance voltmeter used to measure the potential difference between a glass electrode and a reference electrode, allowing for accurate pH determination.
*   **Conductivity** measures a solution's ability to conduct electricity, primarily due to dissolved ions.
*   A **digital conductivity meter** uses a conductivity cell with inert electrodes and an AC voltage to measure conductance, which is then converted to conductivity using the cell constant.
*   Both pH and conductivity measurements are crucial analytical tools used across various engineering disciplines, from water treatment to food processing.

Remember these concepts are practical manifestations of the electrochemical principles we've discussed. They highlight how we can harness the subtle electrical properties of solutions to gain vital information about their composition and behavior.

---

## Sample Questions with Answers

**Q1. Why is a high-impedance voltmeter essential for measuring pH with a glass electrode?**
**Answer:** The glass membrane of the glass electrode has a very high electrical resistance. If a voltmeter with low impedance were used, it would draw a significant current through this membrane. This current flow would cause polarization and a voltage drop across the resistance, altering the potential difference being measured and leading to inaccurate pH readings. A high-impedance voltmeter draws negligible current, ensuring that the measured potential is representative of the true potential difference created by the $H^+$ ion activity. This relates to the practical implementation of electrochemical measurements, supporting CO3.

**Q2. What is the primary function of the reference electrode in a pH measurement setup?**
**Answer:** The reference electrode provides a stable, constant, and known potential against which the variable potential of the glass electrode can be measured. The pH meter measures the *difference* in potential between the two electrodes ($E_{cell} = E_{glass} - E_{reference}$). Since the reference electrode's potential is constant, any change in $E_{cell}$ directly reflects a change in the glass electrode's potential, which is directly related to the pH of the solution. This ensures a reliable and reproducible measurement.

**Q3. A solution has a conductivity of 1500 $\mu$S/cm. What does this value suggest about the solution, particularly in the context of water purity?**
**Answer:** A conductivity value of 1500 $\mu$S/cm is considered relatively high for purified water. In the context of water purity, especially for applications like boiler feed water or pharmaceutical use, this value indicates a significant concentration of dissolved ions (salts, minerals, or other charged species). Such high conductivity would typically mean the water is not pure and may require further treatment to remove these impurities, as they can lead to issues like scaling or corrosion. This directly links to CO4 and CO1.

**Q4. Explain the principle behind the formation of a potential difference in a glass electrode. How is it related to the Nernst equation?**
**Answer:** The glass electrode has a special glass membrane that, when in contact with an aqueous solution, forms a hydrated gel layer. Within this layer, hydrogen ions ($H^+$) from the solution can exchange with mobile cations (like $Na^+$) in the glass. This ion exchange process is influenced by the concentration (or activity) of $H^+$ ions on either side of the membrane (inside the electrode and in the sample solution). This difference in $H^+$ activity creates a potential difference across the glass membrane. This potential is analogous to the potential developed at an electrode surface in contact with its ions and can be described by a modified Nernst equation. Specifically, the potential of the glass electrode ($E_{glass}$) is linearly related to the logarithm of the hydrogen ion activity (and thus pH): $E_{glass} = K - (2.303RT/F) \times pH$. This demonstrates a core concept for CO2.

**Q5. In conductivity measurements, why is an alternating current (AC) used instead of a direct current (DC)?**
**Answer:** Direct current (DC) can lead to **polarization** at the electrode-solution interface. When DC is applied, ions migrate to the electrodes. Positive ions move to the negative electrode (cathode), and negative ions move to the positive electrode (anode). This movement can lead to the deposition or removal of ions at the electrode surface, changing the local concentration of charge carriers and potentially forming insulating layers. This "polarization" effect alters the measured resistance/conductance and makes the measurement unstable and inaccurate. Alternating current (AC) continuously reverses the polarity of the electrodes, preventing the buildup of charge and the formation of stable polarizing layers, thus ensuring a more stable and accurate measurement of the solution's intrinsic conductivity. This is a key detail for understanding the instrument, supporting CO3.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=QXT4OVM4vFk) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=x00oX54G0Cg) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=2G1410K0MQA) |
