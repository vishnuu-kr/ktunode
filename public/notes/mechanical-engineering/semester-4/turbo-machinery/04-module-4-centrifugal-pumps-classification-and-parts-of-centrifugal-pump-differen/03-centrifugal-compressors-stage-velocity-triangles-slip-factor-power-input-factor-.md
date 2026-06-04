---
title: "Centrifugal Compressors: Stage velocity triangles, slip factor, power input factor, Stage work, Pressure developed, stage efficiency and surging and problems."
subject: "TURBO MACHINERY"
module: "Module 4: Centrifugal Pumps: Classification and parts of centrifugal pump, different heads and efficiencies of centrifugal pump, Theoretical head – capacity relationship, Minimum speed for starting the flow, Maximum suction lift, Net positive suction head, Cavitation, Need for priming, Pumps in series and parallel."
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463019"
status: "completed"
scrapedAt: "2026-05-20T17:57:24.748Z"
---
# TURBO MACHINERY - Module 4: Centrifugal Compressors

## Introduction to Centrifugal Compressors

This module delves into the operation and characteristics of centrifugal compressors, a vital component in many industrial applications, particularly gas turbines and refrigeration systems. We will explore the fundamental principles governing their performance, focusing on the analysis of velocity triangles, efficiency, and operational limitations like surging.

**Learning Outcomes Covered:**

*   Analyze the velocity triangles for radial flow turbomachines and find the performance for parametrical changes. (CO2)
*   Use the fundamental principles of fluid mechanics and thermodynamics and find the efficiencies of power consuming turbomachines. (CO1)

**Course Outcomes Alignment:**

*   **CO1:** Understanding stage work, pressure developed, and stage efficiency directly addresses the calculation of efficiencies for power-consuming turbomachines.
*   **CO2:** The core of this module is the analysis of stage velocity triangles, which is directly aligned with analyzing velocity triangles for radial flow turbomachines.

**Key Concepts:**

Centrifugal compressors operate by imparting kinetic energy to a fluid (usually air) using a rotating impeller, which is then converted into pressure energy in a diffuser.

---

## 1. Stage Velocity Triangles

Velocity triangles are graphical representations used to analyze the flow of fluid through the rotating components of turbomachinery. For a centrifugal compressor stage, they are drawn at the impeller inlet and outlet, and also at the diffuser inlet and outlet.

**1.1. Impeller Inlet Velocity Triangle:**

At the impeller inlet, the fluid enters with an absolute velocity ($\vec{V}_1$). The impeller rotates with a tangential velocity ($\vec{U}_1$). The relative velocity of the fluid with respect to the impeller blade is $\vec{V}_{r1}$.

*   **Absolute Velocity ($\vec{V}_1$):** The velocity of the fluid as observed by a stationary observer. It has radial ($V_{f1}$) and tangential ($V_{w1}$) components.
    *   $V_{f1}$ (Meridional/Radial Velocity): Component of absolute velocity in the radial direction.
    *   $V_{w1}$ (Whirl Velocity): Component of absolute velocity in the tangential direction.
*   **Blade Velocity ($\vec{U}_1$):** The tangential velocity of the impeller blade at the inlet. It depends on the radius ($r_1$) and rotational speed ($\omega$ or $N$).
    *   $U_1 = \omega r_1 = \frac{2\pi N r_1}{60}$
*   **Relative Velocity ($\vec{V}_{r1}$):** The velocity of the fluid with respect to the moving impeller blade.
    *   $\vec{V}_{r1} = \vec{V}_1 - \vec{U}_1$
*   **Blade Angle ($\beta_1$):** The angle of the impeller blade at the inlet with respect to the tangential direction.

**Diagrammatic Representation:**

(Imagine a vector diagram with $\vec{U}_1$ pointing horizontally to the right, $\vec{V}_{f1}$ pointing vertically downwards, and $\vec{V}_{w1}$ pointing horizontally to the left. $\vec{V}_1$ is the resultant of $\vec{V}_{f1}$ and $\vec{V}_{w1}$. $\vec{V}_{r1}$ is the resultant of $\vec{V}_1$ and $-\vec{U}_1$ (i.e., $\vec{U}_1$ reversed and added to $\vec{V}_1$), or it can be seen as the vector difference $\vec{V}_1 - \vec{U}_1$.)

**Key Relationships:**

*   $V_1^2 = V_{f1}^2 + V_{w1}^2$
*   $V_{r1}^2 = V_{f1}^2 + (U_1 - V_{w1})^2$
*   $\tan(\alpha_1) = \frac{V_{f1}}{V_{w1}}$ (where $\alpha_1$ is the angle of absolute velocity with the tangential direction)
*   $\tan(\beta_1) = \frac{V_{f1}}{U_1 - V_{w1}}$ (for backward-curved blades)

**Important Note:** In centrifugal compressors, backward-curved blades are commonly used, which means $\beta_1$ is measured from the *forward* tangential direction, and the inlet whirl component ($V_{w1}$) is often negative (i.e., flow is against the direction of rotation). However, for simplification in many textbooks, the diagram is drawn such that $V_{w1}$ is shown in the direction opposite to $U$, and $\beta_1$ is the angle the relative velocity makes with the tangential direction. Let's adhere to the common convention where $V_{w1}$ is the tangential component, and its sign indicates direction.

---

**1.2. Impeller Outlet Velocity Triangle:**

At the impeller outlet (radius $r_2$), the fluid leaves the impeller with relative velocity $\vec{V}_{r2}$. The impeller has a tangential velocity $\vec{U}_2$. The absolute velocity of the fluid leaving the impeller is $\vec{V}_2$.

*   **Absolute Velocity ($\vec{V}_2$):** The velocity of the fluid leaving the impeller. It has radial ($V_{f2}$) and tangential ($V_{w2}$) components.
*   **Blade Velocity ($\vec{U}_2$):** The tangential velocity of the impeller blade at the outlet.
    *   $U_2 = \omega r_2 = \frac{2\pi N r_2}{60}$
*   **Relative Velocity ($\vec{V}_{r2}$):** The velocity of the fluid with respect to the impeller blade at the outlet.
*   **Blade Exit Angle ($\beta_2$):** The angle of the impeller blade at the outlet with respect to the tangential direction. This is a crucial design parameter.

**Diagrammatic Representation:**

(Similar vector diagram as inlet, but with $\vec{U}_2$ greater than $\vec{U}_1$, and $\vec{V}_{r2}$ reflecting the curvature of the blades.)

**Key Relationships:**

*   $\vec{V}_2 = \vec{V}_{r2} + \vec{U}_2$
*   $V_2^2 = V_{f2}^2 + V_{w2}^2$
*   $V_{r2}^2 = V_{f2}^2 + (U_2 - V_{w2})^2$ (for backward-curved blades, where $V_{w2}$ is generally positive, contributing to the pressure rise)
*   $\tan(\beta_2) = \frac{V_{f2}}{U_2 - V_{w2}}$ (for backward-curved blades)

**Example Problem (Velocity Triangles):**

Air enters the impeller of a centrifugal compressor at an inlet radius of 0.1 m and exits at an outlet radius of 0.2 m. The impeller rotates at 10000 rpm. At the inlet, the radial velocity is 50 m/s, and the absolute tangential velocity is 30 m/s (opposite to the direction of rotation). At the outlet, the radial velocity is 100 m/s, and the blade exit angle is 45 degrees (backward-curved).

Determine:
a) Inlet velocity triangle parameters ($U_1, V_{w1}, V_{r1}, \beta_1$).
b) Outlet velocity triangle parameters ($U_2, V_{w2}, V_{r2}, \beta_2$).

**Solution:**

Given:
$N = 10000$ rpm $= 10000/60$ rev/s
$r_1 = 0.1$ m, $r_2 = 0.2$ m
$V_{f1} = 50$ m/s
$V_{w1} = -30$ m/s (negative as it's opposite to rotation)
$V_{f2} = 100$ m/s
$\beta_2 = 45^\circ$

a) **Inlet:**
$U_1 = \frac{2\pi N r_1}{60} = \frac{2\pi \times 10000 \times 0.1}{60} \approx 104.72$ m/s
$V_{w1} = -30$ m/s
$V_{r1} = \sqrt{V_{f1}^2 + (U_1 - V_{w1})^2} = \sqrt{50^2 + (104.72 - (-30))^2} = \sqrt{2500 + (134.72)^2} \approx 138.82$ m/s
$\tan(\beta_1) = \frac{V_{f1}}{U_1 - V_{w1}} = \frac{50}{104.72 - (-30)} = \frac{50}{134.72} \approx 0.3711$
$\beta_1 = \arctan(0.3711) \approx 20.37^\circ$

b) **Outlet:**
$U_2 = \frac{2\pi N r_2}{60} = \frac{2\pi \times 10000 \times 0.2}{60} \approx 209.44$ m/s
$V_{f2} = 100$ m/s
$\beta_2 = 45^\circ$
From $\tan(\beta_2) = \frac{V_{f2}}{U_2 - V_{w2}}$:
$\tan(45^\circ) = 1 = \frac{100}{209.44 - V_{w2}}$
$209.44 - V_{w2} = 100$
$V_{w2} = 209.44 - 100 = 109.44$ m/s
$V_{r2} = \sqrt{V_{f2}^2 + (U_2 - V_{w2})^2} = \sqrt{100^2 + (209.44 - 109.44)^2} = \sqrt{100^2 + 100^2} = \sqrt{20000} \approx 141.42$ m/s

---

## 2. Slip Factor and Power Input Factor

These factors are introduced to account for the deviation of actual flow from ideal conditions due to blade effects.

**2.1. Slip Factor ($\sigma$):**

Slip is the phenomenon where the fluid leaving the impeller is at a lower tangential velocity than that predicted by the Euler turbomachine equation, primarily due to the finite number of blades and the flow separation. The slip factor accounts for this reduction in whirl velocity.

*   **Ideal Outlet Whirl Velocity ($V_{w2,i}$):** The theoretical tangential velocity at the outlet, assuming infinitely many blades and perfect flow attachment.
    *   From the velocity triangle, $V_{w2,i} = U_2 - \frac{V_{f2}}{\tan(\beta_2)}$ (for backward-curved blades).
*   **Actual Outlet Whirl Velocity ($V_{w2}$):** The actual tangential velocity at the outlet.
*   **Slip Factor ($\sigma$):** Defined as the ratio of the actual slip to the ideal slip, or more commonly, the ratio of actual whirl velocity to ideal whirl velocity.
    *   $\sigma = \frac{V_{w2}}{V_{w2,i}}$
    *   Therefore, $V_{w2} = \sigma \cdot V_{w2,i} = \sigma \left(U_2 - \frac{V_{f2}}{\tan(\beta_2)}\right)$

**Value of Slip Factor:**
The slip factor is always less than 1 ($\sigma < 1$). Its value depends on the number of blades, blade shape, outlet angle, and flow conditions. Typical values range from 0.7 to 0.95.

**2.2. Power Input Factor (or Coefficient of Work):**

This factor is related to the slip and accounts for the non-uniformity of velocity distribution across the impeller width and the variation in blade angles. It is essentially an efficiency factor related to the work done by the impeller.

Often, the term "power input factor" is not a standard, universally defined term in the same way as slip factor. However, it is sometimes used in relation to the theoretical work done and the actual work done, or as part of an impeller efficiency.

A more common related concept is the **Head-Flow Coefficient** or **Pressure Coefficient** which relates the head developed to the impeller tip speed.

**Dixon, S.I. (1999)** in "Fluid Mechanics and Thermodynamics of Turbomachinery" discusses the slip and its impact on the Euler turbomachine equation, implicitly affecting the power input. He highlights that the slip is dependent on the blade design.

**Yahya, S.H. (1996)** in "Turbines, Compressor and Fans" also elaborates on slip and introduces concepts like **"Blade loading coefficient"** and **"Impeller efficiency"** which are related to the power input.

**Important Point:** The term "power input factor" might be used in some contexts to represent a factor that modifies the theoretical power input to account for inefficiencies or slip. It's crucial to understand the specific definition used in the context where it's encountered. In the absence of a precise definition, it's best to focus on the slip factor and the Euler turbomachine equation.

---

## 3. Stage Work

Stage work represents the energy transferred to the fluid per unit mass by a single stage of the compressor. For an ideal centrifugal compressor stage, this is given by the Euler turbomachine equation.

**Euler Turbomachine Equation for Work per Unit Mass:**

The work done by the impeller on the fluid per unit mass ($W$) is given by the change in whirl momentum.

*   $W_{ideal} = U_2 V_{w2,i} - U_1 V_{w1}$ (for a single stage, assuming no pre-whirl, $V_{w1}=0$)
*   $W_{ideal} = U_2 V_{w2,i}$

Incorporating the slip factor:
*   $W_{ideal} = U_2 (\sigma V_{w2,i}) = U_2 \sigma \left(U_2 - \frac{V_{f2}}{\tan(\beta_2)}\right)$

This equation represents the theoretical ideal work done by the impeller on the fluid.

**Actual Work Input:**
The actual work input to the stage is higher due to various inefficiencies.

**Total Pressure Rise:**
The total pressure rise across a stage ($\Delta P_0$) is related to the stage work and the change in kinetic energy.
$\Delta P_0 = \rho W_{ideal} + \Delta (\frac{1}{2}\rho V^2)$  (This is a simplified representation; more accurately, it involves enthalpy changes in thermodynamics).

Using specific work ($w$), which is work per unit mass:
$w = \frac{P_{out} - P_{in}}{\rho} + \frac{V_{out}^2 - V_{in}^2}{2}$ (for incompressible flow, using Bernoulli's principle per unit mass).

For compressible flow, the thermodynamic work done ($w_{th}$) per unit mass is:
$w_{th} = h_{out} - h_{in}$

The **Euler Head** ($H_E$) per unit mass is:
$H_E = U_2 V_{w2} - U_1 V_{w1}$

For a centrifugal compressor with backward-curved blades and no pre-whirl ($V_{w1} = 0$):
$H_E = U_2 V_{w2} = U_2 \sigma (U_2 - \frac{V_{f2}}{\tan(\beta_2)})$

This Euler head is the theoretical head that would be generated if there were no losses. The actual head developed will be less than this.

---

## 4. Pressure Developed

The pressure developed by a centrifugal compressor stage is the difference between the outlet static pressure and the inlet static pressure, plus the pressure rise due to kinetic energy conversion.

**Static Pressure Rise:**
The static pressure rise is a direct consequence of the energy transfer by the impeller and diffusion in the casing.

**Total Pressure Rise:**
The total pressure rise across a stage is the sum of the static pressure rise and the change in dynamic pressure.

$P_{0,out} - P_{0,in} = \Delta P_{0,stage}$

In terms of head:
$H_{stage} = \frac{\Delta P_{0,stage}}{\rho g}$ (for incompressible flow)

For compressible flow, we deal with enthalpy and isentropic relations. The ideal pressure ratio across a stage is related to the ideal work done.

The pressure developed is also influenced by the **diffuser**. The diffuser's function is to convert the kinetic energy of the fluid leaving the impeller into static pressure.

**Diffusion Process:**
The fluid leaving the impeller with high velocity ($V_2$) enters the diffuser. In the diffuser, the flow area increases, and the velocity decreases, leading to a pressure rise according to Bernoulli's principle.

**Pressure Ratio:**
The overall performance of a compressor is often characterized by its pressure ratio, which is the ratio of the total pressure at the outlet to the total pressure at the inlet.

Pressure Ratio (PR) $= \frac{P_{0,out}}{P_{0,in}}$

---

## 5. Stage Efficiency

Stage efficiency measures how effectively the compressor stage converts the mechanical work input into useful pressure rise in the fluid. There are several types of efficiencies:

**5.1. Isentropic Efficiency ($\eta_{isen}$):**

This is the most common efficiency for compressors. It compares the actual work input required to achieve a certain pressure ratio to the ideal (isentropic) work input for the same pressure ratio.

*   **Actual Work Input ($W_{actual}$):** The work required to compress the fluid from inlet to outlet conditions in reality, considering all losses.
*   **Isentropic Work Input ($W_{isen}$):** The work required to compress the fluid isentropically (reversibly and adiabatically) from the same inlet conditions to the same outlet pressure.

$\eta_{isen} = \frac{W_{isen}}{W_{actual}}$

In terms of enthalpy (for compressible flow):
$\eta_{isen} = \frac{h_{0,out,isen} - h_{0,in}}{h_{0,out,actual} - h_{0,in}}$

Where:
*   $h_{0,in}$ is the total enthalpy at the inlet.
*   $h_{0,out,actual}$ is the actual total enthalpy at the outlet.
*   $h_{0,out,isen}$ is the total enthalpy at the outlet if the compression were isentropic to the actual outlet pressure.

This can also be expressed in terms of temperature:
$\eta_{isen} = \frac{T_{0,in} [(\frac{P_{0,out}}{P_{0,in}})^{\frac{\gamma-1}{\gamma}} - 1]}{T_{0,out,actual} - T_{0,in}}$

Where:
*   $T_{0,in}$ is the total temperature at the inlet.
*   $T_{0,out,actual}$ is the actual total temperature at the outlet.
*   $\gamma$ is the ratio of specific heats.

**5.2. Polytropic Efficiency ($\eta_{poly}$):**

This efficiency is defined for infinitesimal stages and accounts for varying conditions along the compression process.

$\eta_{poly} = \frac{\int_{in}^{out} v \, dp_{isen}}{\int_{in}^{out} v \, dp_{actual}} = \frac{h_{0,out,poly} - h_{0,in}}{h_{0,out,actual} - h_{0,in}}$

In terms of temperature and pressure:
$\eta_{poly} = \frac{\ln(\frac{P_{0,out}}{P_{0,in}})}{\frac{1}{\eta_{poly}} \ln(\frac{P_{0,out}}{P_{0,in}})} = \frac{(\gamma-1)/\gamma \ln(P_{0,out}/P_{0,in})}{\ln(T_{0,out}/T_{0,in})}$

For a finite stage, the polytropic efficiency is related to the isentropic efficiency.

**5.3. Mechanical Efficiency ($\eta_{mech}$):**

This accounts for mechanical losses such as bearing friction and windage.

$\eta_{mech} = \frac{\text{Shaft Power Input to Impeller}}{\text{Shaft Power Supplied}}$

**5.4. Overall Efficiency ($\eta_{overall}$):**

$\eta_{overall} = \eta_{isen} \cdot \eta_{mech}$ (or other relevant efficiencies combined).

**Reference:**
*   **Dixon (1999)** discusses various efficiencies and their definitions in detail, particularly focusing on adiabatic and isentropic efficiencies.
*   **Venkanna (2009)** provides clear explanations and formulas for compressor efficiencies.
*   **Yahya (1996)** also covers these efficiencies and their implications for compressor performance.

**Example Problem (Efficiency):**

A single stage of a centrifugal compressor handles air. At the inlet, the total conditions are $P_{0,in} = 100$ kPa and $T_{0,in} = 290$ K. At the outlet, the actual total conditions are $P_{0,out} = 150$ kPa and $T_{0,out,actual} = 330$ K. Assume $\gamma = 1.4$.

Calculate the isentropic efficiency of the stage.

**Solution:**

Given:
$P_{0,in} = 100$ kPa
$T_{0,in} = 290$ K
$P_{0,out} = 150$ kPa
$T_{0,out,actual} = 330$ K
$\gamma = 1.4$

First, calculate the isentropic outlet temperature ($T_{0,out,isen}$) for the given pressure ratio:
$\frac{T_{0,out,isen}}{T_{0,in}} = (\frac{P_{0,out}}{P_{0,in}})^{\frac{\gamma-1}{\gamma}}$
$\frac{T_{0,out,isen}}{290} = (\frac{150}{100})^{\frac{1.4-1}{1.4}} = (1.5)^{\frac{0.4}{1.4}} = (1.5)^{0.2857} \approx 1.1209$
$T_{0,out,isen} = 290 \times 1.1209 \approx 324.06$ K

Now, calculate the isentropic efficiency:
$\eta_{isen} = \frac{T_{0,out,isen} - T_{0,in}}{T_{0,out,actual} - T_{0,in}}$
$\eta_{isen} = \frac{324.06 - 290}{330 - 290} = \frac{34.06}{40} \approx 0.8515$

The isentropic efficiency of the stage is approximately 85.15%.

---

## 6. Surging in Centrifugal Compressors

Surging is an undesirable flow phenomenon that occurs in centrifugal compressors, characterized by large-scale, unstable, and violent fluctuations in flow rate and pressure. It happens when the compressor is operated too far from its design point, typically at low flow rates.

**Causes of Surging:**

*   **Flow Separation:** At low flow rates, the incidence angle of the flow on the impeller blades changes, leading to flow separation on the suction side of the blades.
*   **Low Flow Rate:** The compressor cannot effectively handle very low flow rates, and the pressure developed by the impeller can no longer overcome the system resistance.
*   **Backflow:** When the impeller can no longer impart sufficient energy to the fluid, the pressure in the diffuser/volute can become higher than the pressure at the impeller exit, causing the flow to reverse and go backward through the impeller.
*   **Re-acceleration:** This backflow then gets re-accelerated by the impeller, leading to a cycle of flow reversal and forward acceleration.

**Characteristics of Surging:**

*   **Unstable Flow:** Large oscillations in flow rate and pressure.
*   **Noise:** Loud noises are often associated with surging.
*   **Vibration:** Mechanical vibrations can occur.
*   **Damage:** Prolonged surging can cause significant damage to the compressor and the system.

**Surge Line:**
The surge line on the compressor performance map (Pressure Ratio vs. Flow Rate) represents the minimum flow rate at which the compressor can operate stably. Operating to the left of the surge line (i.e., at lower flow rates) leads to surging.

**Methods to Avoid or Mitigate Surging:**

*   **Operating Range:** Ensure the compressor operates within its stable operating range, away from the surge line.
*   **Recirculation/Bleed Systems:** For systems where operation at very low flow rates is unavoidable, recirculation or bleed systems can be used. These systems divert a portion of the compressed air back to the inlet or to another point in the system, effectively increasing the flow through the compressor and preventing it from reaching the surge point.
*   **Variable Inlet Guide Vanes (VIGVs) or Variable Diffuser Vanes:** These can adjust the flow characteristics and help maintain stable operation over a wider range.
*   **Impeller Design:** Advanced impeller designs can improve stability at low flow rates.

**Reference:**
*   **Dixon (1999)** and **Yahya (1996)** provide detailed explanations of surge phenomena, including the underlying mechanisms and methods for avoidance.

---

## 7. Problems Associated with Centrifugal Compressors

Besides surging, several other issues can affect the performance and longevity of centrifugal compressors:

**7.1. Choking:**

*   **Definition:** Choking occurs when the flow through the compressor reaches the speed of sound at some point, typically at the impeller throat.
*   **Effect:** The flow rate cannot be increased further, even by reducing the downstream pressure. The compressor operates at its maximum flow capacity.
*   **Cause:** Primarily due to the design of the impeller passage and diffuser throat.

**7.2. Stall:**

*   **Definition:** Stall is a local flow separation on the blade surface, usually on the suction side, occurring at off-design conditions (typically at higher flow rates than surge, but still off-design).
*   **Effect:** Can lead to reduced efficiency and potentially contribute to surging if it spreads and becomes a complete blockage.
*   **Cause:** Adverse pressure gradients and high incidence angles.

**7.3. Wear and Tear:**

*   **Erosion:** Particles in the fluid can erode the impeller blades and diffuser surfaces, altering their geometry and reducing efficiency.
*   **Corrosion:** Chemical attack on the compressor components.
*   **Blade Fatigue:** Stress cycles can lead to material fatigue and potential failure of the blades.

**7.4. Overheating:**

*   **Cause:** Inefficient compression processes and friction can lead to excessive temperature rise in the fluid.
*   **Effect:** Can reduce air density, affecting performance, and potentially damage seals or other components.

**7.5. Oil Contamination:**

*   **Cause:** Leakage of lubricating oil from bearings into the compressed air stream.
*   **Effect:** Can contaminate the downstream process and affect the performance of sensitive equipment.

---

## Practice Questions

**Question 1:**
Air enters the impeller of a centrifugal compressor at 50 m/s radially. The impeller tip speed at the inlet is 120 m/s, and the inlet blade angle is 25 degrees (backward-curved). Calculate the inlet relative velocity and the inlet flow angle with respect to the tangential direction.
($\gamma=1.4$)

**Answer 1:**
Given: $V_{f1} = 50$ m/s, $U_1 = 120$ m/s, $\beta_1 = 25^\circ$.
Assuming no pre-whirl, $V_{w1} = 0$.
The relative velocity at the inlet, $V_{r1}$, is given by:
$V_{r1} = \sqrt{V_{f1}^2 + (U_1 - V_{w1})^2}$
$V_{r1} = \sqrt{50^2 + (120 - 0)^2} = \sqrt{2500 + 14400} = \sqrt{16900} = 130$ m/s.

The inlet flow angle with respect to the tangential direction, $\beta_1$, is given by:
$\tan(\beta_1) = \frac{V_{f1}}{U_1 - V_{w1}} = \frac{50}{120 - 0} = \frac{50}{120} \approx 0.4167$
$\beta_1 = \arctan(0.4167) \approx 22.62^\circ$.
*(Note: The question states $\beta_1=25$ degrees which is the blade angle, not the flow angle. The flow angle is calculated as above. If the question asks for the flow angle, it's 22.62 degrees. If it implies the flow is aligned with the blade, then there is a contradiction or the question meant to imply the blade angle)*.

Let's rephrase to be clearer: "The blade inlet angle is 25 degrees".
The inlet flow angle $\beta_{flow,1}$ with respect to the tangential direction is calculated as above:
$\tan(\beta_{flow,1}) = \frac{V_{f1}}{U_1} = \frac{50}{120} \approx 0.4167$
$\beta_{flow,1} \approx 22.62^\circ$.

**Question 2:**
A centrifugal compressor stage develops an ideal head of 50 m. The impeller tip speed at the outlet is 200 m/s, and the outlet radial velocity is 80 m/s. The slip factor is 0.85, and the blade outlet angle is 40 degrees (backward-curved). Calculate the outlet whirl velocity ($V_{w2}$) and the slip factor based on these values.

**Answer 2:**
Given: Ideal Head $H_{E,ideal} = 50$ m, $U_2 = 200$ m/s, $V_{f2} = 80$ m/s, $\sigma = 0.85$, $\beta_2 = 40^\circ$.

First, let's calculate the ideal outlet whirl velocity using the ideal head and impeller tip speed:
$H_{E,ideal} = U_2 V_{w2,i}$
$50 = 200 \times V_{w2,i}$
$V_{w2,i} = \frac{50}{200} = 0.25$ m/s.

Now, let's calculate the actual outlet whirl velocity using the slip factor:
$V_{w2} = \sigma \times V_{w2,i} = 0.85 \times 0.25 = 0.2125$ m/s.

Let's verify the slip factor using the velocity triangle relationships:
From the velocity triangle at the outlet:
$\tan(\beta_2) = \frac{V_{f2}}{U_2 - V_{w2}}$
$\tan(40^\circ) = 0.8391$
$0.8391 = \frac{80}{200 - V_{w2}}$
$200 - V_{w2} = \frac{80}{0.8391} \approx 95.34$
$V_{w2} = 200 - 95.34 = 104.66$ m/s.

Now, calculate the ideal whirl velocity from this actual whirl velocity and the slip factor:
$V_{w2,i} = \frac{V_{w2}}{\sigma} = \frac{104.66}{0.85} \approx 123.13$ m/s.

There seems to be a mismatch in the given values. The question might be designed to test understanding of how these parameters relate. Let's re-evaluate based on calculating the slip factor from the given outlet conditions.

**Recalculation for Slip Factor:**
Given: $U_2 = 200$ m/s, $V_{f2} = 80$ m/s, $\beta_2 = 40^\circ$.
Calculate the actual whirl velocity $V_{w2}$ first from the velocity triangle:
$\tan(\beta_2) = \frac{V_{f2}}{U_2 - V_{w2}}$
$\tan(40^\circ) = 0.8391$
$0.8391 = \frac{80}{200 - V_{w2}}$
$200 - V_{w2} = \frac{80}{0.8391} \approx 95.34$
$V_{w2} = 200 - 95.34 = 104.66$ m/s.

Now, calculate the ideal whirl velocity ($V_{w2,i}$):
The Euler head is $H_E = U_2 V_{w2} - U_1 V_{w1}$. Assuming no pre-whirl, $H_E = U_2 V_{w2}$.
This $H_E$ is the actual work done per unit mass.
The ideal work done per unit mass is $W_{ideal} = U_2 V_{w2,i}$.
The ideal head developed by the stage is related to this.

Let's assume the question meant that the *actual* stage head developed is 50 m, and we need to find the slip factor.
If the stage head developed is 50m, and assuming this head is due to the Euler equation with slip:
$H_{stage} = U_2 V_{w2} = 200 \times 104.66 = 20932$ m-kg/kg. This is too high.

Let's interpret "ideal head" as the Euler head $H_E$.
$H_E = U_2 V_{w2} = 200 \times 104.66 = 20932$. Still very high.

There seems to be an issue with the numbers provided in the question if interpreted as typical compressor values.

**Let's assume the question meant:**
A centrifugal compressor impeller has $U_2 = 200$ m/s, $V_{f2} = 80$ m/s, and $\beta_2 = 40^\circ$.
Calculate:
a) The actual whirl velocity ($V_{w2}$) at the outlet.
b) The slip factor ($\sigma$) if the ideal whirl velocity ($V_{w2,i}$) is 150 m/s.

**Answer 2 (Revised Interpretation):**
a) Calculate $V_{w2}$:
$\tan(\beta_2) = \frac{V_{f2}}{U_2 - V_{w2}}$
$\tan(40^\circ) = 0.8391$
$0.8391 = \frac{80}{200 - V_{w2}}$
$200 - V_{w2} = \frac{80}{0.8391} \approx 95.34$
$V_{w2} = 200 - 95.34 = 104.66$ m/s.

b) Calculate the slip factor:
$\sigma = \frac{V_{w2}}{V_{w2,i}} = \frac{104.66}{150} \approx 0.6977$.
This slip factor is a bit low for typical backward-curved blades, but the calculation is correct.

**Question 3:**
A centrifugal compressor stage operates with inlet conditions $P_{0,in} = 1$ atm, $T_{0,in} = 288$ K and outlet conditions $P_{0,out} = 2$ atm, $T_{0,out,actual} = 340$ K. Calculate the isentropic efficiency of the stage. Assume air with $\gamma = 1.4$.

**Answer 3:**
Given: $P_{0,in} = 1$ atm, $T_{0,in} = 288$ K, $P_{0,out} = 2$ atm, $T_{0,out,actual} = 340$ K, $\gamma = 1.4$.

Calculate the isentropic outlet temperature ($T_{0,out,isen}$):
$\frac{T_{0,out,isen}}{T_{0,in}} = (\frac{P_{0,out}}{P_{0,in}})^{\frac{\gamma-1}{\gamma}}$
$\frac{T_{0,out,isen}}{288} = (\frac{2}{1})^{\frac{1.4-1}{1.4}} = (2)^{\frac{0.4}{1.4}} = (2)^{0.2857} \approx 1.2190$
$T_{0,out,isen} = 288 \times 1.2190 \approx 351.07$ K.

Now, calculate the isentropic efficiency:
$\eta_{isen} = \frac{T_{0,out,isen} - T_{0,in}}{T_{0,out,actual} - T_{0,in}}$
$\eta_{isen} = \frac{351.07 - 288}{340 - 288} = \frac{63.07}{52} \approx 1.2128$.

**Wait!** An efficiency greater than 1 is not possible. This indicates an error in the question's provided values. The actual outlet temperature should be higher than the isentropic outlet temperature for a real compressor.

Let's assume the actual outlet temperature is $T_{0,out,actual} = 370$ K.
Then, $\eta_{isen} = \frac{351.07 - 288}{370 - 288} = \frac{63.07}{82} \approx 0.7691$ or 76.91%.

This corrected value makes sense for a compressor efficiency.

---

## Important Points to Remember

*   **Velocity Triangles:** Crucial for understanding energy transfer and flow behavior. Pay attention to the signs of whirl components and the angles.
*   **Slip Factor ($\sigma$):** Accounts for the reduction in actual whirl velocity compared to the ideal due to finite blades. $\sigma < 1$.
*   **Euler Turbomachine Equation:** $W = U_2 V_{w2} - U_1 V_{w1}$ (work per unit mass). This is the basis for theoretical head and power.
*   **Stage Work:** Represents the energy transferred to the fluid per unit mass.
*   **Stage Efficiency (Isentropic):** $\eta_{isen} = \frac{\text{Isentropic Work}}{\text{Actual Work}} = \frac{h_{0,out,isen} - h_{0,in}}{h_{0,out,actual} - h_{0,in}}$.
*   **Surging:** A dangerous operating condition at low flow rates characterized by flow instability. Avoid by operating within the stable range or using control systems.
*   **Stall:** Local flow separation at off-design points, which can lead to instability.
*   **Design vs. Off-Design:** Compressor performance is highly dependent on operating at or near its design point.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


## References

*   **Dixon, S.I. (1999).** *Fluid Mechanics and Thermodynamics of Turbomachinery*. Pergamom Press.
*   **Venkanna, B.K. (2009).** *Fundamentals of Turbo Machinery*. PHI Learning Pvt. Ltd.
*   **Yahya, S.H. (1996).** *Turbines, Compressor and Fans*. Tata Mc Graw Hill.
*   **Gambini, M., & Vellini, M. (2021).** *Turbomachinery – Fundamentals, Selection and Preliminary Design*. Springer.
*   **Dick, E. (2022).** *Fundamentals of Turbomachines*. Springer.

This concludes the study notes for Centrifugal Compressors within Module 4. Remember to practice drawing velocity triangles and applying the equations to solve problems.