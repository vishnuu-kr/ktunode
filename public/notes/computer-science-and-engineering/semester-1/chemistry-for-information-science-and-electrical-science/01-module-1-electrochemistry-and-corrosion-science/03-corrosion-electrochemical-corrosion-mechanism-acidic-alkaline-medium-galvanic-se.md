---
title: "Corrosion –Electrochemical corrosion mechanism (acidic & alkaline medium) - Galvanic series - Corrosion control methods - Cathodic Protection - Sacrificial anodic protection and impressed current cathodic protection – Electroplating of copper - Electroless plating of copper."
subject: "CHEMISTRY FOR INFORMATION SCIENCE AND ELECTRICAL SCIENCE"
module: "Module 1: Electrochemistry and Corrosion Science"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5dc8"
status: "completed"
scrapedAt: "2026-05-20T16:37:15.947Z"
---
Absolutely! Let's dive into the fascinating world of electrochemistry and corrosion science, tailored for your Information Science and Electrical Science journey. Think of this as our classroom session, where we'll break down these concepts step-by-step.

---

## Module 1: Electrochemistry and Corrosion Science

Welcome, everyone! In this module, we're going to explore some fundamental concepts of chemistry that are surprisingly relevant to both information science and electrical engineering. Today, our focus is on **Corrosion** and its underlying electrochemical mechanisms, how we predict it, how we control it, and some practical applications like electroplating.

Our aim here is to help you **explain the basic concepts of electrochemistry and corrosion** (CO1), understand **how engineering materials are used in different industries** (CO2), and even **apply analytical techniques** later on (CO3). So, let's get started!

### 1. Understanding Corrosion: It's More Than Just Rust!

Have you ever seen a car bumper pitted with rust, or a metal railing turning green and flaky? That's corrosion in action! At its heart, corrosion is the **gradual destruction of materials, usually metals, by chemical or electrochemical reaction with their environment.** For us in electrical and information science, understanding corrosion is crucial because it can degrade critical components, affect signal integrity, and compromise the lifespan of devices.

Think about it: even tiny amounts of corrosion on a printed circuit board (PCB) can disrupt the flow of electricity. Or imagine a server farm where cooling systems use metal pipes – corrosion can lead to leaks and system failures. So, it's not just about aesthetics; it's about reliability and functionality.

#### The Electrochemical Nature of Corrosion

Now, the most common and insidious form of corrosion, especially for metals, is **electrochemical corrosion**. This happens when there's an *electrochemical cell* set up on the surface of the metal. What do we mean by an electrochemical cell? Well, just like in a battery, we have:

*   **Anode:** Where oxidation occurs. The metal here loses electrons and starts to dissolve (corrode).
*   **Cathode:** Where reduction occurs. Electrons are accepted, and a reaction takes place.
*   **Electrolyte:** A medium that conducts ions, allowing the circuit to be completed. This is typically water containing dissolved salts, acids, or bases.
*   **Electrical Connection:** The metal itself provides the path for electrons to flow from the anode to the cathode.

It's like a tiny, unwanted battery forming on your metal object!

**Analogy:** Imagine a puddle of saltwater on a steel bridge. The steel (iron) acts as the conductor. The saltwater is the electrolyte. Some parts of the steel surface will act as anodes, and other parts will act as cathodes. Electrons will flow from the anodic areas to the cathodic areas through the metal, and ions will move through the saltwater. This continuous flow leads to the degradation of the metal at the anodic sites.

**Key Concept Alert!** The driving force for electrochemical corrosion is the tendency of metals to return to their more stable, oxidized (ore-like) state.

#### Electrochemical Corrosion Mechanism: Acidic and Alkaline Media

The specific reactions that occur depend on the environment, particularly the pH. Let's look at how corrosion proceeds in acidic and alkaline conditions, drawing from concepts discussed in books like *Engineering Chemistry* by Tembe, Kamaluddin, and Krishnan.

**1. In Acidic Medium (pH < 7)**

This is a common scenario, for instance, with acid rain or in industrial processes.

*   **Anode:** Metal (M) loses electrons and gets oxidized.
    *   M $\rightarrow$ M$^{n+}$ + ne$^{-}$
    *(Think of iron, Fe, losing electrons to become iron ions, Fe²⁺ or Fe³⁺).*

*   **Cathode:** Hydrogen ions (H⁺) from the acidic solution gain electrons and are reduced to hydrogen gas (H₂).
    *   2H⁺ + 2e$^{-}$ $\rightarrow$ H₂ (gas)
    *(This is often observed as the evolution of bubbles at the cathode surface).*

So, the overall process in acid is the metal dissolving and hydrogen gas being produced.

**Example:** Imagine a piece of iron placed in dilute hydrochloric acid. The iron will start to disappear, and you'll see bubbles forming on its surface as hydrogen gas is released. The iron ions formed will likely react further with oxygen if present, leading to iron oxides.

**2. In Neutral or Alkaline Medium (pH > 7)**

In neutral or slightly alkaline conditions, there are typically no free H⁺ ions to be reduced. Instead, dissolved oxygen plays a crucial role. This is how most atmospheric corrosion happens.

*   **Anode:** Metal (M) loses electrons and gets oxidized.
    *   M $\rightarrow$ M$^{n+}$ + ne$^{-}$

*   **Cathode:** Dissolved oxygen (O₂) in the presence of water accepts electrons.
    *   O₂ + 2H₂O + 4e$^{-}$ $\rightarrow$ 4OH⁻ (in neutral/alkaline medium)
    *(Here, hydroxide ions are formed).*

**What happens to the metal ions?** The metal ions (Mⁿ⁺) produced at the anode will react with the hydroxide ions (OH⁻) produced at the cathode, often forming insoluble metal hydroxides or oxides. These are what we commonly see as rust or tarnish.

**Example:** Consider a steel nail left outdoors. The moisture on its surface, along with dissolved oxygen from the air, creates the electrolyte. The iron oxidizes at anodic sites. At cathodic sites, oxygen reacts with water to form hydroxide ions. These then combine with the iron ions to form iron hydroxides, which dehydrate to form iron oxides – the familiar reddish-brown rust!

**Connecting to CO1:** Understanding these basic reactions helps us predict how metals will behave in different environments. For example, knowing that oxygen is key in neutral media tells us that metals in sealed, oxygen-free environments will corrode much slower. This is fundamental to selecting materials for electronic components or coatings for protection.

### 2. Predicting Corrosion: The Galvanic Series

How do we know which metal will corrode faster or act as the anode when two different metals are in contact? Nature provides a hierarchy! The **Galvanic Series** is a list of metals and alloys arranged in order of their electrode potentials.

*   **More Active Metals (Anodic):** Metals higher up in the series are more easily oxidized. When coupled with a metal lower in the series, they will act as the anode and corrode preferentially.
*   **Less Active Metals (Cathodic):** Metals lower down in the series are more noble and will act as the cathode, being protected from corrosion.

**Analogy:** Think of a race. Metals higher up are "faster" to lose electrons (more reactive), while those lower down are "slower" or more "stubborn" to lose electrons. If you pair a fast runner with a slow runner in a relay, the fast runner has to pass the baton (electrons) to the slow runner. The fast runner expends more energy and gets "tired" (corrodes).

**Common Galvanic Series (Simplified, from most anodic to most cathodic):**

1.  Magnesium and its alloys
2.  Aluminum and its alloys
3.  Zinc
4.  Iron and Steel
5.  Tin
6.  Lead
7.  Nickel
8.  Copper and its alloys (Brass, Bronze)
9.  Silver
10. Platinum
11. Gold

**Practical Example:** If you connect a zinc-coated (galvanized) steel bolt to a copper wire, the zinc will corrode instead of the steel. This is because zinc is higher than iron in the galvanic series, and iron is higher than copper. So, zinc acts as the sacrificial anode, protecting the steel. Similarly, if steel is in contact with copper, the steel will corrode more rapidly. This is why you often see steel screws in copper pipes being replaced because the steel corrodes quickly.

**Connecting to CO2:** This series is vital for selecting materials in applications. In circuit boards, for example, you want to avoid dissimilar metals that are far apart in the galvanic series if they are exposed to moisture, as this can lead to galvanic corrosion of the less noble metal.

### 3. Controlling Corrosion: Let's Fight Back!

Corrosion is inevitable, but we can significantly slow it down or prevent it. Controlling corrosion is a massive field, and knowing these methods is key to designing reliable systems, from tiny electronic devices to large infrastructure.

Here are some common corrosion control methods:

#### a) Protective Coatings

This is perhaps the most straightforward approach: create a barrier between the metal and its environment.

*   **Painting/Enameling:** This forms a physical barrier. The quality of the paint and its adhesion are critical. Think of the paint on your car.
*   **Metallic Coatings:** Applying a layer of a more resistant or sacrificial metal.
    *   **Galvanizing:** Coating steel with zinc. As we saw with the galvanic series, zinc corrodes preferentially, protecting the steel. This is widely used for structural steel, nails, and fasteners.
    *   **Tinning:** Coating steel with tin. Tin is nobler than iron, so it acts as a barrier. If the tin layer is breached, however, the steel will corrode faster than if it were uncoated (because tin is cathodic to iron). This is why tin cans are often lacquered on the inside – to prevent contact between the food (electrolyte) and the tin, and also to prevent contact between tin and steel.
    *   **Chromium/Nickel Plating:** These provide a hard, shiny, and corrosion-resistant barrier. Think of chrome-plated car parts or faucets.

#### b) Sacrificial Anodic Protection

This is a direct application of the galvanic series. You deliberately attach a more active metal (a sacrificial anode) to the metal you want to protect. The sacrificial anode corrodes instead of the main structure.

*   **How it works:** The sacrificial anode is electrically connected to the metal to be protected. The sacrificial anode, being more active, becomes the anode in the electrochemical cell, while the protected metal becomes the cathode.
*   **Examples:**
    *   **On Ships and Pipelines:** Blocks of magnesium, aluminum, or zinc alloys are bolted to the hull of a ship or attached to buried pipelines. As these blocks corrode away, they are replaced.
    *   **Water Heaters:** Steel water heaters often have a "sacrificial anode rod" made of magnesium or aluminum. As hard water deposits minerals, it can also contribute to corrosion. The rod corrodes, protecting the steel tank itself.

**Connecting to CO1 & CO2:** This method directly leverages our understanding of electrochemical potentials and the galvanic series to protect valuable infrastructure and equipment, ensuring their longevity in service.

#### c) Cathodic Protection (Impressed Current)

This is a more sophisticated method that uses an external electrical power source to force the metal to be protected to become the cathode.

*   **How it works:**
    1.  The structure to be protected is connected to the negative terminal of a DC power supply (like a battery or rectifier).
    2.  An inert or semi-inert anode (e.g., graphite, platinum, or high-silicon cast iron) is placed in the electrolyte and connected to the positive terminal of the DC power supply.
    3.  The power supply forces electrons onto the structure, making it the cathode, where reduction reactions occur (like oxygen reduction or hydrogen evolution). The anode is consumed very slowly or not at all.
*   **Applications:** Widely used for protecting buried pipelines, storage tanks, offshore platforms, and bridge decks.
*   **Advantages:** Can provide better control over the protective current and can be used for larger structures where sacrificial anodes would be impractical or too frequently replaced.

**Connecting to CO1 & CO2:** This method is a direct application of electrochemical principles to actively manage corrosion. For electrical engineers, understanding DC power supplies and current control is directly relevant here.

#### d) Passivation

Some metals, when exposed to certain environments, form a thin, stable, and adherent oxide layer on their surface. This passive layer acts as a barrier, preventing further corrosion.

*   **Examples:**
    *   **Stainless Steel:** Contains chromium, which forms a protective chromium oxide layer.
    *   **Aluminum:** Forms a tenacious aluminum oxide layer when exposed to air.
    *   **Anodizing:** An electrochemical process used to thicken the natural oxide layer on aluminum, making it more corrosion-resistant and aesthetically pleasing.

### 4. Electroplating: Coating with a Purpose

Electroplating is a process where a thin layer of one metal is deposited onto another metal (or other conductive surface) using electrolysis. It's not just about aesthetics; it's about enhancing properties like corrosion resistance, hardness, or conductivity.

**The Process (Electroplating of Copper as an Example):**

Imagine we want to plate a steel object with copper.

1.  **The Setup:** We need an electrolytic cell.
    *   **Electrolyte:** A solution containing copper ions, typically copper sulfate (CuSO₄) in sulfuric acid (H₂SO₄).
    *   **Cathode:** The object to be plated (the steel object) is connected to the negative terminal of a DC power supply.
    *   **Anode:** A piece of pure copper metal is connected to the positive terminal of the DC power supply.

2.  **The Reactions:**
    *   **At the Cathode (Object being plated):** Copper ions from the solution gain electrons and are deposited as solid copper onto the object.
        *   Cu$^{2+}$ (aq) + 2e$^{-}$ $\rightarrow$ Cu (s)
        *(This is where the copper layer builds up).*
    *   **At the Anode (Pure copper piece):** The pure copper anode dissolves, replenishing the copper ions in the solution.
        *   Cu (s) $\rightarrow$ Cu$^{2+}$ (aq) + 2e$^{-}$
        *(This ensures the concentration of copper ions remains relatively constant, and the anode gets consumed).*

**Why this works:** The DC power supply drives the electrons. The steel object, being at a negative potential, attracts the positive copper ions. Copper ions are more easily reduced than the metal of the object (steel), so copper deposits preferentially.

**Connecting to CO1 & CO3:** This is a direct application of electrochemical principles. Understanding the reactions and controlling parameters like current density and electrolyte concentration allows us to achieve desired coating thicknesses and properties, which relates to applying analytical and synthesis techniques.

**Think About It:** Why do we use a copper anode? Because it dissolves to replace the ions being plated. If we used an inert anode (like graphite), the copper ions would be depleted from the solution, and eventually, hydrogen evolution might occur at the cathode, leading to poor plating quality.

### 5. Electroless Plating: Plating Without External Power!

This is a fascinating alternative to electroplating. **Electroless plating** (also known as autocatalytic plating) deposits a metal coating onto a substrate without using an external electrical power source. It relies on a chemical reduction reaction.

**The Process (Electroless Plating of Copper):**

Electroless copper plating is commonly used in the manufacturing of printed circuit boards (PCBs) to create conductive traces and through-holes.

1.  **The Setup:**
    *   **Substrate:** The surface to be plated (e.g., a non-conductive PCB material that has been sensitized to make it catalytic).
    *   **Plating Solution:** This is a carefully controlled chemical bath containing:
        *   **Metal ions to be plated:** Copper ions (e.g., from copper sulfate).
        *   **Reducing Agent:** A chemical that provides electrons to reduce the metal ions to solid metal (e.g., formaldehyde, sodium hypophosphite).
        *   **Complexing Agent:** Keeps the metal ions in solution and controls their availability.
        *   **Stabilizers:** Prevent spontaneous decomposition of the bath.
        *   **pH Adjusters:** Maintain the optimal pH for the reaction.

2.  **The Mechanism:**
    *   The process is initiated on a catalytic surface. For non-conductive substrates like plastics in PCBs, they are first "sensitized" with a catalyst, typically palladium.
    *   Once the catalyst is present, the reducing agent in the solution transfers electrons to the metal ions, causing them to deposit as a solid coating.
    *   Crucially, the deposited metal itself is often catalytic, allowing the process to continue autocatalytically (the reaction catalyzes itself).

**Example Reaction (simplified, using formaldehyde as reducing agent):**

*   Cu$^{2+}$ (from CuSO₄) + 2HCHO (Formaldehyde) + 2OH$^{-}$ $\rightarrow$ Cu (s) + H₂ + 2HCOO$^{-}$ + 2H₂O
*(In reality, the reaction is more complex and involves intermediates).*

**Key Advantages of Electroless Plating:**

*   **Uniform Coating:** It deposits metal uniformly over complex shapes, including internal surfaces of holes, which is difficult with electroplating. This is essential for plating through-holes on PCBs.
*   **No Power Source:** Simpler equipment in some ways, no need for electrical connections to the workpiece.
*   **Plating on Non-conductors:** Can plate plastics and ceramics after proper surface preparation.

**Connecting to CO1, CO3, and CO2:** Electroless plating is a critical process in manufacturing electronic components. Understanding the chemical reactions and the role of different bath constituents is vital for process control and material characterization, directly aligning with CO3 and its importance in producing functional electronic materials (CO2).

---

### Summary and Key Takeaways for Your Exams

*   **Corrosion is an electrochemical process:** Think anode (oxidation), cathode (reduction), electrolyte, and electron flow.
*   **pH matters:** Acidic media typically involve H⁺ reduction, while neutral/alkaline media involve O₂ reduction.
*   **Galvanic Series:** Predicts which metal corrodes when two dissimilar metals are coupled. More active metals corrode.
*   **Corrosion Control:** Barriers (coatings), Sacrificial Anodes (active metal protection), Impressed Current Cathodic Protection (external power), and Passivation are key strategies.
*   **Electroplating:** Uses electrolysis to deposit metal coatings; requires an external power source and both anodic and cathodic reactants.
*   **Electroless Plating:** Uses chemical reduction; no external power needed; crucial for uniform coatings on complex shapes and non-conductors (like PCBs).

Remember these points! They form the backbone of understanding how metals degrade and how we can prevent it, which is fundamental to the reliability of any engineered system, especially those involving electrical signals and components.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** Explain why a steel ship hull is more susceptible to corrosion when it passes through polluted harbor water than through the open ocean.

**Answer:** Polluted harbor water often contains dissolved salts and acids, making it a much better electrolyte than cleaner ocean water. The higher conductivity of the electrolyte accelerates the electrochemical corrosion reactions. Additionally, certain pollutants might act as catalysts or provide cathodic sites, further promoting corrosion. This relates to the need for a conductive electrolyte in electrochemical corrosion.

**Question 2 (Exam-Oriented - Application of Galvanic Series):** You are designing a fastening system for a marine environment. You have to choose between using brass screws to attach aluminum panels or stainless steel screws to attach aluminum panels. Based on the galvanic series, which combination is less likely to cause rapid corrosion of the aluminum? Justify your answer.

**Answer:**
The relevant part of the galvanic series would show: Aluminum (anodic), Stainless Steel (cathodic to Aluminum), Brass (cathodic to Aluminum, but typically less noble than stainless steel).

*   **Aluminum panels with Brass screws:** Aluminum is more active than brass. Therefore, aluminum will act as the anode and corrode sacrificially to protect the brass screws (cathode).
*   **Aluminum panels with Stainless Steel screws:** Aluminum is more active than stainless steel. Therefore, aluminum will act as the anode and corrode sacrificially to protect the stainless steel screws (cathode).

**Justification:** In both cases, aluminum will corrode. However, the *potential difference* between aluminum and stainless steel is generally larger than between aluminum and brass. A larger potential difference leads to a greater driving force for corrosion and a higher current density, meaning the aluminum will corrode *faster* when coupled with stainless steel. Therefore, **using brass screws is less likely to cause rapid corrosion of the aluminum panels** compared to using stainless steel screws, although some corrosion of aluminum will still occur.

*(Self-correction/Refinement): While both combinations lead to aluminum corrosion, the *rate* is the key. The question asks which is *less likely to cause rapid corrosion*. The smaller the galvanic potential difference, the slower the corrosion rate. Always consider the *magnitude* of the difference from the galvanic series.*

**Question 3 (Conceptual - Cathodic Protection):** Differentiate between sacrificial anodic protection and impressed current cathodic protection.

**Answer:**
*   **Sacrificial Anodic Protection:** Involves attaching a more active metal (sacrificial anode) to the structure to be protected. This anode corrodes preferentially because it has a lower electrode potential. Examples include zinc anodes on ship hulls. It's a passive system; the driving force is the natural potential difference.
*   **Impressed Current Cathodic Protection (ICCP):** Uses an external DC power source to force the structure to become the cathode. Inert anodes are used, and the power supply controls the protective current. This is an active system offering more control and can protect larger areas.

**Question 4 (Exam-Oriented - Process Understanding):** What is the primary advantage of electroless plating over electroplating for manufacturing printed circuit boards (PCBs)?

**Answer:** The primary advantage of electroless plating (specifically electroless copper plating) for PCBs is its ability to provide a **uniform and conformal coating** over complex geometries, including the internal surfaces of small holes (through-holes) and the intricate patterns of circuit traces. Electroplating often struggles to achieve uniform thickness on high-aspect-ratio features or sharp edges, and it cannot deposit on non-conductive surfaces without prior metallization steps. Electroless plating, after a sensitization process, can deposit a conductive layer evenly across the entire surface, enabling the creation of reliable electrical connections.

**Question 5 (Conceptual - Electroplating Reaction):** In the electroplating of copper onto an iron object using a copper sulfate solution and a copper anode, why is it important for the copper anode to dissolve? What would happen if the anode were inert (e.g., graphite)?

**Answer:** It is important for the copper anode to dissolve because it **replenishes the copper ions (Cu²⁺) in the electrolyte**. As copper ions are reduced and deposited onto the cathode (the iron object), their concentration in the solution would decrease. The dissolving copper anode provides a continuous supply of Cu²⁺ ions, maintaining a stable plating process and preventing depletion of the plating bath.

If an inert anode (like graphite) were used:
1.  **Copper ion depletion:** The Cu²⁺ concentration in the solution would steadily decrease as they are plated onto the cathode. This would lead to a slowing down and eventual cessation of copper deposition.
2.  **Possible side reactions:** As the copper ion concentration drops, the reduction potential required for deposition becomes more negative. Eventually, other species in the solution might be reduced instead, such as hydrogen ions (H⁺) or water molecules. This would lead to hydrogen gas evolution (bubbling) at the cathode, resulting in poor adhesion, porosity, or no metallic copper deposition.

---

This covers our introduction to corrosion and plating. Remember to review the galvanic series and the fundamental electrochemical reactions. If anything is unclear, please don't hesitate to ask!
