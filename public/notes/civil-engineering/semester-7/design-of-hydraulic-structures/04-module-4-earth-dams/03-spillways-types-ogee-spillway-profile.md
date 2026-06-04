---
title: "Spillways-types-Ogee spillway profile"
subject: "DESIGN OF HYDRAULIC STRUCTURES"
module: "Module 4: Earth dams"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba81171a"
status: "completed"
scrapedAt: "2026-05-20T18:57:56.143Z"
---
# DESIGN OF HYDRAULIC STRUCTURES - Module 4: Earth Dams

## Topic: Spillways - Types - Ogee Spillway Profile

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the necessity and function of spillways in earth dams.
*   Identify and describe different types of spillways.
*   Explain the principles behind the design of an ogee spillway profile.
*   Calculate key parameters related to ogee spillway discharge capacity.
*   Appreciate the factors influencing the selection of an ogee spillway.

---

### 1. Introduction to Spillways in Earth Dams

*   **Definition:** A spillway is a hydraulic structure designed to safely pass excess water from a reservoir formed by a dam during floods or other high-water events, thereby preventing the dam from overtopping.
*   **Necessity:**
    *   **Flood Control:** To protect the dam structure from catastrophic failure due to overtopping by excessive inflow.
    *   **Reservoir Level Regulation:** To maintain the reservoir water level within safe operating limits.
    *   **Hydropower Generation (sometimes):** While the primary purpose is safety, some spillways can be integrated with powerhouses.
*   **Location:** Spillways are typically located adjacent to the dam body or may be integrated within it.

---

### 2. Types of Spillways

Spillways can be broadly classified based on their design and operation. Here are some common types relevant to earth dams:

*   **Gated Spillways:**
    *   **Description:** Feature gates (e.g., radial, stop logs) at the crest to control the flow of water.
    *   **Advantages:** Precise control over reservoir levels, flexibility in discharge regulation.
    *   **Disadvantages:** Higher construction cost, require operation and maintenance.
    *   **Example:** Gates are often used in larger dams to manage downstream releases for irrigation or water supply in addition to flood control.

*   **Ungated Spillways:**
    *   **Description:** Do not have gates; water flows over the crest freely once the reservoir level reaches the spillway crest.
    *   **Advantages:** Simpler construction, lower maintenance.
    *   **Disadvantages:** Less control over reservoir levels, may have higher crest elevation to accommodate maximum flood.
    *   **Types of Ungated Spillways:**
        *   **Chute Spillway (Straight Drop Spillway):** Water falls vertically down a concrete chute.
        *   **Saddle Spillway:** Located in a natural depression (saddle) on the ridge line, bypassing the dam.
        *   **Shaft Spillway (Morning Glory Spillway):** Water enters a vertical shaft and then flows through a tunnel or conduit.
        *   **Ogee Spillway (Crest Spillway):** Characterized by a specially shaped crest that conforms to the streamline flow of water. This is the focus of our current topic.

---

### 3. The Ogee Spillway Profile

*   **Definition:** An ogee spillway, also known as a crest spillway or overflow spillway, is characterized by its specifically designed crest profile. This profile is shaped to match the natural trajectory of water flowing over the crest, minimizing negative pressures and maximizing discharge efficiency.
*   **Principle of Design:**
    *   The ogee profile is based on the concept of **free flow** over the crest, meaning the water jet is essentially unsupported between the crest and the downstream energy dissipator.
    *   The profile is designed to ensure that the **velocity of approach** is accounted for and the flow is **aerodynamically smooth**.
    *   **Negligible Sub-atmospheric Pressure:** A well-designed ogee spillway aims to keep the pressure on the crest surface close to atmospheric pressure. This prevents cavitation and ensures structural integrity.
    *   **Conformity to Free Jet Trajectory:** The ideal ogee shape is derived from the trajectory of a free-falling nappe (water sheet) under gravity.
*   **Standard Ogee Profile:**
    *   The standard ogee profile is typically defined by a series of curves (often parabolic and circular) that ascend from the upstream face, curve over the crest, and descend down the downstream face.
    *   The original ogee profile was based on the work of **Creager**, which provided empirical formulas for designing the profile based on head over the spillway and a discharge coefficient.
    *   **USBR (United States Bureau of Reclamation) Profile:** Modern designs often use the USBR profile, which is also based on aerodynamic principles and aims for improved performance. It is typically defined by a family of curves dependent on the head over the spillway ($H$).

*   **Mathematical Representation (Conceptual):**
    *   While the exact equations can be complex and often involve iterative calculations or software, the general idea is to define the crest shape as a function of the head ($H$).
    *   The profile can be approximated by parabolic segments. For a given head $H$ over the crest, the trajectory of a nappe can be represented by:
        $$y = \frac{x^2}{2g \left(\frac{Q}{CL}\right)^2}$$
        where:
        *   $y$ is the vertical distance from the crest
        *   $x$ is the horizontal distance from the crest
        *   $g$ is acceleration due to gravity
        *   $Q$ is the discharge over the spillway
        *   $C$ is the discharge coefficient
        *   $L$ is the length of the spillway crest
    *   The ogee shape essentially "fits" this trajectory, with adjustments for velocity of approach and to avoid negative pressures.

*   **Key Components of an Ogee Spillway:**
    *   **Approach Channel:** The channel leading water to the spillway crest.
    *   **Spillway Crest:** The overflow section, shaped according to the ogee profile.
    *   **Spillway Chute (or Trough):** The inclined channel downstream of the crest where water flows at high velocity.
    *   **Energy Dissipator:** A structure at the end of the chute (e.g., stilling basin, bucket) to reduce the kinetic energy of the water before it enters the downstream river.

---

### 4. Discharge Capacity of an Ogee Spillway

*   **Basic Formula:** The discharge ($Q$) over a broad-crested weir or spillway is generally given by:
    $$Q = C_d \cdot L \cdot H^{1.5}$$
    where:
    *   $Q$ is the discharge (m³/s or cfs)
    *   $C_d$ is the coefficient of discharge (dimensionless)
    *   $L$ is the effective length of the spillway crest (m or ft)
    *   $H$ is the hydraulic head over the crest (m or ft)

*   **Coefficient of Discharge ($C_d$):**
    *   For an ogee spillway, $C_d$ is typically greater than for a sharp-crested weir (which is around 2.6 to 2.67).
    *   $C_d$ for ogee spillways is influenced by:
        *   **Shape of the ogee profile:** Standard profiles have empirically determined $C_d$ values.
        *   **Head ($H$):** $C_d$ can vary slightly with the head.
        *   **Piers and Abutments:** The presence of piers and abutments reduces the effective crest length and can affect $C_d$. These are accounted for by reduction coefficients.
        *   **Gate Slots and Other Protrusions:** These also reduce effective length and $C_d$.
    *   **Typical $C_d$ Values:** For standard ogee profiles under free-flow conditions, $C_d$ can range from **3.6 to 4.0** (in SI units, typically 3.67 for a sharp-crested weir when using $H^{1.5}$). For US customary units, it might be around 3.0 (for a sharp-crested weir when using $H^{1.5}$). **It's crucial to refer to specific design codes and empirical data for accurate $C_d$ values.**

*   **Effective Crest Length ($L$):**
    *   The actual geometric length of the crest.
    *   **Correction for Piers:** If the spillway has piers, the effective length is reduced.
        $$L_{eff} = L_{geom} - n \cdot k_p \cdot H^{0.5}$$
        where:
        *   $L_{eff}$ is the effective crest length
        *   $L_{geom}$ is the geometric crest length
        *   $n$ is the number of piers
        *   $k_p$ is a coefficient depending on pier shape (typically around 0.06 to 0.07 for square-ended piers in SI units)
        *   $H$ is the head over the spillway crest

*   **Correction for Velocity of Approach ($H_a$):**
    *   The velocity of water approaching the spillway crest contributes to the head.
    *   The total effective head is $H_{total} = H + H_a$.
    *   $H_a = \frac{v_a^2}{2g}$, where $v_a$ is the average velocity of approach in the approach channel.
    *   The discharge formula becomes:
        $$Q = C_d \cdot L_{eff} \cdot (H + H_a)^{1.5}$$
    *   In practice, $H_a$ is often incorporated into an adjusted discharge coefficient, or calculated iteratively.

*   **Example Calculation:**
    *   **Problem:** An ogee spillway has a geometric crest length of 50 m. The maximum head over the crest during a design flood is 4.0 m. There are 3 piers, each 2 m wide. The coefficient of discharge $C_d$ is 3.8. Calculate the discharge capacity.
    *   **Solution:**
        1.  **Calculate the effective crest length ($L_{eff}$):**
            *   Assume $k_p = 0.06$ (for simplicity, refer to design codes for specific values).
            *   $L_{geom} = 50$ m
            *   $n = 3$
            *   $H = 4.0$ m
            *   $L_{eff} = 50 - 3 \cdot (0.06 \cdot 4.0^{0.5})$
            *   $L_{eff} = 50 - 3 \cdot (0.06 \cdot 2)$
            *   $L_{eff} = 50 - 3 \cdot (0.12)$
            *   $L_{eff} = 50 - 0.36 = 49.64$ m

        2.  **Calculate the discharge ($Q$):**
            *   $Q = C_d \cdot L_{eff} \cdot H^{1.5}$
            *   $Q = 3.8 \cdot 49.64 \cdot (4.0)^{1.5}$
            *   $Q = 3.8 \cdot 49.64 \cdot 8$
            *   $Q \approx 1886.32$ m³/s

---

### 5. Factors Influencing the Selection of an Ogee Spillway

*   **Economy:** Ogee spillways are generally more economical for moderate to high heads compared to other types of ungated spillways like chute spillways for very high drops.
*   **Discharge Capacity:** They offer high discharge capacity for a given crest length due to their efficient profile.
*   **Site Conditions:**
    *   **Topography:** Suitable for sites where a relatively short spillway structure can be accommodated.
    *   **Geology:** The foundation must be able to support the spillway structure and withstand the impact of flowing water.
*   **Dam Type:** Commonly used with various dam types, including earth dams, rockfill dams, and concrete dams.
*   **Downstream Considerations:** The design of the energy dissipation structure is critical and depends on the downstream river characteristics.
*   **Maintenance:** Relatively low maintenance compared to gated spillways.

---

### 6. Important Points to Remember

*   **Ogee profile is designed to match the free jet trajectory for maximum efficiency and to avoid negative pressures.**
*   **The discharge capacity depends on the crest length, head over the crest, and the coefficient of discharge ($C_d$).**
*   **$C_d$ for ogee spillways is empirically determined and influenced by the profile shape and flow conditions.**
*   **Corrections for piers and velocity of approach are essential for accurate discharge calculations.**
*   **Ogee spillways are a common and efficient choice for passing floodwaters from reservoirs.**
*   **The design of the energy dissipation system downstream of the ogee spillway is as crucial as the spillway crest itself.**

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary function of a spillway in an earth dam?

**Question 2:**
List three different types of ungated spillways.

**Question 3:**
Explain the principle behind the ogee spillway profile. What is the main advantage of this profile compared to a sharp-crested weir?

**Question 4:**
The discharge over an ogee spillway is given by $Q = C_d \cdot L \cdot H^{1.5}$. What do the symbols $C_d$, $L$, and $H$ represent? What are the typical ranges for $C_d$ for an ogee spillway?

**Question 5:**
An ogee spillway has a geometric crest length of 60 m. The design flood results in a head of 3.0 m over the crest. There are 2 piers, each 1.5 m wide. Assume $C_d = 3.7$ and $k_p = 0.06$. Calculate the discharge capacity of the spillway. (Ignore velocity of approach for this problem).

---

### Answers to Practice Questions

**Answer 1:**
The primary function of a spillway in an earth dam is to safely release excess water from the reservoir during floods or high inflows, preventing the dam from being overtopped, which could lead to catastrophic failure.

**Answer 2:**
Three different types of ungated spillways are:
1.  Chute Spillway (Straight Drop Spillway)
2.  Saddle Spillway
3.  Shaft Spillway (Morning Glory Spillway)
4.  Ogee Spillway (Crest Spillway)

**Answer 3:**
The principle behind the ogee spillway profile is to match the natural trajectory of the water nappe flowing over the crest. This smooth profile ensures that the water adheres to the spillway surface, minimizing the formation of negative pressures (suction) and maximizing the discharge efficiency for a given crest length and head. The advantage compared to a sharp-crested weir is a significantly higher discharge coefficient, meaning it can pass more water for the same dimensions and head.

**Answer 4:**
*   $C_d$: Coefficient of discharge. It accounts for the efficiency of the spillway crest and the shape of the flow. For ogee spillways, typical values are around **3.6 to 4.0** (SI units).
*   $L$: Effective length of the spillway crest. This is the geometric length corrected for obstructions like piers and gate slots.
*   $H$: Hydraulic head over the spillway crest. This is the vertical distance from the reservoir water surface to the spillway crest.

**Answer 5:**
1.  **Calculate the effective crest length ($L_{eff}$):**
    *   $L_{geom} = 60$ m
    *   $n = 2$
    *   $H = 3.0$ m
    *   $k_p = 0.06$
    *   $L_{eff} = L_{geom} - n \cdot k_p \cdot H^{0.5}$
    *   $L_{eff} = 60 - 2 \cdot (0.06 \cdot 3.0^{0.5})$
    *   $L_{eff} = 60 - 2 \cdot (0.06 \cdot 1.732)$
    *   $L_{eff} = 60 - 2 \cdot (0.10392)$
    *   $L_{eff} = 60 - 0.20784 \approx 59.79$ m

2.  **Calculate the discharge ($Q$):**
    *   $Q = C_d \cdot L_{eff} \cdot H^{1.5}$
    *   $Q = 3.7 \cdot 59.79 \cdot (3.0)^{1.5}$
    *   $Q = 3.7 \cdot 59.79 \cdot 5.196$
    *   $Q \approx 1150.8$ m³/s
