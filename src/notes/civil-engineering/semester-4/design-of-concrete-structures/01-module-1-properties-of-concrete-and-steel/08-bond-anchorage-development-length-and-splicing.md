---
title: "Bond, Anchorage, Development Length and Splicing"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 1: Properties of Concrete and Steel"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109bf"
status: "completed"
scrapedAt: "2026-05-20T18:43:42.034Z"
---
# DESIGN OF CONCRETE STRUCTURES: MODULE 1 - PROPERTIES OF CONCRETE AND STEEL

## Topic: Bond, Anchorage, Development Length and Splicing

This module delves into crucial aspects of how reinforcing steel interacts with concrete, ensuring the composite action required for reinforced concrete structures.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of bond and its importance in reinforced concrete.
*   Define and explain the mechanisms of bond stress.
*   Identify the factors influencing bond strength.
*   Understand the concept of anchorage and its necessity.
*   Define development length and its significance.
*   Explain the calculation of development length for bars and stirrups.
*   Understand the purpose and types of splices in reinforcing steel.
*   Explain the methods for calculating splice lengths.

---

### 1. Bond

**1.1. Key Concepts and Definitions**

*   **Bond:** The adhesion and mechanical interlock between the surface of reinforcing steel bars and the surrounding concrete. It is the force that transfers stress from the concrete to the steel, or vice versa, preventing slippage.
*   **Composite Action:** The synergistic behavior of steel and concrete, where they act together as a single unit to resist loads. Bond is fundamental to achieving composite action.
*   **Mechanism of Bond:**
    *   **Chemical Adhesion:** A weak bond due to molecular attraction between the cement paste and the steel surface. This is primarily effective at low stresses.
    *   **Friction:** Resistance to slippage due to the roughness of the steel surface and the clamping action of the concrete.
    *   **Mechanical Interlock (Ribs/Deformations):** The primary mechanism for modern deformed bars. The ribs on the bar surface deform the concrete locally, creating a strong mechanical interlock that resists pull-out.
*   **Slippage:** The movement of the reinforcing bar relative to the concrete. Excessive slippage indicates a failure of the bond.

**1.2. Types of Bond Stress**

*   **Flexural Bond Stress:** Occurs in beams and slabs due to variations in tensile force in the reinforcing bars along their length. This is the most common type of bond stress considered in design.
*   **Anchorage Bond Stress:** Occurs at the ends of reinforcing bars where they are anchored into the concrete to develop their full tensile strength.

**1.3. Factors Influencing Bond Strength**

*   **Concrete Strength (f'c):** Higher concrete compressive strength generally leads to higher bond strength.
*   **Bar Surface (Deformations):** Deformed bars have significantly higher bond strength than plain bars due to mechanical interlock. The size, shape, and spacing of deformations are crucial.
*   **Bar Diameter (d):** Bond strength generally decreases with increasing bar diameter. This is because larger bars have less surface area relative to their volume and develop larger splitting forces in the concrete.
*   **Cover:** The thickness of concrete surrounding the reinforcing bar. Adequate cover is essential to prevent splitting of the concrete and to develop sufficient bond.
*   **Spacing of Bars:** Closely spaced bars can lead to splitting of the concrete due to the combined forces from adjacent bars.
*   **Stirrup Confinement:** Transverse reinforcement (stirrups) can significantly improve bond strength, especially for bars with larger diameters or in regions of high shear.
*   **Casting Direction:** Bars cast in a position that is "underside" to the pour (e.g., horizontal bars in a slab poured from below) tend to have lower bond strength compared to bars cast in a "topside" position. This is due to the formation of bleed water channels beneath the bars.

---

### 2. Anchorage

**2.1. Key Concepts and Definitions**

*   **Anchorage:** The provision of sufficient length and/or mechanical devices (like hooks or bends) to ensure that a reinforcing bar can develop its full tensile strength at a critical point (e.g., at the end of a beam, at a support, or at a splice). It's about preventing pull-out of the bar.
*   **Standard Hook:** A semicircular bend at the end of a bar, typically with an extension. These are used to increase anchorage capacity.
*   **Why Anchorage is Necessary:**
    *   To transfer stresses from the steel to the concrete at cut-off points.
    *   To ensure that bars can develop their full yield strength at points of maximum stress in structural elements.
    *   To anchor bars at supports where bending moments change rapidly.

**2.2. Anchorage Length vs. Development Length**

While often used interchangeably in common parlance, there's a subtle distinction:

*   **Anchorage Length:** Refers specifically to the length of straight bar or the length of a hook/bend required to develop the yield strength of the bar.
*   **Development Length (ld):** The total length of embedment required for a reinforcing bar to develop its full *required* strength (which can be yield strength or ultimate strength depending on the design situation) in concrete. It encompasses both straight embedment and the effectiveness of hooks.

---

### 3. Development Length

**3.1. Key Concepts and Definitions**

*   **Development Length (ld):** The minimum length of embedment required for a reinforcing bar to develop its full yield strength in tension. This is a critical parameter to ensure that the steel can carry its intended load without slipping or pulling out of the concrete.
*   **Required Development Length:** The minimum length of embedment needed to develop the required strength of the bar.
*   **Basic Development Length (lb):** The development length for a No. 11 (3/8") deformed bar under standard conditions (e.g., normal weight concrete, normal weight aggregate, 90-degree hook, clear cover >= diameter of bar).
*   **Critical Sections:** Locations in a structural member where the tensile force in the reinforcing steel is maximum and needs to be properly anchored. These are typically at supports for simply supported members or at points of contraflexure for continuous members.

**3.2. Factors Affecting Development Length**

Development length is influenced by many of the same factors as bond strength, with adjustments for:

*   **Concrete Compressive Strength (f'c):** Lower f'c requires longer development length.
*   **Yield Strength of Steel (fy):** Higher fy requires longer development length.
*   **Bar Diameter (db):** Larger diameter bars require longer development length.
*   **Epoxy Coating:** Epoxy-coated bars require longer development length (typically a 1.2 factor) due to reduced bond performance compared to uncoated bars.
*   **Lightweight Aggregate Concrete:** Requires longer development length (typically a factor of 1.33 or 1.4).
*   **Amount of Transverse Reinforcement:** The presence of stirrups or ties can reduce the required development length.
*   **Clear Spacing of Bars:** Wider spacing of bars reduces the need for longer development length.
*   **Clear Cover:** Adequate clear cover reduces the need for longer development length.
*   **Hook/Bend:** The presence of a standard hook can significantly reduce the required development length.

**3.3. Calculation of Development Length (Simplified Approach based on ACI 318, common in many codes)**

The general form of the equation for development length for deformed bars in tension is:

$l_d = \frac{3}{8} \frac{f_y}{\lambda \sqrt{f'_c}} \frac{\psi_t \psi_e \psi_s \psi_r}{c_b + k_{tr}} d_b$

Where:
*   $l_d$: Development length
*   $f_y$: Yield strength of reinforcement
*   $\lambda$: Factor accounting for concrete density (1.0 for normal weight, 0.85 for sand-lightweight, 0.75 for all-lightweight)
*   $f'_c$: Specified compressive strength of concrete
*   $\psi_t$: Coating factor (1.0 for uncoated, 1.2 for epoxy-coated)
*   $\psi_e$: Epoxy factor (1.0 for uncoated, 1.0 for epoxy-coated *if* certain criteria are met, otherwise 1.2) - often $\psi_e$ is incorporated with $\psi_t$.
*   $\psi_s$: Bar size factor (0.8 for $\text{No.} \le 11$, 1.0 for $\text{No.} > 11$)
*   $\psi_r$: Reinforcement location factor (1.0 for top bars, 0.8 for others)
*   $c_b$: The distance from the center of the bar to the nearest concrete surface or to the center of a larger bar, or half the distance between centers of collocated bars. **Crucially, $c_b$ is taken as the diameter of the bar if it's greater than other factors.**
*   $k_{tr}$: A factor related to the amount of transverse reinforcement. If $\text{spacing of stirrups or ties} \le 150 \text{ mm (6 in)}$ and $\text{stirrup/tie volume ratio} \ge 0.0015 \text{ mm}^3/\text{mm}^3$, $k_{tr}$ can be taken as 0, simplifying the equation considerably.

**Simplified Equation for Deformed Bars in Tension (with adequate cover, spacing, and transverse reinforcement):**

$l_d = \frac{0.04 A_b f_y}{\sqrt{f'_c}} \ge 0.06 A_b f_y$ (for imperial units, often simplified)

Or, in SI units (more generally applicable and reflective of the code's intent):

$l_d = (\frac{3}{8}) \frac{f_y \psi_t \psi_e}{\sqrt{f'_c}} d_b$ (for bars <= No. 11)
$l_d = (\frac{1}{2}) \frac{f_y \psi_t \psi_e}{\sqrt{f'_c}} d_b$ (for bars > No. 11)

*   **Important Simplification Rule:** The development length $l_d$ should be the larger of the calculated value and $0.06 A_b f_y / \sqrt{f'_c}$ (or $200 \text{ mm}$ in SI, or $8 \text{ inches}$ in Imperial) for bars. For hooks, there are specific reduction factors.

**Factors that can reduce $l_d$ (multiplying factors < 1):**

*   **Adequate Confinement:** If stirrup/tie spacing is close and volume is sufficient ($k_{tr}$ term effectively reduces $l_d$).
*   **Larger Clear Cover:** If clear cover $\ge 3d_b$.
*   **Larger Spacing:** If clear spacing $\ge 8d_b$.
*   **Bundled Bars:** A reduction factor is applied, but it also increases the development length of individual bars within the bundle.

**Factors that can increase $l_d$ (multiplying factors > 1):**

*   **Top Bars:** $\psi_r = 1.0$.
*   **Lightweight Concrete:** $\lambda$ is reduced.
*   **Epoxy Coating:** $\psi_t$ is typically 1.2.

**Example Calculation of Development Length:**

**Problem:** Calculate the development length for a No. 8 (25 mm) deformed bar in a beam.
*   Concrete: Normal weight, $f'_c = 30 \text{ MPa}$
*   Steel: Grade 60 ($f_y = 420 \text{ MPa}$)
*   Uncoated bar
*   Beam is not considered "top bar"
*   Assume adequate transverse reinforcement, cover, and spacing.

**Solution (using simplified SI approach, assuming $k_{tr}=0$ and other factors are 1.0 for simplicity):**

$l_d = (\frac{3}{8}) \frac{f_y \psi_t}{\sqrt{f'_c}} d_b$
$l_d = (\frac{3}{8}) \frac{420 \text{ MPa} \times 1.0}{\sqrt{30 \text{ MPa}}} \times (25 \text{ mm})$
$l_d = (0.375) \frac{420}{\sqrt{30}} \times 25$
$l_d = 0.375 \times 76.69 \times 25$
$l_d \approx 719.9 \text{ mm}$

**Check the minimum requirement:**
Minimum $l_d = 0.06 A_b f_y / \sqrt{f'_c}$
$A_b = \pi (25/2)^2 = 490.87 \text{ mm}^2$
Minimum $l_d = 0.06 \times 490.87 \times 420 / \sqrt{30}$
Minimum $l_d = 0.06 \times 490.87 \times 76.69$
Minimum $l_d \approx 2822.5 \text{ mm}$  *Wait, this calculation is incorrect for SI units. The empirical minimums are usually much smaller.*

Let's use a more direct SI code approach often found:
$l_d = 0.06 \frac{f_y}{\sqrt{f'_c}} d_b$ (This is the minimum *term* in some simplified expressions, not the absolute minimum).

A common simplified formula in many codes for deformed bars (SI) is:
$l_d = 2.55 \frac{f_y}{\sqrt{f'_c}} d_b$ (This factor 2.55 is approximately 0.04 * 16.39, where 16.39 is the conversion of psi to MPa).

Let's re-calculate with a more appropriate SI simplified factor:
$l_d = 2.55 \times \frac{420}{\sqrt{30}} \times 25$
$l_d = 2.55 \times 76.69 \times 25$
$l_d \approx 4894.6 \text{ mm}$

*This highlights the importance of using the exact code formula. The initial calculation was flawed by misinterpreting the unit conversion.*

**Let's use a more typical formula found in design handbooks for SI:**
$l_d = \frac{0.13 f_y d_b}{\sqrt{f'_c}}$ (for uncoated deformed bars, normal weight concrete)

$l_d = \frac{0.13 \times 420 \times 25}{\sqrt{30}}$
$l_d = \frac{1365}{\sqrt{30}}$
$l_d \approx 250 \text{ mm}$

Now, let's apply the coating and bar size factors (assuming $\psi_t=1.0, \psi_s=0.8$ for No. 8 (25mm) is typically $\le$ No. 11, so $\psi_s$ is not needed here):

**Revised Calculation using a common SI simplified formula:**

$l_d = \frac{0.13 f_y d_b}{\sqrt{f'_c}} \times \psi_t \times \psi_e \times \psi_s \times \psi_r$

Assuming: $\psi_t = 1.0$ (uncoated), $\psi_e = 1.0$ (assuming no adverse epoxy conditions), $\psi_s = 1.0$ (for No. 8 bar, the factor for bars $>\text{No.} 11$ is 1.0, for $\le \text{No.} 11$ it's 0.8, but this factor is often implicitly included in the base constant), $\psi_r = 0.8$ (not top bar).

$l_d = \frac{0.13 \times 420 \times 25}{\sqrt{30}} \times 1.0 \times 1.0 \times 1.0 \times 0.8$
$l_d = \frac{1365}{5.477} \times 0.8$
$l_d \approx 250 \times 0.8$
$l_d \approx 200 \text{ mm}$

**Check against minimum values (typically in codes):**
Minimum $l_d$ often stipulated as $12 d_b$ or $200 \text{ mm}$ (whichever is greater).
$12 d_b = 12 \times 25 \text{ mm} = 300 \text{ mm}$.
$200 \text{ mm}$.

So, the minimum $l_d$ is $300 \text{ mm}$.

Therefore, the required development length for this No. 8 bar is $300 \text{ mm}$.

*Key takeaway from this example: Always refer to the specific design code (e.g., ACI 318, IS 456) for the exact formulas and coefficients.*

**3.4. Development Length for Stirrups and Ties**

*   The development length for stirrups and ties is also critical to ensure they effectively confine the concrete core and resist hoop tension.
*   Typically, the same principles of bond and development length apply, but the geometry of stirrups (bends and hooks) plays a more significant role.
*   The code provides specific requirements for the embedment of stirrup legs, often involving a 135-degree hook and sufficient straight length after the hook.
*   For U-stirrups, the development length for the vertical legs is usually calculated based on their embedment in the tension or compression zone, considering the bond stresses and concrete strength.

---

### 4. Splicing

**4.1. Key Concepts and Definitions**

*   **Splice:** A connection between two or more reinforcing bars to provide continuity of stress transfer along the length of the bar. Splices are necessary because the available lengths of reinforcing bars are often shorter than the required lengths in structural members.
*   **Purpose of Splicing:** To extend reinforcing bars to provide continuous reinforcement through sections where bending moments are high or where bars need to be continued from one member to another (e.g., column to beam connection).
*   **Types of Splices:**
    *   **Mechanical Splices:** Use mechanical devices (e.g., couplers, clamps) to join bars. These are often preferred for their reliability and efficiency, especially for larger diameter bars.
    *   **Welded Splices:** Bars are joined by welding. This requires skilled welders and careful control of welding procedures to avoid weakening the steel.
    *   **Lapped Splices (Tapered or Direct):** Bars are overlapped for a specific length, allowing stress transfer through bond and bearing. This is the most common and economical method for smaller diameter bars.

**4.2. Lapped Splices**

*   **Direct Lapped Splice:** Bars are placed side-by-side. This is generally not recommended for structural members where bond is critical due to potential splitting.
*   **Tapered Lapped Splice:** Bars are staggered or offset. This is the standard method for lap splices in reinforced concrete.
*   **Length of Lap Splice (ls):** The required length for a lap splice is typically calculated as a multiple of the development length ($l_d$).
    *   $l_s = \text{factor} \times l_d$
*   **Factors Affecting Lap Splice Length:**
    *   **Minimum Lap Length:** Codes usually specify a minimum lap length (e.g., $30d_b$ or $300 \text{ mm}$).
    *   **Yield Strength ($f_y$):** Higher $f_y$ requires longer lap.
    *   **Concrete Strength ($f'_c$):** Lower $f'_c$ requires longer lap.
    *   **Bar Diameter ($d_b$):** Larger $d_b$ requires longer lap.
    *   **Coating (Epoxy):** Epoxy-coated bars require longer laps.
    *   **Location:** "Top bars" generally require longer laps.
    *   **Spacing and Confinement:** Adequate spacing and confinement can reduce lap length requirements.
    *   **Tensile Force:** The magnitude of the tensile force in the bars being spliced.

**Simplified Lap Splice Length Calculation (Tapered Splices):**

The length of lap splice ($l_s$) for deformed bars in tension is generally the larger of:

*   $l_s = 1.7 l_d$ (for splices with adequate transverse reinforcement and spacing)
*   $l_s = 2.0 l_d$ (for splices where transverse reinforcement is not adequate or spacing is close)
*   $l_s = 2.4 l_d$ (for "top bars" or bars in locations where $\psi_r = 1.0$)

**And always greater than or equal to a minimum value, e.g.:**

*   $l_s \ge 0.07 f_y d_b$ (for SI units, roughly)
*   $l_s \ge 0.0015 f_y d_b$ (for Imperial units)
*   Minimum numerical value (e.g., $300 \text{ mm}$ or $12 \text{ inches}$)

**Example Calculation of Lap Splice Length:**

**Problem:** Calculate the required lap splice length for a No. 8 (25 mm) deformed bar in tension, using the previously calculated $l_d = 300 \text{ mm}$. Assume it's a regular splice (not top bar) with adequate confinement.

**Solution:**
We need to consider the factors and minimums. Let's assume this is a standard splice where the factor is $1.7$.

$l_s = 1.7 \times l_d$
$l_s = 1.7 \times 300 \text{ mm}$
$l_s = 510 \text{ mm}$

**Check against minimum requirements:**
Let's assume a minimum is $30 d_b$.
$30 d_b = 30 \times 25 \text{ mm} = 750 \text{ mm}$.

Let's assume another minimum is $0.07 f_y d_b$ (this factor varies by code).
$0.07 \times 420 \text{ MPa} \times 25 \text{ mm} = 735 \text{ N-mm/MPa}$
This calculation still seems to be unit-inconsistent.

A more common SI empirical minimum might be related to the overall length required, perhaps $0.0015 f_y d_b$ is closer to imperial. For SI, a common minimum is $30 d_b$ or a value around $300-400 \text{ mm}$.

Let's stick with the $30 d_b$ minimum for this example.
$l_s = 510 \text{ mm}$
Minimum $l_s = 30 d_b = 30 \times 25 \text{ mm} = 750 \text{ mm}$.

Therefore, the required lap splice length is $750 \text{ mm}$.

*This shows how minimum requirements can govern the design.*

**4.3. Welded Splices and Mechanical Couplers**

*   **Welded Splices:** Can develop the full strength of the bar if properly executed. The length of the weld and the quality of the weld are critical.
*   **Mechanical Couplers:** Offer efficient and reliable splicing, especially for large diameter bars where lapping becomes impractical. They are designed to transfer stress by direct bearing or threading.

---

### Important Points to Remember:

*   **Bond is the glue:** It's the primary mechanism that allows concrete and steel to act together.
*   **Deformed bars are essential:** Their ribs dramatically increase bond strength compared to plain bars.
*   **Development length is critical:** It ensures bars are anchored sufficiently to develop their full yield strength, preventing pull-out.
*   **Code is king:** Always refer to the relevant building codes (ACI, IS, Eurocode, etc.) for the exact formulas and factors.
*   **Splicing is necessary but must be done correctly:** Lapped splices are common, but their length depends on many factors and minimum requirements.
*   **"Top bars" are generally less effective:** They often require longer development lengths and lap splices due to bleeding of concrete.
*   **Epoxy-coated bars are weaker in bond:** They require longer development lengths and lap splices.
*   **Stirrups help bond:** Transverse reinforcement can significantly improve the bond capacity of main bars.

---

### Practice Questions:

1.  **Define bond in the context of reinforced concrete structures.**
2.  **Explain the three primary mechanisms that contribute to bond strength.**
3.  **What are the key factors that influence the bond strength between concrete and reinforcing steel?**
4.  **Calculate the development length ($l_d$) for a No. 10 (32 mm) deformed bar in normal weight concrete with $f'_c = 25 \text{ MPa}$ and $f_y = 420 \text{ MPa}$. Assume it's not a top bar and has adequate confinement, spacing, and cover. Use the formula: $l_d = \frac{0.13 f_y d_b}{\sqrt{f'_c}}$ and ensure it meets the minimum requirement of $12 d_b$ or $200 \text{ mm}$.**
5.  **If the bar in Question 4 was epoxy-coated, how would the development length change?**
6.  **What is the purpose of splicing reinforcing steel?**
7.  **Describe the common types of splices used for reinforcing bars.**
8.  **Calculate the required lap splice length ($l_s$) for a No. 8 (25 mm) deformed bar with $l_d = 300 \text{ mm}$. Assume it's a standard splice with adequate confinement and it is not a top bar. Also, assume the minimum lap length requirement is $30 d_b$.**

---

### Answers to Practice Questions:

1.  **Bond** is the adhesion and mechanical interlock between the surface of reinforcing steel bars and the surrounding concrete, which allows for the transfer of stresses between the two materials and enables composite action.
2.  The three primary mechanisms are:
    *   **Chemical Adhesion:** Molecular attraction between cement paste and steel.
    *   **Friction:** Resistance to sliding due to surface roughness and confinement.
    *   **Mechanical Interlock:** Resistance provided by the deformations (ribs) on the bar surface engaging with the concrete.
3.  Key factors influencing bond strength include:
    *   Concrete compressive strength ($f'_c$)
    *   Bar surface (deformed vs. plain)
    *   Bar diameter ($d_b$)
    *   Concrete cover
    *   Spacing of bars
    *   Stirrup confinement
    *   Casting direction
    *   Coating (epoxy)
4.  **Calculation for Question 4:**
    *   Given: $d_b = 32 \text{ mm}$, $f'_c = 25 \text{ MPa}$, $f_y = 420 \text{ MPa}$.
    *   Formula: $l_d = \frac{0.13 f_y d_b}{\sqrt{f'_c}}$
    *   $l_d = \frac{0.13 \times 420 \times 32}{\sqrt{25}}$
    *   $l_d = \frac{0.13 \times 420 \times 32}{5}$
    *   $l_d = \frac{1747.2}{5}$
    *   $l_d \approx 349.44 \text{ mm}$

    *   **Minimum Requirements Check:**
        *   $12 d_b = 12 \times 32 \text{ mm} = 384 \text{ mm}$
        *   $200 \text{ mm}$
    *   The larger of the minimums is $384 \text{ mm}$.
    *   Since $349.44 \text{ mm} < 384 \text{ mm}$, the required development length is the minimum, $384 \text{ mm}$.
    *   **Answer:** $l_d = 384 \text{ mm}$.

5.  If the bar was epoxy-coated, the development length would **increase**. Typically, the development length would be multiplied by a factor of 1.2 (or $\psi_t = 1.2$).
    *   New $l_d = 349.44 \text{ mm} \times 1.2 \approx 419.3 \text{ mm}$.
    *   Checking against the minimum ($384 \text{ mm}$), the required development length would be $419.3 \text{ mm}$.
    *   **Answer:** The development length would increase to approximately $419.3 \text{ mm}$.

6.  The purpose of splicing reinforcing steel is to provide **continuity of reinforcement** along the length of the bar, allowing for the continuous transfer of tensile or compressive forces where the required length of a single bar is insufficient.
7.  Common types of splices are:
    *   **Mechanical Splices:** Using couplers or other mechanical devices.
    *   **Welded Splices:** Joining bars by welding.
    *   **Lapped Splices:** Overlapping bars for a specific length, typically tapered (staggered).
8.  **Calculation for Question 8:**
    *   Given: $l_d = 300 \text{ mm}$.
    *   Standard splice factor: $1.7$ (assuming not top bar, adequate confinement).
    *   $l_s = 1.7 \times l_d = 1.7 \times 300 \text{ mm} = 510 \text{ mm}$.
    *   Minimum lap length requirement: $30 d_b = 30 \times 25 \text{ mm} = 750 \text{ mm}$.
    *   Since the calculated lap length ($510 \text{ mm}$) is less than the minimum requirement ($750 \text{ mm}$), the minimum governs.
    *   **Answer:** $l_s = 750 \text{ mm}$.
