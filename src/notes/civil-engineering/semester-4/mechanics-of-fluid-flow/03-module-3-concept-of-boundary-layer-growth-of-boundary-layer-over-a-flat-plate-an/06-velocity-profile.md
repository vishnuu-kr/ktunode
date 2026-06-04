---
title: "velocity profile"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 3: Concept of Boundary Layer : Growth of boundary layer over a flat plate and definition of boundary layer thickness"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a79"
status: "completed"
scrapedAt: "2026-05-20T18:46:36.599Z"
---
# Mechanics of Fluid Flow: Module 3 - Concept of Boundary Layer

## Topic: Velocity Profile

This module delves into the concept of the boundary layer, a crucial phenomenon in fluid mechanics that significantly impacts flow behavior, especially over solid surfaces. We will focus on the growth of the boundary layer over a flat plate and define its thickness. Specifically, this topic will explore the **velocity profile** within this boundary layer.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the physical meaning of the velocity profile within a boundary layer.
*   Explain how the velocity profile changes from the surface of a flat plate outwards into the free stream.
*   Relate the velocity profile to the concept of shear stress within the boundary layer.
*   Appreciate the qualitative changes in the velocity profile as the boundary layer grows along a flat plate.

---

### 1. The Concept of the Boundary Layer

*   **Definition:** The boundary layer is a thin layer of fluid adjacent to a solid surface where the effects of viscosity are significant.
*   **Origin of the Concept:** Introduced by Ludwig Prandtl in 1904, the boundary layer theory revolutionized fluid mechanics by allowing the analysis of high Reynolds number flows (where viscosity is relatively small but not negligible).
*   **Viscous vs. Inviscid Flow:**
    *   **Outside the Boundary Layer:** The fluid is assumed to be inviscid (no viscosity), meaning there are no shear forces and the flow behaves according to potential flow theory. The fluid velocity here is uniform and equal to the free-stream velocity.
    *   **Inside the Boundary Layer:** The fluid is viscous. Due to the **no-slip condition**, the fluid velocity at the solid surface is zero. As you move away from the surface, the fluid velocity gradually increases until it reaches the free-stream velocity.
*   **Key Principle: No-Slip Condition:** A fundamental principle stating that a viscous fluid in direct contact with a solid surface will have zero velocity relative to that surface.

---

### 2. Velocity Profile within the Boundary Layer

The **velocity profile** describes how the fluid velocity varies with the distance from the solid surface within the boundary layer.

*   **General Characteristics:**
    *   At the surface ($y=0$), velocity ($u$) = 0 (due to the no-slip condition).
    *   As $y$ increases, $u$ increases.
    *   At the edge of the boundary layer ($\delta$), velocity ($u$) $\approx U_\infty$, where $U_\infty$ is the free-stream velocity.
*   **Visual Representation:** Imagine a flat plate aligned with the flow.
    *   At the leading edge, the boundary layer is very thin, and the velocity gradient from the surface to the free stream is steep.
    *   As the flow progresses along the plate, the boundary layer thickens, and the velocity gradient at the surface generally becomes less steep.

*   **Shear Stress and Velocity Gradient:**
    *   The velocity gradient ($du/dy$) is directly related to the shear stress ($\tau$) within the fluid through Newton's law of viscosity:
        $$ \tau = \mu \frac{du}{dy} $$
        where $\mu$ is the dynamic viscosity of the fluid.
    *   **At the Wall:** The velocity gradient is maximum at the wall ($y=0$), resulting in the maximum shear stress experienced by the fluid at the surface.
    *   **Outside the Boundary Layer:** The velocity gradient is zero ($du/dy = 0$), hence the shear stress is zero.

---

### 3. Growth of Boundary Layer over a Flat Plate

As fluid flows over a flat plate, the viscous effects propagate outwards from the surface, causing the boundary layer to grow in thickness.

*   **Leading Edge:** The boundary layer starts at the leading edge of the plate. Initially, it is very thin.
*   **Development of Velocity Profile:**
    *   At the leading edge, the velocity profile is very steep near the wall.
    *   As the flow moves downstream, the boundary layer thickness ($\delta$) increases. This means the region where the velocity is affected by viscosity expands.
    *   The velocity profile becomes "blunter" or more filled out as the boundary layer grows. The gradient at the wall may decrease, and the velocity approaches $U_\infty$ further away from the wall.

*   **Laminar vs. Turbulent Boundary Layers:**
    *   **Laminar Boundary Layer:** Characterized by smooth, orderly fluid motion. The velocity profile is typically parabolic or similar in shape (for simpler cases).
    *   **Turbulent Boundary Layer:** Characterized by chaotic, irregular fluid motion with eddies. The velocity profile is "fuller" or more "blunt" than a laminar profile, with a steeper velocity gradient at the wall and a more rapid approach to the free-stream velocity. This leads to higher skin friction drag.

---

### 4. Boundary Layer Thickness Definitions

While the velocity profile indicates that velocity gradually approaches $U_\infty$, it never theoretically reaches it. Therefore, we define boundary layer thickness by specific criteria.

*   **Displacement Thickness ($\delta^*$ or $\delta_1$):**
    *   **Concept:** The distance by which the external potential flow must be displaced outwards to compensate for the reduction in mass flow rate within the boundary layer due to viscosity.
    *   **Definition:** It represents the "deficit" in momentum caused by the slower-moving fluid within the boundary layer.
    *   **Formula:**
        $$ \delta^* = \int_0^\infty \left(1 - \frac{u}{U_\infty}\right) dy $$
    *   **Physical Meaning:** It's the thickness of the inviscid fluid layer that has the same momentum deficit as the viscous boundary layer.

*   **Momentum Thickness ($\theta$ or $\delta_2$):**
    *   **Concept:** The distance by which the external momentum flow must be displaced outwards to compensate for the reduction in momentum flow rate within the boundary layer.
    *   **Definition:** It represents the "deficit" in momentum flux within the boundary layer compared to the free stream.
    *   **Formula:**
        $$ \theta = \int_0^\infty \frac{u}{U_\infty} \left(1 - \frac{u}{U_\infty}\right) dy $$
    *   **Physical Meaning:** It's a measure of the momentum lost by the fluid in the boundary layer.

*   **Kinetic Energy Thickness ($\delta_3$):**
    *   **Concept:** The distance by which the external kinetic energy flow must be displaced outwards to compensate for the reduction in kinetic energy flow rate within the boundary layer.
    *   **Definition:** It represents the "deficit" in kinetic energy within the boundary layer.
    *   **Formula:**
        $$ \delta_3 = \int_0^\infty \frac{u}{U_\infty} \left(1 - \left(\frac{u}{U_\infty}\right)^2\right) dy $$
    *   **Physical Meaning:** It's a measure of the kinetic energy lost by the fluid in the boundary layer.

*   **"99% Boundary Layer Thickness" ($\delta$ or $\delta_{99}$):**
    *   **Concept:** A practical and commonly used definition for boundary layer thickness.
    *   **Definition:** The distance from the wall at which the fluid velocity $u$ reaches 99% of the free-stream velocity $U_\infty$.
    *   **Formula:**
        $$ \delta = \{y \mid u(y) = 0.99 U_\infty \} $$
    *   **Why 99%?** It's a convenient and commonly adopted convention that captures most of the significant viscous effects without being overly sensitive to the exact asymptotic behavior of the profile.

**Relationship between thicknesses:** For a typical boundary layer profile, $\delta^* > \theta$. The exact relationships depend on the specific velocity profile shape. For example, for a laminar boundary layer over a flat plate, $\delta^* \approx 1.72 \theta$ and $\delta_{99} \approx 3.93 \theta$.

---

### 5. Examples and Visualizations

*   **Example 1: Velocity Profile Shape**
    Imagine a flat plate with free-stream velocity $U_\infty = 10$ m/s.
    *   At $y=0$ (on the wall), $u=0$ m/s.
    *   At $y=1$ mm, if the boundary layer thickness is 5 mm, the velocity might be $u=5$ m/s.
    *   At $y=4$ mm, the velocity might be $u=9$ m/s.
    *   At $y=5$ mm (edge of boundary layer), $u \approx 10$ m/s.

    The plot of $u$ vs. $y$ would show a curve starting at zero and rising towards $U_\infty$.

*   **Example 2: Laminar vs. Turbulent Profiles**
    Consider a laminar boundary layer and a turbulent boundary layer at the same downstream location on a flat plate.
    *   **Laminar:** Smoother curve, might be approximated by a parabolic profile (e.g., $u/U_\infty = 2(y/\delta) - (y/\delta)^2$).
    *   **Turbulent:** Fuller profile, with a steeper initial slope near the wall and reaching $U_\infty$ much closer to the wall. The profile is often approximated by a power law (e.g., $u/U_\infty = (y/\delta)^{1/7}$).

---

### 6. Key Points to Remember

*   The boundary layer is a region of significant viscous effects near a solid surface.
*   The **no-slip condition** is fundamental: fluid velocity is zero at the surface.
*   The **velocity profile** describes $u(y)$, the variation of velocity with distance $y$ from the surface.
*   Shear stress is directly proportional to the velocity gradient ($du/dy$).
*   The boundary layer **thickens** as it grows along the surface.
*   Boundary layer thickness is defined by conventions like the **99% criterion**, **displacement thickness**, and **momentum thickness**.
*   Turbulent boundary layer profiles are "fuller" and have higher wall shear stress than laminar profiles.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the fundamental principle that dictates the fluid velocity at the surface of a flat plate in contact with a viscous fluid?

**Question 2:**
Describe the general trend of the velocity profile within a boundary layer over a flat plate as you move from the surface outwards into the free stream.

**Question 3:**
If the velocity profile within a boundary layer is approximated by $u(y) = U_\infty (y/\delta)^n$, where $n$ is a positive constant, what does this imply about the velocity gradient $du/dy$ at the wall ($y=0$)?

**Question 4:**
Define the "99% boundary layer thickness."

**Question 5:**
How does the velocity profile of a turbulent boundary layer generally differ from that of a laminar boundary layer at the same downstream location on a flat plate?

---

### Answers to Practice Questions

**Answer 1:**
The fundamental principle is the **no-slip condition**, which states that the fluid velocity at the surface of the plate is zero relative to the plate itself.

**Answer 2:**
The velocity starts at zero at the surface (due to the no-slip condition) and gradually increases as you move away from the surface. It approaches the free-stream velocity ($U_\infty$) at the outer edge of the boundary layer.

**Answer 3:**
If $u(y) = U_\infty (y/\delta)^n$ and $n > 0$, then $du/dy = U_\infty (n/\delta) (y/\delta)^{n-1}$.
*   If $n=1$, $du/dy = U_\infty / \delta$, which is a constant gradient (linear profile).
*   If $n>1$ (e.g., $n=2$ for a parabolic profile), then as $y \to 0$, $(y/\delta)^{n-1} \to 0$, so the velocity gradient $du/dy$ at the wall is zero.
*   If $0 < n < 1$ (e.g., $n=1/7$ for a turbulent profile), then as $y \to 0$, $(y/\delta)^{n-1} \to \infty$ (since $n-1$ is negative), meaning the velocity gradient $du/dy$ at the wall is infinitely steep.
In summary, for most common profiles (n>1 or n<1), the gradient is **not necessarily non-zero and constant** at the wall; it depends on the specific exponent 'n'. For the typical parabolic or power-law profiles used to approximate boundary layers, the gradient at the wall is either zero ($n>1$) or very steep ($n<1$).

**Answer 4:**
The "99% boundary layer thickness" ($\delta_{99}$) is defined as the distance $y$ from the solid surface where the fluid velocity $u$ reaches 99% of the free-stream velocity $U_\infty$. Mathematically, it's the value of $y$ for which $u(y) = 0.99 U_\infty$.

**Answer 5:**
The velocity profile of a turbulent boundary layer is generally "fuller" or more "blunt" than that of a laminar boundary layer at the same downstream location. This means that in a turbulent boundary layer, the velocity reaches a higher fraction of the free-stream velocity much closer to the wall. Consequently, turbulent boundary layers have a steeper velocity gradient at the wall, leading to higher skin friction drag.
