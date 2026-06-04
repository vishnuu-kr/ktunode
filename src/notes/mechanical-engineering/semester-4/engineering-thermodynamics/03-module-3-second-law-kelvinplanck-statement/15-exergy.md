---
title: "exergy"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f66"
status: "completed"
scrapedAt: "2026-05-20T17:53:44.437Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Kelvin-Planck Statement & Exergy

## Topic: Exergy

**Module Context:** This topic builds upon the understanding of the Second Law of Thermodynamics, specifically the Kelvin-Planck statement, and introduces the concept of exergy as a measure of the maximum useful work obtainable from a system as it comes into equilibrium with its surroundings.

**Course Outcomes Addressed:**
*   **CO1: Understand basic concepts of thermodynamics (K1, K2):** Exergy is a fundamental concept that quantifies the quality of energy.
*   **CO2: Understand the laws of thermodynamics (K1, K2):** Exergy is directly linked to the Second Law and its implications.
*   **CO3: Conduct first law analysis of open and closed systems (K3):** Understanding exergy requires analyzing energy transformations and work potentials.
*   **CO4: Determine entropy changes associated with different processes (K3):** Exergy calculations are intrinsically tied to entropy generation.
*   **CO5: Determine the properties of pure substances (K2, K3):** While not directly about pure substances, exergy analysis often involves systems with pure substances.

---

### 1. Introduction to Exergy

*   **What is Exergy?**
    *   Exergy is defined as the **maximum useful work** that can be obtained from a system as it interacts reversibly with its surroundings until it reaches thermal, mechanical, and chemical equilibrium with the surroundings.
    *   It represents the **quality** of energy, not just the quantity. A system at a high temperature or pressure has a higher exergy than the same amount of energy at a lower temperature or pressure.
    *   Also known as **available energy** or **useful work potential**.

*   **Why is Exergy Important?**
    *   **Efficiency Evaluation:** Exergy analysis provides a more realistic and meaningful measure of the performance of thermodynamic systems compared to first-law (energy) efficiency. It identifies where irreversibilities and losses occur, guiding design improvements.
    *   **Resource Management:** It helps in understanding the consumption of the "quality" of resources, which are often more valuable than the mere quantity of energy.
    *   **Environmental Impact:** Exergy destruction is directly linked to entropy generation and thus to environmental pollution. Minimizing exergy destruction can lead to more sustainable processes.

*   **Reference Textbooks:**
    *   Cengel, Boles, & Kanoğlu (2011): Introduces exergy as a tool for evaluating thermodynamic efficiency and identifying irreversibilities.
    *   P.K. Nag (2017): Discusses exergy as the maximum work potential and its application in system analysis.
    *   Moran & Shapiro (2006): Provides a rigorous treatment of exergy and its relation to entropy production.
    *   Sonntag, Borgnakke, & VanWylen (2014): Explains exergy as a thermodynamic property associated with the potential to cause change.

---

### 2. Exergy of a System at a State

*   **Thermodynamic Equilibrium:** For exergy to be defined, a system must interact with its surroundings until it reaches equilibrium. The state of the surroundings is crucial.
*   **Surroundings State (Dead State):**
    *   The surroundings are typically considered to be at a **constant temperature ($T_0$)**, **constant pressure ($P_0$)**, and **standard chemical composition**.
    *   The **dead state** is the state of the system when it is in thermodynamic equilibrium with the surroundings. At the dead state, the system has zero exergy relative to the surroundings.

*   **Types of Exergy:**
    *   **Physical Exergy ($X_{ph}$):** The exergy associated with the difference in temperature and pressure between the system and its surroundings.
    *   **Chemical Exergy ($X_{ch}$):** The exergy associated with the chemical composition difference between the system and its surroundings.
    *   **Latent Exergy ($X_{lat}$):** Associated with phase changes.
    *   **Kinetic Exergy ($X_{ke}$):** Associated with the velocity of the system.
    *   **Potential Exergy ($X_{pe}$):** Associated with the elevation of the system.

*   **Focus on Physical Exergy:** For most introductory analyses, we focus on physical exergy, assuming kinetic and potential exergy are negligible.

---

### 3. Physical Exergy of a System

#### 3.1 Closed System

*   **Definition:** The physical exergy of a closed system in a given state $(P, T)$ relative to the surroundings at $(P_0, T_0)$.
*   **Maximum Useful Work:** The maximum useful work a closed system can deliver as it undergoes a reversible process from its initial state to the dead state ($P_0, T_0$).
*   **Calculation:**
    *   Consider a closed system with mass $m$, internal energy $u$, volume $v$, and entropy $s$.
    *   The **exergy of the system** is given by:
        $X = (U - U_0) + P_0(V - V_0) - T_0(S - S_0) + \frac{mV^2}{2} + mgz$
        Where:
        *   $U$ is the internal energy of the system.
        *   $U_0$ is the internal energy of the system when it is in the dead state.
        *   $V$ is the volume of the system.
        *   $V_0$ is the volume of the system when it is in the dead state.
        *   $S$ is the entropy of the system.
        *   $S_0$ is the entropy of the system when it is in the dead state.
        *   $V^2/2$ and $z$ are kinetic and potential energy terms, respectively (often neglected).

    *   **Exergy per unit mass ($x$):**
        $x = (u - u_0) + P_0(v - v_0) - T_0(s - s_0) + \frac{V^2}{2} + gz$
        *   The terms $\frac{V^2}{2}$ and $gz$ are kinetic and potential exergy, often assumed negligible for stationary systems.
        *   The term $(u - u_0) + P_0(v - v_0) - T_0(s - s_0)$ represents the **flow exergy** or **flow work exergy** for a stationary system.

    *   **For a stationary system (negligible KE and PE):**
        $x = (u - u_0) + P_0(v - v_0) - T_0(s - s_0)$
        This form highlights the contribution of internal energy, work associated with pressure difference, and entropy.

*   **Relationship to Enthalpy:**
    *   Since $u = h - Pv$, we can rewrite the exergy equation in terms of enthalpy.
    *   $x = (h - Pv - u_0) + P_0(v - v_0) - T_0(s - s_0)$
    *   This form is less intuitive for direct calculation without knowing $u_0$.

*   **Property of a System:** Exergy is a property of the system **and** its surroundings. Its value depends on the chosen dead state.

#### 3.2 Flow Exergy (Open System)

*   **Definition:** The exergy associated with a fluid stream entering or leaving a control volume. It is the maximum work that can be obtained from the fluid as it comes into equilibrium with the surroundings.
*   **Flow Exergy Term:** This is often referred to as **flow work exergy** and is equal to the flow work $P v$ of the fluid.
*   **Calculation:**
    *   The flow exergy of a fluid stream at pressure $P$ and specific volume $v$ is given by:
        $x_{flow} = P v$
    *   This is because the flow work $Pv$ is the work done by the fluid pressure to push it into or out of the control volume, and this work is considered "useful" in the context of exergy.

*   **Total Physical Exergy for a Flowing Stream:**
    *   For a fluid stream with specific enthalpy $h$, specific entropy $s$, velocity $V$, and elevation $z$, relative to surroundings at $P_0, T_0$:
        $x_{stream} = (h - h_0) - T_0(s - s_0) + \frac{V^2}{2} + g z$
        Where:
        *   $h$ is the specific enthalpy.
        *   $h_0$ is the specific enthalpy at the dead state.
        *   $s$ is the specific entropy.
        *   $s_0$ is the specific entropy at the dead state.
        *   $V^2/2$ is the kinetic energy per unit mass.
        *   $gz$ is the potential energy per unit mass.

    *   **Note:** This equation represents the total physical exergy of the stream. In many analyses, the $Pv$ term is explicitly considered as the "flow exergy," and the remaining terms $(h - Pv - h_0) + P_0(v - v_0) - T_0(s - s_0)$ are grouped as the "non-flow exergy" or "internal exergy." The total physical exergy for a stream is equivalent to $(h - h_0) - T_0(s - s_0) + \frac{V^2}{2} + g z$.

*   **Example:** Consider a steam turbine. The steam entering has a certain exergy due to its enthalpy, entropy, pressure, and temperature. As it expands, it does work, and its exergy decreases.

---

### 4. Exergy Balance for Closed Systems

*   **General Balance Equation:**
    $\text{Exergy entering} - \text{Exergy leaving} + \text{Exergy produced} = \text{Exergy consumed}$
*   **Exergy Balance for a Closed System:**
    $X_{in} - X_{out} + X_{generated} = \Delta X_{system}$
    Where:
    *   $X_{in}$ and $X_{out}$ are exergy transfer associated with heat, work, and mass (for closed systems, mass transfer is zero).
    *   $X_{generated}$ is exergy generated due to irreversibilities within the system.
    *   $\Delta X_{system} = X_2 - X_1$ is the change in exergy of the system.

*   **Exergy Transfer:**
    *   **Work ($W$):** If work is done *by* the system, it carries exergy away. If work is done *on* the system, it adds exergy.
        *   $X_W = W$ (if $W$ is work done by the system)
        *   $X_W = -W$ (if $W$ is work done on the system)
    *   **Heat ($Q$):** Heat transfer carries exergy with it. The exergy transfer associated with heat $Q$ at temperature $T$ is $Q(1 - \frac{T_0}{T})$.
        *   $X_Q = Q(1 - \frac{T_0}{T})$
        *   This term represents the maximum work that can be extracted from heat $Q$ at temperature $T$ when transferring it to a reservoir at $T_0$. If $T > T_0$, exergy is transferred *to* the system. If $T < T_0$, exergy is transferred *from* the system.

*   **Exergy Balance Equation for a Closed System (Simplified):**
    $(W_{by} - W_{on}) + Q(1 - \frac{T_0}{T}) - X_{destroyed} = (X_2 - X_1)$
    *   For work: If $W$ is net work done *by* the system, the equation is:
        $Q(1 - \frac{T_0}{T}) - W_{by} - X_{destroyed} = (X_2 - X_1)$

*   **Exergy Destruction ($X_{destroyed}$):**
    *   $X_{destroyed} = T_0 S_{gen}$, where $S_{gen}$ is the total entropy generated within the system.
    *   Exergy destruction is always non-negative ($X_{destroyed} \ge 0$).
    *   It represents the loss of useful work potential due to irreversibilities (friction, heat transfer across a finite temperature difference, mixing, etc.).

*   **Reversible Process:** For a reversible process, $S_{gen} = 0$, so $X_{destroyed} = 0$.

---

### 5. Exergy Balance for Open Systems (Control Volumes)

*   **General Balance Equation:**
    $\sum_{in} \dot{m}_i x_i - \sum_{out} \dot{m}_e x_e + \sum \dot{Q}_k(1 - \frac{T_{0k}}{T_k}) - \dot{W} - \dot{X}_{destroyed} = \frac{d X_{CV}}{dt}$
    Where:
    *   $\dot{m}_i$: Mass flow rate of inlet stream $i$.
    *   $x_i$: Specific exergy of inlet stream $i$.
    *   $\dot{m}_e$: Mass flow rate of outlet stream $e$.
    *   $x_e$: Specific exergy of outlet stream $e$.
    *   $\dot{Q}_k$: Heat transfer rate to surface $k$ at temperature $T_k$.
    *   $\dot{W}$: Net power output from the control volume.
    *   $\dot{X}_{destroyed}$: Rate of exergy destruction.
    *   $\frac{d X_{CV}}{dt}$: Rate of change of exergy within the control volume.

*   **Specific Exergy of a Stream ($x$):**
    $x = (h - h_0) - T_0(s - s_0) + \frac{V^2}{2} + gz$
    This is the total physical exergy of the stream.

*   **Steady-Flow Systems:** For steady-flow systems, $\frac{d X_{CV}}{dt} = 0$.
    $\sum_{in} \dot{m}_i x_i - \sum_{out} \dot{m}_e x_e + \sum \dot{Q}_k(1 - \frac{T_{0k}}{T_k}) - \dot{W} - \dot{X}_{destroyed} = 0$

*   **Exergy Destruction for Flow Systems:**
    $\dot{X}_{destroyed} = T_0 \dot{S}_{gen}$
    Where $\dot{S}_{gen}$ is the total rate of entropy generation.

*   **Second Law Efficiency (Exergetic Efficiency):**
    *   **For a process converting energy to work (e.g., turbine, engine):**
        $\epsilon = \frac{\text{Actual Work Output}}{\text{Maximum Possible Work Output (Reversible Work)}} = \frac{W_{actual}}{W_{rev}}$
        Since $W_{rev} = \Delta X_{system}$ (for closed systems) or $W_{rev} = \sum \dot{m}_i x_i - \sum \dot{m}_e x_e + \sum \dot{Q}_k(1 - \frac{T_{0k}}{T_k})$ (for steady flow), and $W_{actual} = W_{actual}$,
        $\epsilon = \frac{W_{actual}}{\Delta X_{system}}$ (for closed) or $\epsilon = \frac{\dot{W}_{actual}}{\sum \dot{m}_i x_i - \sum \dot{m}_e x_e + \sum \dot{Q}_k(1 - \frac{T_{0k}}{T_k})}$ (for steady flow).

    *   **For a process consuming work (e.g., pump, compressor):**
        $\epsilon = \frac{\text{Minimum Required Work (Reversible Work)}}{\text{Actual Work Input}} = \frac{W_{rev}}{W_{actual}}$
        Since $W_{rev} = \Delta X_{system}$ (for closed) or $W_{rev} = \sum \dot{m}_i x_i - \sum \dot{m}_e x_e + \sum \dot{Q}_k(1 - \frac{T_{0k}}{T_k})$ (for steady flow), and $W_{actual}$ is work input,
        $\epsilon = \frac{\Delta X_{system}}{W_{actual}}$ (for closed) or $\epsilon = \frac{\sum \dot{m}_i x_i - \sum \dot{m}_e x_e + \sum \dot{Q}_k(1 - \frac{T_{0k}}{T_k})}{\dot{W}_{actual}}$ (for steady flow).

*   **Important Note:** Second law efficiency is always $\le 1$ (or $\le 100\%$).

---

### 6. Chemical Exergy

*   **Definition:** The exergy associated with a chemical substance due to its difference in chemical potential from a reference state (usually atmospheric air).
*   **Calculation:** Chemical exergy is typically calculated using standardized tables or correlations based on the substance's chemical composition and standard formation properties.
    $x_{ch} = \bar{g}_f^\circ - \sum_i n_i \bar{g}_{f,i}^\circ$ (Simplified, actual calculation involves complex chemical potential relationships and reference states).
*   **Reference State:** Usually, the dead state includes reference substances like $N_2$, $O_2$, $H_2O$, $CO_2$, etc., at atmospheric pressure and temperature.
*   **Total Exergy:** The total exergy of a substance is the sum of its physical and chemical exergy.
    $x_{total} = x_{ph} + x_{ch}$
*   **Applications:** Combustion analysis, biochemical processes, fuel cells.

---

### 7. Exergy Analysis of Common Devices

*   **Boiler/Heater:** Heat is added, increasing exergy. However, heat transfer across a finite temperature difference leads to exergy destruction.
*   **Turbine:** Work is produced, exergy decreases. Exergy destruction occurs due to friction and irreversibilities.
*   **Compressor/Pump:** Work is consumed. Exergy destruction occurs due to friction.
*   **Heat Exchanger:** Heat is transferred between fluids. Exergy destruction occurs due to heat transfer across a temperature difference.
*   **Nozzle/Diffuser:** Kinetic energy changes. Exergy destruction is usually low if reversible, but friction can cause it.

---

### 8. Examples

**Example 1: Exergy of compressed air (Closed System)**

Consider a rigid tank containing 1 kg of air at $P = 500 \, \text{kPa}$ and $T = 300 \, \text{K}$. The surroundings are at $P_0 = 100 \, \text{kPa}$ and $T_0 = 293 \, \text{K}$. Using ideal gas assumptions ($R = 0.287 \, \text{kJ/kg} \cdot \text{K}$, $c_p = 1.005 \, \text{kJ/kg} \cdot \text{K}$, $c_v = 0.718 \, \text{kJ/kg} \cdot \text{K}$). Assume the dead state of air is at $P_0, T_0$.

Find the specific physical exergy of the air.

**Solution:**

We need to find the specific exergy $x = (u - u_0) + P_0(v - v_0) - T_0(s - s_0)$.

1.  **Find properties at the initial state:**
    $P = 500 \, \text{kPa}$, $T = 300 \, \text{K}$.
    Using ideal gas law for specific volume: $v = \frac{RT}{P} = \frac{0.287 \, \text{kJ/kg} \cdot \text{K} \times 300 \, \text{K}}{500 \, \text{kPa}} = 0.1722 \, \text{m}^3/\text{kg}$.

2.  **Find properties at the dead state:**
    $P_0 = 100 \, \text{kPa}$, $T_0 = 293 \, \text{K}$.
    $v_0 = \frac{RT_0}{P_0} = \frac{0.287 \, \text{kJ/kg} \cdot \text{K} \times 293 \, \text{K}}{100 \, \text{kPa}} = 0.8417 \, \text{m}^3/\text{kg}$.

3.  **Calculate changes in properties:**
    *   Internal energy: $u - u_0 = c_v (T - T_0) = 0.718 \, \text{kJ/kg} \cdot \text{K} \times (300 - 293) \, \text{K} = 5.026 \, \text{kJ/kg}$.
    *   Entropy: $s - s_0 = c_p \ln(\frac{T}{T_0}) - R \ln(\frac{P}{P_0})$
        $s - s_0 = 1.005 \ln(\frac{300}{293}) - 0.287 \ln(\frac{500}{100})$
        $s - s_0 = 1.005 \times 0.02377 - 0.287 \times 1.6094$
        $s - s_0 = 0.02387 - 0.4619 = -0.4380 \, \text{kJ/kg} \cdot \text{K}$.

4.  **Calculate specific exergy:**
    $x = (u - u_0) + P_0(v - v_0) - T_0(s - s_0)$
    $x = 5.026 \, \text{kJ/kg} + 100 \, \text{kPa} \times (0.1722 - 0.8417) \, \text{m}^3/\text{kg} - 293 \, \text{K} \times (-0.4380) \, \text{kJ/kg} \cdot \text{K}$
    *   Note: $100 \, \text{kPa} \times (-0.6695) \, \text{m}^3/\text{kg} = -66.95 \, \text{kJ/kg}$ (since $1 \, \text{kPa} \cdot \text{m}^3 = 1 \, \text{kJ}$).
    $x = 5.026 \, \text{kJ/kg} - 66.95 \, \text{kJ/kg} + 128.45 \, \text{kJ/kg}$
    $x = 66.526 \, \text{kJ/kg}$.

**Result:** The specific physical exergy of the air is $66.526 \, \text{kJ/kg}$.

**Example 2: Exergy balance for a throttling process (Steady Flow)**

A throttling valve reduces the pressure of a liquid from $10 \, \text{MPa}$ to $1 \, \text{MPa}$. The inlet temperature is $50^\circ\text{C}$. Assume the liquid is incompressible with specific heat $c$ and density $\rho$. The surroundings are at $25^\circ\text{C}$ and $100 \, \text{kPa}$.

Find the exergy destruction per unit mass.

**Solution:**

For a throttling process, $T_{in} = T_{out}$, $P_{in} > P_{out}$, $h_{in} = h_{out}$ (ideal throttling, no heat transfer), and $\dot{W} = 0$.

1.  **Exergy balance for steady flow:**
    $\sum_{in} \dot{m}_i x_i - \sum_{out} \dot{m}_e x_e - \dot{X}_{destroyed} = 0$
    For a single stream, $\dot{m} x_{in} - \dot{m} x_{out} - \dot{X}_{destroyed} = 0$
    $\dot{X}_{destroyed} = \dot{m}(x_{in} - x_{out})$
    Exergy destruction per unit mass: $x_{destroyed} = x_{in} - x_{out}$

2.  **Specific Exergy Calculation:**
    $x = (h - h_0) - T_0(s - s_0) + \frac{V^2}{2} + gz$. Assume negligible KE and PE changes.
    $x_{destroyed} = [(h_{in} - h_0) - T_0(s_{in} - s_0)] - [(h_{out} - h_0) - T_0(s_{out} - s_0)]$
    $x_{destroyed} = (h_{in} - h_{out}) - T_0(s_{in} - s_{out})$

3.  **Applying Throttling Process Properties:**
    *   For ideal throttling: $h_{in} = h_{out}$. So, $h_{in} - h_{out} = 0$.
    *   For an incompressible substance undergoing a temperature change $\Delta T = T_{in} - T_{out}$ and pressure change $\Delta P = P_{in} - P_{out}$:
        $s_{in} - s_{out} = c \ln(\frac{T_{in}}{T_{out}}) - \frac{v \Delta P}{T_0}$ (This form is derived from entropy generation analysis in textbooks like Cengel or Moran).
        However, a simpler way for a throttling process where $h_{in}=h_{out}$ is to consider that the entropy will increase.
        $s_{out} - s_{in} = c \ln(\frac{T_{out}}{T_{in}}) + \frac{v(P_{out} - P_{in})}{T_0}$. Since $T_{in} = T_{out}$, $s_{out} - s_{in} = \frac{v(P_{out} - P_{in})}{T_0}$.
        So, $s_{in} - s_{out} = -\frac{v(P_{out} - P_{in})}{T_0} = \frac{v(P_{in} - P_{out})}{T_0}$.

4.  **Substituting back into exergy destruction:**
    $x_{destroyed} = 0 - T_0 \left(\frac{v(P_{in} - P_{out})}{T_0}\right)$
    $x_{destroyed} = -v(P_{in} - P_{out})$
    $x_{destroyed} = v(P_{out} - P_{in})$ (Wait, this is negative, which is wrong for destruction).

    Let's use the entropy generation approach. For a throttling process, the only irreversibility is the pressure drop at constant enthalpy and temperature. The entropy generated is $S_{gen} = \dot{m}(s_{out} - s_{in})$. The exergy destroyed is $T_0 S_{gen}$.
    $s_{out} - s_{in} = c \ln(\frac{T_{out}}{T_{in}}) + R \ln(\frac{P_{out}}{P_{in}})$. For liquid, treat as incompressible $c \ln(T_{out}/T_{in})$ might be zero if $T_{in}=T_{out}$. The pressure term is the dominant one if density is considered.

    Let's use the definition of exergy destruction as $T_0 \times S_{gen}$.
    For a throttling process from state 1 to 2: $h_1 = h_2$, $T_1 = T_2$ (ideal throttling).
    $s_2 - s_1 = \int_{1}^{2} \frac{c_p}{T} dT - R \ln(\frac{P_2}{P_1})$ (For gas)
    For liquid, $s_2 - s_1 = c \ln(\frac{T_2}{T_1}) + v(P_2 - P_1)/T_0$ (This form comes from Cengel).
    If $T_1 = T_2$, then $s_2 - s_1 = v(P_2 - P_1)/T_0$.
    $S_{gen} = \dot{m}(s_2 - s_1) = \dot{m} v(P_2 - P_1)/T_0$.
    $\dot{X}_{destroyed} = T_0 \dot{S}_{gen} = T_0 \dot{m} v(P_2 - P_1)/T_0 = \dot{m} v(P_2 - P_1)$.
    Exergy destruction per unit mass: $x_{destroyed} = v(P_2 - P_1)$.
    Since $P_2 < P_1$, this is negative. The correct definition of $S_{gen}$ should be positive.
    $s_2 - s_1 = c \ln(\frac{T_2}{T_1}) - \int_{P_1}^{P_2} \frac{v}{T} dP$. For liquid, $v$ is nearly constant.
    $s_2 - s_1 = c \ln(\frac{T_2}{T_1}) - v \frac{P_2 - P_1}{T_{avg}}$.
    If $T_1 = T_2$, then $s_2 - s_1 = -v \frac{P_2 - P_1}{T_1} = v \frac{P_1 - P_2}{T_1}$.
    The exergy destruction rate is $\dot{X}_{destroyed} = T_0 \dot{S}_{gen} = T_0 \dot{m} (s_2 - s_1)$.
    If we use the reference temperature for entropy change $T_0$ instead of $T_1$, then $s_2 - s_1 \approx v \frac{P_1 - P_2}{T_0}$.
    Then $\dot{X}_{destroyed} = T_0 \dot{m} v \frac{P_1 - P_2}{T_0} = \dot{m} v (P_1 - P_2)$.
    Exergy destruction per unit mass: $x_{destroyed} = v(P_1 - P_2)$.
    This is positive and represents the loss in exergy.

    We need the specific volume ($v$) of the liquid at the inlet conditions or an average. Let's assume the liquid is water, density $\rho \approx 1000 \, \text{kg/m}^3$, so $v = 1/\rho = 0.001 \, \text{m}^3/\text{kg}$.
    $P_1 = 10 \, \text{MPa} = 10000 \, \text{kPa}$.
    $P_2 = 1 \, \text{MPa} = 1000 \, \text{kPa}$.
    $x_{destroyed} = (0.001 \, \text{m}^3/\text{kg}) \times (10000 - 1000) \, \text{kPa}$
    $x_{destroyed} = 0.001 \times 9000 \, \text{kJ/kg}$
    $x_{destroyed} = 9 \, \text{kJ/kg}$.

**Result:** The exergy destruction per unit mass is $9 \, \text{kJ/kg}$. This arises from the irreversible pressure drop during throttling.

---

### 9. Practice Questions

1.  Define exergy and explain its significance in thermodynamic analysis. (CO1, CO2)
2.  What is the dead state, and why is it important in exergy calculations? (CO1)
3.  Derive or state the expression for the specific physical exergy of a closed system in terms of its properties and the surroundings' properties. (CO1, CO2)
4.  Derive or state the expression for the specific physical exergy of a steady flow stream. (CO1, CO2)
5.  Explain the concept of exergy destruction and its relationship to entropy generation. (CO2, CO4)
6.  Consider a heat exchanger where hot fluid at $100^\circ\text{C}$ transfers heat to a cold fluid at $50^\circ\text{C}$. The surroundings are at $25^\circ\text{C}$. If the heat transfer rate is $100 \, \text{kW}$, calculate the exergy transfer rate associated with the heat transfer for both fluids and the exergy destruction rate within the heat exchanger. (CO3, CO4)
    *   **Answer:**
        *   Exergy transfer for hot fluid: $100 \, \text{kW} \times (1 - \frac{25+273.15}{100+273.15}) = 100 \times (1 - \frac{298.15}{373.15}) \approx 20.11 \, \text{kW}$.
        *   Exergy transfer for cold fluid: $100 \, \text{kW} \times (1 - \frac{25+273.15}{50+273.15}) = 100 \times (1 - \frac{298.15}{323.15}) \approx 7.43 \, \text{kW}$.
        *   Exergy destruction rate: $20.11 \, \text{kW} - 7.43 \, \text{kW} = 12.68 \, \text{kW}$.
7.  A power plant turbine receives steam at $5 \, \text{MPa}$, $400^\circ\text{C}$ and exhausts it at $0.1 \, \text{MPa}$, $100^\circ\text{C}$. The isentropic efficiency of the turbine is 80%. Determine the second-law efficiency of the turbine. Assume the surroundings are at $25^\circ\text{C}$ and $100 \, \text{kPa}$. (CO3, CO4)
    *   **Answer:** This question requires steam tables and detailed analysis. The second-law efficiency would be the ratio of the actual work output to the reversible (isentropic) work output. The reversible work is determined by the change in exergy between the inlet and outlet states assuming an isentropic process.

---

### 10. Important Points to Remember

*   **Exergy is a property of the system *and* the surroundings.** Its value depends on the dead state.
*   **Exergy is a measure of energy quality.**
*   **Exergy destruction ($T_0 S_{gen}$) is the irreversible loss of work potential.** Minimizing exergy destruction is key to improving efficiency.
*   **Second-law efficiency ($\epsilon$) is always less than or equal to first-law efficiency.**
*   **The dead state is the state of thermodynamic equilibrium with the surroundings.**
*   **For heat transfer, exergy transfer is $Q(1 - T_0/T)$.**
*   **For work, exergy transfer is $W$.**
*   **Exergy balance is a powerful tool for analyzing thermodynamic systems and identifying areas for improvement.**

---

This comprehensive set of notes covers the fundamental concepts of exergy as relevant to Module 3 of Engineering Thermodynamics. It includes definitions, equations, examples, and practice questions, drawing upon the specified textbooks and aligning with the course outcomes. Remember to consult the textbooks for detailed derivations and specific property data.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
