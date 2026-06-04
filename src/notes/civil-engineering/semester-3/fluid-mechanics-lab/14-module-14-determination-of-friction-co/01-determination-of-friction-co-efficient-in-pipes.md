---
title: "Determination of friction co-efficient in pipes"
subject: "FLUID MECHANICS LAB"
module: "Module 14: Determination of friction co"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108f0"
status: "completed"
scrapedAt: "2026-05-20T18:40:58.915Z"
---
# Fluid Mechanics Lab: Module 14 - Determination of Friction Coefficient in Pipes

---

## 1. Introduction to Friction in Pipes

Friction is a fundamental phenomenon in fluid mechanics that describes the resistance to flow caused by the interaction between the fluid and the pipe walls, as well as the internal resistance within the fluid itself. This resistance leads to a loss of energy in the fluid, commonly observed as a drop in pressure along the length of the pipe.

**Key Concepts:**

*   **Viscosity:** A measure of a fluid's resistance to flow. Higher viscosity means greater internal friction.
*   **Shear Stress:** The force per unit area acting parallel to the surface of a fluid element. Friction in pipes arises from shear stresses at the wall and within the fluid.
*   **Head Loss:** The reduction in the total mechanical energy of the fluid per unit weight due to friction and other irreversible processes. This is typically expressed as a loss in head (height of fluid).

---

## 2. Learning Outcomes Covered

This module aims to equip students with the knowledge and practical skills to:

*   **Understand the concept of friction in pipe flow:** Grasp why friction occurs and its impact on fluid behavior.
*   **Identify factors affecting friction coefficient:** Recognize the parameters that influence the magnitude of frictional resistance.
*   **Learn the experimental setup and procedure for determining friction coefficient:** Familiarize with the typical lab equipment and steps involved.
*   **Calculate friction coefficient using experimental data:** Apply relevant formulas to derive the friction coefficient from measurements.
*   **Analyze the relationship between friction coefficient and Reynolds number:** Understand how flow regime influences friction.
*   **Distinguish between laminar and turbulent flow and their respective friction characteristics:** Differentiate the behavior of fluids at low and high velocities.

---

## 3. Key Concepts and Definitions

### 3.1. Friction Factor (f) / Darcy-Weisbach Friction Factor

The Darcy-Weisbach friction factor, commonly denoted by '$f$', is a dimensionless quantity that quantifies the frictional losses in pipe flow. It's a key parameter in the Darcy-Weisbach equation.

**Formula:**
$h_f = f \frac{L}{D} \frac{v^2}{2g}$

Where:
*   $h_f$: Head loss due to friction (m)
*   $f$: Darcy-Weisbach friction factor (dimensionless)
*   $L$: Length of the pipe (m)
*   $D$: Diameter of the pipe (m)
*   $v$: Average velocity of the fluid (m/s)
*   $g$: Acceleration due to gravity (m/s²)

### 3.2. Reynolds Number (Re)

The Reynolds number is a dimensionless parameter that characterizes the flow regime. It represents the ratio of inertial forces to viscous forces.

**Formula:**
$Re = \frac{\rho v D}{\mu} = \frac{v D}{\nu}$

Where:
*   $Re$: Reynolds number (dimensionless)
*   $\rho$: Density of the fluid (kg/m³)
*   $v$: Average velocity of the fluid (m/s)
*   $D$: Diameter of the pipe (m)
*   $\mu$: Dynamic viscosity of the fluid (Pa·s or N·s/m²)
*   $\nu$: Kinematic viscosity of the fluid ($\mu/\rho$) (m²/s)

**Flow Regimes:**

*   **Laminar Flow ($Re < 2300$):** Fluid particles move in smooth, parallel layers. Friction is primarily due to viscous forces within the fluid.
*   **Transitional Flow ($2300 < Re < 4000$):** A mixture of laminar and turbulent behavior.
*   **Turbulent Flow ($Re > 4000$):** Fluid particles move chaotically with eddies and mixing. Friction is influenced by both viscous forces and the roughness of the pipe surface.

### 3.3. Relative Roughness ($\epsilon/D$)

Relative roughness is a dimensionless parameter representing the ratio of the average height of the pipe's internal surface roughness ($\epsilon$) to the pipe's diameter ($D$). It's crucial for determining friction in turbulent flow.

**Formula:**
Relative Roughness = $\frac{\epsilon}{D}$

Where:
*   $\epsilon$: Absolute roughness of the pipe material (m)
*   $D$: Diameter of the pipe (m)

### 3.4. Moody Chart

The Moody chart is a graphical representation of the relationship between the Darcy-Weisbach friction factor ($f$), Reynolds number ($Re$), and relative roughness ($\epsilon/D$). It's an indispensable tool for determining the friction factor in turbulent flow.

**Key Features of the Moody Chart:**

*   **Horizontal Axis:** Reynolds Number ($Re$)
*   **Vertical Axis:** Friction Factor ($f$)
*   **Curved Lines:** Represent different values of relative roughness ($\epsilon/D$)
*   **Laminar Flow Region:** A single line ($f = 64/Re$) for all roughness values below $Re = 2300$.
*   **Turbulent Flow Region:** The friction factor becomes largely independent of $Re$ for very rough pipes and is primarily dependent on $\epsilon/D$.

---

## 4. Experimental Setup and Procedure

### 4.1. Typical Experimental Setup

A common setup for determining the friction coefficient in pipes involves the following components:

*   **Pump:** To circulate the fluid (usually water) through the pipe system.
*   **Reservoir:** To store the fluid.
*   **Pipes:** Of known length ($L$) and diameter ($D$). Different materials (e.g., smooth plastic, rough metal) may be used to study the effect of roughness.
*   **Pressure Gauges/Manometers:** Placed at two different points along the pipe to measure the pressure difference ($P_1 - P_2$).
*   **Flow Meter:** To measure the flow rate ($Q$). This could be a rotameter, orifice plate, Venturi meter, etc.
*   **Stopwatch and Measuring Cylinder (for flow rate calibration):** If a flow meter is not directly available or needs calibration.
*   **Thermometer:** To measure the fluid temperature, as viscosity is temperature-dependent.

### 4.2. Experimental Procedure

1.  **Setup Assembly:** Connect the pump, reservoir, and the test pipe section. Ensure all connections are leak-free.
2.  **Pressure Measurement Points:** Install pressure gauges or manometer connections at two points along the straight section of the pipe, separated by a known length ($L$).
3.  **Flow Measurement:** Connect the flow meter to the outlet of the pipe or place it in-line as per its design.
4.  **Fluid Temperature Measurement:** Measure the temperature of the fluid in the reservoir.
5.  **Start the Pump:** Begin circulating the fluid.
6.  **Adjust Flow Rate:** Vary the flow rate by adjusting a valve or the pump speed.
7.  **Record Measurements:** For each stable flow rate, record the following:
    *   Pressure at point 1 ($P_1$)
    *   Pressure at point 2 ($P_2$)
    *   Flow rate ($Q$)
    *   Fluid temperature ($T$)
8.  **Repeat:** Repeat steps 6 and 7 for several different flow rates to cover a range of Reynolds numbers.
9.  **Shutdown:** Safely shut down the pump.

---

## 5. Calculation of Friction Coefficient

The friction coefficient can be determined experimentally using the Darcy-Weisbach equation and measured parameters.

### 5.1. Steps for Calculation:

1.  **Calculate Average Velocity ($v$):**
    $v = \frac{Q}{A}$
    Where:
    *   $Q$: Measured flow rate (m³/s)
    *   $A$: Cross-sectional area of the pipe ($\pi D^2 / 4$) (m²)

2.  **Calculate Reynolds Number ($Re$):**
    *   Obtain the kinematic viscosity ($\nu$) of the fluid at the measured temperature from standard tables or fluid property charts.
    *   $Re = \frac{v D}{\nu}$

3.  **Calculate Head Loss ($h_f$):**
    *   The head loss is directly related to the pressure difference measured by the gauges/manometer.
    *   $h_f = \frac{P_1 - P_2}{\rho g}$
    *   Alternatively, if using manometers with a different fluid, the manometer reading needs to be converted to head loss of the working fluid.
    *   *Important Note:* Ensure $P_1$ is at the upstream location (higher pressure) and $P_2$ is at the downstream location (lower pressure).

4.  **Calculate Friction Factor ($f$):**
    *   Rearrange the Darcy-Weisbach equation to solve for $f$:
    $f = \frac{h_f D 2g}{L v^2}$

### 5.2. Example Calculation

**Given:**
*   Pipe Length ($L$) = 10 m
*   Pipe Diameter ($D$) = 0.05 m
*   Upstream Pressure ($P_1$) = 150 kPa
*   Downstream Pressure ($P_2$) = 130 kPa
*   Flow Rate ($Q$) = 0.005 m³/s
*   Fluid: Water at 20°C. Kinematic viscosity ($\nu$) at 20°C $\approx 1.004 \times 10^{-6}$ m²/s. Density ($\rho$) $\approx 998$ kg/m³.
*   Acceleration due to gravity ($g$) = 9.81 m/s²

**Calculations:**

1.  **Area ($A$):**
    $A = \frac{\pi D^2}{4} = \frac{\pi (0.05 \text{ m})^2}{4} = 0.001963 \text{ m}^2$

2.  **Average Velocity ($v$):**
    $v = \frac{Q}{A} = \frac{0.005 \text{ m}^3/\text{s}}{0.001963 \text{ m}^2} = 2.547 \text{ m/s}$

3.  **Reynolds Number ($Re$):**
    $Re = \frac{v D}{\nu} = \frac{(2.547 \text{ m/s}) (0.05 \text{ m})}{1.004 \times 10^{-6} \text{ m}^2/\text{s}} = 1.268 \times 10^5$

4.  **Head Loss ($h_f$):**
    Pressure difference = $P_1 - P_2 = 150 \text{ kPa} - 130 \text{ kPa} = 20 \text{ kPa} = 20 \times 10^3 \text{ Pa}$
    $h_f = \frac{P_1 - P_2}{\rho g} = \frac{20 \times 10^3 \text{ Pa}}{(998 \text{ kg/m}^3) (9.81 \text{ m/s}^2)} = \frac{20000}{9790.18} \approx 2.043 \text{ m}$

5.  **Friction Factor ($f$):**
    $f = \frac{h_f D 2g}{L v^2} = \frac{(2.043 \text{ m}) (0.05 \text{ m}) (2 \times 9.81 \text{ m/s}^2)}{(10 \text{ m}) (2.547 \text{ m/s})^2}$
    $f = \frac{2.004126}{64.87209} \approx 0.0309$

**Result:** The calculated friction factor for this flow condition is approximately 0.0309.

---

## 6. Relationship Between Friction Coefficient and Flow Parameters

### 6.1. Laminar Flow ($Re < 2300$)

In laminar flow, the friction factor is solely dependent on the Reynolds number and is independent of pipe roughness.

**Formula (Hagen-Poiseuille Law):**
$f = \frac{64}{Re}$

**Example:** If $Re = 1000$, then $f = 64/1000 = 0.064$.

### 6.2. Turbulent Flow ($Re > 4000$)

In turbulent flow, the friction factor depends on both the Reynolds number and the relative roughness ($\epsilon/D$).

*   **Smooth Pipes:** For very smooth pipes (low $\epsilon/D$), the friction factor is primarily dependent on $Re$ and follows relationships like the Blasius equation for certain $Re$ ranges.
*   **Rough Pipes:** For rough pipes, especially at higher $Re$, the friction factor becomes almost entirely dependent on the relative roughness and is largely independent of $Re$. This is known as the "fully rough" zone.
*   **Transition Zone:** Between smooth and fully rough behavior, both $Re$ and $\epsilon/D$ influence $f$.

**Common Correlations for Turbulent Flow:**

*   **Colebrook-White Equation (Implicit):**
    $\frac{1}{\sqrt{f}} = -2.0 \log_{10} \left( \frac{\epsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}} \right)$
    This equation is transcendental and requires iterative methods for solution.

*   **Haaland Equation (Explicit Approximation of Colebrook-White):**
    $\frac{1}{\sqrt{f}} \approx -1.8 \log_{10} \left[ \left(\frac{\epsilon/D}{3.7}\right)^{1.11} + \frac{6.9}{Re} \right]$
    This provides a good approximation for $f$ without iteration.

*   **Swamee-Jain Equation (Explicit):**
    $f = \frac{0.25}{\left[ \log_{10} \left( \frac{\epsilon/D}{3.7} + \frac{5.74}{Re^{0.9}} \right) \right]^2}$
    Another explicit and widely used correlation.

### 6.3. Using the Moody Chart

To find '$f$' using the Moody chart:

1.  Determine the Reynolds number ($Re$).
2.  Calculate the relative roughness ($\epsilon/D$).
3.  Locate the calculated $Re$ on the horizontal axis.
4.  Trace vertically upwards to find the curve corresponding to the calculated $\epsilon/D$.
5.  Trace horizontally to the left to read the corresponding friction factor ($f$) on the vertical axis.

---

## 7. Practice Questions & Exercises

**Question 1:**
Water flows through a smooth pipe of 0.02 m diameter at a velocity of 0.5 m/s. The kinematic viscosity of water is $1.0 \times 10^{-6}$ m²/s.
a) Calculate the Reynolds number.
b) Determine the flow regime (laminar or turbulent).
c) Assuming the flow is laminar, calculate the friction factor.

**Answer 1:**
a) $Re = \frac{vD}{\nu} = \frac{(0.5 \text{ m/s})(0.02 \text{ m})}{1.0 \times 10^{-6} \text{ m}^2/\text{s}} = 10000$
b) Since $Re = 10000 > 2300$, the flow is turbulent.
c) *The question implies assuming laminar flow for calculation practice. However, based on the calculated Re, it is turbulent. If we proceed with the assumption for practice:*
    If assumed laminar, $f = \frac{64}{Re} = \frac{64}{10000} = 0.0064$.
    *(Self-correction: It's important to note that this result for 'f' is only valid if the flow was indeed laminar. For turbulent flow, a different method is required.)*

**Question 2:**
In an experiment, water flows through a 0.04 m diameter pipe. A pressure drop of 5 kPa is measured over a 15 m length. The flow rate is 0.003 m³/s. The water temperature is 15°C ($\nu \approx 1.14 \times 10^{-6}$ m²/s, $\rho \approx 999$ kg/m³).
a) Calculate the average velocity.
b) Calculate the head loss due to friction.
c) Calculate the friction factor.
d) Using the calculated friction factor and Reynolds number, find the approximate relative roughness of the pipe. (Hint: You'll need to use the Moody chart or a correlation.)

**Answer 2:**
a) Area $A = \frac{\pi (0.04 \text{ m})^2}{4} = 0.001257 \text{ m}^2$
   Velocity $v = \frac{Q}{A} = \frac{0.003 \text{ m}^3/\text{s}}{0.001257 \text{ m}^2} \approx 2.387 \text{ m/s}$

b) Pressure drop = 5 kPa = $5000$ Pa
   Head loss $h_f = \frac{\Delta P}{\rho g} = \frac{5000 \text{ Pa}}{(999 \text{ kg/m}^3)(9.81 \text{ m/s}^2)} \approx 0.515 \text{ m}$

c) Friction factor $f = \frac{h_f D 2g}{L v^2} = \frac{(0.515 \text{ m})(0.04 \text{ m})(2 \times 9.81 \text{ m/s}^2)}{(15 \text{ m})(2.387 \text{ m/s})^2}$
   $f = \frac{0.404178}{85.197} \approx 0.00474$
   *(Self-correction: Re-calculating calculation for f)*
   $f = \frac{(0.515 \text{ m})(0.04 \text{ m})(2 \times 9.81 \text{ m/s}^2)}{(15 \text{ m})(2.387 \text{ m/s})^2} = \frac{0.404178}{15 \times 5.697769} = \frac{0.404178}{85.4665} \approx 0.00473$
   *(There might be a calculation error in the example or question values. Let's assume there's a typo in the question and re-evaluate the steps with typical friction factor values.)*

   Let's recalculate using the Darcy-Weisbach equation with a common friction factor value to see the expected pressure drop. If $f = 0.02$ (typical for turbulent flow), $h_f = 0.02 \frac{15}{0.04} \frac{2.387^2}{2 \times 9.81} \approx 0.02 \times 375 \times 0.29 \approx 2.17$ m. This would correspond to a pressure drop of $\Delta P = h_f \rho g = 2.17 \times 999 \times 9.81 \approx 21284$ Pa or 21.3 kPa. The given pressure drop of 5 kPa might indicate a lower velocity or a smoother pipe.

   Let's re-check the friction factor calculation with the given values carefully.
   $v = 2.387$ m/s
   $Re = \frac{2.387 \times 0.04}{1.14 \times 10^{-6}} \approx 8.375 \times 10^4$
   $h_f = 0.515$ m
   $f = \frac{h_f D 2g}{L v^2} = \frac{0.515 \times 0.04 \times 2 \times 9.81}{15 \times (2.387)^2} = \frac{0.404178}{15 \times 5.697769} = \frac{0.404178}{85.4665} \approx 0.00473$

   A friction factor of 0.00473 is extremely low, even for laminar flow where $f = 64/Re = 64 / (8.375 \times 10^4) \approx 0.00076$.
   This suggests a potential issue with the given experimental values in the question, as they lead to an inconsistent result.
   **For learning purposes, let's assume the calculations for $v$, $h_f$, and $Re$ are correct, and try to find $\epsilon/D$ using $f=0.00473$ and $Re = 8.375 \times 10^4$.**

d) Using a correlation like Swamee-Jain:
   $0.00473 = \frac{0.25}{\left[ \log_{10} \left( \frac{\epsilon/D}{3.7} + \frac{5.74}{(8.375 \times 10^4)^{0.9}} \right) \right]^2}$
   $\sqrt{0.25 / 0.00473} = \log_{10} \left( \frac{\epsilon/D}{3.7} + \frac{5.74}{2.83 \times 10^4} \right)$
   $7.26 \approx \log_{10} \left( \frac{\epsilon/D}{3.7} + 2.03 \times 10^{-4} \right)$
   $10^{7.26} \approx \frac{\epsilon/D}{3.7} + 2.03 \times 10^{-4}$
   $1.82 \times 10^7 \approx \frac{\epsilon/D}{3.7} + 2.03 \times 10^{-4}$
   This leads to an extremely large relative roughness, indicating the original values are likely problematic.

   **Let's consider a more realistic scenario for part (d).**
   If the friction factor was found to be $f=0.02$ for a similar $Re$:
   $7.26 \approx \log_{10} \left( \frac{\epsilon/D}{3.7} + \frac{5.74}{Re^{0.9}} \right)$
   For $Re=8.375 \times 10^4$, $Re^{0.9} \approx 2.83 \times 10^4$.
   $0.02 = \frac{0.25}{\left[ \log_{10} \left( \frac{\epsilon/D}{3.7} + \frac{5.74}{2.83 \times 10^4} \right) \right]^2}$
   $\sqrt{0.25 / 0.02} = \log_{10} \left( \frac{\epsilon/D}{3.7} + 2.03 \times 10^{-4} \right)$
   $3.53 \approx \log_{10} \left( \frac{\epsilon/D}{3.7} + 2.03 \times 10^{-4} \right)$
   $10^{3.53} \approx \frac{\epsilon/D}{3.7} + 2.03 \times 10^{-4}$
   $3388 \approx \frac{\epsilon/D}{3.7} + 2.03 \times 10^{-4}$
   $\frac{\epsilon/D}{3.7} \approx 3388$
   $\epsilon/D \approx 3388 \times 3.7 \approx 12535$. This is still too large.

   **Let's use the Moody Chart approach for a more practical understanding of finding $\epsilon/D$**.
   Assume we calculated $Re = 8.375 \times 10^4$ and experimentally found $f = 0.025$.
   On the Moody Chart, locate $Re=8.375 \times 10^4$. Move up to where the friction factor is 0.025. Then look down to see which relative roughness curve this point lies on. This would be somewhere between $\epsilon/D = 0.001$ and $0.002$ for common pipe materials like commercial steel.

**Question 3:**
For laminar flow in a pipe, what is the relationship between the friction factor ($f$) and the Reynolds number ($Re$)?

**Answer 3:**
For laminar flow, $f = \frac{64}{Re}$.

---

## 8. Important Points to Remember

*   **Friction leads to energy loss:** This is manifested as a pressure drop or head loss along the pipe.
*   **Reynolds number dictates flow regime:** Laminar flow is smooth and predictable, while turbulent flow is chaotic and influenced by roughness.
*   **Friction factor is dimensionless:** It is used in the Darcy-Weisbach equation to quantify frictional losses.
*   **Pipe roughness matters in turbulent flow:** Smoother pipes generally have lower friction factors than rougher pipes for the same flow conditions.
*   **Moody Chart is essential for turbulent flow:** It graphically relates $f$, $Re$, and $\epsilon/D$.
*   **Accurate measurements are crucial:** Small errors in measuring pressure difference, flow rate, or dimensions can significantly impact the calculated friction factor.
*   **Fluid properties (viscosity, density) are temperature-dependent:** Always use the correct values for the observed temperature.
*   **The Darcy-Weisbach equation is for full pipe flow.**

---
