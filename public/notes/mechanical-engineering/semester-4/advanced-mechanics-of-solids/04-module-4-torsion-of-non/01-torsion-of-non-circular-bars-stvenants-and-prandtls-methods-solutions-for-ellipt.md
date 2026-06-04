---
title: "Torsion of non-circular bars: St.Venant’s and Prandtl’s methods-solutions for elliptical cross-section. Membrane analogy."
subject: "ADVANCED MECHANICS OF SOLIDS"
module: "Module 4: Torsion of non"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463267"
status: "completed"
scrapedAt: "2026-05-20T17:51:15.648Z"
---
# ADVANCED MECHANICS OF SOLIDS - Module 4: Torsion of Non-Circular Bars

## Topic: Torsion of Non-Circular Bars: St. Venant's and Prandtl's Methods - Solutions for Elliptical Cross-Section, Membrane Analogy

### Learning Outcomes Covered:

*   **Understanding the limitations of the circular bar torsion theory for non-circular sections.**
*   **Formulating the stress function for torsion of non-circular bars.**
*   **Applying Saint-Venant's semi-inverse method to solve torsion problems for non-circular sections.**
*   **Understanding and applying Prandtl's stress function and membrane analogy for torsion problems.**
*   **Deriving and interpreting solutions for torsion of bars with elliptical cross-sections.**
*   **Relating the maximum shear stress and angle of twist for non-circular sections.**

### Course Outcomes Alignment:

*   **CO1: Formulate the field equations of Elasticity. (Knowledge Level: K1)** - While this module focuses on specific applications, the underlying stress function approach stems from the general field equations.
*   **CO2: Model engineering problems as two-dimensional, for solutions involving a Stress Function. (Knowledge Level: K2)** - This is the core of this module, where we utilize Airy's stress function (or a related stress function) for 2D torsion problems.
*   **CO3: Develop solutions for axi-symmetric problems...** - Not directly applicable to this specific topic, which deals with non-axisymmetric torsion.
*   **CO4: Extend the basic ideas related to theory of elastic flexure...** - Understanding stress distribution and deformation is common to both flexure and torsion.
*   **CO5: Apply solution methods for torsion in components with non-circular cross Sections and thin -walled structures. (Knowledge Level: K3)** - This is the primary focus of this module.

---

### 1. Introduction to Torsion of Non-Circular Bars

*   **Problem Statement:** In circular bars subjected to torsion, the cross-sections remain plane and undistorted. This is due to the symmetry of the circular cross-section. For non-circular bars, this assumption is violated. The cross-sections warp out of their original plane, and the shear stress distribution is not uniform across the section.
*   **Consequences of Non-Circular Sections:**
    *   **Warping:** Cross-sections distort and twist non-uniformly.
    *   **Non-uniform Shear Stress:** Shear stresses are not constant across the cross-section. They are typically zero at points where the boundary is straight and maximum at points with the sharpest curvature.
    *   **Stress Concentrations:** Higher stresses occur at corners and points of re-entrant angles.

*   **Reference Textbooks:**
    *   Timoshenko & Goodier, Chapter 12: Torsion of Shafts.
    *   Srinath, Chapter 6: Torsion of Shafts of Non-Circular Cross-Section.
    *   Kazimi, Chapter 10: Torsion.
    *   Jose, Chapter 5: Torsion.

---

### 2. Saint-Venant's Semi-Inverse Method for Torsion

*   **Concept:** Saint-Venant's method involves making assumptions about the deformation to simplify the problem and then deriving the stress distribution. It's "semi-inverse" because some assumptions are made about the displacement field.
*   **Assumptions:**
    1.  **Plane sections remain plane:** This is a generalization of the circular bar assumption. However, Saint-Venant relaxed this by allowing plane sections to remain *perpendicular* to the *deformed* axis of the bar, implying warping.
    2.  **Shear stresses are the only non-zero stresses:** This is valid for pure torsion.
    3.  **The displacement field can be described by a stress function.**

*   **Mathematical Formulation:**
    *   Let the torsion occur about the z-axis. The displacement vector $\vec{u} = (u, v, w)$.
    *   For torsion, the radial and axial displacements are zero, and the tangential displacement is proportional to the distance from the axis. However, for non-circular bars, this is more complex.
    *   Saint-Venant proposed a displacement field of the form:
        $u = -\alpha y z$
        $v = \alpha x z$
        $w = \alpha \phi(x, y)$
        where:
        *   $\alpha$ is the angle of twist per unit length.
        *   $\phi(x, y)$ is the warping function, which describes the displacement of the cross-section perpendicular to the z-axis.

*   **Derivation of Stress Components:**
    *   Using the strain-displacement relations and Hooke's Law:
        $\tau_{xz} = G \gamma_{xz} = G (\frac{\partial w}{\partial x} + \frac{\partial u}{\partial z}) = G (\frac{\partial \phi}{\partial x} - \alpha y)$
        $\tau_{yz} = G \gamma_{yz} = G (\frac{\partial w}{\partial y} + \frac{\partial v}{\partial z}) = G (\frac{\partial \phi}{\partial y} + \alpha x)$
        $\sigma_x = \sigma_y = \sigma_z = \tau_{xy} = 0$

    *   Substituting these into the equilibrium equations (without body forces):
        $\frac{\partial \sigma_x}{\partial x} + \frac{\partial \tau_{xy}}{\partial y} + \frac{\partial \tau_{zx}}{\partial z} = 0 \Rightarrow \frac{\partial \tau_{xz}}{\partial z} = 0$
        $\frac{\partial \tau_{xy}}{\partial x} + \frac{\partial \sigma_y}{\partial y} + \frac{\partial \tau_{yz}}{\partial z} = 0 \Rightarrow \frac{\partial \tau_{yz}}{\partial z} = 0$
        $\frac{\partial \tau_{zx}}{\partial x} + \frac{\partial \tau_{yz}}{\partial y} + \frac{\partial \sigma_z}{\partial z} = 0 \Rightarrow \frac{\partial \tau_{xz}}{\partial x} + \frac{\partial \tau_{yz}}{\partial y} = 0$

    *   The first two equilibrium equations are satisfied by the form of $\tau_{xz}$ and $\tau_{yz}$ since $\phi(x,y)$ is independent of z.
    *   The third equilibrium equation leads to:
        $G (\frac{\partial^2 \phi}{\partial x^2} - \alpha \frac{\partial y}{\partial x}) + G (\frac{\partial^2 \phi}{\partial y^2} + \alpha \frac{\partial x}{\partial y}) = 0$
        $G (\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2}) = 0$
        This gives the **Laplace equation for the warping function:**
        $\nabla^2 \phi = 0$

*   **Boundary Conditions:**
    *   On the free surface of the bar (where $\tau_{xz} = 0$ and $\tau_{yz} = 0$), the resulting shear stresses must be tangent to the boundary. This means the resultant shear stress vector must have no component perpendicular to the boundary.
    *   The boundary of the cross-section is described by a curve $f(x, y) = c$. The outward normal vector is proportional to $(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y})$.
    *   The condition that there is no stress across the boundary is:
        $\tau_{xz} n_x + \tau_{yz} n_y = 0$, where $n_x = \frac{\partial f / \partial x}{|\nabla f|}$ and $n_y = \frac{\partial f / \partial y}{|\nabla f|}$.
    *   Substituting the expressions for $\tau_{xz}$ and $\tau_{yz}$:
        $G (\frac{\partial \phi}{\partial x} - \alpha y) (\frac{\partial f}{\partial x}) + G (\frac{\partial \phi}{\partial y} + \alpha x) (\frac{\partial f}{\partial y}) = 0$
        $(\frac{\partial \phi}{\partial x} \frac{\partial f}{\partial x} + \frac{\partial \phi}{\partial y} \frac{\partial f}{\partial y}) - \alpha y \frac{\partial f}{\partial x} + \alpha x \frac{\partial f}{\partial y} = 0$
    *   Using the chain rule: $\frac{d f}{d s} = \frac{\partial f}{\partial x} \frac{d x}{d s} + \frac{\partial f}{\partial y} \frac{d y}{d s} = 0$ for a curve $f(x,y)=c$. The tangent vector is $(dx/ds, dy/ds)$.
    *   The boundary condition can be rewritten as:
        $\frac{\partial \phi}{\partial n} = \alpha (y \frac{\partial f}{\partial x} - x \frac{\partial f}{\partial y})$
        where $\frac{\partial}{\partial n}$ is the derivative in the direction of the outward normal.
    *   A more convenient form of the boundary condition is related to a new stress function, $\psi(x,y)$, often called the **Prandtl stress function**.

---

### 3. Prandtl's Stress Function and the Membrane Analogy

*   **Prandtl's Stress Function:**
    *   Define a function $\psi(x,y)$ such that:
        $\tau_{xz} = G \frac{\partial \psi}{\partial y}$
        $\tau_{yz} = -G \frac{\partial \psi}{\partial x}$
    *   Substituting these into the equilibrium equation $\frac{\partial \tau_{xz}}{\partial x} + \frac{\partial \tau_{yz}}{\partial y} = 0$:
        $G \frac{\partial^2 \psi}{\partial x \partial y} - G \frac{\partial^2 \psi}{\partial y \partial x} = 0$. This is automatically satisfied.
    *   Now, consider the compatibility equations. For pure torsion, the only non-zero strains are shear strains, and the stress function approach naturally handles this.
    *   The relationship between the warping function $\phi$ and the stress function $\psi$ can be found. It turns out that:
        $\frac{\partial \phi}{\partial x} = \alpha y + \frac{\partial \psi}{\partial y}$
        $\frac{\partial \phi}{\partial y} = -\alpha x - \frac{\partial \psi}{\partial x}$
    *   Taking the Laplacian of $\frac{\partial \phi}{\partial x}$ and $\frac{\partial \phi}{\partial y}$:
        $\nabla^2 (\frac{\partial \phi}{\partial x}) = \frac{\partial}{\partial x} (\nabla^2 \phi) = 0$
        $\nabla^2 (\frac{\partial \phi}{\partial y}) = \frac{\partial}{\partial y} (\nabla^2 \phi) = 0$
    *   Substituting the expressions involving $\psi$:
        $\frac{\partial}{\partial x} (\nabla^2 \phi) = \frac{\partial}{\partial x} (\alpha \frac{\partial y}{\partial x} + \frac{\partial^2 \psi}{\partial y \partial x}) = 0$ (This is not helpful directly).
    *   A more direct derivation shows that if $\phi$ satisfies $\nabla^2 \phi = 0$, then $\psi$ satisfies the **biharmonic equation**:
        $\nabla^4 \psi = 0$
    *   However, for the purpose of torsion, a simpler formulation exists. Let's re-examine the Saint-Venant formulation. If we define a stress function $\psi(x,y)$ such that the shear stresses are:
        $\tau_{xz} = -\frac{\partial \psi}{\partial y}$
        $\tau_{yz} = \frac{\partial \psi}{\partial x}$
    *   Substituting these into the equilibrium equation $\frac{\partial \tau_{xz}}{\partial x} + \frac{\partial \tau_{yz}}{\partial y} = 0$ yields $0=0$.
    *   Now, we need to connect this $\psi$ to the warping. It can be shown that if we define:
        $w(x, y, z) = \alpha z \phi(x, y)$
        then
        $\tau_{xz} = G \alpha (\frac{\partial \phi}{\partial x} - y)$
        $\tau_{yz} = G \alpha (\frac{\partial \phi}{\partial y} + x)$
    *   If we choose $\psi(x,y)$ such that:
        $\frac{\partial \psi}{\partial y} = -G \alpha (\frac{\partial \phi}{\partial x} - y)$
        $-\frac{\partial \psi}{\partial x} = G \alpha (\frac{\partial \phi}{\partial y} + x)$
    *   This means $\frac{\partial \psi}{\partial y} = -G \alpha \frac{\partial \phi}{\partial x} + G \alpha y$ and $\frac{\partial \psi}{\partial x} = -G \alpha \frac{\partial \phi}{\partial y} - G \alpha x$.
    *   It can be shown that if $\phi$ satisfies $\nabla^2 \phi = 0$, then $\psi$ satisfies:
        $\nabla^2 \psi = -2G \alpha$
        This is a Poisson equation.
    *   The boundary condition for $\psi$ is that the shear stresses $\tau_{xz}$ and $\tau_{yz}$ must be tangent to the boundary. This implies that the resultant stress vector is zero normal to the boundary. If the boundary is given by $f(x,y) = c$, the normal is $(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y})$. The condition is:
        $\tau_{xz} \frac{\partial f}{\partial x} + \tau_{yz} \frac{\partial f}{\partial y} = 0$
        $(-\frac{\partial \psi}{\partial y}) \frac{\partial f}{\partial x} + (\frac{\partial \psi}{\partial x}) \frac{\partial f}{\partial y} = 0$
        This means that $\psi$ must be constant on the boundary. Typically, we set $\psi = 0$ on the boundary.

*   **Torsion Formula:**
    *   The applied torque $T$ is related to the stress function:
        $T = \iint_A (x \tau_{yz} - y \tau_{xz}) dA$
        $T = \iint_A (x \frac{\partial \psi}{\partial x} - y (-\frac{\partial \psi}{\partial y})) dA$
        $T = \iint_A (x \frac{\partial \psi}{\partial x} + y \frac{\partial \psi}{\partial y}) dA$
    *   Using integration by parts or Green's theorem, this can be related to the integral of $\psi$ over the area:
        $T = 2 \iint_A \psi(x, y) dA$
        This is a fundamental result: **The torque is twice the integral of the stress function over the cross-sectional area.**

*   **Membrane Analogy (Prandtl's Soap Film Analogy):**
    *   Consider a thin, stretched elastic membrane (like a soap film) subjected to a uniform pressure difference $\Delta p$ across its surfaces.
    *   The deflection $w(x,y)$ of the membrane from its equilibrium position satisfies the equation:
        $\nabla^2 w = -\frac{\Delta p}{\sigma_0}$
        where $\sigma_0$ is the surface tension of the membrane.
    *   Comparing this with the Poisson equation for the stress function $\psi$ ($\nabla^2 \psi = -2G \alpha$), we see a direct analogy:
        *   The deflection of the membrane $w(x,y)$ is analogous to the stress function $\psi(x,y)$.
        *   The surface tension $\sigma_0$ is analogous to $G$.
        *   The pressure difference $\Delta p$ is analogous to $2 \alpha$.
    *   **Key correspondences:**
        *   **Shear Stress:** The slope of the membrane in any direction is analogous to the shear stress in that direction.
            *   $\frac{\partial w}{\partial x}$ corresponds to $\frac{1}{G} \tau_{yz}$ (or $-\frac{1}{G} \tau_{yz}$, depending on sign convention).
            *   $\frac{\partial w}{\partial y}$ corresponds to $-\frac{1}{G} \tau_{xz}$ (or $\frac{1}{G} \tau_{xz}$).
            The magnitude of the shear stress $\sqrt{\tau_{xz}^2 + \tau_{yz}^2}$ is proportional to the magnitude of the slope of the membrane $|\nabla w|$.
        *   **Maximum Shear Stress:** Occurs where the slope of the membrane is maximum. This typically happens at points of sharp curvature or corners.
        *   **Torque:** The volume under the membrane (integral of $w$) is proportional to the applied torque $T$.
            $T = 2 \iint_A \psi dA \propto 2 \iint_A w dA = \frac{2 \sigma_0}{\Delta p} \iint_A w dA$
            If we set $\Delta p = 2G\alpha$ and $\sigma_0 = G$, then $T = 2 \iint_A \psi dA$ directly. The volume under the membrane is $V = \iint_A w dA$. Thus, $T = 2 G \alpha \frac{V}{\text{Volume under unit slope}}$.
        *   **Angle of Twist per Unit Length:** $\alpha$ is proportional to the pressure difference applied to the membrane.

*   **Advantages of Membrane Analogy:**
    *   Provides an intuitive understanding of stress distribution in torsion.
    *   Allows for experimental determination of stress distribution for complex shapes by creating and measuring the deflection of a soap film or a stretched rubber sheet.
    *   Helps in identifying points of maximum stress (where the slope is steepest).

*   **Reference Textbooks:**
    *   Timoshenko & Goodier, Chapter 12.
    *   Srinath, Chapter 6.
    *   Sadd, Chapter 8: Torsion of Noncircular Bars.
    *   Atkin & Fox, Chapter 7: Torsion.

---

### 4. Solution for Elliptical Cross-Section

*   **Problem:** Torsion of a bar with an elliptical cross-section defined by $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.
*   **Approach:** We need to find a stress function $\psi(x,y)$ that satisfies $\nabla^2 \psi = -2G\alpha$ and $\psi = 0$ on the boundary of the ellipse.
*   **Proposed Solution (from textbooks like Timoshenko & Goodier):**
    The solution for $\psi(x,y)$ for an elliptical cross-section is given by:
    $\psi(x, y) = G \alpha (\frac{a^2 b^2}{a^2 + b^2}) (\frac{x^2}{a^2} + \frac{y^2}{b^2} - 1)$
    This solution satisfies the boundary condition $\psi=0$ on the ellipse. However, it does *not* satisfy $\nabla^2 \psi = -2G\alpha$ everywhere inside the ellipse.
    The correct stress function that satisfies both conditions is:
    $\psi(x, y) = -G \alpha \frac{a^2 b^2}{a^2 + b^2} (1 - \frac{x^2}{a^2} - \frac{y^2}{b^2})$

*   **Verification:**
    *   **Boundary Condition:** At the ellipse boundary $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $\psi(x, y) = -G \alpha \frac{a^2 b^2}{a^2 + b^2} (1 - 1) = 0$. Satisfied.
    *   **Poisson Equation:** Let's check $\nabla^2 \psi$.
        $\frac{\partial \psi}{\partial x} = -G \alpha \frac{a^2 b^2}{a^2 + b^2} (-\frac{2x}{a^2})$
        $\frac{\partial^2 \psi}{\partial x^2} = -G \alpha \frac{a^2 b^2}{a^2 + b^2} (-\frac{2}{a^2}) = G \alpha \frac{2 b^2}{a^2 + b^2}$
        $\frac{\partial \psi}{\partial y} = -G \alpha \frac{a^2 b^2}{a^2 + b^2} (-\frac{2y}{b^2})$
        $\frac{\partial^2 \psi}{\partial y^2} = -G \alpha \frac{a^2 b^2}{a^2 + b^2} (-\frac{2}{b^2}) = G \alpha \frac{2 a^2}{a^2 + b^2}$
        $\nabla^2 \psi = \frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2} = G \alpha \frac{2 b^2}{a^2 + b^2} + G \alpha \frac{2 a^2}{a^2 + b^2} = G \alpha \frac{2 (b^2 + a^2)}{a^2 + b^2} = 2G \alpha$.
        This is not $-2G\alpha$. Let's re-check the sign convention.
    *   **Corrected Stress Function:** The correct stress function is:
        $\psi(x, y) = G \alpha \frac{a^2 b^2}{a^2 + b^2} (1 - \frac{x^2}{a^2} - \frac{y^2}{b^2})$
        Let's re-verify $\nabla^2 \psi$:
        $\frac{\partial^2 \psi}{\partial x^2} = G \alpha \frac{a^2 b^2}{a^2 + b^2} (-\frac{2}{a^2}) = -G \alpha \frac{2 b^2}{a^2 + b^2}$
        $\frac{\partial^2 \psi}{\partial y^2} = G \alpha \frac{a^2 b^2}{a^2 + b^2} (-\frac{2}{b^2}) = -G \alpha \frac{2 a^2}{a^2 + b^2}$
        $\nabla^2 \psi = -G \alpha \frac{2 b^2}{a^2 + b^2} - G \alpha \frac{2 a^2}{a^2 + b^2} = -G \alpha \frac{2 (b^2 + a^2)}{a^2 + b^2} = -2G \alpha$.
        This now matches the required Poisson equation.

*   **Shear Stresses:**
    $\tau_{xz} = -\frac{\partial \psi}{\partial y} = -G \alpha \frac{a^2 b^2}{a^2 + b^2} (-\frac{2y}{b^2}) = G \alpha \frac{2 a^2 y}{a^2 + b^2}$
    $\tau_{yz} = \frac{\partial \psi}{\partial x} = G \alpha \frac{a^2 b^2}{a^2 + b^2} (-\frac{2x}{a^2}) = -G \alpha \frac{2 b^2 x}{a^2 + b^2}$

*   **Maximum Shear Stress:**
    *   The magnitude of shear stress is $|\tau| = \sqrt{\tau_{xz}^2 + \tau_{yz}^2}$.
    *   $\tau_{xz}$ is maximum when $y$ is maximum (i.e., $y=\pm b$), and $\tau_{yz}$ is zero.
        $\tau_{xz,max} = G \alpha \frac{2 a^2 b}{a^2 + b^2}$ (occurs at $(0, \pm b)$).
    *   $\tau_{yz}$ is maximum when $x$ is maximum (i.e., $x=\pm a$), and $\tau_{xz}$ is zero.
        $\tau_{yz,max} = -G \alpha \frac{2 b^2 a}{a^2 + b^2}$ (occurs at $(\pm a, 0)$).
    *   The shear stress is **not** uniform. The maximum shear stress occurs at the points on the ellipse that are closest to the center, i.e., at the ends of the major axis.
    *   Let $a > b$ (major axis along x-axis).
        *   At $(0, \pm b)$ (ends of minor axis): $\tau_{xz} = \pm G \alpha \frac{2 a^2 b}{a^2 + b^2}$, $\tau_{yz} = 0$. Max shear stress magnitude $\approx 2 G \alpha \frac{a^2}{a^2+b^2}$.
        *   At $(\pm a, 0)$ (ends of major axis): $\tau_{xz} = 0$, $\tau_{yz} = \mp G \alpha \frac{2 b^2 a}{a^2 + b^2}$. Max shear stress magnitude $\approx 2 G \alpha \frac{b^2}{a^2+b^2}$.
    *   The maximum shear stress occurs at the ends of the **major axis** $(\pm a, 0)$ if $b < a$, and at the ends of the **minor axis** $(0, \pm b)$ if $a < b$.
    *   Let's consider the direction of the shear stress. The shear stress vector is $(\tau_{xz}, \tau_{yz})$.
    *   At $(0, b)$: $\tau_{xz} = G \alpha \frac{2 a^2 b}{a^2 + b^2}$, $\tau_{yz} = 0$. This is along the y-direction.
    *   At $(a, 0)$: $\tau_{xz} = 0$, $\tau_{yz} = -G \alpha \frac{2 b^2 a}{a^2 + b^2}$. This is along the negative x-direction.
    *   The direction of shear stress is along the tangent to the ellipse.
    *   The magnitude of the shear stress is $|\tau| = \sqrt{(G \alpha \frac{2 a^2 y}{a^2 + b^2})^2 + (-G \alpha \frac{2 b^2 x}{a^2 + b^2})^2}$.
    *   On the boundary, $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.
    *   Let's evaluate the stress magnitude at $(0,b)$ and $(a,0)$.
        *   At $(0,b)$: $\tau_{xz} = G \alpha \frac{2 a^2 b}{a^2 + b^2}$, $\tau_{yz} = 0$. Magnitude: $\frac{2G \alpha a^2 b}{a^2 + b^2}$.
        *   At $(a,0)$: $\tau_{xz} = 0$, $\tau_{yz} = -G \alpha \frac{2 b^2 a}{a^2 + b^2}$. Magnitude: $\frac{2G \alpha b^2 a}{a^2 + b^2}$.
    *   If $a > b$, then $\frac{a^2 b}{a^2 + b^2} > \frac{b^2 a}{a^2 + b^2}$ because $\frac{a}{b} > 1$.
    *   Therefore, for $a > b$, the maximum shear stress occurs at the ends of the **minor axis** $(0, \pm b)$. The maximum shear stress magnitude is $\tau_{max} = \frac{2G \alpha a^2 b}{a^2 + b^2}$.
    *   If $b > a$, the maximum shear stress occurs at the ends of the **major axis** $(\pm a, 0)$. The maximum shear stress magnitude is $\tau_{max} = \frac{2G \alpha b^2 a}{a^2 + b^2}$.
    *   In general, the maximum shear stress occurs at the ends of the **major axis** and is given by $\tau_{max} = \frac{2G \alpha ab^2}{a^2+b^2}$ if $a>b$, and at the ends of the **minor axis** and is given by $\tau_{max} = \frac{2G \alpha a^2b}{a^2+b^2}$ if $b>a$. This is a bit confusing. Let's stick to the general formula and evaluate it at the extremities.

    *   **Correct statement for maximum shear stress:**
        The magnitude of shear stress at any point $(x, y)$ on the boundary is given by:
        $|\tau| = \frac{2G \alpha ab}{\sqrt{a^2 \sin^2\theta + b^2 \cos^2\theta}}$ where $x = a \cos\theta, y = b \sin\theta$.
        This is related to the normal to the boundary.
        A simpler approach: the shear stress magnitude is proportional to the distance from the boundary in the normal direction. This distance is greatest at the ends of the minor axis for $a>b$, and at the ends of the major axis for $b>a$.
        *   If $a>b$ (major axis along x): The points $(0, \pm b)$ are closest to the center. The maximum shear stress magnitude occurs here.
            $\tau_{xz} = G \alpha \frac{2 a^2 y}{a^2 + b^2}$. At $(0, b)$, $\tau_{xz} = G \alpha \frac{2 a^2 b}{a^2 + b^2}$. $\tau_{yz}=0$.
            $\tau_{yz} = -G \alpha \frac{2 b^2 x}{a^2 + b^2}$. At $(a, 0)$, $\tau_{yz} = -G \alpha \frac{2 b^2 a}{a^2 + b^2}$. $\tau_{xz}=0$.
            Magnitude at $(0,b)$: $\frac{2G \alpha a^2 b}{a^2 + b^2}$.
            Magnitude at $(a,0)$: $\frac{2G \alpha b^2 a}{a^2 + b^2}$.
            If $a>b$, then $a/b > 1$. Comparing the two magnitudes:
            $\frac{a^2 b}{a^2 + b^2}$ vs $\frac{b^2 a}{a^2 + b^2}$
            $\frac{a}{b}$ vs $\frac{b}{a}$
            Since $a>b$, $a/b > 1$ and $b/a < 1$.
            So, $\frac{2G \alpha a^2 b}{a^2 + b^2}$ is larger.
            **Therefore, for $a > b$, the maximum shear stress occurs at the ends of the minor axis $(0, \pm b)$, and its magnitude is $\tau_{max} = \frac{2G \alpha a^2 b}{a^2 + b^2}$.**
        *   If $b>a$ (major axis along y): The points $(\pm a, 0)$ are closest to the center. The maximum shear stress magnitude occurs here.
            **Therefore, for $b > a$, the maximum shear stress occurs at the ends of the minor axis $(\pm a, 0)$, and its magnitude is $\tau_{max} = \frac{2G \alpha b^2 a}{a^2 + b^2}$.**

    *   **In summary for elliptical cross-section:**
        Maximum shear stress magnitude occurs at the ends of the minor axis.
        If $a>b$ (semi-major axis along x), $\tau_{max} = \frac{2G \alpha a^2 b}{a^2 + b^2}$ at $(0, \pm b)$.
        If $b>a$ (semi-major axis along y), $\tau_{max} = \frac{2G \alpha b^2 a}{a^2 + b^2}$ at $(\pm a, 0)$.

*   **Torque ($T$):**
    *   $T = 2 \iint_A \psi dA = 2 \iint_A G \alpha \frac{a^2 b^2}{a^2 + b^2} (1 - \frac{x^2}{a^2} - \frac{y^2}{b^2}) dA$
    *   The integral of $(1 - \frac{x^2}{a^2} - \frac{y^2}{b^2})$ over the elliptical area needs to be evaluated.
    *   Using polar coordinates for the ellipse: $x = ar\cos\theta$, $y = br\sin\theta$, $dA = ab r dr d\theta$.
    *   $\frac{x^2}{a^2} + \frac{y^2}{b^2} = r^2 \cos^2\theta + r^2 \sin^2\theta = r^2$.
    *   $\iint_A (1 - \frac{x^2}{a^2} - \frac{y^2}{b^2}) dA = \int_0^{2\pi} \int_0^1 (1 - r^2) (ab r dr d\theta)$
    *   $= ab \int_0^{2\pi} d\theta \int_0^1 (r - r^3) dr$
    *   $= ab (2\pi) [\frac{r^2}{2} - \frac{r^4}{4}]_0^1 = 2\pi ab (\frac{1}{2} - \frac{1}{4}) = 2\pi ab (\frac{1}{4}) = \frac{\pi ab}{2}$.
    *   So, $T = 2 (G \alpha \frac{a^2 b^2}{a^2 + b^2}) (\frac{\pi ab}{2}) = G \alpha \frac{\pi a^3 b^3}{a^2 + b^2}$.
    *   The torsional rigidity $GJ$ is given by $T = GJ \alpha$.
    *   Therefore, the torsional rigidity of an elliptical bar is $GJ = \frac{\pi a^3 b^3}{a^2 + b^2}$.
    *   The area of the ellipse is $A = \pi ab$.
    *   We can write $GJ = G \frac{(\pi ab)^2 ab}{a^2 + b^2} = G \frac{A^2}{ab} \frac{ab^2}{a^2+b^2}$ - not a simple form.

*   **Angle of Twist ($\theta$):**
    *   For a bar of length $L$, the total angle of twist is $\theta = \alpha L$.
    *   So, $\alpha = \frac{\theta}{L}$.
    *   Substituting this into the torque equation: $T = GJ \frac{\theta}{L}$.
    *   $\frac{T L}{GJ} = \theta$. This is consistent with the general torsion formula for a bar with constant cross-section, where $J$ is the polar moment of inertia for circular bars and $GJ$ is the torsional rigidity for non-circular bars.

*   **Special Case: Circular Cross-Section (a = b = R):**
    *   $GJ = \frac{\pi R^3 R^3}{R^2 + R^2} = \frac{\pi R^6}{2R^2} = \frac{\pi R^4}{2}$.
    *   This is the correct torsional rigidity for a solid circular shaft of radius $R$, as $J = \frac{\pi R^4}{2}$.
    *   Maximum shear stress: $\tau_{max} = \frac{2G \alpha R^2 R}{R^2 + R^2} = \frac{2G \alpha R^3}{2R^2} = G \alpha R$.
    *   Since $\tau = G \alpha r$ for circular shafts, $\tau_{max} = G \alpha R$, which is correct.

---

### 5. Key Concepts and Important Points to Remember

*   **Warping:** Non-circular cross-sections warp out of their plane during torsion.
*   **Saint-Venant's Semi-Inverse Method:** Assumes a specific displacement field to simplify the problem, leading to the Laplace equation for the warping function or a Poisson equation for the stress function.
*   **Prandtl Stress Function ($\psi$):** A function defined such that shear stresses are its derivatives ($\tau_{xz} = -\partial \psi / \partial y$, $\tau_{yz} = \partial \psi / \partial x$). It satisfies $\nabla^2 \psi = -2G\alpha$ and is zero on the boundary.
*   **Membrane Analogy:** Soap film deflection is analogous to the Prandtl stress function. Slope of the membrane is proportional to shear stress. Volume under the membrane is proportional to torque.
*   **Torsional Rigidity ($GJ$):** For non-circular bars, it's not $G$ times polar moment of inertia, but a derived value based on the cross-sectional shape. $T = GJ \alpha$.
*   **Elliptical Cross-Section:**
    *   Stress function: $\psi(x, y) = G \alpha \frac{a^2 b^2}{a^2 + b^2} (1 - \frac{x^2}{a^2} - \frac{y^2}{b^2})$
    *   Shear stresses: $\tau_{xz} = G \alpha \frac{2 a^2 y}{a^2 + b^2}$, $\tau_{yz} = -G \alpha \frac{2 b^2 x}{a^2 + b^2}$
    *   Maximum shear stress: Occurs at the ends of the minor axis. Magnitude is $\frac{2G \alpha a^2 b}{a^2 + b^2}$ if $a>b$ or $\frac{2G \alpha b^2 a}{a^2 + b^2}$ if $b>a$.
    *   Torsional rigidity: $GJ = \frac{\pi a^3 b^3}{a^2 + b^2}$.

---

### 6. Practice Questions and Exercises

**Question 1:**
For a non-circular bar subjected to torsion, the cross-sections:
a) Remain plane but warp.
b) Remain plane and undistorted.
c) Warp but do not distort.
d) Remain plane and perpendicular to the axis.

**Answer 1:**
a) Remain plane but warp. (The key is that they are no longer *undistorted* and do not remain *parallel* to the original plane.)

**Question 2:**
The Prandtl stress function $\psi$ for a torsion problem satisfies which of the following partial differential equations inside the cross-section?
a) $\nabla^2 \psi = 0$
b) $\nabla^2 \psi = -2G\alpha$
c) $\nabla^4 \psi = 0$
d) $\nabla^2 \psi = 2G\alpha$

**Answer 2:**
b) $\nabla^2 \psi = -2G\alpha$ (This is the Poisson equation for the stress function).

**Question 3:**
According to the membrane analogy for torsion, the slope of the membrane is proportional to:
a) The shear stress.
b) The warping function.
c) The applied torque.
d) The angle of twist.

**Answer 3:**
a) The shear stress. (Specifically, the magnitude of the slope is proportional to the magnitude of the shear stress).

**Question 4:**
A solid bar with an elliptical cross-section has semi-major axis $a=40$ mm and semi-minor axis $b=20$ mm. If the shear modulus $G = 80$ GPa and the angle of twist per unit length $\alpha = 0.01$ rad/m, calculate:
(i) The torsional rigidity ($GJ$) of the bar.
(ii) The maximum shear stress ($\tau_{max}$).

**Solution 4:**
Given: $a = 40 \text{ mm} = 0.04 \text{ m}$, $b = 20 \text{ mm} = 0.02 \text{ m}$, $G = 80 \text{ GPa} = 80 \times 10^9 \text{ N/m}^2$, $\alpha = 0.01 \text{ rad/m}$.
Since $a > b$, the major axis is along the x-axis.

(i) Torsional rigidity ($GJ$):
$GJ = \frac{\pi a^3 b^3}{a^2 + b^2}$
$GJ = \frac{\pi (0.04)^3 (0.02)^3}{(0.04)^2 + (0.02)^2}$
$GJ = \frac{\pi (6.4 \times 10^{-5}) (8 \times 10^{-6})}{16 \times 10^{-4} + 4 \times 10^{-4}}$
$GJ = \frac{\pi (51.2 \times 10^{-11})}{20 \times 10^{-4}}$
$GJ = \frac{\pi \times 51.2 \times 10^{-7}}{20} = \pi \times 2.56 \times 10^{-7} \text{ Nm}^2$
$GJ \approx 8.04 \times 10^{-7} \text{ Nm}^2$

(ii) Maximum shear stress ($\tau_{max}$):
Since $a > b$, the maximum shear stress occurs at the ends of the minor axis $(0, \pm b)$.
$\tau_{max} = \frac{2G \alpha a^2 b}{a^2 + b^2}$
$\tau_{max} = \frac{2 \times (80 \times 10^9) \times (0.01) \times (0.04)^2 \times (0.02)}{(0.04)^2 + (0.02)^2}$
$\tau_{max} = \frac{2 \times 8 \times 10^8 \times (0.0016) \times (0.02)}{0.0016 + 0.0004}$
$\tau_{max} = \frac{1.6 \times 10^8 \times 0.000032}{0.0020}$
$\tau_{max} = \frac{5.12 \times 10^4}{0.0020} = 25.6 \times 10^6 \text{ N/m}^2 = 25.6 \text{ MPa}$

**Question 5:**
A bar with a square cross-section of side length $s$ is subjected to torsion. Compare its torsional rigidity to that of a circular bar of diameter $s$. (Hint: For a square cross-section, $GJ \approx 0.1406 s^4 G$, and maximum shear stress occurs at the midpoint of the sides).

**Solution 5:**
For a square cross-section of side $s$:
$GJ_{square} \approx 0.1406 s^4 G$

For a circular bar of diameter $s$, the radius is $R = s/2$.
The torsional rigidity of a circular bar is $GJ_{circle} = G J_{circle} = G \frac{\pi R^4}{2}$.
$GJ_{circle} = G \frac{\pi (s/2)^4}{2} = G \frac{\pi s^4}{16 \times 2} = G \frac{\pi s^4}{32}$.
$\frac{\pi}{32} \approx \frac{3.14159}{32} \approx 0.09817$.
So, $GJ_{circle} \approx 0.09817 s^4 G$.

Comparison:
$\frac{GJ_{square}}{GJ_{circle}} = \frac{0.1406 s^4 G}{0.09817 s^4 G} \approx \frac{0.1406}{0.09817} \approx 1.43$

The torsional rigidity of a square bar is approximately 43% higher than that of a circular bar of the same characteristic dimension (diameter = side length).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References:

*   **Timoshenko, S. P., & Goodier, J. N. (2009). *Theory of Elasticity*. McGraw-Hill Education.** (Chapter 12)
*   **Srinath, L. S. (2008). *Advanced Mechanics of Solids*. Tata McGraw Hill Publishing Company.** (Chapter 6)
*   **Kazimi, S. M. A. (2008). *Solid Mechanics*. McGraw Hill.** (Chapter 10)
*   **Jose, S. (2013). *Advanced Mechanics of Materials*. Pentagon Educational Services.** (Chapter 5)
*   **Sadd, M. H. (2012). *Elasticity: Theory, Applications and Numerics*. Academic Press.** (Chapter 8)
*   **Atkin, R. J., & Fox, N. (1980). *An Introduction to the Theory of Elasticity*. Longman.** (Chapter 7)

---