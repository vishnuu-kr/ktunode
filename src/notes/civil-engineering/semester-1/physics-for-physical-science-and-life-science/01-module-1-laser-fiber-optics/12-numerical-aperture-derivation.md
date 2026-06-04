---
title: "Numerical aperture –Derivation"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 1: Laser & Fiber Optics"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912d1a"
status: "completed"
scrapedAt: "2026-05-20T18:31:22.615Z"
---
# Physics for Physical Science and Life Science

## Module 1: Laser & Fiber Optics

### Topic: Numerical Aperture – Derivation

Welcome, everyone! Today, we’re diving into a concept that’s absolutely crucial for understanding how light travels within optical fibers: **Numerical Aperture (NA)**. Think of optical fibers as tiny, transparent highways for light. The NA tells us how good that highway is at collecting light and guiding it along. It’s a fundamental parameter, and understanding its derivation will give you a deep insight into fiber optic communication and its applications.

This topic directly relates to our **Course Outcome 1 (CO1): Explain the basic principles and properties of laser and optic fibers.** Numerical aperture is one of the core properties that defines how an optical fiber *behaves*. It dictates how much light can enter the fiber and how efficiently it can be transmitted. Without understanding NA, we can't really appreciate how these tiny strands of glass carry vast amounts of information.

### What is Numerical Aperture, Really?

Before we get into the math, let's get a feel for what NA represents. Imagine you have a flashlight and you're trying to shine its light into the end of an optical fiber.

*   **If the flashlight beam is directly aimed at the fiber's core, it’s likely to go in.**
*   **But what if you shine the light at a slight angle?** At some point, the light won't enter the core anymore; it will just bounce off the surface or get lost.
*   **The Numerical Aperture quantifies the range of angles over which the fiber can accept and guide light.** It’s essentially a measure of the fiber's light-gathering ability.

The higher the NA, the wider the cone of light that can enter the fiber and be guided. This is super important for applications where you need to capture as much light as possible, like in medical imaging (endoscopes) or connecting devices over short distances.

### The Foundation: Total Internal Reflection (TIR)

To understand how light is guided in an optical fiber, we *must* go back to the principle of **Total Internal Reflection (TIR)**. This is a concept we’ve likely encountered before, and it’s the bedrock of fiber optics.

Remember Snell’s Law? It describes how light bends when it passes from one medium to another. Snell's Law states:

$n_1 \sin(\theta_1) = n_2 \sin(\theta_2)$

Where:
*   $n_1$ is the refractive index of the first medium.
*   $\theta_1$ is the angle of incidence in the first medium.
*   $n_2$ is the refractive index of the second medium.
*   $\theta_2$ is the angle of refraction in the second medium.

Now, consider an optical fiber. It typically has a **core** (the central part where light travels) and a **cladding** (the outer layer surrounding the core). For TIR to occur, two conditions must be met:

1.  **Light must be traveling from a medium of higher refractive index to a medium of lower refractive index.** This means the core's refractive index ($n_1$) must be greater than the cladding's refractive index ($n_2$). So, $n_{\text{core}} > n_{\text{cladding}}$. This is a non-negotiable requirement.
2.  **The angle of incidence at the core-cladding boundary must be greater than or equal to the critical angle ($\theta_c$).** When the angle of incidence equals the critical angle, the refracted ray travels along the boundary (angle of refraction is 90 degrees). If the angle of incidence is greater than the critical angle, the light is reflected back into the core.

From Snell's Law, when $\theta_2 = 90^\circ$, $\sin(\theta_2) = 1$. So, $n_1 \sin(\theta_1) = n_2 \times 1$.
The critical angle $\theta_c$ is the angle of incidence $\theta_1$ when $\theta_2 = 90^\circ$.
Therefore, $n_{\text{core}} \sin(\theta_c) = n_{\text{cladding}}$.
This gives us the critical angle: $\sin(\theta_c) = \frac{n_{\text{cladding}}}{n_{\text{core}}}$.

### Deriving Numerical Aperture

Alright, now let's put it all together to derive the NA. Imagine a light ray entering the fiber from the air (or another medium) at the fiber's end face.

Let's define our angles:

*   **$\theta_{\text{in}}$ (or $\alpha$):** This is the **acceptance angle**. It's the angle between the fiber axis and the incoming ray in the external medium (let's say air, with refractive index $n_0 \approx 1$) that allows the ray to be guided by the fiber. Any ray entering at an angle greater than $\theta_{\text{in}}$ will escape.
*   **$\theta_1$:** This is the angle of incidence of the ray at the core-cladding interface *after* it has entered the fiber and potentially refracted at the end face.

Consider a ray entering the fiber end face from air (refractive index $n_0$) at an angle $\theta_{\text{in}}$ with respect to the fiber axis. This ray then refracts into the core of the fiber (refractive index $n_{\text{core}}$). Let the angle of refraction inside the core, with respect to the normal to the end face, be $\theta_{\text{ref}}$.

Using Snell's Law at the fiber end face:
$n_0 \sin(\theta_{\text{in}}) = n_{\text{core}} \sin(\theta_{\text{ref}})$

Now, look at the geometry inside the fiber. The ray travels down the core. At some point, it strikes the core-cladding boundary. The angle of incidence at this boundary, $\theta_1$, is related to $\theta_{\text{ref}}$. If we consider the fiber axis and the normal to the core-cladding boundary (which is along the radius), we can see that $\theta_1$ and $\theta_{\text{ref}}$ are complementary angles. That is, $\theta_1 + \theta_{\text{ref}} = 90^\circ$.
So, $\theta_{\text{ref}} = 90^\circ - \theta_1$.

Substituting this into Snell's Law at the end face:
$n_0 \sin(\theta_{\text{in}}) = n_{\text{core}} \sin(90^\circ - \theta_1)$
Since $\sin(90^\circ - \theta_1) = \cos(\theta_1)$:
$n_0 \sin(\theta_{\text{in}}) = n_{\text{core}} \cos(\theta_1)$

Now, for the ray to be guided by the fiber, it must undergo total internal reflection at the core-cladding interface. This means the angle of incidence $\theta_1$ must be greater than or equal to the critical angle $\theta_c$. The *maximum* acceptance angle $\theta_{\text{in, max}}$ (which we often just call the acceptance angle, $\theta_{\text{in}}$) occurs when $\theta_1$ is at its minimum allowed value for TIR, which is the critical angle $\theta_c$.

So, for the maximum acceptance angle:
$n_0 \sin(\theta_{\text{in, max}}) = n_{\text{core}} \cos(\theta_c)$

We know from our earlier discussion that $\sin(\theta_c) = \frac{n_{\text{cladding}}}{n_{\text{core}}}$.
We also know the trigonometric identity: $\cos^2(\theta_c) + \sin^2(\theta_c) = 1$.
Therefore, $\cos(\theta_c) = \sqrt{1 - \sin^2(\theta_c)}$.
Substituting the expression for $\sin(\theta_c)$:
$\cos(\theta_c) = \sqrt{1 - \left(\frac{n_{\text{cladding}}}{n_{\text{core}}}\right)^2} = \sqrt{\frac{n_{\text{core}}^2 - n_{\text{cladding}}^2}{n_{\text{core}}^2}} = \frac{\sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}}{n_{\text{core}}}$

Now, substitute this expression for $\cos(\theta_c)$ back into the equation for the maximum acceptance angle:
$n_0 \sin(\theta_{\text{in, max}}) = n_{\text{core}} \left( \frac{\sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}}{n_{\text{core}}} \right)$

The $n_{\text{core}}$ terms cancel out, leaving:
$n_0 \sin(\theta_{\text{in, max}}) = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}$

The **Numerical Aperture (NA)** is *defined* as $n_0 \sin(\theta_{\text{in, max}})$. This definition is very useful because it relates the NA directly to the acceptance angle and the refractive index of the medium from which light is entering.

So, the final expression for the Numerical Aperture is:

$$ \text{NA} = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2} $$

And, also, we have:

$$ \text{NA} = n_0 \sin(\theta_{\text{in, max}}) $$

This is a very important result! It tells us that the NA of an optical fiber depends only on the refractive indices of its core and cladding materials. If the light is entering from air, then $n_0 = 1$, and the NA simplifies to:

$$ \text{NA} = \sin(\theta_{\text{in, max}}) \quad \text{(when light enters from air)} $$

This means that the sine of the maximum acceptance angle is numerically equal to the NA when light enters from air.

### Connecting to Course Outcomes and Applications

Let's see how this derivation ties into our course objectives:

*   **CO1: Explain the basic principles and properties of laser and optic fibers.**
    *   This derivation explains a fundamental property of optical fibers: their ability to capture and guide light. It relies on the principles of refraction (Snell's Law) and total internal reflection, which are core optical phenomena relevant to both lasers (as light sources) and fibers.
    *   The NA dictates how efficiently a fiber can accept light from a source, including a laser. A laser, being a highly directional source, can be coupled efficiently into a fiber with a suitable NA.

*   **Understanding the Significance of NA:**
    *   **Light Gathering Ability:** A higher NA means a wider acceptance cone. Imagine a wide-mouthed funnel versus a narrow-mouthed one. The wider funnel (higher NA) collects more 'stuff' (light) from a wider area. This is critical in situations like medical endoscopes, where you need to capture as much detail (light) from the internal body as possible.
    *   **Data Rate (for step-index fibers):** In simpler, step-index fibers, light rays entering at different angles travel different path lengths. Rays entering at larger angles (closer to the acceptance angle) travel longer paths and arrive later than rays traveling straight down the axis. This spreading of pulses is called **modal dispersion**. A higher NA leads to greater modal dispersion, which limits the data rate. So, paradoxically, for high-speed communication, we often prefer fibers with *lower* NAs, even though they collect less light. This is why there are different types of fibers for different applications!
    *   **Coupling Efficiency:** The NA of the fiber must be matched to the NA of the light source (like a laser or an LED) for efficient transfer of light.

**Example to visualize:**
Imagine you're trying to get water from a wide bucket into a narrow pipe.
*   If you pour the water directly into the pipe's opening, it all goes in.
*   If you pour from a slight angle, some water might miss the opening and spill.
*   The "Numerical Aperture" of the pipe's opening is like how wide the opening is relative to its length, determining how much water you can pour into it from various angles without spilling. A wider opening (higher NA) can accept water from a larger range of angles.

**Textbook References:**
The derivation and concepts discussed here are well-covered in your textbooks.
*   **Avadhanulu, Kshirsagar, Murthy:** You’ll find the fundamental optical principles and the derivation of NA in their sections on wave optics and fiber optics.
*   **Ghatak:** Ajoy Ghatak's "Optics" is a classic and provides a rigorous treatment of these topics, often delving into the wave nature of light in fibers, which is related to how NA affects propagation.
*   **Keiser:** Gerd Keiser's "Fiber Optic Communications" is a dedicated resource that will emphasize the practical implications of NA in communication systems.

### Key Takeaways and Exam Focus

*   **Definition of NA:** Remember both forms: NA = $\sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}$ and NA = $n_0 \sin(\theta_{\text{in, max}})$.
*   **Core Requirements:** $n_{\text{core}} > n_{\text{cladding}}$ is essential for TIR.
*   **Relationship between NA and Acceptance Angle:** A higher NA means a larger acceptance angle.
*   **Significance:** NA governs light-gathering ability and, importantly, modal dispersion in step-index fibers.
*   **Derivation Steps:** Be comfortable explaining the steps involving Snell's Law at the end face and at the core-cladding boundary, and the role of the critical angle.

This is the core of understanding how light enters and is guided by optical fibers. The numerical aperture is your key to unlocking this understanding.

---

### Sample Questions and Answers

**1. Conceptual Question:**
**Explain why the core of an optical fiber must have a higher refractive index than its cladding.**

**Answer:**
The guiding of light within an optical fiber relies on the principle of Total Internal Reflection (TIR). For TIR to occur, light must be traveling from a medium of higher refractive index to a medium of lower refractive index. In an optical fiber, the core is the medium through which light propagates, and the cladding is the surrounding medium. Therefore, the refractive index of the core ($n_{\text{core}}$) must be greater than the refractive index of the cladding ($n_{\text{cladding}}$). This condition ensures that when light traveling in the core strikes the core-cladding boundary at an angle greater than the critical angle, it is reflected back into the core instead of being refracted out into the cladding.

**2. Derivation/Application Question:**
**Derive the expression for the Numerical Aperture (NA) of an optical fiber and explain its physical significance.**

**Answer:**
**Derivation:**
Consider a light ray entering an optical fiber from a medium with refractive index $n_0$ at an acceptance angle $\theta_{\text{in}}$ with respect to the fiber axis. The fiber core has a refractive index $n_{\text{core}}$ and the cladding has a refractive index $n_{\text{cladding}}$, where $n_{\text{core}} > n_{\text{cladding}}$.

1.  **At the fiber end face:** Using Snell's Law, the ray refracts into the core. If $\theta_{\text{ref}}$ is the angle of refraction with respect to the normal to the end face:
    $n_0 \sin(\theta_{\text{in}}) = n_{\text{core}} \sin(\theta_{\text{ref}})$

2.  **At the core-cladding interface:** For the ray to be guided, it must undergo Total Internal Reflection (TIR) at the core-cladding boundary. Let $\theta_1$ be the angle of incidence at this boundary. TIR occurs when $\theta_1 \ge \theta_c$, where $\theta_c$ is the critical angle. The critical angle is given by $\sin(\theta_c) = \frac{n_{\text{cladding}}}{n_{\text{core}}}$.

3.  **Geometric relationship:** The angle of refraction $\theta_{\text{ref}}$ at the end face and the angle of incidence $\theta_1$ at the core-cladding boundary are complementary, i.e., $\theta_{\text{ref}} + \theta_1 = 90^\circ$. Thus, $\theta_{\text{ref}} = 90^\circ - \theta_1$.

4.  **Substituting into Snell's Law:**
    $n_0 \sin(\theta_{\text{in}}) = n_{\text{core}} \sin(90^\circ - \theta_1) = n_{\text{core}} \cos(\theta_1)$

5.  **Maximum acceptance angle:** The maximum acceptance angle $\theta_{\text{in, max}}$ occurs when $\theta_1$ is at its minimum for TIR, which is $\theta_c$.
    $n_0 \sin(\theta_{\text{in, max}}) = n_{\text{core}} \cos(\theta_c)$

6.  **Using the trigonometric identity:** $\cos(\theta_c) = \sqrt{1 - \sin^2(\theta_c)} = \sqrt{1 - \left(\frac{n_{\text{cladding}}}{n_{\text{core}}}\right)^2} = \frac{\sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}}{n_{\text{core}}}$

7.  **Final NA expression:** Substituting the expression for $\cos(\theta_c)$:
    $n_0 \sin(\theta_{\text{in, max}}) = n_{\text{core}} \left( \frac{\sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}}{n_{\text{core}}} \right)$
    $n_0 \sin(\theta_{\text{in, max}}) = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}$

    The **Numerical Aperture (NA)** is defined as $n_0 \sin(\theta_{\text{in, max}})$.
    Therefore, $\text{NA} = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}$.
    If the fiber is in air ($n_0 = 1$), then $\text{NA} = \sin(\theta_{\text{in, max}})$.

**Physical Significance:**
The numerical aperture quantifies the light-gathering ability of the optical fiber.
*   It defines the maximum angle ($\theta_{\text{in, max}}$) at which light can enter the fiber and be guided down its core by TIR.
*   A larger NA indicates a wider acceptance cone, meaning the fiber can capture more light from a source.
*   In step-index fibers, NA is also directly related to modal dispersion, as rays entering at larger angles (higher NA) travel longer paths and arrive later, limiting the data transmission rate.

**3. Calculation Question:**
**An optical fiber has a core refractive index of 1.55 and a cladding refractive index of 1.50. Calculate its Numerical Aperture. If light enters from air, what is the maximum acceptance angle?**

**Answer:**
Given:
$n_{\text{core}} = 1.55$
$n_{\text{cladding}} = 1.50$
The medium is air, so $n_0 = 1$.

**Calculation of NA:**
Using the formula:
$\text{NA} = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}$
$\text{NA} = \sqrt{(1.55)^2 - (1.50)^2}$
$\text{NA} = \sqrt{2.4025 - 2.25}$
$\text{NA} = \sqrt{0.1525}$
$\text{NA} \approx 0.3905$

**Calculation of Maximum Acceptance Angle ($\theta_{\text{in, max}}$):**
Since the light enters from air ($n_0 = 1$), we have:
$\text{NA} = n_0 \sin(\theta_{\text{in, max}})$
$0.3905 = 1 \times \sin(\theta_{\text{in, max}})$
$\sin(\theta_{\text{in, max}}) = 0.3905$
$\theta_{\text{in, max}} = \arcsin(0.3905)$
$\theta_{\text{in, max}} \approx 22.97^\circ$

So, the Numerical Aperture of the fiber is approximately 0.3905, and the maximum angle at which light can enter from air and be guided is about 22.97 degrees.
