---
title: "Definition of flexibility influence coefficients - Concepts of physical approach."
subject: "STRUCTURAL ANALYSIS - II"
module: "Module 3: Matrix analysis of structures: Flexibility method:"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109a0"
status: "completed"
scrapedAt: "2026-05-20T18:47:11.775Z"
---
# STRUCTURAL ANALYSIS - II: Module 3 - Matrix Analysis of Structures: Flexibility Method

## Topic: Definition of Flexibility Influence Coefficients & Concepts of Physical Approach

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the fundamental concept of the flexibility method in structural analysis.
*   Define flexibility influence coefficients and their physical meaning.
*   Explain the physical approach to determining flexibility influence coefficients.
*   Apply the concept of unit displacements to visualize and calculate flexibility influence coefficients.
*   Recognize the role of unit forces (loads) in the flexibility method.

---

### 1. Introduction to the Flexibility Method

The flexibility method, also known as the force method, is a classical approach to analyzing indeterminate structures. It is based on the principle of compatibility of deformations.

*   **Core Principle:** The method involves identifying a set of **redundants** (forces or moments) in the structure and introducing **releases** (hinges, cuts) to create a determinate **primary structure**.
*   **Process:**
    1.  Remove redundant forces to make the structure determinate.
    2.  Apply the original external loads to the determinate primary structure.
    3.  Apply the unknown redundant forces (as unit forces) to the determinate primary structure.
    4.  Use the principle of compatibility to ensure that the deformations at the locations of the releases in the primary structure, when combined due to original loads and redundant forces, match the actual deformations of the original indeterminate structure.
    5.  This compatibility condition leads to a system of linear equations.

---

### 2. Concepts of the Physical Approach

The "physical approach" in the context of the flexibility method refers to understanding and calculating the flexibility influence coefficients by physically imagining and calculating the displacements caused by unit forces applied to a determinate structure.

#### 2.1. What are Flexibility Influence Coefficients?

Flexibility influence coefficients quantify the **displacement** at one point in a structure due to a **unit force (or moment)** applied at another point in the structure. They represent the "flexibility" of the structure – how much it deforms under unit loads.

*   **Definition:** A flexibility influence coefficient, denoted by $f_{ij}$, represents the displacement at location *i* due to a unit force applied at location *j*.

*   **Notation:**
    *   $f_{ij}$: Displacement at point *i* due to a unit force applied at point *j*.
    *   If the force is a moment, it is often denoted by $\theta_{ij}$ (rotation at *i* due to a unit moment at *j*) or $f_{ij}$ depending on the context and the type of displacement being considered.

*   **Reciprocity Theorem:** For linear elastic structures, flexibility influence coefficients are symmetric, meaning $f_{ij} = f_{ji}$ (displacement at *i* due to unit force at *j* equals displacement at *j* due to unit force at *i*). This is a crucial property.

#### 2.2. Physical Interpretation: Unit Displacements

The physical approach is best understood by considering the application of **unit forces** to the primary determinate structure.

*   **Scenario:** Imagine a determinate primary structure derived from the indeterminate structure by removing redundancies.
*   **Applying Unit Forces:**
    1.  **Original Loads:** First, consider the effect of the original applied loads on the determinate structure. This results in certain displacements at various points.
    2.  **Redundant Forces as Unit Loads:** To determine the flexibility influence coefficients, we treat each redundant force as a **unit force** applied individually to the determinate primary structure.
        *   If a redundant is a force (e.g., axial force, shear force), we apply a unit axial force or unit shear force at the location and orientation of the redundant.
        *   If a redundant is a moment, we apply a unit moment.

*   **Calculating Displacements:** For each unit force application, we calculate the resulting displacement (linear displacement or rotation) at the locations where the redundant forces were removed. These calculated displacements are the flexibility influence coefficients.

#### 2.3. The Primary Structure

The choice of the primary structure is crucial. It must be determinate and capable of carrying the applied loads. The redundancies are those forces or moments that are "released" to make the structure determinate.

*   **Making a Structure Determinate:** This typically involves introducing releases like:
    *   **Hinges:** To release internal moments.
    *   **Cuts:** To release internal forces (axial, shear, moment).
    *   **Removals:** Removing external supports that provide redundant reactions.

*   **Example: Indeterminate Beam**
    *   Consider a propped cantilever beam (fixed at one end, simply supported at the other). This is statically indeterminate to the first degree.
    *   **Redundant:** The vertical reaction at the simple support is a redundant.
    *   **Primary Structure:** Remove the simple support. This makes the beam a cantilever fixed at one end and free at the other.
    *   **Releases:** The release occurs at the location of the removed simple support, where a vertical displacement must be zero in the original structure.

#### 2.4. Calculating $f_{ij}$

To find $f_{ij}$:

1.  **Consider the Determinate Primary Structure:**
2.  **Apply a Unit Force (or Moment) at Location *j*:** Apply a force of magnitude 1 at location *j* in the direction corresponding to the redundant force at *j*.
3.  **Calculate Displacement at Location *i*:** Determine the displacement (linear or angular) at location *i* due to this unit force at *j*. This displacement is $f_{ij}$.

---

### 3. Examples of Calculating Flexibility Influence Coefficients

Let's consider a simple determinate beam to illustrate the concept.

**Example 1: Simply Supported Beam with a Cantilever Extension**

Consider a simply supported beam ABC, with support A fixed, support B as a roller, and a cantilever extension BC. Let BC be a rigid rod connected by a hinge at B.

*   **Primary Structure:** Remove the support at B. The structure becomes a cantilever fixed at A, with a free end at B.
*   **Redundant:** The vertical reaction force at B ($R_B$) is the redundant.
*   **Location of Releases:** Location B.

Let's say we want to find:
*   $f_{BB}$: Displacement at B due to a unit vertical force applied at B.
*   $f_{AB}$: Displacement at A due to a unit vertical force applied at B.

**Scenario:** Imagine the primary structure is a cantilever beam of length $L_1$ (from A to B) extending to B. Let the cantilever extension BC have a length $L_2$. For simplicity, let's focus on the portion AB of length $L_1$.

**To find $f_{BB}$ (Displacement at B due to unit force at B):**

1.  Apply a unit downward vertical force ($P=1$) at end B of the cantilever beam AB.
2.  The deflection at the free end (B) of a cantilever of length $L_1$ due to an end load $P$ is given by $\delta = \frac{PL_1^3}{3EI}$.
3.  With $P=1$, $f_{BB} = \frac{L_1^3}{3EI}$. This is the flexibility influence coefficient at B due to a unit force at B.

**To find $f_{AB}$ (Displacement at A due to unit force at B):**

1.  Apply a unit downward vertical force ($P=1$) at end B of the cantilever beam AB.
2.  The displacement at the fixed end (A) of a cantilever due to an end load $P$ is zero. This is because the fixed support prevents any translation or rotation.
3.  Therefore, $f_{AB} = 0$.

**Reciprocity Check:** According to the reciprocity theorem, $f_{BA}$ should also be 0. This means a unit force applied at A would cause no displacement at B. This is true for a cantilever beam if we consider forces applied only along the axis of the beam. However, if we consider bending, then applying a force at A will cause rotation at A and deflection at B.

Let's refine the example to be more illustrative of the flexibility method's application.

**Example 2: Propped Cantilever Beam**

Consider a propped cantilever beam fixed at A and simply supported at B. Length $L$. Applied load $W$ at the center.

*   **Indeterminate Degree:** 1 (vertical reaction at B, $R_B$).
*   **Redundant:** $R_B$.
*   **Primary Structure:** Remove the support at B. The structure is a cantilever fixed at A and free at B.
*   **Release Location:** Point B.

**We need to find the flexibility influence coefficients at location B.**

1.  **$f_{BB}$:** Displacement at B due to a unit downward vertical force applied at B.
    *   Apply $P=1$ at B to the cantilever beam.
    *   The deflection at the free end of a cantilever of length $L$ due to an end load $P$ is $\delta_B = \frac{PL^3}{3EI}$.
    *   Therefore, $f_{BB} = \frac{1 \cdot L^3}{3EI} = \frac{L^3}{3EI}$.

2.  **$f_{BA}$:** Displacement at A due to a unit downward vertical force applied at B.
    *   Apply $P=1$ at B to the cantilever beam.
    *   The displacement at the fixed end A is zero.
    *   Therefore, $f_{BA} = 0$.

**Important Note on Locations:** The "locations" *i* and *j* refer to the points where releases were made to define the redundancies. In the propped cantilever example, there's only one release location: point B.

**Now, let's consider the displacement due to the original load W at the center.**

*   Let $\Delta_B^P$ be the displacement at B due to the original load $W$ on the primary cantilever structure.
*   For a cantilever with a load $W$ at the center (distance $L/2$ from the support), the deflection at the free end B is $\delta_B = \frac{W(L/2)^3}{2EI} + \frac{W(L/2)}{EI} (\frac{L}{2})^2 / 2 = \frac{WL^3}{48EI}$.
*   So, $\Delta_B^P = \frac{WL^3}{48EI}$.

**Compatibility Condition:** The total vertical displacement at B in the original structure must be zero (because B is a simple support).
*   Displacement at B = (Displacement at B due to original load) + (Displacement at B due to redundant $R_B$).
*   $0 = \Delta_B^P + f_{BB} \cdot R_B$
*   $0 = \frac{WL^3}{48EI} + \frac{L^3}{3EI} R_B$

Solving for $R_B$:
*   $R_B = -\frac{WL^3}{48EI} \cdot \frac{3EI}{L^3} = -\frac{3W}{48} = -\frac{W}{16}$.
    *   The negative sign indicates that the reaction at B acts downwards, which is opposite to our assumed upward direction for the unit force. So the actual support reaction at B is $W/16$ upwards.

**The Flexibility Matrix:**

If we had multiple redundancies, say $R_1, R_2, ..., R_n$, at locations $1, 2, ..., n$, then the system of equations would be:

$\begin{bmatrix} \delta_1^P \\ \delta_2^P \\ \vdots \\ \delta_n^P \end{bmatrix} + \begin{bmatrix} f_{11} & f_{12} & \cdots & f_{1n} \\ f_{21} & f_{22} & \cdots & f_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ f_{n1} & f_{n2} & \cdots & f_{nn} \end{bmatrix} \begin{bmatrix} R_1 \\ R_2 \\ \vdots \\ R_n \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{bmatrix}$

Where:
*   $\delta_i^P$ is the displacement at release location *i* due to external loads.
*   $f_{ij}$ is the displacement at release location *i* due to a unit force at release location *j*.
*   $R_i$ is the unknown redundant force at release location *i*.
*   The right-hand side is a vector of zero displacements at the release locations in the original structure.

This can be written in matrix form as:
$\{\Delta^P\} + [f] \{R\} = \{0\}$
or
$[f] \{R\} = -\{\Delta^P\}$
or
$\{R\} = -[f]^{-1} \{\Delta^P\}$

---

### 4. Key Concepts and Definitions to Remember

*   **Flexibility Method (Force Method):** A method for analyzing indeterminate structures based on compatibility of deformations.
*   **Redundants:** The extra forces or moments that make a structure indeterminate.
*   **Primary Structure:** A determinate structure obtained by removing redundancies (introducing releases).
*   **Flexibility Influence Coefficient ($f_{ij}$):** The displacement at location *i* due to a unit force applied at location *j*.
*   **Physical Approach:** Understanding and calculating flexibility coefficients by applying unit forces to the determinate primary structure and observing the resulting displacements.
*   **Unit Forces:** Forces of magnitude 1, applied in the direction of the redundant forces.
*   **Compatibility:** Ensuring that the deformations at the release locations in the primary structure match the deformations at those locations in the original indeterminate structure.
*   **Reciprocity Theorem ($f_{ij} = f_{ji}$):** For linear elastic structures, the displacement at *i* due to a unit force at *j* is equal to the displacement at *j* due to a unit force at *i*. This is a crucial property for constructing the flexibility matrix.
*   **Flexibility Matrix ($[f]$):** A square matrix where each element $f_{ij}$ is a flexibility influence coefficient. It relates the displacements at release locations to the redundant forces.

---

### 5. Practice Questions and Exercises

**Question 1:**

Define flexibility influence coefficient. What is its physical meaning?

**Answer:**
A flexibility influence coefficient, $f_{ij}$, is the displacement at point *i* caused by a unit force applied at point *j* in a determinate structure. Its physical meaning is to quantify how much a specific point in the structure will deform (translate or rotate) when a unit load is applied at another specific point. It represents the structural stiffness's inverse, essentially indicating how "flexible" the structure is between two points.

**Question 2:**

Consider a propped cantilever beam fixed at A and simply supported at B, carrying a uniformly distributed load $w$ per unit length over its entire span $L$. Identify the redundant and the primary structure. Explain how you would determine the flexibility influence coefficient $f_{BB}$ using the physical approach.

**Answer:**
*   **Redundant:** The vertical reaction at the simple support B ($R_B$) is the indeterminate force.
*   **Primary Structure:** Remove the support at B. The primary structure is a cantilever beam fixed at A and free at B.
*   **Determining $f_{BB}$:**
    1.  On the primary cantilever structure (fixed at A, free at B), apply a unit downward vertical force ($P=1$) at the free end B.
    2.  Calculate the vertical displacement at end B due to this unit force.
    3.  The deflection at the free end of a cantilever of length $L$ subjected to an end load $P$ is $\delta = \frac{PL^3}{3EI}$.
    4.  Therefore, $f_{BB} = \frac{1 \cdot L^3}{3EI} = \frac{L^3}{3EI}$. This value represents the flexibility at point B due to a unit force at point B.

**Question 3:**

For the propped cantilever beam in Question 2, if $L=4$ m, $E=200$ GPa, and $I=10 \times 10^{-5}$ m$^4$, and the applied UDL is $w=10$ kN/m.
Calculate the flexibility influence coefficient $f_{BB}$. (You will need this for the full flexibility method calculation, but for this exercise, just calculate $f_{BB}$).

**Answer:**
Given:
*   $L = 4$ m
*   $E = 200$ GPa $= 200 \times 10^9$ N/m$^2$
*   $I = 10 \times 10^{-5}$ m$^4$

The flexibility influence coefficient $f_{BB}$ is given by:
$f_{BB} = \frac{L^3}{3EI}$
$f_{BB} = \frac{(4 \text{ m})^3}{3 \times (200 \times 10^9 \text{ N/m}^2) \times (10 \times 10^{-5} \text{ m}^4)}$
$f_{BB} = \frac{64 \text{ m}^3}{3 \times 2 \times 10^6 \text{ Nm}^2}$
$f_{BB} = \frac{64}{6 \times 10^6} \text{ m/N}$
$f_{BB} \approx 10.67 \times 10^{-6} \text{ m/N}$

---

### 6. Important Points to Remember

*   The flexibility method focuses on compatibility of deformations.
*   Flexibility influence coefficients ($f_{ij}$) represent displacements due to unit forces.
*   The physical approach involves applying unit forces to a determinate primary structure.
*   The choice of redundant and primary structure is critical.
*   The reciprocity theorem ($f_{ij} = f_{ji}$) is a fundamental property for building the flexibility matrix.
*   Each element of the flexibility matrix represents a specific displacement-force relationship between two points in the determinate structure.
*   The flexibility matrix is always symmetric for linear elastic structures.

---
