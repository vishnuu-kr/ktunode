---
title: "Engine power- BHP"
subject: "THERMAL ENGINEERING"
module: "Module 3: Fundamentals of IC Engines :  Air standard cycles"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044639a0"
status: "completed"
scrapedAt: "2026-05-20T18:08:52.946Z"
---
## Thermal Engineering: Module 3 - Fundamentals of IC Engines: Air Standard Cycles

**Topic: Engine Power - BHP (Brake Horsepower)**

**Learning Outcomes:**

*   **Understand the concept of engine power and its various forms.**
*   **Differentiate between indicated power, brake power, and frictional power.**
*   **Define and calculate Brake Horsepower (BHP).**
*   **Relate BHP to engine performance parameters and efficiency.**
*   **Understand the role of dynamometers in measuring brake power.**

**Course Outcomes Alignment:**

*   **CO3:** Identify the performance parameters of IC engines and evaluate their performance. (This topic directly contributes to evaluating engine performance by understanding the actual power output.)
*   **CO1:** Apply the basic thermodynamic principles and analyse the operation of steam power cycles. (While this topic focuses on IC engines, the underlying principles of work and power are fundamental to thermodynamics.)

---

### 1. Introduction to Engine Power

Internal Combustion (IC) engines convert chemical energy stored in fuel into mechanical work. This mechanical work is the output power of the engine. Understanding and quantifying this power is crucial for evaluating engine performance, comparing different engines, and ensuring they meet design specifications.

**Key Concept:** **Power** is the rate at which work is done or energy is transferred.

*   **Unit of Power:** Watts (W), Kilowatts (kW), Horsepower (hp).
*   **Relationship:** Power = Work / Time

---

### 2. Types of Power in an IC Engine

In an IC engine, the power generated is not directly available at the crankshaft due to internal losses. We commonly classify engine power into three main categories:

*   **Indicated Power (IP):** The power developed by the combustion of fuel inside the cylinder. This is the theoretical power if there were no friction or heat losses to the cylinder walls.
*   **Frictional Power (FP):** The power lost due to friction between moving parts such as piston rings, cylinder walls, crankshaft bearings, valve mechanisms, etc.
*   **Brake Power (BP) / Brake Horsepower (BHP):** The actual power delivered at the engine's crankshaft. This is the power available to do useful work, such as driving a vehicle or a generator.

---

### 3. Indicated Power (IP)

Indicated power is the power developed within the engine cylinder as a result of the expansion of gases after combustion. It is calculated based on the pressure-volume (P-V) diagram of the engine cycle.

**Formula for Indicated Power:**

*   **For a 2-stroke engine:**
    $IP = \frac{P_m \times L \times A \times n}{60}$
    Where:
    *   $P_m$ = Indicated Mean Effective Pressure (IMEP) (in N/m²)
    *   $L$ = Length of stroke (in meters)
    *   $A$ = Area of the piston (in m²)
    *   $n$ = Engine speed (in revolutions per minute, RPM)

*   **For a 4-stroke engine:**
    $IP = \frac{P_m \times L \times A \times n}{2 \times 60}$
    Where:
    *   $P_m$ = Indicated Mean Effective Pressure (IMEP) (in N/m²)
    *   $L$ = Length of stroke (in meters)
    *   $A$ = Area of the piston (in m²)
    *   $n$ = Engine speed (in revolutions per minute, RPM)

**Explanation of Terms:**

*   **Indicated Mean Effective Pressure ($P_m$):** The average pressure that, if applied constantly to the piston throughout the power stroke, would produce the same amount of work as the actual cycle. It's obtained from the area of the indicator diagram.
*   **Stroke Volume (V_s):** The volume swept by the piston during one stroke, $V_s = L \times A$.
*   **Work per cycle:** $W_{cycle} = P_m \times V_s$
*   **Number of power strokes per minute:**
    *   2-stroke engine: $n$
    *   4-stroke engine: $n/2$
*   **Indicated Power (IP) in Watts:** $IP = \frac{P_m \times V_s \times (\text{number of power strokes per minute})}{60}$

**Example Calculation (IP):**

Consider a 4-stroke, single-cylinder engine with the following specifications:
*   Bore (Diameter) = 10 cm = 0.1 m
*   Stroke Length = 12 cm = 0.12 m
*   Indicated Mean Effective Pressure ($P_m$) = 6 bar = 6 x 10⁵ N/m²
*   Engine Speed = 1500 RPM

**Calculation:**
1.  Area of piston (A) = $\frac{\pi}{4} \times D^2 = \frac{\pi}{4} \times (0.1)^2 = 0.00785$ m²
2.  Stroke Volume ($V_s$) = $L \times A = 0.12 \times 0.00785 = 0.000942$ m³
3.  Number of power strokes per minute = $1500 / 2 = 750$
4.  Indicated Power (IP) = $\frac{P_m \times V_s \times (\text{number of power strokes per minute})}{60}$
    $IP = \frac{6 \times 10^5 \times 0.000942 \times 750}{60} = 7065$ Watts
    $IP = 7.065$ kW

---

### 4. Frictional Power (FP)

Frictional power is the power lost due to friction between the moving parts of the engine. It is primarily a function of engine speed and the lubrication system.

**Factors affecting Frictional Power:**

*   **Engine Speed:** Higher speeds lead to increased friction.
*   **Engine Load:** Increased load can lead to higher bearing pressures and thus more friction.
*   **Viscosity of Lubricating Oil:** Lower viscosity oils can lead to increased friction.
*   **Design of Engine Components:** Piston ring tension, bearing design, etc.
*   **Temperature:** Operating temperature affects oil viscosity and component expansion.

**Formula for Frictional Power:**

Frictional power is generally difficult to calculate directly from fundamental principles. It is usually determined experimentally or estimated using empirical correlations.

$FP = IP - BP$

**Example Scenario:** If the IP of the engine in the previous example was 7.5 kW and the measured brake power was 6 kW, then the frictional power would be:
$FP = 7.5 \text{ kW} - 6 \text{ kW} = 1.5 \text{ kW}$

---

### 5. Brake Power (BP) / Brake Horsepower (BHP)

Brake power is the net power available at the crankshaft of the engine. It is the indicated power minus the frictional power. This is the power that is actually used to perform useful work.

**Relationship:**

$BP = IP - FP$

**Measurement of Brake Power:**

Brake power is measured using a **dynamometer**. A dynamometer applies a load to the engine's crankshaft and measures the torque and the speed at which the crankshaft is rotating.

**Types of Dynamometers:**

*   **Absorption Dynamometers:** These absorb the engine's power and convert it into heat. Examples include:
    *   **Prony Brake Dynamometer:** A simple mechanical brake that applies friction to the rotating shaft.
    *   **Hydraulic Dynamometer (Water Brake):** Uses a rotor within a casing filled with water. The resistance is created by shearing action of water.
    *   **Electric Dynamometer (Eddy Current Dynamometer):** Uses the principle of electromagnetic induction to create resistance.

*   **Torque-Measuring Dynamometers:** These measure the torque directly.

**Calculation of Brake Power from Dynamometer Readings:**

The power delivered at the brake or crankshaft is calculated from the measured torque and angular speed.

**Formula for Brake Power (BP):**

$BP = \frac{2 \pi N T}{60}$ (in Watts)
Where:
*   $N$ = Engine speed (in revolutions per minute, RPM)
*   $T$ = Brake torque (in Newton-meters, Nm)

**Brake Horsepower (BHP):**

BHP is the brake power expressed in horsepower.
1 hp = 745.7 Watts (approximately 746 Watts)

$BHP = \frac{BP (\text{in Watts})}{745.7}$

**Or, more directly:**

$BHP = \frac{2 \pi N T}{60 \times 745.7}$

**Example Calculation (BHP):**

Let's use the same engine scenario but now we have dynamometer readings.
*   Engine speed ($N$) = 1500 RPM
*   Measured Brake Torque ($T$) = 40 Nm

**Calculation:**
1.  Brake Power (BP) in Watts:
    $BP = \frac{2 \pi \times 1500 \times 40}{60} = 6283.18$ Watts
    $BP = 6.283$ kW

2.  Brake Horsepower (BHP):
    $BHP = \frac{6283.18}{745.7} = 8.426$ hp

**Important Note:** In some contexts, "Brake Power" is used interchangeably with "Brake Horsepower" when the units are implicitly understood. However, BHP specifically refers to the power in horsepower.

---

### 6. Relation of BHP to Engine Performance and Efficiency

Brake power is a direct measure of the engine's useful output and is therefore a primary parameter for evaluating its performance.

**Key Performance Indicators related to BHP:**

*   **Brake Mean Effective Pressure (BMEP):** The equivalent mean pressure that, if acting on the piston, would produce the measured brake torque.
    $BMEP = \frac{BP \times 60}{L \times A \times n}$ (for 4-stroke) in N/m²
    Or, $BMEP = \frac{BP (\text{in kW}) \times 60000}{L (\text{in m}) \times A (\text{in m}^2) \times n (\text{in RPM})}$ (for 4-stroke)
    BMEP is a useful parameter as it is largely independent of engine size and speed, allowing for engine comparisons.

*   **Brake Thermal Efficiency ($\eta_{bth}$):** The ratio of the brake power output to the rate of heat energy supplied by the fuel.
    $\eta_{bth} = \frac{BP}{\text{Fuel Energy Input Rate}}$
    Fuel Energy Input Rate = Mass flow rate of fuel × Calorific Value of fuel

*   **Mechanical Efficiency ($\eta_{mech}$):** The ratio of brake power to indicated power.
    $\eta_{mech} = \frac{BP}{IP}$
    Since $BP = IP - FP$, we have:
    $\eta_{mech} = \frac{IP - FP}{IP} = 1 - \frac{FP}{IP}$
    Mechanical efficiency indicates how effectively the indicated power is converted into brake power, with the difference being the frictional losses.

**Example Scenario:**
If $IP = 7.065$ kW and $BP = 6.283$ kW (from previous examples).
Mechanical Efficiency:
$\eta_{mech} = \frac{6.283}{7.065} = 0.889$ or 88.9%

This means that 88.9% of the power developed inside the cylinder is available at the crankshaft.

---

### 7. Important Points to Remember

*   **IP is the theoretical power inside the cylinder; BP is the actual power at the crankshaft.**
*   **FP is the power lost due to friction.**
*   **$BP = IP - FP$.**
*   **Dynamometers are used to measure brake power by measuring torque and speed.**
*   **BHP is brake power expressed in horsepower.**
*   **BMEP and brake thermal efficiency are key indicators of engine performance, directly related to BHP.**
*   **Mechanical efficiency quantifies frictional losses.**
*   **The formulas for IP differ slightly for 2-stroke and 4-stroke engines due to the frequency of power strokes.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 8. Textual References and Content Integration

*   **Rudra Moorthy:** Emphasizes the fundamental thermodynamic principles underlying power generation in engines. The distinction between indicated and brake power is central to performance analysis.
*   **R.K. Rajput:** Provides clear derivations for indicated power and brake power calculations. Likely covers various types of dynamometers and their operating principles.
*   **V. Ganesan:** Focuses on the practical aspects of IC engines, including engine construction and testing, which directly relates to how BHP is measured and its significance.
*   **H.N. Gupta:** Often provides detailed analysis of engine cycles and performance parameters, where BHP is a critical output metric.
*   **V. Sajith and Shijo Thomas:** Likely includes discussions on engine testing procedures and the interpretation of dynamometer data, reinforcing the practical measurement of BHP.
*   **J.B. Heywood:** A comprehensive reference that delves deep into engine combustion, performance, and emissions. BHP would be a central parameter in performance mapping and analysis.
*   **Mahesh Rathore:** Offers a balanced view of theory and application, explaining how fundamental concepts translate into practical engine power output (BHP).

---

### 9. Practice Questions and Exercises

**Question 1:**
A 4-stroke, single-cylinder diesel engine has the following particulars:
Bore = 12 cm, Stroke = 15 cm, Speed = 2000 RPM, Indicated Mean Effective Pressure (IMEP) = 7.5 bar.
Calculate the Indicated Power of the engine in kW.
(Assume $1 \text{ bar} = 10^5 \text{ N/m}^2$)

**Answer 1:**
*   Bore (D) = 12 cm = 0.12 m
*   Stroke (L) = 15 cm = 0.15 m
*   Speed (N) = 2000 RPM
*   IMEP ($P_m$) = 7.5 bar = $7.5 \times 10^5$ N/m²
*   Area of piston (A) = $\frac{\pi}{4} D^2 = \frac{\pi}{4} (0.12)^2 = 0.01131$ m²
*   Stroke Volume ($V_s$) = $L \times A = 0.15 \times 0.01131 = 0.0016965$ m³
*   For a 4-stroke engine, number of power strokes per minute = N/2 = 2000/2 = 1000
*   Indicated Power (IP) = $\frac{P_m \times V_s \times (\text{number of power strokes per minute})}{60}$
    $IP = \frac{7.5 \times 10^5 \times 0.0016965 \times 1000}{60} = 21206.25$ Watts
    $IP = 21.21$ kW

**Question 2:**
An engine develops an indicated power of 30 kW and a brake power of 24 kW. Calculate the frictional power and the mechanical efficiency of the engine.

**Answer 2:**
*   Indicated Power (IP) = 30 kW
*   Brake Power (BP) = 24 kW
*   Frictional Power (FP) = $IP - BP = 30 \text{ kW} - 24 \text{ kW} = 6 \text{ kW}$
*   Mechanical Efficiency ($\eta_{mech}$) = $\frac{BP}{IP} = \frac{24 \text{ kW}}{30 \text{ kW}} = 0.8$ or 80%

**Question 3:**
A dynamometer test on a single-cylinder engine operating at 1800 RPM showed a brake torque of 50 Nm. Calculate the brake horsepower (BHP).

**Answer 3:**
*   Engine Speed (N) = 1800 RPM
*   Brake Torque (T) = 50 Nm
*   Brake Power (BP) in Watts = $\frac{2 \pi N T}{60} = \frac{2 \pi \times 1800 \times 50}{60} = 9424.78$ Watts
*   Brake Horsepower (BHP) = $\frac{BP (\text{in Watts})}{745.7} = \frac{9424.78}{745.7} = 12.64$ hp

---