---
title: "Elastic and Plastic Deformation: stress-strain diagram, true stress and true strain, flow stress. Schmidt’s law. Slip and twinning."
subject: "MATERIALS AND MANUFACTURING ENGINEERING"
module: "Module 1: Materials and Types of Materials: Metals, polymers, ceramics, composites, advanced materials, biomaterials, nanomaterials, smart materials, energy materials, sustainable and green materials."
branch: "Civil Engineering"
semester: 2
topicId: "68b54567d74ec52cc091322d"
status: "completed"
scrapedAt: "2026-05-20T18:36:34.209Z"
---
# Module 1: Materials and Types of Materials
## Topic: Elastic and Plastic Deformation

Welcome, everyone! Today, we're diving into a fundamental aspect of materials science and engineering: how materials behave when we subject them to forces. Specifically, we'll be exploring **Elastic and Plastic Deformation**. Understanding this is absolutely crucial for selecting the right materials for any application, from building a bridge to designing a tiny microchip. It directly ties into **Course Outcome 1 (CO1)**, which aims for us to "Understand... the principles of elastic and plastic deformation." So, let's get started!

---

### The Stress-Strain Diagram: A Material's Story

Imagine you're stretching a rubber band. At first, it gets longer easily. Then, you have to pull harder. Eventually, it might snap. The relationship between the force you apply and how much it stretches is key. In engineering, we quantify this relationship using **stress** and **strain**.

*   **Stress ($\sigma$)**: Think of stress as the internal resistance of a material to an applied external force. It's the force applied per unit area. If you have a thick rod and a thin rod, and you apply the same force, the stress in the thin rod will be higher. We usually express it in Pascals (Pa) or Megapascals (MPa). The formula is $\sigma = F/A_0$, where $F$ is the applied force and $A_0$ is the original cross-sectional area.

*   **Strain ($\epsilon$)**: Strain is simply the measure of deformation. It's how much a material stretches or compresses relative to its original size. If a 1-meter rod stretches to 1.1 meters, its strain is 0.1. It’s a dimensionless quantity, often expressed as a percentage. The formula is $\epsilon = \Delta L / L_0$, where $\Delta L$ is the change in length and $L_0$ is the original length.

When we plot these two values – stress on the vertical axis and strain on the horizontal axis – we get what’s called a **stress-strain diagram**. This diagram is like a material's autobiography, telling us its mechanical properties. You'll find extensive details on this in Chapters 6 of Callister & Rethwisch and Chapter 2 of Raghavan.

Let's break down the typical stress-strain curve for a ductile metal, like steel or aluminum, which is what most manufacturing processes deal with:

#### The Elastic Region: The "Snap Back" Zone

As you start applying a load, the material stretches. If you were to remove the load in this initial phase, the material would return to its original shape and size. This is **elastic deformation**. It’s like stretching a spring; when you let go, it springs back.

*   **Hooke's Law**: Within this elastic region, stress is directly proportional to strain. This fundamental relationship is known as **Hooke's Law**: $\sigma = E\epsilon$.
    *   Here, $E$ is the **Young's Modulus** or **Modulus of Elasticity**. This is a material property that represents its stiffness. A higher $E$ means the material is stiffer and requires more stress to produce the same amount of elastic strain. Think of a steel beam versus a rubber band – steel has a much higher Young's Modulus. This is a critical parameter, and Kalpakjian & Schmid discuss its importance in material selection for manufacturing.

The point where the curve deviates from this linear relationship is called the **proportional limit**. Just beyond that, we have the **elastic limit**, which is the maximum stress a material can withstand without any permanent deformation.

#### The Plastic Region: The "Permanent Change" Zone

If you keep increasing the load beyond the elastic limit, the material enters the **plastic region**. Here, deformation is permanent. If you release the load now, the material will not return to its original shape. It has undergone a permanent change. This is the realm where most manufacturing processes like forging or drawing operate.

*   **Yield Strength ($\sigma_y$)**: This is arguably the most important property in the plastic region. It's the stress at which significant plastic deformation begins. Sometimes, there's a clear point on the curve where this happens; other times, especially for materials that don't have a sharp yield point, we define the yield strength using an **offset method**. We draw a line parallel to the elastic portion of the curve, starting from a specific strain (usually 0.002 or 0.2%). Where this line intersects the stress-strain curve is taken as the yield strength. This is your cue for when a material will start to permanently deform. Groover’s "Introduction to Manufacturing Processes" thoroughly covers how yield strength dictates the forces required in forming operations.

*   **Tensile Strength ($\sigma_{TS}$)**: As plastic deformation continues, the stress required to cause further deformation generally increases. This is known as **strain hardening** or **work hardening**. The stress-strain curve continues to rise, reaching a peak at the **ultimate tensile strength (UTS)**. This is the maximum stress the material can withstand before it starts to neck.

*   **Necking**: Beyond the UTS, the cross-sectional area of the material begins to decrease significantly in a localized region. This phenomenon is called necking. The actual stress within this narrowed region is increasing rapidly, even though the *engineering stress* (calculated using the original area) might be decreasing. This leads to the downward slope of the stress-strain curve.

*   **Fracture Strength**: Finally, the material breaks at the **fracture strength**, which is the stress at which failure occurs.

---

### Engineering Stress vs. True Stress: A Deeper Look

The stress-strain diagram we've discussed so far uses **engineering stress** and **engineering strain**. Remember, engineering stress is calculated using the *original* cross-sectional area. However, as the material deforms plastically, its cross-sectional area changes.

*   **True Stress ($\sigma_t$)**: This is defined as the instantaneous force applied divided by the *instantaneous* cross-sectional area: $\sigma_t = F/A_i$, where $A_i$ is the current area.
*   **True Strain ($\epsilon_t$)**: Similarly, true strain is calculated using incremental changes in length divided by the instantaneous length: $d\epsilon_t = dL/L_i$. Integrating this, we get $\epsilon_t = \ln(L_i/L_0) = \ln(1 + \epsilon)$.

Why bother with true stress and true strain? Well, the true stress-true strain curve continues to rise even after necking begins, reflecting the actual material behavior better. It provides a more accurate representation of the material's response under large deformations. Most ductile materials exhibit a power-law relationship in the plastic region on a true stress-true strain plot: $\sigma_t = K\epsilon_t^n$.

*   $K$ is the **strength coefficient**, representing the yield strength on the true stress-true strain curve.
*   $n$ is the **strain hardening exponent**. This value tells us how much the material strain hardens. A higher $n$ means greater strain hardening. For example, pure metals have low $n$ (around 0.1-0.2), while highly alloyed metals have higher $n$ (up to 0.5 or more). This is covered in detail in Callister & Rethwisch (Chapter 6).

**A quick exam tip:** If a question asks about plastic deformation and the material undergoes significant changes in dimensions, think about using true stress and true strain for a more accurate analysis.

---

### Flow Stress: The Resistance to Plastic Deformation

The term **flow stress** is essentially synonymous with **true stress** in the plastic region. It represents the instantaneous stress required to continue plastic deformation at a particular strain. So, when we talk about flow stress, we're talking about the material's resistance to yielding and flowing plastically.

---

### Mechanisms of Plastic Deformation in Metals: Slip and Twinning

Now, how does this plastic deformation actually *happen* inside a metal? Metals are crystalline solids, meaning their atoms are arranged in a regular, repeating lattice. Plastic deformation in metals primarily occurs through two mechanisms: **slip** and **twinning**.

#### Slip: The Dominant Mechanism

**Slip** is the most common way metals deform plastically. Imagine a deck of cards. If you push the top card sideways, the deck slides. In a metal, slip occurs when layers of atoms slide past each other along specific crystallographic planes and in specific crystallographic directions.

*   **Slip System**: A slip system consists of a **slip plane** (a crystallographic plane with high atomic density) and a **slip direction** (a crystallographic direction within that plane where atoms can slide with minimum resistance). Different crystal structures have different preferred slip systems.
    *   For example, FCC (Face-Centered Cubic) metals like aluminum, copper, and nickel have many slip systems (12), making them very ductile.
    *   BCC (Body-Centered Cubic) metals like iron (at room temperature) and molybdenum have fewer slip systems (48, but only 24 are typically active at room temp), and their slip planes are not as densely packed, which can make them less ductile at low temperatures.
    *   HCP (Hexagonal Close-Packed) metals like magnesium and zinc have even fewer slip systems (3), which often makes them less ductile and more prone to anisotropic behavior (properties depending on direction).

*   **Dislocations**: Slip doesn't happen by entire planes of atoms moving all at once. Instead, it's a sequential process involving the movement of **dislocations**. Dislocations are line defects in the crystal lattice. Think of them as a tiny "wrinkle" in the atomic arrangement. The movement of these dislocations allows layers of atoms to slide past each other with relatively little force. This is a key concept covered in Callister & Rethwisch (Chapter 7).

#### Twinning: A More Coordinated Shift

**Twinning** is another mechanism for plastic deformation, though less common than slip in many metals. In twinning, a portion of the crystal lattice is realigned or "mirrored" across a specific crystallographic plane, called the **twinning plane**. The atoms in the twinned region are in a different orientation, but their positions relative to each other are still ordered and regular.

*   **How it happens**: Twinning typically occurs under conditions of high stress or at low temperatures where dislocation movement is difficult. It's a more sudden and less gradual process than slip.
*   **Analogy**: Imagine you have a row of soldiers marching perfectly in step. Twinning is like suddenly having a section of that row turn 180 degrees, but still maintaining their marching order relative to each other within that section.
*   **Impact**: Twinning can contribute to the overall deformation and can also introduce new slip systems, thereby increasing ductility in some cases.

---

### Schmidt's Law: Predicting Slip

Now, let’s talk about how to quantify the stress required for slip to occur on a particular slip system. This is where **Schmidt's Law** comes in handy. It's a simplified model for estimating the critical resolved shear stress needed to initiate slip.

**Critical Resolved Shear Stress ($\tau_{CRSS}$)**: This is the minimum shear stress required on a slip system to initiate plastic deformation. Different materials have different $\tau_{CRSS}$ values.

**Schmidt's Law relates the applied stress to the shear stress acting on a specific slip system.** It states:

$\tau = \sigma \cos(\phi) \cos(\lambda)$

Where:
*   $\tau$ is the **resolved shear stress** acting on the slip system.
*   $\sigma$ is the **tensile stress** applied along a particular direction.
*   $\phi$ is the angle between the **tensile stress direction** and the **normal to the slip plane**.
*   $\lambda$ is the angle between the **tensile stress direction** and the **slip direction**.

**The crucial part of Schmidt's Law is that slip will initiate when the resolved shear stress ($\tau$) reaches the critical resolved shear stress ($\tau_{CRSS}$):**

$\tau_{CRSS} = \sigma_{critical} \cos(\phi) \cos(\lambda)$

From this, we can find the critical applied tensile stress ($\sigma_{critical}$) required to cause yielding:

$\sigma_{critical} = \frac{\tau_{CRSS}}{\cos(\phi) \cos(\lambda)}$

The term $\cos(\phi) \cos(\lambda)$ is called the **Schmid factor**. For slip to occur, the Schmid factor must be non-zero, meaning the stress direction, slip plane, and slip direction are oriented favorably. The maximum Schmid factor is 0.5, which occurs when $\phi = \lambda = 45^\circ$.

**What does this mean in practice?**
If you apply a tensile load to a single crystal of a metal, it will yield when the applied stress, combined with the orientation of its slip systems, generates enough shear stress on a particular system to reach the $\tau_{CRSS}$. Different orientations will yield at different applied stresses.

**Connection to Manufacturing:** Understanding Schmid’s Law helps us appreciate why the orientation of grains in a polycrystalline metal matters. In manufacturing processes like rolling or extrusion, the grains can become oriented, leading to anisotropic behavior in the final product. Kalpakjian & Schmid’s textbook, with its focus on manufacturing processes, often uses these principles to explain material behavior during forming operations.

**Remember this:** Schmidt's Law provides a way to connect the external load applied to a material with the internal stresses on its atomic planes, predicting when plastic deformation (slip) will begin. The orientation of the crystal relative to the applied force is paramount!

---

### Connecting to Course Outcomes:

*   **CO1: Understand... principles of elastic and plastic deformation.**
    *   The entire discussion on stress-strain diagrams, Hooke's Law, yield strength, UTS, elastic vs. plastic regions, true stress/strain, and the mechanisms of slip and twinning directly addresses this outcome. Understanding these concepts is foundational to knowing how materials will respond to forces in any manufacturing scenario.
*   **CO3: Apply principles of various metal forming and shaping processes...**
    *   The concepts of yield strength, strain hardening, and flow stress are fundamental to calculating the forces needed for processes like rolling, forging, and extrusion. Schmidt's Law helps explain why certain materials behave differently depending on their orientation, which is critical in metal forming.

---

### Sample Questions with Answers:

**1. Conceptual Question:** Explain the difference between elastic and plastic deformation, using an analogy.

**Answer:** Elastic deformation is temporary; the material returns to its original shape once the load is removed, like stretching a rubber band and letting it snap back. Plastic deformation is permanent; the material retains some of the deformation after the load is removed, like bending a metal paperclip – it stays bent.

**2. Exam-Oriented Question:** A cylindrical rod of original length 100 mm and original diameter 10 mm elongates by 1 mm when a tensile load is applied. The rod then undergoes permanent elongation and its final length is 110 mm.
    a) Calculate the engineering strain.
    b) Calculate the true strain at the point when the length is 110 mm.

**Answer:**
Given: $L_0 = 100$ mm, $D_0 = 10$ mm.
Elongation $\Delta L_{elastic} = 1$ mm.
Final length $L_f = 110$ mm.

a) **Engineering Strain ($\epsilon$)**:
Engineering strain is calculated based on the original length.
$\epsilon = \Delta L / L_0$
The total elongation is $\Delta L_{total} = L_f - L_0 = 110 \text{ mm} - 100 \text{ mm} = 10$ mm.
$\epsilon = 10 \text{ mm} / 100 \text{ mm} = 0.1$

b) **True Strain ($\epsilon_t$)**:
True strain is calculated using the natural logarithm of the ratio of final to original length.
$\epsilon_t = \ln(L_f / L_0)$
$\epsilon_t = \ln(110 \text{ mm} / 100 \text{ mm})$
$\epsilon_t = \ln(1.1)$
$\epsilon_t \approx 0.0953$

*Reasoning:* Part (a) tests the basic definition of engineering strain using total elongation. Part (b) tests the definition of true strain, emphasizing the use of the natural logarithm and the current length relative to the original. It's important to note that the initial elastic elongation (1 mm) is part of the total elongation, but for true strain calculation, we use the final state of deformation (110 mm).

**3. Conceptual Question:** What is the significance of the strain hardening exponent ($n$) in the true stress-true strain relationship ($\sigma_t = K\epsilon_t^n$)?

**Answer:** The strain hardening exponent ($n$) indicates how effectively a material resists further plastic deformation as it is strained. A higher value of $n$ means the material exhibits greater strain hardening. This implies that as the material deforms plastically, its resistance to further deformation increases significantly. Materials with high $n$ are generally more ductile under tensile testing conditions because they can maintain their strength over a wider range of plastic deformation before necking.

**4. Exam-Oriented Question:** Consider a metal crystal with a slip system oriented such that the angle between the tensile stress axis and the normal to the slip plane ($\phi$) is 60 degrees, and the angle between the tensile stress axis and the slip direction ($\lambda$) is 30 degrees. If the critical resolved shear stress ($\tau_{CRSS}$) for this material is 20 MPa, calculate the critical tensile stress ($\sigma_{critical}$) required to initiate slip.

**Answer:**
We use Schmidt's Law: $\sigma_{critical} = \frac{\tau_{CRSS}}{\cos(\phi) \cos(\lambda)}$
Given: $\tau_{CRSS} = 20$ MPa, $\phi = 60^\circ$, $\lambda = 30^\circ$.

$\cos(\phi) = \cos(60^\circ) = 0.5$
$\cos(\lambda) = \cos(30^\circ) = \frac{\sqrt{3}}{2} \approx 0.866$

$\sigma_{critical} = \frac{20 \text{ MPa}}{0.5 \times 0.866}$
$\sigma_{critical} = \frac{20 \text{ MPa}}{0.433}$
$\sigma_{critical} \approx 46.19$ MPa

*Reasoning:* This question directly applies Schmidt's Law to calculate the stress required to cause slip based on the orientation of the slip system relative to the applied tensile stress. It tests the understanding of the formula and the geometric relationships involved ($\phi$ and $\lambda$). The result shows that the applied stress needs to be significantly higher than the critical resolved shear stress due to the orientation factor (Schmid factor).
