---
title: "Cosine law- reflected system- Condition for constructive and destructive interference"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 2: Interference and Diffraction"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e835b2"
status: "completed"
scrapedAt: "2026-05-20T17:39:57.226Z"
---
# Physics for Physical Science and Life Science: Module 2 - Interference and Diffraction

## Topic: Cosine Law, Reflected Systems, and Conditions for Constructive/Destructive Interference

Welcome, everyone! In this session, we're going to delve deeper into the fascinating world of **wave phenomena**, specifically focusing on **interference**. We've already touched upon the general principles of waves, and now we're going to see how waves interact with each other, particularly when they are reflected. This is crucial for understanding many optical phenomena, from the colours we see in soap bubbles to how lasers work, and even how our eyes perceive images. Remember, understanding interference is fundamental to grasping **CO2: Describe the phenomena of interference and diffraction of light**, and many of these concepts will help us with **CO1: Explain the basic principles and properties of laser and optic fibers**.

### Understanding Wave Interference: The Basics

When two or more waves meet at a point in space, they don't just bounce off each other like billiard balls. Instead, their **amplitudes** add up according to the **principle of superposition**. This means the resultant displacement at any point is the vector sum of the displacements of the individual waves at that point. This simple idea leads to some very profound consequences, namely **interference**.

#### What is Interference?

Interference is the phenomenon that occurs when two or more waves overlap in space. The resulting wave's amplitude depends on the **phase difference** between the overlapping waves. If the waves are in phase (their crests meet crests and troughs meet troughs), they reinforce each other, leading to a larger amplitude. If they are out of phase (crest meets trough), they cancel each other out, leading to a smaller amplitude, or even zero amplitude if they are perfectly out of phase and have equal amplitudes.

Think of it like this: Imagine you're pushing a swing. If you push it at just the right time, in rhythm with its natural motion, you add energy, and the swing goes higher. That's like **constructive interference**. If you try to push it at the exact opposite moment, you'll try to stop its motion, and it will be much harder to get going. That's like **destructive interference**.

### Interference in Reflected Systems

Now, a common scenario where we observe interference is in **reflected systems**. This happens when a wave reflects off a surface, and the reflected wave then interferes with the original or another incident wave. A classic example, which you can see any day, is the shimmering, colourful patterns on a soap bubble or a thin film of oil on water.

Consider a thin film, like the soap film. Light waves from the source (like sunlight) strike the film. When the light hits the first surface of the film, some of it is reflected. The rest of the light enters the film and travels to the second surface. At the second surface, again, some light is reflected back, and some is transmitted.

Now, the light reflected from the **first surface** and the light reflected from the **second surface** travel in the same direction. These two reflected waves are derived from the same original wave, so they are **coherent**. When these two waves meet your eye, they interfere.

The key here is the **path difference** between these two reflected waves. The light that travels through the film and reflects off the second surface has to travel an extra distance compared to the light that reflects off the first surface. This extra distance depends on the thickness of the film and the angle at which the light strikes it.

#### The Cosine Law in Reflected Systems

When light enters a medium at an angle, it refracts (bends) according to Snell's Law. For interference in thin films, we often need to consider the path difference, which involves the thickness of the film and the angle of refraction inside the film. This is where the **cosine law** implicitly comes into play, especially when we are dealing with the geometry of the situation.

Let's visualize a ray of light incident at an angle $\theta_i$ on a thin film of thickness $t$. The light refracts into the film at an angle $\theta_r$ (where $n_1 \sin(\theta_i) = n_2 \sin(\theta_r)$, with $n_1$ and $n_2$ being the refractive indices of the initial medium and the film, respectively).

The extra path traveled by the ray inside the film, after reflecting from the second surface, compared to the ray reflecting from the first surface, can be calculated. If we consider the path inside the film, the geometrical path length is $2t / \cos(\theta_r)$. This geometric path length, when converted into an optical path difference (considering the refractive index of the film), becomes $2 n_2 t / \cos(\theta_r)$. This calculation involves the geometry and the cosine of the angle of refraction. While not always explicitly stated as "the cosine law" in the context of simple interference conditions, the geometric relationships that lead to the path difference rely on trigonometric principles, including cosine, as we analyze the ray paths within the medium.

**Key Insight:** The path difference is what determines whether the interference is constructive or destructive. And this path difference is influenced by the film's thickness, the refractive index, and the angle of incidence.

### Conditions for Constructive and Destructive Interference

The outcome of interference—whether it's bright (constructive) or dark (destructive)—depends on the **total phase difference** between the interfering waves. This total phase difference arises from two main factors:

1.  **Path Difference:** The difference in the actual distance traveled by the two waves.
2.  **Phase Change on Reflection:** Sometimes, a wave experiences a phase change when it reflects off a surface.

Let's consider the phase difference in terms of path difference.

#### Path Difference and Phase

A path difference of one wavelength ($\lambda$) corresponds to a phase difference of $2\pi$ radians (or 360 degrees). In general, if the path difference is $\Delta x$, the phase difference $\Delta \phi$ is given by:

$\Delta \phi = \frac{2\pi}{\lambda} \Delta x$

#### Interference in Thin Films (Reflected System)

When we talk about thin films, we typically have two interfering waves: one reflected from the top surface and one reflected from the bottom surface.

*   **Wave 1:** Reflects from the top surface.
*   **Wave 2:** Transmits into the film, reflects from the bottom surface, and then transmits back out.

Let $t$ be the thickness of the film and $n$ be its refractive index. Let $\theta_r$ be the angle of refraction inside the film.

The **optical path difference** between these two waves is approximately $2nt \cos(\theta_r)$. (This derivation involves geometrical considerations using trigonometry, as mentioned with the cosine law implicitly).

However, we also need to account for phase changes on reflection.

*   **Phase Change on Reflection:**
    *   When a wave reflects from a medium with a *higher* refractive index (e.g., light in air reflecting from glass), it undergoes a phase change of $\pi$ radians (180 degrees), which is equivalent to half a wavelength ($\lambda/2$). This is like the wave "flipping over."
    *   When a wave reflects from a medium with a *lower* refractive index (e.g., light in glass reflecting from air), there is *no* phase change.

**Scenario 1: Top surface reflection (e.g., air to film) results in a phase change, but bottom surface reflection (e.g., film to air) does not (if the film's bottom interface is with air, and the film's refractive index is higher than air).**

This is a common case, for example, in soap bubbles or oil films.
*   Wave 1 (reflected from the top surface) gets a $\pi$ phase change.
*   Wave 2 (reflected from the bottom surface) does not get a phase change.

The **total phase difference** is therefore:
$\Delta \phi = (\text{phase difference due to path}) + (\text{phase difference due to reflection})$
$\Delta \phi = \frac{2\pi}{\lambda} (2nt \cos(\theta_r)) + \pi$

For **constructive interference** (bright fringe), the total phase difference must be an even multiple of $\pi$:
$\Delta \phi = 2m\pi$, where $m$ is an integer ($0, 1, 2, ...$)
So, $\frac{2\pi}{\lambda} (2nt \cos(\theta_r)) + \pi = 2m\pi$
$\frac{2\pi}{\lambda} (2nt \cos(\theta_r)) = (2m-1)\pi$
$\mathbf{2nt \cos(\theta_r) = (2m-1)\frac{\lambda}{2}}$

This is the condition for constructive interference in this scenario. Notice the $(2m-1)$ term, indicating odd multiples of $\lambda/2$.

For **destructive interference** (dark fringe), the total phase difference must be an odd multiple of $\pi$:
$\Delta \phi = (2m+1)\pi$, where $m$ is an integer ($0, 1, 2, ...$)
So, $\frac{2\pi}{\lambda} (2nt \cos(\theta_r)) + \pi = (2m+1)\pi$
$\frac{2\pi}{\lambda} (2nt \cos(\theta_r)) = 2m\pi$
$\mathbf{2nt \cos(\theta_r) = m\lambda}$

This is the condition for destructive interference in this scenario. Notice the $m\lambda$ term, indicating integer multiples of $\lambda$.

**Scenario 2: Both reflections result in a phase change, or neither does.**

This happens, for instance, if the film is sandwiched between two media of higher refractive index, or if both media have lower refractive index.
*   If both reflections result in a $\pi$ phase change (or neither does), the relative phase difference due to reflection is zero.
The **total phase difference** is then simply due to the path difference:
$\Delta \phi = \frac{2\pi}{\lambda} (2nt \cos(\theta_r))$

For **constructive interference**:
$\frac{2\pi}{\lambda} (2nt \cos(\theta_r)) = 2m\pi$
$\mathbf{2nt \cos(\theta_r) = m\lambda}$

For **destructive interference**:
$\frac{2\pi}{\lambda} (2nt \cos(\theta_r)) = (2m+1)\pi$
$\mathbf{2nt \cos(\theta_r) = (2m+1)\frac{\lambda}{2}}$

**Important Distinction:** Notice how the conditions for constructive and destructive interference swap depending on the phase changes at the reflecting surfaces. This is a key point often tested. You must analyze the refractive indices at both interfaces.

**For your exams, remember this:** Always analyze the phase change on reflection. If there is a phase change at one interface but not the other (a net $\pi$ phase difference), the conditions flip. If there's a phase change at both, or none, the conditions are standard.

### Everyday Examples and Relevance

*   **Soap Bubbles and Oil Slicks:** The beautiful iridescent colours we see are due to interference. Different colours (wavelengths) of white light interfere constructively at different thicknesses of the film. As the film thins or thickens due to gravity or evaporation, the colours we see change. This directly relates to **CO2: Describe the phenomena of interference and diffraction of light**.
*   **Anti-Reflection Coatings:** In camera lenses, spectacles, and telescope objectives, thin films are deliberately applied to reduce unwanted reflections. By carefully choosing the thickness and refractive index of the coating, destructive interference is engineered for visible light wavelengths, making the surface appear less reflective and allowing more light to pass through. This is a practical application of interference and links to **CO1: Explain the basic principles and properties of laser and optic fibers** as light management is crucial for both.
*   **Newton's Rings:** Though typically discussed with diffraction gratings, the principle of interference in thin films is also observed in experiments like Newton's Rings, where a curved surface is placed on a flat surface, creating a wedge-shaped air film.

### Connecting to Course Outcomes

*   **CO1 (Lasers and Optical Fibers):** Understanding interference is vital for fibre optics. Signal transmission in fibres involves light bouncing off the inner walls. Interference patterns can affect signal quality. Similarly, laser light is coherent, and its interaction with surfaces, including interference phenomena, is fundamental to its applications.
*   **CO2 (Interference and Diffraction):** This entire topic is dedicated to interference. The conditions derived explain *why* certain wavelengths at certain angles produce bright or dark spots, which is the core of understanding interference patterns.
*   **CO5 (Apply knowledge to conduct experiments):** To perform experiments on interference (like in Young's double-slit experiment or thin-film analysis), you need to understand these conditions to predict and interpret the results. The path difference and phase change concepts are directly applied.

### Summary of Key Takeaways

*   Interference occurs when waves overlap and their amplitudes add up according to the principle of superposition.
*   In reflected systems, interference happens between waves reflected from different surfaces of a thin film.
*   The **optical path difference** ($2nt \cos(\theta_r)$) and **phase changes on reflection** dictate whether interference is constructive or destructive.
*   **Constructive Interference:** Occurs when the total phase difference leads to reinforcement.
*   **Destructive Interference:** Occurs when the total phase difference leads to cancellation.
*   **Crucial Point:** Be mindful of phase changes upon reflection! A phase change of $\pi$ occurs when reflecting from a medium with a higher refractive index. This flips the conditions for constructive and destructive interference.

This forms the bedrock of understanding how waves combine. Keep these conditions in mind, and always consider the geometry and the optical properties of the materials involved.

---

## Sample Questions and Answers

**1. Conceptual Question:**
Explain why a thin film of oil on water exhibits a variety of colours when viewed in sunlight.

**Answer:**
The colours observed in an oil film on water are due to the interference of sunlight reflecting from the top and bottom surfaces of the oil film. Sunlight is composed of various wavelengths (colours). As light strikes the oil film, a portion reflects off the top surface, and another portion enters the film, reflects off the bottom surface, and then emerges. These two reflected waves interfere. The path difference between these waves depends on the film's thickness and the angle of incidence. For constructive interference, the condition is $2nt \cos(\theta_r) = m\lambda$ (or $(2m-1)\lambda/2$, depending on phase changes). Since the film thickness is not uniform and varies across the surface, different wavelengths of light will satisfy the constructive interference condition at different points. This leads to the appearance of different colours at different locations on the film.

**2. Exam-Oriented Question:**
A thin uniform film of refractive index 1.5 is illuminated by monochromatic light of wavelength 500 nm at normal incidence. If the film is 250 nm thick, will the reflected light be bright or dark? Assume the film is placed between air and a medium of refractive index 1.8.

**Solution:**
Here's how we break this down:
*   Refractive index of air ($n_1$) $\approx$ 1
*   Refractive index of the film ($n_2$) = 1.5
*   Refractive index of the bottom medium ($n_3$) = 1.8
*   Wavelength of light ($\lambda$) = 500 nm
*   Thickness of the film ($t$) = 250 nm
*   Angle of incidence ($\theta_i$) = 0 (normal incidence)

Since the incidence is normal, $\theta_i = 0$, which means the angle of refraction $\theta_r = 0$. Therefore, $\cos(\theta_r) = \cos(0) = 1$.
The optical path difference is $2n_2 t \cos(\theta_r) = 2 \times 1.5 \times 250 \text{ nm} \times 1 = 750 \text{ nm}$.

Now, let's consider the phase changes on reflection:
*   **Reflection at the first surface (air to film):** $n_1 = 1$, $n_2 = 1.5$. Since $n_2 > n_1$, there is a phase change of $\pi$ (or $\lambda/2$).
*   **Reflection at the second surface (film to medium):** $n_2 = 1.5$, $n_3 = 1.8$. Since $n_3 > n_2$, there is a phase change of $\pi$ (or $\lambda/2$).

Since there is a phase change of $\pi$ at both interfaces, the net phase difference due to reflection is zero.

Now, we compare the optical path difference with the wavelength:
Optical Path Difference = 750 nm
Wavelength ($\lambda$) = 500 nm

The path difference in terms of wavelengths is:
$\frac{\text{Optical Path Difference}}{\lambda} = \frac{750 \text{ nm}}{500 \text{ nm}} = 1.5 = \frac{3}{2}$

For interference in this scenario (zero net phase change from reflection),
*   Constructive interference occurs when path difference = $m\lambda$.
*   Destructive interference occurs when path difference = $(m + 1/2)\lambda$.

Our path difference is $1.5\lambda$, which is $(1 + 1/2)\lambda$. This matches the condition for **destructive interference**.

**Therefore, the reflected light will be dark.**

**Common Pitfall:** Forgetting to check the phase changes at both surfaces can lead to the wrong conclusion. Always assess $n_1$ vs $n_2$ and $n_2$ vs $n_3$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
