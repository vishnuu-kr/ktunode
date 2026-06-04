---
title: "Life prediction"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 2: Fatigue loading"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463dde"
status: "completed"
scrapedAt: "2026-05-20T18:12:33.605Z"
---
# Module 2: Fatigue Loading - Topic: Life Prediction

## Introduction

Fatigue is a progressive and localized damage process that occurs when a material is subjected to cyclic loading. It is a leading cause of mechanical failure in many engineering applications. Life prediction in fatigue is the process of estimating the number of stress cycles a component can withstand before failure occurs. This topic is crucial for ensuring the safety and reliability of engineered structures and products.

## Learning Outcomes Addressed:

*   **LO1: Understand the different theories of failure and material behaviour under various loading conditions.** (While this module focuses on fatigue, understanding fatigue as a failure mechanism is key.)
*   **LO2: Remember the factors affecting fatigue loading, S-N-P curves, and endurance diagrams for life prediction.** (This is the primary focus of this topic.)
*   **LO3: Apply principles of fracture mechanics to analyse and design against crack initiation and propagation.** (Fracture mechanics principles are integral to understanding crack growth in fatigue, particularly in the crack propagation stage.)
*   **LO4: Understand advanced failure mechanisms, including contact fatigue, high-temperature effects, and corrosion, and their impact on material properties and design.** (While not directly the focus of life prediction itself, these factors significantly influence fatigue life and are discussed in relation to modifying fatigue behavior.)

## Course Outcomes Addressed:

*   **CO1: Understand the different theories of failure and material behaviour under various loading conditions. (Knowledge Level: K2)** - Fatigue is a failure theory, and understanding its principles relates to this CO.
*   **CO2: Remember the factors affecting fatigue loading, S-N-P curves, and endurance diagrams for life prediction . (Knowledge Level: K1)** - This is directly addressed.
*   **CO3: Apply principles of fracture mechanics to analyse and design against crack initiation and propagation. (Knowledge Level: K3)** - This CO is addressed through the discussion of crack growth in fatigue.
*   **CO4: Understand advanced failure mechanisms, including contact fatigue, high-temperature effects, and corrosion, and their impact on material properties and design. (Knowledge Level: K2)** - These factors are discussed as modifiers of fatigue life.

---

## 1. Fundamentals of Fatigue

Fatigue failure is characterized by:

*   **Initiation of cracks:** Typically at stress concentrations (e.g., surface defects, sharp corners, inclusions).
*   **Crack propagation:** Slow, stable growth of the crack under cyclic loading.
*   **Final fracture:** Rapid failure when the remaining cross-section can no longer support the applied load, often resembling ductile fracture.

### Key Concepts:

*   **Stress Cycle:** A sequence of varying stress applied to a component.
*   **Stress Amplitude ($S_a$):** Half the difference between the maximum and minimum stress in a cycle.
    $S_a = \frac{\sigma_{max} - \sigma_{min}}{2}$
*   **Mean Stress ($\sigma_m$):** The average stress over a cycle.
    $\sigma_m = \frac{\sigma_{max} + \sigma_{min}}{2}$
*   **Stress Ratio ($R$):** The ratio of minimum stress to maximum stress.
    $R = \frac{\sigma_{min}}{\sigma_{max}}$
*   **Alternating Stress:** The component of stress that varies cyclically.

### Types of Fatigue Loading:

*   **Uniaxial Fatigue:** Stress applied along a single axis.
*   **Multiaxial Fatigue:** Stress applied in multiple directions simultaneously.
*   **Torsional Fatigue:** Stress due to twisting.
*   **Thermal Fatigue:** Cyclic stressing caused by temperature fluctuations.
*   **Contact Fatigue:** Fatigue occurring at the interface of contacting surfaces (e.g., gears, bearings).

---

## 2. Factors Affecting Fatigue Life

Many factors influence the fatigue life of a material and component. Understanding these is crucial for accurate life prediction.

### 2.1 Material Properties

*   **Ultimate Tensile Strength (UTS):** Generally, higher UTS correlates with higher fatigue strength.
*   **Yield Strength:** Fatigue failure can occur at stress levels well below the yield strength, especially in ductile materials.
*   **Ductility:** Highly ductile materials may exhibit greater resistance to crack initiation but can undergo significant plastic deformation.
*   **Hardness:** Often a good indicator of fatigue strength, especially for steels. Harder materials generally have higher fatigue limits. (Ref: ASM Handbook Vol. 11)
*   **Microstructure:** Grain size, inclusions, and precipitates significantly affect fatigue crack initiation and growth. Fine-grained materials typically have better fatigue resistance.
*   **Surface Finish:** Surface roughness, scratches, and machining marks act as stress concentrators and initiate fatigue cracks. A smooth surface finish dramatically improves fatigue life.
*   **Residual Stresses:**
    *   **Compressive residual stresses:** Beneficial, increase fatigue life by opposing applied tensile stresses.
    *   **Tensile residual stresses:** Detrimental, decrease fatigue life.

### 2.2 Loading Conditions

*   **Stress Amplitude ($S_a$):** The most significant factor. Higher stress amplitude leads to shorter fatigue life.
*   **Mean Stress ($\sigma_m$):**
    *   **Tensile mean stress:** Reduces fatigue life.
    *   **Compressive mean stress:** Increases fatigue life.
    *   **Goodman Diagram (or Modified Goodman Diagram):** Used to account for the effect of mean stress on fatigue life.
        $\frac{S_a}{S_e} + \frac{\sigma_m}{\sigma_{uts}} = 1$ (for infinite life)
        Where $S_e$ is the fatigue limit/strength at zero mean stress, and $\sigma_{uts}$ is the ultimate tensile strength. (Ref: Jones, Chapter 4)
*   **Stress Concentration Factors ($K_t$):** Geometric discontinuities (holes, notches, fillets) increase local stress, significantly reducing fatigue life. The effective stress concentration factor for fatigue ($K_f$) is often lower than $K_t$ due to material ductility, but still critical.
    $S_{a, net} = K_f \cdot S_{a, nominal}$
*   **Frequency of Loading:** Very high or very low frequencies can sometimes reduce fatigue life due to heating or environmental effects.
*   **Loading Waveform:** The shape of the stress cycle (e.g., sinusoidal, square, triangular) can have minor effects.

### 2.3 Environmental Factors

*   **Temperature:**
    *   **Elevated temperatures:** Can reduce fatigue strength due to creep-fatigue interaction and oxidation. (Ref: Jones, Chapter 6)
    *   **Low temperatures:** Can increase notch sensitivity and potentially reduce fatigue life in some materials (e.g., brittle fracture).
*   **Corrosion:**
    *   **Corrosion Fatigue:** Occurs when a component is subjected to cyclic loading in a corrosive environment. Corrosion pits act as stress concentrators, leading to premature fatigue failure. This is a significant failure mechanism. (Ref: Jones, Chapter 7)

---

## 3. Life Prediction Methods

Estimating the fatigue life of a component typically involves one of two approaches:

### 3.1 Stress-Life (S-N) Approach

This approach relates stress amplitude to the number of cycles to failure.

*   **S-N Curve (Wöhler Curve):** A plot of stress amplitude ($S_a$) against the logarithm of the number of cycles to failure ($N$).
    *   **High-Cycle Fatigue (HCF):** Typically occurs at low stress amplitudes and high cycle numbers (e.g., $> 10^4$ - $10^5$ cycles). Characterized by crack initiation and slow propagation.
    *   **Low-Cycle Fatigue (LCF):** Occurs at high stress amplitudes, often causing significant plastic deformation in each cycle, and low cycle numbers (e.g., $< 10^4$ cycles). Crack growth is dominant.

*   **Fatigue Limit (Endurance Limit):** For some materials (like ferrous alloys), the S-N curve becomes horizontal at a certain stress level, meaning fatigue failure will not occur regardless of the number of cycles. This stress level is the fatigue limit.
*   **Fatigue Strength:** The stress level a material can withstand for a specified number of cycles. For materials without a distinct fatigue limit, fatigue strength is often quoted at $10^7$ or $10^8$ cycles.

**Deriving an S-N Curve:**

1.  Test multiple identical specimens.
2.  Apply a constant stress amplitude to each specimen.
3.  Record the number of cycles until failure.
4.  Repeat for different stress amplitudes.
5.  Plot $S_a$ vs. $\log(N)$.

**S-N Curve Characteristics:**

*   Generally shows a decreasing trend: higher stress, lower life.
*   Can be approximated by a power law: $S_a = aN^b$ or $\sigma^m N = C$ (Basquin's Law).

**Example (CO2):**
A steel component is tested and produces the following data points for alternating stress vs. cycles to failure:
(100 MPa, $10^6$ cycles), (200 MPa, $10^5$ cycles), (400 MPa, $10^4$ cycles).
If the fatigue limit is 150 MPa, predict the life at 180 MPa.

**Answer:**
For stresses above the fatigue limit, we can assume a relationship $S_a = aN^b$.
Using (200 MPa, $10^5$) and (400 MPa, $10^4$):
$\log(200) = \log(a) + b \log(10^5)$
$\log(400) = \log(a) + b \log(10^4)$
Subtracting the equations:
$\log(400) - \log(200) = b(\log(10^4) - \log(10^5))$
$\log(2) = b(-1)$
$b = -\log(2) \approx -0.301$
Now, find $a$:
$\log(200) = \log(a) - 0.301 \log(10^5)$
$2.301 = \log(a) - 0.301 \times 5$
$2.301 = \log(a) - 1.505$
$\log(a) = 3.806$
$a = 10^{3.806} \approx 6397$
So, $S_a = 6397 N^{-0.301}$.
Now predict life at 180 MPa:
$180 = 6397 N^{-0.301}$
$N^{-0.301} = \frac{180}{6397} \approx 0.02814$
$\log(N^{-0.301}) = \log(0.02814)$
$-0.301 \log(N) = -1.549$
$\log(N) = \frac{-1.549}{-0.301} \approx 5.146$
$N = 10^{5.146} \approx 139900$ cycles.
The life at 180 MPa is approximately 139,900 cycles.

### 3.2 Strain-Life (E-N) Approach

This approach is more suitable for Low-Cycle Fatigue (LCF) where plastic strain is significant. It relates strain amplitude to the number of cycles to failure.

*   **Manson-Coffin Law:** Relates plastic strain amplitude ($\epsilon_{ap}$) to fatigue life:
    $\epsilon_{ap} = \epsilon_f'(2N_f)^c$
    Where:
    *   $\epsilon_{ap}$ is the plastic strain amplitude.
    *   $\epsilon_f'$ is the fatigue ductility coefficient.
    *   $N_f$ is the number of cycles to failure.
    *   $c$ is the fatigue strength exponent.

*   **Total Strain Amplitude ($\epsilon_a$):** Can be expressed as the sum of elastic and plastic strain amplitudes:
    $\epsilon_a = \epsilon_{ae} + \epsilon_{ap}$
    $\epsilon_{ae} = \frac{S_a}{E}$ (where E is Young's Modulus)

*   **Coffin-Manson-Basquin Relationship:** Combines the elastic and plastic strain contributions:
    $\epsilon_a = \frac{S_f'}{E}(2N_f)^b + \epsilon_f'(2N_f)^c$
    Where $S_f'$ is the fatigue strength coefficient and $b$ is the fatigue strength exponent. This equation is often plotted on a log-log scale with total strain amplitude on the y-axis and reversals ($2N_f$) on the x-axis.

**Example (CO3):**
A component is subjected to cyclic strain with a plastic strain amplitude of $0.005$. The material has a fatigue ductility coefficient ($\epsilon_f'$) of 0.7 and a fatigue ductility exponent ($c$) of -0.5. Estimate the number of cycles to failure.

**Answer:**
Using the Manson-Coffin Law: $\epsilon_{ap} = \epsilon_f'(2N_f)^c$
$0.005 = 0.7 (2N_f)^{-0.5}$
$(2N_f)^{-0.5} = \frac{0.005}{0.7} \approx 0.00714$
To solve for $2N_f$, square both sides:
$(2N_f)^{-1} = (0.00714)^2 \approx 5.1 \times 10^{-5}$
$2N_f = \frac{1}{5.1 \times 10^{-5}} \approx 19608$
$N_f = \frac{19608}{2} \approx 9804$ cycles.
The estimated number of cycles to failure is approximately 9804 cycles.

### 3.3 Fracture Mechanics Approach

This approach focuses on the growth of pre-existing or initiated cracks. It is particularly useful for predicting the life of components that are expected to operate with cracks or for the crack propagation phase of fatigue life. (Ref: Kumar, Chapter 8)

*   **Paris's Law (or Paris-Erdogan Law):** Describes the rate of fatigue crack growth ($\frac{da}{dN}$):
    $\frac{da}{dN} = C (\Delta K)^m$
    Where:
    *   $a$ is the crack length.
    *   $N$ is the number of cycles.
    *   $\Delta K$ is the stress intensity factor range: $\Delta K = Y \Delta \sigma \sqrt{\pi a}$, where $Y$ is a geometry factor, and $\Delta \sigma$ is the stress range.
    *   $C$ and $m$ are material constants determined experimentally.

**Life Prediction using Fracture Mechanics:**

1.  **Determine initial crack size ($a_i$):** This could be from material defects, manufacturing processes, or the crack initiation phase.
2.  **Determine critical crack size ($a_c$):** The crack size at which fracture will occur, typically related to fracture toughness ($K_{Ic}$). $K_{Ic} = Y \sigma_{max} \sqrt{\pi a_c}$.
3.  **Integrate Paris's Law:**
    $\int_{a_i}^{a_c} \frac{da}{(\Delta K)^m} = \int_{0}^{N_f} C dN$
    $N_f = \int_{a_i}^{a_c} \frac{da}{C (\Delta K)^m}$

**Example (CO3):**
A component has an initial crack of 1 mm. The critical crack size is 20 mm. The stress intensity factor range is $\Delta K = 10 \sqrt{a}$ (MPa√m), and the material constants for Paris's Law are $C = 1 \times 10^{-12}$ and $m = 3$. Calculate the number of cycles to failure.

**Answer:**
$a_i = 1 \text{ mm} = 1 \times 10^{-3} \text{ m}$
$a_c = 20 \text{ mm} = 2 \times 10^{-2} \text{ m}$
$\Delta K = 10 \sqrt{a}$
$\frac{da}{dN} = C (\Delta K)^m = (1 \times 10^{-12}) (10 \sqrt{a})^3 = (1 \times 10^{-12}) (1000 a^{3/2}) = 1 \times 10^{-9} a^{3/2}$

$N_f = \int_{a_i}^{a_c} \frac{da}{1 \times 10^{-9} a^{3/2}} = \frac{1}{1 \times 10^{-9}} \int_{10^{-3}}^{2 \times 10^{-2}} a^{-3/2} da$
$N_f = 10^9 \left[ \frac{a^{-1/2}}{-1/2} \right]_{10^{-3}}^{2 \times 10^{-2}} = 10^9 [-2 a^{-1/2}]_{10^{-3}}^{2 \times 10^{-2}}$
$N_f = 10^9 \left( -2 (2 \times 10^{-2})^{-1/2} - (-2 (10^{-3})^{-1/2}) \right)$
$N_f = 10^9 \left( -2 \frac{1}{\sqrt{0.02}} + 2 \frac{1}{\sqrt{0.001}} \right)$
$N_f = 10^9 \left( -2 \frac{1}{0.1414} + 2 \frac{1}{0.0316} \right)$
$N_f = 10^9 \left( -14.14 + 63.29 \right)$
$N_f = 10^9 (49.15) \approx 4.915 \times 10^{10}$ cycles.
The number of cycles to failure is approximately $4.915 \times 10^{10}$ cycles.

---

## 4. Probabilistic Aspects of Fatigue (S-N-P Curves)

Real-world fatigue behavior is variable. Statistical methods are used to account for this variability.

*   **S-N-P Curve:** A three-dimensional plot representing Stress ($S$), Probability of failure ($P$), and Number of cycles to failure ($N$). It shows how the probability of failure varies with stress level and life. (Ref: CO2)

*   **Statistical Distributions:** Fatigue data is often analyzed using statistical distributions like the Weibull distribution or the normal distribution to quantify the probability of failure.

*   **Reliability:** Often, components are designed for a specific level of reliability (e.g., 90% or 99% probability of survival). This is achieved by choosing a stress level corresponding to a low probability of failure on the S-N-P curve.

---

## 5. Life Prediction of Components Under Variable Amplitude Loading

In practice, loading is rarely constant amplitude.

*   **Cycle Counting Methods:** Techniques like **Rainflow Counting** are used to break down a complex variable amplitude loading history into equivalent constant amplitude cycles. (Ref: ASM Handbook Vol. 11)
*   **Miner's Rule (Linear Damage Rule):** A simplified approach to predict fatigue damage under variable amplitude loading. It assumes that damage accumulates linearly.
    $\sum \frac{n_i}{N_i} = 1$
    Where:
    *   $n_i$ is the number of cycles applied at stress level $i$.
    *   $N_i$ is the number of cycles to failure at stress level $i$ (obtained from the S-N curve).
    *   The sum represents the total accumulated fatigue damage. When the sum equals 1, failure is predicted.

**Limitations of Miner's Rule:**
*   Assumes linear damage accumulation, which is often not true.
*   Doesn't account for mean stress effects or the order of loading.
*   Doesn't account for crack initiation vs. propagation phases.

**Example (CO2):**
A component is subjected to the following loading history:
*   10,000 cycles at 200 MPa.
*   50,000 cycles at 150 MPa.
*   20,000 cycles at 250 MPa.

From the S-N data, the fatigue lives at these stress levels are:
*   $N_{200} = 10^5$ cycles
*   $N_{150} = 10^6$ cycles
*   $N_{250} = 5 \times 10^4$ cycles

Predict the remaining life using Miner's Rule.

**Answer:**
Calculate the damage fraction for each loading condition:
Damage at 200 MPa: $D_{200} = \frac{n_{200}}{N_{200}} = \frac{10,000}{100,000} = 0.1$
Damage at 150 MPa: $D_{150} = \frac{n_{150}}{N_{150}} = \frac{50,000}{1,000,000} = 0.05$
Damage at 250 MPa: $D_{250} = \frac{n_{250}}{N_{250}} = \frac{20,000}{50,000} = 0.4$

Total damage accumulated: $D_{total} = D_{200} + D_{150} + D_{250} = 0.1 + 0.05 + 0.4 = 0.55$

According to Miner's Rule, failure occurs when $D_{total} = 1$.
Remaining life fraction = $1 - D_{total} = 1 - 0.55 = 0.45$.

If the component was to be subjected to continued loading at 150 MPa, where it had a total life of $10^6$ cycles:
Remaining cycles = $0.45 \times N_{150} = 0.45 \times 10^6 = 450,000$ cycles.

The component has 45% of its life remaining based on the assumed loading conditions.

---

## 6. Advanced Life Prediction Considerations

*   **Notch Fatigue:** The effect of geometric discontinuities (notches) on fatigue life. This is where notch sensitivity and fatigue notch factors ($K_f$) are crucial. (Ref: Collins, Chapter 6)
*   **High Temperature Fatigue:** At elevated temperatures, creep can interact with fatigue (creep-fatigue interaction), significantly reducing life. Oxidation can also accelerate crack growth. (Ref: Jones, Chapter 6)
*   **Contact Fatigue:** Failure due to cyclic stresses arising from contact between surfaces, often leading to subsurface crack initiation and spalling. (Ref: ASM Handbook Vol. 11)

---

## Important Points to Remember:

*   **Fatigue is a failure mechanism driven by cyclic stress, not static strength.** Failure can occur at stresses well below the yield strength.
*   **Stress concentrations are critical.** Surface defects, notches, and holes are common fatigue crack initiation sites.
*   **Surface finish is paramount.** Smooth surfaces have significantly better fatigue life.
*   **Mean stress is important.** Tensile mean stress reduces life; compressive mean stress increases life.
*   **S-N curves are fundamental for High-Cycle Fatigue (HCF).**
*   **Strain-Life (E-N) curves are for Low-Cycle Fatigue (LCF).**
*   **Fracture Mechanics is essential for crack growth prediction.**
*   **Variable amplitude loading requires cycle counting and damage accumulation rules like Miner's Rule.**
*   **Environmental factors (corrosion, temperature) can drastically reduce fatigue life.**

---

## Practice Questions:

1.  **(CO2) Define Fatigue Limit and Fatigue Strength.** How do they differ?
2.  **(CO2) A component experiences a stress cycle with $\sigma_{max} = 300$ MPa and $\sigma_{min} = 50$ MPa. Calculate the stress amplitude and stress ratio.**
3.  **(CO2) Explain the significance of surface finish on fatigue life.**
4.  **(CO3) Briefly describe Paris's Law for fatigue crack growth. What are the parameters involved?**
5.  **(CO2) A material has a fatigue limit of 150 MPa. If tested at 200 MPa, it fails in $10^5$ cycles, and at 300 MPa, it fails in $5 \times 10^4$ cycles. Estimate the life at 250 MPa, assuming a linear relationship on a log-log S-N plot above the fatigue limit.**
6.  **(CO2) A component is subjected to 10,000 cycles at 100 MPa, for which the fatigue life is $5 \times 10^5$ cycles, and then 5,000 cycles at 120 MPa, for which the fatigue life is $1.5 \times 10^5$ cycles. Calculate the total fatigue damage using Miner's Rule.**
7.  **(CO3) A component has a crack of length $a_i = 0.5$ mm. The stress intensity factor range is $\Delta K = 12 \sqrt{a}$ (MPa√m), $C = 2 \times 10^{-12}$, and $m = 3$. The critical crack size is $a_c = 15$ mm. Calculate the number of cycles for the crack to grow from $a_i$ to $a_c$.**

---

## Answers to Practice Questions:

1.  **Fatigue Limit:** The maximum stress amplitude below which a material can withstand an infinite number of stress cycles without fatigue failure.
    **Fatigue Strength:** The stress amplitude at which a material can withstand a specific number of stress cycles (e.g., $10^7$ cycles) without fatigue failure. The fatigue limit is a specific case of fatigue strength for infinite life.
2.  Stress Amplitude ($S_a$) = $\frac{300 - 50}{2} = 125$ MPa.
    Stress Ratio ($R$) = $\frac{50}{300} = \frac{1}{6} \approx 0.167$.
3.  A poor surface finish (scratches, rough machining) introduces stress concentrations, which act as initiation sites for fatigue cracks, significantly reducing the fatigue life of the component. A smoother finish generally leads to a longer fatigue life.
4.  Paris's Law describes the rate of fatigue crack growth ($\frac{da}{dN}$) as a function of the stress intensity factor range ($\Delta K$): $\frac{da}{dN} = C (\Delta K)^m$.
    *   $a$: crack length
    *   $N$: number of cycles
    *   $C$: material constant
    *   $m$: material constant
    *   $\Delta K$: stress intensity factor range ($Y \Delta \sigma \sqrt{\pi a}$)
5.  Assume $S_a = aN^b$.
    At 200 MPa, $N = 10^5$. At 300 MPa, $N = 5 \times 10^4$.
    $\log(200) = \log(a) + b \log(10^5)$
    $\log(300) = \log(a) + b \log(5 \times 10^4)$
    Subtracting: $\log(300/200) = b(\log(5 \times 10^4) - \log(10^5))$
    $\log(1.5) = b(\log(5) + 4 - 5) = b(\log(5) - 1)$
    $0.176 = b(0.699 - 1) = b(-0.301)$
    $b = \frac{0.176}{-0.301} \approx -0.585$
    Now find $a$: $\log(200) = \log(a) - 0.585 \log(10^5)$
    $2.301 = \log(a) - 0.585 \times 5 = \log(a) - 2.925$
    $\log(a) = 5.226 \implies a = 10^{5.226} \approx 168270$
    So, $S_a = 168270 N^{-0.585}$.
    Now, predict life at 250 MPa:
    $250 = 168270 N^{-0.585}$
    $N^{-0.585} = \frac{250}{168270} \approx 0.001485$
    $\log(N^{-0.585}) = \log(0.001485)$
    $-0.585 \log(N) = -2.828$
    $\log(N) = \frac{-2.828}{-0.585} \approx 4.834$
    $N = 10^{4.834} \approx 68230$ cycles.
6.  Damage at 100 MPa: $D_{100} = \frac{10,000}{500,000} = 0.02$
    Damage at 120 MPa: $D_{120} = \frac{5,000}{150,000} = \frac{1}{30} \approx 0.0333$
    Total Damage = $0.02 + 0.0333 = 0.0533$.
7.  $\frac{da}{dN} = C (\Delta K)^m = (2 \times 10^{-12}) (12 \sqrt{a})^3 = (2 \times 10^{-12}) (1728 a^{3/2}) = 3.456 \times 10^{-9} a^{3/2}$
    $N_f = \int_{a_i}^{a_c} \frac{da}{3.456 \times 10^{-9} a^{3/2}} = \frac{1}{3.456 \times 10^{-9}} \int_{0.5 \times 10^{-3}}^{15 \times 10^{-3}} a^{-3/2} da$
    $N_f = \frac{10^9}{3.456} \left[ \frac{a^{-1/2}}{-1/2} \right]_{0.5 \times 10^{-3}}^{15 \times 10^{-3}} = \frac{10^9}{3.456} [-2 a^{-1/2}]_{0.5 \times 10^{-3}}^{15 \times 10^{-3}}$
    $N_f = \frac{-2 \times 10^9}{3.456} \left[ (15 \times 10^{-3})^{-1/2} - (0.5 \times 10^{-3})^{-1/2} \right]$
    $N_f = \frac{-2 \times 10^9}{3.456} \left[ \frac{1}{\sqrt{0.015}} - \frac{1}{\sqrt{0.0005}} \right]$
    $N_f = \frac{-2 \times 10^9}{3.456} \left[ \frac{1}{0.1225} - \frac{1}{0.02236} \right]$
    $N_f = \frac{-2 \times 10^9}{3.456} [8.16 - 44.72]$
    $N_f = \frac{-2 \times 10^9}{3.456} [-36.56]$
    $N_f \approx 2.115 \times 10^{10}$ cycles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
