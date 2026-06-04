---
title: "Single Regime models - Greenshields model, Greenberg logarithmic model."
subject: "TRAFFIC ENGINEERING AND MANAGEMENT"
module: "Module 1: Fundamental parameters"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8111da"
status: "completed"
scrapedAt: "2026-05-20T18:56:13.845Z"
---
# TRAFFIC ENGINEERING AND MANAGEMENT

## Module 1: Fundamental Parameters

### Topic: Single Regime Models - Greenshields Model, Greenberg Logarithmic Model

---

This module introduces the fundamental parameters used to describe traffic flow and the basic models that relate these parameters. Understanding these relationships is crucial for analyzing and managing traffic conditions. We will focus on two classic "single regime" models: the Greenshields model and the Greenberg logarithmic model. These models assume a single, continuous relationship between flow, speed, and density across the entire range of traffic conditions.

---

### 1. Traffic Stream Characteristics (Recap/Foundation)

Before diving into the models, it's important to recall the fundamental traffic stream characteristics:

*   **Flow (q):** The rate at which vehicles pass a point or section of a road.
    *   Units: Vehicles per hour (veh/hr)
    *   Formula: $q = \frac{N}{t}$ where $N$ is the number of vehicles and $t$ is the time interval.

*   **Speed (v):** The rate of travel of a vehicle.
    *   Units: Kilometers per hour (km/hr) or Miles per hour (mph).
    *   Types:
        *   **Time Mean Speed ($v_t$):** Average speed of all vehicles passing a point over a given time.
            *   Formula: $v_t = \frac{\sum_{i=1}^{N} v_i}{N}$
        *   **Space Mean Speed ($v_s$):** Average speed of all vehicles occupying a given length of road at a given instant.
            *   Formula: $v_s = \frac{\sum_{i=1}^{N} v_i L}{L}$ (where $L$ is the length and $v_i$ is speed of vehicle $i$)
            *   **Crucial Relationship:** $v_t \ge v_s$. For traffic flow models, we typically use Space Mean Speed ($v_s$) as it's more representative of the overall traffic stream.

*   **Density (k):** The number of vehicles occupying a given length of road.
    *   Units: Vehicles per kilometer (veh/km) or Vehicles per mile (veh/mile).
    *   Formula: $k = \frac{N}{L}$ where $N$ is the number of vehicles and $L$ is the length.

*   **Fundamental Relationship:** The three parameters are fundamentally related by:
    $q = k \times v_s$

---

### 2. Greenshields Model

The Greenshields model, developed by J.G. Greenshields in the 1930s, is one of the earliest and most influential macroscopic traffic flow models. It's based on observations of highway traffic and establishes a **linear relationship between speed and density**.

#### 2.1 Key Concepts and Definitions

*   **Single Regime Model:** Assumes a continuous, predictable relationship between flow, speed, and density across all traffic states.
*   **Linear Relationship between Speed and Density:** The core assumption. As density increases, speed decreases linearly.
*   **Three Key Points:**
    1.  **Jam Density ($k_j$):** The maximum density that can occur on a roadway. At jam density, flow is zero because vehicles are stopped or moving extremely slowly. Speed is 0.
    2.  **Free Flow Speed ($v_f$):** The speed of vehicles when the traffic density is very low, and vehicles can travel at their desired speeds without significant interaction. At free flow speed, density is 0 and flow is 0 (theoretically, or very low).
    3.  **Capacity Flow ($q_c$):** The maximum flow rate the road can handle, which occurs at a specific density and speed.

#### 2.2 Model Equations

The Greenshields model is characterized by the following relationships:

*   **Speed-Density Relationship:**
    $v_s = v_f - (\frac{v_f}{k_j}) k$

    *   Where:
        *   $v_s$: Space Mean Speed (km/hr or mph)
        *   $v_f$: Free Flow Speed (km/hr or mph)
        *   $k$: Density (veh/km or veh/mile)
        *   $k_j$: Jam Density (veh/km or veh/mile)

*   **Flow-Density Relationship:**
    Substituting the speed-density equation into $q = k \times v_s$:
    $q = k \times [v_f - (\frac{v_f}{k_j}) k]$
    $q = v_f k - (\frac{v_f}{k_j}) k^2$

    This is a **parabolic relationship** between flow and density.

*   **Flow-Speed Relationship:**
    From $q = k \times v_s$, we can express $k$ in terms of $v_s$ from the speed-density equation:
    $k = k_j (1 - \frac{v_s}{v_f})$
    Substituting this into $q = k \times v_s$:
    $q = [k_j (1 - \frac{v_s}{v_f})] \times v_s$
    $q = k_j v_s - (\frac{k_j}{v_f}) v_s^2$

    This is also a **parabolic relationship** between flow and speed.

#### 2.3 Graphical Representation

The Greenshields model can be visualized with three graphs:

1.  **Speed vs. Density:** A straight line with a negative slope, starting at $(0, v_f)$ and ending at $(k_j, 0)$.
2.  **Flow vs. Density:** A parabola opening downwards, starting at $(0, 0)$, reaching a maximum flow ($q_c$) at $k = k_j/2$, and ending at $(k_j, 0)$.
3.  **Flow vs. Speed:** A parabola opening downwards, starting at $(0, 0)$, reaching a maximum flow ($q_c$) at $v_s = v_f/2$, and ending at $(v_f, 0)$.

#### 2.4 Key Observations and Properties

*   **Capacity:** Maximum flow ($q_c$) occurs at $k = k_j/2$ and $v_s = v_f/2$.
    $q_c = \frac{v_f}{2} \times \frac{k_j}{2} = \frac{v_f k_j}{4}$
*   **Symmetry:** The flow-density and flow-speed curves are symmetrical around their peak flow points.
*   **Linearity Assumption:** While simple, the strict linear speed-density relationship is an idealization. Real-world data often shows a slight curvature.
*   **Applications:** Useful for understanding basic traffic flow behavior, estimating capacity, and predicting flow under varying conditions.

#### 2.5 Example

Consider a highway segment where:
*   Free Flow Speed ($v_f$) = 100 km/hr
*   Jam Density ($k_j$) = 150 veh/km

**Calculate:**
a) The speed-density relationship.
b) The flow-density relationship.
c) The capacity flow ($q_c$) and the density and speed at capacity.

**Solution:**

a) **Speed-Density Relationship:**
   $v_s = v_f - (\frac{v_f}{k_j}) k$
   $v_s = 100 - (\frac{100}{150}) k$
   $v_s = 100 - \frac{2}{3} k$

b) **Flow-Density Relationship:**
   $q = v_f k - (\frac{v_f}{k_j}) k^2$
   $q = 100 k - (\frac{100}{150}) k^2$
   $q = 100 k - \frac{2}{3} k^2$

c) **Capacity:**
   $k_{capacity} = \frac{k_j}{2} = \frac{150}{2} = 75$ veh/km
   $v_{s, capacity} = \frac{v_f}{2} = \frac{100}{2} = 50$ km/hr
   $q_c = k_{capacity} \times v_{s, capacity} = 75 \times 50 = 3750$ veh/hr

   Alternatively, using the formula:
   $q_c = \frac{v_f k_j}{4} = \frac{100 \times 150}{4} = \frac{15000}{4} = 3750$ veh/hr

---

### 3. Greenberg Model (Logarithmic Model)

The Greenberg model, developed by J.M. Greenberg in the 1950s, is another single regime macroscopic model that relates speed and density. Unlike Greenshields, it assumes a **logarithmic relationship between speed and density**. This model is often considered to better represent flow in **congested conditions** where speeds are significantly reduced.

#### 3.1 Key Concepts and Definitions

*   **Logarithmic Relationship between Speed and Density:** As density increases, speed decreases, but at a decreasing rate. This implies that for very high densities, the reduction in speed becomes less pronounced compared to the linear model.
*   **Free Flow Speed ($v_f$):** Similar to Greenshields, this is the speed at zero density.
*   **Jam Density ($k_j$):** Similar to Greenshields, this is the maximum density.

#### 3.2 Model Equations

The Greenberg model is characterized by the following relationships:

*   **Speed-Density Relationship:**
    $v_s = c \ln(\frac{k_j}{k})$

    *   Where:
        *   $v_s$: Space Mean Speed (km/hr or mph)
        *   $c$: A constant representing the speed reduction rate, often related to $v_f$. For the model to be consistent with $v_f$ at $k=0$, the derivation usually leads to $c$ being related to $v_f$. A common form derived from observation is $v_s = v_f \left[ 1 - \frac{k}{k_j} \right]$ which is linear. However, the *logarithmic* form is derived from assuming that the rate of speed reduction decreases as density increases. A typical form used that results in a logarithmic relationship and has been empirically fitted is:
        $v_s = v_f \left[ 1 - e^{-\alpha \frac{k}{k_f}} \right]$ where $\alpha$ is a parameter.

    However, the *classic Greenberg model* as often taught in traffic engineering literature is a direct logarithmic relationship that is adjusted to match empirical data:
    $v_s = C \ln(K/k)$
    To make it consistent with $v_f$ and $k_j$:
    When $k \to 0$, $v_s \to \infty$. This is problematic for realistic traffic.
    When $k = k_j$, $v_s = 0$.
    A more practical formulation of the logarithmic model, often attributed to Greenberg or its extensions, aims to represent speed reduction:
    $v_s = v_f - b \ln(\frac{k_j}{k})$ is NOT the standard form.
    The most common representation of the Greenberg model that exhibits a logarithmic characteristic in speed reduction is:
    $v_s = c \ln(\frac{k_j}{k})$ where $c$ is a constant.
    At $k = k_j$, $v_s = c \ln(1) = 0$.
    As $k \to 0$, $v_s \to \infty$. This is not realistic.

    Let's use the form often cited for empirical fitting that captures the essence of decreasing speed reduction:
    $v_s = v_f \left[ 1 - \frac{1}{R} \ln(\frac{k}{k_0}) \right]$
    Where $k_0$ is a reference density and $R$ is another parameter.

    **A more widely accepted and simpler logarithmic form derived from empirical observations and conceptualization of speed reduction is:**

    $v_s = v_f \frac{\ln(k_j/k)}{\ln(k_j/k_0)}$ for $k \le k_j$, and $v_s=0$ for $k > k_j$.
    However, for exam purposes, the most commonly tested *concept* of Greenberg's model is the logarithmic relationship. Let's use a simplified form that captures the logarithmic decrease in speed:

    **Simplified Greenberg Model Form (for illustrative purposes):**
    $v_s = v_f - C \log_{10}(k/k_{ref})$ where $C$ is a constant and $k_{ref}$ is a reference density.
    This is still not the standard one.

    **The standard Greenberg Model that is typically presented:**
    $v_s = c \ln(\frac{k_j}{k})$
    This implies that as $k$ approaches $k_j$, $v_s$ approaches 0.
    To anchor the model at $v_f$, a reference point is needed. If we set $k = k_{ref}$ when $v_s = v_f$, then $v_f = c \ln(k_j/k_{ref})$. This allows us to find $c$.

    Let's reconsider the most common representation that relates speed reduction to density logarithmically. It's often presented as:
    $v_s = v_f - \frac{v_f}{a} \ln(\frac{k}{k_a})$ where $a$ and $k_a$ are parameters.
    This leads to $v_s = v_f (1 - \frac{1}{a} \ln(\frac{k}{k_a}))$.

    **Crucially, the key characteristic is the logarithmic reduction.**

    Let's stick to the most basic, foundational form provided in many texts for Greenberg's model:
    **$v_s = c \ln(k_j/k)$**
    Where:
    *   $v_s$: Space Mean Speed (km/hr or mph)
    *   $c$: A constant (units of speed). This constant is determined by fitting the model to data. It represents the rate at which speed decreases with density.
    *   $k$: Density (veh/km or veh/mile)
    *   $k_j$: Jam Density (veh/km or veh/mile)

*   **Flow-Density Relationship:**
    Substituting the speed-density equation into $q = k \times v_s$:
    $q = k \times [c \ln(\frac{k_j}{k})]$
    $q = c k \ln(\frac{k_j}{k})$

    This relationship is also a curve, but it doesn't have the simple parabolic form of Greenshields. It tends to increase, reach a peak, and then decrease.

*   **Flow-Speed Relationship:**
    From $v_s = c \ln(k_j/k)$, we can express $k$ in terms of $v_s$:
    $\frac{v_s}{c} = \ln(\frac{k_j}{k})$
    $e^{v_s/c} = \frac{k_j}{k}$
    $k = k_j e^{-v_s/c}$

    Substituting this into $q = k \times v_s$:
    $q = [k_j e^{-v_s/c}] \times v_s$
    $q = k_j v_s e^{-v_s/c}$

    This is an exponential decay function multiplied by speed.

#### 3.3 Graphical Representation

1.  **Speed vs. Density:** Starts at very high speeds (approaching infinity as $k \to 0$), decreases logarithmically, and reaches 0 at $k_j$. The curve is concave up.
2.  **Flow vs. Density:** Typically shows an increase from zero, reaches a peak (capacity), and then decreases to zero at $k_j$. The shape is not a simple parabola.
3.  **Flow vs. Speed:** Shows an increase from zero, reaches a peak, and then decreases to zero as speed approaches infinity (though this is not practically reachable in the model as $k$ approaches 0).

#### 3.4 Key Observations and Properties

*   **Better fit for Congested Flow:** The logarithmic reduction in speed might better represent the behavior of drivers in highly congested traffic, where the psychological impact of approaching vehicles is significant.
*   **Mathematical Complexity:** The logarithmic nature makes it slightly more complex for direct calculation compared to the linear speed-density of Greenshields.
*   **Parameter $c$:** The constant $c$ dictates how quickly speed drops with density. A higher $c$ means speed reduces more slowly.
*   **Unrealistic behavior at low densities:** The model predicts infinite speed as density approaches zero, which is unrealistic. This is a limitation.

#### 3.5 Example

Consider a freeway segment with:
*   Jam Density ($k_j$) = 160 veh/km
*   Constant $c$ = 25 km/hr (This constant is often derived from empirical data. For example, if at a density of $k_0 = 20$ veh/km, the speed is $v_0 = 80$ km/hr, then $80 = 25 \ln(160/20) = 25 \ln(8) \approx 25 \times 2.079 = 51.975$, which doesn't fit. So $c$ is an empirically derived parameter. Let's assume $c=25$ for this exercise.)

**Calculate:**
a) The speed at a density of 100 veh/km.
b) The flow at a density of 100 veh/km.
c) The density at which speed is 50 km/hr.

**Solution:**

a) **Speed at $k = 100$ veh/km:**
   $v_s = c \ln(\frac{k_j}{k})$
   $v_s = 25 \ln(\frac{160}{100})$
   $v_s = 25 \ln(1.6)$
   $v_s \approx 25 \times 0.470 = 11.75$ km/hr

b) **Flow at $k = 100$ veh/km:**
   $q = k \times v_s$
   $q = 100 \times 11.75$
   $q = 1175$ veh/hr

c) **Density at $v_s = 50$ km/hr:**
   $v_s = c \ln(\frac{k_j}{k})$
   $50 = 25 \ln(\frac{160}{k})$
   $2 = \ln(\frac{160}{k})$
   $e^2 = \frac{160}{k}$
   $k = \frac{160}{e^2}$
   $k \approx \frac{160}{7.389} \approx 21.65$ veh/km

---

### 4. Comparison of Greenshields and Greenberg Models

| Feature             | Greenshields Model                                     | Greenberg Model (Logarithmic)                            |
| :------------------ | :----------------------------------------------------- | :------------------------------------------------------- |
| **Speed-Density**   | Linear ($v_s = v_f - (v_f/k_j)k$)                      | Logarithmic ($v_s = c \ln(k_j/k)$)                       |
| **Flow-Density**    | Parabolic ($q = v_f k - (v_f/k_j)k^2$)                 | Non-parabolic ($q = ck \ln(k_j/k)$)                      |
| **Flow-Speed**      | Parabolic ($q = k_j v_s - (k_j/v_f)v_s^2$)            | Exponential decay ($q = k_j v_s e^{-v_s/c}$)            |
| **Complexity**      | Simpler                                                | More complex                                             |
| **Behavior at low k** | Predicts $v_f$ at $k=0$, $q=0$ at $k=0$             | Predicts infinite speed as $k \to 0$, $q=0$ as $k \to 0$ |
| **Behavior at high k**| Speed becomes negative beyond $k_j$, flow becomes negative | Speed approaches 0 as $k \to k_j$, flow approaches 0     |
| **Fit to Data**     | Good fit for moderate densities, less so for extremes | Can better represent congested conditions                |
| **Capacity**        | $q_c = v_f k_j / 4$ at $k = k_j/2$, $v_s = v_f/2$      | Capacity depends on the parameter $c$ and $k_j$          |

#### **Important Points to Remember:**

*   **Both are Single Regime Models:** They assume a single, continuous relationship between $q$, $v_s$, and $k$.
*   **Greenshields:** Linear speed-density, parabolic flow-density/speed. Simple and widely used as a baseline.
*   **Greenberg:** Logarithmic speed-density. Better at representing the reduction in speed in congested traffic.
*   **Real-world traffic:** Often doesn't perfectly fit either model. More complex models (e.g., two-regime models) are used for more accurate representations.
*   The fundamental relationship $q = k \times v_s$ holds for all models.

---

### 5. Practice Questions

**Question 1:**
For a road segment, the Greenshields model parameters are: Free Flow Speed ($v_f$) = 90 km/hr, and Jam Density ($k_j$) = 180 veh/km.
a) Determine the speed-density relationship.
b) Calculate the capacity flow and the density at which it occurs.

**Question 2:**
In the Greenberg model, for a freeway segment, $k_j = 150$ veh/km and the constant $c = 30$ km/hr.
a) Calculate the space mean speed when the density is 50 veh/km.
b) Calculate the flow rate at a density of 50 veh/km.
c) Determine the density when the space mean speed is 60 km/hr.

**Question 3:**
Which of the following statements about the Greenshields model is **incorrect**?
A) It assumes a linear relationship between speed and density.
B) It predicts a parabolic relationship between flow and density.
C) It is best suited for modeling heavily congested traffic conditions.
D) Capacity is assumed to occur when speed is half of the free flow speed.

**Question 4:**
The Greenberg model uses a logarithmic relationship between speed and density. What does this imply about speed reduction as density increases in congested conditions compared to the Greenshields model?

---

### 6. Answers to Practice Questions

**Answer 1:**
a) **Speed-Density Relationship:**
   $v_s = v_f - (\frac{v_f}{k_j}) k$
   $v_s = 90 - (\frac{90}{180}) k$
   $v_s = 90 - 0.5 k$

b) **Capacity:**
   $k_{capacity} = \frac{k_j}{2} = \frac{180}{2} = 90$ veh/km
   $v_{s, capacity} = \frac{v_f}{2} = \frac{90}{2} = 45$ km/hr
   $q_c = k_{capacity} \times v_{s, capacity} = 90 \times 45 = 4050$ veh/hr
   Or $q_c = \frac{v_f k_j}{4} = \frac{90 \times 180}{4} = 4050$ veh/hr

**Answer 2:**
a) **Speed at $k = 50$ veh/km:**
   $v_s = c \ln(\frac{k_j}{k})$
   $v_s = 30 \ln(\frac{150}{50})$
   $v_s = 30 \ln(3)$
   $v_s \approx 30 \times 1.0986 = 32.96$ km/hr

b) **Flow at $k = 50$ veh/km:**
   $q = k \times v_s$
   $q = 50 \times 32.96$
   $q = 1648$ veh/hr

c) **Density at $v_s = 60$ km/hr:**
   $v_s = c \ln(\frac{k_j}{k})$
   $60 = 30 \ln(\frac{150}{k})$
   $2 = \ln(\frac{150}{k})$
   $e^2 = \frac{150}{k}$
   $k = \frac{150}{e^2}$
   $k \approx \frac{150}{7.389} \approx 20.29$ veh/km

**Answer 3:**
The incorrect statement is **C) It is best suited for modeling heavily congested traffic conditions.**
The Greenshields model is a good baseline but may not accurately represent the nuances of heavily congested traffic as well as models that show a more gradual speed reduction at very high densities. The logarithmic nature of the Greenberg model is often cited as being better for this.

**Answer 4:**
The logarithmic relationship in the Greenberg model implies that as density increases in congested conditions, the rate of speed reduction **decreases**. This means that for each additional vehicle added to the road at high densities, the speed reduction is less significant than it would be under the linear reduction assumed by the Greenshields model. This can provide a more realistic representation of driver behavior in traffic jams, where drivers adapt to conditions and speed reduction might plateau or become less severe per vehicle added.

---
