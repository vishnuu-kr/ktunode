---
title: "Temperature effects, temperature stress in composite bars"
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Concept of stress and strain – types"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e839ed"
status: "completed"
scrapedAt: "2026-05-20T17:46:12.536Z"
---
# MECHANICS OF SOLIDS - Module 1: Concept of Stress and Strain – Types

## Topic: Temperature Effects and Temperature Stress in Composite Bars

Welcome, everyone! Today, we’re diving into a fascinating aspect of how materials behave, something that’s absolutely crucial in real-world engineering applications: **Temperature Effects**. We've already built a strong foundation in understanding stress and strain, right? We know that when a force is applied to a material, it develops internal resisting forces (stress) and deformation (strain). But what happens when the environment itself changes temperature? This is where our topic today comes in.

As per our course outcome **CO1 (Recall the fundamental terms and theorems associated with mechanics of linear elastic deformable bodies)**, we need to remember that materials are not static. Their properties can change. And when we talk about temperature, we're talking about a very common environmental factor that can significantly influence a material's dimensions and, consequently, the stresses it experiences. Think about it: a bridge on a hot sunny day, or a railway track. They expand, don't they? This expansion, if restrained, can lead to substantial internal stresses.

### The Basics: Thermal Expansion and Thermal Strain

So, let's start with the fundamental concept: **thermal expansion**. Most solid materials expand when heated and contract when cooled. This is a direct consequence of the increased kinetic energy of the atoms within the material, causing them to vibrate more vigorously and move further apart.

We can quantify this expansion using the **coefficient of thermal expansion**, usually denoted by the Greek letter alpha ($\alpha$). This coefficient is a material property. For a given material, it tells us how much its length will change per unit length per degree Celsius (or Fahrenheit) change in temperature.

If a bar of original length $L_0$ is subjected to a temperature change of $\Delta T$, the change in length, $\Delta L$, due to this thermal expansion is given by:

$\Delta L = \alpha \cdot L_0 \cdot \Delta T$

This change in length, when divided by the original length, gives us the **thermal strain** ($\epsilon_T$):

$\epsilon_T = \frac{\Delta L}{L_0} = \alpha \cdot \Delta T$

This thermal strain is independent of the material's Young's modulus ($E$) at this stage. It's purely a kinematic effect – a change in dimension due to temperature. Remember this: **thermal strain is a strain that occurs without any direct mechanical load.**

**Think about this analogy:** Imagine a long string of beads. If you heat up the environment around them, each bead will jiggle more. If the beads are connected, and you try to keep the total length of the string the same, the connections will feel a push. Similarly, if the material is free to expand, it just changes length. If it's constrained, it develops stress. This is a key insight connecting back to **CO2 (Explain the behavior and response of various structural elements under various loading conditions)** – temperature is just another form of "loading" if it causes strain.

### Temperature Stress in a Single Bar (Uniaxial Case)

Now, what happens if this bar, which wants to expand or contract due to a temperature change, is *prevented* from doing so? This is where **temperature stress** comes into play.

Consider a bar fixed at both ends. If we heat it, it wants to expand. But the fixed supports won't allow this expansion. This creates a compressive force within the bar. Conversely, if we cool it, it wants to contract, but the fixed supports prevent this, leading to tensile forces.

This induced stress is called **temperature stress**. How do we calculate it? We can use our understanding of stress and strain from Hooke's Law.

If the bar is prevented from expanding by $\Delta L$, it effectively experiences a strain of $\epsilon_{imposed} = \frac{\Delta L}{L_0}$. However, the thermal expansion would have tried to create a strain of $\epsilon_T = \alpha \cdot \Delta T$. Since the total strain is zero (due to rigid supports), the mechanical strain must be equal and opposite to the thermal strain.

So, $\epsilon_{mechanical} = -\epsilon_T = -\alpha \cdot \Delta T$.

Using Hooke's Law, the stress ($\sigma$) is related to mechanical strain ($\epsilon_{mechanical}$) by $\sigma = E \cdot \epsilon_{mechanical}$.

Therefore, the temperature stress developed in the bar is:

$\sigma_T = E \cdot (-\alpha \cdot \Delta T) = -E \alpha \Delta T$

The negative sign indicates that if $\Delta T$ is positive (heating), the stress is compressive, and if $\Delta T$ is negative (cooling), the stress is tensile.

**Exam Tip:** Always pay attention to the sign of $\Delta T$ and what it means in terms of expansion or contraction, and thus compression or tension. Many students make mistakes here.

### Example: The Hot Railway Track

Let’s make this relatable. Imagine a steel railway track, say 100 meters long, laid on a cool morning ($\Delta T = 0^\circ$C). In the afternoon, the temperature rises by $40^\circ$C ($\Delta T = 40^\circ$C). Steel has a coefficient of thermal expansion of about $12 \times 10^{-6} \text{ /}^\circ$C and Young's Modulus of about $200 \text{ GPa}$ ($200 \times 10^9 \text{ N/m}^2$).

If the track were perfectly free to expand, its length increase would be:
$\Delta L = (12 \times 10^{-6} \text{ /}^\circ\text{C}) \times (100 \text{ m}) \times (40^\circ\text{C}) = 0.048 \text{ meters}$, or 4.8 cm.

However, real railway tracks are designed with small gaps or special expansion joints to allow for this expansion. But if we *hypothetically* assume the track is perfectly fixed at both ends (which is not realistic for a single long piece, but imagine a small section constrained), the stress would be:

$\sigma_T = - (200 \times 10^9 \text{ N/m}^2) \times (12 \times 10^{-6} \text{ /}^\circ\text{C}) \times (40^\circ\text{C})$
$\sigma_T = -96 \times 10^6 \text{ N/m}^2 = -96 \text{ MPa}$ (Compressive)

This is why buckling can occur if expansion is not managed! This relates to **CO6 (Analyse the given structural member to calculate the safe load or proportion the cross section to carry the load safely)** – understanding thermal expansion is part of safe design.

### Temperature Stress in Composite Bars

Now, let's move to our main focus for today: **Composite Bars**. What is a composite bar? It's simply a bar made up of two or more different materials, joined together, usually end-to-end or side-by-side. For this topic, we’ll focus on bars joined end-to-end, forming a single unit that will be subjected to a temperature change.

Imagine a bar composed of two different materials, say brass and steel, rigidly connected end-to-end. Let the first material have properties $\alpha_1, E_1$ and length $L_1$, and the second material have properties $\alpha_2, E_2$ and length $L_2$. The total original length is $L_0 = L_1 + L_2$.

When the temperature changes by $\Delta T$, each material will try to expand or contract according to its own coefficient of thermal expansion.
The free expansion of material 1 would be $\Delta L_1 = \alpha_1 L_1 \Delta T$.
The free expansion of material 2 would be $\Delta L_2 = \alpha_2 L_2 \Delta T$.

**Here’s the critical point:** Because the two materials are rigidly connected, they *must* undergo the same *total* change in length. If $\alpha_1 \neq \alpha_2$, then $\Delta L_1 \neq \Delta L_2$. This incompatibility in desired expansion or contraction will lead to internal stresses.

Let's assume, for simplicity, that the bars are joined such that their initial lengths are equal, $L_1 = L_2 = L$. The total length is $2L$.

If $\alpha_1 > \alpha_2$ (Material 1 expands more than Material 2), then Material 1 will try to stretch further than Material 2. Since they are joined, Material 1 will be restrained by Material 2, resulting in a tensile stress in Material 2 and a compressive stress in Material 1.

We need to find the stresses developed in each bar. Let $\sigma_1$ and $\sigma_2$ be the stresses developed in material 1 and material 2, respectively.
The corresponding strains are $\epsilon_1 = \sigma_1 / E_1$ and $\epsilon_2 = \sigma_2 / E_2$.

The total change in length of the composite bar is the sum of the changes in length of each constituent bar, taking into account both thermal expansion and the strain due to stress.

Total change in length for bar 1 = Free thermal expansion + Mechanical strain
$\Delta L_{total, 1} = \alpha_1 L_1 \Delta T + \epsilon_1 L_1 = \alpha_1 L_1 \Delta T + (\sigma_1 / E_1) L_1$

Total change in length for bar 2 = Free thermal expansion + Mechanical strain
$\Delta L_{total, 2} = \alpha_2 L_2 \Delta T + \epsilon_2 L_2 = \alpha_2 L_2 \Delta T + (\sigma_2 / E_2) L_2$

Since the bars are rigidly joined, their total changes in length must be equal:
$\Delta L_{total, 1} = \Delta L_{total, 2}$

This gives us our first equation:
$\alpha_1 L_1 \Delta T + \frac{\sigma_1 L_1}{E_1} = \alpha_2 L_2 \Delta T + \frac{\sigma_2 L_2}{E_2}$

**Now, we need another equation to solve for two unknowns ($\sigma_1$ and $\sigma_2$).** What else do we know? If the composite bar is subjected to an *external* axial force $P$, then the total force acting on the cross-sections must be $P$. However, in the case of *purely* temperature effects (no external force applied), the forces developed in each bar must balance each other out to maintain equilibrium.

Consider the cross-sectional areas $A_1$ and $A_2$. The force in bar 1 is $F_1 = \sigma_1 A_1$ and in bar 2 is $F_2 = \sigma_2 A_2$. For equilibrium in a composite bar subjected only to temperature change:

$F_1 + F_2 = 0$ (assuming forces are internal, tending to pull or push the joints)
Or, if we consider the forces exerted by one bar on the other at the interface, they must be equal and opposite.
Let's say bar 1 is under tension and bar 2 is under compression.
Then $\sigma_1 A_1 = -\sigma_2 A_2$. This gives us our second equation.

$\sigma_1 A_1 + \sigma_2 A_2 = 0$

Now we have a system of two linear equations with two unknowns ($\sigma_1, \sigma_2$):

1. $\alpha_1 L_1 \Delta T + \frac{\sigma_1 L_1}{E_1} = \alpha_2 L_2 \Delta T + \frac{\sigma_2 L_2}{E_2}$
2. $\sigma_1 A_1 + \sigma_2 A_2 = 0$

From equation (2), we can express $\sigma_2$ in terms of $\sigma_1$:
$\sigma_2 = -\frac{\sigma_1 A_1}{A_2}$

Substitute this into equation (1):
$\alpha_1 L_1 \Delta T + \frac{\sigma_1 L_1}{E_1} = \alpha_2 L_2 \Delta T + \frac{1}{E_2} \left(-\frac{\sigma_1 A_1}{A_2}\right) L_2$

Rearranging to solve for $\sigma_1$:
$\sigma_1 \left(\frac{L_1}{E_1} + \frac{A_1 L_2}{A_2 E_2}\right) = (\alpha_2 L_2 - \alpha_1 L_1) \Delta T$

$\sigma_1 \left(\frac{L_1}{E_1} + \frac{A_1 L_2}{A_2 E_2}\right) = (L_2 \alpha_2 - L_1 \alpha_1) \Delta T$

This looks a bit complex. Let's simplify by considering the case where the lengths are equal ($L_1 = L_2 = L$):

$\sigma_1 \left(\frac{L}{E_1} + \frac{A_1 L}{A_2 E_2}\right) = L (\alpha_2 - \alpha_1) \Delta T$

We can divide by $L$:

$\sigma_1 \left(\frac{1}{E_1} + \frac{A_1}{A_2 E_2}\right) = (\alpha_2 - \alpha_1) \Delta T$

$\sigma_1 \left(\frac{A_2 E_2 + A_1 E_1}{A_2 E_2 E_1}\right) = (\alpha_2 - \alpha_1) \Delta T$

$\sigma_1 = \frac{(\alpha_2 - \alpha_1) \Delta T \cdot A_2 E_2 E_1}{A_2 E_2 + A_1 E_1}$

Once $\sigma_1$ is found, $\sigma_2$ can be found from $\sigma_2 = -\frac{\sigma_1 A_1}{A_2}$.

**This is a fundamental result that connects the material properties, geometry, and temperature change to the developed stresses.** It directly addresses **CO3 (Apply the principles of solid mechanics to calculate internal stresses/strains...)** by requiring us to apply Hooke's law and equilibrium conditions.

**Relating to Textbooks:** Our text by Shah and Junnarkar (32nd Ed.) and Bansal (6th Ed.) would present these derivations clearly, often using a more generalized approach that includes external loads, but the core principle of equal total deformation remains the same. Punmia et al. (Revised Ed.) would also cover this systematically.

**What if the lengths are different?** The equations still hold, but we use the actual lengths $L_1$ and $L_2$. The logic is that the total expansion/contraction of the composite body is dictated by the average or weighted average behavior, and the internal stresses arise to reconcile the differing expansion tendencies of the constituent materials.

### Example: Brass and Steel Rod

Let's try a numerical example. Consider a composite rod made of a steel core and a brass sleeve, both of length 150 mm.
Steel (Material 1): $E_1 = 200 \text{ GPa} = 200 \times 10^3 \text{ N/mm}^2$, $\alpha_1 = 12 \times 10^{-6} \text{ /}^\circ\text{C}$
Brass (Material 2): $E_2 = 100 \text{ GPa} = 100 \times 10^3 \text{ N/mm}^2$, $\alpha_2 = 19 \times 10^{-6} \text{ /}^\circ\text{C}$

Let the cross-sectional area of steel be $A_1 = 100 \text{ mm}^2$ and the cross-sectional area of brass be $A_2 = 150 \text{ mm}^2$.
The temperature increases by $\Delta T = 50^\circ$C.

Since $\alpha_2 > \alpha_1$, brass wants to expand more than steel. So, brass will be in tension, and steel will be in compression.

Using the simplified equations for equal lengths $L_1 = L_2 = L = 150 \text{ mm}$:

$\sigma_1 \left(\frac{1}{E_1} + \frac{A_1}{A_2 E_2}\right) = (\alpha_2 - \alpha_1) \Delta T$

Substitute values:
$\frac{1}{E_1} = \frac{1}{200 \times 10^3 \text{ N/mm}^2}$
$\frac{A_1}{A_2 E_2} = \frac{100 \text{ mm}^2}{(150 \text{ mm}^2)(100 \times 10^3 \text{ N/mm}^2)}$

$\sigma_1 \left(\frac{1}{200 \times 10^3} + \frac{100}{150 \times 100 \times 10^3}\right) = (19 \times 10^{-6} - 12 \times 10^{-6}) \times 50$

$\sigma_1 \left(\frac{1}{200 \times 10^3} + \frac{1}{150 \times 10^3}\right) = (7 \times 10^{-6}) \times 50$

$\sigma_1 \left(\frac{150 \times 10^3 + 200 \times 10^3}{200 \times 10^3 \times 150 \times 10^3}\right) = 350 \times 10^{-6}$

$\sigma_1 \left(\frac{350 \times 10^3}{30000 \times 10^6}\right) = 350 \times 10^{-6}$

$\sigma_1 \left(\frac{350}{30 \times 10^6}\right) = 350 \times 10^{-6}$

$\sigma_1 = \frac{350 \times 10^{-6} \times 30 \times 10^6}{350} = 30 \text{ N/mm}^2 = 30 \text{ MPa}$

Since $\sigma_1$ is positive, our assumption that steel is in compression (negative stress) was wrong with this formulation. Let's re-check the equation for $\sigma_1$:

$\sigma_1 = \frac{(\alpha_2 - \alpha_1) \Delta T \cdot A_2 E_2 E_1}{A_2 E_2 + A_1 E_1}$ is for $\sigma_1$ when $L_1=L_2$.
Here $\alpha_2 > \alpha_1$, so $\alpha_2 - \alpha_1$ is positive. $\Delta T$ is positive. So $\sigma_1$ will be positive.
$\sigma_1 = \frac{(19 \times 10^{-6} - 12 \times 10^{-6}) \times 50 \times (150 \times 10^3) \times (200 \times 10^3) \times 200 \times 10^3}{(150 \times 10^3)(200 \times 10^3) + (100 \times 10^3)(100 \times 10^3)}$

Let's use the other formulation directly:
$\sigma_1 \left(\frac{1}{E_1} + \frac{A_1}{A_2 E_2}\right) = (\alpha_2 - \alpha_1) \Delta T$

$\sigma_1 \left(\frac{1}{200 \times 10^3} + \frac{100}{150 \times 100 \times 10^3}\right) = (19 \times 10^{-6} - 12 \times 10^{-6}) \times 50$

$\sigma_1 \left(\frac{1}{200 \times 10^3} + \frac{1}{150 \times 10^3}\right) = 7 \times 10^{-6} \times 50 = 350 \times 10^{-6}$

$\sigma_1 \left(\frac{3 + 4}{600 \times 10^3}\right) = 350 \times 10^{-6}$

$\sigma_1 \left(\frac{7}{600 \times 10^3}\right) = 350 \times 10^{-6}$

$\sigma_1 = \frac{350 \times 10^{-6} \times 600 \times 10^3}{7} = \frac{350 \times 0.6}{7} = \frac{210}{7} = 30 \text{ N/mm}^2 = 30 \text{ MPa}$

This result $\sigma_1 = 30 \text{ MPa}$ is positive. What does it mean? Let's revisit our equilibrium equation: $\sigma_1 A_1 + \sigma_2 A_2 = 0$.
If $\sigma_1 = +30 \text{ MPa}$ (Tensile in steel):
$(30 \text{ N/mm}^2) \times (100 \text{ mm}^2) + \sigma_2 \times (150 \text{ mm}^2) = 0$
$3000 \text{ N} + \sigma_2 \times 150 \text{ mm}^2 = 0$
$\sigma_2 = -\frac{3000}{150} = -20 \text{ N/mm}^2 = -20 \text{ MPa}$ (Compressive in brass)

This means steel is in tension and brass is in compression. Let's check the initial logic. $\alpha_2 > \alpha_1$. Brass wants to expand more. So brass should be in tension, and steel in compression. My previous assumption was correct.

Let's re-evaluate my derivation for $\sigma_1$. The equation $\alpha_1 L_1 \Delta T + (\sigma_1 / E_1) L_1 = \alpha_2 L_2 \Delta T + (\sigma_2 / E_2) L_2$ is correct.
And $\sigma_1 A_1 + \sigma_2 A_2 = 0$.
Substituting $\sigma_2 = -\sigma_1 A_1 / A_2$:
$\alpha_1 L_1 \Delta T + \frac{\sigma_1 L_1}{E_1} = \alpha_2 L_2 \Delta T - \frac{\sigma_1 A_1 L_2}{A_2 E_2}$

$\sigma_1 \left(\frac{L_1}{E_1} + \frac{A_1 L_2}{A_2 E_2}\right) = (\alpha_2 L_2 - \alpha_1 L_1) \Delta T$

For $L_1=L_2=L$:
$\sigma_1 \left(\frac{L}{E_1} + \frac{A_1 L}{A_2 E_2}\right) = (\alpha_2 - \alpha_1) L \Delta T$

Dividing by $L$:
$\sigma_1 \left(\frac{1}{E_1} + \frac{A_1}{A_2 E_2}\right) = (\alpha_2 - \alpha_1) \Delta T$

Let's check the calculation:
$E_1 = 200 \times 10^3$, $A_1 = 100$, $\alpha_1 = 12 \times 10^{-6}$
$E_2 = 100 \times 10^3$, $A_2 = 150$, $\alpha_2 = 19 \times 10^{-6}$
$\Delta T = 50$

$\alpha_2 - \alpha_1 = 7 \times 10^{-6}$
$(\alpha_2 - \alpha_1) \Delta T = 7 \times 10^{-6} \times 50 = 350 \times 10^{-6}$

$\frac{1}{E_1} = \frac{1}{200 \times 10^3} = 0.000005$
$\frac{A_1}{A_2 E_2} = \frac{100}{150 \times 100 \times 10^3} = \frac{1}{150 \times 10^3} = 0.000006667$

$\frac{1}{E_1} + \frac{A_1}{A_2 E_2} = 0.000005 + 0.000006667 = 0.000011667$

$\sigma_1 (0.000011667) = 350 \times 10^{-6}$
$\sigma_1 = \frac{350 \times 10^{-6}}{0.000011667} = \frac{350 \times 10^{-6}}{1.1667 \times 10^{-5}} \approx 30 \text{ N/mm}^2$

Okay, the calculation is consistent. My interpretation of what the positive sign for $\sigma_1$ means must be aligned with how I've defined $\sigma_1$ and $\sigma_2$ in the equilibrium equation.

Let's assume that $\sigma_1$ is the stress in steel and $\sigma_2$ is the stress in brass.
If $\alpha_2 > \alpha_1$, brass wants to expand more. It will be in tension. Steel will be in compression.
So, we expect $\sigma_2 > 0$ and $\sigma_1 < 0$.

The equilibrium equation is $\sigma_1 A_1 + \sigma_2 A_2 = 0$. This implies that if $\sigma_1$ is negative (compression), $\sigma_2$ must be positive (tension), which matches our expectation.

Let's solve for $\sigma_1$ from the strain compatibility equation using this understanding:
$\epsilon_{total,1} = \epsilon_{total,2}$
$\alpha_1 \Delta T + \epsilon_1 = \alpha_2 \Delta T + \epsilon_2$
$\epsilon_1 = \sigma_1 / E_1$, $\epsilon_2 = \sigma_2 / E_2$.
$\alpha_1 \Delta T + \sigma_1/E_1 = \alpha_2 \Delta T + \sigma_2/E_2$

Using $\sigma_2 = -\sigma_1 A_1 / A_2$:
$\alpha_1 \Delta T + \sigma_1/E_1 = \alpha_2 \Delta T - (\sigma_1 A_1 / A_2) / E_2$
$\alpha_1 \Delta T + \sigma_1/E_1 = \alpha_2 \Delta T - \sigma_1 A_1 / (A_2 E_2)$

Rearranging for $\sigma_1$:
$\sigma_1/E_1 + \sigma_1 A_1 / (A_2 E_2) = (\alpha_2 - \alpha_1) \Delta T$
$\sigma_1 \left(\frac{1}{E_1} + \frac{A_1}{A_2 E_2}\right) = (\alpha_2 - \alpha_1) \Delta T$

This is the exact same equation I had. Let's carefully check the substitution of numerical values.
$\sigma_1 (0.000011667) = 350 \times 10^{-6}$
$\sigma_1 = 30 \text{ N/mm}^2 = 30 \text{ MPa}$.

The positive value for $\sigma_1$ here means that the stress in steel is tensile, and the stress in brass ($\sigma_2$) would be compressive.
This contradicts our initial physical reasoning that $\alpha_2 > \alpha_1$ means brass should be in tension and steel in compression.

**Where is the discrepancy?** The equation $\sigma_1 \left(\frac{1}{E_1} + \frac{A_1}{A_2 E_2}\right) = (\alpha_2 - \alpha_1) \Delta T$ correctly solves for $\sigma_1$ *if* $E_1$ and $E_2$ are Young's moduli and $\sigma_1, \sigma_2$ are the corresponding stresses. The signs of the stresses will naturally come out.

Let's consider the *total* change in length for each material.
$\delta_1 = L_1(\alpha_1 \Delta T + \sigma_1/E_1)$
$\delta_2 = L_2(\alpha_2 \Delta T + \sigma_2/E_2)$
And $\delta_1 = \delta_2$.
Also, $\sigma_1 A_1 + \sigma_2 A_2 = 0$.

Let $\delta$ be the total change in length.
$\frac{\delta}{L_1} = \alpha_1 \Delta T + \frac{\sigma_1}{E_1}$
$\frac{\delta}{L_2} = \alpha_2 \Delta T + \frac{\sigma_2}{E_2}$

From $\sigma_2 = -\sigma_1 A_1/A_2$:
$\frac{\delta}{L_2} = \alpha_2 \Delta T - \frac{\sigma_1 A_1}{A_2 E_2}$

From the first equation, $\sigma_1 = E_1 (\frac{\delta}{L_1} - \alpha_1 \Delta T)$.
Substitute into the second:
$\frac{\delta}{L_2} = \alpha_2 \Delta T - \frac{E_1 (\frac{\delta}{L_1} - \alpha_1 \Delta T) A_1}{A_2 E_2}$
$\frac{\delta}{L_2} = \alpha_2 \Delta T - \frac{E_1 A_1}{A_2 E_2} \frac{\delta}{L_1} + \frac{E_1 A_1 \alpha_1 \Delta T}{A_2 E_2}$

Gather terms with $\delta$:
$\delta \left(\frac{1}{L_2} + \frac{E_1 A_1}{A_2 E_2 L_1}\right) = \Delta T \left(\alpha_2 + \frac{E_1 A_1 \alpha_1}{A_2 E_2}\right)$

Let's test with $L_1 = L_2 = L$:
$\delta \left(\frac{1}{L} + \frac{E_1 A_1}{A_2 E_2 L}\right) = \Delta T \left(\alpha_2 + \frac{E_1 A_1 \alpha_1}{A_2 E_2}\right)$
$\frac{\delta}{L} \left(1 + \frac{E_1 A_1}{A_2 E_2}\right) = \Delta T \left(\alpha_2 + \frac{E_1 A_1 \alpha_1}{A_2 E_2}\right)$
$\frac{\delta}{L} \left(\frac{A_2 E_2 + E_1 A_1}{A_2 E_2}\right) = \Delta T \left(\frac{\alpha_2 A_2 E_2 + E_1 A_1 \alpha_1}{A_2 E_2}\right)$
$\frac{\delta}{L} = \Delta T \frac{\alpha_2 A_2 E_2 + \alpha_1 A_1 E_1}{A_2 E_2 + A_1 E_1}$

This gives us the total strain $\epsilon = \delta/L$.
Now we can find $\sigma_1$ and $\sigma_2$:
$\epsilon_1 = \epsilon - \alpha_1 \Delta T = \frac{\sigma_1}{E_1}$
$\sigma_1 = E_1 (\epsilon - \alpha_1 \Delta T) = E_1 \left(\Delta T \frac{\alpha_2 A_2 E_2 + \alpha_1 A_1 E_1}{A_2 E_2 + A_1 E_1} - \alpha_1 \Delta T\right)$
$\sigma_1 = E_1 \Delta T \left(\frac{\alpha_2 A_2 E_2 + \alpha_1 A_1 E_1 - \alpha_1 (A_2 E_2 + A_1 E_1)}{A_2 E_2 + A_1 E_1}\right)$
$\sigma_1 = E_1 \Delta T \left(\frac{\alpha_2 A_2 E_2 + \alpha_1 A_1 E_1 - \alpha_1 A_2 E_2 - \alpha_1 A_1 E_1}{A_2 E_2 + A_1 E_1}\right)$
$\sigma_1 = E_1 \Delta T \left(\frac{(\alpha_2 - \alpha_1) A_2 E_2}{A_2 E_2 + A_1 E_1}\right) = \frac{E_1 E_2 A_2 (\alpha_2 - \alpha_1) \Delta T}{A_1 E_1 + A_2 E_2}$

Let's plug numbers into THIS formula for $\sigma_1$:
$E_1 = 200 \times 10^3$, $A_1 = 100$, $\alpha_1 = 12 \times 10^{-6}$
$E_2 = 100 \times 10^3$, $A_2 = 150$, $\alpha_2 = 19 \times 10^{-6}$
$\Delta T = 50$
$\alpha_2 - \alpha_1 = 7 \times 10^{-6}$

$A_1 E_1 = 100 \times 200 \times 10^3 = 20 \times 10^6$
$A_2 E_2 = 150 \times 100 \times 10^3 = 15 \times 10^6$
$A_1 E_1 + A_2 E_2 = 35 \times 10^6$

$E_1 E_2 A_2 (\alpha_2 - \alpha_1) \Delta T = (200 \times 10^3) \times (100 \times 10^3) \times 150 \times (7 \times 10^{-6}) \times 50$
$= (2 \times 10^5) \times (1 \times 10^5) \times 150 \times 7 \times 10^{-6} \times 50$
$= (2 \times 10^{10}) \times 150 \times 7 \times 10^{-6} \times 50$
$= (2 \times 10^{10}) \times 1050 \times 10^{-6} \times 50$
$= 2 \times 10^{10} \times 52500 \times 10^{-6}$
$= 2 \times 10^{10} \times 5.25 \times 10^{-2}$
$= 10.5 \times 10^8 = 1.05 \times 10^9$

$\sigma_1 = \frac{1.05 \times 10^9}{35 \times 10^6} = \frac{1050 \times 10^6}{35 \times 10^6} = \frac{1050}{35} = 30 \text{ N/mm}^2 = 30 \text{ MPa}$.

This formula is correct, and it gives $\sigma_1 = 30$ MPa.
Now, let's find $\sigma_2$ using equilibrium: $\sigma_2 = -\sigma_1 A_1 / A_2$.
$\sigma_2 = -(30 \text{ MPa}) \times (100 \text{ mm}^2) / (150 \text{ mm}^2) = -30 \times (2/3) = -20 \text{ MPa}$.

So, steel (material 1) has a stress of $+30$ MPa (tensile), and brass (material 2) has a stress of $-20$ MPa (compressive).

This means my initial intuitive reasoning that brass (higher $\alpha$) will be in tension and steel (lower $\alpha$) in compression was INCORRECT for this specific formulation. The formulas derived are correct, but the sign interpretation is crucial.

**What does the sign of $\sigma_1$ indicate in this derivation?**
The derivation for $\sigma_1 = E_1 \Delta T \left(\frac{(\alpha_2 - \alpha_1) A_2 E_2}{A_2 E_2 + A_1 E_1}\right)$ means:
If $(\alpha_2 - \alpha_1)$ is positive (i.e., $\alpha_2 > \alpha_1$), then $\sigma_1$ is positive, meaning steel is in tension.
If $(\alpha_2 - \alpha_1)$ is negative (i.e., $\alpha_1 > \alpha_2$), then $\sigma_1$ is negative, meaning steel is in compression.

In our example, $\alpha_2 (19 \times 10^{-6}) > \alpha_1 (12 \times 10^{-6})$. So $\alpha_2 - \alpha_1$ is positive. Thus, $\sigma_1$ (stress in steel) is positive, meaning tensile stress in steel. And $\sigma_2$ (stress in brass) is compressive.

Let's check the total strain in each:
$\epsilon_{total} = \frac{\delta}{L} = \Delta T \frac{\alpha_2 A_2 E_2 + \alpha_1 A_1 E_1}{A_2 E_2 + A_1 E_1}$
$\epsilon_{total} = 50 \times \frac{(19 \times 10^{-6})(150 \times 10^3) + (12 \times 10^{-6})(100 \times 10^3)}{15 \times 10^6 + 20 \times 10^6}$
$\epsilon_{total} = 50 \times \frac{(2850 \times 10^{-3}) + (1200 \times 10^{-3})}{35 \times 10^6} = 50 \times \frac{4050 \times 10^{-3}}{35 \times 10^6} = 50 \times \frac{4.05}{35 \times 10^6}$
$\epsilon_{total} = 50 \times 115.7 \times 10^{-6} = 5785 \times 10^{-6} = 0.005785$

Strain in steel: $\epsilon_1 = \sigma_1/E_1 = 30 / (200 \times 10^3) = 0.00015$
Total strain for steel = $\alpha_1 \Delta T + \epsilon_1 = (12 \times 10^{-6}) \times 50 + 0.00015 = 600 \times 10^{-6} + 0.00015 = 0.0006 + 0.00015 = 0.00075$.
This is not matching $\epsilon_{total}$.

**Let's go back to the equations.**
$\epsilon_{total, 1} = \alpha_1 L_1 \Delta T + \frac{\sigma_1 L_1}{E_1}$ -- this is change in length, not strain.
The strain in bar 1 is $\epsilon_{total} = \alpha_1 \Delta T + \sigma_1/E_1$.
Similarly, $\epsilon_{total} = \alpha_2 \Delta T + \sigma_2/E_2$.

Using my calculated stresses:
For steel (1): $\epsilon_{total} = (12 \times 10^{-6}) \times 50 + 30 / (200 \times 10^3) = 600 \times 10^{-6} + 150 \times 10^{-6} = 750 \times 10^{-6} = 0.00075$.
For brass (2): $\epsilon_{total} = (19 \times 10^{-6}) \times 50 + (-20) / (100 \times 10^3) = 950 \times 10^{-6} - 200 \times 10^{-6} = 750 \times 10^{-6} = 0.00075$.

The strains match! So the stresses $\sigma_1 = +30$ MPa and $\sigma_2 = -20$ MPa are correct. Steel is in tension, brass is in compression. This occurs because the *combination* of material properties and geometry leads to this stress distribution to satisfy compatibility. Even though brass has a higher $\alpha$, the overall configuration forces it into compression to restrain the expansion of steel, which is also not fully expanding due to being restrained by brass. It's a bit counter-intuitive but mathematically sound.

**Key takeaway:** always use the derived formulas and interpret the signs carefully. The signs of stress indicate tension (+) or compression (-).

### Important Considerations for Composite Bars

1.  **Material Properties:** Ensure you have the correct $\alpha$ and $E$ for each material.
2.  **Geometry:** Correct lengths ($L_1, L_2$) and areas ($A_1, A_2$) are essential.
3.  **Temperature Change ($\Delta T$):** Correctly identify if it's heating or cooling.
4.  **Equilibrium:** The sum of forces in each section must be zero if no external load is applied.
5.  **Compatibility:** The total strain in each section must be the same.

**Connection to CO4 (Choose appropriate principles or formula...) and CO5 (Perform stress transformations...)**: While we are dealing with uniaxial stress here, the fundamental approach of using compatibility (equal strains) and equilibrium is the bedrock of solid mechanics. If this were a more complex 2D or 3D problem, we might need stress transformations, but the temperature effect itself is often introduced as a primary strain component.

### Non-Uniform Temperature Distribution

What if the temperature isn't uniform across the bar, or uniform through the thickness? For simplicity, our analysis assumed a uniform $\Delta T$. In reality, temperature gradients can lead to more complex stress distributions, often involving bending stresses if the temperature varies across the cross-section. This is a more advanced topic, but it's worth noting that uniform temperature change is an idealization.

### Summary and Key Reminders

*   **Thermal Strain:** $\epsilon_T = \alpha \Delta T$. This is the strain a material *wants* to undergo due to temperature change if unrestrained.
*   **Temperature Stress:** Develops when thermal strain is prevented by constraints. For a single bar fixed at both ends, $\sigma_T = -E \alpha \Delta T$.
*   **Composite Bars:** Different materials expand/contract differently. This incompatibility leads to stresses.
*   **Key Equations for Composite Bars (end-to-end, no external load):**
    *   Strain Compatibility: $\alpha_1 \Delta T + \sigma_1/E_1 = \alpha_2 \Delta T + \sigma_2/E_2$ (for equal lengths, strain in each is $\epsilon_{total}$)
    *   Equilibrium: $\sigma_1 A_1 + \sigma_2 A_2 = 0$
*   **Derived formula for stress in material 1 (e.g., steel) when $L_1=L_2=L$:**
    $\sigma_1 = \frac{E_1 E_2 A_2 (\alpha_2 - \alpha_1) \Delta T}{A_1 E_1 + A_2 E_2}$
    (And $\sigma_2 = -\sigma_1 A_1 / A_2$)
*   Remember to correctly identify the material assigned to index 1 and index 2 in the formula.

This topic bridges the gap between simple material behavior and the practicalities of engineering design where environmental factors play a crucial role.

---

### Sample Questions with Answers

**Q1. A steel rod and a copper rod of equal lengths and equal cross-sectional areas are joined end to end. If the temperature increases by $\Delta T$, what will be the ratio of stresses developed in the two rods?**

**Answer:**
Let steel be material 1 and copper be material 2.
Given: $L_1 = L_2 = L$, $A_1 = A_2 = A$.
We know that for a composite bar subjected to temperature change $\Delta T$, the stresses developed are governed by the equilibrium and compatibility equations.
From equilibrium, $\sigma_1 A_1 + \sigma_2 A_2 = 0$. Since $A_1 = A_2$, we have $\sigma_1 + \sigma_2 = 0$, which means $\sigma_2 = -\sigma_1$.
The ratio of stresses is $\sigma_1 / \sigma_2 = -1$.
This indicates that the stresses are equal in magnitude and opposite in direction, which makes sense if they have equal cross-sectional areas and no external load.

**Q2. A composite bar of length 150 mm consists of a steel core and a brass sleeve. If the temperature increases by $50^\circ$C, calculate the stress in the steel core and brass sleeve, given:
Steel: $E_1 = 200$ GPa, $\alpha_1 = 12 \times 10^{-6} /^\circ$C, $A_1 = 100$ mm$^2$
Brass: $E_2 = 100$ GPa, $\alpha_2 = 19 \times 10^{-6} /^\circ$C, $A_2 = 150$ mm$^2$.
(Assume equal lengths for steel and brass).**

**Answer:**
This is the same example we worked through. Let's recap the solution using the derived formula for $\sigma_1$:
$\sigma_1 = \frac{E_1 E_2 A_2 (\alpha_2 - \alpha_1) \Delta T}{A_1 E_1 + A_2 E_2}$

$E_1 = 200 \times 10^3 \text{ N/mm}^2$, $A_1 = 100 \text{ mm}^2$, $\alpha_1 = 12 \times 10^{-6} /^\circ$C
$E_2 = 100 \times 10^3 \text{ N/mm}^2$, $A_2 = 150 \text{ mm}^2$, $\alpha_2 = 19 \times 10^{-6} /^\circ$C
$\Delta T = 50^\circ$C

$A_1 E_1 = 100 \times 200 \times 10^3 = 20 \times 10^6 \text{ N}$
$A_2 E_2 = 150 \times 100 \times 10^3 = 15 \times 10^6 \text{ N}$
$A_1 E_1 + A_2 E_2 = 35 \times 10^6 \text{ N}$

$\alpha_2 - \alpha_1 = (19 - 12) \times 10^{-6} = 7 \times 10^{-6} /^\circ$C

$\sigma_1 = \frac{(200 \times 10^3)(100 \times 10^3)(150)(7 \times 10^{-6})(50)}{35 \times 10^6}$
$\sigma_1 = \frac{(2 \times 10^5)(1 \times 10^5)(150)(7 \times 10^{-6})(50)}{35 \times 10^6}$
$\sigma_1 = \frac{2 \times 10^{10} \times 150 \times 7 \times 10^{-6} \times 50}{35 \times 10^6}$
$\sigma_1 = \frac{10.5 \times 10^8}{35 \times 10^6} = \frac{1050}{35} = 30 \text{ N/mm}^2 = 30 \text{ MPa}$ (Tensile in steel)

Now, find $\sigma_2$ using $\sigma_1 A_1 + \sigma_2 A_2 = 0$:
$(30 \text{ N/mm}^2)(100 \text{ mm}^2) + \sigma_2 (150 \text{ mm}^2) = 0$
$3000 \text{ N} + \sigma_2 (150 \text{ mm}^2) = 0$
$\sigma_2 = -\frac{3000}{150} = -20 \text{ N/mm}^2 = -20 \text{ MPa}$ (Compressive in brass)

**Answer:** Stress in steel core is 30 MPa (tensile), and stress in brass sleeve is 20 MPa (compressive).

**Q3. Explain why a railway track is laid with gaps, and what would happen if these gaps were not present and the temperature increased significantly?**

**Answer:**
Railway tracks are typically made of steel, which expands when heated. If a long, continuous track were laid without any provision for expansion, the thermal expansion would be resisted by the supports (sleepers, ballast). This resistance would induce large compressive stresses in the track.
If the temperature increase is substantial, the induced compressive stress can exceed the buckling strength of the track, causing it to buckle or "kink" violently, which is extremely dangerous.
The gaps (expansion joints) are intentionally left in the track to allow for this thermal expansion, preventing the build-up of these immense compressive stresses. Without these gaps, the track would try to expand lengthwise, but since it cannot, it would buckle under the immense internal compressive forces. This demonstrates a practical application of temperature stress and the need for accommodating thermal deformation in engineering structures, linking to **CO2** and **CO6**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
