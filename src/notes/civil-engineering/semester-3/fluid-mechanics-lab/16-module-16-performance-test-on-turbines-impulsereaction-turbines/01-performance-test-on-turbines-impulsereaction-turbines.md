---
title: "Performance test on turbines (Impulse/Reaction turbines)"
subject: "FLUID MECHANICS LAB"
module: "Module 16: Performance test on turbines (Impulse/Reaction turbines)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108f4"
status: "completed"
scrapedAt: "2026-05-20T18:41:00.340Z"
---
# Fluid Mechanics Lab: Module 16 - Performance Test on Turbines (Impulse/Reaction Turbines)

## 1. Introduction to Turbines

### 1.1 What are Turbines?

*   **Definition:** Turbines are rotating machines that convert the kinetic and potential energy of a fluid (water, steam, gas) into mechanical energy, which is then typically used to generate electricity.
*   **Working Principle:** Fluid under pressure or moving at high velocity strikes the rotating blades of the turbine, causing the rotor to spin. This rotational energy is then transferred to a generator.

### 1.2 Types of Turbines

There are two primary categories of turbines based on the principle of operation:

#### 1.2.1 Impulse Turbines

*   **Definition:** In impulse turbines, the entire pressure drop of the fluid occurs in the nozzle (or nozzles) *before* it reaches the turbine runner. The fluid strikes the runner at atmospheric pressure, and its momentum is utilized to produce torque.
*   **Key Characteristics:**
    *   Fluid pressure remains constant as it passes through the runner.
    *   The casing is not required to be pressure-tight.
    *   High fluid velocity is a key feature.
*   **Examples:**
    *   **Pelton Turbine:** Used for high head and low flow rate applications. The water jet from a nozzle strikes buckets on the periphery of the runner.
    *   **Turgo Turbine:** Similar to Pelton but the jet strikes the runner at an angle.

#### 1.2.2 Reaction Turbines

*   **Definition:** In reaction turbines, the fluid is directed through guide vanes (wicket gates) which control the flow rate and direct the fluid onto the runner blades. A significant pressure drop occurs *both* in the guide vanes and as the fluid passes through the runner. The reaction force due to the pressure drop across the runner blades contributes to the torque.
*   **Key Characteristics:**
    *   Pressure decreases as the fluid flows through the runner.
    *   The casing must be pressure-tight as it contains the pressurized fluid.
    *   The runner is completely submerged in water.
*   **Examples:**
    *   **Francis Turbine:** Used for medium head and medium flow rate applications. Water enters radially and exits axially.
    *   **Kaplan Turbine:** Used for low head and high flow rate applications. Features adjustable blades for efficiency over a range of flow conditions.
    *   **Propeller Turbine:** Similar to Kaplan but with fixed blades.

## 2. Performance Test on Turbines

### 2.1 Objectives of Performance Testing

*   **Determine Efficiency:** To evaluate how effectively the turbine converts the available fluid energy into mechanical power.
*   **Assess Operating Characteristics:** To understand how the turbine performs under varying operating conditions (e.g., flow rate, head, speed).
*   **Identify Optimal Operating Points:** To find the conditions under which the turbine achieves maximum efficiency.
*   **Verify Design Specifications:** To ensure the turbine meets the manufacturer's performance claims.
*   **Troubleshooting and Maintenance:** To diagnose problems and inform maintenance schedules.

### 2.2 Key Parameters Measured

During a performance test, the following parameters are typically measured:

*   **Head (H):** The difference in elevation or pressure between the upstream and downstream fluid levels.
    *   **Net Head (H_net):** The effective head available for energy conversion, typically measured upstream of the turbine and downstream of the draft tube exit.
    *   **Gross Head:** The total vertical distance between the upstream and downstream water surfaces.
*   **Flow Rate (Q):** The volume of fluid passing through the turbine per unit time.
    *   Can be measured using flow meters (e.g., orifice plate, venturi meter, magnetic flow meter) or by volumetric methods (filling a tank of known volume).
*   **Speed (N):** The rotational speed of the turbine runner, usually measured in revolutions per minute (RPM).
*   **Torque (T):** The rotational force produced by the turbine runner.
    *   Measured using a dynamometer coupled to the turbine shaft.
*   **Power Output (P_out):** The mechanical power delivered by the turbine shaft.
    *   Calculated as $P_{out} = \frac{2 \pi N T}{60}$ (when N is in RPM and T is in Nm).
    *   Electrical power output can also be measured if coupled to a generator.

### 2.3 Efficiency Calculations

The efficiency of a turbine is a crucial performance indicator. There are several types of efficiency:

#### 2.3.1 Hydraulic Efficiency ($\eta_h$)

*   **Definition:** The ratio of the power developed by the runner to the power supplied by the fluid.
*   **Formula:**
    $$ \eta_h = \frac{\text{Runner Power}}{\text{Water Power Input}} $$
    $$ \eta_h = \frac{P_r}{P_w} $$
    Where:
    *   $P_r$ = Runner Power (mechanical power developed by the runner)
    *   $P_w$ = Water Power Input (power available in the fluid)
*   **Calculation of Water Power Input ($P_w$):**
    $$ P_w = \rho g Q H_{net} $$
    Where:
    *   $\rho$ = Density of the fluid (e.g., $1000 \, kg/m^3$ for water)
    *   $g$ = Acceleration due to gravity ($9.81 \, m/s^2$)
    *   $Q$ = Flow rate ($m^3/s$)
    *   $H_{net}$ = Net head ($m$)
*   **Runner Power ($P_r$):** This is the mechanical power output before accounting for mechanical losses. It is typically measured by the dynamometer as torque ($\text{T}$) and speed ($\text{N}$).
    $$ P_r = \frac{2 \pi N T}{60} $$

#### 2.3.2 Mechanical Efficiency ($\eta_m$)

*   **Definition:** The ratio of the power delivered by the shaft to the power developed by the runner. This accounts for frictional losses in bearings and seals.
*   **Formula:**
    $$ \eta_m = \frac{\text{Shaft Power Output}}{\text{Runner Power}} $$
    $$ \eta_m = \frac{P_{out}}{P_r} $$
    Where:
    *   $P_{out}$ = Shaft Power Output (measured by dynamometer as $P_{out} = \frac{2 \pi N T_{load}}{60}$)
    *   $P_r$ = Runner Power

#### 2.3.3 Overall Efficiency ($\eta_o$)

*   **Definition:** The ratio of the useful mechanical power delivered by the turbine shaft to the power supplied by the fluid. This is the most comprehensive efficiency metric.
*   **Formula:**
    $$ \eta_o = \frac{\text{Shaft Power Output}}{\text{Water Power Input}} $$
    $$ \eta_o = \frac{P_{out}}{P_w} $$
*   **Relationship between efficiencies:**
    $$ \eta_o = \eta_h \times \eta_m $$

### 2.4 Performance Curves

Performance tests are often presented graphically in the form of performance curves. These curves illustrate how the turbine's efficiency, power output, and other parameters change with varying operating conditions.

#### 2.4.1 Key Performance Curves

*   **Efficiency vs. Flow Rate (at constant head):** Shows the optimal flow rate for maximum efficiency.
*   **Efficiency vs. Speed (at constant head and flow):** Shows the optimal speed.
*   **Power Output vs. Flow Rate (at constant head):** Demonstrates the relationship between flow and power.
*   **Power Output vs. Speed:** Illustrates the power output across a range of speeds.
*   **Specific Speed Curves:** Relate efficiency to the dimensionless specific speed ($N_s$), which characterizes the type of turbine suitable for a given head and flow condition.

#### 2.4.2 Specific Speed ($N_s$)

*   **Definition:** A dimensionless parameter used to classify turbines and compare their performance characteristics, independent of their physical size. It represents the speed a geometrically similar turbine would rotate at if it were sized to produce 1 unit of power under a 1 unit head.
*   **Formula:**
    $$ N_s = \frac{N \sqrt{P_{out}}}{\left(H_{net}\right)^{5/4}} $$
    Where:
    *   $N$ = Speed (RPM)
    *   $P_{out}$ = Power Output (kW or HP, ensure consistency)
    *   $H_{net}$ = Net Head (m or ft, ensure consistency)
*   **Typical Ranges for different turbine types:**
    *   Pelton Turbine: $N_s \approx 2-20$ (low specific speed)
    *   Francis Turbine: $N_s \approx 20-200$ (medium specific speed)
    *   Kaplan Turbine: $N_s \approx 200-1000$ (high specific speed)

**Importance of Specific Speed:** It helps in selecting the most appropriate turbine type for a given site's head and flow conditions. Turbines with similar specific speeds will have similar blade shapes and performance characteristics.

## 3. Procedure for a Typical Turbine Performance Test (Lab Setting)

*   **Setup:**
    *   Connect the turbine to a hydraulic circuit with a pump, flow control valve, and a dynamometer to measure torque.
    *   Ensure pressure gauges are installed upstream and downstream of the turbine.
    *   Ensure a speed sensor is attached to the turbine shaft.
    *   A mechanism to vary the load on the dynamometer is required.

*   **Steps:**
    1.  **Establish Baseline Conditions:** Set a constant head (by adjusting pump speed or reservoir level) and a specific flow rate (using the flow control valve).
    2.  **Apply Load:** Start with no load on the dynamometer and gradually increase the load.
    3.  **Record Data:** For each load increment, record the following:
        *   Upstream pressure/head ($H_u$)
        *   Downstream pressure/head ($H_d$)
        *   Speed of rotation ($N$)
        *   Torque ($T$)
        *   Flow rate ($Q$)
    4.  **Calculate Net Head:** $H_{net} = H_u - H_d$ (assuming gauges are at the same datum, or correct for datum difference).
    5.  **Calculate Shaft Power Output ($P_{out}$):** $P_{out} = \frac{2 \pi N T}{60}$.
    6.  **Calculate Water Power Input ($P_w$):** $P_w = \rho g Q H_{net}$.
    7.  **Calculate Overall Efficiency ($\eta_o$):** $\eta_o = \frac{P_{out}}{P_w}$.
    8.  **Repeat for Different Operating Points:**
        *   Vary the flow rate while keeping the head relatively constant and repeat steps 2-7.
        *   (Optional) Vary the head and repeat steps 2-7.
    9.  **Plot Performance Curves:** Plot $\eta_o$, $P_{out}$ versus $Q$ (or speed) to visualize the turbine's performance.

## 4. Important Points to Remember

*   **Units Consistency:** Ensure all units are consistent throughout calculations (e.g., head in meters, flow in $m^3/s$, speed in RPM, torque in Nm).
*   **Net Head:** Always use the *net head* for efficiency calculations, as this represents the actual energy available to the turbine.
*   **Friction Losses:** The difference between hydraulic efficiency and overall efficiency is primarily due to mechanical and volumetric losses.
*   **Dynamometer Role:** The dynamometer is crucial for measuring the mechanical output power by measuring torque and speed.
*   **Performance Curves:** These are essential for understanding the operating envelope and identifying the most efficient operating point.
*   **Specific Speed:** A vital tool for turbine selection and performance comparison.
*   **Impulse vs. Reaction:** Recognize the fundamental difference in how they utilize fluid energy (momentum vs. pressure drop across runner).

## 5. Practice Questions & Exercises

**Question 1:** A Pelton turbine operates under a net head of 150 m and develops a power of 1000 kW at a speed of 600 RPM. If the flow rate is 0.8 $m^3/s$, calculate the following:
    a) Water power input.
    b) Overall efficiency of the turbine.
    c) Specific speed of the turbine (assume power is in kW and head in m).

**Question 2:** A Francis turbine is tested and the following data is obtained at its best efficiency point:
    *   Net Head ($H_{net}$) = 50 m
    *   Flow Rate ($Q$) = 0.5 $m^3/s$
    *   Speed ($N$) = 400 RPM
    *   Shaft Power Output ($P_{out}$) = 200 kW

    Calculate:
    a) Water power input.
    b) Overall efficiency.
    c) Runner power ($P_r$), assuming mechanical efficiency ($\eta_m$) is 95%.
    d) Hydraulic efficiency ($\eta_h$).

**Question 3:** What is the primary distinction between an impulse turbine and a reaction turbine in terms of pressure change across the runner?

---

## Answers to Practice Questions

**Answer 1:**
Given: $H_{net} = 150$ m, $P_{out} = 1000$ kW, $Q = 0.8$ $m^3/s$, $N = 600$ RPM.
Assume $\rho = 1000$ $kg/m^3$ and $g = 9.81$ $m/s^2$.

a) **Water power input ($P_w$):**
   $P_w = \rho g Q H_{net}$
   $P_w = 1000 \, kg/m^3 \times 9.81 \, m/s^2 \times 0.8 \, m^3/s \times 150 \, m$
   $P_w = 1177200 \, W = 1177.2 \, kW$

b) **Overall efficiency ($\eta_o$):**
   $\eta_o = \frac{P_{out}}{P_w}$
   $\eta_o = \frac{1000 \, kW}{1177.2 \, kW}$
   $\eta_o \approx 0.85$ or 85%

c) **Specific speed ($N_s$):**
   $N_s = \frac{N \sqrt{P_{out}}}{\left(H_{net}\right)^{5/4}}$
   $N_s = \frac{600 \sqrt{1000}}{(150)^{5/4}}$
   $N_s = \frac{600 \times 31.62}{255.46}$
   $N_s \approx 74.0$
   *(Note: This specific speed value might suggest a Francis turbine more than a Pelton, highlighting the importance of consistent units and proper application of the formula. For a Pelton, the specific speed would typically be much lower if calculated with different units or under specific conventions. However, based on the given data and standard formula, this is the result).*

**Answer 2:**
Given: $H_{net} = 50$ m, $Q = 0.5$ $m^3/s$, $N = 400$ RPM, $P_{out} = 200$ kW, $\eta_m = 95\% = 0.95$.
Assume $\rho = 1000$ $kg/m^3$ and $g = 9.81$ $m/s^2$.

a) **Water power input ($P_w$):**
   $P_w = \rho g Q H_{net}$
   $P_w = 1000 \, kg/m^3 \times 9.81 \, m/s^2 \times 0.5 \, m^3/s \times 50 \, m$
   $P_w = 245250 \, W = 245.25 \, kW$

b) **Overall efficiency ($\eta_o$):**
   $\eta_o = \frac{P_{out}}{P_w}$
   $\eta_o = \frac{200 \, kW}{245.25 \, kW}$
   $\eta_o \approx 0.815$ or 81.5%

c) **Runner power ($P_r$):**
   $\eta_m = \frac{P_{out}}{P_r}$
   $P_r = \frac{P_{out}}{\eta_m}$
   $P_r = \frac{200 \, kW}{0.95}$
   $P_r \approx 210.53 \, kW$

d) **Hydraulic efficiency ($\eta_h$):**
   $\eta_o = \eta_h \times \eta_m$
   $\eta_h = \frac{\eta_o}{\eta_m}$
   $\eta_h = \frac{0.815}{0.95}$
   $\eta_h \approx 0.858$ or 85.8%

**Answer 3:**
The primary distinction is that **impulse turbines** utilize the kinetic energy of a high-velocity jet of fluid, with the pressure remaining constant as it passes through the runner. In contrast, **reaction turbines** utilize both the kinetic energy and the pressure energy of the fluid. A significant pressure drop occurs across the runner blades themselves, generating a reaction force that contributes to the torque.
