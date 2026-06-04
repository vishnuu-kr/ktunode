---
title: "Flow through steam nozzles-throat pressure for maximum discharge-"
subject: "POWER PLANT ENGINEERING"
module: "Module 2: Steam generator classifications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463784"
status: "completed"
scrapedAt: "2026-05-20T18:06:27.215Z"
---
# Module 2: Steam Generator Classifications - Flow Through Steam Nozzles: Throat Pressure for Maximum Discharge

## 1. Introduction to Steam Nozzles and Their Function

Steam nozzles are essential components in steam power plants, primarily used in steam turbines. Their fundamental function is to convert the thermal energy (enthalpy) of high-pressure, high-temperature steam into kinetic energy, thereby increasing its velocity. This high-velocity steam then impinges on the turbine blades, causing them to rotate and produce mechanical work.

*   **Key Function:** Conversion of thermal energy (enthalpy) into kinetic energy.
*   **Application:** Primarily used in the blading of steam turbines.
*   **Mechanism:** Expansion of steam through a converging-diverging passage.

**(Reference: El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education.)**

## 2. Types of Steam Nozzles Based on Flow Characteristics

The behavior of steam flow through a nozzle depends on the pressure ratio across it (the ratio of the back pressure to the initial pressure).

### 2.1. Convergent Nozzle

*   **Description:** A nozzle with a cross-sectional area that continuously decreases along the direction of flow.
*   **Flow Behavior:**
    *   If the pressure ratio ($P_b/P_0$) is sufficiently large (i.e., the pressure drop is small), the steam flows subsonically and accelerates.
    *   The velocity of the steam increases as it flows through the nozzle.
    *   The maximum velocity achieved in a convergent nozzle occurs at the exit.
*   **Limitations:** A convergent nozzle cannot achieve supersonic velocities.
*   **Relevance:** Used in applications where only moderate steam velocities are required or as the first stage of a convergent-divergent nozzle.

### 2.2. Convergent-Divergent (CD) Nozzle (De Laval Nozzle)

*   **Description:** A nozzle with a converging section followed by a diverging section. The minimum cross-sectional area between the converging and diverging sections is called the **throat**.
*   **Flow Behavior:**
    *   **Converging Section:**
        *   Subsonic flow.
        *   Steam accelerates as it flows through the converging section.
        *   Velocity increases, pressure and temperature decrease.
    *   **Throat:**
        *   The point of minimum area.
        *   If the pressure ratio is critical, the steam reaches sonic velocity ($M=1$) at the throat.
        *   The flow at the throat is **choked** or **critical**.
    *   **Diverging Section:**
        *   **If flow at the throat is sonic ($M=1$):** The steam can continue to accelerate to supersonic velocities ($M>1$) in the diverging section, provided the pressure ratio is sufficiently high. This is due to the unique property of compressible flow where, in a diverging passage, subsonic flow accelerates and supersonic flow also accelerates.
        *   **If flow at the throat is subsonic ($M<1$):** The diverging section would cause deceleration and increase in pressure, which is not useful for maximizing discharge velocity.
*   **Relevance:** Essential for achieving high-velocity steam flow required for efficient operation of steam turbines.

**(Reference: Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education.)**

## 3. Flow Through a Nozzle and the Concept of Choked Flow

The flow of steam through a nozzle is a process of expansion, where internal energy is converted into kinetic energy. This process is typically assumed to be isentropic (reversible adiabatic) for ideal conditions.

### 3.1. Isentropic Expansion

*   **Definition:** An isentropic process is a reversible adiabatic process, meaning there is no heat transfer ($dQ=0$) and no entropy generation ($dS=0$).
*   **Significance:** Assumed for ideal nozzle efficiency calculations. In reality, actual nozzle flow is adiabatic but irreversible due to friction, leading to lower exit velocities and efficiencies.
*   **Thermodynamic Relationship:** For an ideal gas, $Pv^\gamma = \text{constant}$ and $T/P^{(1-\gamma)/\gamma} = \text{constant}$, where $\gamma$ is the ratio of specific heats. For steam, these relationships are more complex and often derived from steam tables or property diagrams.

### 3.2. Velocity of Steam in a Nozzle

The velocity of steam at any point in the nozzle can be determined by the change in enthalpy using the steady flow energy equation, assuming adiabatic flow:

$h_0 + \frac{V_0^2}{2} = h + \frac{V^2}{2}$

Where:
*   $h_0$ = initial enthalpy of steam
*   $V_0$ = initial velocity of steam (usually negligible, $V_0 \approx 0$)
*   $h$ = enthalpy of steam at any point
*   $V$ = velocity of steam at that point

Assuming $V_0 \approx 0$:
$V = \sqrt{2(h_0 - h)}$

This equation shows that the velocity of steam is directly proportional to the square root of the enthalpy drop.

### 3.3. Mach Number (M)

*   **Definition:** The ratio of the local flow velocity to the local speed of sound.
    $M = \frac{V}{a}$
    Where $a$ is the speed of sound.
*   **Speed of Sound in Steam:** For an ideal gas, $a = \sqrt{\gamma RT}$, where R is the specific gas constant and T is the absolute temperature. For steam, a more accurate formula derived from thermodynamic principles is used:
    $a = \sqrt{\gamma \left(\frac{\partial P}{\partial \rho}\right)_s}$
    Where $\gamma$ is the isentropic exponent and $(\partial P/\partial \rho)_s$ represents the isentropic change in pressure with respect to density.
*   **Flow Regimes:**
    *   **Subsonic Flow:** $M < 1$
    *   **Sonic Flow:** $M = 1$ (occurs at the throat of a CD nozzle under critical conditions)
    *   **Supersonic Flow:** $M > 1$

### 3.4. Critical Pressure Ratio and Choking

*   **Choking:** The phenomenon where the flow rate through a nozzle reaches its maximum possible value for a given upstream condition, and the velocity at the throat reaches sonic velocity ($M=1$).
*   **Critical Pressure Ratio ($P^*/P_0$):** The ratio of the pressure at the throat ($P^*$) to the upstream stagnation pressure ($P_0$) at which choking occurs.
    For an ideal gas, the critical pressure ratio is given by:
    $\left(\frac{P^*}{P_0}\right)_{\text{ideal}} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}}$
*   **Throat Pressure ($P^*$):** The pressure at the throat when the flow is choked.
*   **Condition for Choking:** Choking occurs when the back pressure ($P_b$) is reduced to a value equal to or less than the critical pressure ($P^*$).
*   **Effect of Back Pressure:**
    *   If $P_b > P^*$: The flow is subsonic throughout the nozzle. As $P_b$ decreases, the velocity at the exit increases, and the mass flow rate increases.
    *   If $P_b = P^*$: The flow becomes choked at the throat ($M=1$), and the mass flow rate reaches its maximum.
    *   If $P_b < P^*$: The flow is still choked at the throat ($M=1$), and the mass flow rate remains maximum. The expansion to the lower back pressure occurs in the diverging section, resulting in supersonic flow ($M>1$) at the exit. The pressure at the exit will be greater than the back pressure in this case (supersonic expansion).

**(Reference: Gupta, M. K. (2012). *Power Plant Engineering*. PHI Learning Pvt. Ltd.)**

## 4. Throat Pressure for Maximum Discharge (Choked Flow)

The discharge of steam through a nozzle is maximized when the flow is choked at the throat. This occurs when the pressure ratio across the nozzle reaches a critical value.

### 4.1. Derivation of Throat Pressure for Maximum Discharge

Consider an isentropic expansion of steam in a convergent-divergent nozzle. The mass flow rate ($\dot{m}$) through the nozzle is given by:

$\dot{m} = A \cdot V \cdot \rho$

Where:
*   $A$ = cross-sectional area
*   $V$ = velocity of steam
*   $\rho$ = density of steam

For isentropic flow, the properties at any point in the nozzle can be related to the stagnation properties ($P_0, T_0, h_0$) and the Mach number. The density and velocity can be expressed in terms of pressure and temperature.

To find the condition for maximum discharge, we differentiate the mass flow rate with respect to pressure at the throat and set it to zero.

For a given upstream stagnation pressure $P_0$, the mass flow rate is maximized when the throat velocity is sonic ($V^* = a^*$) and the throat pressure is $P^*$.

The mass flow rate through the throat can be expressed as:

$\dot{m}_{\text{max}} = A^* \cdot V^* \cdot \rho^*$

Where:
*   $A^*$ = throat area
*   $V^*$ = sonic velocity at the throat
*   $\rho^*$ = density of steam at the throat

Using isentropic relations for an ideal gas:
$P = P_0 \left(\frac{\rho}{\rho_0}\right)^\gamma$
$P = P_0 \left(\frac{T}{T_0}\right)^{\frac{\gamma}{\gamma-1}}$
$V = \sqrt{2(h_0 - h)} = \sqrt{2 c_p (T_0 - T)}$
$a = \sqrt{\gamma RT}$

From the energy equation and isentropic relations, it can be shown that sonic velocity occurs at the throat when:

$\frac{P^*}{P_0} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}}$

This is the **critical pressure ratio**. For steam, the value of $\gamma$ can be taken as approximately 1.3 for superheated steam, and it varies for wet steam.

### 4.2. Critical Pressure Ratio for Steam

The derivation for ideal gases provides a good approximation. However, for steam, the isentropic exponent ($\gamma$) is not constant and depends on the steam conditions. For superheated steam, a value of $\gamma \approx 1.3$ is often used.

$\left(\frac{P^*}{P_0}\right)_{\text{steam}} \approx \left(\frac{2}{1.3+1}\right)^{\frac{1.3}{1.3-1}} = \left(\frac{2}{2.3}\right)^{\frac{1.3}{0.3}} = (0.8696)^{4.333} \approx 0.577$

Therefore, for superheated steam, choking occurs when the back pressure is approximately 57.7% of the initial stagnation pressure.

*   **Important Point:** The mass flow rate through a nozzle becomes independent of the back pressure once the back pressure is reduced to or below the critical pressure ($P^*$).

**(Reference: Nagpal, G. R., Sharma, S. C. (2012). *Power Plant Engineering*. KHANNA Publishers.)**

## 5. Factors Affecting Throat Pressure and Discharge

### 5.1. Upstream Stagnation Pressure ($P_0$)

*   Higher upstream pressure leads to a higher critical pressure ($P^* = 0.577 P_0$), resulting in a higher absolute pressure at the throat for choked flow.
*   It also increases the maximum mass flow rate, as $\dot{m}_{\text{max}} \propto P_0 A^*$.

### 5.2. Isentropic Exponent ($\gamma$)

*   The value of $\gamma$ affects the critical pressure ratio. A higher $\gamma$ leads to a lower critical pressure ratio (closer to the ideal gas value).

### 5.3. Throat Area ($A^*$)

*   The throat area is the primary determinant of the maximum mass flow rate. A larger throat area allows more steam to pass through, increasing the discharge.

### 5.4. Stagnation Temperature ($T_0$)

*   While the critical pressure ratio is independent of stagnation temperature for ideal gases, the absolute throat pressure ($P^*$) is directly proportional to $P_0$. The velocity ($V^*$) and density ($\rho^*$) at the throat are dependent on $T_0$. The mass flow rate $\dot{m}_{\text{max}} = A^* V^* \rho^*$ will be affected by $T_0$ through $V^*$ and $\rho^*$. For steam, the enthalpy drop and thus velocity is directly related to temperature.

### 5.5. Steam Quality (Wet Steam)

*   When dealing with wet steam, the expansion process is more complex. The presence of liquid droplets can affect the speed of sound and the isentropic exponent.
*   For wet steam, the effective $\gamma$ is lower, and the critical pressure ratio is higher than for dry steam. This means that for a given initial pressure, a higher back pressure is required to choke the flow with wet steam.
*   The quality of steam affects the enthalpy drop and thus the exit velocity and mass flow rate. Superheated steam will result in higher exit velocities than wet steam for the same initial conditions.

**(Reference: El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education.)**

## 6. Consequences of Not Achieving Choked Flow

If the back pressure ($P_b$) is higher than the critical pressure ($P^*$), the flow is not choked.

*   **Subsonic Flow in the Entire Nozzle:** The velocity at the exit will be less than sonic ($M<1$).
*   **Reduced Mass Flow Rate:** The mass flow rate will be lower than the maximum possible value.
*   **Flow Rate Dependent on Back Pressure:** The mass flow rate will vary with changes in back pressure. As $P_b$ decreases (towards $P^*$), the exit velocity and mass flow rate increase.
*   **No Supersonic Expansion:** The diverging section of a CD nozzle will not be utilized for further acceleration if the flow is not choked at the throat.

## 7. Practical Implications in Steam Turbines

*   **Nozzle Design:** The dimensions of the nozzle, particularly the throat area, are critical for achieving the desired steam velocity and mass flow rate for efficient turbine operation.
*   **Back Pressure Control:** Maintaining the correct back pressure at the turbine exhaust is important for maximizing the work output. Operating at a back pressure below the critical pressure for the nozzle's operating conditions ensures choked flow and optimal performance.
*   **Stage Design:** In multi-stage turbines, the nozzles in each stage are designed to expand steam to specific pressure ratios to achieve optimal velocity for the turbine blades.

## 8. Practice Questions and Answers

**Question 1:** A nozzle is supplied with steam at a stagnation pressure of 10 bar and a stagnation temperature of 400°C. If the steam is assumed to behave as an ideal gas with $\gamma = 1.3$, what is the critical pressure at the throat for maximum discharge?

**Answer:**
The critical pressure ratio for an ideal gas is given by:
$\left(\frac{P^*}{P_0}\right) = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}}$
Given $P_0 = 10$ bar and $\gamma = 1.3$:
$\left(\frac{P^*}{P_0}\right) = \left(\frac{2}{1.3+1}\right)^{\frac{1.3}{1.3-1}} = \left(\frac{2}{2.3}\right)^{\frac{1.3}{0.3}} = (0.8696)^{4.333} \approx 0.577$
$P^* = 0.577 \times P_0 = 0.577 \times 10 \text{ bar} = 5.77 \text{ bar}$

**Question 2:** What is the condition for choked flow in a nozzle?

**Answer:**
Choked flow occurs when the steam velocity at the throat of a convergent-divergent nozzle reaches sonic velocity ($M=1$). This happens when the pressure ratio across the nozzle ($P_b/P_0$) is less than or equal to the critical pressure ratio.

**Question 3:** Explain why a convergent-divergent nozzle is required to achieve supersonic velocities.

**Answer:**
A convergent nozzle can only accelerate the flow to sonic velocity at its exit. To further accelerate the steam to supersonic velocities, a diverging section is needed after the throat. In the diverging section, the flow of a compressible fluid behaves differently depending on its Mach number. If the flow at the throat is sonic ($M=1$), the diverging section causes further expansion, reducing pressure and increasing velocity to supersonic speeds ($M>1$). This is contrary to the behavior of incompressible fluids, where a diverging section causes deceleration.

**Question 4:** How does the quality of steam affect the throat pressure for maximum discharge?

**Answer:**
The quality of steam affects the isentropic exponent ($\gamma$) and the enthalpy drop during expansion. For wet steam, the effective $\gamma$ is generally lower than for dry or superheated steam. A lower $\gamma$ leads to a higher critical pressure ratio. This means that for wet steam, a higher back pressure is required to achieve choked flow compared to dry or superheated steam at the same initial stagnation pressure.

**Question 5:** If a nozzle is designed for choked flow and the upstream pressure is 15 bar, what is the approximate back pressure required to maintain choked flow if the steam is superheated ($\gamma \approx 1.3$)?

**Answer:**
Using the critical pressure ratio for superheated steam:
$\left(\frac{P^*}{P_0}\right) \approx 0.577$
$P_0 = 15$ bar
$P^* = 0.577 \times 15 \text{ bar} \approx 8.66 \text{ bar}$
Therefore, the back pressure must be approximately 8.66 bar or lower to maintain choked flow.

## 9. Summary of Key Points to Remember

*   **Nozzles convert thermal energy to kinetic energy.**
*   **Convergent nozzles accelerate flow to sonic velocity at best (at the exit).**
*   **Convergent-divergent nozzles are required for supersonic flow.**
*   **Choking occurs when steam reaches sonic velocity at the throat ($M=1$).**
*   **Choking maximizes the mass flow rate through the nozzle.**
*   **The critical pressure ratio ($P^*/P_0$) determines the condition for choking.**
*   **For superheated steam, the critical pressure ratio is approximately 0.577.**
*   **Once choked, the mass flow rate is independent of further reduction in back pressure.**
*   **The throat area is the primary factor determining the maximum mass flow rate.**
*   **Wet steam has a higher critical pressure ratio than dry or superheated steam.**

## 10. Alignment with Course Outcomes

*   **CO1 (K2):** This topic contributes to understanding the components of steam power plants, specifically the function of nozzles in steam turbines.
*   **CO3 (K3):** This topic is directly relevant to calculating performance parameters of steam nozzles, including the conditions for maximum discharge and the throat pressure. The principles discussed are foundational for understanding nozzle efficiency and velocity calculations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## 11. Further Reading

*   **El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education.** (Chapter on steam turbines and nozzles)
*   **Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education.** (Chapter on steam turbines and nozzles)
*   **Gupta, M. K. (2012). *Power Plant Engineering*. PHI Learning Pvt. Ltd.** (Chapter on steam turbines and nozzles)
*   **Nagpal, G. R., Sharma, S. C. (2012). *Power Plant Engineering*. KHANNA Publishers.** (Chapter on steam turbines and nozzles)