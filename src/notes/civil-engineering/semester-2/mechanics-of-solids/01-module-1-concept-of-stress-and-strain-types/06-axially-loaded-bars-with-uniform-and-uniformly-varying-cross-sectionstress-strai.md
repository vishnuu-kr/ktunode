---
title: "Axially loaded bars with uniform and uniformly varying cross section–stress, strain and deformation"
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Concept of stress and strain – types"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f5e"
status: "completed"
scrapedAt: "2026-05-20T18:37:14.337Z"
---
# Mechanics of Solids - Module 1: Concept of Stress and Strain – Types

## Topic: Axially Loaded Bars with Uniform and Uniformly Varying Cross Section – Stress, Strain and Deformation

Welcome, everyone! Today, we're diving into the very first module of our Mechanics of Solids journey. This module is foundational, setting the stage for everything we'll explore later. We'll start by understanding what happens when a simple force is applied to a solid object, specifically an **axially loaded bar**. Think of a simple rope pulled at both ends, or a pillar supporting a load from above. These are our basic scenarios.

Our focus today is on understanding how these bars behave under **axial loads**. An axial load is a force that acts along the longitudinal axis of the member. It's the simplest kind of loading, but it's incredibly important because it helps us build our understanding of how materials deform and what stresses they can withstand. We'll cover two main types of bars: those with a **uniform cross-section** and those with a **uniformly varying cross-section**.

By the end of this session, you should be able to:

*   **Recall** the basic definitions of stress and strain (CO1).
*   **Explain** how axial loads affect the internal state of stress and the overall deformation of simple structural elements (CO2).
*   **Apply** fundamental formulas to calculate stress, strain, and deformation in these axially loaded bars (CO3).
*   **Analyze** how different cross-sectional shapes influence these properties (CO6).

Let's get started!

### 1. Introduction to Stress and Strain: The Building Blocks

Before we tackle specific bar types, let's refresh our understanding of the core concepts: **Stress** and **Strain**.

Imagine you have a rubber band. When you pull on it, it stretches, right? And it feels like there's an internal resistance to that stretching. That internal resistance is what we call **stress**.

*   **Stress (σ)**: Stress is essentially the intensity of the internal force acting within a body per unit area. When an external force is applied to a body, the internal particles of the body resist this deformation. This resistance, distributed over a cross-sectional area, is stress.

    Mathematically, for an axially loaded bar, if an external axial force $P$ is applied to a bar with a cross-sectional area $A$, the **normal stress** (stress acting perpendicular to the surface) is given by:

    $$\sigma = \frac{P}{A}$$

    Think about it: if you pull harder (increase $P$), the stress increases. If the bar is thicker (larger $A$), the stress is spread over a larger area, so it's less intense. This makes intuitive sense. For a uniform bar, this stress is *uniform* across the entire cross-section.

    *(This directly relates to CO1: Recalling fundamental terms like stress).*

*   **Strain (ε)**: Now, what about that stretching? That change in length is what we call **deformation**. When we talk about **strain**, we're talking about the deformation relative to the original size. It's a measure of how much the material is deformed.

    For axial loading, we usually consider **normal strain**, which is the change in length per unit original length. If a bar of original length $L$ extends by an amount $\Delta L$ due to the axial load, the normal strain is:

    $$\varepsilon = \frac{\Delta L}{L}$$

    Strain is a dimensionless quantity, as it's a ratio of two lengths.

    *(This also relates to CO1: Recalling fundamental terms like strain).*

### 2. Behavior of Axially Loaded Bars with Uniform Cross-Section

Let's start with the simplest case: a bar with a **uniform cross-section**. This means the area $A$ is constant along the entire length $L$ of the bar. Think of a perfectly cylindrical rod or a rectangular bar of constant width and thickness.

#### Stress in Uniform Bars

As we established, if an axial force $P$ is applied, the stress is uniform across any cross-section:

$$\sigma = \frac{P}{A}$$

*   **Example**: Imagine a steel cable supporting a weight. The force $P$ is the weight, and $A$ is the cross-sectional area of the steel strands. The stress within the steel is $P/A$. If this stress exceeds the material's strength, the cable will break.
*   **Exam Tip**: For uniform bars, the stress calculation is straightforward. Always ensure you're using the correct force (the internal force, which is equal to the applied axial force in this case) and the correct cross-sectional area perpendicular to the force.

#### Strain in Uniform Bars

Now, how does this stress affect the bar's length? This is where Hooke's Law comes in. For most engineering materials under small deformations, stress is directly proportional to strain. This constant of proportionality is called the **Modulus of Elasticity**, or **Young's Modulus (E)**.

*   **Hooke's Law**: $\sigma = E \varepsilon$

    This is a crucial relationship! It tells us that for a given material (characterized by $E$), the more stress you apply, the more strain you get.

    Now, let's combine this with our stress and strain definitions for an axially loaded bar:

    $$\frac{P}{A} = E \left(\frac{\Delta L}{L}\right)$$

    We can rearrange this to find the **deformation** or **elongation ($\Delta L$)**:

    $$\Delta L = \frac{P \cdot L}{A \cdot E}$$

    This formula is fundamental and will be used extensively. Let's break it down:
    *   **P**: The applied axial force. Larger force means more elongation.
    *   **L**: The original length of the bar. A longer bar will elongate more.
    *   **A**: The cross-sectional area. A thicker bar will elongate less for the same force.
    *   **E**: The Modulus of Elasticity of the material. A stiffer material (higher $E$) will elongate less.

*   **Analogy**: Think of stretching a spring. Hooke's Law for springs is $F = kx$, where $k$ is the spring stiffness. In our case, if you consider a bar as a "spring," the stiffness is related to $AE/L$. A stiffer bar (large $A$, large $E$, short $L$) will have a larger effective stiffness and thus deform less.

*   **Example**: Consider a metal rod of length 1 meter and a cross-sectional area of 100 mm². If it's made of steel with $E = 200$ GPa, and we apply an axial force of 50 kN, the elongation will be:
    First, convert units to be consistent (e.g., N and mm):
    $P = 50 \times 10^3$ N
    $L = 1000$ mm
    $A = 100$ mm²
    $E = 200 \times 10^3$ N/mm² (or MPa)

    $$\Delta L = \frac{(50 \times 10^3 \text{ N}) \times (1000 \text{ mm})}{(100 \text{ mm}^2) \times (200 \times 10^3 \text{ N/mm}^2)}$$
    $$\Delta L = \frac{50 \times 10^6}{20 \times 10^6} \text{ mm} = 2.5 \text{ mm}$$
    So, the rod elongates by 2.5 mm.

    *(This connects to CO2: Explaining response under axial load, and CO3: Applying principles to calculate deformation).*

#### Stress and Strain for Tensile vs. Compressive Loads

It's important to note that the formulas for stress and strain are the same for both **tensile** (pulling) and **compressive** (pushing) axial loads.
*   **Tensile Load**: Causes elongation, and we talk about tensile stress and tensile strain.
*   **Compressive Load**: Causes shortening, and we talk about compressive stress and compressive strain.

The sign convention is important:
*   Tensile stress and strain are usually taken as positive.
*   Compressive stress and strain are usually taken as negative.

So, if a bar is compressed by force $P$, the stress is $\sigma = -P/A$, and the change in length $\Delta L$ will be negative, representing shortening. The magnitude of deformation is still given by $|\Delta L| = \frac{|P| \cdot L}{A \cdot E}$.

### 3. Behavior of Axially Loaded Bars with Uniformly Varying Cross-Section

Now, let's move to a more complex but equally common scenario: a bar where the cross-sectional area changes **uniformly** along its length. This is typical in tapered members, like a pyramid-shaped column or a conical rod.

Why do we study this? In many structural designs, varying the cross-section can optimize material usage and reduce weight while still carrying the load effectively. Think of a traffic light pole that's wider at the base and narrower at the top, or the spindle of a lathe.

For a uniformly varying cross-section, the area $A$ is no longer constant. It changes linearly with the axial position. Let's say the bar extends from $x=0$ to $x=L$.

#### Stress in Uniformly Varying Bars

If we apply an axial force $P$ at one end, the *internal axial force* $P$ remains constant along the entire length, provided there are no intermediate loads. This is a fundamental principle of statics: if you cut through any section of the bar, the internal force required to maintain equilibrium at that section is the same as the applied external force.

However, the **stress**, $\sigma = P/A$, will *not* be uniform because the area $A$ changes with position $x$.

*   **Example**: Consider a frustum of a cone (a cone with its top cut off) with an axial load. If the force is applied axially, the force transmitted through any cross-section is the same. But the area of that cross-section decreases as you move towards the narrower end. Therefore, the stress is higher at the narrower end.

#### Deformation in Uniformly Varying Bars

Since the stress varies, and strain is proportional to stress ($\varepsilon = \sigma/E$), the strain will also vary along the length of the bar. This means the deformation is not simply $\Delta L = PL/AE$. We need a more general approach.

We have to consider a small elemental segment of the bar and then sum up the deformations of all such segments. This naturally leads to **integration**.

Let's consider a bar with a cross-sectional area $A(x)$ that varies uniformly with axial position $x$.
The internal axial force is $P$.
The stress at section $x$ is $\sigma(x) = P/A(x)$.
The strain at section $x$ is $\varepsilon(x) = \sigma(x)/E = P / (E \cdot A(x))$.

Now, consider a very small segment of the bar of length $dx$ at position $x$.
The deformation ($d(\Delta L)$) of this small segment is:

$$d(\Delta L) = \varepsilon(x) \cdot dx = \frac{P}{E \cdot A(x)} dx$$

To find the total deformation ($\Delta L$) for the entire bar, we need to integrate this expression from $x=0$ to $x=L$:

$$\Delta L = \int_{0}^{L} d(\Delta L) = \int_{0}^{L} \frac{P}{E \cdot A(x)} dx$$

*   **Key Insight**: This formula tells us that the total deformation is the sum of the deformations of all infinitesimal elements. If $P$, $E$, and $A(x)$ are functions of $x$, we must integrate.

*(This reinforces CO2 and CO3, specifically focusing on calculation for varying geometry).*

#### Specific Case: Tapered Bar (Rectangular or Circular Cross-Section)

Let's look at a common uniformly varying cross-section: a **tapered bar**.

**Scenario 1: Rectangular Tapered Bar**

Imagine a bar that is rectangular in cross-section, and its width varies linearly with $x$, while its thickness $t$ remains constant.
Let the width at $x=0$ be $b_1$ and at $x=L$ be $b_2$.
The width at any section $x$ can be expressed as:
$b(x) = b_1 + \frac{(b_2 - b_1)}{L} x$

The area at section $x$ is $A(x) = b(x) \cdot t = \left(b_1 + \frac{(b_2 - b_1)}{L} x\right) t$.

Substituting this into the deformation integral:

$$\Delta L = \int_{0}^{L} \frac{P}{E \cdot \left(b_1 + \frac{(b_2 - b_1)}{L} x\right) t} dx$$

This integral can be solved. Let $C = \frac{(b_2 - b_1)}{Lt}$. Then $A(x) = t(b_1 + Cx)$.
The integral becomes:

$$\Delta L = \frac{P}{E t} \int_{0}^{L} \frac{dx}{(b_1 + Cx)}$$

If $b_1 = b_2$ (uniform width), then $C=0$, and $\Delta L = \frac{P}{Et} \int_{0}^{L} \frac{dx}{b_1} = \frac{P}{Et} \frac{L}{b_1} = \frac{PL}{Etb_1}$. Since $A = b_1 t$, this is $\Delta L = \frac{PL}{AE}$, our original formula. This shows consistency!

If $b_1 \neq b_2$, the integral evaluates to:

$$\Delta L = \frac{P}{E t C} \left[ \ln(b_1 + Cx) \right]_{0}^{L} = \frac{P}{E t C} (\ln(b_1 + CL) - \ln(b_1))$$
Since $CL = \frac{(b_2 - b_1)}{L}$, $b_1 + CL = b_1 + \frac{b_2 - b_1}{L} L = b_1 + b_2 - b_1 = b_2$.
So, $C = \frac{(b_2 - b_1)}{L t}$ and $\frac{1}{Ct} = \frac{L}{t(b_2-b_1)}$.

$$\Delta L = \frac{P}{E} \frac{L}{(b_2 - b_1)} \left[ \ln(b_2) - \ln(b_1) \right] = \frac{PL}{AE_{avg}} \quad \text{where } A_{avg} \text{ is not simple}$$

A more convenient form of the result for a rectangular bar where width varies linearly is:

$$\Delta L = \frac{P L}{E t (b_2 - b_1)} \ln\left(\frac{b_2}{b_1}\right)$$

Here, $A_1 = b_1 t$ and $A_2 = b_2 t$ are the areas at the ends. The formula can be rewritten as:
$$\Delta L = \frac{PL}{E \sqrt{A_1 A_2}} \left( \frac{\sqrt{A_2}-\sqrt{A_1}}{A_2 - A_1} \right) \ln\left(\frac{A_2}{A_1}\right)$$
This form might be more general if considering similar variations in both dimensions. However, for linear width variation, the previous one is direct.

**Scenario 2: Conical Bar (Circular Cross-Section)**

Consider a bar that is conical in shape, meaning its cross-section is circular, and the diameter varies linearly with $x$.
Let the diameter at $x=0$ be $d_1$ and at $x=L$ be $d_2$.
The diameter at any section $x$ is $d(x) = d_1 + \frac{(d_2 - d_1)}{L} x$.
The radius is $r(x) = d(x)/2$.
The area at section $x$ is $A(x) = \pi [r(x)]^2 = \pi \left(\frac{d(x)}{2}\right)^2 = \frac{\pi}{4} \left(d_1 + \frac{(d_2 - d_1)}{L} x\right)^2$.

Substituting this into the deformation integral:

$$\Delta L = \int_{0}^{L} \frac{P}{E \cdot A(x)} dx = \int_{0}^{L} \frac{P}{E \cdot \frac{\pi}{4} \left(d_1 + \frac{(d_2 - d_1)}{L} x\right)^2} dx$$

Let $k = \frac{(d_2 - d_1)}{L}$. Then $d(x) = d_1 + kx$.
The integral becomes:

$$\Delta L = \frac{4P}{\pi E} \int_{0}^{L} \frac{dx}{(d_1 + kx)^2}$$

This integral is of the form $\int \frac{dx}{u^2}$ where $u = d_1 + kx$.
$\int \frac{dx}{(d_1 + kx)^2} = -\frac{1}{k(d_1 + kx)}$.

Evaluating the definite integral:

$$\Delta L = \frac{4P}{\pi E} \left[-\frac{1}{k(d_1 + kx)}\right]_{0}^{L}$$
$$\Delta L = \frac{4P}{\pi E} \left(-\frac{1}{k(d_1 + kL)} - \left(-\frac{1}{k(d_1)}\right)\right)$$
Substitute $k = \frac{(d_2 - d_1)}{L}$:
$d_1 + kL = d_1 + \frac{(d_2 - d_1)}{L} L = d_1 + d_2 - d_1 = d_2$.
So, $k(d_1+kL) = k d_2 = \frac{(d_2 - d_1)}{L} d_2$.

$$\Delta L = \frac{4P}{\pi E} \left(-\frac{1}{\frac{(d_2 - d_1)}{L} d_2} + \frac{1}{\frac{(d_2 - d_1)}{L} d_1}\right)$$
$$\Delta L = \frac{4P}{\pi E} \frac{L}{(d_2 - d_1)} \left(-\frac{1}{d_2} + \frac{1}{d_1}\right)$$
$$\Delta L = \frac{4P L}{\pi E (d_2 - d_1)} \left(\frac{d_2 - d_1}{d_1 d_2}\right)$$
$$\Delta L = \frac{4PL}{\pi E d_1 d_2}$$

Now, let $A_1 = \frac{\pi d_1^2}{4}$ and $A_2 = \frac{\pi d_2^2}{4}$ be the areas at the ends.
We can rewrite the result:
$d_1 = \sqrt{\frac{4A_1}{\pi}}$ and $d_2 = \sqrt{\frac{4A_2}{\pi}}$.

$$\Delta L = \frac{4PL}{\pi E \sqrt{\frac{4A_1}{\pi}} \sqrt{\frac{4A_2}{\pi}}} = \frac{4PL}{\pi E \frac{4}{\pi}\sqrt{A_1 A_2}}$$
$$\Delta L = \frac{PL}{E \sqrt{A_1 A_2}}$$

This formula is quite elegant! It shows that the deformation of a uniformly tapering conical bar is equivalent to a bar of uniform cross-section with an area equal to the geometric mean of the end areas ($\sqrt{A_1 A_2}$).

*   **Example**: A conical steel rod has a diameter of 10 mm at one end and 20 mm at the other, with a length of 1 meter. If subjected to an axial force of 10 kN, what is its elongation?
    $P = 10 \times 10^3$ N
    $L = 1000$ mm
    $E = 200 \times 10^3$ N/mm²
    $d_1 = 10$ mm, $d_2 = 20$ mm

    Using the derived formula:
    $$\Delta L = \frac{4PL}{\pi E d_1 d_2} = \frac{4 \times (10 \times 10^3 \text{ N}) \times (1000 \text{ mm})}{\pi \times (200 \times 10^3 \text{ N/mm}^2) \times (10 \text{ mm}) \times (20 \text{ mm})}$$
    $$\Delta L = \frac{40 \times 10^6}{400 \pi \times 10^6} \text{ mm} = \frac{1}{10\pi} \text{ mm} \approx 0.0318 \text{ mm}$$

    Alternatively, using the $\sqrt{A_1 A_2}$ form:
    $A_1 = \frac{\pi (10)^2}{4} = 25\pi$ mm²
    $A_2 = \frac{\pi (20)^2}{4} = 100\pi$ mm²
    $\sqrt{A_1 A_2} = \sqrt{(25\pi)(100\pi)} = \sqrt{2500\pi^2} = 50\pi$ mm²

    $$\Delta L = \frac{PL}{E \sqrt{A_1 A_2}} = \frac{(10 \times 10^3 \text{ N}) \times (1000 \text{ mm})}{(200 \times 10^3 \text{ N/mm}^2) \times (50\pi \text{ mm}^2)}$$
    $$\Delta L = \frac{10 \times 10^6}{10000\pi \times 10^3} \text{ mm} = \frac{10 \times 10^6}{10 \pi \times 10^6} \text{ mm} = \frac{1}{\pi} \text{ mm}$$
    Wait, there's a factor of 10 difference. Let's recheck the first formula calculation.
    $$ \Delta L = \frac{4PL}{\pi E d_1 d_2} = \frac{4 \times 10^4 \times 10^3}{\pi \times 200 \times 10^3 \times 10 \times 20} = \frac{4 \times 10^7}{\pi \times 200 \times 10^3 \times 200} = \frac{4 \times 10^7}{\pi \times 40000 \times 10^3} = \frac{4 \times 10^7}{\pi \times 4 \times 10^7} = \frac{1}{\pi} \text{ mm} $$
    Ah, the first calculation had a numerical error. The result is $\frac{1}{\pi}$ mm, which is approximately 0.318 mm. Both formulas now agree.

    *(This showcases CO3: Application of principles, and CO6: Analyzing effects of cross-section change).*

*   **Textbook Reference**: These derivations are standard in books like "Strength of Materials" by R. K. Bansal or "Mechanics of Materials" by Punmia, Jain, and Jain. They emphasize the use of integration for non-uniform sections, a concept directly from calculus applied to solid mechanics.

### 4. Summary and Key Takeaways

Let's consolidate what we've learned:

*   **Stress ($\sigma$)**: Internal force per unit area ($\sigma = P/A$). Uniform for uniform bars, varies with $A(x)$ for non-uniform bars.
*   **Strain ($\varepsilon$)**: Deformation per unit length ($\varepsilon = \Delta L/L$). For elastic materials, $\sigma = E\varepsilon$.
*   **Deformation ($\Delta L$) for Uniform Bars**: $\Delta L = \frac{P L}{A E}$. Directly proportional to $P$ and $L$, inversely proportional to $A$ and $E$.
*   **Deformation ($\Delta L$) for Non-Uniform Bars**: Requires integration. $\Delta L = \int_{0}^{L} \frac{P}{E A(x)} dx$.
*   **Tapered Bars**: Specific cases of non-uniform bars, with derived formulas for deformation (e.g., $\Delta L = \frac{PL}{E \sqrt{A_1 A_2}}$ for a conical bar).

Remember this: the core idea is to understand that forces cause internal stresses, which in turn cause strains (deformations). For uniform members, it's simple algebra. For varying members, calculus (integration) is your tool to sum up infinitesimal effects.

*(This summary directly addresses CO1, CO2, and CO3, reinforcing the key outcomes).*

### Sample Questions with Answers

Here are a few questions to test your understanding and prepare you for exams:

**Question 1 (Conceptual):**
What is the primary reason for using integration to calculate the deformation of a tapered bar, whereas simple algebraic formulas suffice for a bar of uniform cross-section?

**Answer 1:**
The primary reason is the **variation of cross-sectional area** along the length of the tapered bar.
*   In a uniform bar, the cross-sectional area $A$ is constant. Therefore, the stress $\sigma = P/A$ is also constant along the length. Since strain $\varepsilon = \sigma/E$ is also constant (assuming uniform $E$), the total deformation is simply strain multiplied by length ($\Delta L = \varepsilon L = (P/AE)L$).
*   In a tapered bar, the area $A(x)$ changes with position $x$. This means the stress $\sigma(x) = P/A(x)$ also changes along the length. Consequently, the strain $\varepsilon(x) = \sigma(x)/E$ also varies. To find the total deformation, we must sum up the infinitesimal deformations of infinitesimally small segments $dx$. This summation process is achieved through integration: $\Delta L = \int_0^L \varepsilon(x) dx$.

*(This question tests understanding of CO2 and CO6).*

**Question 2 (Calculation - Uniform Bar):**
A steel rod of 20 mm diameter and 500 mm length is subjected to an axial tensile load of 20 kN. Calculate the stress, strain, and elongation of the rod. Assume the Modulus of Elasticity for steel is 200 GPa.

**Answer 2:**
Given:
Diameter $d = 20$ mm
Length $L = 500$ mm
Axial Load $P = 20$ kN $= 20 \times 10^3$ N
Modulus of Elasticity $E = 200$ GPa $= 200 \times 10^3$ N/mm²

1.  **Calculate Cross-sectional Area (A):**
    Radius $r = d/2 = 20/2 = 10$ mm
    $A = \pi r^2 = \pi (10 \text{ mm})^2 = 100\pi$ mm² $\approx 314.16$ mm²

2.  **Calculate Stress ($\sigma$):**
    $\sigma = \frac{P}{A} = \frac{20 \times 10^3 \text{ N}}{100\pi \text{ mm}^2} = \frac{200}{\pi}$ N/mm² $\approx 63.66$ N/mm² (or MPa)

3.  **Calculate Strain ($\varepsilon$):**
    Using Hooke's Law, $\varepsilon = \frac{\sigma}{E}$
    $\varepsilon = \frac{63.66 \text{ N/mm}^2}{200 \times 10^3 \text{ N/mm}^2} = 0.0003183$ (dimensionless)

4.  **Calculate Elongation ($\Delta L$):**
    $\Delta L = \frac{P L}{A E}$
    $\Delta L = \frac{(20 \times 10^3 \text{ N}) \times (500 \text{ mm})}{(100\pi \text{ mm}^2) \times (200 \times 10^3 \text{ N/mm}^2)}$
    $\Delta L = \frac{10 \times 10^6}{20 \times 10^6 \pi} \text{ mm} = \frac{1}{2\pi}$ mm $\approx 0.159$ mm

*(This question tests CO3).*

**Question 3 (Calculation - Uniformly Varying Bar):**
A solid cone of height $h$ and base diameter $D$ is subjected to an axial compressive load $P$ at the base. Determine the total compression.

**Answer 3:**
Given:
Height $= h$
Base Diameter $= D$
Axial Load $= P$

The cone tapers from a diameter $D$ at the base ($x=0$) to a diameter $0$ at the apex ($x=h$).
The diameter $d(x)$ at a distance $x$ from the apex is given by similar triangles: $\frac{d(x)}{x} = \frac{D}{h}$, so $d(x) = \frac{D}{h}x$.
The area at section $x$ (measured from apex) is $A(x) = \frac{\pi}{4} [d(x)]^2 = \frac{\pi}{4} \left(\frac{D}{h}x\right)^2$.

The total compression $\Delta L$ is found by integrating from the apex ($x=0$) to the base ($x=h$):
$\Delta L = \int_{0}^{h} \frac{P}{E A(x)} dx$
$\Delta L = \int_{0}^{h} \frac{P}{E \frac{\pi}{4} \left(\frac{D}{h}x\right)^2} dx = \frac{4P}{\pi E} \int_{0}^{h} \frac{h^2}{D^2 x^2} dx$
$\Delta L = \frac{4P h^2}{\pi E D^2} \int_{0}^{h} \frac{1}{x^2} dx$

The integral $\int_{0}^{h} \frac{1}{x^2} dx$ diverges at $x=0$. This indicates an issue with measuring $x$ from the apex for a complete cone or the approach for a point load at the apex.

**Correction:** Let's re-frame the problem for a *frustum* or consider the load applied to the base and measure $x$ from the base.
If we consider a cone frustum of height $h$, base diameter $D_1$ and top diameter $D_2$, and $x$ is measured from the base:
$d(x) = D_1 - \frac{(D_1-D_2)}{h}x$.
$A(x) = \frac{\pi}{4} \left( D_1 - \frac{(D_1-D_2)}{h}x \right)^2$.

For a full cone of height $h$, base diameter $D$, and load $P$ applied at the base, it's more common to consider it as a limit of a frustum where $D_2 \to 0$.
Let's use the formula derived for the conical bar: $\Delta L = \frac{4PL}{\pi E d_1 d_2}$.
Here, $L=h$, $d_1=D$ (base diameter), and $d_2=0$ (apex diameter).
This formula gives $\Delta L = \frac{4Ph}{\pi E D (0)}$, which implies infinite deformation.

The problem statement implies a solid cone, which tapers to a point. When an axial load is applied to the base of a cone, the area at the apex is zero, leading to infinite stress if $P$ is finite. This scenario is idealized.

**Revisiting the integral for a full cone, taking $x$ from the apex:**
$A(x) = \frac{\pi D^2}{4h^2} x^2$.
The load $P$ is applied at the base. The internal force $P$ is constant.
$\Delta L = \int_{0}^{h} \frac{P}{E A(x)} dx = \int_{0}^{h} \frac{P}{E \frac{\pi D^2}{4h^2} x^2} dx = \frac{4Ph^2}{\pi E D^2} \int_{0}^{h} \frac{1}{x^2} dx$.
This integral still diverges at $x=0$ (the apex).

**A more practical interpretation for a solid cone with base load $P$:**
This idealized scenario of a solid cone with zero area at the apex under finite load is not typically encountered in simple problems without modification. Usually, problems will involve a frustum or a more realistic shape. If we were forced to interpret this as a limit, the stress at the apex would be infinite, and deformation would also be problematic.

**Let's consider a slightly modified, common problem:** A solid cone where the base diameter is $D_1$ and the diameter at height $h$ from the base is $D_2$ (so the total height of the cone from the apex is $h_{total}$). Let the load $P$ be applied at the base.
If $x$ is measured from the base, $d(x) = D_1 - \frac{(D_1-D_2)}{h}x$.
The integral for deformation: $\Delta L = \int_0^h \frac{P}{E \frac{\pi}{4}(D_1 - \frac{D_1-D_2}{h}x)^2} dx$.
This integral will yield a finite result.

**However, if the question implies the standard conical bar formula where $d_2$ approaches 0:**
The formula $\Delta L = \frac{PL}{E \sqrt{A_1 A_2}}$ for a conical bar of length $L$ with end areas $A_1$ and $A_2$.
For a full cone, $L=h$, $A_1 = \frac{\pi D^2}{4}$, $A_2 \to 0$.
$\Delta L = \frac{Ph}{E \sqrt{A_1 \cdot 0}} = \frac{Ph}{0} \to \infty$. This confirms infinite deformation due to infinite stress at the apex.

**Let's assume the question implies a "practical" cone that tapers to a very small diameter $d_2$ at the apex, so we can use the formula:**
$\Delta L = \frac{PL}{E \sqrt{A_1 A_2}}$
$L=h$, $A_1 = \frac{\pi D^2}{4}$, $A_2 = \frac{\pi d_2^2}{4}$.
$\Delta L = \frac{Ph}{E \sqrt{\frac{\pi D^2}{4} \frac{\pi d_2^2}{4}}} = \frac{Ph}{E \frac{\pi D d_2}{4}} = \frac{4Ph}{\pi E D d_2}$.
This result depends on the small apex diameter $d_2$. As $d_2 \to 0$, $\Delta L \to \infty$.

**Therefore, for a perfectly idealized solid cone, the deformation under a finite base load is infinite.** This is a important theoretical point.

*(This question tests understanding of integration for varying cross-sections and the implications of zero area at the apex (CO3, CO6)).*

---
This concludes our introduction to axially loaded bars. We've covered the fundamentals of stress and strain and how they apply to both uniform and uniformly varying cross-sections. Keep these formulas and concepts in mind as we build upon them in subsequent modules!
