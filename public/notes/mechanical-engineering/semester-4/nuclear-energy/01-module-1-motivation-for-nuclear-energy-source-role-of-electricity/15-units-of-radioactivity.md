---
title: "units of radioactivity"
subject: "NUCLEAR ENERGY"
module: "Module 1: MOTIVATION FOR NUCLEAR ENERGY SOURCE: Role of electricity"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463040"
status: "completed"
scrapedAt: "2026-05-20T17:55:25.799Z"
---
# Study Notes: Nuclear Energy - Module 1: Motivation for Nuclear Energy Source

## Topic: Units of Radioactivity

**Introduction:**

This topic focuses on the fundamental units used to quantify radioactivity, a key property of materials undergoing radioactive decay. Understanding these units is crucial for appreciating the levels of radiation and the potential impact of radioactive sources, which directly relates to the motivation for exploring nuclear energy as a power source. This knowledge is foundational for understanding concepts like radiation detection, measurement, and safety protocols, indirectly supporting various course outcomes related to reactor safety and fuel handling.

**Learning Outcomes Covered:**

*   **Understanding the fundamental units of radioactivity.** This is the direct objective of this topic.
*   **Relating radioactivity levels to potential impact:** While not explicitly stated as a learning outcome for *this specific topic*, understanding units of radioactivity is essential for the broader motivation for nuclear energy (e.g., comparing it to other energy sources in terms of inherent risks and benefits). This indirectly relates to the "motivation" aspect of the module and the understanding of safety (CO2, CO4, CO6, CO7).

**Key Concepts and Definitions:**

### 1. Radioactivity

**Definition:** Radioactivity is the spontaneous disintegration or decay of unstable atomic nuclei, releasing energy in the form of particles (alpha, beta) or electromagnetic radiation (gamma rays). This process leads to the transformation of the parent nucleus into a daughter nucleus.

### 2. Activity (A)

**Definition:** Activity is the rate at which radioactive decays occur in a given sample. It is the number of nuclear disintegrations per unit time.

**Formula:** $A = -\frac{dN}{dt}$, where $N$ is the number of radioactive nuclei present and $t$ is time.

### 3. Units of Activity

#### a) The Becquerel (Bq)

*   **Definition:** The Becquerel (Bq) is the SI unit of radioactivity.
*   **Meaning:** 1 Bq is defined as one nuclear decay per second.
*   **Origin:** Named after Henri Becquerel, a French physicist who discovered radioactivity.
*   **Usage:** Commonly used to express the activity of radioactive substances. For instance, a sample with an activity of 100 Bq means that, on average, 100 radioactive decays are occurring in that sample every second.
*   **Relationship to other units:**
    *   1 kilobecquerel (kBq) = $10^3$ Bq
    *   1 megabecquerel (MBq) = $10^6$ Bq
    *   1 gigabecquerel (GBq) = $10^9$ Bq
    *   1 terabecquerel (TBq) = $10^{12}$ Bq

#### b) The Curie (Ci)

*   **Definition:** The Curie (Ci) is an older, non-SI unit of radioactivity, still widely used in some contexts, particularly in older literature and some medical applications.
*   **Meaning:** 1 Ci is defined as $3.7 \times 10^{10}$ disintegrations per second.
*   **Origin:** Named after Marie and Pierre Curie, pioneers in radioactivity research.
*   **Relationship to Becquerel:**
    *   $1 Ci = 3.7 \times 10^{10}$ Bq
    *   $1 Ci = 37$ GBq
    *   $1$ Bq $= \frac{1}{3.7 \times 10^{10}}$ Ci $\approx 2.70 \times 10^{-11}$ Ci
*   **Sub-units:**
    *   1 millicurie (mCi) = $10^{-3}$ Ci
    *   1 microcurie (µCi) = $10^{-6}$ Ci
    *   1 nanocurie (nCi) = $10^{-9}$ Ci
    *   1 picocurie (pCi) = $10^{-12}$ Ci

**Example:** A sample of Cobalt-60 ($^{60}$Co) has an activity of 10 MBq. What is its activity in Curie?
*   $10 \text{ MBq} = 10 \times 10^6 \text{ Bq} = 10^7 \text{ Bq}$
*   Activity in Ci = $\frac{10^7 \text{ Bq}}{3.7 \times 10^{10} \text{ Bq/Ci}} \approx 2.70 \times 10^{-4}$ Ci
*   So, $10 \text{ MBq} \approx 0.270 \text{ mCi}$.

**Important Note on Units:**
The Becquerel (Bq) is the internationally recognized SI unit and is preferred in modern scientific and engineering contexts. However, understanding the Curie is important for interpreting older data and specific applications.

#### c) The Rutherford (Rd)

*   **Definition:** The Rutherford (Rd) is another, less commonly used, unit of radioactivity.
*   **Meaning:** 1 Rd is defined as $10^6$ disintegrations per second.
*   **Relationship to Becquerel:**
    *   $1 \text{ Rd} = 10^6 \text{ Bq} = 1 \text{ MBq}$
*   **Usage:** Primarily historical, and its use has largely been superseded by the Becquerel.

### 4. Radioactive Decay Law

**Concept:** The rate of decay of a radioactive substance is proportional to the number of radioactive nuclei present.

**Mathematical Representation:**
$\frac{dN}{dt} = -\lambda N$

Where:
*   $N$: Number of radioactive nuclei at time $t$.
*   $\lambda$: The decay constant (specific to each radioisotope), representing the probability of decay per nucleus per unit time.
*   The negative sign indicates that the number of nuclei decreases over time.

**Activity and Decay Constant:**
Since $A = -\frac{dN}{dt}$, we can write the activity as:
$A = \lambda N$

This means that activity is also governed by the same decay law. If $N(t) = N_0 e^{-\lambda t}$, then $A(t) = \lambda N_0 e^{-\lambda t} = A_0 e^{-\lambda t}$, where $A_0$ is the initial activity.

### 5. Half-Life ($T_{1/2}$)

**Definition:** The half-life ($T_{1/2}$) of a radioactive isotope is the time required for half of the radioactive nuclei in a given sample to undergo radioactive decay.

**Relationship to Decay Constant:**
$T_{1/2} = \frac{\ln(2)}{\lambda} \approx \frac{0.693}{\lambda}$

This relationship is fundamental. A shorter half-life implies a larger decay constant and thus a higher initial activity for a given number of nuclei.

**Example:** Cobalt-60 ($^{60}$Co) has a half-life of approximately 5.27 years. If you start with 100 grams of $^{60}$Co, after 5.27 years, you will have 50 grams of $^{60}$Co remaining, and the activity will also have halved.

### 6. Specific Activity

**Definition:** Specific activity is the activity of a radioactive substance per unit mass or per mole.

**Units:**
*   Bq/kg, Bq/g
*   Ci/g, Ci/mol

**Significance:** Specific activity is a useful measure for comparing the radioactivity of different materials, especially when the amount of material varies. For example, comparing the specific activity of two different uranium ores.

**Example:** A sample of pure Uranium-238 ($^{238}$U) has a specific activity of approximately $1.24 \times 10^4$ Bq/g. This tells us that each gram of pure $^{238}$U decays at a rate of 12,400 times per second.

**Incorporation from Textbooks and Reference Books:**

*   **Engineering Physics by R K Gupta & S L Gaur:** This textbook typically covers the fundamentals of atomic physics, including radioactivity, decay laws, and units. You would find detailed explanations of the Becquerel and Curie units, as well as the mathematical derivations of the decay law and the relationship between half-life and the decay constant.
*   **Nuclear Reactor Engineering by Dr G Vaidyanathan:** This book, focused on reactors, will likely introduce these units in the context of nuclear fuel. It might discuss how specific activity relates to the heat generated by decaying fission products in spent fuel or the initial activity of fuel materials.
*   **Nuclear Reactor Engineering by S. Glasstone and A. Sesonske:** Similar to Vaidyanathan's book, this classic reference will use these units when discussing reactor design, fuel properties, and radiation shielding. They would emphasize the practical implications of activity levels.
*   **Source book on Atomic Energy by S Glasstone:** This comprehensive source would offer a historical perspective and a deep dive into the fundamental physics of radioactivity, including the definitions and applications of various units of activity.

**Alignment with Course Outcomes:**

*   **CO1 (Describe key components of a nuclear reactor system and their functions):** Understanding radioactivity units is indirectly relevant. For example, knowing the activity of fuel and its decay products helps in understanding the thermal loads on reactor components and the need for shielding.
*   **CO2 (Explain the principles of reactor control and safety mechanism):** While this topic is about units, the *magnitude* of radioactivity is directly linked to safety. High activity means significant radiation, necessitating control and safety measures.
*   **CO3 (Analyse the role of fuel cycle):** Radioactivity units are fundamental to understanding the state of nuclear fuel at different stages of the fuel cycle (fresh fuel, irradiated fuel, spent fuel).
*   **CO4 (Discuss importance of containment structures & mitigation strategy for potential accidents):** The potential for accidents is related to the release of radioactive materials. The *activity* of these materials determines the severity of the hazard and the required mitigation strategies.
*   **CO5 (Evaluate different options for fuel handling and spent fuel management):** Spent fuel is highly radioactive, and its activity, measured in Bq or Ci, dictates the handling procedures, storage requirements, and reprocessing considerations.
*   **CO6 (Understand the regulatory framework for nuclear reactor safety):** Regulations often specify limits on radiation levels and the acceptable activity of radioactive materials in different environments, directly using these units.
*   **CO7 (Critically analyse the safety aspects of historic and future reactor design):** Comparing the radioactivity levels of different reactor designs or fuel types would involve using these units.

**Practice Questions:**

1.  **Definition Check:**
    *   What is the SI unit for radioactivity?
    *   Define the Curie. How many Becquerels are in one Curie?

2.  **Calculation:**
    *   A sample of medical isotope Iodine-131 ($^{131}$I) has an activity of 740 MBq. Convert this activity to Curies. (Given: 1 Ci = $3.7 \times 10^{10}$ Bq)
    *   A radioactive sample has an initial activity of 5000 Bq and a half-life of 2 days. What will be its activity after 6 days?

3.  **Conceptual:**
    *   Why is the Becquerel a more preferred unit in modern nuclear science and engineering than the Curie?
    *   Explain the relationship between half-life and the rate of radioactive decay.

**Answers to Practice Questions:**

1.  **Definition Check:**
    *   The SI unit for radioactivity is the **Becquerel (Bq)**.
    *   The Curie (Ci) is defined as $3.7 \times 10^{10}$ disintegrations per second. Therefore, **1 Curie = $3.7 \times 10^{10}$ Becquerels**.

2.  **Calculation:**
    *   Convert 740 MBq to Curies:
        *   740 MBq = $740 \times 10^6$ Bq = $7.4 \times 10^8$ Bq
        *   Activity in Ci = $\frac{7.4 \times 10^8 \text{ Bq}}{3.7 \times 10^{10} \text{ Bq/Ci}} = 0.02$ Ci
        *   So, 740 MBq is equal to **0.02 Ci** or **20 mCi**.
    *   Activity after 6 days:
        *   The half-life is 2 days.
        *   Number of half-lives in 6 days = 6 days / 2 days/half-life = 3 half-lives.
        *   After 1 half-life: Activity = 5000 Bq / 2 = 2500 Bq
        *   After 2 half-lives: Activity = 2500 Bq / 2 = 1250 Bq
        *   After 3 half-lives: Activity = 1250 Bq / 2 = 625 Bq
        *   The activity after 6 days will be **625 Bq**.

3.  **Conceptual:**
    *   The Becquerel is the SI unit, which is the internationally standardized system of units used in science and technology. Using SI units ensures consistency and avoids confusion in international collaborations and publications. The Curie, while historically significant, is a much larger unit and its definition is based on a historical standard (grams of radium), whereas the Becquerel is defined based on a fundamental physical process (one decay per second).
    *   The half-life ($T_{1/2}$) is inversely proportional to the decay constant ($\lambda$), which represents the probability of decay per nucleus per unit time ($T_{1/2} \approx 0.693 / \lambda$). This means that a shorter half-life indicates a higher probability of decay for each nucleus, leading to a faster overall rate of radioactive decay for a given sample. Conversely, a longer half-life means a lower probability of decay and a slower rate.

**Important Points to Remember:**

*   **Becquerel (Bq):** The SI unit of radioactivity, defined as 1 decay per second.
*   **Curie (Ci):** An older unit, where 1 Ci = $3.7 \times 10^{10}$ Bq.
*   **Activity:** The rate of radioactive decays per unit time.
*   **Half-Life:** The time it takes for half of the radioactive nuclei in a sample to decay. It's a fundamental characteristic of each radioisotope.
*   **Decay Constant ($\lambda$):** The probability of decay per nucleus per unit time, directly related to half-life.
*   The understanding of these units is crucial for quantifying radiation hazards, designing shielding, managing radioactive waste, and ensuring safety in nuclear operations.

This concludes the notes on the units of radioactivity. This foundational knowledge is essential for progressing to more complex topics in nuclear energy.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
