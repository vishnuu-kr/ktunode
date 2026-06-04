---
title: "Wear: Types of wear: adhesive, abrasive, corrosive, and surface fatigue wear."
subject: "INDUSTRIAL TRIBOLOGY"
module: "Module 2: Wear: Types of wear: adhesive, abrasive, corrosive, and surface fatigue wear."
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044637fe"
status: "completed"
scrapedAt: "2026-05-20T18:04:59.857Z"
---
# Industrial Tribology: Module 2 - Wear: Types of Wear

## 1. Introduction to Wear

**Definition of Wear:** Wear is the progressive loss of material from a surface due to relative motion between surfaces in contact. It is a ubiquitous phenomenon that affects the performance, reliability, and lifespan of mechanical components.

**Importance of Understanding Wear (CO1, CO5):**
*   **Component Degradation:** Wear leads to changes in geometry, increased clearances, and ultimately component failure.
*   **Loss of Precision:** In precision machinery, wear can significantly reduce accuracy and functionality.
*   **Economic Impact:** Wear-related failures cause downtime, repair costs, and replacement expenses.
*   **Lubrication Effectiveness:** Wear can degrade lubricants by generating debris and altering surface properties.

**Fundamental Concepts:**
*   **Contact Mechanics:** Understanding how surfaces in contact deform under load is crucial for predicting wear. This involves concepts like Hertzian contact, real area of contact, and adhesion.
*   **Surface Roughness:** The topography of contacting surfaces plays a significant role in wear mechanisms.
*   **Tribological System:** Wear is influenced by the entire system: materials, lubricant (if any), environment, and operating conditions (load, speed, temperature).

**Reference:**
*   Stachowiak & Batchelor, Chapter 7: "Wear of surfaces" (Provides a foundational overview of wear mechanisms).
*   Bhushan, Chapter 4: "Wear" (Covers various wear mechanisms and their interrelationships).
*   Williams, Chapter 3: "Wear" (Discusses the fundamental principles of wear processes).
*   Hutchings, Chapter 2: "Adhesive Wear" and Chapter 3: "Abrasive Wear" (Offers detailed insights into specific wear types).

---

## 2. Types of Wear

Wear is broadly classified based on the dominant mechanism responsible for material removal. The four primary types covered in this module are: Adhesive Wear, Abrasive Wear, Corrosive Wear, and Surface Fatigue Wear.

### 2.1 Adhesive Wear

**Definition:** Adhesive wear occurs when asperities (microscopic high points) on contacting surfaces deform, break, and re-weld to the opposing surface. Material transfer and removal occur through the formation and fracture of these adhesive junctions.

**Key Concepts:**
*   **Adhesion:** The attractive forces between atoms of different materials at the interface.
*   **Asperity Junctions:** At the microscopic level, surfaces are not perfectly flat. High points (asperities) on opposing surfaces touch and deform under load, creating junctions.
*   **Real Area of Contact:** This is the sum of the areas of these asperity junctions, which is typically much smaller than the apparent (geometric) area of contact.
*   **Shear Strength of Junctions:** When relative motion occurs, the stress at these junctions can exceed their shear strength, causing fracture.
*   **Material Transfer:** Fragments from one surface can adhere to the other.

**Mechanisms of Material Removal:**
1.  **Junction Formation:** Asperities come into contact and deform elastically or plastically.
2.  **Junction Growth:** Under load, asperities flatten and the real area of contact increases.
3.  **Junction Fracture:** Shear forces during relative motion cause the weakest part of the junction to fracture. This can be at the interface or within one of the materials.
4.  **Debris Formation:** Fractured fragments become wear debris.

**Governing Laws (Simplified):**
*   **Archard's Law of Wear:** This is a fundamental equation that relates wear volume to load, sliding distance, hardness, and a wear coefficient.
    *   $V = k \frac{WL}{H}$
        *   $V$: Volume of wear
        *   $k$: Wear coefficient (dimensionless, empirically determined, material and condition dependent)
        *   $W$: Applied load
        *   $L$: Sliding distance
        *   $H$: Hardness of the softer material

    **Interpretation of Archard's Law:**
    *   Wear is proportional to load and sliding distance.
    *   Wear is inversely proportional to hardness.
    *   The wear coefficient ($k$) accounts for the complex wear mechanism and is influenced by factors like surface roughness, lubrication, and environment. For adhesive wear, $k$ is often associated with the probability of an asperity junction forming, growing, and fracturing.

**Examples:**
*   **Sliding metal components:** Pistons in engine cylinders, crankshaft bearings, unlubricated gears.
*   **Sticking and slipping in brake pads and rotors.**
*   **Dry sliding of polymers against metals.**

**Important Points to Remember:**
*   Adhesive wear is often associated with clean, unlubricated surfaces.
*   The wear coefficient ($k$) can vary significantly. For metals, it's typically in the range of $10^{-3}$ to $10^{-5}$.
*   Surface hardness is a critical factor in reducing adhesive wear.
*   Good lubrication can prevent or minimize adhesive wear by separating surfaces.

**Reference:**
*   Stachowiak & Batchelor, Chapter 7.2: "Adhesive wear"
*   Bhushan, Chapter 4.2: "Adhesive wear"
*   Williams, Chapter 3.2: "Adhesive wear"
*   Hutchings, Chapter 2: "Adhesive Wear" (Provides extensive detail on the fundamental mechanisms and experimental observations).

---

### 2.2 Abrasive Wear

**Definition:** Abrasive wear occurs when harder particles or asperities slide against a softer surface, ploughing grooves and removing material.

**Key Concepts:**
*   **Hard Particles:** These can be either embedded in one of the contacting surfaces (two-body abrasion) or present as loose debris in the contact zone (three-body abrasion).
*   **Ploughing:** The process where a hard particle or asperity indents and deforms the softer surface, displacing material laterally.
*   **Cutting/Grooving:** If the hard particle is sharp and protrudes sufficiently, it can cut or shear the softer material, creating grooves.
*   **Fracture:** Material can also be removed by fracture of the deformed material.

**Mechanisms:**
*   **Two-Body Abrasion:** One surface is smooth (or has soft asperities), and the other surface has hard, sharp asperities or is covered with abrasive particles. The hard asperities/particles act as cutting tools.
    *   **Example:** Sandpaper (abrasive grains bonded to a backing), a cutting tool against a workpiece.
*   **Three-Body Abrasion:** Abrasive particles are introduced between two sliding surfaces. The particles roll or slide between the surfaces, causing wear on both.
    *   **Example:** Grit or dirt in a bearing or between gears, wear in a sand slurry pump.

**Factors Affecting Abrasive Wear:**
*   **Hardness of Particles/Asperities:** Harder particles cause more wear.
*   **Hardness of the Surface:** Softer surfaces are more susceptible to abrasive wear.
*   **Size and Shape of Particles:** Larger, sharper particles are more abrasive.
*   **Load:** Higher loads increase the penetration depth of abrasive particles.
*   **Sliding Speed:** Can influence the temperature and wear rate.
*   **Number of Abrasive Particles:** More particles generally lead to more wear.

**Governing Laws (Simplified):**
Abrasive wear can also be approximated by Archard's law with an appropriate wear coefficient ($k_{ab}$). The wear coefficient in this case relates to the probability of a particle causing a groove and the volume of material removed per groove. For abrasive wear, the relationship is often more complex and can depend on the particle size and distribution.

$V = k_{ab} \frac{WL}{H}$

**Examples:**
*   **Sand in seals and bearings.**
*   **Cutting and grinding operations.**
*   **Wear of agricultural machinery in contact with soil.**
*   **Erosion:** A form of abrasive wear where particles are propelled by a fluid or gas against a surface.

**Important Points to Remember:**
*   Abrasive wear is a major cause of wear in many industrial environments, especially those with particulate contamination.
*   Surface hardening and using harder materials for contact surfaces can significantly reduce abrasive wear.
*   Preventing abrasive particles from entering the contact zone through effective sealing is crucial.

**Reference:**
*   Stachowiak & Batchelor, Chapter 7.3: "Abrasive wear"
*   Bhushan, Chapter 4.3: "Abrasive wear"
*   Williams, Chapter 3.3: "Abrasive wear"
*   Hutchings, Chapter 3: "Abrasive Wear" (Provides a comprehensive treatment of two-body and three-body abrasion, including models and experimental data).

---

### 2.3 Corrosive Wear (or Chemical Wear)

**Definition:** Corrosive wear is the result of the combined action of chemical or electrochemical attack and mechanical action. Wear occurs when chemical reactions on the surface form weakly adhered films, which are then removed by mechanical action (e.g., sliding, impact).

**Key Concepts:**
*   **Tribochemical Reactions:** Chemical reactions occurring at the interface, often accelerated by the heat and pressure generated by friction.
*   **Corrosion Products:** The formation of oxides, sulfides, or other compounds on the surface.
*   **Mechanical Removal:** These corrosion products are often softer and have lower shear strength than the base material and are easily scraped away by the relative motion.
*   **Synergistic Effect:** The combination of chemical attack and mechanical wear is often much greater than the sum of their individual effects.

**Mechanisms:**
1.  **Chemical Attack:** The surrounding environment (e.g., oxygen, moisture, aggressive chemicals) reacts with the surface.
2.  **Formation of a Surface Film:** This reaction creates a surface layer or film.
3.  **Mechanical Removal:** Relative motion breaks or shears this film.
4.  **Fresh Surface Exposure:** The removal of the film exposes a fresh surface to further chemical attack. This creates a continuous wear cycle.

**Factors Affecting Corrosive Wear:**
*   **Chemical Reactivity of the Environment:** Aggressive environments (e.g., acidic, humid) promote faster chemical reactions.
*   **Material Susceptibility:** Materials prone to oxidation or other chemical reactions are more affected.
*   **Temperature:** Higher temperatures generally accelerate chemical reaction rates.
*   **Sliding Speed and Load:** These factors influence the generation of frictional heat and the effectiveness of mechanical removal of corrosion products.
*   **Lubricant Additives:** Some additives are designed to react with surfaces to form protective films (e.g., anti-wear additives), which can reduce wear. Conversely, some contaminants can accelerate corrosive wear.

**Examples:**
*   **Engine wear in humid environments:** Formation of acidic species from combustion byproducts can lead to corrosive wear of cylinder liners.
*   **Wear of components exposed to salty air.**
*   **Wear in machines operating in chemical processing plants.**
*   **Scuffing:** A severe form of wear that can involve adhesive and corrosive components, often occurring under high loads and temperatures where protective films break down.

**Important Points to Remember:**
*   Corrosive wear is a significant issue in environments with corrosive agents.
*   Material selection and surface treatments (e.g., passivation, coatings) can mitigate corrosive wear.
*   Lubricants with appropriate anti-wear and anti-corrosion additives are crucial for preventing corrosive wear.

**Reference:**
*   Stachowiak & Batchelor, Chapter 7.4: "Corrosion wear"
*   Bhushan, Chapter 4.4: "Corrosive wear"
*   Williams, Chapter 3.4: "Chemical and corrosive wear"
*   Davis, Chapter 4: "Wear Resistance of Materials" (Can discuss how material properties and environments influence wear, including corrosion).
*   Lansdown, Chapter 4: "Lubricant Selection Criteria" and Chapter 7: "Lubricant Properties" (Discusses how lubricants can mitigate corrosive wear).

---

### 2.4 Surface Fatigue Wear (or Fretting Fatigue)

**Definition:** Surface fatigue wear occurs due to the repeated application of cyclic stresses on the contacting surfaces. This can lead to the initiation and propagation of cracks, ultimately resulting in the removal of material in the form of flakes or pits.

**Key Concepts:**
*   **Cyclic Stresses:** Repeated loading and unloading at the contact interface, often caused by vibrations or repeated impacts.
*   **Stress Concentration:** Peaks in stress occur at asperity contacts or surface defects.
*   **Crack Initiation:** Under repeated cyclic stress, fatigue cracks initiate at these high-stress locations.
*   **Crack Propagation:** These cracks grow with each loading cycle.
*   **Material Detachment:** When the crack reaches a critical length, a piece of material breaks away from the surface, forming wear debris.
*   **Pitting and Spalling:** The characteristic modes of material loss in surface fatigue.

**Mechanisms:**
1.  **Subsurface Cracking:** Cracks initiate below the surface, often at inclusions or stress raisers, and propagate upwards.
2.  **Surface Cracking:** Cracks initiate at the surface, often at asperity contact points or surface imperfections, and propagate downwards or along the surface.
3.  **Fretting Fatigue:** A specific type of fatigue wear that occurs in the presence of small-amplitude oscillatory motion between contacting surfaces (fretting). This motion can lead to crack initiation and propagation.

**Factors Affecting Surface Fatigue Wear:**
*   **Magnitude of Cyclic Stress:** Higher stresses lead to faster fatigue damage.
*   **Number of Cycles:** The longer the component is subjected to cyclic loading, the higher the risk of fatigue.
*   **Surface Finish:** Rough surfaces and surface defects can act as crack initiation sites.
*   **Material Properties:** Fatigue strength, fracture toughness, and microstructure of the material.
*   **Contact Pressure:** Higher pressures lead to higher subsurface stresses.
*   **Fretting Motion:** Even small amplitudes of relative motion can significantly accelerate fatigue damage.

**Examples:**
*   **Rolling Element Bearings:** Pitting and spalling on raceways and rolling elements are classic examples of surface fatigue.
*   **Gears:** Surface fatigue can occur on gear teeth under high contact stresses.
*   **Cam followers and tappets in engines.**
*   **Shaft-hub connections experiencing fretting.**

**Important Points to Remember:**
*   Surface fatigue is a "life-limiting" wear mechanism, meaning it dictates the lifespan of components like bearings.
*   Hardening of surfaces and reducing surface defects are crucial for improving fatigue life.
*   Lubrication is important for reducing contact stresses and preventing fretting.
*   Understanding the fatigue limit of materials is essential for component design.

**Reference:**
*   Stachowiak & Batchelor, Chapter 7.5: "Surface fatigue wear"
*   Bhushan, Chapter 4.5: "Surface fatigue wear"
*   Williams, Chapter 3.5: "Surface fatigue"
*   Hutchings, Chapter 7: "Fatigue" (Discusses the principles of fatigue, including surface fatigue).

---

## 3. Wear Measurement Techniques (CO3)

Accurately measuring wear is crucial for understanding tribological behavior, validating models, and qualifying materials and lubricants.

**Key Principles:**
*   **Direct Measurement:** Measuring the loss of material directly.
*   **Indirect Measurement:** Measuring the consequences of wear, such as the generation of debris.

**Common Techniques:**
1.  **Mass Loss Measurement:**
    *   **Description:** Weighing the test specimens before and after a wear test.
    *   **Pros:** Simple, direct, widely applicable.
    *   **Cons:** Sensitive to environmental factors (humidity), may not be suitable for very low wear rates or when material transfer is significant. Requires precise weighing instruments.
    *   **Equation:** $Wear \, Volume = \frac{Mass \, Loss}{\rho}$ (where $\rho$ is the density of the material).

2.  **Dimensional Measurement:**
    *   **Description:** Measuring changes in the dimensions of the worn component using profilometers, optical comparators, coordinate measuring machines (CMMs), or interferometry.
    *   **Pros:** Can provide information about the wear profile and wear depth.
    *   **Cons:** Requires careful setup, can be time-consuming.

3.  **Radioactive Tracer Wear Measurement:**
    *   **Description:** One of the sliding surfaces is made radioactive. Wear debris is collected and its radioactivity is measured.
    *   **Pros:** Highly sensitive, can measure very low wear rates (down to nanograms). Suitable for monitoring wear continuously.
    *   **Cons:** Requires specialized facilities and handling of radioactive materials.

4.  **Optical Emission Spectrometry (OES) / Atomic Absorption Spectrometry (AAS):**
    *   **Description:** Analyzing the concentration of wear particles in the lubricant. The amount of wear is correlated to the metal content in the lubricant.
    *   **Pros:** Non-intrusive to the wear process itself, can monitor wear over time.
    *   **Cons:** Requires calibration, susceptible to contamination of the lubricant, doesn't directly measure material loss from surfaces.

5.  **Wear Debris Analysis:**
    *   **Description:** Collecting and analyzing wear debris from the lubricant or contact zone using techniques like microscopy (SEM, optical), particle counting, and X-ray diffraction (XRD).
    *   **Pros:** Provides information about the wear mechanism (e.g., morphology of debris suggests abrasion or adhesion).
    *   **Cons:** Indirect measurement of wear volume, can be complex to quantify wear rate.

**Important Points to Remember:**
*   The choice of measurement technique depends on the expected wear rate, the nature of the materials, and the experimental objectives.
*   Calibration is essential for all indirect measurement techniques.
*   Understanding the wear debris morphology can provide significant insights into the dominant wear mechanism.

**Reference:**
*   Bhushan, Chapter 5: "Wear Measurement Techniques"
*   Williams, Chapter 2: "Measurement of Friction and Wear"
*   Stachowiak & Batchelor, Chapter 7.6: "Measurement of wear"

---

## 4. Wear Measurement Techniques: Connecting to Course Outcomes (CO3)

*   **CO3: Explain Wear Measurement Techniques:** This section directly addresses this outcome by detailing various methods used to quantify wear.
*   **Examples of application:** Understanding these techniques allows us to quantify the effectiveness of different materials, lubricants, and surface treatments in reducing wear, which is relevant to CO4 and CO5. For instance, using mass loss to compare two lubricants would help in lubricant selection.

---

## 5. Linking Wear Types to Industrial Applications and Course Outcomes

*   **CO1: Explain fundamental principles of Tribology:** Understanding the mechanisms of adhesion, abrasion, corrosion, and fatigue provides the foundational principles of wear.
*   **CO5: Apply tribological knowledge in industrial applications:**
    *   **Adhesive Wear:** Crucial for designing unlubricated or poorly lubricated sliding components, reducing friction, and preventing seizure. Examples include hinges, some polymer bearings.
    *   **Abrasive Wear:** Vital for designing machinery operating in harsh environments with particulate contamination (e.g., mining, agriculture, construction). Material selection and protective coatings are key.
    *   **Corrosive Wear:** Important for components exposed to moisture, chemicals, or aggressive atmospheres (e.g., marine applications, chemical processing). Lubricant formulation and material passivation are critical.
    *   **Surface Fatigue Wear:** Essential for the design of highly loaded components subjected to rolling or repeated impacts (e.g., bearings, gears, cams). Proper material selection, heat treatment, and surface finishing are vital for ensuring long service life.

*   **CO4: Select and Evaluate Lubricants and Surface Treatments:**
    *   **Lubricants:** Can prevent adhesive wear (lubricity), reduce abrasive wear (by keeping particles away from the interface), mitigate corrosive wear (with anti-corrosion and anti-wear additives), and reduce surface fatigue (by reducing contact stresses and preventing fretting).
    *   **Surface Treatments:** Hardfacing, nitriding, carburizing, PVD/CVD coatings can significantly improve resistance to abrasive and adhesive wear. Passivation and plating can improve resistance to corrosive wear. Surface finishing improves fatigue life.

*   **CO2: Understand Surface Characterisation Techniques for Tribological Investigations:** While not explicitly detailed in this topic, understanding wear mechanisms is often enhanced by characterizing surfaces before and after wear using techniques like profilometry (roughness), microscopy (SEM/TEM for surface topography and debris), and surface chemical analysis (EDS, XPS). These techniques help identify the dominant wear mechanism.

---

## 6. Practice Questions and Answers

**Question 1:**
Define adhesive wear and state Archard's Law of Wear. Explain the significance of the wear coefficient ($k$) in this law, particularly for metals.

**Answer:**
Adhesive wear occurs when asperities on contacting surfaces form junctions that break during relative motion, leading to material transfer and loss. Archard's Law of Wear is $V = k \frac{WL}{H}$. The wear coefficient ($k$) is an empirical parameter that quantifies the probability of an asperity junction forming, growing, and fracturing during sliding. For metals, typical values of $k$ range from $10^{-3}$ to $10^{-5}$, reflecting the complex interplay of adhesion, material properties, and surface conditions. A lower $k$ indicates better wear resistance.

**Question 2:**
Distinguish between two-body and three-body abrasive wear. Provide an example for each.

**Answer:**
*   **Two-body abrasive wear** occurs when hard particles are fixed to one surface, and they plough or cut the opposing softer surface. Example: Sandpaper acting on wood.
*   **Three-body abrasive wear** occurs when loose abrasive particles are introduced between two sliding surfaces, and these particles roll or slide, causing wear on both surfaces. Example: Grit contamination in a bearing.

**Question 3:**
What is corrosive wear, and how does it differ from purely mechanical wear?

**Answer:**
Corrosive wear is a synergistic process where chemical or electrochemical attack on a surface is combined with mechanical action. The chemical action forms weakly adhered surface films that are then removed by mechanical forces (like sliding or impact). Purely mechanical wear (like adhesion or abrasion) relies solely on physical processes of deformation, fracture, and material removal without significant chemical interaction.

**Question 4:**
What are the common symptoms of surface fatigue wear in rolling element bearings?

**Answer:**
Common symptoms of surface fatigue wear in rolling element bearings include pitting (formation of small subsurface-initiated or surface-initiated holes) and spalling (larger, irregular-shaped flakes of material being removed from the surface). These are a result of repeated cyclic stresses leading to crack initiation and propagation.

**Question 5:**
A component experiences wear primarily due to grit contamination in its lubricating oil. Which type of wear is most likely dominating, and what would be an effective method to reduce this wear?

**Answer:**
The dominant wear type is likely **three-body abrasive wear** due to the grit contamination.
An effective method to reduce this wear would be to **improve filtration of the lubricating oil** to remove the abrasive particles before they enter the contact zone, or to **use harder materials** for the contacting surfaces that are more resistant to abrasion.

---

## 7. Important Points to Remember (Module Summary)

*   **Wear is the progressive loss of material from a surface due to relative motion.**
*   **Adhesive wear** is caused by the formation and fracture of junctions between contacting asperities. Archard's Law ($V = k \frac{WL}{H}$) is a fundamental model.
*   **Abrasive wear** occurs when hard particles or asperities plough or cut softer surfaces. It can be two-body (fixed abrasives) or three-body (loose abrasives).
*   **Corrosive wear** is a combination of chemical attack and mechanical removal of corrosion products.
*   **Surface fatigue wear** results from repeated cyclic stresses, leading to crack initiation and propagation, manifesting as pitting or spalling.
*   Understanding the dominant wear mechanism is crucial for selecting appropriate materials, lubricants, and surface treatments to mitigate wear and improve component life.
*   Accurate wear measurement techniques (mass loss, dimensional changes, tracer methods, lubricant analysis) are essential for evaluating tribological performance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
