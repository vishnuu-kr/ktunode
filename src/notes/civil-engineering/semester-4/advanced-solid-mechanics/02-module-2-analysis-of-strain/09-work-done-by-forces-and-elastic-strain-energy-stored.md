---
title: "Work done by forces and elastic strain energy stored"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 2: Analysis of strain"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109fc"
status: "completed"
scrapedAt: "2026-05-20T18:42:37.709Z"
---
# ADVANCED SOLID MECHANICS - Module 2: Analysis of Strain

## Topic: Work Done by Forces and Elastic Strain Energy Stored

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the concepts of work done by forces in a deformable body.
*   Define and calculate elastic strain energy stored in a body due to applied forces.
*   Relate work done by external forces to the change in internal strain energy.
*   Understand the principle of virtual work and its application in strain analysis.
*   Apply these concepts to solve problems involving elastic deformation and energy principles.

---

### 1. Work Done by Forces in a Deformable Body

When external forces act on a body and cause it to deform, work is done by these forces. In solid mechanics, we are primarily concerned with the work done by conservative forces (like elastic forces) and external applied forces.

#### Key Concepts and Definitions:

*   **Work (W):** The energy transferred to or from an object via the application of force along a displacement. Mathematically, for a force $\mathbf{F}$ and displacement $d\mathbf{x}$, the infinitesimal work done is $dW = \mathbf{F} \cdot d\mathbf{x}$.
*   **External Forces:** Forces applied to the surface or body of the material (e.g., applied loads, body forces).
*   **Internal Forces:** Forces that arise within the material due to the applied external forces. These are related to stresses.
*   **Deformation:** The change in the geometry of the body due to applied forces. This includes displacements and strains.
*   **Conservative Force:** A force for which the work done in moving an object between two points is independent of the path taken. The elastic forces within a deformed body are conservative.

#### Types of Work Done:

1.  **Work Done by Surface Forces (Tractions):**
    *   Consider a traction $\mathbf{T}$ acting on a surface element $dA$. If this surface element moves by a displacement $d\mathbf{u}$, the work done by this traction is $dW = \mathbf{T} \cdot d\mathbf{u} \, dA$.
    *   For a finite displacement $\mathbf{u}$, the total work done by the traction over the entire surface $S$ is $W_s = \int_S \mathbf{T} \cdot \mathbf{u} \, dA$.

2.  **Work Done by Body Forces:**
    *   Consider a body force per unit volume $\mathbf{b}$ acting on a volume element $dV$. If this volume element undergoes a displacement $d\mathbf{u}$, the work done by this body force is $dW = (\mathbf{b} \, dV) \cdot d\mathbf{u}$.
    *   For a finite displacement $\mathbf{u}$, the total work done by the body forces over the entire volume $V$ is $W_b = \int_V \mathbf{b} \cdot \mathbf{u} \, dV$.

#### Total Work Done by External Forces:

The total work done by external forces ($W_{ext}$) on a deformable body is the sum of the work done by surface forces and body forces:

$$W_{ext} = W_s + W_b = \int_S \mathbf{T} \cdot \mathbf{u} \, dA + \int_V \mathbf{b} \cdot \mathbf{u} \, dV$$

**Important Note:** If the external forces are applied gradually from zero to their final values, and the material behaves elastically, the work done by these forces is equal to the increase in the strain energy stored in the body.

---

### 2. Elastic Strain Energy Stored

When a material is deformed within its elastic limit, the work done by external forces is stored as internal energy within the material. This stored energy is called elastic strain energy.

#### Key Concepts and Definitions:

*   **Strain Energy (U):** The energy stored within a deformable body due to deformation.
*   **Elastic Strain Energy:** The portion of the strain energy that is recoverable upon unloading.
*   **Strain Energy Density (u):** The strain energy stored per unit volume of the material.

#### Strain Energy Stored in a Deformable Body:

Consider a small element of material undergoing deformation. The work done by the internal stresses acting on this element as it deforms is stored as strain energy.

For a one-dimensional case (uniaxial stress $\sigma$ and strain $\epsilon$):
*   The force on a cross-sectional area $A$ is $F = \sigma A$.
*   The displacement of this area is $u = \epsilon L$, where $L$ is the original length.
*   For gradual loading, the work done is the area under the force-displacement curve. If the material is linear elastic ($\sigma = E\epsilon$), then $F = (E\epsilon)A$.
*   The work done is $dW = F \, du = (\sigma A) \, (L \, d\epsilon)$.
*   The strain energy density is $u = \frac{1}{2} \sigma \epsilon$.
*   The total strain energy for the element of volume $dV = A L$ is $dU = u \, dV = \frac{1}{2} \sigma \epsilon \, dV$.

In terms of stress: $u = \frac{1}{2} \frac{\sigma^2}{E}$
In terms of strain: $u = \frac{1}{2} E \epsilon^2$

#### Strain Energy in Three Dimensions:

In a multi-axial stress state, the strain energy density is given by:

$$u = \frac{1}{2} (\sigma_{xx}\epsilon_{xx} + \sigma_{yy}\epsilon_{yy} + \sigma_{zz}\epsilon_{zz} + \tau_{xy}\gamma_{xy} + \tau_{yz}\gamma_{yz} + \tau_{zx}\gamma_{zx})$$

Using Hooke's Law for an isotropic material:
*   $\epsilon_{xx} = \frac{1}{E}[\sigma_{xx} - \nu(\sigma_{yy} + \sigma_{zz})]$
*   $\gamma_{xy} = \frac{1}{G}\tau_{xy}$

Substituting these into the expression for $u$ and simplifying, we get:

$$u = \frac{1}{2E} [\sigma_1^2 + \sigma_2^2 + \sigma_3^2 - 2\nu(\sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1)]$$
where $\sigma_1, \sigma_2, \sigma_3$ are the principal stresses.

Alternatively, in terms of strains:

$$u = \frac{E}{2(1+\nu)(1-2\nu)} [(\epsilon_1 + \epsilon_2 + \epsilon_3)^2 + \frac{1-2\nu}{1+\nu}(\epsilon_1^2 + \epsilon_2^2 + \epsilon_3^2 - (\epsilon_1\epsilon_2 + \epsilon_2\epsilon_3 + \epsilon_3\epsilon_1))]$$
where $\epsilon_1, \epsilon_2, \epsilon_3$ are the principal strains.

#### Total Strain Energy (U):

The total elastic strain energy stored in the body is the integral of the strain energy density over the entire volume:

$$U = \int_V u \, dV$$

---

### 3. Relationship Between Work Done and Strain Energy

For a linearly elastic material, the work done by external forces in deforming the body is stored as strain energy, provided the forces are applied gradually.

**Principle of Conservation of Energy:**

Work Done by External Forces = Increase in Strain Energy

For gradual loading, if the external forces are $P_1, P_2, \dots$ and the corresponding displacements are $u_1, u_2, \dots$:

$$W_{ext} = \sum_i \int_0^{u_i} P_i' \, du_i'$$

If the loading is linear and gradual, the work done is:

$$W_{ext} = \sum_i \frac{1}{2} P_i u_i$$

And this is equal to the total strain energy stored in the body:

$$U = W_{ext}$$

**Example:** A bar of length $L$, cross-sectional area $A$, and Young's modulus $E$ is subjected to an axial tensile force $P$.

*   The stress is $\sigma = P/A$.
*   The strain is $\epsilon = \sigma/E = P/(AE)$.
*   The elongation is $u = \epsilon L = PL/(AE)$.
*   The work done by the force $P$ (applied gradually) is $W = \frac{1}{2} P u = \frac{1}{2} P \left(\frac{PL}{AE}\right) = \frac{P^2 L}{2AE}$.

The strain energy stored in the bar is:
$U = \int_V \frac{1}{2} \sigma \epsilon \, dV = \int_0^L \frac{1}{2} \left(\frac{P}{A}\right) \left(\frac{P}{AE}\right) A \, dx = \int_0^L \frac{P^2}{2AE} \, dx = \frac{P^2 L}{2AE}$.

Here, $W_{ext} = U$, confirming the principle.

---

### 4. Principle of Virtual Work

The principle of virtual work is a powerful tool in solid mechanics for analyzing deformations and stresses. It states that the total virtual work done by all forces (both real and virtual) acting on a body in equilibrium must be zero for any kinematically admissible virtual displacement field.

#### Key Concepts and Definitions:

*   **Virtual Displacement ($\delta\mathbf{u}$):** An imaginary, infinitesimal displacement that is consistent with the boundary conditions of the body, but not necessarily caused by the actual applied loads. It is a hypothetical displacement.
*   **Virtual Force:** A hypothetical force that is applied to the body corresponding to the virtual displacement.
*   **Virtual Work:** The work done by real forces during a virtual displacement, or the work done by virtual forces during a real displacement.

#### Forms of the Principle of Virtual Work:

1.  **Principle of Virtual Work for External Forces (for equilibrium):**
    The total external virtual work done by the real applied forces and the internal virtual work done by the internal stresses during any kinematically admissible virtual displacement is zero.
    Mathematically, for a body in equilibrium under real forces and subjected to a virtual displacement $\delta\mathbf{u}$:

    $$ \int_S \mathbf{T} \cdot \delta\mathbf{u} \, dA + \int_V \mathbf{b} \cdot \delta\mathbf{u} \, dV = \int_V \boldsymbol{\sigma} : \boldsymbol{\epsilon}(\delta\mathbf{u}) \, dV $$

    where:
    *   $\mathbf{T}$ is the real surface traction.
    *   $\mathbf{b}$ is the real body force per unit volume.
    *   $\delta\mathbf{u}$ is the virtual displacement.
    *   $\boldsymbol{\sigma}$ is the real stress tensor.
    *   $\boldsymbol{\epsilon}(\delta\mathbf{u})$ is the strain tensor corresponding to the virtual displacement $\delta\mathbf{u}$.
    *   The term $\boldsymbol{\sigma} : \boldsymbol{\epsilon}(\delta\mathbf{u})$ represents the internal virtual work per unit volume.

2.  **Principle of Virtual Work for Internal Forces (or Strains):**
    For a body in equilibrium, the total work done by the external forces during a virtual displacement field is equal to the total internal virtual work done by the stresses corresponding to that displacement field.

    $$ W_{ext}(\delta\mathbf{u}) = \int_V \boldsymbol{\sigma} : \boldsymbol{\epsilon}(\delta\mathbf{u}) \, dV $$

3.  **Principle of Virtual Strains (using reciprocal theorem):**
    Consider two independent systems of forces and displacements (system 1 and system 2). The work done by the forces of system 1 during the displacements of system 2 is equal to the work done by the forces of system 2 during the displacements of system 1.

    $$ \int_S \mathbf{T}^{(1)} \cdot \mathbf{u}^{(2)} \, dA + \int_V \mathbf{b}^{(1)} \cdot \mathbf{u}^{(2)} \, dV = \int_S \mathbf{T}^{(2)} \cdot \mathbf{u}^{(1)} \, dA + \int_V \mathbf{b}^{(2)} \cdot \mathbf{u}^{(1)} \, dV $$

    This is the Maxwell-Betti reciprocal theorem.

#### Application of Virtual Work in Strain Analysis:

*   **Calculating Displacements:** By judiciously choosing a virtual displacement field and the corresponding virtual forces (often unit loads), one can calculate specific displacements at desired points in a structure. This is the basis of methods like the unit load method.
*   **Energy Methods:** Virtual work is fundamentally linked to energy principles. For example, the calculation of strain energy often utilizes concepts derived from virtual work.

**Example (Unit Load Method):** To find the vertical deflection $\delta_B$ at point B of a beam under a load $P$, we can apply a virtual unit load at B in the vertical direction. Then, by the principle of virtual work:

$$1 \cdot \delta_B = \int_0^L \frac{M_{real}(x) M_{virtual}(x)}{EI} \, dx$$

where $M_{real}(x)$ is the bending moment due to the real load $P$, and $M_{virtual}(x)$ is the bending moment due to the virtual unit load.

---

### 5. Practice Questions and Exercises

**Question 1:**
A steel rod of length 1 m and cross-sectional area $100 \text{ mm}^2$ is subjected to an axial tensile load of 50 kN. Calculate the work done by the load and the elastic strain energy stored in the rod. Assume Young's modulus for steel is $E = 200 \text{ GPa}$.

**Answer 1:**
*   $P = 50 \text{ kN} = 50 \times 10^3 \text{ N}$
*   $L = 1 \text{ m} = 1000 \text{ mm}$
*   $A = 100 \text{ mm}^2$
*   $E = 200 \text{ GPa} = 200 \times 10^3 \text{ N/mm}^2$

*   Stress: $\sigma = \frac{P}{A} = \frac{50 \times 10^3 \text{ N}}{100 \text{ mm}^2} = 500 \text{ N/mm}^2 = 500 \text{ MPa}$
*   Strain: $\epsilon = \frac{\sigma}{E} = \frac{500 \text{ MPa}}{200 \times 10^3 \text{ MPa}} = 0.0025$
*   Elongation: $\delta = \epsilon L = 0.0025 \times 1000 \text{ mm} = 2.5 \text{ mm}$

*   **Work Done ($W$):**
    $W = \frac{1}{2} P \delta = \frac{1}{2} (50 \times 10^3 \text{ N}) (2.5 \times 10^{-3} \text{ m}) = 62.5 \text{ Nm} = 62.5 \text{ J}$

*   **Elastic Strain Energy ($U$):**
    $U = W = 62.5 \text{ J}$
    Alternatively, $U = \frac{1}{2} \sigma \epsilon \times \text{Volume} = \frac{1}{2} (500 \text{ MPa}) (0.0025) \times (100 \text{ mm}^2 \times 1000 \text{ mm})$
    $U = \frac{1}{2} (500 \text{ N/mm}^2) (0.0025) \times (100 \times 1000 \text{ mm}^3) = 62500 \text{ Nmm} = 62.5 \text{ J}$

**Question 2:**
A simply supported beam of length $L$ and flexural rigidity $EI$ is subjected to a uniformly distributed load $w$ per unit length. Derive an expression for the maximum elastic strain energy stored in the beam due to bending.

**Answer 2:**
*   For a simply supported beam with UDL $w$, the bending moment is $M(x) = \frac{wL}{2}x - \frac{wx^2}{2}$.
*   The maximum bending moment occurs at the mid-span ($x = L/2$): $M_{max} = \frac{wL}{2}\left(\frac{L}{2}\right) - \frac{w}{2}\left(\frac{L}{2}\right)^2 = \frac{wL^2}{4} - \frac{wL^2}{8} = \frac{wL^2}{8}$.

*   The strain energy density due to bending is $u = \frac{M^2}{2EI}$.
*   The total strain energy $U$ is the integral of the strain energy density over the length of the beam:
    $$U = \int_0^L u \, dx = \int_0^L \frac{M(x)^2}{2EI} \, dx$$
    $$U = \frac{1}{2EI} \int_0^L \left(\frac{wL}{2}x - \frac{wx^2}{2}\right)^2 \, dx$$
    $$U = \frac{1}{2EI} \int_0^L \frac{w^2}{4} \left(Lx - x^2\right)^2 \, dx$$
    $$U = \frac{w^2}{8EI} \int_0^L (L^2x^2 - 2Lx^3 + x^4) \, dx$$
    $$U = \frac{w^2}{8EI} \left[\frac{L^2x^3}{3} - \frac{2Lx^4}{4} + \frac{x^5}{5}\right]_0^L$$
    $$U = \frac{w^2}{8EI} \left[\frac{L^5}{3} - \frac{L^5}{2} + \frac{L^5}{5}\right]$$
    $$U = \frac{w^2 L^5}{8EI} \left[\frac{10 - 15 + 6}{30}\right]$$
    $$U = \frac{w^2 L^5}{8EI} \left[\frac{1}{30}\right]$$
    $$U = \frac{w^2 L^5}{240EI}$$

**Question 3 (Conceptual):**
Explain why the work done by external forces equals the stored elastic strain energy for a gradually applied load on an elastic material.

**Answer 3:**
For a gradually applied load on a material that behaves elastically, the external forces increase linearly with deformation. The work done by these forces is represented by the area under the force-displacement curve. Simultaneously, as the external forces cause deformation, internal stresses develop within the material. These internal stresses store energy. For an elastic material, the relationship between stress and strain is linear. The work done by the internal stresses as they develop during deformation is exactly equal to the external work done. This internal work is stored as elastic strain energy, which is recoverable upon unloading. Thus, by the principle of conservation of energy, the work done by the external forces is converted into elastic strain energy stored within the material.

---

### 6. Important Points to Remember:

*   **Work done by forces** is energy transferred due to displacement.
*   **Elastic strain energy** is the energy stored in a material due to elastic deformation.
*   For **gradual loading** of an **elastic material**, the work done by external forces is equal to the elastic strain energy stored in the body.
*   Strain energy can be expressed in terms of stress or strain.
*   The **principle of virtual work** provides a fundamental relationship between forces, displacements, stresses, and strains, and is a cornerstone for advanced analysis.
*   When calculating work done by forces that change magnitude during deformation, integration is required. For linearly elastic materials with gradually applied forces, the work done is $\frac{1}{2} \times \text{Final Force} \times \text{Displacement}$.
*   The concept of **strain energy density** simplifies the calculation of total strain energy for complex stress states.
*   Be mindful of units when performing calculations involving stress, strain, force, displacement, and energy.

---
