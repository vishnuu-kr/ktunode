---
title: "Corrosion –Electrochemical corrosion mechanism (acidic & alkaline medium) - Galvanic series - Corrosion control methods - Cathodic Protection - Sacrificial anodic protection and impressed current cathodic protection – Electroplating of copper - Electroless plating of copper."
subject: "CHEMISTRY FOR INFORMATION SCIENCE & ELECTRICAL SCIENCE"
module: "Module 1: Electrochemistry and Corrosion Science"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f93c5"
status: "completed"
scrapedAt: "2026-05-23T16:01:07.301Z"
---
# Chemistry for Information Science & Electrical Science: Module 1 - Electrochemistry and Corrosion Science

## Topic: Corrosion – Electrochemical Corrosion Mechanism, Galvanic Series, Corrosion Control, Electroplating & Electroless Plating

Welcome, everyone! Today, we embark on a fascinating journey into the world of corrosion. It might sound like a topic for civil engineers or materials scientists, but for us in Information Science and Electrical Science, understanding corrosion is crucial. Why? Because our sensitive electronic components, circuitry, and the very infrastructure that supports our digital world are all susceptible to it. Think about it – your smartphone, the servers in a data center, even the wires transmitting signals – they all rely on metals, and metals, unfortunately, have a tendency to degrade over time. This is where electrochemistry comes in, and it’s the primary culprit behind most corrosion.

This module, "Electrochemistry and Corrosion Science," is designed to give you a solid foundation in these principles. Specifically, today we'll delve deep into **how corrosion happens**, why some metals corrode faster than others, how we can prevent it, and even how we can use electrochemical principles to our advantage through plating.

### Understanding Corrosion: The Electrochemical Mechanism

At its heart, corrosion is an electrochemical process. It’s essentially the degradation of a metal through a chemical reaction with its environment. We often see it as rust on iron, but it affects many other metals too. The key here is *electrochemical*, meaning it involves the flow of electrons, just like in our electrical circuits!

Imagine a metal surface exposed to an electrolyte – that’s simply a solution containing ions, like water with dissolved salts or acids. What happens is that a small, localized electrochemical cell forms on the metal surface. This cell has two key components: an **anode** and a **cathode**.

*   **The Anode:** This is where oxidation occurs. The metal atoms lose electrons and become positively charged metal ions, which then dissolve into the electrolyte. Think of it as the metal "giving up" its electrons.
*   **The Cathode:** This is where reduction occurs. Typically, there's a reduction of some species present in the electrolyte. The electrons released by the anode travel to the cathode to make this reduction happen.

These two regions – the anode and cathode – are often very close to each other on the same metal surface. The metal itself acts as the electrical conductor connecting the anode and cathode, and the electrolyte acts as the ionic conductor.

#### Corrosion in Acidic Media

Let’s consider what happens when our electrolyte is acidic, like a dilute solution of sulfuric acid (H₂SO₄).

1.  **Anodic Reaction:** The metal (let's say Iron, Fe) oxidizes:
    `Fe(s) → Fe²⁺(aq) + 2e⁻`
    Here, iron atoms lose electrons and become ferrous ions, dissolving into the acid.

2.  **Cathodic Reaction:** In an acidic solution, there are plenty of hydrogen ions (H⁺). These H⁺ ions accept the electrons from the anode and are reduced to hydrogen gas (H₂):
    `2H⁺(aq) + 2e⁻ → H₂(g)`
    You might have seen this in lab experiments where a more reactive metal is placed in acid, and bubbles of hydrogen gas appear. That’s a visible sign of cathodic activity!

So, in acidic conditions, the metal is eaten away at the anodic sites, and hydrogen gas is evolved at the cathodic sites. This is a very common and often rapid form of corrosion. This connects directly to **CO1: Explain the Basic Concepts of Electrochemistry and Corrosion**. We're explaining the fundamental electrochemical reactions that drive corrosion.

#### Corrosion in Alkaline/Neutral Media

Now, what about when the environment isn't acidic? Many situations, especially involving water or moist air, involve neutral or even slightly alkaline conditions. Here, the cathodic reaction is different because there are fewer H⁺ ions. Instead, dissolved oxygen (O₂) plays a crucial role.

1.  **Anodic Reaction:** Again, the metal oxidizes. For iron, it might be:
    `Fe(s) → Fe²⁺(aq) + 2e⁻`

2.  **Cathodic Reaction:** In the presence of dissolved oxygen and neutral/alkaline water, the reaction is:
    `O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq)`
    Here, oxygen molecules, water, and the electrons from the anode combine to form hydroxide ions.

The Fe²⁺ ions produced at the anode can then react further with the OH⁻ ions and oxygen to form iron hydroxides, which eventually dehydrate to form the familiar reddish-brown rust (iron(III) oxide, Fe₂O₃·nH₂O).

Remember this: the presence of **dissolved oxygen** is critical for corrosion in neutral and alkaline environments. Without it, the cathodic reaction cannot proceed as efficiently, and corrosion rates are much lower. This is why we often see rust forming on iron left out in humid air, but it forms much faster if the iron is submerged in oxygenated water. This also reinforces **CO1** by showing how environmental factors influence electrochemical processes.

### The Galvanic Series: Predicting Corrosion Tendencies

So, we know that metals corrode. But why does your iron nail rust, while your stainless steel spoon doesn't seem to? It’s all about their relative tendencies to lose electrons – their electrochemical potential.

This is where the **Galvanic Series** comes in handy. It’s a list of metals and alloys ranked according to their electrochemical potential in a specific electrolyte (usually seawater or a saline solution). The series is ordered from the most anodic (most easily corroded) to the most cathodic (most resistant to corrosion).

Think of it like this: If you have two different metals in electrical contact in the presence of an electrolyte, the one higher up in the galvanic series will act as the anode and corrode, while the one lower down will act as the cathode and be protected. This phenomenon is called **galvanic corrosion**.

Let's look at a simplified example of the galvanic series:

*   **Anodic End (More Active):** Magnesium, Aluminum, Zinc, Iron, Tin, Lead, Nickel, Copper, Silver, Platinum, Gold.
*   **Cathodic End (Less Active):** (Noble metals)

**Example:** If you connect a piece of zinc to a piece of iron (like in a galvanized steel structure where zinc is coated on iron), the zinc is much higher in the series than iron. So, the zinc will preferentially corrode, acting as a "sacrificial anode" to protect the iron. This is a brilliant concept and ties directly into one of our corrosion control methods.

**Relatable Example:** Think about an old ship hull. If it's made of steel (iron-based) and has brass fittings (copper alloy), and they are in contact in seawater, the steel will corrode much faster because it's more anodic than brass. This is why such combinations are avoided or carefully managed. Understanding the galvanic series helps us select compatible materials, a key aspect of **CO2: Describe the use of various engineering materials in different industries**.

### Corrosion Control Methods: Protecting Our Assets

Corrosion can cause immense economic losses, structural failures, and problems with the reliability of electronic devices. Therefore, controlling corrosion is paramount. We can do this in several ways, broadly categorized as:

1.  **Modifying the Environment:**
    *   **Dehumidification:** Reducing moisture in enclosed spaces (like data centers) slows down corrosion.
    *   **Adding Inhibitors:** Chemicals that, when added to the electrolyte, reduce the corrosion rate. These often work by forming a protective film on the metal surface or by interfering with the anodic or cathodic reactions. For instance, in cooling systems, various chemicals are added to prevent metal parts from corroding.

2.  **Modifying the Metal:**
    *   **Alloying:** Creating alloys like stainless steel (iron with chromium and nickel) which form a passive, protective oxide layer. This passivation is a key concept in preventing corrosion.
    *   **Surface Coatings:** Applying a protective layer of another material. This can be:
        *   **Metallic Coatings:** Like galvanizing (zinc coating on steel) or tin plating.
        *   **Non-metallic Coatings:** Like paints, polymers, or enamels. These act as a barrier to isolate the metal from the corrosive environment.

3.  **Electrochemical Methods:** This is where we really leverage our understanding of electrochemistry. The two main methods here are:
    *   **Cathodic Protection:** Making the entire metal structure the cathode in an electrochemical cell.
    *   **Anodic Protection:** Making the entire metal structure the anode, but under conditions where it forms a passive film. (This is less common for general protection than cathodic protection).

Let's focus on Cathodic Protection, as it's a cornerstone of corrosion control.

### Cathodic Protection (CP): Making the Metal "Happy"

The core idea of cathodic protection is to force the metal we want to protect to become the **cathode** in an electrochemical cell. If it's the cathode, it will be gaining electrons, not losing them, and therefore it won't corrode. We achieve this by supplying electrons to the metal from an external source or from a more active sacrificial metal.

There are two main types of cathodic protection:

#### 1. Sacrificial Anodic Protection (SAP)

This is perhaps the most intuitive method. Remember our discussion on the galvanic series? We use a metal that is *more anodic* (more easily corroded) than the metal we want to protect. This "sacrificial" metal is electrically connected to the structure to be protected.

**How it works:** The sacrificial anode (e.g., magnesium, aluminum, or zinc alloys) has a lower electrode potential. It preferentially corrodes, supplying electrons to the structure (e.g., steel pipeline). The structure, now receiving electrons, becomes the cathode and is thus protected from corrosion.

**Example:** Think of a boat's hull, often made of steel. To protect it from the corrosive seawater, blocks of zinc or magnesium are bolted to the hull. As the boat moves through the water, these blocks corrode (sacrificially), protecting the steel hull. Similarly, galvanized nails are protected by the zinc coating.

**Advantages:**
*   Simple to install.
*   No external power source required.

**Disadvantages:**
*   The sacrificial anode gets consumed and needs periodic replacement, which can be costly and requires access.
*   The driving voltage is limited by the potential difference between the metals, which might not be enough in highly resistive environments.

This method beautifully illustrates **CO1** by applying electrochemical principles to prevent degradation and **CO2** by showing material selection for extended service life.

#### 2. Impressed Current Cathodic Protection (ICCP)

This method uses an external DC power source (like a rectifier) to force electrons onto the structure needing protection.

**How it works:**
*   A DC power source is connected to the structure to be protected (making it the cathode).
*   The other terminal of the power source is connected to an inert or "pseudo-anode" (which doesn't corrode or corrodes very slowly). These anodes are often made of materials like graphite, high-silicon cast iron, or platinum-coated titanium.
*   The electrolyte (soil, water) completes the circuit.

The power supply drives electrons to the structure, ensuring it remains cathodic, while the inert anode consumes electrons from the electrolyte (often by oxidizing water or chloride ions, depending on the medium).

**Example:** Long underground pipelines, bridges, and offshore structures (like oil rigs) are typically protected using ICCP. It's more efficient for large structures or in environments where sacrificial anodes would be depleted too quickly or are difficult to access for replacement.

**Advantages:**
*   Can provide higher current output and a more controlled protective potential.
*   Anodes are relatively long-lasting.
*   Suitable for large or submerged structures.

**Disadvantages:**
*   Requires an external power source, making it dependent on electricity.
*   More complex to install and requires skilled personnel for design and monitoring.
*   Risk of overprotection if not properly managed, which can cause issues like hydrogen embrittlement.

ICCP is a prime example of how we use applied electrochemistry to solve real-world engineering problems, hitting **CO1** and **CO2** strongly.

### Electroplating of Copper: More Than Just Decoration

Now, let's shift gears from preventing degradation to using electrochemistry for enhancement. **Electroplating** is a process where a thin layer of a desired metal is deposited onto another metal (or conductive surface) using electrolysis. It’s used for decorative purposes (think chrome plating on car parts), to improve corrosion resistance (like tin plating on steel), or to enhance conductivity.

We'll focus on the **electroplating of copper**. Copper is excellent for electrical conductivity, so plating copper onto less conductive materials is very common in the electronics industry.

**The Process:**

1.  **Anode:** Typically, an inert anode (like platinum or graphite) or a pure copper anode is used. If a copper anode is used, it dissolves to replenish the copper ions in the solution.
2.  **Cathode:** The object to be plated (e.g., a circuit board component) is made the cathode.
3.  **Electrolyte:** A solution containing copper ions, usually in the form of a copper salt like copper sulfate (CuSO₄) dissolved in acidic water (e.g., with sulfuric acid). The acid helps maintain conductivity and prevents the formation of insoluble copper hydroxides.

**Electrochemical Reactions:**

*   **Anodic Reaction (if copper anode):** `Cu(s) → Cu²⁺(aq) + 2e⁻` (Copper dissolves)
*   **Cathodic Reaction (on the object):** `Cu²⁺(aq) + 2e⁻ → Cu(s)` (Copper deposits)

The applied DC voltage drives these reactions. Copper ions from the electrolyte migrate to the negatively charged cathode (the object) and are reduced to solid copper metal, forming a uniform layer.

**Key Considerations for Good Plating:**
*   **Purity of Electrolyte:** Impurities can lead to rough or porous deposits.
*   **Current Density:** The current per unit area. Too high can lead to burning or powdery deposits; too low leads to slow deposition.
*   **Temperature and pH:** These affect the solubility of the salt and the efficiency of the deposition.
*   **Surface Preparation:** The object to be plated must be thoroughly cleaned (degreased, descaled) for the plating to adhere properly. This is crucial for any coating process.

Electroplating is a direct application of electrochemical principles for material modification, directly supporting **CO1** and **CO3** (for synthesis and characterization, as plating quality needs to be analyzed).

### Electroless Plating of Copper: Plating Without Plugs!

This is a fascinating variation. **Electroless plating**, also known as autocatalytic plating, deposits a metal coating onto a substrate without the use of an external electrical power source. How is this possible? It relies on a chemical reduction process where the plating metal itself acts as a catalyst for its own deposition.

**The Process:**

1.  **Electrolyte:** A solution containing the metal ions to be deposited (e.g., copper ions, Cu²⁺), a reducing agent (e.g., formaldehyde, NaBH₄), complexing agents (to keep metal ions dissolved and control reaction rate), and stabilizers.
2.  **Substrate:** The object to be plated must be conductive or rendered conductive. For non-conductive materials (like plastics, which are crucial in electronics for insulating layers), they first need to be chemically treated to create catalytic sites. This often involves seeding with a catalyst like palladium.

**How it Works:**
The reducing agent in the solution gets oxidized, releasing electrons. These electrons are then used to reduce the metal ions in the solution (e.g., Cu²⁺) to solid metal (Cu) on the catalytic surface. The key is that this reduction reaction is *autocatalytic* – once a small amount of the plating metal (copper) is deposited, it becomes the catalyst for further deposition.

**Electrochemical Reactions (Simplified with Formaldehyde):**

*   **Reducing Agent Oxidation:** `CH₂O + 2OH⁻ → HCOO⁻ + H₂O + H₂ + 2e⁻` (Hypothetical reaction)
*   **Metal Ion Reduction:** `Cu²⁺(aq) + 2e⁻ → Cu(s)`

The overall process is a controlled chemical reduction.

**Why is it important in Information Science and Electrical Science?**

Electroless plating is incredibly valuable for creating conductive pathways on non-conductive substrates, such as:
*   **Printed Circuit Boards (PCBs):** Creating the copper traces on PCBs often involves electroless copper plating as a first step, followed by electroplating to build thickness.
*   **EMI Shielding:** Coating plastic enclosures with copper to block electromagnetic interference.
*   **Miniaturized Components:** Plating intricate shapes and small features uniformly, which can be challenging with electroplating.

**Advantages:**
*   Uniform coating thickness, even on complex shapes and through holes.
*   No need for external power supply or complex electrical connections.
*   Can plate on non-conductors after proper surface activation.

**Disadvantages:**
*   Slower deposition rates compared to electroplating.
*   The plating bath is more complex and requires careful control of chemical concentrations.
*   The reducing agent is consumed, and byproducts can build up.

This method is a perfect example of applied chemistry in material fabrication for electronics, directly linking to **CO1** and **CO3**.

### Connecting to Course Outcomes

Let's quickly recap how this module aligns with our course objectives:

*   **CO1 (Basic Concepts of Electrochemistry and Corrosion):** We've covered the fundamental electrochemical mechanism of corrosion in different media, the role of potential in the galvanic series, and the principles behind cathodic protection – all core electrochemical concepts.
*   **CO2 (Use of Engineering Materials):** Understanding the galvanic series and corrosion control methods directly informs the selection and application of materials in various industrial settings, from protecting pipelines to ensuring the longevity of electronic components.
*   **CO3 (Analytical Techniques for Synthesis and Characterization):** Electroplating and electroless plating are synthesis techniques used to create functional material coatings. While we haven't detailed characterization methods here, understanding the plating process is the first step to analyzing the quality, thickness, and properties of the deposited layers.
*   **CO4 (Water Treatment and Waste Management):** While not explicitly detailed in this topic, understanding corrosion is critical for water treatment. For example, selecting materials for water pipes that resist corrosion or managing the byproducts of cathodic protection systems (which can sometimes involve metal ions in the water) falls under this.

### Summary of Key Takeaways

*   Corrosion is an electrochemical process involving anodic oxidation and cathodic reduction.
*   The mechanism differs in acidic (H₂ evolution) and neutral/alkaline (O₂ reduction) media.
*   The Galvanic Series ranks metals by their tendency to corrode, crucial for predicting galvanic corrosion.
*   Corrosion control aims to prevent these electrochemical reactions through environmental modification, material selection, coatings, and electrochemical methods.
*   Cathodic Protection makes a metal the cathode, either via Sacrificial Anodes (more active metal corrodes) or Impressed Current (external power supply).
*   Electroplating uses electrolysis to deposit a metal coating, vital for conductivity and protection.
*   Electroless plating achieves metal deposition through chemical reduction without external power, enabling plating on non-conductors and uniform coatings.

Remember these core ideas as we move forward. They are fundamental to understanding how materials behave and how we can manipulate them for our technological advancements.

---

## Sample Questions and Answers

**Q1. Explain the electrochemical mechanism of iron corrosion in a neutral, oxygenated environment.**

**Answer:** In a neutral, oxygenated environment, iron corrosion proceeds via an electrochemical cell formed on its surface.
*   **Anodic Reaction:** Iron oxidizes, losing electrons: `Fe(s) → Fe²⁺(aq) + 2e⁻`. These anodic sites are where the metal is consumed.
*   **Cathodic Reaction:** Dissolved oxygen acts as the depolarizer, accepting electrons in the presence of water: `O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq)`. These are the cathodic sites.
The released Fe²⁺ ions then react with the generated OH⁻ ions and further oxygen to form iron hydroxides, which eventually dehydrate to form rust (Fe₂O₃·nH₂O). The electrolyte (water with dissolved salts) provides the ionic path, and the iron itself provides the electronic path between the anodic and cathodic areas. This process is continuous as long as oxygen and moisture are present.

**Q2. What is the Galvanic Series, and how is it used to prevent galvanic corrosion?**

**Answer:** The Galvanic Series is a list of metals and alloys ranked in order of their electrochemical potential in a specific electrolyte (e.g., seawater). Metals at the anodic end are more reactive and corrode more readily, while those at the cathodic end are less reactive and more resistant to corrosion.
To prevent galvanic corrosion, dissimilar metals in electrical contact should be chosen such that their positions in the galvanic series are close. If metals with a large potential difference must be in contact, the more noble (cathodic) metal should be protected from direct contact with the electrolyte, or the more active (anodic) metal should be used as a sacrificial anode to protect the other. For instance, if steel (iron) is in contact with copper, copper is much more cathodic. The steel will corrode preferentially. To avoid this, one might use stainless steel (closer potential) or protect the steel with a sacrificial zinc coating. This aligns with **CO1** and **CO2**.

**Q3. Differentiate between Sacrificial Anodic Protection and Impressed Current Cathodic Protection.**

**Answer:** Both are methods to provide cathodic protection, meaning they make the structure to be protected the cathode.
*   **Sacrificial Anodic Protection (SAP):** Uses a more active metal (higher in the galvanic series, e.g., magnesium, zinc) that is electrically connected to the structure to be protected. This sacrificial anode corrodes preferentially, supplying electrons to the structure and thus protecting it. It requires no external power source but necessitates replacement of the anode as it's consumed.
*   **Impressed Current Cathodic Protection (ICCP):** Uses an external DC power source (rectifier) to supply electrons to the structure. The positive terminal of the rectifier is connected to an inert anode (e.g., graphite, platinum). The power source is adjustable, allowing for precise control of the protective current. It's suitable for large structures and where replacement of sacrificial anodes is impractical, but it relies on a continuous power supply. This addresses **CO1** and **CO2**.

**Q4. Why is electroless copper plating important for the electronics industry, particularly for PCBs?**

**Answer:** Electroless copper plating is vital for PCBs because it allows the deposition of a uniform, thin conductive copper layer onto non-conductive substrates like plastic or fiberglass resins without an external electrical current.
For PCBs, this process is typically the first step in creating the conductive traces. The non-conductive board is first etched and then "activated" with a catalyst (like palladium). The board is then immersed in an electroless copper plating bath. This deposits a thin, conductive layer of copper over the entire surface, including the through-holes. This thin layer is then sufficiently conductive to allow for subsequent **electroplating** of copper, which builds up the thickness of the traces and fills the through-holes to create the required electrical connections between layers. Electroless plating provides excellent adhesion and uniform coverage, which are critical for reliable electronic circuits. This directly relates to **CO1** and **CO3**.

**Q5. You observe bubbles forming on a metal object immersed in an acidic solution. What is likely happening at the metal surface?**

**Answer:** The formation of bubbles on a metal in an acidic solution is typically due to the evolution of hydrogen gas. This indicates that the metal is acting as the **anode** in an electrochemical corrosion cell, oxidizing to form metal ions (`M → Mⁿ⁺ + ne⁻`). The electrons released travel through the metal to other sites on the surface, which are acting as **cathodes**. In an acidic medium, the primary cathodic reaction is the reduction of hydrogen ions from the acid to hydrogen gas: `2H⁺(aq) + 2e⁻ → H₂(g)`. Thus, the bubbles observed are hydrogen gas being released at the cathodic sites. This demonstrates understanding of the corrosion mechanism in acidic media, supporting **CO1**.
