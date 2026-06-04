---
title: "Stability charts (Demo only)"
subject: "FOUNDATION ENGINEERING"
module: "Module 1: Earth pressure "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e30"
status: "completed"
scrapedAt: "2026-05-20T18:48:30.227Z"
---
# FOUNDATION ENGINEERING - Module 1: Earth Pressure

## Topic: Stability Charts (Demo Only)

---

### **Learning Outcomes**

By the end of this topic, you should be able to:

*   Understand the concept and purpose of stability charts in geotechnical engineering.
*   Recognize the factors influencing the stability of slopes and retaining structures that are accounted for in stability charts.
*   Identify the key dimensionless parameters used in stability charts.
*   Interpret and apply simple stability charts to estimate bearing capacity and slope stability.
*   Understand the limitations of using stability charts.

---

### **1. Introduction to Stability Charts**

*   **What are Stability Charts?**
    *   Stability charts are graphical representations that provide a quick and convenient method for estimating the bearing capacity of shallow foundations or the stability of slopes.
    *   They are derived from extensive theoretical analyses and/or numerical simulations (e.g., finite element methods) of failure mechanisms.
    *   They simplify complex geotechnical calculations by relating critical parameters to a dimensionless stability number.

*   **Why Use Stability Charts?**
    *   **Speed and Efficiency:** Offer a rapid way to obtain preliminary design values without performing full, detailed analyses for every case.
    *   **Convenience:** Easy to use for initial site investigations and preliminary designs.
    *   **Educational Tool:** Help in understanding the interrelationship between various soil and geometric parameters affecting stability.

*   **Limitations of Stability Charts:**
    *   **Simplified Assumptions:** Charts are based on simplified assumptions about soil behavior, geometry, and failure modes.
    *   **Limited Applicability:** Each chart is specific to a particular set of conditions (e.g., soil type, foundation shape, slope geometry, surcharge).
    *   **Not a Substitute for Detailed Analysis:** Should not replace rigorous analyses, especially for critical structures or complex conditions.
    *   **Dependence on Input Parameters:** The accuracy of the results is highly dependent on the accuracy of the input soil properties and geometric data.

---

### **2. Key Factors Influencing Stability**

Stability charts are developed by considering the interplay of several key factors. For the purpose of this introductory module, we will focus on the fundamental parameters that underpin these charts.

#### **2.1. Bearing Capacity Stability Charts**

These charts are used to estimate the ultimate bearing capacity ($q_u$) of shallow foundations. The general bearing capacity equation is often the basis:

$q_u = c N_c s_c d_c i_c + q N_q s_q d_q i_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma i_\gamma$

Stability charts for bearing capacity typically simplify this by relating a dimensionless bearing capacity factor to other dimensionless parameters.

*   **Soil Properties:**
    *   **Cohesion ($c$):** The shear strength of the soil at zero normal stress. Crucial for cohesive soils (clays).
    *   **Angle of Internal Friction ($\phi$):** The shear strength of the soil as it depends on the normal stress. Crucial for granular soils (sands and gravels).
    *   **Unit Weight ($\gamma$):** The weight of the soil per unit volume.

*   **Foundation Geometry:**
    *   **Width ($B$):** The smaller dimension of the foundation.
    *   **Length ($L$):** The longer dimension of the foundation.
    *   **Depth of Embedment ($D_f$):** The depth to which the foundation is buried below the ground surface.

*   **Loading Conditions:**
    *   **Surcharge Pressure ($q$):** An external pressure applied to the ground surface around the foundation.
    *   **Load Inclination:** While not always explicitly in simple charts, it affects bearing capacity.

#### **2.2. Slope Stability Charts**

These charts are used to estimate the factor of safety ($FS$) of slopes, typically for cuts, embankments, or natural slopes. The factor of safety is generally defined as the ratio of resisting forces/moments to driving forces/moments.

$FS = \frac{\text{Resisting Forces}}{\text{Driving Forces}}$

*   **Soil Properties:**
    *   **Cohesion ($c$):** Shear strength parameter.
    *   **Angle of Internal Friction ($\phi$):** Shear strength parameter.
    *   **Unit Weight ($\gamma$):** Affects the weight of the soil mass.
    *   **Soil Type:** Affects the shear strength parameters ($c$ and $\phi$).

*   **Slope Geometry:**
    *   **Slope Angle ($\beta$):** The angle of the slope with respect to the horizontal.
    *   **Slope Height ($H$):** The vertical height of the slope.
    *   **Shape of Failure Surface:** Typically assumed to be a circular arc or a planar surface.

*   **External Factors:**
    *   **Surcharge Load ($q$):** Any additional load applied to the crest of the slope.
    *   **Pore Water Pressure:** Crucial factor, often represented by a pore water pressure parameter (e.g., $r_u$ or $m$).

---

### **3. Key Dimensionless Parameters**

Stability charts are constructed by plotting a dimensionless stability number against other relevant dimensionless parameters that capture the complex interactions of soil properties, geometry, and loading.

#### **3.1. For Bearing Capacity:**

*   **Bearing Capacity Factor ($N_c$, $N_q$, $N_\gamma$):** These are functions of $\phi$.
*   **Dimensionless Grouping (Simplified):** Often, bearing capacity charts relate a dimensionless bearing capacity group to a dimensionless friction angle group and a dimensionless width-to-depth ratio. A simplified approach might involve plotting a ratio like $q_u / (c + q)$ against $\phi$ and other factors.

    *   **Example Dimensionless Parameter:**
        *   $\frac{c}{q}$ or $\frac{c}{\gamma B}$: Ratio of cohesion to surcharge or cohesion to soil weight.
        *   $\phi$: Angle of internal friction.
        *   $\frac{B}{L}$: Ratio of foundation width to length.
        *   $\frac{D_f}{B}$: Ratio of embedment depth to foundation width.

#### **3.2. For Slope Stability:**

The most common stability number used in charts is the **Stability Number ($N_s$)** or **Taylor's Stability Number**, often expressed as:

$N_s = \frac{c}{\gamma H}$ (for $\phi = 0$ conditions)

However, for cases with $\phi > 0$, charts typically relate a modified stability number to the slope angle and friction angle.

*   **Key Dimensionless Parameters:**
    *   **Stability Number ($N_s$ or similar):** A grouping of shear strength and geometric parameters. A common form might be:
        *   $N_s = \frac{c}{\gamma H \cos^2 \beta}$ (or variations thereof, depending on the specific chart's derivation)
        *   $N_s = \frac{c}{\gamma H}$ (specifically for $\phi = 0$ analysis)
    *   **Slope Angle ($\beta$):** Angle of the slope.
    *   **Angle of Internal Friction ($\phi$):** Soil property.
    *   **Pore Water Pressure Parameter ($r_u$ or $m$):**
        *   $r_u = \frac{u}{\gamma z}$, where $u$ is pore water pressure, $\gamma$ is unit weight, and $z$ is depth.
        *   $m = \frac{\gamma_w H_w}{\gamma H}$, where $\gamma_w$ is unit weight of water, $H_w$ is height of water table.

---

### **4. Applying Simple Stability Charts (Illustrative Examples)**

**Important Note:** The following are simplified examples using hypothetical charts. Real-world design requires specific charts tailored to the problem.

#### **4.1. Example: Bearing Capacity (Hypothetical Chart)**

**Scenario:** A square footing of width $B = 1.5$ m is to be founded at a depth $D_f = 1.0$ m in a soil with cohesion $c = 25$ kPa, angle of internal friction $\phi = 20^\circ$, and unit weight $\gamma = 18$ kN/m³. The surcharge pressure $q = 10$ kPa.

**Hypothetical Chart:** Imagine a chart that plots the dimensionless bearing capacity factor ($N_c$) against $\phi$ for various values of $D_f/B$. Assume the chart also implicitly accounts for $q$ and shape factors.

**Steps for Hypothetical Chart Application:**

1.  **Calculate Dimensionless Ratios:**
    *   $\phi = 20^\circ$
    *   $D_f/B = 1.0 / 1.5 = 0.67$

2.  **Interpolate/Read from Chart:**
    *   Using the hypothetical chart, locate $\phi = 20^\circ$ on the x-axis.
    *   Find the curve corresponding to $D_f/B = 0.67$.
    *   Read the value of $N_c$ at this intersection. Let's assume from our hypothetical chart, for $\phi = 20^\circ$ and $D_f/B = 0.67$, $N_c \approx 15$. (Note: Real charts would also provide $N_q$ and $N_\gamma$ or combine factors).

3.  **Calculate Ultimate Bearing Capacity ($q_u$):**
    *   Assuming a simplified bearing capacity equation form for this example (ignoring shape, depth, inclination factors for simplicity in this demo): $q_u = c N_c + q N_q + 0.5 \gamma B N_\gamma$.
    *   If we were provided with $N_q \approx 10$ and $N_\gamma \approx 6$ (typical for $\phi=20^\circ$), then:
        $q_u = (25 \text{ kPa}) \times 15 + (10 \text{ kPa}) \times 10 + 0.5 \times (18 \text{ kN/m³}) \times (1.5 \text{ m}) \times 6$
        $q_u = 375 \text{ kPa} + 100 \text{ kPa} + 81 \text{ kPa}$
        $q_u = 556 \text{ kPa}$

    *   **Note:** This is a demonstration. Real charts often directly give a "bearing capacity factor" that combines these terms in a specific way for a given set of conditions.

#### **4.2. Example: Slope Stability (Taylor's Chart Demo)**

**Scenario:** An embankment with a slope angle $\beta = 45^\circ$ and height $H = 10$ m is constructed from a clay soil. The soil has cohesion $c = 30$ kPa, angle of internal friction $\phi = 15^\circ$, and unit weight $\gamma = 19$ kN/m³. The water table is deep below the toe.

**Hypothetical Chart Application (Based on Taylor's Method):**

1.  **Identify Key Parameters:**
    *   $c = 30$ kPa
    *   $\phi = 15^\circ$
    *   $\gamma = 19$ kN/m³
    *   $H = 10$ m
    *   $\beta = 45^\circ$
    *   Pore water pressure is negligible for this example.

2.  **Use a Hypothetical Stability Chart (Taylor's Chart Concept):**
    *   Taylor's chart typically plots the **Stability Number ($N_s$)** on the y-axis against the **Angle of Internal Friction ($\phi$)** on the x-axis.
    *   Different curves on the chart represent different slope angles ($\beta$).
    *   Let's assume a simplified form of $N_s = \frac{c}{\gamma H}$.

3.  **Calculate Required $N_s$ (if the chart gives $c/\gamma H$ vs $\phi$ and $\beta$):**
    *   From a hypothetical chart (similar to those found in geotechnical textbooks for Taylor's analysis), locate $\phi = 15^\circ$ on the x-axis.
    *   Find the curve corresponding to $\beta = 45^\circ$.
    *   Read the value of $N_s$ from the y-axis. Let's assume for $\phi = 15^\circ$ and $\beta = 45^\circ$, $N_s \approx 0.12$ (this is a hypothetical value for demonstration).

4.  **Calculate the Factor of Safety ($FS$):**
    *   The stability number $N_s$ is related to the factor of safety. A common definition is $N_s = \frac{c}{FS \cdot \gamma H}$.
    *   Rearranging to find $FS$: $FS = \frac{c}{N_s \cdot \gamma H}$
    *   Using the hypothetical $N_s = 0.12$:
        $FS = \frac{30 \text{ kPa}}{0.12 \times 19 \text{ kN/m³} \times 10 \text{ m}}$
        $FS = \frac{30 \text{ kPa}}{22.8 \text{ kPa}}$
        $FS \approx 1.32$

    *   **Interpretation:** A factor of safety of 1.32 is generally acceptable for static embankment slopes according to many design codes.

---

### **5. Practice Questions & Exercises**

**Question 1:**
What are the main advantages of using stability charts in foundation engineering?

**Question 2:**
List at least three key dimensionless parameters commonly used in slope stability charts.

**Question 3:**
A proposed footing has a width $B = 2$ m and is to be embedded at a depth $D_f = 1.2$ m. The soil has $\phi = 25^\circ$, $c = 15$ kPa, and $\gamma = 17$ kN/m³. Using a hypothetical stability chart (assume $N_c = 20$ for $\phi = 25^\circ$ and relevant $D_f/B$), calculate the cohesive component of the ultimate bearing capacity, $q_{uc} = c N_c$.

**Question 4:**
An excavated slope has a height $H = 8$ m and a slope angle $\beta = 55^\circ$. The soil is saturated clay with $\phi = 10^\circ$ and $c = 25$ kPa. The unit weight $\gamma_{sat} = 20$ kN/m³. If a stability chart indicates a stability number $N_s = 0.08$ for these conditions, calculate the factor of safety.

---

### **6. Answers to Practice Questions**

**Answer 1:**
The main advantages of using stability charts are:
*   **Speed and Efficiency:** Provide quick preliminary design values.
*   **Convenience:** Easy to use for initial assessments and site investigations.
*   **Educational Value:** Help understand the relationships between different parameters.

**Answer 2:**
Three key dimensionless parameters in slope stability charts are:
*   Stability Number ($N_s$)
*   Slope Angle ($\beta$)
*   Angle of Internal Friction ($\phi$)
*   Pore Water Pressure Parameter ($r_u$ or $m$)

**Answer 3:**
*   $B = 2$ m
*   $D_f = 1.2$ m
*   $\phi = 25^\circ$
*   $c = 15$ kPa
*   Hypothetical $N_c = 20$ for $\phi = 25^\circ$ and relevant $D_f/B$.

The cohesive component of the ultimate bearing capacity is $q_{uc} = c N_c$.
$q_{uc} = 15 \text{ kPa} \times 20$
$q_{uc} = 300 \text{ kPa}$

**Answer 4:**
*   $H = 8$ m
*   $\beta = 55^\circ$
*   $\phi = 10^\circ$
*   $c = 25$ kPa
*   $\gamma_{sat} = 20$ kN/m³
*   Hypothetical $N_s = 0.08$

The factor of safety can be calculated from $N_s = \frac{c}{FS \cdot \gamma H}$ (assuming this definition of $N_s$ for this hypothetical chart).
$FS = \frac{c}{N_s \cdot \gamma H}$
$FS = \frac{25 \text{ kPa}}{0.08 \times 20 \text{ kN/m³} \times 8 \text{ m}}$
$FS = \frac{25 \text{ kPa}}{12.8 \text{ kPa}}$
$FS \approx 1.95$

---

### **7. Important Points to Remember**

*   **Stability charts are tools for *preliminary* design and estimation.** They are not a replacement for rigorous analytical or numerical methods, especially for critical projects.
*   **Always use the *correct* chart for the specific problem.** Charts are developed for particular soil types, failure modes, geometries, and loading conditions.
*   **Accurate input parameters are crucial.** The accuracy of your results depends entirely on the quality of your soil investigation and the determination of soil properties.
*   **Understand the assumptions made in the derivation of the chart.** This helps in assessing the applicability and limitations of the chart for your specific scenario.
*   **Always check for pore water pressure effects.** This is a critical factor in many slope stability problems and is often represented by parameters like $r_u$ or $m$ in specialized charts.
*   **For bearing capacity, remember that charts often simplify the bearing capacity equation by combining factors.** Be clear about what each parameter in the chart represents.

---
