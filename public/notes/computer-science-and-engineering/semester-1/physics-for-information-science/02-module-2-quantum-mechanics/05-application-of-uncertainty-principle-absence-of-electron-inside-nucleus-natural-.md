---
title: "Application of uncertainty principle- Absence of electron inside nucleus - Natural line broadening"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 2: Quantum Mechanics"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d77"
status: "completed"
scrapedAt: "2026-05-20T16:41:11.923Z"
---
# Module 2: Quantum Mechanics - Applications of the Uncertainty Principle

Welcome back, everyone! Today, we're going to delve into some truly fascinating applications of Heisenberg's Uncertainty Principle, a cornerstone of quantum mechanics. We've already grasped the fundamental concept – that we can't simultaneously know both the position and momentum of a particle with perfect accuracy. But what does this abstract principle *really* mean in the physical world? How does it manifest in the behaviour of atoms and their constituents? Today, we'll explore two significant areas where the Uncertainty Principle is not just an interesting idea, but a crucial explanation for observable phenomena: the absence of electrons within the atomic nucleus and the phenomenon of natural line broadening in atomic spectra.

Before we dive in, let's quickly recall what the Uncertainty Principle tells us. For any particle, the product of the uncertainty in its position ($\Delta x$) and the uncertainty in its momentum ($\Delta p_x$) along the same direction is always greater than or equal to a fundamental constant, Planck's constant divided by $4\pi$:

$$ \Delta x \Delta p_x \ge \frac{\hbar}{2} $$

where $\hbar = \frac{h}{2\pi}$ is the reduced Planck constant. Remember this inequality – it's the key to understanding today's topics.

---

## 1. The Absence of Electrons Inside the Atomic Nucleus

This is a classic and incredibly important application. We know that atoms have a nucleus, containing protons and neutrons, and electrons orbiting this nucleus. But, based on quantum mechanics, could electrons actually exist *inside* the nucleus? Let's use the Uncertainty Principle to find out.

**(Connecting to Course Outcomes: CO2 - Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics.)** This topic directly addresses how quantum principles dictate the structure and behavior of matter at its most fundamental level, explaining why a certain configuration (electrons in the nucleus) is impossible.

### The Nucleus: A Tiny Quantum Box

Imagine the nucleus. It's incredibly small, with a radius typically on the order of $10^{-15}$ meters (a femtometer). If an electron were to somehow be confined within this tiny volume, what would be the uncertainty in its position? Well, if it's *inside* the nucleus, the maximum uncertainty in its position, $\Delta x$, would be roughly the diameter of the nucleus itself. Let's say, for simplicity, $\Delta x \approx 2 \times 10^{-15}$ m.

Now, apply the Uncertainty Principle:

$$ \Delta p_x \ge \frac{\hbar}{2 \Delta x} $$

Let's plug in our values. $\hbar \approx 1.054 \times 10^{-34}$ J·s.

$$ \Delta p_x \ge \frac{1.054 \times 10^{-34} \text{ J·s}}{2 \times (2 \times 10^{-15} \text{ m})} $$
$$ \Delta p_x \ge \frac{1.054 \times 10^{-34}}{4 \times 10^{-15}} \text{ kg·m/s} $$
$$ \Delta p_x \ge 0.2635 \times 10^{-19} \text{ kg·m/s} $$
$$ \Delta p_x \ge 2.635 \times 10^{-20} \text{ kg·m/s} $$

This $\Delta p_x$ represents the *minimum* uncertainty in the electron's momentum if it were confined within the nucleus. And what does uncertainty in momentum imply? It tells us about the *range* of possible momentum values the electron could have. If the uncertainty is this large, it suggests the electron must possess a significant momentum, and therefore, significant kinetic energy.

### Estimating the Kinetic Energy

To get a feel for this, let's estimate the *minimum* kinetic energy an electron would have if it were confined within the nucleus. Kinetic energy ($KE$) is given by $KE = \frac{p^2}{2m}$, where $p$ is momentum and $m$ is mass. Since $\Delta p_x$ gives us a lower bound on the momentum magnitude, we can use it to estimate the minimum kinetic energy. Let's assume the momentum is roughly equal to the uncertainty in momentum for this estimate.

The mass of an electron ($m_e$) is approximately $9.11 \times 10^{-31}$ kg.

$$ KE_{min} \approx \frac{(\Delta p_x)^2}{2 m_e} $$
$$ KE_{min} \approx \frac{(2.635 \times 10^{-20} \text{ kg·m/s})^2}{2 \times (9.11 \times 10^{-31} \text{ kg})} $$
$$ KE_{min} \approx \frac{6.943 \times 10^{-40} \text{ (kg·m/s)}^2}{18.22 \times 10^{-31} \text{ kg}} $$
$$ KE_{min} \approx 0.381 \times 10^{-9} \text{ J} $$

Now, it's often more convenient to express energies in electron volts (eV). $1 \text{ eV} = 1.602 \times 10^{-19} \text{ J}$.

$$ KE_{min} \approx \frac{0.381 \times 10^{-9} \text{ J}}{1.602 \times 10^{-19} \text{ J/eV}} $$
$$ KE_{min} \approx 0.238 \times 10^{10} \text{ eV} $$
$$ KE_{min} \approx 238 \text{ MeV} $$

(Mega-electron Volts!)

### Comparing with Nuclear Binding Energies

This estimated kinetic energy is enormous! For context, typical nuclear binding energies (the energy holding nucleons together) are in the range of a few MeV per nucleon. The energy required to confine an electron within the nucleus is orders of magnitude larger.

Now, consider the rest mass energy of an electron. Using Einstein's famous $E=mc^2$:

$$ E_e = m_e c^2 = (9.11 \times 10^{-31} \text{ kg}) \times (3 \times 10^8 \text{ m/s})^2 $$
$$ E_e = (9.11 \times 10^{-31}) \times (9 \times 10^{16}) \text{ J} $$
$$ E_e \approx 8.199 \times 10^{-14} \text{ J} $$

In electron volts:

$$ E_e \approx \frac{8.199 \times 10^{-14} \text{ J}}{1.602 \times 10^{-19} \text{ J/eV}} $$
$$ E_e \approx 0.511 \times 10^6 \text{ eV} $$
$$ E_e \approx 0.511 \text{ MeV} $$

So, the rest mass energy of an electron is about 0.511 MeV.

### The Conclusion

The calculated minimum kinetic energy we derived from the Uncertainty Principle for an electron confined within the nucleus is around 238 MeV. This is vastly greater than the electron's own rest mass energy (0.511 MeV).

What does this mean physically? If an electron were to try and squeeze into the nucleus, its momentum, and thus kinetic energy, would become so high that it would be much more energetic than its rest mass energy. This is a physically impossible scenario according to special relativity and quantum mechanics. An electron confined to such a small space would possess far too much energy.

**Remember this:** The Uncertainty Principle, by imposing a lower limit on momentum (and thus kinetic energy) for a confined particle, effectively prevents an electron, with its relatively small mass, from existing within the extremely small confines of the atomic nucleus. This is why electrons are found orbiting the nucleus, not inside it.

This concept aligns beautifully with the idea of quantum confinement, often discussed in solid-state physics (see Kittel or Pillai for advanced discussions). While those examples involve larger particles and different energy scales, the core principle of a particle's energy increasing as its confinement volume decreases is the same.

**Exam Tip:** Be prepared to calculate the minimum kinetic energy of a particle (like an electron) confined to a certain region and compare it to its rest mass energy. The key is to use the Uncertainty Principle to find a minimum momentum.

---

## 2. Natural Line Broadening

Now, let's shift gears to another fascinating application: why the spectral lines emitted by atoms aren't perfectly sharp. When an atom transitions from a higher energy state to a lower energy state, it emits a photon of a specific frequency (and hence, a specific wavelength, contributing to a spectral line). Ideally, we might expect these lines to be infinitely sharp, corresponding to precise energy differences. However, in reality, they have a finite width. This width is called "natural line broadening."

**(Connecting to Course Outcomes: CO2 - Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics.)** This topic explains a subtle but observable quantum effect on atomic spectra, demonstrating how fundamental quantum principles influence our measurements of atomic properties.

### The Lifespan of an Excited State

What causes this broadening? It's directly related to the finite lifetime of the excited states in an atom. Atoms don't stay excited forever. An electron in a higher energy level will eventually, spontaneously, transition back down to a lower energy level, emitting a photon. This excited state has a certain average lifespan before this transition occurs.

Let's say the average lifetime of an excited state is $\Delta t$. This is a measure of the *time* uncertainty.

Now, we can use a different form of the Uncertainty Principle, the energy-time uncertainty relation:

$$ \Delta E \Delta t \ge \frac{\hbar}{2} $$

Here, $\Delta E$ represents the uncertainty in the energy of the state. This uncertainty in energy directly translates into an uncertainty in the energy of the emitted photon, and since $E = h\nu$ (where $\nu$ is frequency), this means an uncertainty in the frequency and wavelength of the spectral line.

### The "Uncertainty" in Energy

If an excited state has a finite lifetime $\Delta t$, then according to this relation, its energy cannot be perfectly defined. There must be an uncertainty $\Delta E$ in its energy:

$$ \Delta E \ge \frac{\hbar}{2 \Delta t} $$

This $\Delta E$ is the "natural width" of the energy level. When an atom transitions from an upper state (with energy $E_2 \pm \Delta E_2$) to a lower state (with energy $E_1 \pm \Delta E_1$), the emitted photon's energy will be $(E_2 - E_1) \pm (\Delta E_1 + \Delta E_2)$. The total uncertainty in the photon's energy, $\Delta E_{photon}$, is approximately the sum of the uncertainties in the upper and lower states:

$$ \Delta E_{photon} \approx \Delta E_1 + \Delta E_2 $$

Since both states have finite lifetimes, both contribute to the broadening of the spectral line. The frequency of the emitted photon is $\nu = \frac{E_{photon}}{h}$. Therefore, the uncertainty in frequency, $\Delta \nu$, is:

$$ \Delta \nu = \frac{\Delta E_{photon}}{h} \approx \frac{\Delta E_1 + \Delta E_2}{h} $$

Substituting the expression for $\Delta E$:

$$ \Delta \nu \approx \frac{1}{h} \left( \frac{\hbar}{2 \Delta t_1} + \frac{\hbar}{2 \Delta t_2} \right) = \frac{1}{2h} \left( \frac{\hbar}{\Delta t_1} + \frac{\hbar}{\Delta t_2} \right) $$

Since $\hbar = h/2\pi$:

$$ \Delta \nu \approx \frac{1}{2h} \left( \frac{h}{2\pi \Delta t_1} + \frac{h}{2\pi \Delta t_2} \right) = \frac{1}{4\pi} \left( \frac{1}{\Delta t_1} + \frac{1}{\Delta t_2} \right) $$

Often, the lifetime of the lower state is much longer than the upper state, so the broadening is primarily determined by the lifetime of the upper state, $\Delta t_{upper}$:

$$ \Delta \nu \approx \frac{1}{4\pi \Delta t_{upper}} $$

This formula tells us a crucial fact: **shorter the lifetime of an excited state, the broader the spectral line.**

### An Analogy: A Musical Note

Think about a musical instrument. A perfectly sustained, pure musical note would have a single, exact frequency. But if you can only hold that note for a very short time (like a quick "staccato" note), it sounds less pure, and its frequency isn't as sharply defined. It's harder to pinpoint its exact pitch. Similarly, if an excited atomic state exists for a very short time before decaying, the emitted light won't have a perfectly precise frequency.

**Remember this:** Natural line broadening is a direct consequence of the finite lifetime of excited atomic states, dictated by the energy-time form of the Uncertainty Principle. Shorter lifetimes lead to broader spectral lines.

This concept is important in many areas. In spectroscopy, understanding natural line broadening helps us interpret the data and distinguish it from other sources of broadening (like Doppler broadening due to thermal motion of atoms, or pressure broadening due to collisions). For information science, while not directly related to current digital technologies, understanding these fundamental limits on measurement accuracy at the atomic level builds a foundational appreciation for the constraints imposed by quantum mechanics, which might indirectly inform the design of future quantum information systems or measurement techniques. Textbooks like Avadhanulu et al. or Malik and Singh will often have dedicated sections on these spectral phenomena.

### Typical Lifetimes and Broadening

Typical lifetimes of excited atomic states are on the order of nanoseconds ($10^{-9}$ s). Let's calculate the natural linewidth for such a state.

If $\Delta t \approx 10^{-9}$ s:

$$ \Delta \nu \approx \frac{1}{4\pi \times 10^{-9} \text{ s}} $$
$$ \Delta \nu \approx \frac{1}{12.56 \times 10^{-9}} \text{ Hz} $$
$$ \Delta \nu \approx 0.0796 \times 10^9 \text{ Hz} $$
$$ \Delta \nu \approx 80 \text{ MHz} $$

This is a frequency uncertainty. To relate it to wavelength, we use $c = \nu \lambda$. Differentiating, $dc = -\frac{c}{\lambda^2} d\lambda$, so $d\lambda = -\frac{\lambda^2}{c} d\nu$. Thus, the wavelength spread $\Delta \lambda$ is:

$$ \Delta \lambda = \frac{\lambda^2}{c} \Delta \nu $$

For visible light, say $\lambda = 500$ nm ($500 \times 10^{-9}$ m) and $c \approx 3 \times 10^8$ m/s:

$$ \Delta \lambda = \frac{(500 \times 10^{-9} \text{ m})^2}{(3 \times 10^8 \text{ m/s})} \times (80 \times 10^6 \text{ Hz}) $$
$$ \Delta \lambda = \frac{250000 \times 10^{-18}}{3 \times 10^8} \times 80 \times 10^6 \text{ m} $$
$$ \Delta \lambda \approx 83.3 \times 10^{-18} \times 80 \times 10^6 \text{ m} $$
$$ \Delta \lambda \approx 6664 \times 10^{-12} \text{ m} $$
$$ \Delta \lambda \approx 0.00666 \text{ nm} $$

This linewidth is very small in absolute terms but significant in the context of high-resolution spectroscopy.

**Exam Tip:** Understand the relationship between excited state lifetime and spectral line width. Be able to explain that shorter lifetimes lead to broader lines and potentially calculate the linewidth given a lifetime.

---

## Summary and Key Takeaways

We've seen how the seemingly abstract Heisenberg Uncertainty Principle has very concrete implications for the physical world:

1.  **Absence of Electrons in the Nucleus:** The Uncertainty Principle dictates that confining an electron to the tiny nucleus would give it such high kinetic energy that it would be physically unstable. This explains why electrons orbit the nucleus.
2.  **Natural Line Broadening:** The finite lifetime of excited atomic states leads to an inherent uncertainty in their energy, which, via the energy-time uncertainty relation, causes spectral lines to have a finite width. Shorter lifetimes mean broader lines.

These applications demonstrate the power of quantum mechanics in explaining phenomena that classical physics cannot. They reinforce that the subatomic world operates under rules that are counter-intuitive but rigorously defined by fundamental principles like the Uncertainty Principle.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to more calculation-based, similar to what you might encounter:

**Q1. (Conceptual) State the Heisenberg Uncertainty Principle and explain, using its principle, why electrons cannot exist inside the atomic nucleus.**

**Answer:**
The Heisenberg Uncertainty Principle states that it is impossible to simultaneously know both the position and the momentum of a particle with arbitrary precision. Mathematically, $\Delta x \Delta p_x \ge \frac{\hbar}{2}$.

If an electron were confined within the nucleus, the uncertainty in its position ($\Delta x$) would be limited by the size of the nucleus (approx. $10^{-15}$ m). According to the Uncertainty Principle, this would imply a very large minimum uncertainty in its momentum ($\Delta p_x$). A large momentum uncertainty leads to a large minimum momentum, and consequently, a very high kinetic energy ($KE \approx (\Delta p_x)^2 / 2m_e$). This calculated kinetic energy is found to be much larger than the electron's rest mass energy (0.511 MeV), making such a state physically impossible. Hence, electrons do not exist inside the nucleus.

**Q2. (Calculation) An excited state of an atom has an average lifetime of 50 ns. Calculate the natural linewidth (in Hz) of the spectral line emitted when the atom transitions from this state to a lower energy state.**

**Answer:**
Given: Lifetime of the excited state, $\Delta t = 50$ ns $= 50 \times 10^{-9}$ s.
We use the energy-time uncertainty relation, $\Delta E \Delta t \ge \frac{\hbar}{2}$. The uncertainty in energy $\Delta E \approx \frac{\hbar}{2 \Delta t}$.
The frequency of the emitted photon is $\nu = E/h$. Therefore, the uncertainty in frequency $\Delta \nu$ is related to $\Delta E$ by $\Delta \nu = \Delta E / h$.
$$ \Delta \nu \approx \frac{\hbar}{2 \Delta t \cdot h} = \frac{\hbar}{2 \Delta t \cdot (2\pi \hbar)} = \frac{1}{4\pi \Delta t} $$
Plugging in the values:
$$ \Delta \nu \approx \frac{1}{4\pi \times (50 \times 10^{-9} \text{ s})} $$
$$ \Delta \nu \approx \frac{1}{200\pi \times 10^{-9} \text{ s}} $$
$$ \Delta \nu \approx \frac{1}{628.3 \times 10^{-9}} \text{ Hz} $$
$$ \Delta \nu \approx 0.00159 \times 10^9 \text{ Hz} $$
$$ \Delta \nu \approx 1.59 \text{ MHz} $$

**Q3. (Conceptual and Application) Explain how the Uncertainty Principle is related to natural line broadening. What would happen to the spectral line if the excited state lifetime was much longer?**

**Answer:**
Natural line broadening arises from the finite lifetime ($\Delta t$) of excited atomic states. The Heisenberg energy-time uncertainty principle, $\Delta E \Delta t \ge \frac{\hbar}{2}$, dictates that a state with a finite lifetime cannot have a perfectly defined energy. There is an inherent uncertainty in its energy, $\Delta E$, which is inversely proportional to its lifetime: $\Delta E \propto 1/\Delta t$. When an atom transitions, this energy uncertainty in the initial (and sometimes final) state leads to an uncertainty in the emitted photon's energy, and consequently, an uncertainty in its frequency, $\Delta \nu \propto \Delta E$. This uncertainty in frequency manifests as the natural width of the spectral line.

If the excited state lifetime ($\Delta t$) were much longer, the uncertainty in energy ($\Delta E$) would be much smaller (since $\Delta E \propto 1/\Delta t$). A smaller energy uncertainty would result in a smaller frequency uncertainty ($\Delta \nu$), meaning the spectral line would be much narrower or sharper. In the theoretical limit of an infinite lifetime (which is not physically achievable for excited states), the spectral line would be infinitely sharp.

---

That concludes our exploration of these two important applications of the Uncertainty Principle. Keep these concepts in mind as we move forward!
