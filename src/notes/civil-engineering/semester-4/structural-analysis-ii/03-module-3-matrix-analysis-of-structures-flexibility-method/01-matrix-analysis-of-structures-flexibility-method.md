---
title: "Matrix analysis of structures: Flexibility method:"
subject: "STRUCTURAL ANALYSIS - II"
module: "Module 3: Matrix analysis of structures: Flexibility method:"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81099f"
status: "completed"
scrapedAt: "2026-05-20T18:47:11.085Z"
---
# STRUCTURAL ANALYSIS - II: Module 3 - Matrix Analysis of Structures: Flexibility Method

## 1. Introduction to Matrix Analysis of Structures

Matrix analysis provides a systematic and computational approach to analyzing indeterminate structures. It leverages matrix algebra to solve complex systems of equations arising from structural behavior. The flexibility method is one of the fundamental matrix methods.

**Key Concepts:**

*   **Indeterminate Structures:** Structures with more supports or constraints than required to maintain equilibrium, leading to redundant forces or moments.
*   **Degree of Indeterminacy (DOI):** The number of independent redundant forces or moments that need to be determined.
*   **Matrix Algebra:** The mathematical foundation for matrix analysis, involving operations on matrices like addition, subtraction, multiplication, and inversion.
*   **System of Equations:** The behavior of a structure under load can be represented by a set of linear equations relating forces, displacements, and material properties.

## 2. The Flexibility Method: Fundamentals

The flexibility method, also known as the force method, focuses on the equilibrium of the structure and the compatibility of displacements. It is based on expressing the unknown redundant forces in terms of the known applied loads and the resulting displacements.

**Key Concepts:**

*   **Primary Structure:** A stable and statically determinate structure obtained by removing the redundant supports or forces from the indeterminate structure.
*   **Redundant Forces/Moments:** The forces or moments that are removed to create the primary structure. These are the unknowns to be solved for.
*   **Flexibility Coefficients ($f_{ij}$):** The displacement or rotation at a specific point '$i$' due to a unit value of the redundant force or moment at point '$j$', assuming all other redundant forces are zero.
*   **Compatibility Equations:** Equations that express the fact that the displacements or rotations at points where constraints are removed must be zero in the original indeterminate structure.
*   **Superposition:** The total displacement at any point in a structure is the sum of the displacements caused by individual loads and redundant forces.

**Mathematical Formulation:**

The core of the flexibility method can be expressed in matrix form:

**$\Delta = F \cdot X$**

Where:

*   **$\Delta$ (Delta):** A column matrix representing the known displacements (usually zero) at the points where redundant forces are removed. This is the matrix of force-induced displacements in the primary structure due to applied loads.
*   **$F$ (Flexibility Matrix):** A square matrix where each element $f_{ij}$ represents the flexibility coefficient. $f_{ij}$ is the displacement at degree of freedom $i$ due to a unit value of the redundant force at degree of freedom $j$.
*   **$X$ (Force Matrix):** A column matrix representing the unknown redundant forces or moments.

**The Compatibility Condition:**

For the redundant forces to satisfy the original constraints (which were removed to form the primary structure), the total displacement at these points must be zero.

**$\Delta_{total} = \Delta_{applied} + \Delta_{redundant} = 0$**

Using the flexibility relationship:

**$\Delta_{applied}$:** The displacement at the points of redundant removal due to the applied loads on the primary structure.
**$\Delta_{redundant} = F \cdot X$:** The displacement at the points of redundant removal due to the unknown redundant forces.

Therefore, the compatibility equation in matrix form becomes:

**$\Delta_{applied} + F \cdot X = 0$**

Rearranging to solve for $X$:

**$F \cdot X = -\Delta_{applied}$**

If we can calculate the flexibility matrix $F$ and the displacement vector $\Delta_{applied}$, we can solve for the unknown redundant forces $X$.

**Solving for $X$:**

To isolate $X$, we need to find the inverse of the flexibility matrix, $F^{-1}$.

**$X = -F^{-1} \cdot \Delta_{applied}$**

This equation allows us to calculate the values of the redundant forces. Once the redundant forces are known, the structure is determinate, and internal forces (axial, shear, moment) can be calculated for any section.

---

## 3. Steps Involved in the Flexibility Method

1.  **Identify Redundants:** Determine the degree of indeterminacy (DOI) of the structure. Select a set of independent redundant forces or moments (e.g., reactions, internal moments/forces).
2.  **Form the Primary Structure:** Render the indeterminate structure statically determinate by removing the selected redundants. This primary structure must be stable.
3.  **Calculate Flexibility Coefficients ($f_{ij}$):**
    *   For each redundant force $X_j$, apply a unit value of that force ($X_j = 1$) to the primary structure.
    *   Calculate the displacement or rotation at the location and in the direction of each redundant force $X_i$ due to this unit load. This value is $f_{ij}$.
    *   Use methods like the unit load method, virtual work, or Castigliano's theorem to calculate these displacements.
    *   Assemble these coefficients into the flexibility matrix $F$. The matrix $F$ will be symmetric ($f_{ij} = f_{ji}$).
4.  **Calculate Displacements due to Applied Loads ($\Delta_{applied}$):**
    *   Apply the actual external loads to the primary structure.
    *   Calculate the displacement or rotation at the location and in the direction of each redundant force due to these applied loads. This forms the $\Delta_{applied}$ matrix.
5.  **Formulate Compatibility Equations:** Write the compatibility equations in matrix form: $F \cdot X = -\Delta_{applied}$.
6.  **Solve for Redundants ($X$):** Calculate the inverse of the flexibility matrix ($F^{-1}$) and multiply it by $-\Delta_{applied}$ to find the values of the unknown redundant forces: $X = -F^{-1} \cdot \Delta_{applied}$.
7.  **Calculate Final Internal Forces/Moments:** Once the redundant forces are known, the indeterminate structure becomes determinate. Use equilibrium equations to calculate internal forces (axial force, shear force, bending moment) and reactions for the original structure.

---

## 4. Calculating Flexibility Coefficients ($f_{ij}$)

The most common method for calculating flexibility coefficients is the **Unit Load Method (Virtual Work Method)**.

**Principle of Virtual Work:** The external virtual work done by virtual forces equals the internal virtual work done by internal forces.

**For Displacements:**

$\delta = \int \frac{M_1 M_v}{EI} dx$ (for bending)
$\delta = \int \frac{N_1 N_v}{AE} dx$ (for axial force)
$\delta = \int \frac{V_1 V_v}{GA} dx$ (for shear)

Where:
*   $\delta$: Displacement at a point.
*   $M_1, N_1, V_1$: Moments, axial forces, shear forces due to the actual loads.
*   $M_v, N_v, V_v$: Moments, axial forces, shear forces due to a virtual unit load applied at the point where displacement is to be calculated and in the direction of that displacement.

**Steps for $f_{ij}$ calculation using Unit Load Method:**

1.  To find $f_{ij}$ (displacement at $i$ due to unit redundant force at $j$):
    *   Apply a unit value of the redundant force at location $j$ in the primary structure.
    *   Calculate the internal forces (moments $m_j$, axial forces $n_j$, shear forces $v_j$) in the primary structure due to this unit force.
    *   Apply a virtual unit load at location $i$ in the primary structure, in the direction of the redundant force at $i$.
    *   Calculate the virtual internal forces (moments $m_v$, axial forces $n_v$, shear forces $v_v$) in the primary structure due to this virtual unit load.
    *   Calculate $f_{ij}$ using the appropriate integral formula, considering the effect of axial, shear, and bending. For typical beam problems where bending is dominant: $f_{ij} = \int \frac{m_j m_v}{EI} dx$.

**Example: Calculating $f_{11}$ for a Simply Supported Beam with an Internal Hinge Support as Redundant**

Consider a propped cantilever beam with a fixed support at A and a roller support at B. Let's make it statically determinate by removing the reaction at B ($R_B$). $R_B$ is our redundant, $X_1$. The primary structure is a cantilever fixed at A, with a downward force $R_B$ applied at B.

*   **To find $f_{11}$:**
    *   Apply a unit upward force at B ($X_1 = 1$) to the cantilever.
    *   Calculate the internal moments in the cantilever due to this unit force. Let's call these $m_1$.
    *   Apply a virtual unit upward force at B, in the direction of $R_B$.
    *   Calculate the virtual internal moments in the cantilever due to this virtual unit force. Let's call these $m_v$.
    *   $f_{11} = \int_{0}^{L} \frac{m_1 m_v}{EI} dx$.

**Example: Calculating $f_{12}$ for a Continuous Beam with Two Redundant Reactions**

Consider a two-span continuous beam with supports at A, B, and C. Let's remove the vertical reaction at B ($R_B$) and the vertical reaction at C ($R_C$) as our redundants. So, $X_1 = R_B$ and $X_2 = R_C$. The primary structure is a simply supported beam spanning from A to C, with applied loads.

*   **To find $f_{11}$:**
    *   Apply a unit upward force at B ($X_1 = 1$) to the simply supported beam (A to C).
    *   Calculate the internal moments in the beam due to this unit force. Let's call these $m_1$.
    *   Apply a virtual unit upward force at B, in the direction of $R_B$.
    *   Calculate the virtual internal moments in the beam due to this virtual unit force. Let's call these $m_{v1}$.
    *   $f_{11} = \int \frac{m_{X1} m_{v1}}{EI} dx$.

*   **To find $f_{12}$:**
    *   Apply a unit upward force at C ($X_2 = 1$) to the simply supported beam (A to C).
    *   Calculate the internal moments in the beam due to this unit force. Let's call these $m_2$.
    *   Apply a virtual unit upward force at B, in the direction of $R_B$.
    *   Calculate the virtual internal moments in the beam due to this virtual unit force. Let's call these $m_{v1}$.
    *   $f_{12} = \int \frac{m_{X2} m_{v1}}{EI} dx$.

Note that $f_{21} = f_{12}$ due to Maxwell's reciprocal theorem.

---

## 5. Calculating Displacements due to Applied Loads ($\Delta_{applied}$)

This step involves analyzing the primary structure under the action of the actual external loads. Again, the **Unit Load Method** is a powerful tool.

**Steps for $\Delta_{applied}$ calculation using Unit Load Method:**

1.  To find $\Delta_{applied, i}$ (displacement at location $i$ due to applied loads):
    *   Apply the actual external loads to the primary structure.
    *   Calculate the internal forces (moments $M$, axial forces $N$, shear forces $V$) in the primary structure due to these applied loads.
    *   Apply a virtual unit load at location $i$ in the primary structure, in the direction of the redundant force at $i$.
    *   Calculate the virtual internal forces (moments $m_v$, axial forces $n_v$, shear forces $v_v$) in the primary structure due to this virtual unit load.
    *   Calculate $\Delta_{applied, i}$ using the appropriate integral formula: $\Delta_{applied, i} = \int \frac{M m_v}{EI} dx$.

---

## 6. Examples of Flexibility Method Application

**Example 1: Propped Cantilever Beam**

Consider a propped cantilever beam of length $L$, fixed at A and supported by a roller at B. A point load $W$ is applied at mid-span.

*   **Degree of Indeterminacy:** A propped cantilever has one redundant reaction. Let's remove the roller support at B.
*   **Primary Structure:** A cantilever beam fixed at A, with a roller support at B carrying an unknown vertical reaction $R_B$ ($X_1 = R_B$).
*   **Flexibility Matrix $F$:**
    *   To find $f_{11}$: Apply a unit upward force at B to the cantilever. The deflection at B due to a unit force at B is $f_{11} = L^3 / (3EI)$.
    *   $F = [L^3 / (3EI)]$.
*   **Displacements due to Applied Load ($\Delta_{applied}$):**
    *   Apply the load $W$ at mid-span to the cantilever.
    *   The deflection at B due to load $W$ at mid-span is $\Delta_{applied, 1} = WL^3 / (48EI)$ (downwards).
    *   Since the redundant is an upward reaction at B, the displacement in the direction of the redundant is also downwards. So, $\Delta_{applied} = [WL^3 / (48EI)]$.
*   **Compatibility Equation:** $F \cdot X = -\Delta_{applied}$
    *   $[L^3 / (3EI)] \cdot [R_B] = -[WL^3 / (48EI)]$
*   **Solve for $R_B$:**
    *   $R_B = -\frac{WL^3}{48EI} \cdot \frac{3EI}{L^3} = -\frac{W}{16}$.
    *   Wait, the sign is wrong. Let's be careful with signs.
    *   If we define the redundant $X_1$ as an *upward* force at B. Then $\Delta_{applied, 1}$ is the *downward* deflection at B due to $W$. So, $\Delta_{applied} = [-WL^3 / (48EI)]$.
    *   $F \cdot X = \Delta_{applied}$ (We set the compatibility to be that the deflection at B is zero).
    *   $f_{11} X_1 + \Delta_{applied, 1} = 0$
    *   $(L^3/3EI) R_B + (-WL^3/48EI) = 0$
    *   $(L^3/3EI) R_B = WL^3/48EI$
    *   $R_B = (WL^3/48EI) \cdot (3EI/L^3) = 3W/16$.
    *   The upward reaction at B is $3W/16$.

**Example 2: Continuous Beam (Two Spans)**

Consider a two-span continuous beam ABC, with supports at A, B, and C. Span AB = $L$, Span BC = $L$. A point load $W$ is applied at the mid-span of AB. Supports A and C are simple supports. Support B is also a simple support but it provides indeterminacy. Let's remove the vertical reaction at B ($R_B$) as the redundant. $X_1 = R_B$.

*   **Primary Structure:** Simply supported beam AC with load $W$ at mid-span of AB.
*   **Degree of Indeterminacy:** 1 (redundant reaction $R_B$).
*   **Flexibility Matrix $F$:**
    *   To find $f_{11}$: Apply a unit upward force at B to the simply supported beam AC.
        *   This unit force causes a deflection at B given by $f_{11}$. Using virtual work, the deflection at B due to a unit force at B is $f_{11} = \frac{1}{EI} \int_0^L M_{unit} \bar{M} dx$. For a simply supported beam, the moment due to a unit load at mid-span ($x=L/2$) is $M_{unit}(x) = (1/2)x$ for $0 \le x \le L/2$ and $M_{unit}(x) = (1/2)(L-x)$ for $L/2 \le x \le L$. The deflection at B is $f_{11} = \frac{1}{EI} \int_0^L M_{unit}^2 dx$. This integral is tedious. A known formula for deflection at the support of a simply supported beam due to a unit load at the center is $2L^3 / (3EI)$. So, $f_{11} = 2L^3 / (3EI)$. *Correction: This is the deflection at the span center. For deflection at a support B due to a unit load at B, it's not that simple. We need to be precise.*

        *Let's use a standard result for deflection at any point '$x$' in a simply supported beam due to a unit load at '$a$': $\delta(x) = \frac{1}{EI} \frac{a(L-x)}{6L} [2La - (a^2+x^2)]$ for $a \le x$.
        For $f_{11}$, we need deflection at B ($x=L$) due to unit load at B ($a=L$). This becomes tricky.
        A better way is to use Maxwell's reciprocal theorem or directly calculate the moment.
        If we apply a unit force at B, the structure behaves like two cantilevers from A to B and B to C, with an internal hinge at B.
        Let's reconsider. The primary structure is a simply supported beam AC. We remove $R_B$.
        To find $f_{11}$: apply unit upward force at B.
        For the segment AB (0 to L): moment due to unit force at B is $M_{AB} = (1)x$. Virtual moment due to unit force at B is $m_{AB} = (1)x$.
        For the segment BC (0 to L, measured from C): moment due to unit force at B is $M_{BC} = (1)(L-x')$ where $x'$ is distance from C. Virtual moment due to unit force at B is $m_{BC} = (1)(L-x')$.
        The deflection at B due to unit force at B is $f_{11} = \frac{1}{EI} \int_0^L M_{AB} m_{AB} dx + \frac{1}{EI} \int_0^L M_{BC} m_{BC} dx$.
        This is for a continuous beam, not just a simply supported beam.
        Let's analyze the deflection at B due to a unit load at B more carefully.
        When a unit load is applied at B, the beam bends. The deflection at B is $f_{11}$.
        Consider the beam AC simply supported. If we place a unit load at B, what is the deflection at B?
        This is often calculated by treating the beam as two cantilevers from A and C meeting at B.
        Deflection at B due to unit load at B:
        For span AB: unit load at B causes moment $(x)$ in AB.
        For span BC: unit load at B causes moment $(L-x')$ in BC.
        $f_{11} = \frac{1}{EI} \int_0^L x \cdot x dx + \frac{1}{EI} \int_0^L (L-x') \cdot (L-x') dx'$
        $f_{11} = \frac{1}{EI} [\frac{x^3}{3}]_0^L + \frac{1}{EI} [\frac{(L-x')^3}{-3}]_0^L = \frac{L^3}{3EI} + \frac{L^3}{3EI} = \frac{2L^3}{3EI}$. This is the deflection at the end of a cantilever of length L due to a load at the end. But here we have a simply supported beam.

        Let's use the virtual work for deflection at B due to a unit load at B on a simply supported beam AC.
        Apply a unit load at B (where $R_B$ was removed). Calculate moments $m_1$.
        Apply a virtual unit load at B (in the direction of $R_B$). Calculate virtual moments $m_{v1}$.
        $f_{11} = \int \frac{m_1 m_{v1}}{EI} dx$.
        Consider span AB:
        Unit load at B on simply supported beam AC: $R_A = 1/2$, $R_C = 1/2$.
        Moment $m_1(x)$ in AB (from A): $m_1(x) = (1/2)x$.
        Virtual unit load at B: $m_{v1}(x) = (1/2)x$.
        Integral over AB: $\int_0^L \frac{(1/2)x \cdot (1/2)x}{EI} dx = \frac{1}{4EI} \int_0^L x^2 dx = \frac{1}{4EI} [\frac{x^3}{3}]_0^L = \frac{L^3}{12EI}$.
        Same integral over BC (measuring $x'$ from C): $\int_0^L \frac{(1/2)x' \cdot (1/2)x'}{EI} dx' = \frac{L^3}{12EI}$.
        So, $f_{11} = \frac{L^3}{12EI} + \frac{L^3}{12EI} = \frac{2L^3}{12EI} = \frac{L^3}{6EI}$.

*   **Displacements due to Applied Load ($\Delta_{applied}$):**
    *   Apply load $W$ at mid-span of AB (at $x=L/2$).
    *   Calculate the deflection at B due to this load. This is $\Delta_{applied, 1}$.
    *   For a simply supported beam with load $W$ at mid-span, the deflection at mid-span is $WL^3/(48EI)$.
    *   To find the deflection at B, we need to apply a virtual unit load at B.
    *   Virtual unit load at B: $m_{v1}(x) = (1/2)x$ in AB, $m_{v1}(x') = (1/2)x'$ in BC.
    *   Actual moments $M(x)$ in AB due to load $W$ at $L/2$: $M(x) = Wx/2$ for $0 \le x \le L/2$ and $M(x) = W(L-x)/2$ for $L/2 \le x \le L$.
    *   $\Delta_{applied, 1} = \int_0^L \frac{M(x) m_{v1}(x)}{EI} dx$.
    *   Consider span AB (0 to L): $M(x)$ is $Wx/2$ from 0 to $L/2$, and $W(L-x)/2$ from $L/2$ to $L$. $m_{v1}(x)$ is $(1/2)x$.
    *   $\int_0^{L/2} \frac{(Wx/2)(x/2)}{EI} dx + \int_{L/2}^L \frac{W(L-x)/2 \cdot (x/2)}{EI} dx$
    *   $= \frac{W}{4EI} \int_0^{L/2} x^2 dx + \frac{W}{4EI} \int_{L/2}^L (Lx - x^2) dx$
    *   $= \frac{W}{4EI} [\frac{x^3}{3}]_0^{L/2} + \frac{W}{4EI} [\frac{Lx^2}{2} - \frac{x^3}{3}]_{L/2}^L$
    *   $= \frac{W}{4EI} (\frac{L^3}{24}) + \frac{W}{4EI} [(\frac{L^3}{2} - \frac{L^3}{3}) - (\frac{L(L^2)}{8} - \frac{L^3}{24})]$
    *   $= \frac{WL^3}{96EI} + \frac{W}{4EI} [\frac{L^3}{6} - (\frac{3L^3}{24} - \frac{L^3}{24})] = \frac{WL^3}{96EI} + \frac{W}{4EI} [\frac{L^3}{6} - \frac{2L^3}{24}] = \frac{WL^3}{96EI} + \frac{W}{4EI} [\frac{L^3}{6} - \frac{L^3}{12}]$
    *   $= \frac{WL^3}{96EI} + \frac{W}{4EI} (\frac{L^3}{12}) = \frac{WL^3}{96EI} + \frac{WL^3}{48EI} = \frac{3WL^3}{96EI} = \frac{WL^3}{32EI}$.
    *   The integral over BC (from C) will be the same if the load was at mid-span of BC. Since the load is at mid-span of AB, we need to be careful.
    *   Let's re-evaluate the moment calculation. Load $W$ at $L/2$.
        $R_A = W/2$, $R_C = W/2$.
        Moment in AB (from A): $M(x) = (W/2)x$ for $0 \le x \le L/2$.
        Moment in AB (from A): $M(x) = (W/2)x - W(x-L/2) = (W/2)x - Wx + WL/2 = WL/2 - Wx/2$ for $L/2 \le x \le L$.
        Virtual moment $m_{v1}(x)$ in AB (from A) due to unit load at B: $m_{v1}(x) = (1/2)x$.
        Integral over AB:
        $\int_0^{L/2} \frac{(Wx/2)(x/2)}{EI} dx + \int_{L/2}^L \frac{(WL/2 - Wx/2)(x/2)}{EI} dx$
        $= \frac{W}{4EI} \int_0^{L/2} x^2 dx + \frac{W}{4EI} \int_{L/2}^L (Lx - x^2) dx$
        $= \frac{W}{4EI} [\frac{x^3}{3}]_0^{L/2} + \frac{W}{4EI} [\frac{Lx^2}{2} - \frac{x^3}{3}]_{L/2}^L$
        $= \frac{W}{4EI} \frac{L^3}{24} + \frac{W}{4EI} [(\frac{L^3}{2} - \frac{L^3}{3}) - (\frac{L^3}{8} - \frac{L^3}{24})]$
        $= \frac{WL^3}{96EI} + \frac{W}{4EI} [\frac{L^3}{6} - \frac{2L^3}{24}] = \frac{WL^3}{96EI} + \frac{W}{4EI} [\frac{L^3}{6} - \frac{L^3}{12}]$
        $= \frac{WL^3}{96EI} + \frac{W}{4EI} \frac{L^3}{12} = \frac{WL^3}{96EI} + \frac{WL^3}{48EI} = \frac{3WL^3}{96EI} = \frac{WL^3}{32EI}$.

        Now for span BC (from C, $x'$ is distance from C):
        Moment in BC: $M(x') = (W/2)(L-x')$.
        Virtual moment $m_{v1}(x')$ in BC (from C) due to unit load at B: $m_{v1}(x') = (1/2)(L-x')$.
        Integral over BC:
        $\int_0^L \frac{(W/2)(L-x') \cdot (1/2)(L-x')}{EI} dx' = \frac{W}{4EI} \int_0^L (L-x')^2 dx'$
        Let $u = L-x'$, $du = -dx'$. When $x'=0, u=L$. When $x'=L, u=0$.
        $= \frac{W}{4EI} \int_L^0 u^2 (-du) = \frac{W}{4EI} \int_0^L u^2 du = \frac{W}{4EI} [\frac{u^3}{3}]_0^L = \frac{WL^3}{12EI}$.

        So, $\Delta_{applied, 1} = \frac{WL^3}{32EI} + \frac{WL^3}{12EI} = (\frac{1}{32} + \frac{1}{12}) \frac{WL^3}{EI} = (\frac{3+8}{96}) \frac{WL^3}{EI} = \frac{11WL^3}{96EI}$.

*   **Compatibility Equation:** $f_{11} X_1 + \Delta_{applied, 1} = 0$
    *   $(\frac{L^3}{6EI}) R_B + (\frac{11WL^3}{96EI}) = 0$
    *   $(\frac{L^3}{6EI}) R_B = -\frac{11WL^3}{96EI}$
    *   $R_B = -\frac{11WL^3}{96EI} \cdot \frac{6EI}{L^3} = -\frac{66W}{96} = -\frac{11W}{16}$.

    This means the reaction at B is $11W/16$ downwards. The convention for the direction of the redundant force is important. If $X_1$ was defined as an upward force, then the equation is $f_{11} X_1 = -\Delta_{applied, 1}$. The downward deflection is a negative displacement in the upward direction of the redundant.
    So $R_B$ is $11W/16$ downwards.

*   **Final Reactions:**
    *   From equilibrium of the whole beam: $R_A + R_B + R_C = W$.
    *   With $R_B = -11W/16$: $R_A + (-11W/16) + R_C = W$.
    *   Consider moment about A: $R_B \cdot L + R_C \cdot 2L - W \cdot (L/2) = 0$.
    *   $(-11W/16) \cdot L + R_C \cdot 2L - WL/2 = 0$.
    *   $R_C \cdot 2L = WL/2 + 11WL/16 = (8WL + 11WL)/16 = 19WL/16$.
    *   $R_C = \frac{19WL}{32L} = \frac{19W}{32}$.
    *   $R_A = W - R_B - R_C = W - (-11W/16) - 19W/32 = W + 11W/16 - 19W/32 = (32W + 22W - 19W)/32 = 35W/32$.

---

## 7. Advantages and Disadvantages of the Flexibility Method

**Advantages:**

*   **Conceptually straightforward:** Based on fundamental principles of equilibrium and compatibility.
*   **Direct calculation of forces:** The primary unknowns solved for are forces, which are often of direct interest.
*   **Good for structures with few redundancies:** Becomes efficient when the degree of indeterminacy is low.
*   **Can handle varying cross-sections and loads easily:** The integral formulation is flexible.
*   **Can be applied to handle support settlements and temperature effects:** These are treated as known displacements.

**Disadvantages:**

*   **Cumbersome for structures with high indeterminacy:** The size of the flexibility matrix ($n \times n$, where $n$ is DOI) grows rapidly, and matrix inversion becomes computationally intensive.
*   **Calculation of flexibility coefficients can be tedious:** Especially for complex structures or when bending, shear, and axial effects are all significant.
*   **Relies on accurate calculation of displacements:** Errors in displacement calculations propagate to the final force results.
*   **Not as direct for displacement calculations:** While displacements can be found once forces are known, the method's primary focus is on forces.

---

## 8. Applications

The flexibility method is suitable for analyzing:

*   Continuous beams
*   Rigid frames (especially with few bays and stories)
*   Trusses (though stiffness method is usually preferred)
*   Structures with support settlements, initial strains, or temperature changes.

---

## 9. Practice Questions

**Question 1:**
A propped cantilever beam of length $L$ is fixed at A and simply supported at B. A concentrated moment $M_0$ is applied at mid-span. Using the flexibility method, determine the vertical reaction at B. Assume uniform flexural rigidity $EI$.

**Question 2:**
A continuous beam is supported at A, B, and C, with AB = BC = $L$. Support A and C are simple supports, and B is a roller. A uniform distributed load of intensity $w$ acts over the entire beam. If the vertical reaction at B is taken as the redundant, determine the value of this reaction using the flexibility method. Assume uniform flexural rigidity $EI$.

**Question 3:**
For the continuous beam in Question 2, if the support at B settles by an amount $\delta_s$ downwards, how would you modify the flexibility method approach to determine the reactions?

---

## 10. Answers to Practice Questions

**Answer 1:**

*   **Redundant:** Vertical reaction at B, $R_B$.
*   **Primary Structure:** Cantilever beam fixed at A, with force $R_B$ acting upwards at B.
*   **Flexibility Coefficient $f_{11}$:** The deflection at B due to a unit upward force at B on the cantilever. This is $L^3/(3EI)$.
*   **Displacement due to Load $\Delta_{applied, 1}$:** The deflection at B due to moment $M_0$ at mid-span. The deflection at the end of a cantilever due to a moment $M_0$ at mid-span is $3M_0L/(2EI)$ (downwards). So, $\Delta_{applied, 1} = -3M_0L/(2EI)$ (negative as it is downwards).
*   **Compatibility:** $f_{11} R_B + \Delta_{applied, 1} = 0$
    $\frac{L^3}{3EI} R_B - \frac{3M_0L}{2EI} = 0$
    $\frac{L^3}{3EI} R_B = \frac{3M_0L}{2EI}$
    $R_B = \frac{3M_0L}{2EI} \cdot \frac{3EI}{L^3} = \frac{9M_0}{2L}$.
    The reaction $R_B$ is upwards.

**Answer 2:**

*   **Redundant:** Vertical reaction at B, $R_B$.
*   **Primary Structure:** Simply supported beam AC, with support B carrying an unknown upward force $R_B$.
*   **Flexibility Coefficient $f_{11}$:** The deflection at B due to a unit upward force at B on the simply supported beam AC. As calculated in the example, $f_{11} = L^3/(6EI)$.
*   **Displacement due to Load $\Delta_{applied, 1}$:** The deflection at B due to the UDL $w$ over the beam.
    *   We need to apply a virtual unit load at B and calculate the moments $m_{v1}$ in the primary structure.
    *   $m_{v1}(x) = (1/2)x$ for AB and $m_{v1}(x') = (1/2)x'$ for BC (from C).
    *   Actual moments $M(x)$ due to UDL $w$:
        *   In AB (from A): $R_A = wL$. $M(x) = R_A x - wx^2/2 = wLx - wx^2/2$.
        *   In BC (from C): $R_C = wL$. $M(x') = R_C x' - wx'^2/2 = wLx' - wx'^2/2$.
    *   $\Delta_{applied, 1} = \int_0^L \frac{M(x) m_{v1}(x)}{EI} dx + \int_0^L \frac{M(x') m_{v1}(x')}{EI} dx'$
    *   Span AB: $\int_0^L \frac{(wLx - wx^2/2)(x/2)}{EI} dx = \frac{w}{2EI} \int_0^L (Lx^2 - x^3/2) dx$
        $= \frac{w}{2EI} [\frac{Lx^3}{3} - \frac{x^4}{8}]_0^L = \frac{w}{2EI} (\frac{L^4}{3} - \frac{L^4}{8}) = \frac{w}{2EI} (\frac{8L^4 - 3L^4}{24}) = \frac{w}{2EI} \frac{5L^4}{24} = \frac{5wL^4}{48EI}$.
    *   Span BC: Same integral, so $\frac{5wL^4}{48EI}$.
    *   $\Delta_{applied, 1} = \frac{5wL^4}{48EI} + \frac{5wL^4}{48EI} = \frac{10wL^4}{48EI} = \frac{5wL^4}{24EI}$.
*   **Compatibility:** $f_{11} R_B + \Delta_{applied, 1} = 0$
    $\frac{L^3}{6EI} R_B + \frac{5wL^4}{24EI} = 0$
    $\frac{L^3}{6EI} R_B = -\frac{5wL^4}{24EI}$
    $R_B = -\frac{5wL^4}{24EI} \cdot \frac{6EI}{L^3} = -\frac{30wL}{24} = -\frac{5wL}{4}$.
    The reaction at B is $5wL/4$ downwards.

**Answer 3:**

If support B settles by $\delta_s$ downwards, the compatibility equation needs to be modified. The condition is that the total displacement at B (due to applied loads AND the redundant reaction $R_B$) must be equal to the settlement $\delta_s$.

The equation becomes:
$f_{11} R_B + \Delta_{applied, 1} = \delta_s$

Where:
*   $f_{11}$: Flexibility coefficient at B due to unit load at B ($L^3/(6EI)$ for the continuous beam).
*   $R_B$: The unknown redundant reaction (taken as upward).
*   $\Delta_{applied, 1}$: The deflection at B due to the UDL $w$ on the primary structure ($5wL^4/(24EI)$ downwards).
*   $\delta_s$: The known settlement at B (downwards).

So, the equation is:
$\frac{L^3}{6EI} R_B + (-\frac{5wL^4}{24EI}) = -\delta_s$ (assuming $R_B$ is upward and $\delta_s$ is downward)

Or, if we use the convention that displacement in the direction of the redundant is positive:
$f_{11} X_1 + \delta_{actual} = \delta_{provided}$
where $\delta_{actual} = \Delta_{applied, 1}$ (displacement due to applied load).
The condition is that the displacement at B must match the settlement.
So, displacement at B due to $R_B$ + displacement at B due to UDL = settlement at B.
$f_{11} R_B + \Delta_{applied, 1} = \delta_s$ (using consistent sign convention for displacements, where upward is positive for forces and displacements).
If $R_B$ is upward, $f_{11} R_B$ is upward displacement.
$\Delta_{applied, 1}$ is downward deflection due to UDL. So, $\Delta_{applied, 1} = -5wL^4/(24EI)$.
The settlement $\delta_s$ is downwards. So, the actual displacement at B must be $-\delta_s$.
$f_{11} R_B + \Delta_{applied, 1} = -\delta_s$
$\frac{L^3}{6EI} R_B - \frac{5wL^4}{24EI} = -\delta_s$
$\frac{L^3}{6EI} R_B = \frac{5wL^4}{24EI} - \delta_s$
$R_B = \frac{6EI}{L^3} (\frac{5wL^4}{24EI} - \delta_s) = \frac{5wL}{4} - \frac{6EI \delta_s}{L^3}$.

---

## 11. Important Points to Remember

*   **Choice of Redundants:** The choice of redundants must result in a stable primary structure.
*   **Sign Conventions:** Be extremely consistent with sign conventions for forces and displacements throughout the analysis.
*   **Flexibility Matrix Symmetry:** $f_{ij} = f_{ji}$ due to Maxwell's reciprocal theorem.
*   **Unit Load Method:** A versatile tool for calculating flexibility coefficients and displacements due to loads.
*   **Matrix Inversion:** Ensure the flexibility matrix is invertible. If it's singular, the choice of redundants might be incorrect.
*   **Compatibility:** The core of the flexibility method is satisfying displacement compatibility at the points where constraints are removed.
*   **Superposition:** The method relies on the principle of superposition.
*   **Computational Tools:** For complex structures, software for matrix operations (inversion, multiplication) is essential.

This comprehensive set of notes covers the fundamental principles, steps, calculations, advantages, disadvantages, and applications of the flexibility method in structural analysis. Remember to practice with various types of indeterminate structures to solidify your understanding.
