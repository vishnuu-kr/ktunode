---
title: "Evaluation of aquifer parameters by Theis, Jacob’s and Chow’s method. (Problems from evaluation of aquifer parameters)"
subject: "GROUND WATER ENGINEERING"
module: "Module 1: Vertical distribution of groundwater"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba811532"
status: "completed"
scrapedAt: "2026-05-20T19:00:04.037Z"
---
# Groundwater Engineering: Module 1 - Vertical Distribution of Groundwater

## Topic: Evaluation of Aquifer Parameters by Theis, Jacob's, and Chow's Methods

This module focuses on understanding how to determine crucial aquifer parameters from pumping test data. We will explore three fundamental methods: Theis, Jacob's, and Chow's methods. These methods are essential for predicting aquifer response to pumping and managing groundwater resources effectively.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the theoretical basis of the Theis, Jacob's, and Chow's methods for aquifer parameter evaluation.
*   Identify the assumptions underlying each of these methods.
*   Apply the Theis method to determine aquifer transmissivity (T) and storativity (S) from pumping test data.
*   Apply the Jacob's (Theis-Theis) method for specific conditions and compare its results with the Theis method.
*   Apply the Chow's method for specific conditions and compare its results with Theis and Jacob's methods.
*   Solve practical problems involving the determination of aquifer parameters using these methods.

---

### 1. Introduction to Aquifer Parameter Evaluation

*   **What are Aquifer Parameters?**
    *   **Transmissivity (T):** The rate at which water can be transmitted through a unit width of aquifer under a unit hydraulic gradient. It is a product of hydraulic conductivity (K) and aquifer thickness (b) ($T = K \times b$). Units: $m^2/day$ or $ft^2/day$.
    *   **Storativity (S):** The volume of water released from or taken into storage per unit surface area of aquifer per unit change in head. It is a dimensionless quantity, usually expressed as a decimal.
    *   **Hydraulic Conductivity (K):** The rate of flow of water at a given temperature through a unit cross-sectional area of porous medium under a unit hydraulic gradient. Units: $m/day$ or $ft/day$.
    *   **Aquifer Thickness (b):** The saturated thickness of the aquifer. Units: m or ft.

*   **Why are these parameters important?**
    *   Predicting drawdown (the decline in water level) in wells during pumping.
    *   Estimating the sustainable yield of an aquifer.
    *   Designing well fields and groundwater development schemes.
    *   Assessing the impact of groundwater abstraction on water resources.
    *   Groundwater flow modeling.

*   **Pumping Tests:** The most common method for determining aquifer parameters. Involves pumping a well at a constant rate and observing the response (drawdown or recovery) in observation wells at various distances.

---

### 2. Theis Method

*   **Theoretical Basis:**
    *   Developed by Charles V. Theis in 1935.
    *   Based on the analogy between the flow of water into a well in a confined aquifer and the flow of heat from a line source.
    *   Assumes the aquifer is:
        *   Homogeneous and isotropic.
        *   Unconfined or confined (though more strictly derived for confined).
        *   Infinite in areal extent.
        *   Uniform thickness.
        *   Water is released instantaneously from storage.
        *   The pumping well fully penetrates the aquifer.
        *   The pumping rate is constant.
    *   The fundamental equation for drawdown (s) in a confined aquifer is:

        $s = \frac{Q}{4\pi T} W(u)$

        where:
        *   $s$: drawdown (m or ft)
        *   $Q$: pumping rate ($m^3/day$ or $ft^3/day$)
        *   $T$: transmissivity ($m^2/day$ or $ft^2/day$)
        *   $W(u)$: Theis's well function (a complementary exponential integral)
        *   $u$: dimensionless parameter = $\frac{r^2 S}{4 T t}$
            *   $r$: distance from pumping well to observation well (m or ft)
            *   $S$: storativity (dimensionless)
            *   $t$: time since pumping started (days)

*   **The Well Function W(u):**
    *   Defined as $W(u) = -\text{Ei}(-u) = \int_{u}^{\infty} \frac{e^{-x}}{x} dx$, where Ei is the exponential integral.
    *   For small values of $u$ (i.e., large $r$, small $t$), $W(u) \approx -\ln(u) - 0.5772$ (Euler's constant). This leads to the Jacob's method.
    *   Values of $W(u)$ are typically obtained from tables or computed using software.

*   **Graphical Method for Parameter Evaluation:**
    1.  **Data Plotting:** Plot the observed drawdown ($s$) against time ($t$) on semi-logarithmic paper (time on log scale, drawdown on linear scale).
    2.  **Theoretical Curve:** Plot the $W(u)$ function against $u$ on log-log paper (both $W(u)$ and $u$ on log scales). This theoretical curve is unique.
    3.  **Matching:** Superimpose the field data curve onto the theoretical $W(u)$ curve, aligning the axes. Find a match by sliding the field data curve horizontally and vertically.
    4.  **Matching Point:** Select a corresponding pair of values $(t, s)$ from the field data and $(u, W(u))$ from the theoretical curve where the curves best match.
    5.  **Calculation:**
        *   From the match, calculate $T$:
            $T = \frac{Q}{4\pi s}$
        *   From the match, calculate $S$:
            $S = \frac{4 T u t}{r^2}$ (Rearranging the definition of $u$)

*   **Important Points for Theis Method:**
    *   The graphical matching process is subjective and requires careful alignment.
    *   It is valid for both confined and leaky aquifers (with modifications for leaky).
    *   The most accurate method, especially for early-time data where the aquifer is not yet fully reflected by the well function approximation.

---

### 3. Jacob's (Theis-Theis) Method

*   **Theoretical Basis:**
    *   Developed by W. F. Jacob (1940, 1950).
    *   An approximation of the Theis method, valid when $u < 0.05$. This condition is usually met for large distances and/or long pumping times.
    *   Uses the approximation for the well function: $W(u) \approx -\ln(u) - 0.5772$
    *   Substituting this into the Theis equation:

        $s = \frac{Q}{4\pi T} [-\ln(u) - 0.5772]$

    *   Substitute $u = \frac{r^2 S}{4 T t}$:

        $s = \frac{Q}{4\pi T} [-\ln(\frac{r^2 S}{4 T t}) - 0.5772]$

        $s = \frac{Q}{4\pi T} [-\ln(r^2) + \ln(4 T t) - \ln(S) + 0.5772]$

        $s = \frac{Q}{4\pi T} [\ln(\frac{4 T t}{r^2 S}) - 0.5772]$

    *   Rearranging the terms and grouping constants (which form the concept of "early time" line):

        $s = \frac{Q}{4\pi T} \ln(\frac{2.25 T t}{r^2 S})$ (This form is also commonly used)

    *   A more practical form for graphical analysis is:

        $s = \frac{2.303 Q}{4\pi T} \log(\frac{2.25 T t}{r^2 S})$

        $s = \frac{Q}{4\pi T} (\ln(\frac{T t}{r^2}) + \ln(\frac{4}{S}) - 0.5772)$

        $s = \frac{Q}{4\pi T} \ln(\frac{T t}{r^2}) + \frac{Q}{4\pi T} (\ln(\frac{4}{S}) - 0.5772)$

        The first term $\frac{Q}{4\pi T} \ln(\frac{T t}{r^2})$ is linear with $\log(t)$.

        $s = \frac{2.303 Q}{4\pi T} \log(t) + \frac{2.303 Q}{4\pi T} \log(\frac{T}{r^2 S}) - \frac{2.303 Q}{4\pi T} \times 0.5772$

        $s = \frac{2.303 Q}{4\pi T} \log(t) + C$

        where $C$ is a constant.

*   **Graphical Method for Parameter Evaluation:**
    1.  **Data Plotting:** Plot the observed drawdown ($s$) against time ($t$) on **semi-logarithmic paper** (time on log scale, drawdown on linear scale).
    2.  **Straight Line:** For data points where $u < 0.05$, the plot should yield a straight line.
    3.  **Slope Determination:** Calculate the slope ($m$) of the straight line: $m = \frac{\Delta s}{\Delta \log(t)}$.
    4.  **Calculation:**
        *   Calculate $T$ from the slope:
            $T = \frac{2.303 Q}{4\pi m}$
        *   To find $S$, extrapolate the straight line to $t=1$ (or any convenient time $t_0$). The extrapolated drawdown is $s_0$.
            $s_0 = \frac{2.303 Q}{4\pi T} \log(\frac{T}{r^2 S}) - \frac{2.303 Q}{4\pi T} \times 0.5772$
            Alternatively, use the equation: $s = \frac{2.303 Q}{4\pi T} \log(\frac{2.25 T t}{r^2 S})$
            At $t = t_0$ and corresponding extrapolated $s_0$:
            $s_0 = \frac{2.303 Q}{4\pi T} \log(\frac{2.25 T t_0}{r^2 S})$
            $s_0 = \frac{2.303 Q}{4\pi T} \log(\frac{2.25 T}{r^2 S}) + \frac{2.303 Q}{4\pi T} \log(t_0)$
            If we extrapolate to $t_0 = \frac{r^2 S}{2.25 T}$, then $s_0 = 0$.
            A more practical approach: Select a point on the extrapolated line $(t_0, s_0)$ and use the equation:
            $s_0 = \frac{2.303 Q}{4\pi T} \log(\frac{2.25 T t_0}{r^2 S})$
            Rearranging to solve for $S$:
            $\frac{4\pi T s_0}{2.303 Q} = \log(\frac{2.25 T t_0}{r^2 S})$
            $10^{\frac{4\pi T s_0}{2.303 Q}} = \frac{2.25 T t_0}{r^2 S}$
            $S = \frac{2.25 T t_0}{r^2} 10^{\left(-\frac{4\pi T s_0}{2.303 Q}\right)}$

*   **Important Points for Jacob's Method:**
    *   Simpler graphically than Theis method as it only requires plotting on semi-log paper and finding a slope.
    *   **Caution:** Ensure the $u < 0.05$ condition is met for the data points used for the straight line. This typically means using later time data.
    *   Less accurate for early time data.
    *   Often used for unconfined aquifers where the assumptions of constant T and S are relaxed, and drawdown follows a similar mathematical form for a period.

---

### 4. Chow's Method

*   **Theoretical Basis:**
    *   Developed by V. T. Chow (1952).
    *   A graphical method that uses a modification of the Theis equation to provide a straight line on log-log paper, simplifying the matching process.
    *   The Theis equation: $s = \frac{Q}{4\pi T} W(u)$
    *   Chow recognized that the term $\frac{Q}{4\pi T} W(u)$ can be plotted as a straight line on log-log paper if we plot $s$ against $\frac{t}{r^2}$.
    *   He introduced a correction factor. The equation is transformed into:

        $s = C \frac{t}{r^2}$

        where $C$ is a constant related to aquifer parameters and $W(u)$ is implicitly handled.
    *   A more practical form derived by Chow for graphical analysis involves plotting $s$ against $t/r^2$ on log-log paper. The method involves adjusting the theoretical curve.
    *   Chow's method essentially plots $s$ vs $t/r^2$ and compares it to a series of theoretical curves that are shifted versions of $W(u)$ vs $u$.
    *   The fundamental equation is re-expressed to facilitate a direct linear relationship.
    *   $s = \frac{Q}{4\pi T} W(u)$
    *   Consider $u = \frac{r^2 S}{4 T t}$. This means $\frac{t}{r^2} = \frac{S}{4 T u}$.
    *   Chow's method aims to plot $s$ against $t/r^2$.

    Let's re-examine Theis equation:
    $s = \frac{Q}{4\pi T} W(u)$
    Substitute $u = \frac{r^2S}{4Tt}$
    $s = \frac{Q}{4\pi T} W\left(\frac{r^2S}{4Tt}\right)$

    Chow's contribution was to observe that if we plot $s$ against $\frac{t}{r^2}$ (on log-log paper), the curves will be a family of curves depending on $S/T$. The key is to find a way to extract $T$ and $S$ directly.

    A simpler interpretation of Chow's method is that it provides a way to obtain a straight line on log-log paper for specific conditions, facilitating easier graphical analysis. The practical application involves a specific plotting approach:

    1.  **Data Plotting:** Plot the observed drawdown ($s$) against the ratio $\frac{t}{r^2}$ on log-log paper.
    2.  **Theoretical Curve:** A theoretical curve is generated by plotting $W(u)$ against $u$ (as in Theis), but then transformed by substituting $t/r^2 = \frac{S}{4Tu}$. This means we plot $W(u)$ against $\frac{S}{4Tu}$. This requires knowing $S/T$ or iterating.

    **A more practical and commonly cited "Chow's method" involves a slightly different approach:**
    *   Rearrange Theis equation: $s = \frac{Q}{4\pi T} W(u)$
    *   Substitute $u = \frac{r^2 S}{4 T t}$
    *   Consider the relationship between $s$, $t$, and $r^2$.
    *   Chow plotted $s$ versus $t/r^2$ on log-log paper. He showed that for a given aquifer, all observation wells would fall on a family of curves that are essentially shifted versions of the $W(u)$ vs $u$ curve.
    *   **To get a straight line:** Chow introduced a way to shift the data.
    *   He plotted $s$ vs $t/r^2$ on log-log paper.
    *   The theoretical curve is $W(u)$ vs $u$.
    *   The relationship between the plotting axes and the theoretical curve is:
        *   Plotting axis $y = s$
        *   Plotting axis $x = t/r^2$
        *   Theoretical curve $y' = W(u)$
        *   Theoretical curve $x' = u$

    *   The matching condition implies:
        *   $s = k W(u)$
        *   $t/r^2 = k' u$

    *   Chow's method aims to plot $s \cdot r^2$ vs $t$ on log-log paper. This form is closer to yielding a straight line for analysis.
    *   Consider the Jacob approximation: $s = \frac{Q}{4\pi T} (-\ln(\frac{r^2 S}{4Tt}) - 0.5772)$
    *   $s = \frac{Q}{4\pi T} \ln(\frac{4Tt}{r^2 S}) - \frac{Q}{4\pi T} 0.5772$
    *   $s = \frac{2.303Q}{4\pi T} \log(\frac{2.25 T t}{r^2 S})$
    *   Chow's method essentially plots $s$ vs $t/r^2$ on log-log paper. The method uses a set of theoretical curves generated from $W(u)$ vs $u$.

    **A more direct application of Chow's method for analysis:**
    1.  **Data Preparation:** For each observation well, calculate the ratio $t/r^2$.
    2.  **Data Plotting:** Plot $s$ vs $t/r^2$ on log-log paper.
    3.  **Theoretical Curve:** Plot $W(u)$ vs $u$ on log-log paper (same as Theis).
    4.  **Matching:** Superimpose the field data curve onto the theoretical curve. This is NOT a direct match of the shapes. Instead, we use a shifting factor.
    5.  **Chow's Analytical Approach:**
        *   Chow proposed plotting $s$ vs $t$ on log-log paper for each observation well.
        *   He then plotted the $W(u)$ vs $u$ curve.
        *   The key is to match by sliding the field data curve such that a straight line is produced. This requires adjusting both $t$ and $s$.
        *   **A more straightforward graphical interpretation is often presented where:**
            *   Plot $s$ vs $t/r^2$ on log-log paper.
            *   Plot $W(u)$ vs $u$ on log-log paper.
            *   Match the field data curve ($s$ vs $t/r^2$) to the theoretical curve ($W(u)$ vs $u$) such that a specific relationship holds.
            *   Chow's method allows for a straight-line match on log-log paper by plotting $s$ vs $t/r^2$ and a suitable theoretical curve.

    **A simpler, widely used graphical application associated with Chow's name:**
    1.  **Data Plotting:** Plot $s$ vs $t/r^2$ on log-log paper.
    2.  **Theoretical Curve:** Plot $W(u)$ vs $u$ on log-log paper.
    3.  **Matching:** Slide the field data curve horizontally and vertically to match the theoretical curve.
    4.  **Matching Point:** Select a match point $(s, t/r^2)$ from the field data and $(W(u), u)$ from the theoretical curve.
    5.  **Calculation:**
        *   From the matching point:
            $s = k W(u)$
            $t/r^2 = k' u$
        *   From $W(u) = \frac{4\pi T s}{Q}$, we get $T = \frac{Q}{4\pi} \frac{W(u)}{s}$.
        *   From $u = \frac{r^2 S}{4 T t}$, we get $S = \frac{4 T t}{r^2} u$.
        *   Using the matching condition $t/r^2 = k' u$, we get $u = \frac{t}{k' r^2}$.
        *   So, $W(u) = W(\frac{t}{k' r^2})$.
        *   The matching on log-log paper means $s = C \cdot W(u)$ and $t/r^2 = C' \cdot u$.
        *   Chow's core idea is to plot $s \cdot \frac{t}{r^2}$ against $t$. This is more complex.

    **A more practical understanding of Chow's contribution for *evaluation* of parameters:**
    *   Chow refined graphical methods for Theis's equation by presenting it in a form that emphasizes a linear relationship on log-log plots when data is properly processed.
    *   The most common "Chow's method" interpretation is the **semi-logarithmic method for unconfined aquifers (often referred to as Chow's method, though it's similar to Jacob's for unconfined conditions).**

    **Chow's Method for Unconfined Aquifers (The Semi-logarithmic Method)**
    *   **Assumptions:** Similar to Jacob's, but acknowledges that storativity in unconfined aquifers is not constant (it increases with drawdown). However, for limited drawdown, it can be approximated as constant.
    *   **Equation:** The Theis equation can be adapted for unconfined aquifers, but for early times and moderate drawdowns, it approximates the Jacob equation.
        $s = \frac{Q}{4\pi T} \ln(\frac{4Tt}{r^2 S})$ for confined aquifers.
        For unconfined aquifers, the drawdown is often modeled using a modified Theis equation. However, for practical purposes, the Jacob's method is often applied.
    *   **Chow's Graphical Approach (similar to Jacob's but often presented with a slight modification):**
        1.  Plot $s$ against $t$ on semi-log paper (t on log axis).
        2.  Identify a straight-line portion.
        3.  Calculate $T$ from the slope: $T = \frac{2.303 Q}{4\pi m}$.
        4.  To find $S$, use a point $(t_0, s_0)$ on the extended straight line.
            $s_0 = \frac{2.303 Q}{4\pi T} \log(\frac{2.25 T t_0}{r^2 S})$
            $S = \frac{2.25 T t_0}{r^2} 10^{\left(-\frac{4\pi T s_0}{2.303 Q}\right)}$
            This is identical to Jacob's method.

    **It is possible that the question refers to Chow's method for *evaluating T and S from multiple observation wells simultaneously* or a specific graphical transformation. However, the most common methods are Theis and Jacob's.**

    Let's focus on the most common interpretations of these methods for a typical Groundwater Engineering curriculum.

---

### 5. Example Problems and Solutions

**Problem 1 (Theis Method):**

A constant discharge of 1000 $m^3/day$ is maintained from a fully penetrating well in a confined aquifer. Pumping test data from an observation well located 50 m from the pumping well are as follows:

| Time (min) | Drawdown (m) |
| :--------- | :----------- |
| 5          | 0.50         |
| 10         | 0.75         |
| 20         | 1.00         |
| 40         | 1.25         |
| 80         | 1.50         |
| 160        | 1.75         |
| 320        | 2.00         |

Determine the transmissivity (T) and storativity (S) of the aquifer using the Theis method.

**Solution:**

1.  **Convert Units:**
    *   $Q = 1000 \, m^3/day$
    *   $r = 50 \, m$
    *   Time should be in days.
        *   5 min = $5/1440 \approx 0.00347$ days
        *   10 min = $10/1440 \approx 0.00694$ days
        *   20 min = $20/1440 \approx 0.0139$ days
        *   40 min = $40/1440 \approx 0.0278$ days
        *   80 min = $80/1440 \approx 0.0556$ days
        *   160 min = $160/1440 \approx 0.111$ days
        *   320 min = $320/1440 \approx 0.222$ days

2.  **Theis Method - Graphical Matching (Simulated):**
    *   Plot observed $s$ vs $t$ on semi-log paper.
    *   Plot theoretical $W(u)$ vs $u$ on log-log paper.
    *   Overlay and match.

    Let's assume a matching point is found, for example:
    *   Field data point: $t = 10 \, min \approx 0.00694 \, days$, $s = 0.75 \, m$.
    *   Matching theoretical point: $u = 0.01$, $W(u) = 2.93$ (from Theis tables).

3.  **Calculations:**
    *   **Transmissivity (T):**
        $s = \frac{Q}{4\pi T} W(u)$
        $0.75 = \frac{1000}{4\pi T} (2.93)$
        $T = \frac{1000 \times 2.93}{4\pi \times 0.75} = \frac{2930}{9.4247} \approx 310.9 \, m^2/day$

    *   **Storativity (S):**
        $u = \frac{r^2 S}{4 T t}$
        $0.01 = \frac{(50)^2 S}{4 \times 310.9 \times 0.00694}$
        $0.01 = \frac{2500 S}{8578.156}$
        $S = \frac{0.01 \times 8578.156}{2500} \approx \frac{85.78}{2500} \approx 0.0343$

    **Answer:** $T \approx 310.9 \, m^2/day$, $S \approx 0.0343$

---

**Problem 2 (Jacob's Method):**

Using the data from Problem 1, determine the transmissivity (T) and storativity (S) using Jacob's method.

**Solution:**

1.  **Data Preparation:** Plot $s$ vs $t$ on semi-log paper (t on log axis).
    | Time (days) | Drawdown (m) | log(t) |
    | :---------- | :----------- | :----- |
    | 0.00347     | 0.50         | -2.46  |
    | 0.00694     | 0.75         | -2.16  |
    | 0.0139      | 1.00         | -1.86  |
    | 0.0278      | 1.25         | -1.56  |
    | 0.0556      | 1.50         | -1.26  |
    | 0.111       | 1.75         | -0.95  |
    | 0.222       | 2.00         | -0.65  |

2.  **Graphical Analysis:** Plotting these points reveals a good straight line for the later time data points (e.g., from 20 min onwards).

3.  **Calculate Slope (m):**
    Pick two points on the straight-line portion.
    *   Point 1: $t_1 = 0.0556 \, days$, $s_1 = 1.50 \, m$
    *   Point 2: $t_2 = 0.222 \, days$, $s_2 = 2.00 \, m$
    *   $\log(t_1) = -1.26$, $\log(t_2) = -0.65$
    *   $m = \frac{s_2 - s_1}{\log(t_2) - \log(t_1)} = \frac{2.00 - 1.50}{-0.65 - (-1.26)} = \frac{0.50}{0.61} \approx 0.820 \, m/log-cycle$

4.  **Calculate Transmissivity (T):**
    $T = \frac{2.303 Q}{4\pi m} = \frac{2.303 \times 1000}{4\pi \times 0.820} = \frac{2303}{10.306} \approx 223.5 \, m^2/day$

5.  **Calculate Storativity (S):**
    Extrapolate the line to $t_0 = 1 \, day$.
    The equation of the line (using point 2): $s - s_2 = m (\log(t) - \log(t_2))$
    $s - 2.00 = 0.820 (\log(t) - (-0.65))$
    At $t_0 = 1 \, day$, $\log(t_0) = 0$.
    $s_0 - 2.00 = 0.820 (0 - (-0.65)) = 0.820 \times 0.65 = 0.533$
    $s_0 = 2.00 + 0.533 = 2.533 \, m$

    Now use the formula:
    $S = \frac{2.25 T t_0}{r^2} 10^{\left(-\frac{4\pi T s_0}{2.303 Q}\right)}$
    $S = \frac{2.25 \times 223.5 \times 1}{(50)^2} 10^{\left(-\frac{4\pi \times 223.5 \times 2.533}{2.303 \times 1000}\right)}$
    $S = \frac{502.875}{2500} 10^{\left(-\frac{14171.3}{2303}\right)}$
    $S = 0.20115 \times 10^{(-6.153)}$
    $S = 0.20115 \times 7.025 \times 10^{-7} \approx 1.41 \times 10^{-7}$

    *Self-correction:* The formula for S derived from Jacob's method is usually written as:
    $s_0 = \frac{2.303 Q}{4\pi T} \log(\frac{2.25 T t_0}{r^2 S})$
    Let's use the $s_0 = 2.533$ and $t_0 = 1$ day.
    $2.533 = \frac{2.303 \times 1000}{4\pi \times 223.5} \log(\frac{2.25 \times 223.5 \times 1}{50^2 \times S})$
    $2.533 = \frac{2303}{2808.4} \log(\frac{502.875}{2500 S})$
    $2.533 = 0.820 \log(\frac{201.15}{S})$
    $\frac{2.533}{0.820} = \log(\frac{201.15}{S})$
    $3.089 = \log(\frac{201.15}{S})$
    $10^{3.089} = \frac{201.15}{S}$
    $1227.5 = \frac{201.15}{S}$
    $S = \frac{201.15}{1227.5} \approx 0.164$

    **Answer:** $T \approx 223.5 \, m^2/day$, $S \approx 0.164$

    **Comparison with Theis:** The Jacob's method gave $T=223.5$ and $S=0.164$. The Theis method gave $T=310.9$ and $S=0.0343$. The differences highlight the approximations. Jacob's method usually underestimates T and overestimates S compared to Theis, especially if the straight line is not well-established. The Jacob's method is valid for $u < 0.05$. Let's check the $u$ value for the matching point in Theis ($t=0.00694$ days): $u = \frac{50^2 \times 0.0343}{4 \times 310.9 \times 0.00694} \approx 0.23$. This value of $u$ is much greater than 0.05, indicating that Jacob's approximation may not be valid for this early-time data. The problem statement implied the possibility of a straight line, so we proceeded. It's crucial to verify the $u$ condition.

---

**Problem 3 (Conceptual - Chow's Method Application):**

Describe how you would apply Chow's graphical method to determine aquifer parameters using the same data as Problem 1, assuming it is appropriate.

**Solution Approach:**

1.  **Data Preparation:** For each observation well (or in this case, the single observation well data provided), calculate the ratio $t/r^2$ for each time point.
    *   $r = 50 \, m$, $r^2 = 2500 \, m^2$.
    | Time (days) | $t/r^2$ ($day/m^2$) | Drawdown (m) |
    | :---------- | :---------------- | :----------- |
    | 0.00347     | $1.388 \times 10^{-6}$ | 0.50         |
    | 0.00694     | $2.776 \times 10^{-6}$ | 0.75         |
    | 0.0139      | $5.56 \times 10^{-6}$  | 1.00         |
    | 0.0278      | $1.112 \times 10^{-5}$ | 1.25         |
    | 0.0556      | $2.224 \times 10^{-5}$ | 1.50         |
    | 0.111       | $4.44 \times 10^{-5}$  | 1.75         |
    | 0.222       | $8.88 \times 10^{-5}$  | 2.00         |

2.  **Data Plotting:** Plot the calculated $s$ values against the corresponding $t/r^2$ values on log-log paper. This will be the field data curve.

3.  **Theoretical Curve:** Plot the standard Theis well function curve, $W(u)$ vs $u$, on the same log-log paper.

4.  **Matching:** Superimpose the field data curve $(s$ vs $t/r^2$) onto the theoretical curve $(W(u)$ vs $u)$. The matching is done by sliding the field data curve horizontally and vertically until a segment of the field data curve aligns with a segment of the theoretical curve. This process is similar to Theis method's matching, but the horizontal axis is $t/r^2$ instead of $t$.

5.  **Matching Point Selection:** Choose a specific point where the curves match well. Let's say we match the field data point ($t/r^2 = 5.56 \times 10^{-6}$, $s = 1.00$) with a point on the theoretical curve ($u=0.01$, $W(u)=2.93$).

6.  **Calculations:**
    *   **Transmissivity (T):**
        From the matching, we have the relationship $s = \text{constant} \times W(u)$. The constant is related to $Q/(4\pi T)$.
        From the match: $s = 1.00 \, m$, $W(u) = 2.93$.
        The actual relationship is $s = \frac{Q}{4\pi T} W(u)$.
        So, $1.00 = \frac{1000}{4\pi T} \times 2.93$.
        $T = \frac{1000 \times 2.93}{4\pi \times 1.00} = \frac{2930}{12.566} \approx 233.1 \, m^2/day$.

    *   **Storativity (S):**
        From the matching, we have the relationship $t/r^2 = \text{constant} \times u$. The constant is related to $S/(4T)$.
        From the match: $t/r^2 = 5.56 \times 10^{-6} \, day/m^2$, $u = 0.01$.
        The actual relationship is $t/r^2 = \frac{S}{4T} u$.
        $5.56 \times 10^{-6} = \frac{S}{4 \times 233.1} \times 0.01$
        $5.56 \times 10^{-6} = \frac{S}{932.4} \times 0.01$
        $S = \frac{5.56 \times 10^{-6} \times 932.4}{0.01} = 5.56 \times 10^{-4} \times 932.4 \approx 0.518$

    **Answer (Chow's Method):** $T \approx 233.1 \, m^2/day$, $S \approx 0.518$.

    **Note on Chow's Method Results:** The results for S from Chow's method can be sensitive to the matching point and the assumed theoretical curve. The graphical procedure is similar to Theis, but the plotting variable $t/r^2$ is used instead of $t$.

---

### 6. Important Points to Remember

*   **Theis Method:**
    *   Most fundamental and accurate.
    *   Requires graphical matching on log-log paper.
    *   Assumes confined, homogeneous, isotropic, infinite aquifer.
    *   $W(u)$ function is key.
*   **Jacob's Method:**
    *   Approximation of Theis, valid for $u < 0.05$.
    *   Uses $W(u) \approx -\ln(u) - 0.5772$.
    *   Graphical analysis on **semi-log paper** (straight line).
    *   Simpler graphically but less accurate for early times.
    *   Often applied to unconfined aquifers.
*   **Chow's Method:**
    *   Refinement of graphical analysis, often involves plotting $s$ vs $t/r^2$ on log-log paper.
    *   Aims to simplify matching by using a transformed variable.
    *   The interpretation can vary, but the core idea is improved graphical analysis.
*   **Units:** Consistency in units (especially time and distance) is paramount.
*   **Assumptions:** Always be aware of the assumptions underlying each method and their limitations. Pumping test data rarely perfectly matches these assumptions.
*   **Data Quality:** The accuracy of parameter estimation depends heavily on the quality and duration of pumping test data.

---

### 7. Practice Questions

1.  A pumping test is conducted on a well in a confined aquifer. The pumping rate is 50 $m^3/hr$. An observation well at a distance of 30 m shows a drawdown of 1.2 m after 2 hours of pumping. Using the Theis method, if a matching point on the $W(u)$ vs $u$ curve is $(u=0.01, W(u)=2.93)$, calculate the transmissivity and storativity of the aquifer.
    *   **Answer:** Convert pumping rate to $m^3/day$: $50 m^3/hr \times 24 hr/day = 1200 m^3/day$. Time in days: $2 hr \times 1 day/24 hr = 1/12 \approx 0.0833$ days.
        $T = \frac{Q}{4\pi s} W(u) = \frac{1200}{4\pi \times 1.2} \times 2.93 \approx \frac{1200}{15.08} \times 2.93 \approx 79.55 \times 2.93 \approx 233.1 \, m^2/day$.
        $S = \frac{4 T u t}{r^2} = \frac{4 \times 233.1 \times 0.01 \times 0.0833}{30^2} = \frac{7.766}{900} \approx 0.00863$.

2.  For the same pumping test data as Question 1, assume that the Jacob's method is applicable. If plotting the drawdown vs. log(time) yields a straight line with a slope of 0.6 $m$ per log cycle, calculate the transmissivity and storativity. Assume the straight line extrapolated to $t=1$ day gives a drawdown of $s_0 = 2.5$ m.
    *   **Answer:**
        $T = \frac{2.303 Q}{4\pi m} = \frac{2.303 \times 1200}{4\pi \times 0.6} = \frac{2763.6}{7.54} \approx 366.5 \, m^2/day$.
        $s_0 = \frac{2.303 Q}{4\pi T} \log(\frac{2.25 T t_0}{r^2 S})$
        $2.5 = \frac{2.303 \times 1200}{4\pi \times 366.5} \log(\frac{2.25 \times 366.5 \times 1}{30^2 \times S})$
        $2.5 = \frac{2763.6}{4606.3} \log(\frac{824.625}{900 S})$
        $2.5 = 0.600 \log(\frac{0.916}{S})$
        $\frac{2.5}{0.600} = \log(\frac{0.916}{S})$
        $4.167 = \log(\frac{0.916}{S})$
        $10^{4.167} = \frac{0.916}{S}$
        $14689 = \frac{0.916}{S}$
        $S = \frac{0.916}{14689} \approx 0.0000623 \approx 6.23 \times 10^{-5}$.

3.  Explain the primary difference in graphical presentation between the Theis method and the Jacob's method for aquifer parameter evaluation.
    *   **Answer:** The Theis method requires plotting drawdown vs. time on semi-log paper and matching this to the theoretical $W(u)$ vs $u$ curve plotted on log-log paper. The Jacob's method involves plotting drawdown vs. time on **semi-log paper**, and the data points should ideally form a **straight line** from which parameters are derived.

---

This concludes the notes for Topic: Evaluation of aquifer parameters by Theis, Jacob's and Chow's method. Remember to practice solving problems to solidify your understanding.
