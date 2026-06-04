---
title: "Concept of stress and strain – types"
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Concept of stress and strain – types"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f59"
status: "completed"
scrapedAt: "2026-05-20T18:37:10.814Z"
---
## Module 1: Concept of Stress and Strain – Types

Welcome, everyone! Today, we embark on a journey into the very heart of solid mechanics. We'll be exploring the fundamental concepts of **stress** and **strain**, and understanding how materials respond when we apply forces to them. This isn't just abstract theory; it's the bedrock upon which we design everything from the smallest screw to the tallest skyscraper. So, let's dive in!

### 1.1 Introduction: Why Do We Care About Stress and Strain?

Imagine you're holding a rubber band. When you stretch it, it gets longer, right? And when you let go, it snaps back. What’s happening inside that rubber band? Forces are being exerted, and the material is deforming. In engineering, we’re not just interested in *whether* something deforms, but *how much* and *what internal effects* this deformation has.

This is where stress and strain come in. They are our tools to quantify these internal effects and the resulting deformations. Understanding them is crucial for predicting how structures and components will behave under load. It’s about ensuring safety, efficiency, and reliability.

This module directly addresses **CO1: Recall the fundamental terms and theorems associated with mechanics of linear elastic deformable bodies.** We’re laying the groundwork by defining these fundamental terms. As we progress, you'll see how these concepts help us achieve **CO2: Explain the behavior and response of various structural elements under various loading conditions**, and later, **CO3: Apply the principles of solid mechanics to calculate internal stresses/strains...**.

### 1.2 What is Stress? The Internal Resistance

Let's start with **stress**. Think of it as the internal “fight” that the material puts up against an external force. When you pull on that rubber band, the molecules within the rubber are resisting being pulled apart.

*   **Definition:** Stress is defined as the internal resisting force per unit area within a deformable body. It’s a measure of how concentrated the internal forces are within the material.

*   **Mathematical Representation:** If we have an external force '$F$' applied to a body, and we consider a small internal cross-sectional area '$A$', the stress ($\sigma$ or $\tau$) is given by:

    $\text{Stress} = \frac{\text{Internal Resisting Force}}{\text{Area}}$

    We typically denote normal stress with the Greek letter sigma ($\sigma$) and shear stress with the Greek letter tau ($\tau$).

*   **Units:** Stress is measured in units of force per area. In the International System of Units (SI), this is Pascals (Pa), which is 1 N/m². Because a Pascal is a very small unit, we often use megapascals (MPa = $10^6$ Pa) or gigapascals (GPa = $10^9$ Pa). In the imperial system, we commonly use pounds per square inch (psi).

**A Real-World Analogy:** Imagine a rope holding up a heavy weight. The rope experiences stress. If you cut the rope in half, the internal forces acting across that cut surface are what the remaining parts of the rope are using to support the load. The thicker the rope, the more area is available to distribute that internal force, and thus, the lower the stress. This intuition is key to understanding why different cross-sections matter. This idea of internal force distribution is a concept you'll find discussed in depth in textbooks like **"Mechanics of Structures" by Shah and Junnarkar** and **"A Text book of Strength of Materials" by R. K. Bansal**.

**Exam Tip:** Always be mindful of the units. Mixing N/mm² and N/m² can lead to significant errors in calculations. A common pitfall!

### 1.3 Types of Stress

Now, stresses aren't all the same. They depend on the direction of the internal force relative to the area we’re considering.

#### 1.3.1 Normal Stress ($\sigma$)

This is the stress that acts **perpendicular** to the surface. Think about pulling on a metal rod. The internal forces pulling the rod apart are acting perpendicular to any imaginary cut you make across its width.

*   **Tensile Stress:** When the external force tends to stretch or elongate the body, causing pulling apart, the resulting normal stress is tensile. Imagine stretching a spring.
*   **Compressive Stress:** When the external force tends to compress or shorten the body, causing pushing together, the resulting normal stress is compressive. Think of a pillar supporting a building – it's under compression.

    *   **Formula:** $\sigma = \frac{P}{A}$
        Where '$P$' is the applied axial force (normal to the area) and '$A$' is the cross-sectional area.

**Example:** A steel bar of 10 mm diameter is subjected to an axial tensile force of 50 kN. What is the tensile stress in the bar?
Here, $P = 50 \, \text{kN} = 50 \times 10^3 \, \text{N}$. The area $A = \pi \times (\frac{10}{2})^2 \, \text{mm}^2 = 25\pi \, \text{mm}^2$.
So, $\sigma = \frac{50 \times 10^3 \, \text{N}}{25\pi \, \text{mm}^2} \approx 636.6 \, \text{N/mm}^2 = 636.6 \, \text{MPa}$.
This connects directly to **CO3: Apply the principles of solid mechanics to calculate internal stresses...**

#### 1.3.2 Shear Stress ($\tau$)

Shear stress acts **parallel** to the surface. Imagine trying to slide two blocks of wood on top of each other with a force applied parallel to the contact surface. The internal forces resisting this sliding action are shear forces, and the stress they create is shear stress.

*   **Definition:** Shear stress is the internal resisting force per unit area acting parallel to the surface.

*   **Formula:** $\tau = \frac{V}{A}$
    Where '$V$' is the applied shear force (parallel to the area) and '$A$' is the area over which the shear force acts.

**Example:** Consider a bolt connecting two metal plates. When a force is applied to pull the plates apart in opposite directions, the bolt experiences a shear force trying to cut it. If the force is 30 kN and the bolt's cross-sectional area is 100 mm², the shear stress in the bolt is:
$\tau = \frac{30 \times 10^3 \, \text{N}}{100 \, \text{mm}^2} = 300 \, \text{N/mm}^2 = 300 \, \text{MPa}$.

Think about cutting paper with scissors. The blades apply a shear force, and the paper shears through. This is a very visual example of shear stress at play. Books like **"Mechanics of Materials" by B. C. Punmia, Ashok K. Jain, Arun Kumar Jain** provide excellent foundational explanations for these concepts.

**Important Note:** When we talk about stress at a point, it's often more complex, involving stresses acting on different planes. We'll touch on that more as we explore stress transformation later. For now, focusing on these basic types is key.

### 1.4 What is Strain? The Measure of Deformation

Now that we understand stress (the internal force intensity), let's talk about **strain**. Strain is how we quantify the deformation caused by these stresses. It’s the geometric response of the material.

*   **Definition:** Strain is defined as the deformation of a material per unit of original size. It is a dimensionless quantity, usually expressed as a ratio or a percentage.

*   **Think of it this way:** If stress is the cause (internal force intensity), strain is the effect (deformation).

**Analogy:** Remember the rubber band? When you stretch it, it gets longer. Strain is how we measure *how much* longer it got relative to its original length. If it was 10 cm long and you stretched it to 12 cm, it elongated by 2 cm.

**Exam Tip:** Strain is dimensionless. Make sure your calculations reflect this, often by using consistent units for length.

### 1.5 Types of Strain

Just as there are different types of stress, there are corresponding types of strain.

#### 1.5.1 Normal Strain ($\epsilon$)

This is the strain associated with normal stress. It measures the change in length per unit of original length.

*   **Definition:** Normal strain is the ratio of the change in length to the original length of the body in the direction of the applied force.

*   **Formula:** $\epsilon = \frac{\Delta L}{L_0}$
    Where '$\Delta L$' is the change in length and '$L_0$' is the original length.

*   **Tensile Strain:** If the body elongates (due to tensile stress), the strain is positive.
*   **Compressive Strain:** If the body shortens (due to compressive stress), the strain is negative.

**Example:** Our steel bar from before, with an original length of 1 meter (1000 mm), was subjected to a tensile force. If it elongated by 0.5 mm, the tensile strain would be:
$\epsilon = \frac{0.5 \, \text{mm}}{1000 \, \text{mm}} = 0.0005$.
This is a dimensionless quantity.

**Connection to Learning:** This directly supports **CO1** by defining strain and its types. It’s also fundamental for **CO3** as we'll use strain to calculate deformations and analyze structural behavior.

#### 1.5.2 Shear Strain ($\gamma$)

This is the strain associated with shear stress. It measures the angular distortion of the object.

*   **Definition:** Shear strain is the change in angle (in radians) between two lines that were originally perpendicular. It represents the amount of distortion or "shearing" of the material.

*   **Formula:** $\gamma = \tan(\theta) \approx \theta$ (for small angles, where $\theta$ is in radians)
    If we consider a small rectangle within the material, shear strain is the amount one side slides relative to the other, divided by the perpendicular distance between them. If a point moves horizontally by $\Delta x$ over a vertical distance $y$, the shear strain is $\Delta x / y$.

**Visualizing Shear Strain:** Imagine a cube of jelly. If you push the top surface sideways while keeping the bottom surface fixed, the cube will deform. The initially vertical sides will tilt. Shear strain is a measure of this tilt. If the top surface moves by a distance '$\delta$' relative to the bottom surface, and the height of the cube is '$h$', then the shear strain $\gamma = \delta / h$.

**Textbook Reference:** You can find detailed explanations and diagrams of shear strain in **"Engineering Mechanics of Solids" by Egor P. Popov** and **"Mechanics of Materials" by James M Gere, S.P. Timoshenko**. They often illustrate shear strain using parallelograms and the resulting angular changes.

**Key Takeaway:** Normal stress leads to normal strain (change in length), and shear stress leads to shear strain (change in angle). This fundamental duality is critical.

### 1.6 Hooke's Law: The Linear Relationship

For many materials, under small deformations, there's a very convenient relationship between stress and strain: **Hooke's Law**. This law states that stress is directly proportional to strain within the elastic limit of the material.

*   **For Normal Stress and Strain:** $\sigma \propto \epsilon$
    This proportionality constant is called the **Modulus of Elasticity** or **Young's Modulus ($E$)**.

    *   **Formula:** $\sigma = E \epsilon$
        This is a fundamental equation in solid mechanics, allowing us to relate applied force to deformation through material properties.

*   **For Shear Stress and Strain:** $\tau \propto \gamma$
    The proportionality constant here is called the **Modulus of Rigidity** or **Shear Modulus ($G$)**.

    *   **Formula:** $\tau = G \gamma$

**Why is Hooke's Law important?** It allows us to predict deformation. If we know $E$ (a material property), we can calculate the stress for a given strain, or the strain for a given stress. This is essential for **CO4: Choose appropriate principles or formula to find the elastic constants of materials...** and **CO3: Apply the principles... to calculate internal stresses/strains...**.

**Real-World Significance:** Think about designing a bridge. We need to know how much the steel girders will stretch or compress under the load of traffic. If the stress induced is within the elastic limit, Hooke's Law ($ \sigma = E\epsilon $) tells us exactly how much elongation or shortening to expect. If we know the load and the dimensions, we can calculate the stress, and then use Young's Modulus to find the strain, and finally, the total change in length.

**Textbook Mention:** You'll find Hooke's Law presented and elaborated upon in virtually all the core texts, including **"Strength of Materials" by R. K. Bansal** and **"Mechanics of Materials" by R.C. Hibbeler**. They often discuss the limitations of Hooke's Law, especially beyond the elastic limit.

### 1.7 Stress and Strain at a Point: A Glimpse Ahead

So far, we've mostly considered simple cases where forces are axial or shear forces acting on a uniform cross-section. However, in real-world structures, forces can be complex, and stress/strain can vary significantly from point to point.

At any given point within a stressed body, there can be stresses acting on different planes passing through that point. We’ve discussed normal stress and shear stress acting on a plane. What happens if we orient that plane differently? The values of normal and shear stress will change.

This leads us to the concept of **stress transformation**, which is where **CO5: Perform stress transformations, identify principal planes/ stresses and maximum shear stress at a point in a structural member** comes into play. For now, it's enough to know that:

*   At any point in a stressed body, there exist planes where the **shear stress is zero**. These planes are called **principal planes**, and the normal stresses acting on them are called **principal stresses**.
*   There are also planes where the **shear stress is maximum**.

Understanding these concepts allows us to identify the most critical stress conditions within a material, which is paramount for safe design (**CO6: Analyse the given structural member to calculate the safe load or proportion the cross section to carry the load safely**). Books like **"Mechanics of Materials" by Rattan** often provide excellent step-by-step approaches to stress transformation using Mohr's Circle.

### 1.8 Summary and Key Takeaways

Let's recap the essentials from this introductory module:

*   **Stress** is the internal resisting force per unit area. It’s our measure of internal force intensity.
    *   **Normal Stress ($\sigma$):** Perpendicular to the area (tensile or compressive). $\sigma = P/A$.
    *   **Shear Stress ($\tau$):** Parallel to the area. $\tau = V/A$.

*   **Strain** is the deformation per unit original size. It's our measure of geometric distortion.
    *   **Normal Strain ($\epsilon$):** Change in length per original length. $\epsilon = \Delta L / L_0$.
    *   **Shear Strain ($\gamma$):** Change in angle in radians due to shear stress.

*   **Hooke's Law:** For elastic materials and small deformations, stress is proportional to strain.
    *   $\sigma = E \epsilon$ (Young's Modulus, $E$)
    *   $\tau = G \gamma$ (Shear Modulus, $G$)

Remember this: **Stress is the internal force intensity, and strain is the resulting deformation.** They are linked by the material's properties, like Young's Modulus. This fundamental understanding is the foundation for all subsequent analysis in mechanics of solids.

---

### Sample Questions and Answers

Here are a few questions to test your understanding:

**Q1. Conceptual Question:** What is the fundamental difference between normal stress and shear stress?

**Answer:** Normal stress acts perpendicular to a given surface within a material, tending to stretch or compress it. Shear stress, on the other hand, acts parallel to the surface, tending to cause layers of the material to slide past each other. Think of pulling a rod (normal stress) versus trying to cut it with a knife (shear stress).

**Q2. Calculation Question:** A cylindrical steel rod has a diameter of 20 mm and a length of 1.5 meters. It is subjected to an axial tensile force of 75 kN. If the Young's Modulus of steel is 200 GPa, calculate the tensile stress and the elongation of the rod.

**Solution:**
Given:
*   Diameter $d = 20 \, \text{mm}$
*   Radius $r = 10 \, \text{mm}$
*   Original Length $L_0 = 1.5 \, \text{m} = 1500 \, \text{mm}$
*   Tensile Force $P = 75 \, \text{kN} = 75 \times 10^3 \, \text{N}$
*   Young's Modulus $E = 200 \, \text{GPa} = 200 \times 10^3 \, \text{N/mm}^2$

**Step 1: Calculate the cross-sectional area.**
$A = \pi r^2 = \pi (10 \, \text{mm})^2 = 100\pi \, \text{mm}^2 \approx 314.16 \, \text{mm}^2$.

**Step 2: Calculate the tensile stress ($\sigma$).**
$\sigma = \frac{P}{A} = \frac{75 \times 10^3 \, \text{N}}{100\pi \, \text{mm}^2} \approx \frac{75000}{314.16} \, \text{N/mm}^2 \approx 238.73 \, \text{N/mm}^2$.
So, the tensile stress is approximately 238.73 MPa. (This relates to CO3).

**Step 3: Calculate the tensile strain ($\epsilon$) using Hooke's Law.**
$\sigma = E \epsilon \implies \epsilon = \frac{\sigma}{E}$
$\epsilon = \frac{238.73 \, \text{N/mm}^2}{200 \times 10^3 \, \text{N/mm}^2} = \frac{238.73}{200000} \approx 0.0011936$.

**Step 4: Calculate the elongation ($\Delta L$).**
$\epsilon = \frac{\Delta L}{L_0} \implies \Delta L = \epsilon \times L_0$
$\Delta L = 0.0011936 \times 1500 \, \text{mm} \approx 1.79 \, \text{mm}$.

**Conclusion:** The tensile stress in the rod is approximately 238.73 MPa, and it will elongate by approximately 1.79 mm. (This relates to CO3 and CO6).

**Q3. Conceptual Question:** What does it mean for a material to be "elastic"?

**Answer:** An elastic material is one that returns to its original shape and size once the applied load is removed. This means the deformation is temporary. Hooke's Law applies within the elastic limit of a material. If the load causes stresses or strains beyond this limit, the material may undergo permanent deformation (plasticity) or even fracture. This is fundamental to **CO1** and understanding material behavior (**CO2**).
