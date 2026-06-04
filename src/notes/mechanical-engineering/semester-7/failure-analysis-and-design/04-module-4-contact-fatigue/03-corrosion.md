---
title: "Corrosion"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 4: Contact fatigue"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463dee"
status: "completed"
scrapedAt: "2026-05-20T18:12:43.388Z"
---
# Module 4: Contact Fatigue - Topic: Corrosion

## 1. Introduction to Corrosion in Contact Fatigue

Corrosion, in the context of contact fatigue, refers to the degradation of material surfaces due to electrochemical or chemical reactions with the surrounding environment. While contact fatigue primarily deals with mechanical stresses leading to crack initiation and propagation under cyclic contact loading, corrosion can significantly exacerbate these mechanisms, leading to a phenomenon known as **corrosion fatigue**.

**Key Concepts:**

*   **Corrosion:** The electrochemical or chemical deterioration of a material.
*   **Contact Fatigue:** Failure due to repeated cyclic stresses applied to contacting surfaces.
*   **Corrosion Fatigue:** A synergistic phenomenon where cyclic stresses and a corrosive environment interact to accelerate the fatigue crack initiation and propagation process. The fatigue life is significantly reduced compared to fatigue in a non-corrosive environment.

**Relevance to Course Outcomes:**

*   **CO1 (K2):** Understanding how corrosion, as an environmental factor, influences material behavior under cyclic loading, contributing to different failure theories.
*   **CO4 (K2):** This topic directly addresses advanced failure mechanisms, specifically the interaction of corrosion with contact fatigue, and its impact on material properties and design.

**Textbook References:**

*   **Jones D. R. H. (1993), *Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications***: This text likely provides case studies and design implications of corrosion affecting mechanical components.
*   **ASM Handbook, Vol. 11 (2002), *Failure Analysis and Prevention***: This is a crucial reference for practical aspects of failure analysis, including methods for identifying corrosion and its role in failures.
*   **Collins, J. A. (2013), *Failure of Materials in Mechanical Design***: This book will offer insights into how material properties are affected by environmental factors like corrosion in mechanical designs.

---

## 2. Mechanisms of Corrosion and their Interaction with Contact Fatigue

Corrosion can occur on contacting surfaces through various electrochemical and chemical processes. The presence of cyclic stresses can significantly amplify the rate and effect of these processes.

### 2.1 Electrochemical Corrosion

This is the most common form of corrosion and involves an electrochemical cell where oxidation (loss of electrons) and reduction (gain of electrons) occur.

**Key Concepts:**

*   **Anode:** The site where oxidation occurs (metal dissolves).
*   **Cathode:** The site where reduction occurs (e.g., oxygen reduction).
*   **Electrolyte:** A conductive medium (e.g., water with dissolved salts) that allows ion flow between anode and cathode.
*   **Metallic Bond:** The bonding that holds metal atoms together, allowing for electron mobility.

**Mechanisms relevant to Contact Fatigue:**

*   **Crevice Corrosion:** Localized corrosion that occurs within narrow gaps or crevices (e.g., between mating surfaces, under deposits) due to differences in ion concentrations and pH.
    *   **How it interacts with Contact Fatigue:** Crevices can act as stress concentrators, promoting crack initiation. The aggressive environment within the crevice accelerates crack growth.
*   **Pitting Corrosion:** Localized attack that results in small holes or pits on the surface.
    *   **How it interacts with Contact Fatigue:** Pits act as stress raisers, initiating fatigue cracks. Once a crack starts from a pit, the crack tip environment can be even more aggressive.
*   **Galvanic Corrosion:** Occurs when two dissimilar metals are in electrical contact in an electrolyte. The more active metal (anode) corrodes preferentially.
    *   **How it interacts with Contact Fatigue:** If different materials are in contact under cyclic load, galvanic corrosion can create surface irregularities that promote fatigue.
*   **General Corrosion:** Uniform thinning of the metal surface.
    *   **How it interacts with Contact Fatigue:** While less localized, general corrosion can reduce the cross-sectional area of a component, effectively increasing stress levels and potentially reducing fatigue life.

### 2.2 Chemical Corrosion

This type of corrosion involves direct chemical attack on the metal surface without a clear electrochemical cell.

**Key Concepts:**

*   **Oxidation:** Direct reaction with oxidizing agents (e.g., oxygen at high temperatures).

**Mechanisms relevant to Contact Fatigue:**

*   **High-Temperature Oxidation:** At elevated temperatures, metals can react directly with oxygen in the atmosphere to form oxide scales.
    *   **How it interacts with Contact Fatigue:** The oxide scale can be brittle and crack under cyclic contact stresses, exposing fresh metal to further oxidation and creating initiation sites for fatigue cracks. Stresses can also be induced within the oxide layer itself, contributing to cracking. (Relates to CO4).

### 2.3 Stress-Corrosion Cracking (SCC)

While distinct from pure corrosion fatigue, SCC can be exacerbated by cyclic stresses, leading to crack initiation and propagation. SCC typically involves the combined action of tensile stress and a specific corrosive environment.

**How it interacts with Contact Fatigue:** Cyclic stresses can cause micro-plastic deformation at crack tips, accelerating SCC initiation and growth, especially in susceptible materials.

**Textbook References:**

*   **Jones D. R. H. (1993):** Likely discusses case studies where crevice corrosion or pitting played a role in component failure under fatigue conditions.
*   **ASM Handbook, Vol. 11 (2002):** Provides detailed information on the mechanisms of various corrosion types and diagnostic techniques used in failure analysis.
*   **Collins, J. A. (2013):** Will cover how material properties are influenced by environmental degradation, including corrosion, and how this impacts design decisions.

---

## 3. Corrosion Fatigue Mechanisms

Corrosion fatigue is a critical consideration in many engineering applications. It involves the synergistic interaction between cyclic mechanical stresses and a corrosive environment, leading to a significantly reduced fatigue life.

**Key Concepts:**

*   **Corrosion Fatigue Crack Initiation:** The process by which a fatigue crack starts on the surface of a material under cyclic loading in a corrosive environment. Corrosion can create pits or crevices that act as preferential crack initiation sites.
*   **Corrosion Fatigue Crack Propagation:** The growth of an initiated fatigue crack under cyclic loading in a corrosive environment. The corrosive environment can accelerate crack growth rates through various mechanisms.

**Mechanisms of Corrosion Fatigue:**

1.  **Corrosion-Accelerated Crack Initiation:**
    *   **Pit Formation:** Corrosion can create pits on the surface. These pits act as stress concentrators, significantly lowering the fatigue limit and promoting crack initiation at much lower stress amplitudes than would be required in a clean environment.
    *   **Crevice Effects:** Similar to pits, crevices can lead to localized chemical conditions that accelerate the initial stages of crack formation.
    *   **Surface Degradation:** General or localized corrosion can roughen the surface, creating a rougher "effective" surface, which can act as a collection of small crack-like features, thereby reducing fatigue strength.

2.  **Corrosion-Accelerated Crack Propagation:**
    *   **Environment-Assisted Fatigue:** The corrosive environment can interact with the crack tip, making it easier for the material to deform plastically and fracture. This is often referred to as **environmental hydrogen embrittlement** if hydrogen ions from the electrolyte are involved.
        *   Hydrogen atoms can diffuse into the metal at the crack tip, causing embrittlement and promoting brittle fracture.
    *   **Electro-chemical Reactions at Crack Tip:** The aggressive electrolyte can reach the crack tip, leading to electrochemical reactions that can wedge open the crack or chemically attack the material at the tip, enhancing propagation.
    *   **"Wedging" Effect:** Deposits or corrosion products within the crack can act like wedges, opening the crack tip further with each stress cycle, thus increasing crack growth rates.
    *   **Dislocation Mobility:** In some cases, the presence of specific ions can affect dislocation movement at the crack tip, influencing the fracture process.

**High Cycle Fatigue vs. Low Cycle Fatigue in Corrosive Environments:**

*   **High Cycle Fatigue (HCF):** In HCF regimes, corrosion is particularly detrimental as it can drastically reduce the fatigue limit. Even small, corrosion-induced surface defects can become critical initiation sites.
*   **Low Cycle Fatigue (LCF):** While LCF is dominated by plastic deformation, corrosion can still influence crack initiation and propagation by creating surface defects and making the crack tip environment more aggressive.

**Textbook References:**

*   **Jones D. R. H. (1993):** Case studies likely illustrate how corrosion fatigue has led to premature failures in components subjected to cyclic contact.
*   **ASM Handbook, Vol. 11 (2002):** Detailed sections on corrosion fatigue mechanisms, testing methods, and failure analysis techniques for components exhibiting corrosion fatigue.
*   **Collins, J. A. (2013):** Will provide a design perspective on mitigating corrosion fatigue, including material selection and protective measures.
*   **Prashant Kumar (1999), *Elements of Fracture Mechanics***: While primarily focused on fracture mechanics, this text might touch upon environmental effects on crack growth, which is relevant to corrosion fatigue propagation.

---

## 4. Factors Affecting Corrosion Fatigue

Several factors influence the severity of corrosion fatigue, including the material properties, the corrosive environment, and the mechanical loading conditions.

### 4.1 Material Properties

*   **Corrosion Resistance:** Materials with inherent resistance to corrosion (e.g., stainless steels, aluminum alloys with protective oxide films) will generally perform better in corrosive fatigue environments.
*   **Microstructure:** The microstructure of a material (grain size, phases, grain boundaries) can influence both its mechanical properties and its susceptibility to corrosion. For example, a non-uniform microstructure might lead to localized galvanic effects.
*   **Surface Finish:** A rough or damaged surface is more susceptible to corrosion initiation and can act as a stress riser, promoting fatigue crack initiation.
*   **Presence of Inclusions:** Non-metallic inclusions can act as initiation sites for both fatigue cracks and corrosion pits.

### 4.2 Corrosive Environment

*   **Nature of the Corrosive Agent:** The type of electrolyte (e.g., saltwater, acidic solutions, alkaline solutions) and its concentration significantly impact the corrosion rate.
*   **Temperature:** Higher temperatures generally accelerate chemical reaction rates, including corrosion processes.
*   **Oxygen Concentration:** For many electrochemical corrosion processes, the availability of oxygen is a critical factor.
*   **pH:** The acidity or alkalinity of the environment can strongly influence corrosion rates and mechanisms.
*   **Flow Rate:** The movement of the corrosive medium can affect the supply of reactants to the surface and the removal of corrosion products, potentially altering corrosion patterns.

### 4.3 Mechanical Loading

*   **Stress Amplitude/Range:** Higher stress amplitudes generally lead to faster crack propagation in corrosion fatigue.
*   **Mean Stress:** Tensile mean stresses increase the likelihood of crack initiation and propagation.
*   **Frequency:** The frequency of the cyclic loading can be crucial. At lower frequencies, there is more time for corrosive attack to occur at the crack tip with each stress cycle, potentially leading to higher crack growth rates.
*   **Loading Waveform:** The shape of the stress cycle can influence the interaction with the environment.

**Impact on S-N-P Curves (Relates to CO2):**

Corrosion significantly affects the **S-N-P curves** (Stress-Number of cycles to failure-Probability of survival).
*   **Reduced Fatigue Limit/Endurance Limit:** In corrosive environments, there is often no true fatigue limit; fatigue failure will eventually occur even at very low stress levels. The S-N curve tends to continue downwards without leveling off.
*   **Lower Fatigue Strength:** For any given number of cycles, the allowable stress is lower in a corrosive environment.
*   **Increased Scatter:** The combined effects of corrosion and fatigue can lead to greater variability in fatigue life, increasing the scatter in the S-N-P data.

**Important Point to Remember:** Corrosion does not just add to fatigue; it *synergistically* worsens it.

**Textbook References:**

*   **Jones D. R. H. (1993):** Likely presents case studies where variations in these factors led to different outcomes in corrosion fatigue failures.
*   **ASM Handbook, Vol. 11 (2002):** Provides detailed data and guidance on how various environmental and loading parameters affect corrosion and corrosion fatigue.
*   **Collins, J. A. (2013):** Discusses the design implications of these factors, emphasizing the need to consider them during material selection and component design.
*   **CO2 Knowledge Level:** Understanding these factors is essential for remembering how S-N-P curves are affected and how to interpret them in the context of corrosive environments.

---

## 5. Corrosion Fatigue Design and Prevention Strategies

Designing to mitigate the effects of corrosion fatigue requires a multi-pronged approach, involving material selection, protective coatings, environmental control, and design modifications.

### 5.1 Material Selection

*   **Corrosion-Resistant Alloys:** Utilize alloys known for their good corrosion resistance in the intended environment (e.g., stainless steels, nickel-based alloys, certain aluminum alloys).
*   **Surface Treatments:** Select materials that can be effectively surface treated to enhance corrosion resistance.

### 5.2 Protective Coatings and Surface Treatments

*   **Metallic Coatings:**
    *   **Sacrificial Coatings (Galvanizing, Cadmium Plating):** The coating is more active than the base metal and corrodes preferentially, protecting the base metal.
    *   **Barrier Coatings (Chrome Plating, Nickel Plating):** These coatings provide a physical barrier to the corrosive environment. However, if the barrier is breached (e.g., by a scratch), galvanic corrosion can occur, potentially accelerating the degradation of the underlying material.
*   **Non-metallic Coatings:**
    *   **Paints and Polymer Coatings:** Offer excellent barrier protection, but their integrity can be compromised by mechanical damage.
    *   **Ceramic Coatings:** Provide high corrosion and wear resistance.
*   **Surface Treatments:**
    *   **Passivation:** For stainless steels, passivation removes free iron from the surface and enhances the formation of a protective chromium oxide layer.
    *   **Anodizing:** For aluminum alloys, anodizing creates a thicker, more robust oxide layer.
    *   **Shot Peening/Laser Peening:** While primarily for improving fatigue life by inducing compressive residual stresses, these treatments can also close small surface defects, potentially reducing corrosion initiation sites.

### 5.3 Environmental Control

*   **Corrosion Inhibitors:** Chemicals that can be added to the environment to slow down the corrosion process.
*   **Deaeration:** Removing dissolved oxygen from the electrolyte can significantly reduce the rate of many corrosion processes.
*   **Filtration:** Removing suspended particles that can trap moisture and create crevices.

### 5.4 Design Considerations

*   **Avoid Crevices:** Design components to minimize or eliminate crevices where corrosion can concentrate.
*   **Smooth Transitions:** Avoid sharp corners and abrupt changes in geometry, which can act as stress concentrators and preferential sites for corrosion.
*   **Drainage:** Design for good drainage to prevent the accumulation of stagnant corrosive fluids.
*   **Material Combinations:** Avoid pairing dissimilar metals that could lead to galvanic corrosion unless properly managed with sacrificial coatings or insulation.
*   **Surface Finish:** Ensure a good, smooth surface finish on critical components.

**Textbook References:**

*   **Jones D. R. H. (1993):** Case studies might highlight successful prevention strategies employed in real-world scenarios.
*   **ASM Handbook, Vol. 11 (2002):** Comprehensive guide to protective coatings, surface treatments, and corrosion prevention techniques.
*   **Collins, J. A. (2013):** Emphasizes the design engineer's role in selecting appropriate materials and implementing strategies to prevent failure, including corrosion fatigue.

---

## 6. Failure Analysis for Corrosion Fatigue

Identifying and analyzing corrosion fatigue failures requires a systematic approach, often involving visual inspection, microscopy, and chemical analysis.

**Key Steps in Failure Analysis:**

1.  **Visual Inspection:**
    *   **Corrosion Products:** Identify the presence and type of corrosion products (rust, scale, pitting).
    *   **Surface Morphology:** Observe the surface for pits, crevices, general corrosion, and the general condition of any protective coatings.
    *   **Fracture Surface:** Examine the fracture surface for characteristic fatigue striations, which may be obscured by corrosion products. Look for signs of brittle fracture or corrosion pitting at the origin.

2.  **Microscopic Examination:**
    *   **Optical Microscopy:** Examine the surface and fracture surface for pits, cracks, and corrosion morphology.
    *   **Scanning Electron Microscopy (SEM):** Provides higher magnification for detailed examination of:
        *   **Crack Initiation Sites:** Identifying pits or surface defects as origins.
        *   **Fatigue Striations:** Confirming fatigue as the primary failure mechanism.
        *   **Corrosion Products:** Analyzing their composition.
        *   **Fracture Surfaces:** Differentiating between ductile, brittle, and fatigue fracture modes.
        *   **Environmental Effects:** Observing hydrogen-induced features if applicable.

3.  **Chemical Analysis:**
    *   **Energy Dispersive X-ray Spectroscopy (EDS/EDX):** Used in conjunction with SEM to identify the elemental composition of corrosion products and the base material.
    *   **X-ray Diffraction (XRD):** Can identify crystalline phases in corrosion products, providing more specific information about the corrosion mechanism.

4.  **Metallography:**
    *   **Cross-Sectioning:** Preparing cross-sections of the failed component allows for examination of subsurface corrosion, crack propagation paths, and the influence of microstructure.
    *   **Etching:** Metallographic etching can reveal microstructural features and the extent of corrosion attack within the material.

**Case Study Example (Conceptual):**

Imagine a steel shaft used in a marine environment that fails prematurely.
*   **Visual Inspection:** Reveals rust deposits and pitting on the surface. The fracture surface shows a relatively smooth area with signs of corrosion pitting at the origin, transitioning to a rougher, fibrous fracture.
*   **SEM Examination:** Confirms the presence of fatigue striations emanating from a deep pit. The pit shows evidence of chloride-induced pitting corrosion.
*   **EDS Analysis:** Identifies iron oxides (rust) and chloride ions on the surface and within the pit.

This analysis would conclude that the shaft failed due to corrosion fatigue, initiated by pitting corrosion in the marine environment, which was exacerbated by the cyclic loading.

**Textbook References:**

*   **Jones D. R. H. (1993):** Likely includes detailed case studies of corrosion fatigue failures and the analytical techniques used to identify them.
*   **ASM Handbook, Vol. 11 (2002):** This handbook is the definitive resource for failure analysis techniques, including those specific to corrosion and fatigue. It provides detailed procedures and interpretations of findings.
*   **Collins, J. A. (2013):** Discusses the importance of failure analysis in understanding material behavior and informing future design decisions.

---

## 7. Practice Questions and Answers

**Question 1:**
Explain how a pit in a metal surface can act as a stress concentrator and accelerate the process of corrosion fatigue. (Relates to CO1, CO4)

**Answer 1:**
A pit represents a localized depression on the metal surface, causing a geometric discontinuity. Under cyclic loading, the stress field around the pit becomes significantly more concentrated compared to a smooth surface. This stress concentration effectively increases the local stress amplitude at the pit tip. Furthermore, the pit often becomes a site for localized aggressive corrosive conditions (e.g., lower pH, higher ion concentration). This combination of high local stress and a corrosive environment makes the pit tip the most susceptible location for fatigue crack initiation, significantly reducing the fatigue life compared to a component without pits.

**Question 2:**
Describe the synergistic effect between cyclic stress and a corrosive environment in the context of corrosion fatigue. (Relates to CO4)

**Answer 2:**
The synergistic effect of cyclic stress and a corrosive environment in corrosion fatigue means that the combined damage is greater than the sum of the damage that would occur from each factor acting alone. Cyclic stresses can:
1.  Create new crack initiation sites through mechanisms like pitting or crevice corrosion.
2.  Accelerate crack propagation by exposing fresh metal at the crack tip to the corrosive environment with each cycle.
3.  Facilitate mechanisms like hydrogen embrittlement by allowing hydrogen ions to diffuse into the metal at the crack tip.
The corrosive environment, in turn, can:
1.  Act as a localized electrolyte, driving electrochemical reactions.
2.  Create pits and crevices that act as stress raisers.
3.  Deposit corrosion products that can wedge open cracks.
This interaction leads to a significantly reduced fatigue life and often a loss of the distinct fatigue limit observed in non-corrosive environments.

**Question 3:**
If you were performing a failure analysis on a component suspected of corrosion fatigue, what are three key observations you would look for at the fracture surface using SEM? (Relates to CO4)

**Answer 3:**
When performing SEM analysis on a suspected corrosion fatigue fracture surface, you would look for:
1.  **Fatigue Striations:** These are characteristic markings on the fracture surface that represent the incremental growth of the fatigue crack with each stress cycle. They are typically very fine and parallel.
2.  **Crack Initiation Site:** Identifying the origin of the failure, which in corrosion fatigue is often a pit, crevice, or other surface defect that is also undergoing corrosion.
3.  **Corrosion Products:** Evidence of rust, scale, or other corrosion products on the fracture surface, particularly at the initiation site, indicating the presence of a corrosive environment during the fatigue process.

**Question 4:**
How does the frequency of loading affect corrosion fatigue crack growth rate? Explain why. (Relates to CO1, CO4)

**Answer 4:**
Generally, lower loading frequencies tend to **increase** corrosion fatigue crack growth rates. This is because at lower frequencies, there is more time for the corrosive environment to interact with the crack tip during each stress cycle. This increased time allows for:
1.  **Greater ingress of corrosive species** (e.g., water, oxygen, ions) into the crack tip.
2.  **More effective electrochemical reactions** at the crack tip.
3.  **Increased potential for environmental embrittlement** (e.g., hydrogen diffusion).
At very low frequencies, the crack growth rate can approach that of static corrosion or stress corrosion cracking, as the mechanical cycling becomes less dominant than the environmental attack.

**Question 5:**
Name two common protective coatings used to mitigate corrosion fatigue and briefly explain their mechanism of protection. (Relates to CO4)

**Answer 5:**
Two common protective coatings are:
1.  **Galvanizing (Zinc Coating):** This is a **sacrificial coating**. Zinc is more electrochemically active (anodic) than steel. If the coating is scratched and the steel is exposed, the zinc will preferentially corrode, cathodically protecting the steel until the zinc is depleted.
2.  **Chrome Plating (Chromium Coating):** This is typically a **barrier coating**. It forms a hard, relatively inert surface that physically separates the underlying metal from the corrosive environment. However, if the coating is breached, it can lead to galvanic corrosion with the underlying material if the plated metal is more noble.

---

## 8. Important Points to Remember

*   **Corrosion Fatigue is Synergistic:** The combined effect of stress cycling and a corrosive environment is far more damaging than the sum of their individual effects.
*   **Reduced Fatigue Limit:** In corrosive environments, components may not have a true fatigue limit; failure can occur at very low stress levels over time.
*   **Pits and Crevices are Critical:** These surface defects are prime sites for fatigue crack initiation in corrosive environments.
*   **Frequency Matters:** Lower cyclic frequencies generally lead to faster corrosion fatigue crack growth.
*   **Failure Analysis is Key:** Thorough analysis using techniques like SEM and chemical analysis is crucial for identifying corrosion fatigue and understanding its root cause.
*   **Prevention is Paramount:** Design considerations, material selection, and protective coatings are essential to prevent corrosion fatigue failures.
*   **CO4 Connection:** This entire topic directly addresses advanced failure mechanisms, specifically the interaction of corrosion with contact fatigue, and its impact on material properties and design.
*   **CO1 Connection:** Corrosion is an environmental factor that significantly influences material behavior under cyclic loading, impacting failure theories.
*   **CO2 Connection:** Corrosion drastically alters the S-N-P curves, leading to reduced fatigue strength and increased scatter.

---

This comprehensive set of notes covers the topic of corrosion in the context of contact fatigue, addressing the learning outcomes and course outcomes as requested, with references to the provided textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
