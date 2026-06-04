---
title: "Optical path"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 2: Interference and Diffraction"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e835b0"
status: "completed"
scrapedAt: "2026-05-20T17:39:55.729Z"
---
# Module 2: Interference and Diffraction - Optical Path

Welcome, everyone! Today, we're diving into a fundamental concept that underpins much of what we'll explore in interference and diffraction: the **Optical Path**. Think of it as the "effective distance" light travels, and it's crucial for understanding why light waves interfere the way they do.

You'll find this concept elaborated upon in your core textbooks, like Avadhanulu, Kshirsagar & Murthy's *A Textbook of Engineering Physics*, and Ghatak's *Optics*. They all emphasize that it's not just about physical distance, but how that distance is experienced by light.

## Why Do We Need the "Optical Path"?

We're studying interference and diffraction, right? What do these phenomena fundamentally rely on? They rely on the **superposition** of waves – specifically, how waves add up or cancel each other out. And for waves to add up constructively or destructively, they need to have a specific **phase relationship**. This phase relationship depends on how far they've traveled.

Now, light travels at a constant speed, 'c', in a vacuum. But what happens when light enters a different medium, like glass or water? It slows down. This slowing down is described by the **refractive index** ($n$) of the medium, where $n = \frac{c}{v}$, with $v$ being the speed of light in the medium.

When light travels through a medium with refractive index $n > 1$, it takes *longer* to cover the same physical distance compared to traveling through a vacuum. Since interference and diffraction depend on the *time* it takes for light to travel, or equivalently, the *phase accumulated*, we need a way to account for this slowing down. This is where the optical path comes in.

### Defining the Optical Path

The **optical path length (OPL)** between two points is defined as the product of the geometrical path length and the refractive index of the medium through which the light is traveling.

Mathematically, if light travels a geometrical path length $d$ through a medium with refractive index $n$, then:

$\text{Optical Path Length (OPL)} = n \times d$

**Analogy Time:** Imagine you have two friends, Alice and Bob, who need to get from Point A to Point B. Alice travels on a superhighway (like vacuum), and Bob travels on a slightly congested country road (like a medium with $n>1$). Even if the physical distance (geometrical path) is the same for both, Bob will take longer to reach Point B because his road is slower. The optical path length is like the "effective travel time" or "effective distance" that accounts for these speed differences.

**Why is this useful?** Because the **phase difference** between two waves is directly proportional to the *optical path difference* between them. If two waves travel through different media or different geometrical paths, their phase difference determines whether they interfere constructively or destructively.

**Connection to Course Outcomes:** This directly relates to **CO2: Describe the phenomena of interference and diffraction of light.** To understand *why* interference happens (constructive or destructive), we need to know the phase difference, and the phase difference is directly linked to the optical path difference.

## Optical Path Difference (OPD)

When we consider two light waves that start from the same source or are derived from a common source and travel along different paths before meeting again, we're interested in the difference in the optical paths they've traversed. This is the **Optical Path Difference (OPD)**.

If one wave travels an optical path $OPL_1 = n_1 d_1$ and another travels $OPL_2 = n_2 d_2$, then:

$\text{OPD} = OPL_1 - OPL_2 = n_1 d_1 - n_2 d_2$

**The Crucial Link: Phase Difference ($\Delta \phi$)**

Recall that a wave can be represented by something like $A \cos(\omega t - k x)$, where $k = \frac{2\pi}{\lambda}$ is the wave number and $\lambda$ is the wavelength in vacuum. The phase of the wave is $(\omega t - k x)$.

When light travels through a medium with refractive index $n$, its wavelength in that medium becomes $\lambda' = \frac{\lambda}{n}$, and its wave number becomes $k' = \frac{2\pi}{\lambda'} = \frac{2\pi}{(\lambda/n)} = n \frac{2\pi}{\lambda} = nk$.

So, if a wave travels a geometrical distance $d$ in a medium of refractive index $n$, its phase accumulated due to propagation is $k'd = (nk)d = n(kd)$. The term $kd$ is the phase accumulated in vacuum over distance $d$. The term $nkd$ is the phase accumulated in the medium over distance $d$.

Notice that $nkd = \frac{2\pi}{\lambda} (nd)$. The term $(nd)$ is precisely the optical path length. This means the phase difference accumulated due to propagation is directly proportional to the optical path length.

Specifically, if two waves have an optical path difference of OPD, their phase difference $\Delta \phi$ is given by:

$\Delta \phi = \frac{2\pi}{\lambda} \times \text{OPD}$

where $\lambda$ is the wavelength of light in vacuum.

**Remember this:** A path difference of $\lambda$ in vacuum corresponds to a phase difference of $2\pi$. Therefore, an optical path difference of $d_{opt}$ corresponds to a phase difference of $\frac{2\pi}{\lambda} d_{opt}$.

### Conditions for Interference

Now we can precisely state the conditions for constructive and destructive interference in terms of OPD:

*   **Constructive Interference:** Occurs when the phase difference is an even multiple of $\pi$ (i.e., $0, 2\pi, 4\pi, \dots$). This means the OPD must be an integer multiple of the wavelength ($\lambda$).
    $\text{OPD} = m\lambda$, where $m = 0, 1, 2, \dots$

*   **Destructive Interference:** Occurs when the phase difference is an odd multiple of $\pi$ (i.e., $\pi, 3\pi, 5\pi, \dots$). This means the OPD must be an odd multiple of half the wavelength.
    $\text{OPD} = (m + \frac{1}{2})\lambda$, where $m = 0, 1, 2, \dots$

**Exam Insight:** Understanding these conditions is paramount for solving problems related to interference. Make sure you can confidently connect phase difference to optical path difference and then to constructive/destructive interference. Many questions will ask you to find conditions for bright or dark fringes based on OPD.

## Optical Path in Different Scenarios

Let's look at how optical path plays out in common situations you'll encounter in interference experiments, often discussed in texts like Malik & Singh's *Engineering Physics*.

### 1. Thin Films (e.g., Soap Bubbles, Oil Slicks)

This is a classic example! When light reflects from the top and bottom surfaces of a thin film, these two reflected rays interfere.

Consider a thin film of uniform thickness $d$ and refractive index $n$, surrounded by air (refractive index approximately 1). Light enters the film.

*   **Ray 1:** Reflects from the top surface (air-film interface). If the light is traveling from a rarer medium (air) to a denser medium (film), there's a phase change of $\pi$ upon reflection.
*   **Ray 2:** Travels through the film, reflects from the bottom surface (film-air interface), and travels back out.
    *   The geometrical path traveled within the film is $2d$.
    *   The optical path traveled within the film is $n \times (2d) = 2nd$.
    *   At the film-air interface (denser to rarer), there is *no* phase change upon reflection.

**So, what's the OPD?**
The OPD between Ray 1 and Ray 2 is primarily due to the extra distance Ray 2 travels inside the film. However, we also need to account for the phase change.

If Ray 1 undergoes a $\pi$ phase change and Ray 2 does not, this is equivalent to an additional optical path difference of $\frac{\lambda}{2}$.

Therefore, the total OPD is:
$\text{OPD} = 2nd + \frac{\lambda}{2}$ (if one reflection has $\pi$ phase change and the other doesn't)

The $\frac{\lambda}{2}$ term arises because a $\pi$ phase change is equivalent to adding or subtracting half a wavelength to the path.

**Conditions for Interference in Thin Films:**

*   **Constructive Interference (Bright Fringe):**
    $2nd + \frac{\lambda}{2} = m\lambda \implies 2nd = (m - \frac{1}{2})\lambda \implies 2nd = (m' + \frac{1}{2})\lambda$, where $m' = m-1$ and $m'$ is an integer.
    So, $2nd = (\text{integer} + \frac{1}{2})\lambda$

*   **Destructive Interference (Dark Fringe):**
    $2nd + \frac{\lambda}{2} = (m + \frac{1}{2})\lambda \implies 2nd = m\lambda$

**Real-World Example:** Think about the iridescent colors you see on a soap bubble or an oil slick on water. These colors are due to the interference of white light reflecting off the thin film. Different wavelengths (colors) interfere constructively or destructively at different film thicknesses and angles of incidence, producing the vibrant spectrum of colors. As the bubble thins or the oil spreads, the thickness changes, and so do the colors you see!

### 2. Wedge Film

A wedge film is formed when two nearly parallel, clean glass plates are placed with their edges touching, forming a small angle between them. This creates a thin wedge of air.

When monochromatic light is shone on this wedge, interference fringes are observed. The thickness $d$ of the air gap varies linearly with position. If the angle between the plates is $\alpha$, and we observe at a distance $x$ from the edge where they touch, the thickness $d \approx x \tan(\alpha)$. For small angles, $\tan(\alpha) \approx \alpha$ (in radians), so $d \approx x\alpha$.

The OPD for light reflected from the surfaces of the wedge (assuming similar phase change conditions as above) will be:

$\text{OPD} = 2nd + \frac{\lambda}{2}$

*   **Bright Fringes:** $2nd = (m + \frac{1}{2})\lambda \implies 2nx\alpha = (m + \frac{1}{2})\lambda$
*   **Dark Fringes:** $2nd = m\lambda \implies 2nx\alpha = m\lambda$

You'll see equally spaced fringes in a wedge film experiment, which is a direct consequence of the linear variation of thickness.

### 3. Newton's Rings

Newton's rings are formed by placing a plano-convex lens on a flat glass plate. The air gap between the lens and the plate forms a thin film whose thickness varies radially, being zero at the point of contact and increasing outwards.

The OPD for light reflected from the surfaces is approximately $2nt$, where $t$ is the thickness of the air gap. For light incident normally, $t$ can be related to the radius of curvature of the lens ($R$) and the radius ($r$) of a particular ring.

$\text{OPD} = 2nt$ (ignoring phase change for now to simplify the point)

*   **Bright Rings:** $2nt = (m + \frac{1}{2})\lambda$
*   **Dark Rings:** $2nt = m\lambda$

The radii of the rings depend on these conditions. For example, dark rings occur when $2nt = m\lambda$. The thickness $t$ at a radius $r$ is given by $t \approx \frac{r^2}{2R}$ (for a large radius of curvature $R$).

So, for dark rings: $2n \frac{r^2}{2R} = m\lambda \implies r^2 = \frac{m\lambda R}{n}$. This shows that the radii of dark rings are proportional to the square root of an integer, leading to the characteristic spacing of Newton's rings.

**Connection to Course Outcomes:** These examples demonstrate **CO2: Describe the phenomena of interference and diffraction of light.** By understanding optical path, we can predict the conditions for bright and dark fringes in various setups, which is the core of understanding interference patterns.

## Optical Path and Refraction

Let's reinforce the idea that optical path accounts for changes in speed due to refraction.

Imagine light traveling from point A in vacuum to point B in vacuum, a distance $d$. The time taken is $t_{vac} = d/c$. The phase accumulated is $\phi_{vac} = \omega t_{vac} = \omega (d/c) = k d$, where $k = \omega/c = 2\pi/\lambda$.

Now, imagine point A is in vacuum and point B is in a medium of refractive index $n$, still separated by a geometrical distance $d$. The time taken to travel this distance $d$ in the medium is $t_{med} = d/v = d/(c/n) = nd/c$.

The phase accumulated in the medium is $\phi_{med} = \omega t_{med} = \omega (nd/c) = k(nd)$.
Here, $(nd)$ is the optical path length. The phase accumulated in the medium over distance $d$ is the same as the phase accumulated in vacuum over the *optical path length* $(nd)$.

**Think about this:** If you have a piece of glass $1 \text{ cm}$ thick, and its refractive index is $1.5$, the optical path length is $1.5 \times 1 \text{ cm} = 1.5 \text{ cm}$. This means that light traveling through $1 \text{ cm}$ of glass experiences the same phase shift as it would traveling $1.5 \text{ cm}$ in a vacuum.

### Fermat's Principle

This concept of optical path is deeply rooted in Fermat's Principle of Least Time. Fermat's Principle states that light travels between two points along the path that requires the least time. We've seen that in a medium with $n>1$, light travels slower, so to minimize time, it effectively travels along a path where the *optical path length* is minimized. For simple refraction, this leads to Snell's Law. In more complex systems, it explains how light propagates through optical fibers or lenses.

**Connection to Course Outcomes:** Fermat's Principle is a foundational concept in optics and relates to understanding how light behaves. While not directly in CO2, it informs our understanding of how light travels through different media, which is essential for many optical phenomena. It also subtly connects to **CO1: Explain the basic principles and properties of laser and optic fibers**, as optical fibers rely on guiding light based on principles that ensure minimal travel time (and thus optical path).

## Optical Path in Optical Fibers

Optical fibers are a fantastic application of these principles, and they are explicitly mentioned in **CO1**. An optical fiber guides light by total internal reflection (TIR).

*   Light enters the core of the fiber, which has a higher refractive index ($n_1$).
*   The core is surrounded by cladding, which has a lower refractive index ($n_2$, where $n_2 < n_1$).
*   Light rays entering the fiber at an angle within the "acceptance cone" strike the core-cladding interface at an angle greater than the critical angle. This causes TIR, bouncing the light back into the core.

The path light takes inside the fiber is a series of zigzags. Each time it travels a segment of length $L$ within the core, it covers an optical path of $n_1 L$. The total optical path length determines how the signal propagates. Different paths (modes) within the fiber will have different optical path lengths, leading to modal dispersion (spreading of the signal in time), which is a critical factor in fiber optic communication.

**Think of it like this:** If a light ray travels directly down the center of the fiber (axial ray), it covers a certain optical path. If another ray enters at an angle and bounces multiple times, it travels a longer *geometrical* path, but the *optical* path is what truly dictates its phase and how it interacts with other rays. Minimizing modal dispersion means controlling the optical path differences between different modes.

## Optical Path and Phase Change on Reflection

We touched on this with thin films, but it's important to reiterate. When light reflects from an interface between two media:

1.  **Rarer to Denser Medium (e.g., Air to Glass, $n_{air} < n_{glass}$):** There is a **phase change of $\pi$** (or equivalently, an addition of $\lambda/2$ to the optical path).
2.  **Denser to Rarer Medium (e.g., Glass to Air, $n_{glass} > n_{air}$):** There is **no phase change** (or an addition of $0$ to the optical path).

This phase change needs to be accounted for when calculating the total OPD, especially in reflection-type interference experiments.

**Example:** In a Michelson interferometer, if one arm has a mirror in air and the other arm has a mirror in a thin film, the difference in optical path will include the OPD within the film *plus* any differences in phase changes at reflections.

## Summary and Key Takeaways

The optical path length ($n \times d$) is a crucial concept that extends the idea of geometrical path length to account for the slowing down of light in different media.

*   **Why it matters:** Interference and diffraction phenomena depend on the phase difference between waves, which is directly proportional to the optical path difference.
*   **Phase Difference:** $\Delta \phi = \frac{2\pi}{\lambda} \times \text{OPD}$.
*   **Interference Conditions:**
    *   Constructive: $\text{OPD} = m\lambda$
    *   Destructive: $\text{OPD} = (m + \frac{1}{2})\lambda$
*   **Phase Change on Reflection:** $\pi$ when reflecting from a denser medium, $0$ when reflecting from a rarer medium. This adds $\lambda/2$ to the OPD.
*   **Applications:** Thin films, wedge films, Newton's rings, and optical fibers all rely on understanding optical path for analyzing interference and signal propagation.

**Remember this:** Always consider both the geometrical path and the refractive index (and phase changes) when calculating the optical path difference. This is the bridge between what you see (interference patterns) and the underlying wave nature of light.

---

## Sample Questions with Answers

**Q1. Define Optical Path Length (OPL) and explain its significance in interference phenomena.**

**Answer:**
Optical Path Length (OPL) is defined as the product of the geometrical path length ($d$) and the refractive index ($n$) of the medium through which light travels: $\text{OPL} = n \times d$.
Its significance in interference lies in the fact that the **phase difference** between two waves is directly proportional to their **optical path difference (OPD)**. While geometrical path difference relates to the physical distance, OPD accounts for the effective distance experienced by light considering its speed variation in different media. For waves to interfere constructively or destructively, a specific phase relationship is required, which is directly governed by the OPD. This allows us to predict whether fringes will be bright or dark based on the optical path travelled by the waves.

**Q2. A soap film has a refractive index of 1.33. If monochromatic light of wavelength 550 nm is incident normally and reflected light shows destructive interference, what is the possible thickness of the soap film? (Assume there is a phase change on one of the reflections).**

**Answer:**
This question relates to interference in thin films. The condition for destructive interference in this case (with a phase change on one reflection) is:
$2nd = m\lambda$, where $n=1.33$, $\lambda = 550 \text{ nm}$, $d$ is the thickness, and $m$ is an integer ($m = 0, 1, 2, \dots$).

We need to find a possible thickness $d$. Let's rearrange the formula for $d$:
$d = \frac{m\lambda}{2n}$

Let's choose the smallest possible non-zero integer for $m$, which is $m=1$ (m=0 would imply d=0, which isn't a film).

For $m=1$:
$d = \frac{1 \times 550 \text{ nm}}{2 \times 1.33}$
$d = \frac{550 \text{ nm}}{2.66}$
$d \approx 206.77 \text{ nm}$

Therefore, a possible thickness for the soap film to exhibit destructive interference for light of 550 nm is approximately 206.77 nm. Other possible thicknesses would be for $m=2, 3, \dots$.

**Common Pitfall:** Forgetting the $\lambda/2$ term if the question specified constructive interference, or incorrectly applying the phase change rule. The question explicitly mentions "destructive interference" and implies the standard thin film scenario with one phase change, thus $2nd=m\lambda$. If it had been constructive, it would be $2nd=(m+1/2)\lambda$.

**Q3. Explain why the concept of optical path is necessary when dealing with light travelling through different media, referencing Snell's Law or Fermat's Principle.**

**Answer:**
Light travels at different speeds in different media. The speed of light in a vacuum is $c$, while in a medium with refractive index $n$, its speed is $v = c/n$. Interference and diffraction phenomena are fundamentally related to the phase of the light wave. The phase of a wave depends on the time it takes to travel a certain distance.

If light travels a geometrical distance $d$ in a medium of refractive index $n$, the time taken is $t = d/v = d/(c/n) = nd/c$. In a vacuum, to cover the same phase, light would need to travel a geometrical distance $d_{vac}$ such that $d_{vac}/c = t$. Thus, $d_{vac} = ct = c(nd/c) = nd$. This distance, $nd$, is the **optical path length**.

The optical path length represents the equivalent geometrical distance that light would have to travel in a vacuum to accumulate the same phase. This concept is intrinsically linked to **Fermat's Principle of Least Time**, which states that light travels between two points along the path that takes the least time. By using optical path, we are effectively minimizing time, as a higher refractive index (slower speed) contributes more to the optical path for a given geometrical distance. This principle ultimately leads to Snell's Law for refraction, as light bends to take the path that minimizes travel time, and hence minimizes the total optical path, across an interface. Without the concept of optical path, we couldn't accurately predict the phase differences and thus the interference patterns when light propagates through vacuum and material media.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
