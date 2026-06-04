---
title: "Computation of Parameters of Governing Equations"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 1: Properties of Concrete and Steel"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109bc"
status: "completed"
scrapedAt: "2026-05-20T18:43:39.945Z"
---
# DESIGN OF CONCRETE STRUCTURES - Module 1: Properties of Concrete and Steel

## Topic: Computation of Parameters of Governing Equations

This module introduces the fundamental properties of concrete and steel, which are essential for understanding how they behave under various loads and for designing safe and efficient concrete structures. This specific topic focuses on how we derive and compute the parameters used in the governing equations that describe the behavior of these materials.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the characteristic properties of concrete relevant to structural design.**
*   **Understand the characteristic properties of steel relevant to structural design.**
*   **Compute essential parameters for concrete and steel from basic material properties.**
*   **Apply these computed parameters in simplified governing equations.**
*   **Recognize the influence of material properties on structural behavior.**

---

### 1. Properties of Concrete

Concrete is a composite material made from cement, aggregates (sand and gravel), water, and sometimes admixtures. Its behavior is complex, and understanding its key properties is crucial for design.

#### 1.1. Key Properties of Concrete

*   **Compressive Strength (f_ck):** The most important property of concrete. It represents the maximum stress concrete can withstand before crushing. This is typically determined by testing cylindrical or cubical specimens.
    *   **Characteristic Compressive Strength (f_ck):** The strength below which 5% of the test results are expected to fall. This is used in design codes.
    *   **Cylindrical vs. Cubical Strength:** Cubical strength is approximately 1.25 times cylindrical strength for the same concrete mix.
*   **Tensile Strength (f_ctm):** Concrete has very low tensile strength, typically around 10% of its compressive strength. It's often ignored in flexural design unless specific tensile reinforcement is provided in tension zones.
    *   **Mean Tensile Strength (f_ctm):** The average tensile strength.
    *   **Flexural Tensile Strength (f_ct,fl_m):** Used for bending calculations, generally higher than direct tensile strength.
*   **Modulus of Elasticity (E_cm):** A measure of concrete's stiffness or resistance to elastic deformation. It relates stress to strain in the elastic range.
    *   **Secant Modulus:** Used as concrete is not perfectly elastic.
    *   **Factors affecting E_cm:** Compressive strength, aggregate type and content, moisture content.
*   **Poisson's Ratio:** The ratio of transverse strain to axial strain under axial stress. For concrete, it's typically around 0.2.
*   **Creep:** The gradual increase in strain under constant stress over time. This is significant in sustained load situations.
*   **Shrinkage:** The reduction in volume due to drying of moisture. This can cause cracking if not managed.
*   **Density:** Typically around 2400-2500 kg/m³ for normal weight concrete.

#### 1.2. Computation of Parameters for Concrete

The primary parameter for governing equations related to concrete's strength is its **characteristic compressive strength (f_ck)**. Design codes provide formulas to relate this to other properties or to determine design strengths.

**Governing Equations (Simplified):**

*   **Stress-Strain Relationship (Elastic):**
    *   $\sigma = E_{cm} \epsilon$
    *   Where:
        *   $\sigma$ = Stress
        *   $E_{cm}$ = Modulus of Elasticity of Concrete
        *   $\epsilon$ = Strain

*   **Characteristic Compressive Strength (f_ck):** This is the *input* parameter, usually obtained from tests or specified in the design brief.

**Example: Computing Modulus of Elasticity for Concrete**

Many design codes provide empirical formulas to estimate $E_{cm}$ based on $f_{ck}$. A common formula (based on Eurocode 2) is:

$E_{cm} = 22000 \left( \frac{f_{ck} + 8}{10} \right)^{0.3}$

Where:
*   $E_{cm}$ is in MPa
*   $f_{ck}$ is in MPa

**Scenario:** If the characteristic compressive strength of concrete is $f_{ck} = 30$ MPa.

**Calculation:**
$E_{cm} = 22000 \left( \frac{30 + 8}{10} \right)^{0.3}$
$E_{cm} = 22000 \left( \frac{38}{10} \right)^{0.3}$
$E_{cm} = 22000 (3.8)^{0.3}$
$E_{cm} \approx 22000 \times 1.465$
$E_{cm} \approx 32230$ MPa

**Therefore, the Modulus of Elasticity for concrete with $f_{ck} = 30$ MPa is approximately 32230 MPa.**

**Important Points to Remember for Concrete:**

*   **Compressive strength is dominant.**
*   **Tensile strength is low and often neglected in flexure.**
*   **Modulus of Elasticity is crucial for stiffness calculations.**
*   **Creep and shrinkage are time-dependent effects that influence long-term behavior.**
*   **Design codes provide specific formulas for parameter computation.**

---

### 2. Properties of Steel

Steel is an alloy of iron and carbon, commonly used as reinforcement in concrete structures. It has excellent tensile and compressive strength and is ductile.

#### 2.1. Key Properties of Steel

*   **Yield Strength ($f_y$):** The stress at which steel begins to deform plastically. This is the most critical property for reinforcement design.
    *   **Characteristic Yield Strength ($f_y$):** The minimum yield strength below which 5% of test results are expected to fall.
*   **Ultimate Tensile Strength ($f_u$):** The maximum stress steel can withstand before fracturing.
*   **Modulus of Elasticity ($E_s$):** Steel is elastic up to its yield point, and its modulus of elasticity is constant and relatively high.
    *   **Standard Value:** $E_s = 200000$ MPa (or 200 GPa) for most reinforcing steels.
*   **Elongation at Break:** A measure of ductility. High elongation indicates that steel can deform significantly before breaking.
*   **Stress-Strain Relationship:**
    *   **Elastic Region:** Linear relationship ($\sigma = E_s \epsilon$).
    *   **Yielding:** Stress remains constant or increases slightly while strain increases significantly.
    *   **Strain Hardening:** Stress increases again after yielding.
*   **Density:** Typically around 7850 kg/m³.

#### 2.2. Computation of Parameters for Steel

The primary parameter for governing equations related to steel strength is its **characteristic yield strength ($f_y$)**.

**Governing Equations (Simplified):**

*   **Stress-Strain Relationship (Elastic):**
    *   $\sigma = E_s \epsilon$
    *   Where:
        *   $\sigma$ = Stress
        *   $E_s$ = Modulus of Elasticity of Steel
        *   $\epsilon$ = Strain

*   **Stress-Strain Relationship (Plastic/Yielding):**
    *   $\sigma = f_y$ (for $\epsilon \ge \epsilon_y$)
    *   Where:
        *   $\epsilon_y = f_y / E_s$ (Yield Strain)

**Example: Steel Reinforcement Stress**

Consider a reinforcing bar experiencing a strain of 0.001. If the characteristic yield strength of the steel is $f_y = 420$ MPa.

**Calculation:**

1.  **Determine the yield strain ($\epsilon_y$):**
    $\epsilon_y = f_y / E_s$
    $\epsilon_y = 420 \text{ MPa} / 200000 \text{ MPa}$
    $\epsilon_y = 0.0021$

2.  **Compare applied strain with yield strain:**
    The applied strain (0.001) is less than the yield strain (0.0021). Therefore, the steel is still in its elastic range.

3.  **Calculate stress in the elastic range:**
    $\sigma = E_s \epsilon$
    $\sigma = 200000 \text{ MPa} \times 0.001$
    $\sigma = 200$ MPa

**Therefore, the stress in the steel reinforcement is 200 MPa.**

**Scenario 2:** If the strain was 0.003.

**Calculation:**

1.  **Compare applied strain with yield strain:**
    The applied strain (0.003) is greater than the yield strain (0.0021). Therefore, the steel has yielded.

2.  **Stress in the yielded range:**
    $\sigma = f_y$
    $\sigma = 420$ MPa

**Therefore, the stress in the steel reinforcement is 420 MPa.**

**Important Points to Remember for Steel:**

*   **Yield strength ($f_y$) is the primary design parameter.**
*   **Modulus of Elasticity ($E_s$) is constant at 200,000 MPa.**
*   **Steel is ductile and has a well-defined elastic and plastic behavior.**
*   **The stress in steel is limited by its yield strength in design.**

---

### 3. Computation of Parameters for Governing Equations

Governing equations in concrete structures design describe the behavior of the material under load. These equations often involve parameters derived from the basic material properties.

#### 3.1. Design Strengths

Design codes reduce the characteristic strengths to account for uncertainties in material properties, loads, and analysis methods. These are called **design strengths**.

*   **Design Compressive Strength of Concrete ($f_{cd}$):**
    $f_{cd} = \frac{f_{ck}}{\gamma_c}$
    Where:
    *   $f_{ck}$ = Characteristic compressive strength of concrete
    *   $\gamma_c$ = Partial safety factor for concrete (typically 1.5 in limit state design)

*   **Design Yield Strength of Steel ($f_{yd}$):**
    $f_{yd} = \frac{f_y}{\gamma_s}$
    Where:
    *   $f_y$ = Characteristic yield strength of steel
    *   $\gamma_s$ = Partial safety factor for steel (typically 1.15 in limit state design)

**Example: Design Strengths**

For concrete with $f_{ck} = 30$ MPa and steel with $f_y = 420$ MPa:

**Calculation:**

*   **Design Compressive Strength of Concrete ($f_{cd}$):**
    $f_{cd} = \frac{30 \text{ MPa}}{1.5} = 20$ MPa

*   **Design Yield Strength of Steel ($f_{yd}$):**
    $f_{yd} = \frac{420 \text{ MPa}}{1.15} \approx 365.2$ MPa

**Therefore, the design compressive strength of concrete is 20 MPa, and the design yield strength of steel is approximately 365.2 MPa.**

#### 3.2. Stress Blocks (Simplified Stress-Strain Models)

For analyzing reinforced concrete members, simplified stress-strain relationships are used to represent the behavior of concrete in compression. The most common is the **rectangular stress block**.

*   **Rectangular Stress Block:** This model assumes that the concrete in the compression zone can be represented by a uniform stress equal to $0.85 f_{cd}$ acting over an effective depth.

    *   **Equivalent Stress ($f_{c2}$):** $f_{c2} = 0.85 f_{cd}$
    *   **Effective Depth (a):** The depth over which this uniform stress is assumed to act. It's typically related to the depth of the neutral axis ($x$). For a rectangular stress block, $a = \beta_1 x$, where $\beta_1$ is a factor depending on the concrete strength. For concrete strengths up to C50/60, $\beta_1 = 0.8$.

**Computation of Parameters for Stress Blocks:**

*   **Equivalent Stress:** Directly computed from $f_{cd}$.
*   **Effective Depth:** This parameter ($a$) is computed based on the depth of the neutral axis ($x$) and the code-specified factor ($\beta_1$). The depth of the neutral axis ($x$) itself is a result of equilibrium and strain compatibility calculations.

**Example: Computing Force in Concrete Compression Block**

Consider a rectangular beam section with a concrete compression zone of width $b$ and an effective depth $a$. The concrete has a design compressive strength $f_{cd} = 20$ MPa.

**Calculation:**

1.  **Compute the equivalent stress:**
    $f_{c2} = 0.85 f_{cd}$
    $f_{c2} = 0.85 \times 20 \text{ MPa} = 17$ MPa

2.  **Compute the total compressive force in the concrete:**
    Compressive Force ($C_c$) = $f_{c2} \times b \times a$

**If $b = 300$ mm, $a = 100$ mm, then:**
$C_c = 17 \text{ MPa} \times 300 \text{ mm} \times 100 \text{ mm}$
$C_c = 17 \text{ N/mm}^2 \times 300 \text{ mm} \times 100 \text{ mm}$
$C_c = 510000$ N $= 510$ kN

**Therefore, the total compressive force in the concrete stress block is 510 kN.**

#### 3.3. Simplified Governing Equations in Flexure

For a singly reinforced concrete beam in bending, the governing equations are based on equilibrium of forces and compatibility of strains.

*   **Equilibrium of Forces:** The tensile force in the steel ($T_s$) must balance the compressive force in the concrete ($C_c$).
    *   $T_s = C_c$
    *   Where:
        *   $T_s = A_s \times f_{yd}$ (Area of steel $\times$ Design yield strength of steel)
        *   $C_c = 0.85 f_{cd} \times b \times a$ (Using rectangular stress block)

*   **Strain Compatibility:** The strain in the steel ($\epsilon_s$) is related to the strain in the concrete at the extreme fiber and the position of the neutral axis.

    *   $\epsilon_s / (d - x) = \epsilon_{cu} / x$ (Assuming a linear strain distribution, where $\epsilon_{cu}$ is the maximum usable compressive strain in concrete, typically 0.0035)

**Computation of Parameters in Flexure:**

The key parameter to compute is often the **depth of the neutral axis ($x$)** or the **depth of the compression block ($a$)**. These are derived by solving the equilibrium equations.

**Example: Computing Neutral Axis Depth for a Singly Reinforced Beam**

Consider a rectangular beam of width $b = 300$ mm, effective depth $d = 500$ mm. It is reinforced with tensile steel $A_s = 1500$ mm².
Assume $f_{cd} = 20$ MPa, $f_{yd} = 365.2$ MPa, and for the rectangular stress block, $a = 0.8x$.

**Calculation:**

1.  **Calculate the tensile force in steel ($T_s$):**
    $T_s = A_s \times f_{yd}$
    $T_s = 1500 \text{ mm}^2 \times 365.2 \text{ N/mm}^2$
    $T_s = 547800$ N $= 547.8$ kN

2.  **Set up the equilibrium equation ($C_c = T_s$):**
    $0.85 f_{cd} \times b \times a = T_s$
    $0.85 \times 20 \text{ N/mm}^2 \times 300 \text{ mm} \times a = 547800$ N
    $5100 \times a = 547800$

3.  **Solve for the depth of the compression block ($a$):**
    $a = \frac{547800}{5100}$
    $a \approx 107.4$ mm

4.  **Compute the neutral axis depth ($x$) using $a = 0.8x$:**
    $107.4 \text{ mm} = 0.8x$
    $x = \frac{107.4}{0.8}$
    $x \approx 134.3$ mm

**Therefore, the depth of the neutral axis ($x$) is approximately 134.3 mm.**

**Check for strain compatibility:**
$\epsilon_s = T_s / (A_s E_s) = 547800 \text{ N} / (1500 \text{ mm}^2 \times 200000 \text{ N/mm}^2) = 0.001825$
$\epsilon_s / (d-x) = 0.001825 / (500 - 134.3) = 0.001825 / 365.7 \approx 0.00000499$
$\epsilon_{cu} / x = 0.0035 / 134.3 \approx 0.000026$
The strains are not compatible with the assumed $\epsilon_{cu}$ of 0.0035. This indicates that the neutral axis is likely higher, and the simplified stress block might need adjustments or the section might be in compression failure. However, for basic parameter computation, the equilibrium is the primary driver. In actual design, iterative processes or direct formulas for $x$ based on moments are used.

---

### 4. Practice Questions and Exercises

1.  **Concrete Modulus of Elasticity:** Calculate the Modulus of Elasticity ($E_{cm}$) for concrete with a characteristic compressive strength ($f_{ck}$) of 40 MPa using the formula: $E_{cm} = 22000 \left( \frac{f_{ck} + 8}{10} \right)^{0.3}$.
2.  **Steel Stress:** A reinforcing bar with $f_y = 500$ MPa is subjected to a strain of 0.0015. Determine the stress in the steel. (Assume $E_s = 200000$ MPa).
3.  **Design Strengths:** A concrete member is designed with $f_{ck} = 35$ MPa, and the reinforcing steel has $f_y = 450$ MPa. Calculate the design compressive strength of concrete ($f_{cd}$) and the design yield strength of steel ($f_{yd}$), using $\gamma_c = 1.5$ and $\gamma_s = 1.15$.
4.  **Concrete Compression Force:** A concrete compression zone has a width of 250 mm and an effective depth of 80 mm. If the design compressive strength of concrete is $f_{cd} = 22$ MPa, calculate the total compressive force in the concrete using the rectangular stress block where the equivalent stress is $0.85 f_{cd}$.
5.  **Neutral Axis Depth (Simplified):** A singly reinforced beam section has $b = 280$ mm, $d = 450$ mm, and $A_s = 1200$ mm². If $f_{cd} = 20$ MPa and $f_{yd} = 365.2$ MPa, and we assume the depth of the compression block $a = 0.8x$. Calculate the depth of the neutral axis ($x$) required to balance the tensile force in the steel.

---

### Answers to Practice Questions

1.  **Concrete Modulus of Elasticity:**
    $E_{cm} = 22000 \left( \frac{40 + 8}{10} \right)^{0.3} = 22000 (4.8)^{0.3} \approx 22000 \times 1.656 \approx 36432$ MPa

2.  **Steel Stress:**
    Yield strain $\epsilon_y = f_y / E_s = 500 \text{ MPa} / 200000 \text{ MPa} = 0.0025$.
    Since the applied strain (0.0015) is less than the yield strain (0.0025), the steel is elastic.
    $\sigma = E_s \epsilon = 200000 \text{ MPa} \times 0.0015 = 300$ MPa

3.  **Design Strengths:**
    $f_{cd} = f_{ck} / \gamma_c = 35 \text{ MPa} / 1.5 = 23.33$ MPa
    $f_{yd} = f_y / \gamma_s = 450 \text{ MPa} / 1.15 \approx 391.3$ MPa

4.  **Concrete Compression Force:**
    Equivalent stress $f_{c2} = 0.85 f_{cd} = 0.85 \times 22 \text{ MPa} = 18.7$ MPa
    Compressive Force $C_c = f_{c2} \times b \times a = 18.7 \text{ N/mm}^2 \times 250 \text{ mm} \times 80 \text{ mm} = 374000$ N $= 374$ kN

5.  **Neutral Axis Depth (Simplified):**
    Tensile force $T_s = A_s \times f_{yd} = 1200 \text{ mm}^2 \times 365.2 \text{ N/mm}^2 = 438240$ N.
    Compressive force $C_c = 0.85 f_{cd} \times b \times a = 0.85 \times 20 \text{ N/mm}^2 \times 280 \text{ mm} \times a = 4760a$.
    Equilibrium $C_c = T_s$:
    $4760a = 438240$
    $a = 438240 / 4760 \approx 92.07$ mm.
    Using $a = 0.8x$:
    $x = a / 0.8 = 92.07 \text{ mm} / 0.8 \approx 115.1$ mm.

---

### Summary of Key Concepts:

*   **Concrete:** Characterized by compressive strength ($f_{ck}$), modulus of elasticity ($E_{cm}$), and low tensile strength.
*   **Steel:** Characterized by yield strength ($f_y$) and a constant modulus of elasticity ($E_s = 200000$ MPa). Steel is ductile.
*   **Design Strengths:** Characteristic strengths reduced by partial safety factors ($f_{cd} = f_{ck} / \gamma_c$, $f_{yd} = f_y / \gamma_s$).
*   **Governing Equations:** Based on material properties, equilibrium, and strain compatibility.
*   **Stress Blocks:** Simplified models (e.g., rectangular) to represent concrete compression behavior in flexural analysis.
*   **Parameters:** Design strengths, modular ratios, effective depths, and neutral axis depths are key parameters computed for use in governing equations.

---

This concludes Module 1, Topic: Computation of Parameters of Governing Equations. You should now have a solid foundation for understanding how material properties translate into usable parameters for structural design calculations.
