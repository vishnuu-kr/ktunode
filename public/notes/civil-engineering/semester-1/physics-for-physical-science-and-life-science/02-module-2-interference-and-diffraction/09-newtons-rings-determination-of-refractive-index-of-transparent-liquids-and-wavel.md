---
title: "Newton’s Rings-Determination of refractive index of transparent liquids and wavelength"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 2: Interference and Diffraction"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912d25"
status: "completed"
scrapedAt: "2026-05-20T18:31:29.615Z"
---
# Module 2: Interference and Diffraction

## Topic: Newton's Rings - Determination of Refractive Index of Transparent Liquids and Wavelength

Welcome, everyone! Today, we're diving into a classic and beautiful phenomenon in optics: **Newton's Rings**. This topic not only demonstrates the principles of interference but also gives us a practical tool to measure some fundamental properties of light and materials. Remember, understanding interference, like we've discussed, is key to appreciating how Newton's Rings work. This directly relates to our Course Outcome 2: **Describing the phenomena of interference and diffraction of light**. As we'll see, we'll also be using this technique in a hands-on way, which connects to Course Outcome 5: **Applying basic knowledge of principles and theories in physics to conduct experiments**.

### 1. Understanding the Setup: The Wedge of Air

Imagine you have a perfectly flat glass plate, and on top of it, you place a convex lens with a very large radius of curvature. What happens? They touch at a single point, right? Now, if you illuminate this setup from above with monochromatic light (light of a single wavelength, like from a laser – a concept from Course Outcome 1!), something magical appears: a series of concentric coloured rings. These are Newton's Rings.

But why rings? And why coloured (or bright and dark if using monochromatic light)? It's all about **interference**.

Think about the space between the lens and the glass plate. At the point of contact, this gap is practically zero. As you move away from this point, the gap gradually increases, forming a thin wedge of air. The thickness of this air wedge varies continuously.

Now, when light falls on this setup, a portion of the light gets reflected from the top surface of the glass plate (which is the bottom surface of the lens in this context), and another portion gets reflected from the bottom surface of the lens (which is the top surface of the glass plate). These two reflected waves travel slightly different paths before they recombine and reach our eyes or a screen.

The crucial part is that these two reflected waves are **coherent**. They originate from the same source, and therefore, they have a constant phase difference. When they meet, they interfere. Whether the interference is constructive (leading to bright rings) or destructive (leading to dark rings) depends on the **path difference** between the two waves and the **phase change** upon reflection.

#### 1.1 The Wedge of Air and Path Difference: A Gentle Explanation

Let's visualize this. Consider a point on the lens and plate setup where the air gap has a thickness '$t$'. Light rays falling perpendicular to the surface will travel down, reflect off the glass plate, and come back up.

*   **Ray 1:** Reflects from the top surface of the glass plate (which is the bottom surface of the lens).
*   **Ray 2:** Enters the air gap, reflects from the bottom surface of the lens (which is the top surface of the glass plate), and then travels back up through the air gap.

So, Ray 2 travels down through the air gap twice – once going down and once coming up. If the thickness of the air gap at that point is '$t$', the extra distance traveled by Ray 2 compared to Ray 1 is '$2t$'.

However, we must also consider **phase changes upon reflection**. According to our textbooks, like Avadhanulu, Kshirsagar & Murthy, when light reflects from a denser medium (air to glass in this case), it undergoes a phase change of $\pi$ radians (or 180 degrees), which is equivalent to adding half a wavelength to the path. Both Ray 1 (reflecting from glass surface) and Ray 2 (reflecting from lens surface) experience a phase change of $\pi$ radians because they both reflect from the glass surface (the lens surface is also glass). Since both rays undergo the same phase change, the *relative* phase difference remains solely due to the path difference '$2t$'.

Therefore, the total path difference between the two interfering rays is $\mathbf{\Delta = 2t}$.

This is a very important point, so let's remember it: **The path difference in Newton's Rings is twice the thickness of the air gap.**

### 2. Conditions for Constructive and Destructive Interference

Now, how do these path differences lead to bright and dark rings?

*   **Constructive Interference (Bright Rings):** Occurs when the path difference is an integer multiple of the wavelength ($\lambda$).
    $\Delta = n\lambda$
    So, $2t = n\lambda$, where $n = 0, 1, 2, 3, \ldots$ (This is for constructive interference).
    Here, '$n$' is called the **order of interference**.

*   **Destructive Interference (Dark Rings):** Occurs when the path difference is an odd multiple of half the wavelength.
    $\Delta = (2n + 1) \frac{\lambda}{2}$
    So, $2t = (2n + 1) \frac{\lambda}{2}$, where $n = 0, 1, 2, 3, \ldots$ (This is for destructive interference).

Wait, if $n$ starts from 0 for both, doesn't that mean the center should be bright? Let's look closer at the center. At the very center of the rings, the thickness '$t$' is zero. So the path difference is '$2 \times 0 = 0$'. According to the condition for constructive interference, $0 = n\lambda$, which means $n=0$. So, the center should be bright!

However, when we actually observe Newton's Rings with monochromatic light, the center is **dark**. Why? Ah, this is where the phase change upon reflection becomes crucial again, and we need to be very precise.

Let's reconsider the reflections:
*   Ray 1 reflects off the bottom surface of the lens (which is a denser medium - glass to air). This reflection does *not* involve a phase change.
*   Ray 2, after traveling down and up through the air gap, reflects off the top surface of the glass plate (air to glass). This reflection *does* involve a phase change of $\pi$ radians (equivalent to $\lambda/2$ path difference).

So, in this specific setup (lens on a glass plate), one ray undergoes a $\pi$ phase change, while the other does not. This *introduces* a relative phase difference of $\pi$ radians, equivalent to $\lambda/2$.

Therefore, the *effective* path difference becomes:
*   For constructive interference: $\Delta + \frac{\lambda}{2} = n\lambda \implies 2t + \frac{\lambda}{2} = n\lambda \implies 2t = (n - \frac{1}{2})\lambda$
*   For destructive interference: $\Delta + \frac{\lambda}{2} = (2n + 1) \frac{\lambda}{2} \implies 2t + \frac{\lambda}{2} = (2n + 1) \frac{\lambda}{2} \implies 2t = n\lambda$

This revised condition explains why the center (where $t=0$) is dark for destructive interference ($2t=0\lambda$, so $n=0$). And for constructive interference, the first bright ring would correspond to $n=1$ (so $2t = \frac{1}{2}\lambda$, not $0$).

This detail about phase changes is a common point of confusion, so make sure you remember it! It's a beautiful illustration of how subtle details in reflection can alter interference patterns. This is a great example for understanding Course Outcome 2 on interference.

So, for Newton's rings in the standard setup:
*   **Dark Rings:** $2t = n\lambda$, where $n = 0, 1, 2, \ldots$
*   **Bright Rings:** $2t = (2n + 1) \frac{\lambda}{2}$, where $n = 0, 1, 2, \ldots$

### 3. Mathematical Description and Ring Radii

Now, let's get down to the math to understand the rings. We need to relate the thickness '$t$' to the radius '$r$' of the rings.

Consider the lens and the plate. Let '$R$' be the radius of curvature of the spherical surface of the lens. Let '$O$' be the center of curvature of this spherical surface. Let '$C$' be the point of contact between the lens and the plate. In our diagram, '$C$' is the center of the Newton's rings pattern.

At a distance '$r$' from the center of contact '$C$', let the thickness of the air gap be '$t$'. We can consider the spherical surface of the lens. The radius of the lens surface is '$R$'. The distance from the center of curvature '$O$' to the point of contact '$C$' is also '$R$'.

Now, consider a point '$P$' on the lens surface at a distance '$r$' from '$C$'. The distance from '$O$' to '$P$' is also '$R$'. If we drop a perpendicular from '$P$' to the tangent plane at '$C$', this length is '$r$'.

We can use the geometry of the sphere. Consider the right-angled triangle formed by '$O$', '$C$', and a point on the spherical surface. If we take a point at a radial distance '$r$' from '$C$', the distance from '$O$' to this point along the normal to the lens surface is '$R$'. The distance from '$O$' to the point on the glass plate directly below this point is '$R-t$'.

Using the Pythagorean theorem on the triangle formed by '$O$', '$P$', and the point directly below '$P$' on the glass plate, we have:
$R^2 = r^2 + (R-t)^2$
$R^2 = r^2 + R^2 - 2Rt + t^2$
$0 = r^2 - 2Rt + t^2$

Since the thickness '$t$' is very small compared to the radius of curvature '$R$', the term '$t^2$' is even smaller and can be neglected.
So, $r^2 \approx 2Rt$
This gives us the thickness '$t$' at a radial distance '$r$' from the center:
$t \approx \frac{r^2}{2R}$

Now we can substitute this into our interference conditions.

#### 3.1 Radii of Dark Rings

For dark rings, $2t = n\lambda$.
Substituting the expression for '$t$':
$2 \left(\frac{r_n^2}{2R}\right) = n\lambda$
$\frac{r_n^2}{R} = n\lambda$
$r_n^2 = nR\lambda$
So, the radius of the $n$-th dark ring is $r_n = \sqrt{n R \lambda}$.

This is a crucial formula! It tells us that the radius of the dark rings is proportional to the square root of the order '$n$'.

#### 3.2 Radii of Bright Rings

For bright rings, $2t = (2n + 1) \frac{\lambda}{2}$.
Substituting the expression for '$t$':
$2 \left(\frac{r_n^2}{2R}\right) = (2n + 1) \frac{\lambda}{2}$
$\frac{r_n^2}{R} = (2n + 1) \frac{\lambda}{2}$
$r_n^2 = \frac{(2n + 1) R \lambda}{2}$
So, the radius of the $n$-th bright ring is $r_n = \sqrt{\frac{(2n + 1) R \lambda}{2}}$.

#### 3.3 Spacing of Rings

Notice that the radii of consecutive dark rings are $r_n = \sqrt{nR\lambda}$ and $r_{n+1} = \sqrt{(n+1)R\lambda}$.
The difference in their squared radii is:
$r_{n+1}^2 - r_n^2 = (n+1)R\lambda - nR\lambda = R\lambda$.

This means that the difference between the squares of the radii of consecutive dark rings is constant.
$r_{n+1}^2 - r_n^2 = R\lambda$.

This observation is very useful for experimental measurements. It's easier to measure the diameters of the rings, and this relationship simplifies calculations. This concept of constant difference in squared radii is frequently tested, so keep it in mind for exams!

### 4. Applications of Newton's Rings

Newton's Rings are not just a pretty pattern; they are a powerful experimental tool. We can use them to determine:

1.  **Wavelength of Monochromatic Light:** If we know the radius of curvature '$R$' of the lens and measure the radii of the dark rings, we can calculate the wavelength $\lambda$.
2.  **Radius of Curvature of a Lens:** If we know the wavelength $\lambda$ and measure the radii of the dark rings, we can determine '$R$'.
3.  **Refractive Index of Transparent Liquids:** This is a key application for us, directly linking to our topic!

#### 4.1 Determination of the Refractive Index of Transparent Liquids

How do we do this? Let's say we have a liquid whose refractive index '$n_{liquid}$' we want to find. We can introduce this liquid into the air gap between the lens and the glass plate.

Instead of an air wedge, we now have a wedge of the liquid. The path difference changes because the wavelength of light *inside* the liquid is different from its wavelength in air.

Remember that the wavelength of light in a medium with refractive index '$n$' is given by $\lambda_{medium} = \frac{\lambda_{air}}{n}$.

So, if we fill the gap with a liquid of refractive index '$n_{liquid}$', the path difference formula becomes:
$2t = n \lambda_{liquid} = n \frac{\lambda_{air}}{n_{liquid}}$ (for dark rings in the liquid)

Let '$r_n'$ be the radius of the $n$-th dark ring in air, and let '$r_n'$ be the radius of the $n$-th dark ring in the liquid.
In air: $2t = n \lambda_{air} \implies t = \frac{n \lambda_{air}}{2}$.
So, from our earlier derivation, $\frac{r_n^2}{2R} = \frac{n \lambda_{air}}{2} \implies r_n^2 = nR\lambda_{air}$.

Now, when the liquid is introduced, the *same* physical thickness '$t$' will now contain a different number of wavelengths. The condition for destructive interference (dark ring) in the liquid becomes:
$2t = n' \lambda_{liquid} = n' \frac{\lambda_{air}}{n_{liquid}}$

However, it's often easier to think about the *change* in the ring pattern. If we use the same monochromatic light source (wavelength $\lambda_{air}$) and the same lens (radius of curvature $R$), we observe the rings in air first. Then, we introduce the liquid and observe the rings again.

The setup for determining the refractive index is a bit more sophisticated. We use a special apparatus. A plano-convex lens is placed on a flat glass plate. The liquid is introduced in the air gap. To ensure the liquid fills the entire gap uniformly, the convex lens is often placed with its convex surface *downwards* on the flat plate, and the liquid is introduced from the side, allowing it to spread and replace the air.

Let's consider the observation of dark rings.
In air: $2t = n\lambda$ (where $\lambda$ is the wavelength in air).
So, $\frac{r_n^2}{R} = n\lambda$.

When the air gap is replaced by a liquid of refractive index $n_{liquid}$:
The optical path difference becomes $2 \times (n_{liquid} \times t)$.
For destructive interference (dark rings), the condition is $2 \times (n_{liquid} \times t) = (2m + 1) \frac{\lambda}{2}$ (using a different order 'm' for clarity, although the geometry is the same).
$2 n_{liquid} t = (2m + 1) \frac{\lambda}{2}$

This formulation can get a bit tricky with different orders. A more direct approach, as often presented in textbooks like Malik and Singh, is to observe the *shift* of the rings.

**A Simpler, More Practical Approach:**

Let's assume we are observing the *same* fringe order, say the $n$-th dark fringe, at a certain radius '$r$' in air. This means $2t = n\lambda_{air}$.
Now, if we introduce a liquid of refractive index $n_{liquid}$ in the gap, the optical path difference for the same geometrical thickness '$t$' is $2 \times (n_{liquid} \times t)$. For the $n$-th dark fringe to occur at the same position '$r$', the condition becomes:
$2 \times (n_{liquid} \times t) = n \lambda_{air}$

We have two equations for the same geometrical thickness '$t$' at radius '$r$' (for the $n$-th dark fringe):
1.  In air: $2t = n\lambda_{air} \implies t = \frac{n\lambda_{air}}{2}$
2.  In liquid: $2 n_{liquid} t = n\lambda_{air} \implies t = \frac{n\lambda_{air}}{2 n_{liquid}}$

Equating these, we get:
$\frac{n\lambda_{air}}{2} = \frac{n\lambda_{air}}{2 n_{liquid}}$
This implies $n_{liquid} = 1$, which is incorrect. This means my assumption of the *same* order '$n$' at the same radius '$r$' is flawed when the medium changes. The fringe pattern shifts.

Let's use the original formulas for radii:
In air, the $n$-th dark ring has radius $r_n^2 = nR\lambda_{air}$.
When the liquid is introduced, the wavelength of light within the liquid is $\lambda_{liquid} = \lambda_{air}/n_{liquid}$.
The condition for the $n$-th dark ring in the liquid (of the same order '$n$') will be $2t = n\lambda_{liquid}$.
Substituting $t \approx r_n^2/(2R)$:
$2 \frac{r_n^2}{2R} = n \frac{\lambda_{air}}{n_{liquid}}$
$\frac{r_n^2}{R} = n \frac{\lambda_{air}}{n_{liquid}}$
$r_n^2 = nR \frac{\lambda_{air}}{n_{liquid}}$

Let $r_{n,air}$ be the radius of the $n$-th dark ring in air, and $r_{n,liquid}$ be the radius of the $n$-th dark ring when the liquid is present.
$r_{n,air}^2 = nR\lambda_{air}$
$r_{n,liquid}^2 = nR \frac{\lambda_{air}}{n_{liquid}}$

Dividing these two equations:
$\frac{r_{n,liquid}^2}{r_{n,air}^2} = \frac{nR \lambda_{air}/n_{liquid}}{nR\lambda_{air}} = \frac{1}{n_{liquid}}$
$n_{liquid}^2 = \frac{r_{n,air}^2}{r_{n,liquid}^2}$
$n_{liquid} = \frac{r_{n,air}}{r_{n,liquid}}$

This seems too simple. Let's check the textbooks again. Ghatak's "Optics" is a great resource here. The standard experimental setup to determine the refractive index of a liquid involves placing the convex lens with its convex surface facing upwards on a flat glass plate. The liquid is introduced into the air gap from the sides. The convex lens is *not* directly resting on the flat plate; there is a thin layer of air or liquid.

A more common and precise method for refractive index determination using Newton's rings is to use a specific arrangement where the liquid is between the two optical surfaces, and we observe how the pattern changes.

**The Standard Method for Refractive Index:**

Consider the case where the liquid is placed between the lens and the glass plate. The optical path difference will now involve the refractive index of the liquid.

Let the convex lens have radius of curvature $R$. Let the thickness of the liquid gap at a radial distance $r$ be $t$.
$t \approx \frac{r^2}{2R}$

For Newton's rings, the interference conditions depend on the optical path difference (OPD).
In air, the OPD for dark rings is $2t = n\lambda_{air}$.
In the liquid, the OPD for dark rings is $2 \times (n_{liquid} \times t) = n \lambda_{air}$ (assuming the same order $n$ for comparison, which can be tricky).

A common experimental procedure is to compare the rings formed in air with the rings formed when the gap is filled with the liquid.

Let's consider a specific point in the setup, say at radius $r$.
In air, the thickness $t$ satisfies $2t = n \lambda_{air}$.
When the liquid is introduced, the same geometric thickness $t$ now has an optical path difference of $2 n_{liquid} t$.
For destructive interference (dark rings) in the liquid, we have $2 n_{liquid} t = m \lambda_{air}$, where $m$ is some integer order.

Let's consider the radii of the $N$-th dark ring in both cases.
In air: $r_{N,air}^2 = N R \lambda_{air}$
When the liquid is present, the same pattern that was the $N$-th dark ring in air might now be the $M$-th dark ring in the liquid.
$2 t = N \lambda_{air}$ relates geometric thickness $t$ at radius $r_{N,air}$ to the order $N$.
$2 n_{liquid} t = M \lambda_{air}$ relates geometric thickness $t$ at radius $r_{M,liquid}$ to the order $M$.

If we want to measure the refractive index, we can arrange the experiment such that the convex lens is placed on a glass plate with the convex side facing *downwards*. The liquid is introduced. This setup forms the fringes.

Let's assume we are observing the $n$-th dark ring at radius $r_n$.
In air, $2t = n\lambda_{air}$, so $t = n\lambda_{air}/2$.
This thickness $t$ is related to the radius by $t = r_n^2/(2R)$.
So, $\frac{r_n^2}{2R} = \frac{n\lambda_{air}}{2} \implies r_n^2 = nR\lambda_{air}$.

Now, consider the liquid. The situation is often described by using a "thickness of air equivalent" for the liquid.
The condition for destructive interference in the liquid is that the optical path difference is an odd multiple of $\lambda_{air}/2$.
$2 n_{liquid} t = (2m+1) \frac{\lambda_{air}}{2}$.
The geometric thickness $t$ at radius $r$ is still $t = r^2/(2R)$.
So, $2 n_{liquid} \frac{r_m^2}{2R} = (2m+1) \frac{\lambda_{air}}{2}$.
$\frac{n_{liquid} r_m^2}{R} = (2m+1) \frac{\lambda_{air}}{2}$
$r_m^2 = \frac{(2m+1) R \lambda_{air}}{2 n_{liquid}}$.

This formula looks like the bright ring formula, but with $n_{liquid}$ in the denominator. This implies that the rings in the liquid will be closer together than in air.

Let's consider the difference in the squares of radii of consecutive dark fringes in the liquid:
$r_{m+1}^2 - r_m^2 = \frac{(2(m+1)+1) R \lambda_{air}}{2 n_{liquid}} - \frac{(2m+1) R \lambda_{air}}{2 n_{liquid}}$
$r_{m+1}^2 - r_m^2 = \frac{R \lambda_{air}}{2 n_{liquid}} [(2m+3) - (2m+1)]$
$r_{m+1}^2 - r_m^2 = \frac{R \lambda_{air}}{2 n_{liquid}} [2] = \frac{R \lambda_{air}}{n_{liquid}}$

This is a key relationship. Let $D_m$ be the diameter of the $m$-th dark ring. Then $r_m = D_m/2$.
$(D_{m+1}/2)^2 - (D_m/2)^2 = \frac{R \lambda_{air}}{n_{liquid}}$
$\frac{D_{m+1}^2 - D_m^2}{4} = \frac{R \lambda_{air}}{n_{liquid}}$
$D_{m+1}^2 - D_m^2 = \frac{4 R \lambda_{air}}{n_{liquid}}$

This difference in squares of diameters of consecutive fringes is constant.

**How to use this for measurement:**

1.  **Observe Rings in Air:** First, form Newton's rings using monochromatic light (wavelength $\lambda_{air}$) in air. Measure the diameters of several dark rings ($D_{0,air}, D_{1,air}, D_{2,air}, \ldots$). Calculate the difference in the squares of diameters of consecutive rings.
    $D_{1,air}^2 - D_{0,air}^2 = 4R\lambda_{air}$
    $D_{2,air}^2 - D_{1,air}^2 = 4R\lambda_{air}$
    ... and so on.
    This difference, let's call it $\Delta D_{air}^2$, should be constant. So, $4R\lambda_{air} = \text{constant}$.

2.  **Introduce Liquid:** Now, introduce the transparent liquid into the gap between the lens and the plate. Observe the new set of Newton's rings. Measure the diameters of the corresponding dark rings ($D_{0,liquid}, D_{1,liquid}, D_{2,liquid}, \ldots$). Calculate the difference in the squares of diameters of consecutive rings.
    $D_{1,liquid}^2 - D_{0,liquid}^2 = \frac{4 R \lambda_{air}}{n_{liquid}}$
    $D_{2,liquid}^2 - D_{1,liquid}^2 = \frac{4 R \lambda_{air}}{n_{liquid}}$
    ... and so on.
    This difference, let's call it $\Delta D_{liquid}^2$, should also be constant. So, $\frac{4 R \lambda_{air}}{n_{liquid}} = \text{constant}$.

3.  **Calculate Refractive Index:** By comparing these two constant differences:
    $\frac{\Delta D_{liquid}^2}{\Delta D_{air}^2} = \frac{4 R \lambda_{air}/n_{liquid}}{4R\lambda_{air}} = \frac{1}{n_{liquid}}$
    Therefore, $n_{liquid} = \frac{\Delta D_{air}^2}{\Delta D_{liquid}^2}$.

This is a very clean way to determine the refractive index. It's independent of the exact radius of curvature '$R$' and the wavelength of light '$\lambda_{air}$', as long as they remain the same for both observations. This makes the experiment robust.

Remember this: **The ratio of the constant difference in squared diameters in air to the constant difference in squared diameters in the liquid gives the refractive index of the liquid.**

#### 4.2 Determination of Wavelength

If we know the radius of curvature '$R$' of the lens and measure the radii of the dark rings in air, we can determine the wavelength of the monochromatic light used.

From $r_n^2 = nR\lambda$, we can write $\lambda = \frac{r_n^2}{nR}$.
We can measure the diameter $D_n$ of the $n$-th dark ring. Then $r_n = D_n/2$, so $r_n^2 = D_n^2/4$.
$\lambda = \frac{D_n^2/4}{nR} = \frac{D_n^2}{4nR}$.

To get a more accurate result, we can measure the diameter of a ring far from the center, say $D_N$, and the diameter of a ring closer to the center, say $D_M$ (where $N > M$).
$D_N^2 = 4NR\lambda$
$D_M^2 = 4MR\lambda$
Subtracting these:
$D_N^2 - D_M^2 = 4(N-M)R\lambda$.
So, $\lambda = \frac{D_N^2 - D_M^2}{4(N-M)R}$.

This method of using the difference between two widely separated rings is often preferred because it averages out errors in determining the exact center and the order of individual rings. It's a common technique in experimental physics, aligning with Course Outcome 5.

### 5. Practical Considerations and Potential Pitfalls

*   **Monochromatic Light:** The light source must be strictly monochromatic. White light will produce coloured rings, but distinguishing and measuring the radii of specific colour bands accurately can be challenging. Lasers (as discussed in CO1) are ideal for this.
*   **Cleanliness:** The surfaces of the lens and plate must be extremely clean to ensure a uniform air/liquid gap.
*   **Flatness:** The glass plate must be perfectly flat. Any irregularities will distort the rings.
*   **Lens Quality:** The lens surface should be very smooth and have a large radius of curvature. A small radius of curvature would lead to very closely spaced rings, making measurement difficult.
*   **Viewing Apparatus:** A travelling microscope or a similar device is needed to accurately measure the diameters of the rings. This is where the experimental skill comes in (CO5).
*   **Zero Order Ring:** The first dark ring is the zero-order ring ($n=0$). Its radius is 0, meaning it's at the center. However, in practice, due to surface imperfections or slight imperfections in contact, the very center might not be perfectly dark. It's often best to start measurements from the first observable dark ring (which would be $n=1$ in the $r_n^2 = nR\lambda$ formula if we start counting from the centre, or $n=0$ if we consider $r_0=0$). Most often, the first dark ring observed is $n=1$. Let's clarify this: the formula $r_n = \sqrt{nR\lambda}$ is for the $n$-th dark ring, with $n=1, 2, 3...$. The center ($n=0$) is theoretically dark, but practically it's the point of contact.

### 6. Relating to Course Outcomes

*   **CO1: Explain the basic principles and properties of laser and optic fibers.** While this topic doesn't directly focus on lasers or optical fibers, the *use* of monochromatic light, ideally from a laser, is crucial for obtaining clear Newton's rings. Understanding lasers helps appreciate the quality of light needed.
*   **CO2: Describe the phenomena of interference and diffraction of light.** Newton's Rings is a direct manifestation of **interference** due to a thin film (the air/liquid wedge). Understanding the conditions for constructive and destructive interference is fundamental to this topic.
*   **CO3: Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics.** This topic primarily deals with wave optics, not quantum mechanics at the atomic level. However, the wave nature of light, a fundamental concept that underpins quantum mechanics, is what causes interference.
*   **CO4: Apply the knowledge of waves and acoustics in non-destructive testing and in acoustic design of buildings.** This outcome is more aligned with other modules. However, the principle of wave interference, which is central to Newton's Rings, is also applied in acoustics (e.g., destructive interference to reduce noise).
*   **CO5: Apply basic knowledge of principles and theories in physics to conduct experiments.** This is where Newton's Rings truly shine. The determination of wavelength or refractive index is a direct application of the theoretical understanding of interference to a practical measurement. It requires careful setup, observation, and data analysis, which are core skills for experimental physicists.

### Summary Points to Remember

*   Newton's Rings are formed due to **interference** of light reflected from the surfaces of a thin air/liquid wedge between a convex lens and a flat plate.
*   The path difference is approximately **$2t$**, where $t$ is the thickness of the wedge.
*   For the standard setup (lens on plate), dark rings occur when **$2t = n\lambda$**, and bright rings when **$2t = (2n+1)\lambda/2$**.
*   The geometric thickness $t$ at radius $r$ is related by **$t \approx r^2/(2R)$**, where $R$ is the radius of curvature of the lens.
*   This leads to the radii of dark rings: **$r_n = \sqrt{nR\lambda}$**.
*   The difference in the squares of radii of consecutive dark rings is **constant**: $r_{n+1}^2 - r_n^2 = R\lambda$.
*   To find the refractive index of a liquid, compare the constant difference in squared diameters in air ($\Delta D_{air}^2$) to that in the liquid ($\Delta D_{liquid}^2$): $n_{liquid} = \Delta D_{air}^2 / \Delta D_{liquid}^2$.
*   To find wavelength $\lambda$, measure ring diameters $D_N$ and $D_M$ and use $\lambda = \frac{D_N^2 - D_M^2}{4(N-M)R}$.

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **Why are the rings in Newton's experiment circular?**
    *   **Answer:** The rings are circular because the thickness of the air gap '$t$' depends only on the radial distance '$r$' from the point of contact. The relationship $t \approx r^2/(2R)$ shows that for a constant thickness '$t$', the radius '$r$' is constant. Since the interference conditions (bright/dark rings) depend on '$t$', they occur at constant radii, forming circles. This is due to the spherical shape of the lens.

2.  **What is the significance of the center of Newton's rings being dark?**
    *   **Answer:** The dark center signifies destructive interference at the point of contact where the gap thickness is zero ($t=0$). This is explained by considering the phase change of $\pi$ radians (or $\lambda/2$ path difference) that occurs upon reflection at the first surface (air to glass/lens surface), while the second reflection (from the glass plate) does not involve a phase change in the standard setup. The effective path difference at the center is $\lambda/2$, leading to destructive interference.

3.  **How does the spacing between consecutive dark rings change as we move away from the center?**
    *   **Answer:** The radii of consecutive dark rings are given by $r_n = \sqrt{nR\lambda}$. The difference in radii is $r_{n+1} - r_n = \sqrt{(n+1)R\lambda} - \sqrt{nR\lambda}$. As '$n$' increases, the value of $\sqrt{n+1} - \sqrt{n}$ decreases. For example, $\sqrt{2}-\sqrt{1} \approx 0.414$ and $\sqrt{3}-\sqrt{2} \approx 0.318$. Therefore, the rings get closer together as we move outwards from the center. This means the spacing between consecutive rings decreases.

**Exam-Oriented Questions:**

1.  **Newton's rings are observed using monochromatic light of wavelength $\lambda$. If the refractive index of the liquid used to fill the gap is $n$, how does the radius of the $m$-th dark ring change compared to when the gap is filled with air?**
    *   **Answer:**
        In air, the radius of the $n$-th dark ring is $r_{n,air} = \sqrt{n R \lambda}$.
        When the gap is filled with a liquid of refractive index $n$, the wavelength of light inside the liquid becomes $\lambda_{liquid} = \lambda/n$.
        The condition for the $m$-th dark ring in the liquid is $2t = m \lambda_{liquid}$.
        Substituting $t \approx r_{m,liquid}^2 / (2R)$, we get:
        $2 \frac{r_{m,liquid}^2}{2R} = m \frac{\lambda}{n}$
        $\frac{r_{m,liquid}^2}{R} = \frac{m \lambda}{n}$
        $r_{m,liquid}^2 = \frac{m R \lambda}{n}$
        Comparing this with the radius in air: $r_{m,liquid}^2 = \frac{r_{m,air}^2}{n}$.
        So, $r_{m,liquid} = \frac{r_{m,air}}{\sqrt{n}}$.
        The radius of the $m$-th dark ring in the liquid is $\frac{1}{\sqrt{n}}$ times the radius of the corresponding ring in air. Since $n > 1$ for liquids, the radius of the dark rings decreases in the liquid.

2.  **In a Newton's rings experiment, the diameter of the 5th dark ring is 0.5 cm and the diameter of the 15th dark ring is 0.9 cm. If the radius of curvature of the lens is 1 m, calculate the wavelength of the light used.**
    *   **Given:**
        Diameter of 5th dark ring, $D_5 = 0.5$ cm $= 0.005$ m.
        Diameter of 15th dark ring, $D_{15} = 0.9$ cm $= 0.009$ m.
        Radius of curvature, $R = 1$ m.
        The radius of the $n$-th dark ring is $r_n = D_n/2$.
        The relation is $r_n^2 = nR\lambda$.
        So, $D_n^2/4 = nR\lambda \implies D_n^2 = 4nR\lambda$.

    *   **Calculation:**
        For the 5th ring: $D_5^2 = 4 \times 5 \times R \times \lambda = 20 R \lambda$
        For the 15th ring: $D_{15}^2 = 4 \times 15 \times R \times \lambda = 60 R \lambda$

        Subtracting the first equation from the second:
        $D_{15}^2 - D_5^2 = (60 - 20) R \lambda = 40 R \lambda$
        $\lambda = \frac{D_{15}^2 - D_5^2}{40 R}$

        Plugging in the values:
        $D_{15}^2 = (0.009)^2 = 0.000081$ m$^2$
        $D_5^2 = (0.005)^2 = 0.000025$ m$^2$
        $R = 1$ m

        $\lambda = \frac{0.000081 - 0.000025}{40 \times 1}$
        $\lambda = \frac{0.000056}{40} = 0.0000014$ m
        $\lambda = 1.4 \times 10^{-6}$ m $= 1400$ nm

        **Wait!** This wavelength (1400 nm) is in the infrared region, which is unusual for typical Newton's ring experiments in introductory physics. Let me recheck the question or my interpretation. Ah, the question might be using cm for diameter, which is standard. Let's keep the units consistent.

        Let's re-calculate assuming the rings are measured in cm, and R is in cm.
        $D_5 = 0.5$ cm, $D_{15} = 0.9$ cm. Let $R = 100$ cm (since 1 m = 100 cm).
        $D_5^2 = 0.25$ cm$^2$
        $D_{15}^2 = 0.81$ cm$^2$

        $D_{15}^2 - D_5^2 = 4(15-5)R\lambda = 40R\lambda$
        $0.81 - 0.25 = 40 \times 100 \times \lambda$
        $0.56 = 4000 \lambda$
        $\lambda = \frac{0.56}{4000} = 0.00014$ cm $= 1.4 \times 10^{-4}$ cm $= 1.4 \times 10^{-6}$ m $= 1400$ nm.

        The result is still in the infrared. This suggests that perhaps the example values chosen for the question lead to such a wavelength, or there's a misunderstanding of the setup. Let's assume the question meant visible light. If the question was for visible light, the values would be different.

        **Let's re-do with a more typical value for the 5th and 15th ring diameters in the visible spectrum (e.g., sodium yellow light, $\lambda \approx 589$ nm).**

        Suppose $R = 1$ m $= 100$ cm.
        $r_n = \sqrt{nR\lambda}$.
        $r_5 = \sqrt{5 \times 100 \times 589 \times 10^{-9} \text{ m}}$ (convert cm to m for R)
        $r_5 = \sqrt{5 \times 1 \times 589 \times 10^{-9}}$ (using R=1m)
        $r_5^2 = 5 \times 589 \times 10^{-9} = 2945 \times 10^{-9} = 2.945 \times 10^{-6}$ m$^2$
        $r_5 = \sqrt{2.945 \times 10^{-6}} \approx 1.716 \times 10^{-3}$ m $= 1.716$ mm.
        $D_5 = 2 \times r_5 \approx 3.43$ mm $= 0.343$ cm.

        $r_{15} = \sqrt{15 \times 1 \times 589 \times 10^{-9}}$
        $r_{15}^2 = 15 \times 589 \times 10^{-9} = 8835 \times 10^{-9} = 8.835 \times 10^{-6}$ m$^2$
        $r_{15} = \sqrt{8.835 \times 10^{-6}} \approx 2.972 \times 10^{-3}$ m $= 2.972$ mm.
        $D_{15} = 2 \times r_{15} \approx 5.94$ mm $= 0.594$ cm.

        So, if the diameters were 0.343 cm and 0.594 cm, and R=1m, we would get $\lambda \approx 589$ nm. The values in the original question might be chosen for a specific purpose or might be slightly off typical textbook examples. The method of calculation, however, is correct.

        **Corrected Calculation based on the provided numbers:**
        $\lambda = \frac{D_{15}^2 - D_5^2}{4(15-5)R}$
        Let's assume the diameters are measured in meters and R is in meters.
        $D_5 = 0.5$ cm $= 0.005$ m
        $D_{15} = 0.9$ cm $= 0.009$ m
        $R = 1$ m

        $D_5^2 = (0.005)^2 = 2.5 \times 10^{-5}$ m$^2$
        $D_{15}^2 = (0.009)^2 = 8.1 \times 10^{-5}$ m$^2$

        $\lambda = \frac{(8.1 \times 10^{-5}) - (2.5 \times 10^{-5})}{4 \times 10 \times 1}$
        $\lambda = \frac{5.6 \times 10^{-5}}{40}$
        $\lambda = 1.4 \times 10^{-6}$ m $= 1400$ nm.

        **Answer should be presented as calculated:**
        $\lambda = 1.4 \times 10^{-6}$ m or $1400$ nm. (The numerical values provided might be hypothetical).

3.  **When a thin film of liquid is introduced into the Newton's rings setup, the diameter of the $n$-th dark ring is observed to decrease. Explain why this happens and how you would determine the refractive index of the liquid.**
    *   **Explanation:** The radius of the $n$-th dark ring is proportional to the square root of the wavelength of light used. When a liquid with refractive index $n > 1$ is introduced, the wavelength of light inside the liquid becomes $\lambda_{liquid} = \lambda_{air}/n$. Since the wavelength decreases in the liquid, the radius of the dark rings also decreases for the same order '$n$' (or the order shifts).
    *   **Determination of Refractive Index:**
        1.  Observe Newton's rings in air with monochromatic light of known wavelength $\lambda_{air}$ and measure the diameters of several dark rings, say $D_{n,air}$. Calculate the constant difference in the square of diameters of consecutive rings: $\Delta D_{air}^2 = D_{n+1,air}^2 - D_{n,air}^2$. This quantity is equal to $4R\lambda_{air}$ (where $R$ is the radius of curvature of the lens).
        2.  Introduce the liquid and observe the new set of Newton's rings with the same monochromatic light. Measure the diameters of the corresponding dark rings, $D_{n,liquid}$. Calculate the constant difference in the square of diameters of consecutive rings: $\Delta D_{liquid}^2 = D_{n+1,liquid}^2 - D_{n,liquid}^2$. This quantity is equal to $4R\lambda_{air}/n_{liquid}$.
        3.  The refractive index $n_{liquid}$ can be calculated by the ratio:
            $n_{liquid} = \frac{\Delta D_{air}^2}{\Delta D_{liquid}^2}$
