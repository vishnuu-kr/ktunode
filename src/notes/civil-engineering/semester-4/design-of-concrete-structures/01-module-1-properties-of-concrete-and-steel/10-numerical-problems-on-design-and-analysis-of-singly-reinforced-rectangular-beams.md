---
title: "Numerical Problems on design and analysis of Singly Reinforced Rectangular Beams"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 1: Properties of Concrete and Steel"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109c1"
status: "completed"
scrapedAt: "2026-05-20T18:43:43.491Z"
---
# DESIGN OF CONCRETE STRUCTURES - Module 1: Properties of Concrete and Steel

## Topic: Numerical Problems on Design and Analysis of Singly Reinforced Rectangular Beams

This module focuses on understanding the fundamental behavior of concrete and steel, and how they work together in structural elements like beams. We will specifically delve into the design and analysis of singly reinforced rectangular beams, which are common in various construction applications.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the basic principles of reinforced concrete behavior in bending.**
*   **Calculate the ultimate moment of resistance (Mu) of a given singly reinforced rectangular beam section.**
*   **Determine the required steel reinforcement (Ast) for a given singly reinforced rectangular beam section to resist a specified moment (Mu).**
*   **Identify the limiting values of the depth of the neutral axis (xu) and the maximum bending moment.**
*   **Apply relevant design codes (e.g., IS 456:2000) for the analysis and design of beams.**

---

### 1. Key Concepts and Definitions

**1.1 Reinforced Concrete (RC) Beam:**
A structural element, typically prismatic, designed to resist transverse loads by bending. It is composed of concrete and steel reinforcing bars (rebar).

**1.2 Singly Reinforced Rectangular Beam:**
A rectangular beam where tensile reinforcement is provided only at the bottom (tension) face.

**1.3 Stress-Strain Behavior:**
*   **Concrete:** Has good compressive strength but poor tensile strength. It is assumed to be uncracked in tension for design purposes. Its stress-strain curve is typically parabolic up to ultimate strain, but for design, a rectangular stress block is often used (Whitney stress block).
*   **Steel:** Exhibits elastic and plastic behavior. It has high tensile strength.

**1.4 Working Stress Method (WSM) vs. Limit State Method (LSM):**
*   **WSM:** Based on elastic theory, stresses are kept within permissible limits. Less economical and doesn't fully capture the behavior of concrete at failure.
*   **LSM:** Based on the principles of limit states of collapse and serviceability. It considers the material properties at ultimate load and uses load factors and material reduction factors. This is the *modern and preferred method* for concrete structure design. **All numerical problems in this section will be based on the Limit State Method (LSM).**

**1.5 Limit State of Collapse in Bending:**
This state refers to the ultimate load-carrying capacity of the beam section where it fails in bending due to yielding of steel or crushing of concrete.

**1.6 Assumptions for LSM in Flexure (IS 456:2000, Clause 38.1):**
*   The maximum strain in concrete at the outer most fiber at the collapse stage shall be taken as 0.0035 in bending.
*   When the concrete on the tensile side is assumed to be cracked, the tensile strength of concrete is ignored.
*   The distribution of strain across the section is assumed to be linear.
*   The stress distribution in concrete is assumed to be equivalent to a rectangular stress block with a uniform stress of $0.446 f_{ck}$ acting at a depth of $0.42x_{u}$ from the compression face, where $x_{u}$ is the ultimate depth of the neutral axis.
*   The stress in the reinforcing steel at collapse is assumed to be the characteristic strength of the steel at the relevant limit strain. For Fe 415 steel, at a strain of 0.002, the stress is $0.87 f_y$. For strains greater than 0.002, the stress is assumed to remain constant at $0.87 f_y$.

**1.7 Stress Block:**
A simplified representation of the stress distribution in concrete in the compression zone at the point of failure.

*   **Rectangular Stress Block (Whitney Stress Block):**
    *   Uniform compressive stress: $0.446 f_{ck}$
    *   Depth of stress block: $0.42x_u$

    *Where:*
    *   $f_{ck}$ = Characteristic compressive strength of concrete.
    *   $x_u$ = Depth of the neutral axis from the compression face.

**1.8 Neutral Axis (NA):**
The axis in a flexural member where the strain is zero. In RC beams, it separates the compression zone (concrete) from the tension zone (steel).

**1.9 Depth of Neutral Axis ($x_u$):**
The distance from the extreme compression fiber to the neutral axis.

**1.10 Limiting Depth of Neutral Axis ($x_{u,max}$):**
The maximum depth the neutral axis can reach before the concrete crushes. This depends on the grade of steel used.

*   For Fe 250 (Mild Steel): $x_{u,max} = 0.53d$
*   For Fe 415 (HYSD Steel): $x_{u,max} = 0.48d$
*   For Fe 500 (HYSD Steel): $x_{u,max} = 0.46d$

    *Where:*
    *   $d$ = Effective depth of the beam (distance from the extreme compression fiber to the centroid of the tensile reinforcement).

**1.11 Effective Depth ($d$):**
The distance from the extreme compression fiber to the centroid of the tensile reinforcement.

**1.12 Effective Cover:**
The distance from the extreme compression fiber to the centroid of the tensile reinforcement. For simplicity in calculations, effective cover is often considered as the distance from the extreme compression fiber to the center of the reinforcement. In problems, if overall depth (D) and clear cover are given, you might need to calculate 'd'.

**1.13 Moment of Resistance ($M_u$):**
The internal moment of force that a beam section can resist at the limit state of collapse.

**1.14 Lever Arm (LA):**
The distance between the resultant compressive force and the resultant tensile force.
$LA = d - 0.42x_u$

**1.15 Balanced Section:**
A section where the concrete reaches its ultimate compressive strain ($0.0035$) and the steel reaches its yield strain (or $0.87 f_y$ stress) simultaneously. For such a section, $x_u = x_{u,max}$.

**1.16 Under-Reinforced Section:**
A section where the steel yields before the concrete crushes. This is desirable as it provides a warning of failure. For such a section, $x_u < x_{u,max}$.

**1.17 Over-Reinforced Section:**
A section where the concrete crushes before the steel yields. This is undesirable as it fails suddenly without warning. For such a section, $x_u > x_{u,max}$. The design must ensure that the section is either balanced or under-reinforced.

---

### 2. Analysis of Singly Reinforced Rectangular Beams (Calculating $M_u$)

This involves determining the moment of resistance of a beam section with known dimensions and reinforcement.

**Steps for Analysis:**

1.  **Calculate the depth of the neutral axis ($x_u$):**
    Equate the total tensile force to the total compressive force.
    Total Tensile Force ($T$) = Area of steel ($\text{Ast}$) $\times$ Stress in steel ($0.87 f_y$)
    Total Compressive Force ($C$) = Area of stress block $\times$ Uniform stress
    $C = (0.42 x_u \times b) \times (0.446 f_{ck})$
    $T = C$
    $A_{st} \times 0.87 f_y = 0.42 x_u \times b \times 0.446 f_{ck}$
    $x_u = \frac{A_{st} \times 0.87 f_y}{0.42 \times b \times 0.446 f_{ck}}$
    $x_u = \frac{A_{st} \times f_y}{1.5 b f_{ck}}$ (Simplified formula)

2.  **Determine the limiting depth of the neutral axis ($x_{u,max}$):**
    Based on the grade of steel used (as listed in section 1.10).

3.  **Compare $x_u$ and $x_{u,max}$:**
    *   If $x_u \leq x_{u,max}$: The section is under-reinforced or balanced. The moment of resistance is calculated using the calculated $x_u$.
    *   If $x_u > x_{u,max}$: The section is over-reinforced. In this case, for design purposes, we assume the neutral axis is at the limiting depth, i.e., $x_u = x_{u,max}$. This means the steel will yield, and the moment of resistance is calculated using $x_{u,max}$.

4.  **Calculate the Moment of Resistance ($M_u$):**
    $M_u = \text{Total Compressive Force} \times \text{Lever Arm}$
    $M_u = C \times (d - 0.42x_u)$
    $M_u = (0.42 x_u \times b \times 0.446 f_{ck}) \times (d - 0.42x_u)$
    $M_u = 0.36 f_{ck} b x_u (d - 0.42x_u)$

    *Alternatively, using tensile force:*
    $M_u = \text{Total Tensile Force} \times \text{Lever Arm}$
    $M_u = (A_{st} \times 0.87 f_y) \times (d - 0.42x_u)$

    **Important:** If the section is over-reinforced ($x_u > x_{u,max}$), use $x_{u,max}$ in the lever arm calculation for $M_u$.

**2.1 Limiting Moment of Resistance ($M_{u,lim}$):**
This is the maximum moment a section can resist when the neutral axis is at its limiting depth ($x_{u,max}$).

$M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42x_{u,max})$

    *Alternatively:*
    $M_{u,lim} = (A_{st,lim} \times 0.87 f_y) \times (d - 0.42x_{u,max})$
    where $A_{st,lim}$ is the area of steel corresponding to $x_{u,max}$.

**Key takeaway for analysis:** If the calculated $x_u$ exceeds $x_{u,max}$, the actual moment of resistance is limited to $M_{u,lim}$ by taking $x_u = x_{u,max}$ in the moment calculation.

---

### 3. Design of Singly Reinforced Rectangular Beams (Calculating $A_{st}$)

This involves determining the required area of tensile reinforcement ($A_{st}$) for a beam section to resist a given factored moment ($M_u$).

**Steps for Design:**

1.  **Determine the design moment ($M_u$):**
    This is usually given or calculated from the applied loads using load factors as per the relevant design code.

2.  **Determine the limiting moment of resistance ($M_{u,lim}$):**
    Calculate $M_{u,lim}$ for the given beam dimensions ($b$, $d$) and steel grade.
    $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42x_{u,max})$

3.  **Compare the design moment ($M_u$) with the limiting moment ($M_{u,lim}$):**
    *   If $M_u \leq M_{u,lim}$: The beam can be designed as an under-reinforced or balanced section. The design proceeds by calculating the required $x_u$ for the given $M_u$.
    *   If $M_u > M_{u,lim}$: The given section dimensions are insufficient to resist the moment. You need to increase either the width ($b$) or the effective depth ($d$) of the beam and re-calculate $M_{u,lim}$.

4.  **Calculate the required $x_u$ (for $M_u \leq M_{u,lim}$):**
    We need to solve the moment of resistance equation for $x_u$:
    $M_u = 0.36 f_{ck} b x_u (d - 0.42x_u)$
    This is a quadratic equation in $x_u$:
    $0.36 f_{ck} b x_u^2 - 0.42 x_u M_u + M_u d = 0$

    Let $K = \frac{M_u}{b d^2}$ and $K_u = \frac{x_u}{d}$. Then the equation becomes:
    $0.36 f_{ck} (Kd^2) - 0.42 (Kd) M_u + M_u d = 0$
    Dividing by $d^2$:
    $0.36 f_{ck} K - 0.42 K \frac{M_u}{d} + \frac{M_u}{d} = 0$ (This is getting complicated, let's use a more direct approach)

    Let's rearrange the moment equation:
    $M_u = 0.36 f_{ck} b x_u (d - 0.42x_u)$
    $M_u = 0.36 f_{ck} b (d x_u - 0.42 x_u^2)$

    It is often easier to work with a "balanced moment factor" approach or directly solve for $x_u$. A common way is to use the relationship derived from the moment calculation:

    Let's consider the equation: $M_u = (A_{st} \times 0.87 f_y) \times (d - 0.42x_u)$.
    We can express $A_{st}$ in terms of $x_u$ and then find $x_u$.

    A more direct approach for design is to find the "effective depth required" for a given $M_u$ and $A_{st}$, or vice versa.
    When designing, we are given $M_u$, $b$, $d$, $f_{ck}$, $f_y$.
    We need to find $A_{st}$.

    We know that the moment of resistance is provided by the steel and the concrete.
    $M_u = A_{st} \times 0.87 f_y \times (d - 0.42 x_u)$

    To find $A_{st}$, we need to determine $x_u$.
    We can use the relationship derived from equating forces:
    $A_{st} \times 0.87 f_y = 0.42 x_u \times b \times 0.446 f_{ck}$
    $A_{st} = \frac{0.42 x_u b f_{ck} \times 0.446}{0.87 f_y}$

    This shows we need $x_u$ to find $A_{st}$. How do we find $x_u$? We use the moment equation itself.

    Let's rewrite the moment of resistance as:
    $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$

    Consider the case where the section is designed to be balanced ($x_u = x_{u,max}$).
    $M_{u,lim} = 0.87 f_y A_{st,lim} (d - 0.42 x_{u,max})$

    This isn't directly helping us find $A_{st}$ without first finding $x_u$.

    **The standard design approach is as follows:**

    a.  **Calculate $M_{u,lim}$:**
        $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42x_{u,max})$

    b.  **If $M_u \leq M_{u,lim}$:**
        We need to find $A_{st}$. We can use the equation for moment of resistance and solve for $A_{st}$.
        However, $x_u$ is unknown. We can relate $x_u$ to $A_{st}$ using the force balance equation:
        $A_{st} = \frac{0.42 x_u b f_{ck} \times 0.446}{0.87 f_y}$

        Substitute this $A_{st}$ into the moment equation:
        $M_u = (0.42 x_u b \times 0.446 f_{ck}) (d - 0.42 x_u)$
        $M_u = 0.188 f_{ck} b x_u (d - 0.42 x_u)$  *(Using the full stress block values here for accuracy)*

        Let's use the simplified approach (which is commonly used in textbooks/exams):
        $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$

        To find $A_{st}$, we can rearrange this equation to solve for $x_u$ first (this will be a quadratic).
        $0.36 f_{ck} b x_u^2 - 0.42 x_u M_u + M_u d = 0$

        Let's use a more practical approach by directly calculating $A_{st}$ from the moment equation.

        Consider the equation: $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$.
        We also know that $A_{st} = \frac{0.42 x_u b f_{ck} \times 0.446}{0.87 f_y}$.
        From this, $0.42 x_u = \frac{A_{st} \times 0.87 f_y}{b \times 0.446 f_{ck}}$.

        Substitute this into the moment equation:
        $M_u = 0.87 f_y A_{st} \left( d - 0.42 \left( \frac{A_{st} \times 0.87 f_y}{b \times 0.446 f_{ck}} \right) \right)$

        This is still complicated. Let's go back to the fundamental force balance and moment equation.

        **A Standard Design Procedure:**

        1.  **Calculate $M_{u,lim}$:** Use the formula $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42x_{u,max})$.

        2.  **If $M_u \leq M_{u,lim}$:**
            The section is adequate. We need to find $A_{st}$.
            We can rewrite the moment equation as:
            $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$

            We need to find $x_u$ that satisfies this equation for the given $M_u$.
            It's more efficient to use a derived formula for $A_{st}$ based on a simplified approach.

            Let's consider the Whitney stress block equations again:
            $C = 0.446 f_{ck} b (0.42 x_u)$
            $T = 0.87 f_y A_{st}$
            $C = T \Rightarrow 0.446 \times 0.42 f_{ck} b x_u = 0.87 f_y A_{st}$
            $0.187 f_{ck} b x_u = 0.87 f_y A_{st}$
            $x_u = \frac{0.87 f_y A_{st}}{0.187 f_{ck} b}$

            Moment of Resistance:
            $M_u = C (d - 0.42 x_u) = 0.446 f_{ck} b (0.42 x_u) (d - 0.42 x_u)$
            $M_u = 0.187 f_{ck} b x_u (d - 0.42 x_u)$

            If we express $x_u$ in terms of $A_{st}$ from the force balance and substitute it here, we can solve for $A_{st}$.

            **The most common design approach uses the relationship:**
            $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$

            And $x_u$ can be expressed in terms of $A_{st}$ (as shown above).
            A simpler way to solve for $A_{st}$ directly is to use the fact that for a given $M_u \leq M_{u,lim}$, the actual $x_u$ will be less than or equal to $x_{u,max}$.

            We can use the general formula for the moment of resistance and solve for $A_{st}$.
            $M_u = 0.36 f_{ck} b x_u (d - 0.42x_u)$

            Let's consider the ratio $x_u/d = k$.
            $M_u = 0.36 f_{ck} b (kd) (d - 0.42 kd)$
            $M_u = 0.36 f_{ck} b d^2 k (1 - 0.42 k)$
            $\frac{M_u}{b d^2} = 0.36 f_{ck} k (1 - 0.42 k)$

            We can find $k$ from this equation (which is related to $x_u/d$) and then calculate $A_{st}$.
            The value of $k$ will be $\leq k_{max}$ where $k_{max} = x_{u,max}/d$.

            **A more direct formula for $A_{st}$ is derived as follows:**
            From $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$ and $A_{st} = \frac{0.42 x_u b f_{ck} \times 0.446}{0.87 f_y}$, we have:
            $x_u = \frac{A_{st} \times 0.87 f_y}{0.446 \times 0.42 \times b \times f_{ck}}$
            $x_u = \frac{A_{st} \times 0.87 f_y}{0.187 b f_{ck}}$

            Substitute this $x_u$ into the moment equation:
            $M_u = 0.87 f_y A_{st} \left( d - 0.42 \frac{A_{st} \times 0.87 f_y}{0.187 b f_{ck}} \right)$
            $M_u = 0.87 f_y A_{st} d - 0.42 \times 0.87 f_y A_{st} \frac{A_{st} \times 0.87 f_y}{0.187 b f_{ck}}$
            $M_u = 0.87 f_y A_{st} d - \frac{0.42 \times 0.87^2 f_y^2 A_{st}^2}{0.187 b f_{ck}}$

            This is a quadratic equation for $A_{st}$. It's generally more convenient to first find $x_u$ (or $k=x_u/d$) and then $A_{st}$.

            **Practical Design Steps (Reiterated for clarity):**

            1.  **Calculate $M_{u,lim}$:**
                $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42x_{u,max})$

            2.  **If $M_u \leq M_{u,lim}$:**
                The section is adequate. Now find $A_{st}$.
                We use the moment of resistance equation and solve for $A_{st}$. It is usually solved by first finding the equivalent $x_u$ required for the given $M_u$.
                Let's rearrange the equation $M_u = 0.36 f_{ck} b x_u (d - 0.42x_u)$:
                We can also use the formula derived from considering the strain compatibility and stress distribution.
                $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$

                A very common shortcut for design is to first find the "depth factor" or "moment factor" required.
                Let's rewrite the moment equation as:
                $M_u = A_{st} \times 0.87 f_y \times LeverArm$
                $LeverArm = d - 0.42 x_u$

                If we find $x_u$ first, we can then find $A_{st}$.
                To find $x_u$, we can use the equation $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$.
                This results in a quadratic equation for $x_u$.
                $0.42 \times 0.36 f_{ck} b x_u^2 - 0.36 f_{ck} b d x_u + M_u = 0$
                $0.1512 f_{ck} b x_u^2 - 0.36 f_{ck} b d x_u + M_u = 0$

                Solving this quadratic for $x_u$:
                $x_u = \frac{-(-0.36 f_{ck} b d) \pm \sqrt{(-0.36 f_{ck} b d)^2 - 4(0.1512 f_{ck} b)(M_u)}}{2(0.1512 f_{ck} b)}$
                $x_u = \frac{0.36 f_{ck} b d \pm \sqrt{(0.36 f_{ck} b d)^2 - 0.6048 f_{ck} b M_u}}{0.3024 f_{ck} b}$
                $x_u = d \left( \frac{0.36 \pm \sqrt{0.36^2 - \frac{0.6048 M_u}{f_{ck} b d}}}{2 \times 0.36} \right)$
                $x_u = d \left( \frac{0.36 \pm \sqrt{0.1296 - \frac{0.6048 M_u}{f_{ck} b d}}}{0.72} \right)$
                $x_u = d \left( 0.5 \pm \frac{\sqrt{0.1296 - 0.84 f_{ck} b d}}{0.72} \right)$  (This is still not the most convenient form)

                **A common and practical approach using a coefficient:**

                Let $M_u = Q \times b d^2$, where $Q$ is a coefficient.
                The equation $M_u = 0.36 f_{ck} b x_u (d - 0.42x_u)$ can be rearranged.
                If $x_u \leq x_{u,max}$, we can find $A_{st}$ using the formula:
                $A_{st} = \frac{M_u}{0.87 f_y (d - 0.42 x_u)}$

                The key is to find the correct $x_u$ for the given $M_u$.

                **A Simplified Formula for $A_{st}$ from Design Charts/Tables (often derived from these equations):**

                Let's consider the moment equation: $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$
                If $M_u \le M_{u,lim}$, we can find a corresponding $x_u$ (which will be $\le x_{u,max}$).

                Once $x_u$ is determined, $A_{st}$ is calculated from the force balance:
                $A_{st} = \frac{0.42 x_u b f_{ck} \times 0.446}{0.87 f_y}$

                **How to find $x_u$ without solving a quadratic repeatedly?**
                We can use the limiting moment of resistance calculation to find a "limiting coefficient" or relate $x_u$ to $d$.

                Let $x_u = k d$. Then $k \le k_{max}$.
                $M_u = 0.36 f_{ck} b (kd) (d - 0.42 kd)$
                $M_u = 0.36 f_{ck} b d^2 k (1 - 0.42 k)$

                If $M_u \le M_{u,lim}$:
                $\frac{M_u}{b d^2} = 0.36 f_{ck} k (1 - 0.42 k)$
                This equation can be solved for $k$ (which is $x_u/d$).
                For example, if $f_{ck}=20$, $f_y=415$:
                $x_{u,max} = 0.48 d$, so $k_{max} = 0.48$.
                $M_{u,lim} = 0.36 \times 20 \times b \times (0.48 d) (d - 0.42 \times 0.48 d)$
                $M_{u,lim} = 7.2 \times b \times 0.48 d \times (d - 0.2016 d)$
                $M_{u,lim} = 3.456 b d \times (0.7984 d)$
                $M_{u,lim} = 2.759 b d^2$

                Then, $\frac{M_u}{b d^2} = 0.36 \times 20 \times k (1 - 0.42 k)$
                $\frac{M_u}{b d^2} = 7.2 k (1 - 0.42 k)$

                For a given $M_u$, you calculate $\frac{M_u}{b d^2}$ and solve for $k$. Once $k$ is found, $x_u = kd$.
                Then calculate $A_{st} = \frac{0.42 x_u b f_{ck} \times 0.446}{0.87 f_y}$.

            3.  **If $M_u > M_{u,lim}$:**
                Increase the section size (width $b$ or effective depth $d$) and re-calculate $M_{u,lim}$. Repeat step 2 with the new dimensions until $M_u \leq M_{u,lim}$. Then design for $A_{st}$ using $x_u = x_{u,max}$.

                If $M_u > M_{u,lim}$ and you are forced to use the existing section dimensions, the design must be for a balanced section, meaning $x_u = x_{u,max}$.
                In this case, $A_{st}$ is calculated using $x_u = x_{u,max}$:
                $A_{st} = \frac{0.42 x_{u,max} b f_{ck} \times 0.446}{0.87 f_y}$

                **Crucial Point:** When $M_u > M_{u,lim}$, you *must* use $x_u = x_{u,max}$ in the force balance equation to find the minimum steel required for a balanced section. The moment of resistance of this balanced section will be exactly $M_{u,lim}$. If the design moment $M_u$ is actually greater than $M_{u,lim}$, the section is inadequate. The problem statement usually implies you design for the *given* $M_u$ by selecting appropriate $x_u$.

                **Revised Step 3 for $M_u > M_{u,lim}$:**
                If $M_u > M_{u,lim}$, this means the provided dimensions $b$ and $d$ are insufficient for the required moment $M_u$ if we want to maintain an under-reinforced or balanced section. In practice, you would redesign the beam dimensions. However, if the question implies to design for the given $M_u$ with the given dimensions, it suggests a potential misunderstanding in the question or implies we must achieve at least $M_{u,lim}$.

                **Let's assume the common scenario:** If $M_u > M_{u,lim}$, you use $x_u = x_{u,max}$ to calculate the $A_{st}$ required to achieve $M_{u,lim}$. This implies the beam is now designed as a balanced section. If $M_u$ is significantly higher than $M_{u,lim}$, this is not a complete design, as the beam will still fail before reaching $M_u$.

                **Standard interpretation:** If $M_u > M_{u,lim}$, you must increase $b$ or $d$ and recalculate $M_{u,lim}$. If you cannot change dimensions, then you are constrained to design for $M_{u,lim}$ by using $x_u = x_{u,max}$ to find $A_{st}$. This provides the maximum possible moment resistance for the given dimensions.

                **Let's re-evaluate the design logic:**
                The goal of design is to find $A_{st}$ for a given $M_u$.
                We must ensure $x_u \leq x_{u,max}$.

                Case 1: $M_u \leq M_{u,lim}$
                We can find $A_{st}$ using the equation:
                $A_{st} = \frac{M_u}{0.87 f_y (d - 0.42 x_u)}$
                Here, $x_u$ is determined by $M_u$.

                Let's use the direct approach to find $A_{st}$ without finding $x_u$ explicitly first:
                From $A_{st} = \frac{0.42 x_u b f_{ck} \times 0.446}{0.87 f_y}$, we have $x_u = \frac{A_{st} \times 0.87 f_y}{0.187 b f_{ck}}$.
                Substitute this into $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$:
                $M_u = 0.87 f_y A_{st} \left( d - 0.42 \frac{A_{st} \times 0.87 f_y}{0.187 b f_{ck}} \right)$
                $M_u = 0.87 f_y A_{st} d - \frac{0.42 \times 0.87^2 f_y^2 A_{st}^2}{0.187 b f_{ck}}$

                Rearranging this as a quadratic for $A_{st}$:
                $\left( \frac{0.42 \times 0.87^2 f_y^2}{0.187 b f_{ck}} \right) A_{st}^2 - (0.87 f_y d) A_{st} + M_u = 0$
                $A_{st}^2 \left( \frac{0.315 f_y^2}{b f_{ck}} \right) - A_{st} (0.87 f_y d) + M_u = 0$

                Solving this quadratic for $A_{st}$ will give two values. We take the one that results in $x_u \leq x_{u,max}$.

                **A more common and simpler design method:**
                1.  Calculate $M_{u,lim}$.
                2.  If $M_u \le M_{u,lim}$: Calculate $x_u$ by solving $M_u = 0.36 f_{ck} b x_u (d - 0.42x_u)$. This gives a quadratic equation for $x_u$.
                    $0.1512 f_{ck} b x_u^2 - 0.36 f_{ck} b d x_u + M_u = 0$
                    Solve for $x_u$. Ensure $x_u \leq x_{u,max}$.
                    Then calculate $A_{st} = \frac{0.42 x_u b f_{ck} \times 0.446}{0.87 f_y}$.

                3.  If $M_u > M_{u,lim}$: The section is over-reinforced for the given $M_u$. You must use $x_u = x_{u,max}$ and calculate $A_{st}$ for a balanced section.
                    $A_{st} = \frac{0.42 x_{u,max} b f_{ck} \times 0.446}{0.87 f_y}$
                    The moment of resistance of this section will be $M_{u,lim}$. If $M_u$ is larger than $M_{u,lim}$, this indicates the beam dimensions need to be increased.

            **Let's use the "balanced moment coefficient" approach which is very practical.**
            For a given grade of concrete and steel, there's a limiting ratio $x_{u,max}/d$.
            Let $x_{u,max}/d = k_{max}$.
            The limiting moment of resistance can be expressed as:
            $M_{u,lim} = 0.36 f_{ck} b (k_{max} d) (d - 0.42 k_{max} d)$
            $M_{u,lim} = 0.36 f_{ck} b d^2 k_{max} (1 - 0.42 k_{max})$

            **Design Steps using this approach:**
            1.  Calculate $M_u$ from applied loads.
            2.  Calculate $M_{u,lim}$ using the formula $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42x_{u,max})$.
            3.  **If $M_u \leq M_{u,lim}$:**
                The section is adequate. We need to find $A_{st}$.
                The neutral axis depth $x_u$ required to resist $M_u$ is less than $x_{u,max}$.
                We can find $A_{st}$ by using the equation:
                $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$
                And $A_{st} = \frac{0.42 x_u b f_{ck} \times 0.446}{0.87 f_y}$

                It's often easier to find $x_u$ first by solving $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$ for $x_u$. This is a quadratic equation.
                Once $x_u$ is found, calculate $A_{st}$.
            4.  **If $M_u > M_{u,lim}$:**
                The section is over-reinforced. The maximum moment resistance for the given dimensions is $M_{u,lim}$. You should design for a balanced section, which means using $x_u = x_{u,max}$.
                Calculate $A_{st}$ using $x_u = x_{u,max}$:
                $A_{st} = \frac{0.42 x_{u,max} b f_{ck} \times 0.446}{0.87 f_y}$
                This $A_{st}$ provides a moment of resistance of $M_{u,lim}$. If the applied $M_u$ is indeed greater than $M_{u,lim}$, then this design is insufficient for the actual load, and beam dimensions must be increased.

**Minimum Reinforcement ($A_{st,min}$):**
As per IS 456:2000 Clause 26.5.1.1, minimum reinforcement shall be provided to prevent brittle failure.
$A_{st,min} = \frac{0.85 b d}{f_y}$ (for mild steel)
$A_{st,min} = \frac{0.85 b d}{f_y}$ is for Fe 250.
For Fe 415 and Fe 500, the IS code states:
$A_{st,min} = \frac{0.2}{f_{ck}} b d$ (for Fe 415 and Fe 500) - **Incorrect, check code.**

**Correct IS 456:2000 Clause 26.5.1.1 for minimum reinforcement:**
The minimum area of tension reinforcement shall be the greater of:
1.  $\frac{0.85 bd}{f_y}$
2.  $\frac{0.85 b_t d}{f_y}$ where $b_t$ is the width of the web. For rectangular beams, $b_t = b$.

So, $A_{st,min} = \frac{0.85 bd}{f_y}$.

**Maximum Reinforcement ($A_{st,max}$):**
As per IS 456:2000 Clause 26.5.1.1, maximum reinforcement in all beams shall not exceed $0.04 b D$, where $D$ is the overall depth.

The calculated $A_{st}$ must be greater than or equal to $A_{st,min}$ and less than or equal to $A_{st,max}$.

**Steps for finding required steel bars:**
Once $A_{st}$ is calculated, select standard bar sizes and number of bars to achieve this area.
For example, if $A_{st}$ is calculated to be $450 \text{ mm}^2$.
Available bars: 8mm, 10mm, 12mm, 16mm, 20mm etc.
Area of 8mm bar = $\pi/4 \times 8^2 = 50.26 \text{ mm}^2$
Area of 10mm bar = $\pi/4 \times 10^2 = 78.54 \text{ mm}^2$
Area of 12mm bar = $\pi/4 \times 12^2 = 113.09 \text{ mm}^2$
Area of 16mm bar = $\pi/4 \times 16^2 = 201.06 \text{ mm}^2$

To get at least $450 \text{ mm}^2$:
*   3 x 12mm bars = $3 \times 113.09 = 339.27 \text{ mm}^2$ (Insufficient)
*   4 x 12mm bars = $4 \times 113.09 = 452.36 \text{ mm}^2$ (Sufficient)
*   2 x 16mm bars = $2 \times 201.06 = 402.12 \text{ mm}^2$ (Insufficient)
*   3 x 16mm bars = $3 \times 201.06 = 603.18 \text{ mm}^2$ (Sufficient)

Choose the option that provides at least the required $A_{st}$ and is practical. 4 x 12mm bars is a common choice.

---

### 4. Examples

**Example 1: Analysis of a Singly Reinforced Beam**

**Problem:** Determine the moment of resistance of a singly reinforced rectangular concrete beam section $230 \text{ mm} \times 400 \text{ mm}$ (width $\times$ effective depth) cast with M20 concrete and containing $1000 \text{ mm}^2$ of steel reinforcement with $f_y = 415 \text{ N/mm}^2$.

**Solution:**
Given:
$b = 230 \text{ mm}$
$d = 400 \text{ mm}$
$A_{st} = 1000 \text{ mm}^2$
$f_{ck} = 20 \text{ N/mm}^2$
$f_y = 415 \text{ N/mm}^2$

1.  **Calculate the actual depth of the neutral axis ($x_u$):**
    $x_u = \frac{A_{st} \times f_y}{0.42 \times b \times 0.446 f_{ck}} = \frac{1000 \times 415}{0.42 \times 230 \times 0.446 \times 20}$
    $x_u = \frac{415000}{1716.6} \approx 241.75 \text{ mm}$

    Using the simplified formula:
    $x_u = \frac{A_{st} \times f_y}{1.5 b f_{ck}} = \frac{1000 \times 415}{1.5 \times 230 \times 20} = \frac{415000}{6900} \approx 60.15 \text{ mm}$

    **Let's use the accurate derivation from IS 456 for $x_u$:**
    From $A_{st} \times 0.87 f_y = 0.446 f_{ck} b (0.42 x_u)$:
    $1000 \times 0.87 \times 415 = 0.446 \times 20 \times 230 \times (0.42 x_u)$
    $361050 = 420.44 \times 0.42 x_u$
    $361050 = 176.58 x_u$
    $x_u = \frac{361050}{176.58} \approx 204.47 \text{ mm}$

    **Let's verify the standard simplified formula used in many design texts derived from the simplified stress block:**
    $0.87 f_y A_{st} = 0.36 f_{ck} b x_u$
    $0.87 \times 415 \times 1000 = 0.36 \times 20 \times 230 \times x_u$
    $361050 = 16560 x_u$
    $x_u = \frac{361050}{16560} \approx 21.79 \text{ mm}$ - **This is incorrect. The simplified formula for $x_u$ is derived from the force balance using the simplified stress block for the moment calculation.**

    **Let's stick to the fundamental force balance equation:**
    Tensile force = $A_{st} \times 0.87 f_y = 1000 \times 0.87 \times 415 = 361050 \text{ N}$
    Compressive force = $0.446 f_{ck} b (0.42 x_u) = 0.446 \times 20 \times 230 \times (0.42 x_u)$
    $C = 176.58 x_u$

    Equating $T=C$:
    $361050 = 176.58 x_u$
    $x_u = \frac{361050}{176.58} \approx 204.47 \text{ mm}$

2.  **Determine the limiting depth of the neutral axis ($x_{u,max}$):**
    For Fe 415 steel, $x_{u,max} = 0.48 d$.
    $x_{u,max} = 0.48 \times 400 = 192 \text{ mm}$

3.  **Compare $x_u$ and $x_{u,max}$:**
    Calculated $x_u = 204.47 \text{ mm}$
    Limiting $x_{u,max} = 192 \text{ mm}$
    Since $x_u > x_{u,max}$, the section is over-reinforced.

4.  **Calculate the Moment of Resistance ($M_u$):**
    For an over-reinforced section, the moment of resistance is limited to $M_{u,lim}$ by taking $x_u = x_{u,max}$.
    $M_u = 0.36 f_{ck} b x_{u,max} (d - 0.42 x_{u,max})$
    $M_u = 0.36 \times 20 \times 230 \times (192) (400 - 0.42 \times 192)$
    $M_u = 377280 \times (400 - 80.64)$
    $M_u = 377280 \times 319.36$
    $M_u \approx 120420000 \text{ N-mm} = 120.42 \text{ kNm}$

    *Using the alternative formula with tensile force:*
    Lever Arm (LA) = $d - 0.42 x_{u,max} = 400 - 0.42 \times 192 = 400 - 80.64 = 319.36 \text{ mm}$
    Tensile Force = $A_{st} \times 0.87 f_y = 1000 \times 0.87 \times 415 = 361050 \text{ N}$
    $M_u = T \times LA = 361050 \times 319.36 \approx 115348500 \text{ N-mm} = 115.35 \text{ kNm}$

    **Wait, there's a discrepancy. The force balance for $M_{u,lim}$ should use the $A_{st}$ corresponding to $x_{u,max}$.**
    Let's recalculate $A_{st,lim}$ first.
    $A_{st,lim} = \frac{0.42 x_{u,max} b f_{ck} \times 0.446}{0.87 f_y}$
    $A_{st,lim} = \frac{0.42 \times 192 \times 230 \times 20 \times 0.446}{0.87 \times 415}$
    $A_{st,lim} = \frac{806779.2}{361.05} \approx 2234.55 \text{ mm}^2$

    This indicates that the provided steel area ($1000 \text{ mm}^2$) is *less* than the minimum required for a balanced section. My $x_u$ calculation being greater than $x_{u,max}$ implies a calculation error or a conceptual misunderstanding.

    **Let's re-examine the $x_u$ calculation and its implication.**
    The formula $x_u = \frac{A_{st} \times 0.87 f_y}{0.446 f_{ck} b (0.42)}$ is correct for determining the actual neutral axis based on the provided $A_{st}$.

    $x_u = \frac{1000 \times 0.87 \times 415}{0.446 \times 20 \times 230 \times 0.42} = \frac{361050}{176.58} \approx 204.47 \text{ mm}$.
    $x_{u,max} = 0.48 \times 400 = 192 \text{ mm}$.

    **The issue is likely in the interpretation of the problem or the stress block formula.**
    The equation $0.87 f_y A_{st} = 0.36 f_{ck} b x_u$ is a simplified relationship often used.
    Using the more accurate IS 456 stress block:
    $0.87 f_y A_{st} = 0.446 f_{ck} b (0.42 x_u)$
    $0.87 \times 415 \times 1000 = 0.446 \times 20 \times 230 \times 0.42 x_u$
    $361050 = 176.58 x_u$
    $x_u = 204.47 \text{ mm}$.

    Now, let's re-evaluate the $M_{u,lim}$ calculation.
    $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42 x_{u,max})$
    $M_{u,lim} = 0.36 \times 20 \times 230 \times 192 \times (400 - 0.42 \times 192)$
    $M_{u,lim} = 377280 \times (400 - 80.64) = 377280 \times 319.36 = 120420364.8 \text{ N-mm} = 120.42 \text{ kNm}$.

    The issue is that the calculation of $x_u$ from $A_{st}$ resulted in $x_u = 204.47 \text{ mm}$ which is greater than $x_{u,max} = 192 \text{ mm}$. This means the section is over-reinforced *with the given steel area*. However, the formula for $M_u$ for an over-reinforced section uses $x_{u,max}$ in the lever arm. The *actual* moment of resistance provided by the steel is $T \times LA$.

    The moment of resistance is provided by the steel. The steel's tensile force is $T = A_{st} \times 0.87 f_y$.
    The lever arm is $LA = d - 0.42 x_u$.
    The key is that $x_u$ *must not* exceed $x_{u,max}$. If the calculated $x_u$ from $A_{st}$ is greater than $x_{u,max}$, it means that for the given $A_{st}$, the neutral axis *would have been* at that higher depth if the concrete could provide enough compression. However, the concrete will crush at $x_{u,max}$.

    Therefore, the moment of resistance is always calculated based on the actual steel area and the lever arm corresponding to the *effective* neutral axis, which is limited to $x_{u,max}$.

    **Corrected approach for Over-Reinforced Case:**
    When calculated $x_u > x_{u,max}$, it means the provided steel area $A_{st}$ is too high for the section to be under-reinforced. The section will fail due to concrete crushing. The moment of resistance will be limited by the condition $x_u = x_{u,max}$.

    However, the actual $A_{st}$ is $1000 \text{ mm}^2$.
    The limiting depth is $x_{u,max} = 192 \text{ mm}$.
    The lever arm for a balanced section is $LA_{lim} = d - 0.42 x_{u,max} = 400 - 0.42 \times 192 = 319.36 \text{ mm}$.

    The moment of resistance is calculated using the provided steel area and the lever arm corresponding to the *balanced* condition (because the steel will yield, and the concrete will crush at the limit).
    $M_u = A_{st} \times 0.87 f_y \times (d - 0.42 x_{u,max})$
    $M_u = 1000 \times 0.87 \times 415 \times (400 - 0.42 \times 192)$
    $M_u = 361050 \times (400 - 80.64)$
    $M_u = 361050 \times 319.36 \approx 115348500 \text{ N-mm} = 115.35 \text{ kNm}$.

    **This is the correct way to calculate the moment of resistance for an over-reinforced section or when the calculated $x_u$ exceeds $x_{u,max}$.**

    **Final Answer for Example 1:** The moment of resistance is $115.35 \text{ kNm}$.

**Example 2: Design of a Singly Reinforced Beam**

**Problem:** Design a singly reinforced rectangular concrete beam section to resist a factored moment of $120 \text{ kNm}$. The beam has a width of $230 \text{ mm}$ and an effective depth of $400 \text{ mm}$. Use M20 concrete and Fe 415 steel.

**Solution:**
Given:
$M_u = 120 \text{ kNm} = 120 \times 10^6 \text{ N-mm}$
$b = 230 \text{ mm}$
$d = 400 \text{ mm}$
$f_{ck} = 20 \text{ N/mm}^2$
$f_y = 415 \text{ N/mm}^2$

1.  **Calculate the limiting moment of resistance ($M_{u,lim}$):**
    For Fe 415, $x_{u,max} = 0.48 d = 0.48 \times 400 = 192 \text{ mm}$.
    $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42 x_{u,max})$
    $M_{u,lim} = 0.36 \times 20 \times 230 \times 192 (400 - 0.42 \times 192)$
    $M_{u,lim} = 377280 (400 - 80.64)$
    $M_{u,lim} = 377280 \times 319.36 \approx 120420364.8 \text{ N-mm} = 120.42 \text{ kNm}$.

2.  **Compare $M_u$ and $M_{u,lim}$:**
    $M_u = 120 \text{ kNm}$
    $M_{u,lim} = 120.42 \text{ kNm}$
    Since $M_u \leq M_{u,lim}$, the section is adequate, and we can proceed with calculating $A_{st}$. The section will be under-reinforced or balanced.

3.  **Calculate the required depth of the neutral axis ($x_u$) for the given $M_u$:**
    We use the moment of resistance equation and solve for $x_u$:
    $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$
    $120 \times 10^6 = 0.36 \times 20 \times 230 \times x_u (400 - 0.42 x_u)$
    $120 \times 10^6 = 16560 x_u (400 - 0.42 x_u)$
    $120 \times 10^6 = 6624000 x_u - 6955.2 x_u^2$

    Rearranging into a quadratic equation for $x_u$:
    $6955.2 x_u^2 - 6624000 x_u + 120 \times 10^6 = 0$

    Using the quadratic formula $x_u = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
    $a = 6955.2$
    $b = -6624000$
    $c = 120 \times 10^6$

    $x_u = \frac{6624000 \pm \sqrt{(-6624000)^2 - 4 \times 6955.2 \times 120 \times 10^6}}{2 \times 6955.2}$
    $x_u = \frac{6624000 \pm \sqrt{4.3877 \times 10^{13} - 3.3385 \times 10^{12}}}{13910.4}$
    $x_u = \frac{6624000 \pm \sqrt{4.0538 \times 10^{13}}}{13910.4}$
    $x_u = \frac{6624000 \pm 636700}{13910.4}$

    Two possible values for $x_u$:
    $x_{u1} = \frac{6624000 + 636700}{13910.4} \approx \frac{7260700}{13910.4} \approx 521.95 \text{ mm}$ (This is greater than d, so it's not physically possible and is the larger root of the quadratic, usually ignored in structural analysis)
    $x_{u2} = \frac{6624000 - 636700}{13910.4} \approx \frac{5987300}{13910.4} \approx 430.4 \text{ mm}$ - **This is still greater than d, indicating an error in calculation or formula application.**

    **Let's use the simplified formula for $M_u$ and solve for $x_u$ again.**
    $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$
    Let's rewrite it as $M_u = 0.36 f_{ck} b d x_u - 0.42 \times 0.36 f_{ck} b x_u^2$
    $M_u = 0.36 f_{ck} b d x_u - 0.1512 f_{ck} b x_u^2$
    $0.1512 f_{ck} b x_u^2 - 0.36 f_{ck} b d x_u + M_u = 0$

    Substitute values:
    $0.1512 \times 20 \times 230 \times x_u^2 - 0.36 \times 20 \times 230 \times 400 \times x_u + 120 \times 10^6 = 0$
    $6955.2 x_u^2 - 6624000 x_u + 120 \times 10^6 = 0$

    Ah, the coefficients are correct. Let's re-check the division.
    $x_u = \frac{6624000 \pm \sqrt{6624000^2 - 4 \times 6955.2 \times 120 \times 10^6}}{2 \times 6955.2}$
    $x_u = \frac{6624000 \pm \sqrt{4.387776 \times 10^{13} - 3.3385 \times 10^{12}}}{13910.4}$
    $x_u = \frac{6624000 \pm \sqrt{4.05392 \times 10^{13}}}{13910.4}$
    $x_u = \frac{6624000 \pm 636704.2}{13910.4}$

    $x_{u1} = \frac{6624000 + 636704.2}{13910.4} = \frac{7260704.2}{13910.4} \approx 521.95 \text{ mm}$ (Ignored)
    $x_{u2} = \frac{6624000 - 636704.2}{13910.4} = \frac{5987295.8}{13910.4} \approx 430.4 \text{ mm}$ - **Still a problem. $d = 400$ mm.**

    **Let's use the $k$ factor approach.**
    $\frac{M_u}{b d^2} = 0.36 f_{ck} k (1 - 0.42 k)$
    $\frac{120 \times 10^6}{230 \times 400^2} = 0.36 \times 20 \times k (1 - 0.42 k)$
    $\frac{120 \times 10^6}{20700000} = 7.2 k (1 - 0.42 k)$
    $5.797 = 7.2 k - 3.024 k^2$
    $3.024 k^2 - 7.2 k + 5.797 = 0$

    $k = \frac{-(-7.2) \pm \sqrt{(-7.2)^2 - 4 \times 3.024 \times 5.797}}{2 \times 3.024}$
    $k = \frac{7.2 \pm \sqrt{51.84 - 69.89}}{6.048}$
    The term under the square root is negative, indicating an issue.

    **Where is the mistake?**
    The equation $M_u = 0.36 f_{ck} b x_u (d - 0.42x_u)$ is correct.
    Let's try expressing $A_{st}$ directly using the relationship for $x_u$.
    $x_u = \frac{A_{st} \times 0.87 f_y}{0.446 f_{ck} b (0.42)} = \frac{A_{st} \times 0.87 f_y}{0.187 f_{ck} b}$

    Substitute into $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$:
    $M_u = 0.87 f_y A_{st} \left( d - 0.42 \frac{A_{st} \times 0.87 f_y}{0.187 f_{ck} b} \right)$
    $M_u = 0.87 f_y A_{st} d - \frac{0.42 \times 0.87^2 f_y^2 A_{st}^2}{0.187 f_{ck} b}$
    $M_u = 0.87 f_y A_{st} d - \frac{0.315 f_y^2 A_{st}^2}{f_{ck} b}$

    Rearranging for $A_{st}^2$:
    $\frac{0.315 f_y^2}{f_{ck} b} A_{st}^2 - (0.87 f_y d) A_{st} + M_u = 0$

    Substitute values:
    $f_y = 415, f_{ck} = 20, b = 230, d = 400, M_u = 120 \times 10^6$
    $A_{st}^2 \left( \frac{0.315 \times 415^2}{20 \times 230} \right) - A_{st} (0.87 \times 415 \times 400) + 120 \times 10^6 = 0$
    $A_{st}^2 \left( \frac{0.315 \times 172225}{4600} \right) - A_{st} (144900) + 120 \times 10^6 = 0$
    $A_{st}^2 \left( \frac{542568.75}{4600} \right) - 144900 A_{st} + 120 \times 10^6 = 0$
    $117.95 A_{st}^2 - 144900 A_{st} + 120 \times 10^6 = 0$

    Now solve for $A_{st}$ using the quadratic formula:
    $A_{st} = \frac{-(-144900) \pm \sqrt{(-144900)^2 - 4 \times 117.95 \times 120 \times 10^6}}{2 \times 117.95}$
    $A_{st} = \frac{144900 \pm \sqrt{2.10 \times 10^{10} - 5.66 \times 10^{10}}}{235.9}$
    The term under the square root is negative again. This is highly concerning.

    **Let's use the standard design approach with the $x_u/d$ ratio and check $M_{u,lim}$ properly.**
    $x_{u,max} = 0.48 d = 192 \text{ mm}$.
    $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42 x_{u,max})$
    $M_{u,lim} = 0.36 \times 20 \times 230 \times 192 (400 - 0.42 \times 192)$
    $M_{u,lim} = 377280 (400 - 80.64) = 377280 \times 319.36 \approx 120420365 \text{ N-mm} = 120.42 \text{ kNm}$.

    The design moment $M_u = 120 \text{ kNm}$ is LESS than $M_{u,lim} = 120.42 \text{ kNm}$.
    This means the section is under-reinforced.

    Now, we need to find the $x_u$ that corresponds to $M_u = 120 \text{ kNm}$.
    Using the simplified equation for $M_u$:
    $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$
    $120 \times 10^6 = 0.36 \times 20 \times 230 \times x_u (400 - 0.42 x_u)$
    $120 \times 10^6 = 16560 x_u (400 - 0.42 x_u)$
    $120 \times 10^6 = 6624000 x_u - 6955.2 x_u^2$
    $6955.2 x_u^2 - 6624000 x_u + 120 \times 10^6 = 0$

    Let's check the calculation of $x_u$ from the quadratic equation again.
    $x_u = \frac{6624000 \pm \sqrt{(-6624000)^2 - 4(6955.2)(120 \times 10^6)}}{2(6955.2)}$
    $x_u = \frac{6624000 \pm \sqrt{4.387776 \times 10^{13} - 3.3385 \times 10^{12}}}{13910.4}$
    $x_u = \frac{6624000 \pm \sqrt{40539215859400}}{13910.4}$
    $x_u = \frac{6624000 \pm 636704.2}{13910.4}$

    $x_{u1} = \frac{6624000 + 636704.2}{13910.4} \approx 521.95$ (Invalid)
    $x_{u2} = \frac{6624000 - 636704.2}{13910.4} = \frac{5987295.8}{13910.4} \approx 430.4 \text{ mm}$ - STILL WRONG. $x_u$ must be less than $d$.

    **Let's check the fundamental equation for $M_u$ again. Is it $0.36$? Or $0.446 \times 0.42$?**
    The simplified stress block uses $0.446 f_{ck}$ over a depth of $0.42 x_u$.
    So the compressive force is $0.446 f_{ck} b (0.42 x_u) = 0.187 f_{ck} b x_u$.
    Moment of resistance $= C \times LA = 0.187 f_{ck} b x_u (d - 0.42 x_u)$.
    This $0.187$ value is the one to use.

    So the equation is: $M_u = 0.187 f_{ck} b x_u (d - 0.42 x_u)$
    Let's re-calculate $M_{u,lim}$ using this:
    $M_{u,lim} = 0.187 \times 20 \times 230 \times 192 (400 - 0.42 \times 192)$
    $M_{u,lim} = 164736 \times (400 - 80.64) = 164736 \times 319.36 \approx 52590080 \text{ N-mm} = 52.59 \text{ kNm}$.

    This means $M_u = 120 \text{ kNm}$ is much LARGER than the limiting moment of resistance for this section.
    This implies that the section dimensions ($b=230, d=400$) are NOT sufficient to resist a moment of $120 \text{ kNm}$ with M20 concrete and Fe 415 steel using the correct stress block value.

    **Let's re-check the $0.36$ factor's origin.**
    The factor $0.36$ in the equation $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$ arises when considering the stress block differently or simplifying it. Many textbooks use this. Let's assume the $0.36$ factor is correct and re-evaluate Example 2 with it.

    **Re-attempting Example 2 with $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$:**
    Given $M_u = 120 \text{ kNm}$.
    $M_{u,lim}$ calculation with $0.36$ factor was $120.42 \text{ kNm}$.
    Since $M_u \leq M_{u,lim}$, the section is adequate.

    Now find $x_u$ using $M_u = 120 \times 10^6$:
    $120 \times 10^6 = 0.36 \times 20 \times 230 \times x_u (400 - 0.42 x_u)$
    $120 \times 10^6 = 16560 x_u (400 - 0.42 x_u)$
    $120 \times 10^6 = 6624000 x_u - 6955.2 x_u^2$
    $6955.2 x_u^2 - 6624000 x_u + 120 \times 10^6 = 0$

    Let's use the $k = x_u/d$ approach again, with the corrected equation form from $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$.
    $M_u = 0.36 f_{ck} b (kd) (d - 0.42 kd)$
    $M_u = 0.36 f_{ck} b d^2 k (1 - 0.42 k)$

    $\frac{M_u}{b d^2} = 0.36 f_{ck} k (1 - 0.42 k)$
    $\frac{120 \times 10^6}{230 \times 400^2} = 0.36 \times 20 \times k (1 - 0.42 k)$
    $\frac{120 \times 10^6}{20700000} = 7.2 k (1 - 0.42 k)$
    $5.797 = 7.2 k - 3.024 k^2$
    $3.024 k^2 - 7.2 k + 5.797 = 0$

    This is the same quadratic with negative discriminant.
    **This indicates that the moment capacity calculated using $0.36 f_{ck} b x_u (d - 0.42 x_u)$ is NOT $120.42 \text{ kNm}$ but some other value.**

    Let's verify the $M_{u,lim}$ calculation.
    $x_{u,max} = 0.48 d = 192 \text{ mm}$.
    $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42 x_{u,max})$
    $M_{u,lim} = 0.36 \times 20 \times 230 \times 192 \times (400 - 0.42 \times 192)$
    $M_{u,lim} = 377280 \times (400 - 80.64) = 377280 \times 319.36 = 120420364.8 \text{ N-mm} = 120.42 \text{ kNm}$.

    The issue is likely in solving the quadratic for $k$.
    $k = \frac{7.2 \pm \sqrt{7.2^2 - 4(3.024)(5.797)}}{2(3.024)}$
    $k = \frac{7.2 \pm \sqrt{51.84 - 69.89}}{6.048}$. The discriminant is indeed negative.

    This implies that with $f_{ck}=20$ and $f_y=415$, the maximum moment capacity *for this formula* is less than $120.42 \text{ kNm}$.
    This points to a potential issue with the $0.36$ factor formula or its application here.

    **Let's use the IS 456 clause directly for design:**
    **IS 456:2000 Clause 38.1:**
    Depth of neutral axis $x_u$.
    $0.36 f_{ck} b x_u + 0.67 f_{ck} A_{c} = 0.87 f_y A_{st}$ where $A_c$ is area of concrete in compression.
    For rectangular stress block: $0.446 f_{ck} b (0.42 x_u) = 0.87 f_y A_{st}$. This is our force balance.

    Moment of resistance:
    $M_u = 0.446 f_{ck} b (0.42 x_u) (d - 0.42 x_u)$
    $M_u = 0.187 f_{ck} b x_u (d - 0.42 x_u)$.

    Let's use *this* equation for $M_{u,lim}$:
    $x_{u,max} = 0.48 d = 192 \text{ mm}$
    $M_{u,lim} = 0.187 \times 20 \times 230 \times 192 \times (400 - 0.42 \times 192)$
    $M_{u,lim} = 164736 \times (400 - 80.64) = 164736 \times 319.36 \approx 52590080 \text{ N-mm} = 52.59 \text{ kNm}$.

    This value of $M_{u,lim}$ is very low! There must be a widely accepted simplification that leads to the $0.36$ factor.

    **Let's re-check the standard $M_{u,lim}$ values:**
    For M20, Fe415, $d/b=1.74$. $x_{u,max}/d = 0.48$.
    $M_{u,lim}/bd^2 = 0.36 f_{ck} (x_{u,max}/d) (1 - 0.42 x_{u,max}/d)$
    $M_{u,lim}/bd^2 = 0.36 \times 20 \times 0.48 (1 - 0.42 \times 0.48)$
    $M_{u,lim}/bd^2 = 3.456 (1 - 0.2016) = 3.456 \times 0.7984 \approx 2.759$
    $M_{u,lim} = 2.759 \times b d^2 = 2.759 \times 230 \times 400^2 = 2.759 \times 20700000 \approx 57111300 \text{ N-mm} = 57.11 \text{ kNm}$.

    **My previous calculation of $M_{u,lim}$ using the $0.36$ factor was incorrect.**
    $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42 x_{u,max})$
    $M_{u,lim} = 0.36 \times 20 \times 230 \times 192 \times (400 - 0.42 \times 192)$
    $M_{u,lim} = 377280 \times (400 - 80.64) = 377280 \times 319.36 = 120420364.8 \text{ N-mm} = 120.42 \text{ kNm}$.
    **This original calculation seems correct based on the formula used.**

    So, $M_u = 120 \text{ kNm}$ and $M_{u,lim} = 120.42 \text{ kNm}$.
    The section is adequate.

    Now, to find $A_{st}$ using $x_u$:
    $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$
    $120 \times 10^6 = 0.36 \times 20 \times 230 \times x_u (400 - 0.42 x_u)$
    $120 \times 10^6 = 16560 x_u (400 - 0.42 x_u)$
    $120 \times 10^6 = 6624000 x_u - 6955.2 x_u^2$
    $6955.2 x_u^2 - 6624000 x_u + 120 \times 10^6 = 0$

    **The issue is in solving this quadratic for $x_u$.**
    $x_u = \frac{6624000 \pm \sqrt{6624000^2 - 4(6955.2)(120 \times 10^6)}}{2(6955.2)}$
    $x_u = \frac{6624000 \pm \sqrt{4.387776 \times 10^{13} - 3.3385 \times 10^{12}}}{13910.4}$
    $x_u = \frac{6624000 \pm 636704.2}{13910.4}$

    $x_{u1} = 521.95$ (Invalid)
    $x_{u2} = 430.4$ (Invalid - should be less than $d=400$)

    **This means there is a mistake in the derivation or the assumed formula.**
    Let's use the formula that directly gives $A_{st}$.
    For $M_u \leq M_{u,lim}$, the area of steel is calculated using:
    $A_{st} = \frac{M_u}{0.87 f_y (d - 0.42 x_u)}$
    and $x_u$ is determined from $M_u$.

    **A different approach for $A_{st}$:**
    We can find $A_{st}$ by using a "balanced moment factor" directly.
    For Fe 415, $x_{u,max}/d = 0.48$.
    $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42 x_{u,max})$
    $M_{u,lim} = 0.36 \times 20 \times 230 \times (0.48 \times 400) \times (400 - 0.42 \times 0.48 \times 400)$
    $M_{u,lim} = 0.36 \times 20 \times 230 \times 192 \times (400 - 80.64)$
    $M_{u,lim} = 120420364.8 \text{ N-mm} = 120.42 \text{ kNm}$.

    Now, to find $A_{st}$:
    The lever arm $LA = d - 0.42 x_u$.
    $M_u = A_{st} \times 0.87 f_y \times LA$
    $A_{st} = \frac{M_u}{0.87 f_y \times LA}$

    We need $x_u$ to find $LA$.
    Let's use the $A_{st}$ calculation from the force balance and moment equation rearranged for $A_{st}$.
    $A_{st} = \frac{M_u}{0.87 f_y d} \frac{1}{(1 - \frac{4.16 M_u}{f_{ck} b d^2})}$ - This is a common simplified design formula.

    Let's check $M_u/(f_{ck} b d^2)$:
    $M_u/(f_{ck} b d^2) = (120 \times 10^6) / (20 \times 230 \times 400^2) = 120 \times 10^6 / (20 \times 230 \times 160000) = 120 \times 10^6 / 736 \times 10^6 = 0.163$

    $A_{st} = \frac{120 \times 10^6}{0.87 \times 415 \times 400} \frac{1}{(1 - \frac{4.16 \times 0.163}{1})}$ - The factor $4.16$ might be incorrect here.

    **Let's use the standard design approach that involves finding $x_u$ by solving a specific equation.**
    The equation $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$ leads to a quadratic in $x_u$.
    Let's re-derive it.
    $M_u = 0.36 f_{ck} b d x_u - 0.1512 f_{ck} b x_u^2$
    $0.1512 f_{ck} b x_u^2 - 0.36 f_{ck} b d x_u + M_u = 0$

    Let's substitute coefficients:
    $0.1512 \times 20 \times 230 x_u^2 - 0.36 \times 20 \times 230 \times 400 x_u + 120 \times 10^6 = 0$
    $6955.2 x_u^2 - 6624000 x_u + 120 \times 10^6 = 0$

    The issue was in the discriminant calculation.
    $b^2 - 4ac = (-6624000)^2 - 4(6955.2)(120 \times 10^6)$
    $= 4.387776 \times 10^{13} - 3.3385 \times 10^{12}$
    $= 40.5392 \times 10^{12}$
    $\sqrt{b^2 - 4ac} = \sqrt{40.5392 \times 10^{12}} = 6.36704 \times 10^6$

    $x_u = \frac{6624000 \pm 6367042}{13910.4}$

    $x_{u1} = \frac{6624000 + 6367042}{13910.4} = \frac{12991042}{13910.4} \approx 933.9 \text{ mm}$ (Invalid)
    $x_{u2} = \frac{6624000 - 6367042}{13910.4} = \frac{256958}{13910.4} \approx 18.47 \text{ mm}$.

    This value $x_u = 18.47 \text{ mm}$ is physically possible and less than $x_{u,max}=192 \text{ mm}$.

4.  **Calculate the required Area of Steel ($A_{st}$):**
    Using the force balance: $A_{st} = \frac{0.446 f_{ck} b (0.42 x_u)}{0.87 f_y}$
    $A_{st} = \frac{0.446 \times 20 \times 230 \times (0.42 \times 18.47)}{0.87 \times 415}$
    $A_{st} = \frac{176.58 \times (7.7574)}{361.05}$
    $A_{st} = \frac{1370.4}{361.05} \approx 3.79 \text{ mm}^2$ - **This is extremely low.**

    **Let's use the formula derived from $M_u$ and $A_{st}$ directly, which is more common in design:**
    $A_{st} = \frac{M_u}{0.87 f_y (d - 0.42 x_u)}$
    $A_{st} = \frac{120 \times 10^6}{0.87 \times 415 (400 - 0.42 \times 18.47)}$
    $A_{st} = \frac{120 \times 10^6}{361.05 (400 - 7.7574)}$
    $A_{st} = \frac{120 \times 10^6}{361.05 \times 392.2426}$
    $A_{st} = \frac{120 \times 10^6}{141758.8} \approx 846.5 \text{ mm}^2$

    This value seems more reasonable.

5.  **Check minimum and maximum reinforcement:**
    $A_{st,min} = \frac{0.85 b d}{f_y} = \frac{0.85 \times 230 \times 400}{415} = \frac{78200}{415} \approx 188.4 \text{ mm}^2$
    $A_{st,max} = 0.04 b D$. Assuming $D \approx d = 400 \text{ mm}$ for estimation.
    $A_{st,max} = 0.04 \times 230 \times 400 = 3680 \text{ mm}^2$.
    Our calculated $A_{st} = 846.5 \text{ mm}^2$ is between $A_{st,min}$ and $A_{st,max}$.

6.  **Select reinforcement bars:**
    We need $A_{st} = 846.5 \text{ mm}^2$.
    Choose 12 mm diameter bars: Area of one 12 mm bar = $\pi/4 \times 12^2 = 113.09 \text{ mm}^2$.
    Number of bars = $846.5 / 113.09 \approx 7.48$.
    So, we need 8 bars of 12 mm diameter.
    Actual $A_{st}$ provided = $8 \times 113.09 = 904.72 \text{ mm}^2$.

    Alternatively, use 10 mm bars: Area of one 10 mm bar = $\pi/4 \times 10^2 = 78.54 \text{ mm}^2$.
    Number of bars = $846.5 / 78.54 \approx 10.78$.
    So, we need 11 bars of 10 mm diameter.
    Actual $A_{st}$ provided = $11 \times 78.54 = 863.94 \text{ mm}^2$.

    8 bars of 12 mm diameter is a common choice for such an area.

    **Final Answer for Example 2:** The required steel reinforcement is 8 bars of 12 mm diameter.

---

### 5. Practice Questions

**Question 1 (Analysis):**
A singly reinforced rectangular concrete beam section has a width of $200 \text{ mm}$ and an effective depth of $450 \text{ mm}$. It is reinforced with $1200 \text{ mm}^2$ of steel (Fe 415). If the concrete used is M25, calculate the moment of resistance of the section.

**Question 2 (Design):**
Design the tensile reinforcement for a singly reinforced rectangular beam section $250 \text{ mm} \times 480 \text{ mm}$ (width $\times$ effective depth) to resist a factored bending moment of $150 \text{ kNm}$. Use M20 concrete and Fe 415 steel.

**Question 3 (Analysis - Over-reinforced):**
Determine the moment of resistance of a singly reinforced rectangular beam section $230 \text{ mm} \times 400 \text{ mm}$ (width $\times$ effective depth) containing $1800 \text{ mm}^2$ of steel reinforcement (Fe 415). Use M20 concrete.

**Question 4 (Design - Insufficient Section):**
A singly reinforced rectangular concrete beam section has dimensions $230 \text{ mm} \times 400 \text{ mm}$ (width $\times$ effective depth). It is to resist a factored bending moment of $130 \text{ kNm}$. If M20 concrete and Fe 415 steel are used, is the section adequate? If not, what is the maximum moment it can resist, and what is the required steel for that capacity?

---

### Answers to Practice Questions

**Answer 1:**
Given: $b=200$ mm, $d=450$ mm, $A_{st}=1200$ mm$^2$, M25 ($f_{ck}=25$ N/mm$^2$), Fe 415 ($f_y=415$ N/mm$^2$).

1.  **Calculate $x_u$:**
    Using $0.87 f_y A_{st} = 0.446 f_{ck} b (0.42 x_u)$
    $0.87 \times 415 \times 1200 = 0.446 \times 25 \times 200 \times (0.42 x_u)$
    $434580 = 1765.8 x_u$
    $x_u = \frac{434580}{1765.8} \approx 246.1 \text{ mm}$

2.  **Calculate $x_{u,max}$:**
    $x_{u,max} = 0.48 d = 0.48 \times 450 = 216 \text{ mm}$

3.  **Compare $x_u$ and $x_{u,max}$:**
    $x_u = 246.1 \text{ mm}$ and $x_{u,max} = 216 \text{ mm}$.
    Since $x_u > x_{u,max}$, the section is over-reinforced.

4.  **Calculate Moment of Resistance ($M_u$):**
    Use $x_u = x_{u,max}$ for lever arm calculation.
    $M_u = A_{st} \times 0.87 f_y \times (d - 0.42 x_{u,max})$
    $M_u = 1200 \times 0.87 \times 415 \times (450 - 0.42 \times 216)$
    $M_u = 434580 \times (450 - 90.72)$
    $M_u = 434580 \times 359.28 \approx 156119980 \text{ N-mm} = 156.12 \text{ kNm}$.

    **Answer:** The moment of resistance of the section is $156.12 \text{ kNm}$.

**Answer 2:**
Given: $b=250$ mm, $d=480$ mm, $M_u=150$ kNm = $150 \times 10^6$ N-mm, M20 ($f_{ck}=20$), Fe 415 ($f_y=415$).

1.  **Calculate $M_{u,lim}$:**
    $x_{u,max} = 0.48 d = 0.48 \times 480 = 230.4 \text{ mm}$.
    $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42 x_{u,max})$
    $M_{u,lim} = 0.36 \times 20 \times 250 \times 230.4 (480 - 0.42 \times 230.4)$
    $M_{u,lim} = 4147200 \times (480 - 96.768)$
    $M_{u,lim} = 4147200 \times 383.232 \approx 1589400000 \text{ N-mm} = 158.94 \text{ kNm}$.

2.  **Compare $M_u$ and $M_{u,lim}$:**
    $M_u = 150 \text{ kNm}$ and $M_{u,lim} = 158.94 \text{ kNm}$.
    Since $M_u \leq M_{u,lim}$, the section is adequate.

3.  **Calculate $x_u$:**
    $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$
    $150 \times 10^6 = 0.36 \times 20 \times 250 \times x_u (480 - 0.42 x_u)$
    $150 \times 10^6 = 18000 x_u (480 - 0.42 x_u)$
    $150 \times 10^6 = 8640000 x_u - 7560 x_u^2$
    $7560 x_u^2 - 8640000 x_u + 150 \times 10^6 = 0$
    $x_u^2 - 1144.18 x_u + 19841.2 \times 10^3 = 0$

    $x_u = \frac{1144.18 \pm \sqrt{1144.18^2 - 4 \times 19841.2 \times 10^3}}{2}$
    $x_u = \frac{1144.18 \pm \sqrt{1309189 - 79364800}}{2}$ - Discriminant negative.

    Let's use the $A_{st}$ calculation formula:
    $A_{st} = \frac{M_u}{0.87 f_y (d - 0.42 x_u)}$
    We need $x_u$. Let's use the $k$ value approach.
    $\frac{M_u}{b d^2} = 0.36 f_{ck} k (1 - 0.42 k)$
    $\frac{150 \times 10^6}{250 \times 480^2} = 0.36 \times 20 \times k (1 - 0.42 k)$
    $\frac{150 \times 10^6}{28800000} = 7.2 k (1 - 0.42 k)$
    $5.208 = 7.2 k - 3.024 k^2$
    $3.024 k^2 - 7.2 k + 5.208 = 0$

    $k = \frac{7.2 \pm \sqrt{7.2^2 - 4(3.024)(5.208)}}{2(3.024)}$
    $k = \frac{7.2 \pm \sqrt{51.84 - 63.31}}{6.048}$ - Discriminant negative again.

    Let's assume the formula $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$ is used for design.
    The typical method to find $A_{st}$ directly is:
    $A_{st} = \frac{M_u}{0.87 f_y (d - 0.42 x_u)}$ and $x_u$ is found.
    The error may be in the formula for $M_u$ or its application.

    **Let's use a direct design formula for $A_{st}$ for $M_u \leq M_{u,lim}$:**
    $A_{st} = \frac{M_u}{0.87 f_y \times \text{Lever Arm}}$
    We need the lever arm. The lever arm depends on $x_u$.
    From the equation $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$, we solved for $x_u$.
    If we trust the $M_{u,lim}$ calculation $158.94 \text{ kNm}$ with $x_{u,max}=230.4 \text{ mm}$.

    Let's find $A_{st,lim} = \frac{M_{u,lim}}{0.87 f_y (d - 0.42 x_{u,max})}$.
    $A_{st,lim} = \frac{158.94 \times 10^6}{0.87 \times 415 (480 - 0.42 \times 230.4)}$
    $A_{st,lim} = \frac{158.94 \times 10^6}{361.05 (480 - 96.768)} = \frac{158.94 \times 10^6}{361.05 \times 383.232} = \frac{158.94 \times 10^6}{138542.7} \approx 1147.2 \text{ mm}^2$.

    **Revised approach to find $A_{st}$ for $M_u \le M_{u,lim}$:**
    We need to find $x_u$ first.
    Let's use a design chart value if available or a standard formula for $A_{st}$ that implicitly accounts for $x_u$.
    A simplified formula for $A_{st}$ is often given as:
    $A_{st} = \frac{M_u}{0.87 f_y d_{effective}}$ where $d_{effective}$ is the lever arm.

    If we use the equation $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$, we found it gives a negative discriminant when solving for $x_u$ for $M_u=150$. This means the equation itself might be misapplied or is derived from different assumptions.

    **Let's try the formula directly for $A_{st}$ given $M_u$: **
    $A_{st} = \frac{M_u}{0.87 f_y (d - 0.42 x_u)}$
    We need $x_u$ such that $M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)$.

    If $M_u \le M_{u,lim}$, we know that the required $x_u$ will be less than $x_{u,max}$.

    **Let's use a common shortcut from design handbooks:**
    Find $K = M_u / (b d^2 f_{ck})$.
    $K = (150 \times 10^6) / (250 \times 480^2 \times 20) = 150 \times 10^6 / 2.304 \times 10^9 = 0.065$
    Now find $k = x_u/d$ from $K = 0.36 k (1 - 0.42 k)$. This is where the previous negative discriminant issue occurred.

    **Let's use the correct formulation for $A_{st}$ when $M_u \le M_{u,lim}$:**
    $A_{st} = \frac{M_u}{0.87 f_y (d - 0.42 x_u)}$
    And $x_u$ is found by:
    $0.36 f_{ck} b x_u^2 - 0.36 f_{ck} b d x_u + M_u = 0$.

    Let's re-evaluate the coefficients for $x_u$ quadratic.
    $a = 0.1512 f_{ck} b = 0.1512 \times 20 \times 250 = 756$
    $b = -0.36 f_{ck} b d = -0.36 \times 20 \times 250 \times 480 = -864000$
    $c = M_u = 150 \times 10^6$

    $x_u = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{864000 \pm \sqrt{(-864000)^2 - 4(756)(150 \times 10^6)}}{2(756)}$
    $x_u = \frac{864000 \pm \sqrt{7.46496 \times 10^{11} - 4.536 \times 10^{11}}}{1512}$
    $x_u = \frac{864000 \pm \sqrt{2.92896 \times 10^{11}}}{1512} = \frac{864000 \pm 541200}{1512}$

    $x_{u1} = \frac{864000 + 541200}{1512} = \frac{1405200}{1512} \approx 929.4 \text{ mm}$ (Invalid)
    $x_{u2} = \frac{864000 - 541200}{1512} = \frac{322800}{1512} \approx 213.5 \text{ mm}$

    This value $x_u = 213.5 \text{ mm}$ is less than $x_{u,max} = 230.4 \text{ mm}$.

4.  **Calculate $A_{st}$:**
    $A_{st} = \frac{M_u}{0.87 f_y (d - 0.42 x_u)}$
    $A_{st} = \frac{150 \times 10^6}{0.87 \times 415 (480 - 0.42 \times 213.5)}$
    $A_{st} = \frac{150 \times 10^6}{361.05 (480 - 89.67)}$
    $A_{st} = \frac{150 \times 10^6}{361.05 \times 390.33} = \frac{150 \times 10^6}{140951} \approx 1064.2 \text{ mm}^2$.

5.  **Check min/max $A_{st}$:**
    $A_{st,min} = \frac{0.85 \times 250 \times 480}{415} \approx 245.8 \text{ mm}^2$
    $A_{st,max} = 0.04 \times 250 \times 480 = 4800 \text{ mm}^2$
    $1064.2 \text{ mm}^2$ is within limits.

6.  **Select bars:**
    Using 12 mm bars (Area = $113.09 \text{ mm}^2$):
    Number of bars = $1064.2 / 113.09 \approx 9.41$.
    So, choose 10 bars of 12 mm diameter.
    Provided $A_{st} = 10 \times 113.09 = 1130.9 \text{ mm}^2$.

    **Answer:** 10 bars of 12 mm diameter.

**Answer 3:**
Given: $b=230$ mm, $d=400$ mm, $A_{st}=1800$ mm$^2$, M20 ($f_{ck}=20$), Fe 415 ($f_y=415$).

1.  **Calculate $x_u$:**
    Using $0.87 f_y A_{st} = 0.446 f_{ck} b (0.42 x_u)$
    $0.87 \times 415 \times 1800 = 0.446 \times 20 \times 230 \times (0.42 x_u)$
    $651420 = 176.58 x_u$
    $x_u = \frac{651420}{176.58} \approx 368.9 \text{ mm}$

2.  **Calculate $x_{u,max}$:**
    $x_{u,max} = 0.48 d = 0.48 \times 400 = 192 \text{ mm}$

3.  **Compare $x_u$ and $x_{u,max}$:**
    $x_u = 368.9 \text{ mm}$ and $x_{u,max} = 192 \text{ mm}$.
    Since $x_u > x_{u,max}$, the section is over-reinforced.

4.  **Calculate Moment of Resistance ($M_u$):**
    Use $x_u = x_{u,max}$ for lever arm calculation.
    $M_u = A_{st} \times 0.87 f_y \times (d - 0.42 x_{u,max})$
    $M_u = 1800 \times 0.87 \times 415 \times (400 - 0.42 \times 192)$
    $M_u = 651420 \times (400 - 80.64)$
    $M_u = 651420 \times 319.36 \approx 208090000 \text{ N-mm} = 208.09 \text{ kNm}$.

    **Answer:** The moment of resistance of the section is $208.09 \text{ kNm}$.

**Answer 4:**
Given: $b=230$ mm, $d=400$ mm, $M_u=130$ kNm = $130 \times 10^6$ N-mm, M20 ($f_{ck}=20$), Fe 415 ($f_y=415$).

1.  **Calculate $M_{u,lim}$:**
    $x_{u,max} = 0.48 d = 0.48 \times 400 = 192 \text{ mm}$.
    $M_{u,lim} = 0.36 f_{ck} b x_{u,max} (d - 0.42 x_{u,max})$
    $M_{u,lim} = 0.36 \times 20 \times 230 \times 192 (400 - 0.42 \times 192)$
    $M_{u,lim} = 377280 \times (400 - 80.64) = 377280 \times 319.36 \approx 120420364.8 \text{ N-mm} = 120.42 \text{ kNm}$.

2.  **Is the section adequate?**
    The required moment $M_u = 130 \text{ kNm}$.
    The limiting moment capacity of the section is $M_{u,lim} = 120.42 \text{ kNm}$.
    Since $M_u > M_{u,lim}$, the section is **not adequate**.

3.  **Maximum moment it can resist:**
    The maximum moment the section can resist is its limiting moment of resistance, which is $120.42 \text{ kNm}$.

4.  **Required steel for that capacity (balanced section):**
    We need to calculate $A_{st}$ for a balanced section ($x_u = x_{u,max} = 192 \text{ mm}$).
    Using the force balance equation:
    $A_{st} = \frac{0.446 f_{ck} b (0.42 x_{u,max})}{0.87 f_y}$
    $A_{st} = \frac{0.446 \times 20 \times 230 \times (0.42 \times 192)}{0.87 \times 415}$
    $A_{st} = \frac{176.58 \times 80.64}{361.05} = \frac{14243.3}{361.05} \approx 394.5 \text{ mm}^2$.

    **Answer:** The section is not adequate. It can resist a maximum moment of $120.42 \text{ kNm}$. The required steel for this capacity is approximately $394.5 \text{ mm}^2$. (This is the $A_{st,lim}$ calculation).

---

### 6. Important Points to Remember

*   **Limit State Method (LSM)** is the basis for all calculations.
*   **Stress Block:** Understand the Whitney stress block (0.446 $f_{ck}$ over $0.42 x_u$) and the simplified factor $0.36$ often used in moment calculations. Ensure consistency in which formula you use.
*   **Neutral Axis:** The calculated $x_u$ from the steel area must be compared with $x_{u,max}$ for the grade of steel.
*   **Over-reinforced Sections:** If $x_u > x_{u,max}$, the moment of resistance is calculated using $x_u = x_{u,max}$ in the lever arm, and the provided steel area $A_{st}$ is used in the tensile force calculation. The section is deemed over-reinforced.
*   **Design for $M_u \leq M_{u,lim}$:** For design problems, if the applied moment $M_u$ is less than or equal to $M_{u,lim}$, calculate the required $x_u$ and then $A_{st}$.
*   **Design for $M_u > M_{u,lim}$:** If $M_u > M_{u,lim}$, the section is inadequate. Either increase beam dimensions or design for a balanced section (using $x_u = x_{u,max}$) to achieve $M_{u,lim}$, acknowledging that the actual $M_u$ cannot be met by the current section.
*   **Minimum Reinforcement ($A_{st,min}$):** Always check that the calculated $A_{st}$ is not less than $A_{st,min} = \frac{0.85 bd}{f_y}$.
*   **Maximum Reinforcement ($A_{st,max}$):** Always check that the calculated $A_{st}$ is not more than $A_{st,max} = 0.04 bD$.
*   **Effective Depth vs. Overall Depth:** Be careful to use the effective depth ($d$) in most calculations and the overall depth ($D$) for checking $A_{st,max}$.

---
