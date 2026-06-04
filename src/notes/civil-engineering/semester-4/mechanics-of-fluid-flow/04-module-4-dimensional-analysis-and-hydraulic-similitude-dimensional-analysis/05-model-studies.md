---
title: "model studies"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 4: Dimensional  Analysis and Hydraulic similitude: Dimensional  analysis"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a82"
status: "completed"
scrapedAt: "2026-05-20T18:46:42.069Z"
---
# Mechanics of Fluid Flow: Module 4 - Dimensional Analysis and Hydraulic Similitude: Dimensional Analysis

## Topic: Model Studies

---

### 1. Introduction to Model Studies

**What are Model Studies?**

Model studies are experimental investigations conducted on scaled-down (or sometimes scaled-up) replicas of actual engineering systems or phenomena. The primary purpose is to predict the behavior of the full-scale system (prototype) by studying the behavior of the model.

**Why are Model Studies Necessary?**

*   **Cost-Effectiveness:** Building and testing full-scale prototypes can be prohibitively expensive and time-consuming. Models offer a more economical approach.
*   **Safety:** Testing extreme conditions (e.g., high pressures, high velocities) on a full-scale system can be dangerous. Models allow for safe experimentation.
*   **Unforeseen Problems:** Models can reveal design flaws or operational issues that might not be apparent from theoretical calculations alone.
*   **Optimization:** Different design configurations can be tested on models to find the most efficient or effective solution.
*   **Lack of Theoretical Solutions:** For complex fluid flow problems, analytical solutions are often unavailable. Model studies provide empirical data.

---

### 2. The Concept of Similitude

**Similitude** is the fundamental principle underlying model studies. It refers to the condition where the model and the prototype are geometrically, kinematically, and dynamically similar.

**Types of Similitude:**

*   **Geometric Similitude:**
    *   **Definition:** The model and prototype are identical in shape, but differ in size. All linear dimensions of the model are in a constant ratio to the corresponding dimensions of the prototype.
    *   **Key Concept:** **Scale Ratio ($\lambda$)**: This is the ratio of a linear dimension of the prototype to the corresponding linear dimension of the model.
        *   $\lambda_L = \frac{L_p}{L_m}$ (where $L_p$ is prototype length, $L_m$ is model length)
    *   **Example:** If a 1:10 scale model of an airplane wing is used, it means the wing on the model is 1/10th the size of the actual wing.
    *   **Requirement:** $\frac{L_p}{L_m} = \frac{W_p}{W_m} = \frac{H_p}{H_m} = \dots = \lambda_L$ (where W is width, H is height)

*   **Kinematic Similitude:**
    *   **Definition:** The ratio of velocities at corresponding points in the model and prototype is constant. This means the flow patterns are geometrically similar.
    *   **Key Concept:** **Velocity Ratio ($\lambda_V$)**: The ratio of velocities at corresponding points.
        *   $\lambda_V = \frac{V_p}{V_m}$ (where $V_p$ is prototype velocity, $V_m$ is model velocity)
    *   **Requirement:** The velocity vector at corresponding points in the model and prototype must be proportional to each other, and the direction of flow must be the same at corresponding points.
    *   **Relationship with Geometric Similitude:** For kinematic similarity, the ratio of time intervals at corresponding points must also be constant: $\frac{T_p}{T_m} = \lambda_T$. This leads to $\lambda_V = \frac{\lambda_L}{\lambda_T}$.

*   **Dynamic Similitude:**
    *   **Definition:** The ratio of forces acting at corresponding points in the model and prototype is constant. This is the most crucial type of similitude for accurately predicting prototype behavior, as it ensures the governing differential equations are satisfied in both cases.
    *   **Key Concept:** **Force Ratio ($\lambda_F$)**: The ratio of forces at corresponding points.
        *   $\lambda_F = \frac{F_p}{F_m}$
    *   **Requirement:** The forces acting at corresponding points in the model and prototype must be proportional, and their directions must be the same. This is achieved by ensuring that the ratios of inertia forces to other forces (viscous, gravitational, elastic, surface tension) are the same in both the model and the prototype.
    *   **Achieved via Dimensionless Numbers:** Dynamic similitude is achieved by matching the ratios of different types of forces, which are expressed as dimensionless numbers.

---

### 3. Dimensionless Numbers in Model Studies

Dimensionless numbers are ratios of forces that characterize different flow regimes. For dynamic similitude, the relevant dimensionless numbers must be equal for both the model and the prototype.

**Key Dimensionless Numbers and their Significance:**

*   **Reynolds Number (Re):**
    *   **Definition:** Ratio of inertia forces to viscous forces.
    *   **Formula:** $Re = \frac{\rho V L}{\mu} = \frac{V L}{\nu}$
        *   $\rho$: Density
        *   $V$: Characteristic velocity
        *   $L$: Characteristic length
        *   $\mu$: Dynamic viscosity
        *   $\nu$: Kinematic viscosity ($\nu = \mu/\rho$)
    *   **Significance:** Crucial for flows where viscous effects are important, such as flow in pipes, around submerged bodies (e.g., ships, submarines, aircraft wings).
        *   **Low Re:** Laminar flow (viscous forces dominate).
        *   **High Re:** Turbulent flow (inertia forces dominate).
    *   **Matching Condition for Dynamic Similitude:** $Re_p = Re_m$

*   **Froude Number (Fr):**
    *   **Definition:** Ratio of inertia forces to gravitational forces.
    *   **Formula:** $Fr = \frac{V}{\sqrt{gL}}$
        *   $g$: Acceleration due to gravity
        *   $L$: Characteristic length (e.g., depth of flow, diameter)
    *   **Significance:** Important for flows where gravity plays a significant role, particularly open channel flow and flows with free surfaces (e.g., ship wave resistance, spillways, canal flow).
        *   **Fr < 1:** Subcritical flow (tranquil flow).
        *   **Fr = 1:** Critical flow.
        *   **Fr > 1:** Supercritical flow (rapid flow).
    *   **Matching Condition for Dynamic Similitude:** $Fr_p = Fr_m$

*   **Mach Number (M):**
    *   **Definition:** Ratio of flow velocity to the speed of sound in the fluid.
    *   **Formula:** $M = \frac{V}{c}$
        *   $c$: Speed of sound in the fluid
    *   **Significance:** Crucial for high-speed flows where compressibility effects are significant (e.g., supersonic aircraft, gas turbines).
        *   **M < 1:** Subsonic flow.
        *   **M = 1:** Sonic flow.
        *   **M > 1:** Supersonic flow.
    *   **Matching Condition for Dynamic Similitude:** $M_p = M_m$

*   **Weber Number (We):**
    *   **Definition:** Ratio of inertia forces to surface tension forces.
    *   **Formula:** $We = \frac{\rho V^2 L}{\sigma}$
        *   $\sigma$: Surface tension
    *   **Significance:** Important for flows where surface tension effects are dominant, such as droplet formation, atomization, and bubble dynamics.
    *   **Matching Condition for Dynamic Similitude:** $We_p = We_m$

*   **Cauchy Number (Ca) / Wave Number (W):**
    *   **Definition:** Ratio of inertia forces to elastic forces (compressibility effects).
    *   **Formula:** $Ca = \frac{\rho V^2}{K} = M^2$ (where $K$ is the bulk modulus of elasticity)
    *   **Significance:** Similar to Mach number, relates to compressibility. Often used in conjunction with Mach number.

*   **Euler Number (Eu):**
    *   **Definition:** Ratio of pressure forces to inertia forces.
    *   **Formula:** $Eu = \frac{\Delta p}{\rho V^2}$
        *   $\Delta p$: Pressure difference
    *   **Significance:** Relates to pressure drop in a flow. It is related to the drag coefficient.
    *   **Matching Condition for Dynamic Similitude:** $Eu_p = Eu_m$

---

### 4. Establishing Similitude and Scaling Laws

For true dynamic similitude, **all** relevant dimensionless numbers must be matched between the model and the prototype. However, in many practical cases, it is impossible to match all of them simultaneously due to conflicting requirements.

**The Challenge of Multiple Dimensionless Numbers:**

*   If only one dimensionless number governs the phenomenon, then matching that number in the model is sufficient.
*   If two or more dimensionless numbers are relevant, it becomes difficult to achieve full dynamic similitude. For example, matching both Reynolds number and Froude number might require different model velocities, which is not possible.

**The Strategy:**

1.  **Identify the Dominant Forces:** Determine which forces are most significant for the particular flow phenomenon.
2.  **Select the Governing Dimensionless Number(s):** Based on the dominant forces, choose the dimensionless number(s) that must be matched.
3.  **Design the Model Experiment:** Use the scaling laws derived from the governing dimensionless numbers to determine the required model dimensions, fluid properties, and flow conditions.

**Example Scenario: Ship Model Testing**

When testing a ship model in a towing tank, both viscous drag (Reynolds number) and wave resistance (Froude number) are important.

*   **Reynolds Number Requirement:** $Re_p = Re_m \implies \frac{V_p L_p}{\nu_p} = \frac{V_m L_m}{\nu_m}$
*   **Froude Number Requirement:** $Fr_p = Fr_m \implies \frac{V_p}{\sqrt{gL_p}} = \frac{V_m}{\sqrt{gL_m}}$

From the Froude number requirement, we get the **model-prototype velocity ratio:**
$\frac{V_p}{V_m} = \sqrt{\frac{L_p}{L_m}} = \sqrt{\lambda_L}$

If we use this velocity ratio to satisfy Froude similarity, let's check the Reynolds number ratio:
$\frac{Re_p}{Re_m} = \frac{V_p L_p \nu_m}{V_m L_m \nu_p} = \left(\frac{V_p}{V_m}\right) \left(\frac{L_p}{L_m}\right) \left(\frac{\nu_m}{\nu_p}\right) = \left(\sqrt{\lambda_L}\right) (\lambda_L) \left(\frac{\nu_m}{\nu_p}\right) = \lambda_L^{3/2} \left(\frac{\nu_m}{\nu_p}\right)$

If we use water for both model and prototype, $\nu_m = \nu_p$, then $\frac{Re_p}{Re_m} = \lambda_L^{3/2}$.
Since $\lambda_L$ is typically large (e.g., 10 to 100), $\lambda_L^{3/2}$ is even larger. This means $Re_m$ will be significantly lower than $Re_p$.

**How to Address This Conflict:**

*   **Purely Froude-Controlled:** For large ships, wave resistance is often the dominant component of total resistance, especially at higher speeds. In such cases, Froude similitude is prioritized, and the Reynolds number mismatch is accepted. The viscous drag component is then calculated separately, often using empirical correlations or experiments on smaller sections of the hull.
*   **Both Viscous and Wave Effects Significant:** For smaller vessels or specific operating conditions, both effects might be critical. This might require:
    *   Using a different fluid for the model (e.g., air) to alter the kinematic viscosity and achieve both Re and Fr similarity, which is rarely practical.
    *   Conducting tests in different facilities: for example, a towing tank for wave effects and a wind tunnel for viscous effects.
    *   Accepting the mismatch and applying appropriate corrections.

---

### 5. Types of Model Studies

Model studies can be broadly classified based on the nature of the forces that are being simulated.

*   **Rigorously Similar Models (True Models):**
    *   **Definition:** Models where all relevant dimensionless numbers are matched between the model and prototype.
    *   **Possibility:** Only possible when a single dimensionless number governs the phenomenon or when it's possible to match all governing dimensionless numbers.
    *   **Example:** Pipe flow where only Reynolds number is dominant.

*   **Distorted Models:**
    *   **Definition:** Models where geometric similarity is not maintained in all directions. Different scale ratios are used for horizontal and vertical dimensions.
    *   **When Used:** In hydraulic models of rivers, estuaries, and dams, where it is impractical to maintain geometric similarity due to very large horizontal scales and relatively small vertical scales (e.g., river depth).
    *   **Implication:** Kinematic and dynamic similitude can only be achieved for certain aspects of the flow. Special considerations are needed for scaling results.
    *   **Example:** A river model might have a horizontal scale of 1:1000 and a vertical scale of 1:100.

*   **Apparatus Models:**
    *   **Definition:** Models used to study the performance of specific fluid machinery like pumps, turbines, fans, and propellers.
    *   **Goal:** To predict the efficiency, power output, and head developed by the prototype based on model performance.
    *   **Governing Numbers:** Reynolds number, Froude number, and sometimes specific dimensionless numbers related to the machinery itself (e.g., specific speed).
    *   **Scaling:** Often based on ensuring similarity in terms of rotational speed ratio or flow coefficient.

---

### 6. Applications of Model Studies

Model studies are used across a wide range of engineering disciplines:

*   **Hydraulic Engineering:**
    *   River regulation and flood control (levees, dams, spillways).
    *   Harbor and coastal engineering (wave reflection, sediment transport, breakwaters).
    *   Canal design and flow control.
    *   Culvert and bridge pier design.
    *   Water supply and sewage systems.
*   **Aerospace Engineering:**
    *   Aircraft and spacecraft design (aerodynamic forces, lift, drag).
    *   Wind tunnel testing of wings, fuselages, and complete aircraft.
    *   Propeller and jet engine performance.
*   **Naval Architecture:**
    *   Ship hull design (resistance, wave making, propulsion).
    *   Submarine design.
    *   Offshore structures.
*   **Mechanical Engineering:**
    *   Pump and turbine performance.
    *   Fan and blower efficiency.
    *   Heat exchanger performance.
    *   Valve and fitting performance.
*   **Civil Engineering:**
    *   Wind loads on tall buildings and bridges.
    *   Traffic flow analysis.

---

### 7. Practice Questions and Exercises

**Question 1:**
A ship model is tested in a towing tank. The ship is 100 m long, and the model is 5 m long. The ship travels at a speed of 20 knots.
(a) What speed should the model be towed at to achieve Froude similitude?
(b) If the kinematic viscosity of water is the same for the model and prototype, what is the ratio of Reynolds numbers?
(c) Is it possible to achieve dynamic similitude for both Froude and Reynolds numbers simultaneously in this case? Explain why or why not.

**Given:**
*   $L_p = 100$ m
*   $L_m = 5$ m
*   $V_p = 20$ knots

**Assume:**
*   1 knot $\approx$ 0.5144 m/s
*   $\nu_p = \nu_m$ (kinematic viscosity is the same)

**Solution:**
(a) **Froude Similitude:**
We need $Fr_p = Fr_m$.
$\frac{V_p}{\sqrt{gL_p}} = \frac{V_m}{\sqrt{gL_m}}$
$\frac{V_m}{V_p} = \sqrt{\frac{L_m}{L_p}}$
$V_m = V_p \sqrt{\frac{L_m}{L_p}}$
$V_p = 20 \text{ knots} = 20 \times 0.5144 \text{ m/s} \approx 10.288 \text{ m/s}$
$\frac{L_m}{L_p} = \frac{5}{100} = 0.05$
$V_m = 10.288 \text{ m/s} \times \sqrt{0.05}$
$V_m \approx 10.288 \times 0.2236 \text{ m/s}$
$V_m \approx 2.302 \text{ m/s}$
Converting back to knots:
$V_m (\text{knots}) = \frac{2.302}{0.5144} \approx 4.475 \text{ knots}$

**Answer (a):** The model should be towed at approximately 4.475 knots.

(b) **Ratio of Reynolds Numbers:**
$Re = \frac{VL}{\nu}$
$\frac{Re_p}{Re_m} = \frac{V_p L_p \nu_m}{V_m L_m \nu_p}$
Since $\nu_m = \nu_p$:
$\frac{Re_p}{Re_m} = \frac{V_p L_p}{V_m L_m} = \left(\frac{V_p}{V_m}\right) \left(\frac{L_p}{L_m}\right)$
From Froude similitude, $\frac{V_p}{V_m} = \sqrt{\frac{L_p}{L_m}} = \sqrt{\frac{100}{5}} = \sqrt{20} \approx 4.472$
$\frac{Re_p}{Re_m} = (4.472) \times \left(\frac{100}{5}\right) = 4.472 \times 20 = 89.44$

**Answer (b):** The ratio of Reynolds numbers ($Re_p / Re_m$) is approximately 89.44.

(c) **Possibility of Simultaneous Similitude:**
No, it is not possible to achieve dynamic similitude for both Froude and Reynolds numbers simultaneously.
**Explanation:**
For Froude similitude, the velocity ratio is $V_p/V_m = \sqrt{L_p/L_m}$.
For Reynolds similitude, the velocity ratio is $V_p/V_m = (Re_p/Re_m) \times (L_m/L_p) \times (\nu_p/\nu_m)$.
If we match Froude numbers, the Reynolds numbers are not matched (as shown in part b, $Re_p/Re_m \neq 1$). If we tried to match Reynolds numbers, the required velocity ratio would be different from that required for Froude similitude, leading to a violation of Froude similarity. Since the required velocity ratios are different for matching these two dimensionless numbers, achieving both simultaneously is impossible when using the same fluid for the model and prototype.

---

**Question 2:**
In a model study of flow over a spillway, the characteristic length of the prototype is 50 m, and the flow velocity is 5 m/s. The model has a characteristic length of 1 m.
(a) What should be the velocity of the flow in the model to satisfy Froude similitude?
(b) If the flow in the prototype is turbulent and has a Reynolds number of $2 \times 10^6$, what is the Reynolds number for the model under the conditions found in (a)? Is the model flow likely to be turbulent? Assume the kinematic viscosity of water is $1 \times 10^{-6} m^2/s$.

**Solution:**
(a) **Froude Similitude:**
$Fr_p = Fr_m \implies \frac{V_p}{\sqrt{gL_p}} = \frac{V_m}{\sqrt{gL_m}}$
$V_m = V_p \sqrt{\frac{L_m}{L_p}}$
$V_p = 5$ m/s
$L_p = 50$ m
$L_m = 1$ m
$V_m = 5 \text{ m/s} \times \sqrt{\frac{1}{50}}$
$V_m = 5 \text{ m/s} \times \sqrt{0.02}$
$V_m = 5 \text{ m/s} \times 0.1414$
$V_m \approx 0.707 \text{ m/s}$

**Answer (a):** The velocity of the flow in the model should be approximately 0.707 m/s.

(b) **Reynolds Number for the Model:**
$Re_p = 2 \times 10^6$
$\nu = 1 \times 10^{-6} m^2/s$ (same for model and prototype)
$Re_m = \frac{V_m L_m}{\nu}$
$Re_m = \frac{(0.707 \text{ m/s}) \times (1 \text{ m})}{1 \times 10^{-6} m^2/s}$
$Re_m = 0.707 \times 10^6 = 7.07 \times 10^5$

**Is the model flow turbulent?**
Generally, for pipe flow and flow over surfaces, a Reynolds number greater than $4000$ is considered turbulent. For open channel flow and spillways, turbulent flow is usually established at much lower Reynolds numbers (e.g., around $10^3$ to $10^5$ depending on the specific geometry and conditions).
Since $Re_m = 7.07 \times 10^5$, which is significantly greater than typical thresholds for turbulent flow, the model flow is likely to be turbulent.

**Answer (b):** The Reynolds number for the model is $7.07 \times 10^5$. Yes, the model flow is likely to be turbulent.

---

### 8. Important Points to Remember

*   **Similitude is the key to model studies.** It ensures that the results obtained from the model can be reliably scaled up to predict the behavior of the prototype.
*   **Three types of similitude:** Geometric, Kinematic, and Dynamic. Dynamic similitude is the most crucial.
*   **Dimensionless numbers are used to achieve dynamic similitude.** By matching the relevant dimensionless numbers, we ensure that the ratios of forces are the same in the model and prototype.
*   **Reynolds number (Re)** is important for viscous effects.
*   **Froude number (Fr)** is important for gravitational effects (free surface flows).
*   **Mach number (M)** is important for compressible flows.
*   It is often **impossible to match all relevant dimensionless numbers simultaneously**. In such cases, prioritize matching the dimensionless number that governs the dominant physical phenomenon.
*   **Scaling laws** are derived from the relationships between dimensionless numbers and physical quantities to convert model results to prototype results.
*   Model studies are a powerful tool for engineering design, providing insights that may be difficult or impossible to obtain through theoretical analysis alone.

---
