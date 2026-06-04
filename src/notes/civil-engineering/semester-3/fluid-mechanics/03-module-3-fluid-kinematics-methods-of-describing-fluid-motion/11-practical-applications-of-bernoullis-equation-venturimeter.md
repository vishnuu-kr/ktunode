---
title: "Practical Applications of Bernoulli’s equation- Venturimeter"
subject: "FLUID MECHANICS"
module: "Module 3: Fluid Kinematics : Methods of describing fluid motion"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106fc"
status: "completed"
scrapedAt: "2026-05-20T18:40:38.163Z"
---
# Fluid Mechanics: Module 3 - Fluid Kinematics

## Topic: Practical Applications of Bernoulli's Equation - The Venturimeter

### Introduction

Bernoulli's equation is a fundamental principle in fluid mechanics that describes the relationship between pressure, velocity, and elevation in a moving fluid. While derived for ideal fluids (inviscid, incompressible, steady flow), it finds numerous practical applications, especially when accounting for minor losses. The **Venturimeter** is a prime example of a device that utilizes Bernoulli's equation to measure flow rate.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the working principle of a Venturimeter.
*   Derive the equation for calculating flow rate using a Venturimeter.
*   Identify the advantages and disadvantages of using a Venturimeter.
*   Apply Venturimeter principles to practical problems.

---

### 1. The Venturimeter: Working Principle and Construction

#### 1.1 What is a Venturimeter?

A Venturimeter is a device used to measure the flow rate of a fluid in a pipe. It operates on the principle that as the cross-sectional area of the flow path decreases, the fluid velocity increases, and consequently, the pressure decreases (as described by Bernoulli's equation).

#### 1.2 Construction of a Venturimeter

A typical Venturimeter consists of three main sections:

*   **Converging Cone:** A short, conical section that gradually reduces the pipe's diameter. This section is where the fluid accelerates.
*   **Throat:** A short, cylindrical section with the smallest diameter. The fluid reaches its maximum velocity and minimum pressure in the throat.
*   **Diverging Cone:** A longer, conical section that gradually expands the pipe's diameter back to its original size. This section allows the fluid to decelerate and recover most of its pressure. The diverging cone is usually much longer than the converging cone to minimize energy losses due to turbulence.

**Diagrammatic Representation (Conceptual):**

```
   --------------------------------------------------------------------
  |                                                                    |
  |  <-- Entrance (Diameter D1)                                        |
  |                                                                    |
  |  \\\\\\\\\\\\\\\\\    |||||||||    //////////////////////////      |
  |  \\\\\\ Converging \\\\|||Throat|||//////////////// Diverging \\\\ |
  |  \\\\\\ Cone      \\\\\||||||||/////////////////// Cone     \\\\ |
  |  \\\\\\\\\\\\\\\\\    |||||||||    //////////////////////////      |
  |                                                                    |
  |  --> Exit (Diameter D1)                                            |
  |                                                                    |
   --------------------------------------------------------------------
       Diameter D2 < D1
```

*   $D_1$: Diameter of the inlet pipe (and outlet of the Venturimeter).
*   $D_2$: Diameter of the throat.

---

### 2. Derivation of Venturimeter Equation for Flow Rate

Let's consider the flow of an incompressible, steady fluid through a Venturimeter.

#### 2.1 Assumptions

*   **Incompressible fluid:** Density ($\rho$) is constant.
*   **Steady flow:** Fluid properties at any point do not change with time.
*   **Inviscid flow (ideally):** No internal friction (viscosity is neglected for initial derivation).
*   **Flow is one-dimensional:** Velocity is uniform across any given cross-section.

#### 2.2 Applying Bernoulli's Equation

Consider two sections of the Venturimeter:

*   **Section 1:** At the inlet (diameter $D_1$, area $A_1$).
*   **Section 2:** At the throat (diameter $D_2$, area $A_2$).

Assuming the Venturimeter is placed horizontally ($z_1 = z_2$), Bernoulli's equation between sections 1 and 2 can be written as:

$$ \frac{P_1}{\rho g} + \frac{v_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + z_2 $$

Since $z_1 = z_2$:

$$ \frac{P_1}{\rho g} + \frac{v_1^2}{2g} = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} $$

Rearranging to find the pressure difference ($\Delta P = P_1 - P_2$):

$$ \frac{P_1 - P_2}{\rho g} = \frac{v_2^2 - v_1^2}{2g} $$

$$ P_1 - P_2 = \frac{\rho}{2} (v_2^2 - v_1^2) \quad \dots (1) $$

#### 2.3 Applying the Continuity Equation

For incompressible flow, the mass flow rate must be conserved. Therefore, the volume flow rate ($Q$) is constant:

$$ Q = A_1 v_1 = A_2 v_2 $$

From this, we can express $v_1$ in terms of $v_2$ (or vice versa):

$$ v_1 = \frac{A_2}{A_1} v_2 $$

#### 2.4 Substituting and Solving for Velocity

Substitute the expression for $v_1$ from the continuity equation into Bernoulli's equation (1):

$$ P_1 - P_2 = \frac{\rho}{2} \left( v_2^2 - \left(\frac{A_2}{A_1} v_2\right)^2 \right) $$

$$ P_1 - P_2 = \frac{\rho}{2} v_2^2 \left( 1 - \left(\frac{A_2}{A_1}\right)^2 \right) $$

Now, solve for $v_2$:

$$ v_2^2 = \frac{2 (P_1 - P_2)}{\rho \left( 1 - \left(\frac{A_2}{A_1}\right)^2 \right)} $$

$$ v_2 = \sqrt{\frac{2 (P_1 - P_2)}{\rho \left( 1 - \left(\frac{A_2}{A_1}\right)^2 \right)}} $$

#### 2.5 Calculating the Theoretical Flow Rate ($Q_{th}$)

The theoretical flow rate is given by $Q_{th} = A_2 v_2$.

$$ Q_{th} = A_2 \sqrt{\frac{2 (P_1 - P_2)}{\rho \left( 1 - \left(\frac{A_2}{A_1}\right)^2 \right)}} $$

We can simplify the term $\left(\frac{A_2}{A_1}\right)^2$. Since $A = \frac{\pi D^2}{4}$:

$$ \frac{A_2}{A_1} = \frac{\frac{\pi D_2^2}{4}}{\frac{\pi D_1^2}{4}} = \left(\frac{D_2}{D_1}\right)^2 $$

Let $\beta = \frac{D_2}{D_1}$ (the diameter ratio). Then $\left(\frac{A_2}{A_1}\right)^2 = \beta^4$.

$$ Q_{th} = A_2 \sqrt{\frac{2 (P_1 - P_2)}{\rho (1 - \beta^4)}} $$

#### 2.6 Measurement of Pressure Difference

In practice, the pressure difference ($P_1 - P_2$) is not measured directly. Instead, a differential manometer is used. The manometer is connected to pressure taps at section 1 and section 2.

Let $h$ be the manometer reading (the difference in liquid levels in the manometer tubes). If the manometric fluid has a specific gravity $S_m$ and the flowing fluid has a specific gravity $S_f$ (or density $\rho_f$), and the manometric fluid is heavier than the flowing fluid, then:

$$ P_1 - P_2 = (\rho_m - \rho_f) g h $$

Where $\rho_m$ is the density of the manometric fluid and $\rho_f$ is the density of the flowing fluid.
If the flowing fluid is air or gas, and the manometer fluid is water, and the manometer is inclined, the calculation becomes more involved. However, for a basic understanding with water flowing and a denser manometric fluid like mercury, and assuming horizontal placement:

$$ \frac{P_1}{\rho_f g} - \frac{P_2}{\rho_f g} = \left(\frac{\rho_m}{\rho_f} - 1\right) h $$

Substituting this back into Bernoulli's equation in terms of head:

$$ h_1 + \frac{v_1^2}{2g} = h_2 + \frac{v_2^2}{2g} $$

Where $h_1 = P_1 / (\rho_f g)$ and $h_2 = P_2 / (\rho_f g)$ are piezometric heads.

The difference in piezometric heads is related to the manometer reading:

$$ h_1 - h_2 = \left(\frac{\rho_m}{\rho_f} - 1\right) h $$

Substituting this into Bernoulli's equation:

$$ \left(\frac{\rho_m}{\rho_f} - 1\right) h = \frac{v_2^2 - v_1^2}{2g} $$

$$ 2g \left(\frac{\rho_m}{\rho_f} - 1\right) h = v_2^2 - v_1^2 $$

Using $v_1 = (A_2/A_1)v_2$:

$$ 2g \left(\frac{\rho_m}{\rho_f} - 1\right) h = v_2^2 \left(1 - \left(\frac{A_2}{A_1}\right)^2\right) $$

$$ v_2 = \sqrt{\frac{2g \left(\frac{\rho_m}{\rho_f} - 1\right) h}{\left(1 - \left(\frac{A_2}{A_1}\right)^2\right)}} $$

The theoretical flow rate is then $Q_{th} = A_2 v_2$.

#### 2.7 Actual Flow Rate ($Q_{actual}$) and Coefficient of Discharge ($C_d$)

Due to viscous effects and energy losses, particularly in the diverging cone, the actual flow rate is less than the theoretical flow rate. This is accounted for by a **Coefficient of Discharge ($C_d$)**, which is empirically determined.

$$ Q_{actual} = C_d Q_{th} $$

$$ Q_{actual} = C_d A_2 \sqrt{\frac{2 (P_1 - P_2)}{\rho \left( 1 - \left(\frac{A_2}{A_1}\right)^2 \right)}} $$

Or, using the manometer reading $h$ and densities:

$$ Q_{actual} = C_d A_2 \sqrt{\frac{2 g h (\frac{\rho_m}{\rho_f} - 1)}{\left(1 - \left(\frac{A_2}{A_1}\right)^2\right)}} $$

The term $A_2 \sqrt{\frac{2g h (\frac{\rho_m}{\rho_f} - 1)}{\left(1 - \left(\frac{A_2}{A_1}\right)^2\right)}}$ is the theoretical flow rate derived from pressure measurements.

**Key Formula for Actual Flow Rate:**

$$ Q = C_d \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2 g h \left(\frac{\rho_m}{\rho_f} - 1\right)} $$

Where:
*   $Q$ is the actual flow rate (m³/s).
*   $C_d$ is the coefficient of discharge (dimensionless, typically 0.95 - 0.99 for Venturimeters).
*   $A_1$ is the cross-sectional area of the inlet pipe (m²).
*   $A_2$ is the cross-sectional area of the throat (m²).
*   $g$ is the acceleration due to gravity (m/s²).
*   $h$ is the reading on the differential manometer (m).
*   $\rho_m$ is the density of the manometric fluid (kg/m³).
*   $\rho_f$ is the density of the flowing fluid (kg/m³).

---

### 3. Venturimeter Parameters

*   **Diameter Ratio ($\beta$):** The ratio of the throat diameter to the inlet diameter ($D_2 / D_1$). This ratio typically ranges from 0.3 to 0.7 for efficient operation. A smaller ratio leads to a larger velocity increase and thus a larger pressure drop, making the measurement more sensitive but also increasing head loss.
*   **Coefficient of Discharge ($C_d$):** Accounts for energy losses. It depends on the Reynolds number and the geometry of the Venturimeter. For well-designed Venturimeters, $C_d$ is relatively constant over a wide range of flow rates.

---

### 4. Advantages of Venturimeters

*   **Low Head Loss:** The gradual expansion in the diverging cone helps in recovering a significant portion of the pressure drop, resulting in relatively low permanent head loss compared to other flow meters like orifice plates.
*   **High $C_d$:** Due to low head loss and smooth flow profile, Venturimeters have a high coefficient of discharge.
*   **Accuracy:** They provide accurate flow measurements when calibrated.
*   **Suitable for High Flow Rates:** Can handle large flow rates and suspended solids.
*   **No Moving Parts:** This makes them robust and reliable.

---

### 5. Disadvantages of Venturimeters

*   **Cost:** They are generally more expensive than orifice plates.
*   **Size:** They are longer than orifice plates, requiring more space in the pipeline.
*   **Installation:** Requires straight, undisturbed pipe sections before and after the meter for accurate readings.

---

### 6. Practical Applications of Venturimeters

*   **Water Supply Systems:** Measuring the flow rate of water in pipes.
*   **Industrial Processes:** Monitoring and controlling fluid flow in chemical plants, refineries, and manufacturing.
*   **Aerodynamics:** Used in wind tunnels to measure air speed and pressure.
*   **Medical Devices:** In some respiratory equipment to measure breathing rates.
*   **Fuel Injection Systems:** In some older automotive designs.

---

### 7. Example Problem

**Problem:**

A Venturimeter is installed in a horizontal pipe of 10 cm diameter. The throat diameter is 5 cm. Water flows through the pipe. A differential manometer containing mercury (specific gravity 13.6) is connected across the inlet and throat. The manometer shows a reading of 20 cm. The flowing fluid is water (density 1000 kg/m³). Calculate the flow rate of water through the pipe, assuming a coefficient of discharge ($C_d$) of 0.98.

**Given:**
*   Inlet diameter, $D_1 = 10 \text{ cm} = 0.1 \text{ m}$
*   Throat diameter, $D_2 = 5 \text{ cm} = 0.05 \text{ m}$
*   Manometer reading, $h = 20 \text{ cm} = 0.2 \text{ m}$
*   Specific gravity of mercury, $S_m = 13.6$
*   Density of water, $\rho_f = 1000 \text{ kg/m}^3$
*   Coefficient of discharge, $C_d = 0.98$
*   Acceleration due to gravity, $g = 9.81 \text{ m/s}^2$

**Solution:**

1.  **Calculate Areas:**
    *   $A_1 = \frac{\pi D_1^2}{4} = \frac{\pi (0.1 \text{ m})^2}{4} = \frac{\pi \times 0.01}{4} \text{ m}^2 = 0.007854 \text{ m}^2$
    *   $A_2 = \frac{\pi D_2^2}{4} = \frac{\pi (0.05 \text{ m})^2}{4} = \frac{\pi \times 0.0025}{4} \text{ m}^2 = 0.0019635 \text{ m}^2$

2.  **Calculate Density of Manometric Fluid:**
    *   $\rho_m = S_m \times \rho_{water} = 13.6 \times 1000 \text{ kg/m}^3 = 13600 \text{ kg/m}^3$

3.  **Calculate the Flow Rate using the formula:**
    *   $Q = C_d \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2 g h \left(\frac{\rho_m}{\rho_f} - 1\right)}$

    *   Calculate the term $\left(\frac{\rho_m}{\rho_f} - 1\right)$:
        $\frac{\rho_m}{\rho_f} - 1 = \frac{13600}{1000} - 1 = 13.6 - 1 = 12.6$

    *   Calculate $\sqrt{A_1^2 - A_2^2}$:
        $A_1^2 = (0.007854)^2 \approx 0.000061687$
        $A_2^2 = (0.0019635)^2 \approx 0.000003855$
        $A_1^2 - A_2^2 \approx 0.000057832$
        $\sqrt{A_1^2 - A_2^2} \approx \sqrt{0.000057832} \approx 0.007605$

    *   Substitute values into the flow rate equation:
        $Q = 0.98 \times \frac{(0.007854 \text{ m}^2)(0.0019635 \text{ m}^2)}{0.007605 \text{ m}^2} \sqrt{2 \times 9.81 \text{ m/s}^2 \times 0.2 \text{ m} \times 12.6}$
        $Q = 0.98 \times \frac{0.000015428}{0.007605} \sqrt{49.3692}$
        $Q = 0.98 \times 0.0020286 \times 7.026$
        $Q \approx 0.01390 \text{ m}^3\text{/s}$

**Answer:**
The flow rate of water through the pipe is approximately $0.01390 \text{ m}^3\text{/s}$ or $13.90$ liters per second.

---

### 8. Practice Questions

1.  **Define Venturimeter.** What is its primary function?
2.  Explain the three main parts of a Venturimeter and their roles in the flow.
3.  Derive the equation for theoretical flow rate through a Venturimeter using Bernoulli's equation and the continuity equation. Assume a horizontal pipe.
4.  What is the purpose of the coefficient of discharge ($C_d$) in the Venturimeter equation? What is its typical range for a well-designed Venturimeter?
5.  A Venturimeter with a throat diameter of 8 cm is installed in a pipe with a diameter of 20 cm. If water flows through it, and the pressure difference between the inlet and throat is 50 kPa, calculate the theoretical flow rate. (Assume density of water = 1000 kg/m³, $g = 9.81$ m/s²).
6.  A Venturimeter is used to measure the flow of oil (density 800 kg/m³) in a pipeline. The inlet diameter is 15 cm and the throat diameter is 7.5 cm. A differential manometer filled with mercury (specific gravity 13.6) shows a reading of 15 cm. If $C_d = 0.97$, calculate the actual flow rate of oil.

---

### 9. Answers to Practice Questions

1.  **Definition:** A Venturimeter is a flow measuring instrument that measures the flow rate of a fluid in a pipe. It operates on the principle of Bernoulli's equation, where a decrease in cross-sectional area leads to an increase in fluid velocity and a decrease in pressure.
2.  **Parts of a Venturimeter:**
    *   **Converging Cone:** Gradually reduces the pipe diameter, increasing fluid velocity and decreasing pressure.
    *   **Throat:** The narrowest section where the fluid reaches its maximum velocity and minimum pressure.
    *   **Diverging Cone:** Gradually increases the pipe diameter, decelerating the fluid and recovering most of the pressure loss.
3.  **Derivation:** (Refer to Section 2 of these notes for the detailed derivation). The theoretical flow rate is given by:
    $Q_{th} = A_2 \sqrt{\frac{2 (P_1 - P_2)}{\rho \left( 1 - \left(\frac{A_2}{A_1}\right)^2 \right)}}$
4.  **Purpose of $C_d$**: The coefficient of discharge ($C_d$) accounts for energy losses due to viscosity and turbulence in the Venturimeter. It converts the theoretical flow rate (calculated assuming ideal conditions) into the actual flow rate. Its typical range is 0.95 to 0.99 for well-designed Venturimeters.
5.  **Calculation for Q5:**
    *   $D_1 = 20 \text{ cm} = 0.2 \text{ m} \implies A_1 = \frac{\pi (0.2)^2}{4} = 0.031416 \text{ m}^2$
    *   $D_2 = 8 \text{ cm} = 0.08 \text{ m} \implies A_2 = \frac{\pi (0.08)^2}{4} = 0.0050265 \text{ m}^2$
    *   $P_1 - P_2 = 50 \text{ kPa} = 50,000 \text{ Pa}$
    *   $\rho = 1000 \text{ kg/m}^3$
    *   $A_2/A_1 = (D_2/D_1)^2 = (0.08/0.2)^2 = (0.4)^2 = 0.16$
    *   $(A_2/A_1)^2 = 0.16^2 = 0.0256$
    *   $Q_{th} = 0.0050265 \sqrt{\frac{2 \times 50000}{1000 (1 - 0.0256)}}$
    *   $Q_{th} = 0.0050265 \sqrt{\frac{100000}{974.4}}$
    *   $Q_{th} = 0.0050265 \sqrt{102.627}$
    *   $Q_{th} = 0.0050265 \times 10.13$
    *   $Q_{th} \approx 0.05092 \text{ m}^3\text{/s}$

6.  **Calculation for Q6:**
    *   $D_1 = 15 \text{ cm} = 0.15 \text{ m} \implies A_1 = \frac{\pi (0.15)^2}{4} = 0.01767 \text{ m}^2$
    *   $D_2 = 7.5 \text{ cm} = 0.075 \text{ m} \implies A_2 = \frac{\pi (0.075)^2}{4} = 0.004418 \text{ m}^2$
    *   $h = 15 \text{ cm} = 0.15 \text{ m}$
    *   $\rho_{oil} = 800 \text{ kg/m}^3$
    *   $S_m = 13.6 \implies \rho_m = 13.6 \times 1000 = 13600 \text{ kg/m}^3$
    *   $C_d = 0.97$
    *   $g = 9.81 \text{ m/s}^2$
    *   $\frac{\rho_m}{\rho_f} - 1 = \frac{13600}{800} - 1 = 17 - 1 = 16$
    *   $A_1^2 = (0.01767)^2 \approx 0.0003122$
    *   $A_2^2 = (0.004418)^2 \approx 0.00001952$
    *   $\sqrt{A_1^2 - A_2^2} = \sqrt{0.0003122 - 0.00001952} = \sqrt{0.00029268} \approx 0.017108$
    *   $Q = 0.97 \times \frac{(0.01767)(0.004418)}{0.017108} \sqrt{2 \times 9.81 \times 0.15 \times 16}$
    *   $Q = 0.97 \times \frac{0.00007809}{0.017108} \sqrt{47.088}$
    *   $Q = 0.97 \times 0.004564 \times 6.862$
    *   $Q \approx 0.0303 \text{ m}^3\text{/s}$

---

### Important Points to Remember

*   **Bernoulli's Equation is key:** It links pressure, velocity, and elevation. For a Venturimeter, it's applied between the inlet and the throat.
*   **Continuity Equation is essential:** It relates velocities and areas, allowing us to express one velocity in terms of the other.
*   **Pressure Difference Measurement:** A differential manometer is typically used to measure the pressure difference. Remember to account for the densities of both the flowing fluid and the manometric fluid.
*   **Coefficient of Discharge ($C_d$):** Always use $C_d$ to calculate the actual flow rate, as real fluids are not ideal.
*   **Low Head Loss:** The converging-diverging design of the Venturimeter is specifically engineered to minimize permanent head loss, making it an efficient flow meter.
*   **Area Ratio ($\beta$):** A smaller $\beta$ means a larger pressure difference for a given flow rate, increasing sensitivity but also head loss.

---

This concludes the notes on Venturimeters as a practical application of Bernoulli's equation in Fluid Kinematics.
