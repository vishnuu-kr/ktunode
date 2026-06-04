---
title: "Diffusion length"
subject: "SOLID STATE DEVICES"
module: "Module 1: Review of Semiconductor physics: Equilibrium and steady state conditions"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2b2"
status: "completed"
scrapedAt: "2026-05-23T17:47:32.584Z"
---
# SOLID STATE DEVICES: Module 1 - Review of Semiconductor Physics: Equilibrium and Steady State Conditions

## Topic: Diffusion Length

### 1. Introduction to Diffusion Length

Diffusion length is a fundamental parameter in semiconductor physics that describes the average distance an injected minority carrier can diffuse before recombining with a majority carrier. It plays a crucial role in determining the efficiency and performance of various semiconductor devices, particularly those involving minority carrier injection and recombination, such as bipolar junction transistors (BJTs), solar cells, and light-emitting diodes (LEDs).

**Key Concepts:**

*   **Minority Carriers:** In an extrinsic semiconductor, the carrier type with a lower concentration is considered the minority carrier. For example, in an n-type semiconductor, electrons are majority carriers and holes are minority carriers.
*   **Recombination:** The process where an electron and a hole meet and annihilate each other, reducing the number of free carriers.
*   **Diffusion:** The movement of carriers from a region of higher concentration to a region of lower concentration due to random thermal motion.

**Learning Outcome Alignment:** This topic directly contributes to understanding carrier behavior and transport mechanisms, essential for achieving **CO2** and **CO3**.

**Textbook References:**

*   **Pierret, Chapter 3 (Carrier Transport):** Introduces diffusion and recombination, laying the groundwork for diffusion length.
*   **Shur, Chapter 2 (Semiconductor Statistics) & Chapter 3 (Carrier Transport):** Discusses carrier statistics and transport phenomena.
*   **Sze & Lee (Indian Adaptation), Chapter 2 (Carrier Transport Properties) & Chapter 3 (PN Junctions):** Covers drift and diffusion currents, and their role in device operation.

### 2. Derivation of Diffusion Length

The diffusion length ($L$) is derived from the continuity equation, which describes the conservation of carriers. In steady-state, the continuity equation for minority carriers involves terms for generation, recombination, and diffusion.

**Consideration:** Let's consider a p-type semiconductor where electrons are injected as minority carriers.

**Continuity Equation for Minority Carriers (electrons in a p-type semiconductor):**

$\frac{\partial n'(x,t)}{\partial t} = G_{inj}'(x,t) - R'(x,t) + D_n \frac{\partial^2 n'(x,t)}{\partial x^2}$

Where:
*   $n'(x,t)$ is the excess minority carrier (electron) concentration at position $x$ and time $t$.
*   $G_{inj}'(x,t)$ is the generation rate of excess minority carriers.
*   $R'(x,t)$ is the recombination rate of excess minority carriers.
*   $D_n$ is the diffusion coefficient for electrons.

**Simplifications for Steady-State and Uniform Recombination:**

In steady-state conditions ($\frac{\partial n'(x,t)}{\partial t} = 0$) and assuming a recombination rate proportional to the excess minority carrier concentration ($R' = \frac{n'}{\tau_n}$), where $\tau_n$ is the minority carrier lifetime, the equation becomes:

$0 = G_{inj}'(x) - \frac{n'(x)}{\tau_n} + D_n \frac{d^2 n'(x)}{dx^2}$

**Diffusion Length Definition:**

The diffusion length ($L_n$ for electrons in a p-type semiconductor) is defined as:

$L_n = \sqrt{D_n \tau_n}$

And similarly, $L_p = \sqrt{D_p \tau_p}$ for holes in an n-type semiconductor.

**Derivation Steps (Illustrative Example of Step-by-Step Calculation):**

1.  **Assume Uniform Generation and No External Generation:** For simplicity, consider a region where minority carriers are injected at one end (e.g., $x=0$) and there is no further generation ($G_{inj}' = 0$ for $x > 0$). The equation simplifies to:
    $0 = -\frac{n'(x)}{\tau_n} + D_n \frac{d^2 n'(x)}{dx^2}$

2.  **Rearrange the Equation:**
    $\frac{d^2 n'(x)}{dx^2} - \frac{1}{D_n \tau_n} n'(x) = 0$
    $\frac{d^2 n'(x)}{dx^2} - \frac{1}{L_n^2} n'(x) = 0$

3.  **Solve the Differential Equation:** This is a second-order linear homogeneous differential equation. The general solution is of the form:
    $n'(x) = A e^{x/L_n} + B e^{-x/L_n}$

4.  **Apply Boundary Conditions:**
    *   **Boundary Condition 1:** At the point of injection (e.g., $x=0$), there is a known excess minority carrier concentration, say $n'(0) = n'_0$.
        $n'_0 = A e^{0} + B e^{0} = A + B$
    *   **Boundary Condition 2:** As $x \to \infty$, the excess minority carrier concentration should decay to zero due to recombination.
        $n'(\infty) = 0$
        For this to be true, the term with the positive exponent must be zero, meaning $A=0$.

5.  **Determine Constants and Final Solution:**
    *   From $A=0$, and $n'_0 = A+B$, we get $B = n'_0$.
    *   Therefore, the excess minority carrier concentration profile is:
        $n'(x) = n'_0 e^{-x/L_n}$

**Interpretation:** This equation shows that the excess minority carrier concentration decays exponentially with distance from the injection point, with the decay rate determined by the diffusion length.

**Learning Outcome Alignment:** This derivation is crucial for **CO2** (understanding carrier transport mechanisms) and **CO3** (applying physics to solve current components, as the diffusion current density $J_n(x) = q D_n \frac{dn'(x)}{dx}$).

**Textbook References:**

*   **Pierret, Chapter 3:** Provides a detailed derivation of the continuity equation and its solutions, including diffusion length.
*   **Shur, Chapter 3:** Covers similar derivations and emphasizes the physical meaning of diffusion length.
*   **Sze & Lee (Indian Adaptation), Chapter 2:** Explains the drift and diffusion current components and their relation to carrier concentration gradients.

### 3. Physical Significance of Diffusion Length

The diffusion length is a measure of how far minority carriers can travel *on average* before they recombine.

*   **Long Diffusion Length:** Implies that minority carriers can travel a significant distance before recombination. This is desirable for devices where minority carriers need to reach a junction or a contact. This occurs when the minority carrier lifetime ($\tau$) and diffusion coefficient ($D$) are large.
*   **Short Diffusion Length:** Implies that minority carriers recombine relatively close to their point of injection or generation. This can be detrimental in devices where long carrier travel is required. This occurs when $\tau$ and $D$ are small.

**Factors Affecting Diffusion Length:**

1.  **Minority Carrier Lifetime ($\tau$):** The average time a minority carrier exists before recombining.
    *   **Direct Recombination (Band-to-Band):** Generally a weaker mechanism.
    *   **Defect-Assisted Recombination (Shockley-Read-Hall - SRH):** Dominant mechanism in most semiconductors. Defects (impurities, dislocations, vacancies) act as recombination centers. A higher density of defects leads to a shorter lifetime and hence a shorter diffusion length.
2.  **Diffusion Coefficient ($D$):** Related to the mobility ($\mu$) of the carriers by the Einstein relation: $D = \mu \frac{k T}{q}$.
    *   **Mobility ($\mu$):** The average velocity gained by a carrier per unit electric field. It depends on scattering mechanisms (phonon scattering, impurity scattering). Higher mobility leads to a higher diffusion coefficient and thus a longer diffusion length.

**Learning Outcome Alignment:** This section directly addresses the physical understanding of carrier behavior, supporting **CO2** and **CO3**.

**Textbook References:**

*   **Neamen, Chapter 4 (Carrier Transport):** Discusses recombination mechanisms and their impact on carrier lifetime.
*   **Sze (Physics of Semiconductor Devices), Chapter 1 (Material Properties):** Covers material properties like mobility and lifetime.
*   **Sze & Lee (Indian Adaptation), Chapter 2:** Reinforces the relationship between mobility, diffusion, and lifetime.

### 4. Diffusion Length in Different Devices

**a) P-N Junction Diodes (e.g., Rectifiers):**

*   In a forward-biased p-n junction, minority carriers are injected across the junction. The diffusion length of these injected carriers determines how far they can diffuse into the opposing region before recombining.
*   A longer diffusion length allows more injected carriers to reach the depletion region or junction, contributing to the forward current and improving efficiency.
*   For example, in a silicon p-n junction, the diffusion length for holes injected into the n-side and electrons injected into the p-side is crucial.

**b) Bipolar Junction Transistors (BJTs):**

*   The current gain ($\beta$) of a BJT is strongly dependent on the diffusion length of minority carriers in the base region.
*   **Common Emitter Current Gain ($\beta$):** $\beta \approx \frac{\alpha}{1-\alpha}$, where $\alpha$ is the common base current gain.
*   **$\alpha$** is approximately determined by the ratio of carriers reaching the collector to carriers injected into the base. This includes factors like base width, base transport factor, and injection efficiency.
*   A long diffusion length for minority carriers in the base ensures that most of them reach the collector junction without recombining in the base. This leads to a higher $\alpha$ and thus a higher $\beta$.
*   If the base width ($W$) is comparable to or larger than the diffusion length ($L_n$ for electrons in p-type base, $L_p$ for holes in n-type base), significant recombination occurs in the base, reducing current gain.

**c) Solar Cells:**

*   In a solar cell, photons create electron-hole pairs within the semiconductor. These generated carriers need to diffuse to the p-n junction to be separated and contribute to the external current.
*   The diffusion length of both electrons and holes determines the efficiency of carrier collection. If the diffusion length is shorter than the absorption depth of light or the device thickness, many photogenerated carriers will recombine before reaching the junction, reducing the photocurrent and overall efficiency.
*   Therefore, materials with long diffusion lengths are preferred for high-efficiency solar cells.

**d) Light-Emitting Diodes (LEDs):**

*   In LEDs, injected minority carriers recombine radiatively to produce light. The diffusion length of these injected carriers determines how effectively they reach the recombination region and contribute to light emission.
*   While recombination itself is the desired process, the diffusion length still influences where this recombination occurs and the spatial distribution of emitted light.

**Learning Outcome Alignment:** This section highlights the practical application of diffusion length in device operation, directly supporting **CO3** and **CO4**.

**Textbook References:**

*   **Sze (Physics of Semiconductor Devices), Chapters 7 (Bipolar Junction Transistors) & 8 (Field-Effect Transistors) & 11 (Optoelectronic Devices):** Provides detailed discussions on device operation and the role of diffusion length.
*   **Sze & Lee (Indian Adaptation), Chapters 5 (Bipolar Junction Transistors) & 8 (Optoelectronic Devices):** Similar coverage of device physics.
*   **Tsividis (Operation and Modelling of the MOS Transistor), Chapter 1 (Introduction to Semiconductor Devices):** Might touch upon diffusion in the context of carrier transport in general.

### 5. Diffusion Length and Steady State Conditions

Diffusion length is intrinsically linked to steady-state conditions because its definition and measurement are based on the average distance carriers travel *before* recombination. In steady-state, the carrier concentrations and currents are constant over time, allowing for a stable diffusion process influenced by the diffusion length.

*   **Equilibrium vs. Steady State:**
    *   **Equilibrium:** No net flow of carriers or energy. Carrier concentrations are determined by doping and temperature only. No external fields or generation sources.
    *   **Steady State:** Net flow of carriers and/or energy exists, but the conditions (carrier concentrations, currents) do not change with time. This is typically achieved by applying external voltages or light sources. Diffusion length is a parameter relevant to these non-equilibrium steady-state conditions.

**Example: Forward-biased p-n junction in steady state:**

Minority carriers are continuously injected across the junction and diffuse into the neutral regions. They also continuously recombine. In steady state, the rate of injection and diffusion into a region is balanced by the rate of recombination and diffusion out of that region. The diffusion length dictates how far these injected carriers will travel within that neutral region before recombination.

**Learning Outcome Alignment:** This emphasizes the context of diffusion length within steady-state scenarios, supporting **CO1** (comparison of carrier concentration) and **CO2** (carrier transport mechanisms).

**Textbook References:**

*   **Pierret, Chapter 3:** Discusses steady-state solutions to the continuity equation.
*   **Shur, Chapter 3:** Reinforces the application of diffusion length in steady-state transport.

### 6. Practice Questions and Answers

**Question 1:**

Define diffusion length. What are the two main parameters that determine it, and how does each parameter affect the diffusion length?

**Answer:**
Diffusion length ($L$) is the average distance that an injected minority carrier can diffuse before recombining with a majority carrier.
The two main parameters are:
1.  **Minority Carrier Lifetime ($\tau$):** A longer lifetime means the carrier survives longer, allowing it to diffuse further. Therefore, diffusion length is directly proportional to the square root of lifetime ($L \propto \sqrt{\tau}$).
2.  **Diffusion Coefficient ($D$):** A larger diffusion coefficient means the carrier diffuses faster, covering more distance in the same amount of time. Therefore, diffusion length is directly proportional to the square root of the diffusion coefficient ($L \propto \sqrt{D}$).

**Question 2:**

A sample of silicon is doped with Boron (p-type) to a concentration of $N_A = 10^{16} \text{ cm}^{-3}$. The hole diffusion length is measured to be $L_p = 5 \mu\text{m}$. If the hole mobility is $\mu_p = 200 \text{ cm}^2/\text{V-s}$, calculate the hole minority carrier lifetime ($\tau_p$) in this silicon sample. (Assume $k T/q = 26 \text{ mV}$).

**Answer:**
We know that $L_p = \sqrt{D_p \tau_p}$ and $D_p = \mu_p \frac{k T}{q}$.

First, calculate $D_p$:
$D_p = (200 \text{ cm}^2/\text{V-s}) \times (0.026 \text{ V}) = 5.2 \text{ cm}^2/\text{s}$

Now, rearrange the diffusion length formula to solve for $\tau_p$:
$\tau_p = \frac{L_p^2}{D_p}$

Convert $L_p$ to cm: $L_p = 5 \mu\text{m} = 5 \times 10^{-4} \text{ cm}$.

$\tau_p = \frac{(5 \times 10^{-4} \text{ cm})^2}{5.2 \text{ cm}^2/\text{s}} = \frac{25 \times 10^{-8} \text{ cm}^2}{5.2 \text{ cm}^2/\text{s}}$
$\tau_p \approx 4.81 \times 10^{-8} \text{ s} = 48.1 \text{ ns}$

**Question 3:**

In a bipolar junction transistor (BJT), why is a long minority carrier diffusion length in the base region essential for achieving high current gain?

**Answer:**
The current gain of a BJT depends on how efficiently minority carriers injected from the emitter can reach the collector junction without recombining in the base. A long diffusion length in the base means that these injected minority carriers can travel a greater distance on average before recombining. This increases the probability that they will reach the collector depletion region, leading to a higher common-base current gain ($\alpha$), and consequently, a higher common-emitter current gain ($\beta$). If the diffusion length is short, most injected carriers will recombine in the base, significantly reducing the transistor's current amplification capability.

**Question 4:**

Explain how diffusion length affects the performance of a solar cell.

**Answer:**
In a solar cell, photons create electron-hole pairs. For these carriers to contribute to the output current, they must diffuse to the p-n junction and be separated. The diffusion length determines how far these photogenerated carriers can travel before recombining. If the diffusion length is shorter than the distance to the junction or the depth at which the light is absorbed, many carriers will recombine internally and be lost, reducing the photocurrent and the overall efficiency of the solar cell. Therefore, materials with long diffusion lengths are desirable for efficient solar energy conversion.

### 7. Important Points to Remember

*   **Definition:** Diffusion length ($L$) is the average distance an injected minority carrier travels before recombination.
*   **Formula:** $L = \sqrt{D \tau}$, where $D$ is the diffusion coefficient and $\tau$ is the minority carrier lifetime.
*   **Factors Influencing L:** Minority carrier lifetime ($\tau$) and diffusion coefficient ($D$).
*   **$D$ is related to Mobility ($\mu$):** $D = \mu \frac{k T}{q}$ (Einstein Relation).
*   **High Diffusion Length is Generally Desirable:** For efficient operation of devices like BJTs and solar cells, where carriers need to travel long distances.
*   **Recombination Centers:** Defects, impurities, and crystal imperfections reduce minority carrier lifetime, thus reducing diffusion length.
*   **Device Impact:** Crucial for current gain in BJTs, collection efficiency in solar cells, and forward current in diodes.
*   **Steady State:** Diffusion length is a parameter relevant to carrier transport in steady-state, non-equilibrium conditions.

### 8. Conclusion

Understanding diffusion length is critical for analyzing and designing semiconductor devices. It directly links fundamental material properties (lifetime and mobility) to the electrical and optical performance of devices like diodes, transistors, and optoelectronic components. By controlling material quality and device geometry, engineers can optimize diffusion lengths to achieve desired device characteristics.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
