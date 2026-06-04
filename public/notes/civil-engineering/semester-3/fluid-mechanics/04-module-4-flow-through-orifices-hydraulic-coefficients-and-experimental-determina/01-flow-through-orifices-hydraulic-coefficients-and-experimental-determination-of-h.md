---
title: "Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810700"
status: "completed"
scrapedAt: "2026-05-20T18:40:40.246Z"
---
# Fluid Mechanics: Module 4 - Flow Through Orifices

## 1. Introduction to Orifices and Their Significance

An **orifice** is a small opening or hole in the wall of a tank or vessel, through which a fluid flows out. The study of flow through orifices is crucial in various engineering applications such as:

*   **Flow measurement:** Orifices are used in Venturi meters and orifice meters to measure the flow rate of liquids and gases.
*   **Tank drainage:** Understanding the discharge from tanks through orifices is important for designing drainage systems.
*   **Jet formation:** The behavior of fluid jets issuing from orifices is relevant in applications like firefighting, irrigation, and power generation.
*   **Process control:** Regulating flow rates in industrial processes often involves using orifices.

## 2. Theoretical Discharge Through an Orifice

### 2.1. Assumptions for Theoretical Discharge

The theoretical discharge calculation is based on several idealized assumptions:

*   **Inviscid flow:** The fluid is assumed to be ideal (inviscid), meaning it has no viscosity. This implies no energy loss due to friction.
*   **Steady flow:** The flow rate is constant over time.
*   **Incompressible flow:** The density of the fluid remains constant.
*   **Submerged or partially submerged conditions:** The fluid level behind the orifice is constant.
*   **Atmospheric discharge:** The jet issues into the atmosphere.
*   **Velocity of approach is negligible:** The velocity of the fluid surface in the tank is assumed to be zero because the tank cross-sectional area is much larger than the orifice area.

### 2.2. Derivation of Theoretical Discharge

Consider a tank with a free surface at a height $H$ above the center of a small orifice at the bottom. Let the area of the orifice be $a$ and the area of the tank's free surface be $A$.

*   **Applying Bernoulli's Equation:** We can apply Bernoulli's equation between a point on the free surface (point 1) and a point just outside the orifice where the jet issues (point 2).

    $$ \frac{P_1}{\rho g} + \frac{V_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{V_2^2}{2g} + z_2 $$

    Where:
    *   $P_1$ = Pressure at the free surface (atmospheric pressure, $P_{atm}$)
    *   $\rho$ = Density of the fluid
    *   $g$ = Acceleration due to gravity
    *   $V_1$ = Velocity of the fluid at the free surface
    *   $z_1$ = Elevation of the free surface
    *   $P_2$ = Pressure just outside the orifice (atmospheric pressure, $P_{atm}$)
    *   $V_2$ = Velocity of the fluid jet issuing from the orifice
    *   $z_2$ = Elevation of the orifice

*   **Setting Datum and Simplifying:** Let's set the datum at the level of the orifice ($z_2 = 0$). Then, $z_1 = H$.

    $$ \frac{P_{atm}}{\rho g} + \frac{V_1^2}{2g} + H = \frac{P_{atm}}{\rho g} + \frac{V_2^2}{2g} + 0 $$

    This simplifies to:

    $$ \frac{V_1^2}{2g} + H = \frac{V_2^2}{2g} $$

*   **Continuity Equation:** From the continuity equation, the rate of volume flow at the surface is equal to the rate of volume flow through the orifice:

    $$ A V_1 = a V_2 $$

    Therefore, $V_1 = \frac{a}{A} V_2$.

*   **Substituting $V_1$ into Bernoulli's Equation:**

    $$ \frac{1}{2g} \left( \frac{a}{A} V_2 \right)^2 + H = \frac{V_2^2}{2g} $$

    $$ H = \frac{V_2^2}{2g} \left( 1 - \left(\frac{a}{A}\right)^2 \right) $$

    $$ V_2^2 = \frac{2gH}{1 - (a/A)^2} $$

    $$ V_2 = \sqrt{\frac{2gH}{1 - (a/A)^2}} $$

*   **Velocity of Approach:** The term $\sqrt{2gH}$ is the velocity of the fluid if the velocity of approach ($V_1$) were negligible. The factor $\frac{1}{\sqrt{1 - (a/A)^2}}$ is called the **velocity of approach factor**.

*   **Theoretical Discharge (Q_th):** The theoretical discharge is the product of the orifice area and the theoretical velocity:

    $$ Q_{th} = a \times V_2 = a \sqrt{\frac{2gH}{1 - (a/A)^2}} $$

### 2.3. Case: Negligible Velocity of Approach

If the area of the tank $A$ is very large compared to the area of the orifice $a$ ($A \gg a$), then $(a/A)^2 \approx 0$. In this case, the velocity of approach is negligible, and Bernoulli's equation simplifies to:

$$ H = \frac{V_2^2}{2g} $$

$$ V_2 = \sqrt{2gH} $$

This is known as the **ideal velocity** or **theoretical velocity** when the velocity of approach is ignored.

The theoretical discharge ($Q_{th}$) in this simplified case becomes:

$$ Q_{th} = a \sqrt{2gH} $$

**Important Point:** This simplified formula is widely used when the ratio of orifice area to tank area is less than 0.01.

## 3. Real Flow Through an Orifice and Hydraulic Coefficients

In reality, flow through an orifice is not ideal due to:

*   **Viscosity:** Frictional losses within the fluid reduce the velocity.
*   **Contraction of the jet:** As the fluid passes through the orifice, the streamlines converge and the jet contracts to a minimum cross-section, known as the **vena contracta**, downstream of the orifice. This causes a reduction in the effective area of the jet.

These real-world effects are accounted for by introducing **hydraulic coefficients**.

### 3.1. Vena Contracta

The **vena contracta** is the point of minimum cross-sectional area of the fluid jet issuing from an orifice. It occurs at a short distance downstream of the orifice, where the streamlines are parallel and perpendicular to the plane of the jet.

### 3.2. Hydraulic Coefficients

These coefficients quantify the deviation of real flow from ideal flow:

*   **Coefficient of Velocity ($C_v$)**:
    *   **Definition:** The ratio of the actual velocity of the jet at the vena contracta to the theoretical velocity.
    *   **Formula:** $C_v = \frac{\text{Actual Velocity}}{\text{Theoretical Velocity}} = \frac{V_{actual}}{\sqrt{2gH}}$
    *   **Typical Value:** $0.95$ to $0.99$. $C_v$ accounts for frictional losses.

*   **Coefficient of Contraction ($C_c$)**:
    *   **Definition:** The ratio of the area of the vena contracta to the actual area of the orifice.
    *   **Formula:** $C_c = \frac{\text{Area of Vena Contracta}}{\text{Area of Orifice}} = \frac{a_v}{a}$
    *   **Typical Value:** $0.61$ to $0.69$ for sharp-edged orifices. $C_c$ accounts for the geometric contraction of the jet.

*   **Coefficient of Discharge ($C_d$)**:
    *   **Definition:** The ratio of the actual discharge through the orifice to the theoretical discharge.
    *   **Formula:** $C_d = \frac{\text{Actual Discharge}}{\text{Theoretical Discharge}} = \frac{Q_{actual}}{Q_{th}}$

### 3.3. Relationship Between Hydraulic Coefficients

The coefficient of discharge can be expressed as the product of the coefficient of velocity and the coefficient of contraction:

$$ C_d = C_v \times C_c $$

**Derivation:**

*   Actual Velocity ($V_{actual}$) = $C_v \times \sqrt{2gH}$
*   Area of Vena Contracta ($a_v$) = $C_c \times a$
*   Actual Discharge ($Q_{actual}$) = $a_v \times V_{actual} = (C_c \times a) \times (C_v \times \sqrt{2gH})$
*   $Q_{actual} = C_c \times C_v \times (a \sqrt{2gH})$
*   Since $Q_{th} = a \sqrt{2gH}$ (ignoring velocity of approach),
*   $Q_{actual} = C_d \times Q_{th}$
*   Therefore, $C_d = C_v \times C_c$.

**Important Point:** The coefficient of discharge is generally less than 1, indicating that the actual discharge is less than the theoretical discharge.

## 4. Actual Discharge Through an Orifice

The actual discharge through an orifice is calculated by multiplying the theoretical discharge (using the simplified formula, assuming negligible velocity of approach) by the coefficient of discharge:

$$ Q_{actual} = C_d \times a \sqrt{2gH} $$

If the velocity of approach is significant, the actual discharge is:

$$ Q_{actual} = C_d \times a \sqrt{\frac{2gH}{1 - (a/A)^2}} $$

## 5. Types of Orifices and Their Coefficients

The values of hydraulic coefficients depend on the shape, size, and nature of the orifice and the flow conditions.

*   **Sharp-Edged Orifice:**
    *   The edges are sharp, creating a distinct vena contracta.
    *   $C_c \approx 0.61$
    *   $C_v \approx 0.98$
    *   $C_d \approx 0.60$ (product of $C_v$ and $C_c$)

*   **Rounded Orifice (Short Mouthpiece):**
    *   The edges are rounded. This reduces the contraction effect.
    *   $C_c$ is higher than for sharp-edged orifices.
    *   $C_v$ is similar or slightly higher due to reduced losses.
    *   $C_d$ can be around $0.80$ to $0.95$ depending on the degree of rounding and the length of the mouthpiece.

*   **Borda's Mouthpiece:**
    *   A short cylindrical mouthpiece projecting inwards into the tank.
    *   $C_c = 0.5$ (theoretical value)
    *   $C_d \approx 0.5$ (theoretical value)
    *   Real values are slightly higher due to viscosity.

*   **Triangular Orifice:**
    *   Used for measuring low flow rates.
    *   The discharge is often calculated using a modified formula.

*   **Square Orifice:**
    *   Similar behavior to sharp-edged orifices.

*   **Submerged Orifice:**
    *   When the jet discharges into a fluid instead of air, or when the orifice is completely submerged.
    *   The effective head is the difference in the piezometric heads upstream and downstream of the orifice.
    *   Head difference = $H_1 - H_2$, where $H_1$ is the fluid level upstream and $H_2$ is the fluid level downstream.
    *   $Q_{actual} = C_d \times a \sqrt{2g(H_1 - H_2)}$

**Important Point:** The values of hydraulic coefficients are empirical and are determined experimentally.

## 6. Experimental Determination of Hydraulic Coefficients

Hydraulic coefficients are determined experimentally by measuring the actual discharge and velocity, and comparing them with theoretical values.

### 6.1. Experimental Setup

A typical experimental setup involves:

*   **Tank:** A tank with a constant water level.
*   **Orifice:** A precisely machined orifice plate of known area $a$.
*   **Arrangement for measuring head (H):** A piezometer or manometer to measure the head of the fluid above the center of the orifice.
*   **Arrangement for measuring discharge (Q_actual):**
    *   **Volumetric Method:** Collecting the discharged fluid in a measuring tank for a specific time interval.
    *   **Gravimetric Method:** Measuring the mass of the discharged fluid over a time interval.
    *   **Flow Meter:** Using a calibrated flow meter to directly measure the discharge.
*   **Arrangement for measuring velocity (V_actual):** This is often done indirectly by calculating $C_d$ and $C_c$ from measured discharge and then deriving $C_v$.

### 6.2. Procedure for Determining $C_d$

1.  **Set up the tank and orifice.** Ensure the water level is stable.
2.  **Measure the head (H)** of the water above the center of the orifice using a piezometer.
3.  **Measure the actual discharge ($Q_{actual}$)** using the volumetric or gravimetric method:
    *   **Volumetric:** Measure the volume ($V$) of water collected in a tank over a time ($t$). $Q_{actual} = V/t$.
    *   **Gravimetric:** Measure the mass ($m$) of water collected over a time ($t$). $Q_{actual} = m / (\rho \times t)$.
4.  **Calculate the theoretical discharge ($Q_{th}$)** using the formula $Q_{th} = a \sqrt{2gH}$ (assuming negligible velocity of approach).
5.  **Calculate $C_d$**: $C_d = Q_{actual} / Q_{th}$.

### 6.3. Procedure for Determining $C_c$ and $C_v$

Once $C_d$ is determined, $C_c$ and $C_v$ can be estimated:

1.  **Measure the area of the vena contracta ($a_v$)**: This can be done visually with a traveling microscope or by carefully measuring the diameter of the contracted jet at its narrowest point.
2.  **Calculate $C_c$**: $C_c = a_v / a$.
3.  **Calculate $C_v$**: $C_v = C_d / C_c$.

Alternatively, $C_v$ can be estimated by measuring the velocity of the jet directly using a pitot tube placed at the vena contracta, but this is often difficult in practice.

## 7. Numerical Problems and Solutions

**Problem 1:**
A rectangular tank is 10 m long, 5 m wide, and 4 m deep. It is filled with water. An orifice of 10 cm diameter is fitted at the bottom of the tank. The coefficient of discharge is 0.62. Calculate the theoretical and actual discharge through the orifice when the water level is 3 m above the orifice. The velocity of approach can be neglected.

**Solution:**

*   **Given:**
    *   Length of tank, $L = 10$ m
    *   Width of tank, $W = 5$ m
    *   Area of tank, $A = L \times W = 10 \times 5 = 50$ m²
    *   Diameter of orifice, $d = 10$ cm = 0.1 m
    *   Area of orifice, $a = \frac{\pi}{4} d^2 = \frac{\pi}{4} (0.1)^2 = 0.00785$ m²
    *   Coefficient of discharge, $C_d = 0.62$
    *   Head of water above orifice, $H = 3$ m
    *   $g = 9.81$ m/s²

*   **Check for velocity of approach:**
    *   Ratio of areas, $a/A = 0.00785 / 50 \approx 0.000157$. Since $a/A < 0.01$, velocity of approach is negligible.

*   **Theoretical Discharge ($Q_{th}$):**
    *   $Q_{th} = a \sqrt{2gH}$
    *   $Q_{th} = 0.00785 \sqrt{2 \times 9.81 \times 3}$
    *   $Q_{th} = 0.00785 \sqrt{58.86}$
    *   $Q_{th} = 0.00785 \times 7.672$
    *   $Q_{th} = 0.06028$ m³/s

*   **Actual Discharge ($Q_{actual}$):**
    *   $Q_{actual} = C_d \times Q_{th}$
    *   $Q_{actual} = 0.62 \times 0.06028$
    *   $Q_{actual} = 0.03737$ m³/s

**Answer:**
Theoretical discharge = 0.06028 m³/s
Actual discharge = 0.03737 m³/s

---

**Problem 2:**
A tank has a large surface area. An orifice of 5 cm diameter is fitted to the tank. The head of water above the orifice is 6 m. The coefficient of velocity is 0.95 and the coefficient of contraction is 0.64. Find the actual discharge through the orifice.

**Solution:**

*   **Given:**
    *   Diameter of orifice, $d = 5$ cm = 0.05 m
    *   Area of orifice, $a = \frac{\pi}{4} d^2 = \frac{\pi}{4} (0.05)^2 = 0.001963$ m²
    *   Head of water above orifice, $H = 6$ m
    *   Coefficient of velocity, $C_v = 0.95$
    *   Coefficient of contraction, $C_c = 0.64$
    *   $g = 9.81$ m/s²

*   **Calculate Coefficient of Discharge ($C_d$):**
    *   $C_d = C_v \times C_c$
    *   $C_d = 0.95 \times 0.64$
    *   $C_d = 0.608$

*   **Actual Discharge ($Q_{actual}$):**
    *   Since the tank has a large surface area, velocity of approach is negligible.
    *   $Q_{actual} = C_d \times a \sqrt{2gH}$
    *   $Q_{actual} = 0.608 \times 0.001963 \sqrt{2 \times 9.81 \times 6}$
    *   $Q_{actual} = 0.608 \times 0.001963 \sqrt{117.72}$
    *   $Q_{actual} = 0.608 \times 0.001963 \times 10.85$
    *   $Q_{actual} = 0.01294$ m³/s

**Answer:**
Actual discharge = 0.01294 m³/s

---

**Problem 3:**
Water flows through an orifice of 10 cm diameter fitted in a tank. The head of water over the orifice is 5 m. The measured discharge is 0.03 m³/s. Calculate the coefficient of discharge for the orifice. If the area of the vena contracta is $0.006$ m², find the coefficients of velocity and contraction.

**Solution:**

*   **Given:**
    *   Diameter of orifice, $d = 10$ cm = 0.1 m
    *   Area of orifice, $a = \frac{\pi}{4} (0.1)^2 = 0.00785$ m²
    *   Head of water above orifice, $H = 5$ m
    *   Actual discharge, $Q_{actual} = 0.03$ m³/s
    *   Area of vena contracta, $a_v = 0.006$ m²
    *   $g = 9.81$ m/s²

*   **Calculate Theoretical Discharge ($Q_{th}$):**
    *   Assuming negligible velocity of approach:
    *   $Q_{th} = a \sqrt{2gH}$
    *   $Q_{th} = 0.00785 \sqrt{2 \times 9.81 \times 5}$
    *   $Q_{th} = 0.00785 \sqrt{98.1}$
    *   $Q_{th} = 0.00785 \times 9.904$
    *   $Q_{th} = 0.07775$ m³/s

*   **Calculate Coefficient of Discharge ($C_d$):**
    *   $C_d = Q_{actual} / Q_{th}$
    *   $C_d = 0.03 / 0.07775$
    *   $C_d = 0.386$

*   **Calculate Coefficient of Contraction ($C_c$):**
    *   $C_c = a_v / a$
    *   $C_c = 0.006 / 0.00785$
    *   $C_c = 0.764$

*   **Calculate Coefficient of Velocity ($C_v$):**
    *   $C_v = C_d / C_c$
    *   $C_v = 0.386 / 0.764$
    *   $C_v = 0.505$

**(Note: The calculated $C_d$, $C_c$, and $C_v$ values are unusually low for a typical sharp-edged orifice. This could indicate significant losses not accounted for by standard coefficients or potential measurement errors in the problem statement. Standard values for sharp-edged orifices are closer to $C_d \approx 0.60$, $C_c \approx 0.62$, and $C_v \approx 0.98$. This problem is designed to test the understanding of the relationships between the coefficients.)**

**Answer:**
Coefficient of discharge, $C_d = 0.386$
Coefficient of contraction, $C_c = 0.764$
Coefficient of velocity, $C_v = 0.505$

---

**Problem 4:**
A submerged orifice of 2 cm diameter is provided at the bottom of a tank. The top surface of the water in the tank is at a height of 2 m above the orifice. The bottom of the tank is at a height of 1 m above the datum. The downstream side of the orifice is also submerged in water up to a height of 0.5 m above the datum. The coefficient of discharge is 0.60. Calculate the discharge through the orifice.

**Solution:**

*   **Given:**
    *   Diameter of orifice, $d = 2$ cm = 0.02 m
    *   Area of orifice, $a = \frac{\pi}{4} (0.02)^2 = 0.000314$ m²
    *   Head of water above orifice (upstream), $H_1 = 2$ m
    *   Head of water downstream, $H_2 = 0.5$ m
    *   Coefficient of discharge, $C_d = 0.60$
    *   $g = 9.81$ m/s²

*   **Effective Head for Submerged Orifice:**
    *   The effective head is the difference in the water levels on the upstream and downstream sides of the orifice.
    *   Effective Head, $H = H_1 - H_2 = 2$ m - 0.5 m = 1.5 m

*   **Actual Discharge ($Q_{actual}$):**
    *   $Q_{actual} = C_d \times a \sqrt{2gH}$
    *   $Q_{actual} = 0.60 \times 0.000314 \sqrt{2 \times 9.81 \times 1.5}$
    *   $Q_{actual} = 0.60 \times 0.000314 \sqrt{29.43}$
    *   $Q_{actual} = 0.60 \times 0.000314 \times 5.425$
    *   $Q_{actual} = 0.00102$ m³/s

**Answer:**
Actual discharge = 0.00102 m³/s

---

## 8. Practice Questions

1.  An orifice of 5 cm diameter is fitted to a tank. The head of water over the orifice is 4 m. Calculate the theoretical discharge through the orifice, assuming the velocity of approach is negligible. If the actual discharge is $0.05$ m³/s, what is the coefficient of discharge? (Use $g = 9.81$ m/s²)

2.  The coefficient of velocity for an orifice is 0.96 and the coefficient of contraction is 0.62. Calculate the coefficient of discharge and the actual velocity of the jet if the head over the orifice is 5 m.

3.  A sharp-edged circular orifice of 2 cm diameter is made in a tank. The head of water above the orifice is 3 m. Calculate the actual discharge through the orifice, assuming $C_d = 0.60$. What is the velocity of the jet?

4.  A submerged orifice of 4 cm diameter is fitted in the side of a tank. The water level in the tank is 3 m above the center of the orifice. The water level on the other side of the orifice is 1 m below the water level in the tank. If $C_d = 0.65$, calculate the discharge through the orifice.

---

## 9. Answers to Practice Questions

1.  **Theoretical Discharge ($Q_{th}$):**
    *   $a = \frac{\pi}{4} (0.05)^2 = 0.001963$ m²
    *   $Q_{th} = 0.001963 \sqrt{2 \times 9.81 \times 4} = 0.001963 \sqrt{78.48} = 0.001963 \times 8.859 = 0.01739$ m³/s
    *   **Coefficient of Discharge ($C_d$):**
        *   $C_d = Q_{actual} / Q_{th} = 0.05 / 0.01739 = 2.875$
        *   **(Note: This is an unrealistic value for $C_d$. It suggests an error in the problem statement or given values, as $C_d$ should be less than 1. If the actual discharge was, for example, $0.01$ m³/s, then $C_d = 0.01 / 0.01739 = 0.575$, which is a more reasonable value.)**

2.  *   **Coefficient of Discharge ($C_d$):**
        *   $C_d = C_v \times C_c = 0.96 \times 0.62 = 0.5952$
    *   **Actual Velocity ($V_{actual}$):**
        *   $V_{actual} = C_v \sqrt{2gH} = 0.96 \sqrt{2 \times 9.81 \times 5} = 0.96 \sqrt{98.1} = 0.96 \times 9.904 = 9.508$ m/s

3.  *   **Actual Discharge ($Q_{actual}$):**
        *   $a = \frac{\pi}{4} (0.02)^2 = 0.000314$ m²
        *   $Q_{actual} = C_d \times a \sqrt{2gH} = 0.60 \times 0.000314 \sqrt{2 \times 9.81 \times 3}$
        *   $Q_{actual} = 0.60 \times 0.000314 \sqrt{58.86} = 0.60 \times 0.000314 \times 7.672 = 0.001446$ m³/s
    *   **Velocity of the Jet ($V_{actual}$):**
        *   $V_{actual} = C_d \sqrt{2gH} = 0.60 \sqrt{58.86} = 0.60 \times 7.672 = 4.603$ m/s

4.  *   **Effective Head ($H$):**
        *   Upstream water level above orifice = 3 m
        *   Downstream water level below upstream level = 1 m
        *   Effective Head ($H$) = 3 m - 1 m = 2 m
    *   **Discharge ($Q_{actual}$):**
        *   $a = \frac{\pi}{4} (0.04)^2 = 0.001257$ m²
        *   $Q_{actual} = C_d \times a \sqrt{2gH} = 0.65 \times 0.001257 \sqrt{2 \times 9.81 \times 2}$
        *   $Q_{actual} = 0.65 \times 0.001257 \sqrt{39.24} = 0.65 \times 0.001257 \times 6.264$
        *   $Q_{actual} = 0.00514$ m³/s

---

## 10. Key Points to Remember

*   **Orifice:** Small opening in a tank wall or base.
*   **Vena Contracta:** Point of minimum jet cross-section downstream of the orifice.
*   **Theoretical Discharge:** Based on ideal fluid and no losses ($Q_{th} = a\sqrt{2gH}$, neglecting velocity of approach).
*   **Actual Discharge:** Accounts for real-world losses ($Q_{actual} = C_d \times a\sqrt{2gH}$).
*   **Hydraulic Coefficients:**
    *   $C_v = \frac{\text{Actual Velocity}}{\text{Theoretical Velocity}}$
    *   $C_c = \frac{\text{Area of Vena Contracta}}{\text{Area of Orifice}}$
    *   $C_d = \frac{\text{Actual Discharge}}{\text{Theoretical Discharge}}$
*   **Relationship:** $C_d = C_v \times C_c$.
*   **Velocity of Approach:** Significant when the area of the tank is comparable to the orifice area. It is accounted for by the term $\sqrt{\frac{2gH}{1 - (a/A)^2}}$.
*   **Submerged Orifice:** The effective head is the difference in liquid levels on both sides of the orifice.
*   Hydraulic coefficients are determined experimentally and vary with orifice shape, size, and edge conditions.
*   For sharp-edged orifices, typical values are $C_c \approx 0.61$ and $C_v \approx 0.98$, leading to $C_d \approx 0.60$.
*   The coefficient of discharge is always less than 1.
