---
title: "Derivation of density of electrons in conduction band and density of holes in valence band"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 1: Semiconductor  Physics"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9557"
status: "completed"
scrapedAt: "2026-05-23T16:03:36.386Z"
---
# Physics for Electrical Science: Module 1 - Semiconductor Physics

## Topic: Derivation of Density of Electrons in Conduction Band and Density of Holes in Valence Band

Welcome, everyone, to our journey into the fascinating world of semiconductors! Today, we’re going to tackle a really fundamental concept: how do we quantify the number of charge carriers – the electrons and holes – that are available to conduct electricity in the conduction and valence bands of a semiconductor material? This is absolutely crucial for understanding how devices like diodes, transistors, and integrated circuits actually work. So, let's dive right in.

This topic directly helps us achieve **Course Outcome 1 (CO1): Explain the fundamentals of Semiconductor Physics**. By deriving these densities, we’re building a solid foundation of understanding the very nature of charge carriers in semiconductors. It also supports **CO2: Describe the behaviour of semiconductor materials in semiconductor devices**, because knowing the number of charge carriers tells us how conductive a material will be under different conditions.

### Understanding Energy Bands: A Quick Recap

Before we get into the nitty-gritty of densities, let's just quickly refresh our memory about the energy band structure of solids. As you know from your earlier physics courses (perhaps concepts touched upon in Beiser's "Concepts of Modern Physics" or Kittel's "Introduction to Solid State Physics"), when atoms come together to form a solid, their discrete atomic energy levels broaden into continuous energy bands.

For semiconductors, the two most important bands are:

*   **Valence Band:** This is the highest energy band that is completely filled with electrons at absolute zero temperature ($0$ K). These electrons are typically bound to individual atoms and don't readily contribute to current. Think of them as being "tied down."
*   **Conduction Band:** This is the next higher energy band, which is empty at $0$ K. Electrons that gain enough energy to jump into this band are free to move throughout the crystal lattice and contribute to electrical conduction. These are our "mobile" charge carriers.
*   **Band Gap ($E_g$):** The energy difference between the top of the valence band ($E_v$) and the bottom of the conduction band ($E_c$) is the band gap. This is a critical parameter. If $E_g$ is small, it's easier for electrons to jump from the valence band to the conduction band, making the material more conductive.

This band structure is the bedrock of semiconductor behavior, as highlighted in many fundamental texts like Streetman & Banerjee's "Solid State Electronic Devices."

### The Core Idea: Counting Charge Carriers

So, how do we count these mobile electrons in the conduction band and, importantly, the "holes" left behind in the valence band when electrons jump? We need two pieces of information for each energy level within these bands:

1.  **The Density of Available States:** How many possible energy states are there at a specific energy level? This is described by the **density of states function**, denoted as $g(E)$.
2.  **The Probability of Occupation:** What is the probability that an available state at that energy level will actually be occupied by an electron? This is given by the **Fermi-Dirac distribution function**, $f(E)$.

The product of these two gives us the density of electrons at a specific energy $E$: $n(E) = g(E) \cdot f(E)$. To get the total density of electrons in the conduction band, we need to integrate this product over the entire energy range of the conduction band. The same logic applies to holes, but with a slight twist.

### 1. Derivation of Electron Density in the Conduction Band ($n_c$)

Let’s start with the conduction band. The energy levels in the conduction band are above the Fermi level, and we are interested in the electrons that have enough thermal energy to occupy these states.

**a) Density of States in the Conduction Band ($g_c(E)$)**

The density of states function, $g(E)$, tells us how many energy states are available per unit energy interval per unit volume. For electrons in the conduction band, which can be treated as free particles moving in a 3D box (the crystal), the density of states can be derived using quantum mechanics.

The energy of an electron in the conduction band is related to its wavevector $\mathbf{k}$ by the parabolic approximation:
$E = E_c + \frac{\hbar^2 k^2}{2m_e^*}$
where:
*   $E_c$ is the energy at the bottom of the conduction band.
*   $\hbar$ is the reduced Planck constant ($\hbar = h/2\pi$).
*   $k = |\mathbf{k}| = \sqrt{k_x^2 + k_y^2 + k_z^2}$ is the magnitude of the wavevector.
*   $m_e^*$ is the **effective mass of the electron**. This is a crucial concept. It's not the free electron mass ($m_0$). Instead, it reflects how an electron accelerates in the periodic potential of the crystal lattice. A smaller effective mass means it's easier for the electron to accelerate (or change its momentum). Think of it like trying to push a small pebble versus a large boulder – the pebble responds more readily. This concept is thoroughly discussed in solid-state physics texts like Pillai's.

From this energy-momentum (or energy-wavevector) relationship, we can derive the density of states. The number of states within a sphere of radius $k$ in k-space is $\frac{4}{3}\pi k^3$ multiplied by the density of states in k-space, which is $1/(\frac{h}{L})^3$ for each spatial mode, where $L$ is the crystal dimension. Due to spin, we multiply by 2.
Number of states $= 2 \times \frac{(\frac{4}{3}\pi k^3)}{(\frac{h}{L})^3} = \frac{8\pi V k^3}{6h^3}$, where $V = L^3$ is the volume.
The density of states per unit volume up to wavevector $k$ is $\frac{4\pi k^3}{3h^3}$.

Now, we express $k^3$ in terms of energy from our parabolic relation: $k^2 = \frac{2m_e^*}{\hbar^2}(E - E_c)$. So, $k = \left(\frac{2m_e^*(E-E_c)}{\hbar^2}\right)^{1/2}$, and $k^3 = \left(\frac{2m_e^*(E-E_c)}{\hbar^2}\right)^{3/2}$.

Substituting this into the density of states per unit volume:
$g(E) = \frac{4\pi}{3h^3} \left(\frac{2m_e^*(E-E_c)}{\hbar^2}\right)^{3/2}$

Let's simplify this. Recall $\hbar = h/2\pi$. So $h^3 = (2\pi\hbar)^3 = 8\pi^3 \hbar^3$.
$g_c(E) = \frac{4\pi}{3(8\pi^3 \hbar^3)} \left(\frac{2m_e^*(E-E_c)}{\hbar^2}\right)^{3/2}$
$g_c(E) = \frac{1}{6\pi^2 \hbar^3} (2m_e^*(E-E_c))^{3/2}$

This is the general form for the density of states for a parabolic band. Often, for convenience, we write it as:
$g_c(E) = C_c (E - E_c)^{1/2}$ for $E \ge E_c$, where $C_c = \frac{4\pi (2m_e^*)^{3/2}}{h^3}$.

**Key Takeaway:** The density of states in the conduction band increases as the square root of the energy above the band edge ($E_c$). This means there are more available states at higher energies within the conduction band.

**b) Probability of Occupation: The Fermi-Dirac Distribution ($f(E)$)**

The Fermi-Dirac distribution function gives the probability that a given energy state $E$ will be occupied by an electron:
$f(E) = \frac{1}{1 + e^{(E - E_F)/k_B T}}$
where:
*   $E_F$ is the **Fermi level**, which represents the energy level where the probability of occupation is exactly $1/2$. It's a conceptual energy level, not necessarily a physical one. Its position is crucial for determining the carrier concentrations.
*   $k_B$ is the Boltzmann constant.
*   $T$ is the absolute temperature in Kelvin.

This function is fundamental to understanding electron behavior in solids and is a cornerstone of statistical mechanics in solid-state physics, covered in books like Avadhanulu, Kshirsagar & Arun Murthy.

**Understanding the Fermi-Dirac Function:**
*   **At $T=0$ K:** If $E < E_F$, $f(E) = 1$ (all states are filled). If $E > E_F$, $f(E) = 0$ (all states are empty).
*   **At $T>0$ K:** The transition from filled to empty states around $E_F$ is smoothed out. There's a finite probability of finding electrons in states slightly above $E_F$, and a finite probability of finding empty states slightly below $E_F$.

**c) The Approximation for Semiconductors (Maxwell-Boltzmann)**

In most practical semiconductor devices, the Fermi level ($E_F$) is located well within the band gap, far below the conduction band edge ($E_c$). This means that the energy $E$ we are considering in the conduction band ($E \ge E_c$) is significantly greater than $E_F$.
So, $(E - E_F) \gg k_B T$.
In this case, the exponential term $e^{(E - E_F)/k_B T}$ becomes very large, and the $+1$ in the denominator of the Fermi-Dirac function becomes negligible.
Therefore, for the conduction band in typical semiconductors, we can approximate the Fermi-Dirac distribution by the **Maxwell-Boltzmann distribution**:
$f(E) \approx e^{-(E - E_F)/k_B T}$

This approximation simplifies the math considerably and is a very common and powerful tool, as discussed in Malik & Singh's "Engineering Physics."

**d) Calculating the Electron Density ($n_c$)**

Now, we multiply the density of states in the conduction band by the probability of occupation and integrate over the entire conduction band energy range ($E_c$ to $\infty$):
$n_c = \int_{E_c}^{\infty} g_c(E) f(E) dE$

Using our density of states formula $g_c(E) = C_c (E - E_c)^{1/2}$ and the Maxwell-Boltzmann approximation $f(E) \approx e^{-(E - E_F)/k_B T}$:
$n_c = \int_{E_c}^{\infty} C_c (E - E_c)^{1/2} e^{-(E - E_F)/k_B T} dE$

To make this integral easier, let's substitute a new variable. Let $x = E - E_c$. Then $dE = dx$. When $E = E_c$, $x = 0$. When $E \to \infty$, $x \to \infty$.
Also, $E = E_c + x$, so $(E - E_F) = (E_c + x - E_F)$.
$n_c = C_c \int_{0}^{\infty} x^{1/2} e^{-(E_c + x - E_F)/k_B T} dx$
$n_c = C_c e^{-(E_c - E_F)/k_B T} \int_{0}^{\infty} x^{1/2} e^{-x/k_B T} dx$

Now, let's look at the integral: $\int_{0}^{\infty} x^{1/2} e^{-x/k_B T} dx$.
This integral is in the form of a standard gamma function integral: $\int_{0}^{\infty} y^\nu e^{-\alpha y} dy = \frac{\Gamma(\nu+1)}{\alpha^{\nu+1}}$.
Here, $y = x$, $\nu = 1/2$, and $\alpha = 1/k_B T$.
So the integral is $\frac{\Gamma(1/2 + 1)}{(1/k_B T)^{1/2 + 1}} = \frac{\Gamma(3/2)}{(1/k_B T)^{3/2}}$.
We know that $\Gamma(3/2) = \frac{\sqrt{\pi}}{2}$ and $(1/k_B T)^{3/2} = \frac{1}{(k_B T)^{3/2}}$.
So the integral is $\frac{\sqrt{\pi}/2}{1/(k_B T)^{3/2}} = \frac{\sqrt{\pi}}{2} (k_B T)^{3/2}$.

Now, let's substitute $C_c = \frac{4\pi (2m_e^*)^{3/2}}{h^3}$ back in:
$n_c = \frac{4\pi (2m_e^*)^{3/2}}{h^3} e^{-(E_c - E_F)/k_B T} \frac{\sqrt{\pi}}{2} (k_B T)^{3/2}$

Let's simplify this:
$h^3 = (2\pi\hbar)^3 = 8\pi^3 \hbar^3$.
$(2m_e^*)^{3/2} = 2^{3/2} (m_e^*)^{3/2}$.
$\sqrt{\pi} \cdot \pi = \pi^{3/2}$.

$n_c = \frac{4\pi (2^{3/2} (m_e^*)^{3/2})}{8\pi^3 \hbar^3} e^{-(E_c - E_F)/k_B T} \frac{\sqrt{\pi}}{2} (k_B T)^{3/2}$
$n_c = \frac{4 \cdot 2\sqrt{2} \pi^{3/2} (m_e^*)^{3/2}}{8\pi^3 \hbar^3} e^{-(E_c - E_F)/k_B T} (k_B T)^{3/2}$
$n_c = \frac{8\sqrt{2} \pi^{3/2} (m_e^*)^{3/2}}{8\pi^3 \hbar^3} e^{-(E_c - E_F)/k_B T} (k_B T)^{3/2}$
$n_c = \frac{\sqrt{2} \pi^{1/2} (m_e^*)^{3/2}}{\pi^2 \hbar^3} e^{-(E_c - E_F)/k_B T} (k_B T)^{3/2}$

Let's try simplifying differently, using $h$ directly:
$n_c = \frac{4\pi (2m_e^*)^{3/2}}{h^3} \frac{\sqrt{\pi}}{2} (k_B T)^{3/2} e^{-(E_c - E_F)/k_B T}$
$n_c = \frac{2\pi (2m_e^*)^{3/2} \sqrt{\pi}}{h^3} (k_B T)^{3/2} e^{-(E_c - E_F)/k_B T}$
$n_c = \frac{2\pi (2^{3/2}) (\pi^{1/2}) (m_e^*)^{3/2}}{h^3} (k_B T)^{3/2} e^{-(E_c - E_F)/k_B T}$
$n_c = \frac{4\sqrt{2} \pi^{3/2} (m_e^*)^{3/2}}{h^3} (k_B T)^{3/2} e^{-(E_c - E_F)/k_B T}$

This is getting messy. Let's redefine our constants.
We have $g_c(E) = \frac{(2m_e^*)^{3/2}}{2\pi^2 \hbar^3} (E-E_c)^{1/2}$.
Let $N_c = 2 \left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2}$. This $N_c$ is called the **effective density of states in the conduction band**. It's a quantity that depends on temperature and the effective mass of electrons, representing the "number of states" available at a characteristic energy.

Let's re-evaluate the integral using $N_c$.
$n_c = \int_{E_c}^{\infty} \frac{(2m_e^*)^{3/2}}{2\pi^2 \hbar^3} (E-E_c)^{1/2} e^{-(E-E_F)/k_B T} dE$
Let $u = E - E_c$.
$n_c = \frac{(2m_e^*)^{3/2}}{2\pi^2 \hbar^3} \int_{0}^{\infty} u^{1/2} e^{-(u + E_c - E_F)/k_B T} du$
$n_c = \frac{(2m_e^*)^{3/2}}{2\pi^2 \hbar^3} e^{-(E_c-E_F)/k_B T} \int_{0}^{\infty} u^{1/2} e^{-u/k_B T} du$

The integral $\int_{0}^{\infty} u^{1/2} e^{-u/k_B T} du = (k_B T)^{3/2} \frac{\sqrt{\pi}}{2}$.
$n_c = \frac{(2m_e^*)^{3/2}}{2\pi^2 \hbar^3} e^{-(E_c-E_F)/k_B T} (k_B T)^{3/2} \frac{\sqrt{\pi}}{2}$
$n_c = \frac{(2m_e^*)^{3/2} \sqrt{\pi}}{4\pi^2 \hbar^3} (k_B T)^{3/2} e^{-(E_c-E_F)/k_B T}$

Remember $h = 2\pi\hbar$. So $\hbar^3 = \frac{h^3}{(2\pi)^3} = \frac{h^3}{8\pi^3}$.
$n_c = \frac{(2m_e^*)^{3/2} \sqrt{\pi}}{4\pi^2 (h^3/8\pi^3)} (k_B T)^{3/2} e^{-(E_c-E_F)/k_B T}$
$n_c = \frac{(2m_e^*)^{3/2} \sqrt{\pi} 8\pi^3}{4\pi^2 h^3} (k_B T)^{3/2} e^{-(E_c-E_F)/k_B T}$
$n_c = \frac{2\sqrt{2} \pi^{1/2} (m_e^*)^{3/2} 2\pi h^3}{h^3} (k_B T)^{3/2} e^{-(E_c-E_F)/k_B T}$ -- Wait, something is off with constants.

Let's use the standard definition of $N_c$.
$N_c = 2 \left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2}$
The derivation often starts with:
$n_c = \int_{E_c}^{\infty} g_c(E) f(E) dE$
$g_c(E) = \frac{1}{2\pi^2} \left(\frac{2m_e^*}{\hbar^2}\right)^{3/2} (E-E_c)^{1/2}$
$f(E) \approx e^{-(E-E_F)/k_B T}$
$n_c = \frac{1}{2\pi^2} \left(\frac{2m_e^*}{\hbar^2}\right)^{3/2} \int_{E_c}^{\infty} (E-E_c)^{1/2} e^{-(E-E_F)/k_B T} dE$
Let $x = E-E_c$.
$n_c = \frac{1}{2\pi^2} \left(\frac{2m_e^*}{\hbar^2}\right)^{3/2} e^{-(E_c-E_F)/k_B T} \int_{0}^{\infty} x^{1/2} e^{-x/k_B T} dx$
The integral $\int_{0}^{\infty} x^{1/2} e^{-x/k_B T} dx = (k_B T)^{3/2} \frac{\sqrt{\pi}}{2}$.
$n_c = \frac{1}{2\pi^2} \left(\frac{2m_e^*}{\hbar^2}\right)^{3/2} e^{-(E_c-E_F)/k_B T} (k_B T)^{3/2} \frac{\sqrt{\pi}}{2}$
$n_c = \frac{\sqrt{\pi}}{4\pi^2} \left(\frac{2m_e^*}{\hbar^2}\right)^{3/2} (k_B T)^{3/2} e^{-(E_c-E_F)/k_B T}$
$n_c = \frac{\sqrt{\pi}}{4\pi^2} \frac{(2m_e^*)^{3/2}}{(\hbar^2)^{3/2}} (k_B T)^{3/2} e^{-(E_c-E_F)/k_B T}$
$n_c = \frac{\sqrt{\pi}}{4\pi^2} \frac{(2m_e^*)^{3/2}}{\hbar^3} (k_B T)^{3/2} e^{-(E_c-E_F)/k_B T}$

Now, substitute $\hbar = h/2\pi$:
$\hbar^3 = (h/2\pi)^3 = h^3 / (8\pi^3)$.
$n_c = \frac{\sqrt{\pi}}{4\pi^2} \frac{(2m_e^*)^{3/2}}{h^3 / (8\pi^3)} (k_B T)^{3/2} e^{-(E_c-E_F)/k_B T}$
$n_c = \frac{\sqrt{\pi}}{4\pi^2} \frac{8\pi^3 (2m_e^*)^{3/2}}{h^3} (k_B T)^{3/2} e^{-(E_c-E_F)/k_B T}$
$n_c = \frac{2\pi \sqrt{\pi} (2m_e^*)^{3/2}}{h^3} (k_B T)^{3/2} e^{-(E_c-E_F)/k_B T}$
$n_c = \frac{2\pi^{3/2} (2m_e^*)^{3/2}}{h^3} (k_B T)^{3/2} e^{-(E_c-E_F)/k_B T}$
$n_c = 2 \left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2} e^{-(E_c-E_F)/k_B T}$

Aha! This is our final, familiar form.
$n_c = N_c e^{-(E_c-E_F)/k_B T}$

Where $N_c = 2 \left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2}$ is the effective density of states in the conduction band.

**What this means:** The electron density in the conduction band increases exponentially with temperature (because $E_c - E_F$ is constant, and $T$ is in the denominator of the exponent) and also depends on the effective mass of electrons and the number of available states. Higher temperature means more thermal energy, pushing more electrons into the conduction band.

### 2. Derivation of Hole Density in the Valence Band ($p_v$)

Now let's consider the valence band. At $0$ K, it's full of electrons. When electrons get excited to the conduction band, they leave behind empty states in the valence band. These empty states are what we call **holes**. A hole behaves like a positive charge carrier.

To find the density of holes, we need to count the number of *unoccupied* states in the valence band.
The probability that a state at energy $E$ is *unoccupied* by an electron is given by $1 - f(E)$.
$1 - f(E) = 1 - \frac{1}{1 + e^{(E - E_F)/k_B T}} = \frac{1 + e^{(E - E_F)/k_B T} - 1}{1 + e^{(E - E_F)/k_B T}} = \frac{e^{(E - E_F)/k_B T}}{1 + e^{(E - E_F)/k_B T}}$

For holes, we are interested in energies near the top of the valence band, $E_v$. The Fermi level $E_F$ is well below $E_v$. So, $E_F - E$ is a large positive quantity. This means $(E - E_F)/k_B T$ is a large negative quantity.
Let $\epsilon = E_F - E$. Then $E - E_F = -\epsilon$.
So, $1 - f(E) = \frac{e^{-\epsilon/k_B T}}{1 + e^{-\epsilon/k_B T}}$.
Since $\epsilon$ is large and positive, $e^{-\epsilon/k_B T}$ is very small. The denominator $1 + e^{-\epsilon/k_B T} \approx 1$.
Thus, for states in the valence band, the probability of being empty is approximately:
$1 - f(E) \approx e^{(E - E_F)/k_B T}$ (This is the **Maxwell-Boltzmann approximation for holes**).

**a) Density of States in the Valence Band ($g_v(E)$)**

Similar to the conduction band, the density of states in the valence band is parabolic, but the energy is measured downwards from $E_v$. The "effective mass" for holes ($m_h^*$) is used. It's a separate parameter from $m_e^*$.
We can write the energy as $E = E_v - \frac{\hbar^2 k^2}{2m_h^*}$, where $E_v$ is the top of the valence band.
The density of states function is similar in form to $g_c(E)$, but usually written for energies *below* $E_v$:
$g_v(E) = \frac{(2m_h^*)^{3/2}}{2\pi^2 \hbar^3} (E_v - E)^{1/2}$ for $E \le E_v$.

**b) Calculating the Hole Density ($p_v$)**

The hole density is found by integrating the density of states for holes multiplied by the probability that a state is unoccupied, over the entire valence band energy range (from $-\infty$ up to $E_v$).
$p_v = \int_{-\infty}^{E_v} g_v(E) [1 - f(E)] dE$

Using the approximation $1 - f(E) \approx e^{(E - E_F)/k_B T}$:
$p_v = \int_{-\infty}^{E_v} \frac{(2m_h^*)^{3/2}}{2\pi^2 \hbar^3} (E_v - E)^{1/2} e^{(E - E_F)/k_B T} dE$

Let $y = E_v - E$. Then $dE = -dy$. When $E = E_v$, $y = 0$. When $E \to -\infty$, $y \to \infty$.
Also, $E = E_v - y$, so $(E - E_F) = (E_v - y - E_F)$.
$p_v = \frac{(2m_h^*)^{3/2}}{2\pi^2 \hbar^3} \int_{\infty}^{0} y^{1/2} e^{(E_v - y - E_F)/k_B T} (-dy)$
$p_v = \frac{(2m_h^*)^{3/2}}{2\pi^2 \hbar^3} e^{(E_v - E_F)/k_B T} \int_{0}^{\infty} y^{1/2} e^{-y/k_B T} dy$

The integral is the same one we encountered before: $\int_{0}^{\infty} y^{1/2} e^{-y/k_B T} dy = (k_B T)^{3/2} \frac{\sqrt{\pi}}{2}$.
$p_v = \frac{(2m_h^*)^{3/2}}{2\pi^2 \hbar^3} e^{(E_v - E_F)/k_B T} (k_B T)^{3/2} \frac{\sqrt{\pi}}{2}$

Again, using $\hbar = h/2\pi$, so $\hbar^3 = h^3 / (8\pi^3)$:
$p_v = \frac{(2m_h^*)^{3/2} \sqrt{\pi}}{4\pi^2} \frac{8\pi^3}{h^3} e^{(E_v - E_F)/k_B T} (k_B T)^{3/2}$
$p_v = \frac{2\pi^{3/2} (2m_h^*)^{3/2}}{h^3} (k_B T)^{3/2} e^{(E_v - E_F)/k_B T}$

Let's define the effective density of states in the valence band, $N_v$:
$N_v = 2 \left(\frac{2\pi m_h^* k_B T}{h^2}\right)^{3/2}$

Then, the hole density can be written as:
$p_v = N_v e^{-(E_F - E_v)/k_B T}$

Notice the sign convention: $(E_v - E_F)$ is a negative quantity since $E_v > E_F$. So we write it as $-(E_F - E_v)$ in the exponent, and $(E_F - E_v)$ is positive.

**What this means:** The hole density in the valence band increases exponentially with temperature and depends on the effective mass of holes and the density of states. This is quite analogous to the electron density.

### Connection to Course Outcomes

*   **CO1 (Fundamentals of Semiconductor Physics):** These derivations are the core of understanding how charge carriers are generated and quantified in intrinsic semiconductors. We've used concepts like energy bands, band gaps, effective mass, Fermi-Dirac statistics, and the Maxwell-Boltzmann approximation.
*   **CO2 (Behaviour in Devices):** Knowing $n_c$ and $p_v$ is essential. For example, in an intrinsic semiconductor, the number of electrons in the conduction band must equal the number of holes in the valence band ($n_c = p_v = n_i$, the intrinsic carrier concentration). The formulas derived allow us to calculate $n_i$ and see how it varies with temperature. When impurities (dopants) are added (extrinsic semiconductors), one of these densities becomes dominant, and these formulas, with appropriate adjustments for the Fermi level, predict the conductivity of the material. This is critical for device operation.

### Summary and Key Points to Remember

1.  **Electron Density ($n_c$):** Derived by integrating the density of states in the conduction band, $g_c(E)$, with the probability of electron occupation, $f(E)$.
    *   $g_c(E) \propto (E-E_c)^{1/2}$
    *   $f(E) \approx e^{-(E-E_F)/k_B T}$ (Maxwell-Boltzmann approximation)
    *   **Formula:** $n_c = N_c e^{-(E_c-E_F)/k_B T}$, where $N_c = 2 \left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2}$.
2.  **Hole Density ($p_v$):** Derived by integrating the density of states in the valence band, $g_v(E)$, with the probability of state *unoccupation*, $1-f(E)$.
    *   $g_v(E) \propto (E_v-E)^{1/2}$
    *   $1-f(E) \approx e^{(E-E_F)/k_B T}$ (Maxwell-Boltzmann approximation for holes)
    *   **Formula:** $p_v = N_v e^{-(E_F-E_v)/k_B T}$, where $N_v = 2 \left(\frac{2\pi m_h^* k_B T}{h^2}\right)^{3/2}$.
3.  **Effective Mass ($m^*$):** Crucial parameter reflecting electron/hole movement in a crystal lattice. Different from free electron mass.
4.  **Fermi Level ($E_F$):** A conceptual energy level that dictates the distribution of electrons. Its position determines whether a material is intrinsic, n-type, or p-type.
5.  **Temperature Dependence:** Both $n_c$ and $p_v$ increase exponentially with temperature because more thermal energy is available to excite electrons across the band gap. $N_c$ and $N_v$ also increase with $T^{3/2}$.
6.  **Maxwell-Boltzmann Approximation:** Valid when the Fermi level is far from the band edges (typically in the band gap), which is common for semiconductors.

These formulas are the quantitative tools we use to predict the electrical behavior of semiconductors. They are fundamental to all semiconductor device analysis.

***

### Sample Questions and Answers

**Q1. Explain why the Maxwell-Boltzmann approximation is valid for calculating electron and hole densities in the conduction and valence bands of a typical semiconductor.**

**Answer:**
The Maxwell-Boltzmann approximation for the Fermi-Dirac distribution $f(E)$ is $e^{-(E-E_F)/k_B T}$. This approximation is derived from $f(E) = \frac{1}{1 + e^{(E - E_F)/k_B T}}$ by neglecting the '1' in the denominator when the exponential term is large.
*   **For electrons in the conduction band:** We consider energies $E \ge E_c$. In semiconductors, the Fermi level $E_F$ is typically located within the band gap, well below $E_c$. Thus, $E-E_F$ is significantly greater than $k_B T$, making $e^{(E-E_F)/k_B T}$ very large, so the '1' is negligible.
*   **For holes in the valence band:** We consider the probability of states being unoccupied, $1-f(E)$. This is approximately $e^{(E-E_F)/k_B T}$. Here, we consider energies $E \le E_v$. Since $E_F$ is below $E_v$, $E-E_F$ is a large negative value. This makes $e^{(E-E_F)/k_B T}$ very small, so $1+e^{(E-E_F)/k_B T} \approx 1$.
Therefore, in both cases, the Maxwell-Boltzmann approximation provides a good estimate for the carrier distributions.

**Q2. Derive the expression for the effective density of states in the conduction band, $N_c$. What factors influence its value?**

**Answer:**
The electron density in the conduction band ($n_c$) is given by integrating the density of states $g_c(E)$ over the conduction band energy range ($E_c$ to $\infty$), multiplied by the Fermi-Dirac distribution function $f(E)$, using the Maxwell-Boltzmann approximation:
$n_c = \int_{E_c}^{\infty} g_c(E) f(E) dE$

The density of states for electrons in the conduction band, assuming parabolic bands, is $g_c(E) = \frac{(2m_e^*)^{3/2}}{2\pi^2 \hbar^3} (E-E_c)^{1/2}$.
Using the Maxwell-Boltzmann approximation $f(E) \approx e^{-(E-E_F)/k_B T}$:
$n_c = \frac{(2m_e^*)^{3/2}}{2\pi^2 \hbar^3} \int_{E_c}^{\infty} (E-E_c)^{1/2} e^{-(E-E_F)/k_B T} dE$

Let $u = E-E_c$. The integral becomes $\int_{0}^{\infty} u^{1/2} e^{-(u + E_c - E_F)/k_B T} du = e^{-(E_c-E_F)/k_B T} \int_{0}^{\infty} u^{1/2} e^{-u/k_B T} du$.
The integral evaluates to $(k_B T)^{3/2} \frac{\sqrt{\pi}}{2}$.

Substituting back and simplifying, using $h=2\pi\hbar$:
$n_c = \frac{(2m_e^*)^{3/2}}{2\pi^2 (h/2\pi)^3} e^{-(E_c-E_F)/k_B T} (k_B T)^{3/2} \frac{\sqrt{\pi}}{2}$
$n_c = \frac{(2m_e^*)^{3/2} 8\pi^3}{2\pi^2 h^3} e^{-(E_c-E_F)/k_B T} (k_B T)^{3/2} \frac{\sqrt{\pi}}{2}$
$n_c = 2 \left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2} e^{-(E_c-E_F)/k_B T}$

Thus, the effective density of states in the conduction band is:
$N_c = 2 \left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2}$

**Factors influencing $N_c$:**
*   **Effective mass of electrons ($m_e^*$):** A larger effective mass leads to a larger $N_c$, meaning more available states.
*   **Temperature ($T$):** $N_c$ increases proportionally to $T^{3/2}$. Higher temperatures mean more thermal vibrations and potentially a more spread-out density of states or simply more available states in a broader energetic sense, making more states accessible.
*   **Planck's Constant ($h$):** A fundamental constant.

**Q3. For an intrinsic semiconductor, prove that $n_c = p_v = n_i$. What is the relationship between the Fermi level and the band edges in this case?**

**Answer:**
For an intrinsic semiconductor, the number of electrons excited into the conduction band equals the number of holes left behind in the valence band. Thus, $n_c = p_v$. Let this intrinsic carrier concentration be $n_i$.
$n_i = N_c e^{-(E_c-E_F)/k_B T}$
$n_i = N_v e^{-(E_F-E_v)/k_B T}$

Equating these two expressions:
$N_c e^{-(E_c-E_F)/k_B T} = N_v e^{-(E_F-E_v)/k_B T}$
$\frac{N_c}{N_v} = e^{(E_c-E_F)/k_B T} e^{-(E_F-E_v)/k_B T}$
$\frac{N_c}{N_v} = e^{(E_c - E_F - E_F + E_v)/k_B T}$
$\frac{N_c}{N_v} = e^{(E_c + E_v - 2E_F)/k_B T}$

Taking the natural logarithm of both sides:
$\ln\left(\frac{N_c}{N_v}\right) = \frac{E_c + E_v - 2E_F}{k_B T}$
$k_B T \ln\left(\frac{N_c}{N_v}\right) = E_c + E_v - 2E_F$
$2E_F = E_c + E_v - k_B T \ln\left(\frac{N_c}{N_v}\right)$
$E_F = \frac{E_c + E_v}{2} - \frac{k_B T}{2} \ln\left(\frac{N_c}{N_v}\right)$

**Relationship between $N_c$ and $N_v$:**
$N_c = 2 \left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2}$
$N_v = 2 \left(\frac{2\pi m_h^* k_B T}{h^2}\right)^{3/2}$
$\frac{N_c}{N_v} = \left(\frac{m_e^*}{m_h^*}\right)^{3/2}$

Substituting this back into the expression for $E_F$:
$E_F = \frac{E_c + E_v}{2} - \frac{k_B T}{2} \ln\left(\left(\frac{m_e^*}{m_h^*}\right)^{3/2}\right)$
$E_F = \frac{E_c + E_v}{2} - \frac{3k_B T}{4} \ln\left(\frac{m_e^*}{m_h^*}\right)$

*   **If $m_e^* = m_h^*$:** Then $\ln(1) = 0$, and $E_F = \frac{E_c + E_v}{2}$. The Fermi level lies exactly at the middle of the band gap.
*   **If $m_e^* \ne m_h^*$:** The Fermi level shifts slightly from the middle of the band gap, towards the band with the larger effective density of states.

**To prove $n_i^2 = n_c p_v$:**
$n_c p_v = \left[N_c e^{-(E_c-E_F)/k_B T}\right] \left[N_v e^{-(E_F-E_v)/k_B T}\right]$
$n_c p_v = N_c N_v e^{-(E_c-E_F)/k_B T - (E_F-E_v)/k_B T}$
$n_c p_v = N_c N_v e^{-(E_c - E_F + E_F - E_v)/k_B T}$
$n_c p_v = N_c N_v e^{-(E_c-E_v)/k_B T}$
$n_c p_v = N_c N_v e^{-E_g/k_B T}$ (where $E_g = E_c - E_v$)

Now let's look at $n_i^2$. Since $n_c=p_v=n_i$ in intrinsic semiconductors, $n_i^2 = n_c^2 = \left[N_c e^{-(E_c-E_F)/k_B T}\right]^2 = N_c^2 e^{-2(E_c-E_F)/k_B T}$. This isn't directly $n_c p_v$.
However, the product $n_c p_v$ is constant at a given temperature in any semiconductor (extrinsic or intrinsic), known as the mass action law. For intrinsic semiconductors, $n_c = p_v = n_i$, so $n_i^2 = n_c p_v$.
Thus, $n_i^2 = N_c N_v e^{-E_g/k_B T}$.
$n_i = \sqrt{N_c N_v} e^{-E_g/2k_B T}$
$n_i = \sqrt{[2 (\frac{2\pi m_e^* k_B T}{h^2})^{3/2}] [2 (\frac{2\pi m_h^* k_B T}{h^2})^{3/2}]} e^{-E_g/2k_B T}$
$n_i = 2 \left(\frac{2\pi k_B T}{h^2}\right)^{3/2} (m_e^* m_h^*)^{3/4} e^{-E_g/2k_B T}$

This shows how $n_i$ is derived and its strong temperature dependence.
