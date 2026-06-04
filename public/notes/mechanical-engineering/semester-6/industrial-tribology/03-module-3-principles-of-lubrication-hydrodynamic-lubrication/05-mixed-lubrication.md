---
title: "Mixed lubrication"
subject: "INDUSTRIAL TRIBOLOGY"
module: "Module 3: Principles of Lubrication: Hydrodynamic lubrication"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463808"
status: "completed"
scrapedAt: "2026-05-20T18:05:06.258Z"
---
## Industrial Tribology: Module 3: Principles of Lubrication: Hydrodynamic Lubrication

### Topic: Mixed Lubrication

This topic delves into the lubrication regime that exists between the ideal hydrodynamic lubrication and boundary lubrication, where both the lubricant film and direct solid-solid contact play a significant role in friction and wear.

---

### 1. Introduction to Mixed Lubrication

Mixed lubrication is a transitional regime where the lubricant film thickness is comparable to the combined roughness of the contacting surfaces. This means that the asperities on both surfaces can intermittently come into contact, even though a continuous lubricant film is present.

*   **Key Concept:** Asperity interactions are a defining characteristic of mixed lubrication.
*   **Distinction from other regimes:**
    *   **Hydrodynamic Lubrication:** Assumes a complete separation of surfaces by a continuous lubricant film.
    *   **Boundary Lubrication:** Characterized by the absence of a continuous lubricant film, relying on adsorbed molecular layers for protection.
    *   **Elastohydrodynamic Lubrication (EHL):** A specific form of hydrodynamic lubrication where elastic deformation of the surfaces is significant, leading to a thicker film than predicted by pure hydrodynamic theory. Mixed lubrication can occur in conjunction with EHL under certain conditions.

---

### 2. Characteristics of Mixed Lubrication

*   **Partial Film Formation:** A lubricant film exists, but its thickness is not sufficient to completely separate all asperities.
*   **Asperity Inter-penetration:** The peaks of the surface roughness on opposing surfaces can penetrate the lubricant film and make direct contact.
*   **Load Sharing:** The total load is shared between the lubricant film (hydrodynamic pressure) and the asperity contacts.
*   **Increased Friction and Wear:** Compared to hydrodynamic lubrication, mixed lubrication typically results in higher friction and wear due to the asperity interactions. However, it's generally less severe than boundary lubrication.
*   **Influence of Surface Roughness:** Surface roughness parameters (e.g., RMS roughness, average roughness, peak heights) significantly influence the behavior in mixed lubrication.
*   **Influence of Lubricant Properties:** Viscosity, film-forming additives, and shear properties of the lubricant are crucial.
*   **Dependence on Operating Conditions:** Load, speed, and temperature play a vital role in determining whether a system operates in the mixed lubrication regime.

---

### 3. Theoretical Models for Mixed Lubrication

Developing accurate theoretical models for mixed lubrication is challenging due to the complexity of asperity interactions. Several approaches have been developed:

*   **Statistical Models:**
    *   These models use statistical representations of surface topography (e.g., Gaussian distribution of heights) to predict the probability of asperity contact.
    *   **Key Concept:** Rely on statistical analysis of surface roughness data.
    *   **Example:** The Greenwood-Williamson (GW) contact model, originally developed for elastic contact, can be extended to incorporate mixed lubrication by considering the contribution of the lubricant film. (Refer to Williams, 2005 for detailed discussions on contact mechanics).

*   **Flow Reduction Factor Models:**
    *   These models account for the fact that the presence of asperities disrupts the smooth flow of the lubricant, reducing the effective film thickness or the generated hydrodynamic pressure.
    *   **Key Concept:** Introduce a "flow reduction factor" to modify hydrodynamic lubrication theories.

*   **Combined Models:**
    *   Many modern models combine elements of hydrodynamic lubrication theory with asperity contact models.
    *   **Approach:** The total load is calculated by summing the load supported by the lubricant film and the load supported by asperity contacts.
    *   **Equation (Conceptual):**
        $$ W_{total} = W_{hydrodynamic} + W_{asperity} $$
        Where:
        *   $W_{total}$ is the total applied load.
        *   $W_{hydrodynamic}$ is the load supported by the lubricant film pressure.
        *   $W_{asperity}$ is the load supported by direct asperity contacts.

*   **Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA):**
    *   These advanced numerical techniques can be used to model the complex flow of lubricant and the contact of individual asperities with high fidelity.
    *   **Application:** Useful for understanding localized effects and designing specific tribological components. (Refer to Stachowiak & Batchelor, 2000 for insights into advanced modeling techniques).

---

### 4. Factors Influencing Mixed Lubrication

*   **Surface Roughness:**
    *   **Higher Roughness:** Increases the likelihood and severity of asperity contact.
    *   **Surface Texture:** Specific surface textures (e.g., dimples, grooves) can influence the transition into and behavior within the mixed lubrication regime. (Refer to Bhushan, 2013 for discussions on surface texturing).

*   **Lubricant Viscosity:**
    *   **Lower Viscosity:** Leads to thinner films, promoting mixed lubrication.
    *   **Higher Viscosity:** Favors thicker films, pushing the system towards hydrodynamic lubrication.

*   **Load:**
    *   **Higher Load:** Compresses the lubricant film, increasing the probability of asperity contact.

*   **Speed:**
    *   **Lower Speed:** Reduces the rate of lubricant film formation, increasing the likelihood of asperity contact.

*   **Temperature:**
    *   **Higher Temperature:** Decreases lubricant viscosity, potentially leading to thinner films and mixed lubrication.

*   **Lubricant Additives:**
    *   **Anti-wear (AW) and Extreme Pressure (EP) Additives:** These additives are designed to form protective films on surfaces under conditions of high stress, which can mitigate the effects of asperity contact in mixed lubrication. (Refer to Lansdown, 2003 for detailed information on lubricant additives).

---

### 5. Consequences of Mixed Lubrication

*   **Increased Friction:**
    *   Asperity-asperity friction is generally higher than fluid friction.
    *   **Result:** Higher energy dissipation and potential for overheating.

*   **Wear:**
    *   **Abrasion:** Direct contact between asperities can cause material removal (abrasive wear).
    *   **Adhesion:** Welded junctions can form between contacting asperities and then fracture, leading to adhesive wear.
    *   **Surface Fatigue:** Repeated asperity contact can lead to surface fatigue and spalling.
    *   **Delamination:** In some cases, wear can occur in layers. (Refer to Hutchings, 2017 for comprehensive coverage of wear mechanisms).

*   **Surface Damage:**
    *   Scuffing and scoring can occur under severe mixed lubrication conditions.

---

### 6. Design Considerations for Mixed Lubrication

*   **Surface Topography Control:**
    *   Designing surfaces with controlled roughness or optimized textures can manage the extent of asperity contact.
    *   **Example:** Using specific finishing processes (honing, lapping) to achieve desired surface profiles.

*   **Lubricant Selection:**
    *   Choosing lubricants with appropriate viscosity, film strength, and effective additives (AW/EP) is crucial.
    *   **Example:** Selecting a mineral oil with AW additives for moderate loads and speeds, or a synthetic oil with EP additives for higher loads.

*   **Component Geometry:**
    *   Designing components to maintain adequate film thickness under expected operating conditions.
    *   **Example:** Proper bearing clearance design.

*   **Operating Condition Management:**
    *   Ensuring that operating loads and speeds do not push the system into excessively severe mixed lubrication.

---

### 7. Examples of Mixed Lubrication in Industry

*   **Camshafts and Tappets in Internal Combustion Engines:** During engine start-up and low-speed operation, the lubricant film can be thin, leading to mixed lubrication between the cam and tappet.
*   **Gears:** Especially at lower speeds or during transient conditions (e.g., gear shifting), gears can operate in the mixed lubrication regime.
*   **Piston Rings and Cylinder Liners:** While generally operating in a mixed or boundary regime, the interaction between piston rings and cylinder liners is a prime example of where surface topography and lubricant film thickness are critical.
*   **Plain Bearings:** Particularly at start-up, shut-down, and under high loads, plain bearings can experience mixed lubrication.
*   **Machine Tool Spindles:** During low-speed operation or with viscous lubricants, mixed lubrication can be encountered.

---

### 8. Bridging to Other Lubrication Regimes

*   **Transition to Hydrodynamic:** As speed increases or load decreases, the lubricant film thickness increases, moving the system towards fully hydrodynamic lubrication.
*   **Transition to Boundary:** If the load increases significantly, speed decreases drastically, or lubricant viscosity drops, the film can become too thin to support the load, leading to boundary lubrication.

---

### Learning Outcomes Addressed

*   **CO1 (Explain fundamental principles of Tribology):** This topic builds upon the fundamental principles of friction and lubrication by introducing a real-world operating regime. Understanding mixed lubrication is crucial for a holistic understanding of tribological systems.
*   **CO2 (Understand Surface characterisation techniques for tribological investigations):** Knowledge of surface roughness (as characterized by techniques like profilometry or AFM) is essential for predicting and understanding behavior in mixed lubrication.
*   **CO3 (Explain Wear Measurement Techniques):** The increased wear in mixed lubrication necessitates an understanding of how to measure wear (e.g., gravimetric, profilometric) to assess the severity of the regime.
*   **CO4 (Select and Evaluate Lubricants and Surface Treatments):** The selection of appropriate lubricants (viscosity, additives) and consideration of surface treatments are directly influenced by the likelihood of operating in the mixed lubrication regime.
*   **CO5 (Apply tribological knowledge in industrial applications):** Understanding mixed lubrication is critical for diagnosing and preventing premature wear and failure in many industrial components, as highlighted by the examples provided.

---

### Important Points to Remember

*   **Mixed lubrication is a transitional regime.**
*   **Asperity contact is the defining feature.**
*   **Load is shared between lubricant film and asperities.**
*   **Surface roughness is a critical parameter.**
*   **Friction and wear are higher than in hydrodynamic lubrication.**
*   **Lubricant properties and operating conditions dictate the regime.**
*   **Effective management of mixed lubrication involves careful design of surfaces, lubricants, and operating parameters.**

---

### Practice Questions & Exercises

**Question 1:**
Define mixed lubrication and explain how it differs from hydrodynamic and boundary lubrication.

**Answer:**
Mixed lubrication is a regime where the lubricant film thickness is comparable to the combined surface roughness of the contacting surfaces. This means that while a lubricant film is present, asperities on both surfaces can intermittently make direct contact.
*   **Hydrodynamic Lubrication:** Surfaces are completely separated by a continuous lubricant film.
*   **Boundary Lubrication:** No continuous lubricant film exists; lubrication relies on adsorbed molecular layers.

**Question 2:**
What are the primary consequences of operating in the mixed lubrication regime?

**Answer:**
The primary consequences are increased friction and wear. Wear mechanisms include abrasion, adhesion, and surface fatigue due to asperity-asperity contact. Increased friction leads to higher energy dissipation.

**Question 3:**
How does surface roughness influence the onset and severity of mixed lubrication?

**Answer:**
Higher surface roughness increases the probability and extent of asperity-asperity contact, thus promoting mixed lubrication and potentially making it more severe. Conversely, smoother surfaces reduce the likelihood of contact and favor hydrodynamic lubrication.

**Question 4 (Application-based):**
Consider a plain journal bearing operating under varying load conditions. During start-up and shutdown, the speed is low, and the load might be relatively high. Which lubrication regime is most likely to occur, and what lubricant properties would be beneficial to mitigate potential issues?

**Answer:**
During start-up and shutdown with low speed and potentially high load, the lubricant film thickness is likely to be insufficient to completely separate the surfaces, leading to **mixed lubrication**.
Beneficial lubricant properties would include:
*   **Appropriate viscosity:** A viscosity that is not too low at operating temperature but sufficient to build some film at low speeds.
*   **Anti-wear (AW) additives:** These additives form protective layers on the metal surfaces under moderate to high contact pressures, reducing wear during asperity interactions.
*   **Extreme Pressure (EP) additives (if loads are very high):** These additives are designed for even higher pressures and temperatures, reacting with metal surfaces to prevent catastrophic welding.
*   **Good film strength:** Ability of the lubricant to resist rupture under pressure.

**Question 5 (Conceptual):**
Explain the concept of "flow reduction factor" in the context of mixed lubrication modeling.

**Answer:**
The flow reduction factor is a parameter used in simplified models of mixed lubrication. It accounts for the fact that the presence of surface asperities disrupts the continuous flow of the lubricant and reduces the effective area for hydrodynamic pressure generation. This factor effectively modifies the standard hydrodynamic lubrication equations to reflect the reduced film performance due to surface roughness.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### References Incorporated:

*   **Stachowiak & Batchelor, 2000:** Discusses advanced modeling techniques and the physical phenomena involved in lubrication regimes.
*   **Bhushan, 2013:** Provides insights into surface texture effects, which are crucial for managing mixed lubrication.
*   **Williams, 2005:** Offers detailed coverage of contact mechanics, which underpins many mixed lubrication models.
*   **Hutchings, 2017:** Explains the various wear mechanisms that are exacerbated in mixed lubrication.
*   **Lansdown, 2003:** Details the role and selection of lubricant additives essential for mitigating mixed lubrication effects.