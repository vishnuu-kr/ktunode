---
title: "Numerical aperture –Derivation"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 4: Laser & Fiber Optics"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da247"
status: "completed"
scrapedAt: "2026-05-23T17:36:09.775Z"
---
# Module 4: Laser & Fiber Optics - Numerical Aperture Derivation

Welcome to Module 4! Today, we're diving into the fascinating world of optical fibers and lasers, specifically focusing on a crucial parameter that dictates how efficiently light is transmitted through an optical fiber: the **Numerical Aperture (NA)**. Understanding NA is key to unlocking many of the applications of fiber optics in electrical science, from telecommunications to sensor technology. This topic directly relates to **Course Outcome 4 (CO4)**, where we aim to apply our knowledge of laser and fiber optics in engineering applications. In essence, NA tells us how well our fiber can "gather" light and guide it.

---

## Understanding the Basics: Light Guiding in Optical Fibers

Before we get into the derivation, let's quickly recap how an optical fiber actually works. Imagine a long, thin strand of glass or plastic. It has a central part called the **core**, and surrounding it is a layer called the **cladding**. The magic of light transmission happens because of the **principle of Total Internal Reflection (TIR)**.

Think of it like this: if you're trying to shine a laser pointer from inside a swimming pool into the air, at certain angles, the light won't escape into the air; instead, it will bounce back into the water. This happens when the light tries to move from a denser medium (water) to a rarer medium (air) at an angle greater than a specific critical angle.

Optical fibers exploit this. The core of the fiber has a slightly higher refractive index ($n_1$) than the cladding ($n_2$). So, when light enters the core and strikes the boundary between the core and cladding at an angle greater than the critical angle, it's reflected back into the core. This process repeats along the length of the fiber, allowing light to travel long distances with minimal loss.

---

## Defining Numerical Aperture (NA)

So, what exactly is the Numerical Aperture? In simple terms, NA is a measure of the light-gathering ability of an optical fiber. It quantifies the range of angles over which the fiber can accept and guide light. A higher NA means the fiber can accept light over a wider range of angles, which generally leads to higher signal strength and easier coupling of light into the fiber.

Think of a funnel. A wider funnel (higher NA) can catch more raindrops (light rays) than a narrow funnel (lower NA). For electrical engineers, this is crucial when connecting sources of light (like lasers or LEDs) to optical fibers. A good match in NA ensures maximum power transfer.

---

## Derivation of Numerical Aperture

Now, let's get down to the mathematics. We'll derive the expression for NA by considering the conditions for total internal reflection. This derivation is a classic example of applying Snell's Law and the concept of critical angle, which are fundamental principles discussed in introductory optics and solid-state physics texts like **Arthur Beiser's "Concepts of Modern Physics"** and **H K Malik and A K Singh's "Engineering Physics"**.

Consider an optical fiber with a core of refractive index $n_1$ and a cladding of refractive index $n_2$. Let's assume $n_1 > n_2$.

**Step 1: Light Entering the Fiber**

Imagine a light ray entering the fiber from the air (refractive index $n_0 \approx 1$). Let the angle of incidence at the fiber's end face with respect to the fiber's axis be $\theta_1$.

According to Snell's Law at the air-core interface:

$n_0 \sin(\theta_1) = n_1 \sin(\theta_2)$

Since $n_0 \approx 1$, this simplifies to:

$\sin(\theta_1) = n_1 \sin(\theta_2)$  (Equation 1)

Here, $\theta_2$ is the angle of refraction inside the core, with respect to the fiber's axis.

**Step 2: Condition for Total Internal Reflection**

For light to be guided within the fiber core via TIR, it must strike the core-cladding interface at an angle greater than or equal to the critical angle, $\theta_c$. The critical angle is defined by Snell's Law at the core-cladding interface:

$n_1 \sin(\theta_c) = n_2 \sin(90^\circ)$

Since $\sin(90^\circ) = 1$:

$n_1 \sin(\theta_c) = n_2$

Therefore, the critical angle is:

$\sin(\theta_c) = \frac{n_2}{n_1}$  (Equation 2)

**Step 3: Relating Angles Inside the Fiber**

Now, consider the light ray propagating within the core. If the ray makes an angle $\theta_2$ with the fiber axis at the point of entry, when it strikes the core-cladding interface, the angle between the ray and the normal to the interface will be $(90^\circ - \theta_2)$.

For TIR to occur, this angle must be greater than or equal to the critical angle $\theta_c$:

$90^\circ - \theta_2 \ge \theta_c$

Or, rewritten:

$\theta_2 \le 90^\circ - \theta_c$

The maximum angle at which light can be launched into the fiber and still be guided is when $\theta_2 = 90^\circ - \theta_c$. This corresponds to the condition where the ray just grazes the core-cladding boundary.

**Step 4: Combining Equations to Find the Acceptance Angle**

Let's substitute the maximum value of $\theta_2$ back into Equation 1:

$\sin(\theta_1)_{\text{max}} = n_1 \sin(90^\circ - \theta_c)$

We know that $\sin(90^\circ - \theta_c) = \cos(\theta_c)$. So:

$\sin(\theta_1)_{\text{max}} = n_1 \cos(\theta_c)$

Now, we can use the identity $\cos^2(\theta_c) + \sin^2(\theta_c) = 1$, which means $\cos(\theta_c) = \sqrt{1 - \sin^2(\theta_c)}$.

Substitute the expression for $\sin(\theta_c)$ from Equation 2:

$\cos(\theta_c) = \sqrt{1 - \left(\frac{n_2}{n_1}\right)^2} = \sqrt{1 - \frac{n_2^2}{n_1^2}} = \sqrt{\frac{n_1^2 - n_2^2}{n_1^2}} = \frac{\sqrt{n_1^2 - n_2^2}}{n_1}$

Now, substitute this back into our equation for $\sin(\theta_1)_{\text{max}}$:

$\sin(\theta_1)_{\text{max}} = n_1 \left(\frac{\sqrt{n_1^2 - n_2^2}}{n_1}\right)$

This simplifies to:

$\sin(\theta_1)_{\text{max}} = \sqrt{n_1^2 - n_2^2}$

**Step 5: The Definition of Numerical Aperture**

The angle $\theta_1$ is the angle of incidence at the fiber's end face. The maximum angle of incidence at which light can enter the fiber and be successfully guided is called the **acceptance angle**, denoted as $\theta_a$. So, $\theta_a = \theta_1_{\text{max}}$.

The **Numerical Aperture (NA)** is defined as the sine of the acceptance angle:

$NA = \sin(\theta_a) = \sin(\theta_1)_{\text{max}}$

Therefore, we arrive at the fundamental formula for Numerical Aperture:

$$ \boxed{NA = \sqrt{n_1^2 - n_2^2}} $$

This equation is crucial, and you'll often see it in exams. Remember this: the NA depends only on the refractive indices of the core ($n_1$) and the cladding ($n_2$).

---

## Connecting to Course Outcomes and Exam Relevance

This derivation is a direct application of fundamental physics principles, reinforcing **Course Outcome 1 (CO1)** (Semiconductor Physics – though here it's optics, the principles of light interaction are foundational) and **Course Outcome 2 (CO2)** (behavior of materials – how refractive index dictates light behavior). More importantly, understanding NA is vital for **Course Outcome 4 (CO4)** – applying fiber optics in engineering.

*   **Why is NA important for CO4?** When designing optical communication systems or sensors, you need to know how much light you can couple from a source (like a laser or LED) into the fiber. The NA of the source and the fiber must be well-matched. If the fiber's NA is too small, it won't capture much light, leading to weak signals. If it's too large, you might introduce unwanted modes that can cause dispersion and distort the signal, especially in longer fibers.
*   **Exam Tip:** Be prepared to derive this formula and explain the physical significance of each step. The key is to link the entry angle of light ($\theta_1$) to the critical angle at the core-cladding boundary through the intermediate angle $\theta_2$ inside the core.

---

## Factors Affecting Numerical Aperture

From the derived formula $NA = \sqrt{n_1^2 - n_2^2}$, we can see:

*   **Higher $n_1$ (core refractive index):** Increases NA. This means the core material is "optically denser," allowing light to be guided at larger angles.
*   **Lower $n_2$ (cladding refractive index):** Increases NA. This makes the contrast in refractive index between the core and cladding more pronounced, enhancing the effect of TIR.

**Relatable Example:** Imagine you're trying to catch water in a wide basin versus a narrow bucket. The basin (higher NA) can catch more water that's splashed around it. Similarly, a fiber with a higher NA can accept light from a wider cone.

**Textbook Connection:** **Arthur Beiser's "Concepts of Modern Physics"** often discusses the wave nature of light and phenomena like reflection and refraction, which are the underpinnings of this derivation. **H K Malik and A K Singh's "Engineering Physics"** would likely present this derivation in a section on optical instrumentation and communication.

---

## Related Concepts: Acceptance Cone and V-Number

**Acceptance Cone:**
The acceptance angle $\theta_a$ defines a cone within which all incident rays will be guided by the fiber. Any ray entering the fiber at an angle greater than $\theta_a$ will be lost. The sine of this angle is the NA. So, the acceptance cone is the cone of light that the fiber can accept.

**V-Number (Normalized Frequency):**
While not directly part of the NA derivation, it's closely related and often discussed alongside it. The V-number determines the number of modes that can propagate in a fiber.

$V = \frac{2 \pi a}{\lambda} NA$

Where:
*   $a$ is the radius of the fiber core.
*   $\lambda$ is the wavelength of the light.
*   $NA$ is the numerical aperture.

A lower V-number (typically $V < 2.405$) indicates that only a single mode of light can propagate, leading to single-mode fibers, which are crucial for high-bandwidth, long-distance communication. This concept connects to how NA influences the signal quality, a key aspect for **CO4**.

---

## Summary and Key Takeaways

*   **Numerical Aperture (NA)** quantifies the light-gathering ability of an optical fiber.
*   It is derived from the principle of **Total Internal Reflection (TIR)** at the core-cladding interface.
*   The derivation involves applying **Snell's Law** at both the air-fiber entrance and the core-cladding interface.
*   The key formula is: $NA = \sqrt{n_1^2 - n_2^2}$, where $n_1$ is the core refractive index and $n_2$ is the cladding refractive index.
*   A higher NA means a larger acceptance angle and greater light-gathering capacity.
*   NA is critical for efficient coupling of light sources to optical fibers and influences signal transmission characteristics.

**Remember this:** NA is a fundamental property of the fiber itself, determined by its material composition (refractive indices). It's not dependent on the incident light's angle, but it *defines* the range of angles that are accepted.

---

## Sample Questions with Answers

**Q1. Define Numerical Aperture (NA) and derive its expression.**

**Answer:**
Numerical Aperture (NA) is a dimensionless quantity that characterizes the light-gathering ability of an optical fiber. It is defined as the sine of the maximum angle of incidence ($\theta_a$), known as the acceptance angle, at which light rays can enter the fiber and be propagated by total internal reflection.

**Derivation:**
Consider light entering the fiber (core refractive index $n_1$, cladding refractive index $n_2$, with $n_1 > n_2$) from air ($n_0 \approx 1$).
1.  **At the air-core interface:** Using Snell's Law, $n_0 \sin(\theta_1) = n_1 \sin(\theta_2)$. With $n_0=1$, $\sin(\theta_1) = n_1 \sin(\theta_2)$. $\theta_1$ is the incidence angle, $\theta_2$ is the refracted angle inside the core.
2.  **Condition for TIR at core-cladding interface:** For TIR, the angle of incidence inside the core at the interface, $(90^\circ - \theta_2)$, must be greater than or equal to the critical angle $\theta_c$. The critical angle is given by $n_1 \sin(\theta_c) = n_2 \sin(90^\circ)$, so $\sin(\theta_c) = n_2/n_1$.
3.  **Maximum angle:** The maximum acceptance angle $\theta_a$ occurs when the ray grazes the core-cladding boundary, meaning $90^\circ - \theta_2 = \theta_c$, or $\theta_2 = 90^\circ - \theta_c$.
4.  **Substituting back:** Substitute $\theta_2 = 90^\circ - \theta_c$ into the first Snell's Law equation: $\sin(\theta_a) = n_1 \sin(90^\circ - \theta_c) = n_1 \cos(\theta_c)$.
5.  **Using trigonometric identity:** $\cos(\theta_c) = \sqrt{1 - \sin^2(\theta_c)} = \sqrt{1 - (n_2/n_1)^2} = \frac{\sqrt{n_1^2 - n_2^2}}{n_1}$.
6.  **Final Result:** $\sin(\theta_a) = n_1 \left(\frac{\sqrt{n_1^2 - n_2^2}}{n_1}\right) = \sqrt{n_1^2 - n_2^2}$.
    Therefore, $NA = \sin(\theta_a) = \sqrt{n_1^2 - n_2^2}$.

**Q2. If an optical fiber has a core refractive index of $1.46$ and a cladding refractive index of $1.455$, calculate its Numerical Aperture.**

**Answer:**
Given:
Core refractive index, $n_1 = 1.46$
Cladding refractive index, $n_2 = 1.455$

The formula for Numerical Aperture (NA) is:
$NA = \sqrt{n_1^2 - n_2^2}$

Substituting the given values:
$NA = \sqrt{(1.46)^2 - (1.455)^2}$
$NA = \sqrt{2.1316 - 2.117025}$
$NA = \sqrt{0.014575}$
$NA \approx 0.1207$

The Numerical Aperture of the fiber is approximately $0.1207$. This is a relatively low NA, indicating a smaller acceptance cone and potentially better for single-mode transmission if the core diameter is also small.

**Q3. Explain the significance of Numerical Aperture in optical fiber communication.**

**Answer:**
The Numerical Aperture (NA) is of paramount importance in optical fiber communication for several reasons:

1.  **Light Coupling Efficiency:** NA determines the cone of light that can be accepted by the fiber from a light source (like an LED or laser). A higher NA allows for easier and more efficient coupling of light into the fiber, leading to stronger signal transmission. For electrical engineers connecting sources to fibers, matching the NA of the source to the fiber's NA is crucial for maximizing power transfer.
2.  **Mode Structure:** NA, along with the core radius and wavelength, determines the number of modes that can propagate through the fiber (via the V-number). Fibers designed for single-mode operation have a very low NA and a small core diameter, which is essential for high-bandwidth, long-distance data transmission with minimal modal dispersion.
3.  **Dispersion:** While TIR guides light, rays entering at different angles travel different path lengths. Rays entering at larger angles (closer to the acceptance angle) travel longer zig-zag paths within the core compared to axial rays. This difference in path lengths leads to modal dispersion, where different modes arrive at the receiver at different times, broadening the optical pulse and limiting the data rate. A lower NA generally results in less modal dispersion, as it restricts the range of propagation angles. This is critical for maintaining signal integrity over long distances, a core concern in telecommunications.
4.  **Fiber Manufacturing Tolerance:** NA is a key parameter specified during fiber manufacturing. Variations in NA can affect the performance of the entire optical link.

In essence, NA dictates how much light enters the fiber and influences the potential for signal distortion due to modal dispersion, making it a fundamental parameter for designing and operating optical communication systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
