---
title: "Reciprocal relations"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 2: Analysis of strain"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109fd"
status: "completed"
scrapedAt: "2026-05-20T18:42:38.403Z"
---
# ADVANCED SOLID MECHANICS - Module 2: Analysis of Strain

## Topic: Reciprocal Relations

This module focuses on the concept of reciprocal relations within the analysis of strain. Reciprocal relations are fundamental to understanding how strains and stresses interact in a material, particularly in anisotropic materials where the relationship isn't always symmetrical.

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the physical and mathematical basis of reciprocal relations in strain analysis.**
*   **Apply reciprocal theorems to simplify complex strain analysis problems.**
*   **Identify situations where reciprocal relations are particularly useful.**
*   **Recognize the connection between reciprocal relations and energy principles in solid mechanics.**

---

### 1. Introduction to Reciprocal Relations

#### 1.1 The Concept of Reciprocity

In many physical phenomena, there exists a symmetry or reciprocity in the cause-and-effect relationship. For instance, if applying a force $F$ at point A causes a displacement $\delta$ at point B, then applying the same force $F$ at point B will cause the same displacement $\delta$ at point A, assuming linearity and other ideal conditions.

In solid mechanics, this concept extends to the relationship between applied loads (forces, moments) and the resulting deformations (displacements, rotations), and importantly, between applied strains and the resulting stresses.

#### 1.2 Physical Basis in Strain Analysis

Consider a linearly elastic body. If we apply a set of forces or displacements in one configuration, they cause stresses and strains throughout the body. Reciprocal relations help us understand how these stresses and strains are distributed and related when we consider different ways of applying the loads.

The underlying principle often relates to the conservation of energy or the symmetry of the constitutive relations (stress-strain relationship).

---

### 2. Maxwell-Betti Reciprocal Theorem

This is a cornerstone theorem in reciprocal relations. It deals with the displacements caused by two different sets of loads applied to a linearly elastic body.

#### 2.1 Statement of the Maxwell-Betti Theorem

For a linearly elastic, homogeneous, and isotropic body, if a system of forces $P_1$ causes displacements $u_1$ and a system of forces $P_2$ causes displacements $u_2$, then the work done by $P_1$ acting through the displacements $u_2$ is equal to the work done by $P_2$ acting through the displacements $u_1$.

Mathematically, for two systems of applied forces $(F_1, M_1)$ and $(F_2, M_2)$ acting on a body, causing displacements $(u_1, \theta_1)$ and $(u_2, \theta_2)$ respectively, the following holds:

$$ \sum_{i} F_{1i} \cdot u_{2i} + \sum_{j} M_{1j} \cdot \theta_{2j} = \sum_{i} F_{2i} \cdot u_{1i} + \sum_{j} M_{2j} \cdot \theta_{1j} $$

where:
*   $F_{1i}$ and $F_{2i}$ are the components of the forces in system 1 and system 2.
*   $u_{1i}$ and $u_{2i}$ are the corresponding displacements in system 1 and system 2.
*   $M_{1j}$ and $M_{2j}$ are the components of the moments in system 1 and system 2.
*   $\theta_{1j}$ and $\theta_{2j}$ are the corresponding rotations in system 1 and system 2.

**Important Note:** This theorem is generally stated for forces and displacements. However, its principles can be extended to consider strains and stresses, especially in the context of energy.

#### 2.2 Application to Strains (Cauchy's Reciprocity)

A more direct application to strains comes from Cauchy's reciprocity theorem, which is derived from the symmetry of the stress tensor.

**Cauchy's Reciprocity Theorem:** For a linearly elastic body, the strain component $\epsilon_{ij}$ produced at a point B due to a unit strain $\epsilon_{kl}$ applied at point A is equal to the strain component $\epsilon_{kl}$ produced at point A due to a unit strain $\epsilon_{ij}$ applied at point B.

In tensor notation, if we consider a unidirectional strain applied in a specific direction. Let $\epsilon_{1}$ be a strain applied in direction $\mathbf{n}_1$ and $\epsilon_{2}$ be a strain applied in direction $\mathbf{n}_2$. The theorem implies:

The strain in direction $\mathbf{n}_2$ at point B due to a unit strain in direction $\mathbf{n}_1$ at point A is equal to the strain in direction $\mathbf{n}_1$ at point A due to a unit strain in direction $\mathbf{n}_2$ at point B.

A more rigorous statement using strain tensors: If a strain state with tensor $\mathbf{\epsilon}^{(1)}$ is applied in the first experiment, and a strain state with tensor $\mathbf{\epsilon}^{(2)}$ is applied in the second experiment, then the work done by the stresses corresponding to $\mathbf{\epsilon}^{(1)}$ on the strains $\mathbf{\epsilon}^{(2)}$ is equal to the work done by the stresses corresponding to $\mathbf{\epsilon}^{(2)}$ on the strains $\mathbf{\epsilon}^{(1)}$.

This can be expressed using the stress tensor $\mathbf{\sigma}$ and strain tensor $\mathbf{\epsilon}$:

$$ \int_{V} \mathbf{\sigma}^{(1)} : \mathbf{\epsilon}^{(2)} dV = \int_{V} \mathbf{\sigma}^{(2)} : \mathbf{\epsilon}^{(1)} dV $$

Using the constitutive relation $\mathbf{\sigma} = \mathbf{C} : \mathbf{\epsilon}$ (where $\mathbf{C}$ is the stiffness tensor), this leads to:

$$ \int_{V} (\mathbf{C} : \mathbf{\epsilon}^{(1)}) : \mathbf{\epsilon}^{(2)} dV = \int_{V} (\mathbf{C} : \mathbf{\epsilon}^{(2)}) : \mathbf{\epsilon}^{(1)} dV $$

For this equality to hold for arbitrary strain states $\mathbf{\epsilon}^{(1)}$ and $\mathbf{\epsilon}^{(2)}$, the constitutive tensor $\mathbf{C}$ must be symmetric. This symmetry of the stiffness tensor $\mathbf{C}$ is a direct consequence of thermodynamic principles (Clausius-Duhem inequality) and is related to the existence of a strain energy function.

**Key Takeaway:** The symmetry of the stress-strain relationship (i.e., $C_{ijkl} = C_{jikl} = C_{ijlk} = C_{klji}$) is the fundamental reason behind these reciprocal relations in strain.

#### 2.3 Reciprocal Relations in Terms of Strain Components

Let's consider specific strain components. Imagine applying a unit strain $\epsilon_{xx}$ at point A. This will cause stresses and strains at all other points. Similarly, applying a unit strain $\epsilon_{yy}$ at point A will cause its own set of stresses and strains.

Cauchy's theorem implies:

*   The strain component $\epsilon_{yy}$ at point B caused by a unit $\epsilon_{xx}$ at point A is equal to the strain component $\epsilon_{xx}$ at point A caused by a unit $\epsilon_{yy}$ at point B.

This extends to shear strains as well:

*   The shear strain component $\gamma_{xy}$ (or $\epsilon_{xy}$) at point B caused by a unit shear strain $\gamma_{xx}$ (or $\epsilon_{xx}$) at point A is equal to the shear strain component $\epsilon_{xx}$ at point A caused by a unit $\gamma_{xy}$ at point B.

**Crucially:** For a full tensor $\mathbf{\epsilon}^{(1)}$, the resulting stress tensor is $\mathbf{\sigma}^{(1)} = \mathbf{C} : \mathbf{\epsilon}^{(1)}$. Similarly for $\mathbf{\epsilon}^{(2)}$. The reciprocity relation stems from the symmetry of $\mathbf{C}$: $C_{ijkl} = C_{klij}$.

**Example:**
Consider applying a unit tensile strain $\epsilon_{11}$ along the x-axis at point A. This will induce stresses and strains throughout the body. Now consider applying a unit tensile strain $\epsilon_{22}$ along the y-axis at point B. Cauchy's theorem states that the value of the $\epsilon_{22}$ strain component at point B due to the unit $\epsilon_{11}$ at point A is equal to the value of the $\epsilon_{11}$ strain component at point A due to the unit $\epsilon_{22}$ at point B.

---

### 3. Reciprocal Relations in Anisotropic Materials

The concept of reciprocal relations is particularly important and demonstrative in anisotropic materials because the stress-strain relationship is not always simple.

#### 3.1 Anisotropy and Constitutive Relations

In anisotropic materials, the stiffness tensor $\mathbf{C}$ is generally not isotropic. The stress-strain relationship is given by:

$$ \sigma_{ij} = C_{ijkl} \epsilon_{kl} $$

where $C_{ijkl}$ are the components of the stiffness tensor. For these relations to be physically consistent (derivable from a strain energy function), the stiffness tensor must be symmetric with respect to the exchange of the first two indices and the last two indices independently, and also symmetric with respect to swapping the first pair of indices with the second pair:

*   $C_{ijkl} = C_{jikl}$ (Symmetry of stress tensor)
*   $C_{ijkl} = C_{ijlk}$ (Symmetry of strain tensor)
*   $C_{ijkl} = C_{klij}$ (This is the crucial symmetry for reciprocal relations)

This last symmetry, $C_{ijkl} = C_{klij}$, directly leads to Cauchy's reciprocity.

#### 3.2 Implications of $C_{ijkl} = C_{klij}$

This symmetry implies that if you apply a strain $\epsilon_{ab}$ and it causes a stress $\sigma_{cd}$, then applying the same strain $\epsilon_{cd}$ will cause the same stress $\sigma_{ab}$.

**In simpler terms:** The effect of a strain $\epsilon_{11}$ on the stress $\sigma_{22}$ is the same as the effect of a strain $\epsilon_{22}$ on the stress $\sigma_{11}$. This is a direct consequence of the symmetry of the elastic energy function $W(\epsilon_{ij})$.

$$ \sigma_{ij} = \frac{\partial W}{\partial \epsilon_{ij}} $$

Using the chain rule for differentiation, the symmetry of the second partial derivatives of $W$ with respect to $\epsilon_{ij}$ and $\epsilon_{kl}$ leads to the reciprocity:

$$ \frac{\partial^2 W}{\partial \epsilon_{ij} \partial \epsilon_{kl}} = \frac{\partial^2 W}{\partial \epsilon_{kl} \partial \epsilon_{ij}} $$

Since $C_{ijkl} = \frac{\partial^2 W}{\partial \epsilon_{ij} \partial \epsilon_{kl}}$, this implies $C_{ijkl} = C_{klij}$.

**Example:** Consider a monoclinic crystal where the elastic constants are not all independent. The symmetry $C_{ijkl} = C_{klij}$ still holds, relating different strain components. For instance, it might relate the effect of a normal strain in one direction on a shear stress in another direction to the effect of that shear strain on the normal stress.

---

### 4. Applications and Usefulness of Reciprocal Relations

#### 4.1 Simplifying Analyses

Reciprocal relations can significantly simplify the calculation of strains or displacements under certain loading conditions. Instead of analyzing a complex scenario directly, one can often devise a simpler reciprocal problem to obtain the required information.

*   **Displacement calculation:** If you need to find the displacement at a specific point due to a complex distributed load, you can sometimes replace the distributed load with a concentrated force at the desired point and then calculate the work done by this concentrated force on the original load distribution.
*   **Stress calculation:** Similarly, to find a specific stress component, you might apply a known strain distribution that is easier to analyze and use reciprocity.

#### 4.2 Verification and Consistency Checks

These relations provide a powerful tool for verifying the correctness of analytical or numerical solutions (e.g., Finite Element Analysis) for stress and strain distributions. If a solution violates reciprocal relations, it indicates an error in the model or calculation.

#### 4.3 Understanding Material Behavior

Reciprocity highlights the inherent symmetries in the elastic response of materials, reinforcing the fundamental role of the strain energy function and the symmetry of the constitutive tensor.

#### 4.4 Bridge to Energy Principles

Reciprocal theorems are deeply connected to energy principles in mechanics, particularly the principle of virtual work and the concept of strain energy. They often arise naturally from considerations of energy conservation in elastic systems.

---

### 5. Important Points to Remember

*   **Linear Elasticity:** Reciprocal relations are primarily derived for **linearly elastic** materials.
*   **Symmetry of Constitutive Tensor:** The key to reciprocal relations in strain analysis lies in the **symmetry of the stiffness tensor ($C_{ijkl} = C_{klij}$)**, which itself is a consequence of the existence of a strain energy function.
*   **Cauchy's Reciprocity:** The direct implication for strain is that the strain component $\epsilon_{ab}$ at point B due to a unit strain $\epsilon_{cd}$ at point A is equal to the strain component $\epsilon_{cd}$ at point A due to a unit strain $\epsilon_{ab}$ at point B.
*   **Thermodynamic Basis:** The symmetry of elastic constants ($C_{ijkl} = C_{klij}$) is rooted in thermodynamics, specifically the requirement for a strain energy function.
*   **Applications:** Useful for simplifying complex problems, verifying solutions, and understanding material symmetries.
*   **Anisotropy:** Reciprocity is particularly insightful when studying anisotropic materials due to the non-trivial relationships between strain components.

---

### 6. Practice Questions and Exercises

**Question 1:**
State Cauchy's reciprocity theorem in terms of strain components. What is the fundamental physical property of the material that leads to this theorem?

**Question 2:**
Consider a linearly elastic, homogeneous, and isotropic body. If a unit tensile strain $\epsilon_{xx}$ is applied at point A, and it causes a strain $\epsilon_{yy}$ at point B, what can you say about the strain at point A when a unit tensile strain $\epsilon_{yy}$ is applied at point B?

**Question 3:**
In an anisotropic material, the stiffness tensor components $C_{ijkl}$ must satisfy certain symmetry conditions for the material to be described by a strain energy function. Which symmetry condition is directly responsible for reciprocal relations between strain components?

**Question 4:**
Imagine you need to find the displacement at a specific point P in a structure under a complex load. How could the Maxwell-Betti reciprocal theorem, generalized for distributed loads, potentially help you simplify this calculation? (Briefly explain the concept).

**Question 5:**
True or False: Reciprocal relations are valid for non-linear elastic materials.

---

### Answers to Practice Questions

**Answer 1:**
Cauchy's reciprocity theorem states that the strain component $\epsilon_{ab}$ at point B due to a unit strain $\epsilon_{cd}$ applied at point A is equal to the strain component $\epsilon_{cd}$ at point A due to a unit strain $\epsilon_{ab}$ applied at point B.
The fundamental physical property is the **symmetry of the stiffness tensor**, specifically $C_{ijkl} = C_{klij}$, which arises from the existence of a **strain energy function**.

**Answer 2:**
According to Cauchy's reciprocity theorem, the strain at point A, when a unit tensile strain $\epsilon_{yy}$ is applied at point B, will be equal to the strain $\epsilon_{yy}$ that was observed at point B when a unit tensile strain $\epsilon_{xx}$ was applied at point A. So, the strain at point A will have the value of $\epsilon_{yy}$ (measured at point B in the original case).

**Answer 3:**
The symmetry condition responsible for reciprocal relations between strain components is $C_{ijkl} = C_{klij}$.

**Answer 4:**
The Maxwell-Betti theorem allows you to interchange the roles of cause (loads) and effect (displacements). To find the displacement at point P, you could imagine applying a unit concentrated force (and zero moments) at P in the direction of the desired displacement. Then, the displacement at P due to the original complex load distribution would be equal to the work done by this unit concentrated force acting through the displacements caused by the original loads. Alternatively, you could apply a unit concentrated force at point P and calculate the displacement at a point where the original load was applied, which would be equivalent to the work done by the original load distribution on the displacement caused by the unit force.

**Answer 5:**
False. Reciprocal relations are derived for **linearly elastic** materials. While extensions exist for some non-linear cases, the fundamental theorems are based on linear behavior.

---
