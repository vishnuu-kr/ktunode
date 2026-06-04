---
title: "Optical fiber-Principle of propagation of light"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 4: Laser & Fiber Optics"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da245"
status: "completed"
scrapedAt: "2026-05-23T17:36:07.766Z"
---
## Module 4: Laser & Fiber Optics - Optical Fiber: Principle of Propagation of Light

Welcome to our exploration of optical fibers! In this segment, we'll dive into the fundamental principles that govern how light travels through these amazing conduits, which are the backbone of modern communication. Understanding this is crucial, as it directly relates to how we can transmit information at incredible speeds across vast distances.

Think of optical fibers as incredibly thin, flexible strands of glass or plastic, thinner than a human hair. They are designed to carry light signals. But how does light, which usually travels in straight lines, manage to bend and follow the curves of these fibers? That’s where the magic of physics comes in, specifically the principles of **reflection** and **refraction**.

### The Core Concept: Total Internal Reflection (TIR)

The entire operation of an optical fiber relies on a phenomenon called **Total Internal Reflection (TIR)**. It's the key to keeping the light trapped within the fiber and guiding it along its length.

To understand TIR, we first need to revisit a fundamental optical principle: **Snell's Law**.

**Snell's Law: The Foundation**

When light passes from one medium to another – say, from air to water, or from glass to air – it bends. This bending is called **refraction**. Snell's Law quantifies this bending. It states:

$n_1 \sin(\theta_1) = n_2 \sin(\theta_2)$

Where:
*   $n_1$ is the refractive index of the first medium (where the light is coming from).
*   $\theta_1$ is the angle of incidence (the angle between the incoming light ray and the normal – an imaginary line perpendicular to the surface).
*   $n_2$ is the refractive index of the second medium (where the light is going into).
*   $\theta_2$ is the angle of refraction (the angle between the refracted light ray and the normal).

The **refractive index ($n$)** is a measure of how much light slows down when it enters a medium. A higher refractive index means light slows down more and bends more towards the normal when entering the medium from a rarer medium (like air). Think of it like trying to walk through water versus walking through air – you slow down more in water. Glass and plastic have higher refractive indices than air.

**Connecting to Optical Fibers: The Structure Matters**

An optical fiber isn't just a single piece of glass. It has a specific structure designed to exploit Snell's Law and achieve TIR. A typical optical fiber consists of two main parts:

1.  **The Core:** This is the central part of the fiber where the light actually travels. It's made of a material (usually glass or plastic) with a specific refractive index, let's call it $n_{\text{core}}$.
2.  **The Cladding:** This surrounds the core and is also made of glass or plastic, but importantly, it has a slightly *lower* refractive index than the core, let's call it $n_{\text{cladding}}$. So, $n_{\text{core}} > n_{\text{cladding}}$.

This difference in refractive indices between the core and the cladding is absolutely critical for TIR.

**How TIR Happens in a Fiber**

Imagine a light ray entering the fiber core. As it travels down the core, it eventually strikes the boundary between the core and the cladding. This boundary is where the magic happens.

Let's consider the light ray hitting the core-cladding interface.
*   The light is traveling from the core (medium 1, with refractive index $n_{\text{core}}$) to the cladding (medium 2, with refractive index $n_{\text{cladding}}$).
*   Since $n_{\text{core}} > n_{\text{cladding}}$, when the light ray hits the interface, it will bend *away* from the normal.

Now, think about varying the **angle of incidence** ($\theta_1$) at this core-cladding interface.
*   If the angle of incidence is small, the light will refract into the cladding. Some light might even escape.
*   As we increase the angle of incidence, the angle of refraction ($\theta_2$) also increases.
*   There comes a specific angle of incidence, called the **critical angle** ($\theta_c$), where the angle of refraction becomes 90 degrees ($\theta_2 = 90^\circ$). At this point, the refracted ray travels exactly along the boundary between the core and the cladding.

What happens if the angle of incidence is *greater* than the critical angle ($\theta_1 > \theta_c$)?

According to Snell's Law ($n_1 \sin(\theta_1) = n_2 \sin(\theta_2)$), if $\theta_1 > \theta_c$, then $\sin(\theta_1) > \sin(\theta_c)$. Since $\sin(\theta_c) = \frac{n_2}{n_1}$ (where $n_2 < n_1$), this means $\sin(\theta_1) > \frac{n_2}{n_1}$. If we try to solve for $\sin(\theta_2)$, we get $\sin(\theta_2) = \frac{n_1}{n_2} \sin(\theta_1)$. Since $\frac{n_1}{n_2} > 1$ and $\sin(\theta_1) > \frac{n_2}{n_1}$, the value of $\sin(\theta_2)$ would be greater than 1, which is impossible for a real angle.

This impossibility tells us that no light can be refracted into the second medium. Instead, all the light is reflected back into the first medium (the core). This is **Total Internal Reflection (TIR)**!

**Analogy Time:** Imagine you're playing billiards. If you hit the cue ball at a very shallow angle against the cushion, it might bounce off at a predictable angle. But if you hit it at a very steep angle, and the cushion was designed perfectly (like our cladding), the ball might just bounce straight back to you, perfectly contained. That's kind of like TIR.

**Why is this important for fiber optics?**

Because as light travels down the fiber, it continuously strikes the core-cladding boundary at angles greater than the critical angle. Each time it hits, it undergoes TIR and bounces back into the core. This process repeats millions of times, guiding the light along the entire length of the fiber, even around bends, with minimal loss of energy. It's like the light is perpetually playing a game of cosmic hopscotch within the fiber.

This phenomenon is what allows us to send signals for kilometers without the light dissipating. It directly supports **CO4: Apply the comprehended knowledge about laser and fiber optics in various engineering applications**. Our understanding of TIR is fundamental to how fiber optic communication systems work, enabling high-speed data transmission.

### Critical Angle and Acceptance Angle: Designing the Fiber

Now, let's get a bit more precise.

**Critical Angle ($\theta_c$)**

From Snell's Law, at the critical angle, $\theta_2 = 90^\circ$:
$n_{\text{core}} \sin(\theta_c) = n_{\text{cladding}} \sin(90^\circ)$
$n_{\text{core}} \sin(\theta_c) = n_{\text{cladding}} \times 1$
$\sin(\theta_c) = \frac{n_{\text{cladding}}}{n_{\text{core}}}$

This equation tells us that the critical angle depends only on the refractive indices of the core and the cladding. A larger difference between $n_{\text{core}}$ and $n_{\text{cladding}}$ leads to a smaller critical angle.

**Acceptance Angle and Numerical Aperture (NA)**

Not all light rays that enter the fiber will be guided. Only those rays that enter the fiber core at a specific range of angles will experience TIR. This range of angles is determined by the **acceptance angle**.

Imagine light rays striking the end face of the fiber.
*   Light entering perpendicular to the end face (0 degrees incidence) travels straight down the axis and will definitely be guided, assuming it stays within the core.
*   As the angle of incidence at the end face increases, the angle of the ray with respect to the fiber axis also increases.

The **acceptance cone** is the cone of light rays entering the fiber at the input end that will be successfully guided through the fiber via TIR. The half-angle of this cone is called the **acceptance angle** ($\theta_a$).

Any ray entering at an angle greater than the acceptance angle will not undergo TIR and will be lost from the fiber.

The acceptance angle is related to the refractive indices by the **Numerical Aperture (NA)**. The NA is a measure of the light-gathering ability of the fiber. It's defined as:

$NA = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}$

And the acceptance angle $\theta_a$ is related to NA by:

$NA = \sin(\theta_a)$

So, $\sin(\theta_a) = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}$

**Why is NA important?**

A higher NA means a larger acceptance angle and a wider acceptance cone. This makes it easier to couple light into the fiber. Think of it as having a bigger "mouth" to catch light.

This concept of acceptance angle is vital for practical applications. If you are coupling light from a source (like a laser or an LED) into a fiber, you need to ensure the light source emits light within the fiber's acceptance cone to maximize signal transmission. This is a direct application of our learning, linking physics principles to engineering design.

### Modes of Propagation

Now, when light travels within the fiber core, it doesn't just travel as a single, continuous beam. Due to the wave nature of light, it propagates in distinct patterns called **modes**.

The number of modes a fiber can support depends on its core diameter, the wavelength of the light, and its numerical aperture.

*   **Single-Mode Fiber (SMF):** These fibers have very small core diameters (typically 8-10 micrometers) and low NA. They are designed to allow only one mode of light to propagate. This is incredibly advantageous for long-distance communication as it minimizes signal distortion (dispersion) and allows for much higher bandwidth. This is achieved by having a very small acceptance angle and a critical angle that is rarely exceeded for typical incoming rays.

*   **Multi-Mode Fiber (MMF):** These fibers have larger core diameters (typically 50 or 62.5 micrometers) and higher NA. They can support many different modes of light propagation. While easier to couple light into (due to a larger acceptance angle), the different modes travel at slightly different speeds within the fiber. This leads to **modal dispersion**, where the light pulses spread out, limiting the bandwidth and the distance over which signals can be reliably transmitted.

**Think of it like this:** In a single-mode fiber, all the light travels in a single, streamlined lane on a highway. In a multi-mode fiber, it's like many cars traveling in different lanes, some taking shortcuts, some taking longer routes, and they all arrive at different times.

This distinction between single-mode and multi-mode fibers is a direct application of how the principle of propagation (TIR) and the resulting modal structure influence the performance of fiber optic systems. It's relevant to understanding the choices made in telecommunications engineering.

### Types of Optical Fibers based on Refractive Index Profile

The way the refractive index changes across the radius of the fiber core also influences how light propagates and the resulting dispersion. This leads to two main types of fibers:

1.  **Step-Index Fiber:** In a step-index fiber, the refractive index of the core is uniform throughout, and there's an abrupt drop in refractive index at the core-cladding boundary (a "step").
    *   **Step-Index Multi-Mode Fiber:** Has a larger core and supports multiple modes. Different modes travel at different speeds, leading to significant modal dispersion.
    *   **Step-Index Single-Mode Fiber:** Has a very small core and supports only one mode, minimizing modal dispersion.

2.  **Graded-Index Fiber (GRIN Fiber):** In a graded-index fiber, the refractive index of the core gradually decreases from the center towards the cladding. The refractive index profile is parabolic.
    *   **Graded-Index Multi-Mode Fiber:** This design is clever. The light rays that travel along the center of the core (where the refractive index is highest) travel slower. Rays that travel towards the edge of the core (where the refractive index is lower) travel faster. Moreover, rays that travel further from the axis actually bend back towards the center. This profiling helps to equalize the travel times of different modes, significantly reducing modal dispersion compared to step-index multi-mode fibers. This makes them suitable for medium-range data transmission.

Understanding these refractive index profiles and their impact on light propagation is crucial for selecting the right type of fiber for a specific application, further linking physics to engineering design and fulfilling **CO4**.

### Connection to Other Course Outcomes:

*   **CO1 & CO2 (Semiconductor Physics & Behavior):** While this topic focuses on light propagation, the materials used for fiber optics (glass, polymers) are often derived from or fabricated using processes related to solid-state physics and semiconductor technology. The principles of light generation (lasers, LEDs) which are the sources for optical fibers are deeply rooted in semiconductor physics. Understanding how light is generated is a prerequisite for understanding how it's transmitted.
*   **CO5 (Conducting Experiments):** Concepts like measuring refractive indices, critical angles, and numerical apertures are fundamental laboratory experiments in physics and engineering courses that deal with optics. You might perform experiments to verify Snell's Law or measure the NA of an optical fiber.

### Summary and Key Takeaways:

*   **Total Internal Reflection (TIR)** is the fundamental principle governing light propagation in optical fibers.
*   TIR occurs when light travels from a medium of higher refractive index to a medium of lower refractive index at an angle of incidence greater than the **critical angle** ($\theta_c$).
*   An optical fiber has a **core** with a higher refractive index ($n_{\text{core}}$) and a **cladding** with a lower refractive index ($n_{\text{cladding}}$).
*   The **critical angle** is given by $\sin(\theta_c) = \frac{n_{\text{cladding}}}{n_{\text{core}}}$.
*   The **Numerical Aperture (NA)** quantifies the light-gathering ability of the fiber, $NA = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}$.
*   The **acceptance angle** ($\theta_a$) is related to NA by $NA = \sin(\theta_a)$, defining the cone of light that can be guided.
*   Light propagates in discrete **modes** within the fiber.
*   **Single-mode fibers** support only one mode, minimizing dispersion for long-haul communication.
*   **Multi-mode fibers** support multiple modes, but suffer from modal dispersion, limiting their range.
*   **Graded-index fibers** use a varying refractive index profile to reduce modal dispersion compared to step-index multi-mode fibers.

Remember, the efficiency and speed of our modern communication systems, from the internet to telephone networks, are directly enabled by our ability to precisely control light propagation using these optical fiber principles.

---

### Sample Questions with Answers:

**Q1. What is the fundamental principle responsible for guiding light through an optical fiber?**

**Answer:** The fundamental principle is **Total Internal Reflection (TIR)**. Light rays striking the boundary between the fiber's core and cladding at an angle greater than the critical angle are reflected back into the core, allowing them to travel long distances.

**Q2. Explain why the core of an optical fiber must have a higher refractive index than the cladding.**

**Answer:** For Total Internal Reflection (TIR) to occur, light must be traveling from a medium of higher refractive index to a medium of lower refractive index. In an optical fiber, the core has a higher refractive index ($n_{\text{core}}$) and the cladding has a lower refractive index ($n_{\text{cladding}}$). This difference ($n_{\text{core}} > n_{\text{cladding}}$) is essential to satisfy the conditions for TIR at the core-cladding interface, ensuring that light stays trapped within the core. This relates directly to Snell's Law and the critical angle calculation.

**Q3. A step-index optical fiber has a core refractive index of 1.50 and a cladding refractive index of 1.45. Calculate the critical angle and the Numerical Aperture (NA) of the fiber.**

**Answer:**
*   **Critical Angle ($\theta_c$):**
    We use the formula: $\sin(\theta_c) = \frac{n_{\text{cladding}}}{n_{\text{core}}}$
    $\sin(\theta_c) = \frac{1.45}{1.50} \approx 0.9667$
    $\theta_c = \arcsin(0.9667) \approx 75.04^\circ$

*   **Numerical Aperture (NA):**
    We use the formula: $NA = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2}$
    $NA = \sqrt{(1.50)^2 - (1.45)^2}$
    $NA = \sqrt{2.25 - 2.1025}$
    $NA = \sqrt{0.1475} \approx 0.384$

**Q4. What is modal dispersion and in which type of optical fiber is it most prominent?**

**Answer:** Modal dispersion occurs in multi-mode optical fibers. It's the phenomenon where different modes (paths or patterns of light propagation) travel at different speeds along the fiber due to differences in their path lengths. This causes the transmitted light pulse to spread out, limiting the data rate and transmission distance. It is most prominent in **step-index multi-mode fibers** because the refractive index profile is uniform, leading to the most significant variations in path lengths for different modes. Graded-index fibers are designed to mitigate this effect.

**Q5. Distinguish between single-mode and multi-mode optical fibers in terms of core diameter and typical applications.**

**Answer:**
*   **Single-Mode Fiber (SMF):**
    *   **Core Diameter:** Very small, typically 8-10 micrometers.
    *   **Applications:** Long-haul telecommunications, high-speed internet backbone, CATV networks, and applications requiring very low signal distortion and high bandwidth. Designed for single-mode propagation.

*   **Multi-Mode Fiber (MMF):**
    *   **Core Diameter:** Larger, typically 50 or 62.5 micrometers.
    *   **Applications:** Shorter distance applications such as local area networks (LANs), data centers, and internal building connectivity. Easier to couple light into but has limitations due to modal dispersion.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
