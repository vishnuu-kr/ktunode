---
title: "Creep"
subject: "MATERIAL SCIENCE AND ENGINEERING"
module: "Module 3: Mechanical properties: Tensile properties"
branch: "Civil Engineering"
semester: 2
topicId: "68b54567d74ec52cc0912fe2"
status: "completed"
scrapedAt: "2026-05-20T18:36:24.414Z"
---
# Material Science and Engineering: Module 3 - Mechanical Properties: Tensile Properties

## Topic: Creep

Welcome, everyone! Today, we're diving into a fascinating and often critical aspect of material behavior: **Creep**. We've spent time understanding how materials respond to *instantaneous* loads, like pulling on a wire. But what happens when that load is *constant*, applied over a long period? That’s where creep comes into play. Think about bridges, jet engines, or even high-rise buildings – these structures are under constant stress for years, even decades. Understanding creep is absolutely essential for designing them to be safe and durable.

### What Exactly is Creep?

At its heart, creep is the **time-dependent, permanent deformation of a material when subjected to a constant stress, usually at elevated temperatures.**

Let's break that down a bit.

*   **Time-dependent:** This isn't about how much a material stretches *right now* under a load. It's about how much it continues to deform *over time*.
*   **Permanent deformation:** Unlike elastic deformation (where the material springs back), creep is plastic. Once the material has crept, it won't go back to its original shape, even if you remove the stress.
*   **Constant stress:** The load itself isn't changing. Imagine a weight hanging from a metal cable. The weight stays the same.
*   **Elevated temperatures:** While creep can happen at room temperature, its significance is hugely magnified at higher temperatures, typically above 0.4 times the melting temperature ($T_m$) of the material (in Kelvin). This is a crucial point, as it often relates to the material's crystal structure and the mobility of its defects.

Think of it like this: Imagine hanging a heavy picture frame on a wall using a metal wire. Initially, the wire stretches a little. Now, imagine that picture frame stays there for 10 years. You might find, over that decade, the wire stretches a bit *more*, and the picture frame hangs slightly lower. That gradual, additional sag is creep!

**Why is this important for us?** Well, it directly impacts our ability to select the right materials for specific applications. If we're designing a turbine blade that spins at thousands of RPM in a jet engine, where temperatures are sky-high, we *must* account for creep. If we don't, that blade could deform over time, leading to catastrophic failure. This connects directly to our **Course Outcome 3 (CO3): Compare the material properties among different materials for material selection.** We need to know creep resistance when choosing materials for high-temperature, long-life applications.

### The Creep Curve: A Visual Story

The way creep deformation progresses over time is typically represented by a **creep curve**. This curve plots strain (the amount of deformation) on the y-axis against time on the x-axis. When we plot this for a typical ductile material under a constant stress at an elevated temperature, we see three distinct stages:

1.  **Primary Creep:** This is the initial stage, where the creep rate (the slope of the curve) is relatively high and *decreasing* over time. The material is still work-hardening more rapidly than thermal softening is occurring. Think of the wire in our picture frame example – the initial sag is the quickest.

2.  **Secondary Creep (Steady-State Creep):** This is the most important stage for many engineering applications. Here, the creep rate becomes *relatively constant*. This means the rate of work hardening is balanced by the rate of recovery (or softening mechanisms). Many critical components are designed to operate within this steady-state creep regime. This is often where we design for life expectancy.

3.  **Tertiary Creep:** In this final stage, the creep rate *accelerates rapidly* until fracture occurs. This acceleration is usually due to internal damage accumulation, such as the formation of internal voids, micro-cracks, or necking (localized reduction in cross-sectional area), which effectively reduces the load-bearing area. It's like the wire finally thinning and snapping.

So, the creep curve tells a story of deformation – initial rapid stretching, a period of steady stretching, and then a sudden, accelerating failure.

### Mechanisms of Creep: What's Happening Under the Hood?

Creep isn't just magic; it's driven by specific microscopic mechanisms that allow atoms to move and rearrange under stress. These mechanisms are highly dependent on temperature and stress level.

**1. Diffusion Creep:**
At lower stresses and moderate to high temperatures, creep can be driven by the movement of atoms through diffusion. There are two main types:

*   **Nabarro-Herring Creep:** This involves bulk diffusion of atoms through the crystal lattice. Atoms move from grain boundaries under tension to grain boundaries under compression. It's a slower process, dominant at higher temperatures and lower stresses.
*   **Coble Creep:** This is similar but involves diffusion along grain boundaries rather than through the bulk lattice. Grain boundaries are regions with a higher concentration of defects and a less ordered structure, making diffusion easier. Coble creep is dominant at lower temperatures (but still elevated enough for diffusion) and lower stresses compared to Nabarro-Herring.

Think of it like people moving through a crowded city. Nabarro-Herring is like everyone slowly shuffling through the streets (the lattice). Coble creep is like people using the alleyways and backstreets (grain boundaries) – it's faster if the alleyways are clear!

**2. Dislocation Creep:**
At higher stresses and elevated temperatures, the primary mechanism is the movement of dislocations. This is more akin to the plastic deformation we discussed earlier, but it's happening gradually under a constant load.

*   **Dislocation Glide:** Dislocations move past obstacles within the crystal lattice, similar to slip in standard tensile testing.
*   **Dislocation Climb:** This is crucial for creep. Dislocations can move out of their slip planes by "climbing" – this involves the absorption or emission of vacancies. Vacancies are point defects (missing atoms in the lattice). At elevated temperatures, vacancies are more mobile, allowing dislocations to climb over obstacles and continue their movement. This is a thermally activated process.

This climb mechanism is why temperature is so important for creep. The easier vacancies can move, the easier dislocations can climb, and the faster the creep rate. This is directly related to **Course Outcome 1 (CO1): Understand the crystal structures (BCC, FCC, and HCP), and their relationship with the properties.** Different crystal structures have different dislocation mobility and vacancy formation energies, which influence their creep resistance. For instance, FCC metals often have good ductility and can resist creep reasonably well due to their ability to accommodate deformation via slip. BCC metals can be stronger but might exhibit different creep behaviors depending on temperature and impurity effects.

**3. Grain Boundary Sliding:**
At very high temperatures, grains within a polycrystalline material can slide past each other. This is facilitated by the relative ease of movement along grain boundaries, especially if there are viscous or superplastic phases present. Imagine a stack of bricks where the mortar between them allows the bricks to slide. This mechanism contributes significantly to creep deformation, particularly in fine-grained materials.

### Factors Affecting Creep

Several factors influence the rate and extent of creep:

*   **Temperature:** As we've stressed, this is paramount. Higher temperatures mean faster diffusion and easier dislocation climb, leading to higher creep rates. This is why materials for high-temperature applications need careful selection.
*   **Stress:** Higher applied stress leads to a higher creep rate. The relationship isn't always linear, especially when different mechanisms dominate at different stress levels.
*   **Time:** Creep is a time-dependent phenomenon. The longer the stress is applied, the more deformation will occur.
*   **Grain Size:** Fine-grained materials tend to creep faster at lower temperatures via grain boundary sliding. Coarse-grained materials are generally more creep-resistant, especially at very high temperatures where dislocation creep dominates, as there are fewer grain boundaries for dislocations to interact with or for sliding to occur. This links to **Course Outcome 2 (CO2): Understand the crystallographic defects through metallography.** Grain boundaries are a significant type of defect, and their presence and characteristics directly influence creep.
*   **Microstructure:** The presence of precipitates, solid solution strengthening, and grain boundaries can significantly hinder dislocation movement, thus increasing creep resistance. For example, in many superalloys used in jet engines, finely dispersed precipitates act as barriers to dislocation motion, making them very creep-resistant. Understanding these microstructural features is key, and this relates to **Course Outcome 4 (CO4): Define and differentiate the microstructure of metallic materials using phase diagrams.** Phase diagrams help us understand how heat treatments can create specific microstructures with desirable properties like creep resistance.

### Creep Testing and Engineering Significance

How do we measure creep? We perform **creep tests**. A sample of the material is subjected to a constant load at a controlled, elevated temperature. We then measure the strain (elongation) as a function of time.

From these tests, we can derive several important parameters:

*   **Creep Strength:** The stress that causes a specific amount of creep strain (e.g., 1% strain) in a given time at a specific temperature.
*   **Creep Rupture Strength (or Stress-Rupture Strength):** The stress that causes fracture in a specific time at a given temperature. This is a critical parameter for designing components that must survive for a set period.
*   **Minimum Creep Rate:** The constant creep rate observed during the secondary creep stage.

**Why are these important?** In engineering design, we often need to ensure that a component doesn't deform too much or fail within its expected service life. For example, if we have a component that needs to last for 100,000 hours (about 11.4 years) at 800°C, we'd look at the creep rupture strength for that specific time and temperature. We would design the component to operate at a stress significantly *below* this value to ensure a safety margin.

This is where **material selection (CO3)** really comes into play. If we need a material for a high-temperature furnace element, we'd look for materials with excellent creep strength and high melting points. Metals like nickel alloys (superalloys) or ceramics are often used. For a structural component at lower temperatures, steel might suffice, but if it’s exposed to significant constant loads at moderately elevated temperatures (like in a boiler), creep must still be considered.

### Common Pitfalls and Exam Focus

*   **Confusing creep with fatigue:** Fatigue is failure due to cyclic loading. Creep is failure due to constant loading over time. They are different phenomena!
*   **Forgetting the temperature dependence:** While creep can happen at room temperature, its engineering significance is primarily at elevated temperatures.
*   **Not understanding the three stages:** Knowing the characteristics of primary, secondary, and tertiary creep is crucial for understanding the creep curve. The secondary (steady-state) creep rate is often the most important for life prediction.
*   **Key definitions:** Be ready to define creep, creep strength, creep rupture strength, and minimum creep rate.

**Quick Recall Tip:** Think of creep as "slow, continuous stretching under constant load," especially when it's "hot." The higher the temperature and the higher the load, the faster the creep.

### Connecting to Textbooks

As you read through Callister (2014) and Higgins (1998), you'll find detailed discussions on these mechanisms. Callister often provides excellent diagrams of dislocation climb and diffusion paths, which are vital for visualizing these processes. Higgins, with his focus on metallurgy, will give you a strong understanding of how microstructure, including grain boundaries and precipitates, influences creep behavior, tying into CO4. Askeland and Avner also provide valuable perspectives on the underlying physics and practical applications, reinforcing the material selection aspects of CO3.

---

## Sample Questions and Answers

**1. Conceptual Question:** Explain why creep is primarily a concern at elevated temperatures, even though it can technically occur at room temperature.

**Answer:** Creep is a time-dependent deformation that occurs under constant stress. At the atomic level, creep mechanisms like diffusion and dislocation climb rely on the thermal energy of atoms to overcome energy barriers and move. While some atomic movement is possible at room temperature, the rate is very slow and often negligible for engineering purposes. As temperature increases, atomic mobility increases significantly. This enhanced mobility allows for more rapid diffusion and easier dislocation climb, leading to a much higher creep rate. Therefore, creep becomes a significant engineering concern when the operating temperature reaches a substantial fraction of the material's melting point (often above 0.4 $T_m$).

**2. Exam-Oriented Question:** Describe the three stages of a typical creep curve and state which stage is most critical for predicting component life and why.

**Answer:** The three stages of a typical creep curve (strain vs. time) are:
    a)  **Primary Creep:** Characterized by a decreasing creep rate. The material is initially deforming, and work hardening effects are dominant.
    b)  **Secondary Creep (Steady-State Creep):** Characterized by a relatively constant creep rate. Here, the rate of work hardening is balanced by the rate of recovery (softening mechanisms).
    c)  **Tertiary Creep:** Characterized by an accelerating creep rate, leading to fracture. This is often due to internal damage mechanisms like void formation or necking.

    The **secondary creep stage** is typically the most critical for predicting component life. This is because the constant creep rate observed during this stage allows engineers to extrapolate the deformation over the expected service life of a component. By knowing the minimum creep rate and the allowed total strain, one can estimate how long the component will last before reaching unacceptable levels of deformation or failing.

**3. Application-Based Question:** A steel bolt is used to fasten two metal plates that will be heated to 400°C during operation. The bolt is under a constant tensile load. What material property related to creep should the engineer be most concerned about, and why?

**Answer:** The engineer should be most concerned about the **creep strength** or **creep rupture strength** of the steel bolt at 400°C.

*   **Reasoning:** At 400°C, which is a moderately elevated temperature for steel (approaching 0.4 $T_m$ for some steels), creep deformation can become significant over time. The constant tensile load means the bolt will be subjected to stress for the entire operational life. If the bolt deforms too much due to creep, the clamping force on the plates will reduce, potentially leading to leaks or structural instability. If the creep rate is too high, it could lead to tertiary creep and eventual fracture of the bolt, causing a catastrophic failure of the assembly. Therefore, selecting a steel with adequate creep resistance (i.e., high creep strength and rupture strength at 400°C) is crucial for the long-term integrity of the bolted joint.
