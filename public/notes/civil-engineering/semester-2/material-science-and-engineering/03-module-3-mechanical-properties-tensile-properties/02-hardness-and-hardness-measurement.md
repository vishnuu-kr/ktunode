---
title: "Hardness and hardness measurement"
subject: "MATERIAL SCIENCE AND ENGINEERING"
module: "Module 3: Mechanical properties: Tensile properties"
branch: "Civil Engineering"
semester: 2
topicId: "68b54567d74ec52cc0912fdf"
status: "completed"
scrapedAt: "2026-05-20T18:36:22.322Z"
---
## Module 3: Mechanical Properties – Tensile Properties: Hardness and Hardness Measurement

Hello everyone, and welcome back to our exploration of mechanical properties! Last time, we delved into tensile properties, understanding how materials behave under pulling forces – concepts like strength, ductility, and elasticity. Today, we’re going to tackle a property that’s incredibly important in material selection and often used as a quick indicator of other properties: **Hardness**.

### What is Hardness, Really?

When we talk about hardness in materials science, we’re not just talking about how a diamond can scratch glass. It’s a more nuanced concept. Fundamentally, **hardness is the resistance of a material to localized plastic deformation**. Think about it: if you press something sharp onto a surface, does it leave a permanent dent or scratch? The harder the material, the more it resists that permanent deformation.

This resistance can manifest in different ways. It could be:
*   **Resistance to scratching:** Like trying to scratch paint on a car.
*   **Resistance to abrasion:** Imagine sand particles grinding away at a metal surface.
*   **Resistance to indentation:** This is what most hardness tests measure – pressing a hard object into the material's surface.
*   **Resistance to wear:** A combination of abrasion and adhesion, essentially how well a surface holds up to rubbing.

**(Connecting to Course Outcomes):** Understanding hardness is crucial for **CO3: Compare the material properties among different materials for material selection.** If you need a cutting tool, you'll want a material that's very hard to resist scratching and wear. If you need a suspension spring, you might prioritize ductility and toughness, where extreme hardness might even be detrimental. So, hardness is a key parameter when we're making those critical material choices.

### Why is Hardness So Important?

You might wonder, "Why bother with hardness tests when we already have tensile tests?" Well, hardness testing offers several significant advantages:

1.  **Simplicity and Speed:** Hardness tests are generally much quicker and easier to perform than tensile tests, which require specialized machines and specimen preparation.
2.  **Non-Destructive (Mostly):** While they do create an indentation, the damage is usually very small, and the test is often considered non-destructive or only slightly destructive. This means you can test a finished product without significantly altering it.
3.  **Correlation with Other Properties:** Here’s a really important point! Hardness is often directly related to other mechanical properties, especially **tensile strength**. For many metals, especially steels, there are well-established empirical relationships between hardness and tensile strength. So, a hardness test can be a quick proxy for estimating tensile strength, which is fantastic for quality control or on-site testing.
4.  **Surface Properties:** Hardness tests are excellent for assessing the properties of a material's surface, which is often the first part to experience wear, corrosion, or other environmental factors.

**(Referencing Callister):** As Callister points out in Chapter 6 (Mechanical Properties), hardness testing is a valuable tool because it's sensitive to microstructure, and consequently, to heat treatment and mechanical working. This directly links to **CO4: Define and differentiate the microstructure of metallic materials using phase diagrams.** Changes in microstructure, like grain size refinement or the formation of new phases due to heat treatment, will significantly affect hardness.

### Common Hardness Scales and Measurement Methods

So, how do we actually measure hardness? There are several established methods, each using a different indenter shape and loading technique. Let’s look at the most common ones:

#### 1. Rockwell Hardness Test

This is probably the most widely used hardness test in industry, especially for metals. The beauty of the Rockwell test is its simplicity and direct readout of a hardness number.

**The Basic Idea:**
The Rockwell test works by measuring the *depth of indentation* caused by a standard indenter under a standard load.

**Here’s how it works, step-by-step:**

*   **Minor Load (Preload):** First, a small initial load (often called a minor load or preload) is applied to the indenter. This ensures the indenter is seated firmly against the specimen surface and eliminates the effect of surface irregularities. Think of it like gently pressing a pen tip down before you start writing, so you get a consistent starting point.
*   **Major Load:** Then, a much larger load, the major load, is applied for a specific duration. This is the load that causes the indentation.
*   **Depth Measurement:** After the major load is removed, the indenter is still under the minor load. The machine measures the *difference in depth* between the initial seating under the minor load and the final position under the minor load after the major load is removed.
*   **Hardness Number:** This depth difference is then used to determine the Rockwell hardness number, typically by a direct-reading dial or digital display. A *smaller depth of penetration* means a *higher Rockwell hardness number*.

**Types of Rockwell Scales:**
The "scale" in Rockwell hardness refers to the specific combination of indenter type and load used. This is crucial because the hardness number is meaningless without knowing the scale.

*   **Indenter Types:**
    *   **Diamond Cone:** A hardened steel or carbide ball with a 120° cone angle and a 0.2 mm tip radius. This is used for harder materials.
    *   **Steel or Tungsten Carbide Ball:** These come in various diameters (e.g., 1/16", 1/8", 1/4", 1/2"). They are used for softer materials.

*   **Loads:** Major loads can vary, commonly 60 kgf, 100 kgf, or 150 kgf (kilogram-force).

**Common Rockwell Scales to Know:**

*   **HRC (Rockwell C Scale):** Uses the **diamond cone** indenter and a **150 kgf** major load. This is used for harder steels and other hard materials. If you hear "HRC," think "hard."
*   **HRB (Rockwell B Scale):** Uses a **1/16" diameter steel ball** indenter and a **100 kgf** major load. This is used for softer steels, aluminum alloys, copper alloys, etc. If you hear "HRB," think "softer metals."

**Why the different scales?** Imagine trying to measure the hardness of very soft butter with the same method you'd use for granite. You'd just make a massive, unreadable mess. Similarly, using a diamond cone on soft aluminum would create a huge indentation, and the depth difference wouldn't be a reliable indicator of hardness. Hence, different combinations of indenters and loads are needed for different material hardness ranges.

**Exam Tip:** Be prepared to identify which Rockwell scale is appropriate for a given material. For instance, if asked about the hardness of hardened tool steel, HRC is the appropriate scale. For annealed copper, HRB would be more suitable.

**(Connecting to Higgins):** Higgins, in "Engineering Metallurgy," often emphasizes the practical aspects of material testing. Rockwell is a prime example of a test that bridges the gap between laboratory measurement and industrial application due to its efficiency.

#### 2. Brinell Hardness Test

The Brinell test is another classic method, particularly useful for softer metals and for materials where a more representative measure of hardness across a larger area is desired.

**The Basic Idea:**
The Brinell test measures the *diameter of the indentation* produced by a hardened steel or tungsten carbide ball under a specific load.

**How it's done:**

*   A hardened steel or tungsten carbide ball (typically 10 mm in diameter, though other sizes are used) is pressed into the specimen surface.
*   A specific load (e.g., 3000 kgf for steels, 500 kgf for softer metals like aluminum) is applied for a standard soaking time (usually 10-15 seconds).
*   After the load is removed, the diameter of the resulting *spherical indentation* is measured using a special microscope with a calibrated scale.
*   The Brinell Hardness Number (HB or BHN) is calculated using a formula that relates the applied load, the diameter of the ball, and the diameter of the indentation.

**The Formula:**
$HB = \frac{2P}{\pi D (D - \sqrt{d^2 - D^2})}$

Where:
*   $P$ = Applied Load (kgf)
*   $D$ = Diameter of the Brinell ball (mm)
*   $d$ = Diameter of the indentation (mm)

**When to use Brinell?**
The Brinell test is excellent for materials with a rougher surface finish or for casting materials where a single, small indentation might not be representative. It averages out the hardness over a larger area. However, it's not suitable for very hard materials because the ball might deform, and the indentation diameter would be difficult to measure accurately.

**Key Consideration:** The ratio of the load ($P$) to the projected area of the indentation ($A$) is kept relatively constant across different materials. Typically, a load of 3000 kgf with a 10 mm ball is used for steels, giving a load-to-area ratio suitable for many metals.

**(Referencing Askeland):** Askeland's text often highlights the fundamental principles. The Brinell test, with its direct measurement of indentation area, directly relates to the concept of resistance to plastic deformation, making it a good example of understanding the "why" behind the test.

#### 3. Vickers Hardness Test

The Vickers test, also known as the Diamond Pyramid Hardness test, is highly versatile and can be used across a very wide range of hardnesses, from very soft materials to extremely hard ones.

**The Basic Idea:**
The Vickers test uses a precisely shaped **diamond pyramid indenter** and measures the **diagonal length of the indentation** after the load is removed.

**How it's done:**

*   A square-based diamond pyramid indenter (with an apex angle of 136°) is pressed into the specimen surface.
*   Loads can vary significantly, from very light loads (e.g., 10 gf to 1 kgf, called "microhardness" testing) to heavier loads (up to 120 kgf).
*   After the load is removed, the two diagonals of the resulting square-shaped indentation are measured under a microscope.
*   The Vickers Hardness Number (HV) is calculated based on the applied load and the average diagonal length.

**The Formula:**
$HV = \frac{1.8544P}{d^2}$

Where:
*   $P$ = Applied Load (kgf)
*   $d$ = Average diagonal length of the indentation (mm)

**Why is Vickers so popular?**
*   **Versatility:** It can be used on virtually any metallic material.
*   **Accuracy:** The geometry of the diamond indenter results in an indentation whose size is directly proportional to the load. This means the HV number is largely independent of the load used (within a reasonable range for a given material), which is a significant advantage.
*   **Microhardness:** The ability to use very light loads makes it ideal for testing thin surface layers, small components, or for determining hardness gradients across a microstructure.

**(Referencing Raghavan):** Raghavan’s book often delves into the metallurgical aspects. Vickers hardness is particularly useful for examining the hardness of individual phases within a microstructure or the hardened layer produced by surface treatments like carburizing or nitriding. This ties directly into **CO4: Define and differentiate the microstructure of metallic materials using phase diagrams.**

#### 4. Other Hardness Tests (Briefly)

While Rockwell, Brinell, and Vickers are the most common, you might also encounter:

*   **Knoop Hardness:** Uses a similar diamond indenter to Vickers but is elongated and flatter. It's excellent for very brittle materials and for measuring the hardness of thin surface layers, as it produces a shallower indentation.
*   **Shore Scleroscope:** Measures hardness by the rebound height of a small diamond-tipped hammer dropped onto the surface. It's less common now but was used for materials where other methods were difficult.

### Microstructure and Hardness: A Deep Dive

Let's pause and really think about *why* these tests work and how they relate to what we've learned about materials. Hardness, remember, is resistance to plastic deformation. What controls plastic deformation? It's primarily the movement of **dislocations** within the crystal lattice.

**(Connecting to CO1 & CO2):** Our understanding of **CO1: Crystal structures (BCC, FCC, HCP)** and **CO2: Crystallographic defects** is key here.

*   **Dislocation Movement:** Plastic deformation occurs when dislocations move through the crystal lattice. Anything that hinders this movement will increase hardness.
*   **Grain Boundaries:** Grain boundaries act as barriers to dislocation movement. Smaller grain sizes mean more grain boundaries per unit volume, making it harder for dislocations to travel long distances. This phenomenon is described by the **Hall-Petch relationship**, which states that yield strength (and thus hardness) increases with decreasing grain size. This is why fine-grained materials are often harder and stronger.
*   **Solid Solution Strengthening:** When alloying elements are added, their atoms can distort the crystal lattice, creating internal stresses that impede dislocation motion. This is like introducing obstacles in the path of dislocations.
*   **Precipitation Hardening:** The formation of tiny, dispersed precipitate particles within the matrix also acts as very effective barriers to dislocation movement. This is a powerful strengthening mechanism.
*   **Work Hardening (Strain Hardening):** As a metal is plastically deformed, dislocations can multiply and tangle up. This tangle of dislocations makes it much harder for further dislocation movement, thus increasing the material's hardness and strength.

**(Relatable Example):** Think about bending a paperclip. The first bend is easy. If you bend it back and forth in the same spot, it gets progressively harder to bend. You're work-hardening the metal! Similarly, if you try to scratch a piece of soft annealed copper versus a piece of hardened steel, the steel resists scratching much more. The steel's microstructure, likely with fine grains, possible alloying elements, and perhaps even a specific heat treatment, has made it much more difficult for dislocations to move and allow plastic deformation.

### Hardness as a Material Selection Tool

**(Connecting to CO3):** When we select materials for a specific application, we need to consider a range of properties. Hardness is often a critical one.

*   **Wear Resistance:** Applications like gears, bearings, cutting tools, and even brake pads require high hardness to resist abrasion and wear.
*   **Strength:** As mentioned, hardness is often directly correlated with tensile strength. So, for structural components where high load-bearing capacity is needed, a material with high hardness (and thus high tensile strength) is usually preferred.
*   **Machinability:** While not always linear, very hard materials can be difficult to machine, requiring specialized cutting tools. So, there's often a trade-off.
*   **Toughness:** Very high hardness can sometimes come at the expense of toughness (resistance to fracture). A very hard material might be brittle. You might recall from our tensile property discussions that ductility and toughness are important for components that experience impact or stress concentrations.

**(Real-world analogy):** Imagine choosing materials for a kitchen knife. You want the blade to be hard enough to hold a sharp edge and resist dulling (wear resistance). But if it's *too* hard and brittle, it might chip or break if you accidentally drop it or hit a bone. So, you'd select a steel that has good hardness *and* sufficient toughness. This is a classic example of balancing properties for material selection.

### Summary and Key Takeaways

*   **Hardness** is the resistance to localized plastic deformation.
*   It's a crucial property for assessing **wear resistance**, **strength**, and is often **correlated with tensile strength**.
*   Common measurement methods include **Rockwell**, **Brinell**, and **Vickers**, each using different indenters and loading techniques.
*   The choice of test depends on the **material’s hardness range** and the desired **application**.
*   Hardness is directly influenced by **microstructural features** such as grain size, alloying elements, precipitates, and dislocation density.
*   Understanding hardness is vital for **material selection (CO3)**.

Remember this: Hardness is not just a number; it's a window into how a material will behave under challenging conditions, particularly those involving surface interactions and wear.

---

### Sample Questions with Answers

**Conceptual Questions:**

1.  **Question:** Define hardness in your own words, relating it to plastic deformation.
    **Answer:** Hardness is a material's ability to resist having its surface permanently deformed (like being scratched or dented) when a concentrated force is applied. This resistance stems from how difficult it is to move dislocations within the material's crystal structure, which is the mechanism behind plastic deformation.

2.  **Question:** Why are different hardness scales (e.g., HRC and HRB) necessary?
    **Answer:** Different hardness scales are necessary because materials vary greatly in their hardness. Using the same indenter and load combination for both very soft and very hard materials would yield inaccurate or unusable results. For example, a diamond cone indenter used for hard materials would create a disproportionately large, unreadable indentation on a soft metal. Different scales use specific indenter types and loads to ensure the indentation depth or size is measurable and meaningful across different hardness ranges.

3.  **Question:** How does grain size affect a material's hardness?
    **Answer:** Smaller grain sizes generally lead to higher hardness. This is because grain boundaries act as barriers to dislocation movement. In a material with many small grains, dislocations encounter these boundaries more frequently, impeding their progress and thus increasing the material's resistance to plastic deformation (hardness). This relationship is described by the Hall-Petch equation.

**Exam-Oriented Questions:**

4.  **Question:** A component made of hardened tool steel is found to be difficult to scratch with a file. Which hardness test and scale would be most appropriate to quantify its hardness, and why?
    **Answer:** The most appropriate test would be the **Rockwell hardness test** using the **HRC (Rockwell C) scale**.
    **Reasoning:** Hardened tool steel is a very hard material. The HRC scale utilizes a diamond cone indenter and a high major load (150 kgf), which are specifically designed to measure the hardness of such hard materials accurately. The depth of indentation on a hard material will be relatively small, making the Rockwell test's depth-measuring principle effective.

5.  **Question:** You are testing an aluminum alloy casting and need to determine a representative hardness value that accounts for potential minor surface irregularities. Which hardness test is generally preferred, and what is the underlying principle of its measurement?
    **Answer:** The **Brinell hardness test** is generally preferred for such applications.
    **Underlying Principle:** The Brinell test measures the **diameter of the indentation** produced by a hardened steel ball under a specific load. By measuring the diameter of the resulting spherical indentation and using a formula that relates the load, ball diameter, and indentation diameter, a Brinell Hardness Number (HB) is obtained. This method averages hardness over a larger area than the Vickers or Rockwell tests, making it more representative for cast materials or those with slightly rougher surfaces.
