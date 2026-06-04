---
title: "Permittivity- relative permittivity"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 3: Superconductivity & Dielectrics"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da233"
status: "completed"
scrapedAt: "2026-05-23T17:35:50.874Z"
---
# Physics for Electrical Science: Module 3 - Superconductivity & Dielectrics

## Topic: Permittivity and Relative Permittivity

Welcome, everyone! Today, we're diving into a crucial topic in our study of dielectrics: **Permittivity**, and its closely related concept, **Relative Permittivity**. Understanding these terms is fundamental, especially for us as future electrical scientists, because they tell us how materials interact with electric fields. This directly impacts how capacitors work, how electrical signals propagate, and even the behavior of materials in high-voltage applications. This topic directly supports **Course Outcome 3 (CO3)**, which is about explaining the basic theory of dielectrics.

### What Happens When We Put a Material in an Electric Field?

Imagine you have a capacitor – two conductive plates with a gap between them. When you connect these plates to a battery, an electric field is established in the gap. Now, what if we fill that gap with something other than a vacuum? Let's say we put in a piece of glass, or plastic, or even air. Will the electric field be the same? Will the capacitor store the same amount of charge? The answer is no, and the reason lies in the material's **permittivity**.

**Permittivity (often denoted by the Greek letter epsilon, $\epsilon$)** is a measure of how well a dielectric material can support an electric field. It essentially quantifies the material's ability to store electrical energy in an electric field.

Think of it this way: when an electric field is applied to a dielectric material, the constituent molecules or atoms within the material respond. They might align themselves with the field, or their electron clouds might shift, creating what we call **induced dipoles**. This process is called **polarization**. These induced dipoles then create their own internal electric field that opposes the applied external field.

So, the *net* electric field inside the dielectric is reduced compared to what it would be in a vacuum. The stronger the material's response (i.e., the more it polarizes), the greater the reduction in the net electric field. Permittivity captures this ability of the material to polarize and, in doing so, reduce the electric field within it.

### Absolute Permittivity vs. Relative Permittivity

It's important to distinguish between two types of permittivity:

*   **Absolute Permittivity ($\epsilon$)**: This is the actual permittivity of a material. It tells us the absolute measure of how the material affects the electric field. The SI unit for absolute permittivity is farads per meter (F/m). The absolute permittivity of free space (vacuum) is a fundamental constant, denoted as $\epsilon_0$. Its value is approximately $8.854 \times 10^{-12}$ F/m.

    In many texts, like Beiser's "Concepts of Modern Physics," you'll find that the force between charges in a medium is modified by this permittivity. Coulomb's Law in a medium becomes:

    $F = \frac{1}{4\pi\epsilon} \frac{q_1 q_2}{r^2}$

    Here, $\epsilon$ is the absolute permittivity of the medium.

*   **Relative Permittivity ($\epsilon_r$)**, also known as the **dielectric constant ($K$)**: This is a more commonly used and practical measure. It's a **dimensionless quantity** that compares the permittivity of a material to the permittivity of free space. In essence, it tells us *how many times greater* the permittivity of the material is compared to a vacuum.

    The relationship is straightforward:

    $\epsilon_r = \frac{\epsilon}{\epsilon_0}$

    So, if a material has a relative permittivity of 5, it means its absolute permittivity is 5 times that of a vacuum. This also means that if you place the same charges in a vacuum and in this material, the force between them in the material will be 5 times weaker, and the electric field inside the material will be reduced by a factor of 5 compared to the vacuum case.

    You'll often see this in capacitor calculations. If you replace the dielectric in a capacitor with vacuum, and then insert a material with relative permittivity $\epsilon_r$, the capacitance will increase by a factor of $\epsilon_r$. This is a key point for **CO1** and **CO2** as it relates to capacitor behavior.

### Why is Relative Permittivity So Important? (Everyday Examples & Analogies)

Let's try to make this relatable. Imagine you're trying to push a heavy box across a smooth floor. The floor offers some resistance, right? Now, imagine the floor is covered with a sticky, thick carpet. The carpet is going to make it much harder to push the box – the resistance increases.

In this analogy:
*   The **electric field** is like the force you're applying to push the box.
*   The **dielectric material** is like the carpet.
*   The **polarization** of the dielectric is like the carpet fibers clinging to the box and the floor, creating extra drag.
*   The **relative permittivity** is a measure of how "sticky" or resistant the carpet is, compared to a smooth, clean floor (vacuum).

A material with a high relative permittivity is like a very thick, sticky carpet. It polarizes strongly, creating a large opposing field, which significantly reduces the *net* electric field within it. This is why materials with high $\epsilon_r$ are good insulators and are used in capacitors to increase their energy storage capacity.

Think about different materials:
*   **Vacuum**: By definition, $\epsilon_r = 1$. It offers no resistance to the electric field.
*   **Air**: Air is mostly vacuum with some molecules. Its $\epsilon_r$ is very close to 1, typically around 1.0006. So, for most practical purposes, air doesn't significantly affect electric fields, which is why it's often used as a reference in electrical engineering.
*   **Water**: Water molecules are polar even without an external field, and they can align very effectively. Water has a very high relative permittivity, around 80! This is why water molecules strongly interact with electric fields. However, pure water also has very low resistance (high conductivity), so it's not a good dielectric in practice, but its high $\epsilon_r$ explains its behavior in solutions and biological systems.
*   **Glass or Mica**: These are common dielectric materials used in capacitors. They have relative permittivities ranging from about 4 to 8. This means they are significantly better at reducing electric fields and storing energy than air.

Beiser and other authors often use the concept of permittivity to explain the modification of forces and fields in different media, which is directly applicable to understanding how electrical components behave.

### Dielectric Strength: A Practical Limit

Now, while dielectrics are great at reducing electric fields, there's a limit. If you keep increasing the electric field strength, eventually the dielectric material will break down. This means the induced dipoles get so strong that electrons are ripped away from their atoms, and the material starts conducting, often catastrophically.

The **dielectric strength** of a material is the maximum electric field intensity that it can withstand without breaking down. It's usually measured in Volts per millimeter (V/mm) or kilovolts per millimeter (kV/mm).

For example, air has a dielectric strength of about 3 kV/mm. This means if the electric field in air exceeds this value, you'll see sparks (like lightning or corona discharge). Good insulating materials used in high-voltage equipment must have very high dielectric strengths. This practical consideration is vital for electrical engineers when designing systems, connecting to **CO1** and **CO2**.

### Connection to Superconductivity (Briefly)

While this specific topic focuses on dielectrics, the module title also mentions superconductivity. It's worth noting that the study of materials and their electrical properties is interconnected. Superconductors have *zero* electrical resistance below a critical temperature, which is the opposite extreme of a dielectric. Dielectrics *resist* the flow of current and *support* electric fields, while superconductors *conduct* without resistance and *expel* magnetic fields (Meissner effect). Understanding these contrasting behaviors helps us appreciate the full spectrum of material properties relevant to electrical science.

### How This Relates to Course Outcomes:

*   **CO1 & CO2 (Semiconductor Physics & Behavior):** Understanding permittivity is crucial for device physics. For instance, in a semiconductor junction, the depletion region acts like a dielectric. The permittivity of the semiconductor material affects the width of this depletion region and the electric field across it, influencing the device's capacitance and overall behavior. This ties directly into how semiconductor materials behave in devices.
*   **CO3 (Superconductivity & Dielectrics):** This entire section is dedicated to CO3, explaining the fundamental concept of permittivity as a key property of dielectric materials.
*   **CO4 & CO5 (Applications & Experiments):** Knowing permittivity allows us to calculate the capacitance of different capacitor designs (application) and predict how electric fields will behave in various electrical systems, which is essential for designing and analyzing experiments involving dielectrics.

### Key Takeaways for Exams:

*   **Definition of Permittivity:** It's the ability of a dielectric to support an electric field by polarizing.
*   **Difference between Absolute ($\epsilon$) and Relative Permittivity ($\epsilon_r$):** $\epsilon_r$ is the ratio of a material's permittivity to that of vacuum ($\epsilon_0$), and it's dimensionless. $\epsilon_r$ tells you how much the electric field is reduced inside the material.
*   **$\epsilon_r$ and Capacitance:** An increase in $\epsilon_r$ of the dielectric in a capacitor leads to a proportional increase in capacitance. This is a very common exam question.
*   **Dielectric Strength:** The maximum field a dielectric can withstand before breakdown. Essential for insulation design.
*   **Typical Values:** Remember that vacuum $\epsilon_r = 1$, air $\epsilon_r \approx 1$, and common dielectrics have $\epsilon_r > 1$.

Remember this: when an electric field interacts with a dielectric, the dielectric **polarizes**, creating an internal field that opposes the external one. Permittivity quantifies this property. Relative permittivity tells us how much stronger this opposition is compared to a vacuum.

---

## Sample Questions with Answers

**1. Conceptual Question:** Explain why a capacitor filled with a dielectric material can store more charge than an identical capacitor with a vacuum between its plates, assuming the same applied voltage.

**Answer:** When a dielectric material is placed between the plates of a capacitor, the electric field from the charges on the plates causes the material to polarize. This polarization creates an internal electric field within the dielectric that opposes the external field. As a result, the *net* electric field inside the dielectric is reduced. Since the voltage across the capacitor is the integral of the electric field, a reduced net electric field means a lower voltage for the same amount of charge. Alternatively, for a fixed applied voltage, the dielectric allows more charge to be accumulated on the plates because the opposing field from the polarization "buffers" the effect of the plate charges. The relative permittivity ($\epsilon_r$) quantifies this effect; a higher $\epsilon_r$ means greater polarization and thus a higher capacitance ($C = \epsilon_r C_{vacuum}$). This supports **CO1** by explaining capacitor behavior.

**2. Exam-Oriented Question:** A parallel-plate capacitor has a capacitance of 10 $\mu$F when filled with air. If the air is replaced by mica, which has a relative permittivity of 6, what is the new capacitance?

**Answer:**
The capacitance of a parallel-plate capacitor is given by $C = \epsilon_0 \frac{A}{d}$, where A is the area of the plates and d is the separation.
When a dielectric material with relative permittivity $\epsilon_r$ is introduced, the capacitance becomes $C_{new} = \epsilon_r C_{vacuum}$.
In this case, the capacitance with air ($C_{air}$) is essentially the capacitance with vacuum ($C_{vacuum}$) because $\epsilon_r$ for air is very close to 1.
So, $C_{vacuum} \approx 10 \, \mu\text{F}$.
The new capacitance with mica ($\epsilon_r = 6$) is:
$C_{mica} = \epsilon_r \times C_{vacuum} = 6 \times 10 \, \mu\text{F} = 60 \, \mu\text{F}$.
The new capacitance is 60 $\mu$F. This demonstrates a direct application of the relationship between relative permittivity and capacitance, crucial for **CO5** in designing experiments or analyzing circuits.

**3. Conceptual Question:** Define relative permittivity and state its significance in electrical science.

**Answer:**
Relative permittivity ($\epsilon_r$), also known as the dielectric constant, is a dimensionless quantity that represents the ratio of the absolute permittivity of a material ($\epsilon$) to the permittivity of free space ($\epsilon_0$): $\epsilon_r = \frac{\epsilon}{\epsilon_0}$.
Its significance lies in its ability to quantify how effectively a dielectric material can reduce the electric field strength within it and store electrical energy. A higher relative permittivity indicates that the material polarizes more strongly, leading to a greater reduction in the net electric field and a higher capacitance for a given geometry. This property is fundamental to understanding the behavior of insulators, capacitors, and the propagation of electromagnetic waves through different media, directly supporting **CO3**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
