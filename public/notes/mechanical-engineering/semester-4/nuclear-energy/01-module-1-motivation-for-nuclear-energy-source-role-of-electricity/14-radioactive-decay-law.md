---
title: "radioactive decay law"
subject: "NUCLEAR ENERGY"
module: "Module 1: MOTIVATION FOR NUCLEAR ENERGY SOURCE: Role of electricity"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf480446303f"
status: "completed"
scrapedAt: "2026-05-20T17:55:25.145Z"
---
# NUCLEAR ENERGY: Module 1: MOTIVATION FOR NUCLEAR ENERGY SOURCE: Role of electricity

## Topic: Radioactive Decay Law

**Learning Outcomes:**

*   Understand the fundamental principles of radioactive decay.
*   Quantify the rate of radioactive decay.
*   Relate the concept of half-life to radioactive decay.
*   Explain the concepts of activity and its units.
*   Apply the radioactive decay law to solve problems related to radioactive materials.

**Course Outcomes Alignment:**

*   This topic lays the foundational understanding of nuclear processes, which is indirectly relevant to all COs by explaining the origin of energy in nuclear reactors and the behavior of radioactive materials handled throughout the fuel cycle and safety considerations.

---

### 1. Introduction to Radioactivity

Radioactivity is the spontaneous disintegration of unstable atomic nuclei, accompanied by the emission of particles (alpha, beta) and/or electromagnetic radiation (gamma rays). This phenomenon is a direct consequence of the instability of certain nuclei, driven by the interplay of nuclear forces.

**Key Concepts:**

*   **Isotopes:** Atoms of the same element with the same number of protons but different numbers of neutrons. Some isotopes are stable, while others are radioactive (radioisotopes).
*   **Radioisotope (Radionuclide):** An isotope that is radioactive.
*   **Parent Nuclide:** The unstable nucleus that undergoes decay.
*   **Daughter Nuclide:** The nucleus that results from the decay of the parent nuclide.

---

### 2. The Radioactive Decay Law

The radioactive decay law describes the statistical behavior of a large number of unstable nuclei over time. It states that the rate of decay of a radioactive substance is directly proportional to the number of radioactive nuclei present at that time.

**Mathematical Formulation:**

Let $N(t)$ be the number of radioactive nuclei present at time $t$.
The rate of decay is given by $\frac{dN}{dt}$.

The radioactive decay law is expressed as:

$$ \frac{dN}{dt} = -\lambda N $$

Where:
*   $\frac{dN}{dt}$ is the rate of decay (number of decays per unit time). The negative sign indicates that the number of radioactive nuclei decreases over time.
*   $N$ is the number of radioactive nuclei present at time $t$.
*   $\lambda$ (lambda) is the **decay constant**. It is a characteristic constant for each radioactive nuclide and represents the probability of a single nucleus decaying per unit time. Its unit is typically $s^{-1}$ or $year^{-1}$.

**Derivation of the Decay Law:**

The differential equation $\frac{dN}{dt} = -\lambda N$ can be solved by separation of variables:

$$ \frac{dN}{N} = -\lambda dt $$

Integrating both sides:

$$ \int_{N_0}^{N(t)} \frac{dN}{N} = \int_{0}^{t} -\lambda dt $$

$$ [\ln N]_{N_0}^{N(t)} = -\lambda [t]_{0}^{t} $$

$$ \ln N(t) - \ln N_0 = -\lambda t $$

$$ \ln \left(\frac{N(t)}{N_0}\right) = -\lambda t $$

Exponentiating both sides:

$$ \frac{N(t)}{N_0} = e^{-\lambda t} $$

Therefore, the **Radioactive Decay Law** is:

$$ N(t) = N_0 e^{-\lambda t} $$

Where:
*   $N(t)$ is the number of radioactive nuclei remaining at time $t$.
*   $N_0$ is the initial number of radioactive nuclei at time $t=0$.
*   $e$ is the base of the natural logarithm (approximately 2.71828).
*   $\lambda$ is the decay constant.
*   $t$ is the elapsed time.

---

### 3. Activity (A)

Activity is defined as the rate of disintegration of a radioactive sample, which is the magnitude of $\frac{dN}{dt}$.

$$ A(t) = |\frac{dN}{dt}| = \lambda N(t) $$

Substituting $N(t) = N_0 e^{-\lambda t}$:

$$ A(t) = \lambda (N_0 e^{-\lambda t}) $$

Since $A_0 = \lambda N_0$ (initial activity at $t=0$), the activity also follows an exponential decay:

$$ A(t) = A_0 e^{-\lambda t} $$

**Units of Activity:**

*   **Becquerel (Bq):** The SI unit of activity, defined as one decay per second ($1 \, Bq = 1 \, s^{-1}$).
*   **Curie (Ci):** An older unit of activity, historically defined as the activity of 1 gram of radium-226.
    *   $1 \, Ci = 3.7 \times 10^{10} \, Bq$.
    *   Smaller units: millicurie (mCi) and microcurie ($\mu$Ci).

**Relation between Activity and Number of Nuclei:**

The activity is directly proportional to the number of radioactive nuclei. As the number of nuclei decreases, the activity also decreases exponentially.

---

### 4. Half-Life ($T_{1/2}$)

**Definition:** The half-life ($T_{1/2}$) of a radioactive nuclide is the time required for half of the radioactive nuclei in a sample to decay.

**Derivation of Half-Life from the Decay Law:**

At $t = T_{1/2}$, the number of remaining nuclei is $N(T_{1/2}) = \frac{N_0}{2}$.
Using the decay law $N(t) = N_0 e^{-\lambda t}$:

$$ \frac{N_0}{2} = N_0 e^{-\lambda T_{1/2}} $$

$$ \frac{1}{2} = e^{-\lambda T_{1/2}} $$

Taking the natural logarithm of both sides:

$$ \ln \left(\frac{1}{2}\right) = -\lambda T_{1/2} $$

$$ -\ln 2 = -\lambda T_{1/2} $$

Therefore, the relationship between half-life and the decay constant is:

$$ T_{1/2} = \frac{\ln 2}{\lambda} $$

Since $\ln 2 \approx 0.693$, we can write:

$$ T_{1/2} \approx \frac{0.693}{\lambda} $$

**Key Points about Half-Life:**

*   Half-life is a characteristic property of each radioisotope and is independent of the amount of the substance or external conditions (temperature, pressure, chemical form).
*   After one half-life, 50% of the original material remains.
*   After two half-lives, 25% of the original material remains ($\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$).
*   After $n$ half-lives, $(\frac{1}{2})^n$ of the original material remains.
*   The number of half-lives elapsed can be calculated as $n = \frac{t}{T_{1/2}}$.
*   So, $N(t) = N_0 \left(\frac{1}{2}\right)^{t/T_{1/2}}$ or $A(t) = A_0 \left(\frac{1}{2}\right)^{t/T_{1/2}}$.

**Mean Life ($\tau$):**

The mean life (or average life) of a radioactive nuclide is the average time that a nucleus exists before decaying. It is related to the decay constant by:

$$ \tau = \frac{1}{\lambda} $$

The relationship between half-life and mean life is:

$$ T_{1/2} = \tau \ln 2 \approx 0.693 \tau $$

---

### 5. Relationship between $N$, $A$, and $T_{1/2}$

*   $N(t) = N_0 e^{-\lambda t} = N_0 \left(\frac{1}{2}\right)^{t/T_{1/2}}$
*   $A(t) = A_0 e^{-\lambda t} = A_0 \left(\frac{1}{2}\right)^{t/T_{1/2}}$
*   $A(t) = \lambda N(t)$
*   $\lambda = \frac{\ln 2}{T_{1/2}}$

---

### 6. Examples and Applications

**Example 1: Calculating Remaining Amount**

Suppose you have 10 grams of a radioactive substance with a half-life of 10 days. How much of the substance will remain after 30 days?

*   $N_0 = 10$ grams
*   $T_{1/2} = 10$ days
*   $t = 30$ days

Number of half-lives, $n = \frac{t}{T_{1/2}} = \frac{30}{10} = 3$.

Amount remaining, $N(30) = N_0 \left(\frac{1}{2}\right)^n = 10 \times \left(\frac{1}{2}\right)^3 = 10 \times \frac{1}{8} = 1.25$ grams.

**Example 2: Calculating Decay Constant**

A sample of Carbon-14 ($^{14}$C) has a half-life of 5730 years. What is its decay constant?

*   $T_{1/2} = 5730$ years

$$ \lambda = \frac{\ln 2}{T_{1/2}} = \frac{0.693}{5730 \, \text{years}} \approx 1.21 \times 10^{-4} \, \text{year}^{-1} $$

**Example 3: Calculating Activity**

A sample contains $2 \times 10^{15}$ atoms of a radioactive isotope with a half-life of 8 days. What is its initial activity in Becquerels?

*   $N_0 = 2 \times 10^{15}$ atoms
*   $T_{1/2} = 8$ days

First, calculate the decay constant $\lambda$:
$T_{1/2} = 8 \, \text{days} \times 24 \, \text{hours/day} \times 3600 \, \text{s/hour} = 691200 \, \text{s}$.

$$ \lambda = \frac{\ln 2}{T_{1/2}} = \frac{0.693}{691200 \, \text{s}} \approx 9.99 \times 10^{-7} \, s^{-1} $$

Now, calculate the initial activity $A_0$:
$A_0 = \lambda N_0 = (9.99 \times 10^{-7} \, s^{-1}) \times (2 \times 10^{15} \, \text{atoms})$
$A_0 \approx 1.998 \times 10^9 \, Bq$
$A_0 \approx 2 \times 10^9 \, Bq$

---

### 7. Practical Relevance in Nuclear Energy

*   **Fuel Inventory and Decay:** The amount of radioactive fuel and its decay over time is crucial for reactor design, operation, and spent fuel management.
*   **Radioactive Waste:** The decay law governs the reduction in radioactivity of nuclear waste over long periods, influencing storage requirements and safety protocols.
*   **Radiation Monitoring:** Understanding decay rates helps in monitoring radiation levels around nuclear facilities.
*   **Isotope Production:** Many isotopes used in medicine and industry are produced based on their decay characteristics.

---

### 8. Important Points to Remember

*   Radioactive decay is a **random process** for an individual nucleus but statistically predictable for a large ensemble.
*   The **decay constant ($\lambda$)** is the fundamental parameter; half-life is derived from it.
*   **Half-life ($T_{1/2}$)** is the time for half the sample to decay.
*   Both the **number of nuclei ($N$) and activity ($A$)** decrease exponentially with time.
*   The decay law applies to all types of radioactive decay (alpha, beta, gamma, electron capture).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. Textbook and Reference Material Integration

*   **Engineering Physics by R K Gupta & S L Gaur (45th Ed, 2012):** This textbook likely covers the fundamentals of radioactivity, including the decay law, half-life, and activity, in its sections on Modern Physics or Nuclear Physics. Look for chapters discussing atomic and nuclear structure, properties of nuclei, and radioactivity.
*   **Nuclear Reactor Engineering by Dr G Vaidyanathan (1st Ed, 2013):** While this book focuses on reactor engineering, it will undoubtedly introduce the decay law as it is fundamental to understanding nuclear reactions and the behavior of fission products (which are radioactive). The decay of radioactive materials is critical for criticality calculations, decay heat, and safety analyses.
*   **Nuclear Reactor Engineering by S. Glasstone and A. Sesonske (1967):** This classic text provides in-depth coverage of nuclear reactor principles. Chapters related to nuclear cross-sections, nuclear reactions, and the properties of radioactive materials will detail the decay law and its implications for reactor physics.
*   **Source book on atomic energy by S Glasstone (1967):** This comprehensive source book will offer a detailed historical and scientific perspective on atomic energy, including thorough explanations of nuclear phenomena like radioactive decay.

**Key Concepts to Cross-Reference:**

*   **Radioactive Equilibrium:** While not directly part of the decay law for a single isotope, understanding how decay chains lead to equilibrium is often discussed alongside the basic decay law. (Glasstone)
*   **Decay Heat:** The heat generated by the decay of fission products after a reactor shutdown is a direct application of the decay law and is crucial for safety. (Vaidyanathan, Glasstone & Sesonske)
*   **Specific Activity:** Activity per unit mass or volume of a radioactive substance. (Gupta & Gaur)

---

### 10. Practice Questions and Exercises

**Question 1:**
A sample of Iodine-131 ($^{131}$I), a radioisotope used in medical treatments, has a half-life of 8.02 days. If you start with 10 mg of $^{131}$I, how much will remain after 24.06 days?
    
    **Answer:**
    $T_{1/2} = 8.02$ days
    $t = 24.06$ days
    Number of half-lives, $n = \frac{t}{T_{1/2}} = \frac{24.06}{8.02} = 3$.
    Amount remaining = $10 \, \text{mg} \times (\frac{1}{2})^3 = 10 \, \text{mg} \times \frac{1}{8} = 1.25 \, \text{mg}$.

**Question 2:**
What is the decay constant for Cobalt-60 ($^{60}$Co), which has a half-life of 5.27 years? Express your answer in $s^{-1}$.
    
    **Answer:**
    $T_{1/2} = 5.27$ years.
    Convert to seconds: $T_{1/2} = 5.27 \, \text{years} \times 365.25 \, \text{days/year} \times 24 \, \text{hours/day} \times 3600 \, \text{s/hour} \approx 1.66 \times 10^8 \, \text{s}$.
    $\lambda = \frac{\ln 2}{T_{1/2}} = \frac{0.693}{1.66 \times 10^8 \, \text{s}} \approx 4.17 \times 10^{-9} \, s^{-1}$.

**Question 3:**
A radioactive source has an initial activity of $5 \times 10^9 \, Bq$. After 15 days, its activity has dropped to $6.25 \times 10^8 \, Bq$. What is the half-life of the source?
    
    **Answer:**
    $A_0 = 5 \times 10^9 \, Bq$
    $A(t) = 6.25 \times 10^8 \, Bq$
    $t = 15$ days
    
    We know $A(t) = A_0 (\frac{1}{2})^{t/T_{1/2}}$.
    $6.25 \times 10^8 = 5 \times 10^9 \times (\frac{1}{2})^{15/T_{1/2}}$
    $\frac{6.25 \times 10^8}{5 \times 10^9} = (\frac{1}{2})^{15/T_{1/2}}$
    $0.125 = (\frac{1}{2})^{15/T_{1/2}}$
    $\frac{1}{8} = (\frac{1}{2})^{15/T_{1/2}}$
    $(\frac{1}{2})^3 = (\frac{1}{2})^{15/T_{1/2}}$
    
    Equating the exponents:
    $3 = \frac{15}{T_{1/2}}$
    $T_{1/2} = \frac{15}{3} = 5$ days.

---

### 11. Summary and Key Takeaways

The radioactive decay law, $N(t) = N_0 e^{-\lambda t}$, is a fundamental principle governing the behavior of radioactive materials. It quantifies the rate at which unstable nuclei transform into more stable ones. The decay constant ($\lambda$) and half-life ($T_{1/2}$) are intrinsic properties of each radioisotope that determine this rate. Activity ($A$), the measure of the decay rate, also decays exponentially. Understanding these concepts is vital for comprehending the motivation behind nuclear energy, managing nuclear fuel, and ensuring the safety of nuclear operations.

---