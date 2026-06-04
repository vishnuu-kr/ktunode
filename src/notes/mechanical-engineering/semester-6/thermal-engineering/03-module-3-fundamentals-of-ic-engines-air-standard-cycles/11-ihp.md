---
title: "IHP"
subject: "THERMAL ENGINEERING"
module: "Module 3: Fundamentals of IC Engines :  Air standard cycles"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044639a1"
status: "completed"
scrapedAt: "2026-05-20T18:08:53.585Z"
---
# Thermal Engineering: Module 3 - Fundamentals of IC Engines: Air Standard Cycles - Indicated Horsepower (IHP)

## 1. Introduction to Indicated Horsepower (IHP)

Indicated Horsepower (IHP) is a fundamental performance parameter for Internal Combustion (IC) engines. It represents the theoretical power developed by the expanding gases within the cylinder of an engine, *before* any losses due to friction, pumping, or auxiliaries are considered. In essence, it's the gross power output.

*   **Key Concept:** IHP is a measure of the power generated purely by the combustion process and expansion of gases.
*   **Alignment with CO3:** This topic directly contributes to understanding and evaluating the performance parameters of IC engines, aligning with CO3 (Knowledge Level: K3).

## 2. Theoretical Basis of IHP Calculation

The calculation of IHP is based on the **Indicated Power**, which is the work done by the expanding gases on the piston during the power stroke. This work done per cycle, when multiplied by the number of power strokes per unit time, gives the indicated power.

*   **Indicated Work Done per Cycle:** This is determined from the **Indicator Diagram** (also known as the Pressure-Volume or P-V diagram). The area enclosed by the P-V diagram represents the work done by the gas per cycle.
    *   **Work Done (W) = ∫ P dV**
*   **Indicated Power (IP):**
    *   IP = Indicated Work per Cycle $\times$ Number of Power Strokes per Unit Time
    *   IP = Indicated Mean Effective Pressure (IMEPp) $\times$ Swept Volume $\times$ Engine Speed (in RPS)

### 2.1 Indicator Diagram

The indicator diagram is a graphical representation of the pressure inside the cylinder plotted against the volume displaced by the piston.

*   **Key Concept:** The area under the P-V curve represents the work done.
*   **Textbook Reference:** Rudra Moorthy (2003) and R.K. Rajput (2010) provide detailed explanations and graphical representations of indicator diagrams for various air-standard cycles.

### 2.2 Indicated Mean Effective Pressure (IMEPp)

IMEPp is the hypothetical constant pressure that, if applied to the piston throughout the power stroke, would produce the same amount of indicated work per cycle as actually done by the expanding gases.

*   **Definition:** IMEPp is the average pressure during the power stroke.
*   **Formula:** IMEPp = (Indicated Work per Cycle) / (Swept Volume)

### 2.3 Engine Speed and Power Strokes

*   **Engine Speed (N):** Typically measured in revolutions per minute (RPM). For power calculations, it needs to be converted to revolutions per second (RPS) or cycles per second.
*   **Number of Power Strokes per Unit Time:**
    *   For a 2-stroke engine: N/60 power strokes per second.
    *   For a 4-stroke engine: N/120 power strokes per second.

## 3. Calculation of Indicated Horsepower (IHP)

The general formula for IHP is derived from the indicated power.

*   **Formula for IHP (in Watts):**
    *   **For a single-cylinder engine:**
        IHP = P<sub>m</sub> $\times$ L $\times$ A $\times$ n $\times$ (N/60)  --- (when P<sub>m</sub> is in Pascals, L in meters, A in m², n is the number of power strokes per revolution for that cylinder, and N in RPM)
        Where:
            *   P<sub>m</sub> = Indicated Mean Effective Pressure (IMEPp)
            *   L = Stroke length of the piston (meters)
            *   A = Area of the piston (m²)
            *   n = Number of power strokes per revolution (1 for 2-stroke, 1/2 for 4-stroke)
            *   N = Engine speed (RPM)

    *   **A more common and practical formula:**
        **IHP = (P<sub>m</sub> $\times$ L $\times$ A $\times$ n $\times$ N $\times$ z) / (60 $\times$ 1000 $\times$ 735.5)** --- (for IHP in HP, where z is the number of cylinders)
        *Note: The conversion factor 735.5 is used to convert Watts to Horsepower (1 HP ≈ 735.5 Watts). The factor of 1000 is if P<sub>m</sub> is in kPa.*

    *   **Simplified Formula (often used in context of air-standard cycles):**
        **IHP = (IMEPp $\times$ V<sub>s</sub> $\times$ N $\times$ z) / (120 $\times$ 75)** --- (if IMEPp is in kgf/cm², V<sub>s</sub> in cm³, N in RPM, result in HP. The constant 75 converts kgf-m/min to HP, and 120 accounts for 4-stroke cycle and conversion from RPM to strokes/min.)

*   **Key Point:** The choice of units for IMEPp and V<sub>s</sub> will dictate the conversion factors used.

### 3.1 Derivation from Air-Standard Cycles

The indicated work done per cycle can be calculated for various air-standard cycles (e.g., Otto, Diesel, Dual). The P-V diagram of these idealized cycles allows us to calculate the work done theoretically.

*   **Example: Otto Cycle**
    *   Indicated work per cycle = Area under the expansion curve - Area under the compression curve.
    *   This work, when multiplied by the rate of cycles, gives the indicated power.

*   **Textbook Reference:** V. Ganesan (2002) and H.N. Gupta (2018) delve into the thermodynamic analysis of air-standard cycles and how to derive the work done per cycle, which forms the basis for IHP calculation.

## 4. Relationship between IHP, BHP, and FHP

It's crucial to understand how IHP relates to other power measurements.

*   **Indicated Horsepower (IHP):** Power developed inside the cylinder (gross power).
*   **Friction Horsepower (FHP):** Power lost due to friction between moving parts (piston rings, bearings, etc.) and pumping losses.
*   **Brake Horsepower (BHP):** The actual power delivered at the crankshaft. It's the net power available for doing useful work.

*   **Relationship:**
    *   **BHP = IHP - FHP**

*   **Thermal Efficiency:** Efficiency calculations often start with IHP.
*   **Mechanical Efficiency (η<sub>m</sub>):** The ratio of BHP to IHP.
    *   **η<sub>m</sub> = BHP / IHP**

*   **Textbook Reference:** Heywood (2011) provides comprehensive coverage of engine performance parameters, including the interrelationships between IHP, FHP, and BHP.

## 5. Importance of IHP in Performance Analysis

IHP is a crucial metric for several reasons:

*   **Efficiency Assessment:** It allows for the calculation of thermal efficiency based on the fuel energy input and the power generated by combustion.
*   **Engine Design and Optimization:** Understanding IHP helps engineers optimize combustion processes, valve timing, and compression ratios to maximize the power output from the fuel consumed.
*   **Troubleshooting:** A significant drop in IHP compared to its expected value can indicate issues like poor combustion, valve leakage, or incorrect ignition timing.
*   **Benchmarking:** It serves as a benchmark for comparing the theoretical performance of different engine designs or configurations.

*   **Alignment with CO3:** This directly supports the ability to evaluate IC engine performance parameters.

## 6. Practice Questions and Exercises

**Question 1:**
A single-cylinder four-stroke diesel engine has the following specifications:
Bore = 10 cm
Stroke = 12 cm
Indicated Mean Effective Pressure (IMEPp) = 5.5 bar
Engine Speed = 1500 RPM

Calculate the Indicated Horsepower (IHP) of the engine.

**Solution 1:**
**Given:**
Bore (D) = 10 cm = 0.1 m
Stroke (L) = 12 cm = 0.12 m
IMEPp = 5.5 bar = 5.5 $\times$ 10<sup>5</sup> Pa
Engine Speed (N) = 1500 RPM

**Calculations:**
1.  **Piston Area (A):**
    A = $\frac{\pi}{4} D^2 = \frac{\pi}{4} (0.1)^2 = \frac{\pi}{4} \times 0.01 = 0.007854 \, m^2$

2.  **Indicated Work per Cycle:**
    Indicated Work per Cycle = IMEPp $\times$ Swept Volume
    Swept Volume (V<sub>s</sub>) = A $\times$ L = 0.007854 m$^2$ $\times$ 0.12 m = 0.0009425 m$^3$
    Indicated Work per Cycle = 5.5 $\times$ 10<sup>5</sup> Pa $\times$ 0.0009425 m$^3$ = 518.375 Joules

3.  **Number of Power Strokes per Minute:**
    For a 4-stroke engine, there is one power stroke for every two revolutions.
    Number of power strokes per minute = N / 2 = 1500 / 2 = 750

4.  **Indicated Power (in Watts):**
    Indicated Power = Indicated Work per Cycle $\times$ Number of Power Strokes per Minute
    Indicated Power = 518.375 J/cycle $\times$ 750 cycles/min = 388781.25 J/min

    To convert J/min to Watts (J/sec):
    Indicated Power (Watts) = 388781.25 J/min / 60 sec/min = 6479.69 Watts

5.  **Indicated Horsepower (IHP):**
    1 HP = 735.5 Watts
    IHP = Indicated Power (Watts) / 735.5
    IHP = 6479.69 / 735.5 = **8.81 HP**

**Answer:** The Indicated Horsepower (IHP) of the engine is **8.81 HP**.

**Question 2:**
The indicated power of a 6-cylinder, 4-stroke engine is 150 kW. If the mechanical efficiency of the engine is 80%, and the engine speed is 2000 RPM, calculate:
a) The Brake Horsepower (BHP)
b) The Friction Horsepower (FHP)
c) The indicated mean effective pressure (IMEPp) if the bore is 10 cm and stroke is 15 cm.

**Solution 2:**
**Given:**
Indicated Power (IP) = 150 kW
Mechanical Efficiency (η<sub>m</sub>) = 80% = 0.80
Number of cylinders (z) = 6
Engine Speed (N) = 2000 RPM
Bore (D) = 10 cm = 0.1 m
Stroke (L) = 15 cm = 0.15 m

**Calculations:**

a)  **Brake Horsepower (BHP):**
    BHP = IP $\times$ η<sub>m</sub>
    BHP = 150 kW $\times$ 0.80 = **120 kW**

b)  **Friction Horsepower (FHP):**
    FHP = IP - BHP
    FHP = 150 kW - 120 kW = **30 kW**

c)  **Indicated Mean Effective Pressure (IMEPp):**
    First, convert IP from kW to Watts: IP = 150 kW = 150,000 Watts

    We know the formula:
    IP = IMEPp $\times$ Swept Volume $\times$ Number of Power Strokes per Second $\times$ Number of Cylinders

    *   Swept Volume per cylinder (V<sub>s</sub>):
        A = $\frac{\pi}{4} D^2 = \frac{\pi}{4} (0.1)^2 = 0.007854 \, m^2$
        V<sub>s</sub> = A $\times$ L = 0.007854 m$^2$ $\times$ 0.15 m = 0.0011781 m$^3$

    *   Number of Power Strokes per Second:
        For a 4-stroke engine, number of power strokes per second = N / 120
        = 2000 / 120 = 16.67 strokes/sec

    Now, rearrange the IP formula to solve for IMEPp:
    IMEPp = IP / (V<sub>s</sub> $\times$ (N/120) $\times$ z)
    IMEPp = 150,000 W / (0.0011781 m$^3$ $\times$ 16.67 strokes/sec $\times$ 6 cylinders)
    IMEPp = 150,000 W / (0.11785 m$^4$/sec)
    IMEPp = 1,272,800 Pa

    Convert IMEPp to bar (1 bar = 10<sup>5</sup> Pa):
    IMEPp = 1,272,800 Pa / 10<sup>5</sup> Pa/bar = **12.73 bar**

**Answers:**
a) The Brake Horsepower (BHP) is **120 kW**.
b) The Friction Horsepower (FHP) is **30 kW**.
c) The indicated mean effective pressure (IMEPp) is **12.73 bar**.

## 7. Important Points to Remember

*   **IHP is the theoretical maximum power.** It does not account for any mechanical losses.
*   **The Indicator Diagram is fundamental** to understanding the work done per cycle and thus IHP.
*   **IMEPp** is a crucial parameter that represents the average pressure during the power stroke.
*   **4-stroke vs. 2-stroke engines** have different numbers of power strokes per revolution, which affects the IHP calculation.
*   **BHP = IHP - FHP** is the basic relationship between these power terms.
*   **Mechanical efficiency** is a key indicator of how much of the indicated power is actually delivered as useful output.

## 8. Alignment with Course Outcomes

*   **CO1 (Apply basic thermodynamic principles and analyse operation of steam power cycles):** While this module focuses on IC engines, understanding pressure-volume work (∫ P dV) and thermodynamic cycles is a foundational skill transferable from steam cycles.
*   **CO2 (Analyse performance of steam turbines):** Similar to CO1, the analytical approach to power generation and efficiency is common.
*   **CO3 (Identify performance parameters of IC engines and evaluate their performance):** This topic directly addresses identifying IHP as a key performance parameter and evaluating it through calculations. (Knowledge Level: K3)
*   **CO4 (Explain combustion phenomenon and pollution in IC engines):** IHP is a direct result of the combustion process, so understanding IHP aids in understanding the power output derived from combustion. (Knowledge Level: K2 - indirectly)
*   **CO5 (Conduct case studies, carry out simulation/testing, and prototyping):** IHP is a value that can be measured or simulated in engine performance testing and case studies. (Knowledge Level: K6 - application)

This comprehensive set of notes provides a thorough understanding of Indicated Horsepower within the context of IC engine air-standard cycles, directly addressing the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
