---
title: "Power Transmission System - (Electrical Model)- Line parameters – resistance - inductance and capacitance (Derivation of three phase double circuit)"
subject: "POWER GENERATION, TRANSMISSION AND PROTECTION"
module: "Module 2: Power Transmission System "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36185"
status: "completed"
scrapedAt: "2026-05-23T16:23:26.761Z"
---
# Module 2: Power Transmission System - Electrical Model

## Topic: Line Parameters – Resistance, Inductance, and Capacitance (Derivation for Three-Phase Double Circuit)

### 1. Introduction to the Electrical Model of a Transmission Line

The electrical model of a transmission line represents its behavior in terms of fundamental electrical circuit parameters: resistance (R), inductance (L), and capacitance (C). These parameters are distributed along the entire length of the conductor and are crucial for analyzing the performance of power transmission systems. Understanding these parameters allows us to predict voltage drops, power loss, voltage regulation, and the behavior of the line under various operating conditions, aligning with **CO2: Evaluate the electrical performance of any transmission line** and **CO3: Compute various physical characteristics of overhead and underground transmission systems**.

### 2. Line Parameters

#### 2.1. Resistance (R)

Resistance is due to the inherent resistivity of the conductor material and the length of the conductor. It causes power loss in the form of heat (I²R loss).

**Key Concepts & Definitions:**

*   **Resistivity ($\rho$)**: A material property indicating how strongly it resists electric current. Measured in Ohm-meters ($\Omega \cdot m$).
*   **Resistance (R)**: The opposition to current flow in a conductor. Measured in Ohms ($\Omega$).
*   **Skin Effect**: At higher frequencies, current tends to flow more on the surface of the conductor, effectively reducing the cross-sectional area available for current flow and thus increasing the effective resistance.
*   **Temperature Effect**: Resistance of conductors increases with temperature.

**Derivation/Formula:**

The resistance of a conductor is given by:

$R = \frac{\rho L}{A}$

Where:
*   $R$ = Resistance (Ohms, $\Omega$)
*   $\rho$ = Resistivity of the conductor material (Ohm-meters, $\Omega \cdot m$)
*   $L$ = Length of the conductor (meters, m)
*   $A$ = Cross-sectional area of the conductor (square meters, $m^2$)

**Example:**

Calculate the DC resistance of a copper conductor of length 10 km and cross-sectional area $200 \, mm^2$ at $20^\circ C$. Assume resistivity of copper at $20^\circ C$ is $1.72 \times 10^{-8} \, \Omega \cdot m$.

*   $L = 10 \, km = 10 \times 10^3 \, m$
*   $A = 200 \, mm^2 = 200 \times 10^{-6} \, m^2$
*   $\rho = 1.72 \times 10^{-8} \, \Omega \cdot m$

$R_{DC} = \frac{(1.72 \times 10^{-8} \, \Omega \cdot m) \times (10 \times 10^3 \, m)}{200 \times 10^{-6} \, m^2}$
$R_{DC} = \frac{1.72 \times 10^{-4}}{200 \times 10^{-6}} = \frac{1.72}{0.2} = 8.6 \, \Omega$

**Textbook Reference:**

*   **Wadhwa C. L., "Electrical Power Systems"**: Chapter 2, "Transmission Line Parameters," discusses resistance, its dependence on temperature, and the skin effect in detail.
*   **Mehta V. K. and Mehta R., "Principles of Power System"**: Chapter 1, "Transmission Line Characteristics," covers the basic resistance calculation and factors affecting it.

**Important Point to Remember:** For AC power transmission, the effective resistance is usually higher than the DC resistance due to the skin effect.

#### 2.2. Inductance (L)

Inductance arises from the magnetic field produced around a conductor when current flows through it. It opposes changes in current. In transmission lines, inductance is primarily due to the magnetic flux linkage with the current-carrying conductors.

**Key Concepts & Definitions:**

*   **Inductance (L)**: The property of an electrical conductor by which a change in current through it induces an electromotive force (voltage) in both the conductor itself and in any nearby conductors. Measured in Henrys (H).
*   **Magnetic Flux ($\Phi$)**: The total magnetic field passing through a given area.
*   **Flux Linkage ($\lambda$)**: The total magnetic flux linking a circuit, usually expressed as the sum of flux linkages of each turn of a coil. For a single conductor, it's the flux linking the conductor itself.
*   **Self-Inductance**: Inductance due to the magnetic field produced by the current in the conductor itself.
*   **Mutual Inductance**: Inductance due to the magnetic field produced by the current in one conductor linking with another conductor.

**Derivation/Formula for Single-Phase Line:**

Consider a single-phase line with two parallel conductors, A and B, carrying currents $I_A$ and $I_B$ respectively.

*   **Inductance due to Self Flux:**
    The flux linkage of conductor A due to its own current $I_A$ is composed of flux inside the conductor and flux outside the conductor.
    *   Flux inside the conductor (assuming uniform current distribution): $\lambda_{in} = \frac{\mu_0 I_A}{2\pi} (\frac{1}{4})$ (This derivation involves integrating flux density over the conductor's cross-section. See textbooks for detailed derivation.)
    *   Flux outside the conductor: $\lambda_{out} = \frac{\mu_0 I_A}{2\pi} \ln(\frac{D}{r})$ (where D is the distance to the return path, and r is the radius of the conductor).
    *   Total self-inductance per unit length: $L_{self} = \frac{\lambda_{in} + \lambda_{out}}{I_A} = \frac{\mu_0}{2\pi} (\frac{1}{4} + \ln(\frac{D}{r})) = 2 \times 10^{-7} \ln(\frac{D}{r}) + 0.5 \times 10^{-7} \, H/m$. (The $0.5 \times 10^{-7}$ term is often approximated or combined with the log term using a geometric mean radius (GMR)).

*   **Inductance due to Mutual Flux:**
    The flux produced by conductor B ($I_B$) also links conductor A.
    *   Flux linkage of conductor A due to current in conductor B: $\lambda_{AB} = \frac{\mu_0 I_B}{2\pi} \ln(\frac{d_{AB}}{d_{BA}})$ (where $d_{AB}$ is the distance from A to the return path of B, and $d_{BA}$ is the distance from B to the return path of A). For parallel conductors, this simplifies to the distance between the conductors.
    *   Mutual inductance per unit length: $L_{mutual} = \frac{\lambda_{AB}}{I_B} = \frac{\mu_0}{2\pi} \ln(\frac{D_{AB}}{D_{BA}}) = 2 \times 10^{-7} \ln(\frac{D_{AB}}{D_{BA}}) \, H/m$.

**Total Inductance per unit length of conductor A in a single-phase line:**

$L_A = L_{self} + L_{mutual}$
$L_A = (\frac{\mu_0}{2\pi} (\frac{1}{4} + \ln(\frac{D}{r}))) + (\frac{\mu_0}{2\pi} \ln(\frac{D_{return}}{D_{conductor}}))$

For a typical single-phase line where conductor A and B are separated by distance 'd' and the return path is also at distance 'd':
$L_{unit \ length} = \frac{\mu_0}{2\pi} (\frac{1}{4} + \ln(\frac{d}{r})) \times 2$ (considering both conductors)
$L = \frac{\mu_0}{2\pi} \ln(\frac{D}{r}) + \frac{\mu_0}{2\pi} \ln(\frac{D}{r})$ (This is a simplified view. A more rigorous derivation considers flux linkages.)

A commonly used formula for inductance per unit length of a single-phase circuit:
$L = 2 \times 10^{-7} \ln(\frac{D}{GMR}) \, H/m$
Where GMR is the Geometric Mean Radius, which accounts for the internal flux linkages. For a solid cylindrical conductor of radius r, $GMR \approx 0.7788r$.

**Derivation for Three-Phase Double Circuit:**

A three-phase double circuit consists of two identical three-phase circuits, usually erected on the same towers. This configuration is more complex due to the presence of multiple conductors and mutual inductance between conductors of the same and different circuits.

Let's consider a double circuit where conductors of phase A1, B1, C1 are in one circuit and A2, B2, C2 are in the other circuit. The typical arrangement for spacing is often symmetrical.

**Assumptions:**

*   The two circuits are identical in terms of conductor size and spacing within each circuit.
*   The spacing between the two circuits is also considered.
*   We are calculating the inductance per phase per unit length.

**Simplified Approach (using GMR and DLR):**

*   **GMR (Geometric Mean Radius)**: Accounts for the internal flux linkage of each conductor. For a bundle of 'n' conductors, GMR is the GMR of a single conductor raised to the power of $1/n$.
*   **DLR (Distance of Loop)**: Represents the average distance of the return path for the flux.

For a three-phase circuit with conductors $A, B, C$ at distances $d_{AB}, d_{BC}, d_{CA}$, and their respective return paths, the inductance per phase is derived by considering the flux linkages.

**Key Principle: Maxwell's Co-efficient Method or Loop Inductance:**

The inductance of a conductor in a polyphase system is calculated by considering the flux linkages created by its own current and the currents in other conductors, taking into account the return path.

For a three-phase system, the inductance per phase (say phase A) is calculated by summing the self-inductance of conductor A and the mutual inductances between conductor A and all other conductors (including return paths) that contribute to the net flux linkage.

**Derivation for a Double Circuit (Conceptual Outline):**

1.  **Define conductor positions:** Precisely define the positions of all six phase conductors (A1, B1, C1, A2, B2, C2) and their implied return paths.
2.  **Calculate Self-Inductance (GMR):** The self-inductance of each conductor is determined by its GMR.
3.  **Calculate Mutual Inductances:**
    *   Between conductors of the same phase but different circuits (e.g., A1 and A2).
    *   Between conductors of different phases within the same circuit (e.g., A1 and B1).
    *   Between conductors of different phases in different circuits (e.g., A1 and B2).
    *   The distance between conductors is crucial here. For a double circuit, the effective "return path" for each phase is often considered to be the conductor of the same phase in the other circuit, or the combined effect of all other conductors.
4.  **Apply Superposition:** For each phase (e.g., Phase A1), calculate the total flux linkage due to currents in all conductors. The inductance per phase is then the total flux linkage divided by the current in that phase.
5.  **Symmetrical Spacing Simplification:** If the spacing is symmetrical, the calculations can be simplified. For a flat or triangular arrangement of conductors within each circuit, and a defined spacing between circuits, the distances can be calculated.

**Example of Inductance for a Double Circuit (simplified representation):**

Consider a symmetrical double-circuit arrangement. Let:
*   $D_{AB1}, D_{BC1}, D_{CA1}$ be the conductor spacings within circuit 1.
*   $D_{A1A2}, D_{B1B2}, D_{C1C2}$ be the spacings between corresponding conductors of the two circuits.
*   $GMR_1$ and $GMR_2$ be the geometric mean radii of conductors in circuit 1 and circuit 2 (assuming they are identical, $GMR_1 = GMR_2 = GMR$).

The inductance of phase A1, $L_{A1}$, can be expressed as:

$L_{A1} = L_{A1,self} + L_{A1,B1} + L_{A1,C1} + L_{A1,A2} + L_{A1,B2} + L_{A1,C2}$

Where:
*   $L_{A1,self} = 2 \times 10^{-7} \ln(\frac{1}{GMR})$ (for flux inside and outside the conductor, normalized for unit length).
*   $L_{A1,B1} = 2 \times 10^{-7} \ln(\frac{D_{A1,return}}{D_{A1,B1}})$ where $D_{A1,return}$ is the effective return path for A1 due to B1 and C1. This is where the complexity arises.

**A common simplification for double circuits with symmetrical arrangement:**

The inductance per phase for a double circuit is often found to be approximately twice the inductance of a single circuit of the same conductor size and spacing. However, this is an approximation. A more accurate calculation involves considering the mutual inductances.

A more formal approach involves setting up a set of linear equations for flux linkages and solving them. For a double circuit, with 12 conductors (6 phases and 6 effective returns), this is mathematically intensive.

**Using the concept of composite GMR (CGMR) or effective GMR for double circuits:**

For a double circuit with two conductors per phase (e.g., A1 and A2 form phase A), if they are close together (distance 's'), their effective GMR is $CGMR_A = \sqrt{GMR \times s}$. This effective GMR is then used in the standard inductance formula.

$L_{phase A} = 2 \times 10^{-7} \ln(\frac{D_{eq}}{CGMR_A}) \, H/m$

Where $D_{eq}$ is the equivalent distance to the return path, which is influenced by the spacing of all conductors.

**Textbook Reference:**

*   **Wadhwa C. L., "Electrical Power Systems"**: Chapter 2 provides detailed derivations for inductance of single conductors, bundled conductors, and methods for calculating inductance in three-phase systems, including double circuits. It explains the concept of GMR and mutual inductance thoroughly.
*   **Mehta V. K. and Mehta R., "Principles of Power System"**: Chapter 1 also covers inductance, GMR, and provides formulas for single and three-phase lines. It may offer simpler examples of double circuit calculations.

**Important Point to Remember:** The inductance of a transmission line is significantly influenced by the spacing between conductors and the geometric mean radius (GMR) of the conductors. For double circuits, mutual inductance between circuits and the arrangement of conductors play a critical role.

#### 2.3. Capacitance (C)

Capacitance arises from the electric field between conductors. It stores energy in the electric field and causes charging current to flow, which can be significant at high voltages and long line lengths.

**Key Concepts & Definitions:**

*   **Capacitance (C)**: The ability of a system to store an electric charge. Measured in Farads (F).
*   **Electric Field**: The region around a charged object where an electric force is exerted on other charged objects.
*   **Permittivity ($\epsilon$)**: A measure of how an electric field affects, and is affected by, a dielectric medium. $\epsilon = \epsilon_0 \epsilon_r$, where $\epsilon_0$ is the permittivity of free space and $\epsilon_r$ is the relative permittivity (dielectric constant).
*   **Dielectric**: The insulating material between conductors. For transmission lines, it's usually air.
*   **Charging Current**: The current that flows into the capacitance of the line when a voltage is applied.

**Derivation/Formula for Single-Phase Line:**

Consider a single-phase line with two parallel conductors, A and B, separated by distance 'd', and carrying charges $+q$ and $-q$ per unit length respectively.

*   The electric field intensity at a point at distance 'x' from conductor A is given by Gauss's Law.
*   The potential difference between conductor A and conductor B is calculated by integrating the electric field intensity along a path from B to A.
*   Capacitance per unit length is defined as the charge per unit potential difference.

**Capacitance per unit length of conductor A:**

$C_A = \frac{2\pi\epsilon_0}{\ln(D/r)} \, F/m$

Where:
*   $\epsilon_0$ = Permittivity of free space ($8.854 \times 10^{-12} \, F/m$)
*   $D$ = Distance between conductors
*   $r$ = Radius of conductors

In a single-phase line, conductor B acts as the return path for conductor A. The capacitance of the line is the capacitance between the two conductors.

$C = \frac{2\pi\epsilon_0}{\ln(D/r)} \, F/m$

If we consider the capacitance to neutral, it's twice the line-to-line capacitance:
$C_{neutral} = \frac{2\pi\epsilon_0}{\ln(D/r)} \times 2 = \frac{4\pi\epsilon_0}{\ln(D/r)}$ (This is not standard. The capacitance to neutral is typically derived by considering the distance to the neutral or return path.)

A more accurate representation for capacitance per unit length to neutral for a single conductor in a two-wire system (where the other conductor is the return):
$C_{an} = \frac{2\pi\epsilon_0}{\ln(D/r)} \, F/m$
This is the capacitance between conductor A and its return.

**Derivation for Three-Phase Line:**

In a three-phase system, each conductor is separated from the others. The capacitance of each phase conductor is considered with respect to the neutral or the "return path". The return path is effectively formed by the other two phase conductors and the earth (especially for overhead lines). For symmetrical three-phase systems, we usually consider the capacitance to neutral.

Let the conductors be A, B, C at distances $d_{AB}, d_{BC}, d_{CA}$ from each other, and the neutral distance be $d_{An}, d_{Bn}, d_{Cn}$.

Using Gauss's Law and the concept of potential coefficients (or Maxwell's reciprocal theorem), the potential of conductor A with respect to neutral ($V_{An}$) can be expressed in terms of charges on conductors A, B, and C:

$V_{An} = P_{AA} q_A + P_{AB} q_B + P_{AC} q_C$

Where $P_{ij}$ are the potential coefficients. For transmission lines, these are related to the logarithms of distances:
$P_{AA} = \frac{1}{2\pi\epsilon_0} \ln(\frac{d_{An}}{r_A})$
$P_{AB} = \frac{1}{2\pi\epsilon_0} \ln(\frac{d_{Bn}}{d_{AB}})$

For a symmetrical three-phase system with conductors at the vertices of an equilateral triangle of side 'd', and assuming the neutral is equidistant from all conductors (distance $d_{An} = d_{Bn} = d_{Cn}$):
The capacitance of each phase to neutral ($C_{An}$, $C_{Bn}$, $C_{Cn}$) is the same.

$C_{phase-to-neutral} = \frac{2\pi\epsilon_0}{\ln(d/GMR)}$

Here, 'd' is the distance of the conductors from the neutral. For a symmetrical triangle, the distance from the centroid to each vertex is $d_{centroid} = d/\sqrt{3}$. So, $d$ in the formula becomes $d/\sqrt{3}$ if we consider the neutral as the center. More commonly, the spacing 'd' between conductors is used.

$C_{phase-to-neutral} = \frac{2\pi\epsilon_0}{\ln(D/r)}$

Where 'D' is the effective distance to the neutral. For a symmetrical three-phase line, if the conductors are at the corners of an equilateral triangle of side 'd', the distance to the neutral (centroid) is $d/\sqrt{3}$. However, the standard formula uses the spacing between conductors:

$C = \frac{2\pi\epsilon_0}{\ln(D/r)} \, F/m$

Where 'D' is the geometrical spacing between conductors and GMR is used for conductor radius to account for internal flux. For capacitance, we use the radius of the conductor.

So, for a three-phase line with conductors A, B, C at spacing 'd' and radius 'r':

$C_{A-neutral} = \frac{2\pi\epsilon_0}{\ln(d/r)}$ (This is a simplified form. The exact derivation is more involved, considering the mutual capacitances and solving for line-to-neutral capacitance.)

**Derivation for Three-Phase Double Circuit:**

This is significantly more complex due to the interaction between conductors of both circuits.
Let's denote the conductors as A1, B1, C1 for the first circuit and A2, B2, C2 for the second circuit.

**Key Concepts for Double Circuits:**

*   **Mutual Capacitance**: Capacitance between conductors of different phases or different circuits.
*   **Potential Coefficients**: Coefficients that relate line voltages to line charges.

For a three-phase double circuit, there are six conductors. We need to consider the capacitance of each phase conductor to neutral, taking into account the charges on all six conductors and their positions.

Let $q_{A1}, q_{B1}, q_{C1}, q_{A2}, q_{B2}, q_{C2}$ be the charges per unit length on the respective conductors.
Let $V_{A1n}, V_{B1n}, V_{C1n}, V_{A2n}, V_{B2n}, V_{C2n}$ be the potentials of the conductors with respect to neutral.

The potential of conductor A1 can be expressed as:
$V_{A1n} = P_{A1A1} q_{A1} + P_{A1B1} q_{B1} + P_{A1C1} q_{C1} + P_{A1A2} q_{A2} + P_{A1B2} q_{B2} + P_{A1C2} q_{C2}$

Where $P_{ij}$ are potential coefficients.
$P_{ij} = \frac{1}{2\pi\epsilon_0} \ln(\frac{D_{j n}}{D_{i j}})$ (This formula applies for $i \neq j$)
$P_{ii} = \frac{1}{2\pi\epsilon_0} \ln(\frac{1}{r_i})$ (This represents the self-potential coefficient)

For a three-phase system, the net charge on each circuit is zero. Assuming symmetry, the charge on phase A1 is equal and opposite to the charge on its corresponding return path. Similarly for B1, C1.

**Simplification for Double Circuits:**

For symmetrical double circuits where the two circuits are identical in spacing and conductor size, and erected symmetrically, the capacitance per phase to neutral ($C_{ph-n}$) can be related to the capacitance of a single circuit ($C_{single}$) and the capacitance between circuits.

A common approximation is that the capacitance of a double circuit per phase to neutral is approximately twice the capacitance of a single circuit with the same conductor spacing. However, this is an oversimplification.

**Accurate Calculation:**

Accurate calculation involves solving a system of linear equations for the charges and potentials.

Let's consider one phase, say Phase A, of the double circuit. Phase A is formed by conductors A1 and A2. In many double-circuit configurations, A1 and A2 are relatively close to each other compared to their distance from other conductors.

If A1 and A2 are close together (distance 's'), they can be treated as a single conductor with a composite radius or GMR (for inductance) or composite radius (for capacitance).

Effective radius for capacitance of two conductors of radius 'r' separated by distance 's':
$r'_{eff} = \sqrt{r \cdot s}$

Then, if A1 and A2 form phase A, B1 and B2 form phase B, C1 and C2 form phase C, and assuming a symmetrical arrangement where the distance between A1 and B1 is $d_1$, B1 and C1 is $d_1$, C1 and A1 is $d_1$, and the distance between A1 and A2 is $s$.

The capacitance per phase to neutral can be calculated using the method of images or potential coefficients, considering the relative positions of all six conductors and their effective return paths.

**A common simplification for a double circuit is to consider the effective capacitance between phases.**

If we consider the capacitance to neutral for a symmetrical arrangement, the capacitance per phase to neutral can be expressed as:

$C_{ph-n} = \frac{2\pi\epsilon_0}{\ln(\frac{D_{eff}}{r_{eff}})}$

Where:
*   $r_{eff}$ is the effective radius of the conductors forming a phase (e.g., for phase A, it would be the effective radius of A1 and A2 if they are close).
*   $D_{eff}$ is the effective distance to the neutral path. This effective distance is influenced by the spacing between conductors within a circuit and the spacing between the two circuits.

**Example:**

Consider a double circuit with conductors of radius $r=1 \, cm$.
Circuit 1: A1, B1, C1 at vertices of equilateral triangle of side $d=5 \, m$.
Circuit 2: A2, B2, C2 also at vertices of equilateral triangle of side $d=5 \, m$, placed directly above circuit 1 at a separation of $s=3 \, m$.
So, A1 is above A2, B1 above B2, C1 above C2.

In this case, the conductors forming a phase (e.g., A1 and A2) are separated by 3m.
The effective radius for phase A would be $r'_{eff} = \sqrt{r \times s} = \sqrt{1 \, cm \times 3 \, m} = \sqrt{0.01 \, m \times 3 \, m} = \sqrt{0.03} \, m \approx 0.1732 \, m$.
The distance between phases within a circuit is 5m. The distance between A1 and B1 is 5m. The distance between A1 and A2 is 3m.
The effective distance to the neutral path becomes complex to define simply.

**Textbook Reference:**

*   **Wadhwa C. L., "Electrical Power Systems"**: Chapter 2 provides detailed derivations for capacitance of single conductors, three-phase lines, and explains the potential coefficient method for calculating capacitance in more complex configurations like double circuits. It covers the influence of conductor spacing and bundle arrangements on capacitance.
*   **Mehta V. K. and Mehta R., "Principles of Power System"**: Chapter 1 discusses capacitance of transmission lines, including three-phase lines. The treatment of double circuits might be more conceptual or provide simplified formulas.

**Important Point to Remember:** Capacitance is a critical parameter for long transmission lines as it leads to charging current, voltage regulation issues (Ferranti effect), and influences the surge impedance and propagation characteristics of the line. For double circuits, the interaction between conductors of both circuits significantly impacts the overall capacitance.

### 3. Electrical Model of a Transmission Line

The transmission line can be modeled as a **distributed parameter circuit**, where R, L, and C are spread along the entire length. However, for analysis, it is often approximated as a **lumped parameter circuit** by dividing the line into sections.

#### 3.1. Short Transmission Line Model (Negligible Capacitance)

For very short lines (typically less than 80 km at power frequencies), the capacitance effect is negligible. The line can be modeled as a simple series impedance ($R + jX_L$).

**Model:**

```
     Sender Side      Receiver Side
   ---------------   ---------------
   |             |   |             |
  (R+jX_L)-----o---|---o----- (R+jX_L)
   |             |   |             |
   ---------------   ---------------
```
*Note: This is a simplified representation. The actual model represents the total series impedance per phase.*

#### 3.2. Medium Transmission Line Model (Approximations of Capacitance)

For medium lines (80-240 km), capacitance effects become significant and are approximated by lumped capacitance. Two common models are:

**a) Nominal-T Model:**

The total series impedance ($R+jX_L$) is placed at the middle of the line, and the total capacitance ($C$) is placed at the middle, split between sending and receiving ends (C/2 at each end).

**Model:**

```
        Is              Ir
     -------         -------
 ---|(R+jXL)/2|---o---|---o---|(R+jXL)/2|---
 |  -------    | C/2 | C/2 |  -------    |
 |             |-----|-----|             |
 ---           ---   ---   ---           ---
  Vs            |     |     |            Vr
                ---   ---   ---
                 C/2   C/2
```

**b) Nominal-Pi (π) Model:**

The total capacitance ($C$) is split and placed at the sending and receiving ends (C/2 at each end), and the total series impedance ($R+jX_L$) is placed between these capacitance points.

**Model:**

```
        Is              Ir
     -------         -------
 ---o---|---o---|(R+jXL)|---o---|---o---
 | C/2| C/2|  -------  | C/2| C/2|
 ---   ---            ---   ---
  Vs                 Vr
```
*Note: This shows the shunt capacitors connected to the line terminals.*

**Textbook Reference:**

*   **Wadhwa C. L., "Electrical Power Systems"**: Chapter 2 details these models and their mathematical representations.
*   **Mehta V. K. and Mehta R., "Principles of Power System"**: Chapter 1 also explains the nominal-T and nominal-Pi models with their respective phasor diagrams.

**Important Point to Remember:** The choice between Nominal-T and Nominal-Pi models depends on the line length and the desired accuracy. The Pi model is generally more accurate for medium lines.

#### 3.3. Long Transmission Line Model (Distributed Parameters)

For long lines (> 240 km), the line parameters are truly distributed. The analysis involves differential equations. The model is represented by a hyperbolic function, considering propagation constant ($\gamma$), characteristic impedance ($Z_0$), and attenuation constant ($\alpha$).

$\gamma = \sqrt{(R+jX_L)(G+jX_C)}$
$Z_0 = \sqrt{\frac{R+jX_L}{G+jX_C}}$

Where G is conductance (leakage) and $X_C = 1/(\omega C)$.

The sending end voltage and current can be related to the receiving end voltage and current using these parameters.

**Textbook Reference:**

*   **Wadhwa C. L., "Electrical Power Systems"**: Chapter 2 thoroughly covers the long transmission line model, including the derivation of the wave equation and the application of hyperbolic functions.

**Alignment with Course Outcomes:**

*   **CO2: Evaluate the electrical performance of any transmission line.** Understanding R, L, and C is fundamental to calculating voltage drops, power loss, voltage regulation, and power transfer capability, which are all aspects of electrical performance.
*   **CO3: Compute various physical characteristics of overhead and underground transmission systems.** The derivations of R, L, and C directly involve physical characteristics like conductor material, cross-section, spacing, and arrangement, especially for double circuits.

### 4. Practice Questions and Answers

**Question 1:** A single-phase transmission line has two conductors of radius 0.8 cm, separated by a distance of 2 m. Calculate the inductance per kilometer of the line.
**(Assume $\mu_0 = 4\pi \times 10^{-7} \, H/m$)**

**Answer:**
*   Radius $r = 0.8 \, cm = 0.008 \, m$.
*   Distance $D = 2 \, m$.
*   $GMR \approx 0.7788r = 0.7788 \times 0.008 \, m = 0.00623 \, m$.

Inductance per meter:
$L_{m} = 2 \times 10^{-7} \ln(\frac{D}{GMR}) = 2 \times 10^{-7} \ln(\frac{2}{0.00623})$
$L_{m} = 2 \times 10^{-7} \ln(320.87)$
$L_{m} = 2 \times 10^{-7} \times 5.770 \, H/m$
$L_{m} = 11.54 \times 10^{-7} \, H/m$

Inductance per kilometer:
$L_{km} = L_m \times 1000 = 11.54 \times 10^{-7} \times 1000 = 11.54 \times 10^{-4} \, H/km = 1.154 \, mH/km$.

**Question 2:** Calculate the capacitance per phase to neutral for a three-phase transmission line with conductors arranged in an equilateral triangle of side 3 m. The radius of each conductor is 1.2 cm.
**(Assume $\epsilon_0 = 8.854 \times 10^{-12} \, F/m$)**

**Answer:**
*   Spacing $D = 3 \, m$.
*   Radius $r = 1.2 \, cm = 0.012 \, m$.

Capacitance per phase to neutral per meter:
$C_{m} = \frac{2\pi\epsilon_0}{\ln(D/r)} = \frac{2\pi \times 8.854 \times 10^{-12}}{\ln(3 / 0.012)}$
$C_{m} = \frac{5.563 \times 10^{-11}}{\ln(250)}$
$C_{m} = \frac{5.563 \times 10^{-11}}{5.521}$
$C_{m} = 1.007 \times 10^{-11} \, F/m$

Capacitance per phase to neutral per kilometer:
$C_{km} = C_m \times 1000 = 1.007 \times 10^{-11} \times 1000 = 1.007 \times 10^{-8} \, F/km = 0.01007 \, \mu F/km$.

**Question 3:** What is the primary effect of inductance in a transmission line?
**(a) Voltage drop due to current flow.**
**(b) Power loss due to heat.**
**(c) Opposition to change in current.**
**(d) Storing energy in an electric field.**

**Answer:** (c) Opposition to change in current.
*   (a) is due to resistance and reactance.
*   (b) is due to resistance (I²R loss).
*   (d) is the characteristic of capacitance.

**Question 4:** For a double circuit transmission line, explain why calculating inductance and capacitance is more complex than for a single circuit.

**Answer:**
Calculating inductance and capacitance for a double circuit is more complex due to:
1.  **Mutual Inductance/Capacitance:** There's significant mutual inductance and capacitance between conductors of the same phase in different circuits (e.g., A1 and A2) and between conductors of different phases in different circuits (e.g., A1 and B2).
2.  **Conductor Arrangement:** The spatial arrangement of all six phase conductors and their effective return paths must be precisely accounted for.
3.  **Symmetry and Balance:** While symmetrical arrangements simplify calculations, deviations from symmetry introduce imbalances that require more advanced analysis (e.g., using sequence impedances).
4.  **Effective Distances:** Determining the effective distances for flux linkage (for inductance) and electric field (for capacitance) to the neutral or return path becomes more intricate due to the presence of multiple conductors.

### 5. Summary and Key Takeaways

*   **Resistance (R)**: Primarily due to conductor resistivity and length, causing power loss. Affected by temperature and skin effect.
*   **Inductance (L)**: Due to magnetic flux linkage with conductors. Opposition to current change. Depends on conductor spacing and GMR. Double circuits have complex mutual inductance.
*   **Capacitance (C)**: Due to electric field between conductors. Causes charging current. Depends on conductor spacing and radius. Double circuits have complex mutual capacitance.
*   **Transmission Line Models**: Categorized into short (series R-X), medium (nominal-T or Pi), and long (distributed parameters).
*   **Double Circuit Complexity**: The presence of two circuits introduces mutual effects that significantly alter the line parameters compared to a single circuit. Accurate calculation requires considering the positions of all conductors and applying methods like potential coefficients or composite GMR/effective radii.
*   **CO Alignment**: These parameters (R, L, C) are the bedrock for evaluating transmission line performance (CO2) and calculating its physical and electrical characteristics (CO3).

This comprehensive study of line parameters for both single and double circuits is crucial for understanding and modeling the behavior of power transmission systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
