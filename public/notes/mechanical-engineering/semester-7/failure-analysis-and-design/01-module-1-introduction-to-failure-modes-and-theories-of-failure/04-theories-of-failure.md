---
title: "Theories of failure"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 1: Introduction to Failure Modes and Theories of Failure"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463dcf"
status: "completed"
scrapedAt: "2026-05-20T18:12:23.786Z"
---
# FAILURE ANALYSIS AND DESIGN - Module 1: Introduction to Failure Modes and Theories of Failure

## Topic: Theories of Failure

### 1. Introduction to Theories of Failure

Theories of failure are essential tools in **FAILURE ANALYSIS AND DESIGN** to predict when a material will fail under a given stress state. They provide a basis for selecting materials and designing components that can withstand expected loads and operating conditions without succumbing to fracture or excessive deformation. Understanding these theories allows engineers to prevent catastrophic failures and ensure the reliability and safety of mechanical systems.

**Key Concept:** Failure in a mechanical component can manifest as either **yielding** (permanent deformation) or **fracture** (separation of material). Theories of failure primarily focus on predicting these failure modes under complex stress states.

**Alignment with Course Outcomes:**
*   **CO1:** Understand the different theories of failure and material behaviour under various loading conditions. (Knowledge Level: K2)

**References:**
*   **Jones D. R. H. (1993).** *Materials Failure Analysis: Case Studies and Design Implications.* (Pergamon Press.) - Provides case studies illustrating failure and the importance of material behavior.
*   **Collins, J. A. (2013).** *Failure of Materials in Mechanical Design.* (Wiley Interscience Publishers, 2nd Edition.) - Offers a comprehensive treatment of failure mechanisms and design considerations.

---

### 2. Stress State and Material Properties

Before delving into the theories of failure, it's crucial to understand the stress state and relevant material properties.

#### 2.1 Stress State

A general stress state at a point in a material is described by a **stress tensor**, which is a $3 \times 3$ matrix containing nine stress components. For many practical applications, we can simplify this to a **principal stress state**, where the stresses act on planes with no shear stress. These are known as the **principal stresses**: $\sigma_1$, $\sigma_2$, and $\sigma_3$.

*   **Uniaxial Stress:** Stress applied in one direction (e.g., tension or compression).
*   **Biaxial Stress:** Stress applied in two perpendicular directions.
*   **Triaxial Stress:** Stress applied in three perpendicular directions (often involving hydrostatic stress).

#### 2.2 Material Properties

Key material properties used in failure theories include:

*   **Yield Strength ($\sigma_y$):** The stress at which a material begins to deform plastically.
*   **Ultimate Tensile Strength (UTS):** The maximum stress a material can withstand before necking and fracturing.
*   **Tensile Strength:** Similar to UTS, but often used interchangeably in some contexts.
*   **Compressive Strength:** The maximum compressive stress a material can withstand before failure.
*   **Ductility:** The ability of a material to deform plastically before fracturing (measured by elongation and reduction in area).
*   **Strength Coefficients:** Used in some more advanced theories.

**Important Point to Remember:** Theories of failure are developed based on the material's behavior under **uniaxial tensile or compressive loading**. They then extrapolate this behavior to predict failure under more complex stress states.

---

### 3. Theories of Failure for Ductile Materials

Ductile materials, characterized by significant plastic deformation before fracture, typically fail by **yielding**. Several theories predict yielding under combined stress states.

#### 3.1 Maximum Shear Stress Theory (Tresca's Criterion)

This theory states that yielding occurs when the maximum shear stress in the material reaches the shear stress at yielding in a simple tension test.

*   **Concept:** The maximum shear stress is half the difference between the largest and smallest principal stresses.
*   **Formula:** $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2}$
*   **Failure Condition:** $\tau_{max} \ge \tau_y$
    *   Where $\tau_y$ is the shear yield strength, which is related to the tensile yield strength $\sigma_y$ by: $\tau_y = \frac{\sigma_y}{2}$.
*   **In terms of principal stresses:** $\frac{\sigma_1 - \sigma_3}{2} \ge \frac{\sigma_y}{2} \implies \sigma_1 - \sigma_3 \ge \sigma_y$

**Example:** Consider a material with a tensile yield strength $\sigma_y = 200$ MPa.
*   If the principal stresses are $\sigma_1 = 150$ MPa, $\sigma_2 = 50$ MPa, and $\sigma_3 = -100$ MPa, then $\sigma_1 - \sigma_3 = 150 - (-100) = 250$ MPa.
*   Since $250 \text{ MPa} > 200 \text{ MPa}$, the material would be predicted to yield according to this theory.

**Reference:**
*   **Collins, J. A. (2013).** *Failure of Materials in Mechanical Design.* (Wiley Interscience Publishers, 2nd Edition.) - Details the derivation and application of various yield criteria.

#### 3.2 Distortion Energy Theory (Von Mises' Criterion)

This theory states that yielding occurs when the **distortion energy per unit volume** reaches the distortion energy per unit volume at yielding in a simple tension test. This theory is generally considered more accurate for ductile materials than the Maximum Shear Stress Theory.

*   **Concept:** It's based on the idea that plastic deformation is caused by the distortion of the material's atomic lattice, which is related to the deviatoric stress components. The distortion energy is the energy associated with these deviatoric stresses.
*   **Formula (Equivalent Stress, $\sigma_{VM}$):**
    $\sigma_{VM} = \sqrt{\frac{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}{2}}$
*   **Failure Condition:** $\sigma_{VM} \ge \sigma_y$

**Example:** Using the same material with $\sigma_y = 200$ MPa and principal stresses $\sigma_1 = 150$ MPa, $\sigma_2 = 50$ MPa, and $\sigma_3 = -100$ MPa:
*   $\sigma_1 - \sigma_2 = 150 - 50 = 100$ MPa
*   $\sigma_2 - \sigma_3 = 50 - (-100) = 150$ MPa
*   $\sigma_3 - \sigma_1 = -100 - 150 = -250$ MPa
*   $\sigma_{VM} = \sqrt{\frac{(100)^2 + (150)^2 + (-250)^2}{2}} = \sqrt{\frac{10000 + 22500 + 62500}{2}} = \sqrt{\frac{95000}{2}} = \sqrt{47500} \approx 217.9$ MPa
*   Since $217.9 \text{ MPa} > 200 \text{ MPa}$, the material would be predicted to yield according to this theory.

**Comparison with Tresca:**
*   Tresca's criterion is more conservative (predicts failure at lower stress levels) than Von Mises' criterion for most stress states.
*   Von Mises' criterion generally matches experimental results for ductile materials more closely.

**Alignment with Course Outcomes:**
*   **CO1:** Understand the different theories of failure and material behaviour under various loading conditions. (Knowledge Level: K2)

**Reference:**
*   **Jones D. R. H. (1993).** *Materials Failure Analysis: Case Studies and Design Implications.* (Pergamon Press.) - Discusses the application of these theories in analyzing material failures.

---

### 4. Theories of Failure for Brittle Materials

Brittle materials fracture with little to no plastic deformation. Their failure is often influenced by both tensile and compressive stresses, as well as shear stresses.

#### 4.1 Maximum Normal Stress Theory (Rankine's Criterion)

This theory states that fracture occurs when the maximum principal tensile stress in the material reaches the ultimate tensile strength of the material. It primarily considers tensile failure.

*   **Concept:** Failure is governed by the largest tensile stress.
*   **Failure Condition:** $\sigma_{max} \ge \sigma_{tu}$
    *   Where $\sigma_{max}$ is the largest principal stress ($\sigma_1$), and $\sigma_{tu}$ is the ultimate tensile strength.
*   **For compressive stress:** If the largest principal stress is compressive ($\sigma_1 < 0$), it predicts failure when $|\sigma_1| \ge \sigma_{uc}$ (ultimate compressive strength), although this is a simplification and often the compressive strength is much higher than tensile strength for brittle materials.

**Example:** A brittle material has an ultimate tensile strength $\sigma_{tu} = 300$ MPa and an ultimate compressive strength $\sigma_{uc} = 1000$ MPa.
*   If the principal stresses are $\sigma_1 = 250$ MPa, $\sigma_2 = 50$ MPa, and $\sigma_3 = -50$ MPa:
    *   $\sigma_1 = 250 \text{ MPa}$. Since $250 \text{ MPa} < 300 \text{ MPa}$, no failure due to tension.
*   If the principal stresses are $\sigma_1 = 350$ MPa, $\sigma_2 = 100$ MPa, and $\sigma_3 = -100$ MPa:
    *   $\sigma_1 = 350 \text{ MPa}$. Since $350 \text{ MPa} > 300 \text{ MPa}$, the material will fracture according to this theory.

**Limitation:** This theory is often inadequate for predicting failure under combined stresses where compression plays a significant role.

#### 4.2 Maximum Shear Stress Theory (Tresca's Criterion for Brittle Materials)

While primarily used for ductile materials, Tresca's criterion can also be applied to brittle materials, especially when shear failure is dominant. The failure condition is the same: $\sigma_1 - \sigma_3 \ge \sigma_{tu}$ (using tensile yield strength for simplicity, or $\tau_y$ if known).

#### 4.3 Mohr's Criterion for Brittle Materials

Mohr's criterion is a more comprehensive theory for brittle materials that considers the interaction between normal and shear stresses at failure. It uses the Mohr's circle of stress and the material's shear and tensile failure envelopes.

*   **Concept:** Failure occurs when the Mohr's circle at a point touches or crosses the failure envelope defined by the material's properties in simple tension and compression.
*   **Failure Envelope:** Typically represented by a set of lines on the $(\sigma, \tau)$ plane, where $\sigma$ is the normal stress and $\tau$ is the shear stress.
    *   For purely tensile stress ($\sigma_1 > 0, \sigma_2 = 0, \sigma_3 = 0$), failure occurs when $\sigma_1 = \sigma_{tu}$.
    *   For purely compressive stress ($\sigma_1 = 0, \sigma_2 = 0, \sigma_3 < 0$), failure occurs when $|\sigma_3| = \sigma_{uc}$.
    *   For shear failure, the envelope is often approximated by a straight line connecting the tensile and compressive failure points.
*   **Failure Condition:** The largest Mohr's circle for the given stress state must lie entirely within the failure envelope.

**Graphical Representation:**
*   Draw Mohr's circles for pure tension and pure compression, with their centers on the $\sigma$-axis at $\sigma_{tu}/2$ and $\sigma_{uc}/2$ respectively, and radii $\sigma_{tu}/2$ and $\sigma_{uc}/2$.
*   Draw a line connecting the failure points $(\sigma_{tu}, 0)$ and $(-\sigma_{uc}, 0)$. This line, along with the axes, forms the failure envelope.
*   For a given stress state, construct the corresponding Mohr's circle. If this circle intersects or extends beyond the envelope, failure is predicted.

**Reference:**
*   **Kumar, P. (1999).** *Elements of Fracture Mechanics.* (Wheeler Publishing.) - While focused on fracture mechanics, it often introduces failure criteria relevant to material behavior.

#### 4.4 Modified Mohr's Criterion

This criterion is an extension of Mohr's criterion that attempts to provide a more accurate representation of failure, especially in the second and third quadrants of the stress plane (where both normal and shear stresses are present). It's often more complex to apply.

**Alignment with Course Outcomes:**
*   **CO1:** Understand the different theories of failure and material behaviour under various loading conditions. (Knowledge Level: K2)

**Reference:**
*   **ASM Handbook, Vol. 11 (2002).** *Failure Analysis and Prevention.* (ASM Publications.) - Likely contains detailed discussions and examples of these criteria.

---

### 5. Practice Questions and Exercises

**Question 1:**
A machine component is subjected to a state of stress where the principal stresses are $\sigma_1 = 100$ MPa, $\sigma_2 = 40$ MPa, and $\sigma_3 = -60$ MPa. The material has a tensile yield strength ($\sigma_y$) of 250 MPa.
a) Predict whether yielding will occur using the Maximum Shear Stress Theory.
b) Predict whether yielding will occur using the Distortion Energy Theory.
c) Which theory is more conservative?

**Answer 1:**
a) **Maximum Shear Stress Theory:**
   $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2} = \frac{100 - (-60)}{2} = \frac{160}{2} = 80$ MPa.
   Shear yield strength, $\tau_y = \frac{\sigma_y}{2} = \frac{250}{2} = 125$ MPa.
   Since $80 \text{ MPa} < 125 \text{ MPa}$, the material will **not** yield according to this theory.

b) **Distortion Energy Theory:**
   $\sigma_{VM} = \sqrt{\frac{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}{2}}$
   $\sigma_{VM} = \sqrt{\frac{(100 - 40)^2 + (40 - (-60))^2 + (-60 - 100)^2}{2}}$
   $\sigma_{VM} = \sqrt{\frac{(60)^2 + (100)^2 + (-160)^2}{2}} = \sqrt{\frac{3600 + 10000 + 25600}{2}}$
   $\sigma_{VM} = \sqrt{\frac{39200}{2}} = \sqrt{19600} = 140$ MPa.
   Since $140 \text{ MPa} < 250 \text{ MPa}$, the material will **not** yield according to this theory.

c) Both theories predict no yielding. However, if $\sigma_{VM}$ were slightly higher, it would reach the yield strength before $\tau_{max}$ reaches its limit if $\sigma_y$ was the basis for both. In general, Tresca's criterion is more conservative as it limits the maximum shear stress, which is a component of the total energy.

---

**Question 2:**
A brittle material has an ultimate tensile strength ($\sigma_{tu}$) of 400 MPa and an ultimate compressive strength ($\sigma_{uc}$) of 1200 MPa. The material is subjected to a state of plane stress where $\sigma_x = 200$ MPa, $\sigma_y = -100$ MPa, and $\tau_{xy} = 150$ MPa. Using Mohr's Criterion (assume a linear failure envelope), predict if failure will occur.

**Answer 2:**
To use Mohr's Criterion, we need to find the principal stresses from the given plane stress state.
The in-plane principal stresses are given by:
$\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
$\sigma_{1,2} = \frac{200 + (-100)}{2} \pm \sqrt{\left(\frac{200 - (-100)}{2}\right)^2 + (150)^2}$
$\sigma_{1,2} = \frac{100}{2} \pm \sqrt{\left(\frac{300}{2}\right)^2 + 150^2}$
$\sigma_{1,2} = 50 \pm \sqrt{(150)^2 + 150^2}$
$\sigma_{1,2} = 50 \pm \sqrt{22500 + 22500}$
$\sigma_{1,2} = 50 \pm \sqrt{45000}$
$\sigma_{1,2} = 50 \pm 212.13$ MPa

So, $\sigma_1 = 50 + 212.13 = 262.13$ MPa
And $\sigma_2 = 50 - 212.13 = -162.13$ MPa

Assuming plane stress, $\sigma_3 = 0$. The principal stresses are $\sigma_1 = 262.13$ MPa, $\sigma_2 = 0$ (effectively, as it's plane stress with the third principal stress being zero), and $\sigma_3 = -162.13$ MPa.

Now, let's check against Rankine's Criterion (Maximum Normal Stress Theory) for simplicity, though Mohr's is requested.
*   Maximum tensile stress: $\sigma_1 = 262.13$ MPa.
    Since $262.13 \text{ MPa} < 400 \text{ MPa}$ ($\sigma_{tu}$), no failure by tension based on Rankine's theory.
*   Maximum compressive stress: $|\sigma_3| = |-162.13| = 162.13$ MPa.
    Since $162.13 \text{ MPa} < 1200 \text{ MPa}$ ($\sigma_{uc}$), no failure by compression.

**For Mohr's Criterion (Linear Envelope):**
We need to check the failure envelope. The failure envelope is often defined by:
1.  $\sigma_1 \le \sigma_{tu}$ (for tensile failure)
2.  $|\sigma_3| \le \sigma_{uc}$ (for compressive failure)
3.  A line connecting $(\sigma_{tu}, 0)$ and $(-\sigma_{uc}, 0)$ in the $\sigma-\tau$ plane.

The stresses involved are $\sigma_1 = 262.13$ MPa and $\sigma_3 = -162.13$ MPa.
The maximum shear stress is $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2} = \frac{262.13 - (-162.13)}{2} = \frac{424.26}{2} = 212.13$ MPa.

The failure line for shear stress connecting the uniaxial tensile and compressive strengths can be approximated by a line passing through $(\sigma_{tu}, 0)$ and $(-\sigma_{uc}, 0)$. The equation of this line can be found using the two-point form:
$\frac{\tau - 0}{\sigma - \sigma_{tu}} = \frac{0 - (-\sigma_{uc})}{\sigma_{tu} - (-\sigma_{uc})} = \frac{\sigma_{uc}}{\sigma_{tu} + \sigma_{uc}}$
$\tau = \frac{\sigma_{uc}}{\sigma_{tu} + \sigma_{uc}} (\sigma - \sigma_{tu})$

Substitute the material properties: $\sigma_{tu} = 400$ MPa, $\sigma_{uc} = 1200$ MPa.
$\tau = \frac{1200}{400 + 1200} (\sigma - 400) = \frac{1200}{1600} (\sigma - 400) = 0.75 (\sigma - 400)$

Now, consider the stress state that would cause failure in pure shear. This is when $\sigma_1 = -\sigma_3$ and $\tau = |\sigma_1|$. In our case, $\sigma_1 = 262.13$ MPa, $\sigma_3 = -162.13$ MPa. This is not pure shear.

The Mohr's circle for this stress state has its center at $(\frac{\sigma_1 + \sigma_3}{2}, 0) = (\frac{262.13 - 162.13}{2}, 0) = (50, 0)$ and radius $r = \frac{\sigma_1 - \sigma_3}{2} = 212.13$ MPa.

The failure condition for Mohr's criterion is that the Mohr's circle must lie within the failure envelope.
*   Check for tensile failure: $\sigma_1 = 262.13 \le \sigma_{tu} = 400$. This is satisfied.
*   Check for compressive failure: $|\sigma_3| = 162.13 \le \sigma_{uc} = 1200$. This is satisfied.
*   Check against the shear failure line: For the failure to occur, the points on the Mohr circle must be below the failure line. The most critical point on the circle relative to the failure line is generally the point with the largest magnitude of shear stress.
    The shear stress associated with the principal stresses $\sigma_1$ and $\sigma_3$ is $\tau = 212.13$ MPa. The normal stress at this point on the Mohr's circle is $\sigma = \frac{\sigma_1 + \sigma_3}{2} = 50$ MPa.
    Check if this point $(\sigma=50, \tau=212.13)$ violates the failure line:
    Is $212.13 \le 0.75 (50 - 400)$?
    $212.13 \le 0.75 (-350)$
    $212.13 \le -262.5$. This is false. The shear stress is within the acceptable limit as defined by the line connecting tensile and compressive strengths.

Therefore, based on Mohr's criterion with a linear envelope, **failure will NOT occur**.

---

### 6. Important Points to Remember

*   **Ductile vs. Brittle Failure:** Ductile materials yield, while brittle materials fracture. Theories of failure are tailored to these different behaviors.
*   **Principal Stresses:** The three principal stresses ($\sigma_1, \sigma_2, \sigma_3$) are crucial for applying failure theories.
*   **Yield Criteria:** Maximum Shear Stress Theory (Tresca) and Distortion Energy Theory (Von Mises) are common for ductile materials. Von Mises is generally more accurate.
*   **Fracture Criteria:** Maximum Normal Stress Theory (Rankine) and Mohr's Criterion are used for brittle materials. Mohr's Criterion is more comprehensive.
*   **Conservatism:** Tresca's criterion is generally more conservative (predicts failure at lower stresses) than Von Mises' criterion.
*   **Plane Stress:** In plane stress, one principal stress is zero ($\sigma_3=0$ or $\sigma_2=0$). This simplifies calculations.
*   **Experimental Verification:** Theoretical predictions should always be validated with experimental data where possible.

---

### 7. Alignment with Course Outcomes

*   **CO1:** This entire topic directly addresses the understanding of different theories of failure (Tresca, Von Mises, Rankine, Mohr) and how material behavior (ductile vs. brittle) influences the choice of theory under various loading conditions. (Knowledge Level: K2 - Understanding)

---

This concludes Module 1, Topic: Theories of Failure. The subsequent modules will build upon these fundamental concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
