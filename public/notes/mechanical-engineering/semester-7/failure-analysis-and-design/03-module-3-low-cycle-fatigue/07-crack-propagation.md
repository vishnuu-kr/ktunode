---
title: "Crack propagation"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 3: Low cycle fatigue"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463de8"
status: "completed"
scrapedAt: "2026-05-20T18:12:39.886Z"
---
# Failure Analysis and Design: Module 3 - Low Cycle Fatigue

## Topic: Crack Propagation

This module delves into the phenomenon of crack propagation, a critical aspect of low cycle fatigue. Understanding how cracks grow under cyclic loading is paramount for predicting component life and ensuring structural integrity.

---

### 1. Understanding Crack Propagation in Low Cycle Fatigue (CO1, CO3)

Low cycle fatigue (LCF) is characterized by a large number of plastic deformations per cycle, typically occurring under high cyclic stress or strain amplitudes. Crack propagation in LCF is significantly influenced by this plastic deformation.

*   **Key Concepts:**
    *   **Plastic Zone:** Under high cyclic stresses, the stress concentration at a crack tip leads to localized yielding, creating a plastic zone. The size and nature of this plastic zone are crucial in determining crack growth rates.
    *   **Strain-Controlled vs. Stress-Controlled LCF:** While LCF often involves strain control, the underlying mechanisms of crack growth are similar, with plastic strain range being a primary driver.
    *   **Crack Closure:** As a crack grows, the wake of the crack can come into contact due to residual stresses or applied compressive loads, effectively closing the crack and retarding its growth.

*   **Textbook References:**
    *   **Jones (1993), Chapter 3 (Fatigue):** Discusses the fundamental mechanisms of fatigue crack growth, including the role of plastic deformation.
    *   **Collins (2013), Chapter 5 (Fatigue and Fatigue Crack Propagation):** Provides detailed insights into crack propagation under cyclic loading, particularly in the context of mechanical design.
    *   **Kumar (1999), Chapter 7 (Fatigue Crack Propagation):** Offers a thorough theoretical treatment of crack growth models.

---

### 2. Factors Affecting Crack Propagation (CO1, CO2, CO3)

Several factors influence the rate at which cracks propagate under cyclic loading. These are critical for accurate life prediction.

*   **Key Concepts:**
    *   **Stress Intensity Factor (K):** A parameter that quantifies the stress field at the crack tip. It is a function of the applied stress, crack size, and geometry.
        *   $K = Y \sigma \sqrt{\pi a}$
        *   Where:
            *   $Y$ is a geometry factor.
            *   $\sigma$ is the applied stress.
            *   $a$ is the crack length.
    *   **Stress Intensity Factor Range ($\Delta K$):** The difference between the maximum and minimum stress intensity factors during a stress cycle. This is the primary driving force for fatigue crack growth.
        *   $\Delta K = K_{max} - K_{min}$
    *   **Mean Stress:** The average stress over a cycle can significantly influence crack growth. Higher mean stresses generally lead to faster crack growth.
    *   **Material Properties:**
        *   **Yield Strength:** Higher yield strength materials tend to have smaller plastic zones, potentially leading to slower crack growth.
        *   **Fracture Toughness ($K_{Ic}$):** A measure of a material's resistance to fracture in the presence of a crack. A crack will propagate unstably when $K$ reaches $K_{Ic}$.
        *   **Microstructure:** Grain size, inclusions, and precipitates can affect crack path and growth rates.
    *   **Environment:** Corrosive environments can accelerate fatigue crack growth (Environmentally Assisted Fatigue or Corrosion Fatigue).
    *   **Loading Frequency and Waveform:** The rate at which the load is applied and the shape of the stress cycle can influence crack growth, especially in the presence of aggressive environments.

*   **Textbook References:**
    *   **Jones (1993), Chapter 3 (Fatigue):** Explains how stress, material properties, and environment impact fatigue crack growth.
    *   **ASM Handbook, Vol. 11 (2002), Chapter 10 (Fatigue and Fracture):** Provides practical data and case studies on factors affecting fatigue crack growth.
    *   **Collins (2013), Chapter 5 (Fatigue and Fatigue Crack Propagation):** Details the influence of stress intensity factor range, mean stress, and material properties.
    *   **Kumar (1999), Chapter 7 (Fatigue Crack Propagation):** Elaborates on the theoretical underpinnings of these influencing factors.

---

### 3. Crack Propagation Models (CO3)

Various models are used to predict the rate of fatigue crack growth. These models are crucial for life prediction and designing components to withstand fatigue loading.

*   **Key Concepts:**
    *   **Paris-Erdogan Law:** A widely used empirical model that relates the crack growth rate ($da/dN$) to the stress intensity factor range ($\Delta K$).
        *   $da/dN = C (\Delta K)^m$
        *   Where:
            *   $da/dN$ is the crack growth rate per cycle.
            *   $C$ and $m$ are material constants determined experimentally.
        *   **Three Regions of Crack Growth:**
            1.  **Region I (Threshold Region):** Crack growth is very slow or non-existent. Corresponds to $\Delta K < \Delta K_{th}$ (threshold stress intensity factor range).
            2.  **Region II (Paris Region):** Crack growth rate is linearly proportional to $\Delta K$ on a log-log plot. The Paris-Erdogan law is most applicable here.
            3.  **Region III (Fracture Toughness Region):** Crack growth accelerates rapidly as $\Delta K$ approaches $K_{Ic}$.
    *   **Walker's Model:** Incorporates the effect of mean stress into the Paris-Erdogan law by using an effective $\Delta K$.
        *   $da/dN = C (\Delta K_{eff})^m$
        *   Where $\Delta K_{eff} = \Delta K (1-R)^{1-p}$ (R is stress ratio, p is a material constant).
    *   **Forman's Model:** Another model that accounts for mean stress effects and approaches $K_{Ic}$ in Region III.
    *   **Crack Growth Rate ($da/dN$) vs. $\Delta K$ Plot:** Essential for visualizing and applying these models. Typically plotted on log-log scales.

*   **Textbook References:**
    *   **Jones (1993), Chapter 3 (Fatigue):** Introduces empirical models for crack growth.
    *   **Collins (2013), Chapter 5 (Fatigue and Fatigue Crack Propagation):** Provides a detailed discussion of various crack growth models, including Paris-Erdogan and Walker's models.
    *   **Kumar (1999), Chapter 7 (Fatigue Crack Propagation):** Offers a comprehensive theoretical treatment of these models and their underlying physics.

---

### 4. Life Prediction using Crack Propagation Data (CO3)

By integrating crack growth rate data, engineers can predict the remaining life of a component containing a crack.

*   **Key Concepts:**
    *   **Cycle Counting:** The total number of cycles to propagate a crack from an initial size ($a_i$) to a final critical size ($a_f$) can be calculated by integrating the crack growth rate equation:
        *   $N_f - N_i = \int_{a_i}^{a_f} \frac{da}{C (\Delta K)^m}$
        *   For the Paris-Erdogan law, this often involves numerical integration or analytical solutions if simplified.
    *   **Initial Crack Size ($a_i$):** This is often assumed to be the smallest detectable crack size or a crack formed by crack initiation.
    *   **Final Critical Crack Size ($a_f$):** This is the crack size at which the component will fail, typically when $K$ reaches $K_{Ic}$ or when the remaining ligament is insufficient to carry the load.
    *   **Safe Life vs. Fail-Safe Design:**
        *   **Safe Life:** Design based on predicting the total fatigue life, assuming no initial cracks.
        *   **Fail-Safe (or Crack Tolerant Design):** Design philosophy that assumes cracks will initiate and propagate, focusing on ensuring the component can survive for a reasonable period with a crack present. This involves determining the maximum allowable crack size and periodic inspection intervals.

*   **Textbook References:**
    *   **Jones (1993), Chapter 3 (Fatigue):** Discusses the application of fatigue data for life prediction.
    *   **Collins (2013), Chapter 5 (Fatigue and Fatigue Crack Propagation):** Provides detailed procedures for life prediction using crack growth data.
    *   **Kumar (1999), Chapter 7 (Fatigue Crack Propagation):** Offers analytical methods for life prediction through integration.

---

### 5. Advanced Considerations and Examples (CO1, CO3, CO4)

Understanding crack propagation involves considering real-world complexities.

*   **Key Concepts:**
    *   **Crack Closure Mechanisms:**
        *   **Plasticity-Induced Closure:** Residual compressive stresses in the wake of the plastic zone cause the crack faces to touch.
        *   **Oxide-Induced Closure:** Formation of oxide debris in the crack wake can physically wedge the crack faces apart.
        *   **Surface Roughness-Induced Closure:** Asperity contact between the rough crack surfaces.
    *   **Mixed Mode Fatigue:** When cracks propagate under combined Mode I, Mode II, and Mode III loading.
    *   **High-Temperature Fatigue:** At elevated temperatures, creep and oxidation can interact with fatigue, leading to complex crack growth behaviour. Creep-fatigue interaction is a significant consideration in LCF.
    *   **Environmentally Assisted Fatigue (Corrosion Fatigue):** The synergistic effect of a corrosive environment and cyclic loading, leading to significantly accelerated crack growth. Hydrogen embrittlement can be a factor.
    *   **Notch Effects:** Stress concentrations at geometric discontinuities (notches, holes) promote crack initiation and can influence crack propagation.

*   **Examples:**
    *   **Aircraft Structures:** Fatigue crack propagation in wing spars or fuselage panels due to repeated flight loads. Fail-safe design and regular inspections are critical.
    *   **Turbine Blades:** High-temperature fatigue and creep-fatigue interaction in turbine blades operating in hot gas environments.
    *   **Pressure Vessels:** Fatigue cracks emanating from weld defects under cyclic internal pressure.

*   **Textbook References:**
    *   **Jones (1993), Chapter 4 (High-Temperature Failure):** Addresses high-temperature effects on fatigue.
    *   **ASM Handbook, Vol. 11 (2002), Chapter 10 (Fatigue and Fracture):** Includes case studies on corrosion fatigue and notch effects.
    *   **Collins (2013), Chapter 5 (Fatigue and Fatigue Crack Propagation) & Chapter 6 (High-Temperature Failure):** Covers advanced topics like crack closure and high-temperature fatigue.
    *   **Kumar (1999), Chapter 7 (Fatigue Crack Propagation):** Discusses crack closure and environmental effects.

---

### 6. Practice Questions and Exercises

**Question 1:**
A component is subjected to cyclic loading. The fatigue crack growth rate ($da/dN$) can be described by the Paris-Erdogan law: $da/dN = C (\Delta K)^m$, where $C = 1 \times 10^{-12}$ and $m = 3$ (units of $\Delta K$ are MPa$\sqrt{m}$). If a crack of initial length $a_i = 5$ mm grows to a final length $a_f = 15$ mm under a constant $\Delta K = 20$ MPa$\sqrt{m}$, estimate the number of cycles required for this growth.

**Answer 1:**
We need to integrate the Paris-Erdogan law:
$N_f - N_i = \int_{a_i}^{a_f} \frac{da}{C (\Delta K)^m}$
Let $\Delta N = N_f - N_i$.
$\Delta N = \int_{5 \text{ mm}}^{15 \text{ mm}} \frac{da}{(1 \times 10^{-12}) (20 \text{ MPa}\sqrt{m})^3}$
$\Delta N = \frac{1}{C (\Delta K)^m} \int_{a_i}^{a_f} da$
$\Delta N = \frac{1}{C (\Delta K)^m} [a]_ {a_i}^{a_f}$
$\Delta N = \frac{a_f - a_i}{C (\Delta K)^m}$
$\Delta N = \frac{15 \text{ mm} - 5 \text{ mm}}{(1 \times 10^{-12} \text{ mm/cycle}) (20 \text{ MPa}\sqrt{m})^3}$  *(Note: Need consistent units. If C is in mm/cycle, $\Delta K$ is in MPa$\sqrt{m}$. The units of $C$ implicitly handle the conversion from $m$ to $mm$ if the constants are derived that way, but it's safer to be explicit. Assuming C is given such that mm units are used for $a$. Let's assume C is $1 \times 10^{-14}$ m/cycle for consistency with MPa$\sqrt{m}$. If $C$ is $1 \times 10^{-12}$, it's likely in mm/cycle. We'll proceed with $mm/cycle$.)*

$\Delta N = \frac{10 \text{ mm}}{(1 \times 10^{-12} \text{ mm/cycle}) (8000 \text{ (MPa}\sqrt{m})^3)}$
$\Delta N = \frac{10 \text{ mm}}{(1 \times 10^{-12} \text{ mm/cycle}) (8000 \text{ MPa}^3 \text{m}^{3/2})}$  *(This is where unit consistency is tricky. Let's assume C is in mm/(cycle * (MPa$\sqrt{m}$)^m).)*

If $C = 1 \times 10^{-12}$ mm/cycle / (MPa$\sqrt{m}$)$^3$:
$\Delta N = \frac{10 \text{ mm}}{(1 \times 10^{-12} \text{ mm/cycle}) \times (20^3)}$
$\Delta N = \frac{10 \text{ mm}}{(1 \times 10^{-12} \text{ mm/cycle}) \times 8000}$
$\Delta N = \frac{10 \text{ mm}}{8 \times 10^{-9} \text{ mm/cycle}}$
$\Delta N = 1.25 \times 10^9$ cycles.

**Question 2:**
Discuss the significance of $\Delta K_{th}$ and $K_{Ic}$ in the context of fatigue crack propagation.

**Answer 2:**
*   **$\Delta K_{th}$ (Threshold Stress Intensity Factor Range):** This is the critical value of the stress intensity factor range below which fatigue crack growth is essentially arrested or proceeds at an extremely slow rate, often considered negligible for practical purposes. It represents the lower limit of crack propagation. Below this threshold, even with cyclic loading, the crack may not grow measurably.
*   **$K_{Ic}$ (Plane Strain Fracture Toughness):** This is a measure of a material's resistance to fracture under conditions of plane strain. When the maximum stress intensity factor ($K_{max}$) in a cycle reaches $K_{Ic}$, the crack will propagate in an unstable, catastrophic manner, leading to fracture. $K_{Ic}$ defines the upper limit of stable fatigue crack growth before fracture.

The region between $\Delta K_{th}$ and the value of $\Delta K$ that leads to $K_{max} = K_{Ic}$ is where the Paris-Erdogan law is typically applied for predicting fatigue life.

**Question 3:**
Explain how mean stress affects fatigue crack propagation. (CO1, CO3)

**Answer 3:**
Mean stress refers to the average stress applied over a fatigue cycle. A higher mean stress (more tensile) generally leads to increased fatigue crack growth rates. This is because:
1.  **Reduced Crack Closure:** Tensile mean stress tends to keep the crack faces open, reducing or eliminating crack closure effects, which would otherwise retard growth.
2.  **Increased Effective Driving Force:** The crack tip is subjected to higher tensile stresses on average, effectively increasing the driving force for crack extension.
Models like Walker's and Forman's incorporate mean stress effects to provide more accurate life predictions.

---

### 7. Important Points to Remember

*   **$\Delta K$ is the primary driver of fatigue crack growth.**
*   **The Paris-Erdogan law ($da/dN = C (\Delta K)^m$) is a fundamental model, but it's empirical and has limitations, especially at very low ($\Delta K_{th}$) and very high ($\approx K_{Ic}$) $\Delta K$ values.**
*   **Mean stress, material properties (yield strength, $K_{Ic}$), microstructure, and environment significantly influence crack growth rates.**
*   **Crack closure mechanisms are important for understanding deviations from ideal crack growth behavior.**
*   **Life prediction involves integrating crack growth rate data from an initial crack size to a final critical crack size.**
*   **Fail-safe design philosophy relies on crack propagation analysis to ensure a safe operating life with detectable cracks.**
*   **High-temperature operation introduces creep and creep-fatigue interactions, complicating crack propagation.**
*   **Corrosion fatigue can drastically accelerate crack growth rates compared to fatigue in a benign environment.**

---

This concludes Module 3, Topic: Crack Propagation. It is crucial to understand these principles for performing accurate failure analysis and designing reliable components that can withstand cyclic loading.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
