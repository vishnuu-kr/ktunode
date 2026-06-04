---
title: "Optic fiber-Principle of propagation of light"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 1: Laser & Fiber Optics"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e835a7"
status: "completed"
scrapedAt: "2026-05-20T17:39:49.009Z"
---
# Physics for Physical Science and Life Science

## Module 1: Laser & Fiber Optics

### Topic: Optical Fiber – Principle of Propagation of Light

Welcome, everyone! Today, we embark on a fascinating journey into the world of **Optical Fibers**, a technology that has revolutionized communication and many other fields. We'll focus on the fundamental principle that allows light to travel through these incredibly thin strands of glass or plastic: the **Principle of Propagation of Light** within an optical fiber. This understanding is crucial, as it directly relates to our **Course Outcome 1 (CO1)**: "Explain the basic principles and properties of laser and optic fibers." Without grasping how light moves, we can't truly appreciate what optical fibers do.

Think of it like this: you have a signal, perhaps a voice message or a data packet, that needs to be sent from one place to another. Traditionally, we used electrical signals over copper wires. But what if we could send that signal as light? Light travels incredibly fast, and it can carry vast amounts of information. This is precisely what optical fibers enable. But how does light, which usually travels in straight lines, manage to bend and twist through a flexible fiber? That's the magic we're going to unravel today.

---

### Understanding the Basics: Refraction and Reflection

Before we dive into the fiber itself, let's revisit two fundamental optical phenomena: **refraction** and **reflection**. These are concepts you've likely encountered before, possibly in chapters discussing light's behavior, as found in textbooks like Avadhanulu, Kshirsagar, & Murthy's "A Textbook of Engineering Physics."

**Refraction:** Remember when you put a straw in a glass of water, and it looked like the straw was bent at the water's surface? That's refraction. It's the bending of light as it passes from one medium to another, say, from air to water, or from water to glass. This bending happens because light travels at different speeds in different mediums. The speed of light in a vacuum (often denoted by 'c') is the fastest. When light enters a denser medium (like water or glass), it slows down, and this change in speed causes it to change direction.

We quantify this bending with the **refractive index** ($n$) of a medium. It's defined as the ratio of the speed of light in a vacuum to the speed of light in that medium:

$n = \frac{c}{v}$

A higher refractive index means light travels slower in that medium, and thus bends more when entering or leaving it.

The relationship between the angle of incidence ($i$) and the angle of refraction ($r$) when light passes from one medium to another is governed by **Snell's Law**:

$n_1 \sin(i) = n_2 \sin(r)$

Here, $n_1$ is the refractive index of the first medium, and $n_2$ is the refractive index of the second medium. This law is absolutely central to understanding how light behaves in optical fibers.

**Reflection:** When light hits a surface, some of it bounces back. This is reflection. When light hits a smooth surface, like a mirror, it reflects in a predictable way: the angle of incidence equals the angle of reflection. This is the Law of Reflection.

However, there's a special kind of reflection that's crucial for optical fibers: **Total Internal Reflection (TIR)**. Imagine light trying to go from a denser medium (like water) to a rarer medium (like air). As you increase the angle of incidence, the angle of refraction also increases. There comes a point where the angle of refraction would have to be greater than 90 degrees, which is impossible. At this specific angle of incidence, called the **critical angle** ($i_c$), the refracted ray grazes the surface (i.e., the angle of refraction is 90 degrees).

If the angle of incidence is *greater* than the critical angle, the light doesn't refract out into the second medium at all. Instead, it is completely reflected back into the first medium. This phenomenon is Total Internal Reflection.

Let's use Snell's Law to find the critical angle. If light travels from medium 1 (denser, refractive index $n_1$) to medium 2 (rarer, refractive index $n_2$, where $n_1 > n_2$), and at the critical angle $i_c$, the angle of refraction $r = 90^\circ$:

$n_1 \sin(i_c) = n_2 \sin(90^\circ)$

Since $\sin(90^\circ) = 1$, we get:

$n_1 \sin(i_c) = n_2$

Therefore, the critical angle is given by:

$\sin(i_c) = \frac{n_2}{n_1}$

Or, $i_c = \sin^{-1}\left(\frac{n_2}{n_1}\right)$

**Remember this:** Total Internal Reflection is the backbone of optical fiber technology. It's what keeps the light trapped inside the fiber, allowing it to travel long distances. This concept is definitely a high-yield area for exams, so make sure you can derive and explain the critical angle.

---

### Anatomy of an Optical Fiber

Now, let's look at the structure of an optical fiber. It's not just a simple strand of glass. It's carefully designed to exploit Total Internal Reflection. A typical optical fiber consists of two main parts, both made of highly pure glass (silica) or plastic:

1.  **Core:** This is the central part of the fiber where the light actually propagates. It has a slightly higher refractive index. Let's call its refractive index $n_{core}$.
2.  **Cladding:** This is the layer surrounding the core. It has a slightly lower refractive index than the core. Let's call its refractive index $n_{cladding}$.

You might find this structure explained in detail in books like Malik and Singh's "Engineering Physics," which often provides clear diagrams. The reason for this refractive index difference is critical. It creates the conditions necessary for TIR.

Imagine light entering the core of the fiber at an angle. As it travels down the fiber, when it strikes the boundary between the core and the cladding, it will undergo reflection. If the angle at which it strikes this boundary is *greater than the critical angle* (which is determined by the ratio of $n_{cladding}$ to $n_{core}$), the light will be totally internally reflected back into the core. This process repeats at every internal reflection, essentially bouncing the light along the entire length of the fiber, even around bends!

**Analogy Time:** Think of a highly polished, mirrored tunnel. If you shine a laser beam down this tunnel, and the mirrors are perfect, the light will bounce off the walls and travel a long way. An optical fiber is like an incredibly efficient version of this, where the "mirrors" are created by the difference in refractive indices and the phenomenon of TIR. It's a beautiful application of fundamental physics.

---

### The Principle of Propagation: Total Internal Reflection in Action

So, how does light actually propagate? It's a continuous process of **Total Internal Reflection**.

When light enters the fiber through its end face, it enters the **core**. Let's say the light ray enters at an angle $\theta_{in}$ with respect to the fiber's axis. As it travels through the core and hits the core-cladding boundary, the angle of incidence ($\theta$) with respect to the normal to the boundary is related to $\theta_{in}$.

The critical angle for TIR at the core-cladding interface is given by:

$\sin(i_c) = \frac{n_{cladding}}{n_{core}}$

For light to propagate efficiently within the fiber, every internal reflection it undergoes must be a *total internal reflection*. This means that the angle of incidence ($\theta$) at the core-cladding boundary must always be greater than or equal to the critical angle ($i_c$).

$\theta \ge i_c$

This condition ensures that the light is trapped within the core and doesn't leak out into the cladding.

**Connecting to Course Outcomes:** This principle directly links to **CO1**. By understanding TIR, we understand *how* optical fibers work, which is a key property of optical fibers. This also builds towards **CO5** (Apply basic knowledge of principles and theories in physics to conduct experiments), as understanding these principles is the first step in designing or analyzing experiments involving fiber optics.

---

### Acceptance Angle and Numerical Aperture (NA)

Now, not all light that enters the fiber will propagate successfully. Some light might enter at an angle so shallow that it doesn't meet the condition for TIR. We need to define the range of angles for which light can be accepted and guided by the fiber. This is where the concepts of **Acceptance Angle** and **Numerical Aperture (NA)** come in.

Imagine light entering the fiber from a medium with refractive index $n_0$ (usually air, so $n_0 \approx 1$). Let the maximum angle with respect to the fiber axis at which light can enter the core and still be guided by TIR be the **acceptance angle** ($\theta_a$).

Using Snell's Law at the input end face, where light goes from $n_0$ to $n_{core}$, and considering the condition for TIR at the internal boundary:

Let's trace the path of a ray entering at the maximum acceptance angle. It enters the core at some angle to the axis. Inside the core, it travels and strikes the core-cladding boundary. For maximum acceptance, this ray should strike the core-cladding boundary at the critical angle ($i_c$).

If $\phi$ is the angle of incidence at the core-cladding boundary, and $\alpha$ is the angle the ray makes with the fiber axis inside the core, then $\phi = 90^\circ - \alpha$.
For TIR, $\phi \ge i_c$, so $90^\circ - \alpha \ge i_c$. This means $\alpha \le 90^\circ - i_c$.

Now, consider the ray entering the fiber from air (refractive index $n_0$) into the core (refractive index $n_{core}$). If $\theta_a$ is the maximum angle of incidence in air (the acceptance angle), then by Snell's Law:

$n_0 \sin(\theta_a) = n_{core} \sin(\alpha_{min})$

where $\alpha_{min}$ is the corresponding angle inside the core with the axis. The condition for TIR is that the ray inside the core strikes the boundary at an angle of incidence greater than or equal to $i_c$. The ray that enters at the acceptance angle will strike the boundary at exactly the critical angle.
So, the angle $\alpha$ inside the core that corresponds to the maximum acceptance angle $\theta_a$ is such that it strikes the core-cladding boundary at the critical angle $i_c$.
The angle inside the core with the normal to the boundary is $90^\circ - \alpha$. For the ray entering at the acceptance angle, this angle is $i_c$. So, $90^\circ - \alpha = i_c$.

Applying Snell's law at the core-cladding boundary for this ray:
$n_{core} \sin(i_c) = n_{cladding} \sin(90^\circ)$
$n_{core} \sin(i_c) = n_{cladding}$
$\sin(i_c) = \frac{n_{cladding}}{n_{core}}$ (This is our earlier critical angle definition)

Now, back to the input face:
$n_0 \sin(\theta_a) = n_{core} \sin(\alpha)$
And the angle $\alpha$ inside the core makes an angle $i_c$ with the normal at the boundary. So the angle with the axis is $90 - i_c$.
Let's be careful with angles. It's often easier to consider the angle the ray makes with the *axis* of the fiber.
If $\alpha$ is the angle with the axis inside the core, then the angle with the *normal* at the core-cladding boundary is $90^\circ - \alpha$. For TIR, we need $90^\circ - \alpha \ge i_c$.

Consider the ray entering the fiber at angle $\theta_a$ to the axis. Inside the core, the angle to the axis is $\alpha$. At the core-cladding interface, the angle to the normal is $90^\circ - \alpha$.
For the ray entering at the *maximum* acceptance angle $\theta_a$, it strikes the core-cladding boundary at the *critical angle* $i_c$. So, $90^\circ - \alpha = i_c$.

Now apply Snell's Law at the input face (air to core):
$n_0 \sin(\theta_a) = n_{core} \sin(\alpha)$

We know $\sin(i_c) = n_{cladding}/n_{core}$, so $\cos(i_c) = \sqrt{1 - \sin^2(i_c)} = \sqrt{1 - (n_{cladding}/n_{core})^2}$.
Also, $\alpha = 90^\circ - i_c$. So, $\sin(\alpha) = \sin(90^\circ - i_c) = \cos(i_c)$.
Substituting this into Snell's Law:
$n_0 \sin(\theta_a) = n_{core} \cos(i_c)$
$n_0 \sin(\theta_a) = n_{core} \sqrt{1 - \left(\frac{n_{cladding}}{n_{core}}\right)^2}$
$n_0 \sin(\theta_a) = n_{core} \frac{\sqrt{n_{core}^2 - n_{cladding}^2}}{n_{core}}$
$n_0 \sin(\theta_a) = \sqrt{n_{core}^2 - n_{cladding}^2}$

This term, $\sqrt{n_{core}^2 - n_{cladding}^2}$, is defined as the **Numerical Aperture (NA)** of the fiber.

$NA = \sqrt{n_{core}^2 - n_{cladding}^2}$

And since $n_0$ is usually 1 (for air), the acceptance angle is given by:

$\sin(\theta_a) = \frac{NA}{n_0} \approx NA$

So, $\theta_a \approx \sin^{-1}(NA)$.

The Numerical Aperture is a very important parameter.
*   It determines the light-gathering ability of the fiber. A higher NA means a larger acceptance angle, so more light can be coupled into the fiber.
*   It's a measure of the resolving power of the fiber.
*   It's independent of the fiber's length.

Think of the NA like the "mouth" of the fiber. A wider mouth (higher NA) can scoop up more light. This is crucial in many applications, especially in life sciences where you might be trying to collect faint light signals. For example, in medical imaging, a fiber optic bundle needs to efficiently collect light from a sample.

**Exam Tip:** Questions often ask for the definition of NA and its relationship to refractive indices. They might also ask how to calculate NA if the refractive indices are given, or vice versa. Remember this formula: $NA = \sqrt{n_{core}^2 - n_{cladding}^2}$.

---

### Modes of Propagation

Light doesn't just travel as a single beam in an optical fiber. Due to the wave nature of light, it can propagate in different patterns called **modes**. Imagine the light waves setting up standing wave patterns within the confines of the fiber core.

For very thin fibers, and for the principle of TIR to work efficiently, we often operate in what's called the **single-mode regime**. In a single-mode fiber, only one mode of propagation is allowed. This is achieved by making the core very thin (typically around 8-10 micrometers in diameter) and ensuring a small difference between the core and cladding refractive indices. The advantage of single-mode operation is that it preserves the signal shape over long distances, leading to very low signal distortion. This is vital for high-speed data transmission.

In thicker fibers, known as **multimode fibers**, multiple modes of propagation are possible. These different modes correspond to different angles of propagation within the fiber. Some modes travel more directly down the center of the fiber, while others bounce off the core-cladding boundary more frequently.

The number of modes a fiber can carry is related to its core diameter, wavelength of light, and its Numerical Aperture. This is a more advanced topic often covered in detail in optics textbooks like Ajoy Ghatak's "Optics," and it relates to the wave nature of light, touching upon concepts that might be explored further in relation to **CO2** (interference and diffraction) and **CO3** (quantum mechanics, where wave-particle duality is fundamental). For our current focus on the principle of propagation, understanding that different modes exist and that single-mode operation is preferred for many applications is key.

---

### Summary and Key Takeaways

Let's recap the core ideas about how light propagates in an optical fiber:

*   **Total Internal Reflection (TIR):** This is the fundamental principle. Light is guided along the fiber by being repeatedly reflected internally at the boundary between the core and the cladding.
*   **Refractive Index Difference:** TIR occurs because the core has a higher refractive index ($n_{core}$) than the cladding ($n_{cladding}$).
*   **Critical Angle:** The maximum angle of incidence at the core-cladding boundary for which TIR occurs is the critical angle, $i_c$, where $\sin(i_c) = n_{cladding}/n_{core}$.
*   **Acceptance Angle ($\theta_a$):** The maximum angle at which light can enter the fiber from an external medium (like air) and still be guided by TIR.
*   **Numerical Aperture (NA):** A measure of the light-gathering ability of the fiber, defined as $NA = \sqrt{n_{core}^2 - n_{cladding}^2}$. It's also related to the acceptance angle by $\sin(\theta_a) \approx NA$ (for air).

Understanding these concepts is your gateway to appreciating the power and versatility of optical fibers. They are the invisible highways for much of the world's data and are increasingly used in sensing and medical applications.

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** What is the primary physical phenomenon responsible for guiding light through an optical fiber?
    **Answer:** The primary phenomenon is **Total Internal Reflection (TIR)**. This occurs when light traveling in a medium of higher refractive index strikes the boundary with a medium of lower refractive index at an angle greater than the critical angle.

2.  **Question:** Why must the core of an optical fiber have a higher refractive index than its cladding?
    **Answer:** The core must have a higher refractive index than the cladding to create the necessary conditions for Total Internal Reflection (TIR) at the core-cladding interface. If the refractive indices were equal or reversed, light would not be reflected back into the core and would escape into the cladding. This directly relates to the definition of the critical angle: $\sin(i_c) = n_{cladding}/n_{core}$. For $i_c$ to be a real angle ($<90^\circ$), $n_{cladding}$ must be less than $n_{core}$.

3.  **Question:** How does the Numerical Aperture (NA) of an optical fiber relate to its ability to collect light?
    **Answer:** The Numerical Aperture (NA) quantifies the light-gathering ability of an optical fiber. A higher NA means a larger acceptance angle ($\theta_a$), which allows more light rays incident on the fiber end face to enter the core and be propagated down the fiber.

**Exam-Oriented Questions:**

1.  **Question:** An optical fiber has a core refractive index of 1.46 and a cladding refractive index of 1.40. Calculate the critical angle for TIR at the core-cladding interface. If light enters the fiber from air (refractive index $\approx$ 1.0) at an angle of 20 degrees to the fiber axis, will it propagate? Assume NA is approximately $\sin(\theta_a)$.
    **Answer:**
    *   **Calculate Critical Angle ($i_c$):**
        Using the formula $\sin(i_c) = \frac{n_{cladding}}{n_{core}}$
        $\sin(i_c) = \frac{1.40}{1.46} \approx 0.9589$
        $i_c = \sin^{-1}(0.9589) \approx 73.43^\circ$

    *   **Calculate Numerical Aperture (NA):**
        $NA = \sqrt{n_{core}^2 - n_{cladding}^2} = \sqrt{(1.46)^2 - (1.40)^2} = \sqrt{2.1316 - 1.96} = \sqrt{0.1716} \approx 0.4142$

    *   **Calculate Acceptance Angle ($\theta_a$):**
        Since light enters from air ($n_0 \approx 1$), $\sin(\theta_a) \approx NA$.
        $\sin(\theta_a) \approx 0.4142$
        $\theta_a = \sin^{-1}(0.4142) \approx 24.45^\circ$

    *   **Propagation Check:**
        The light enters at an angle of 20 degrees to the axis. Since this angle (20°) is less than the acceptance angle (24.45°), the light ray will be accepted and propagate within the fiber.

    **Reasoning:** For propagation, the light must enter within the acceptance angle. The acceptance angle is derived from the critical angle requirement for TIR. We first found the critical angle, then used it to find the NA and subsequently the acceptance angle. Comparing the input angle to the acceptance angle determines if the light will propagate.

2.  **Question:** Explain why optical fibers are designed with a step-change in refractive index between the core and cladding, rather than a gradual change. What is the term for the phenomenon that allows light to be guided?
    **Answer:** Optical fibers are designed with a step-change in refractive index between the core and cladding to ensure that light rays striking the boundary at appropriate angles undergo **Total Internal Reflection (TIR)**. A step-change creates a sharp interface where the conditions for TIR ($n_{core} > n_{cladding}$) are consistently met, allowing light to bounce efficiently. A gradual change would lead to continuous refraction, and it would be difficult or impossible to achieve sustained TIR. The phenomenon that allows light to be guided is **Total Internal Reflection (TIR)**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
