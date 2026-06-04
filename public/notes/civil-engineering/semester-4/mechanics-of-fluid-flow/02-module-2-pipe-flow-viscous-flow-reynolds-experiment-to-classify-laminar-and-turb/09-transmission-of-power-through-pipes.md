---
title: "transmission of power through pipes"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 2: Pipe Flow: Viscous flow: Reynolds experiment to classify laminar and turbulent flows"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a6e"
status: "completed"
scrapedAt: "2026-05-20T18:46:29.777Z"
---
# MECHANICS OF FLUID FLOW: Module 2 - Pipe Flow: Viscous Flow

## Topic: Transmission of Power Through Pipes

This module focuses on the flow of viscous fluids within pipes, building upon the foundational understanding of laminar and turbulent flow established by Reynolds' experiments. We will now explore how this understanding is applied to the practical aspect of transmitting power through pipes.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

1.  **Define and explain the concept of power transmission through pipes.**
2.  **Identify and explain the various factors affecting power transmission efficiency in pipes.**
3.  **Derive and apply formulas for calculating power transmitted through pipes.**
4.  **Understand the concept of hydraulic efficiency and its relation to power transmission.**
5.  **Analyze and solve problems related to optimal power transmission in pipes.**

---

### 1. Power Transmission Through Pipes: The Concept

Power transmission through pipes is essentially the process of converting potential energy (or a combination of potential and pressure energy) of a fluid at a higher elevation or pressure into kinetic energy and then utilizing this kinetic energy to perform work, often by driving a turbine or other mechanical device.

*   **What is Power?**
    *   Power is the rate at which work is done or energy is transferred.
    *   In fluid mechanics, it's often expressed as the product of pressure and flow rate, or force and velocity.

*   **How is Power Transmitted?**
    *   A fluid at a higher potential energy level (e.g., in a reservoir) possesses pressure and/or elevation head.
    *   As this fluid flows through a pipe, some of this energy is converted into kinetic energy (velocity).
    *   This kinetic energy can then be harnessed to do work.

*   **Basic Principle:**
    *   The **hydraulic power** available at any section of a pipe is given by the rate at which energy is delivered by the fluid.
    *   This is typically calculated as the product of the pressure and the volumetric flow rate, or as the product of the specific weight of the fluid, the flow rate, and the head.

    $$ \text{Hydraulic Power (P)} = \text{Pressure} \times \text{Flow Rate (Q)} $$
    $$ \text{P} = \rho \times g \times H \times Q $$

    Where:
    *   $P$ = Hydraulic Power (Watts or Joules/second)
    *   $\rho$ = Density of the fluid (kg/m³)
    *   $g$ = Acceleration due to gravity (m/s²)
    *   $H$ = Total head of the fluid (m) (includes pressure head and elevation head)
    *   $Q$ = Volumetric flow rate (m³/s)

*   **Energy Loss:**
    *   During flow through pipes, energy is lost due to friction between the fluid and the pipe walls, and due to minor losses from fittings, bends, etc.
    *   These losses reduce the net power available for useful work.

---

### 2. Factors Affecting Power Transmission Efficiency

The efficiency of power transmission through pipes is significantly influenced by several factors. Understanding these factors is crucial for designing effective systems.

*   **Frictional Losses (Major Losses):**
    *   **Definition:** Energy loss due to the viscous shearing of fluid layers against each other and against the pipe wall.
    *   **Governed by:**
        *   **Length of the pipe ($L$):** Longer pipes lead to greater frictional losses.
        *   **Diameter of the pipe ($D$):** Smaller diameters result in higher velocity for the same flow rate, leading to increased friction.
        *   **Roughness of the pipe surface ($\epsilon$):** Rougher surfaces cause more turbulence and friction.
        *   **Velocity of the fluid ($V$):** Higher velocities increase frictional losses significantly.
        *   **Viscosity of the fluid ($\nu$):** More viscous fluids have higher frictional losses.
    *   **Quantified by:** Darcy-Weisbach Equation for head loss ($h_f$):
        $$ h_f = f \frac{L}{D} \frac{V^2}{2g} $$
        Where $f$ is the Darcy friction factor, which depends on the Reynolds number (Re) and relative roughness ($\epsilon/D$).

*   **Minor Losses:**
    *   **Definition:** Energy losses due to abrupt changes in flow direction or velocity, such as in bends, elbows, valves, entrances, and exits of pipes.
    *   **Quantified by:**
        $$ h_m = K \frac{V^2}{2g} $$
        Where $K$ is the minor loss coefficient, which is dimensionless and specific to the type of fitting or obstruction.

*   **Velocity of the Fluid:**
    *   **Impact:** Velocity has a squared effect on frictional losses ($V^2$ in Darcy-Weisbach). Higher velocities mean significantly higher losses.
    *   **Trade-off:** To transmit more power, a higher flow rate is generally required. However, increasing flow rate often means increasing velocity, which directly increases losses. This creates a delicate balance.

*   **Diameter of the Pipe:**
    *   **Impact:** A larger diameter pipe can carry a higher flow rate with a lower velocity, thus reducing frictional losses for a given flow rate.
    *   **Trade-off:** Larger pipes are more expensive to manufacture and install, and require more material.

*   **Available Head (Pressure):**
    *   **Impact:** The initial pressure or elevation difference of the fluid source determines the total energy available.
    *   **Requirement:** A sufficient head is needed to overcome frictional losses and still deliver useful work.

*   **Flow Rate ($Q$):**
    *   **Impact:** Higher flow rates carry more energy and thus have the potential for transmitting more power.
    *   **Relationship with Velocity:** $Q = A \times V = \frac{\pi D^2}{4} \times V$. For a fixed pipe diameter, increasing $Q$ directly increases $V$.

---

### 3. Formulas for Calculating Power Transmitted

We can derive formulas to calculate the power transmitted and the efficiency of transmission.

*   **Gross Hydraulic Power (Input Power):**
    *   This is the power available at the inlet of the pipe, assuming a certain head and flow rate.
    *   $$ P_{\text{gross}} = \rho g Q H_{\text{inlet}} $$

*   **Net Power Delivered (Output Power):**
    *   This is the power remaining after accounting for all energy losses in the pipe.
    *   $$ P_{\text{net}} = \rho g Q H_{\text{outlet}} $$
    *   Where $H_{\text{outlet}}$ is the head available at the outlet.
    *   Alternatively, it can be expressed as:
        $$ P_{\text{net}} = \rho g Q (H_{\text{inlet}} - H_{\text{losses}}) $$
        Where $H_{\text{losses}} = h_f + h_m$ is the total head loss.

*   **Power Lost in Friction:**
    *   The power dissipated due to friction in the pipe.
    *   $$ P_{\text{friction}} = \rho g Q h_f $$

*   **Hydraulic Efficiency ($\eta_H$):**
    *   The ratio of the net power delivered to the gross hydraulic power available.
    *   $$ \eta_H = \frac{P_{\text{net}}}{P_{\text{gross}}} = \frac{H_{\text{outlet}}}{H_{\text{inlet}}} = \frac{H_{\text{inlet}} - H_{\text{losses}}}{H_{\text{inlet}}} $$

*   **Power to Drive a Turbine:**
    *   If the fluid is used to drive a turbine, the power transmitted through the pipe system is the power that the turbine can extract. This is often the *net power* calculated above.
    *   The actual power output from the turbine will be further reduced by the turbine's own efficiency.

---

### 4. Hydraulic Efficiency and its Relation to Power Transmission

Hydraulic efficiency is a critical metric for evaluating the performance of a pipe system used for power transmission.

*   **Definition:** It represents how effectively the available fluid energy is converted into useful power at the outlet of the pipe.

*   **Maximizing Efficiency:** To maximize hydraulic efficiency, the head losses ($H_{\text{losses}}$) must be minimized relative to the total available head ($H_{\text{inlet}}$).

*   **Relationship to Velocity and Diameter:**
    *   For a given flow rate ($Q$), increasing the pipe diameter ($D$) reduces the velocity ($V$), which significantly reduces frictional losses ($h_f \propto V^2$ and $V \propto 1/D^2$). This increases efficiency.
    *   However, there's an optimal diameter. If the pipe becomes excessively large, the initial cost and capital expenditure might outweigh the gains in hydraulic efficiency.

*   **Optimal Power Transmission:**
    *   The problem of optimal power transmission through a pipe typically involves finding the pipe diameter that maximizes the power delivered to the end user (e.g., a turbine).
    *   At the point of maximum power output (net power), a common observation is that the head lost due to friction is approximately one-third of the total initial head available.

    *   **Derivation for Maximum Power Output:**
        Let the initial head be $H$. The head loss due to friction is $h_f = f \frac{L}{D} \frac{V^2}{2g}$.
        The net head available at the outlet is $H_{\text{net}} = H - h_f$.
        The power transmitted is $P = \rho g Q H_{\text{net}} = \rho g \left(\frac{\pi D^2}{4} V\right) (H - h_f)$.
        Using $h_f = f \frac{L}{D} \frac{V^2}{2g}$, we have $V = \sqrt{\frac{2gh_f D}{fL}}$.
        Substitute $V$ into the power equation:
        $$ P = \rho g \left(\frac{\pi D^2}{4} \sqrt{\frac{2gh_f D}{fL}}\right) (H - h_f) $$
        To maximize $P$ with respect to $h_f$ (assuming $D$ is the variable we are implicitly optimizing), we can set $\frac{dP}{dh_f} = 0$. This leads to the condition that the net head is twice the head loss for maximum power output, i.e., $H_{\text{net}} = 2 h_f$.
        Therefore, for maximum power output:
        $$ H - h_f = 2 h_f \implies H = 3 h_f $$
        This means that at maximum power transmission, the head lost due to friction is approximately **one-third of the total available head**.

---

### 5. Analyzing and Solving Problems Related to Optimal Power Transmission

Problems in this area often involve determining the optimal pipe diameter or calculating the maximum power that can be transmitted.

**Key Steps for Solving:**

1.  **Identify Given Information:** Total head available ($H$), pipe length ($L$), fluid properties ($\rho$, $\nu$), pipe material (for roughness $\epsilon$), and desired flow rate or power.
2.  **Determine Friction Factor ($f$):** This is often the trickiest part as $f$ depends on both Re and $\epsilon/D$. You might need to use the Moody chart or empirical formulas (like Colebrook-White or Swamee-Jain) and iterate if the diameter is unknown.
3.  **Calculate Head Losses ($h_f$, $h_m$):** Use Darcy-Weisbach for major losses and $h_m = \Sigma K \frac{V^2}{2g}$ for minor losses.
4.  **Calculate Power:** Use the appropriate power formula ($P = \rho g Q H_{\text{net}}$).
5.  **Optimization Problems:**
    *   If finding the optimal diameter for maximum power, use the condition $h_f \approx H/3$.
    *   This will involve an iterative process because $f$ depends on $D$, and $h_f$ depends on $D$ and $V$ (which in turn depends on $D$ for a fixed $Q$).

---

### Examples

**Example 1: Calculating Power Transmitted**

A reservoir supplies water ($\rho = 1000 \text{ kg/m}^3$, $\nu = 1 \times 10^{-6} \text{ m}^2/\text{s}$) to a turbine through a horizontal pipe of length 100 m and diameter 0.2 m. The water level in the reservoir is 20 m above the turbine. The average velocity of water in the pipe is 2 m/s. The pipe is smooth. Assume minor losses are negligible. Determine the hydraulic power delivered to the turbine.

**Solution:**

1.  **Given:**
    *   $H = 20 \text{ m}$ (initial head)
    *   $L = 100 \text{ m}$
    *   $D = 0.2 \text{ m}$
    *   $V = 2 \text{ m/s}$
    *   $\rho = 1000 \text{ kg/m}^3$, $g = 9.81 \text{ m/s}^2$
    *   Pipe is smooth ($\epsilon \approx 0$)

2.  **Calculate Flow Rate ($Q$):**
    *   $A = \frac{\pi D^2}{4} = \frac{\pi (0.2)^2}{4} = 0.0314 \text{ m}^2$
    *   $Q = A \times V = 0.0314 \times 2 = 0.0628 \text{ m}^3/\text{s}$

3.  **Calculate Reynolds Number (Re):**
    *   $Re = \frac{VD}{\nu} = \frac{2 \times 0.2}{1 \times 10^{-6}} = 4 \times 10^6$
    *   Since $Re > 4000$, the flow is turbulent.

4.  **Determine Friction Factor ($f$):**
    *   For a smooth pipe with very high Re, we can use the Blasius correlation for turbulent flow: $f = \frac{0.316}{Re^{0.25}}$.
    *   $f = \frac{0.316}{(4 \times 10^6)^{0.25}} = \frac{0.316}{39.8} \approx 0.00794$
    *   *(Alternatively, using Moody chart for smooth pipe, Re = 4x10^6 would give f around 0.008)*

5.  **Calculate Head Loss due to Friction ($h_f$):**
    *   $h_f = f \frac{L}{D} \frac{V^2}{2g} = 0.00794 \times \frac{100}{0.2} \times \frac{2^2}{2 \times 9.81}$
    *   $h_f = 0.00794 \times 500 \times \frac{4}{19.62} \approx 2.02 \text{ m}$

6.  **Calculate Net Head ($H_{\text{net}}$):**
    *   $H_{\text{net}} = H - h_f = 20 \text{ m} - 2.02 \text{ m} = 17.98 \text{ m}$

7.  **Calculate Hydraulic Power ($P$):**
    *   $P = \rho g Q H_{\text{net}} = 1000 \times 9.81 \times 0.0628 \times 17.98$
    *   $P \approx 111,080 \text{ Watts} = 111.08 \text{ kW}$

**Example 2: Optimal Power Transmission**

Water is to be transmitted from a reservoir at an elevation of 30 m above the turbine. The pipe length is 150 m and the pipe diameter is to be determined to transmit the maximum possible power. The pipe is made of cast iron with an absolute roughness ($\epsilon$) of 0.00026 m. Water has a kinematic viscosity ($\nu$) of $1 \times 10^{-6} \text{ m}^2/\text{s}$.

**Solution:**

1.  **Given:**
    *   $H = 30 \text{ m}$
    *   $L = 150 \text{ m}$
    *   $\epsilon = 0.00026 \text{ m}$
    *   $\nu = 1 \times 10^{-6} \text{ m}^2/\text{s}$
    *   For maximum power transmission, $h_f = H/3$.

2.  **Apply the condition for maximum power:**
    *   $h_f = 30 \text{ m} / 3 = 10 \text{ m}$

3.  **Use Darcy-Weisbach and the maximum power condition:**
    *   $h_f = f \frac{L}{D} \frac{V^2}{2g} \implies 10 = f \frac{150}{D} \frac{V^2}{2 \times 9.81}$
    *   $98.1 = f \frac{150}{D} V^2$
    *   Also, $Q = \frac{\pi D^2}{4} V$, so $V = \frac{4Q}{\pi D^2}$. Substituting this into the equation above leads to complex terms involving $Q$.

    *   **Alternative approach using $h_f$ and $V$ dependence:**
        Let's express $V$ in terms of $D$ from the head loss equation.
        $10 = f \frac{150}{D} \frac{V^2}{19.62}$
        $V^2 = \frac{10 \times 19.62 \times D}{150 f} = \frac{1.308 D}{f}$
        $V = \sqrt{\frac{1.308 D}{f}}$

    *   **Express $f$ in terms of $Re$ and $D$:**
        $Re = \frac{VD}{\nu} = \frac{\sqrt{1.308 D/f} \times D}{1 \times 10^{-6}} = 10^6 \sqrt{1.308} D^{3/2} f^{-1/2}$
        Relative roughness: $\frac{\epsilon}{D} = \frac{0.00026}{D}$

    *   We need to use an iterative approach. Let's assume a value for $D$, calculate $V$ and $Re$, find $f$ using the Colebrook equation (or Moody chart), and check if $h_f$ comes out to 10m.

    *   **Colebrook Equation:** $\frac{1}{\sqrt{f}} = -2.0 \log_{10}\left(\frac{\epsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}}\right)$

    *   **Let's try a diameter, say D = 0.3 m:**
        *   Relative roughness: $\epsilon/D = 0.00026 / 0.3 \approx 0.000867$
        *   Assume $f = 0.02$ (initial guess)
        *   $V = \sqrt{\frac{1.308 \times 0.3}{0.02}} = \sqrt{19.62} \approx 4.43 \text{ m/s}$
        *   $Re = \frac{4.43 \times 0.3}{1 \times 10^{-6}} = 1.33 \times 10^6$
        *   Now, calculate $f$ using Colebrook:
            $\frac{1}{\sqrt{f}} = -2.0 \log_{10}\left(\frac{0.000867}{3.7} + \frac{2.51}{1.33 \times 10^6 \sqrt{f}}\right)$
            $\frac{1}{\sqrt{f}} = -2.0 \log_{10}(0.000234 + 1.89 \times 10^{-6}/\sqrt{f})$
            *Iterating for f:*
            If $f=0.02$, $1/\sqrt{f} = 7.07$. RHS = $-2.0 \log_{10}(0.000234 + 1.89 \times 10^{-6}/7.07) \approx -2.0 \log_{10}(0.000234 + 0.000000267) \approx -2.0 \log_{10}(0.000234) \approx -2.0 \times (-3.63) \approx 7.26$.
            This suggests $f$ is slightly lower than 0.02. Let's try $f = 0.019$.
            $1/\sqrt{f} = 7.25$
            RHS = $-2.0 \log_{10}(0.000234 + 1.89 \times 10^{-6}/7.25) \approx -2.0 \log_{10}(0.000234 + 0.00000026) \approx 7.26$.
            So, $f \approx 0.019$.

        *   Now recalculate $V$ with $f=0.019$:
            $V = \sqrt{\frac{1.308 \times 0.3}{0.019}} = \sqrt{20.65} \approx 4.54 \text{ m/s}$
        *   Check head loss:
            $h_f = 0.019 \times \frac{150}{0.3} \times \frac{4.54^2}{2 \times 9.81} = 0.019 \times 500 \times \frac{20.61}{19.62} \approx 9.89 \text{ m}$

        This is very close to 10 m. So, $D = 0.3$ m is a good approximation for optimal power transmission.

    *   **Calculate maximum power:**
        *   $V = 4.54 \text{ m/s}$
        *   $Q = \frac{\pi (0.3)^2}{4} \times 4.54 = 0.320 \text{ m}^3/\text{s}$
        *   $P_{\text{max}} = \rho g Q h_f$ (power lost in friction, which is also $P_{\text{net}}$ when $h_f = H/3$)
        *   $P_{\text{max}} = 1000 \times 9.81 \times 0.320 \times 10 = 313,920 \text{ Watts} = 313.92 \text{ kW}$
        *   *Note: This is the net power delivered. The gross power is $P_{\text{gross}} = \rho g Q H = 1000 \times 9.81 \times 0.320 \times 30 = 941,760 \text{ W}$ ($941.76 \text{ kW}$). The efficiency is $313.92/941.76 \approx 33.3\%$, which is consistent with the $h_f = H/3$ condition.*

---

### Practice Questions

1.  **Question:** A pump supplies water at a head of 50 m to a hydraulic motor located 20 m below the pump. The pipe is 100 m long, with a diameter of 0.1 m. The flow rate is 0.05 m³/s. The kinematic viscosity of water is $1 \times 10^{-6} \text{ m}^2/\text{s}$, and the pipe is smooth. Neglect minor losses.
    a) Calculate the Reynolds number.
    b) Determine the friction factor.
    c) Calculate the head loss due to friction.
    d) Calculate the net power delivered to the hydraulic motor.
    e) Calculate the hydraulic efficiency of the pipe system.

2.  **Question:** For a given head of 40 m and a pipe length of 200 m, what is the diameter of the pipe required to transmit the maximum possible power if the pipe is made of concrete ($\epsilon = 0.0012$ m) and the kinematic viscosity of the fluid is $1.3 \times 10^{-6} \text{ m}^2/\text{s}$? (Hint: You will need to iterate.)

---

### Answers to Practice Questions

**Answer 1:**

*   **Given:** $H = 50 \text{ m}$ (head at pump inlet), $L = 100 \text{ m}$, $D = 0.1 \text{ m}$, $Q = 0.05 \text{ m}^3/\text{s}$, $\nu = 1 \times 10^{-6} \text{ m}^2/\text{s}$, smooth pipe.
*   **a) Reynolds Number:**
    *   $A = \frac{\pi (0.1)^2}{4} = 0.00785 \text{ m}^2$
    *   $V = \frac{Q}{A} = \frac{0.05}{0.00785} \approx 6.37 \text{ m/s}$
    *   $Re = \frac{VD}{\nu} = \frac{6.37 \times 0.1}{1 \times 10^{-6}} = 6.37 \times 10^6$. (Turbulent flow)
*   **b) Friction Factor ($f$):**
    *   For a smooth pipe with $Re = 6.37 \times 10^6$, using Blasius correlation: $f = \frac{0.316}{Re^{0.25}} = \frac{0.316}{(6.37 \times 10^6)^{0.25}} \approx \frac{0.316}{44.9} \approx 0.00704$.
*   **c) Head Loss due to Friction ($h_f$):**
    *   $h_f = f \frac{L}{D} \frac{V^2}{2g} = 0.00704 \times \frac{100}{0.1} \times \frac{(6.37)^2}{2 \times 9.81} = 0.00704 \times 1000 \times \frac{40.58}{19.62} \approx 14.58 \text{ m}$.
*   **d) Net Power Delivered:**
    *   The total head available at the pipe inlet is the pump head, $H_{\text{inlet}} = 50 \text{ m}$.
    *   The net head available at the outlet is $H_{\text{outlet}} = H_{\text{inlet}} - h_f = 50 \text{ m} - 14.58 \text{ m} = 35.42 \text{ m}$.
    *   $P_{\text{net}} = \rho g Q H_{\text{outlet}} = 1000 \times 9.81 \times 0.05 \times 35.42 \approx 17,371 \text{ Watts} = 17.37 \text{ kW}$.
*   **e) Hydraulic Efficiency:**
    *   $P_{\text{gross}} = \rho g Q H_{\text{inlet}} = 1000 \times 9.81 \times 0.05 \times 50 = 24,525 \text{ Watts} = 24.525 \text{ kW}$.
    *   $\eta_H = \frac{P_{\text{net}}}{P_{\text{gross}}} = \frac{17.37}{24.525} \approx 0.708$ or 70.8%.

**Answer 2:**

*   **Given:** $H = 40 \text{ m}$, $L = 200 \text{ m}$, $\epsilon = 0.0012 \text{ m}$, $\nu = 1.3 \times 10^{-6} \text{ m}^2/\text{s}$. Condition for maximum power: $h_f = H/3 = 40/3 \approx 13.33 \text{ m}$.
*   **Iteration Process:**
    *   We need to find $D$ such that $h_f = 13.33 \text{ m}$.
    *   $h_f = f \frac{L}{D} \frac{V^2}{2g} \implies 13.33 = f \frac{200}{D} \frac{V^2}{19.62}$
    *   $V^2 = \frac{13.33 \times 19.62 \times D}{200 f} = \frac{1.306 D}{f} \implies V = \sqrt{\frac{1.306 D}{f}}$
    *   $Re = \frac{VD}{\nu} = \frac{\sqrt{1.306 D/f} \times D}{1.3 \times 10^{-6}} = 1.14 \times 10^6 \sqrt{D^3/f}$
    *   $\epsilon/D = 0.0012/D$

    *   **Trial 1: D = 0.4 m**
        *   $\epsilon/D = 0.0012/0.4 = 0.003$
        *   Assume $f = 0.025$
        *   $V = \sqrt{\frac{1.306 \times 0.4}{0.025}} = \sqrt{20.9} \approx 4.57 \text{ m/s}$
        *   $Re = 1.14 \times 10^6 \times \sqrt{(0.4)^3 / 0.025} = 1.14 \times 10^6 \times \sqrt{10.24} \approx 3.66 \times 10^6$
        *   Using Colebrook: $1/\sqrt{f} = -2.0 \log_{10}(0.003/3.7 + 2.51 / (3.66 \times 10^6 \sqrt{f}))$
        *   $1/\sqrt{f} = -2.0 \log_{10}(0.000811 + 6.8 \times 10^{-7}/\sqrt{f})$
        *   If $f=0.025$, $1/\sqrt{f} = 6.32$. RHS = $-2.0 \log_{10}(0.000811 + 1.07 \times 10^{-7}) \approx -2.0 \log_{10}(0.000811) \approx -2.0 \times (-3.09) \approx 6.18$.
        *   $f$ should be slightly lower. Let's try $f = 0.023$.
        *   $1/\sqrt{f} = 6.57$. RHS = $-2.0 \log_{10}(0.000811 + 6.8 \times 10^{-7}/6.57) \approx -2.0 \log_{10}(0.000811 + 1.03 \times 10^{-7}) \approx 6.19$.
        *   So, $f \approx 0.023$.

        *   Recalculate $V$ with $f=0.023$:
            $V = \sqrt{\frac{1.306 \times 0.4}{0.023}} = \sqrt{22.73} \approx 4.77 \text{ m/s}$
        *   Check head loss:
            $h_f = 0.023 \times \frac{200}{0.4} \times \frac{4.77^2}{2 \times 9.81} = 0.023 \times 500 \times \frac{22.75}{19.62} \approx 13.37 \text{ m}$.
        *   This is very close to 13.33 m.

    *   Therefore, the required diameter for maximum power transmission is approximately **0.4 m**.

---

### Important Points to Remember:

*   **Power is the rate of energy transfer.** In pipes, this energy is primarily pressure and potential energy.
*   **Friction is the main enemy of efficient power transmission.** Minimize velocity and use smooth, appropriately sized pipes.
*   **Maximum power is transmitted when the head loss due to friction is approximately one-third of the total available head.**
*   **There is a trade-off between pipe diameter and cost.** A larger diameter reduces losses but increases capital expenditure.
*   **Friction factor ($f$) is crucial and depends on Re and relative roughness.** Iteration is often required for optimization problems where the diameter is unknown.
*   **Hydraulic efficiency is a measure of how well the system transmits power.** Higher efficiency means less energy wasted as heat due to friction.

---
This comprehensive study material covers the essential aspects of power transmission through pipes, from fundamental concepts to practical applications and problem-solving techniques.
