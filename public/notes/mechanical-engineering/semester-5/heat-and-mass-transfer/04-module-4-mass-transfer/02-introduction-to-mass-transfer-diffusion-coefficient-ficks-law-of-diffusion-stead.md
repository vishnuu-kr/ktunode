---
title: "Introduction to mass transfer – diffusion coefficient – Fick’s law of diffusion- steady state diffusion in stationary medium- diffusion in moving medium- diffusion through a membrane."
subject: "HEAT AND MASS TRANSFER"
module: "Module 4: Mass Transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633b1"
status: "completed"
scrapedAt: "2026-05-20T18:00:18.641Z"
---
# Module 4: Mass Transfer - Introduction to Mass Transfer

## Introduction

Mass transfer is a fundamental phenomenon that occurs when there is a difference in concentration of a chemical species within a mixture. It is the net movement of molecules from a region of higher concentration to a region of lower concentration. This process is analogous to heat transfer, where heat moves from a region of higher temperature to a region of lower temperature. Understanding mass transfer is crucial in many engineering applications, including chemical processing, drying, distillation, absorption, and biological systems.

**Key Concept:** Mass transfer is driven by concentration gradients, just as heat transfer is driven by temperature gradients.

**Course Outcome Alignment:** This module directly contributes to **CO4: To understand the principles modern cooling techniques and solve mass transfer problems using correlations.** The foundational concepts of mass transfer are essential for understanding more advanced topics like evaporative cooling and for solving practical problems involving the movement of substances.

**Reference Alignment:**
*   **Sachdeva (2022):** Likely covers the fundamental principles of mass transfer as a precursor to more complex applications.
*   **P.K Nag (2011):** Expected to provide a solid grounding in the mechanisms and laws of mass transfer.
*   **Cengel & Ghajar (2020):** Will likely offer a comprehensive overview with numerous examples relevant to engineering practice.
*   **Sukhatme (2005):** May provide a theoretical treatment of mass transfer phenomena.
*   **Shigley, Juvinall, Budynas, Spotts (Reference Books):** While primarily design-focused, these texts might touch upon mass transfer in specific contexts like material selection or corrosion, which involve diffusion.

---

## 1. Diffusion Coefficient

The diffusion coefficient (or diffusivity) quantifies the rate at which a substance diffuses through another substance. It is a measure of how quickly molecules move from an area of high concentration to an area of low concentration.

**Definition:** The diffusion coefficient, denoted by $D$ (or $D_{AB}$ for the diffusion of species A in species B), is defined as the ratio of the molar flux of a species to the concentration gradient of that species.

**Units:**
*   SI units: $m^2/s$
*   Common units: $cm^2/s$

**Factors Affecting Diffusion Coefficient:**

*   **Temperature:** Generally increases with temperature due to increased molecular kinetic energy.
*   **Pressure:** For gases, the diffusion coefficient decreases with increasing pressure. For liquids and solids, the effect of pressure is less significant.
*   **Nature of the diffusing species and the medium:** Heavier molecules diffuse slower than lighter molecules. The viscosity of the medium also plays a role; higher viscosity leads to lower diffusion coefficients.
*   **Phase:** Diffusion coefficients are significantly higher in gases than in liquids, and much higher in liquids than in solids.

**Typical Values (Approximate):**
*   Gases: $0.1 - 10 cm^2/s$
*   Liquids: $10^{-5} - 10^{-7} cm^2/s$
*   Solids: $10^{-9} - 10^{-15} cm^2/s$

**Example:** Imagine a drop of ink diffusing in water. The ink molecules (diffusing species) spread out into the surrounding water (medium). The rate at which this happens is governed by the diffusion coefficient of ink in water.

**Important Point to Remember:** The diffusion coefficient is an intrinsic property of the diffusing substance and the medium at a given temperature and pressure.

---

## 2. Fick’s Law of Diffusion

Fick's Laws of Diffusion are empirical laws that describe the process of diffusion. They are analogous to Ohm's law for electrical current and Fourier's law for heat conduction.

### 2.1. Fick’s First Law

Fick's First Law relates the molar flux of a species to the concentration gradient.

**Definition:** The molar flux ($J_A^*$) of a species A in a stationary medium is proportional to the negative of the concentration gradient ($dC_A/dx$) along the direction of diffusion.

**Mathematical Formulation (1D, steady-state):**

$J_A^* = -D_{AB} \frac{dC_A}{dx}$

Where:
*   $J_A^*$ = molar flux of species A ($mol/(m^2 \cdot s)$)
*   $D_{AB}$ = diffusion coefficient of species A in species B ($m^2/s$)
*   $\frac{dC_A}{dx}$ = concentration gradient of species A in the x-direction ($mol/m^3$)

**Interpretation:**
*   The negative sign indicates that diffusion occurs from a region of higher concentration to a region of lower concentration, where the concentration gradient is negative.
*   The molar flux is directly proportional to the diffusion coefficient and the steepness of the concentration gradient.

**General Form (3D):**

$\vec{J}_A^* = -D_{AB} \nabla C_A$

Where $\nabla C_A$ is the concentration gradient vector.

**Example:** In a gas mixture of nitrogen and oxygen, if there's a higher concentration of oxygen at one end, oxygen molecules will diffuse towards the end with lower concentration, driven by the concentration gradient.

**Reference Alignment:**
*   **Sachdeva (2022), P.K Nag (2011), Cengel & Ghajar (2020):** These texts will extensively cover Fick's First Law and its applications in various mass transfer scenarios.

---

### 2.2. Fick’s Second Law

Fick's Second Law describes how the concentration of a diffusing species changes with time. It is a conservation equation for mass.

**Definition:** Fick's Second Law states that the rate of change of concentration of a species at a point is proportional to the second derivative of the concentration with respect to position.

**Mathematical Formulation (1D, unsteady-state):**

$\frac{\partial C_A}{\partial t} = D_{AB} \frac{\partial^2 C_A}{\partial x^2}$

Where:
*   $\frac{\partial C_A}{\partial t}$ = rate of change of concentration of species A with time ($mol/(m^3 \cdot s)$)
*   $D_{AB}$ = diffusion coefficient ($m^2/s$)
*   $\frac{\partial^2 C_A}{\partial x^2}$ = second derivative of concentration with respect to position ($mol/m^4$)

**General Form (3D):**

$\frac{\partial C_A}{\partial t} = D_{AB} \nabla^2 C_A$

Where $\nabla^2 C_A$ is the Laplacian of the concentration.

**Interpretation:** This equation describes how concentration profiles evolve over time due to diffusion. If the second derivative of concentration is positive, the concentration is increasing at that point (concave up). If it's negative, the concentration is decreasing (concave down).

**Example:** Consider a solid block where a species is introduced only at the surface. Fick's Second Law would describe how the concentration of this species penetrates into the block over time.

**Reference Alignment:**
*   **Sachdeva (2022), P.K Nag (2011), Cengel & Ghajar (2020):** Will detail the derivation and application of Fick's Second Law, particularly in solving transient diffusion problems.

---

## 3. Steady-State Diffusion in a Stationary Medium

This is the simplest scenario of mass transfer, where the concentration of the diffusing species does not change with time. The medium is assumed to be stationary, meaning there is no bulk movement of the fluid or solid.

**Assumptions:**
1.  Steady-state: Concentration does not change with time ($\frac{\partial C_A}{\partial t} = 0$).
2.  Stationary medium: No bulk movement of the fluid or solid.
3.  One-dimensional diffusion.
4.  Constant diffusion coefficient ($D_{AB}$).

**Derivation:**
Starting from Fick's First Law:
$J_A^* = -D_{AB} \frac{dC_A}{dx}$

Since the diffusion is steady-state and one-dimensional, the molar flux ($J_A^*$) is constant across any cross-section perpendicular to the direction of diffusion.

Integrating with respect to $x$:
$\int_{C_{A1}}^{C_{A2}} dC_A = -\frac{J_A^*}{D_{AB}} \int_{x_1}^{x_2} dx$

$C_{A2} - C_{A1} = -\frac{J_A^*}{D_{AB}} (x_2 - x_1)$

Rearranging to find the molar flux:
$J_A^* = -D_{AB} \frac{C_{A2} - C_{A1}}{x_2 - x_1} = D_{AB} \frac{C_{A1} - C_{A2}}{x_2 - x_1}$

If we define the thickness of the medium as $L = x_2 - x_1$, and the concentrations at the boundaries as $C_{A1}$ and $C_{A2}$:

$J_A^* = D_{AB} \frac{C_{A1} - C_{A2}}{L}$

**Mass Transfer Rate (N_A):**
The molar flux is the rate of mass transfer per unit area. The total mass transfer rate ($N_A$) through a cross-sectional area $A$ is given by:

$N_A = J_A^* \cdot A = D_{AB} A \frac{C_{A1} - C_{A2}}{L}$

This equation is analogous to Ohm's Law ($I = \frac{V_1 - V_2}{R}$) where:
*   $N_A$ is analogous to current ($I$).
*   $(C_{A1} - C_{A2})$ is analogous to voltage difference.
*   $L/(D_{AB} A)$ is analogous to electrical resistance.

**Example: Diffusion through a Composite Wall**
Consider two layers of different materials (1 and 2) with different diffusion coefficients ($D_{AB1}, D_{AB2}$) and thicknesses ($L_1, L_2$). The mass transfer rate through this composite wall is analogous to heat transfer through a composite wall.

$N_A = \frac{C_{A1} - C_{A3}}{\frac{L_1}{D_{AB1}A} + \frac{L_2}{D_{AB2}A}}$

The term $\frac{L}{DA}$ represents the "mass transfer resistance".

**Important Point to Remember:** Steady-state diffusion in a stationary medium implies a constant molar flux across all sections.

**Reference Alignment:**
*   **Sachdeva (2022), P.K Nag (2011), Cengel & Ghajar (2020):** Will provide detailed derivations and examples of steady-state diffusion, including cases with composite media.

---

## 4. Diffusion in a Moving Medium

When the medium itself is moving (bulk flow), the total flux of a species is the sum of its diffusive flux and its convective flux. This is particularly relevant for gases and liquids.

**Key Concepts:**
*   **Molar Flux:** Rate of mass transfer per unit area.
*   **Bulk Flow Velocity ($\vec{v}$):** The average velocity of the mixture.
*   **Convective Flux:** The flux due to the bulk movement of the medium.
*   **Diffusive Flux ($J_A^*$):** The flux due to concentration gradients relative to the bulk motion.

**Mathematical Formulation:**
The total molar flux of species A ($\vec{N}_A$) is given by:

$\vec{N}_A = \vec{N}_A^{diffusive} + \vec{N}_A^{convective}$

$\vec{N}_A = -D_{AB} \nabla C_A + C_A \vec{v}$

Where:
*   $\vec{N}_A$ = total molar flux of species A ($mol/(m^2 \cdot s)$)
*   $-D_{AB} \nabla C_A$ = diffusive molar flux
*   $C_A \vec{v}$ = convective molar flux

**Special Cases:**

### 4.1. Diffusion in a Binary Mixture with No Net Molar Flux

This occurs when the bulk motion is solely due to the diffusion of one species (e.g., diffusion of A into stagnant B). In this case, the total molar flux of B is zero ($\vec{N}_B = 0$), and the total molar flux of A is equal and opposite to the total molar flux of B if it's a binary mixture with no other mass generation or consumption.

Consider a binary mixture of A and B. The molar density is $C = C_A + C_B$.
The total molar flux is $\vec{N} = \vec{N}_A + \vec{N}_B$.

If there is no net molar transfer (i.e., $\vec{N}_A + \vec{N}_B = 0$), then $\vec{N}_A = -\vec{N}_B$.

Let's assume species B is stagnant ($\vec{N}_B = 0$). Then $\vec{N}_A = 0$.
This is incorrect. If species B is stagnant, it means its *convective* flux is zero relative to some reference. A more accurate statement for "stagnant" is that there is no bulk motion of the mixture, i.e., $\vec{v} = 0$.

Let's reconsider the case where **species B is stagnant**. This usually implies that the *convective* molar flux of B is zero, or that the velocity $\vec{v}$ is zero.

If $\vec{v} = 0$ (stagnant medium in the sense of bulk motion), then:
$\vec{N}_A = -D_{AB} \nabla C_A$
$\vec{N}_B = -D_{BA} \nabla C_B$

For a binary mixture, $D_{AB} = D_{BA}$.
$\vec{N}_A = -D_{AB} \nabla C_A$
$\vec{N}_B = -D_{AB} \nabla C_B$

In this case, the total molar flux is $\vec{N} = \vec{N}_A + \vec{N}_B = -D_{AB} (\nabla C_A + \nabla C_B)$.
Since $C = C_A + C_B$, $\nabla C = \nabla C_A + \nabla C_B$.
So, $\vec{N} = -D_{AB} \nabla C$.

If the total molar concentration $C$ is constant, then $\nabla C = 0$, which implies $\vec{N} = 0$. This means $\vec{N}_A = -\vec{N}_B$.

**The case often referred to as "diffusion of A in stagnant B" means that species B is not diffusing on its own relative to the mixture, but its concentration might change due to the diffusion of A.**

A common scenario is when a non-diffusing species (like a solid surface or a non-volatile component) is present. For example, evaporation of water from a free surface into air. Water vapor diffuses into the air, and the air itself is assumed to be stagnant.

If species B is stagnant, it means that the molar flux of B is equal to its convective flux:
$\vec{N}_B = C_B \vec{v}$

And the total molar flux of the mixture is $\vec{N} = \vec{N}_A + \vec{N}_B$.
If the total molar flux is zero ($\vec{N}=0$), then $\vec{N}_A = -\vec{N}_B$.
Substituting:
$-D_{AB} \nabla C_A + C_A \vec{v} = -C_B \vec{v}$
$D_{AB} \nabla C_A = (C_A + C_B) \vec{v} = C \vec{v}$
$\vec{v} = \frac{D_{AB}}{C} \nabla C_A$

Now, substitute this $\vec{v}$ back into the equation for $\vec{N}_A$:
$\vec{N}_A = -D_{AB} \nabla C_A + C_A \left(\frac{D_{AB}}{C} \nabla C_A\right)$
$\vec{N}_A = -D_{AB} \nabla C_A \left(1 - \frac{C_A}{C}\right)$
$\vec{N}_A = -D_{AB} \nabla C_A \left(\frac{C - C_A}{C}\right)$
$\vec{N}_A = -D_{AB} \frac{C_B}{C} \nabla C_A$

This is the flux of A for the case of **equimolar counter-diffusion** or when B is stagnant and no net molar transfer occurs.

**Example: Evaporation of Water into Air**
Water evaporates from a surface into still air. Water vapor (A) diffuses into the air (B). If we assume the air (B) is stagnant (meaning its concentration at the outer boundary is constant and there's no bulk air flow away from the surface), then the concentration of air at the surface might be considered constant.

If we assume $\vec{N}_B = 0$, then $\vec{N}_A = -\vec{N}_B = 0$. This is not always the case.
A better assumption for "stagnant B" in evaporation is that there is no net molar transfer of B. Thus, $\vec{N}_B = C_B \vec{v}$ where $\vec{v}$ is the velocity of the mixture due to the diffusion of A.

Let's use the example from Cengel & Ghajar (2020), Chapter 13: Diffusion of A through stagnant B.
Here, $\vec{N}_B = 0$, implying $\vec{v} = 0$ for species B.
But the mixture itself can move.

The total molar flux of A is $\vec{N}_A = -D_{AB} \nabla C_A + C_A \vec{v}$.
The total molar flux of B is $\vec{N}_B = -D_{BA} \nabla C_B + C_B \vec{v}$.

If B is stagnant, $\vec{N}_B = 0$.
So, $-D_{BA} \nabla C_B + C_B \vec{v} = 0$.
This gives the mixture velocity: $\vec{v} = \frac{D_{BA}}{C_B} \nabla C_B$.

Now substitute this $\vec{v}$ into the expression for $\vec{N}_A$:
$\vec{N}_A = -D_{AB} \nabla C_A + C_A \left(\frac{D_{BA}}{C_B} \nabla C_B\right)$

For a binary mixture $D_{AB} = D_{BA}$. Also, $C = C_A + C_B$.
$\vec{N}_A = -D_{AB} \nabla C_A + \frac{C_A D_{AB}}{C_B} \nabla C_B$.

This can be rearranged. For 1D diffusion:
$N_A = -D_{AB} \frac{dC_A}{dx} + \frac{C_A D_{AB}}{C_B} \frac{dC_B}{dx}$

If $C_B$ is constant, then $\frac{dC_B}{dx} = 0$, and $N_A = -D_{AB} \frac{dC_A}{dx}$. This is the same as steady-state diffusion in a stationary medium. This happens when the mole fraction of B is high and its concentration change is negligible.

However, if $C_B$ is not constant, we can use $C_B = C - C_A$.
$\frac{dC_B}{dx} = -\frac{dC_A}{dx}$.
$N_A = -D_{AB} \frac{dC_A}{dx} - \frac{C_A D_{AB}}{C_B} \frac{dC_A}{dx}$
$N_A = -D_{AB} \frac{dC_A}{dx} \left(1 + \frac{C_A}{C_B}\right)$
$N_A = -D_{AB} \frac{dC_A}{dx} \left(\frac{C_B + C_A}{C_B}\right)$
$N_A = -D_{AB} \frac{C}{C_B} \frac{dC_A}{dx}$

This equation is crucial for scenarios like evaporation of water into air where the air concentration is high and relatively constant, but the water vapor concentration changes.

**Important Point to Remember:** The total flux of a species in a moving medium is the sum of its diffusive and convective fluxes. The "stagnant" assumption for one species in a binary mixture simplifies the calculation of the mixture's bulk velocity.

**Reference Alignment:**
*   **Cengel & Ghajar (2020):** Likely to have detailed sections on diffusion in moving media and specific cases like diffusion of A through stagnant B.
*   **P.K Nag (2011):** Also a strong candidate for covering these aspects.

---

### 4.2. Equimolar Counter-Diffusion

This is a special case where species A and species B diffuse in opposite directions at equal molar rates. This means that the concentration of the mixture ($C = C_A + C_B$) remains constant across the diffusion path.

**Conditions:**
*   $N_A = -N_B$
*   $\vec{v} = 0$ (no bulk motion of the mixture).

**Derivation:**
From the general equation for total flux:
$\vec{N}_A = -D_{AB} \nabla C_A + C_A \vec{v}$
$\vec{N}_B = -D_{BA} \nabla C_B + C_B \vec{v}$

If $\vec{v} = 0$:
$\vec{N}_A = -D_{AB} \nabla C_A$
$\vec{N}_B = -D_{BA} \nabla C_B$

Given $N_A = -N_B$ and $D_{AB} = D_{BA}$:
$-D_{AB} \nabla C_A = -(-D_{AB} \nabla C_B)$
$-D_{AB} \nabla C_A = D_{AB} \nabla C_B$
$\nabla C_A = -\nabla C_B$

This implies that the change in concentration of A is equal and opposite to the change in concentration of B, so $\nabla C_A + \nabla C_B = 0$.
Since $C = C_A + C_B$, this means $\nabla C = 0$, confirming that the total molar concentration is constant.

In this case, both $\vec{N}_A$ and $\vec{N}_B$ are constant and equal in magnitude but opposite in direction.
The equation for the flux of A becomes:

$N_A = -D_{AB} \frac{dC_A}{dx}$

This is identical to the Fick's First Law for a stationary medium with constant molar concentration.

**Example: Isotope Diffusion**
Consider the diffusion of two isotopes of a gas (e.g., $^{12}CO_2$ and $^{13}CO_2$). Although their chemical properties are nearly identical, their mass difference leads to slightly different diffusion coefficients. If they are diffusing in a mixture where the total concentration remains constant, this would be an example of equimolar counter-diffusion.

**Important Point to Remember:** Equimolar counter-diffusion simplifies the mass transfer rate equation back to the basic Fick's First Law form, provided the total molar concentration is constant.

---

## 5. Diffusion Through a Membrane

Diffusion through a membrane is a critical process in many separation technologies, such as gas separation, dialysis, and reverse osmosis. The membrane acts as a barrier, and the rate of diffusion depends on the membrane's properties and the concentration difference of the species across it.

**Key Concepts:**
*   **Membrane:** A physical barrier that separates two phases and allows selective passage of certain species.
*   **Permeability:** A measure of how easily a species can pass through a membrane.
*   **Concentration Polarization:** Accumulation or depletion of species near the membrane surface, which can affect the mass transfer rate.

**Mechanisms of Diffusion Through Membranes:**

1.  **Solution-Diffusion Mechanism:** This is the most common mechanism for dense membranes (non-porous).
    *   **Dissolution:** The diffusing species dissolves into the membrane material at the high-concentration side.
    *   **Diffusion:** The dissolved species diffuses through the membrane matrix from the high-concentration to the low-concentration side, driven by a concentration gradient within the membrane.
    *   **Releasing/Permeation:** The species desorbs from the membrane surface at the low-concentration side.

**Fick's Law Applied to Membranes:**

Consider steady-state diffusion of species A through a flat membrane of thickness $L$ and area $A$.

*   Let $C_{A1}$ be the concentration of species A in the bulk phase adjacent to one side of the membrane.
*   Let $C_{A2}$ be the concentration of species A in the bulk phase adjacent to the other side of the membrane.

**Scenario 1: Concentrations in the membrane are directly proportional to bulk concentrations (Henry's Law applies at the interface)**

If we assume the concentration of species A at the membrane interfaces ($C_{A,m1}$ and $C_{A,m2}$) are directly proportional to the bulk concentrations, then $C_{A,m1} = S \cdot C_{A1}$ and $C_{A,m2} = S \cdot C_{A2}$, where $S$ is the solubility (or partition coefficient).

Using Fick's First Law within the membrane (assuming constant diffusivity $D_{Am}$):
$N_A = D_{Am} A \frac{C_{A,m1} - C_{A,m2}}{L}$

Substituting the solubility relationship:
$N_A = D_{Am} A \frac{S \cdot C_{A1} - S \cdot C_{A2}}{L}$
$N_A = (D_{Am} \cdot S) A \frac{C_{A1} - C_{A2}}{L}$

The term $(D_{Am} \cdot S)$ is called the **permeability** ($P_A$) of the membrane to species A.
$P_A = D_{Am} \cdot S$

So, the mass transfer rate is:
$N_A = P_A A \frac{C_{A1} - C_{A2}}{L}$

**Scenario 2: Permeance (based on partial pressures for gases)**

For gases, it's often more convenient to work with partial pressures. Assuming Henry's Law relates partial pressure $p_A$ to molar concentration $C_A$ by $p_A = R T C_A$ or $C_A = p_A / (RT)$, and solubility $S$ relates concentration in membrane to partial pressure in bulk, $C_{A,m} = S' \cdot p_A$.

Then, $N_A = D_{Am} A \frac{S' p_{A1} - S' p_{A2}}{L} = (D_{Am} \cdot S') A \frac{p_{A1} - p_{A2}}{L}$.
The term $(D_{Am} \cdot S')$ is the permeability in terms of partial pressure. Often, a "permeance" $P^*$ is defined based on partial pressure difference.

$N_A = P^* A \frac{p_{A1} - p_{A2}}{L}$

**Resistance Approach:**
The mass transfer resistance through a membrane can be expressed as:
$R_{mass} = \frac{L}{P_A A}$ or $R_{mass} = \frac{L}{P^* A}$

**Example: Gas Separation**
Consider separating nitrogen ($N_2$) from carbon dioxide ($CO_2$) using a polymeric membrane. $CO_2$ is generally more soluble and diffuses faster through many polymers than $N_2$. If the feed side has a higher partial pressure of $CO_2$, it will permeate through the membrane to the permeate side, achieving separation.

**Important Point to Remember:** The permeability of a membrane is a crucial property that dictates the rate of mass transfer. It combines the diffusivity within the membrane and the solubility of the species in the membrane material.

**Reference Alignment:**
*   **Sachdeva (2022), P.K Nag (2011), Cengel & Ghajar (2020):** These texts will likely cover membrane transport, possibly relating it to diffusion through solids.
*   **Mechanical Design Reference Books (Shigley, Juvinall, etc.):** Might discuss membrane selection or performance in specific mechanical system designs (e.g., filtration, separation in engines).

---

## Practice Questions and Answers

**Question 1:**
A gas mixture consists of species A and B. At a particular location, the molar concentration of A is $C_A = 2 \, mol/m^3$ and the molar concentration of B is $C_B = 3 \, mol/m^3$. The diffusion coefficient of A in B is $D_{AB} = 10^{-5} m^2/s$. If the concentration gradient of A in the x-direction is $\frac{dC_A}{dx} = -500 \, mol/m^4$, calculate the molar flux of A in the x-direction, assuming a stationary medium.

**Answer 1:**
Using Fick's First Law for a stationary medium:
$J_A^* = -D_{AB} \frac{dC_A}{dx}$
$J_A^* = -(10^{-5} m^2/s) (-500 \, mol/m^4)$
$J_A^* = 5 \times 10^{-3} \, mol/(m^2 \cdot s)$

**Question 2:**
Consider steady-state diffusion of species A through a stationary solid slab of thickness $L = 0.02 \, m$. The molar concentrations of A at the two surfaces are $C_{A1} = 5 \, mol/m^3$ and $C_{A2} = 1 \, mol/m^3$. The diffusion coefficient is $D_{AB} = 2 \times 10^{-9} m^2/s$. If the cross-sectional area is $A = 0.1 \, m^2$, what is the rate of mass transfer of A through the slab?

**Answer 2:**
The rate of mass transfer $N_A$ is given by:
$N_A = D_{AB} A \frac{C_{A1} - C_{A2}}{L}$
$N_A = (2 \times 10^{-9} m^2/s) (0.1 m^2) \frac{5 \, mol/m^3 - 1 \, mol/m^3}{0.02 \, m}$
$N_A = (2 \times 10^{-10} m^3/s) \frac{4 \, mol/m^3}{0.02 \, m}$
$N_A = (2 \times 10^{-10} m^3/s) (200 \, mol/m^4)$
$N_A = 4 \times 10^{-8} \, mol/s$

**Question 3:**
In a binary mixture of A and B, species A is diffusing through stagnant species B. The molar concentration of A changes from $C_{A1} = 0.1 \, mol/m^3$ to $C_{A2} = 0.01 \, mol/m^3$ over a distance of $L = 0.01 \, m$. The total molar concentration of the mixture is constant at $C = 1 \, mol/m^3$. The diffusion coefficient is $D_{AB} = 5 \times 10^{-6} m^2/s$. Calculate the molar flux of A.

**Answer 3:**
For diffusion of A through stagnant B, where the total molar concentration $C$ is constant, the flux is given by:
$N_A = -D_{AB} \frac{C}{C_B} \frac{dC_A}{dx}$

First, find $C_B$. Since $C = C_A + C_B$, $C_B = C - C_A$.
$C_{B1} = C - C_{A1} = 1 - 0.1 = 0.9 \, mol/m^3$
$C_{B2} = C - C_{A2} = 1 - 0.01 = 0.99 \, mol/m^3$

We can approximate $\frac{C}{C_B}$ using an average value or assume $C_B$ is constant if its change is small. Let's use the arithmetic mean for $C_B$:
Average $C_B = \frac{0.9 + 0.99}{2} = 0.945 \, mol/m^3$
$\frac{C}{C_B} \approx \frac{1}{0.945}$

Now, calculate the concentration gradient:
$\frac{dC_A}{dx} \approx \frac{C_{A2} - C_{A1}}{L} = \frac{0.01 - 0.1}{0.01 \, m} = \frac{-0.09}{0.01} = -9 \, mol/m^4$

Now, calculate the flux:
$N_A = -(5 \times 10^{-6} m^2/s) \left(\frac{1}{0.945}\right) (-9 \, mol/m^4)$
$N_A \approx (5 \times 10^{-6} m^2/s) (1.058) (9 \, mol/m^4)$
$N_A \approx 4.76 \times 10^{-5} \, mol/(m^2 \cdot s)$

**Question 4:**
A membrane with a permeability of $P_A = 3 \times 10^{-10} \, kg/(m^2 \cdot s \cdot Pa)$ is used to separate a gas mixture. The membrane area is $A = 0.5 \, m^2$ and its thickness is $L = 0.2 \, mm = 2 \times 10^{-4} \, m$. The partial pressure of species A on the feed side is $p_{A1} = 5000 \, Pa$, and on the permeate side is $p_{A2} = 1000 \, Pa$. Calculate the mass transfer rate of A through the membrane.

**Answer 4:**
The mass transfer rate $N_A$ through a membrane is given by:
$N_A = P_A A \frac{p_{A1} - p_{A2}}{L}$ (Note: This formula uses $P_A$ in units that directly yield mass flow rate. If $P_A$ had units of $m/s$, the area-based flux would be $J_A = P_A \frac{p_{A1} - p_{A2}}{L}$, and $N_A = J_A \cdot A$)

Let's assume the given $P_A$ is actually a permeance *per unit thickness*, so that the flux $J_A = P_A^* \cdot (p_{A1} - p_{A2})$. If $P_A$ is given as $m/s$, then $N_A = P_A \cdot A \cdot \frac{p_{A1} - p_{A2}}{L}$.

Let's re-evaluate the typical units for permeability in membrane transport. Often, it's given as Flux / (Pressure difference), so $P^* = \frac{N_A}{A} / \frac{\Delta p}{L}$.
This means $N_A = P^* \cdot A \cdot \frac{\Delta p}{L}$. The units for $P^*$ would then be $(mol/s \cdot m^2) / (Pa/m) = mol \cdot m / (s \cdot m^2 \cdot Pa)$.
Or for mass flux: $(kg/s \cdot m^2) / (Pa/m) = kg \cdot m / (s \cdot m^2 \cdot Pa)$.

The problem states $P_A = 3 \times 10^{-10} \, kg/(m^2 \cdot s \cdot Pa)$. This unit suggests that $P_A$ is the flux per unit pressure difference. So, $J_A = P_A \cdot (p_{A1} - p_{A2})$. This implies $L$ is not in the denominator of the given $P_A$ unit.

Let's assume the problem intends to use a form analogous to electrical conductance, where $G = \frac{1}{R}$ and $I = G \cdot \Delta V$.
In mass transfer, $N_A \propto \Delta C$ and $N_A \propto A$.
The "conductance" for mass transfer could be $G_m = \frac{D_{AB} A}{L}$.
$N_A = G_m \cdot \Delta C_A$.

For membranes, often "permeance" $P^*$ has units of $m/s$.
$J_A = P^* \frac{\Delta p}{L}$.

Let's assume the provided unit $kg/(m^2 \cdot s \cdot Pa)$ implies $P_A$ is the flux through a unit area under unit pressure difference.
Then, the flux $J_A = P_A \cdot (p_{A1} - p_{A2})$. This interpretation doesn't use $L$ or $A$ in the definition of $P_A$ itself.

Let's consider another common definition: Permeability ($P$) has units of Volume $\cdot$ Length / (Area $\cdot$ Time $\cdot$ Pressure Difference). E.g., Barrer ($1$ Barrer $= 10^{-10} cm^3(STP) \cdot cm / (cm^2 \cdot s \cdot cmHg)$).
If $P_A$ is the permeability in $kg \cdot m / (m^2 \cdot s \cdot Pa)$, then Flux $J_A = P_A \frac{\Delta p}{L}$.

Let's use the latter interpretation as it is common in membrane science and fits the units better if $P_A$ is interpreted as the permeability *coefficient*.
$J_A = P_A \frac{p_{A1} - p_{A2}}{L}$
$J_A = (3 \times 10^{-10} \, kg/(m^2 \cdot s \cdot Pa)) \frac{5000 \, Pa - 1000 \, Pa}{2 \times 10^{-4} \, m}$
$J_A = (3 \times 10^{-10} \, kg/(m^2 \cdot s \cdot Pa)) \frac{4000 \, Pa}{2 \times 10^{-4} \, m}$
$J_A = (3 \times 10^{-10} \, kg/(m^2 \cdot s \cdot Pa)) \times (2 \times 10^7 \, Pa/m)$
$J_A = 6 \times 10^{-3} \, kg/(m^2 \cdot s)$

Now, the total mass transfer rate $N_A$:
$N_A = J_A \cdot A$
$N_A = (6 \times 10^{-3} \, kg/(m^2 \cdot s)) \cdot (0.5 \, m^2)$
$N_A = 3 \times 10^{-3} \, kg/s$

**Corrected Answer 4 (based on typical membrane permeance definition):**
If $P^*$ represents permeance with units of $m/s$, then $J_A = P^* \frac{\Delta p}{L}$.
However, the units given ($kg/(m^2 \cdot s \cdot Pa)$) usually represent the *flux per unit pressure difference*. Let's denote this as $P_A'$ (permeance coefficient).
Flux $J_A = P_A' \cdot (p_{A1} - p_{A2})$. This does not involve $L$ in the definition of $P_A'$.

If the question meant that $P_A$ in $kg/(m^2 \cdot s \cdot Pa)$ is the flux *per unit pressure difference* (i.e., $J_A / \Delta p$), then:
$J_A = P_A \cdot (p_{A1} - p_{A2})$
$J_A = (3 \times 10^{-10} \, kg/(m^2 \cdot s \cdot Pa)) \cdot (5000 \, Pa - 1000 \, Pa)$
$J_A = (3 \times 10^{-10} \, kg/(m^2 \cdot s \cdot Pa)) \cdot (4000 \, Pa)$
$J_A = 1.2 \times 10^{-6} \, kg/(m^2 \cdot s)$

Total mass transfer rate $N_A = J_A \cdot A$
$N_A = (1.2 \times 10^{-6} \, kg/(m^2 \cdot s)) \cdot (0.5 \, m^2)$
$N_A = 0.6 \times 10^{-6} \, kg/s = 6 \times 10^{-7} \, kg/s$

**Let's assume the unit is for permeance $P^*$ and the equation is $J_A = P^* \cdot \frac{\Delta p}{L}$ where $P^*$ has units of $m/s$.**
The given units are $kg/(m^2 \cdot s \cdot Pa)$. This is flux/pressure difference.
Let's assume this $P_A$ is indeed the flux per unit pressure difference, so $J_A = P_A \cdot (p_{A1} - p_{A2})$. This is often called a conductance or permeance coefficient.
Then $N_A = J_A \cdot A = P_A \cdot A \cdot (p_{A1} - p_{A2})$.

$N_A = (3 \times 10^{-10} \, kg/(m^2 \cdot s \cdot Pa)) \cdot (0.5 \, m^2) \cdot (5000 \, Pa - 1000 \, Pa)$
$N_A = (1.5 \times 10^{-10} \, kg/(m \cdot s \cdot Pa)) \cdot (4000 \, Pa)$
$N_A = 6 \times 10^{-7} \, kg/s$

*(Self-correction: The most standard way to handle permeability $P$ in $kg/(m \cdot s \cdot Pa)$ is that Flux $J = P \frac{\Delta p}{L}$. If units are $kg/(m^2 \cdot s \cdot Pa)$, it's often flux per unit area per unit pressure difference, meaning $J/ \Delta p = P_{unit\_area}$, so $J = P_{unit\_area} \Delta p$. The thickness $L$ might be incorporated into the definition of $P$. The problem statement's unit for $P_A$ suggests the latter interpretation where $L$ is not explicitly needed if $P_A$ is defined as flux/pressure diff)*.
Let's stick with the interpretation: Flux $J_A = P_A \cdot (p_{A1} - p_{A2})$.

**Final Answer for Question 4 (using $J_A = P_A \cdot \Delta p$):**
$N_A = P_A \cdot A \cdot (p_{A1} - p_{A2})$
$N_A = (3 \times 10^{-10} \, kg/(m^2 \cdot s \cdot Pa)) \cdot (0.5 \, m^2) \cdot (4000 \, Pa)$
$N_A = 6 \times 10^{-7} \, kg/s$

---

## Important Points to Remember

*   **Mass transfer is driven by concentration gradients.**
*   **Diffusion coefficient ($D_{AB}$) quantifies the ease of diffusion.** It is affected by temperature, pressure, and the nature of diffusing species and the medium.
*   **Fick's First Law:** $J_A^* = -D_{AB} \frac{dC_A}{dx}$ relates flux to the concentration gradient.
*   **Fick's Second Law:** $\frac{\partial C_A}{\partial t} = D_{AB} \frac{\partial^2 C_A}{\partial x^2}$ describes how concentration changes with time.
*   **Steady-state diffusion in a stationary medium:** Constant molar flux, $N_A = D_{AB} A \frac{C_{A1} - C_{A2}}{L}$.
*   **Diffusion in a moving medium:** Total flux = diffusive flux + convective flux ($N_A = -D_{AB} \nabla C_A + C_A \vec{v}$).
*   **Diffusion through a membrane:** Governed by permeability ($P_A = D_{Am} \cdot S$), which combines diffusivity within the membrane and solubility. $N_A = P_A A \frac{C_{A1} - C_{A2}}{L}$ or $N_A = P^* A \frac{p_{A1} - p_{A2}}{L}$.
*   Units are critical in mass transfer calculations. Pay close attention to units of diffusion coefficient, concentration, pressure, area, and length.

---

This set of notes provides a foundational understanding of mass transfer, covering diffusion coefficient, Fick's laws, and applications in stationary media, moving media, and through membranes. These concepts are essential building blocks for solving more complex mass transfer problems in various engineering disciplines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
