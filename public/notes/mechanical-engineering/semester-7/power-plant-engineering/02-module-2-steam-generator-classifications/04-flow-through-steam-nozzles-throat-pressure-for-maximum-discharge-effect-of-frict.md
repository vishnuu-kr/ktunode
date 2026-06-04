---
title: "Flow through steam nozzles-throat pressure for maximum discharge- effect of friction-super saturated flow"
subject: "POWER PLANT ENGINEERING"
module: "Module 2: Steam generator classifications"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1951d0cf48044643a0"
status: "completed"
scrapedAt: "2026-05-20T18:16:12.899Z"
---
# POWER PLANT ENGINEERING

## Module 2: Steam Generator Classifications

### Topic: Flow Through Steam Nozzles: Throat Pressure for Maximum Discharge, Effect of Friction, Supersaturated Flow

---

**Learning Outcomes:**

*   Understand the principles of steam flow through nozzles.
*   Determine the conditions for maximum discharge rate through a nozzle.
*   Analyze the impact of friction on nozzle performance.
*   Explain the phenomenon of supersaturated flow and its implications.

---

**Course Outcomes Alignment:**

*   **CO3:** Calculate the performance parameters of steam turbines and steam nozzles. (Knowledge Level: K3) - *This topic directly contributes to understanding and calculating steam nozzle performance parameters.*

---

**Textbook References:**

*   Power Plant Technology by M. M. El Wakil (McGraw Hill Education, 1, 2017)
*   Power Plant Engineering by P. K. Nag (McGraw Hill Education, 4, 2017)

**Reference Book References:**

*   Power Plant Engineering by G. R. Nagpal, S. C. Sharma (KHANNA Publishers, 16, 2012)
*   Power Plant Engineering by Manoj Kumar Gupta (PHI Learning Pvt. Ltd, 1, 2012)

---

## 1. Introduction to Steam Nozzles

A **nozzle** is a device designed to accelerate a fluid, typically a gas or vapor, by converting its internal energy (enthalpy) into kinetic energy. In steam power plants, steam nozzles are crucial components in steam turbines, where they convert the high-pressure, low-velocity steam into a high-velocity jet that impinges on the turbine blades, causing rotation.

*   **Function:** To convert thermal energy of steam into kinetic energy.
*   **Shape:** Typically convergent-divergent (de Laval) for supersonic flow, or convergent for subsonic flow.
*   **Application:** Steam turbines, jet engines, rocket engines.

---

## 2. Flow Through a Convergent Nozzle

A convergent nozzle has a decreasing cross-sectional area in the direction of flow.

### 2.1. Pressure Ratio and Velocity

Consider steam flowing from a high-pressure reservoir (P₀) to an exhaust pressure (Pₑ). The pressure inside the nozzle decreases as the velocity increases.

*   **Subsonic Flow (Mach Number < 1):** As pressure decreases, velocity increases, and density decreases.
*   **Choking:** At a certain point, the flow reaches sonic velocity (Mach Number = 1) at the narrowest section, called the **throat**.

---

## 3. Throat Pressure for Maximum Discharge

For a convergent nozzle discharging into an atmosphere of pressure $P_a$, the mass flow rate ($\dot{m}$) will increase as $P_a$ decreases. However, there's a limit to this increase.

### 3.1. Derivation (Simplified Approach)

Using the isentropic flow relations for a nozzle, the velocity at any section is given by:

$v = \sqrt{2 \frac{n}{n-1} R T_0 \left[1 - \left(\frac{P}{P_0}\right)^{\frac{n-1}{n}}\right]}$

where:
*   $v$ is the velocity of steam
*   $n$ is the polytropic index (for isentropic expansion, $n = \gamma$, the ratio of specific heats)
*   $R$ is the specific gas constant for steam
*   $T_0$ is the initial stagnation temperature
*   $P_0$ is the initial stagnation pressure
*   $P$ is the pressure at any section

The mass flow rate ($\dot{m}$) through a nozzle of throat area ($A_{th}$) is given by:

$\dot{m} = A_{th} \rho v$

where $\rho$ is the density of steam at pressure $P$ and velocity $v$.

For isentropic flow, we can relate density and pressure using $\rho = \rho_0 \left(\frac{P}{P_0}\right)^{1/n}$.
Substituting $v$ and $\rho$ into the mass flow rate equation and differentiating with respect to pressure (or pressure ratio $P/P_0$) and setting $\frac{d\dot{m}}{dP} = 0$ to find the condition for maximum flow, we get:

The condition for maximum discharge rate in a convergent nozzle is when the pressure at the throat ($P_{th}$) is related to the upstream stagnation pressure ($P_0$) by a critical pressure ratio.

**Critical Pressure Ratio:**

The critical pressure ratio ($P_{th}/P_0$) for isentropic flow of an ideal gas is given by:

$\left(\frac{P_{th}}{P_0}\right)_{critical} = \left(\frac{2}{n+1}\right)^{\frac{n}{n-1}}$

For steam, assuming it behaves like a perfect gas with $\gamma$ as the polytropic index for the expansion process, the critical pressure ratio is:

$\left(\frac{P_{th}}{P_0}\right)_{critical} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}}$

### 3.2. Choking Phenomenon

When the exhaust pressure ($P_a$) is reduced such that the pressure ratio $P_0/P_a$ is greater than the critical pressure ratio, the pressure at the throat ($P_{th}$) will reach a minimum value and remain constant, equal to the critical pressure. The velocity at the throat becomes sonic (Mach number = 1). Any further reduction in external pressure does not increase the mass flow rate. This phenomenon is called **choking**.

*   **If $P_a > P_{th, critical}$:** The flow is entirely subsonic, and the pressure at the exit is $P_a$. The mass flow rate increases as $P_a$ decreases.
*   **If $P_a \le P_{th, critical}$:** The flow chokes at the throat. $P_{th} = P_{th, critical}$. The velocity at the throat is sonic. The mass flow rate reaches its maximum value. The pressure at the exit of the nozzle will be $P_a$, but the pressure *inside* the nozzle at the throat will be $P_{th, critical}$.

**Important Point:** For a convergent nozzle, the maximum discharge occurs when the nozzle is **choked**. The pressure at the throat is then the critical pressure.

---

## 4. Flow Through a Convergent-Divergent (De Laval) Nozzle

A convergent-divergent nozzle is designed to accelerate steam to supersonic speeds (Mach number > 1). It consists of a convergent section followed by a divergent section.

### 4.1. Flow Regimes in C-D Nozzles

The flow behavior in a C-D nozzle depends on the back pressure ($P_b$) to initial pressure ($P_0$) ratio.

*   **Case 1: $P_b$ is high (e.g., $P_b/P_0 > (\frac{P_{th}}{P_0})_{critical}$):** The flow is entirely subsonic throughout the nozzle. The pressure at the exit is $P_b$. The divergent section acts as a diffuser, increasing pressure and decreasing velocity.
*   **Case 2: $P_b/P_0 = (\frac{P_{th}}{P_0})_{critical}$:** The flow chokes at the throat (Mach 1). The pressure at the throat is $P_{th, critical}$. The divergent section continues to expand the flow subsonically.
*   **Case 3: $P_b/P_0$ is low, but still $P_b > P_{exit, isentropic}$:** The flow chokes at the throat (Mach 1). The pressure at the throat is $P_{th, critical}$. The divergent section continues to expand the flow, and the Mach number becomes supersonic. However, due to the lower back pressure, the expansion in the divergent section is incomplete. A shock wave may form within the divergent section or at the exit, recompressing the flow to $P_b$.
*   **Case 4: $P_b = P_{exit, isentropic}$:** The flow chokes at the throat (Mach 1). The expansion in the divergent section is isentropic and complete. The exit pressure of the nozzle matches the back pressure. This is the ideal design condition for maximum efficiency.
*   **Case 5: $P_b < P_{exit, isentropic}$:** The flow chokes at the throat (Mach 1). The expansion in the divergent section is isentropic and supersonic. The exit pressure is lower than the back pressure. An oblique shock wave forms outside the nozzle exit to match the back pressure.

**Throat Pressure for Maximum Discharge in C-D Nozzle:**

For a convergent-divergent nozzle, the maximum discharge rate is achieved when the flow is choked at the throat. The throat pressure remains the critical pressure, $P_{th, critical}$, as long as the back pressure is below a certain value.

*   The mass flow rate is maximized when the throat is choked.
*   The throat pressure is the critical pressure, determined by the upstream stagnation pressure ($P_0$) and the polytropic index ($\gamma$).

**[El Wakil, Chapter on Fluid Mechanics/Thermodynamics of Turbines]** and **[Nag, Chapter on Steam Nozzles]** would provide detailed derivations and charts for steam flow in nozzles, including the calculation of critical pressure ratios for steam. They often use specific heat ratio values for steam (e.g., $\gamma \approx 1.3$).

**Example Calculation for Critical Pressure Ratio for Steam:**
Assuming $\gamma = 1.3$:
$(\frac{P_{th}}{P_0})_{critical} = \left(\frac{2}{1.3+1}\right)^{\frac{1.3}{1.3-1}} = \left(\frac{2}{2.3}\right)^{\frac{1.3}{0.3}} = (0.8696)^{4.333} \approx 0.579$

So, for steam with $\gamma=1.3$, choking occurs when $P_{th}/P_0 \approx 0.579$. If the upstream pressure is 10 bar, the throat pressure for maximum flow will be approximately $0.579 \times 10 = 5.79$ bar.

---

## 5. Effect of Friction on Nozzle Performance

In reality, fluid friction (viscosity) causes energy losses, making the expansion process irreversible and therefore not perfectly isentropic.

### 5.1. Friction Losses

Friction in nozzles leads to:

*   **Lower exit velocity:** The kinetic energy of the steam jet is reduced.
*   **Higher exit pressure:** For a given nozzle shape and inlet conditions, the exit pressure will be higher than in the isentropic case.
*   **Reduced mass flow rate:** If the nozzle is choked, friction at the throat can slightly reduce the mass flow rate. However, friction in the divergent section can sometimes lead to a slight increase in mass flow rate due to improved expansion.
*   **Lower enthalpy drop:** The actual enthalpy drop across the nozzle is less than the isentropic enthalpy drop.

### 5.2. Coefficients of Performance

To account for friction, several coefficients are used:

*   **Velocity Coefficient ($C_v$):** The ratio of actual velocity to isentropic velocity at the exit.
    $C_v = \frac{v_{actual}}{v_{isentropic}}$
    $C_v < 1$
*   **Coefficient of Discharge ($C_d$):** The ratio of actual mass flow rate to the isentropic mass flow rate.
    $C_d = \frac{\dot{m}_{actual}}{\dot{m}_{isentropic}}$
    $C_d < 1$
*   **Nozzle Efficiency ($\eta_{nozzle}$):** The ratio of actual kinetic energy at the exit to the isentropic kinetic energy.
    $\eta_{nozzle} = \frac{v_{actual}^2}{v_{isentropic}^2} = C_v^2$
    $\eta_{nozzle} < 1$

Alternatively, nozzle efficiency can be defined in terms of enthalpy drop:
$\eta_{nozzle} = \frac{h_0 - h_2}{h_0 - h_{2s}}$
where:
*   $h_0$ is the initial stagnation enthalpy.
*   $h_2$ is the actual enthalpy at the exit.
*   $h_{2s}$ is the isentropic enthalpy at the exit.

**[Nag, Chapter on Steam Nozzles]** extensively discusses these coefficients and their impact on nozzle efficiency and performance. Friction is often modeled using empirical relationships or by applying a friction factor.

### 5.3. Throat Pressure with Friction

Friction at the throat can slightly affect the critical pressure ratio. However, for practical purposes, the choking condition and critical pressure ratio derived for isentropic flow are often used as a good approximation, especially when considering the overall nozzle efficiency.

In a convergent nozzle, friction can slightly increase the throat pressure required for choking, or for a given pressure drop, it can reduce the mass flow rate.

In a convergent-divergent nozzle, friction in the throat still leads to choking at sonic velocity. Friction in the divergent section leads to an increase in exit pressure and a decrease in exit velocity compared to the isentropic case.

---

## 6. Supersaturated Flow

Under certain conditions, steam can expand through a nozzle at a rate faster than it can condense or form stable nuclei for condensation. This results in the steam remaining in a metastable vapor state, even below its saturation pressure. This phenomenon is known as **supersaturated flow** or **non-equilibrium flow**.

### 6.1. Conditions for Supersaturated Flow

*   **Rapid Expansion:** High expansion rates in the nozzle.
*   **Low Initial Degree of Superheat:** If the initial steam is highly superheated, it takes longer to reach the saturation curve.
*   **Absence of Nucleating Agents:** Lack of dust particles or imperfections that can initiate condensation.

### 6.2. Characteristics of Supersaturated Flow

*   **Lower Temperature and Pressure:** The steam expands to a pressure lower than the saturation pressure corresponding to its temperature. The saturation curve on a Mollier (h-s) diagram represents equilibrium flow. Supersaturated flow follows a path to the left of the saturation curve.
*   **Higher Velocity:** Since the steam does not release latent heat (because it hasn't condensed), the total enthalpy drop is greater, leading to higher exit velocities than in equilibrium flow.
*   **Re-establishment of Equilibrium:** As the steam continues to expand and cool, it eventually reaches a point where condensation begins. This is the ** Wilson line** or **point of spontaneous condensation**. Once condensation starts, the steam rapidly moves towards the saturation curve, releasing latent heat and reducing the velocity (a process of re-establishment of equilibrium).

### 6.3. Effects on Nozzle Performance

*   **Increased Exit Velocity:** Due to the higher enthalpy drop before condensation.
*   **Increased Mass Flow Rate:** For a given nozzle, higher exit velocity can lead to a slightly higher mass flow rate.
*   **Reduced Nozzle Efficiency (Overall):** While exit velocity might be higher, the overall energy conversion process is affected by the non-equilibrium nature. The latent heat that could have been converted to kinetic energy is released later and less efficiently.
*   **Erosion:** The formation of fine water droplets during the re-establishment of equilibrium can cause erosion of turbine blades.

**[El Wakil, Chapter on Thermodynamics of Expansion]** and **[Nag, Chapter on Steam Nozzles]** will provide detailed explanations of supersaturated flow, including graphical representations on Mollier diagrams and the concept of the Wilson line. They might also discuss the **Fausinger's equation** or other empirical correlations for predicting the onset of condensation.

**Key Concept: Wilson Line:** The line on a Mollier diagram representing the limit of supersaturation, beyond which spontaneous condensation occurs.

---

## 7. Key Points to Remember

*   **Choking:** The phenomenon where the flow velocity at the throat of a nozzle reaches sonic speed (Mach 1), leading to the maximum possible mass flow rate for given upstream conditions.
*   **Critical Pressure Ratio:** The ratio of throat pressure to upstream stagnation pressure at the choking condition. For isentropic flow of a gas with specific heat ratio $\gamma$, it's $(\frac{2}{\gamma+1})^{\frac{\gamma}{\gamma-1}}$.
*   **Convergent Nozzle:** Can only pass subsonic flow, choked at the throat.
*   **Convergent-Divergent Nozzle:** Required for supersonic flow. Chokes at the throat, and expansion continues in the divergent section.
*   **Friction:** Reduces exit velocity, increases exit pressure, decreases mass flow rate (for a choked nozzle), and reduces nozzle efficiency. Accounted for by coefficients like $C_v$, $C_d$, and $\eta_{nozzle}$.
*   **Supersaturated Flow:** Steam expands below saturation pressure without condensing, leading to higher exit velocities but potential for erosion. Occurs due to rapid expansion and lack of nucleation sites.
*   **Wilson Line:** The limit of supersaturation beyond which spontaneous condensation occurs.

---

## 8. Practice Questions and Answers

**Question 1:**
A nozzle receives steam at 10 bar, $300^\circ$C. The nozzle is convergent-divergent. If the steam expands isentropically, what is the pressure at the throat if choking occurs? (Assume $\gamma = 1.3$ for steam.)

**Answer 1:**
For choking to occur in a convergent-divergent nozzle, the flow at the throat is sonic. The critical pressure ratio is given by:
$(\frac{P_{th}}{P_0})_{critical} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}}$
Given $P_0 = 10$ bar and $\gamma = 1.3$:
$(\frac{P_{th}}{10})_{critical} = \left(\frac{2}{1.3+1}\right)^{\frac{1.3}{1.3-1}} = \left(\frac{2}{2.3}\right)^{\frac{1.3}{0.3}} = (0.8696)^{4.333} \approx 0.579$
$P_{th, critical} \approx 0.579 \times 10 \text{ bar} \approx 5.79 \text{ bar}$

**Question 2:**
What is the main effect of friction in a steam nozzle?

**Answer 2:**
The main effect of friction in a steam nozzle is to reduce the exit velocity of the steam jet and hence reduce the kinetic energy gained by the steam. This leads to a lower nozzle efficiency. Friction also generally leads to a higher exit pressure and a slightly reduced mass flow rate for a choked nozzle.

**Question 3:**
Define supersaturated flow. What are its advantages and disadvantages in a steam turbine?

**Answer 3:**
**Definition:** Supersaturated flow is a phenomenon where steam expands through a nozzle at a rate faster than it can condense. The steam remains in a metastable vapor state, below its saturation pressure, without significant moisture formation.

**Advantages:**
*   **Higher Exit Velocity:** Leads to increased kinetic energy of the steam jet, potentially improving turbine efficiency if managed properly.

**Disadvantages:**
*   **Erosion:** Upon re-establishment of equilibrium (condensation), fine water droplets can form, causing erosion of turbine blades.
*   **Lower Overall Efficiency:** Latent heat is released later in the expansion, which is generally less efficient for conversion into useful work compared to initial superheated steam expansion.
*   **Unpredictability:** The precise point of condensation and the resulting behavior can be difficult to predict and control.

**Question 4:**
If a convergent nozzle has an upstream stagnation pressure of 8 bar and its exhaust pressure is 3 bar. Is the nozzle choked? (Use the critical pressure ratio of 0.579 calculated in Question 1).

**Answer 4:**
The critical pressure ratio for choking is $P_{th}/P_0 = 0.579$.
The pressure ratio across the nozzle is $P_0 / P_{exhaust} = 8 \text{ bar} / 3 \text{ bar} = 2.667$.
The pressure ratio at the throat for choking is $P_{th}/P_0 = 0.579$. This means the exhaust pressure must be less than or equal to the pressure corresponding to this critical ratio, which is $0.579 \times P_0$.
The pressure at the throat for choking would be $0.579 \times 8 \text{ bar} = 4.632 \text{ bar}$.
Since the exhaust pressure (3 bar) is less than the pressure required at the throat for choking (4.632 bar), the nozzle will be choked. The pressure at the throat will be 4.632 bar, and the velocity at the throat will be sonic. The steam will then expand further in the nozzle to reach the exhaust pressure of 3 bar (although in a convergent nozzle, it cannot expand supersonically, so the throat pressure would be the exit pressure if it's not choked).

*Correction on the interpretation for a convergent nozzle:* For a convergent nozzle, choking occurs when $P_{exhaust} \le P_{th, critical}$. If the exhaust pressure is $P_a$, and $P_0/P_a > (P_0/P_{th})_{critical}$, then choking occurs.
In this case, $P_0 = 8$ bar and $P_{exhaust} = 3$ bar.
The critical throat pressure is $P_{th, critical} = 0.579 \times 8 \text{ bar} = 4.632 \text{ bar}$.
Since the exhaust pressure ($3$ bar) is less than the critical throat pressure ($4.632$ bar), the nozzle is choked. The pressure at the throat is $4.632$ bar, and the velocity at the throat is sonic. The pressure at the exit of the convergent nozzle is the critical throat pressure, NOT the exhaust pressure if the exhaust pressure is lower.

**Revised Answer 4:**
The critical pressure ratio for choking in a convergent nozzle is $P_{th}/P_0 = 0.579$.
The upstream stagnation pressure is $P_0 = 8$ bar.
The critical throat pressure is $P_{th, critical} = 0.579 \times 8 \text{ bar} = 4.632 \text{ bar}$.
The exhaust pressure is $P_a = 3$ bar.
For a convergent nozzle, choking occurs if the exhaust pressure ($P_a$) is less than or equal to the critical throat pressure ($P_{th, critical}$).
Since $3 \text{ bar} < 4.632 \text{ bar}$, the nozzle is **choked**.
The pressure at the throat will be $4.632$ bar, and the velocity at the throat will be sonic. The pressure at the exit of the nozzle will be the critical throat pressure, $4.632$ bar, as a convergent nozzle cannot pass flow at a pressure lower than this while remaining choked.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
