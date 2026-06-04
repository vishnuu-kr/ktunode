---
title: "Measurement of unsteady state conduction heat transfer"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 14: Measurement of unsteady state conduction heat transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636c7"
status: "completed"
scrapedAt: "2026-05-20T18:02:18.944Z"
---
# THERMAL ENGINEERING LAB-1: Unsteady State Conduction Heat Transfer

## Module 14: Measurement of Unsteady State Conduction Heat Transfer

### Topic: Measurement of Unsteady State Conduction Heat Transfer

---

### 1. Introduction to Unsteady State Conduction

Unsteady state conduction, also known as transient conduction, refers to heat transfer in a medium where the temperature at any point within the medium changes with time. This contrasts with steady-state conduction, where the temperature at any point remains constant over time.

**Key Concepts:**

*   **Transient Heat Transfer:** Heat transfer that occurs when the temperature distribution in a body changes with time.
*   **Fourier's Law of Conduction (General Form):** $q = -k \nabla T$. In unsteady state, this becomes a partial differential equation.
*   **Temperature Distribution:** The spatial variation of temperature within a body at a given time. In unsteady state, this distribution evolves over time.

**Relevance to Course Outcomes:**

This topic directly contributes to **CO2: Evaluate thermal properties of materials in conduction, convection and radiation (Knowledge Level: K4)**. By measuring and analyzing unsteady state heat transfer, we can determine thermal diffusivity, a key thermo-physical property, which allows for the evaluation of material behavior under changing thermal conditions.

**Reference Textbooks:**

*   **Cengel & Ghajar, "Heat Transfer: A Practical Approach," 4th Ed.** (Chapter 4: Transient Heat Conduction)
*   **Holman, "Heat Transfer," 10th Ed.** (Chapter 5: Transient Heat Conduction)
*   **Incropera & DeWitt, "Fundamentals of Heat and Mass Transfer," 7th Ed.** (Chapter 4: One-Dimensional, Transient Conduction)
*   **Sachdeva, "Fundamentals of Engineering, Heat and Mass Transfer," 3rd Ed.** (Chapter 3: Unsteady State Heat Conduction)
*   **Kothandaraman, "Fundamentals of Heat and Mass Transfer," 2006.** (Chapter 4: Unsteady State Heat Conduction)

---

### 2. Governing Equation for Unsteady State Conduction

The fundamental governing equation for unsteady state conduction in one dimension is derived from the conservation of energy and Fourier's Law.

**Key Concepts:**

*   **Heat Diffusion Equation:** The mathematical expression that describes the unsteady heat conduction process.
    *   **For one-dimensional, constant thermal conductivity ($k$), no heat generation, and constant density ($\rho$) and specific heat ($c_p$):**
        $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$
        Where:
        *   $T$ is temperature
        *   $t$ is time
        *   $x$ is spatial coordinate
        *   $\alpha = \frac{k}{\rho c_p}$ is the **thermal diffusivity** (a crucial property for unsteady analysis).

    *   **For three-dimensional conduction:**
        $\frac{\partial T}{\partial t} = \alpha \left( \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} \right)$

*   **Thermal Diffusivity ($\alpha$):** A measure of how quickly a material's temperature changes when exposed to a change in its thermal environment. It represents the ability of a material to conduct heat relative to its ability to store heat. Higher thermal diffusivity means the material responds more quickly to temperature changes.

**Important Point:** The thermal diffusivity ($\alpha$) is a material property that is essential for analyzing unsteady state heat transfer. Its units are typically $m^2/s$.

**Example:** Consider a thick metal plate being suddenly exposed to a higher ambient temperature. The surface temperature will increase rapidly, and this temperature change will propagate into the interior of the plate over time. The rate at which this happens is governed by the thermal diffusivity of the metal.

---

### 3. Dimensionless Parameters in Unsteady State Heat Transfer

To simplify the analysis of transient heat transfer problems, dimensionless parameters are often used.

**Key Concepts:**

*   **Biot Number (Bi):** Represents the ratio of internal thermal resistance to the external convective resistance.
    *   $Bi = \frac{hL_c}{k}$
        Where:
        *   $h$ is the convective heat transfer coefficient.
        *   $L_c$ is the characteristic length (e.g., for a plane wall, $L_c = L/2$; for a cylinder, $L_c = r_o/2$; for a sphere, $L_c = r_o/3$).
        *   $k$ is the thermal conductivity of the solid.

    *   **Significance of Biot Number:**
        *   **Bi << 0.1:** Internal temperature gradients are negligible. Lumped system analysis can be applied.
        *   **Bi >> 0.1:** Internal temperature gradients are significant. Analytical or numerical solutions are required.

*   **Fourier Number (Fo) or Dimensionless Time ($\tau$):** Represents the ratio of heat conducted through the body to the heat stored in the body. It indicates the degree of penetration of thermal effects into the body.
    *   $Fo = \frac{\alpha t}{L_c^2}$
        Where:
        *   $\alpha$ is the thermal diffusivity.
        *   $t$ is the time.
        *   $L_c$ is the characteristic length.

    *   **Significance of Fourier Number:**
        *   **Fo << 0.2:** Thermal effects have not penetrated far into the body.
        *   **Fo >> 1:** Thermal effects have penetrated deep into the body, approaching steady-state conditions.

**Relevance to Course Outcomes:**

*   **CO2:** Understanding these dimensionless numbers helps in characterizing and comparing the heat transfer behavior of different materials and geometries under transient conditions, aiding in the evaluation of their thermal properties.

**Reference Textbooks:**

*   **Cengel & Ghajar, "Heat Transfer: A Practical Approach," 4th Ed.** (Chapter 4: Transient Heat Conduction)
*   **Holman, "Heat Transfer," 10th Ed.** (Chapter 5: Transient Heat Conduction)

---

### 4. Lumped System Analysis

When the internal resistance to heat conduction is significantly smaller than the external resistance to convection, the temperature within the solid can be considered uniform at any given time. This simplification is called the **lumped system analysis**.

**Key Concepts:**

*   **Condition for Lumped System Analysis:** $Bi = \frac{hL_c}{k} \leq 0.1$

*   **Governing Equation (Lumped System):**
    The energy balance on a differential volume element leads to:
    $m c_p \frac{dT}{dt} = -h A (T - T_\infty)$
    Where:
    *   $m$ is the mass of the object.
    *   $c_p$ is the specific heat.
    *   $A$ is the surface area exposed to convection.
    *   $T$ is the temperature of the object.
    *   $T_\infty$ is the ambient fluid temperature.

*   **Solution of the Lumped System Equation:**
    Integrating the above equation with the initial condition $T(t=0) = T_i$ yields:
    $\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-(hA/mc_p)t}$
    Recognizing that $\tau = mc_p / (\rho V) = mc_p / (\rho A L_c) = c_p / (\rho \alpha L_c)$ (for specific geometries), and $t_{char} = mc_p/(hA)$, the equation can be written as:
    $\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-t/t_{char}} = e^{-(hA/mc_p)t}$
    or
    $\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-Bi \cdot Fo}$

**Important Points:**

*   Lumped system analysis is a **first-order approximation**. It is valid only when temperature variations within the body are negligible.
*   The term $(hA/mc_p)$ is the **time constant** of the system.

**Example:** A small metal ball is dropped into hot oil. If the Biot number is low (e.g., small diameter, high thermal conductivity of metal, low convection coefficient), we can assume the ball's temperature is uniform throughout its heating process.

**Reference Textbooks:**

*   **Cengel & Ghajar, "Heat Transfer: A Practical Approach," 4th Ed.** (Chapter 4: Transient Heat Conduction)
*   **Sachdeva, "Fundamentals of Engineering, Heat and Mass Transfer," 3rd Ed.** (Chapter 3: Unsteady State Heat Conduction)

---

### 5. Heisler Charts and One-Term Approximation

For cases where the Biot number is not small (i.e., $Bi > 0.1$), temperature gradients within the body are significant. In such situations, analytical solutions can be obtained using techniques like separation of variables, often leading to infinite series.

**Key Concepts:**

*   **Heisler Charts:** Graphical representations of the solutions to the transient conduction equation for simple geometries (plane walls, cylinders, spheres) under convective boundary conditions. They plot dimensionless temperature ($\theta/\theta_0$) versus Fourier number for various Biot numbers.
    *   **Dimensionless Temperature:** $\frac{T(x,t) - T_\infty}{T_i - T_\infty}$ for plane walls.
    *   **Dimensionless Temperature:** $\frac{T(r,t) - T_\infty}{T_i - T_\infty}$ for cylinders and spheres.
    *   The charts provide temperature at the center, surface, and intermediate locations.

*   **One-Term Approximation:** For large Fourier numbers ($Fo > 0.2$), the infinite series solutions often converge rapidly, and the first term of the series provides a good approximation of the temperature distribution.
    *   For a plane wall with convective boundary conditions:
        $\frac{T(x,t) - T_\infty}{T_i - T_\infty} \approx C_1 e^{-\lambda_1^2 Fo} \cos(\lambda_1 \frac{x}{L})$
        Where $C_1$ and $\lambda_1$ are functions of the Biot number ($Bi = hL/k$). These values are tabulated in textbooks or can be obtained from charts.

**Relevance to Course Outcomes:**

*   **CO2:** Heisler charts and the one-term approximation provide methods to calculate temperatures in transient conduction, which can be used to infer thermal properties of materials by comparing experimental data with theoretical predictions.

**Example:** When quenching a large metal block in a cooling fluid, the Biot number might be higher, necessitating the use of Heisler charts or one-term approximations to determine the internal temperature at different times.

**Reference Textbooks:**

*   **Cengel & Ghajar, "Heat Transfer: A Practical Approach," 4th Ed.** (Chapter 4: Transient Heat Conduction)
*   **Holman, "Heat Transfer," 10th Ed.** (Chapter 5: Transient Heat Conduction)
*   **Incropera & DeWitt, "Fundamentals of Heat and Mass Transfer," 7th Ed.** (Chapter 4: One-Dimensional, Transient Conduction)

---

### 6. Experimental Measurement of Unsteady State Conduction

In the laboratory, unsteady state conduction is typically investigated by applying a known thermal disturbance to a material sample and measuring the temperature response over time.

**Key Concepts and Apparatus:**

*   **Material Sample:** A solid object with well-defined geometry (e.g., cylinder, sphere, rectangular block) made of the material whose thermal properties are to be investigated.
*   **Heating/Cooling Mechanism:**
    *   **For heating:** A controlled heat source (e.g., electric heater, hot plate, immersion heater in a fluid).
    *   **For cooling:** Immersion in a fluid maintained at a constant lower temperature, or forced convection cooling.
*   **Temperature Sensors:** Thermocouples, resistance temperature detectors (RTDs), or thermistors placed at various locations within the material sample.
*   **Data Acquisition System:** To record temperature readings at regular time intervals.

**Experimental Procedure (General):**

1.  **Prepare the Sample:** Ensure the sample has a known geometry and that temperature sensors are embedded or attached at specified positions.
2.  **Establish Initial Conditions:** Allow the sample to reach thermal equilibrium with the surrounding environment, recording the initial uniform temperature ($T_i$).
3.  **Apply Thermal Disturbance:** Suddenly expose one surface (or the entire object) to a different temperature environment (e.g., immerse in hot fluid, heat one surface).
4.  **Record Temperature vs. Time:** Continuously record the temperatures at different points within the sample as a function of time using the data acquisition system.
5.  **Determine Properties:** Analyze the recorded data to determine material properties like thermal diffusivity.

**Methods for Determining Thermal Diffusivity from Experimental Data:**

*   **Lumped System Analysis:** If the Biot number is estimated to be less than 0.1, then:
    *   Plot $\ln\left(\frac{T(t) - T_\infty}{T_i - T_\infty}\right)$ versus time ($t$). The plot should be a straight line.
    *   The slope of this line is $-(hA/mc_p)$.
    *   If the convective heat transfer coefficient ($h$) is known or can be estimated, the thermal diffusivity ($\alpha$) can be calculated using: $\alpha = \frac{k}{\rho c_p}$, where $k$ is also needed. **Alternatively, if you can independently determine $k$, $\rho$, and $c_p$, you can verify the applicability of lumped analysis and then the accuracy of your measurements.**

*   **Using Heisler Charts or One-Term Approximation:**
    *   If temperature is measured at the center of the object, you can use Heisler charts or the one-term approximation solution for the center temperature.
    *   Match the experimental temperature-time data to the theoretical curves by adjusting the Fourier number ($Fo$).
    *   From the matched $Fo$ and the known characteristic length ($L_c$), calculate the thermal diffusivity: $\alpha = Fo \frac{L_c^2}{t}$.

*   **Other Methods (e.g., Flash Method):** More advanced techniques like the laser flash method are specifically designed for rapid and accurate measurement of thermal diffusivity. In this method, one side of a thin sample is subjected to a short energy pulse, and the temperature rise on the opposite side is monitored.

**Relevance to Course Outcomes:**

*   **CO1 & CO2:** This section directly relates to **CO1 (Measure thermo-physical properties of solid, liquid and gaseous fuels)** and **CO2 (Evaluate thermal properties of materials in conduction, convection and radiation)**, as the primary goal of these experiments is to measure and evaluate thermal properties of materials.

**Important Points to Remember:**

*   Accurate placement and calibration of temperature sensors are crucial.
*   Precise knowledge of the material sample's geometry, mass, density, and specific heat is required for accurate calculations.
*   The convective heat transfer coefficient ($h$) can be a significant source of error if not accurately known or estimated.
*   Ensure the boundary conditions (e.g., constant surface temperature, convection) are well-defined and matched by the experimental setup.

**Example Experiment:**

**Experiment: Determination of Thermal Diffusivity of a Metal Cylinder using Transient Cooling**

**Objective:** To determine the thermal diffusivity of a metallic cylinder.

**Apparatus:**
*   Cylinder made of the test material (e.g., aluminum, brass).
*   Thermocouples inserted at the center and at a radial position (e.g., midpoint between center and surface).
*   A thermostat-controlled water bath or oil bath capable of maintaining a constant elevated temperature.
*   A stirrer for uniform bath temperature.
*   Data logger.

**Procedure:**
1.  Heat the cylinder uniformly to a known initial temperature ($T_i$).
2.  Record the initial temperature at all sensor locations.
3.  Quickly immerse the heated cylinder into the pre-heated fluid bath maintained at a constant temperature ($T_\infty$).
4.  Record the temperature at the center ($T_c$) and the radial position ($T_r$) at regular intervals until the cylinder reaches thermal equilibrium with the bath.

**Analysis:**
1.  **Calculate Biot Number:** Estimate $h$ for the fluid used. Using known $k$ and characteristic length $L_c = r_o/2$ for a cylinder, calculate $Bi$. If $Bi \leq 0.1$, lumped system analysis might be applicable for the outer temperature, but internal gradients will exist.
2.  **One-Term Approximation for Cylinder:**
    The temperature at a radial position $r$ within a cylinder cooled by convection from its surface is given by (for $Fo > 0.2$):
    $\frac{T(r,t) - T_\infty}{T_i - T_\infty} \approx C_1 e^{-\lambda_1^2 Fo} J_0(\lambda_1 \frac{r}{r_o})$
    Where $J_0$ is the Bessel function of the first kind of order zero, and $C_1$, $\lambda_1$ are parameters dependent on $Bi = hr_o/k$.
3.  **Data Matching:** Plot the experimental temperature readings from the center and radial positions against time. Compare these plots with the theoretical curves generated using the one-term approximation for different values of $Fo$ (and thus $\alpha$, since $L_c$ and $t$ are known).
4.  **Determine $\alpha$:** The value of $\alpha$ that best matches the experimental data is the thermal diffusivity of the material.

**Important Considerations for the Experiment:**
*   The thermal conductivity ($k$) and density ($\rho$) and specific heat ($c_p$) of the cylinder material should be known or measured independently for proper calculation of $Bi$ and for cross-verification.
*   The fluid bath temperature ($T_\infty$) must be kept constant and uniform.
*   The time interval for data logging should be sufficiently small to capture the transient behavior.

---

### 7. Practice Questions and Exercises

**Question 1:**
A small, thin copper disk of radius 1 cm and thickness 2 mm is initially at 200°C. It is suddenly exposed to a convective environment at 20°C with a heat transfer coefficient of 50 W/m²K.
(a) Calculate the Biot number for the disk.
(b) Determine if lumped system analysis can be used.
(c) If lumped system analysis is applicable, find the time required for the disk to cool down to 50°C.
(d) If lumped system analysis is not applicable, explain how you would proceed to find the cooling time.

**Given Data:**
*   Copper: $k = 400$ W/mK, $\rho = 8933$ kg/m³, $c_p = 385$ J/kgK.
*   Disk radius: $r_o = 0.01$ m, thickness $L = 0.002$ m.

**Answer to Question 1:**

(a) **Characteristic Length ($L_c$):** For a thin disk with convection from both surfaces, the characteristic length is half the thickness: $L_c = L/2 = 0.002 \text{ m} / 2 = 0.001$ m. (Note: Some sources use the hydraulic diameter for more complex shapes, but for a thin disk, half the thickness is common for convection from both sides).

**Biot Number ($Bi$):**
$Bi = \frac{h L_c}{k} = \frac{(50 \text{ W/m}^2\text{K})(0.001 \text{ m})}{400 \text{ W/mK}} = \frac{0.05}{400} = 0.000125$

(b) **Applicability of Lumped System Analysis:**
Since $Bi = 0.000125 \leq 0.1$, lumped system analysis is applicable.

(c) **Time to Cool to 50°C:**
Using the lumped system equation: $\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-(hA/mc_p)t}$

First, calculate the term $(hA/mc_p)$:
*   Surface Area ($A$) = $2 \times (\pi r_o^2)$ (for both sides) + $2 \pi r_o L$ (for the edge).
    For a thin disk, the area of the edges is much smaller than the top/bottom surfaces. We can approximate A as the area of the two faces: $A \approx 2 \times \pi (0.01 \text{ m})^2 = 0.0006283 \text{ m}^2$.
*   Volume ($V$) = $\pi r_o^2 L = \pi (0.01 \text{ m})^2 (0.002 \text{ m}) = 6.283 \times 10^{-7} \text{ m}^3$.
*   Mass ($m$) = $\rho V = (8933 \text{ kg/m}^3) \times (6.283 \times 10^{-7} \text{ m}^3) = 0.005615$ kg.

Now, $\frac{hA}{mc_p} = \frac{(50 \text{ W/m}^2\text{K})(0.0006283 \text{ m}^2)}{(0.005615 \text{ kg})(385 \text{ J/kgK})} = \frac{0.031415}{2.162775} \approx 0.014526 \text{ s}^{-1}$.

The equation becomes: $\frac{50 - 20}{200 - 20} = e^{-0.014526 t}$
$\frac{30}{180} = e^{-0.014526 t}$
$0.16667 = e^{-0.014526 t}$

Taking the natural logarithm of both sides:
$\ln(0.16667) = -0.014526 t$
$-1.7917 = -0.014526 t$
$t = \frac{-1.7917}{-0.014526} \approx 123.34$ seconds.

(d) **If lumped system analysis were not applicable:**
If $Bi > 0.1$, then internal temperature gradients would be significant. We would need to use analytical solutions involving infinite series or numerical methods. Specifically, for geometries like cylinders or spheres, Heisler charts would be consulted. We would calculate the Fourier number ($Fo = \alpha t / L_c^2$) and use the charts to find the dimensionless temperature ratio at the measured location (e.g., center) for the given Biot number. By matching the experimental temperature ratio to the theoretical curve on the chart, we could determine the Fourier number, and consequently, the thermal diffusivity ($\alpha$).

---

**Question 2:**
A long cylindrical rod of radius $r_o = 0.05$ m is initially at a uniform temperature $T_i = 300^\circ$C. It is suddenly plunged into a liquid bath at $T_\infty = 20^\circ$C with a convective heat transfer coefficient $h = 100$ W/m²K. If the thermal diffusivity of the rod material is $\alpha = 5 \times 10^{-6}$ m²/s and thermal conductivity $k = 15$ W/mK, what is the temperature at the center of the rod after 10 minutes?

**Given Data:**
*   $r_o = 0.05$ m
*   $T_i = 300^\circ$C
*   $T_\infty = 20^\circ$C
*   $h = 100$ W/m²K
*   $\alpha = 5 \times 10^{-6}$ m²/s
*   $k = 15$ W/mK
*   $t = 10$ minutes = 600 seconds

**Answer to Question 2:**

1.  **Calculate Biot Number ($Bi$):**
    Characteristic length for a cylinder is $L_c = r_o/2 = 0.05 \text{ m} / 2 = 0.025$ m.
    $Bi = \frac{h L_c}{k} = \frac{(100 \text{ W/m}^2\text{K})(0.025 \text{ m})}{15 \text{ W/mK}} = \frac{2.5}{15} \approx 0.1667$

2.  **Calculate Fourier Number ($Fo$):**
    $Fo = \frac{\alpha t}{L_c^2} = \frac{(5 \times 10^{-6} \text{ m}^2/\text{s})(600 \text{ s})}{(0.025 \text{ m})^2} = \frac{0.003}{0.000625} = 4.8$

3.  **Determine Temperature at the Center:**
    Since $Bi = 0.1667 > 0.1$, lumped system analysis is not valid. We need to use the one-term approximation or Heisler charts. The question asks for the temperature at the center ($r=0$).

    The one-term approximation for the center temperature of a cylinder is:
    $\frac{T(0,t) - T_\infty}{T_i - T_\infty} \approx C_1 e^{-\lambda_1^2 Fo}$

    We need to find the values of $C_1$ and $\lambda_1$ corresponding to $Bi = 0.1667$. These are typically found in tables or from empirical relations.

    Looking up values for $Bi \approx 0.1667$:
    *   $\lambda_1 \approx 0.55$ (radians)
    *   $C_1 \approx 1.07$
    *   $\lambda_1^2 \approx 0.3025$

    Now, substitute these values into the equation:
    $\frac{T(0,600\text{ s}) - 20}{300 - 20} \approx 1.07 e^{-(0.3025)(4.8)}$
    $\frac{T(0,600\text{ s}) - 20}{280} \approx 1.07 e^{-1.452}$
    $\frac{T(0,600\text{ s}) - 20}{280} \approx 1.07 \times 0.2338$
    $\frac{T(0,600\text{ s}) - 20}{280} \approx 0.2502$

    $T(0,600\text{ s}) - 20 \approx 0.2502 \times 280$
    $T(0,600\text{ s}) - 20 \approx 70.056$
    $T(0,600\text{ s}) \approx 90.06^\circ$C

    **Therefore, the temperature at the center of the rod after 10 minutes is approximately 90.1°C.**

---

### 8. Summary and Important Points to Remember

*   **Unsteady State Conduction:** Temperature changes with time and position.
*   **Heat Diffusion Equation:** Governs the temperature distribution in unsteady conduction.
*   **Thermal Diffusivity ($\alpha = k / \rho c_p$):** A key material property indicating how quickly temperature changes propagate.
*   **Dimensionless Parameters:**
    *   **Biot Number ($Bi = hL_c/k$):** Ratio of internal to external resistance. $Bi \leq 0.1$ for lumped analysis.
    *   **Fourier Number ($Fo = \alpha t / L_c^2$):** Ratio of heat conducted to heat stored. Indicates thermal penetration.
*   **Lumped System Analysis:** Valid for $Bi \leq 0.1$. Assumes uniform temperature within the object.
*   **Heisler Charts & One-Term Approximation:** Used when $Bi > 0.1$ to account for internal temperature gradients.
*   **Experimental Measurement:** Involves applying a thermal disturbance and recording temperature over time.
*   **Determining $\alpha$:** Can be done by matching experimental data to theoretical solutions (lumped, Heisler charts) or by using specialized experimental techniques.
*   **Accuracy:** Depends on precise measurements of geometry, temperatures, time, and accurate estimation of convective coefficients.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
