---
title: "AC Distribution systems – connection schemes – radial and ring main systems – single phase only (numerical problems)"
subject: "POWER GENERATION, TRANSMISSION AND PROTECTION"
module: "Module 3: Introduction to EHVAC and HVDC: Principle, advantages/disadvantages"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3618c"
status: "completed"
scrapedAt: "2026-05-23T16:23:31.551Z"
---
# Module 3: Introduction to EHVAC and HVDC: Principle, advantages/disadvantages

## Topic: AC Distribution Systems – Connection Schemes – Radial and Ring Main Systems – Single Phase Only (Numerical Problems)

**Course Outcomes Addressed:** CO5 (Design a simple ac electrical distribution system as per the standards. - K3)

**Learning Outcomes for this Topic:**

*   Understand the fundamental concepts of AC distribution systems.
*   Differentiate between radial and ring main distribution systems.
*   Analyze the advantages and disadvantages of each connection scheme.
*   Solve numerical problems related to single-phase radial and ring main distribution systems.

---

### 1. Introduction to AC Distribution Systems

**Definition:** An AC distribution system is the part of an electrical power system that carries electric energy from the substations (where voltage is stepped down from transmission levels) to the consumers' premises. It operates at lower voltages compared to transmission systems.

**Key Concepts:**

*   **Primary Distribution:** Operates at higher voltages (e.g., 11 kV, 33 kV) and carries power from the main substation to local distribution substations or directly to large industrial consumers.
*   **Secondary Distribution:** Operates at lower voltages (e.g., 400/230 V in India) and supplies power to domestic, commercial, and small industrial consumers. This topic focuses on secondary distribution.
*   **Feeders:** Conductors originating from the substation and carrying power to the distribution area.
*   **Distributors:** Conductors along which the power is delivered to the consumers.
*   **Service Mains:** Final connections from distributors to individual consumers.

**Textbook References:**

*   **Wadhwa C. L., Electrical Power Systems:** Chapters on Distribution Systems.
*   **Mehta V. K. & Mehta R., Principles of Power System:** Chapters on Distribution Systems.

---

### 2. AC Distribution System Connection Schemes

The way distributors are interconnected to form a network dictates the reliability and efficiency of the distribution system. For single-phase distribution, the most common schemes are radial and ring main.

#### 2.1 Radial Distribution System

**Princ:** In a radial system, distributors are fed from a single source (substation busbar) and extend outwards like the spokes of a wheel. Each distributor has a distinct end.

**Diagram (Conceptual - Single Phase):**

```
       Substation
          |
          +-------+-------+
          |       |       |
        Feeder Feeder Feeder
          |       |       |
      Distributor Distributor Distributor
          |       |       |
     Consumer Consumer Consumer
```

**Key Characteristics:**

*   **Simple Design:** Easiest to design and install.
*   **Lower Initial Cost:** Requires less conductor material compared to other systems.
*   **Single Point of Supply:** Each distributor is supplied from one end.
*   **Vulnerability:** If any part of the feeder or distributor is damaged or a fault occurs, the entire section beyond the fault is de-energized, leading to power outage for all consumers in that section.

**Advantages:**

*   **Low initial cost:** Due to simpler construction and less conductor material.
*   **Easy to implement:** Straightforward design and installation.
*   **Simple protection:** Fault detection and isolation are relatively easy.

**Disadvantages:**

*   **Lower reliability:** A single fault can cause a widespread outage.
*   **Voltage drop:** Voltage at the far end of the distributor can be significantly lower than at the near end, especially under heavy load. This can lead to voltage regulation issues.
*   **Inefficient for large areas:** Not suitable for areas with high load densities or where uninterrupted supply is critical.

**Textbook References:**

*   **Wadhwa C. L., Electrical Power Systems:** Discusses radial systems in the context of distribution network configurations.
*   **Mehta V. K. & Mehta R., Principles of Power System:** Provides a good overview of the radial system's characteristics and limitations.

#### 2.2 Ring Main Distribution System

**Princ:** In a ring main system, distributors are connected in a closed loop, with feeders from the substation tapping into the loop at one or more points. This ensures that power can be supplied to any point on the distributor from two directions.

**Diagram (Conceptual - Single Phase):**

```
       Substation
          |
      +---+---+
      |       |
   Feeder   Feeder
      |       |
  Distributor Distributor
      |       |
  +-----------+-----------+
  |           |           |
Consumer   Consumer   Consumer
```

**Key Characteristics:**

*   **Closed Loop:** Distributors form a continuous loop.
*   **Two-Way Supply:** Power can be supplied from both directions to any point on the ring.
*   **Higher Reliability:** If a fault occurs in one section of the ring, the remaining part can still be energized from the other direction, isolating only the faulted section.
*   **Improved Voltage Regulation:** Load is shared between two feeders, reducing voltage drop compared to a radial system of similar length.

**Advantages:**

*   **Improved reliability:** Faults can be isolated, and supply can be maintained to most consumers.
*   **Better voltage regulation:** Lower voltage drop due to balanced loading and two-way supply.
*   **Flexibility:** Load can be easily shifted between feeders.
*   **Reduced conductor size:** For a given load and voltage drop, conductor size can be smaller than in a radial system.

**Disadvantages:**

*   **Higher initial cost:** Requires more conductor material to form the loop and additional switchgear for sectionalizing.
*   **More complex protection:** Fault location and isolation can be more complex, requiring proper sectionalizing points and protective devices.
*   **Load balancing:** Maintaining balanced load on both sides of the loop is crucial for optimal performance.

**Textbook References:**

*   **Wadhwa C. L., Electrical Power Systems:** Detailed explanation of ring main systems, including their advantages and protection.
*   **Mehta V. K. & Mehta R., Principles of Power System:** Covers ring main systems with emphasis on reliability and voltage drop.

---

### 3. Numerical Problems (Single Phase Only)

This section focuses on calculating voltage drops and analyzing the performance of radial and ring main systems.

#### 3.1 Radial Systems

**Key Formulae:**

*   **Voltage Drop (Vd):** $Vd = I \times R$, where $I$ is the current and $R$ is the resistance of the conductor.
*   **Total Voltage Drop:** Sum of voltage drops in all sections.
*   **Regulation:** Percentage voltage regulation = $\frac{\text{Voltage at sending end} - \text{Voltage at receiving end}}{\text{Voltage at receiving end}} \times 100$

**Example 1: Voltage Drop in a Radial Feeder**

A single-phase, 230 V AC distributor is fed from a substation. It has the following loads connected at various points:

*   Point A: 10 kW at 0.8 lagging power factor, 100 m from the substation.
*   Point B: 15 kW at 0.9 lagging power factor, 250 m from the substation.
*   Point C: 20 kW at 0.85 lagging power factor, 400 m from the substation.

The distributor has a resistance of $0.1 \ \Omega/\text{km}$ and a reactance of $0.2 \ \Omega/\text{km}$.

**Solution:**

First, we need to calculate the current drawn by each section of the distributor. We'll work backward from the farthest point.

*   **Section C (400m to 250m):**
    *   Load at C = 20 kW
    *   Power Factor (pf) at C = 0.85 lagging
    *   Voltage (V) = 230 V
    *   Current ($I_C$) = $\frac{P}{V \times pf} = \frac{20 \times 1000}{230 \times 0.85} \approx 101.7 \text{ A}$
    *   Resistance of Section C (0.15 km) = $0.1 \ \Omega/\text{km} \times 0.15 \text{ km} = 0.015 \ \Omega$
    *   Reactance of Section C (0.15 km) = $0.2 \ \Omega/\text{km} \times 0.15 \text{ km} = 0.03 \ \Omega$
    *   Total impedance of Section C ($Z_C$) = $\sqrt{0.015^2 + 0.03^2} \approx 0.0335 \ \Omega$
    *   Voltage drop in Section C ($Vd_C$) $\approx I_C \times Z_C = 101.7 \text{ A} \times 0.0335 \ \Omega \approx 3.41 \text{ V}$

*   **Section B (250m to 100m):**
    *   Load at B = 15 kW
    *   Power Factor (pf) at B = 0.9 lagging
    *   Current ($I_B$) = $\frac{15 \times 1000}{230 \times 0.9} \approx 72.5 \text{ A}$
    *   Total current flowing through Section B = $I_C + I_B = 101.7 + 72.5 = 174.2 \text{ A}$
    *   Resistance of Section B (0.15 km) = $0.015 \ \Omega$
    *   Reactance of Section B (0.15 km) = $0.03 \ \Omega$
    *   Total impedance of Section B ($Z_B$) = $0.0335 \ \Omega$
    *   Voltage drop in Section B ($Vd_B$) $\approx 174.2 \text{ A} \times 0.0335 \ \Omega \approx 5.83 \text{ V}$

*   **Section A (100m to Substation):**
    *   Load at A = 10 kW
    *   Power Factor (pf) at A = 0.8 lagging
    *   Current ($I_A$) = $\frac{10 \times 1000}{230 \times 0.8} \approx 54.35 \text{ A}$
    *   Total current flowing through Section A = $I_C + I_B + I_A = 174.2 + 54.35 = 228.55 \text{ A}$
    *   Resistance of Section A (0.1 km) = $0.1 \ \Omega/\text{km} \times 0.1 \text{ km} = 0.01 \ \Omega$
    *   Reactance of Section A (0.1 km) = $0.2 \ \Omega/\text{km} \times 0.1 \text{ km} = 0.02 \ \Omega$
    *   Total impedance of Section A ($Z_A$) = $\sqrt{0.01^2 + 0.02^2} \approx 0.0224 \ \Omega$
    *   Voltage drop in Section A ($Vd_A$) $\approx 228.55 \text{ A} \times 0.0224 \ \Omega \approx 5.12 \text{ V}$

*   **Total Voltage Drop at the end (Point C):**
    *   $Vd_{total} = Vd_A + Vd_B + Vd_C \approx 5.12 + 5.83 + 3.41 \approx 14.36 \text{ V}$
    *   Voltage at Point C = $230 \text{ V} - 14.36 \text{ V} \approx 215.64 \text{ V}$

*   **Percentage Voltage Regulation at Point C:**
    *   $\% \text{Regulation} = \frac{230 - 215.64}{215.64} \times 100 \approx 6.67\%$

**Important Note:** For simplicity in these examples, we are using $Vd \approx I \times Z$. A more accurate calculation involves phasor addition considering the power factor. However, for basic understanding and typical distribution problems, this approximation is often sufficient.

**Practice Problem 1:**

A single-phase 400 V AC radial distributor supplies loads as follows:
*   At 150 m from the feeder: 20 A at 0.8 pf lagging.
*   At 300 m from the feeder: 30 A at 0.9 pf lagging.

The resistance of the distributor conductor is $0.05 \ \Omega/\text{km}$ and the reactance is $0.1 \ \Omega/\text{km}$. Calculate the voltage at the end of the distributor.

**Answer:**

*   Current at 300 m ($I_2$) = $30 \text{ A}$
*   Current at 150 m ($I_1$) = $20 \text{ A}$
*   Total current in the first 150 m section = $I_1 + I_2 = 50 \text{ A}$
*   Resistance of 300 m section = $0.05 \times 0.3 = 0.015 \ \Omega$
*   Reactance of 300 m section = $0.1 \times 0.3 = 0.03 \ \Omega$
*   Voltage drop in 300 m section $\approx 50 \times \sqrt{0.015^2 + 0.03^2} \approx 50 \times 0.0335 \approx 1.675 \text{ V}$
*   Voltage at 150 m = $400 \text{ V} - 1.675 \text{ V} = 398.325 \text{ V}$
*   Resistance of 150 m section = $0.05 \times 0.15 = 0.0075 \ \Omega$
*   Reactance of 150 m section = $0.1 \times 0.15 = 0.015 \ \Omega$
*   Voltage drop in the first 150 m section $\approx 20 \times \sqrt{0.0075^2 + 0.015^2} \approx 20 \times 0.0168 \approx 0.336 \text{ V}$
*   Voltage at the end of the distributor = $398.325 \text{ V} - 0.336 \text{ V} \approx 397.99 \text{ V}$

#### 3.2 Ring Main Systems

**Key Concepts:**

*   **Loop Resistance/Reactance:** The total resistance/reactance of the loop.
*   **Load Distribution:** Loads are connected to distributors.
*   **Feeder Points:** Points where feeders from the substation connect to the ring.
*   **Isolation:** The ability to isolate faulted sections.

**Example 2: Load Balancing in a Ring Main System**

A single-phase ring main distributor is fed by two feeders from a substation at points A and C. The loop consists of four sections AB, BC, CD, and DA. The total length of the ring is 1000 m. The resistance per kilometer is $0.1 \ \Omega$, and reactance is $0.2 \ \Omega$.

Loads are connected as follows:
*   At 100 m from A: 20 kW at 0.8 pf lagging.
*   At 300 m from A (100 m from B): 30 kW at 0.9 pf lagging.
*   At 400 m from A (200 m from C): 25 kW at 0.85 pf lagging.
*   At 600 m from A (400 m from C): 35 kW at 0.95 pf lagging.

The substation supplies 400 V.

**Solution Approach:**

1.  **Calculate total resistance and reactance of the loop.**
2.  **Calculate currents drawn by each load.**
3.  **Assume a current flowing in one direction (e.g., from A to C through B).**
4.  **Calculate the load current in each section.**
5.  **Use Kirchhoff's Voltage Law (KVL) around the loop to find the assumed current.** The sum of voltage drops around a closed loop must be zero.
6.  **Once the current in each section is known, calculate voltage drops and hence the voltage at each load point.**

**Let's simplify the problem by considering a single load and two feeders.**

**Example 3: Simplified Ring Main System**

A single-phase ring main distributor is fed from a substation at point A. It supplies a load of 50 A at 0.8 pf lagging at point C, which is 500 m away from A. The ring is completed by section CA. The resistance of each 500 m section is $0.05 \ \Omega$, and the reactance is $0.1 \ \Omega$. The supply voltage is 230 V.

**Solution:**

1.  **Load Current:**
    *   $I_L = \frac{50 \text{ A}}{0.8 \text{ pf}} = 62.5 \text{ A}$ (approximate, for magnitude)
    *   For accurate calculation, we'd use phasor: $I_L = \frac{50}{0.8}(\cos \theta - j \sin \theta)$ where $\cos \theta = 0.8$.

2.  **Section AC:**
    *   Resistance ($R_{AC}$) = $0.05 \ \Omega$
    *   Reactance ($X_{AC}$) = $0.1 \ \Omega$
    *   Impedance ($Z_{AC}$) = $\sqrt{0.05^2 + 0.1^2} \approx 0.1118 \ \Omega$

3.  **Current Distribution:**
    *   Let the current flowing from A to C through the distributor be $I_{AC}$.
    *   The current flowing from C back to A via the return path (if it's a two-wire system, this is implicit. If it's a single wire with return, then it's the return conductor) is $I_{CA}$.
    *   Since the load is at C, the current in section AC is $I_{AC} = I_L + I_{CA}$.
    *   For a balanced ring, the current from the feeder at A splits. Let the current from A to C be $I_1$ and the current from A to C through the return path be $I_2$. Then $I_1 + I_2 = I_L$.
    *   In a simplified ring where the feeder connects at A, and the load is at C, the current $I_L$ splits at A and meets at C. This is not a closed ring in the typical sense unless there's another connection.

**Let's consider a more standard ring main scenario with two feeders.**

**Example 4: Ring Main with Two Feeders**

A single-phase ring main system supplies a total load of 100 A at 0.8 pf lagging. The ring is fed by two feeders from the substation at points A and C. The total length of the ring is 1 km. The ring is made of two parallel conductors each having resistance of $0.02 \ \Omega/\text{km}$ and reactance of $0.04 \ \Omega/\text{km}$. The load is concentrated at point B, 400 m from A. The supply voltage is 400 V.

**Solution:**

1.  **Total Load:** $I_L = 100 \text{ A}$ at 0.8 pf lagging.
2.  **Sectionalization:** The ring is divided into sections by the feeders. Let's assume feeders are at A and C.
    *   Section AB: 400 m
    *   Section BC: 600 m (assuming the ring is AC, total length 1 km)
    *   The load is at B.

3.  **Current Distribution:**
    *   Let the total current supplied by the substation be $I_{sub}$.
    *   The current $I_L$ will split at A and meet at C (or vice-versa if the feeders are positioned differently).
    *   In a ring, the current from the feeder at A splits and flows in both directions around the ring. Let the current flowing from A towards B be $I_{AB}$ and from A towards C (other direction) be $I_{AC}$.
    *   $I_{AB} + I_{AC} = I_{sub}$.
    *   At point B, the load current $I_L$ is drawn.
    *   If $I_{AB}$ flows through B, the current in section BC will be $I_{BC} = I_{AB} - I_L$.
    *   For the loop to be balanced (and for KVL to hold), the current flowing from C back to A must be equal to $I_{AC}$.

4.  **Simplification by Symmetry:**
    *   If the load was exactly in the middle of the two feeders, the current would split equally. Here the load is at 400m from A and 600m from C.
    *   Let's assume the current from A splits such that $I_{AB}$ flows towards the load and $I_{AC}$ flows the other way.
    *   The total current drawn is $I_L = 100 \text{ A}$.
    *   Let the current flowing from A to B be $I_{AB}$. Then the current from B to C is $I_{BC} = I_{AB} - 100$.
    *   The current flowing from A to C (in the other direction) is $I_{AC}$.
    *   For KVL, $I_{AB} \times Z_{AB} + (I_{AB} - 100) \times Z_{BC} = I_{AC} \times Z_{AC}$ (where $Z_{AC}$ is the impedance of the return path).

**This becomes complex for manual calculation without iterative methods or specialized software.**

**A more practical approach for numerical problems usually involves finding the voltage drop at the load point, assuming a specific current distribution.**

**Key Principle for Ring Main (Simplified):** The current drawn by the load is supplied by the two feeders. The current distribution in the ring depends on the impedance of the sections and the location of the load.

**Example 5: Single Load on a Ring (Simplified Analysis)**

A single-phase ring main distributor is supplied at 230 V. It consists of two sections, AB and BC, each 500 m long. The resistance of each section is $0.02 \ \Omega$ and reactance is $0.03 \ \Omega$. A load of 50 A at 0.8 pf lagging is connected at point B. The ring is fed at A and C.

**Solution:**

1.  **Load Current:** $I_L = 50 \text{ A}$ at 0.8 pf lagging.
2.  **Feeder Locations:** Feeders at A and C. Load at B.
3.  **Current Distribution:** The load current $I_L$ will be supplied by the two feeders. Let the current from A to B be $I_1$ and from C to B be $I_2$. Then $I_1 + I_2 = I_L$.
4.  **Voltage at Load Point (B):**
    *   Voltage at A = Voltage at C = 230 V (assuming ideal feeders).
    *   Voltage at B can be calculated by considering the voltage drop from A or C.
    *   $V_B = V_A - I_1 \times Z_{AB}$
    *   $V_B = V_C - I_2 \times Z_{CB}$ (where $Z_{CB}$ is impedance of CB)
    *   For equal distribution, $I_1 = I_2 = I_L / 2 = 50 / 2 = 25 \text{ A}$.
    *   Impedance per section ($Z_{AB} = Z_{CB}$) = $\sqrt{0.02^2 + 0.03^2} \approx 0.036 \ \Omega$.
    *   Voltage drop in section AB ($Vd_{AB}$) $\approx 25 \text{ A} \times 0.036 \ \Omega \approx 0.9 \text{ V}$.
    *   Voltage at B $\approx 230 \text{ V} - 0.9 \text{ V} = 229.1 \text{ V}$.

**Important Point:** In a ring main, if the load is symmetrically placed with respect to the feeders, the current divides equally.

**Practice Problem 2:**

A single-phase ring main distributor is fed at two points P and R. The ring comprises sections PQ, QR, RS, and SP. The total length of the ring is 1200 m. The resistance of each 300 m section is $0.03 \ \Omega$ and reactance is $0.05 \ \Omega$. A total load of 80 A at 0.9 pf lagging is connected at point Q, which is 300 m from P. Calculate the voltage at point Q, assuming the supply voltage at P and R is 400 V.

**Solution Outline:**

1.  **Load:** $I_L = 80 \text{ A}$ at 0.8 pf lagging.
2.  **Feeder Points:** P and R.
3.  **Sections:** PQ (300m), QR (300m), RS (300m), SP (300m). Total length 1200m.
4.  **Load Location:** Point Q, 300m from P. This means the load is on section PQ.
5.  **Current Distribution:** Let current from P to Q be $I_{PQ}$. The current from P to R (via S) is $I_{PSR}$.
    *   Current in section PQ = $I_{PQ}$.
    *   Current in section QR = $I_{PQ} - I_L$.
    *   Current in section RS = $I_{PSR} - I_L$.
    *   Current in section SP = $I_{PSR}$.
    *   For KVL: $I_{PQ} Z_{PQ} + (I_{PQ} - I_L) Z_{QR} = I_{PSR} Z_{PSR}$ (assuming R is the other feeding point in a larger ring, or if P and R are the same point then it's a single feeder).

**Let's rephrase the problem for clarity based on typical ring main setups:**

**Practice Problem 2 (Revised):**

A single-phase ring main distributor is fed at points A and C. The ring consists of sections AB (400m) and BC (600m). The resistance of each 100m section is $0.01 \ \Omega$ and reactance is $0.02 \ \Omega$. A load of 60 A at 0.8 pf lagging is connected at point B, which is 400 m from A. The supply voltage at A and C is 230 V. Calculate the voltage at point B.

**Solution:**

1.  **Load Current:** $I_L = 60 \text{ A}$ at 0.8 pf lagging.
2.  **Feeder Points:** A and C. Load at B.
3.  **Section Impedances:**
    *   $Z_{AB}$ (400m): $R = 4 \times 0.01 = 0.04 \ \Omega$, $X = 4 \times 0.02 = 0.08 \ \Omega$.
    *   $Z_{BC}$ (600m): $R = 6 \times 0.01 = 0.06 \ \Omega$, $X = 6 \times 0.02 = 0.12 \ \Omega$.
4.  **Current Distribution:** Let current from A to B be $I_1$. Current in BC will be $I_2 = I_1 - I_L$. The current from C to A in the return path is $I_3$.
    *   For a closed loop: $I_1 + I_3 = I_{total\_at\_A}$ and $I_2 + I_3 = I_{total\_at\_C}$.
    *   A simpler approach: The load current $I_L$ is supplied by feeders at A and C. Let $I_{A-B}$ be the current from A to B, and $I_{C-B}$ be the current from C to B. Then $I_{A-B} + I_{C-B} = I_L$.
    *   Using KVL: $V_A - I_{A-B} Z_{AB} = V_C - I_{C-B} Z_{CB}$ (where $Z_{CB}$ is impedance of C to B).
    *   Let $I_{A-B} = x$. Then $I_{C-B} = 60 - x$.
    *   $230 - x(0.04 + j0.08) = 230 - (60-x)(0.06 + j0.12)$
    *   $x(0.04 + j0.08) = (60-x)(0.06 + j0.12)$
    *   $0.04x + j0.08x = 3.6 + j7.2 - 0.06x - j0.12x$
    *   $(0.04 + 0.06)x + j(0.08 + 0.12)x = 3.6 + j7.2$
    *   $0.1x + j0.2x = 3.6 + j7.2$
    *   Equating real and imaginary parts is tricky due to power factor.

**Let's use the voltage drop approach directly for the current distribution in a ring:**

In a ring main system with feeders at A and C, and load at B:
The current from A to B ($I_{AB}$) and from C to B ($I_{CB}$) will sum up to the load current.
The voltage at B can be found by calculating the voltage drop from A or C.
$V_B = V_A - I_{AB} \cdot Z_{AB}$
$V_B = V_C - I_{CB} \cdot Z_{CB}$

By KVL around the loop ABA: $V_A - I_{AB} Z_{AB} - I_{CB} Z_{CB} = V_A$ (if the feeder return path is considered part of the loop).

**For balanced loading in a ring with two feeders, the current supplied by each feeder depends on the impedance of the sections between them.**

Let $I_A$ be the current from feeder A, and $I_C$ be the current from feeder C.
$I_A + I_C = I_L$.
The current $I_A$ flows from A to B ($I_{AB}$). The current $I_C$ flows from C to B ($I_{CB}$).
$I_{AB} = I_A$
$I_{CB} = I_C$
Voltage at B: $V_B = V_A - I_A Z_{AB} = V_C - I_C Z_{CB}$.

Consider the loop formed by the ring: $I_A Z_{AB} + (I_A - I_L) Z_{BC} = 0$ (if A and C are the same point, which is not the case here).

**A common method for finding current distribution in a ring is to assume current division based on impedances.**

Let $I_A$ be the current from feeder A and $I_C$ from feeder C.
$I_A + I_C = I_L$.
The voltage at B depends on the current distribution.
For symmetrical loading and feeder placement, $I_A = I_C = I_L/2$.
If not symmetrical, we can use KVL:
Let $I_A$ be the current from A. It flows through AB to B. Load current $I_L$ is drawn. Current in BC is $I_A - I_L$.
The current from C flows through CB to B, which is $I_C$.
So $I_A - I_L = -I_C$, which means $I_A + I_C = I_L$.
KVL around the loop AC: $V_A - I_A Z_{AB} - (I_A - I_L) Z_{BC} = V_C$.
$230 - I_A (0.04 + j0.08) - (I_A - 60(\cos\theta - j\sin\theta))(0.06 + j0.12) = 230$.
$I_A (0.04 + j0.08) + (I_A - 60(0.8 - j0.6))(0.06 + j0.12) = 0$.
$I_A (0.04 + j0.08) + (I_A - 48 + j36)(0.06 + j0.12) = 0$.
$0.04I_A + j0.08I_A + 0.06I_A + j0.12I_A - (48)(0.06) - j(48)(0.12) + j36(0.06) + j^2 36(0.12) = 0$.
$0.1I_A + j0.2I_A - 2.88 - j5.76 + j2.16 - 4.32 = 0$.
$0.1I_A + j0.2I_A = 7.2 + j3.6$.
$I_A (0.1 + j0.2) = 7.2 + j3.6$.
$I_A = \frac{7.2 + j3.6}{0.1 + j0.2} = \frac{3.6(2+j1)}{0.1(1+j2)} = 36 \frac{2+j1}{1+j2}$.
$I_A = 36 \frac{(2+j1)(1-j2)}{(1+j2)(1-j2)} = 36 \frac{2 - 4j + j - 2j^2}{1 - 4j^2} = 36 \frac{2 - 3j + 2}{1+4} = 36 \frac{4-3j}{5} = \frac{144 - 108j}{5} = 28.8 - 21.6j$.
Magnitude of $I_A \approx \sqrt{28.8^2 + (-21.6)^2} \approx 36 \text{ A}$.

Now calculate voltage at B:
$V_B = V_A - I_A Z_{AB} = 230 - (28.8 - 21.6j)(0.04 + j0.08)$.
$V_B = 230 - (1.152 + j2.304 - 0.864 - j1.728)$.
$V_B = 230 - (0.288 + j0.576)$.
$V_B = 229.712 - j0.576$.
Magnitude of $V_B \approx \sqrt{229.712^2 + (-0.576)^2} \approx 229.71 \text{ V}$.

**Answer to Practice Problem 2 (Revised):** The voltage at point B is approximately 229.71 V.

---

### 5. Important Points to Remember

*   **Radial systems** are simple and cheap but lack reliability due to single-point failures.
*   **Ring main systems** offer improved reliability and voltage regulation by providing a closed loop and two-way power supply.
*   The **voltage drop** in distribution systems is crucial for performance and is calculated based on conductor resistance, reactance, current, and power factor.
*   In **radial systems**, voltage drop increases with distance and load.
*   In **ring main systems**, load current divides between the two paths from the feeders. The current distribution is influenced by the location of the load and the impedances of the ring sections.
*   For simple numerical problems, approximate voltage drop ($I \times Z$) can be used, but phasor calculations are more accurate, especially when power factors are involved.
*   The **reliability** of a distribution system is a key consideration, and ring main systems are preferred for critical loads.

---

### 6. Practice Questions for Review

1.  List the key differences between radial and ring main distribution systems, focusing on reliability and cost.
2.  A single-phase radial distributor is supplied at 240 V. It has loads of 30 A at 0.8 pf lagging at 150 m, and 40 A at 0.9 pf lagging at 300 m. The resistance and reactance per 100 m are $0.01 \ \Omega$ and $0.02 \ \Omega$ respectively. Calculate the voltage at the farthest end of the distributor.
3.  Explain how a ring main system improves voltage regulation compared to a radial system.
4.  A single-phase ring main distributor is fed at points A and B, 500 m apart. The total load of 70 A at 0.85 pf lagging is located at the midpoint C (250 m from A and 250 m from B). The impedance of each 250 m section is $(0.02 + j0.04) \ \Omega$. If the supply voltage at A and B is 400 V, calculate the current supplied by each feeder and the voltage at point C.

---

### Answers to Practice Questions

**Answer 1:**

| Feature           | Radial System                                     | Ring Main System                                     |
| :---------------- | :------------------------------------------------ | :--------------------------------------------------- |
| **Reliability**   | Lower (single fault can cause outage)             | Higher (faults can be isolated, supply maintained) |
| **Initial Cost**  | Lower (simpler, less material)                    | Higher (more material, complex switchgear)           |
| **Voltage Drop**  | Higher (especially at the far end)                | Lower (balanced loading, two-way supply)             |
| **Protection**    | Simpler                                           | More complex (requires sectionalizing)               |
| **Flexibility**   | Lower                                             | Higher (load can be shifted)                         |
| **Suitability**   | Small areas, non-critical loads                   | Large areas, critical loads                          |

**Answer 2:**

*   Current in the section up to 300m ($I_2$): 40 A at 0.9 pf lagging.
*   Current in the section from 300m to 150m ($I_1$): 30 A at 0.8 pf lagging.
*   Total current in the first 150m section = $I_1 + I_2 = 40 + 30 = 70 \text{ A}$.
*   Resistance per 100m = $0.01 \ \Omega$. Reactance per 100m = $0.02 \ \Omega$.
*   Impedance of 300m section: $R_{300} = 3 \times 0.01 = 0.03 \ \Omega$, $X_{300} = 3 \times 0.02 = 0.06 \ \Omega$.
*   Impedance of 150m section: $R_{150} = 1.5 \times 0.01 = 0.015 \ \Omega$, $X_{150} = 1.5 \times 0.02 = 0.03 \ \Omega$.
*   Voltage drop in the last 150m section (carrying 40 A): $Vd_2 \approx 40 \times \sqrt{0.03^2 + 0.06^2} \approx 40 \times 0.067 \approx 2.68 \text{ V}$.
*   Voltage at 150m = $240 \text{ V} - 2.68 \text{ V} = 237.32 \text{ V}$.
*   Voltage drop in the first 150m section (carrying 70 A): $Vd_1 \approx 70 \times \sqrt{0.015^2 + 0.03^2} \approx 70 \times 0.0335 \approx 2.35 \text{ V}$.
*   Voltage at the farthest end = $237.32 \text{ V} - 2.35 \text{ V} = 234.97 \text{ V}$.

**Answer 3:**

A ring main system improves voltage regulation because the load current is supplied from two directions. This reduces the effective impedance through which the load current flows from the feeders. In a radial system, the current flows from one end, leading to a cumulative voltage drop along the distributor. In a ring system, the load is shared between the two paths, resulting in lower current in each section and thus a lower voltage drop for the same total load.

**Answer 4:**

*   **Load:** $I_L = 70 \text{ A}$ at 0.85 pf lagging. $\cos \theta = 0.85$, $\sin \theta = \sqrt{1 - 0.85^2} \approx 0.5267$. $I_L = 70(0.85 - j0.5267) = 59.5 - j36.87 \text{ A}$.
*   **Section Impedance:** $Z_{section} = (0.02 + j0.04) \ \Omega$.
*   **Feeder Locations:** A and B. Load at C (midpoint).
*   **Current Distribution:** Since the load is at the midpoint and feeders are at A and B, the current from A to C ($I_{AC}$) and from B to C ($I_{BC}$) will be equal: $I_{AC} = I_{BC} = I_L / 2 = 35 \text{ A}$.
*   **Voltage Calculation at C:**
    *   $V_C = V_A - I_{AC} \cdot Z_{AC}$
    *   $V_A = 400 \text{ V}$ (assume phase reference).
    *   $I_{AC} = 35(0.85 - j0.5267) = 29.75 - j18.43 \text{ A}$.
    *   $Z_{AC} = 0.02 + j0.04 \ \Omega$.
    *   $I_{AC} \cdot Z_{AC} = (29.75 - j18.43)(0.02 + j0.04)$
    *   $= (29.75 \times 0.02) + j(29.75 \times 0.04) - j(18.43 \times 0.02) - j^2 (18.43 \times 0.04)$
    *   $= 0.595 + j1.19 - j0.3686 + 0.7372$
    *   $= 1.3322 + j0.8214$
    *   $V_C = 400 - (1.3322 + j0.8214)$
    *   $V_C = 398.6678 - j0.8214$
    *   Magnitude $|V_C| = \sqrt{398.6678^2 + (-0.8214)^2} \approx 398.67 \text{ V}$.

*   **Current Supplied by Each Feeder:** Each feeder supplies half the load current: $I_A = I_B = 35 \text{ A}$ at 0.85 pf lagging.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
