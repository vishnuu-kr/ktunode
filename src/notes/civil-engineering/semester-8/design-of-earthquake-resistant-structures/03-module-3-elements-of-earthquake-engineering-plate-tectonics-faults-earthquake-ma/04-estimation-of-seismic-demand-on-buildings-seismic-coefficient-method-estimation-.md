---
title: "Estimation of Seismic Demand on buildings:  Seismic coefficient method -  Estimation of base shear and its distribution along height based on Equivalent static method using IS 1893 for multi storied buildings."
subject: "DESIGN OF EARTHQUAKE RESISTANT STRUCTURES"
module: "Module 3: Elements of Earthquake Engineering:  Plate tectonics – faults, Earthquake magnitude and intensity, Focus and Epicentre, Energy release and seismic waves. Characteristics of Earthquake, Measurement of ground motion"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8119b9"
status: "completed"
scrapedAt: "2026-05-20T19:02:53.994Z"
---
# Design of Earthquake Resistant Structures - Module 3 Notes

## Topic: Estimation of Seismic Demand on Buildings: Seismic Coefficient Method (Equivalent Static Method using IS 1893)

This topic focuses on determining the forces that an earthquake will impose on a building, allowing us to design the structure to resist these forces. We will be using the **Equivalent Static Method** as outlined in the Indian Standard **IS 1893**.

### 1. Introduction to Seismic Demand

*   **Seismic Demand:** The forces and deformations that a structure is expected to experience during an earthquake.
*   **Goal of Seismic Design:** To ensure that a building can withstand seismic forces without collapsing, protecting lives and property.
*   **Simplification in Equivalent Static Method:** This method simplifies the dynamic nature of earthquakes by representing the time-varying forces as static forces.

---

### 2. Key Concepts and Definitions

*   **Base Shear (V<sub>b</sub>):** The total horizontal force that acts at the base of the structure due to an earthquake. It represents the sum of all horizontal inertial forces developed in the building.

*   **Equivalent Static Method:** A simplified approach where the complex dynamic response of a structure to seismic shaking is represented by a static lateral force distribution.

*   **IS 1893 (Part 1):** The primary Indian standard for seismic design of structures. It provides guidelines and methodologies for calculating seismic forces.

*   **Lateral Force:** Horizontal force acting on the structure.

*   **Inertial Force:** Force generated in a mass due to its acceleration ($F = ma$). In seismic design, the mass of the building and the ground acceleration generate inertial forces.

*   **Load Factors:** Factors applied to different types of loads (dead, live, seismic) to account for uncertainties in their magnitudes and to ensure adequate safety.

*   **Response Reduction Factor (R):** A factor used to account for the ductile behavior of a structure. It reduces the design seismic force to reflect the fact that a ductile structure can deform significantly before failure, absorbing seismic energy.

*   **Ductility:** The ability of a material or structure to undergo large inelastic deformations before fracturing.

*   **Importance Factor (I):** A factor that accounts for the importance of the building and the consequences of its failure. Critical buildings (e.g., hospitals, fire stations) require higher seismic resistance.

*   **Zone Factor (Z):** A factor that represents the seismic intensity of a particular region based on historical earthquake data and seismological studies. India is divided into seismic zones with different Z values.

*   **Average Response Acceleration Coefficient (A<sub>a</sub>) and Average Response Velocity Coefficient (A<sub>v</sub>):** These are seismic zone dependent factors that relate to the expected ground motion characteristics.

*   **Soil Profile Coefficient (S<sub>s</sub>):** A factor that accounts for the amplification of seismic waves due to local soil conditions. Different soil types (rock, stiff soil, soft soil) respond differently to seismic shaking.

*   **Damping:** The dissipation of energy in a vibrating system. In structures, damping helps to reduce the amplitude of oscillations.

*   **Natural Period of Vibration (T):** The time taken for one complete oscillation of a structure when disturbed from its equilibrium position. This is a crucial parameter for seismic design.

---

### 3. Estimation of Base Shear (V<sub>b</sub>) using IS 1893 (Part 1)

The base shear is calculated using the following fundamental formula from IS 1893:

**V<sub>b</sub> = A<sub>h</sub> * W**

Where:

*   **V<sub>b</sub>** is the design horizontal seismic shear force at the base of the structure.
*   **W** is the seismic weight of the building.
*   **A<sub>h</sub>** is the design horizontal acceleration spectrum value.

The **Design Horizontal Acceleration Spectrum Value (A<sub>h</sub>)** is calculated as:

**A<sub>h</sub> = (I * S<sub>a</sub>) / (R * g)**

Where:

*   **I** is the Importance Factor.
*   **S<sub>a</sub>** is the average response acceleration coefficient (obtained from the seismic design spectrum).
*   **R** is the Response Reduction Factor.
*   **g** is the acceleration due to gravity.

**To calculate S<sub>a</sub>:**

IS 1893 provides a seismic design spectrum, which is a plot of Sa versus the natural period (T) of the structure. For a given structure, its natural period (T) needs to be estimated, and then the corresponding S<sub>a</sub> value is obtained from the spectrum.

**IS 1893 provides a simplified formula to estimate the fundamental natural period (T) for buildings:**

**T = 0.1 * N** (for framed buildings)

**T = 0.09 * h<sup>0.75</sup> / √d** (for other buildings)

Where:

*   **N** is the number of storeys in the building (ground storey is storey 1).
*   **h** is the height of the building in meters.
*   **d** is the depth of the building in the direction of the applied force in meters.

**Crucially, the value of S<sub>a</sub> depends on the natural period (T) and soil type. The design spectrum is provided for different soil types (Soft, Medium, Hard).**

**Relationship between S<sub>a</sub>, T, and Soil Type:**

*   For **Hard Soil (Type I)** and **Medium Soil (Type II)**, **S<sub>a</sub> = 2.5** for $0 < T \le 0.1$ s.
*   For **Soft Soil (Type III)**, **S<sub>a</sub> = 2.0** for $0 < T \le 0.1$ s.
*   For **$T > T_g$**: $S_a = \frac{2.5 * T_g}{T}$ (Type I), $S_a = \frac{2.5 * T_g}{T}$ (Type II), $S_a = \frac{2.0 * T_g}{T}$ (Type III).
*   For **$0.1 < T \le T_d$**: $S_a$ varies linearly from 2.5 (or 2.0) to 0.096 (or 0.08) for Types I & II, and 2.0 to 0.08 for Type III.
*   For **$T_d < T \le T_l$**: $S_a$ is constant at 0.096 (or 0.08) for Types I & II, and 0.08 for Type III.
*   For **$T > T_l$**: $S_a$ decreases linearly to 0.0.

**Important Values:**

*   **$T_g$**: The characteristic ground period. For rock and stiff soil, $T_g$ is 0.4 s. For medium soil, $T_g$ is 0.6 s. For soft soil, $T_g$ is 0.9 s.
*   **$T_d$**: The duration of the plateau of the design spectrum. $T_d$ is 0.4 s for Types I & II, and 0.4 s for Type III.
*   **$T_l$**: The lower limit of the long period range. $T_l$ is 4.0 s for Types I & II, and 4.0 s for Type III.

**Therefore, the steps to calculate Base Shear (V<sub>b</sub>) are:**

1.  **Determine Seismic Weight (W):** Calculate the total weight of the building, considering dead loads and applicable live loads at each floor level.
2.  **Determine the Seismic Zone Factor (Z):** Refer to IS 1893 for the seismic zone of the building's location.
3.  **Determine the Importance Factor (I):** Based on the building's function.
4.  **Determine the Response Reduction Factor (R):** Based on the structural system and material.
5.  **Determine the Soil Profile Coefficient (S<sub>s</sub>):** Based on the local soil conditions. (Note: IS 1893 now uses different factors than S<sub>s</sub> directly, but the concept of soil amplification remains). The code provides **A<sub>a</sub>** and **A<sub>v</sub>** based on zone and soil type. **A<sub>h</sub> is calculated as: $A_h = I * \frac{A_a}{R}$ for $T \le T_g$ and $A_h = I * \frac{A_v}{T R}$ for $T > T_g$.** This is a more direct approach in the current IS 1893.
6.  **Estimate the Natural Period (T):** Use the simplified formulas provided in IS 1893.
7.  **Determine the Design Horizontal Acceleration Spectrum Value (S<sub>a</sub>):** Using the calculated T and the seismic design spectrum for the corresponding soil type.
8.  **Calculate A<sub>h</sub>:** Using the formula $A_h = \frac{I * S_a}{R}$ and then $V_b = A_h * W$. (Or using the more direct $A_a$ and $A_v$ approach as mentioned above).

---

### 4. Distribution of Base Shear along the Height of the Building

The total base shear (V<sub>b</sub>) is not uniformly distributed across the height of the building. It is distributed as a set of lateral forces, $F_i$, acting at each floor level $i$. These forces increase with height.

**The lateral force $F_i$ at floor $i$ is given by:**

**$F_i = V_b * (w_i * h_i) / (Σ (w_j * h_j))$**

Where:

*   **$F_i$** is the horizontal force at floor $i$.
*   **$V_b$** is the total base shear.
*   **$w_i$** is the seismic weight of floor $i$.
*   **$h_i$** is the height of floor $i$ from the base.
*   **$Σ (w_j * h_j)$** is the sum of the product of seismic weights and heights for all floors, from the base to the top.

**Important Points about Force Distribution:**

*   The distribution is triangular for single-storey buildings.
*   For multi-storey buildings, the distribution is generally considered as a combination of a triangular and a uniform distribution, meaning forces increase with height. The formula above inherently captures this.
*   A **Twisting Moment** also needs to be considered when the center of mass and center of rigidity do not coincide. This is a more advanced topic, but it's important to note that uneven distribution of mass or stiffness can lead to torsional effects.

---

### 5. Examples and Practice Questions

**Example 1: Calculating Base Shear**

A 10-storey reinforced concrete framed building is located in seismic zone IV. Assume the following:
*   Height of each storey = 3.0 m
*   Average seismic weight per storey = 800 kN
*   Importance Factor (I) = 1.0
*   Response Reduction Factor (R) = 5 (for ductile moment-resisting frame)
*   Soil condition is medium (Type II)
*   Calculate the base shear for the building.

**Solution Approach:**

1.  **Total Seismic Weight (W):** W = 10 storeys * 800 kN/storey = 8000 kN
2.  **Seismic Zone Factor (Z):** For Zone IV, Z = 0.24 (refer to IS 1893 for exact values).
3.  **Importance Factor (I):** Given = 1.0
4.  **Response Reduction Factor (R):** Given = 5
5.  **Soil Profile:** Medium (Type II). For medium soil, $T_g = 0.6$ s, $T_d = 0.4$ s, $T_l = 4.0$ s.
6.  **Estimate Natural Period (T):**
    T = 0.1 * N = 0.1 * 10 = 1.0 s
7.  **Determine S<sub>a</sub>:**
    Since T = 1.0 s and $T_d = 0.4$ s, and $T_l = 4.0$ s, we are in the range $T_d < T \le T_l$.
    For Medium soil (Type II), $S_a$ is constant at 0.096 for $0.4 < T \le 4.0$.
    So, $S_a = 0.096$.
8.  **Calculate A<sub>h</sub>:**
    $A_h = \frac{I * S_a}{R} = \frac{1.0 * 0.096}{5} = 0.0192$
    *(Note: The IS 1893 code uses A<sub>a</sub> and A<sub>v</sub>. Let's use that approach as it's more aligned with current codes. For Z=0.24 and Medium Soil, A<sub>a</sub> = 0.18 and A<sub>v</sub> = 0.20. Since T=1.0s > T<sub>g</sub>=0.6s, we use A<sub>v</sub>)*
    $A_h = \frac{I * A_v}{T * R} = \frac{1.0 * 0.20}{1.0 * 5} = 0.04$
9.  **Calculate Base Shear (V<sub>b</sub>):**
    $V_b = A_h * W = 0.04 * 8000 \text{ kN} = 320 \text{ kN}$

**Practice Question 1:**

A 5-storey residential building has a seismic weight of 500 kN per storey. The height of each storey is 3.2 m. The building is located in seismic zone III with soft soil conditions. Assume an Importance Factor (I) of 1.0 and a Response Reduction Factor (R) of 3 (for shear wall structure). Calculate the total base shear for the building.

**Answer to Practice Question 1:**

1.  **Total Seismic Weight (W):** W = 5 storeys * 500 kN/storey = 2500 kN
2.  **Seismic Zone Factor (Z):** For Zone III, Z = 0.16 (refer to IS 1893).
3.  **Importance Factor (I):** Given = 1.0
4.  **Response Reduction Factor (R):** Given = 3
5.  **Soil Profile:** Soft (Type III). For soft soil, $T_g = 0.9$ s, $T_d = 0.4$ s, $T_l = 4.0$ s.
6.  **Estimate Natural Period (T):**
    T = 0.1 * N = 0.1 * 5 = 0.5 s
7.  **Determine A<sub>a</sub> and A<sub>v</sub>:** For Z=0.16 and Soft Soil, A<sub>a</sub> = 0.12 and A<sub>v</sub> = 0.16.
8.  **Calculate A<sub>h</sub>:**
    Since T = 0.5 s and $T_g = 0.9$ s, we are in the range $T \le T_g$.
    $A_h = \frac{I * A_a}{R} = \frac{1.0 * 0.12}{3} = 0.04$
9.  **Calculate Base Shear (V<sub>b</sub>):**
    $V_b = A_h * W = 0.04 * 2500 \text{ kN} = 100 \text{ kN}$

---

**Example 2: Distributing Base Shear**

Using the base shear calculated in Example 1 (V<sub>b</sub> = 320 kN), distribute this shear as lateral forces at each floor level.

**Solution Approach:**

We need to calculate $w_i * h_i$ for each floor and then the total sum.
Let's assume the base is at h=0.

| Floor (i) | Height from Base ($h_i$) (m) | Seismic Weight ($w_i$) (kN) | $w_i * h_i$ (kNm) |
| :-------- | :--------------------------- | :-------------------------- | :---------------- |
| 1 (Ground) | 3                            | 800                         | 2400              |
| 2         | 6                            | 800                         | 4800              |
| 3         | 9                            | 800                         | 7200              |
| 4         | 12                           | 800                         | 9600              |
| 5         | 15                           | 800                         | 12000             |
| 6         | 18                           | 800                         | 14400             |
| 7         | 21                           | 800                         | 16800             |
| 8         | 24                           | 800                         | 19200             |
| 9         | 27                           | 800                         | 21600             |
| 10 (Top)  | 30                           | 800                         | 24000             |
| **Total** |                              | **8000**                    | **132000**        |

Now, calculate the lateral force $F_i$ at each floor:

$F_i = V_b * (w_i * h_i) / (Σ (w_j * h_j))$
$F_i = 320 \text{ kN} * (w_i * h_i) / 132000 \text{ kNm}$

*   $F_1 = 320 * (2400) / 132000 = 5.82 \text{ kN}$
*   $F_2 = 320 * (4800) / 132000 = 11.64 \text{ kN}$
*   $F_3 = 320 * (7200) / 132000 = 17.45 \text{ kN}$
*   $F_4 = 320 * (9600) / 132000 = 23.27 \text{ kN}$
*   $F_5 = 320 * (12000) / 132000 = 29.09 \text{ kN}$
*   $F_6 = 320 * (14400) / 132000 = 34.91 \text{ kN}$
*   $F_7 = 320 * (16800) / 132000 = 40.73 \text{ kN}$
*   $F_8 = 320 * (19200) / 132000 = 46.55 \text{ kN}$
*   $F_9 = 320 * (21600) / 132000 = 52.36 \text{ kN}$
*   $F_{10} = 320 * (24000) / 132000 = 58.18 \text{ kN}$

**Check:** Sum of $F_i$ should be approximately equal to $V_b$.
$5.82 + 11.64 + 17.45 + 23.27 + 29.09 + 34.91 + 40.73 + 46.55 + 52.36 + 58.18 \approx 320 \text{ kN}$

**Practice Question 2:**

For the building described in Practice Question 1 (5 storeys, $V_b$ = 100 kN, seismic weight per storey = 500 kN, height of each storey = 3.2 m), distribute the base shear as lateral forces at each floor level.

**Answer to Practice Question 2:**

1.  **Calculate $w_i * h_i$ for each floor:**
    *   Floor 1: $w_1 * h_1 = 500 \text{ kN} * 3.2 \text{ m} = 1600 \text{ kNm}$
    *   Floor 2: $w_2 * h_2 = 500 \text{ kN} * (3.2 * 2) \text{ m} = 3200 \text{ kNm}$
    *   Floor 3: $w_3 * h_3 = 500 \text{ kN} * (3.2 * 3) \text{ m} = 4800 \text{ kNm}$
    *   Floor 4: $w_4 * h_4 = 500 \text{ kN} * (3.2 * 4) \text{ m} = 6400 \text{ kNm}$
    *   Floor 5: $w_5 * h_5 = 500 \text{ kN} * (3.2 * 5) \text{ m} = 8000 \text{ kNm}$

2.  **Calculate Total Sum ($Σ (w_j * h_j)$):**
    $Σ (w_j * h_j) = 1600 + 3200 + 4800 + 6400 + 8000 = 24000 \text{ kNm}$

3.  **Calculate Lateral Force ($F_i$) at each floor:**
    $F_i = V_b * (w_i * h_i) / (Σ (w_j * h_j))$
    $F_i = 100 \text{ kN} * (w_i * h_i) / 24000 \text{ kNm}$

    *   $F_1 = 100 * 1600 / 24000 = 6.67 \text{ kN}$
    *   $F_2 = 100 * 3200 / 24000 = 13.33 \text{ kN}$
    *   $F_3 = 100 * 4800 / 24000 = 20.00 \text{ kN}$
    *   $F_4 = 100 * 6400 / 24000 = 26.67 \text{ kN}$
    *   $F_5 = 100 * 8000 / 24000 = 33.33 \text{ kN}$

    **Check:** $6.67 + 13.33 + 20.00 + 26.67 + 33.33 \approx 100 \text{ kN}$

---

### 6. Important Points to Remember

*   **Seismic Coefficient Method (Equivalent Static Method) is a simplification:** It assumes the seismic forces can be represented as static forces.
*   **Base Shear is the total horizontal force:** It's the sum of all inertial forces.
*   **Natural Period (T) is crucial:** It dictates the seismic design spectrum value ($S_a$ or $A_a$/$A_v$).
*   **Soil type significantly influences seismic demand:** Softer soils tend to amplify ground motion.
*   **Response Reduction Factor (R) accounts for ductility:** Higher R values are for more ductile structures, leading to lower design forces.
*   **Lateral forces increase with height:** This is a fundamental principle in seismic force distribution.
*   **IS 1893 is the governing code:** Always refer to the latest version for specific parameters, zone factors, and spectral shapes.
*   **Seismic Weight includes Dead Load and a portion of Live Load:** The code specifies the live load contribution.
*   **The method is applicable to regular shaped buildings:** Irregularities can significantly alter seismic response and may require more advanced analysis.

---

### Learning Outcomes Addressed:

*   **Estimation of Base Shear:** The entire process of calculating $V_b$ using the seismic coefficient method and IS 1893 has been detailed.
*   **Distribution of Base Shear:** The method for distributing $V_b$ along the height of multi-storey buildings using lateral forces ($F_i$) has been explained with formulas and examples.
*   **Understanding of Equivalent Static Method:** The underlying principle of simplifying dynamic seismic forces into static forces has been conveyed.
*   **Application of IS 1893:** The key parameters and formulas from IS 1893 for this calculation have been presented.

This concludes the notes for this topic. Understanding these concepts is fundamental for designing earthquake-resistant structures.
