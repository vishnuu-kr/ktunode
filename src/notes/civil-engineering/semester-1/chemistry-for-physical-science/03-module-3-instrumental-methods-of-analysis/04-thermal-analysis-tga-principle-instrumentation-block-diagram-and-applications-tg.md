---
title: "Thermal analysis: –TGA- Principle, instrumentation (block diagram) and applications – TGA of CaC 2O4.H2O and polymers."
subject: "CHEMISTRY FOR PHYSICAL SCIENCE"
module: "Module 3: Instrumental Methods of Analysis"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912d8d"
status: "completed"
scrapedAt: "2026-05-20T18:28:57.051Z"
---
# Chemistry for Physical Science: Module 3 - Instrumental Methods of Analysis

## Topic: Thermal Analysis: Thermogravimetric Analysis (TGA)

Welcome, everyone! Today, we're diving into a fascinating area of instrumental analysis: **Thermal Analysis**. Specifically, we'll be focusing on **Thermogravimetric Analysis**, or **TGA**. If you've ever wondered how we can track what happens to a material when we heat it up, or how to determine its composition based on its response to heat, then TGA is your answer! This technique is incredibly powerful and has widespread applications, especially in understanding the behavior of materials in various industries, which directly relates to our **Course Outcome 1: Describe the use of various engineering materials in different industries.** We'll also see how understanding these thermal processes helps us in material characterization, touching upon **Course Outcome 3: Apply appropriate analytical techniques for different engineering materials.**

### What is Thermal Analysis? A Gentle Introduction

Before we zoom in on TGA, let's get a feel for what "thermal analysis" means. Imagine you have a sample – it could be a new plastic for your phone case, a paint formulation, or even an ancient archaeological artifact. What happens to it if you gradually increase its temperature? Does it melt? Does it decompose? Does it lose some of its components? Thermal analysis is a broad family of techniques where we monitor a **property** of a substance as a function of **temperature** or **time** while the temperature is changed in a controlled manner. It's like putting your sample on a "hot seat" and observing its reaction!

There are several types of thermal analysis, each monitoring a different property. We have Differential Thermal Analysis (DTA), Differential Scanning Calorimetry (DSC), Thermomechanical Analysis (TMA), and of course, Thermogravimetric Analysis (TGA). Today, our focus is on TGA.

### Thermogravimetric Analysis (TGA): The Core Principle

So, what exactly does TGA do? The name itself gives us a big clue: "thermo" refers to heat, "gravimetric" relates to weight or mass, and "analysis" means we're studying its composition or behavior.

**At its heart, Thermogravimetric Analysis (TGA) is a technique used to measure the change in mass of a sample as a function of temperature or time.**

Think about it this way: if you heat a hydrated salt, like copper sulfate pentahydrate ($CuSO_4 \cdot 5H_2O$), what do you expect to happen? That's right, it will lose its water molecules. As it loses water, its mass will decrease. TGA precisely measures this decrease in mass as the temperature rises. It’s like having a super-sensitive scale inside a furnace, constantly telling you how much your sample weighs as it gets hotter.

We plot this data as a **thermogravimetric curve**, with **temperature** (or time, if temperature is held constant) on the x-axis and **mass** (or percentage of initial mass) on the y-axis. A decrease in mass on the curve indicates a process that involves mass loss, such as:

*   **Dehydration:** Loss of water molecules.
*   **Decomposition:** Breaking down of the material into smaller, volatile products.
*   **Desolvation:** Loss of solvent molecules.
*   **Oxidation/Reduction:** If performed in a reactive atmosphere, volatile products might be formed.

Conversely, an increase in mass could indicate oxidation where oxygen atoms from the atmosphere get incorporated into the sample. However, the most common application of TGA involves mass loss.

This ability to track mass changes is fundamental to understanding material degradation and composition, making it a vital tool for analyzing various engineering materials, aligning with **Course Outcome 1**. It allows us to determine the thermal stability of materials, identify decomposition temperatures, and quantify volatile components.

### Instrumentation: How Does a TGA Work? (The Block Diagram)

To perform TGA, we need a specialized instrument. Let's break down the essential components. You can visualize this as a system where we precisely control the environment and continuously monitor the sample's weight.

Here's a general block diagram illustrating the setup:

```
                         +-----------------------+
                         |   Sample Holder       |
                         |   (Crucible)          |
                         +-----------+-----------+
                                     |
                                     | (Suspended from)
                                     |
                         +-----------+-----------+
                         |     High Precision    |
                         |       Balance         |
                         +-----------+-----------+
                                     |
                                     | (Enclosed within)
                                     |
                         +-----------+-----------+
                         |        Furnace        |
                         |   (Controlled Heating)|
                         +-----------+-----------+
                                     |
                                     | (Atmosphere Control)
                                     |
                         +-----------+-----------+
                         |    Gas Inlet/Outlet   |
                         |   (Flow Control)      |
                         +-----------+-----------+
                                     |
                                     | (Signals transmitted to)
                                     |
                         +-----------+-----------+
                         |     Data Acquisition  |
                         |     & Display Unit    |
                         |     (Computer)        |
                         +-----------------------+
```

Let's walk through each part:

1.  **Furnace:** This is where the magic happens – the controlled heating. The furnace can be programmed to heat the sample at a specific rate (e.g., 10°C per minute), hold it at a constant temperature, or cool it down. The temperature range can vary widely, from ambient up to 1000°C or even higher, depending on the model.
2.  **Sample Holder (Crucible):** The sample is placed in a small, inert container, usually a ceramic (like alumina or platinum) or quartz crucible. It's important that the crucible itself doesn't react with the sample or decompose at the temperatures being used.
3.  **High Precision Balance:** This is the heart of the TGA. The sample holder, and thus the sample, is suspended from an extremely sensitive balance. This balance continuously measures the mass of the sample. The sensitivity is crucial because even small mass changes need to be detected accurately. Think of it as a highly sophisticated weighing system designed to work even at elevated temperatures.
4.  **Controlled Atmosphere:** TGA can be performed in various atmospheres. We can use an inert atmosphere (like nitrogen or argon) to simply observe thermal decomposition without interference from oxygen. Alternatively, we can use air or oxygen to study oxidation processes, or even specific reactive gases. The gas flow rate needs to be carefully controlled to maintain a consistent environment around the sample.
5.  **Data Acquisition and Display Unit:** This is typically a computer system that records the output from the balance (mass) and the furnace (temperature) at regular intervals. It then processes this data to generate the thermogravimetric curve (mass vs. temperature) and performs calculations.

**Remember this:** The core principle is precisely measuring mass change in response to controlled temperature changes. The instrumentation ensures that this measurement is accurate and reproducible by controlling the heating rate and the surrounding atmosphere.

### Applications of TGA: Why is it So Useful?

TGA is a workhorse in many fields, particularly in material science and engineering. It helps us answer critical questions about materials:

*   **Thermal Stability:** How stable is a material when heated? At what temperature does it start to degrade? This is vital for selecting materials for high-temperature applications. For example, understanding the thermal stability of polymers is crucial for their use in electronics or automotive parts that experience heat. (Relates to **CO1**)
*   **Compositional Analysis:** TGA can be used to determine the amount of volatile components in a sample, such as moisture, residual solvents, or inorganic fillers. For instance, if a pharmaceutical tablet has a certain percentage of moisture, TGA can quantify it.
*   **Decomposition Kinetics:** By studying how the rate of mass loss changes with temperature, we can infer information about the mechanism and kinetics of decomposition reactions.
*   **Identification of Materials:** The characteristic decomposition profile of a material can be used as a fingerprint for identification.
*   **Phase Transitions:** While not its primary function, TGA can sometimes indirectly indicate phase transitions if they are accompanied by a mass change (e.g., dehydration).
*   **Characterization of Polymers:** This is a major application area. We can determine the thermal degradation temperature, the presence of additives (like plasticizers or flame retardants), and the composition of polymer blends. (Strongly relates to **CO1** and **CO3**)
*   **Analysis of Hydrated Salts:** As we'll see with calcium oxalate monohydrate, TGA is excellent for quantifying water of hydration.

Essentially, any process that leads to a measurable change in mass upon heating can be studied using TGA.

### TGA of Calcium Oxalate Monohydrate ($CaC_2O_4 \cdot H_2O$)

Let's take a common example to see TGA in action: **Calcium Oxalate Monohydrate ($CaC_2O_4 \cdot H_2O$)**. This is a white crystalline solid and is often used as a primary standard in analytical chemistry. It's also a component of kidney stones, so its thermal behavior is of interest.

When we heat $CaC_2O_4 \cdot H_2O$ under a controlled atmosphere (say, in air or nitrogen) at a typical heating rate of 10-20°C/min, we expect to see a series of mass loss steps. Here’s what typically happens:

1.  **Dehydration:**
    $CaC_2O_4 \cdot H_2O \rightarrow CaC_2O_4 + H_2O(g)$
    The first step, occurring around 100-200°C (the exact temperature depends on the heating rate and atmospheric conditions), is the loss of the molecule of water of hydration. This will show up as the first significant drop in the TGA curve. The mass loss here should correspond to the molar mass of water (18.015 g/mol) relative to the molar mass of the hydrated salt (128.097 g/mol). This step is crucial for determining the purity or hydration state of the sample.

2.  **Decomposition of Anhydrous Calcium Oxalate:**
    $CaC_2O_4 \rightarrow CaCO_3 + CO(g)$
    $CaCO_3 \rightarrow CaO + CO_2(g)$
    The anhydrous calcium oxalate ($CaC_2O_4$) is not very stable at higher temperatures. It begins to decompose. The decomposition is often a two-step process, but TGA might show it as a single broad step or two overlapping steps.
    *   Around 250-400°C, $CaC_2O_4$ decomposes to calcium carbonate ($CaCO_3$) and carbon monoxide gas ($CO$). The mass loss here is significant, corresponding to the loss of $CO$ (28.01 g/mol).
    *   Calcium carbonate ($CaCO_3$) itself is thermally stable up to a certain point. Upon further heating, typically around 600-800°C, it decomposes to calcium oxide ($CaO$) and carbon dioxide gas ($CO_2$). The mass loss here corresponds to the loss of $CO_2$ (44.01 g/mol).

**The TGA curve for $CaC_2O_4 \cdot H_2O$ will therefore show three distinct plateaus (or steps) corresponding to these mass-loss events.**

*   **Initial plateau:** Represents the intact $CaC_2O_4 \cdot H_2O$.
*   **First step:** Loss of $H_2O$.
*   **Second step:** Loss of $CO$ from $CaC_2O_4$.
*   **Third step:** Loss of $CO_2$ from $CaCO_3$.
*   **Final plateau:** Represents the residue, which is calcium oxide ($CaO$).

**Exam Tip:** Students are often asked to predict the TGA curve for such compounds or to interpret a given TGA curve. You need to know the decomposition pathway and the associated mass losses. Calculating the theoretical mass loss at each stage is a common question.

### TGA of Polymers

Polymers are giant molecules, and their thermal behavior is a primary concern when selecting them for various applications. TGA is indispensable for polymer characterization.

Here’s what TGA reveals about polymers:

1.  **Thermal Degradation Temperature:** This is the temperature at which a polymer starts to lose significant mass due to decomposition. A polymer with a higher thermal degradation temperature is generally more suitable for high-temperature applications. For instance, polyethylene terephthalate (PET), used in bottles, has a different thermal stability than high-performance polymers like PEEK (Polyether ether ketone), which can withstand much higher temperatures. (Directly relates to **CO1** and **CO3**)
2.  **Presence of Additives:** Many polymers contain additives like plasticizers, stabilizers, or flame retardants. These additives can affect the thermal decomposition profile. For example, a plasticizer might vaporize at a lower temperature, showing an initial mass loss before the main polymer decomposition. A flame retardant might decompose at a specific temperature, influencing the decomposition pattern.
3.  **Composition of Polymer Blends:** If you have a blend of two polymers, their TGA curves might show distinct decomposition steps, allowing you to estimate the composition of the blend.
4.  **Moisture and Volatile Content:** Similar to inorganic compounds, polymers can absorb moisture or retain residual solvents from their synthesis. TGA can quantify these volatile components, which can affect the polymer's properties.
5.  **Ash Content:** After complete decomposition of the organic polymer, if there are inorganic fillers or residues, they will remain. The final plateau on the TGA curve, representing the ash content, can be measured. This is important for materials like reinforced plastics.

**Example:** Consider polypropylene (PP). When heated in a TGA, it typically starts to decompose around 300-350°C. If it contains a flame retardant that decomposes at, say, 250°C, you might see an initial small mass loss before the main PP decomposition. If it’s a filled PP, you’ll see a significant residue (ash) at the end.

**Analogy:** Think of heating a plastic bag. At low temperatures, nothing much happens. As you heat it further, it starts to soften and eventually breaks down, producing smoke (volatile decomposition products) and leaving behind a residue. TGA precisely quantifies this process in a controlled environment.

**Relating to Course Outcomes:**
*   **CO1 (Use of Engineering Materials):** Understanding the thermal stability of polymers through TGA directly informs their selection for specific industrial applications where temperature is a critical factor (e.g., automotive interiors, aerospace components, electrical insulation).
*   **CO3 (Apply Analytical Techniques):** TGA is a direct application of an analytical technique for characterizing engineering materials like polymers. By performing TGA, we gather data that helps us understand and utilize these materials effectively.

### Summary and Key Takeaways

*   **Thermogravimetric Analysis (TGA)** is a technique that measures the change in mass of a sample as a function of temperature or time.
*   The TGA curve plots **mass** (or % mass) against **temperature**.
*   Mass loss typically indicates **dehydration, decomposition, or desolvation**. Mass gain can indicate oxidation.
*   The instrumentation involves a **furnace**, a **high-precision balance**, a **sample holder**, **atmosphere control**, and a **data acquisition system**.
*   Key applications include determining **thermal stability**, **compositional analysis**, **identification of materials**, and studying **polymer degradation**.
*   The TGA of $CaC_2O_4 \cdot H_2O$ shows sequential mass losses corresponding to the loss of water, decomposition of oxalate to carbonate, and decomposition of carbonate to oxide.
*   For polymers, TGA is essential for understanding **thermal degradation temperatures**, the presence of **additives**, and **material composition**.

### Sample Questions with Answers

**Q1. What is the primary principle behind Thermogravimetric Analysis (TGA)?**

**Answer:** The primary principle of TGA is to measure the change in mass of a sample as it is heated or held at a specific temperature under a controlled atmosphere. This mass change is directly related to physical phenomena like evaporation, dehydration, decomposition, or chemical reactions like oxidation or reduction.

**Q2. Describe the typical instrumentation required for TGA. You may use a simple block diagram concept in your explanation.**

**Answer:** A TGA instrument typically consists of:
*   A **furnace** capable of controlled heating and temperature programming.
*   A **high-precision balance** to continuously monitor the sample's mass.
*   A **sample holder** (crucible) made of inert material, from which the sample is suspended and heated.
*   A system for **controlling the atmosphere** surrounding the sample (e.g., inert gas, air, or reactive gas).
*   A **data acquisition and display system** (usually a computer) to record mass and temperature data and generate the TGA curve.

**Q3. Predict the sequence of mass loss events for Ammonium Dichromate $(NH_4)_2Cr_2O_7$ when heated, and explain what chemical processes are involved.**

**Answer:** Ammonium dichromate is known for its "volcano" reaction upon heating. The decomposition process involves the loss of volatile products and the formation of a solid residue.
The primary reaction is:
$(NH_4)_2Cr_2O_7 (s) \rightarrow Cr_2O_3 (s) + N_2 (g) + 4H_2O (g)$
When heated, ammonium dichromate decomposes vigorously. First, ammonia and water are eliminated, and then nitrogen gas and water vapor are released, with the solid residue being green chromium(III) oxide ($Cr_2O_3$). The TGA curve would show a significant mass loss starting from around 150-200°C, corresponding to the evolution of $N_2$ (28 g/mol) and $H_2O$ (4 * 18 = 72 g/mol), totaling 100 g/mol of $N_2$ and $H_2O$ per mole of $(NH_4)_2Cr_2O_7$ (252.07 g/mol). This would appear as a sharp decline in mass on the TGA curve, leaving behind $Cr_2O_3$ (151.99 g/mol).

**Q4. How can TGA be used to assess the quality of a polymer sample?**

**Answer:** TGA is used to assess polymer quality by determining its **thermal stability** (decomposition temperature), identifying the presence and content of **volatile impurities** (like moisture or residual solvents) through initial mass loss steps, quantifying **additives** (like plasticizers or fillers) by observing specific mass loss or residue, and estimating the **ash content** (inorganic fillers or residues) from the final mass. A consistent and high decomposition temperature, along with minimal volatile content, generally indicates a higher quality polymer. This directly relates to **CO1** and **CO3**.

**Q5. If a polymer sample shows a mass loss step around 300°C and leaves a residue of 20% at 600°C, what information can you infer about the polymer? (Assume the polymer decomposes completely by 500°C).**

**Answer:**
*   The mass loss step around 300°C indicates the **thermal decomposition temperature** of the polymer itself. This suggests the polymer has moderate to good thermal stability, suitable for applications where temperatures don't significantly exceed this.
*   The residue of 20% at 600°C (assuming complete decomposition of the polymer by 500°C means this residue is stable beyond that) indicates that the original polymer sample contained **20% inorganic filler** or a non-volatile inorganic component. This is common in reinforced polymers to improve mechanical properties. This information is directly applicable to **CO1** and **CO3**.
