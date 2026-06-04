---
title: "Vorticity and circulation– Concept of rotational and irrotational flows"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 1: Basic Concepts and Fundamentals: Fluid statics"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a61"
status: "completed"
scrapedAt: "2026-05-20T18:46:21.613Z"
---
# Mechanics of Fluid Flow - Module 1: Basic Concepts and Fundamentals: Fluid Statics

## Topic: Vorticity and Circulation - Concept of Rotational and Irrotational Flows

---

### 1. Introduction to Vorticity and Circulation

Understanding the rotational behavior of fluid elements is crucial in fluid mechanics. Vorticity and circulation are two fundamental concepts that help us quantify and analyze this behavior.

---

### 2. Vorticity ($\omega$)

**Definition:** Vorticity is a vector quantity that describes the local rotation or spin of a fluid element. It is defined as the **curl of the velocity field**.

**Mathematical Definition:**

In Cartesian coordinates, if the velocity vector is $\vec{V} = (u, v, w)$, then vorticity is given by:

$$ \vec{\omega} = \nabla \times \vec{V} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ u & v & w \end{vmatrix} $$

Expanding this determinant:

$$ \vec{\omega} = \left( \frac{\partial w}{\partial y} - \frac{\partial v}{\partial z} \right) \mathbf{i} + \left( \frac{\partial u}{\partial z} - \frac{\partial w}{\partial x} \right) \mathbf{j} + \left( \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} \right) \mathbf{k} $$

**Interpretation of Vorticity Components:**

*   **$\omega_x = \frac{\partial w}{\partial y} - \frac{\partial v}{\partial z}$:** Represents rotation about the x-axis.
*   **$\omega_y = \frac{\partial u}{\partial z} - \frac{\partial w}{\partial x}$:** Represents rotation about the y-axis.
*   **$\omega_z = \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}$:** Represents rotation about the z-axis.

**Magnitude and Direction:**

*   The **magnitude** of vorticity indicates the intensity of the rotation.
*   The **direction** of the vorticity vector is along the axis of rotation, following the right-hand rule. If you curl the fingers of your right hand in the direction of the fluid's rotation, your thumb points in the direction of the vorticity vector.

**Relationship to Fluid Element Rotation:**

Imagine a small, square fluid element. Vorticity is related to the average angular velocity of this fluid element. If a fluid element is rotating, it has non-zero vorticity.

---

### 3. Circulation ($\Gamma$)

**Definition:** Circulation is a scalar quantity that measures the overall rotation of a fluid along a **closed curve** or **contour**. It is defined as the line integral of the velocity field around a closed curve $C$.

**Mathematical Definition:**

$$ \Gamma = \oint_C \vec{V} \cdot d\vec{l} $$

Where:
*   $\Gamma$ is the circulation.
*   $C$ is a closed curve in the fluid.
*   $\vec{V}$ is the velocity vector.
*   $d\vec{l}$ is an infinitesimal displacement vector along the curve $C$.

**Relationship to Vorticity (Stokes' Theorem):**

Stokes' theorem provides a powerful connection between circulation and vorticity. It states that the circulation around a closed curve $C$ is equal to the flux of vorticity through any surface $S$ that has $C$ as its boundary.

$$ \Gamma = \oint_C \vec{V} \cdot d\vec{l} = \iint_S (\nabla \times \vec{V}) \cdot d\vec{A} = \iint_S \vec{\omega} \cdot d\vec{A} $$

Where:
*   $S$ is any surface bounded by $C$.
*   $d\vec{A}$ is an infinitesimal area vector element, with its direction normal to the surface $S$ and consistent with the direction of integration around $C$ by the right-hand rule.

**Interpretation of Circulation:**

*   **Zero Circulation:** If the circulation around a closed curve is zero, it implies that there is no net rotation of the fluid within that loop.
*   **Non-Zero Circulation:** A non-zero circulation indicates that the fluid within the loop is rotating. The sign of the circulation indicates the direction of rotation.

---

### 4. Concept of Rotational and Irrotational Flows

The concepts of vorticity and circulation allow us to classify fluid flows based on their rotational behavior.

#### 4.1. Irrotational Flow

**Definition:** A flow is called **irrotational** if the vorticity is zero everywhere in the flow field.

**Mathematical Condition:**

$$ \vec{\omega} = \nabla \times \vec{V} = 0 $$

**Implications of Irrotational Flow:**

*   **No Local Rotation:** Fluid elements in an irrotational flow do not experience any net rotation. They might translate, but they don't spin.
*   **Potential Flow:** Irrotational flow is also known as **potential flow**. This is because if $\nabla \times \vec{V} = 0$, then the velocity field can be expressed as the gradient of a scalar potential function, called the velocity potential ($\phi$).
    $$ \vec{V} = \nabla \phi $$
    This is a consequence of vector calculus: the curl of a gradient of any scalar function is always zero.
*   **Simplified Analysis:** Potential flow is significantly easier to analyze mathematically than rotational flow. Many important fluid phenomena can be approximated as irrotational, especially in regions far from boundaries or where viscous effects are negligible.
*   **Conservation of Circulation:** In irrotational flow, the circulation around any closed loop is zero. Furthermore, from Stokes' theorem, if $\vec{\omega} = 0$ everywhere, then the circulation around any closed curve must be zero.

**Examples of Irrotational Flow (or approximated as such):**

*   **Uniform Flow:** A flow where the velocity is constant in magnitude and direction throughout the entire flow field.
*   **Flow from a Source or Sink:** The radial flow emanating from or converging into a point.
*   **Idealized Free Surface Flows:** For example, the flow of water in a wide river far from obstacles or the surface waves in deep water.
*   **External Flow at High Reynolds Numbers (Far from Boundaries):** In regions of the flow field away from boundary layers where viscous effects are minimal.

#### 4.2. Rotational Flow

**Definition:** A flow is called **rotational** if the vorticity is non-zero somewhere in the flow field.

**Mathematical Condition:**

$$ \vec{\omega} = \nabla \times \vec{V} \neq 0 $$

**Implications of Rotational Flow:**

*   **Local Rotation:** Fluid elements in a rotational flow experience local rotation.
*   **No Velocity Potential:** A rotational flow cannot be described by a single scalar velocity potential because $\nabla \times \vec{V} \neq 0$.
*   **Complexity:** Rotational flows are generally more complex to analyze due to the presence of vorticity.
*   **Sources of Vorticity:** Vorticity is typically generated at solid boundaries due to the no-slip condition and the action of viscosity. It can also be generated by internal forces or discontinuities in the flow.
*   **Conservation of Circulation (in some cases):** While circulation is zero in irrotational flow, in rotational flow, it can be non-zero and might be conserved along certain streamlines or in specific flow regimes (e.g., Kelvin's circulation theorem for inviscid, barotropic fluids).

**Examples of Rotational Flow:**

*   **Flow in a Pipe or Channel:** Due to viscosity, the fluid velocity is zero at the walls and maximum at the center. This velocity gradient leads to vorticity.
*   **Boundary Layers:** The thin layer of fluid near a solid surface where viscous effects are dominant and cause significant rotation.
*   **Vortices:** Swirling masses of fluid like tornadoes, whirlpools, or wingtip vortices.
*   **Turbulent Flows:** Turbulent flows are inherently rotational and chaotic.
*   **Flows with Shear:** Any flow where there is a velocity gradient across the flow.

---

### 5. Visualizing Vorticity and Circulation

*   **Vorticity:** Imagine tiny paddlewheels placed in the fluid. If the paddlewheels spin, the fluid is rotational. The direction of spin indicates the direction of vorticity.
*   **Circulation:** Imagine a loop of string placed in the fluid. If the fluid flowing through the loop causes the loop to rotate, there is circulation.

---

### 6. Key Concepts and Definitions Summary

*   **Vorticity ($\vec{\omega}$):** Curl of the velocity field ($\nabla \times \vec{V}$), measures local rotation of fluid elements.
*   **Circulation ($\Gamma$):** Line integral of velocity around a closed curve ($\oint_C \vec{V} \cdot d\vec{l}$), measures net rotation along a path.
*   **Stokes' Theorem:** $\Gamma = \iint_S \vec{\omega} \cdot d\vec{A}$, links circulation and vorticity.
*   **Irrotational Flow:** $\vec{\omega} = 0$ everywhere. Can be described by a velocity potential ($\vec{V} = \nabla \phi$).
*   **Rotational Flow:** $\vec{\omega} \neq 0$ somewhere. Cannot be described by a single velocity potential.

---

### 7. Practice Questions/Exercises

**Question 1:**
A two-dimensional velocity field is given by $\vec{V}(x, y) = (2x, -2y)$.
a) Calculate the vorticity of this flow.
b) Is this flow rotational or irrotational?
c) If there is a closed curve $C$ enclosing the origin, would the circulation around this curve be zero or non-zero? Explain.

**Question 2:**
Consider a velocity field $\vec{V}(x, y) = (y, 0)$.
a) Calculate the vorticity of this flow.
b) Is this flow rotational or irrotational?
c) Consider a square loop in the xy-plane with vertices at (0,0), (L,0), (L,L), and (0,L). Calculate the circulation around this loop.

**Question 3:**
Which of the following velocity fields represent irrotational flow?
a) $\vec{V} = (ax, -ay)$
b) $\vec{V} = (ax, ay)$
c) $\vec{V} = (0, ax)$
d) $\vec{V} = (ax, 0)$

---

### 8. Answers to Practice Questions

**Answer 1:**
Given $\vec{V}(x, y) = (u, v) = (2x, -2y)$. This is a 2D flow, so $w=0$ and $\frac{\partial}{\partial z} = 0$.
a) The vorticity in 2D is $\vec{\omega} = \omega_z \mathbf{k} = \left( \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} \right) \mathbf{k}$.
   $\frac{\partial v}{\partial x} = \frac{\partial (-2y)}{\partial x} = 0$
   $\frac{\partial u}{\partial y} = \frac{\partial (2x)}{\partial y} = 0$
   So, $\vec{\omega} = (0 - 0) \mathbf{k} = \vec{0}$.
b) Since the vorticity is zero everywhere, the flow is **irrotational**.
c) As the flow is irrotational, the circulation around any closed curve will be **zero**.

**Answer 2:**
Given $\vec{V}(x, y) = (u, v) = (y, 0)$. This is a 2D flow, so $w=0$ and $\frac{\partial}{\partial z} = 0$.
a) The vorticity in 2D is $\vec{\omega} = \omega_z \mathbf{k} = \left( \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} \right) \mathbf{k}$.
   $\frac{\partial v}{\partial x} = \frac{\partial (0)}{\partial x} = 0$
   $\frac{\partial u}{\partial y} = \frac{\partial (y)}{\partial y} = 1$
   So, $\vec{\omega} = (0 - 1) \mathbf{k} = -\mathbf{k}$. The vorticity is constant and points in the negative z-direction.
b) Since the vorticity is non-zero (equal to -1 $\mathbf{k}$), the flow is **rotational**.
c) The loop has vertices at (0,0), (L,0), (L,L), and (0,L). Let's parameterize each segment:
    *   Segment 1 (0,0) to (L,0): $\vec{l}$ goes from (0,0) to (L,0), so $y=0$, $x$ from 0 to L. $d\vec{l} = (dx, 0)$. $\vec{V} = (0, 0)$. Integral = $\int_0^L (0,0) \cdot (dx,0) = 0$.
    *   Segment 2 (L,0) to (L,L): $\vec{l}$ goes from (L,0) to (L,L), so $x=L$, $y$ from 0 to L. $d\vec{l} = (0, dy)$. $\vec{V} = (y, 0)$. Integral = $\int_0^L (y,0) \cdot (0,dy) = \int_0^L 0 dy = 0$.
    *   Segment 3 (L,L) to (0,L): $\vec{l}$ goes from (L,L) to (0,L), so $y=L$, $x$ from L to 0. $d\vec{l} = (dx, 0)$. $\vec{V} = (L, 0)$. Integral = $\int_L^0 (L,0) \cdot (dx,0) = \int_L^0 L dx = L[x]_L^0 = L(0-L) = -L^2$.
    *   Segment 4 (0,L) to (0,0): $\vec{l}$ goes from (0,L) to (0,0), so $x=0$, $y$ from L to 0. $d\vec{l} = (0, dy)$. $\vec{V} = (y, 0)$. Integral = $\int_L^0 (y,0) \cdot (0,dy) = \int_L^0 0 dy = 0$.
   Total Circulation $\Gamma = 0 + 0 + (-L^2) + 0 = -L^2$.
   Alternatively, using Stokes' theorem: $\Gamma = \iint_S \vec{\omega} \cdot d\vec{A}$. Here $\vec{\omega} = -1 \mathbf{k}$. The surface $S$ is the square of area $L \times L = L^2$. $d\vec{A} = dA \mathbf{k}$ (assuming the square is in the xy-plane).
   $\Gamma = \iint_S (-1 \mathbf{k}) \cdot (dA \mathbf{k}) = \iint_S -1 dA = -1 \cdot Area(S) = -1 \cdot L^2 = -L^2$.
   The circulation is **non-zero**.

**Answer 3:**
We need to find the velocity field where the vorticity is zero ($\nabla \times \vec{V} = 0$). For 2D flows $(u,v)$, this means $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = 0$.

a) $\vec{V} = (ax, -ay)$: $u=ax, v=-ay$.
   $\frac{\partial v}{\partial x} = \frac{\partial (-ay)}{\partial x} = 0$.
   $\frac{\partial u}{\partial y} = \frac{\partial (ax)}{\partial y} = 0$.
   $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = 0 - 0 = 0$.
   This represents **irrotational flow**. This is a strain flow (pure expansion/contraction).

b) $\vec{V} = (ax, ay)$: $u=ax, v=ay$.
   $\frac{\partial v}{\partial x} = \frac{\partial (ay)}{\partial x} = 0$.
   $\frac{\partial u}{\partial y} = \frac{\partial (ax)}{\partial y} = 0$.
   $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = 0 - 0 = 0$.
   This represents **irrotational flow**. This is a pure source/sink flow.

c) $\vec{V} = (0, ax)$: $u=0, v=ax$.
   $\frac{\partial v}{\partial x} = \frac{\partial (ax)}{\partial x} = a$.
   $\frac{\partial u}{\partial y} = \frac{\partial (0)}{\partial y} = 0$.
   $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = a - 0 = a$.
   If $a \neq 0$, this represents **rotational flow**. This is a shear flow.

d) $\vec{V} = (ax, 0)$: $u=ax, v=0$.
   $\frac{\partial v}{\partial x} = \frac{\partial (0)}{\partial x} = 0$.
   $\frac{\partial u}{\partial y} = \frac{\partial (ax)}{\partial y} = 0$.
   $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = 0 - 0 = 0$.
   This represents **irrotational flow**. This is a uniform flow along the x-axis if a is a constant, or a shear flow if 'a' is a function of y. Assuming 'a' is a constant, it's uniform and thus irrotational. If 'a' is $a(y)$, it's a shear flow and rotational. Given the notation, it's likely intended as a uniform flow component, making it irrotational.

**Corrected Answer for 3a and 3b based on typical interpretation:**
The most common velocity potentials leading to uniform flow are $\phi = ax$.
a) $\vec{V} = \nabla\phi = (\frac{\partial \phi}{\partial x}, \frac{\partial \phi}{\partial y})$. If $\phi = ax$, $\vec{V} = (a, 0)$, which is uniform flow. This is irrotational.
If $\phi = ax^2$, $\vec{V} = (2ax, 0)$, also uniform.
If $\phi = \frac{1}{2}a(x^2-y^2)$, $\vec{V} = (ax, -ay)$. This represents pure shear/deformation, and is irrotational.
If $\phi = ax^2$, $\vec{V} = (2ax, 0)$, which is uniform flow and irrotational.
If $\phi = ax$, $\vec{V} = (a, 0)$, uniform flow and irrotational.
If $\phi = ay$, $\vec{V} = (0, a)$, uniform flow and irrotational.
If $\phi = ax^2+ay^2$, $\vec{V} = (2ax, 2ay)$. This is a source flow.
If $\phi = ax^2-ay^2$, $\vec{V} = (2ax, -2ay)$. This is a saddle point flow and is irrotational.

Let's re-evaluate 3a and 3b based on the given forms as velocity fields directly.

a) $\vec{V} = (ax, -ay)$: $u=ax, v=-ay$. $\frac{\partial v}{\partial x} = 0, \frac{\partial u}{\partial y} = 0$. Vorticity = 0. **Irrotational**.
b) $\vec{V} = (ax, ay)$: $u=ax, v=ay$. $\frac{\partial v}{\partial x} = 0, \frac{\partial u}{\partial y} = 0$. Vorticity = 0. **Irrotational**.

d) $\vec{V} = (ax, 0)$: $u=ax, v=0$. $\frac{\partial v}{\partial x} = 0, \frac{\partial u}{\partial y} = 0$. Vorticity = 0. **Irrotational** (assuming 'a' is a constant, representing uniform flow).

So, **a, b, and d** are irrotational.

---

### 9. Important Points to Remember

*   **Vorticity is local rotation; Circulation is net rotation along a path.**
*   **Irrotational flow has zero vorticity everywhere and can be described by a velocity potential.**
*   **Rotational flow has non-zero vorticity somewhere and cannot be described by a single velocity potential.**
*   **Viscosity is the primary source of vorticity in most real-world fluid flows, especially near boundaries.**
*   **Stokes' theorem is crucial for relating vorticity and circulation.**
*   **The concept of irrotational flow simplifies many fluid dynamics problems, but its applicability must be assessed by checking for vorticity.**

---
