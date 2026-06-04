---
title: "Geophysical methods -Seismic refraction method- procedure,  use, limitations."
subject: "ADVANCED GEOTECHNICAL INVESTIGATION"
module: "Module 3: Field Tests"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8115bb"
status: "completed"
scrapedAt: "2026-05-20T18:56:47.979Z"
---
# Advanced Geotechnical Investigation: Module 3 - Field Tests

## Topic: Geophysical Methods - Seismic Refraction Method

This module delves into advanced field testing techniques used in geotechnical investigations. We will focus on the Seismic Refraction Method, a powerful geophysical technique for understanding subsurface soil and rock properties.

---

### **Learning Outcomes:**

Upon completion of this topic, you should be able to:

*   Understand the fundamental principles of the seismic refraction method.
*   Describe the typical procedure for conducting a seismic refraction survey.
*   Identify the various uses and applications of the seismic refraction method in geotechnical engineering.
*   Recognize and discuss the limitations of the seismic refraction method.
*   Interpret basic seismic refraction data and determine subsurface layer velocities.

---

### **1. Fundamental Principles of Seismic Refraction**

The seismic refraction method relies on the principles of **wave propagation** and **Snell's Law** to infer subsurface stratigraphy and material properties.

*   **Wave Propagation:**
    *   When a seismic wave is generated (e.g., by a hammer blow or an explosion), it travels through the ground.
    *   As these waves encounter different geological layers with varying **seismic velocities (V)**, they can be refracted (bent) or reflected.
    *   The **seismic velocity** of a material is directly related to its stiffness and density. Generally, denser and stiffer materials have higher seismic velocities.

*   **Refraction at Interfaces:**
    *   When a seismic wave travels from a medium of lower velocity ($V_1$) to a medium of higher velocity ($V_2$), it bends **towards** the normal to the interface.
    *   When a seismic wave travels from a medium of higher velocity ($V_1$) to a medium of lower velocity ($V_2$), it bends **away** from the normal.
    *   **Critical Angle:** A specific angle of incidence, known as the **critical angle ($\theta_c$)**, exists. At this angle, the refracted wave travels along the interface between the two layers.
    *   **Head Wave (Coda Wave):** The wave that travels along the interface at the critical angle is called a head wave or coda wave. This wave is crucial for seismic refraction.

*   **Snell's Law:**
    *   This fundamental law of optics and wave propagation governs the bending of waves at an interface:
        $$ \frac{\sin(\theta_1)}{V_1} = \frac{\sin(\theta_2)}{V_2} = \frac{\sin(\theta_c)}{V_2} $$
    *   Where:
        *   $\theta_1$: Angle of incidence in the upper layer.
        *   $\theta_2$: Angle of refraction in the lower layer.
        *   $V_1$: Seismic velocity in the upper layer.
        *   $V_2$: Seismic velocity in the lower layer.
    *   At the critical angle ($\theta_1 = \theta_c$), $\theta_2 = 90^\circ$. Therefore, Snell's Law becomes:
        $$ \sin(\theta_c) = \frac{V_1}{V_2} $$

*   **Wavefronts and Geophones:**
    *   Seismic refraction surveys use a source (e.g., sledgehammer, seismic source) to generate seismic waves.
    *   **Geophones** (or seismometers) are placed at known distances from the source along a survey line. These devices detect the arrival of seismic waves.
    *   The **arrival time** of the seismic wave at each geophone is recorded.

*   **Travel Time Curves:**
    *   By plotting the arrival time of seismic waves at each geophone against the distance from the source, **travel time curves** are generated.
    *   These curves provide direct information about the velocity of seismic waves in different subsurface layers.

---

### **2. Procedure of a Seismic Refraction Survey**

The systematic execution of a seismic refraction survey ensures accurate data collection and interpretation.

1.  **Site Reconnaissance and Planning:**
    *   **Objective:** Define the investigation goals, identify potential geological features, and plan the survey layout.
    *   **Considerations:**
        *   Depth and nature of expected subsurface layers.
        *   Surface conditions (access, obstructions).
        *   Noise sources (traffic, construction).
        *   Desired resolution and accuracy.
    *   **Geophone Layout:** Determine the spacing and total number of geophones required. A typical layout involves a line of geophones extending from the source.

2.  **Seismic Source:**
    *   **Types:**
        *   **Impact Sources:** Sledgehammer (for shallow investigations), weight drop. Simple, portable, and common.
        *   **Explosive Sources:** Dynamite, seismic blasting charges. Used for deeper investigations or in situations where impact sources are insufficient. Requires specialized handling and permits.
        *   **Controlled Sources:** Vibrators (vibroseis). Less common for routine geotechnical surveys but offer controlled energy.
    *   **Placement:** The source is typically placed at the beginning of the geophone line. For longer surveys or to detect deeper layers, the source may be moved to different locations along the line or at the far end (reverse profiling).

3.  **Geophone Deployment:**
    *   **Placement:** Geophones are placed at predetermined, equally spaced intervals along a straight line (or sometimes a curved path for specific site geometry).
    *   **Coupling:** Ensure good contact between the geophone base and the ground to maximize signal detection and minimize surface noise. This often involves pushing the geophone into the soil or using stakes.

4.  **Data Acquisition:**
    *   **Seismic Trigger:** The seismic source is activated.
    *   **Recording System:** A multi-channel seismic recorder (seismograph) is used to record the arrival times of the seismic waves at each geophone.
    *   **Waveform Analysis:** The seismograph records the ground motion (amplitude and time) detected by each geophone. The first arrival of the seismic wave is identified on each trace.

5.  **Data Processing and Interpretation:**
    *   **First Arrival Picking:** The arrival time of the first seismic wave at each geophone is carefully "picked" from the recorded seismograms.
    *   **Travel Time Curve Plotting:**
        *   The source-to-geophone distance (offset, $x$) is plotted on the x-axis.
        *   The picked first arrival times ($t$) are plotted on the y-axis.
    *   **Analysis of Travel Time Curves:**
        *   **Direct Wave:** The initial portion of the curve, representing waves traveling directly through the shallowest layer, is a straight line with a slope equal to $1/V_1$.
        *   **Refracted Wave (Head Wave):** As the offset increases, the refracted wave that travels along the interface of deeper layers may become the first arriving wave. This portion of the curve will also be a straight line with a slope equal to $1/V_2$, $1/V_3$, etc., where $V_2$, $V_3$, etc., are the velocities of the deeper layers.
        *   **Critical Distance ($x_c$):** The distance at which the refracted wave becomes the first arrival.
        *   **Intercept Time ($t_i$):** The time intercept on the y-axis of the extrapolated straight-line segments of the travel time curve.

    *   **Calculating Layer Velocities ($V_i$):**
        *   **Two-Layer Case:**
            *   $V_1$: Determined from the slope of the initial segment of the travel time curve: $V_1 = \text{offset}/\text{time}$.
            *   $V_2$: Determined from the slope of the later segment: $V_2 = \text{offset}/\text{time}$.
            *   The critical distance $x_c$ is related to the velocities and layer thickness.
        *   **Multi-Layer Case:**
            *   Velocities of successive layers ($V_1, V_2, V_3, \ldots$) are determined from the slopes of successive linear segments of the travel time curve.
            *   The depth to each interface can be calculated using the critical distances and intercept times. For a two-layer case:
                $$ h_1 = \frac{1}{2} V_1 t_{i1} $$
                Where $h_1$ is the depth to the first layer and $t_{i1}$ is the intercept time for the first refracted wave.

6.  **Reverse Profiling (Optional but Recommended):**
    *   To mitigate the effect of dipping layers and velocity inversions, surveys are often conducted in both directions along the same line.
    *   This involves placing the source at the opposite end of the geophone line and repeating the data acquisition.
    *   Averaging results from forward and reverse profiles helps to obtain more reliable velocity and depth estimates.

---

### **3. Uses of the Seismic Refraction Method in Geotechnical Engineering**

The seismic refraction method is versatile and widely applied in various geotechnical investigations.

*   **Determining Depth to Bedrock:**
    *   This is a primary application, especially in construction and foundation design.
    *   Bedrock typically has significantly higher seismic velocities than overlying soil or weathered rock.
    *   Example: Estimating the depth to competent rock for the placement of bridge piers or building foundations.

*   **Identifying Subsurface Stratigraphy:**
    *   Different soil types and rock formations often have distinct seismic velocities.
    *   The method can distinguish between layers of sand, clay, gravel, weathered rock, and intact rock.
    *   Example: Mapping layers of soft clay beneath a layer of sand for embankment design.

*   **Mapping the Water Table:**
    *   The seismic velocity of saturated soils is generally higher than that of dry soils due to the increased stiffness of the pore fluid.
    *   A significant increase in seismic velocity can indicate the presence of the water table.
    *   Example: Identifying the depth of the water table for dewatering operations or foundation settlement analysis.

*   **Assessing Soil and Rock Properties:**
    *   **Seismic Velocity ($V_p$):** Directly measured.
    *   **Dynamic Elastic Modulus ($E_d$):** Can be estimated from seismic velocity and density. For compressional waves ($V_p$):
        $$ E_d = \rho V_p^2 \frac{(1 + \nu)(1 - 2\nu)}{(1 - \nu)} $$
        Where $\rho$ is the bulk density and $\nu$ is Poisson's ratio. A simpler approximation for many soils is $E_d \approx 2.5 \rho V_s^2$ (where $V_s$ is shear wave velocity), but $V_p$ is directly measured.
    *   **Shear Wave Velocity ($V_s$):** While the refraction method primarily measures compressional wave velocity ($V_p$), the shear wave velocity ($V_s$) can also be estimated or measured using seismic reflection or specialized shear wave refraction techniques. $V_s$ is crucial for seismic design and evaluating liquefaction potential.
    *   **Poisson's Ratio ($\nu$):** Can be estimated if both $V_p$ and $V_s$ are known.

*   **Evaluating Degree of Weathering:**
    *   Weathered rock often exhibits lower seismic velocities compared to intact rock due to fracturing and altered mineralogy.
    *   Example: Differentiating between highly weathered rock, moderately weathered rock, and fresh rock for tunnel design or slope stability analysis.

*   **Locating Buried Structures and Anomalies:**
    *   Sudden changes in seismic velocity can indicate the presence of buried objects like old foundations, utilities, or sinkholes.
    *   Example: Investigating potential sinkhole development beneath a proposed construction site.

*   **Site Characterization for Seismic Design:**
    *   Seismic velocities are critical inputs for site response analysis and seismic hazard assessment.
    *   Understanding the stiffness profile of the ground helps predict how seismic waves will propagate and amplify during an earthquake.

---

### **4. Limitations of the Seismic Refraction Method**

Despite its utility, the seismic refraction method has several limitations that must be considered.

*   **Velocity Inversion (Subsurface Layers with Decreasing Velocity with Depth):**
    *   **Problem:** The method relies on the assumption that seismic velocity increases with depth. If a layer with a lower velocity underlies a layer with a higher velocity, the refracted waves will not be detected.
    *   **Consequence:** Deeper, lower-velocity layers will be missed, leading to an incorrect interpretation of the subsurface.
    *   **Example:** A layer of dense gravel (high velocity) overlying a soft clay layer (low velocity). The refracted wave in the clay would not be detected by geophones placed further away.

*   **Hidden Layer Problem:**
    *   **Problem:** Similar to velocity inversion, if a layer has a velocity only slightly higher than the layer above it, or if its thickness is very small, the refracted wave from that layer might not become the first arrival within the survey range.
    *   **Consequence:** The presence and properties of thin or marginally higher-velocity layers can be obscured.

*   **Dipping Layers:**
    *   **Problem:** If geological layers are not horizontal but are dipping, the apparent velocity measured will depend on the direction of the survey relative to the dip.
    *   **Consequence:** This can lead to erroneous estimates of layer velocities and depths.
    *   **Mitigation:** Reverse profiling (conducting surveys in opposite directions) helps to identify dipping layers and obtain more accurate velocities.

*   **Ambiguity in Interpretation:**
    *   **Problem:** Different combinations of layer velocities and thicknesses can produce similar travel time curves, leading to multiple possible interpretations.
    *   **Consequence:** Careful data analysis and often integration with other geophysical methods or boreholes are necessary for reliable interpretation.

*   **Surface Noise and Interference:**
    *   **Problem:** Ambient noise from traffic, wind, or nearby construction can interfere with the detection of weak seismic signals.
    *   **Consequence:** Can make it difficult to pick first arrivals accurately, especially at longer offsets.
    *   **Mitigation:** Careful site selection, use of appropriate geophones, shielding, and noise reduction techniques are important.

*   **Limited Resolution for Thin Layers:**
    *   **Problem:** The method is generally not effective for resolving very thin layers. The thickness of a layer must be significant enough for the refracted wave to become the first arrival at observable offsets.
    *   **Consequence:** Thin but important layers might be missed or their properties averaged with adjacent layers.

*   **Dependence on Source Energy:**
    *   **Problem:** The penetration depth and the signal strength are directly related to the energy of the seismic source.
    *   **Consequence:** Shallow investigations can be performed with simple sources, but deeper targets require more powerful (and often more expensive and hazardous) sources.

*   **Velocity Dependence:**
    *   **Problem:** The accuracy of depth calculations relies heavily on the accuracy of the determined velocities.
    *   **Consequence:** Small errors in velocity estimation can lead to significant errors in depth calculations, especially at greater depths.

*   **Environmental Factors:**
    *   **Problem:** Ground conditions, such as highly fractured or porous materials, can attenuate seismic waves quickly, limiting the range of the survey.
    *   **Consequence:** Can restrict the ability to probe to desired depths.

---

### **5. Practice Questions and Exercises**

**Question 1:**
What is the fundamental principle that the seismic refraction method relies on for subsurface investigation?
a) Reflection of seismic waves
b) Diffraction of seismic waves
c) Refraction of seismic waves at interfaces
d) Attenuation of seismic waves

**Question 2:**
In the seismic refraction method, what is the critical angle?
a) The angle at which the refracted wave travels parallel to the interface.
b) The angle at which the refracted wave is totally reflected back into the incident layer.
c) The angle of incidence in the upper layer for which the angle of refraction in the lower layer is 90 degrees.
d) The angle of incidence at which the wave energy is completely absorbed.

**Question 3:**
A seismic refraction survey is conducted, and the first arrival times are recorded at geophones placed at increasing distances from the source. The travel time curve shows a straight-line segment with a slope of $0.005 \, s/m$ followed by a segment with a slope of $0.002 \, s/m$. What are the seismic velocities of the two layers?

**Question 4:**
Which of the following is a significant limitation of the seismic refraction method?
a) It can easily detect layers with decreasing velocity with depth.
b) It is highly effective at resolving very thin subsurface layers.
c) It assumes that seismic velocity increases with depth.
d) It is not affected by surface noise.

**Question 5:**
Explain why reverse profiling is often recommended in seismic refraction surveys.

---

### **Answers to Practice Questions:**

**Answer 1:**
c) Refraction of seismic waves at interfaces

**Answer 2:**
c) The angle of incidence in the upper layer for which the angle of refraction in the lower layer is 90 degrees.

**Answer 3:**
The slope of the travel time curve represents the reciprocal of the seismic velocity ($m/s$ or $km/s$).
*   For the first segment, slope = $1/V_1 = 0.005 \, s/m$.
    Therefore, $V_1 = 1 / 0.005 \, s/m = 200 \, m/s$.
*   For the second segment, slope = $1/V_2 = 0.002 \, s/m$.
    Therefore, $V_2 = 1 / 0.002 \, s/m = 500 \, m/s$.
The seismic velocities are $V_1 = 200 \, m/s$ and $V_2 = 500 \, m/s$.

**Answer 4:**
c) It assumes that seismic velocity increases with depth. (This is the reason why velocity inversions are a problem).

**Answer 5:**
Reverse profiling is recommended to account for dipping layers and to mitigate the effects of velocity anisotropy. When layers are dipping, the apparent velocity measured in one direction can be different from the true velocity and the velocity measured in the opposite direction. By conducting surveys from both ends of the geophone spread, one can calculate true layer velocities and identify the direction and magnitude of dip. It also helps in identifying potential velocity inversions or hidden layers that might be missed in a single-direction survey.

---

### **Important Points to Remember:**

*   **$V_{layer}$ increases with depth:** This is the fundamental assumption for successful refraction.
*   **Snell's Law is key:** It governs wave bending at layer interfaces.
*   **Travel time curves are interpreted:** Slopes give velocities, intercepts help with depth.
*   **Velocity inversion is the biggest limitation:** It hides deeper, slower layers.
*   **Reverse profiling is essential:** For accurate results, especially with dipping layers.
*   **Applications are broad:** Depth to bedrock, stratigraphy, water table, material properties.
*   **Resolution is limited:** Thin layers can be difficult to detect.

---
