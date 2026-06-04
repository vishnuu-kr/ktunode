---
title: "Basic modes of fracture"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 4: Introduction to Mechanics of Composite Materials"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810a0f"
status: "completed"
scrapedAt: "2026-05-20T18:42:49.616Z"
---
# ADVANCED SOLID MECHANICS - MODULE 4: INTRODUCTION TO MECHANICS OF COMPOSITE MATERIALS

## Topic: Basic Modes of Fracture

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Identify and describe the three basic modes of fracture.**
*   **Explain the stress state associated with each fracture mode.**
*   **Differentiate between brittle and ductile fracture.**
*   **Understand the role of stress concentrations in initiating fracture.**
*   **Recognize the significance of crack growth direction relative to the applied load.**
*   **Relate fracture modes to the behavior of composite materials.**

---

### 1. Introduction to Fracture

Fracture is the separation of a material into two or more pieces under stress. In advanced solid mechanics, particularly when dealing with composites, understanding the fundamental ways a material can break is crucial. This knowledge helps in designing stronger, more reliable structures.

**Key Concept:** Fracture is a failure mechanism. It can be a sudden, catastrophic event (brittle fracture) or a more gradual process (ductile fracture).

---

### 2. The Three Basic Modes of Fracture

Fracture can be broadly classified based on the relative motion of the two fracture surfaces. These three modes are fundamental to fracture mechanics and are universally applied across different material types, including composites.

#### 2.1. Mode I: Opening Mode (Tension)

*   **Description:** In Mode I fracture, the two fracture surfaces move directly apart, perpendicular to the crack plane. This is the most common and often the most critical mode in many engineering applications.
*   **Stress State:** Primarily **tensile stress** acting perpendicular to the crack plane ($\sigma_z$).
*   **Crack Growth Direction:** Perpendicular to the direction of maximum tensile stress.
*   **Visualisation:** Imagine pulling a piece of paper apart from the edges. The crack opens up.

**Diagram:**

```
      ------
      |    |
      |    | <-- Crack surfaces
------o----o------
      |    |
      |    |
      ------
        ^
        |
      Tensile Stress (σ_z)
```

*   **Examples:**
    *   A pressurized vessel experiencing internal pressure, causing cracks to open.
    *   A bolted joint where fasteners induce tension.
    *   A bridge beam under bending load, where the top surface is in compression and the bottom surface is in tension. Cracks will typically initiate and propagate from the bottom surface.

**Important Point:** Mode I is characterized by the opening of the crack.

#### 2.2. Mode II: Sliding Mode (In-Plane Shear)

*   **Description:** In Mode II fracture, the two fracture surfaces slide over each other in their own plane, perpendicular to the direction of crack propagation and in the plane of the crack.
*   **Stress State:** Primarily **shear stress** acting parallel to the crack plane and perpendicular to the crack front ($\tau_{xz}$).
*   **Crack Growth Direction:** Along the plane of the crack, perpendicular to the crack front.
*   **Visualisation:** Imagine a pair of scissors cutting paper. The blades slide against each other.

**Diagram:**

```
      ------
      |    |
      |    | <-- Crack surfaces
------o----o------
      |    |
      |    |
      ------
      <-- Shear Stress (τ_xz)
```

*   **Examples:**
    *   A beam under pure shear.
    *   A lap joint where adhesive or fasteners are subjected to shear forces.
    *   Crack propagation at the edge of a composite laminate under shear loading.

**Important Point:** Mode II is characterized by in-plane sliding.

#### 2.3. Mode III: Tearing Mode (Out-of-Plane Shear)

*   **Description:** In Mode III fracture, the two fracture surfaces slide over each other in their own plane, parallel to the direction of crack propagation and perpendicular to the crack front. This mode involves shear stress acting perpendicular to the crack plane.
*   **Stress State:** Primarily **shear stress** acting parallel to the crack plane and parallel to the crack front ($\tau_{yz}$).
*   **Crack Growth Direction:** Along the plane of the crack, parallel to the crack front.
*   **Visualisation:** Imagine tearing a piece of cloth. The tearing action involves the fabric layers sliding past each other in an out-of-plane manner.

**Diagram:**

```
      ------
      |    |
      |    | <-- Crack surfaces
------o----o------
      |    |
      |    |
      ------
        ^
        |
      Shear Stress (τ_yz)
```

*   **Examples:**
    *   A shaft subjected to torsional loading.
    *   A component experiencing out-of-plane shear forces, such as a helicopter rotor blade experiencing uneven aerodynamic loads.
    *   Damage in composites due to impact, where delamination can involve Mode III opening.

**Important Point:** Mode III is characterized by out-of-plane sliding.

---

### 3. Brittle vs. Ductile Fracture

The nature of fracture can vary significantly depending on the material and the loading conditions.

#### 3.1. Brittle Fracture

*   **Characteristics:**
    *   Little to no plastic deformation before fracture.
    *   Rapid, catastrophic failure.
    *   Fracture surfaces are typically flat and exhibit mirror-like or glassy appearances (smooth).
    *   Often occurs at low temperatures or in materials with low ductility (e.g., ceramics, some cast irons, certain polymers).
*   **Stress State:** Primarily dominated by tensile stress.
*   **Crack Initiation and Propagation:** Cracks initiate from pre-existing flaws or stress concentrations and propagate rapidly.
*   **Examples:** Glass shattering, cast iron components failing under impact, catastrophic failure of Liberty ships during WWII.

#### 3.2. Ductile Fracture

*   **Characteristics:**
    *   Significant plastic deformation before fracture.
    *   More gradual failure, often preceded by visible yielding and necking.
    *   Fracture surfaces typically show a rough, fibrous appearance, often with a "cup and cone" profile in tensile specimens.
    *   Occurs at higher temperatures or in materials with high ductility (e.g., most metals like steel, aluminum alloys, ductile polymers).
*   **Stress State:** Can involve significant shear stress and tensile stress.
*   **Crack Initiation and Propagation:** Cracks initiate due to void nucleation, growth, and coalescence, followed by stable crack propagation.
*   **Examples:** A metal wire being stretched until it breaks, yielding and eventual fracture of a structural steel beam.

**Important Point:** The distinction between brittle and ductile fracture is crucial for understanding material behavior and failure prediction.

---

### 4. Stress Concentrations and Fracture

*   **Definition:** Stress concentration is the localization of stress in a region of a material where there is a geometric discontinuity, such as a hole, notch, or crack.
*   **Role in Fracture:**
    *   **Initiation:** Stress concentrations act as sites for crack initiation, even under loads that would be considered safe for a perfectly uniform component.
    *   **Propagation:** Once a crack exists, the stress intensity at the crack tip is significantly higher than the nominal applied stress. This amplified stress drives crack propagation.

**Diagram:**

```
      --------------
      |            |
      |   o        |  <-- Hole causing stress concentration
      |            |
      --------------
```

*   **In Composites:** Composites are particularly susceptible to stress concentrations due to the presence of interfaces between different materials (e.g., fiber-matrix interface), ply drop-offs, cutouts, and sharp corners. These discontinuities can lead to localized stresses that initiate micro-cracks, delamination, or fiber breakage.

**Important Point:** Geometric discontinuities significantly lower the fracture strength of a material by creating stress concentrations.

---

### 5. Fracture Modes in Composites

Composite materials, due to their anisotropic nature and the presence of multiple constituent materials and interfaces, can exhibit complex fracture behaviors. The basic fracture modes are still relevant, but they often manifest in different failure mechanisms.

*   **Mode I in Composites:**
    *   **Delamination:** The separation of adjacent plies, often driven by interlaminar tensile stress (Mode I). This is a common failure mode in layered composites.
    *   **Fiber Pull-out (under tension):** While primarily a matrix-dominated failure, some fiber pull-out can occur when fibers are pulled from the matrix, with a Mode I opening at the fiber-matrix interface.
*   **Mode II in Composites:**
    *   **Delamination:** Can also occur under interlaminar shear stress (Mode II).
    *   **Shear Failure in Matrix:** Matrix cracking can occur under shear loading within a ply.
*   **Mode III in Composites:**
    *   **Delamination:** Out-of-plane shear can induce Mode III delamination.
    *   **Impact Damage:** Impact events can cause complex mixed-mode fracture, including delamination and matrix cracking, often involving Mode III components.

**Examples:**

*   A composite aircraft wing spar might fail by delamination (Mode I or II) under bending loads.
*   A composite hull of a boat might experience shear failure in the matrix or delamination under hydrodynamic forces (Mode II or III).
*   Impact damage on a composite car panel can lead to a combination of matrix cracking, delamination (mixed-mode I, II, and III), and fiber breakage.

**Key Concept:** In composites, fracture often involves a combination of these basic modes, leading to complex failure mechanisms like delamination, matrix cracking, fiber breakage, and fiber-matrix debonding.

---

### 6. Practice Questions

**Question 1:**
Describe the primary difference between Mode I and Mode II fracture.

**Question 2:**
Which fracture mode is characterized by the two fracture surfaces moving directly apart, perpendicular to the crack plane?
a) Mode I
b) Mode II
c) Mode III
d) All of the above

**Question 3:**
A component fails with significant plastic deformation before separation. Is this likely a brittle or ductile fracture?

**Question 4:**
What is a stress concentration, and why is it important in the context of fracture?

**Question 5:**
Provide an example of a failure mechanism in composite materials that is predominantly associated with Mode I fracture.

---

### 7. Answers to Practice Questions

**Answer 1:**
Mode I fracture involves the opening of the crack surfaces directly apart due to tensile stress perpendicular to the crack plane. Mode II fracture involves the sliding of the fracture surfaces over each other in their own plane, perpendicular to the direction of crack propagation, due to in-plane shear stress.

**Answer 2:**
a) Mode I

**Answer 3:**
This is likely ductile fracture.

**Answer 4:**
A stress concentration is the localization of stress in a region of a material due to a geometric discontinuity (e.g., a hole, notch, or crack). It is important because it significantly increases the local stress, which can lead to crack initiation and propagation, thus reducing the overall fracture strength of the material.

**Answer 5:**
Delamination under interlaminar tensile stress is a common example of Mode I fracture in composite materials.

---

### Important Points to Remember:

*   **Three Basic Modes:** Mode I (Opening), Mode II (Sliding), Mode III (Tearing).
*   **Stress States:** Mode I is tension, Mode II and III are shear.
*   **Brittle vs. Ductile:** Brittle fracture has little plastic deformation, while ductile fracture involves significant plastic deformation.
*   **Stress Concentrations:** Geometric discontinuities amplify local stresses, initiating and driving fracture.
*   **Composites:** Exhibit complex fracture behaviors often involving combinations of these modes, with delamination being a critical concern.
*   **Crack Growth:** Cracks tend to propagate in a direction that maximizes the stress intensity, which often aligns with the direction of maximum tensile stress.

---
---
