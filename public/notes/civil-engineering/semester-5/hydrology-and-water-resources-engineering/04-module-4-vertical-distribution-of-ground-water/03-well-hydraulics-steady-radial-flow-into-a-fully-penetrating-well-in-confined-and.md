---
title: "Well hydraulics-Steady radial flow into a fully penetrating well in Confined and Unconfined aquifers"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 4: Vertical distribution of ground water"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d9f"
status: "completed"
scrapedAt: "2026-05-20T18:49:27.544Z"
---
# Module 4: Vertical Distribution of Groundwater

## Topic: Well Hydraulics - Steady Radial Flow into a Fully Penetrating Well

This module delves into how groundwater behaves when we extract it from the earth, specifically focusing on the steady-state flow of water towards a fully penetrating well. Understanding these principles is crucial for designing efficient and sustainable water supply systems.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the fundamental principles of steady radial flow into a well.
*   Derive and apply the Thiem equation for confined aquifers.
*   Derive and apply the modified Thiem equation (or similar concepts) for unconfined aquifers.
*   Calculate well discharge, drawdown, and water levels in both confined and unconfined aquifers.
*   Understand the influence of aquifer properties (hydraulic conductivity, transmissivity, storativity, specific yield) on well performance.
*   Recognize the assumptions and limitations of steady-state radial flow analysis.

---

### 1. Introduction to Well Hydraulics

Well hydraulics is the study of the movement of groundwater towards a well and the resulting changes in the groundwater table or potentiometric surface. It's essential for:

*   **Estimating aquifer yield:** Determining how much water a well can reliably supply.
*   **Predicting drawdown:** Estimating the decline in water levels due to pumping.
*   **Designing pumping systems:** Selecting appropriate pumps and well screens.
*   **Managing groundwater resources:** Ensuring sustainable extraction.

**Key Concepts:**

*   **Well:** A bore hole drilled into an aquifer to extract groundwater.
*   **Pumping:** The process of removing groundwater from a well.
*   **Drawdown:** The vertical distance the water level (or potentiometric surface) declines due to pumping.
*   **Recharge:** The process of water entering the aquifer.
*   **Steady State:** A condition where the rate of groundwater flow into the well is equal to the rate of pumping, and the water levels are no longer changing with time.
*   **Radial Flow:** Groundwater movement directed radially towards the well from all directions.
*   **Fully Penetrating Well:** A well that extends through the entire thickness of the aquifer.

---

### 2. Steady Radial Flow into a Fully Penetrating Well in a **Confined Aquifer**

#### 2.1 Confined Aquifer Definition

*   A confined aquifer is an aquifer that is sandwiched between two impermeable layers (aquicludes).
*   It is under pressure, and the water level in a well penetrating it rises above the top of the aquifer. This level is known as the **potentiometric surface**.
*   The **transmissivity (T)** is a key parameter for confined aquifers, representing the ability of the aquifer to transmit water. It is the product of hydraulic conductivity (K) and aquifer thickness (b): $T = K \times b$.

#### 2.2 Darcy's Law

Darcy's Law is the fundamental principle governing groundwater flow. For radial flow in a confined aquifer, it can be expressed as:

$Q = -KA \frac{dh}{dr}$

Where:
*   $Q$ = Discharge rate ($L^3/T$)
*   $K$ = Hydraulic conductivity ($L/T$)
*   $A$ = Cross-sectional area of flow ($L^2$)
*   $\frac{dh}{dr}$ = Hydraulic gradient (change in head with respect to distance) ($L/L$)

#### 2.3 Derivation of the Thiem Equation

Consider a confined aquifer with a constant transmissivity T. A fully penetrating well of radius $r_w$ is pumped at a constant rate $Q$. We are looking for the head distribution ($h$) around the well under steady-state conditions.

1.  **Flow through a cylindrical surface:** At a radial distance $r$ from the well, consider a cylindrical surface of radius $r$ and height $b$ (the aquifer thickness). The area of this surface is $A = 2\pi r b$.
2.  **Applying Darcy's Law:** The flow rate $Q$ through this cylindrical surface is given by:
    $Q = -KA \frac{dh}{dr}$
    Substituting $A = 2\pi r b$ and $K = T/b$:
    $Q = -(T/b)(2\pi r b) \frac{dh}{dr}$
    $Q = -2\pi r T \frac{dh}{dr}$
3.  **Separating variables and integrating:** Rearrange the equation to separate $h$ and $r$:
    $\frac{dh}{dr} = -\frac{Q}{2\pi T r}$
    Integrate both sides from a distance $r_1$ with head $h_1$ to a distance $r_2$ with head $h_2$:
    $\int_{h_1}^{h_2} dh = \int_{r_1}^{r_2} -\frac{Q}{2\pi T r} dr$
    $h_2 - h_1 = -\frac{Q}{2\pi T} \int_{r_1}^{r_2} \frac{1}{r} dr$
    $h_2 - h_1 = -\frac{Q}{2\pi T} [\ln(r)]_{r_1}^{r_2}$
    $h_2 - h_1 = -\frac{Q}{2\pi T} (\ln(r_2) - \ln(r_1))$
    $h_1 - h_2 = \frac{Q}{2\pi T} (\ln(r_2) - \ln(r_1))$
    $h_1 - h_2 = \frac{Q}{2\pi T} \ln\left(\frac{r_2}{r_1}\right)$

This is the **Thiem Equation** (or the **Theis equation** in a slightly different form depending on the derivation). It relates the difference in potentiometric heads between two points to the discharge rate and aquifer properties.

**Common Application of Thiem Equation:**

Often, we are interested in the drawdown ($s$) at the well ($r_w$) when we know the water level at a larger distance ($r_1$) or the recharge boundary ($r_2$).

Let:
*   $h_1$ = Potentiometric head at a distance $r_1$ (e.g., the undisturbed water table, $h_0$)
*   $h_w$ = Potentiometric head at the well face ($r_w$)
*   $s_w$ = Drawdown at the well ($s_w = h_0 - h_w$)

Rearranging the Thiem equation:

$Q = \frac{2\pi T (h_1 - h_2)}{\ln(r_2/r_1)}$

If we consider the cone of depression extending to a radius of influence $R$ (where drawdown is negligible, i.e., $h_R = h_0$), and measure the head at the well face $h_w$:

$h_0 - h_w = \frac{Q}{2\pi T} \ln\left(\frac{R}{r_w}\right)$

Therefore, the drawdown at the well is:

$s_w = \frac{Q}{2\pi T} \ln\left(\frac{R}{r_w}\right)$

This equation allows us to predict drawdown if we know the aquifer properties ($T$), pumping rate ($Q$), well radius ($r_w$), and the radius of influence ($R$). The radius of influence is an empirical value, often estimated based on aquifer characteristics and pumping duration.

#### 2.4 Key Parameters and Calculations

*   **Discharge Rate (Q):** Can be measured directly or calculated if drawdown and aquifer properties are known.
*   **Transmissivity (T):** Can be determined from aquifer tests or estimated from hydraulic conductivity and thickness.
*   **Hydraulic Conductivity (K):** A property of the porous medium.
*   **Aquifer Thickness (b):** The saturated thickness of the confined aquifer.
*   **Well Radius ($r_w$):** The radius of the well casing.
*   **Radius of Influence (R):** The radial distance from the well where the drawdown becomes negligible.
*   **Drawdown ($s$):** $s = h_0 - h$.

**Example 1 (Confined Aquifer):**

A fully penetrating well in a confined aquifer with a transmissivity of $500 \, m^2/day$ is pumped at a rate of $2000 \, m^3/day$. The well radius is $0.2 \, m$. If the radius of influence of the cone of depression is $300 \, m$, calculate the drawdown at the well face.

**Solution:**

Using the Thiem equation for drawdown:
$s_w = \frac{Q}{2\pi T} \ln\left(\frac{R}{r_w}\right)$

Given:
*   $Q = 2000 \, m^3/day$
*   $T = 500 \, m^2/day$
*   $R = 300 \, m$
*   $r_w = 0.2 \, m$

$s_w = \frac{2000 \, m^3/day}{2\pi (500 \, m^2/day)} \ln\left(\frac{300 \, m}{0.2 \, m}\right)$
$s_w = \frac{2000}{1000\pi} \ln(1500)$
$s_w = \frac{2}{\pi} \times 7.313$
$s_w \approx 0.637 \times 7.313$
$s_w \approx 4.66 \, m$

**Therefore, the drawdown at the well face is approximately 4.66 meters.**

---

### 3. Steady Radial Flow into a Fully Penetrating Well in an **Unconfined Aquifer**

#### 3.1 Unconfined Aquifer Definition

*   An unconfined aquifer (also known as a water-table aquifer) is an aquifer that has a free surface or water table, which is exposed to atmospheric pressure.
*   The top of the saturated zone is the water table.
*   The **storativity (S)** is a key parameter for confined aquifers, representing the volume of water released from storage per unit surface area of aquifer per unit decline in head. For unconfined aquifers, the equivalent concept related to water table decline is **specific yield (Sy)**, which represents the volume of water that drains from the aquifer per unit volume of aquifer material under gravity.

#### 3.2 Modifications to Darcy's Law and Derivation

In an unconfined aquifer, the saturated thickness of the aquifer ($b$) changes as the water table declines due to pumping. This makes the derivation of the flow equation more complex than for confined aquifers.

Consider the steady radial flow towards a well of radius $r_w$ pumping at a rate $Q$. Let $h$ be the height of the water table (which also represents the saturated thickness) at a radial distance $r$ from the well.

1.  **Darcy's Law for Unconfined Aquifers:** The flow rate through a cylindrical surface of radius $r$ and height $h$ (the saturated thickness) is:
    $Q = -K A \frac{dh}{dr}$
    Here, $A = 2\pi r h$ (the cross-sectional area is the circumference times the saturated thickness at that radius).
    So, $Q = -K (2\pi r h) \frac{dh}{dr}$

2.  **Separating variables and integrating:**
    $Q = -2\pi K r h \frac{dh}{dr}$
    Rearrange to separate variables:
    $\frac{dh}{dr} = -\frac{Q}{2\pi K r h}$
    $h \, dh = -\frac{Q}{2\pi K r} dr$

    Integrate both sides. Let $h_1$ be the water table height at distance $r_1$ (e.g., the initial water table, $h_0$, at a large distance $R$) and $h_w$ be the water table height at the well face ($r_w$).

    $\int_{h_1}^{h_w} h \, dh = \int_{r_1}^{r_2} -\frac{Q}{2\pi K r} dr$

    $\left[\frac{h^2}{2}\right]_{h_1}^{h_w} = -\frac{Q}{2\pi K} \int_{r_1}^{r_2} \frac{1}{r} dr$

    $\frac{h_w^2}{2} - \frac{h_1^2}{2} = -\frac{Q}{2\pi K} [\ln(r)]_{r_1}^{r_2}$

    $\frac{h_w^2 - h_1^2}{2} = -\frac{Q}{2\pi K} (\ln(r_2) - \ln(r_1))$

    $\frac{h_1^2 - h_w^2}{2} = \frac{Q}{2\pi K} \ln\left(\frac{r_2}{r_1}\right)$

This equation is a modified form of the Thiem equation for unconfined aquifers.

**Common Application for Drawdown:**

Let:
*   $h_0$ = Initial water table height at a large distance $R$ (radius of influence, where drawdown is negligible). So, $h_1 = h_0$.
*   $h_w$ = Water table height at the well face ($r_w$).
*   $s_w$ = Drawdown at the well ($s_w = h_0 - h_w$).

The equation becomes:
$\frac{h_0^2 - h_w^2}{2} = \frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right)$

We can express $h_w$ in terms of $h_0$ and $s_w$: $h_w = h_0 - s_w$.
Substituting this:
$\frac{h_0^2 - (h_0 - s_w)^2}{2} = \frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right)$
$\frac{h_0^2 - (h_0^2 - 2h_0 s_w + s_w^2)}{2} = \frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right)$
$\frac{2h_0 s_w - s_w^2}{2} = \frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right)$

$h_0 s_w - \frac{s_w^2}{2} = \frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right)$

**Approximation for Small Drawdowns:**

When the drawdown ($s_w$) is small compared to the initial saturated thickness ($h_0$), the $s_w^2$ term becomes negligible. This is a common assumption to simplify the equation.
In this case:
$h_0 s_w \approx \frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right)$

$s_w \approx \frac{Q}{2\pi K h_0} \ln\left(\frac{R}{r_w}\right)$

Notice that $K h_0$ is the transmissivity ($T$) of the unconfined aquifer at the initial saturated thickness. So, the equation resembles the confined aquifer equation:

$s_w \approx \frac{Q}{2\pi T} \ln\left(\frac{R}{r_w}\right)$

**Important Note:** This approximation is valid only when $s_w \ll h_0$. If the drawdown is significant, the exact equation should be used.

#### 3.3 Key Parameters and Calculations

*   **Discharge Rate (Q):** Measured or calculated.
*   **Hydraulic Conductivity (K):** Property of the porous medium.
*   **Initial Saturated Thickness ($h_0$):** The water table depth before pumping at a large distance.
*   **Water Table Height at Well ($h_w$):** The water level in the well.
*   **Drawdown ($s_w$):** $s_w = h_0 - h_w$.
*   **Radius of Influence (R):** Similar to confined aquifers.
*   **Well Radius ($r_w$):** Radius of the well casing.

**Example 2 (Unconfined Aquifer - Approximation):**

A fully penetrating well in an unconfined aquifer is pumped at a rate of $1500 \, m^3/day$. The initial water table depth is $20 \, m$ ($h_0$). The well radius is $0.15 \, m$, and the hydraulic conductivity of the aquifer is $10 \, m/day$. Assume the radius of influence is $250 \, m$. Calculate the drawdown at the well, assuming the drawdown is small compared to the initial saturated thickness.

**Solution:**

Using the approximate equation for drawdown in unconfined aquifers:
$s_w \approx \frac{Q}{2\pi K h_0} \ln\left(\frac{R}{r_w}\right)$

Given:
*   $Q = 1500 \, m^3/day$
*   $K = 10 \, m/day$
*   $h_0 = 20 \, m$
*   $R = 250 \, m$
*   $r_w = 0.15 \, m$

$s_w \approx \frac{1500 \, m^3/day}{2\pi (10 \, m/day) (20 \, m)} \ln\left(\frac{250 \, m}{0.15 \, m}\right)$
$s_w \approx \frac{1500}{400\pi} \ln(1666.67)$
$s_w \approx \frac{15}{4\pi} \times 7.418$
$s_w \approx 1.194 \times 7.418$
$s_w \approx 8.86 \, m$

**Check the assumption:** $s_w (8.86 \, m) < h_0 (20 \, m)$. The assumption is reasonably valid.

**Therefore, the approximate drawdown at the well face is 8.86 meters.**

**Example 3 (Unconfined Aquifer - Exact Equation):**

Using the same data as Example 2, but now calculate the drawdown using the exact equation:
$\frac{h_0^2 - h_w^2}{2} = \frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right)$

From Example 2, we know that $\frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right) \approx 8.86 \times 2 \times \pi \times 10 \times 20 / 1500 \approx 7.418$. Actually, the value on the right side of the equation is $8.86 \times 2 \times \pi \times K \times h_0 / Q = 8.86 \times 2 \times \pi \times 10 \times 20 / 1500 = 7.418$.

So, $\frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right) = \frac{1500 \, m^3/day}{2\pi (10 \, m/day)} \ln\left(\frac{250 \, m}{0.15 \, m}\right) = \frac{150}{2\pi} \times 7.418 \approx 7.418 \times 23.87 \approx 177.5 \, m^2$.

$\frac{h_0^2 - h_w^2}{2} = 177.5 \, m^2$
$h_0^2 - h_w^2 = 355 \, m^2$
$(20 \, m)^2 - h_w^2 = 355 \, m^2$
$400 \, m^2 - h_w^2 = 355 \, m^2$
$h_w^2 = 400 \, m^2 - 355 \, m^2 = 45 \, m^2$
$h_w = \sqrt{45} \approx 6.71 \, m$

Drawdown $s_w = h_0 - h_w = 20 \, m - 6.71 \, m = 13.29 \, m$.

**Using the exact equation, the drawdown is 13.29 meters.**

**Note the significant difference between the approximate and exact solutions when the drawdown is substantial.** The approximation significantly underestimates the drawdown in this case.

#### 3.4 Specific Yield (Sy)

Specific yield is the volume of water that an aquifer material will yield by gravity drainage per unit volume of the aquifer. It's a crucial parameter for unconfined aquifers, particularly in transient flow, but it also implicitly influences the effective saturated thickness considered in steady-state flow. While not directly used in the Thiem-like equations for steady flow, it's a key aquifer property related to water retention and release.

---

### 4. Assumptions and Limitations of Steady Radial Flow Analysis

It's crucial to remember that these equations are based on several simplifying assumptions:

*   **Homogeneous and Isotropic Aquifer:** The hydraulic conductivity (K) is assumed to be uniform throughout the aquifer and the same in all directions.
*   **Infinite or Large Extent:** The aquifer is assumed to be extensive, or the boundaries are far enough away not to influence the flow towards the well.
*   **Constant Aquifer Thickness (Confined):** The thickness of the confined aquifer is assumed to be constant.
*   **Uniform Water Table/Potentiometric Surface (Initial):** The water table or potentiometric surface is assumed to be horizontal before pumping begins.
*   **Fully Penetrating Well:** The well is assumed to extend from the top to the bottom of the aquifer (or through the entire saturated thickness).
*   **Laminar Flow:** The flow is assumed to be laminar, as described by Darcy's Law. Turbulent flow can occur at very high pumping rates or near the well face.
*   **No Well Losses:** Losses due to friction within the well screen or casing are ignored.
*   **Negligible Gravity Flow in Unconfined Aquifers (for approximation):** The approximation assumes that the effect of changing saturated thickness on the flow gradient is minor.

**When these assumptions are violated, the actual well performance may deviate from the predicted values.** For instance:

*   **Anisotropic Aquifers:** If K varies with direction, radial flow equations become more complex.
*   **Aquifer Boundaries:** Impermeable boundaries (no-flow) or recharge boundaries (constant head) will alter the flow pattern and water levels.
*   **Partially Penetrating Wells:** Wells that do not extend through the entire aquifer thickness require specialized analysis.
*   **Transient Flow:** During pumping startup or shutdown, or when water levels are fluctuating due to other factors, the flow is transient, and different equations (like Theis or Cooper-Jacob) are needed.
*   **Well Losses:** Significant well losses can lead to a higher effective drawdown near the well.

---

### 5. Practice Questions and Exercises

**Question 1:**

A fully penetrating well in a confined aquifer with a transmissivity of $400 \, m^2/day$ is pumped at a constant rate of $1800 \, m^3/day$. The well radius is $0.25 \, m$. If the radius of influence is $400 \, m$, what is the drawdown at the well face?

**Answer 1:**
$s_w = \frac{Q}{2\pi T} \ln\left(\frac{R}{r_w}\right)$
$s_w = \frac{1800 \, m^3/day}{2\pi (400 \, m^2/day)} \ln\left(\frac{400 \, m}{0.25 \, m}\right)$
$s_w = \frac{1800}{800\pi} \ln(1600)$
$s_w = \frac{2.25}{\pi} \times 7.378$
$s_w \approx 0.716 \times 7.378 \approx 5.28 \, m$

**Question 2:**

In an unconfined aquifer, a fully penetrating well is pumped at $1200 \, m^3/day$. The initial water table depth is $15 \, m$. The well radius is $0.1 \, m$, and the hydraulic conductivity is $8 \, m/day$. Assume the radius of influence is $300 \, m$.
(a) Calculate the approximate drawdown at the well face, assuming drawdown is small.
(b) Calculate the actual water table height at the well face using the exact equation.

**Answer 2:**

(a) Approximate Drawdown:
$s_w \approx \frac{Q}{2\pi K h_0} \ln\left(\frac{R}{r_w}\right)$
$s_w \approx \frac{1200 \, m^3/day}{2\pi (8 \, m/day) (15 \, m)} \ln\left(\frac{300 \, m}{0.1 \, m}\right)$
$s_w \approx \frac{1200}{240\pi} \ln(3000)$
$s_w \approx \frac{5}{\pi} \times 8.006$
$s_w \approx 1.59 \times 8.006 \approx 12.73 \, m$
(Check: $12.73 \, m < 15 \, m$, so approximation is reasonably good, but the exact calculation will show a difference).

(b) Actual Water Table Height at the Well Face (Exact Equation):
$\frac{h_0^2 - h_w^2}{2} = \frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right)$
First, calculate the right-hand side:
$\frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right) = \frac{1200 \, m^3/day}{2\pi (8 \, m/day)} \ln\left(\frac{300 \, m}{0.1 \, m}\right)$
$= \frac{1200}{16\pi} \times 8.006$
$= \frac{75}{\pi} \times 8.006 \approx 23.87 \times 8.006 \approx 191.4 \, m^2$

Now, substitute into the main equation:
$\frac{(15 \, m)^2 - h_w^2}{2} = 191.4 \, m^2$
$\frac{225 \, m^2 - h_w^2}{2} = 191.4 \, m^2$
$225 \, m^2 - h_w^2 = 382.8 \, m^2$
$h_w^2 = 225 \, m^2 - 382.8 \, m^2 = -157.8 \, m^2$

**Hold on! There's a problem here.** This indicates that the pumping rate is too high for the given aquifer properties and radius of influence to maintain steady-state flow or that the radius of influence is too large relative to the initial water table depth. In reality, this scenario might lead to the well running dry or the cone of depression reaching the aquifer boundary.

Let's re-evaluate the value of $h_w$. If $h_w$ becomes less than $r_w$, then the assumption of a fully penetrating well is no longer valid near the well. Let's assume a valid scenario where the calculations work out.

**Let's modify Question 2(b) slightly to make it solvable within reasonable physical limits or use a different set of values.**

**Revised Question 2(b):**

Using the same data as Question 2, but assume the initial water table depth is $30 \, m$ ($h_0 = 30 \, m$). Calculate the actual water table height at the well face using the exact equation.

**Answer 2 (Revised b):**

The right-hand side of the equation remains the same: $\frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right) \approx 191.4 \, m^2$.

$\frac{h_0^2 - h_w^2}{2} = 191.4 \, m^2$
$\frac{(30 \, m)^2 - h_w^2}{2} = 191.4 \, m^2$
$\frac{900 \, m^2 - h_w^2}{2} = 191.4 \, m^2$
$900 \, m^2 - h_w^2 = 382.8 \, m^2$
$h_w^2 = 900 \, m^2 - 382.8 \, m^2 = 517.2 \, m^2$
$h_w = \sqrt{517.2} \approx 22.74 \, m$

Drawdown $s_w = h_0 - h_w = 30 \, m - 22.74 \, m = 7.26 \, m$.
This drawdown ($7.26 \, m$) is much less than the initial saturated thickness ($30 \, m$), making the initial approximation ($12.73 \, m$) significantly different.

**Question 3:**

What are the primary assumptions behind the Thiem equation for confined aquifers? List at least three.

**Answer 3:**

1.  **Homogeneous and Isotropic Aquifer:** The hydraulic conductivity (K) is uniform throughout the aquifer and the same in all directions.
2.  **Infinite or Large Extent:** The aquifer is assumed to be large enough that boundaries do not affect the flow towards the well within the radius of influence.
3.  **Steady State Flow:** The pumping rate is constant, and the water levels are no longer changing with time.
4.  **Laminar Flow:** Darcy's Law is applicable.
5.  **Fully Penetrating Well:** The well extends through the entire aquifer thickness.

---

### 6. Important Points to Remember

*   **Confined Aquifers:** Use the Thiem equation ($s_w = \frac{Q}{2\pi T} \ln\left(\frac{R}{r_w}\right)$), where $T = Kb$. Drawdown is in terms of potentiometric head change.
*   **Unconfined Aquifers:** Use the modified Thiem equation. The exact form is $\frac{h_0^2 - h_w^2}{2} = \frac{Q}{2\pi K} \ln\left(\frac{R}{r_w}\right)$. Drawdown is in terms of water table change.
*   **Approximation for Unconfined Aquifers:** If $s_w \ll h_0$, then $s_w \approx \frac{Q}{2\pi K h_0} \ln\left(\frac{R}{r_w}\right)$. Be cautious with this approximation, as it can lead to significant errors if the drawdown is large relative to the initial water table depth.
*   **Transmissivity (T)** is crucial for confined aquifers.
*   **Hydraulic Conductivity (K) and Initial Saturated Thickness ($h_0$)** are crucial for unconfined aquifers.
*   **Radius of Influence (R)** is an empirical parameter.
*   **Steady-state analysis** is valid only after the flow system has stabilized. Transient conditions require different analytical techniques.
*   Always **check the assumptions** before applying these equations.

---
