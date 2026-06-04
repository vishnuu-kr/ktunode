---
title: "Theory of Errors   : Types, theory of least squares, Weighting of observations, Most probable value, Computation of indirectly observed quantities - method of normal equations."
subject: "SURVEYING & GEOMATICS"
module: "Module 3: Theory of Errors   : Types, theory of least squares, Weighting of observations, Most probable value, Computation of indirectly observed quantities "
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba81077a"
status: "completed"
scrapedAt: "2026-05-20T18:42:19.476Z"
---
# Surveying & Geomatics: Module 3 - Theory of Errors

## Topic: Theory of Errors: Types, Theory of Least Squares, Weighting of Observations, Most Probable Value, Computation of Indirectly Observed Quantities (Method of Normal Equations)

### 1. Learning Outcomes

This module aims to equip you with the knowledge and skills to:

*   Understand the fundamental concepts of errors in surveying measurements.
*   Differentiate between various types of errors encountered in surveying.
*   Explain the principles of the Theory of Least Squares and its application in surveying.
*   Understand the concept of weighting observations and its impact on results.
*   Determine the Most Probable Value (MPV) of a quantity from a set of observations.
*   Apply the method of normal equations for computing indirectly observed quantities.

### 2. Introduction to Errors in Surveying

No measurement in surveying is perfect. Errors are inherent in every process. Understanding and managing these errors is crucial for obtaining accurate and reliable results.

**Key Concept:** An **error** is the difference between an observed value and the true value of a quantity.

**Key Concept:** **Accuracy** refers to how close a measurement is to the true value.
**Key Concept:** **Precision** refers to the degree of reproducibility of a measurement. A measurement can be precise but not accurate.

### 3. Types of Errors

Errors in surveying can be broadly categorized based on their origin, magnitude, and effect.

#### 3.1. Classification based on Origin:

*   **Systematic Errors (Bias):**
    *   **Definition:** Errors that have a definite cause and follow a predictable pattern. They tend to occur in the same way under the same conditions.
    *   **Characteristics:**
        *   Have a consistent sign (always positive or always negative).
        *   Their magnitude is often proportional to the conditions or extent of the measurement.
        *   Can be eliminated or reduced by careful calibration, proper technique, and understanding the underlying principles.
    *   **Examples:**
        *   **Instrumental Errors:** Imperfect calibration of measuring tapes (stretched or shrunk), non-verticality of a theodolite's vertical axis.
        *   **Environmental Errors:** Effect of temperature on the length of a tape, refraction of light in the atmosphere.
        *   **Personal Errors:** Consistent error in reading an instrument due to faulty eyesight or technique.

*   **Random Errors (Accidental Errors):**
    *   **Definition:** Errors that arise from uncontrollable factors and have no predictable pattern. They can be positive or negative and occur by chance.
    *   **Characteristics:**
        *   Occur randomly, with no discernible pattern.
        *   Tend to compensate for each other in a series of measurements (some positive, some negative).
        *   Their magnitude is typically small, and they are often distributed according to the normal distribution (Gaussian distribution).
        *   Cannot be eliminated, but their effect can be minimized by increasing the number of observations and applying statistical methods.
    *   **Examples:**
        *   Slight variations in holding a measuring tape.
        *   Minute atmospheric disturbances affecting line of sight.
        *   Unpredictable variations in the observer's reaction time.

#### 3.2. Classification based on Magnitude:

*   **Gross Errors (Blunders/Mistakes):**
    *   **Definition:** Large, significant errors caused by carelessness, inexperience, or oversight.
    *   **Characteristics:**
        *   Usually very large in magnitude.
        *   Often result in obviously incorrect measurements.
        *   Must be identified and eliminated entirely.
    *   **Examples:**
        *   Misreading an instrument scale.
        *   Incorrectly entering data into a calculator.
        *   Forgetting to record a measurement.
        *   Walking off the wrong number of paces.

**Important Point to Remember:** Gross errors must be identified and discarded. Systematic errors should be corrected or accounted for. Random errors are inherent and managed through statistical analysis.

### 4. The Theory of Least Squares

The Theory of Least Squares is a fundamental mathematical principle used in surveying and geomatics to find the "best" or most probable values of unknown quantities when there are more measurements than unknowns, leading to an overdetermined system.

**Key Concept:** The **principle of least squares** states that the most probable values of unknown quantities are those that make the sum of the squares of the residuals (differences between observed and computed values) minimum.

**Key Concept:** A **residual** is the difference between an observed value and its most probable value.
*   $v = \text{Observed Value} - \text{Most Probable Value}$

**Key Concept:** An **observation equation** is an equation that expresses the relationship between the observed quantity and the unknown quantities, including a residual term.
*   General form: $v_i = a_i x + b_i y + ... - L_i$
    *   $v_i$: residual of the $i$-th observation
    *   $x, y, ...$: unknown quantities
    *   $a_i, b_i, ...$: coefficients derived from the geometry or relationships
    *   $L_i$: the $i$-th observed value (or a function of it)

**The Goal:** Minimize $\Sigma v^2$ subject to the observation equations.

#### 4.1. Weighting of Observations

Not all observations are equally reliable. **Weighting** assigns a numerical value (weight) to an observation that reflects its relative reliability or precision. Observations with higher weights are considered more reliable and contribute more to the final result.

**Key Concept:** The **weight (w)** of an observation is inversely proportional to the square of its standard deviation (or probable error).
*   $w \propto \frac{1}{\sigma^2}$ or $w \propto \frac{1}{PE^2}$
    *   $\sigma$: standard deviation
    *   $PE$: probable error

**Why Weighting?**
*   Observations made with more precise instruments should have higher weights.
*   Observations made under better conditions should have higher weights.
*   Averaging multiple measurements provides a more reliable result than a single measurement, hence the average has a higher effective weight.

**Least Squares with Weights:**
When weights are involved, the principle of least squares is modified to minimize the sum of the squares of the weighted residuals.

*   Minimize $\Sigma w_i v_i^2$

**Relationship between Weights and Residuals:**
The weighted residual is given by: $w_i v_i$. The sum of the squares of the weighted residuals is $\Sigma (w_i v_i)^2$.

**The Normal Equation (with weights):**
When applying least squares with weights, the normal equations are modified by multiplying the observation equations by the square root of their weights.

*   If we have an observation equation $v_i = a_i x - L_i$ with weight $w_i$, we can write: $\sqrt{w_i} v_i = \sqrt{w_i} (a_i x - L_i)$.
*   Then, we minimize $\Sigma (\sqrt{w_i} v_i)^2 = \Sigma w_i v_i^2$.
*   The normal equation becomes: $a_i^2 w_i x - a_i w_i L_i = 0$.
*   Summing these weighted terms leads to the general form of normal equations.

### 5. Most Probable Value (MPV)

The Most Probable Value (MPV) is the value that has the greatest probability of being the true value, based on a given set of observations and the principles of statistics.

#### 5.1. MPV from Equal Weight Observations:

*   **Definition:** When a quantity is measured multiple times with equal precision (i.e., equal weights), the MPV is the **arithmetic mean** of the observations.

*   **Formula:**
    $MPV = \bar{X} = \frac{\Sigma X_i}{n}$
    *   $\Sigma X_i$: sum of all observed values
    *   $n$: number of observations

*   **Example:**
    A distance was measured five times with equal precision, yielding the following values: 100.10m, 100.12m, 100.09m, 100.11m, 100.13m.
    *   Sum of observations = 100.10 + 100.12 + 100.09 + 100.11 + 100.13 = 500.55 m
    *   Number of observations (n) = 5
    *   MPV = 500.55 m / 5 = 100.11 m

#### 5.2. MPV from Different Weight Observations:

*   **Definition:** When a quantity is measured multiple times with different precisions (i.e., different weights), the MPV is the **weighted arithmetic mean**.

*   **Formula:**
    $MPV = \frac{\Sigma (w_i X_i)}{\Sigma w_i}$
    *   $w_i$: weight of the $i$-th observation
    *   $X_i$: the $i$-th observed value

*   **Example:**
    A distance was measured three times with different precisions, with weights assigned as follows:
    *   Observation 1: 100.10m, $w_1 = 2$
    *   Observation 2: 100.12m, $w_2 = 3$
    *   Observation 3: 100.09m, $w_3 = 1$

    *   $\Sigma (w_i X_i) = (2 \times 100.10) + (3 \times 100.12) + (1 \times 100.09)$
    *   $\Sigma (w_i X_i) = 200.20 + 300.36 + 100.09 = 600.65$
    *   $\Sigma w_i = 2 + 3 + 1 = 6$
    *   MPV = 600.65 / 6 = 100.1083 m (approximately 100.11 m)

**Important Point to Remember:** When observations have different precisions, the weighted mean is the MPV.

### 6. Computation of Indirectly Observed Quantities

Indirectly observed quantities are those that cannot be measured directly but are computed from direct measurements of other related quantities. The Theory of Least Squares is essential for determining the MPV of these indirectly observed quantities, especially in overdetermined systems.

**Method of Normal Equations:** This is the standard method to solve for the MPV of indirectly observed quantities using the Theory of Least Squares.

#### 6.1. Steps involved in the Method of Normal Equations:

1.  **Formulate Observation Equations:** Express the relationship between the directly measured quantities (which have observed values) and the unknown quantities you want to determine. Include residual terms for each observation.
2.  **Assign Weights:** Determine the weights for each observation based on its precision.
3.  **Formulate Weighted Observation Equations:** Multiply each observation equation by the square root of its weight.
4.  **Formulate Normal Equations:** Systematically derive the normal equations by summing the products of the weighted coefficients and weighted residual terms. The general procedure involves:
    *   For an equation $v_i = a_i x + b_i y + ... - L_i$ with weight $w_i$:
        *   Weighted equation: $\sqrt{w_i} v_i = \sqrt{w_i} (a_i x + b_i y + ... - L_i)$
    *   The terms for the normal equations are formed as follows:
        *   Sum of $w_i a_i^2$ for the coefficient of $x$.
        *   Sum of $w_i a_i b_i$ for the coefficient of $y$.
        *   Sum of $w_i a_i L_i$ for the constant term.
        *   And so on for all unknowns.

    The general form of normal equations for unknowns $x, y, \ldots$ is:
    *   $\Sigma w a^2 \cdot x + \Sigma w ab \cdot y + \ldots = \Sigma w a L$
    *   $\Sigma w ab \cdot x + \Sigma w b^2 \cdot y + \ldots = \Sigma w b L$
    *   ... and so on for all unknowns.

5.  **Solve the System of Normal Equations:** Solve the resulting system of linear equations for the MPV of the unknown quantities. This can be done using various methods like substitution, elimination, matrix inversion, or iterative methods.

#### 6.2. Example: Determining the MPV of a distance (a simple case)

**Problem:** A distance AB was measured by different surveyors using instruments of varying precision. The following results were obtained:
*   Observation 1: 125.35 m, weight $w_1 = 4$
*   Observation 2: 125.37 m, weight $w_2 = 2$
*   Observation 3: 125.36 m, weight $w_3 = 1$

Find the MPV of the distance AB.

**Solution:**
This is a case of finding the MPV of a directly measured quantity with different weights.

*   **Observation Equations:** Let $X$ be the MPV of the distance.
    *   $v_1 = X - 125.35$
    *   $v_2 = X - 125.37$
    *   $v_3 = X - 125.36$

*   **Weights:**
    *   $w_1 = 4$
    *   $w_2 = 2$
    *   $w_3 = 1$

*   **Apply the Formula for Weighted Mean:**
    $MPV (X) = \frac{\Sigma (w_i X_i)}{\Sigma w_i}$

*   **Calculate:**
    *   $\Sigma (w_i X_i) = (4 \times 125.35) + (2 \times 125.37) + (1 \times 125.36)$
    *   $\Sigma (w_i X_i) = 501.40 + 250.74 + 125.36 = 877.50$
    *   $\Sigma w_i = 4 + 2 + 1 = 7$

*   **MPV:**
    $X = \frac{877.50}{7} = 125.3571 \text{ m}$

**Answer:** The MPV of the distance AB is approximately 125.357 m.

#### 6.3. Example: Computing indirectly observed quantities (Angles in a triangle)

**Problem:** In a triangle ABC, the angles were measured with different precisions. The sum of the angles in a triangle must be 180 degrees. Find the MPV of each angle using the method of normal equations.

*   Observed Angle A ($A_{obs}$): $50^\circ 15' 30''$, weight $w_A = 2$
*   Observed Angle B ($B_{obs}$): $60^\circ 20' 40''$, weight $w_B = 3$
*   Observed Angle C ($C_{obs}$): $69^\circ 23' 50''$, weight $w_C = 1$

**Condition:** $A + B + C = 180^\circ$

**Solution:**

1.  **Convert angles to decimal degrees:**
    *   $A_{obs} = 50^\circ 15' 30'' = 50 + 15/60 + 30/3600 = 50.258333^\circ$
    *   $B_{obs} = 60^\circ 20' 40'' = 60 + 20/60 + 40/3600 = 60.344444^\circ$
    *   $C_{obs} = 69^\circ 23' 50'' = 69 + 23/60 + 50/3600 = 69.397222^\circ$

2.  **Formulate Observation Equations:**
    Let the MPVs be $A$, $B$, and $C$. Let the residuals be $v_A$, $v_B$, $v_C$.
    *   $v_A = A - A_{obs}$
    *   $v_B = B - B_{obs}$
    *   $v_C = C - C_{obs}$

3.  **Formulate the Condition Equation:**
    The sum of the true angles must be $180^\circ$.
    $A + B + C = 180^\circ$

    This can be written in the form of a condition equation for adjustment:
    $A + B + C - 180^\circ = 0$

    Alternatively, we can express the relationship using the observed values and residuals:
    $(A_{obs} + v_A) + (B_{obs} + v_B) + (C_{obs} + v_C) = 180^\circ$
    $v_A + v_B + v_C = 180^\circ - (A_{obs} + B_{obs} + C_{obs})$

    Calculate the sum of observed angles:
    $A_{obs} + B_{obs} + C_{obs} = 50.258333^\circ + 60.344444^\circ + 69.397222^\circ = 180.000000^\circ$
    *(In this specific example, the sum is exactly 180 degrees, which means there's no misclosure for the condition. This simplifies the adjustment. If there were a misclosure, say $W$, the equation would be $v_A + v_B + v_C = W$.)*

    In this case, we are adjusting values based on their weights to satisfy the condition. We want to find $A$, $B$, $C$ such that they are close to their observed values and satisfy the condition $A+B+C=180^\circ$.

    Let's define the adjustment equations:
    *   $A = A_{obs} + v_A$
    *   $B = B_{obs} + v_B$
    *   $C = C_{obs} + v_C$

    The condition equation is $A+B+C = 180^\circ$.
    Substituting the above into the condition:
    $(A_{obs} + v_A) + (B_{obs} + v_B) + (C_{obs} + v_C) = 180^\circ$
    $v_A + v_B + v_C = 180^\circ - (A_{obs} + B_{obs} + C_{obs})$

    Let's assume for a moment the sum was slightly off, e.g., $180^\circ 0' 5''$.
    Then $W = 5'' = 5/3600^\circ$.
    The condition equation would be $v_A + v_B + v_C = W$.

    In our case, $W = 0$. So, $v_A + v_B + v_C = 0$.

4.  **Apply Least Squares Principle:** We need to minimize $\Sigma w_i v_i^2$, which is $w_A v_A^2 + w_B v_B^2 + w_C v_C^2$.
    We have the constraint $v_A + v_B + v_C = 0$.

    Using Lagrange multipliers or by substitution:
    From the constraint, $v_A = -v_B - v_C$.
    Substitute into the objective function:
    Minimize $F = w_A (-v_B - v_C)^2 + w_B v_B^2 + w_C v_C^2$
    $F = w_A (v_B^2 + 2 v_B v_C + v_C^2) + w_B v_B^2 + w_C v_C^2$

    Take partial derivatives with respect to $v_B$ and $v_C$ and set them to zero:
    $\frac{\partial F}{\partial v_B} = w_A (2 v_B + 2 v_C) + 2 w_B v_B = 0$
    $w_A v_B + w_A v_C + w_B v_B = 0$
    $(w_A + w_B) v_B + w_A v_C = 0$  (Equation 1)

    $\frac{\partial F}{\partial v_C} = w_A (2 v_B + 2 v_C) + 2 w_C v_C = 0$
    $w_A v_B + w_A v_C + w_C v_C = 0$
    $w_A v_B + (w_A + w_C) v_C = 0$  (Equation 2)

5.  **Substitute Weights and Solve:**
    $w_A = 2$, $w_B = 3$, $w_C = 1$

    Equation 1: $(2 + 3) v_B + 2 v_C = 0 \implies 5 v_B + 2 v_C = 0$
    Equation 2: $2 v_B + (2 + 1) v_C = 0 \implies 2 v_B + 3 v_C = 0$

    From Eq 1: $v_C = -\frac{5}{2} v_B$
    Substitute into Eq 2:
    $2 v_B + 3 (-\frac{5}{2} v_B) = 0$
    $2 v_B - \frac{15}{2} v_B = 0$
    $(\frac{4 - 15}{2}) v_B = 0$
    $-\frac{11}{2} v_B = 0 \implies v_B = 0$

    If $v_B = 0$, then $v_C = -\frac{5}{2} (0) = 0$.
    From the constraint $v_A + v_B + v_C = 0$, we get $v_A + 0 + 0 = 0 \implies v_A = 0$.

    **This result (all residuals are zero) occurs because the sum of the observed angles perfectly matched the condition (180 degrees).**

6.  **Calculate MPV of Angles:**
    *   $A = A_{obs} + v_A = 50.258333^\circ + 0^\circ = 50.258333^\circ$
    *   $B = B_{obs} + v_B = 60.344444^\circ + 0^\circ = 60.344444^\circ$
    *   $C = C_{obs} + v_C = 69.397222^\circ + 0^\circ = 69.397222^\circ$

    **Convert back to degrees, minutes, seconds:**
    *   $A = 50^\circ 15' 30''$
    *   $B = 60^\circ 20' 40''$
    *   $C = 69^\circ 23' 50''$

    **What if there was a misclosure?**
    Let's assume the sum of observed angles was $180^\circ 0' 5''$. So, $W = 5/3600^\circ$.
    The condition equation is $v_A + v_B + v_C = W$.
    The sum of weighted squares to minimize is $2 v_A^2 + 3 v_B^2 + 1 v_C^2$.

    Using the normal equation approach for *conditional adjustments* (related to indirect adjustments), the adjustment for each observation is proportional to its weight and the misclosure, distributed inversely proportional to the weights.
    Alternatively, let's stick to the fundamental least squares idea using observation equations and a condition equation.

    A more direct way to handle this *type* of problem (adjustment of angles in a triangle) is to recognize that the adjustments are distributed such that the sum of adjustments equals the misclosure ($W$), and the magnitude of adjustment is inversely proportional to weight.
    The adjustment for an angle $i$ is $v_i = - \frac{w_i}{w_A+w_B+w_C} W$. (This formula is for a specific case where $x_i = X_i + v_i$ and $\Sigma x_i = \Sigma X_i + W$, and we want to minimize $\Sigma w_i v_i^2$).
    Sum of weights = $2 + 3 + 1 = 6$.

    If $W = 5/3600^\circ$:
    *   $v_A = - \frac{2}{6} \times \frac{5}{3600}^\circ = - \frac{1}{3} \times \frac{5}{3600}^\circ = - \frac{5}{10800}^\circ$
    *   $v_B = - \frac{3}{6} \times \frac{5}{3600}^\circ = - \frac{1}{2} \times \frac{5}{3600}^\circ = - \frac{5}{7200}^\circ$
    *   $v_C = - \frac{1}{6} \times \frac{5}{3600}^\circ = - \frac{5}{21600}^\circ$

    Convert these adjustments to seconds:
    *   $v_A = - \frac{5}{10800} \times 3600'' = - \frac{18000}{10800}'' = -1.67''$
    *   $v_B = - \frac{5}{7200} \times 3600'' = - \frac{18000}{7200}'' = -2.50''$
    *   $v_C = - \frac{5}{21600} \times 3600'' = - \frac{18000}{21600}'' = -0.83''$

    Sum of adjustments: $-1.67 - 2.50 - 0.83 = -5.00''$. This equals $-W$, which is correct.

    MPV Angles:
    *   $A = 50^\circ 15' 30'' - 1.67'' = 50^\circ 15' 28.33''$
    *   $B = 60^\circ 20' 40'' - 2.50'' = 60^\circ 20' 37.50''$
    *   $C = 69^\circ 23' 50'' - 0.83'' = 69^\circ 23' 49.17''$

    Sum of MPV angles: $50^\circ 15' 28.33'' + 60^\circ 20' 37.50'' + 69^\circ 23' 49.17'' = 180^\circ 0' 55.00''$. Hmm, something is off in the conversion or calculation. Let's re-verify.

    The total misclosure is $W = 5'' = 5/3600$ degrees.
    The adjustment to each observation $i$ is $v_i = \frac{-w_i}{\sum w_j} W$.
    Total sum of weights $S = w_A + w_B + w_C = 2 + 3 + 1 = 6$.

    $v_A = \frac{-2}{6} \times \frac{5}{3600} = -\frac{1}{3} \times \frac{5}{3600} = -\frac{5}{10800}$ degrees.
    $v_B = \frac{-3}{6} \times \frac{5}{3600} = -\frac{1}{2} \times \frac{5}{3600} = -\frac{5}{7200}$ degrees.
    $v_C = \frac{-1}{6} \times \frac{5}{3600} = -\frac{5}{21600}$ degrees.

    To convert to seconds: multiply by 3600.
    $v_A = -\frac{5}{10800} \times 3600 = -\frac{18000}{10800} = -1.6667''$
    $v_B = -\frac{5}{7200} \times 3600 = -\frac{18000}{7200} = -2.5''$
    $v_C = -\frac{5}{21600} \times 3600 = -\frac{18000}{21600} = -0.8333''$

    Sum of adjustments $= -1.6667 - 2.5 - 0.8333 = -5''$. This is correct.

    MPV of angles:
    $A = 50^\circ 15' 30'' - 1.6667'' = 50^\circ 15' 28.3333''$
    $B = 60^\circ 20' 40'' - 2.5'' = 60^\circ 20' 37.5000''$
    $C = 69^\circ 23' 50'' - 0.8333'' = 69^\circ 23' 49.1667''$

    Sum of MPV angles: $50^\circ 15' 28.3333'' + 60^\circ 20' 37.5000'' + 69^\circ 23' 49.1667'' = 180^\circ 0' 55.0000''$. Wait, this is not 180 degrees. The sum of the MPVs must satisfy the condition exactly.

    The issue here is how the adjustments are applied. When adjusting angles, you add the *correction* (which is the negative of the adjustment $v_i$) to the observed value.
    Corrected Angle $A = A_{obs} - (\text{adjustment to } A)$

    Let's use the standard terminology: corrections ($c_i$) are applied to the observations ($X_i$) to get the most probable values ($V_i$): $V_i = X_i + c_i$.
    The sum of corrections must equal the misclosure: $\Sigma c_i = W$.
    The weighted sum of squares of corrections is minimized: $\Sigma w_i c_i^2$.
    The relationship between corrections and weights is $c_i = \frac{-w_i}{\sum w_j} W$.

    So, the corrections are:
    $c_A = 1.6667''$
    $c_B = 2.5''$
    $c_C = 0.8333''$

    MPV Angles:
    $A = 50^\circ 15' 30'' + 1.6667'' = 50^\circ 15' 31.6667''$
    $B = 60^\circ 20' 40'' + 2.5'' = 60^\circ 20' 42.5000''$
    $C = 69^\circ 23' 50'' + 0.8333'' = 69^\circ 23' 50.8333''$

    Sum of MPV angles: $50^\circ 15' 31.6667'' + 60^\circ 20' 42.5000'' + 69^\circ 23' 50.8333'' = 180^\circ 0' 65.0000'' = 180^\circ 1' 5.0000''$. Still not 180.

    **Let's re-think the example structure for indirect quantities using Normal Equations.**
    The previous example was more of a direct adjustment of observations to satisfy a condition. For indirectly observed quantities, we have multiple measurements that are related to the unknowns through a function.

    Consider a traverse where distances and angles are measured, and we want to find the MPV of coordinates of a station.

    Let the true coordinates of station B be $(x_B, y_B)$.
    We measured the distance $d$ and angle $\theta$ from station A $(x_A, y_A)$ to station B.
    The observed values are $d_{obs}$ and $\theta_{obs}$.
    The relationship is:
    $x_B = x_A + d \cos \theta$
    $y_B = y_A + d \sin \theta$

    Let the unknowns be $x_B$ and $y_B$. The observed quantities are $d_{obs}$ and $\theta_{obs}$.
    We have more than one observation for $x_B$ and $y_B$ from different stations.

    **Let's use a simpler indirect quantity: a point P is observed from two stations A and B.**
    Station A: $(0,0)$
    Station B: $(100, 0)$
    Measure angle $\alpha$ from A to P and angle $\beta$ from B to P.
    The unknown is the position of P, $(x_P, y_P)$.

    From station A, we measure angle $\alpha_{obs}$. The line from A to P can be described by the angle $\alpha$.
    The equation relating the coordinates is:
    $y_P = \tan(\alpha_{obs}) \cdot x_P$ (assuming $\alpha_{obs}$ is measured from the positive x-axis at A).
    This is not quite right. The angle is measured from a reference direction. Let's assume a traverse setup.

    **Consider a point P, its coordinates $(x, y)$ are to be determined.**
    We have two measurements from different stations:
    1.  From Station 1 $(x_1, y_1)$, we measure distance $d_1$ and direction $\theta_1$ to P.
        *   $x = x_1 + d_1 \cos \theta_1$
        *   $y = y_1 + d_1 \sin \theta_1$
    2.  From Station 2 $(x_2, y_2)$, we measure distance $d_2$ and direction $\theta_2$ to P.
        *   $x = x_2 + d_2 \cos \theta_2$
        *   $y = y_2 + d_2 \sin \theta_2$

    Here, $d_1, \theta_1, d_2, \theta_2$ are observed values. The unknowns are $x, y$.
    However, the relationship is not linear in terms of observation equations for $x, y$.
    The observation equations should be written in the form $v_i = f(x, y, \text{observations}) = 0$.

    Let's use the angular observations only for simplicity to illustrate normal equations with indirect observations.
    **Problem:** Determine the position of point P $(x, y)$ by measuring the angle from two known stations.
    Station A: $(0,0)$
    Station B: $(100,0)$
    We measure angle $\alpha$ from A to P and angle $\beta$ from B to P.
    Observed values: $\alpha_{obs} = 45^\circ$, $\beta_{obs} = 45^\circ$.
    Weights: $w_\alpha = 1$, $w_\beta = 1$. (Equal weights for simplicity).

    **Observation Equations:**
    The line AP makes angle $\alpha$ with the x-axis.
    The slope of AP is $\tan \alpha$.
    $\frac{y - 0}{x - 0} = \tan \alpha \implies y = x \tan \alpha$
    This is not good if $\alpha = 90^\circ$.
    Let's write it as: $y \cos \alpha - x \sin \alpha = 0$.

    The line BP makes angle $\beta$ with the x-axis (measured from B). So, the angle with the positive x-axis is $\beta_{ref} = 180^\circ - \beta$ if P is above AB. Or, let's be more precise. The angle measured from B to P.
    The slope of BP is $\frac{y - 0}{x - 100}$.
    The angle that BP makes with the line BA (pointing left) is $\beta$.
    The angle that BP makes with the positive x-axis is $180^\circ - \beta$.
    So, $\frac{y}{x-100} = \tan(180^\circ - \beta) = -\tan \beta$.
    $y = -\tan \beta (x - 100)$
    $y = -x \tan \beta + 100 \tan \beta$
    $x \tan \beta + y - 100 \tan \beta = 0$.

    Let's write these in a linear form using approximations or by considering the deviations.
    The standard approach for angular measurements is to write the observation equations involving the angles.
    From A: $y = x \tan \alpha$
    From B: $y = (x-100) \tan(180^\circ - \beta) = -(x-100) \tan \beta$

    Let the true angles be $\alpha$ and $\beta$, and true coordinates be $x, y$.
    We have observed values $\alpha_{obs}$ and $\beta_{obs}$.
    Let $\alpha = \alpha_{obs} + v_\alpha$ and $\beta = \beta_{obs} + v_\beta$.
    Let $x = x_{obs} + v_x$ and $y = y_{obs} + v_y$.

    This is becoming complicated for a simple illustration without proper linearisation.
    Let's use a simplified example of indirectly observed quantities that are more amenable to direct linearisation for demonstration.

    **Example: Determining the MPV of a line segment by measuring its parts.**
    Let the length of a line segment AB be $L$. We measured it in two parts:
    *   AC: $L_1 = 100.00$ m, weight $w_1 = 2$
    *   CB: $L_2 = 150.00$ m, weight $w_2 = 1$
    We know that $L = L_1 + L_2$.
    We also measured the total length AB directly:
    *   AB: $L_3 = 250.05$ m, weight $w_3 = 3$

    Here, the directly measured quantities are $L_1, L_2, L_3$. We want to find the MPV of the true length of AB.
    The relationship is $L = L_1 + L_2$. This is a condition.
    We have three observed values for essentially the same quantity, with associated weights.

    This is again more like an adjustment problem. Let's focus on the core idea of normal equations for computing indirectly observed quantities.

    **Let's consider a system of linear observation equations:**
    Suppose we want to determine two unknown quantities, $x$ and $y$.
    We have the following measurements:

    *   Measurement 1: $2x + 3y = 10$, weight $w_1 = 2$
    *   Measurement 2: $1x + 2y = 7$, weight $w_2 = 3$
    *   Measurement 3: $3x + 4y = 13$, weight $w_3 = 1$

    This is an overdetermined system (3 equations, 2 unknowns). We will use least squares to find the MPV of $x$ and $y$.

    **Steps:**
    1.  **Observation Equations (in the form $v_i = a_i x + b_i y - L_i$):**
        *   Eq 1: $v_1 = 2x + 3y - 10$
        *   Eq 2: $v_2 = 1x + 2y - 7$
        *   Eq 3: $v_3 = 3x + 4y - 13$

    2.  **Weights:**
        *   $w_1 = 2$
        *   $w_2 = 3$
        *   $w_3 = 1$

    3.  **Formulate Normal Equations:**
        The general form of normal equations for two unknowns $x$ and $y$ is:
        *   $\Sigma w a^2 \cdot x + \Sigma w ab \cdot y = \Sigma w a L$
        *   $\Sigma w ab \cdot x + \Sigma w b^2 \cdot y = \Sigma w b L$

        Let's calculate the required sums:
        *   **For Eq 1:** $a_1=2, b_1=3, L_1=10, w_1=2$
            *   $w_1 a_1^2 = 2 \times (2)^2 = 8$
            *   $w_1 a_1 b_1 = 2 \times 2 \times 3 = 12$
            *   $w_1 b_1^2 = 2 \times (3)^2 = 18$
            *   $w_1 a_1 L_1 = 2 \times 2 \times 10 = 40$
            *   $w_1 b_1 L_1 = 2 \times 3 \times 10 = 60$

        *   **For Eq 2:** $a_2=1, b_2=2, L_2=7, w_2=3$
            *   $w_2 a_2^2 = 3 \times (1)^2 = 3$
            *   $w_2 a_2 b_2 = 3 \times 1 \times 2 = 6$
            *   $w_2 b_2^2 = 3 \times (2)^2 = 12$
            *   $w_2 a_2 L_2 = 3 \times 1 \times 7 = 21$
            *   $w_2 b_2 L_2 = 3 \times 2 \times 7 = 42$

        *   **For Eq 3:** $a_3=3, b_3=4, L_3=13, w_3=1$
            *   $w_3 a_3^2 = 1 \times (3)^2 = 9$
            *   $w_3 a_3 b_3 = 1 \times 3 \times 4 = 12$
            *   $w_3 b_3^2 = 1 \times (4)^2 = 16$
            *   $w_3 a_3 L_3 = 1 \times 3 \times 13 = 39$
            *   $w_3 b_3 L_3 = 1 \times 4 \times 13 = 52$

        Now, sum these values:
        *   $\Sigma w a^2 = 8 + 3 + 9 = 20$
        *   $\Sigma w ab = 12 + 6 + 12 = 30$
        *   $\Sigma w b^2 = 18 + 12 + 16 = 46$
        *   $\Sigma w a L = 40 + 21 + 39 = 100$
        *   $\Sigma w b L = 60 + 42 + 52 = 154$

        The system of normal equations is:
        *   $20x + 30y = 100$
        *   $30x + 46y = 154$

    4.  **Solve the System of Normal Equations:**
        We can simplify the first equation by dividing by 10:
        *   $2x + 3y = 10$  (Eq N1')
        *   $30x + 46y = 154$ (Eq N2)

        From Eq N1', $2x = 10 - 3y \implies x = 5 - 1.5y$.
        Substitute this into Eq N2:
        $30(5 - 1.5y) + 46y = 154$
        $150 - 45y + 46y = 154$
        $y = 154 - 150$
        $y = 4$

        Now substitute the value of $y$ back into the expression for $x$:
        $x = 5 - 1.5(4)$
        $x = 5 - 6$
        $x = -1$

    **Answer:** The MPV of $x$ is -1 and the MPV of $y$ is 4.

    **Check the residuals:**
    *   Eq 1: $2(-1) + 3(4) - 10 = -2 + 12 - 10 = 0$. $v_1 = 0$.
    *   Eq 2: $1(-1) + 2(4) - 7 = -1 + 8 - 7 = 0$. $v_2 = 0$.
    *   Eq 3: $3(-1) + 4(4) - 13 = -3 + 16 - 13 = 0$. $v_3 = 0$.

    In this specific example, the "observed" values happened to be consistent with the computed MPVs, leading to zero residuals. This is a perfectly determined system if we didn't have weights. With weights, the least squares solution finds the best fit.

    If the observation equations were based on actual measurements, we would likely have non-zero residuals, and the system of normal equations would provide the values that minimize the sum of weighted squared residuals.

### 7. Practice Questions/Exercises

**Question 1:**
A distance was measured four times, yielding the following values: 250.12 m, 250.10 m, 250.13 m, 250.11 m. Assuming equal weights, calculate the Most Probable Value (MPV) of the distance.

**Question 2:**
A certain quantity was measured three times with different precisions. The results and their assigned weights are:
*   Observation 1: 15.75, weight $w_1 = 3$
*   Observation 2: 15.78, weight $w_2 = 1$
*   Observation 3: 15.76, weight $w_3 = 2$
Calculate the MPV of the quantity.

**Question 3:**
The following are observation equations for two unknowns, $x$ and $y$, with their corresponding weights:
*   $x + 2y = 5$, $w_1 = 2$
*   $3x + y = 7$, $w_2 = 1$
*   $2x + 3y = 8$, $w_3 = 3$
Formulate the normal equations for this system. (Do not solve them).

**Question 4:**
In a traverse, a line segment AB was measured. The following data was obtained:
*   Length AB = 200.00 m, weight = 5
*   Length AC = 120.00 m, weight = 3
*   Length CB = 80.05 m, weight = 2
Where C is a point on AB. Use the principles of least squares to adjust the measurements and find the MPV of the lengths AC, CB, and AB such that the condition $AC + CB = AB$ is satisfied.

### 8. Answers to Practice Questions

**Answer 1:**
*   Sum of observations = 250.12 + 250.10 + 250.13 + 250.11 = 1000.46 m
*   Number of observations (n) = 4
*   MPV = 1000.46 m / 4 = **250.115 m**

**Answer 2:**
*   $\Sigma (w_i X_i) = (3 \times 15.75) + (1 \times 15.78) + (2 \times 15.76)$
*   $\Sigma (w_i X_i) = 47.25 + 15.78 + 31.52 = 94.55$
*   $\Sigma w_i = 3 + 1 + 2 = 6$
*   MPV = 94.55 / 6 = **15.7583**

**Answer 3:**
The general form of normal equations is:
$\Sigma w a^2 \cdot x + \Sigma w ab \cdot y = \Sigma w a L$
$\Sigma w ab \cdot x + \Sigma w b^2 \cdot y = \Sigma w b L$

Let's calculate the sums:
*   **Eq 1:** $a_1=1, b_1=2, L_1=5, w_1=2$
    *   $w_1 a_1^2 = 2(1)^2 = 2$
    *   $w_1 a_1 b_1 = 2(1)(2) = 4$
    *   $w_1 b_1^2 = 2(2)^2 = 8$
    *   $w_1 a_1 L_1 = 2(1)(5) = 10$
    *   $w_1 b_1 L_1 = 2(2)(5) = 20$

*   **Eq 2:** $a_2=3, b_2=1, L_2=7, w_2=1$
    *   $w_2 a_2^2 = 1(3)^2 = 9$
    *   $w_2 a_2 b_2 = 1(3)(1) = 3$
    *   $w_2 b_2^2 = 1(1)^2 = 1$
    *   $w_2 a_2 L_2 = 1(3)(7) = 21$
    *   $w_2 b_2 L_2 = 1(1)(7) = 7$

*   **Eq 3:** $a_3=2, b_3=3, L_3=8, w_3=3$
    *   $w_3 a_3^2 = 3(2)^2 = 12$
    *   $w_3 a_3 b_3 = 3(2)(3) = 18$
    *   $w_3 b_3^2 = 3(3)^2 = 27$
    *   $w_3 a_3 L_3 = 3(2)(8) = 48$
    *   $w_3 b_3 L_3 = 3(3)(8) = 72$

Summing the terms:
*   $\Sigma w a^2 = 2 + 9 + 12 = 23$
*   $\Sigma w ab = 4 + 3 + 18 = 25$
*   $\Sigma w b^2 = 8 + 1 + 27 = 36$
*   $\Sigma w a L = 10 + 21 + 48 = 79$
*   $\Sigma w b L = 20 + 7 + 72 = 99$

The Normal Equations are:
*   **$23x + 25y = 79$**
*   **$25x + 36y = 99$**

**Answer 4:**
This is a case of adjusting observations to satisfy a condition. Let the true lengths be $AC^*$, $CB^*$, and $AB^*$.
We are given:
*   $AC_{obs} = 120.00$, $w_{AC} = 3$
*   $CB_{obs} = 80.05$, $w_{CB} = 2$
*   $AB_{obs} = 200.00$, $w_{AB} = 5$
Condition: $AC^* + CB^* = AB^*$

Let the corrections be $c_{AC}$, $c_{CB}$, $c_{AB}$.
$AC^* = AC_{obs} + c_{AC}$
$CB^* = CB_{obs} + c_{CB}$
$AB^* = AB_{obs} + c_{AB}$

Substituting into the condition:
$(AC_{obs} + c_{AC}) + (CB_{obs} + c_{CB}) = AB_{obs} + c_{AB}$
$c_{AC} + c_{CB} - c_{AB} = AB_{obs} - AC_{obs} - CB_{obs}$

Calculate the misclosure ($W$):
$W = AB_{obs} - AC_{obs} - CB_{obs} = 200.00 - 120.00 - 80.05 = -0.05$ m

So, the condition for corrections is $c_{AC} + c_{CB} - c_{AB} = -0.05$.

We need to minimize $\Sigma w_i c_i^2 = w_{AC} c_{AC}^2 + w_{CB} c_{CB}^2 + w_{AB} c_{AB}^2$.

This is a conditional adjustment problem. The adjustments are made in such a way that the magnitudes of adjustments are inversely proportional to weights.
The adjustment for an observation with weight $w_i$ is $c_i = \frac{-w_i}{\sum w_j} W$, where $W$ is the misclosure.

Here, the condition is $AC+CB-AB=0$. The misclosure is $W=-0.05$.
The weights are $w_{AC}=3, w_{CB}=2, w_{AB}=5$.
Sum of weights = $3 + 2 + 5 = 10$.

*   $c_{AC} = \frac{-w_{AC}}{\sum w_j} W = \frac{-3}{10} (-0.05) = \frac{0.15}{10} = 0.015$ m
*   $c_{CB} = \frac{-w_{CB}}{\sum w_j} W = \frac{-2}{10} (-0.05) = \frac{0.10}{10} = 0.010$ m
*   $c_{AB} = \frac{-w_{AB}}{\sum w_j} W = \frac{-5}{10} (-0.05) = \frac{0.25}{10} = 0.025$ m

Note: The signs in the $c_i = \frac{-w_i}{\sum w_j} W$ formula are often derived assuming the form $v_1 + v_2 - v_3 = W$. If the form was $v_1 + v_2 + v_3 = W$, the sign would flip. Let's check our condition: $c_{AC} + c_{CB} + (-c_{AB}) = -0.05$. If we consider $-c_{AB}$ as $c_{AB}'$ with weight $w_{AB}$.

Let's re-evaluate the adjustment distribution. The rule is that the correction applied to an observation is proportional to its weight, distributed to resolve the misclosure.

Corrected values:
*   $AC^* = AC_{obs} + c_{AC} = 120.00 + 0.015 = 120.015$ m
*   $CB^* = CB_{obs} + c_{CB} = 80.05 + 0.010 = 80.060$ m
*   $AB^* = AB_{obs} + c_{AB} = 200.00 + 0.025 = 200.025$ m

Check the condition: $AC^* + CB^* = 120.015 + 80.060 = 200.075$ m. This does not equal $AB^* = 200.025$ m.

**There's a subtle point in applying weights and conditions.** When weights are involved in a conditional adjustment, the corrections are *inversely* proportional to the weights.
$c_i \propto \frac{1}{w_i}$

Let's try the approach where the adjustment is distributed inversely proportional to weights for a condition.
The adjustments are $c_{AC}, c_{CB}, c_{AB}$.
$c_{AC} + c_{CB} - c_{AB} = -0.05$

The general form of adjustment for a condition $a_1 x_1 + a_2 x_2 + \dots + a_n x_n = W$, where $x_i = X_i + c_i$ is minimized $\sum w_i c_i^2$.
The correction $c_i$ is given by $c_i = \frac{-a_i \cdot w_i \cdot k}{\sum (a_i^2 \cdot w_i)}$, where $k$ is a proportionality constant determined by the misclosure.

For our condition $1 \cdot AC + 1 \cdot CB - 1 \cdot AB = -0.05$:
$a_{AC}=1, a_{CB}=1, a_{AB}=-1$.
Weights are $w_{AC}=3, w_{CB}=2, w_{AB}=5$.

$c_{AC} = \frac{-1 \cdot 3 \cdot k}{1^2 \cdot 3 + 1^2 \cdot 2 + (-1)^2 \cdot 5} = \frac{-3k}{3+2+5} = \frac{-3k}{10}$
$c_{CB} = \frac{-1 \cdot 2 \cdot k}{10} = \frac{-2k}{10}$
$c_{AB} = \frac{-(-1) \cdot 5 \cdot k}{10} = \frac{5k}{10}$

Sum of corrections: $c_{AC} + c_{CB} + c_{AB} = \frac{-3k}{10} + \frac{-2k}{10} + \frac{5k}{10} = 0$. This is not right.

**Let's use the concept of "unit weight" for adjustments.**
The misclosure $W = -0.05$.
The sum of weights = 10.

The adjustment to each measurement is given by:
Correction for $AC = (\frac{\text{total misclosure}}{\text{sum of weights}}) \times (\text{weight of AC})$
No, this is for direct measurements.

**Correct approach for weighted conditional adjustment:**
The total misclosure of $0.05$ (in magnitude) needs to be distributed. The amount of correction to each measurement is inversely proportional to its weight.

Let the corrections be $c_{AC}, c_{CB}, c_{AB}$.
$c_{AC} + c_{CB} - c_{AB} = -0.05$.

The principle is that the "effort" to correct each observation is proportional to its weight.
The corrections to be applied are distributed such that the sum of the corrected values meets the condition.

Consider the "total weight" for the condition as sum of weights: $W_{total} = 3 + 2 + 5 = 10$.
The misclosure $W = -0.05$.

The adjustment to be applied to each measurement is proportional to its weight.
Correction for AC: $c_{AC} = - (\frac{w_{AC}}{W_{total}}) \times W = - (\frac{3}{10}) \times (-0.05) = 0.015$
Correction for CB: $c_{CB} = - (\frac{w_{CB}}{W_{total}}) \times W = - (\frac{2}{10}) \times (-0.05) = 0.010$
Correction for AB: $c_{AB} = - (\frac{w_{AB}}{W_{total}}) \times W = - (\frac{5}{10}) \times (-0.05) = 0.025$

These are the values for $c_{AC}, c_{CB}, c_{AB}$ which should satisfy the condition.
Let's check the sum of corrections $c_{AC} + c_{CB} - c_{AB} = 0.015 + 0.010 - 0.025 = 0.025 - 0.025 = 0$. This is not equal to the misclosure.

**The corrections should be applied such that the *sum of weighted squares of corrections* is minimized.**

The correction applied to an observation $i$ is $c_i = \frac{-w_i \cdot k}{\sum w_i}$. This is for a simple condition like summing up.

Let's use the standard adjustment formula:
For condition $a_1 x_1 + \dots + a_n x_n = W$, with $x_i = X_i + c_i$, we minimize $\sum w_i c_i^2$.
The correction $c_i$ is proportional to $\frac{-a_i w_i}{\sum a_i^2 w_i}$.

In $AC + CB - AB = -0.05$:
$a_{AC}=1, w_{AC}=3$
$a_{CB}=1, w_{CB}=2$
$a_{AB}=-1, w_{AB}=5$

Sum of $a_i^2 w_i = (1^2 \times 3) + (1^2 \times 2) + ((-1)^2 \times 5) = 3 + 2 + 5 = 10$.
Correction $c_{AC} = \frac{-1 \cdot 3 \cdot k}{10}$
Correction $c_{CB} = \frac{-1 \cdot 2 \cdot k}{10}$
Correction $c_{AB} = \frac{-(-1) \cdot 5 \cdot k}{10} = \frac{5k}{10}$

Summing the corrections to satisfy the condition:
$c_{AC} + c_{CB} - c_{AB} = -0.05$
$\frac{-3k}{10} + \frac{-2k}{10} - \frac{5k}{10} = -0.05$
$\frac{-10k}{10} = -0.05 \implies -k = -0.05 \implies k = 0.05$.

Now calculate the corrections:
$c_{AC} = \frac{-3 \times 0.05}{10} = -0.015$ m
$c_{CB} = \frac{-2 \times 0.05}{10} = -0.010$ m
$c_{AB} = \frac{5 \times 0.05}{10} = 0.025$ m

Adjusted Values:
*   $AC^* = AC_{obs} + c_{AC} = 120.00 - 0.015 = 119.985$ m
*   $CB^* = CB_{obs} + c_{CB} = 80.05 - 0.010 = 80.040$ m
*   $AB^* = AB_{obs} + c_{AB} = 200.00 + 0.025 = 200.025$ m

Check condition: $AC^* + CB^* = 119.985 + 80.040 = 199.995$ m. This is not $AB^* = 200.025$ m. The sum of corrections must equal the misclosure.

**Let's re-examine the formula for correction distribution.**
For a condition $a_1 x_1 + \dots + a_n x_n = W$, where $x_i = X_i + c_i$. The minimization of $\sum w_i c_i^2$ leads to $c_i = \frac{-a_i w_i K}{\sum a_j^2 w_j}$. This $K$ is found from the condition.

Our condition is $1 \cdot AC + 1 \cdot CB - 1 \cdot AB = -0.05$.
$a_{AC}=1, a_{CB}=1, a_{AB}=-1$.
$w_{AC}=3, w_{CB}=2, w_{AB}=5$.
$\sum a_j^2 w_j = 1^2(3) + 1^2(2) + (-1)^2(5) = 3+2+5 = 10$.

$c_{AC} = \frac{-1 \cdot 3 \cdot K}{10} = -0.3 K$
$c_{CB} = \frac{-1 \cdot 2 \cdot K}{10} = -0.2 K$
$c_{AB} = \frac{-(-1) \cdot 5 \cdot K}{10} = 0.5 K$

Substitute into the condition:
$(-0.3 K) + (-0.2 K) - (0.5 K) = -0.05$
$-0.5 K - 0.5 K = -0.05$
$-1.0 K = -0.05 \implies K = 0.05$.

Now, calculate the corrections:
$c_{AC} = -0.3 \times 0.05 = -0.015$ m
$c_{CB} = -0.2 \times 0.05 = -0.010$ m
$c_{AB} = 0.5 \times 0.05 = 0.025$ m

Corrected values:
*   $AC^* = 120.00 - 0.015 = 119.985$ m
*   $CB^* = 80.05 - 0.010 = 80.040$ m
*   $AB^* = 200.00 + 0.025 = 200.025$ m

Check condition: $119.985 + 80.040 = 199.995$ m. This should equal $AB^* = 200.025$ m.
There's a sign error in my application of the formula or the condition.

**Let's use the general principle: The adjustment should be distributed so that the sum of weighted squares of corrections is minimized.**
The corrections are proportional to $1/w_i$. Let $c_i = k'/w_i$.
$c_{AC} = k'/3$, $c_{CB} = k'/2$, $c_{AB} = k'/5$.
Condition: $AC^* + CB^* = AB^*$.
$120 + k'/3 + 80.05 + k'/2 = 200 + k'/5$.
$200.05 + k'/3 + k'/2 = 200 + k'/5$.
$k'/3 + k'/2 - k'/5 = -0.05$.
Multiply by 30 (LCM of 3, 2, 5):
$10 k' + 15 k' - 6 k' = -1.5$
$19 k' = -1.5 \implies k' = -1.5 / 19 = -0.07895$.

$c_{AC} = -0.07895 / 3 = -0.0263$ m
$c_{CB} = -0.07895 / 2 = -0.0395$ m
$c_{AB} = -0.07895 / 5 = -0.0158$ m

Check sum: $c_{AC} + c_{CB} - c_{AB} = -0.0263 - 0.0395 - (-0.0158) = -0.0658 + 0.0158 = -0.05$. This matches the misclosure.

Adjusted values:
*   $AC^* = 120.00 - 0.0263 = 119.9737$ m
*   $CB^* = 80.05 - 0.0395 = 80.0105$ m
*   $AB^* = 200.00 - 0.0158 = 199.9842$ m

Check condition: $119.9737 + 80.0105 = 199.9842$ m. This equals $AB^*$.

**Final Answer for Question 4:**
*   MPV of AC = **119.974 m**
*   MPV of CB = **80.011 m**
*   MPV of AB = **199.984 m**

### 9. Important Points to Remember

*   **Errors** are unavoidable in surveying. Understanding their types is key to managing them.
*   **Gross errors** must be identified and eliminated.
*   **Systematic errors** should be corrected or accounted for.
*   **Random errors** are managed using statistical methods, with the Theory of Least Squares being paramount.
*   The **principle of least squares** aims to minimize the sum of the squares of residuals (or weighted residuals).
*   **Weight** of an observation is inversely proportional to the square of its standard deviation or probable error.
*   The **Most Probable Value (MPV)** is the best estimate of the true value based on available observations.
*   The **arithmetic mean** is the MPV for equal-weight observations.
*   The **weighted arithmetic mean** is the MPV for observations with different weights.
*   The **method of normal equations** is a systematic way to solve for unknown quantities in overdetermined systems using the Theory of Least Squares.
*   **Indirectly observed quantities** are computed from direct measurements of related quantities, and least squares is used to find their MPV.

This module provides the foundational understanding for analyzing and adjusting surveying data to achieve reliable results.
