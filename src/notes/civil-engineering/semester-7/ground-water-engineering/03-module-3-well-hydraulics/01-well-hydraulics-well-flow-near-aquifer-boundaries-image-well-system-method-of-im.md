---
title: "Well hydraulics -Well flow near aquifer boundaries- Image well system. Method of images- Practical cases (Problems from method of images)"
subject: "GROUND WATER ENGINEERING"
module: "Module 3: Well hydraulics "
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba811537"
status: "completed"
scrapedAt: "2026-05-20T19:00:06.316Z"
---
# Ground Water Engineering: Module 3 - Well Hydraulics

## Topic: Well Flow Near Aquifer Boundaries - Image Well System & Method of Images

### 1. Introduction: Why Consider Aquifer Boundaries?

When a well is drilled into an aquifer, the flow patterns are often influenced by the presence of boundaries. These boundaries can be natural or artificial and significantly alter the hydraulic head distribution and the pumping rate. Ignoring boundaries can lead to inaccurate estimations of well yield, drawdown, and the extent of influence of pumping.

**Key Concepts:**

*   **Aquifer Boundary:** A geological or hydrological feature that limits the extent of groundwater flow.
*   **Hydraulic Head:** The total energy per unit weight of groundwater at a point.
*   **Drawdown:** The reduction in the hydraulic head caused by pumping.
*   **Cone of Depression:** The conical shape of the cone of depression formed by the drawdown around a pumping well.

**Types of Boundaries:**

*   **Impermeable Boundaries (No-Flow Boundaries):** These boundaries prevent groundwater flow across them. Examples include:
    *   Geological formations of very low permeability (e.g., bedrock, unfractured clay layers).
    *   Barriers created by man-made cutoff walls.
*   **Perched Water Table:** A localized saturated zone above the main water table, which acts as a temporary impermeable boundary.
*   **Recharge Boundaries (Constant-Head Boundaries):** These boundaries maintain a constant hydraulic head, effectively acting as a source of recharge to the aquifer. Examples include:
    *   Rivers, lakes, and oceans where the water level is maintained.
    *   Regions of significant rainfall infiltration or artesian conditions.

### 2. The Image Well System and Method of Images

The **Method of Images** is a powerful analytical technique used to simplify the solution of groundwater flow problems involving wells near impermeable or constant-head boundaries. It involves creating a hypothetical "image" well, mirrored across the boundary, such that the combination of the actual well and its image satisfies the boundary conditions.

**Key Concepts:**

*   **Image Well:** A hypothetical well created to simulate the effect of an aquifer boundary.
*   **Method of Images:** A mathematical technique that uses image wells to solve complex flow problems by transforming them into simpler problems with no boundaries.

#### 2.1. Image Wells for Impermeable Boundaries

When a well is located near an impermeable boundary, the flow lines should be perpendicular to the boundary, and the equipotential lines should be parallel to it. To satisfy these conditions, an **image well** is introduced on the opposite side of the impermeable boundary, at the same distance from the boundary as the real well.

*   **Image Well Type:** The image well is assumed to have the **same pumping rate and direction** as the real well (i.e., if the real well is pumping out, the image well is also pumping out).
*   **Purpose:** The combined flow from the real well and the image well creates a condition where the hydraulic head along the boundary is uniform (effectively zero drawdown if the boundary is assumed to be at the original undisturbed water table). This simulates the no-flow condition.

**Illustration:**

Imagine a well `W` at a distance `d` from an impermeable boundary `B`. An image well `W'` is placed at the same distance `d` on the other side of `B`.

```
      -------------------- Impermeable Boundary (B) --------------------
                           ^
                           | d
                           |
                           o W (Real Well)
                           |
                           | d
                           |
                           o W' (Image Well)
```

**Flow Net:** The flow lines emanating from `W` and `W'` are symmetric with respect to `B`. The equipotential lines are also symmetric. Along `B`, the contribution to the head from `W` and `W'` cancels out, creating a uniform head (effectively a no-flow boundary).

#### 2.2. Image Wells for Constant-Head Boundaries

When a well is located near a constant-head boundary (e.g., a river), the hydraulic head at the boundary is maintained at a constant value. To simulate this, an **image well** is introduced on the opposite side of the constant-head boundary.

*   **Image Well Type:** The image well is assumed to have the **opposite pumping rate** as the real well. If the real well is pumping out, the image well is assumed to be recharging the aquifer.
*   **Purpose:** The combined flow from the real well and the image well creates a condition where the hydraulic head along the boundary remains constant.

**Illustration:**

Imagine a well `W` at a distance `d` from a constant-head boundary `B`. An image well `W'` is placed at the same distance `d` on the other side of `B`.

```
      -------------------- Constant-Head Boundary (B) --------------------
                           ^
                           | d
                           |
                           o W (Real Well, Pumping Out)
                           |
                           | d
                           |
                           o W' (Image Well, Recharging)
```

**Flow Net:** The flow lines are again symmetric with respect to `B`. Along `B`, the recharge from `W'` compensates for the pumping from `W`, maintaining the constant head.

### 3. Practical Cases and Problems from Method of Images

The Method of Images is widely applied to analyze well performance in various scenarios.

#### 3.1. Case 1: Well Near a Single Impermeable Boundary

**Problem Statement:** A well is pumping at a rate `Q` in a confined aquifer. The well is located at a distance `d` from a parallel impermeable boundary. Calculate the drawdown at a distance `r` from the well.

**Solution Approach:**

1.  Introduce an image well `W'` at a distance `d` on the other side of the impermeable boundary, pumping at the same rate `Q`.
2.  The total drawdown `s_total` at any point is the sum of the drawdown from the real well `s_real` and the drawdown from the image well `s_image`.
3.  Use the appropriate well flow equation (e.g., Theis or Jacob) to calculate the drawdown from each well.

**Formulas (Confined Aquifer, Theis Equation):**

The drawdown `s` at a distance `r` from a well pumping at rate `Q` in a confined aquifer is given by:

$s = \frac{Q}{4 \pi T} W(u)$

where:
*   `T` is the transmissivity of the aquifer.
*   `W(u)` is the exponential integral function (Well function).
*   $u = \frac{r^2 S}{4 T t}$
*   `S` is the storativity of the aquifer.
*   `t` is the time since pumping began.

For steady-state flow or when `u` is small (typically `u < 0.01`), the Jacob approximation can be used:

$s = \frac{Q}{4 \pi T} \left( -\gamma - \ln(u) \right)$
$s = \frac{Q}{4 \pi T} \left( -\gamma - \ln\left(\frac{r^2 S}{4 T t}\right) \right)$

where `γ` is Euler-Mascheroni constant (0.5772).

**Applying Method of Images:**

Let the real well `W` be at the origin (0,0). The impermeable boundary `B` is at $x = -d$. The image well `W'` is at $(-2d, 0)$ if the boundary is at $x = -d$, or at $(d, 0)$ if the boundary is at $x = 0$. Let's assume the boundary is at $x=0$ and the well is at $(d, 0)$. The image well `W'` will be at $(-d, 0)$.

*   Distance from real well `W` to observation point `P(x, y)` is $r_1 = \sqrt{(x-d)^2 + y^2}$.
*   Distance from image well `W'` to observation point `P(x, y)` is $r_2 = \sqrt{(x+d)^2 + y^2}$.

**Total Drawdown at point P:**

$s_{total} = s_{real} + s_{image}$

If we use the Jacob approximation for steady-state flow:

$s_{total} = \frac{Q}{4 \pi T} \left( -\gamma - \ln\left(\frac{r_1^2 S}{4 T t}\right) \right) + \frac{Q}{4 \pi T} \left( -\gamma - \ln\left(\frac{r_2^2 S}{4 T t}\right) \right)$

$s_{total} = \frac{Q}{2 \pi T} \left( -\gamma - \ln\left(\frac{r_1 r_2 S}{4 T t}\right) \right)$

**Important Point to Remember:** For a point on the impermeable boundary (e.g., $x=0$), the distance from the real well is `d`, and the distance from the image well is also `d`. The drawdown at the boundary is then twice what it would be at a distance `d` from a single well. This is consistent with the condition of no flow across the boundary.

**Example Problem 1:**

A long, screened well is pumped at a constant rate of $Q = 0.05 \, \text{m}^3/\text{s}$ in a confined aquifer with transmissivity $T = 500 \, \text{m}^2/\text{day}$ and storativity $S = 0.001$. The well is located $20 \, \text{m}$ from a parallel impermeable boundary. Calculate the drawdown at the well itself after $10 \, \text{days}$ of pumping, using the Jacob approximation.

**Solution:**

*   $Q = 0.05 \, \text{m}^3/\text{s} = 0.05 \times 24 \times 3600 \, \text{m}^3/\text{day} = 4320 \, \text{m}^3/\text{day}$
*   $T = 500 \, \text{m}^2/\text{day}$
*   $S = 0.001$
*   $t = 10 \, \text{days}$
*   Well location: Assume at $x=d$, boundary at $x=0$. So well is at $20 \, \text{m}$.
*   Observation point is at the well itself: $r_1 = 0$. However, drawdown at the well face is calculated at a small distance, say $r_0$. The method of images is more for points *away* from the well.
*   Let's calculate drawdown at a point $5 \, \text{m}$ from the well, on the side away from the boundary.
    *   Distance from real well $r_1 = 5 \, \text{m}$.
    *   Distance from impermeable boundary = $20 \, \text{m}$.
    *   Image well is $20 \, \text{m}$ on the other side of the boundary.
    *   Distance of observation point from boundary = $20 + 5 = 25 \, \text{m}$.
    *   Distance from image well $r_2 = 20 \, \text{m} + 20 \, \text{m} + 5 \, \text{m} = 45 \, \text{m}$.

*   Calculate $u$:
    $u = \frac{r_1^2 S}{4 T t} = \frac{(5 \, \text{m})^2 \times 0.001}{4 \times 500 \, \text{m}^2/\text{day} \times 10 \, \text{days}} = \frac{25 \times 0.001}{20000} = 1.25 \times 10^{-6}$
    Since $u < 0.01$, Jacob approximation is valid.

*   Drawdown from real well:
    $s_1 = \frac{4320}{4 \pi \times 500} \left( -\gamma - \ln\left(1.25 \times 10^{-6}\right) \right)$
    $s_1 = \frac{4320}{6283.18} \left( -0.5772 - \ln\left(1.25 \times 10^{-6}\right) \right)$
    $s_1 = 0.6875 \left( -0.5772 - (-13.6906) \right)$
    $s_1 = 0.6875 \left( 13.1134 \right) \approx 9.01 \, \text{m}$

*   Drawdown from image well:
    $u' = \frac{r_2^2 S}{4 T t} = \frac{(45 \, \text{m})^2 \times 0.001}{4 \times 500 \, \text{m}^2/\text{day} \times 10 \, \text{days}} = \frac{2025 \times 0.001}{20000} = 1.0125 \times 10^{-4}$
    This is also less than $0.01$.

    $s_2 = \frac{4320}{4 \pi \times 500} \left( -\gamma - \ln\left(1.0125 \times 10^{-4}\right) \right)$
    $s_2 = 0.6875 \left( -0.5772 - \ln\left(1.0125 \times 10^{-4}\right) \right)$
    $s_2 = 0.6875 \left( -0.5772 - (-9.1959) \right)$
    $s_2 = 0.6875 \left( 8.6187 \right) \approx 5.92 \, \text{m}$

*   Total Drawdown:
    $s_{total} = s_1 + s_2 = 9.01 \, \text{m} + 5.92 \, \text{m} = 14.93 \, \text{m}$

#### 3.2. Case 2: Well Near a Single Constant-Head Boundary

**Problem Statement:** A well is pumping at a rate `Q` in a confined aquifer. The well is located at a distance `d` from a parallel constant-head boundary (e.g., a river). Calculate the drawdown at a distance `r` from the well.

**Solution Approach:**

1.  Introduce an image well `W'` at a distance `d` on the other side of the constant-head boundary, pumping at the **opposite** rate `-Q`.
2.  The total drawdown `s_total` at any point is the sum of the drawdown from the real well `s_real` and the drawdown from the image well `s_image`.

**Applying Method of Images:**

Let the real well `W` be at the origin (0,0). The constant-head boundary `B` is at $x = -d$. The image well `W'` is at $(-2d, 0)$ pumping at $-Q$.
Alternatively, if the boundary is at $x=0$ and the well is at $(d, 0)$, the image well `W'` is at $(-d, 0)$ pumping at $-Q$.

*   Distance from real well `W` to observation point `P(x, y)` is $r_1 = \sqrt{(x-d)^2 + y^2}$.
*   Distance from image well `W'` to observation point `P(x, y)` is $r_2 = \sqrt{(x+d)^2 + y^2}$.

**Total Drawdown at point P:**

$s_{total} = s_{real} + s_{image}$

If we use the Jacob approximation for steady-state flow:

$s_{real} = \frac{Q}{4 \pi T} \left( -\gamma - \ln\left(\frac{r_1^2 S}{4 T t}\right) \right)$
$s_{image} = \frac{-Q}{4 \pi T} \left( -\gamma - \ln\left(\frac{r_2^2 S}{4 T t}\right) \right)$

$s_{total} = \frac{Q}{4 \pi T} \left[ \left( -\gamma - \ln\left(\frac{r_1^2 S}{4 T t}\right) \right) - \left( -\gamma - \ln\left(\frac{r_2^2 S}{4 T t}\right) \right) \right]$
$s_{total} = \frac{Q}{4 \pi T} \left[ -\ln\left(\frac{r_1^2 S}{4 T t}\right) + \ln\left(\frac{r_2^2 S}{4 T t}\right) \right]$
$s_{total} = \frac{Q}{4 \pi T} \ln\left(\frac{r_2^2 S / (4 T t)}{r_1^2 S / (4 T t)}\right)$
$s_{total} = \frac{Q}{4 \pi T} \ln\left(\frac{r_2^2}{r_1^2}\right)$
$s_{total} = \frac{Q}{2 \pi T} \ln\left(\frac{r_2}{r_1}\right)$

**Important Point to Remember:** For a point on the constant-head boundary (e.g., $x=0$), the distance from the real well is `d`, and the distance from the image well is also `d`.
$r_1 = d$, $r_2 = d$.
$s_{total} = \frac{Q}{2 \pi T} \ln\left(\frac{d}{d}\right) = \frac{Q}{2 \pi T} \ln(1) = 0$.
This correctly indicates zero drawdown at the constant-head boundary.

**Example Problem 2:**

A well pumping at $Q = 0.02 \, \text{m}^3/\text{s}$ is located $30 \, \text{m}$ from a river (constant-head boundary). The aquifer has $T = 300 \, \text{m}^2/\text{day}$. Calculate the drawdown at a point $10 \, \text{m}$ away from the well, on the side of the well towards the river. Assume steady-state conditions.

**Solution:**

*   $Q = 0.02 \, \text{m}^3/\text{s} = 0.02 \times 24 \times 3600 \, \text{m}^3/\text{day} = 1728 \, \text{m}^3/\text{day}$
*   $T = 300 \, \text{m}^2/\text{day}$
*   Distance from well to river (boundary) = $30 \, \text{m}$.
*   Well location: Assume at $x=30 \, \text{m}$, boundary at $x=0 \, \text{m}$.
*   Observation point is $10 \, \text{m}$ from the well, towards the river. So, observation point is at $x = 30 - 10 = 20 \, \text{m}$.

*   Distance from real well `W` to observation point (at $x=20$): $r_1 = 30 \, \text{m} - 20 \, \text{m} = 10 \, \text{m}$.
*   Image well `W'` is at $x=-30 \, \text{m}$.
*   Distance from image well `W'` to observation point (at $x=20$): $r_2 = 20 \, \text{m} - (-30 \, \text{m}) = 50 \, \text{m}$.

*   Using the steady-state formula derived from Method of Images for a constant-head boundary:
    $s_{total} = \frac{Q}{2 \pi T} \ln\left(\frac{r_2}{r_1}\right)$
    $s_{total} = \frac{1728 \, \text{m}^3/\text{day}}{2 \pi \times 300 \, \text{m}^2/\text{day}} \ln\left(\frac{50 \, \text{m}}{10 \, \text{m}}\right)$
    $s_{total} = \frac{1728}{1884.96} \ln(5)$
    $s_{total} = 0.9167 \times 1.6094 \approx 1.475 \, \text{m}$

#### 3.3. Case 3: Well Between Two Parallel Impermeable Boundaries

**Problem Statement:** A well is located between two parallel impermeable boundaries.

**Solution Approach:**

1.  An image well `W'` is created across the first boundary.
2.  Then, an image well `W''` of `W'` is created across the second boundary.
3.  This process continues, creating an infinite series of image wells, alternating in direction.

**Illustration:**

Let the boundaries be at $x=0$ and $x=L$. Let the well `W` be at $x=d$.
*   Image of `W` across $x=0$ is $W'$ at $x=-d$.
*   Image of `W` across $x=L$ is $W''$ at $x=2L-d$.
*   Image of $W'$ across $x=L$ is $W'''$ at $x=2L-(-d) = 2L+d$.
*   Image of $W''$ across $x=0$ is $W''''$ at $x=-(2L-d) = d-2L$.
And so on...

The drawdown at any point is the sum of the drawdowns from the real well and all its image wells. This becomes a summation problem.

#### 3.4. Case 4: Well Near Two Perpendicular Impermeable Boundaries (Corner)

**Problem Statement:** A well is located in the corner formed by two perpendicular impermeable boundaries.

**Solution Approach:**

1.  Create an image well `W'` across the first boundary.
2.  Create an image well `W''` across the second boundary from the real well.
3.  Create an image well `W'''` as the image of `W'` across the second boundary (or `W''` across the first boundary). This results in four wells in total (the real one and three images), forming a symmetric pattern.

**Illustration:**

Let the boundaries be along the x-axis ($y=0$) and y-axis ($x=0$). Let the well `W` be at $(x_w, y_w)$.
*   Image `W'` across y-axis ($x=0$) is at $(-x_w, y_w)$.
*   Image `W''` across x-axis ($y=0$) is at $(x_w, -y_w)$.
*   Image `W'''` of `W'` across x-axis ($y=0$) is at $(-x_w, -y_w)$.

The drawdown at any point is the sum of the drawdowns from these four wells.

### 4. Learning Outcomes Addressed

This module covers the following learning outcomes:

*   **Understanding the impact of aquifer boundaries on well flow:** Explained by introducing impermeable and constant-head boundaries.
*   **Concept of image wells:** Defined and illustrated for different boundary types.
*   **Method of Images:** Explained as a technique to simplify flow problems with boundaries.
*   **Application of Method of Images:** Demonstrated with practical cases of single impermeable and constant-head boundaries.
*   **Solving problems using Method of Images:** Illustrated with examples and formulas.

### 5. Practice Questions and Answers

**Question 1:**
A pumping well in a confined aquifer is located $25 \, \text{m}$ from a parallel impermeable boundary. The well is pumping at $0.03 \, \text{m}^3/\text{s}$. The aquifer has $T = 400 \, \text{m}^2/\text{day}$. Calculate the drawdown at a distance of $10 \, \text{m}$ from the well, on the side away from the boundary, after $5 \, \text{days}$ of pumping. Use the Jacob approximation. $S = 0.0005$.

**Answer:**
*   $Q = 0.03 \, \text{m}^3/\text{s} = 0.03 \times 24 \times 3600 = 2592 \, \text{m}^3/\text{day}$
*   $T = 400 \, \text{m}^2/\text{day}$
*   $S = 0.0005$
*   $t = 5 \, \text{days}$
*   Distance from well to boundary = $25 \, \text{m}$.
*   Observation point distance from well = $10 \, \text{m}$ (away from boundary).
*   $r_1 = 10 \, \text{m}$.
*   Distance of observation point from boundary = $25 \, \text{m} + 10 \, \text{m} = 35 \, \text{m}$.
*   Image well is $25 \, \text{m}$ on the other side of the boundary.
*   $r_2 = 25 \, \text{m} + 25 \, \text{m} + 10 \, \text{m} = 60 \, \text{m}$.

*   Calculate $u$ for the real well:
    $u = \frac{r_1^2 S}{4 T t} = \frac{(10 \, \text{m})^2 \times 0.0005}{4 \times 400 \, \text{m}^2/\text{day} \times 5 \, \text{days}} = \frac{100 \times 0.0005}{8000} = \frac{0.05}{8000} = 6.25 \times 10^{-6}$
    (Jacob approximation is valid as $u < 0.01$).

*   Drawdown from real well:
    $s_1 = \frac{2592}{4 \pi \times 400} \left( -\gamma - \ln(6.25 \times 10^{-6}) \right)$
    $s_1 = \frac{2592}{5026.55} \left( -0.5772 - \ln(6.25 \times 10^{-6}) \right)$
    $s_1 = 0.5156 \left( -0.5772 - (-12.0858) \right)$
    $s_1 = 0.5156 \left( 11.5086 \right) \approx 5.93 \, \text{m}$

*   Calculate $u$ for the image well:
    $u' = \frac{r_2^2 S}{4 T t} = \frac{(60 \, \text{m})^2 \times 0.0005}{4 \times 400 \, \text{m}^2/\text{day} \times 5 \, \text{days}} = \frac{3600 \times 0.0005}{8000} = \frac{1.8}{8000} = 2.25 \times 10^{-4}$
    (Jacob approximation is valid as $u < 0.01$).

*   Drawdown from image well:
    $s_2 = \frac{2592}{4 \pi \times 400} \left( -\gamma - \ln(2.25 \times 10^{-4}) \right)$
    $s_2 = 0.5156 \left( -0.5772 - \ln(2.25 \times 10^{-4}) \right)$
    $s_2 = 0.5156 \left( -0.5772 - (-8.3986) \right)$
    $s_2 = 0.5156 \left( 7.8214 \right) \approx 4.03 \, \text{m}$

*   Total Drawdown: $s_{total} = s_1 + s_2 = 5.93 \, \text{m} + 4.03 \, \text{m} = 9.96 \, \text{m}$.

**Question 2:**
A well is pumping at $0.01 \, \text{m}^3/\text{s}$ in a confined aquifer with $T = 200 \, \text{m}^2/\text{day}$. The well is $50 \, \text{m}$ from a straight river. What is the drawdown at a point $20 \, \text{m}$ from the well, on the side of the well away from the river? Assume steady-state conditions.

**Answer:**
*   $Q = 0.01 \, \text{m}^3/\text{s} = 0.01 \times 24 \times 3600 = 864 \, \text{m}^3/\text{day}$
*   $T = 200 \, \text{m}^2/\text{day}$
*   Distance from well to river (boundary) = $50 \, \text{m}$.
*   Observation point is $20 \, \text{m}$ from the well, away from the river.
*   Well location: Assume at $x=50 \, \text{m}$, boundary at $x=0 \, \text{m}$.
*   Observation point is at $x = 50 + 20 = 70 \, \text{m}$.
*   Distance from real well `W` to observation point (at $x=70$): $r_1 = 70 \, \text{m} - 50 \, \text{m} = 20 \, \text{m}$.
*   Image well `W'` is at $x=-50 \, \text{m}$.
*   Distance from image well `W'` to observation point (at $x=70$): $r_2 = 70 \, \text{m} - (-50 \, \text{m}) = 120 \, \text{m}$.

*   Using the steady-state formula for a constant-head boundary:
    $s_{total} = \frac{Q}{2 \pi T} \ln\left(\frac{r_2}{r_1}\right)$
    $s_{total} = \frac{864 \, \text{m}^3/\text{day}}{2 \pi \times 200 \, \text{m}^2/\text{day}} \ln\left(\frac{120 \, \text{m}}{20 \, \text{m}}\right)$
    $s_{total} = \frac{864}{1256.64} \ln(6)$
    $s_{total} = 0.6875 \times 1.7918 \approx 1.23 \, \text{m}$.

### 6. Important Points to Remember

*   **Boundary Type is Crucial:** The nature of the boundary (impermeable vs. constant-head) dictates the type of image well (same pumping vs. opposite pumping).
*   **Image Well Location:** Image wells are always located on the opposite side of the boundary, at the same perpendicular distance.
*   **Superposition:** The total drawdown is the algebraic sum of the drawdowns from the real well and all its image wells.
*   **Steady-State vs. Transient:** The method of images can be applied to both steady-state and transient flow. For transient flow, the distances used in the Well function ($W(u)$) are from the observation point to the real and image wells.
*   **Jacob Approximation:** Valid for $u < 0.01$, simplifying calculations by approximating $W(u) \approx -\gamma - \ln(u)$.
*   **Multiple Boundaries:** For multiple boundaries, a series of image wells is required, which can lead to infinite series solutions.
*   **Practical Limitations:** The method of images assumes infinite, homogeneous, and isotropic aquifers with sharp, planar boundaries. In reality, boundaries are often irregular, and aquifer properties may vary.

This concludes Module 3, Topic: Well flow near aquifer boundaries.
