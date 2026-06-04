---
title: "Critical field"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 3: Superconductivity & Dielectrics"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f956f"
status: "completed"
scrapedAt: "2026-05-23T16:03:54.915Z"
---
# Physics for Electrical Science: Module 3 - Superconductivity & Dielectrics

## Topic: The Critical Field ($H_c$) in Superconductors

Welcome, everyone, to our journey into the fascinating world of superconductivity! Today, we're diving into a really crucial concept that defines the superconducting state: the **critical field**, often denoted as $H_c$. This topic is directly linked to **Course Outcome 3 (CO3)**, where we aim to explain superconductivity. Understanding the critical field is fundamental to grasping how superconductors behave and why they are so special.

### What Exactly is Superconductivity? A Quick Recap

Before we get to the critical field, let's refresh our memories. Remember that superconductivity is a phenomenon observed in certain materials below a specific critical temperature ($T_c$), where they exhibit two remarkable properties:

1.  **Zero electrical resistance:** Electricity flows without any loss of energy. Imagine a current flowing in a superconducting loop forever – pretty mind-blowing, right?
2.  **Perfect diamagnetism (Meissner Effect):** Superconductors expel magnetic fields from their interior. This is why magnets can levitate above superconductors!

These properties are a direct consequence of the formation of Cooper pairs – pairs of electrons bound together by lattice vibrations (phonons).

### Introducing the Critical Field ($H_c$): The Magnetic Limit

Now, think about applying an external magnetic field to a superconductor. As we discussed with the Meissner effect, the superconductor tries its best to push this magnetic field out. But like any material, there's a limit to how much it can withstand. This limit is what we call the **critical field ($H_c$)**.

**Definition:** The critical field ($H_c$) is the maximum external magnetic field strength that a superconductor can withstand at a given temperature while remaining in its superconducting state. If the applied magnetic field exceeds $H_c$, the material reverts to its normal, resistive state.

Think of it like this: Imagine a superhero with incredible strength (the superconductor). They can lift heavy objects (carry current) and deflect incoming projectiles (expel magnetic fields). However, there's a limit to their strength. If the projectile becomes too powerful (magnetic field becomes too strong), even the superhero will eventually succumb and be overwhelmed. That "too powerful" threshold is our critical field $H_c$.

This concept is a cornerstone of understanding superconductivity, directly addressing CO3. It tells us that superconductivity isn't an absolute state; it's conditional, and magnetic fields are one of the key conditions.

### How Does Temperature Affect the Critical Field?

This is where things get even more interesting. The critical field isn't a constant value; it's highly dependent on temperature. As the temperature of the superconductor increases towards its critical temperature ($T_c$), its ability to withstand a magnetic field decreases.

At absolute zero ($T = 0$ K), the superconductor is at its strongest, capable of withstanding the highest magnetic field. This maximum critical field at absolute zero is often denoted as $H_{c0}$. As the temperature rises, $H_c$ gradually drops, eventually becoming zero at the critical temperature ($T_c$).

**The Relationship:** This temperature dependence is empirically found to follow a parabolic relationship:

$H_c(T) = H_{c0} \left[1 - \left(\frac{T}{T_c}\right)^2\right]$

Let's break this down:

*   $H_c(T)$: The critical field at a specific temperature $T$.
*   $H_{c0}$: The critical field at absolute zero (0 Kelvin). This is a material-specific constant.
*   $T$: The operating temperature of the superconductor.
*   $T_c$: The critical temperature of the superconductor.

**Visualizing the Relationship:** If you were to plot $H_c$ on the y-axis and $T$ on the x-axis, you'd see a curve that starts at $H_{c0}$ (when $T=0$) and curves downwards, hitting the x-axis at $T_c$ (where $H_c=0$).

**Why this relationship?** While the full microscopic explanation involves complex thermodynamics (as detailed in advanced texts like Kittel's "Introduction to Solid State Physics"), the intuitive idea is that as temperature increases, the thermal energy of the material also increases. This thermal energy tends to break apart the Cooper pairs, making the material more susceptible to the disruptive influence of an external magnetic field. At $T_c$, the thermal energy is so high that no Cooper pairs can exist, and thus no superconductivity is possible, regardless of the magnetic field.

**Exam Tip:** Be sure to remember this formula for $H_c(T)$. You'll often be asked to calculate the critical field at a specific temperature or to find a critical temperature given a critical field.

### Types of Superconductors: A Crucial Distinction

The behavior of superconductors in magnetic fields isn't uniform across all superconducting materials. This leads us to an important classification: Type I and Type II superconductors. This distinction is crucial for understanding their practical applications and is a key concept for CO3.

#### Type I Superconductors

These are the "ideal" superconductors, often pure metals like lead (Pb), tin (Sn), mercury (Hg), and aluminum (Al).

*   **Behavior in Magnetic Field:** Type I superconductors exhibit a single, sharp critical field, $H_c$. Below $H_c$, they are perfectly diamagnetic (Meissner effect is complete). Above $H_c$, they abruptly transition back to the normal state.
*   **Meissner Effect:** They completely expel magnetic flux below $H_c$.
*   **Critical Field Values:** Generally, Type I superconductors have relatively low critical fields, typically in the order of millitesla (mT) or a few hundred gauss. This limits their practical applications in high-magnetic-field environments.
*   **Analogy:** Think of a light switch. It's either ON (superconducting, perfect diamagnetism) or OFF (normal, resistive) as soon as you cross the threshold $H_c$. There's no in-between.

#### Type II Superconductors

These are often alloys or ceramic compounds, such as niobium-tin ($Nb_3Sn$) and yttrium barium copper oxide (YBCO). Many of the technologically important superconductors are Type II.

Type II superconductors have *two* critical fields: a lower critical field ($H_{c1}$) and an upper critical field ($H_{c2}$).

1.  **Below $H_{c1}$:** The material behaves like a Type I superconductor. It completely expels magnetic flux (perfect diamagnetism/Meissner effect).
2.  **Between $H_{c1}$ and $H_{c2}$:** This is the interesting part! The magnetic field begins to penetrate the superconductor, but not uniformly. It penetrates in the form of quantized flux tubes, called **vortices** or **fluxoids**. Each vortex carries a single quantum of magnetic flux ($ \Phi_0 = h/2e $). The regions between these vortices remain superconducting. This state is called the **mixed state** or **vortex state**. Superconductivity is *partially* maintained, and the material still has zero resistance, but it's no longer a perfect diamagnet.
3.  **Above $H_{c2}$:** The magnetic field completely penetrates the material, destroying superconductivity, and the material reverts to its normal, resistive state.

*   **Critical Field Values:** Type II superconductors typically have much higher critical fields, especially $H_{c2}$, which can be hundreds of Tesla. This makes them incredibly valuable for high-field applications like MRI magnets, particle accelerators, and fusion reactors.
*   **Analogy:** Imagine a sieve. Below $H_{c1}$, no water (magnetic field) gets through. Between $H_{c1}$ and $H_{c2}$, water starts to drip through specific holes (vortices), but the sieve material itself (superconducting regions) remains solid. Above $H_{c2}$, the sieve breaks apart entirely.

**Key Takeaway for Exams:** The primary difference between Type I and Type II lies in their response to magnetic fields and the presence of a mixed state in Type II. Always be ready to discuss this distinction.

### The Ginzburg-Landau Theory and the Superconducting Parameter ($\kappa$)

To further differentiate between Type I and Type II superconductors, we introduce the **Ginzburg-Landau theory**. This phenomenological theory, developed by Vitaly Ginzburg and Lev Landau, describes superconductivity in terms of a complex order parameter, $\psi(r)$, which represents the density of superconducting electrons.

From this theory, a crucial dimensionless parameter emerges: the **Ginzburg-Landau parameter ($\kappa$)**.

$\kappa = \frac{\lambda}{\xi}$

Where:

*   $\lambda$: The **magnetic penetration depth**. This is the characteristic distance over which an external magnetic field decays inside the superconductor. It tells us how "far" the magnetic field can penetrate from the surface.
*   $\xi$: The **coherence length**. This is the characteristic distance over which the superconducting electron density (or the superconducting state itself) can vary significantly. It essentially defines the "size" or spatial extent of a Cooper pair.

The value of $\kappa$ is fundamental in determining the type of superconductor:

*   **Type I Superconductors:** Have $\kappa < \frac{1}{\sqrt{2}}$ (approximately $\kappa < 0.707$). For these materials, the coherence length ($\xi$) is larger than the penetration depth ($\lambda$). The surface energy associated with the boundary between a superconducting and normal region is positive. This leads to a preference for complete expulsion of flux to minimize surface area, resulting in a sharp transition at $H_c$.
*   **Type II Superconductors:** Have $\kappa > \frac{1}{\sqrt{2}}$. For these materials, the penetration depth ($\lambda$) is larger than the coherence length ($\xi$). The surface energy associated with the boundary between a superconducting and normal region is negative. This means it is energetically favorable for the magnetic field to penetrate in small, quantized flux tubes (vortices) rather than being completely excluded, as this reduces the total interface energy. This leads to the intermediate mixed state.

**Remember this:** The Ginzburg-Landau parameter $\kappa$ is your key to classifying superconductors. It’s a beautiful example of how microscopic properties ($\lambda$ and $\xi$) manifest in macroscopic behavior. Textbooks like Avadhanulu, Kshirsagar, and Arun Murthy, and Malik and Singh often delve into the theoretical underpinnings of $\kappa$.

### Practical Significance of the Critical Field

Why do we care so much about the critical field?

1.  **Defining Operating Limits:** For any superconducting device or application, the operating magnetic field must always be kept below the critical field $H_c$ (or $H_{c2}$ for Type II) at the operating temperature. Exceeding this limit means the device will fail to superconduct.
2.  **Material Selection:** The critical field value is a primary factor in selecting materials for specific applications. For high-field magnets (like in MRI machines), you need Type II superconductors with very high $H_{c2}$ values. For low-field applications, Type I might suffice.
3.  **Superconducting Magnets:** The creation of powerful electromagnets that utilize superconductivity relies heavily on understanding and exceeding critical field limitations. The development of high-$T_c$ superconductors, for instance, was a breakthrough because they offered higher critical fields at more accessible temperatures.
4.  **Understanding Superconducting Devices:** Concepts from critical fields are relevant when discussing Josephson junctions and SQUIDs (Superconducting Quantum Interference Devices), which are key components in highly sensitive magnetic field detectors. While not directly covered in this note on $H_c$, these applications build upon the fundamental understanding of how magnetic fields interact with superconductors.

This directly relates to **Course Outcome 3 (CO3)** as it explains the practical constraints and possibilities within superconductivity.

### Common Pitfalls and Exam Focus

*   **Confusing $H_c$ with $T_c$:** Remember $H_c$ is a magnetic field strength, while $T_c$ is a temperature. They are related but distinct critical parameters.
*   **Type I vs. Type II:** Be very clear about the characteristics of each type, especially regarding the number of critical fields and the existence of the mixed state.
*   **The Formula:** Memorizing the parabolic relationship $H_c(T) = H_{c0} [1 - (T/T_c)^2]$ is essential for problem-solving.
*   **$\kappa$ Parameter:** Understand what $\kappa$ represents and how its value dictates the superconductor type.

### Summary: The Critical Field in a Nutshell

The critical field ($H_c$) is the magnetic field threshold above which superconductivity is destroyed. It's temperature-dependent, following $H_c(T) = H_{c0} [1 - (T/T_c)^2]$. Type I superconductors have a single $H_c$ and exhibit complete Meissner effect. Type II superconductors have two critical fields, $H_{c1}$ and $H_{c2}$, and exhibit a mixed state between them. The Ginzburg-Landau parameter $\kappa = \lambda/\xi$ determines whether a superconductor is Type I or Type II. Understanding these concepts is vital for appreciating the behavior and applications of superconducting materials.

***

## Sample Questions and Answers

Here are some questions to test your understanding, ranging from conceptual recall to application:

**Question 1 (Conceptual):** What is the critical field ($H_c$) in superconductivity?
**Answer:** The critical field ($H_c$) is the maximum external magnetic field strength a superconductor can tolerate at a given temperature before losing its superconducting properties and reverting to the normal resistive state.

**Question 2 (Conceptual/Formula Recall):** Describe the relationship between the critical field ($H_c$) and temperature ($T$) for a superconductor.
**Answer:** The critical field decreases as temperature increases. This relationship is often described by the parabolic equation: $H_c(T) = H_{c0} [1 - (T/T_c)^2]$, where $H_{c0}$ is the critical field at 0 K and $T_c$ is the critical temperature. At $T=0$ K, $H_c = H_{c0}$, and at $T=T_c$, $H_c = 0$.

**Question 3 (Classification/Comparison):** Differentiate between Type I and Type II superconductors based on their response to magnetic fields.
**Answer:**
*   **Type I:** Exhibit a single critical field, $H_c$. Below $H_c$, they are perfectly diamagnetic (Meissner effect). Above $H_c$, they abruptly transition to the normal state. They generally have low critical fields.
*   **Type II:** Have two critical fields, $H_{c1}$ and $H_{c2}$.
    *   Below $H_{c1}$: Complete Meissner effect.
    *   Between $H_{c1}$ and $H_{c2}$: Mixed state (vortex state), where magnetic flux penetrates partially in quantized flux tubes, but zero resistance is maintained.
    *   Above $H_{c2}$: Transition to the normal state. They typically have much higher critical fields, particularly $H_{c2}$.

**Question 4 (Application/Problem Solving):** A superconductor has a critical temperature ($T_c$) of 10 K and a critical field at absolute zero ($H_{c0}$) of 0.2 Tesla. Calculate the critical field at 5 K.
**Solution:**
We use the formula: $H_c(T) = H_{c0} \left[1 - \left(\frac{T}{T_c}\right)^2\right]$
Given:
$T_c = 10$ K
$H_{c0} = 0.2$ T
$T = 5$ K

Substitute the values:
$H_c(5 \text{ K}) = 0.2 \text{ T} \left[1 - \left(\frac{5 \text{ K}}{10 \text{ K}}\right)^2\right]$
$H_c(5 \text{ K}) = 0.2 \text{ T} \left[1 - \left(\frac{1}{2}\right)^2\right]$
$H_c(5 \text{ K}) = 0.2 \text{ T} \left[1 - \frac{1}{4}\right]$
$H_c(5 \text{ K}) = 0.2 \text{ T} \left[\frac{3}{4}\right]$
$H_c(5 \text{ K}) = 0.15$ T

**Answer:** The critical field at 5 K is 0.15 Tesla.

**Question 5 (Conceptual/Ginzburg-Landau):** What is the Ginzburg-Landau parameter ($\kappa$), and how does its value determine the type of superconductor?
**Answer:** The Ginzburg-Landau parameter is defined as $\kappa = \lambda / \xi$, where $\lambda$ is the magnetic penetration depth and $\xi$ is the coherence length.
*   If $\kappa < 1/\sqrt{2}$ (approximately 0.707), the superconductor is **Type I**. In this case, the coherence length is larger than the penetration depth, and the surface energy is positive, favoring complete flux expulsion.
*   If $\kappa > 1/\sqrt{2}$, the superconductor is **Type II**. Here, the penetration depth is larger than the coherence length, and the surface energy is negative, making the mixed state energetically favorable.
