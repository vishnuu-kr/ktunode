---
title: "Liquefaction systems for gases other than Neon, Hydrogen and Helium- Simple Linde - Hampson system, Claude, Cascade System, and Auto-cascade system."
subject: "CRYOGENIC ENGINEERING"
module: "Module 2: Cryogenic Liquefaction systems – System performance parameters, ideal liquefaction system, Joule"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044643d6"
status: "completed"
scrapedAt: "2026-05-20T18:20:18.424Z"
---
# Cryogenic Engineering: Module 2 - Cryogenic Liquefaction Systems (Part 2)

**Topic:** Liquefaction systems for gases other than Neon, Hydrogen and Helium - Simple Linde - Hampson system, Claude, Cascade System, and Auto-cascade system.

**Learning Outcomes:** Upon successful completion of this module, students will be able to:
*   Analyze and compare different cryogenic liquefaction systems for common industrial gases.
*   Describe the operational principles of various liquefaction cycles.
*   Evaluate the performance parameters of liquefaction systems.

**Course Outcomes Addressed:**
*   **CO3:** Analyse and compare different cryogenic liquefaction systems (Knowledge Level: K2, K3).

---

## 1. Introduction to Liquefaction Systems for Common Industrial Gases

While Neon (Ne), Hydrogen ($H_2$), and Helium (He) have their unique liquefaction challenges due to their extremely low boiling points, this section focuses on liquefaction systems suitable for gases with relatively higher boiling points, such as Nitrogen ($N_2$), Oxygen ($O_2$), Argon (Ar), Methane ($CH_4$), and Ethane ($C_2H_6$). These gases are extensively used in industries like chemical processing, medical applications, food preservation, and aerospace.

**Key Concept:** Liquefaction is the process of converting a gas into a liquid. This typically involves cooling the gas below its boiling point at a given pressure. Cryogenic liquefaction systems aim to achieve these low temperatures efficiently.

**Important Point:** The choice of liquefaction system depends on factors like the gas being liquefied, the desired purity, the scale of operation, and economic considerations.

---

## 2. Simple Linde-Hampson System

The Linde-Hampson system is one of the earliest and simplest liquefaction cycles. It utilizes the Joule-Thomson (J-T) effect for cooling.

### 2.1 Principle of Operation

1.  **Compression:** The gas is compressed to a high pressure.
2.  **Cooling:** The high-pressure gas is cooled to ambient temperature using a heat exchanger.
3.  **Expansion:** The cooled, high-pressure gas is passed through an expansion valve (Joule-Thomson valve). During this throttling process, the gas expands and experiences a temperature drop due to the Joule-Thomson effect.
4.  **Liquefaction:** A portion of the gas liquefies in the expansion process.
5.  **Recycle:** The un-liquefied gas, now at a lower pressure and temperature, is returned to the compressor inlet after passing through a counter-current heat exchanger to pre-cool the incoming high-pressure gas.

### 2.2 System Diagram

```
(Gas Inlet) -> Compressor -> Cooler (Ambient) -> Heat Exchanger (Warm End) -> Expansion Valve -> Liquid-Gas Mixture -> Heat Exchanger (Cold End) -> Liquid Product Separator -> (Unliquefied Gas) -> Compressor Inlet
                                                                                                     ^
                                                                                                     |
                                                                                                     (Cold Gas Recycle)
```

### 2.3 Key Components

*   **Compressor:** Increases the pressure of the working fluid.
*   **Aftercooler:** Cools the gas to ambient temperature.
*   **Heat Exchanger:** Transfers heat from the cold returning gas to the incoming high-pressure gas, thus pre-cooling it. This is crucial for achieving self-sustaining liquefaction.
*   **Expansion Valve (J-T Valve):** A throttling device that causes a significant pressure drop and a corresponding temperature drop due to the J-T effect.
*   **Liquid Separator:** Separates the liquid fraction from the un-liquefied gas.

### 2.4 Performance Parameters

*   **Liquefaction Ratio:** The ratio of the mass of liquefied gas to the total mass of gas processed.
*   **Coefficient of Performance (COP):** The ratio of the cooling effect achieved to the work input required. For a J-T system, the COP is generally low.
*   **Pre-cooling Temperature:** The temperature of the gas entering the expansion valve. Lower pre-cooling temperatures lead to higher liquefaction ratios.

### 2.5 Advantages

*   Simple design and construction.
*   Relatively low capital cost.
*   Reliable operation.

### 2.6 Disadvantages

*   Low liquefaction efficiency (low COP).
*   Requires pre-cooling to ambient temperature.
*   The J-T effect is less effective for gases with positive J-T coefficients at higher temperatures (e.g., Helium, Hydrogen require pre-cooling to very low temperatures). However, for gases like $N_2$, $O_2$, Ar at ambient conditions, the J-T effect is favorable.

### 2.7 Example (Linde-Hampson for Nitrogen)

Nitrogen liquefaction is a common application. Air, containing about 78% nitrogen, is often the source. The process involves compressing air, cooling it, expanding it through a J-T valve, and separating the liquid nitrogen.

**Referenced Textbooks:**
*   **Barron, R. F. (1986). *Cryogenic systems*. McGraw Hill.** Chapter 3 on "Basic Principles of Refrigeration and Liquefaction" provides a fundamental understanding of the Joule-Thomson effect and its application in liquefaction.
*   **Mukhopadhyay, M. (2010). *Fundamentals of Cryogenic Engineering*. PHI Learning.** Chapter 4 discusses various liquefaction cycles, including the Linde-Hampson system, with detailed thermodynamic analyses.

---

## 3. Claude System

The Claude system (also known as the expansion engine cycle) improves upon the Linde system by using an expansion engine to do external work, thereby achieving a more significant cooling effect than the Joule-Thomson effect alone.

### 3.1 Principle of Operation

1.  **Compression:** The gas is compressed to a high pressure.
2.  **Cooling:** The high-pressure gas is cooled to ambient temperature.
3.  **Expansion (Engine):** A significant portion of the gas is expanded in an expansion engine (e.g., piston expander, turboexpander), which performs external work. This work can be used to drive a generator or further assist compression. The expansion process leads to a substantial temperature drop.
4.  **Partial Liquefaction:** The gas exiting the expansion engine is significantly colder and partially liquefied.
5.  **Heat Exchanger:** The cold gas from the expansion engine flows through a counter-current heat exchanger, pre-cooling the incoming high-pressure gas.
6.  **Expansion (J-T Valve):** The remaining un-expanded high-pressure gas is passed through a J-T valve for final cooling and liquefaction.
7.  **Separation:** The liquid product is separated. The un-liquefied gas from the separator mixes with the expanded gas from the engine and then passes through the heat exchanger before returning to the compressor.

### 3.2 System Diagram

```
(Gas Inlet) -> Compressor -> Cooler (Ambient) -> Heat Exchanger (Warm End) -> Split Stream:
                                                                                   |
                                                                                   +-> Expansion Engine -> Heat Exchanger (Cold End) -> Liquid Separator
                                                                                   |                                                ^
                                                                                   +-> Expansion Valve (J-T) -------------------------+
                                                                                                                                    |
                                                                                                                                    (Unliquefied Gas) -> Heat Exchanger (Cold End) -> Compressor Inlet
```

### 3.3 Key Components

*   **Compressor:** Similar to the Linde system.
*   **Cooler:** Similar to the Linde system.
*   **Expansion Engine:** The critical component. It extracts work from the expanding gas, leading to a much lower outlet temperature compared to a J-T valve.
*   **Heat Exchanger:** Essential for pre-cooling the incoming gas.
*   **Expansion Valve (J-T Valve):** Used for final liquefaction.
*   **Liquid Separator:** Separates liquid from gas.

### 3.4 Advantages

*   Higher liquefaction efficiency (higher COP) compared to the Linde system due to work extraction in the expansion engine.
*   Can achieve lower temperatures than the simple Linde system for the same operating conditions.
*   The work produced by the expander can improve overall system economics.

### 3.5 Disadvantages

*   More complex design due to the inclusion of an expansion engine.
*   Higher capital cost.
*   Requires careful design and maintenance of the expansion engine.

### 3.6 Example (Claude System for Air Liquefaction)

The Claude system is widely used for air liquefaction to produce liquid oxygen and liquid nitrogen. The expansion engine is typically a piston expander or a turboexpander.

**Referenced Textbooks:**
*   **Timmerhaus, K. D., & Flynn, T. M. (2013). *Cryogenic Process Engineering*. Springer.** This book provides in-depth coverage of various liquefaction cycles, including the Claude cycle, with detailed thermodynamic analysis and process design considerations.
*   **Thipse, S. S. (2012). *Cryogenics*. Narrosa.** Chapter 5 often delves into the principles of different liquefaction cycles, offering explanations of the Claude system's operation.

---

## 4. Cascade System

The cascade system uses multiple refrigerating circuits, each operating at a different temperature level and with different refrigerants. This allows for progressive cooling of the gas to be liquefied.

### 4.1 Principle of Operation

The cascade system consists of several interconnected refrigeration cycles. Each cycle liquefies the gas used as a refrigerant in the next colder cycle.

1.  **First Stage (Highest Temperature):** A conventional refrigeration cycle (e.g., vapor compression cycle using propane, ethylene, or other hydrocarbons) cools and liquefies a gas (e.g., ethane) which acts as the refrigerant for the next stage.
2.  **Second Stage:** The liquefied gas from the first stage is used to condense and liquefy a gas from the second stage (e.g., methane). This liquefied gas then acts as the refrigerant for the third stage.
3.  **Subsequent Stages:** This process continues with colder refrigerants (e.g., $N_2$, $O_2$) until the desired gas is liquefied.
4.  **Final Liquefaction:** In the coldest stage, the gas to be liquefied (e.g., $N_2$, $O_2$) is condensed using the refrigerant from the preceding stage.

### 4.2 System Diagram (Conceptual)

```
High-Temp Refrigerant (e.g., Propane) Cycle -> Condenser/Evaporator 1 (Cooling & Liquefying Gas 1)
                                                |
                                                V
Gas 1 (e.g., Ethane) Cycle -> Condenser/Evaporator 2 (Cooling & Liquefying Gas 2)
                                                |
                                                V
Gas 2 (e.g., Methane) Cycle -> Condenser/Evaporator 3 (Cooling & Liquefying Gas 3)
                                                |
                                                V
Gas 3 (e.g., Nitrogen) Cycle -> Final Liquefier (Cooling & Liquefying Target Gas)
```

### 4.3 Key Components

*   **Multiple Compressors:** One for each refrigerant in each stage.
*   **Multiple Heat Exchangers (Condensers/Evaporators):** Interconnecting components where heat exchange occurs between different refrigerant cycles.
*   **Expansion Valves/Turbines:** Used in each stage to achieve the required cooling.
*   **Refrigerant Storage:** For each of the various refrigerants.

### 4.4 Advantages

*   High efficiency, especially for liquefying gases at very low temperatures, as it avoids large temperature differences in single-stage cycles.
*   Can achieve very low liquefaction temperatures.
*   Each stage operates with a refrigerant that is easily condensed at the operating temperature of the previous stage.

### 4.5 Disadvantages

*   Very complex system with multiple stages and refrigerants.
*   High capital cost due to numerous components.
*   Requires careful management of multiple refrigerants and their purity.
*   Leaks can be problematic and difficult to locate.

### 4.6 Example (Air Liquefaction Cascade)

A typical cascade system for air liquefaction might use a propane cycle to liquefy ethylene, an ethylene cycle to liquefy methane, and a methane cycle to liquefy nitrogen and oxygen.

**Referenced Textbooks:**
*   **Barron, R. F. (1986). *Cryogenic systems*. McGraw Hill.** Chapter 5, "Cascade Refrigeration," details the design and operation of multi-stage cascade systems.
*   **Mukhopadhyay, M. (2010). *Fundamentals of Cryogenic Engineering*. PHI Learning.** Chapter 4 often compares cascade systems with other cycles, highlighting their efficiency for specific applications.

---

## 5. Auto-cascade System (Mixed Refrigerant Cycle)

The auto-cascade system, also known as the mixed refrigerant (MR) cycle, is a variation where a single mixture of several refrigerants is used. This mixture is carefully composed so that as it undergoes phase changes at different pressure levels, it effectively acts like a cascade of pure refrigerants.

### 5.1 Principle of Operation

1.  **Compression:** A mixture of refrigerants (e.g., $N_2$, $C_2H_6$, $C_3H_8$, $C_4H_{10}$) is compressed.
2.  **Cooling & Condensation:** The compressed mixture is cooled and progressively condensed in a series of heat exchangers. As the mixture cools, heavier components condense at higher temperatures, and lighter components condense at lower temperatures.
3.  **Expansion:** The partially liquefied mixture is then expanded through an expansion device (often a J-T valve or a turboexpander), causing further cooling and vaporization of the lighter components.
4.  **Evaporation & Liquefaction:** The vaporized refrigerant mixture then flows back through the heat exchangers in a counter-current manner, cooling and liquefying the incoming gas stream.

### 5.2 System Diagram (Conceptual)

```
(Gas Inlet) -> Compressor -> Heat Exchanger 1 (Warm End) -> Heat Exchanger 2 (...) -> Heat Exchanger N (Cold End) -> Expansion Valve -> Liquid-Gas Mixture -> Heat Exchanger N (Cold End) -> ... -> Heat Exchanger 1 (Warm End) -> Compressor Inlet
                                                                                                           ^
                                                                                                           |
                                                                                                           (Target Gas Inlet)
```

### 5.3 Key Components

*   **Compressor:** Compresses the mixed refrigerant.
*   **Mixed Refrigerant:** A carefully blended mixture of refrigerants with different boiling points.
*   **Multi-stream Heat Exchangers:** Complex heat exchangers where the mixed refrigerant is cooled and condensed against itself and the gas being liquefied.
*   **Expansion Valve/Turbine:** For final cooling.

### 5.4 Advantages

*   Simpler than a cascade system using pure refrigerants, as it only requires one compressor and one set of refrigerant circuits.
*   High efficiency, comparable to cascade systems.
*   Can be designed for a wide range of temperatures.
*   Cost-effective for certain applications.

### 5.5 Disadvantages

*   Requires precise control of the refrigerant mixture composition.
*   Refrigerant composition can change over time due to leaks or phase separation.
*   Design of the multi-stream heat exchangers is complex.
*   Performance is sensitive to variations in ambient temperature and operating pressure.

### 5.6 Example (LNG Production)

Auto-cascade systems are commonly used in the liquefaction of natural gas (LNG). The mixed refrigerant typically contains hydrocarbons like methane, ethane, propane, and butane, along with nitrogen.

**Referenced Textbooks:**
*   **Venkatarathnam, G. (2007). *Cryogenic Mixed Refrigerant Processes*. Springer.** This is a dedicated reference book on the topic, providing comprehensive theoretical and practical aspects of MR cycles.
*   **Timmerhaus, K. D., & Flynn, T. M. (2013). *Cryogenic Process Engineering*. Springer.** Discusses MR cycles in the context of industrial gas liquefaction, including LNG.

---

## 6. Comparison of Liquefaction Systems

| Feature              | Simple Linde-Hampson         | Claude System                | Cascade System               | Auto-cascade System          |
| :------------------- | :--------------------------- | :--------------------------- | :--------------------------- | :--------------------------- |
| **Cooling Mechanism** | Joule-Thomson Effect         | Expansion Engine + J-T       | Multiple Refrigerant Cycles  | Mixed Refrigerant Cycle      |
| **Efficiency (COP)** | Low                          | Medium                       | High                         | High                         |
| **Complexity**       | Simple                       | Medium                       | High                         | Medium to High               |
| **Capital Cost**     | Low                          | Medium                       | High                         | Medium                       |
| **Work Extraction**  | No                           | Yes (from expander)          | Yes (in each stage)          | Yes (if expander used)       |
| **Applications**     | Basic liquefaction ($N_2, O_2$) | Air separation, $N_2$ liquefaction | Very low temp liquefaction   | LNG, $N_2$, $O_2$ liquefaction |
| **Refrigerants**     | Process gas itself           | Process gas itself           | Multiple pure refrigerants   | Single refrigerant mixture   |

---

## 7. Practice Questions and Answers

**Question 1:**
Which liquefaction system utilizes an expansion engine to perform external work, leading to higher efficiency than the simple Linde system?
A) Linde-Hampson System
B) Claude System
C) Cascade System
D) Auto-cascade System

**Answer:** B) Claude System

**Question 2:**
What is the primary disadvantage of the Cascade System compared to the Claude System?
A) Lower efficiency
B) Simpler design
C) Higher capital cost due to multiple stages and refrigerants
D) Less effective for very low-temperature applications

**Answer:** C) Higher capital cost due to multiple stages and refrigerants

**Question 3:**
Explain the fundamental principle behind the Auto-cascade system and its advantage over a traditional cascade system.

**Answer:**
The Auto-cascade system uses a single mixture of refrigerants with varying boiling points. As this mixture is compressed and cooled, it progressively condenses, acting like a series of pure refrigerants in a cascade. Its advantage over a traditional cascade system is its relative simplicity, requiring only one compressor and one set of refrigerant circuits, thus reducing capital cost and operational complexity compared to managing multiple pure refrigerants.

**Question 4:**
For liquefying air to produce liquid nitrogen and liquid oxygen, which of the following systems would be a common and efficient choice? Justify your answer.
A) Simple Linde-Hampson System
B) Claude System
C) Cascade System
D) Both B and C could be used, but Claude is generally preferred for industrial scale air liquefaction.

**Answer:** D) Both B and C could be used, but Claude is generally preferred for industrial scale air liquefaction.
*   **Justification:** The Claude system offers significantly better efficiency than the Linde-Hampson system due to the work extracted by the expansion engine, making it more economical for industrial-scale production. While a Cascade system can achieve very low temperatures, it is generally more complex and expensive than the Claude system, and often not necessary for air liquefaction temperatures. The Claude system strikes a good balance between efficiency, complexity, and cost for air liquefaction.

**Question 5:**
Describe the role of the Joule-Thomson effect in the Linde-Hampson system. What is its limitation in achieving very low temperatures?

**Answer:**
In the Linde-Hampson system, the Joule-Thomson (J-T) effect is the primary cooling mechanism. When a high-pressure gas expands through a throttling device (J-T valve), its temperature drops due to the conversion of internal potential energy into kinetic energy during expansion. This cooling effect allows for liquefaction.
The limitation of the J-T effect is that its cooling capability is dependent on the initial temperature and pressure of the gas, and the gas's inversion temperature. For gases with positive J-T coefficients at higher temperatures (like Helium and Hydrogen), the J-T effect alone is insufficient to achieve liquefaction without extensive pre-cooling to very low temperatures. For gases like Nitrogen and Oxygen, it is effective, but its efficiency is still limited compared to cycles that extract work.

---

## 8. Important Points to Remember

*   **Joule-Thomson Effect:** Crucial for Linde-Hampson but has limitations for very low-temperature gases.
*   **Expansion Engine:** Key advantage of the Claude system for improved efficiency.
*   **Cascade Systems:** Utilize multiple refrigerants in separate circuits for very low-temperature applications, offering high efficiency but high complexity.
*   **Auto-cascade Systems:** Employ a single mixed refrigerant to mimic a cascade effect, simplifying the system while maintaining good efficiency, widely used for LNG.
*   **Efficiency (COP):** Generally increases with system complexity and work extraction (Claude, Cascade, Auto-cascade are more efficient than simple Linde).
*   **Capital Cost:** Generally increases with system complexity.
*   **Application Specificity:** The choice of system depends heavily on the target gas, required purity, scale of operation, and economic factors.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
