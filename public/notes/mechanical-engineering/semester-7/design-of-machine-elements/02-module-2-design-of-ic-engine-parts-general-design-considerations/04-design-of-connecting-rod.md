---
title: "Design of connecting rod"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 2: Design of IC Engine parts: General design considerations"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d62"
status: "completed"
scrapedAt: "2026-05-20T18:10:51.138Z"
---
# DESIGN OF MACHINE ELEMENTS - Module 2: Design of IC Engine parts: General Design Considerations

## Topic: Design of Connecting Rod

### Learning Outcomes:

*   Understand the function and forces acting on a connecting rod.
*   Identify the different parts of a connecting rod and their respective designs.
*   Analyze the stresses induced in the connecting rod and select appropriate materials.
*   Design the big end and small end bearings for the connecting rod.
*   Design the connecting rod shank for strength and rigidity.
*   Consider various manufacturing methods and their implications on the design.

### Course Outcomes Alignment:

*   **CO2: Make use of the design procedure for I C engine components (Knowledge Level: K3)**
    This topic directly addresses CO2 by detailing the step-by-step design process for a crucial IC engine component.

---

### 1. Introduction to the Connecting Rod

The connecting rod is a vital component in an internal combustion engine that connects the piston to the crankshaft. Its primary function is to transmit the linear motion of the piston into the rotary motion of the crankshaft.

**Key Concepts:**

*   **Function:** To convert reciprocating (linear) motion of the piston into rotary motion of the crankshaft.
*   **Forces Involved:**
    *   **Gas Force:** Due to combustion pressure acting on the piston crown.
    *   **Inertia Force:** Due to the reciprocating and rotating masses of the piston, piston rings, gudgeon pin, and connecting rod.
    *   **Centrifugal Force:** Acting on the rotating portion of the connecting rod.

**Important Points to Remember:**

*   The connecting rod is subjected to both tensile and compressive forces.
*   The magnitude of these forces varies significantly throughout the engine cycle.
*   The design must ensure adequate strength, rigidity, and resistance to fatigue.

---

### 2. Forces Acting on the Connecting Rod

Understanding the forces is crucial for designing a robust connecting rod.

**2.1 Gas Force (Piston Thrust):**

*   This force acts axially on the piston.
*   $F_g = P_b \times A_p$
    Where:
    *   $P_b$ = Maximum brake mean effective pressure (BMEP)
    *   $A_p$ = Area of the piston = $\frac{\pi}{4} \times D^2$ (D = Cylinder bore diameter)

**2.2 Inertia Force:**

*   **Reciprocating Mass Inertia Force ($F_{i,rec}$):**
    *   $F_{i,rec} = m_r \times a_{rec}$
    *   $a_{rec} = \omega^2 \times r \times (\cos \theta + \frac{l}{r} \cos 2\theta)$
    *   Where:
        *   $m_r$ = Equivalent reciprocating mass (piston, rings, gudgeon pin, half of connecting rod big end mass)
        *   $\omega$ = Angular velocity of the crankshaft (rad/s)
        *   $r$ = Crank radius
        *   $\theta$ = Crank angle
        *   $l$ = Length of the connecting rod
        *   $\frac{l}{r}$ = Length-to-crank ratio (typically 3 to 4)
    *   **Maximum inertia force occurs at Top Dead Center (TDC) and Bottom Dead Center (BDC).**
        *   At TDC ($\theta = 180^\circ$): $a_{rec} \approx -\omega^2 r (1 + \frac{l}{r})$ (Compressive)
        *   At BDC ($\theta = 0^\circ$): $a_{rec} \approx \omega^2 r (1 + \frac{l}{r})$ (Tensile)

*   **Rotating Mass Inertia Force ($F_{i,rot}$):**
    *   $F_{i,rot} = m_f \times \omega^2 \times r$ (Centrifugal force)
    *   Where:
        *   $m_f$ = Equivalent rotating mass (crankshaft end of connecting rod, balance weights)
    *   This force acts radially outwards from the center of rotation. It's often balanced by counterweights on the crankshaft.

**2.3 Resultant Force on the Connecting Rod:**

*   **Force along the axis of the connecting rod ($F_a$):**
    *   $F_a = F_g + F_{i,rec}$ (acting axially)
    *   This force is compressive at TDC and can be tensile or compressive at BDC depending on the magnitude of gas and inertia forces.
    *   **Maximum axial load occurs at TDC during the power stroke, which is usually compressive.**

*   **Force perpendicular to the axis of the connecting rod ($F_p$):**
    *   $F_p = F_g \sin \phi + F_{i,rec} \sin \phi$ (thrust on cylinder walls)
    *   Where $\phi$ is the angle between the connecting rod and the cylinder axis.
    *   $F_p \approx F_g \sin \theta + F_{i,rec} \sin \theta$ (for small $\theta$)
    *   This force is responsible for the side thrust on the piston and cylinder liner.

**Example Calculation (Simplified):**

Consider a petrol engine with:
*   Cylinder bore diameter, D = 80 mm = 0.08 m
*   Stroke, S = 100 mm = 0.1 m $\implies$ Crank radius, r = 50 mm = 0.05 m
*   Engine speed, N = 2000 rpm
*   Maximum gas pressure, $P_{max}$ = 5 MPa = $5 \times 10^6$ N/m$^2$
*   Equivalent reciprocating mass, $m_r$ = 0.5 kg
*   Length of connecting rod, l = 200 mm = 0.2 m

1.  **Piston Area:** $A_p = \frac{\pi}{4} \times (0.08)^2 = 0.0050265$ m$^2$
2.  **Maximum Gas Force:** $F_g = P_{max} \times A_p = 5 \times 10^6 \times 0.0050265 = 25132.5$ N
3.  **Engine Speed:** $\omega = \frac{2 \pi N}{60} = \frac{2 \pi \times 2000}{60} = 209.44$ rad/s
4.  **Inertia Force at TDC (approx.):**
    *   $\frac{l}{r} = \frac{0.2}{0.05} = 4$
    *   $a_{rec, TDC} \approx -\omega^2 r (1 + \frac{l}{r}) = -(209.44)^2 \times 0.05 \times (1 + 4) = -218833$ m/s$^2$
    *   $F_{i,rec, TDC} = m_r \times a_{rec, TDC} = 0.5 \times (-218833) = -109416.5$ N (Compressive)
5.  **Axial Force at TDC:** $F_a = F_g + F_{i,rec, TDC} = 25132.5 + (-109416.5) = -84284$ N. This is a significant compressive force.

**Important Points to Remember:**

*   The maximum axial compressive load on the connecting rod typically occurs at TDC during the power stroke.
*   The inertia forces become dominant at high engine speeds, often making the force tensile at BDC and even more compressive at TDC.
*   The side thrust is important for the design of piston and cylinder liner, but the axial force dictates the primary design of the connecting rod shank.

---

### 3. Design Considerations for Connecting Rod Components

A connecting rod typically consists of three main parts:

*   **Big End:** Connects to the crankshaft journal.
*   **Small End:** Connects to the gudgeon pin.
*   **Shank:** Connects the big end and small end.

#### 3.1 Small End Design

*   **Function:** Connects to the gudgeon pin (piston pin).
*   **Forces:** Primarily subjected to the axial force transmitted from the piston and gas pressure.
*   **Bearing Type:** Plain bearing (bushing).
*   **Design:** Usually designed as a bush made of bronze or white metal, pressed into the eye of the small end. The gudgeon pin is typically made of hardened steel.

**Key Design Parameters:**

*   **Diameter of Small End Eye:** Slightly larger than the gudgeon pin diameter to allow for clearance.
*   **Width of the Small End Eye:** Should be sufficient to accommodate the piston bosses and allow for lubrication.
*   **Gudgeon Pin Diameter:** Determined by the piston thrust and bearing pressure.
*   **Material:** Gudgeon pin: Case-hardened steel. Bush: Bronze or aluminum alloy with white metal lining.

**Formulae (Refer to Bhandari or Norton for detailed derivations and empirical factors):**

*   **Gudgeon Pin Diameter ($d_p$):** Often designed based on the maximum piston side thrust.
    $d_p = C \sqrt{\frac{P_b \times D}{S_y \times \mu}}$ where $\mu$ is the coefficient of friction.
    However, a more common approach is to consider the bearing pressure and bending stress.

*   **Bearing Pressure ($p_b$):** $p_b = \frac{F_{max}}{d_p \times w_s}$
    Where $F_{max}$ is the maximum piston thrust and $w_s$ is the width of the small end. The allowable bearing pressure is usually in the range of 7-15 MPa.

**Important Points to Remember:**

*   The small end is usually split to facilitate assembly.
*   The split can be horizontal or at an angle.
*   The gudgeon pin is typically hollow to reduce weight.

#### 3.2 Big End Design

*   **Function:** Connects to the crankshaft journal.
*   **Forces:** Subjected to both axial and bending forces due to the connecting rod's weight and inertia.
*   **Bearing Type:** Plain bearing (shell bearing).
*   **Design:** Consists of a cap and a rod end. The cap is usually secured by bolts. The bearing surface is lined with a white metal alloy.

**Key Design Parameters:**

*   **Diameter of Big End Eye ($D_b$):** Slightly larger than the crankshaft journal diameter.
*   **Width of the Big End ($w_b$):** Determined by the bearing pressure and axial load.
*   **Crankshaft Journal Diameter ($d_j$):** Usually determined by engine power output and bearing life considerations.

**Formulae (Refer to Bhandari or Norton for detailed derivations and empirical factors):**

*   **Bearing Pressure ($p_{b,big}$):** $p_{b,big} = \frac{\text{Tangential Force on Crankpin}}{d_j \times w_b}$
    Tangential force is primarily due to the gas force and inertia forces. The allowable bearing pressure for the big end is typically higher than the small end, around 10-20 MPa.

*   **Big End Cap Design:** The cap is subjected to bending stresses due to the pressure on the bearing surface. It is typically secured by two bolts.

    *   **Bearing Pressure Distribution:** Often assumed to be uniform over a projected area.
    *   **Bending Moment on Cap:** The cap experiences a bending moment. A simplified approach is to consider a uniform pressure distribution over the projected area of the bearing.
        $M_{cap} \approx p_{max, axial} \times \frac{d_j}{2} \times \frac{w_b}{2}$ (approximate)
    *   **Bolt Design:** The bolts are designed to withstand the clamping force required to hold the cap and to resist the tensile component of the axial load.

**Important Points to Remember:**

*   The big end is typically split horizontally to allow crankshaft installation.
*   The cap is secured by high-tensile steel bolts, often with locking nuts or dowel pins for alignment.
*   The bearing shells are designed to have a small clearance for lubrication and to conform to the crankshaft journal.

#### 3.3 Shank Design

*   **Function:** Transmits forces between the big end and small end.
*   **Forces:** Primarily subjected to axial tensile and compressive forces and bending stresses.
*   **Cross-section:** Typically I-section or H-section for optimal strength-to-weight ratio.

**Key Design Parameters:**

*   **Cross-sectional Shape:** I-section is most common due to its efficiency in resisting bending and axial loads. H-section is also used.
*   **Dimensions of the Cross-section:** Determined by the maximum axial load and allowable stress.

**Formulae (Refer to Bhandari or Norton for detailed derivations and empirical factors):**

*   **Maximum Axial Load ($F_{a,max}$):** The maximum compressive load at TDC is often the critical factor.
*   **Bending Stress:** The shank can also experience bending stresses due to the offset of the big and small ends relative to the center line, and due to the inertia forces of the rod itself.

    *   **Simplified Bending Moment:** If the big end and small end centers are offset, a bending moment can arise. Consider the case where the big end is offset from the small end axis.
    *   **Buckling:** Under compressive loads, the shank can buckle. This needs to be checked using Euler's buckling formula or equivalent methods.

*   **Stress Calculation:**
    *   **Direct Compressive Stress:** $\sigma_c = \frac{F_{a,max}}{A_{shank}}$
    *   **Bending Stress:** $\sigma_b = \frac{M_b}{Z_{shank}}$ (where $M_b$ is the bending moment and $Z_{shank}$ is the section modulus)
    *   **Combined Stress:** $\sigma_{combined} = \sigma_c + \sigma_b$ (for compressive case)
    *   **Allowable Stress:** The allowable stress ($\sigma_{allow}$) is selected based on the material properties and a suitable factor of safety, considering fatigue.

**Material Selection for Connecting Rod:**

*   **Common Materials:**
    *   **Carbon Steel:** Forged carbon steels like 15C8, 40C8, 50C4.
    *   **Alloy Steel:** Forged alloy steels like 40Cr1, 45Cr1.
    *   **S.G. Iron (Ductile Iron):** Can be used for some applications, especially for smaller engines, offering good fatigue strength.

**Design Procedure for Shank:**

1.  **Determine maximum axial load ($F_{a,max}$).**
2.  **Assume a suitable cross-section (e.g., I-section) and material.**
3.  **Calculate the direct compressive stress.**
4.  **Estimate potential bending moments and calculate bending stress.**
5.  **Calculate the combined stress.**
6.  **Check for buckling (if significant compressive load).**
7.  **Compare the calculated stresses with the allowable stresses of the chosen material (with factor of safety).**
8.  **Adjust the dimensions of the cross-section iteratively until the stresses are within the allowable limits.**

**I-Section Design:**

*   Refer to Bhandari (Chapter 6) or Norton (Chapter 12) for detailed I-section design and stress calculations, including properties like area, moment of inertia, and section modulus.
*   Empirical formulas or design charts are often used, derived from extensive testing and analysis.

**Example of Shank Design (Conceptual):**

Let's assume the maximum axial compressive force is $F_{a,max} = 150$ kN.
The material selected is forged alloy steel with an allowable stress of $\sigma_{allow} = 120$ MPa (including factor of safety).

1.  **Direct Stress Consideration:**
    If the shank were a solid circular rod of diameter $d$, then $A = \frac{\pi}{4}d^2$.
    $F_{a,max} \le \sigma_{allow} \times A$
    $150 \times 10^3 \le 120 \times 10^6 \times \frac{\pi}{4}d^2$
    $d^2 \ge \frac{150 \times 10^3 \times 4}{120 \times 10^6 \times \pi} \approx 1.59 \times 10^{-3}$ m$^2$
    $d \ge 0.0398$ m = 39.8 mm. This gives a rough idea of the required cross-sectional area.

2.  **I-Section Design (More Realistic):**
    An I-section is chosen for its efficiency. The dimensions (flange width, flange thickness, web height, web thickness) are determined by considering:
    *   The required area to resist axial compression.
    *   The required section modulus to resist bending stresses.
    *   Buckling stability.

    Design charts or iterative calculations based on established empirical formulas (as found in Bhandari or Mahadevan & Balaveera Reddy's data book) are used to determine the optimal I-section dimensions.

**Important Points to Remember:**

*   The shank is the longest and most slender part, making it prone to buckling.
*   The weight of the connecting rod contributes to inertia forces and should be minimized by using efficient cross-sections.
*   Fatigue strength is crucial as the rod is subjected to cyclic loading.

---

### 4. Material Selection and Manufacturing

**4.1 Material Selection Criteria:**

*   **High Tensile Strength:** To withstand tensile forces.
*   **High Compressive Strength:** To withstand compressive forces.
*   **Good Fatigue Strength:** For cyclic loading.
*   **High Stiffness:** To minimize deflection.
*   **Good Bearing Properties:** For the big and small end bushes.
*   **Machinability:** For ease of manufacturing.
*   **Cost-effectiveness.**

**4.2 Common Materials:**

*   **Forged Steels:**
    *   **Carbon Steels:** 15C8, 40C8, 50C4 (Good general-purpose steels)
    *   **Alloy Steels:** 40Cr1, 45Cr1, 25CrA (Offer higher strength and toughness)
*   **S.G. Iron (Ductile Iron):** Can be used for smaller engines, offering good fatigue resistance.
*   **Aluminum Alloys:** Used in high-performance racing engines to reduce weight, but have lower strength and stiffness.

**4.3 Manufacturing Methods:**

*   **Forging:** The most common method for connecting rods. It provides good strength and grain flow for fatigue resistance.
    *   **Drop Forging:** Standard for mass production.
    *   **Die Forging:** Precision forging.
*   **Casting:** Used for some engine types (e.g., S.G. Iron). Less common for high-performance engines.
*   **Machining:** Essential for finishing the connecting rod, including machining of the big end and small end eyes, and the shank profile.
*   **Heat Treatment:** Hardening and tempering are often applied to improve strength and toughness.

**Important Points to Remember:**

*   Forging is preferred for its superior mechanical properties.
*   Surface finish is important for reducing stress concentrations and improving fatigue life.

---

### 5. Design Procedure Summary

1.  **Determine Engine Specifications:** Bore diameter, stroke, engine speed, maximum cylinder pressure.
2.  **Calculate Forces:**
    *   Piston area.
    *   Maximum gas force.
    *   Angular velocity of crankshaft.
    *   Equivalent reciprocating and rotating masses.
    *   Inertia forces (reciprocating and rotating) at critical crank angles (especially TDC and BDC).
    *   Axial forces on the connecting rod at TDC and BDC.
3.  **Design Small End:**
    *   Determine gudgeon pin diameter based on piston thrust or allowable bearing pressure.
    *   Select material for the gudgeon pin and bushing.
    *   Design the small end eye dimensions.
4.  **Design Big End:**
    *   Determine crankshaft journal diameter.
    *   Calculate the bearing width required for the big end based on allowable bearing pressure and the axial load.
    *   Design the big end cap, considering bending stresses and bolt size.
    *   Select material for bearing shells.
5.  **Design Shank:**
    *   Assume a suitable cross-section (e.g., I-section).
    *   Select a material based on strength, fatigue, and cost.
    *   Calculate stresses (direct compression, bending) under the maximum axial load.
    *   Check for buckling.
    *   Iteratively adjust the dimensions of the shank cross-section until the stresses are within the allowable limits, considering a factor of safety.
    *   Minimize weight by choosing an efficient section.
6.  **Consider Manufacturing and Assembly:** Ensure the design is manufacturable and can be assembled with the crankshaft and piston.
7.  **Factor of Safety:** Apply an appropriate factor of safety (typically 4-6 for static loads, higher for fatigue) to account for uncertainties in calculations, material properties, and operating conditions.

---

### 6. Practice Questions and Answers

**Question 1:**

A connecting rod for a petrol engine has the following data:
Cylinder bore diameter = 75 mm
Stroke = 90 mm
Engine speed = 2400 rpm
Maximum gas pressure = 5 MPa
Equivalent reciprocating mass = 0.4 kg
Length of connecting rod = 180 mm
Length-to-crank ratio = 4

Calculate the maximum axial compressive force acting on the connecting rod at TDC.

**Answer:**

1.  **Piston Area ($A_p$):**
    $D = 75$ mm $= 0.075$ m
    $A_p = \frac{\pi}{4} D^2 = \frac{\pi}{4} (0.075)^2 = 0.0044179$ m$^2$

2.  **Maximum Gas Force ($F_g$):**
    $P_{max} = 5$ MPa $= 5 \times 10^6$ N/m$^2$
    $F_g = P_{max} \times A_p = 5 \times 10^6 \times 0.0044179 = 22089.5$ N

3.  **Engine Speed ($\omega$):**
    $N = 2400$ rpm
    $\omega = \frac{2 \pi N}{60} = \frac{2 \pi \times 2400}{60} = 251.33$ rad/s

4.  **Crank Radius ($r$):**
    Stroke $S = 90$ mm $= 0.09$ m
    $r = S/2 = 0.045$ m

5.  **Inertia Force at TDC ($F_{i,rec, TDC}$):**
    Length-to-crank ratio $\frac{l}{r} = 4$
    Acceleration at TDC: $a_{rec, TDC} \approx -\omega^2 r (1 + \frac{l}{r})$
    $a_{rec, TDC} \approx -(251.33)^2 \times 0.045 \times (1 + 4) = -214701$ m/s$^2$
    $F_{i,rec, TDC} = m_r \times a_{rec, TDC} = 0.4 \times (-214701) = -85880.4$ N (Compressive)

6.  **Maximum Axial Force at TDC ($F_a$):**
    $F_a = F_g + F_{i,rec, TDC} = 22089.5 + (-85880.4) = -63790.9$ N

    The maximum axial compressive force is approximately **63.79 kN**.

**Question 2:**

What are the primary functions of the connecting rod in an IC engine? List the main parts of a connecting rod.

**Answer:**

**Primary Functions:**
1.  To transmit the force from the piston to the crankshaft.
2.  To convert the reciprocating motion of the piston into the rotary motion of the crankshaft.

**Main Parts:**
1.  **Big End:** Connects to the crankshaft journal.
2.  **Small End:** Connects to the gudgeon pin (piston pin).
3.  **Shank:** Connects the big end and the small end.

**Question 3:**

Discuss the importance of fatigue strength in the design of a connecting rod shank.

**Answer:**

The connecting rod shank is subjected to continuous cyclic loading (both tensile and compressive) during the operation of the IC engine. These loads cause alternating stresses in the material. Fatigue is the phenomenon of material failure under repeated or fluctuating stresses, even if the maximum stress is below the ultimate tensile strength or yield strength of the material.

Therefore, the connecting rod shank must be designed with adequate fatigue strength to prevent premature failure due to crack initiation and propagation. This involves:
*   **Selecting materials with good fatigue resistance.**
*   **Choosing appropriate cross-sectional shapes that minimize stress concentrations.**
*   **Ensuring proper surface finish to reduce the likelihood of crack initiation.**
*   **Applying a suitable factor of safety that accounts for the cyclic nature of the loading.**

Failure to consider fatigue can lead to catastrophic failure of the engine.

---

### 7. Key Takeaways

*   The connecting rod transmits forces and converts motion between the piston and crankshaft.
*   Forces acting on the connecting rod include gas forces and inertia forces.
*   The maximum axial compressive force typically occurs at TDC.
*   The connecting rod consists of a small end, big end, and shank.
*   The small end connects to the gudgeon pin, and the big end connects to the crankshaft journal, usually via plain bearings.
*   The shank is often an I-section or H-section for optimal strength-to-weight ratio and is designed to withstand axial and bending stresses, as well as buckling.
*   Material selection, particularly fatigue strength, is critical for connecting rod design.
*   Forging is the preferred manufacturing method.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References:

*   **Design of Machine Elements by V B Bhandari:** (Chapter 6, Connecting Rods) - Provides detailed derivations, formulas, and design procedures.
*   **Machine Design – An Integrated Approach by R. L. Norton:** (Chapter 12, Connecting Rods) - Offers a good overview of forces and design considerations.
*   **Design Data Hand Book by K. Mahadevan, K. Balaveera Reddy:** Contains relevant empirical formulas, material properties, and design charts.
*   **PSG Design Data:** A valuable resource for standard dimensions, material properties, and empirical data.