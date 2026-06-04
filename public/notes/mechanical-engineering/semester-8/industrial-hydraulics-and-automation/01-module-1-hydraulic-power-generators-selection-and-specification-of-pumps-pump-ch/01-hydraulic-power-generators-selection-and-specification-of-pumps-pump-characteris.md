---
title: "Hydraulic Power Generators – Selection and specification of pumps, pump characteristics."
subject: "INDUSTRIAL HYDRAULICS AND AUTOMATION"
module: "Module 1: Hydraulic Power Generators – Selection and specification of pumps, pump characteristics."
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446466e"
status: "completed"
scrapedAt: "2026-05-20T18:21:22.787Z"
---
# Industrial Hydraulics and Automation: Module 1 Study Notes

## Topic: Hydraulic Power Generators – Selection and Specification of Pumps, Pump Characteristics

**Course Outcomes Addressed:** CO1 (K2)

**Module Objective:** This module introduces students to hydraulic power generation, focusing on the selection and specification of hydraulic pumps and understanding their characteristics. This knowledge is fundamental for comprehending the operation of any hydraulic system.

---

### 1. Introduction to Hydraulic Power Generation

Hydraulic power generation is the process of converting mechanical energy into hydraulic energy. This hydraulic energy is then used to perform work in various industrial applications. The heart of any hydraulic system is the **hydraulic pump**, which is responsible for creating the flow of hydraulic fluid.

*   **What is Hydraulic Power?**
    *   The use of pressurized liquid (usually oil) to transmit force and motion.
    *   It leverages the principle of Pascal's Law: pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel.

*   **Why are Hydraulic Pumps Important?**
    *   They are the primary source of hydraulic energy in a system.
    *   Their performance directly impacts the efficiency, speed, and power of the entire hydraulic circuit.

---

### 2. Types of Hydraulic Pumps

Hydraulic pumps are broadly classified into two main categories: **Non-positive displacement pumps** and **Positive displacement pumps**.

#### 2.1 Non-Positive Displacement Pumps (Centrifugal Pumps)

These pumps **do not** deliver a fixed quantity of fluid per revolution. The output flow varies significantly with system pressure. They are generally used for low-pressure, high-volume applications.

*   **Key Characteristics:**
    *   Flow rate decreases as system pressure increases.
    *   Provide a smooth, continuous flow.
    *   Less efficient at higher pressures.
    *   Typically used for fluid transfer rather than power transmission.

*   **Examples:**
    *   **Centrifugal Pumps:** Use an impeller to impart kinetic energy to the fluid, which is then converted into pressure.
        *   *Referenced in:* Andrew Parr's "Hydraulic and Pneumatics" likely discusses basic fluid dynamics relevant to these types of pumps.

*   **Limitations in Hydraulic Power Generation:**
    *   Their performance is highly pressure-dependent, making them unsuitable for applications requiring consistent force or speed control under varying loads.
    *   They cannot generate high pressures efficiently.

#### 2.2 Positive Displacement Pumps

These pumps **deliver a fixed quantity of fluid per revolution or stroke**. The output flow is relatively constant regardless of system pressure (within their operating limits). They are essential for hydraulic power transmission systems.

*   **Key Characteristics:**
    *   Provide a nearly constant flow rate irrespective of pressure variations.
    *   Can generate high pressures.
    *   Generally more efficient than non-positive displacement pumps in power transmission applications.
    *   Requires a pressure relief valve for safety to prevent over-pressurization.

*   **Sub-Categories of Positive Displacement Pumps:**

    ##### 2.2.1 Gear Pumps

    *   **Description:** Consist of two meshing gears (one driven, one idler) that trap fluid between their teeth and the pump casing, moving it from the inlet to the outlet.
    *   **Types:**
        *   **External Gear Pumps:** Two external spur gears mesh. Simple, rugged, and cost-effective.
        *   **Internal Gear Pumps:** An external gear meshes with an internal gear. More compact and can achieve higher pressures than external gear pumps.
    *   **Advantages:**
        *   Simple construction.
        *   Low cost.
        *   Reliable.
        *   Good for moderate pressures.
    *   **Disadvantages:**
        *   Lower volumetric efficiency compared to other types.
        *   Susceptible to wear from contaminants.
        *   Can be noisy.
    *   *Referenced in:* Andrew Parr's "Hydraulic and Pneumatics" and Majumdar, S. R.'s "Hydraulic systems: Principles and maintenance" are highly likely to cover gear pumps in detail as they are fundamental components.

    ##### 2.2.2 Vane Pumps

    *   **Description:** Consist of a rotor with vanes that slide in and out of slots in the rotor. The rotor is offset within a cam ring, creating expanding and contracting chambers that trap and pump fluid.
    *   **Types:**
        *   **Unbalanced Vane Pumps:** Rotor is eccentric to the cam ring.
        *   **Balanced Vane Pumps:** Rotor is concentric, but the cam ring is elliptical, and vanes are held in place by pressure.
    *   **Advantages:**
        *   Good volumetric efficiency.
        *   Smooth, pulsation-free flow.
        *   Quieter operation than gear pumps.
        *   Can be designed as variable displacement.
    *   **Disadvantages:**
        *   More complex than gear pumps.
        *   Vanes are subject to wear.
        *   Less tolerant of contamination.
    *   *Referenced in:* Cundiff, J. S.'s "Fluid power circuits and controls: fundamentals and applications" would likely discuss vane pumps in the context of control and circuit design.

    ##### 2.2.3 Piston Pumps

    *   **Description:** Utilize reciprocating pistons moving within cylinders to pump fluid. They offer the highest efficiency and pressure capabilities among positive displacement pumps.
    *   **Types:**
        *   **Axial Piston Pumps:** Pistons are arranged parallel to the shaft.
            *   **Swashplate Type:** Pistons reciprocate due to the angle of a swashplate. The angle can be adjusted for variable displacement.
            *   **Bent Axis Type:** The cylinder block is angled relative to the drive shaft, causing pistons to reciprocate.
        *   **Radial Piston Pumps:** Pistons are arranged radially around a shaft.
    *   **Advantages:**
        *   High volumetric and overall efficiency.
        *   Can operate at very high pressures.
        *   Excellent durability.
        *   Available in fixed and variable displacement designs.
    *   **Disadvantages:**
        *   Most complex and expensive.
        *   Require precise manufacturing.
        *   Can be sensitive to contamination.
    *   *Referenced in:* Majumdar, S. R.'s "Hydraulic systems: Principles and maintenance" and Herbert E. Merritt's "Hydraulic control systems" would extensively cover piston pumps due to their importance in high-performance hydraulic systems and control applications. Watton, J's "Fundamentals of fluid power control" would also delve into their performance characteristics for control purposes.

---

### 3. Pump Characteristics and Performance Parameters

Understanding pump characteristics is crucial for selecting the right pump for a specific application. These characteristics are typically presented graphically as performance curves.

#### 3.1 Key Performance Parameters

*   **Displacement ($V_g$ or $D$):** The theoretical volume of fluid delivered by the pump per revolution or stroke (e.g., cm³/rev, in³/rev).
    *   **Fixed Displacement Pump:** Displacement remains constant.
    *   **Variable Displacement Pump:** Displacement can be adjusted.

*   **Flow Rate ($Q$):** The actual volume of fluid delivered per unit time (e.g., L/min, GPM).
    *   **Theoretical Flow Rate ($Q_{th}$):** $Q_{th} = V_g \times N$, where $N$ is the pump speed (rev/min or stroke/min).
    *   **Actual Flow Rate ($Q_{act}$):** The actual flow rate delivered, which is less than the theoretical flow rate due to internal leakage.

*   **Pressure ($P$):** The force per unit area exerted by the fluid. Pumps are rated for a maximum operating pressure.

*   **Speed ($N$):** The rotational speed of the pump shaft (e.g., RPM).

#### 3.2 Pump Efficiency

Efficiency is a measure of how effectively the pump converts mechanical input power into hydraulic output power.

*   **Volumetric Efficiency ($η_v$):** The ratio of actual flow rate to theoretical flow rate. It accounts for internal leakage (slip).
    *   $η_v = \frac{Q_{act}}{Q_{th}} = \frac{Q_{act}}{V_g \times N}$
    *   **Typical values:** 0.90 to 0.98 (or 90% to 98%) for piston pumps, 0.85 to 0.95 for vane pumps, 0.70 to 0.90 for gear pumps.

*   **Mechanical Efficiency ($η_m$):** The ratio of hydraulic power output to the mechanical power delivered to the pump shaft. It accounts for friction losses in the pump.
    *   $η_m = \frac{\text{Hydraulic Power Output}}{\text{Mechanical Power Input}} = \frac{P \times Q_{act}}{\text{Shaft Power}}$
    *   **Typical values:** 0.80 to 0.95 (or 80% to 95%).

*   **Overall Efficiency ($η_o$):** The product of volumetric and mechanical efficiencies. It represents the overall effectiveness of the pump.
    *   $η_o = η_v \times η_m$
    *   It is also the ratio of hydraulic power output to the mechanical power input.
    *   $η_o = \frac{\text{Hydraulic Power Output}}{\text{Mechanical Power Input}} = \frac{P \times Q_{act}}{\text{Shaft Power}}$

*   **Relationship between Power:**
    *   **Hydraulic Power Output ($P_h$):** $P_h = P \times Q_{act}$ (in appropriate units, e.g., Watts, HP).
    *   **Mechanical Power Input (Shaft Power, $P_s$):** $P_s = \frac{P \times Q_{act}}{η_o}$ or $P_s = \frac{P \times Q_{th}}{η_v \times η_m}$

#### 3.3 Pump Performance Curves

These graphs plot various performance parameters against pressure or speed. They are essential for understanding how a pump will behave in a system.

*   **Typical Curves for Positive Displacement Pumps:**
    *   **Flow Rate vs. Pressure:** For positive displacement pumps, the actual flow rate is relatively constant with increasing pressure, but there will be a slight decrease due to increased internal leakage at higher pressures.
    *   **Volumetric Efficiency vs. Pressure:** Volumetric efficiency generally decreases with increasing pressure as internal leakage increases.
    *   **Mechanical Efficiency vs. Pressure:** Mechanical efficiency often increases with pressure up to a point, as fluid pressure helps to seal components, and then decreases at very high pressures due to increased friction.
    *   **Overall Efficiency vs. Pressure:** Overall efficiency typically peaks at an intermediate pressure and then decreases as pressure increases further.
    *   **Shaft Power vs. Pressure:** For fixed displacement pumps, shaft power increases linearly with pressure. For variable displacement pumps, shaft power can be kept constant or varied by adjusting displacement.
    *   **Flow Rate vs. Speed:** Flow rate is directly proportional to speed for a given pressure.
    *   **Efficiency vs. Speed:** Efficiency may vary with speed, often being lower at very low or very high speeds.

*   **Example Scenario:**
    Imagine a gear pump with a theoretical displacement of 20 cm³/rev operating at 1500 RPM.
    *   Theoretical flow rate = 20 cm³/rev * 1500 rev/min = 30,000 cm³/min = 30 L/min.
    *   If its volumetric efficiency is 85% at a certain pressure, the actual flow rate would be 30 L/min * 0.85 = 25.5 L/min.
    *   If the system pressure is 100 bar and the mechanical efficiency is 90%, then:
        *   Hydraulic Power Output = 100 bar * 25.5 L/min * (100 Pa/bar) * (10⁻³ m³/L) / 60 s/min ≈ 4250 W.
        *   Shaft Power Input = Hydraulic Power Output / $η_o$ = 4250 W / (0.85 * 0.90) ≈ 5556 W.

---

### 4. Selection of Hydraulic Pumps

Selecting the correct hydraulic pump is a critical step in designing an efficient and reliable hydraulic system. It involves considering various factors related to the application's requirements.

#### 4.1 Factors to Consider for Pump Selection

*   **System Requirements:**
    *   **Required Flow Rate ($Q$):** Determined by the speed of actuators (cylinders, motors).
    *   **Required Pressure ($P$):** Determined by the force or torque needed by actuators.
    *   **Duty Cycle:** How often and for how long the pump will operate.
    *   **Operating Environment:** Temperature, presence of contaminants, etc.

*   **Pump Type Suitability:**
    *   **Gear Pumps:** Suitable for moderate pressure and flow, cost-sensitive applications, and general-purpose hydraulic systems.
    *   **Vane Pumps:** Good for moderate to high pressures, applications requiring smooth flow and lower noise, and variable displacement needs.
    *   **Piston Pumps:** Ideal for high-pressure, high-flow applications where efficiency and durability are paramount, and for precise control applications.

*   **Fixed vs. Variable Displacement:**
    *   **Fixed Displacement:** Used when flow rate is constant or controlled by throttling. Simpler and cheaper.
    *   **Variable Displacement:** Used when flow rate needs to be adjusted to match varying system demands, allowing for energy saving and better control.

*   **Efficiency:** Higher efficiency leads to lower energy consumption and reduced heat generation.

*   **Noise Level:** Some applications require low-noise operation, favoring vane or piston pumps.

*   **Cost:** Initial purchase cost and ongoing maintenance costs.

*   **Reliability and Durability:** The expected lifespan of the pump under operating conditions.

*   **Fluid Compatibility:** The pump materials must be compatible with the hydraulic fluid used.

*   **Availability of Drive Motor:** Matching the pump's speed and power requirements with available motor specifications.

#### 4.2 Specification of Hydraulic Pumps

When specifying a pump, the following details are typically provided:

*   **Pump Type:** (e.g., External Gear Pump, Axial Piston Pump)
*   **Displacement:** (e.g., 50 cm³/rev)
*   **Maximum Continuous Pressure Rating:** (e.g., 250 bar)
*   **Maximum Intermittent Pressure Rating:** (e.g., 300 bar)
*   **Required Speed Range:** (e.g., 1000-1800 RPM)
*   **Mounting Type:** (e.g., SAE A, SAE B flange mount)
*   **Shaft Type:** (e.g., Splined, keyed)
*   **Port Connections:** (e.g., Threaded, flange type and size)
*   **Rotation:** (Clockwise, counter-clockwise, or reversible)
*   **Control Type (for Variable Displacement):** (e.g., Pressure compensated, flow compensated, manual servo)
*   **Efficiency Requirements:** (Minimum volumetric, mechanical, or overall efficiency at a specified operating point)
*   **Noise Level:** (If specific limits apply)

---

### 5. Important Points to Remember

*   **Positive displacement pumps are the workhorses of hydraulic power generation.** They provide the consistent flow needed for actuators.
*   **Efficiency is key for energy savings and reduced heat generation.** Always consider volumetric and overall efficiency when selecting a pump.
*   **Pump performance curves are essential tools for understanding a pump's behavior.** They help predict performance under different operating conditions.
*   **Internal leakage (slip) is inherent in positive displacement pumps and causes volumetric losses.**
*   **A pressure relief valve is mandatory in systems driven by positive displacement pumps to protect against over-pressurization.**
*   **Piston pumps offer the highest performance but come with higher cost and complexity.**
*   **Gear pumps are economical and robust for less demanding applications.**
*   **Vane pumps offer a good balance of performance, cost, and noise levels.**

---

### 6. Practice Questions and Exercises

**Question 1:**
A hydraulic system requires a flow rate of 40 L/min at a pressure of 150 bar. An axial piston pump with a displacement of 30 cm³/rev is chosen. If the pump operates at 1200 RPM and has a volumetric efficiency of 95% and a mechanical efficiency of 92%, calculate:
a) The theoretical flow rate of the pump.
b) The actual flow rate.
c) The hydraulic power output.
d) The required shaft power input.
e) The overall efficiency of the pump.

**Answer 1:**
a) Theoretical flow rate ($Q_{th}$) = Displacement ($V_g$) × Speed ($N$)
   $V_g = 30 \text{ cm³/rev} = 30 \times 10^{-3} \text{ L/rev}$
   $N = 1200 \text{ rev/min}$
   $Q_{th} = 30 \times 10^{-3} \text{ L/rev} \times 1200 \text{ rev/min} = 36 \text{ L/min}$

b) Actual flow rate ($Q_{act}$) = $Q_{th} \times η_v$
   $Q_{act} = 36 \text{ L/min} \times 0.95 = 34.2 \text{ L/min}$

c) Hydraulic power output ($P_h$) = Pressure ($P$) × Actual Flow Rate ($Q_{act}$)
   Convert pressure to Pascals: $P = 150 \text{ bar} = 150 \times 10^5 \text{ Pa}$
   Convert flow rate to m³/s: $Q_{act} = 34.2 \text{ L/min} = 34.2 \times 10^{-3} \text{ m³/min} = \frac{34.2 \times 10^{-3}}{60} \text{ m³/s} \approx 5.7 \times 10^{-4} \text{ m³/s}$
   $P_h = (150 \times 10^5 \text{ Pa}) \times (5.7 \times 10^{-4} \text{ m³/s}) \approx 8550 \text{ Watts}$

d) Overall efficiency ($η_o$) = $η_v \times η_m = 0.95 \times 0.92 = 0.874$ (or 87.4%)
   Required shaft power input ($P_s$) = $P_h / η_o$
   $P_s = 8550 \text{ W} / 0.874 \approx 9783 \text{ Watts}$

e) The overall efficiency is 87.4%.

**Question 2:**
List three types of positive displacement hydraulic pumps and briefly describe one advantage and one disadvantage for each.

**Answer 2:**
1.  **Gear Pumps:**
    *   **Advantage:** Simple construction, low cost, robust.
    *   **Disadvantage:** Lower volumetric efficiency compared to other types, susceptible to wear from contaminants.
2.  **Vane Pumps:**
    *   **Advantage:** Smooth, pulsation-free flow, quieter operation.
    *   **Disadvantage:** More complex than gear pumps, vanes are subject to wear.
3.  **Piston Pumps:**
    *   **Advantage:** High volumetric and overall efficiency, capable of very high pressures.
    *   **Disadvantage:** Most complex and expensive, require precise manufacturing.

**Question 3:**
Explain the difference between fixed and variable displacement pumps and provide an example of an industrial application where each type might be preferred.

**Answer 3:**
*   **Fixed Displacement Pump:** Delivers a constant volume of fluid per revolution, regardless of the operating pressure (within limits).
    *   **Application Example:** A simple conveyor belt system where a constant speed is required. The pump's flow can be throttled if speed reduction is needed, but the pump itself always delivers the same volume per revolution.
*   **Variable Displacement Pump:** Allows the output flow rate to be adjusted, usually by changing the displacement.
    *   **Application Example:** A hydraulic excavator boom. The pump's displacement can be varied to control the speed of the cylinder based on operator input or system load, improving efficiency and control.

---

This concludes Module 1. The next module will build upon this foundation by exploring hydraulic motors and actuators.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
