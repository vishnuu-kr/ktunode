---
title: "Method of power factor improvement using capacitors (numerical problems)"
subject: "POWER GENERATION, TRANSMISSION AND PROTECTION"
module: "Module 3: Introduction to EHVAC and HVDC: Principle, advantages/disadvantages"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3618d"
status: "completed"
scrapedAt: "2026-05-23T16:23:32.362Z"
---
# POWER GENERATION, TRANSMISSION AND PROTECTION

## Module 3: Introduction to EHVAC and HVDC: Principle, Advantages/Disadvantages

### Topic: Method of Power Factor Improvement Using Capacitors (Numerical Problems)

---

### 1. Introduction and Importance of Power Factor

**What is Power Factor?**

Power factor (PF) is a measure of how effectively electrical power is being used in an AC circuit. It is defined as the ratio of **real power (P)** (measured in Watts, W, or kilowatts, kW) to the **apparent power (S)** (measured in Volt-Amperes, VA, or kiloVolt-Amperes, kVA).

Mathematically:
$$
\text{Power Factor} = \frac{\text{Real Power (P)}}{\text{Apparent Power (S)}} = \cos(\phi)
$$

Where:
*   **Real Power (P):** The power that performs useful work (e.g., rotating a motor, producing light, heating).
*   **Reactive Power (Q):** The power that is required to establish and maintain magnetic fields (in inductive loads like motors, transformers) or electric fields (in capacitive loads). It does not perform useful work but is essential for the operation of many electrical devices. Measured in Volt-Amperes Reactive (VAR) or kiloVolt-Amperes Reactive (kVAR).
*   **Apparent Power (S):** The vector sum of real power and reactive power. It represents the total power that the circuit must be capable of delivering. $S = \sqrt{P^2 + Q^2}$.

**The Power Triangle:**

The relationship between P, Q, and S can be visualized using a right-angled triangle:

```
      /|
     / | Q (Reactive Power)
    /  |
   /___|
  P (Real Power)     S (Apparent Power)
```

The angle $\phi$ between P and S is the **phase angle** between the voltage and current. The power factor is $\cos(\phi)$.

**Why is a Low Power Factor Undesirable?**

*   **Increased Current:** For a given amount of real power (kW), a lower power factor means a higher apparent power (kVA) is required. This leads to higher current flowing through the system.
    *   From $P = V \times I \times \cos(\phi)$, if P and V are constant, then I is inversely proportional to $\cos(\phi)$.
*   **Larger Conductors and Equipment:** Higher currents require larger conductor sizes (cables, busbars), larger transformers, and switchgear, leading to increased capital costs.
*   **Increased Voltage Drop:** Higher current causes a greater voltage drop across transmission and distribution lines and transformers, leading to lower voltage at the load end, which can affect the performance of equipment.
*   **Reduced System Capacity:** The generator and transformer capacity is rated in kVA. A low power factor means that a larger portion of this kVA capacity is used to supply reactive power, leaving less capacity for real power delivery.
*   **Increased Losses:** Higher currents lead to increased $I^2R$ losses in conductors, resulting in wasted energy.
*   **Penalties from Utilities:** Electricity utilities often impose penalties on industrial and commercial consumers whose power factor falls below a certain threshold (typically 0.9 or 0.95 lagging) to compensate for the increased costs associated with supplying reactive power.

**Ideal Power Factor:**

An ideal power factor is **unity (1.0)**, where the real power equals the apparent power ($\cos(\phi) = 1$, so $\phi = 0^\circ$). In this case, there is no reactive power.

---

### 2. Power Factor Improvement (PFI) Using Capacitors

**What is Power Factor Improvement?**

Power factor improvement is the process of increasing the power factor of an AC electrical system to a value closer to unity. This is typically achieved by introducing devices that can supply reactive power, counteracting the inductive reactive power consumed by loads.

**Capacitors as a Solution:**

Inductive loads (like induction motors, transformers) consume lagging reactive power. Static capacitors provide leading reactive power. By connecting capacitors in parallel with the inductive loads, the leading reactive power supplied by the capacitors cancels out a portion of the lagging reactive power demanded by the load, thereby improving the overall power factor.

**Mechanism of Improvement:**

Consider a load with real power P and lagging reactive power $Q_L$. The apparent power is $S = \sqrt{P^2 + Q_L^2}$, and the power factor is $\cos(\phi_1) = P/S$.

When capacitors are connected in parallel, they supply a leading reactive power $Q_C$. The net reactive power becomes $Q_{net} = Q_L - Q_C$.
The new apparent power $S_{new} = \sqrt{P^2 + (Q_L - Q_C)^2}$.
The new power factor $\cos(\phi_2) = P/S_{new}$.

Since $Q_C$ is in the opposite direction to $Q_L$, the resultant reactive power $Q_{net}$ is reduced, and consequently, the apparent power $S_{new}$ is also reduced. As P remains constant, the power factor $\cos(\phi_2)$ increases.

**Location of Capacitors:**

Capacitors can be installed at various locations:

*   **At the Load Terminals:** Most effective as it reduces current in the feeders, transformers, and switchgear supplying that load.
*   **At Substation Busbars:** Improves the power factor of the entire substation and reduces losses in the transmission lines feeding the substation.
*   **On Distribution Feeders:** Helps improve voltage profile and reduce losses.

**Types of Capacitor Banks:**

*   **Fixed Capacitor Banks:** Connected permanently to the system, usually switched with the load.
*   **Automatic Capacitor Banks:** Equipped with automatic controllers that switch capacitor steps in and out based on the measured power factor or reactive power, ensuring optimal power factor correction throughout the day.

---

### 3. Numerical Problems on Power Factor Improvement

This section will focus on solving problems involving calculating the required capacitor kVAR, the new power factor, and other related parameters.

**Key Formulas:**

1.  **Real Power (P):**
    *   For 3-phase: $P = \sqrt{3} V_L I_L \cos(\phi)$ (kW)
    *   For 1-phase: $P = V I \cos(\phi)$ (kW)
    *   $P = V^2/R$ (if resistance is known)

2.  **Reactive Power (Q):**
    *   For 3-phase: $Q_L = \sqrt{3} V_L I_L \sin(\phi)$ (kVAR)
    *   For 1-phase: $Q_L = V I \sin(\phi)$ (kVAR)
    *   $Q_L = P \tan(\phi)$

3.  **Apparent Power (S):**
    *   For 3-phase: $S = \sqrt{3} V_L I_L$ (kVA)
    *   For 1-phase: $S = V I$ (kVA)
    *   $S = \sqrt{P^2 + Q^2}$

4.  **Relationship between Power Factor and Angle:**
    *   If PF is known, $\phi = \arccos(\text{PF})$.
    *   $\tan(\phi) = \frac{\sqrt{1 - \text{PF}^2}}{\text{PF}}$

5.  **Required Capacitor kVAR ($Q_C$):**
    *   $Q_C = P (\tan(\phi_1) - \tan(\phi_2))$
    *   Where $\phi_1$ is the initial phase angle and $\phi_2$ is the desired final phase angle.

---

**Example 1: Calculating Required Capacitor kVAR**

**Problem:** A factory has a load of 500 kW at a power factor of 0.8 lagging. The supply voltage is 400 V. Determine the kVAR of the capacitor bank required to improve the power factor to 0.95 lagging.

**Solution:**

**Given:**
*   Real Power, $P = 500$ kW
*   Initial Power Factor, $\text{PF}_1 = 0.8$ lagging
*   Desired Power Factor, $\text{PF}_2 = 0.95$ lagging
*   Supply Voltage, $V = 400$ V (3-phase system is usually assumed for factory loads unless specified)

**Steps:**

1.  **Calculate the initial phase angle ($\phi_1$):**
    $$
    \phi_1 = \arccos(\text{PF}_1) = \arccos(0.8) \approx 36.87^\circ
    $$
    $$
    \tan(\phi_1) = \tan(36.87^\circ) \approx 0.75
    $$

2.  **Calculate the desired phase angle ($\phi_2$):**
    $$
    \phi_2 = \arccos(\text{PF}_2) = \arccos(0.95) \approx 18.19^\circ
    $$
    $$
    \tan(\phi_2) = \tan(18.19^\circ) \approx 0.3287
    $$

3.  **Calculate the initial reactive power ($Q_{L1}$):**
    $$
    Q_{L1} = P \times \tan(\phi_1) = 500 \text{ kW} \times 0.75 = 375 \text{ kVAR}
    $$

4.  **Calculate the desired reactive power ($Q_{L2}$):**
    $$
    Q_{L2} = P \times \tan(\phi_2) = 500 \text{ kW} \times 0.3287 \approx 164.35 \text{ kVAR}
    $$

5.  **Calculate the required capacitor kVAR ($Q_C$):**
    The capacitor bank needs to supply the difference between the initial and desired reactive power.
    $$
    Q_C = Q_{L1} - Q_{L2} = 375 \text{ kVAR} - 164.35 \text{ kVAR} \approx 210.65 \text{ kVAR}
    $$
    Alternatively, using the direct formula:
    $$
    Q_C = P (\tan(\phi_1) - \tan(\phi_2)) = 500 \text{ kW} (0.75 - 0.3287) = 500 \text{ kW} (0.4213) \approx 210.65 \text{ kVAR}
    $$

**Answer:** A capacitor bank of approximately 210.65 kVAR is required.

---

**Example 2: Calculating New Power Factor and Current**

**Problem:** A 3-phase induction motor takes 10 kVA at a power factor of 0.7 lagging from a 400 V supply. A capacitor bank of 2 kVAR is connected in parallel with the motor. Calculate the new power factor and the total current drawn from the supply.

**Solution:**

**Given:**
*   Apparent Power of Motor, $S_1 = 10$ kVA
*   Power Factor of Motor, $\text{PF}_1 = 0.7$ lagging
*   Supply Voltage, $V = 400$ V
*   Capacitor Bank Rating, $Q_C = 2$ kVAR

**Steps:**

1.  **Calculate the real power (P) of the motor:**
    $$
    P = S_1 \times \text{PF}_1 = 10 \text{ kVA} \times 0.7 = 7 \text{ kW}
    $$

2.  **Calculate the initial reactive power ($Q_{L1}$) of the motor:**
    $$
    \phi_1 = \arccos(0.7) \approx 45.57^\circ
    $$
    $$
    Q_{L1} = S_1 \sin(\phi_1) = 10 \text{ kVA} \times \sin(45.57^\circ) \approx 10 \times 0.714 \approx 7.14 \text{ kVAR}
    $$
    Alternatively:
    $$
    Q_{L1} = P \tan(\phi_1) = 7 \text{ kW} \times \tan(45.57^\circ) \approx 7 \times 1.02 \approx 7.14 \text{ kVAR}
    $$

3.  **Calculate the net reactive power ($Q_{net}$):**
    The capacitor bank supplies $Q_C = 2$ kVAR of leading reactive power.
    $$
    Q_{net} = Q_{L1} - Q_C = 7.14 \text{ kVAR} - 2 \text{ kVAR} = 5.14 \text{ kVAR}
    $$

4.  **Calculate the new apparent power ($S_{new}$):**
    The real power P remains the same.
    $$
    S_{new} = \sqrt{P^2 + Q_{net}^2} = \sqrt{(7 \text{ kW})^2 + (5.14 \text{ kVAR})^2}
    $$
    $$
    S_{new} = \sqrt{49 + 26.4196} = \sqrt{75.4196} \approx 8.684 \text{ kVA}
    $$

5.  **Calculate the new power factor ($\text{PF}_{new}$):**
    $$
    \text{PF}_{new} = \frac{P}{S_{new}} = \frac{7 \text{ kW}}{8.684 \text{ kVA}} \approx 0.806 \text{ lagging}
    $$

6.  **Calculate the total current drawn from the supply:**
    For a 3-phase system, $S = \sqrt{3} V_L I_L$.
    $$
    I_{new} = \frac{S_{new}}{\sqrt{3} V_L} = \frac{8.684 \times 10^3 \text{ VA}}{\sqrt{3} \times 400 \text{ V}}
    $$
    $$
    I_{new} = \frac{8684}{1.732 \times 400} = \frac{8684}{692.8} \approx 12.53 \text{ Amperes}
    $$

**Answer:** The new power factor is approximately 0.806 lagging, and the total current drawn from the supply is approximately 12.53 A.

---

**Example 3: Calculating the Size of Capacitor Bank to Achieve Unity Power Factor**

**Problem:** A 3-phase load consumes 80 kW of real power and requires 60 kVAR of lagging reactive power. Calculate the kVAR rating of the capacitor bank needed to make the power factor unity.

**Solution:**

**Given:**
*   Real Power, $P = 80$ kW
*   Initial Reactive Power, $Q_{L1} = 60$ kVAR

**Steps:**

1.  **Calculate the initial power factor (optional but good for understanding):**
    $$
    S_1 = \sqrt{P^2 + Q_{L1}^2} = \sqrt{(80)^2 + (60)^2} = \sqrt{6400 + 3600} = \sqrt{10000} = 100 \text{ kVA}
    $$
    $$
    \text{PF}_1 = \frac{P}{S_1} = \frac{80 \text{ kW}}{100 \text{ kVA}} = 0.8 \text{ lagging}
    $$

2.  **Determine the desired reactive power ($Q_{L2}$):**
    For unity power factor ($\text{PF} = 1.0$), the reactive power required is zero. So, $Q_{L2} = 0$ kVAR.

3.  **Calculate the required capacitor kVAR ($Q_C$):**
    The capacitor bank needs to supply all the existing lagging reactive power to bring it to zero.
    $$
    Q_C = Q_{L1} - Q_{L2} = 60 \text{ kVAR} - 0 \text{ kVAR} = 60 \text{ kVAR}
    $$
    Using the tan formula:
    $$
    \phi_1 = \arccos(0.8) \approx 36.87^\circ \implies \tan(\phi_1) \approx 0.75
    $$
    For unity power factor, $\text{PF}_2 = 1.0$, so $\phi_2 = 0^\circ$ and $\tan(\phi_2) = 0$.
    $$
    Q_C = P (\tan(\phi_1) - \tan(\phi_2)) = 80 \text{ kW} (0.75 - 0) = 80 \times 0.75 = 60 \text{ kVAR}
    $$

**Answer:** A capacitor bank of 60 kVAR is required to achieve unity power factor.

---

**Example 4: Impact of Capacitors on Load Current**

**Problem:** A 3-phase load of 100 kW at 0.8 lagging power factor is connected to a 415 V supply.
(a) Calculate the initial line current.
(b) Calculate the kVAR of the capacitor bank required to improve the power factor to 0.95 lagging.
(c) Calculate the new line current after installing the capacitor bank.

**Solution:**

**Given:**
*   Real Power, $P = 100$ kW
*   Initial Power Factor, $\text{PF}_1 = 0.8$ lagging
*   Supply Voltage, $V_L = 415$ V
*   Desired Power Factor, $\text{PF}_2 = 0.95$ lagging

**(a) Calculate the initial line current ($I_{L1}$):**

1.  Calculate initial reactive power ($Q_{L1}$):
    $$
    \phi_1 = \arccos(0.8) \approx 36.87^\circ
    $$
    $$
    \tan(\phi_1) \approx 0.75
    $$
    $$
    Q_{L1} = P \times \tan(\phi_1) = 100 \text{ kW} \times 0.75 = 75 \text{ kVAR}
    $$

2.  Calculate initial apparent power ($S_1$):
    $$
    S_1 = \sqrt{P^2 + Q_{L1}^2} = \sqrt{(100)^2 + (75)^2} = \sqrt{10000 + 5625} = \sqrt{15625} = 125 \text{ kVA}
    $$

3.  Calculate initial line current ($I_{L1}$):
    For a 3-phase system, $S_1 = \sqrt{3} V_L I_{L1}$.
    $$
    I_{L1} = \frac{S_1}{\sqrt{3} V_L} = \frac{125 \times 10^3 \text{ VA}}{\sqrt{3} \times 415 \text{ V}} = \frac{125000}{1.732 \times 415} = \frac{125000}{718.58} \approx 173.95 \text{ A}
    $$

**(b) Calculate the kVAR of the capacitor bank ($Q_C$):**

1.  Calculate desired phase angle ($\phi_2$):
    $$
    \phi_2 = \arccos(0.95) \approx 18.19^\circ
    $$
    $$
    \tan(\phi_2) \approx 0.3287
    $$

2.  Calculate the desired reactive power ($Q_{L2}$):
    $$
    Q_{L2} = P \times \tan(\phi_2) = 100 \text{ kW} \times 0.3287 \approx 32.87 \text{ kVAR}
    $$

3.  Calculate the required capacitor kVAR ($Q_C$):
    $$
    Q_C = Q_{L1} - Q_{L2} = 75 \text{ kVAR} - 32.87 \text{ kVAR} \approx 42.13 \text{ kVAR}
    $$

**(c) Calculate the new line current ($I_{L2}$):**

1.  Calculate the new apparent power ($S_2$):
    $$
    S_2 = \sqrt{P^2 + Q_{L2}^2} = \sqrt{(100 \text{ kW})^2 + (32.87 \text{ kVAR})^2}
    $$
    $$
    S_2 = \sqrt{10000 + 1080.4369} = \sqrt{11080.4369} \approx 105.26 \text{ kVA}
    $$

2.  Calculate the new line current ($I_{L2}$):
    $$
    I_{L2} = \frac{S_2}{\sqrt{3} V_L} = \frac{105.26 \times 10^3 \text{ VA}}{\sqrt{3} \times 415 \text{ V}} = \frac{105260}{718.58} \approx 146.48 \text{ A}
    $$

**Answer:**
(a) Initial line current $\approx 173.95$ A.
(b) Capacitor bank required $\approx 42.13$ kVAR.
(c) New line current $\approx 146.48$ A.

---

### 4. Practice Questions and Exercises

**Question 1:**
A single-phase industrial load consumes 20 kW at a power factor of 0.75 lagging. The supply voltage is 240 V.
(a) Calculate the initial reactive power.
(b) Calculate the kVAR rating of a capacitor bank needed to improve the power factor to 0.95 lagging.
(c) Calculate the new total current drawn from the supply.

**Answer 1:**
(a) Initial reactive power ($Q_{L1}$) = $20 \times (\frac{\sqrt{1 - 0.75^2}}{0.75}) = 20 \times \frac{0.6614}{0.75} \approx 17.64$ kVAR
(b) New reactive power ($Q_{L2}$) = $20 \times (\frac{\sqrt{1 - 0.95^2}}{0.95}) = 20 \times \frac{0.3122}{0.95} \approx 6.58$ kVAR. Capacitor kVAR ($Q_C$) = $17.64 - 6.58 = 11.06$ kVAR.
(c) Initial current ($I_1$) = $\frac{20 \text{ kW}}{240 \text{ V} \times 0.75} = \frac{20000}{180} \approx 111.11$ A. New apparent power ($S_2$) = $\sqrt{20^2 + 6.58^2} \approx 21.03$ kVA. New current ($I_2$) = $\frac{21.03 \times 1000}{240} \approx 87.63$ A.

---

**Question 2:**
A 3-phase induction motor draws 15 kVA at a power factor of 0.8 lagging. A capacitor bank of 3 kVAR is connected to improve the power factor. Determine the new power factor and the saving in apparent power.

**Answer 2:**
Initial real power ($P$) = $15 \times 0.8 = 12$ kW.
Initial reactive power ($Q_{L1}$) = $15 \times \sin(\arccos(0.8)) = 15 \times 0.6 = 9$ kVAR.
Net reactive power ($Q_{net}$) = $9 - 3 = 6$ kVAR.
New apparent power ($S_{new}$) = $\sqrt{12^2 + 6^2} = \sqrt{144 + 36} = \sqrt{180} \approx 13.42$ kVA.
New power factor ($\text{PF}_{new}$) = $\frac{12}{13.42} \approx 0.894$ lagging.
Saving in apparent power = $15 - 13.42 = 1.58$ kVA.

---

**Question 3:**
A factory has a load of 250 kW at a power factor of 0.7 lagging. It is proposed to install capacitor banks to improve the power factor to 0.95 lagging. Calculate the required rating of the capacitor banks. If the cost of capacitor banks is Rs. 500 per kVAR, calculate the total cost.

**Answer 3:**
Initial phase angle ($\phi_1$) = $\arccos(0.7) \approx 45.57^\circ \implies \tan(\phi_1) \approx 1.02$
Desired phase angle ($\phi_2$) = $\arccos(0.95) \approx 18.19^\circ \implies \tan(\phi_2) \approx 0.3287$
Required Capacitor kVAR ($Q_C$) = $250 \times (1.02 - 0.3287) = 250 \times 0.6913 \approx 172.83$ kVAR.
Total Cost = $172.83 \text{ kVAR} \times \text{Rs. } 500/\text{kVAR} \approx \text{Rs. } 86,415$.

---

### 5. Important Points to Remember

*   **Power Factor:** Ratio of Real Power (kW) to Apparent Power (kVA).
*   **Lagging PF:** Characteristic of inductive loads (motors, transformers). Current lags voltage.
*   **Leading PF:** Characteristic of capacitive loads. Current leads voltage.
*   **Capacitors:** Supply leading reactive power, used to compensate for lagging reactive power from inductive loads.
*   **Objective:** Improve PF towards unity (1.0) to reduce current, losses, voltage drop, and improve system efficiency.
*   **Formula for $Q_C$:** $Q_C = P(\tan(\phi_{initial}) - \tan(\phi_{final}))$.
*   **Current Reduction:** Improving PF reduces the total current drawn for the same real power.
*   **Cost Implication:** Capacitors have a cost, but the savings from reduced energy bills (due to lower kVA demand and losses) and avoidance of utility penalties often justify the investment.
*   **Harmonic Resonance:** Care must be taken in systems with significant harmonic distortion, as standard capacitor banks can resonate with system inductances at certain harmonic frequencies, leading to over-voltages and capacitor failure. Filtered capacitor banks may be required in such cases.

---

### 6. Alignment with Course Outcomes (COs)

*   **CO1 (Generation Scheduling):** While this topic doesn't directly deal with generation scheduling, understanding power factor correction is crucial for overall system efficiency, which indirectly impacts generation requirements. A system with a better power factor can deliver more real power for the same apparent power rating, potentially reducing the need for additional generation capacity. (Knowledge Level: K3 - Applying)
*   **CO2 (Transmission Line Performance):** Power factor correction significantly improves transmission line performance by reducing current. Lower current means lower $I^2R$ losses in the line and reduced voltage drop. This allows more real power to be transmitted over the same line. (Knowledge Level: K3 - Applying)
*   **CO3 (Physical Characteristics):** The need for larger conductors, transformers, and switchgear due to low power factor is directly related to the current. By improving the power factor, the required physical size and cost of these components can be reduced. (Knowledge Level: K3 - Applying)
*   **CO4 (Relays and Switchgear):** While not directly about protection schemes, the current levels managed by switchgear and relays are influenced by power factor. Lower currents due to PFI mean that protective devices may need to be rated for lower currents or can be more selectively coordinated. (Knowledge Level: K2 - Understanding, as it impacts the context of protection operation)
*   **CO5 (Design of Distribution System):** Designing a distribution system involves ensuring adequate capacity and efficiency. Power factor correction is a standard design consideration to meet load demands economically and efficiently, reducing voltage drop and losses. (Knowledge Level: K3 - Applying)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. Textbook References

*   **Electrical Power Systems by Wadhwa C. L. (New Age International, 8th edition 2023):** This textbook provides a comprehensive treatment of power systems, including detailed explanations of power factor, its importance, and methods of improvement, including the use of capacitors. Numerical examples and theoretical concepts are well-covered.
*   **Principles of Power System by V. K. Mehta and Rohit Mehta (S. Chand, 4th edition reprint 2020):** This book is a popular choice for its clear explanations of fundamental concepts in power systems. It offers a good coverage of power factor correction, calculation methods, and illustrative examples.
*   **Power System Protection and Switchgear by Badri Ram and D.N. Viswakarma (Tata McGraw Hill, 2nd edition, 2011):** While primarily focused on protection, this book may touch upon the impact of power factor on the operation and sizing of protective devices and switchgear. (Less direct relevance to this specific topic but part of the overall course.)
*   **Non-conventional energy sources by B. H. Khan (Tata McGraw Hill, 3rd edition, 2017):** This book focuses on renewable energy sources. While it might mention power factor as a characteristic of loads, its direct relevance to the method of power factor improvement using capacitors in conventional systems is minimal. (Low relevance for this specific topic.)

*Reference Books:* The reference books by Koretsky and Kyle are in the field of Thermodynamics and Chemical Engineering and are not relevant to this topic in Electrical Power Systems.

---

This concludes the study notes for the method of power factor improvement using capacitors with numerical problems. Remember to practice these calculations to solidify your understanding.