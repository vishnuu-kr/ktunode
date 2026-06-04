---
title: "Air wedge- Measurement of thickness of thin sheets"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 2: Interference and Diffraction"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912d26"
status: "completed"
scrapedAt: "2026-05-20T18:31:30.313Z"
---
## Module 2: Interference and Diffraction - Air Wedge and Measurement of Thin Sheet Thickness

Welcome, everyone! Today, we're diving into a fascinating application of interference phenomena: the **Air Wedge**. This concept, as we'll see, allows us to precisely measure the thickness of very thin materials, a skill crucial in many scientific and engineering fields, especially those dealing with delicate surfaces or coatings. This directly ties into our **Course Outcome 2 (CO2)**, which is about describing interference and diffraction, and also connects to **Course Outcome 5 (CO5)**, where we apply physics principles to conduct experiments.

Think about it – how do we measure something thinner than a human hair with accuracy? We can't just use a ruler, can we? This is where the brilliance of optical interference comes into play.

### Understanding the Air Wedge: The Foundation of Our Measurement

First, let's get our heads around what an air wedge actually *is*. Imagine taking two glass plates. Now, place one on a flat surface, and then prop up the other end of the second plate with a tiny object, say, a single strand of hair or a thin slip of paper. What you've created is a wedge-shaped gap filled with air between the two plates. This gap tapers from a very small thickness at one end to a slightly larger thickness at the other. This is our air wedge.

**(Connection to CO2):** This setup is perfect for observing interference patterns because we have a thin film of air with varying thickness, illuminated by a light source. When light waves reflect off the top and bottom surfaces of this air gap, they interfere with each other.

#### How Interference Happens in an Air Wedge

Let's visualize this. When monochromatic light (light of a single wavelength, like from a sodium lamp) falls on the air wedge, a portion of it is reflected from the top surface of the lower glass plate (let's call this the bottom surface of the wedge). Another portion of the light passes through the top plate, enters the air wedge, reflects off the bottom plate, and then travels back out.

**(Connection to CO2):** These two reflected waves, one from the top surface of the air gap and one from the bottom surface, will travel different path lengths. The difference in these path lengths, combined with any phase change upon reflection, determines whether they interfere constructively (bright fringe) or destructively (dark fringe).

The critical point here is that the *thickness of the air wedge* is directly related to the path difference between these two reflected waves. As the thickness of the air wedge changes along its length, the path difference changes, leading to alternating bands of bright and dark fringes.

**Key Concept:** The condition for constructive interference (bright fringe) is when the path difference is an integer multiple of the wavelength ($2t = n\lambda$), and for destructive interference (dark fringe) is when the path difference is a half-integer multiple of the wavelength ($2t = (n + 1/2)\lambda$), where '$t$' is the thickness of the air wedge and '$n$' is an integer. *However, we need to be careful about phase changes upon reflection. For light reflecting from a rarer medium to a denser medium (e.g., air to glass), there's a 180-degree phase shift, equivalent to adding half a wavelength to the path difference.*

**Analogy Time:** Think of two people walking on a treadmill. If one person starts slightly behind the other and they both move at the same speed, the distance between them will remain constant. But if the treadmill speed or their walking speed changes, the distance between them will vary. Similarly, in the air wedge, the "speed" at which the path difference changes is dictated by how quickly the wedge thickness increases.

### Measuring Thin Sheet Thickness: The Practical Application

Now, let's move to the practical side of things. How do we use this air wedge phenomenon to measure the thickness of something like a thin sheet of mica, a human hair, or a fine coating?

**(Connection to CO5):** This is where we apply our understanding of interference to a real-world problem. We'll use the air wedge setup to quantify an unknown thickness.

The most common setup involves using a **Newton's Rings apparatus** or a similar arrangement where we can control the angle of one of the plates.

**Experimental Setup and Procedure (General Idea):**

1.  **Form the Wedge:** Place a highly accurate, flat glass plate on a horizontal surface. Place the thin sheet (whose thickness we want to measure) on this plate near one end. Then, place another optically flat glass plate on top, resting on the thin sheet at one end and touching the lower plate at the other end (or near the other end, creating a very small angle). This creates the air wedge.
2.  **Illumination:** Illuminate the wedge with monochromatic light, typically from a sodium lamp.
3.  **Observation:** Observe the interference fringes formed on the upper glass plate using a traveling microscope. These will appear as a series of parallel dark and bright bands.
4.  **Measurement:** Focus the traveling microscope on these fringes. The microscope allows us to measure the distance moved by the crosshairs.

**Connecting Fringes to Thickness:**

Let's consider the air wedge. If the angle between the two plates is denoted by $\theta$ (which is very small), and the wavelength of the monochromatic light is $\lambda$, then the thickness of the air wedge at a distance '$x$' from the apex (the point where the plates touch or are very close) is given by $t = x \tan \theta$.

**(Recall from Optics textbooks like Ghatak):** The fringe pattern arises because of the path difference. For normal incidence, the path difference between the two reflected rays is $2t$.
*   A dark fringe (destructive interference) occurs when $2t = n\lambda$ (assuming a phase change on one reflection).
*   A bright fringe (constructive interference) occurs when $2t = (n + 1/2)\lambda$.

So, if we have '$N$' dark fringes over a distance '$L$' on the plate, and the fringes are equally spaced, it means that as we move a distance '$L$', the thickness of the air wedge increases by '$N$' half-wavelengths (or '$N$' wavelengths if we consider the difference between consecutive dark fringes).

Let's be more precise. Suppose we observe $n$ dark fringes across a certain distance. Let the position of the first dark fringe be $x_1$ and the position of the $(n+1)^{th}$ dark fringe be $x_{n+1}$. The distance between these two fringes is $L = x_{n+1} - x_1$.

At $x_1$, the thickness is $t_1 = x_1 \tan \theta$. Let this correspond to the $m^{th}$ dark fringe, so $2t_1 = m\lambda$.
At $x_{n+1}$, the thickness is $t_{n+1} = x_{n+1} \tan \theta$. This corresponds to the $(m+n)^{th}$ dark fringe, so $2t_{n+1} = (m+n)\lambda$.

The difference in thickness is $t_{n+1} - t_1 = (x_{n+1} - x_1) \tan \theta = L \tan \theta$.
Also, $2(t_{n+1} - t_1) = (m+n)\lambda - m\lambda = n\lambda$.
So, $2(L \tan \theta) = n\lambda$.

This equation tells us that the separation between fringes is related to the angle $\theta$.

**Measuring the Thickness of a Sheet:**

Now, how do we measure the thickness of our thin sheet? We insert the thin sheet at one end of the wedge.

1.  **Initial Observation:** Without the sheet, we observe the fringes. Let's say we mark a starting point and count a certain number of fringes ($N_1$) as we move along the length of the wedge using the traveling microscope. This corresponds to a certain change in thickness, $\Delta t_1$.
2.  **Introducing the Sheet:** We carefully slide the thin sheet into the wedge at one end. The air wedge is now formed between the top plate and the sheet, and then between the sheet and the bottom plate. *However, a more direct method is to use the sheet to create one side of the wedge.*

Let's refine the method for measuring the thickness of a thin sheet, say, a mica sheet.

**Method using Air Wedge for Sheet Thickness Measurement:**

This method, often found in textbooks like Avadhanulu et al., is very clear.

1.  **Setup:** Place an optically flat glass plate (Plate A) horizontally. Place the thin sheet (e.g., mica) on this plate. On top of the sheet, place another optically flat glass plate (Plate B), so that it touches the mica sheet at one end and the lower plate (Plate A) at the other end. This creates an air wedge between Plate B and Plate A, with the mica sheet occupying a small portion of the thickness at one end.
2.  **Observation without Sheet (Reference):** First, ideally, you'd have a clean air wedge formed by two glass plates. You would observe the fringes. Let's say you count $n$ fringes over a distance $L$ using a traveling microscope. The thickness difference over this distance $L$ is $n(\lambda/2)$. So, $L \tan \theta = n(\lambda/2)$, or $\tan \theta = n\lambda / (2L)$. This gives us the angle of the wedge.
3.  **Observation with Sheet:** Now, introduce the thin sheet. A better way to frame this is to have two flat plates forming a wedge, and then inserting the sheet.
    *   Consider two optically flat plates, A and B, forming an air wedge with a very small angle $\theta$.
    *   Observe the fringes using monochromatic light and a traveling microscope.
    *   Let's say we focus on a particular point $P_1$ on the lower plate. We then move the microscope along the length of the wedge and focus on a point $P_2$ such that the distance between $P_1$ and $P_2$ is $d$.
    *   If we count $n$ fringes between $P_1$ and $P_2$, the difference in air wedge thickness is $\Delta t = n (\lambda/2)$.
    *   We know that $\Delta t = d \tan \theta$. So, $d \tan \theta = n (\lambda/2)$.
    *   Now, we insert the thin sheet of thickness '$T$' somewhere within this wedge. The arrangement might be a bit different.

Let's stick to a more direct and commonly described method for measuring the thickness of a thin sheet (like a leaf or mica).

**The Standard Method:**

1.  **Form an Air Wedge:** Place an optically flat glass plate (Plate 1) horizontally. Place a very fine, uniform object (like a human hair or a very thin wire) on this plate. Now, place another optically flat glass plate (Plate 2) on top, resting on the hair at one end and touching Plate 1 at the other end. This creates an air wedge.
2.  **Observe Fringes:** Illuminate this setup with monochromatic light. Observe the interference fringes formed using a traveling microscope. Let's say you count $n$ fringes across a measured distance $d$ using the microscope's vernier scale.
3.  **Relating Fringes to Thickness Change:** Each bright fringe and the subsequent dark fringe together represent a change in thickness of $\lambda/2$. So, $n$ fringes correspond to a total change in thickness of $n(\lambda/2)$.
4.  **Wedge Angle:** The thickness of the air wedge at the point where the plates are separated by distance $d$ from the apex is $t = d \tan \theta$, where $\theta$ is the small angle of the wedge.
    *   Therefore, the change in thickness over distance $d$ is $\Delta t = d \tan \theta$.
    *   We have $\Delta t = n(\lambda/2)$.
    *   So, $d \tan \theta = n(\lambda/2)$. This gives us a way to calculate $\tan \theta$ if we know $n$ and $d$, or vice-versa.

**Measuring the Sheet Thickness:**

Now, to measure the thickness of a thin sheet, say, of mica:

1.  **Setup:** Take two optically flat glass plates, A and B. Place the mica sheet on Plate A near one end. Place Plate B on top, resting on the mica sheet at one end and touching Plate A at the other end. This creates an air wedge, but crucially, a portion of the wedge's height is now occupied by the mica sheet.
2.  **Observation:** Observe the interference fringes with monochromatic light.
3.  **The Trick:** Let's consider the *optical path difference*. Light travels from Plate B to Plate A.
    *   **Region 1 (Air Wedge):** Let the air wedge have thickness $t_{air}$ at some point. The optical path difference for light going down and up is $2 t_{air}$.
    *   **Region 2 (Mica Sheet):** Let the mica sheet have thickness $T$ and refractive index $\mu$. The optical path difference for light going down through the mica and up through the mica is $2 \mu T$.
    *   However, we are concerned with the difference in path length between light traveling through air and light traveling through the mica.

A more common and elegant method involves placing the thin sheet such that it *creates* the wedge.

**Revised Method for Measuring Thin Sheet Thickness:**

This is probably the most intuitive way it's taught.

1.  **Create a Wedge:** Place an optically flat plate (Plate 1) horizontally. Place the thin sheet (e.g., mica of thickness $T$) on Plate 1. Now, bring another optically flat plate (Plate 2) into contact with Plate 1 at one end, and resting on the thin sheet at the other end. This forms a wedge of air between Plate 1 and Plate 2, with a "step" at the end where the mica is.

    *   **Crucial Insight:** The wedge is formed by Plate 2 resting on Plate 1, but the *height* of the wedge is determined by the thickness of the mica sheet.
    *   Imagine looking from the side. Plate 1 is horizontal. The mica sheet is placed vertically at one end, and Plate 2 rests on the mica and then on Plate 1.

    Let's simplify the arrangement slightly for clearer understanding:

    *   Place a clean optically flat glass plate (A) on a horizontal surface.
    *   Place the thin sheet (e.g., mica) on plate A, tilted slightly so it forms an angle.
    *   Place another optically flat glass plate (B) on top of the tilted mica sheet, such that plate B is horizontal and rests on the mica sheet. The mica sheet effectively acts as a support creating a wedge of air between plate A and plate B.

    This is still a bit confusing. Let's refer to the setup used for measuring the thickness of a leaf or a thin film.

    **The Classic Setup:**

    1.  **Form the Wedge:** Place an optically flat glass plate (A) horizontally. Place the thin sheet (e.g., a leaf, mica, or a fine wire) on this plate. Now, place another optically flat glass plate (B) on top. The key is how Plate B is supported. Plate B is placed such that one end rests on Plate A directly, and the other end rests on the thin sheet. This creates an air wedge between A and B.

        *   **Consider the air gap:** At the end where Plate B rests directly on Plate A, the air gap thickness is close to zero.
        *   At the other end, Plate B rests on the thin sheet. Let the thickness of the thin sheet be $T$. Plate B is now raised by a height $T$ relative to Plate A at this end. So the air wedge thickness there is $T$.
        *   This creates a wedge of air with thickness varying from 0 to $T$ over some length.

    2.  **Fringe Observation:** Illuminate with monochromatic light. You will observe interference fringes. Let's say you count $n$ fringes over a distance $d$ along the length of the wedge, starting from the point where the plates are almost touching.

    3.  **Calculation:**
        *   The fringe closest to the apex (where the plates touch) is usually a dark fringe. Let's call its position $x_0$.
        *   The first fringe (say, dark) from the apex is at position $x_1$. The thickness of the air wedge here is $t_1 = x_1 \tan \theta$, and it corresponds to $2t_1 = m\lambda$ (for some integer $m$, if we consider phase shifts, it might be $m\lambda$ or $(m+1/2)\lambda$).
        *   The next fringe (dark) is at position $x_2$. The thickness is $t_2 = x_2 \tan \theta$. $2t_2 = (m+1)\lambda$.
        *   The distance between consecutive dark fringes is $d = x_{i+1} - x_i$. The change in thickness between consecutive dark fringes is $\Delta t = t_{i+1} - t_i = (x_{i+1} - x_i) \tan \theta = d \tan \theta$. This change in thickness is $\lambda/2$ (due to the path difference change of $\lambda$).
        *   So, $d \tan \theta = \lambda/2$. This relates the fringe spacing $d$ to the wedge angle $\theta$.

    4.  **Measuring the Sheet Thickness (T):**
        Now, let's say we count $N$ fringes from the apex (where thickness is effectively zero) to the end where the mica sheet is supporting the top plate. The total distance measured by the traveling microscope is $D$.
        The thickness of the air wedge at this point is $T$. So, at distance $D$ from the apex, the thickness is $T = D \tan \theta$.

        We have two relationships:
        *   $d \tan \theta = \lambda/2$ (where $d$ is the average fringe spacing)
        *   $T = D \tan \theta$ (where $D$ is the total length over which $N$ fringes are counted, and $T$ is the thickness of the sheet)

        If we count $N$ fringes over a distance $D$, then the total change in thickness is $N(\lambda/2)$. This total change in thickness *is* the thickness of the sheet, $T$.
        So, $T = N (\lambda/2)$.

        **Wait! This is too simple. What am I missing?**

        The distance $D$ measured by the microscope is the horizontal distance along the bottom plate. If the wedge angle is $\theta$, and the total thickness at the end is $T$, then $T = D \tan \theta$.
        If we count $N$ fringes over this distance $D$, and each fringe corresponds to a path difference change of $\lambda/2$, then the total thickness change is indeed $N(\lambda/2)$.
        So, $T = N(\lambda/2)$. This equation assumes the fringe count starts exactly from zero thickness and ends at the point where the sheet thickness is $T$.

        **Let's consider a more rigorous approach, as often seen in textbooks:**

        *   **Setup:** Two optically flat plates, A and B. Plate A is horizontal. Place the thin sheet (thickness $T$) on plate A. Place plate B on top, touching plate A at one end and resting on the sheet at the other. This creates an air wedge.
        *   **Fringe Observation:** With monochromatic light ($\lambda$), observe fringes using a traveling microscope.
        *   Let the distance between the plates at the apex be zero.
        *   Let the distance between the plates at the end where the sheet is be $T$.
        *   Let the angle of the wedge be $\theta$. Then, $T = L \tan \theta$, where $L$ is the length over which this thickness $T$ is achieved.
        *   The thickness of the air wedge at a distance $x$ from the apex is $t(x) = x \tan \theta$.
        *   Interference condition for a dark fringe: $2t(x) = m\lambda$ (assuming phase changes handled).
        *   Substituting $t(x)$: $2 x \tan \theta = m\lambda$.
        *   This implies that the positions of the dark fringes are proportional to $m$: $x_m \propto m$.
        *   So, the distance between consecutive dark fringes is constant: $x_{m+1} - x_m = \Delta x = \frac{\lambda}{2 \tan \theta}$.

        **Now, how to measure T:**

        1.  **Measure Fringe Spacing:** Using the traveling microscope, measure the distance $d$ between $n$ consecutive fringes. So, $n$ fringes span a distance $(n-1)d$. No, that's not right. Let's say we measure the distance $D$ which contains $N$ fringes. This distance $D$ corresponds to $N$ intervals between fringes. So the average fringe spacing is $d = D/N$.
        2.  **Relate Fringe Spacing to Wedge Angle:** $d = \frac{\lambda}{2 \tan \theta}$, so $\tan \theta = \frac{\lambda}{2d}$.
        3.  **Measure Total Length:** The entire arrangement of the wedge, from the apex to the end where the sheet is, has a length $L$ (measured by the microscope).
        4.  **Calculate Thickness:** The thickness of the sheet $T$ is the height of the wedge at the end, $T = L \tan \theta$.
        5.  Substituting $\tan \theta$: $T = L \left(\frac{\lambda}{2d}\right)$.

        This formula seems more robust. We measure the fringe spacing ($d$), the total length ($L$) of the wedge formed, and we know the wavelength ($\lambda$).

        **Example:** Suppose we observe 10 dark fringes over a distance of 5 mm (0.5 cm) in the air wedge, illuminated by sodium light ($\lambda = 589.3$ nm). And the total length of the wedge, from apex to the end where the sheet is, is measured to be 2 cm.

        *   $N = 10$ fringes over $D = 0.5$ cm.
        *   Average fringe spacing $d = D/N = 0.5 \text{ cm} / 10 = 0.05$ cm.
        *   $\tan \theta = \frac{\lambda}{2d} = \frac{589.3 \times 10^{-7} \text{ cm}}{2 \times 0.05 \text{ cm}} = \frac{589.3 \times 10^{-7}}{0.1} \approx 5.893 \times 10^{-6}$. (This is a very small angle, as expected!)
        *   The total length of the wedge $L = 2$ cm.
        *   Thickness of the sheet $T = L \tan \theta = 2 \text{ cm} \times 5.893 \times 10^{-6} \approx 1.18 \times 10^{-5}$ cm = 118 nm.

        This is a very reasonable thickness for a thin film or sheet.

    **Refinement and Common Exam Questions:**

    *   **What is the role of monochromatic light?** Essential for clear, distinct fringes. White light would produce colored fringes, making precise measurement difficult. (CO2)
    *   **Why optically flat plates?** To ensure the air wedge formed is uniform and the path difference calculation is straightforward. Any surface irregularities would distort the fringes.
    *   **What if the fringes are not parallel?** This could indicate non-uniformity in the sheet or the plates, or an uneven wedge.
    *   **Common Pitfall:** Miscounting fringes or measuring the distance incorrectly. Ensure you count the *intervals* between fringes correctly. If you count 10 dark fringes, there are 9 intervals between them. However, it's more common to state "N fringes over distance D", meaning D is the distance for N full fringe spacings. Let's stick to the interpretation that $D$ is the distance covered by $N$ fringe *intervals*. So, if you observe 10 dark fringes, you've spanned 9 intervals. If you measure distance $D$ and count $N$ fringe *positions*, you have $N-1$ intervals. The formula $T = L \tan \theta$ and $d \tan \theta = \lambda/2$ implies $T = L (\lambda/2d)$. If $d$ is the spacing between $N$ fringes measured over $D$, then $d=D/(N-1)$. So $T = L \frac{\lambda}{2(D/(N-1))} = L \frac{(N-1)\lambda}{2D}$. This is another common form. Let's check if our initial interpretation works. If $N$ fringes are observed over distance $D$, it implies $N$ intervals of spacing $d$. So $D = Nd$. Then $d = D/N$. This makes $T = L (\lambda / (2(D/N))) = L \frac{N\lambda}{2D}$. Let's re-evaluate the measurement of $D$. When we say "count $n$ fringes", we are usually identifying $n$ distinct fringe lines. If we start at the first fringe and end at the $n$-th fringe, we have passed $n-1$ intervals. So the distance $D$ is associated with $n-1$ intervals. Thus, the average fringe spacing is $d = D/(n-1)$.

        Let's use this refined formula: $T = L \frac{(n-1)\lambda}{2D}$.
        In our example: $n=10$ fringes, $D=0.5$ cm. So, $n-1=9$ intervals.
        $d = D/(n-1) = 0.5 \text{ cm} / 9$.
        $\tan \theta = \frac{\lambda}{2d} = \frac{\lambda}{2(D/(n-1))} = \frac{(n-1)\lambda}{2D}$.
        $T = L \tan \theta = L \frac{(n-1)\lambda}{2D}$.
        $T = 2 \text{ cm} \times \frac{9 \times 589.3 \times 10^{-7} \text{ cm}}{2 \times 0.5 \text{ cm}} = 2 \times \frac{9 \times 589.3 \times 10^{-7}}{1} \approx 1060.7 \times 10^{-7} \text{ cm} \approx 106 \text{ nm}$.

        This is a more common way to handle fringe counting. Remember to count the *intervals*. If you are given "10 fringes are observed", it usually means 10 distinct lines. The number of intervals between them is 9.

    *   **What if the sheet is not uniform?** The fringe spacing will vary along the length, indicating non-uniform thickness. (Analysis aspect of CO2).

### Connecting to Course Outcomes

*   **CO1 (Laser & Fiber Optics):** While this topic doesn't directly use lasers or fiber optics, the principle of light wave interaction and interference is fundamental. Lasers are often used as highly coherent monochromatic sources in advanced optics experiments. Fiber optics deals with guiding light, and understanding wave phenomena like interference is crucial for advanced concepts like modal interference in multimode fibers.
*   **CO2 (Interference & Diffraction):** This is the core! We are directly observing and utilizing interference fringes in an air wedge. The fringe formation and spacing are governed by the principles of interference (path difference, constructive/destructive conditions).
*   **CO3 (Quantum Mechanics):** This is a bit of a stretch for this specific topic. Quantum mechanics describes the particle nature of light and matter, while interference is a purely wave phenomenon. However, the wave-particle duality of light is a concept introduced in modern physics that bridges these ideas.
*   **CO4 (Waves & Acoustics):** This topic deals with light waves. Acoustics deals with sound waves. The principles of interference (superposition of waves leading to constructive or destructive effects) are common to both light and sound waves. For instance, in acoustics, you can have "dead spots" in a concert hall due to destructive interference of sound waves.
*   **CO5 (Apply principles to conduct experiments):** Absolutely! Measuring the thickness of a thin sheet using an air wedge is a classic physics experiment. It requires careful setup, observation, and calculation, demonstrating the application of optical principles to practical measurement. (Knowledge Level K3 – Application).

**Summary of Key Points to Remember:**

*   An air wedge is a thin air gap between two surfaces, with a varying thickness, typically created by two inclined glass plates.
*   Interference fringes (bright and dark bands) are observed due to the path difference between light waves reflected from the top and bottom surfaces of the air gap.
*   The condition for interference depends on the thickness of the air wedge and the wavelength of light.
*   The spacing between consecutive fringes is inversely proportional to the tangent of the wedge angle and directly proportional to the wavelength of light.
*   To measure the thickness of a thin sheet, it's used to create one side of the air wedge, so the total thickness of the wedge at one end equals the sheet thickness.
*   The thickness $T$ can be calculated using $T = L \frac{(n-1)\lambda}{2D}$, where $L$ is the length of the wedge, $n$ is the number of fringes observed, $\lambda$ is the wavelength of light, and $D$ is the distance over which $n$ fringes are counted.

### Sample Questions and Answers

1.  **Conceptual Question:** Why is monochromatic light preferred for observing interference fringes in an air wedge experiment?
    **Answer:** Monochromatic light consists of a single wavelength. This leads to clear, well-defined bright and dark fringes. If white light were used, it would produce a spectrum of colored fringes, making it very difficult to accurately identify and count the fringes, and thus to perform precise measurements of thickness. This directly relates to **CO2**.

2.  **Application Question:** A thin mica sheet is measured using an air wedge. When illuminated with sodium light ($\lambda = 589$ nm), 15 dark fringes are observed over a distance of 7.5 mm. If the total length of the air wedge formed is 3 cm, what is the thickness of the mica sheet?
    **Solution:**
    *   Number of fringes, $n = 15$.
    *   Distance over which fringes are observed, $D = 7.5$ mm $= 0.75$ cm.
    *   Number of fringe intervals = $n-1 = 15-1 = 14$.
    *   Wavelength of light, $\lambda = 589$ nm $= 589 \times 10^{-7}$ cm.
    *   Total length of the wedge, $L = 3$ cm.

    The formula for the thickness of the sheet $T$ is:
    $T = L \frac{(n-1)\lambda}{2D}$

    Substituting the values:
    $T = 3 \text{ cm} \times \frac{14 \times (589 \times 10^{-7} \text{ cm})}{2 \times 0.75 \text{ cm}}$
    $T = 3 \times \frac{14 \times 589 \times 10^{-7}}{1.5} \text{ cm}$
    $T = 2 \times 14 \times 589 \times 10^{-7} \text{ cm}$
    $T = 28 \times 589 \times 10^{-7} \text{ cm}$
    $T = 16492 \times 10^{-7} \text{ cm}$
    $T = 1.6492 \times 10^{-3} \text{ cm}$
    $T = 1.6492 \times 10^{-5}$ m
    $T = 16.492 \times 10^{-6}$ m $= 16.492 \mu$m.

    So, the thickness of the mica sheet is approximately 16.5 micrometers. This demonstrates the application aspect as per **CO5**.

3.  **Underlying Principle Question:** Explain how the path difference between light waves leads to the formation of interference fringes in an air wedge.
    **Answer:** Light incident on the air wedge is reflected from both the upper and lower surfaces of the air film. The wave reflected from the upper surface and the wave reflected from the lower surface travel different distances. The wave traveling to the lower surface and back experiences an additional path of $2t$, where $t$ is the thickness of the air wedge at that point. If this path difference (potentially adjusted for phase changes upon reflection) is an integer multiple of the wavelength, constructive interference (bright fringe) occurs. If it's a half-integer multiple, destructive interference (dark fringe) occurs. Since the thickness $t$ varies along the wedge, different points will satisfy these conditions, creating a pattern of alternating bright and dark fringes. This explains the phenomenon as required by **CO2**.
