---
title: "Elasto-hydrodynamic lubrication (EHL)"
subject: "INDUSTRIAL TRIBOLOGY"
module: "Module 3: Principles of Lubrication: Hydrodynamic lubrication"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463806"
status: "completed"
scrapedAt: "2026-05-20T18:05:04.898Z"
---
# Industrial Tribology - Module 3: Principles of Lubrication: Hydrodynamic Lubrication

## Topic: Elasto-hydrodynamic Lubrication (EHL)

### 1. Introduction to EHL

Elasto-hydrodynamic lubrication (EHL) is a fundamental lubrication regime in industrial tribology that occurs when the elastic deformation of the contacting surfaces significantly influences the lubricant film thickness and pressure distribution. It bridges the gap between hydrodynamic lubrication (where surfaces are undeformable) and boundary lubrication (where direct surface contact occurs).

**Key Concepts:**

*   **Elasto-hydrodynamic:** Combines "elastic" (deformation of surfaces) and "hydrodynamic" (pressure generation by fluid motion).
*   **EHL Contact:** Typically occurs between highly conforming surfaces with relatively low loads and high relative velocities, such as in gears, rolling element bearings, and cams.
*   **Lubricant Properties:** Crucial role of lubricant viscosity and its pressure-viscosity coefficient.
*   **Surface Elasticity:** The ability of the contacting solids to deform elastically under applied load.

**Importance in Industrial Applications (CO5: K3):**

EHL is critical in many machine elements, ensuring efficient operation and preventing excessive wear. Examples include:

*   **Gears:** Thin EHL films are generated in gear teeth meshing.
*   **Rolling Element Bearings:** EHL is the dominant lubrication regime in ball and roller bearings.
*   **Cams and Tappets:** EHL films are formed between cam lobes and followers.
*   **Cylinder Liners and Piston Rings:** While often considered mixed or boundary lubrication, EHL plays a role in certain operating conditions.

### 2. Mechanisms of EHL

EHL arises from the interplay between the applied load, the lubricant's hydrodynamic pressure, and the elastic deformation of the solid surfaces.

**Mechanism Breakdown:**

1.  **Entraining Motion:** Relative motion between the surfaces (e.g., rolling or sliding) entrains the lubricant into a converging gap.
2.  **Hydrodynamic Pressure Generation:** As the lubricant is forced into the converging gap, its flow is restricted, leading to a pressure build-up (similar to hydrodynamic lubrication).
3.  **Elastic Deformation:** The generated hydrodynamic pressure causes the surfaces to deform elastically inwards.
4.  **Reinforcing Loop:** This elastic deformation further constricts the gap, leading to an even higher pressure build-up, which in turn causes more deformation. This positive feedback loop is characteristic of EHL.
5.  **Pressure-Viscosity Effect:** The lubricant's viscosity increases significantly with pressure. This increased viscosity contributes to higher pressure generation and the formation of a thicker film than would be predicted by isoviscous hydrodynamic theory.
6.  **Thickening of the Film:** The combined effect of elastic deformation and the pressure-viscosity effect allows for the generation of a lubricant film that separates the surfaces, even under significant loads.
7.  **"Side Lobes" and "Spreading":** Near the exit of the contact, the pressure drops, causing the lubricant film to "spread" and potentially form lower-pressure regions called "side lobes."

**Key Equations and Concepts (CO1: K2):**

*   **Reynolds Equation:** The fundamental equation governing fluid motion in lubrication. In EHL, it is often modified to include the pressure-viscosity relationship and the elastic deformation of the surfaces.
    *   `∂/∂x (h³/∂x) * (∂p/∂x) + ∂/∂y (h³/∂y) * (∂p/∂y) = 6ηU ∂h/∂x` (Standard Reynolds Equation)
    *   For EHL, `η` is a function of pressure: `η = η₀ * exp(α * p)` (or other pressure-viscosity models).
*   **Surface Deformation:** Described by Hertzian contact theory for elastic solids. The deflection due to pressure is related to the applied load and material properties.
    *   `δ = (3 * P * (1 - ν²)) / (2 * E * R)` (for a sphere on a flat, simplified for illustration, where P is load, ν is Poisson's ratio, E is Young's Modulus, R is radius)
    *   In EHL, the surface deflection is a complex function of the pressure distribution within the contact.
*   **Load-Carrying Capacity:** The ability of the lubricant film to support the applied load. In EHL, this is achieved through the combined action of hydrodynamic pressure and elastic deformation.
*   **Film Thickness:** EHL films are typically very thin, ranging from nanometers to a few micrometers.
    *   **Central Film Thickness (h_c):** The thickness in the middle of the contact.
    *   **Minimum Film Thickness (h_min):** Often at the exit of the contact, it is the most critical parameter for preventing wear.

**Reference from Textbooks:**

*   **Stachowiak & Batchelor (2000):** Chapter 5 discusses EHL in detail, covering the governing equations and the pressure-viscosity relationship. They emphasize the importance of elastic deformation in the lubrication of highly conforming bodies.
*   **Bhushan (2013):** Chapter 6 focuses on EHL, explaining the generation of the lubricant film and the influence of material properties and operating conditions. He highlights the critical role of lubricant rheology.
*   **Williams (2005):** Chapter 4 provides a comprehensive overview of EHL, including theoretical models and experimental validation. He discusses the different types of EHL contacts (e.g., line contact, point contact).
*   **Hutchings (2017):** Chapter 7 introduces EHL as a key lubrication regime, explaining its occurrence in specific applications like gears and bearings. He contrasts it with other lubrication regimes.

### 3. Types of EHL Contacts

EHL contacts are generally categorized based on the geometry of the contacting bodies and the nature of their relative motion.

**Categories:**

*   **Line Contact EHL:** Occurs between cylindrical or crowned surfaces, such as in roller bearings or gears. The contact zone is elongated.
*   **Point Contact EHL:** Occurs between spherical or ball-shaped surfaces, such as in ball bearings or cam followers. The contact zone is roughly elliptical.

**Key Differences and Characteristics:**

| Feature                | Line Contact EHL                                    | Point Contact EHL                                   |
| :--------------------- | :-------------------------------------------------- | :-------------------------------------------------- |
| **Geometry**           | Cylinders, crowned cylinders, gear teeth            | Spheres, ball bearings, cam followers               |
| **Contact Zone Shape** | Elongated ellipse                                   | Ellipse                                             |
| **Film Thickness**     | Typically thicker than point contact for same load  | Thinner than line contact for same load             |
| **Pressure Profile**   | Often bi-modal (two peaks)                          | Smoother, often a single peak with a rounded top    |
| **Applications**       | Roller bearings, gears                              | Ball bearings, cam followers                        |

**Theoretical Solutions:**

*   **Dowson and Higginson:** Developed analytical solutions for EHL line contacts, providing key formulas for film thickness.
*   **Hamrock and Dowson:** Extended EHL theory to point contacts, offering dimensionless groups that characterize the lubrication regime.

**Reference from Textbooks:**

*   **Williams (2005):** Chapter 4 delves into the theoretical solutions for both line and point contacts, presenting the dimensionless parameters that are crucial for EHL analysis.
*   **Bhushan (2013):** Chapter 6 provides a good comparison of line and point contact EHL, highlighting the influence of geometry on film thickness and pressure distribution.

### 4. Factors Affecting EHL Film Thickness

Several operational and material parameters significantly influence the generated EHL film thickness, which is a primary indicator of effective lubrication.

**Key Influencing Factors:**

*   **Load (W):** Higher loads lead to greater elastic deformation, which can increase pressure and thus film thickness. However, beyond a certain point, excessive load can lead to breakdown.
*   **Entraining Velocity (U):** Higher entraining velocities (relative speed of surfaces) generally lead to thicker films, as more lubricant is entrained into the contact.
*   **Lubricant Viscosity (η₀):** Higher base viscosity of the lubricant results in a thicker film.
*   **Pressure-Viscosity Coefficient (α):** A higher `α` means the lubricant's viscosity increases more significantly with pressure, leading to thicker films.
*   **Material Properties (E, ν):** Stiffer materials (higher Young's modulus, E) deform less, potentially leading to thinner films. Poisson's ratio (ν) also plays a role in deformation.
*   **Curvature of Surfaces (R):** Smaller radii of curvature generally lead to more concentrated contacts and can influence film thickness.

**Dimensionless Groups for EHL (CO1: K2):**

To simplify the analysis and comparison of EHL conditions, several dimensionless groups are used:

*   **Lubrication Number (Λ):** Represents the ratio of viscous forces to elastic forces.
    *   `Λ = 6η₀U / (E'R)` where `E'` is the effective elastic modulus of the materials.
    *   **High Λ:** Approaches ideal hydrodynamic lubrication.
    *   **Low Λ:** Indicates a greater influence of elastic deformation.
*   **DoD Number (G):** Represents the material's elasticity parameter.
    *   `G = αE'`
    *   High `G` values indicate that the materials are highly deformable, leading to greater EHL effects.
*   **Roelands Number (W):** Represents the load parameter.
    *   `W = Load / (E'R²)`
    *   Higher `W` values indicate higher loads.

**Reference from Textbooks:**

*   **Hamrock & Dowson (cited in many tribology texts):** Their dimensionless parameters are fundamental to EHL analysis.
*   **Bhushan (2013):** Chapter 6 explicitly defines and discusses the significance of these dimensionless groups in predicting EHL film behavior.
*   **Stachowiak & Batchelor (2000):** Provides context on how these dimensionless groups consolidate the various influencing factors.

### 5. EHL Film Thickness Formulas (Examples)

While complex to derive, simplified empirical and theoretical formulas exist to estimate EHL film thickness, particularly for the central film thickness in line and point contacts.

**Key Formulas (for illustrative purposes, precise forms can be complex):**

*   **Dowson & Higginson (Line Contact):**
    *   `h_c / R = 2.43 * (η₀ * U / E'R)^(2/3) * (1 - 0.69 * exp(-0.8 * αE'))` (for typical conditions)
    *   This formula shows the dependence on viscosity, velocity, and material properties.
*   **Hamrock & Dowson (Point Contact):**
    *   `h_c / R = 2.65 * (η₀ * U / E'R)^(0.73) * (1 - 0.85 * exp(-0.57 * αE'))` (for typical conditions)

**Interpreting the Formulas (CO1: K2):**

These formulas demonstrate how increasing lubricant viscosity, entraining velocity, and the pressure-viscosity coefficient generally lead to thicker films. Conversely, increased stiffness of materials (higher E') tends to reduce film thickness.

**Reference from Textbooks:**

*   **Stachowiak & Batchelor (2000):** Presents these key formulas and discusses their limitations and applicability.
*   **Williams (2005):** Offers a detailed derivation and discussion of these empirical and semi-analytical EHL film thickness formulas.

### 6. EHL in Practice: Applications and Limitations

EHL is a widely utilized lubrication regime, but understanding its limitations is crucial for effective application.

**Industrial Applications (CO5: K3):**

*   **Gears:** EHL provides essential separation for gear teeth under load, preventing scuffing and wear.
*   **Rolling Element Bearings:** The majority of EHL applications are found in ball and roller bearings, ensuring long service life.
*   **Cams and Lifters:** EHL films protect these high-speed, high-load components from wear.
*   **Turbine and Compressor Shafts:** EHL plays a role in the bearings of these high-speed rotating machines.

**Limitations and Challenges:**

*   **Entitlement of Lubricant:** Requires sufficient lubricant to be present in the contact zone.
*   **Surface Roughness:** If surface roughness is comparable to or larger than the EHL film thickness, the surfaces may not be fully separated, leading to mixed or boundary lubrication. This is a critical consideration.
*   **High Speed, Low Load:** EHL is generally more effective at moderate to high speeds and moderate to high loads. Very low loads might not generate sufficient pressure for EHL.
*   **Boundary EHL (Mixed Lubrication):** At the extremes of EHL, especially with higher surface roughness or lower speeds, some asperity contact can occur, leading to mixed lubrication.
*   **Lubricant Degradation:** Under extreme conditions, lubricants can degrade, affecting their pressure-viscosity properties and ultimately the EHL film.

**Reference from Textbooks:**

*   **Hutchings (2017):** Chapter 7 discusses the practical implications of EHL, including its role in machine component lifespan and the conditions under which it might fail.
*   **Lansdown (2003):** (Reference Book) Provides practical guidance on lubricant selection for EHL applications, considering factors like operating temperature and load.

### 7. Measurement of EHL Films

Direct measurement of EHL films is challenging due to their extremely small thickness. Various techniques are employed.

**Measurement Techniques (CO3: K2):**

*   **Optical Interferometry:** This is a primary non-contact method. The EHL film acts as a thin film, causing interference patterns with incident light. The pattern can be analyzed to determine film thickness.
    *   **White Light Interferometry:** Uses a broadband light source.
    *   **Monochromatic Interferometry:** Uses a single wavelength of light.
    *   **Stachowiak & Batchelor (2000)** and **Bhushan (2013)** describe these optical techniques in detail.
*   **X-ray Interferometry:** Can be used, though less common than optical methods.
*   **Electrical Resistance:** Measuring the electrical resistance between the surfaces can provide an indication of whether a continuous film exists. However, it's less precise for thin films.
*   **Spectroscopic Techniques:** Certain spectroscopic methods can infer film thickness based on the interaction of light or other radiation with the lubricant film.

**Important Point to Remember (CO2: K2):**

Surface characterization techniques are vital for understanding EHL. The surface roughness of the contacting components must be significantly smaller than the predicted EHL film thickness to ensure full separation.

**Reference from Textbooks:**

*   **Stachowiak & Batchelor (2000):** Chapter 15 covers measurement techniques, including optical interferometry for lubricant film thickness.
*   **Bhushan (2013):** Chapter 16 discusses various measurement techniques relevant to tribology, including those applicable to EHL.

### 8. Practice Questions and Exercises

**Question 1 (CO1: K2):**
Define Elasto-hydrodynamic Lubrication (EHL) and explain the fundamental principle that distinguishes it from pure hydrodynamic lubrication.

**Answer 1:**
EHL is a lubrication regime where the elastic deformation of the contacting surfaces plays a significant role in the formation and thickness of the lubricant film. It is distinguished from pure hydrodynamic lubrication by the fact that the surfaces are not considered rigid; the pressure generated by the lubricant's motion causes them to deform, which in turn influences the pressure distribution and film thickness. This interaction creates a reinforcing loop that allows for lubrication under higher loads than possible with rigid surfaces.

**Question 2 (CO1: K2):**
What are the key factors that influence the film thickness in an EHL conjunction? Briefly explain the role of each.

**Answer 2:**
The key factors influencing EHL film thickness are:
*   **Load (W):** Higher loads lead to more elastic deformation, which can increase pressure and film thickness, up to a point.
*   **Entraining Velocity (U):** Higher speeds entrain more lubricant, generally leading to thicker films.
*   **Lubricant Viscosity (η₀):** Higher base viscosity directly contributes to a thicker film.
*   **Pressure-Viscosity Coefficient (α):** A higher `α` means viscosity increases more with pressure, leading to thicker films.
*   **Material Properties (E', ν):** Stiffer materials (higher E') deform less, potentially resulting in thinner films.
*   **Surface Curvature (R):** Smaller radii of curvature can concentrate the contact, influencing pressure and film thickness.

**Question 3 (CO5: K3):**
Provide two industrial examples where EHL is the dominant lubrication regime and explain why it is critical in those applications.

**Answer 3:**
1.  **Rolling Element Bearings (e.g., ball bearings):** EHL is crucial because it separates the rolling elements (balls or rollers) from the races. This separation prevents direct metal-to-metal contact, significantly reducing friction and wear, and thereby extending the bearing's lifespan. Without EHL, the high Hertzian contact stresses would lead to rapid fatigue and damage.
2.  **Gears:** EHL provides a lubricating film between the meshing teeth of gears. This film reduces friction, dissipates heat, and prevents direct contact under the high sliding and rolling speeds and contact pressures experienced during operation. This is essential to prevent surface distress such as scuffing and pitting.

**Question 4 (CO2: K2):**
Why is it important to consider surface roughness when analyzing EHL contacts?

**Answer 4:**
It is important to consider surface roughness because if the surface roughness of the contacting components is of the same order of magnitude as or greater than the calculated EHL film thickness, the surfaces will not be fully separated. This condition leads to partial separation and direct asperity contact, resulting in mixed lubrication or boundary lubrication. Such contact increases friction and wear, potentially leading to premature component failure. Therefore, the film thickness must be sufficiently greater than the combined roughness of the opposing surfaces (often expressed as `h_min / R_q > 3` or similar criteria).

**Question 5 (CO1: K2):**
What is the role of the pressure-viscosity coefficient of a lubricant in EHL?

**Answer 5:**
The pressure-viscosity coefficient (`α`) describes how the viscosity of a lubricant increases with applied pressure. In EHL, where very high pressures are generated within the lubricant film, a lubricant with a high pressure-viscosity coefficient will experience a substantial increase in viscosity. This increased viscosity contributes significantly to the load-carrying capacity of the lubricant film, allowing for the generation of thicker films and better separation of the surfaces under load, compared to a lubricant with a low `α`.

---

### 9. Important Points to Remember

*   **EHL = Elastic Deformation + Hydrodynamic Pressure:** This is the core concept.
*   **Pressure-Viscosity Effect is Crucial:** Lubricant viscosity increasing with pressure is a defining characteristic.
*   **Thin Films:** EHL films are typically very thin (nanometers to a few micrometers).
*   **Surface Roughness vs. Film Thickness:** This comparison is vital for predicting actual lubrication performance. If `h_min` is not significantly larger than surface roughness, expect mixed or boundary lubrication.
*   **Dimensionless Groups (G, Λ, W):** Useful for characterizing and comparing EHL conditions across different systems.
*   **Applications:** Gears, rolling element bearings, and cam-tappet systems are prime examples.
*   **Optical Interferometry:** The primary technique for experimental verification of EHL film thickness.

---

This study material provides a foundational understanding of Elasto-hydrodynamic Lubrication, drawing upon the core principles and established knowledge from the provided textbooks and reference materials. It aligns with the learning outcomes and course objectives for Industrial Tribology.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
