---
title: "Friction:  Laws of friction"
subject: "INDUSTRIAL TRIBOLOGY"
module: "Module 1: Introduction to Tribology:  Definition and Scope"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044637fa"
status: "completed"
scrapedAt: "2026-05-20T18:04:57.696Z"
---
# Industrial Tribology: Module 1 - Introduction to Tribology: Definition and Scope

## Topic: Friction: Laws of Friction

### 1. Introduction to Friction

Friction is a ubiquitous phenomenon that plays a crucial role in countless industrial processes and everyday activities. It is the force that opposes motion between two surfaces in contact. Understanding friction is fundamental to tribology, as it directly impacts wear, energy consumption, and the reliability of mechanical systems.

**Key Concepts:**

*   **Friction Force ($F_f$):** The force that resists relative motion between two contacting surfaces.
*   **Normal Force ($F_n$):** The force acting perpendicular to the surfaces in contact.
*   **Static Friction ($F_{s}$):** The friction force that opposes the initiation of motion between two surfaces at rest relative to each other.
*   **Kinetic Friction ($F_{k}$):** The friction force that opposes the motion between two surfaces already in relative motion.
*   **Coefficient of Friction ($\mu$):** A dimensionless quantity that represents the ratio of the friction force to the normal force. It is a material property and depends on the nature of the surfaces in contact and the conditions of contact.

**Definition of Friction:**

Friction is the resistance to motion that exists between the surfaces of bodies when they are in contact. This resistance arises from the interactions at the microscopic and macroscopic levels between the contacting surfaces.

*(Reference: Stachowiak & Batchelor, Chapter 2)*

### 2. Types of Friction

While the primary focus will be on sliding friction, it's important to acknowledge other forms:

*   **Sliding Friction:** Occurs when one surface slides over another. This is the most commonly encountered type in engineering.
*   **Rolling Friction:** Occurs when one object rolls over another (e.g., a wheel on a surface). Generally much lower than sliding friction.
*   **Fluid Friction (Viscous Friction):** Resistance to motion within a fluid or between a fluid and a solid surface.
*   **Boundary Friction:** A condition where the lubricant film is too thin to completely separate the surfaces, leading to direct surface-to-surface contact.
*   **Mixed Lubrication:** A regime where both boundary and hydrodynamic lubrication mechanisms are present.
*   **Hydrodynamic Lubrication:** Surfaces are fully separated by a thick lubricant film.

*(Reference: Bhushan, Chapter 2)*

### 3. Laws of Friction (Amontons-Coulomb Laws of Friction)

These are empirical laws that describe the behavior of sliding friction. While they have limitations and exceptions, they provide a good foundational understanding for many practical situations.

**3.1. First Law of Friction (Amontons' Law):**

*   **Statement:** The force of friction is directly proportional to the normal force pressing the surfaces together.
*   **Mathematical Representation:** $F_f \propto F_n$
*   **Explanation:** This law implies that if you double the force pushing the surfaces together, you will double the friction force. This holds true for a wide range of normal forces, though it can break down at very low or very high pressures.

    *   **Example:** Imagine pushing a heavy box across the floor. If you add more weight to the box, it becomes harder to push, indicating increased friction.

**3.2. Second Law of Friction (Amontons' Law):**

*   **Statement:** The force of friction is independent of the apparent area of contact between the surfaces.
*   **Explanation:** This law seems counter-intuitive at first glance. It suggests that whether you slide a block on its largest or smallest face, the friction force will be the same, provided the normal force remains constant. This is explained by the fact that at the microscopic level, the true area of contact is much smaller than the apparent area and is largely determined by asperities (surface irregularities) that deform under load. As the load increases, the real area of contact increases proportionally, leading to the observed linearity with normal force.

    *   **Example:** A loaded table can be slid across a floor. The friction force encountered will be similar whether the table is placed on its legs or tilted onto its side, assuming the total weight (normal force) is the same.

    *   **Important Note:** This law is generally valid for "dry" friction or when boundary lubrication is dominant. In cases of full fluid lubrication (hydrodynamic), the friction is primarily due to the viscosity of the fluid, and the area of contact plays a more significant role.

*(Reference: Williams, Chapter 3)*

**3.3. Third Law of Friction (Coulomb's Law):**

*   **Statement:** The force of friction is independent of the relative speed between the surfaces, provided the speed is not too high.
*   **Explanation:** For most practical engineering applications, the friction force doesn't change significantly with sliding speed. However, this is not universally true. At very low speeds, stick-slip phenomena can occur. At very high speeds, aerodynamic effects and significant temperature rises can alter the friction behavior.

    *   **Example:** A car's tires on a dry road will experience roughly the same friction force whether the car is moving slowly or at a moderate speed. However, at very high speeds or during rapid braking, other factors like tire temperature and wear become more dominant.

*(Reference: Hutchings, Chapter 2)*

**3.4. Additional Observations (Often considered as extensions or limitations):**

*   **Static Friction:** The force of static friction is generally greater than the force of kinetic friction for the same pair of surfaces.
    *   **Mathematical Representation:** $F_{s,max} > F_k$
    *   **Explanation:** It takes more force to get an object moving than it does to keep it moving once it's in motion. This is because static contact involves interlocking of asperities which need to be broken to initiate motion.
*   **Surface Roughness:** While the *apparent* area of contact is irrelevant, the *real* area of contact is crucial. Surface roughness influences the real area of contact and the nature of asperity interactions. Very smooth surfaces can exhibit higher friction due to stronger adhesive forces between the contacting atoms.
*   **Material Properties:** The nature of the materials in contact significantly affects the coefficient of friction. Different materials have different adhesive strengths, hardness, and chemical affinities.
*   **Contamination and Lubrication:** The presence of lubricants, contaminants (dirt, debris), or oxide layers can dramatically alter the coefficient of friction.

*(Reference: Stachowiak & Batchelor, Chapter 2; Bhushan, Chapter 2)*

### 4. Coefficient of Friction ($\mu$)

*   **Definition:** The ratio of the friction force to the normal force.
    *   **For Static Friction:** $\mu_s = \frac{F_{s,max}}{F_n}$
    *   **For Kinetic Friction:** $\mu_k = \frac{F_k}{F_n}$
*   **Characteristics:**
    *   Dimensionless.
    *   Typically, $\mu_s > \mu_k$.
    *   Varies for different material pairs and operating conditions.
    *   Values can range from less than 0.1 (e.g., Teflon on steel) to over 1.0 (e.g., rubber on dry asphalt).

*(Reference: Williams, Chapter 3)*

### 5. Adhesion vs. Ploughing Theories of Friction

Historically, two main theories have been proposed to explain the origin of friction:

*   **Adhesion Theory:** Attributes friction to the molecular forces (adhesion) between the atoms of the contacting surfaces. When surfaces are brought into close contact, bonds form between the asperities. Friction arises from the energy required to break these bonds during sliding. This theory is particularly relevant for very smooth surfaces and materials with strong interatomic forces.

*   **Ploughing (or Deformation) Theory:** Attributes friction to the deformation and displacement of softer surface asperities by harder asperities. The harder asperities act like miniature ploughs, digging into and deforming the softer surface. The work done in deforming and displacing this material contributes to the friction force. This theory is more applicable when there is a significant difference in hardness between the contacting surfaces.

**Modern Understanding:** Friction is generally understood to be a combination of both adhesion and ploughing mechanisms, with their relative contributions depending on the nature of the surfaces, load, and environment.

*(Reference: Hutchings, Chapter 2; Davis, Chapter 5)*

### 6. Examples of Friction in Industrial Applications

*   **Braking Systems:** Friction is essential for decelerating vehicles. The coefficient of friction between brake pads and discs/drums is critical. (CO5, K3)
*   **Clutches:** Friction allows for the transmission of torque in rotating machinery. (CO5, K3)
*   **Bearings:** While lubricants aim to reduce friction, some friction is always present, contributing to wear and heat generation. (CO5, K3)
*   **Gears:** Friction between gear teeth can lead to wear and energy loss. Lubrication is crucial. (CO5, K3)
*   **Conveyor Belts:** Friction between the belt and rollers, or between the belt and the material being transported, is vital for its operation. (CO5, K3)
*   **Machining:** Friction between the cutting tool and workpiece affects cutting forces, tool wear, and surface finish. (CO5, K3)

### 7. Practice Questions and Answers

**Question 1 (CO1, K2):**
State Amontons' three laws of friction.

**Answer:**
1.  The force of friction is directly proportional to the normal force pressing the surfaces together.
2.  The force of friction is independent of the apparent area of contact between the surfaces.
3.  The force of friction is independent of the relative speed between the surfaces (within practical limits).

**Question 2 (CO1, K2):**
Which is generally greater, static friction or kinetic friction, and why?

**Answer:**
Static friction is generally greater than kinetic friction. This is because static friction involves the interlocking of surface asperities, which must be broken to initiate motion. Once motion has started, these asperities are no longer as effectively interlocked.

**Question 3 (CO1, K2):**
If the normal force between two surfaces is doubled, how does the force of kinetic friction change, assuming the laws of friction hold?

**Answer:**
The force of kinetic friction will also double. According to the first law of friction, $F_f \propto F_n$.

**Question 4 (CO1, K2):**
A block weighing 100 N is placed on a horizontal surface. The coefficient of kinetic friction between the block and the surface is 0.3. If a horizontal force of 20 N is applied to the block, will it move? If a force of 40 N is applied, will it move?

**Answer:**
*   **Maximum Static Friction:** First, we need to determine the maximum static friction. Let's assume the coefficient of static friction ($\mu_s$) is slightly higher than kinetic friction, say 0.4.
    $F_{s,max} = \mu_s \times F_n = 0.4 \times 100 \text{ N} = 40 \text{ N}$
*   **Kinetic Friction:** The coefficient of kinetic friction ($\mu_k$) is 0.3.
    $F_k = \mu_k \times F_n = 0.3 \times 100 \text{ N} = 30 \text{ N}$
*   **Analysis:**
    *   When a force of 20 N is applied: This is less than the maximum static friction (40 N), so the block will **not** move. The static friction force will oppose the applied force and be equal to 20 N.
    *   When a force of 40 N is applied: This is equal to the maximum static friction (40 N), so the block will be on the verge of moving. It will likely start moving if there's any slight disturbance.
    *   If a force *greater* than 40 N were applied, the block would move, and the kinetic friction force would be 30 N, opposing the motion.

**Question 5 (CO1, K2):**
Can you explain why the second law of friction (independence of area) is explained by the real area of contact?

**Answer:**
Yes. The second law states that friction is independent of the apparent area of contact. This is because the actual contact between surfaces occurs at the tips of microscopic asperities. The real area of contact ($A_r$) is much smaller than the apparent area ($A_a$). Under load, these asperities deform. The real area of contact ($A_r$) is found to be roughly proportional to the applied load ($F_n$), meaning $A_r \propto F_n$. Since the adhesion force is proportional to the real area of contact, $F_{adhesion} \propto A_r$, it follows that $F_{adhesion} \propto F_n$. Similarly, the ploughing effect also contributes to a force proportional to the normal load. Thus, the total friction force, being a sum of these effects, becomes proportional to the normal force and independent of the apparent area.

### 8. Important Points to Remember

*   **Friction opposes motion.**
*   **Amontons-Coulomb laws are foundational but have limitations** (e.g., at very low/high speeds, specific lubrication regimes).
*   **Static friction is greater than kinetic friction.**
*   **The coefficient of friction ($\mu$) is a material property and condition-dependent.**
*   **Real area of contact is crucial** for understanding friction, not the apparent area.
*   Friction is a **combination of adhesion and ploughing** at the microscopic level.
*   Understanding friction is vital for **designing efficient and reliable mechanical systems** (CO5).

### 9. Alignment with Course Outcomes

*   **CO1: Explain fundamental principles of Tribology (Knowledge Level: K2)**
    This entire topic directly addresses CO1 by detailing the fundamental principles of friction, its types, and its governing laws. The laws of friction are a core principle.
*   **CO5: Apply tribological knowledge in industrial applications (Knowledge Level: K3)**
    The examples provided illustrate how friction principles are applied in various industrial settings, fulfilling the application aspect of CO5. Understanding friction is the first step towards selecting appropriate materials, lubricants, and designs for industrial components.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
