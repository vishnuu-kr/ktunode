---
title: "Diffraction due to a single slit"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 2: Interference and Diffraction"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912d28"
status: "completed"
scrapedAt: "2026-05-20T18:31:31.704Z"
---
# Module 2: Interference and Diffraction

## Topic: Diffraction due to a Single Slit

Welcome, everyone! In our journey through the fascinating world of light, we've already explored how waves can combine and cancel each other out, a phenomenon we call **interference**. Today, we're diving into another equally crucial wave phenomenon: **diffraction**. Think of diffraction as light's ability to bend around obstacles or spread out as it passes through narrow openings. It's what allows us to see light even when it's not traveling in a perfectly straight line, a concept that's fundamental to understanding how optical instruments like telescopes and microscopes work. This topic directly ties into our **CO2: Describe the phenomena of interference and diffraction of light**, as we're building a comprehensive picture of how light behaves as a wave.

### What is Diffraction?

So, what exactly *is* diffraction? At its heart, diffraction is the **spreading of a wave when it encounters an obstacle or an aperture (an opening)**. When light waves meet a sharp edge or pass through a narrow slit, they don't just continue in a straight line. Instead, they spread out into the region that would otherwise be in shadow. This bending and spreading is the hallmark of wave behavior.

Imagine water waves approaching a breakwater with a gap. As the waves pass through the gap, they don't just form a single narrow beam of waves on the other side. Instead, they spread out in a semicircular pattern. This is exactly what happens with light.

Historically, early experiments by people like Thomas Young suggested that light was a wave, and diffraction was a key piece of evidence. The straight-line propagation of light, which we often assume, is actually an approximation that holds true when the obstacles or openings are very large compared to the wavelength of light. When the dimensions of the obstacle or aperture become comparable to the wavelength of light, diffraction effects become significant and observable.

**Key Concept:** Diffraction is the bending and spreading of waves as they pass through an opening or around an obstacle. It's a direct consequence of light behaving as a wave.

### Huygens' Principle: The Foundation of Diffraction

To understand *why* diffraction happens, we turn to **Huygens' Principle**. Proposed by Christiaan Huygens in the 17th century, this principle is incredibly powerful. It states that:

> *Every point on a wavefront can be considered as a source of secondary spherical wavelets, and the wavefront at a later instant is the envelope of these wavelets.*

Think of a wavefront as a line of soldiers marching forward. Each soldier represents a point on the wavefront. Huygens' principle says that each soldier, as they march, throws out a small, circular ripple (a wavelet). The next wavefront is essentially the new line formed by the outer edge of all these ripples combined.

When a wavefront encounters a slit, only the points on the wavefront passing through the slit can act as sources of these secondary wavelets. These wavelets then spread out in all directions, interfering with each other and creating the diffraction pattern. This principle is central to understanding how light propagates and how diffraction patterns form. It's a concept you'll find discussed in detail in textbooks like **Avadhanulu, Kshirsagar & Murthy's "A Textbook of Engineering Physics"** and **Malik & Singh's "Engineering Physics."**

### Diffraction by a Single Slit: The Setup

Now, let's focus on the specific case of **diffraction due to a single slit**. This is a classic experiment and a cornerstone of wave optics.

Imagine a beam of monochromatic (single-colored) light, like from a laser, incident on a long, narrow slit of width 'a'. On a screen placed at a distance 'D' from the slit, we observe a pattern of bright and dark bands, known as a **diffraction pattern**.

*   **Monochromatic Light:** This is crucial. Using a single wavelength ensures that the interference and diffraction patterns are clear and well-defined. Lasers are perfect for this. This connects to **CO1: Explain the basic principles and properties of laser and optic fibers**, as lasers are a primary source for such experiments.
*   **Slit Width 'a':** This is a critical parameter. The size of the slit relative to the wavelength of light determines the extent of diffraction.
*   **Screen Distance 'D':** The distance to the screen affects the spacing of the pattern.

What we see on the screen isn't just a bright band corresponding to the slit's width. Instead, we see a central bright band (the **central maximum**) which is the widest and brightest, flanked by a series of alternating dark bands (**minima**) and progressively dimmer bright bands (**secondary maxima**). This pattern is a direct consequence of the interference of the secondary wavelets originating from different points within the single slit.

### Analyzing the Single Slit Pattern: Finding the Minima

The most important part of understanding the single-slit diffraction pattern is determining where the dark bands (minima) occur. This is where the math comes in, and it's rooted in Huygens' Principle and the concept of path difference.

Consider the slit of width 'a'. We can divide the slit into two halves, each of width 'a/2'. Let's assume the light diffracts at an angle $\theta$ with respect to the forward direction. For the first minimum, we consider pairs of wavelets originating from corresponding points in the upper and lower halves of the slit.

*   Take a point P in the upper half and a corresponding point Q in the lower half, such that the distance between P and Q is 'a/2'.
*   If the path difference between the wavelet from P and the wavelet from Q, traveling to a point on the screen at an angle $\theta$, is $\lambda/2$ (half a wavelength), then these two wavelets will interfere destructively, resulting in darkness.

The path difference between wavelets from P and Q is $(a/2) \sin \theta$.
So, for the first minimum, we set this path difference to $\lambda/2$:
$(a/2) \sin \theta = \lambda/2$
$a \sin \theta = \lambda$

This gives us the condition for the first minimum. What about subsequent minima? We can generalize this. For the nth minimum, we divide the slit into $2n$ equal parts. Wavelets from adjacent parts will have a path difference of $\lambda/2$, leading to destructive interference.

The condition for the minima in a single-slit diffraction pattern is therefore:
$$a \sin \theta_n = n\lambda$$
where:
*   'a' is the width of the slit.
*   '$\theta_n$' is the angle at which the nth minimum occurs.
*   'n' is an integer (±1, ±2, ±3, ...). 'n=0' corresponds to the central maximum, not a minimum.

**Remember this formula!** It's crucial for calculating the positions of the dark fringes. This analysis is a core concept in optics, thoroughly explained in **Ghatak's "Optics"** and **Aruldhas' "Engineering Physics."**

### Intensity Distribution in the Single Slit Pattern

While the minima tell us where it's dark, we also want to know how the brightness (intensity) of the bright bands varies. The intensity distribution in a single-slit diffraction pattern is not uniform. It follows a specific mathematical form.

The intensity 'I' at an angle $\theta$ is given by:
$$I(\theta) = I_0 \left(\frac{\sin \beta}{\beta}\right)^2$$
where:
*   $I_0$ is the intensity at the center of the central maximum.
*   $\beta$ is a phase difference parameter related to the angle $\theta$ by $\beta = \frac{\pi a \sin \theta}{\lambda}$.

Let's break down this formula, which you'll encounter in texts like **Beiser's "Concepts of Modern Physics."**

*   The term $\left(\frac{\sin \beta}{\beta}\right)^2$ is often called the **diffraction function**.
*   When $\beta = 0$ (i.e., $\theta = 0$, the center of the screen), $\frac{\sin \beta}{\beta}$ approaches 1 (a standard calculus limit). So, $I(0) = I_0$, which is our central maximum.
*   As $\theta$ increases, $\beta$ increases. The $\sin \beta$ term oscillates between -1 and +1, but the $\beta$ in the denominator grows linearly. This causes the intensity to decrease rapidly.
*   The minima occur when $\sin \beta = 0$ but $\beta \neq 0$. This happens when $\beta = n\pi$, where $n = \pm 1, \pm 2, \pm 3, ...$. Substituting $\beta = \frac{\pi a \sin \theta}{\lambda}$, we get $\frac{\pi a \sin \theta}{\lambda} = n\pi$, which simplifies back to $a \sin \theta = n\lambda$. This confirms our earlier derivation of the minima.
*   The secondary maxima occur approximately where $\tan \beta = \beta$. These are not exact but occur between the minima, and their intensities are significantly lower than the central maximum. The intensity of the first secondary maximum is about 4.7% of the central maximum, the second is about 1.7%, and so on. They get progressively dimmer.

**Visualizing the Intensity:** If you plot this intensity distribution, you'll see a tall, sharp peak at the center, and then gradually smaller humps on either side, separated by regions of near-zero intensity (the minima).

### Positions of Maxima and Minima on the Screen

Often, we are interested in the positions of these bright and dark bands on the screen, rather than just the angles. If the distance to the screen, 'D', is much larger than the slit width 'a' (which is usually the case in experiments), we can use a small angle approximation: $\sin \theta \approx \tan \theta \approx \frac{y}{D}$, where 'y' is the distance of the fringe from the center of the screen.

*   **Position of Minima:**
    From $a \sin \theta_n = n\lambda$, we get $a \left(\frac{y_n}{D}\right) \approx n\lambda$.
    So, the distance of the nth minimum from the center is:
    $$y_n \approx \frac{n\lambda D}{a}$$
    The distance between the first minimum and the center is $y_1 = \frac{\lambda D}{a}$.
    The distance between the first minimum on either side of the center is $2y_1 = \frac{2\lambda D}{a}$. This is the width of the central maximum.

*   **Position of Maxima:**
    The central maximum is at $y=0$. The secondary maxima are located roughly halfway between the minima. For small angles, the condition for secondary maxima is approximately $a \sin \theta \approx (n + 1/2)\lambda$.
    So, the distance of the nth secondary maximum from the center is approximately:
    $$y'_n \approx \frac{(n + 1/2)\lambda D}{a}$$
    where $n = \pm 1, \pm 2, \pm 3, ...$

**Practical Significance:** These formulas are essential for calculations. If you know the wavelength of light, the slit width, and the screen distance, you can predict where the bright and dark bands will appear. This is very practical, for instance, in designing optical instruments or analyzing experimental results. This relates to **CO5: Apply basic knowledge of principles and theories in physics to conduct experiments.**

### Examples and Analogies

Let's make this more concrete with some relatable examples:

1.  **Your Eye and a Doorway:** Imagine you're looking at a distant light source, and someone walks in front of it, blocking most of the light. You might still be able to see a faint glow of light around the edges of the person, especially if the light source is small. This faint glow is due to diffraction. Similarly, if you look through a tiny gap between your fingers, you'll notice the light spreading out more than if you open your hands wide. The narrower the gap, the more pronounced the spreading. This demonstrates how the slit width 'a' affects the diffraction.

2.  **CD/DVD as a Diffraction Grating (Though it's multiple slits, the principle applies):** Have you ever noticed the rainbow-like colors on the surface of a CD or DVD when you tilt it in the light? That's diffraction! The closely spaced tracks on the CD act like a diffraction grating (which has many slits). Different colors (which correspond to different wavelengths of light) diffract at slightly different angles, separating the white light into its constituent colors. While this is a multiple-slit case, the underlying physics of spreading and interference is the same.

3.  **Acoustic Analogy:** Think about sound waves. You can often hear someone talking in an adjacent room even if the door is only slightly ajar. Sound waves have longer wavelengths than light, so diffraction effects are more noticeable for everyday objects. The sound waves bend around the edges of the door opening and spread into the room. This is why sound seems to "fill" a space more readily than light does from a small opening. This connects to **CO4: Apply the knowledge of waves and acoustics... in acoustic design of buildings.** Understanding wave behavior like diffraction is key to controlling how sound propagates.

### Relation to Course Outcomes

Let's explicitly connect this topic back to our Course Outcomes:

*   **CO2: Describe the phenomena of interference and diffraction of light.** This entire topic is a deep dive into diffraction, explaining its mechanism and the resulting patterns. We’ve seen how the wave nature of light leads to these phenomena.
*   **CO1: Explain the basic principles and properties of laser and optic fibers.** Monochromatic light sources like lasers are essential for observing clear single-slit diffraction patterns. The ability to produce a highly directional and monochromatic beam is what makes lasers ideal for such precise optical experiments. While this topic doesn't directly cover fiber optics, understanding light's wave nature (diffraction) is foundational for fields like telecommunications that use fiber optics.
*   **CO5: Apply basic knowledge of principles and theories in physics to conduct experiments.** The formulas derived for the positions of minima and maxima are directly applicable to setting up experiments, measuring wavelengths, or determining slit widths. For instance, if you measure the fringe spacing on a screen, you can calculate the wavelength of the light or the width of the slit, demonstrating the application of these principles.

### Common Pitfalls and Exam Tips

*   **Confusing Single-Slit with Double-Slit:** Remember that a single slit produces a pattern where the central maximum is much wider than the others, and the secondary maxima are progressively dimmer. A double-slit pattern has multiple, equally spaced bright fringes (except for the modulating effect of the single-slit envelope if considered).
*   **The 'n' value for Minima:** The minima are at $n = \pm 1, \pm 2, \pm 3, ...$. 'n=0' corresponds to the central maximum, not a minimum. Be careful not to include n=0 when calculating the positions of dark fringes.
*   **Small Angle Approximation:** While useful, remember it's an approximation ($\sin \theta \approx \theta$). It works best for small angles, typically when the fringes are far from the center. For very wide angles, the exact $a \sin \theta = n\lambda$ formula is needed.
*   **Intensity Variation:** Don't forget that the bright fringes in single-slit diffraction are *not* of equal intensity. The intensity drops significantly as you move away from the center.

### Summary

Diffraction due to a single slit is a fundamental wave phenomenon. It occurs when light passes through a narrow opening, causing it to spread out. Huygens' principle explains this by considering every point on the wavefront as a source of secondary wavelets. In a single-slit experiment, these wavelets interfere constructively and destructively, creating a characteristic pattern of a bright central maximum and dimmer secondary maxima separated by dark minima. The positions of these minima are given by $a \sin \theta_n = n\lambda$. The intensity distribution is described by $I(\theta) = I_0 \left(\frac{\sin \beta}{\beta}\right)^2$. Understanding this phenomenon is vital for comprehending the behavior of light and its applications in various optical systems.

---

## Sample Questions with Answers

**1. Conceptual Question:**
Explain why diffraction is considered evidence for the wave nature of light.

**Answer:**
Diffraction is the bending and spreading of waves as they pass through an opening or around an obstacle. If light were purely a stream of particles traveling in straight lines, it would not bend around corners or spread out from a narrow slit; it would simply stop at the edge of the obstacle or pass through the opening as a narrow beam. The observation of a diffraction pattern, with its series of bright and dark fringes, is a direct consequence of the interference of light waves that have spread out after passing through the slit. This wave interference, causing constructive (bright fringes) and destructive (dark fringes) effects, is a hallmark of wave phenomena, hence, diffraction strongly supports the wave theory of light.

**2. Exam-Oriented Question:**
Light of wavelength $500$ nm is incident on a single slit of width $0.1$ mm. Calculate the angular position of the first minimum.

**Answer:**
Here, we are given:
Wavelength, $\lambda = 500$ nm $= 500 \times 10^{-9}$ m
Slit width, $a = 0.1$ mm $= 0.1 \times 10^{-3}$ m
We need to find the angular position of the first minimum ($n=1$).

The condition for the minima in single-slit diffraction is:
$a \sin \theta_n = n\lambda$

For the first minimum, $n=1$:
$a \sin \theta_1 = 1 \times \lambda$
$\sin \theta_1 = \frac{\lambda}{a}$

Substitute the given values:
$\sin \theta_1 = \frac{500 \times 10^{-9} \text{ m}}{0.1 \times 10^{-3} \text{ m}}$
$\sin \theta_1 = \frac{500 \times 10^{-9}}{1 \times 10^{-4}}$
$\sin \theta_1 = 500 \times 10^{-5}$
$\sin \theta_1 = 5 \times 10^{-3}$

To find the angular position $\theta_1$, we take the arcsine:
$\theta_1 = \arcsin(0.005)$

Since $0.005$ is a very small value, we can use the small angle approximation $\sin \theta_1 \approx \theta_1$ (where $\theta_1$ is in radians).
$\theta_1 \approx 0.005$ radians.

If the answer is required in degrees:
$\theta_1 \approx 0.005 \times \frac{180}{\pi}$ degrees
$\theta_1 \approx 0.286$ degrees

**Answer:** The angular position of the first minimum is approximately $0.005$ radians or $0.286$ degrees.

**3. Conceptual Question:**
What happens to the width of the central maximum in a single-slit diffraction pattern if the slit width 'a' is decreased?

**Answer:**
The width of the central maximum is determined by the position of the first minima on either side of the center. The angular position of the first minimum is given by $a \sin \theta_1 = \lambda$. This can be approximated as $a \theta_1 \approx \lambda$, or $\theta_1 \approx \lambda/a$. The linear distance of the first minimum from the center on a screen at distance D is $y_1 \approx D \theta_1 \approx \lambda D/a$. The total width of the central maximum is $2y_1 \approx 2\lambda D/a$.

From this, we can see that the width of the central maximum ($2y_1$) is inversely proportional to the slit width 'a'. Therefore, if the slit width 'a' is decreased, the width of the central maximum will increase. In other words, narrower slits cause more pronounced diffraction and a wider central bright band.

**4. Exam-Oriented Question:**
In a single-slit diffraction experiment, the distance of the screen from the slit is $1.5$ m. The width of the slit is $0.05$ mm. If the wavelength of light used is $600$ nm, find the distance of the third minimum from the center of the screen.

**Answer:**
Given:
Distance to screen, $D = 1.5$ m
Slit width, $a = 0.05$ mm $= 0.05 \times 10^{-3}$ m
Wavelength, $\lambda = 600$ nm $= 600 \times 10^{-9}$ m
We need to find the distance of the third minimum ($n=3$) from the center.

The position of the nth minimum from the center is given by $y_n \approx \frac{n\lambda D}{a}$ (using the small angle approximation).

For the third minimum, $n=3$:
$y_3 \approx \frac{3 \times \lambda \times D}{a}$

Substitute the values:
$y_3 \approx \frac{3 \times (600 \times 10^{-9} \text{ m}) \times (1.5 \text{ m})}{0.05 \times 10^{-3} \text{ m}}$
$y_3 \approx \frac{3 \times 600 \times 10^{-9} \times 1.5}{0.05 \times 10^{-3}}$
$y_3 \approx \frac{2700 \times 10^{-9}}{0.05 \times 10^{-3}}$
$y_3 \approx \frac{2.7 \times 10^{-6}}{5 \times 10^{-5}}$
$y_3 \approx \frac{2.7}{5} \times 10^{-1}$
$y_3 \approx 0.54 \times 10^{-1}$ m
$y_3 \approx 0.054$ m

To express this in centimeters:
$y_3 \approx 0.054 \times 100$ cm
$y_3 \approx 5.4$ cm

**Answer:** The distance of the third minimum from the center of the screen is approximately $0.054$ m or $5.4$ cm.
