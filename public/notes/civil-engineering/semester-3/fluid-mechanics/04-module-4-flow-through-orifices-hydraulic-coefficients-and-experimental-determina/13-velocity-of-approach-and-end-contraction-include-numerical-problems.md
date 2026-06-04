---
title: "velocity of approach and end contraction (include numerical problems)"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81070c"
status: "completed"
scrapedAt: "2026-05-20T18:40:48.578Z"
---
# Module 4: Flow Through Orifices: Hydraulic Coefficients and Experimental Determination

## Topic: Velocity of Approach and End Contraction

### Learning Outcomes:

*   Understand the concept of velocity of approach and its effect on discharge through an orifice.
*   Define end contraction and its impact on the effective area of discharge.
*   Explain the concept of hydraulic coefficients (coefficient of velocity, coefficient of discharge, coefficient of contraction).
*   Describe the experimental methods for determining hydraulic coefficients.
*   Solve numerical problems involving velocity of approach and end contraction, and the application of hydraulic coefficients.

---

### 1. Introduction to Orifices and Discharge

An **orifice** is a small opening in a tank or vessel through which a fluid flows. The study of flow through orifices is crucial for understanding fluid behavior in various engineering applications, such as flow measurement devices and controlling fluid release.

The theoretical discharge through an orifice is calculated based on Bernoulli's equation, assuming ideal fluid conditions. However, real-world flows are affected by various factors, leading to a reduced actual discharge. These discrepancies are accounted for by **hydraulic coefficients**.

---

### 2. Velocity of Approach

#### 2.1 Concept:

The **velocity of approach** refers to the velocity of the fluid in the tank or reservoir approaching the orifice. When the fluid level in the tank is significantly higher than the orifice, the velocity of the fluid surface moving downwards towards the orifice is considered.

#### 2.2 Derivation and Formula:

Consider a tank with a free surface at a height $H$ above the center of the orifice. Let:

*   $A_1$: Area of the free surface of the liquid in the tank.
*   $v_1$: Velocity of the liquid approaching the orifice (velocity of approach).
*   $A_2$: Area of the orifice.
*   $v_2$: Velocity of the jet issuing from the orifice.

Applying Bernoulli's equation between the free surface (point 1) and the vena contracta (point 2), assuming atmospheric pressure at both points (or considering pressure difference if the tank is closed):

$\frac{P_1}{\rho g} + \frac{v_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + z_2$

Let the datum be the center of the orifice.
*   $z_1 = H$
*   $z_2 = 0$
*   $P_1 = P_2 = P_{atm}$ (assuming atmospheric pressure inside and outside the tank)

So, the equation simplifies to:

$\frac{P_{atm}}{\rho g} + \frac{v_1^2}{2g} + H = \frac{P_{atm}}{\rho g} + \frac{v_2^2}{2g} + 0$

$\frac{v_1^2}{2g} + H = \frac{v_2^2}{2g}$

$H = \frac{v_2^2}{2g} - \frac{v_1^2}{2g}$  **(Equation 1)**

By the principle of continuity, the rate of flow at the free surface and at the orifice must be equal:

$A_1 v_1 = A_2 v_2$

From this, we can express $v_1$ in terms of $v_2$:

$v_1 = \frac{A_2}{A_1} v_2$

Substitute this expression for $v_1$ into Equation 1:

$H = \frac{v_2^2}{2g} - \frac{1}{2g} \left(\frac{A_2}{A_1} v_2\right)^2$

$H = \frac{v_2^2}{2g} \left(1 - \left(\frac{A_2}{A_1}\right)^2\right)$

Now, we can solve for $v_2$ (the actual velocity of the jet):

$v_2^2 = \frac{2gH}{1 - (A_2/A_1)^2}$

$v_2 = \sqrt{\frac{2gH}{1 - (A_2/A_1)^2}}$

This is the **actual velocity of the jet issuing from the orifice, considering the velocity of approach.**

#### 2.3 Effect on Discharge:

The theoretical discharge ($Q_{th}$) through an orifice of area $A_2$ with a head $H$ is given by:

$Q_{th} = A_2 \sqrt{2gH}$

The actual discharge ($Q_{act}$) is given by:

$Q_{act} = A_2 v_2$

Substituting the expression for $v_2$:

$Q_{act} = A_2 \sqrt{\frac{2gH}{1 - (A_2/A_1)^2}}$

$Q_{act} = \frac{A_2 \sqrt{2gH}}{\sqrt{1 - (A_2/A_1)^2}}$

Notice that the denominator $\sqrt{1 - (A_2/A_1)^2}$ is always less than 1 (since $A_2 < A_1$). Therefore, $Q_{act} > Q_{th}$ when considering velocity of approach *in this formulation*. This seems counter-intuitive, as real flows have losses.

**Important Clarification:** The initial derivation of $Q_{th}$ assumes $v_1 \approx 0$. When $v_1$ is not negligible, the corrected theoretical velocity $v_2$ is larger. The actual discharge is then $Q_{act} = C_d A_2 v_2$.

A more common way to incorporate velocity of approach is to consider the *effective head* that produces the discharge, which is $H_{eff} = H + \frac{v_1^2}{2g}$.
Then, the theoretical velocity becomes $v_{2, theoretical} = \sqrt{2g(H + \frac{v_1^2}{2g})}$.
Using continuity $A_1 v_1 = A_2 v_{2,theoretical}$, we get $v_1 = \frac{A_2}{A_1} \sqrt{2g(H + \frac{v_1^2}{2g})}$.
Squaring both sides: $v_1^2 = (\frac{A_2}{A_1})^2 2g(H + \frac{v_1^2}{2g})$.
$v_1^2 (1 - (\frac{A_2}{A_1})^2 \frac{2g}{2g}) = (\frac{A_2}{A_1})^2 2gH$
$v_1^2 (1 - (\frac{A_2}{A_1})^2) = (\frac{A_2}{A_1})^2 2gH$
$v_1^2 = \frac{(\frac{A_2}{A_1})^2 2gH}{1 - (\frac{A_2}{A_1})^2}$
$v_1 = \frac{A_2}{A_1} \sqrt{\frac{2gH}{1 - (A_2/A_1)^2}}$

Now, the actual velocity is $v_{2, actual} = C_v v_{2, theoretical}$ where $v_{2, theoretical} = \sqrt{2g(H + \frac{v_1^2}{2g})}$.
And the actual discharge $Q_{act} = C_d A_2 v_{2, theoretical}$.

Let's revisit the Bernoulli equation: $\frac{v_1^2}{2g} + H = \frac{v_2^2}{2g}$.
We defined $v_1 = (\frac{A_2}{A_1}) v_2$.
So, $\frac{1}{2g} (\frac{A_2}{A_1})^2 v_2^2 + H = \frac{v_2^2}{2g}$
$H = \frac{v_2^2}{2g} (1 - (\frac{A_2}{A_1})^2)$
$v_2 = \sqrt{\frac{2gH}{1 - (A_2/A_1)^2}}$ is the **actual velocity at the orifice** *if it were a frictionless flow*.

The **theoretical velocity** is what you'd get if $v_1=0$, i.e., $v_{2,th} = \sqrt{2gH}$.
The **actual velocity** $v_2$ is related to the theoretical velocity by the coefficient of velocity: $v_2 = C_v v_{2,th}$.
So, $v_2 = C_v \sqrt{2gH}$.

Now, let's combine Bernoulli and continuity with the velocity of approach:
$\frac{v_1^2}{2g} + H = \frac{v_2^2}{2g}$
Substitute $v_1 = \frac{A_2}{A_1} v_2$:
$\frac{1}{2g} (\frac{A_2}{A_1})^2 v_2^2 + H = \frac{v_2^2}{2g}$
$H = \frac{v_2^2}{2g} \left(1 - \left(\frac{A_2}{A_1}\right)^2\right)$
$v_2 = \sqrt{\frac{2gH}{1 - (A_2/A_1)^2}}$

This equation represents the **ideal velocity at the vena contracta**.
The **actual velocity at the vena contracta** is $v_{2,actual} = C_v \sqrt{\frac{2gH}{1 - (A_2/A_1)^2}}$.

The **actual discharge** $Q_{act} = C_d A_2 v_{2,actual}$.
However, typically, the hydraulic coefficients are defined based on the theoretical velocity at the orifice, assuming no velocity of approach ($v_1 \approx 0$).
Let's stick to the standard definition and then see how velocity of approach modifies it.

**Standard Discharge (without significant velocity of approach):**
$Q_{actual} = C_d A_2 \sqrt{2gH}$
where $C_d = C_v C_c$ (Coefficient of Discharge = Coefficient of Velocity × Coefficient of Contraction)

**Considering Velocity of Approach:**

If $A_1$ is not very large compared to $A_2$, the velocity of approach $v_1$ cannot be ignored.
Bernoulli's equation between the free surface (1) and the vena contracta (2):
$\frac{P_1}{\rho g} + \frac{v_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + z_2$
$H + \frac{v_1^2}{2g} = \frac{v_2^2}{2g}$ (assuming $P_1=P_2$ and datum at orifice)

Let the effective head be $H_{eff} = H + \frac{v_1^2}{2g}$.
Then $v_2 = \sqrt{2g H_{eff}} = \sqrt{2g(H + \frac{v_1^2}{2g})}$.
By continuity, $A_1 v_1 = A_2 v_2$. So, $v_1 = \frac{A_2}{A_1} v_2$.
Substituting $v_1$:
$v_2 = \sqrt{2g \left(H + \frac{1}{2g} \left(\frac{A_2}{A_1} v_2\right)^2\right)}$
$v_2^2 = 2gH + \left(\frac{A_2}{A_1}\right)^2 v_2^2$
$v_2^2 \left(1 - \left(\frac{A_2}{A_1}\right)^2\right) = 2gH$
$v_2 = \sqrt{\frac{2gH}{1 - (A_2/A_1)^2}}$

This $v_2$ is the **ideal velocity at the vena contracta considering velocity of approach**.
The **actual velocity at the vena contracta** is $v_{2, actual} = C_v \sqrt{\frac{2gH}{1 - (A_2/A_1)^2}}$.
The **actual discharge** is $Q_{actual} = C_c A_2 \times v_{2, actual}$. (Note: $C_c$ is applied to the *actual* area of the jet at vena contracta).

A more common approach is to define discharge based on the actual velocity at the orifice and then correct it for velocity of approach using the continuity equation.

Let's consider the **actual discharge** $Q$ and **actual velocity** $v_2$ at the vena contracta.
Bernoulli: $H + \frac{v_1^2}{2g} = \frac{v_2^2}{2g}$.
Continuity: $A_1 v_1 = A_2 v_2$ (This continuity equation is problematic here as $A_2$ is the orifice area, not the vena contracta area. Let $A_c$ be the vena contracta area. Then $A_1 v_1 = A_c v_2$).
However, we define $C_c = A_c / A_2$, so $A_c = C_c A_2$.
Thus, $A_1 v_1 = C_c A_2 v_2$. This implies $v_1 = \frac{C_c A_2}{A_1} v_2$.

Substitute this $v_1$ into Bernoulli:
$H + \frac{1}{2g} \left(\frac{C_c A_2}{A_1} v_2\right)^2 = \frac{v_2^2}{2g}$
$H = \frac{v_2^2}{2g} \left(1 - \left(\frac{C_c A_2}{A_1}\right)^2\right)$
$v_2 = \sqrt{\frac{2gH}{1 - (C_c A_2/A_1)^2}}$

The actual discharge is $Q = A_c v_2 = C_c A_2 v_2$.
$Q = C_c A_2 \sqrt{\frac{2gH}{1 - (C_c A_2/A_1)^2}}$
$Q = \frac{C_c A_2 \sqrt{2gH}}{\sqrt{1 - (C_c A_2/A_1)^2}}$

This is a more precise formula for discharge with velocity of approach.
However, it requires knowing $C_c$ beforehand.

**A Simpler and Common Approach:**

The effect of velocity of approach is often absorbed into the coefficient of discharge by modifying the head term implicitly.
If we *assume* $Q = C_d A_2 \sqrt{2gH}$ and $v_1$ is not negligible, then the velocity at the orifice should be higher.
Let the actual velocity at the orifice be $v_{2,actual}$.
Bernoulli: $H + \frac{v_1^2}{2g} = \frac{v_{2,actual}^2}{2g}$.
Continuity: $A_1 v_1 = A_2 v_{2,actual}$ (again, $A_2$ is orifice area, not vena contracta)

Let's consider the effective head. If the velocity of approach is $v_1$, the effective head that produces the velocity is $H + \frac{v_1^2}{2g}$.
The theoretical velocity at the orifice, considering velocity of approach, is $v_{2,th}' = \sqrt{2g(H + \frac{v_1^2}{2g})}$.
The actual velocity at the orifice is $v_{2,actual} = C_v v_{2,th}' = C_v \sqrt{2g(H + \frac{v_1^2}{2g})}$.
The actual discharge is $Q_{actual} = C_c A_2 v_{2,actual} = C_c A_2 C_v \sqrt{2g(H + \frac{v_1^2}{2g})}$.
$Q_{actual} = C_d A_2 \sqrt{2g(H + \frac{v_1^2}{2g})}$.

To use this formula, we need $v_1$. We can express $v_1$ using continuity:
$A_1 v_1 = C_c A_2 v_{2,actual}$.
$A_1 v_1 = C_c A_2 C_v \sqrt{2g(H + \frac{v_1^2}{2g})}$.
$v_1 = \frac{C_c A_2}{A_1} \sqrt{2g(H + \frac{v_1^2}{2g})}$.

This equation needs to be solved for $v_1$.
Alternatively, we can express $v_1$ in terms of $v_2$: $v_1 = \frac{A_2}{A_1} v_2$ if we ignore $C_c$ for a moment for simplicity.
$H + \frac{1}{2g} (\frac{A_2}{A_1})^2 v_2^2 = \frac{v_2^2}{2g}$
$H = \frac{v_2^2}{2g} (1 - (\frac{A_2}{A_1})^2)$
$v_2 = \sqrt{\frac{2gH}{1 - (A_2/A_1)^2}}$ is the *ideal velocity at the vena contracta*.

The **actual discharge** $Q_{actual}$ is given by:
$Q_{actual} = C_d A_2 \sqrt{2g H_{effective}}$

Where $H_{effective}$ is the head that *effectively* produces the flow.
If we use $Q_{actual} = C_d A_2 \sqrt{2gH}$ as the base formula, we can see how velocity of approach affects it.
Let $Q_{actual}'$ be the discharge considering velocity of approach.
$Q_{actual}' = C_d A_2 \sqrt{2g(H + \frac{v_1^2}{2g})}$.
Since $v_1$ depends on $Q_{actual}'$ itself ($Q_{actual}' = A_1 v_1$), this requires an iterative solution or an approximation.

**Approximation:**
Assume $v_1 \approx 0$ for the first iteration to calculate $Q_{actual,1} = C_d A_2 \sqrt{2gH}$.
Then calculate $v_{1,2} = Q_{actual,1} / A_1$.
Use this $v_{1,2}$ to find the next approximation of discharge:
$Q_{actual,2} = C_d A_2 \sqrt{2g(H + \frac{v_{1,2}^2}{2g})}$.
This process can be repeated until convergence.

**Key Takeaway for Velocity of Approach:**
When the area of the free surface ($A_1$) is not significantly larger than the orifice area ($A_2$), the velocity of fluid approaching the orifice ($v_1$) becomes significant. This increases the kinetic energy term at the free surface, effectively increasing the head available for discharge. The discharge is then given by $Q = C_d A_2 \sqrt{2g(H + v_1^2/2g)}$, where $v_1 = Q/A_1$.

#### 2.4 Numerical Example (Velocity of Approach):

**Problem:** A large tank has a circular orifice of diameter 10 cm. The head of water above the orifice is 3 m. The area of the water surface in the tank is 10 $m^2$. The coefficient of discharge for the orifice is 0.62. Calculate the discharge through the orifice, considering the velocity of approach.

**Solution:**

Given:
*   Diameter of orifice, $d = 10$ cm $= 0.1$ m
*   Area of orifice, $A_2 = \frac{\pi d^2}{4} = \frac{\pi (0.1)^2}{4} = 0.00785$ $m^2$
*   Head of water, $H = 3$ m
*   Area of water surface, $A_1 = 10$ $m^2$
*   Coefficient of discharge, $C_d = 0.62$

**Method 1: Using iterative approach for $Q$**

Let's use the formula $Q = C_d A_2 \sqrt{2g(H + v_1^2/2g)}$ and $v_1 = Q/A_1$.

**Iteration 1:** Assume $v_1 \approx 0$ (i.e., ignore velocity of approach initially).
$Q_1 = C_d A_2 \sqrt{2gH}$
$Q_1 = 0.62 \times 0.00785 \times \sqrt{2 \times 9.81 \times 3}$
$Q_1 = 0.62 \times 0.00785 \times \sqrt{58.86}$
$Q_1 = 0.62 \times 0.00785 \times 7.67$
$Q_1 = 0.0373$ $m^3/s$

Now, calculate the velocity of approach for this discharge:
$v_{1,2} = Q_1 / A_1 = 0.0373 / 10 = 0.00373$ m/s

**Iteration 2:** Use $v_{1,2}$ to calculate the new discharge.
$Q_2 = C_d A_2 \sqrt{2g(H + v_{1,2}^2/2g)}$
$Q_2 = 0.62 \times 0.00785 \times \sqrt{2 \times 9.81 \times (3 + (0.00373)^2 / (2 \times 9.81))}$
$Q_2 = 0.62 \times 0.00785 \times \sqrt{19.62 \times (3 + 0.0000139 / 19.62)}$
$Q_2 = 0.62 \times 0.00785 \times \sqrt{19.62 \times (3 + 0.000000708)}$
$Q_2 = 0.62 \times 0.00785 \times \sqrt{58.86}$
$Q_2 = 0.0373$ $m^3/s$

The discharge values are almost identical, indicating that the velocity of approach is negligible in this case because $A_1$ is very large compared to $A_2$. The ratio $A_2/A_1 = 0.00785/10 = 0.000785$. The term $(A_2/A_1)^2 \approx 6.16 \times 10^{-6}$, which is very small.

Let's consider a case where it's more significant.

**Problem 2:** A tank with a water surface area of 5 $m^2$ has an orifice of area 0.02 $m^2$ at a depth of 4 m. The coefficient of discharge is 0.6. Find the discharge.

**Solution:**
Given: $A_1 = 5$ $m^2$, $A_2 = 0.02$ $m^2$, $H = 4$ m, $C_d = 0.6$.

**Iteration 1:**
$Q_1 = C_d A_2 \sqrt{2gH} = 0.6 \times 0.02 \times \sqrt{2 \times 9.81 \times 4}$
$Q_1 = 0.6 \times 0.02 \times \sqrt{78.48}$
$Q_1 = 0.6 \times 0.02 \times 8.859$
$Q_1 = 0.1063$ $m^3/s$

$v_{1,2} = Q_1 / A_1 = 0.1063 / 5 = 0.02126$ m/s

**Iteration 2:**
$Q_2 = C_d A_2 \sqrt{2g(H + v_{1,2}^2/2g)}$
$Q_2 = 0.6 \times 0.02 \times \sqrt{2 \times 9.81 \times (4 + (0.02126)^2 / (2 \times 9.81))}$
$Q_2 = 0.6 \times 0.02 \times \sqrt{19.62 \times (4 + 0.000452 / 19.62)}$
$Q_2 = 0.6 \times 0.02 \times \sqrt{19.62 \times (4 + 0.000023)}$
$Q_2 = 0.6 \times 0.02 \times \sqrt{78.48}$
$Q_2 = 0.1063$ $m^3/s$

Again, the values are very close. Let's try to increase the velocity of approach by increasing the ratio $A_2/A_1$.

**Problem 3:** An orifice of area 0.01 $m^2$ is fitted to a tank containing water. The area of the free surface of water in the tank is 2 $m^2$. The head of water over the orifice is 2 m. The coefficient of discharge is 0.62. Calculate the discharge.

**Solution:**
Given: $A_1 = 2$ $m^2$, $A_2 = 0.01$ $m^2$, $H = 2$ m, $C_d = 0.62$.

**Iteration 1:**
$Q_1 = C_d A_2 \sqrt{2gH} = 0.62 \times 0.01 \times \sqrt{2 \times 9.81 \times 2}$
$Q_1 = 0.62 \times 0.01 \times \sqrt{39.24}$
$Q_1 = 0.62 \times 0.01 \times 6.264$
$Q_1 = 0.03884$ $m^3/s$

$v_{1,2} = Q_1 / A_1 = 0.03884 / 2 = 0.01942$ m/s

**Iteration 2:**
$Q_2 = C_d A_2 \sqrt{2g(H + v_{1,2}^2/2g)}$
$Q_2 = 0.62 \times 0.01 \times \sqrt{2 \times 9.81 \times (2 + (0.01942)^2 / (2 \times 9.81))}$
$Q_2 = 0.62 \times 0.01 \times \sqrt{19.62 \times (2 + 0.000377 / 19.62)}$
$Q_2 = 0.62 \times 0.01 \times \sqrt{19.62 \times (2 + 0.0000192)}$
$Q_2 = 0.62 \times 0.01 \times \sqrt{39.24}$
$Q_2 = 0.03884$ $m^3/s$

The difference is still very small because the velocity of approach is directly proportional to $Q/A_1$, and $A_1$ is still relatively large.

**Important Point:** The term $(A_2/A_1)^2$ is a good indicator of the significance of velocity of approach. If this ratio is less than 0.01, the velocity of approach is usually considered negligible.
In Problem 3, $(A_2/A_1)^2 = (0.01/2)^2 = (0.005)^2 = 0.000025$, which is very small.

**Method 2: Using the derived formula for $v_2$ and then $Q$**

$v_2 = \sqrt{\frac{2gH}{1 - (A_2/A_1)^2}}$ is the ideal velocity at the vena contracta.
$Q = C_d A_2 v_2$ is not correct, as $C_d$ is usually defined with respect to $A_2$ and $\sqrt{2gH}$.

Let's use the relation $Q_{actual} = C_d A_2 \sqrt{2g(H + v_1^2/2g)}$ where $v_1 = Q_{actual}/A_1$.

Let's use a more direct calculation for the velocity of approach.
Bernoulli: $H + v_1^2/(2g) = v_2^2/(2g)$
Continuity: $A_1 v_1 = A_c v_2$ where $A_c = C_c A_2$.
So $v_1 = (C_c A_2/A_1) v_2$.

$H + \frac{1}{2g} (\frac{C_c A_2}{A_1})^2 v_2^2 = \frac{v_2^2}{2g}$
$H = \frac{v_2^2}{2g} [1 - (\frac{C_c A_2}{A_1})^2]$
$v_2 = \sqrt{\frac{2gH}{1 - (C_c A_2/A_1)^2}}$

$Q = C_c A_2 v_2 = C_c A_2 \sqrt{\frac{2gH}{1 - (C_c A_2/A_1)^2}}$
Since $C_d = C_v C_c$, this becomes $Q = C_d A_2 \frac{\sqrt{2gH}}{\sqrt{1 - (C_c A_2/A_1)^2}}$. This is complicated.

**Let's stick to the iterative method for practical problems.**

---

### 3. End Contraction

#### 3.1 Concept:

When a fluid flows through an orifice from a large reservoir, the jet of fluid does not contract immediately to the size of the orifice. Instead, the cross-sectional area of the jet continues to decrease for a short distance after the orifice. This phenomenon is known as **vena contracta**.

The point where the jet attains its minimum cross-sectional area is called the **vena contracta**.

#### 3.2 Explanation:

The fluid particles, which are free to move, follow curved paths as they approach the orifice. Due to inertia and the influence of the surrounding fluid, the jet contracts. The external fluid particles exert a radial inward force on the jet, causing it to contract. The contraction is maximum at the vena contracta.

#### 3.3 Effect on Discharge:

The actual area of the jet at the vena contracta is less than the area of the orifice. This reduction in the effective area of flow leads to a reduced actual discharge compared to what would be calculated based on the orifice area alone.

#### 3.4 Coefficient of Contraction ($C_c$):

The ratio of the area of the vena contracta ($A_c$) to the area of the orifice ($A_2$) is called the **coefficient of contraction**.

$C_c = \frac{A_c}{A_2}$

Typically, $C_c$ is less than 1 (e.g., around 0.6 to 0.65 for sharp-edged orifices).

#### 3.5 Numerical Example (End Contraction):

**Problem:** For a sharp-edged orifice of diameter 5 cm, the area of the vena contracta is found to be 1.57 $cm^2$. Determine the coefficient of contraction.

**Solution:**
Given:
*   Diameter of orifice, $d = 5$ cm
*   Area of orifice, $A_2 = \frac{\pi d^2}{4} = \frac{\pi (5)^2}{4} = \frac{25\pi}{4} = 19.63$ $cm^2$
*   Area of vena contracta, $A_c = 1.57$ $cm^2$

Coefficient of Contraction, $C_c = \frac{A_c}{A_2} = \frac{1.57}{19.63}$

$C_c \approx 0.08$

**Wait, this result seems unusually low for a sharp-edged orifice. Let's recheck the problem statement or my calculation.**

Ah, if $A_c = 1.57 \, cm^2$, and $A_2 = 19.63 \, cm^2$, then $C_c = 1.57 / 19.63 = 0.0799 \approx 0.08$. This is indeed a very low $C_c$. It's more likely that the *radius* was intended to be 5 cm or the *diameter* was intended to be smaller. Let's assume the diameter was 2.5 cm instead for a more realistic $C_c$.

**Revised Problem:** For a sharp-edged orifice of diameter 2.5 cm, the area of the vena contracta is found to be 3.8 $cm^2$. Determine the coefficient of contraction.

**Solution:**
Given:
*   Diameter of orifice, $d = 2.5$ cm
*   Area of orifice, $A_2 = \frac{\pi d^2}{4} = \frac{\pi (2.5)^2}{4} = \frac{6.25\pi}{4} = 4.91$ $cm^2$
*   Area of vena contracta, $A_c = 3.8$ $cm^2$

Coefficient of Contraction, $C_c = \frac{A_c}{A_2} = \frac{3.8}{4.91}$

$C_c \approx 0.774$

This value of $C_c \approx 0.77$ is more typical for sharp-edged orifices.

---

### 4. Hydraulic Coefficients

Hydraulic coefficients are dimensionless quantities that account for the energy losses and geometric imperfections in the flow through an orifice or other fluid machinery. They are determined experimentally.

#### 4.1 Coefficient of Velocity ($C_v$):

It is the ratio of the actual velocity of the jet at the vena contracta to the theoretical velocity of the jet at the vena contracta (assuming no friction and no velocity of approach).

$C_v = \frac{\text{Actual velocity of jet at vena contracta}}{\text{Theoretical velocity of jet at vena contracta}}$

The theoretical velocity of the jet at vena contracta is derived from Bernoulli's equation assuming ideal conditions, which is $\sqrt{2gH}$.

So, $C_v = \frac{v_{actual}}{\sqrt{2gH}}$

Typical values of $C_v$ for sharp-edged orifices are around 0.95 to 0.99.

#### 4.2 Coefficient of Contraction ($C_c$):

As defined earlier:
$C_c = \frac{\text{Area of vena contracta } (A_c)}{\text{Area of orifice } (A_2)}$

Typical values of $C_c$ for sharp-edged orifices are around 0.61 to 0.65.

#### 4.3 Coefficient of Discharge ($C_d$):

It is the ratio of the actual discharge ($Q_{actual}$) through the orifice to the theoretical discharge ($Q_{theoretical}$) through the orifice.

$C_d = \frac{\text{Actual discharge } (Q_{actual})}{\text{Theoretical discharge } (Q_{theoretical})}$

The theoretical discharge is calculated as $Q_{theoretical} = A_2 \sqrt{2gH}$, assuming the full orifice area is used and the velocity at the free surface is negligible.

So, $Q_{actual} = C_d A_2 \sqrt{2gH}$

**Relationship between coefficients:**

The actual discharge can also be expressed as:
$Q_{actual} = \text{Area of vena contracta} \times \text{Actual velocity at vena contracta}$
$Q_{actual} = A_c \times v_{actual}$

We know $A_c = C_c A_2$ and $v_{actual} = C_v \sqrt{2gH}$.
Substituting these into the equation for actual discharge:
$Q_{actual} = (C_c A_2) \times (C_v \sqrt{2gH})$
$Q_{actual} = (C_c C_v) A_2 \sqrt{2gH}$

Comparing this with the definition of $C_d$:
$C_d A_2 \sqrt{2gH} = (C_c C_v) A_2 \sqrt{2gH}$

Therefore, $C_d = C_c \times C_v$

This relationship holds true when velocity of approach is negligible.

---

### 5. Experimental Determination of Hydraulic Coefficients

Hydraulic coefficients are determined experimentally by measuring various parameters and comparing them with theoretical values.

#### 5.1 Method using Jet Trajectory:

This method is commonly used to determine $C_v$.

1.  **Setup:** A tank with an orifice is set up. The head of water ($H$) above the orifice is measured using a piezometer or a gauge.
2.  **Jet Trajectory:** The jet of fluid emerging from the orifice is allowed to fall. The horizontal distance ($x$) traveled by the jet from the orifice to the point where it strikes the horizontal plane at the level of the orifice is measured.
3.  **Time of Fall:** The vertical distance ($y$) the jet falls is equal to the head of water ($H$) above the orifice. The time ($t$) taken for the jet to fall this distance can be calculated from the equation of motion under gravity: $y = \frac{1}{2}gt^2$.
    So, $t = \sqrt{\frac{2y}{g}}$. Since $y=H$, $t = \sqrt{\frac{2H}{g}}$.
4.  **Actual Velocity Calculation:** The actual horizontal velocity of the jet ($v_{actual}$) can be calculated using the formula: $v_{actual} = \frac{\text{horizontal distance}}{\text{time of fall}} = \frac{x}{t}$.
    Substituting the value of $t$: $v_{actual} = \frac{x}{\sqrt{2H/g}} = x \sqrt{\frac{g}{2H}}$.
5.  **Theoretical Velocity:** The theoretical velocity is $v_{theoretical} = \sqrt{2gH}$.
6.  **Coefficient of Velocity ($C_v$):**
    $C_v = \frac{v_{actual}}{v_{theoretical}} = \frac{x \sqrt{g/2H}}{\sqrt{2gH}} = \frac{x}{2\sqrt{H^2}} = \frac{x}{2H}$.
    **Correction:** $v_{actual} = \frac{x}{\sqrt{2H/g}}$ is incorrect if the jet falls from the orifice to the level of the orifice, the distance fallen is 0.
    Let's re-evaluate the jet trajectory.
    The jet issues horizontally from the orifice with velocity $v_{actual}$. Let the orifice be at a height $h_0$ above the ground. The vertical distance fallen is $h_0$.
    Time to fall $h_0$ is $t = \sqrt{\frac{2h_0}{g}}$.
    The horizontal distance traveled is $x = v_{actual} \times t = v_{actual} \times \sqrt{\frac{2h_0}{g}}$.
    So, $v_{actual} = \frac{x}{\sqrt{2h_0/g}} = x \sqrt{\frac{g}{2h_0}}$.
    The head of water above the orifice is $H$.
    $C_v = \frac{v_{actual}}{\sqrt{2gH}} = \frac{x \sqrt{g/2h_0}}{\sqrt{2gH}} = \frac{x \sqrt{g}}{\sqrt{2h_0} \sqrt{2gH}} = \frac{x}{2\sqrt{h_0 H}}$.

    **Common Setup:** The orifice is placed on the side of a tank, and the horizontal distance ($x$) is measured from the orifice to the point where the jet hits the horizontal plane at the level of the orifice. In this case, the vertical distance fallen ($h_0$) is 0. This means the horizontal distance $x$ should also be 0 if there were no velocity loss. The jet path will be parabolic.

    **Let's use the standard definition:** $v_{actual}$ is measured at the vena contracta.
    If we measure the jet trajectory from the vena contracta.
    Let the vertical distance fallen from the vena contracta to the catch point be $y$.
    Let the horizontal distance traveled be $x$.
    Time of fall $t = \sqrt{2y/g}$.
    Actual velocity $v_{actual} = x/t = x / \sqrt{2y/g} = x \sqrt{g/(2y)}$.
    The theoretical velocity is $\sqrt{2gH}$, where $H$ is the head at the vena contracta.

    **A more practical approach for $C_v$:** Measure $H$ and measure the actual discharge $Q_{actual}$. Then measure the area of the vena contracta $A_c$.
    $v_{actual} = Q_{actual} / A_c$.
    $C_v = \frac{Q_{actual}/A_c}{\sqrt{2gH}}$.
    Since $A_c = C_c A_2$, $C_v = \frac{Q_{actual}/(C_c A_2)}{\sqrt{2gH}}$.

#### 5.2 Method for $C_d$ and $C_c$:

1.  **Measure Discharge:** The actual discharge ($Q_{actual}$) through the orifice is measured directly by collecting the fluid in a measuring tank for a specific time interval, or by using a flow meter.
2.  **Calculate Theoretical Discharge:** The theoretical discharge is calculated using $Q_{theoretical} = A_2 \sqrt{2gH}$, where $A_2$ is the area of the orifice and $H$ is the head over the orifice.
3.  **Coefficient of Discharge ($C_d$):**
    $C_d = \frac{Q_{actual}}{Q_{theoretical}} = \frac{Q_{actual}}{A_2 \sqrt{2gH}}$
4.  **Measure Area of Vena Contracta:** The area of the vena contracta ($A_c$) can be measured using a contour gauge or by other optical methods.
5.  **Coefficient of Contraction ($C_c$):**
    $C_c = \frac{A_c}{A_2}$

#### 5.3 Combined Determination:

Often, $C_d$ and $C_v$ are determined. Then $C_c$ is calculated using $C_c = C_d / C_v$.

---

### 6. Numerical Problems with Hydraulic Coefficients

**Problem 1:** A sharp-edged orifice of diameter 5 cm is fitted to a tank. The head of water over the orifice is 4 m. The coefficient of discharge is 0.62. Calculate the actual discharge and the coefficient of velocity and contraction, assuming the area of the vena contracta is $0.63$ times the area of the orifice.

**Solution:**
Given:
*   Diameter of orifice, $d = 5$ cm $= 0.05$ m
*   Area of orifice, $A_2 = \frac{\pi d^2}{4} = \frac{\pi (0.05)^2}{4} = 0.001963$ $m^2$
*   Head of water, $H = 4$ m
*   Coefficient of discharge, $C_d = 0.62$
*   Area of vena contracta is $0.63$ times $A_2$, so $C_c = 0.63$.

1.  **Actual Discharge ($Q_{actual}$):**
    $Q_{actual} = C_d A_2 \sqrt{2gH}$
    $Q_{actual} = 0.62 \times 0.001963 \times \sqrt{2 \times 9.81 \times 4}$
    $Q_{actual} = 0.62 \times 0.001963 \times \sqrt{78.48}$
    $Q_{actual} = 0.62 \times 0.001963 \times 8.859$
    $Q_{actual} = 0.01078$ $m^3/s$

2.  **Coefficient of Velocity ($C_v$):**
    We know $C_d = C_c \times C_v$.
    $C_v = \frac{C_d}{C_c} = \frac{0.62}{0.63}$
    $C_v \approx 0.984$

3.  **Coefficient of Contraction ($C_c$):**
    Given $C_c = 0.63$.

**Answer:**
*   Actual Discharge $= 0.01078$ $m^3/s$
*   Coefficient of Velocity $\approx 0.984$
*   Coefficient of Contraction $= 0.63$

**Problem 2:** From an orifice of area 20 $cm^2$ fitted to a tank, the discharge is found to be 5 liters per second. The head of water over the orifice is 2.5 m. The area of the vena contracta is 15 $cm^2$. Calculate the coefficients of discharge, velocity, and contraction.

**Solution:**
Given:
*   Area of orifice, $A_2 = 20$ $cm^2 = 0.0020$ $m^2$
*   Actual discharge, $Q_{actual} = 5$ liters/sec $= 0.005$ $m^3/s$
*   Head of water, $H = 2.5$ m
*   Area of vena contracta, $A_c = 15$ $cm^2 = 0.0015$ $m^2$

1.  **Coefficient of Discharge ($C_d$):**
    Theoretical Discharge, $Q_{theoretical} = A_2 \sqrt{2gH}$
    $Q_{theoretical} = 0.0020 \times \sqrt{2 \times 9.81 \times 2.5}$
    $Q_{theoretical} = 0.0020 \times \sqrt{49.05}$
    $Q_{theoretical} = 0.0020 \times 7.004$
    $Q_{theoretical} = 0.014008$ $m^3/s$

    $C_d = \frac{Q_{actual}}{Q_{theoretical}} = \frac{0.005}{0.014008}$
    $C_d \approx 0.357$

    **Hold on, this $C_d$ value seems very low for an orifice.** Let me re-check the calculation or the problem statement.
    If $Q_{actual} = 5$ liters/sec $= 0.005 \, m^3/s$.
    $A_2 = 20 \, cm^2 = 0.002 \, m^2$.
    $H = 2.5 \, m$.
    $Q_{theoretical} = 0.002 \, m^2 \times \sqrt{2 \times 9.81 \times 2.5} \, m/s = 0.002 \times \sqrt{49.05} = 0.002 \times 7.004 \approx 0.014 \, m^3/s$.
    $C_d = 0.005 / 0.014 \approx 0.357$. This is still very low.

    **Let's assume the actual discharge was meant to be 10 liters/sec for a more typical scenario.**
    **Revised Problem 2:** From an orifice of area 20 $cm^2$ fitted to a tank, the discharge is found to be 10 liters per second. The head of water over the orifice is 2.5 m. The area of the vena contracta is 15 $cm^2$. Calculate the coefficients.

    **Revised Solution:**
    Given:
    *   Area of orifice, $A_2 = 20$ $cm^2 = 0.0020$ $m^2$
    *   Actual discharge, $Q_{actual} = 10$ liters/sec $= 0.010$ $m^3/s$
    *   Head of water, $H = 2.5$ m
    *   Area of vena contracta, $A_c = 15$ $cm^2 = 0.0015$ $m^2$

    1.  **Coefficient of Discharge ($C_d$):**
        Theoretical Discharge, $Q_{theoretical} = A_2 \sqrt{2gH} = 0.014008$ $m^3/s$ (calculated above)
        $C_d = \frac{Q_{actual}}{Q_{theoretical}} = \frac{0.010}{0.014008}$
        $C_d \approx 0.714$ (This is a more reasonable value)

    2.  **Coefficient of Contraction ($C_c$):**
        $C_c = \frac{A_c}{A_2} = \frac{0.0015 \, m^2}{0.0020 \, m^2}$
        $C_c = 0.75$

    3.  **Coefficient of Velocity ($C_v$):**
        Using the relationship $C_d = C_c \times C_v$:
        $C_v = \frac{C_d}{C_c} = \frac{0.714}{0.75}$
        $C_v \approx 0.952$

    **Answer (for Revised Problem 2):**
    *   Coefficient of Discharge $\approx 0.714$
    *   Coefficient of Contraction $= 0.75$
    *   Coefficient of Velocity $\approx 0.952$

---

### 7. Important Points to Remember:

*   **Velocity of Approach:** Significant when the area of the free surface ($A_1$) is not much larger than the orifice area ($A_2$). It effectively increases the head responsible for discharge.
*   **End Contraction (Vena Contracta):** The point of maximum contraction of the jet after passing through an orifice. This reduces the effective area of flow.
*   **Hydraulic Coefficients:** $C_d = C_c \times C_v$. These are experimentally determined values that account for real-world losses.
    *   $C_d$: Ratio of actual to theoretical discharge.
    *   $C_c$: Ratio of vena contracta area to orifice area.
    *   $C_v$: Ratio of actual to theoretical velocity at the vena contracta.
*   **Typical Values (Sharp-edged orifice):** $C_c \approx 0.61-0.65$, $C_v \approx 0.95-0.99$, $C_d \approx 0.60-0.65$.
*   **Experimental Determination:** Coefficients are found by measuring actual discharge, jet trajectory, and vena contracta area.
*   **Velocity of Approach in Calculations:** When significant, use the iterative method or modify the head term: $Q = C_d A_2 \sqrt{2g(H + v_1^2/2g)}$ with $v_1 = Q/A_1$.

---

### Practice Questions:

1.  A large tank has a sharp-edged orifice of diameter 8 cm at a depth of 5 m. The coefficient of discharge is 0.63. Calculate the actual discharge through the orifice. If the area of the water surface in the tank is 5 $m^2$, would the velocity of approach significantly affect the discharge? Justify your answer.

2.  An orifice of diameter 4 cm discharges 20 liters of water per minute under a head of 6 m. The area of the vena contracta is found to be 1.0 $cm^2$. Calculate the coefficients of discharge, contraction, and velocity.

3.  A rectangular tank is 10 m long and 8 m wide. It is filled with water to a depth of 6 m. An orifice of dimensions 15 cm $\times$ 10 cm is provided at the bottom of the tank. The coefficient of discharge for the orifice is 0.6. Calculate the discharge through the orifice, considering the velocity of approach. (Assume orifice area is $A_2$, tank area is $A_1$).

---

### Answers to Practice Questions:

**Question 1:**
Given: $d = 8$ cm $= 0.08$ m, $A_2 = \frac{\pi (0.08)^2}{4} = 0.005026 \, m^2$, $H = 5$ m, $C_d = 0.63$, $A_1 = 5 \, m^2$.

*   **Actual Discharge (ignoring velocity of approach):**
    $Q = C_d A_2 \sqrt{2gH} = 0.63 \times 0.005026 \times \sqrt{2 \times 9.81 \times 5}$
    $Q = 0.63 \times 0.005026 \times \sqrt{98.1} = 0.63 \times 0.005026 \times 9.9045$
    $Q \approx 0.0313 \, m^3/s$

*   **Velocity of Approach Significance:**
    Ratio of areas: $A_2/A_1 = 0.005026 / 5 = 0.001005$.
    Square of the ratio: $(A_2/A_1)^2 = (0.001005)^2 \approx 1.01 \times 10^{-6}$.
    Since this value is extremely small (much less than 0.01), the velocity of approach is negligible and will not significantly affect the discharge.

**Answer:**
*   Actual Discharge $\approx 0.0313 \, m^3/s$.
*   The velocity of approach will not significantly affect the discharge.

**Question 2:**
Given: $d = 4$ cm $= 0.04$ m, $A_2 = \frac{\pi (0.04)^2}{4} = 0.0012566 \, m^2$, $Q_{actual} = 20$ liters/min $= 20/60$ liters/sec $= 0.3333$ liters/sec $= 0.0003333 \, m^3/s$.
$H = 6$ m, $A_c = 1.0 \, cm^2 = 0.00010 \, m^2$.

*   **Coefficient of Discharge ($C_d$):**
    $Q_{theoretical} = A_2 \sqrt{2gH} = 0.0012566 \times \sqrt{2 \times 9.81 \times 6}$
    $Q_{theoretical} = 0.0012566 \times \sqrt{117.72} = 0.0012566 \times 10.8499$
    $Q_{theoretical} \approx 0.01363 \, m^3/s$
    $C_d = \frac{Q_{actual}}{Q_{theoretical}} = \frac{0.0003333}{0.01363} \approx 0.0244$ (This is still a very low $C_d$. It implies an extremely high loss or error in the given values. Let's assume the discharge was intended to be 10 liters/sec for a more realistic $C_d$).

    **Let's re-calculate if discharge was 10 L/s = 0.01 m^3/s.**
    $C_d = 0.01 / 0.01363 \approx 0.733$. This is reasonable.

    **Assuming the question's values are correct, and proceeding with them:**
    $C_d = 0.0244$

*   **Coefficient of Contraction ($C_c$):**
    $C_c = \frac{A_c}{A_2} = \frac{0.00010 \, m^2}{0.0012566 \, m^2} \approx 0.0796$ (Again, very low $C_c$. A typical value for sharp-edged orifices is 0.61-0.65)

*   **Coefficient of Velocity ($C_v$):**
    $C_v = \frac{C_d}{C_c} = \frac{0.0244}{0.0796} \approx 0.306$ (Also very low)

    **Due to the extremely low values obtained for coefficients, it is highly probable there is an error in the question's input data. If we are forced to answer with the given numbers:**

**Answer (using given data):**
*   Coefficient of Discharge $\approx 0.0244$
*   Coefficient of Contraction $\approx 0.0796$
*   Coefficient of Velocity $\approx 0.306$

**Question 3:**
Given: Tank length = 10 m, Tank width = 8 m, $A_1 = 10 \times 8 = 80 \, m^2$.
Orifice dimensions = 15 cm $\times$ 10 cm $= 0.15$ m $\times$ 0.10 m.
$A_2 = 0.15 \times 0.10 = 0.015 \, m^2$.
$H = 6$ m. $C_d = 0.6$.

*   **Check for Velocity of Approach:**
    $A_2/A_1 = 0.015 / 80 = 0.0001875$.
    $(A_2/A_1)^2 = (0.0001875)^2 \approx 3.5 \times 10^{-8}$.
    This is extremely small, so velocity of approach is negligible.

*   **Discharge Calculation:**
    $Q = C_d A_2 \sqrt{2gH}$
    $Q = 0.6 \times 0.015 \times \sqrt{2 \times 9.81 \times 6}$
    $Q = 0.6 \times 0.015 \times \sqrt{117.72}$
    $Q = 0.6 \times 0.015 \times 10.8499$
    $Q \approx 0.0976 \, m^3/s$

**Answer:**
*   Discharge $\approx 0.0976 \, m^3/s$.

---
