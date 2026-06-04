---
title: "Strain energy due to torsion"
subject: "MECHANICS OF SOLIDS"
module: "Module 4: Stresses on inclined planes for uniaxial and biaxial stress fields"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f7f"
status: "completed"
scrapedAt: "2026-05-20T18:37:35.353Z"
---
# MECHANICS OF SOLIDS - Module 4: Stresses on Inclined Planes for Uniaxial and Biaxial Stress Fields

## Topic: Strain Energy Due to Torsion

Welcome, everyone! In our journey through Mechanics of Solids, we've explored how materials behave under different loads. Today, we're diving into a fascinating aspect: **Strain Energy due to Torsion**. You might recall from earlier modules that when we deform a material, we're essentially doing work on it, and this work gets stored within the material as energy. This stored energy is what we call strain energy.

In this session, we'll specifically focus on how this energy is stored when a solid shaft or a hollow shaft is subjected to a twisting moment, also known as torque. Understanding strain energy in torsion is crucial for analyzing the behavior of rotating shafts, like those in engines or power transmission systems, and for predicting their failure modes. It directly relates to our course objectives, particularly **CO3 (Apply the principles of solid mechanics to calculate... strain energies in structural elements subjected to... twisting moments)** and **CO6 (Analyse the given structural member to calculate the safe load or proportion the cross section to carry the load safely)**.

### What is Torsion?

Before we get to strain energy, let's quickly revisit torsion. Imagine you're trying to unscrew a stubborn jar lid. The force you apply, tangential to the lid's edge, creates a twisting effect. In engineering, this twisting effect is quantified by the **Torque (T)**. When a shaft is subjected to a torque applied at its ends, it experiences internal **Shear Stresses** and **Shear Strains**.

### Defining Strain Energy

When an external force or torque is applied to an elastic body, it causes deformation. The work done by this external agent during deformation is stored within the body as **Strain Energy**. This energy is released when the external agent is removed, and the body returns to its original shape. It's like stretching a rubber band – you do work on it, and that energy is stored in the rubber band, ready to snap back.

### Strain Energy in Torsion: Derivation and Concepts

Let's consider a solid circular shaft of length $L$, outer radius $R$, and subjected to a torque $T$. When this torque is applied, the shaft twists by an angle $\theta$. The work done by the torque during this twisting is stored as strain energy within the shaft.

#### The Fundamental Relationship: Torque and Angle of Twist

We know from our torsion theory (Module 3, perhaps?) that the angle of twist $\theta$ for a shaft is related to the applied torque $T$, the shaft's length $L$, the shear modulus $G$, and its polar moment of inertia $J$ by the formula:

$$ \frac{T}{J} = \frac{G\theta}{L} = \frac{\tau}{r} $$

where $\tau$ is the shear stress at a radial distance $r$ from the center and $J$ is the polar moment of inertia of the cross-section. For a solid circular shaft, $J = \frac{\pi D^4}{32} = \frac{\pi R^4}{2}$.

This equation tells us that as the torque $T$ increases, the angle of twist $\theta$ also increases, and the shear stress $\tau$ increases proportionally with the radius $r$.

#### Work Done During Twisting

Now, think about how the torque builds up from zero to its final value $T$. As the torque increases incrementally, say from $dT$, the shaft twists by an incremental angle $d\theta$. The incremental work done by the torque is given by $dW = T \cdot d\theta$.

The total strain energy ($U$) stored in the shaft is the integral of this incremental work from zero torque to the final torque $T$:

$$ U = \int_0^\theta T \, d\theta $$

Since $T$ is directly proportional to $\theta$ (or to $\tau$, which is proportional to $\theta$), we can write $T = \frac{GJ}{L} \theta$. Substituting this into the integral:

$$ U = \int_0^\theta \left(\frac{GJ}{L} \theta\right) d\theta $$
$$ U = \frac{GJ}{L} \int_0^\theta \theta \, d\theta $$
$$ U = \frac{GJ}{L} \left[ \frac{\theta^2}{2} \right]_0^\theta $$
$$ U = \frac{1}{2} \frac{GJ}{L} \theta^2 $$

This is a fundamental formula for strain energy in torsion.

#### Expressing Strain Energy in Terms of Torque

Often, we want to express the strain energy directly in terms of the applied torque $T$. We can use the relationship $T = \frac{GJ}{L} \theta$, which means $\theta = \frac{TL}{GJ}$. Substituting this back into the strain energy equation:

$$ U = \frac{1}{2} \frac{GJ}{L} \left(\frac{TL}{GJ}\right)^2 $$
$$ U = \frac{1}{2} \frac{GJ}{L} \frac{T^2 L^2}{(GJ)^2} $$
$$ U = \frac{1}{2} \frac{T^2 L}{GJ} $$

This is perhaps the most common and useful formula for strain energy due to torsion. **Remember this one!** It's a direct application of the principle of virtual work or energy methods.

#### Expressing Strain Energy in Terms of Maximum Shear Stress

We can also express the strain energy in terms of the maximum shear stress, $\tau_{max}$, which occurs at the outer surface ($r=R$). We know that $\tau_{max} = \frac{TR}{J}$. So, $T = \frac{J \tau_{max}}{R}$.

Substituting this into the strain energy formula:

$$ U = \frac{1}{2} \frac{\left(\frac{J \tau_{max}}{R}\right)^2 L}{GJ} $$
$$ U = \frac{1}{2} \frac{J^2 \tau_{max}^2 L}{R^2 GJ} $$
$$ U = \frac{1}{2} \frac{J \tau_{max}^2 L}{R^2 G} $$

Now, let's think about the shear stress distribution. The shear stress $\tau$ at any radius $r$ is $\tau = \frac{Tr}{J}$. So, $\tau^2 = \frac{T^2 r^2}{J^2}$.
We can rewrite the strain energy formula $U = \frac{1}{2} \frac{T^2 L}{GJ}$ by substituting $T^2 = \frac{J^2 \tau^2}{r^2}$:

$$ U = \frac{1}{2} \frac{\left(\frac{J^2 \tau^2}{r^2}\right) L}{GJ} $$
$$ U = \frac{1}{2} \frac{J \tau^2 L}{Gr^2} $$

This doesn't seem right for a total strain energy. What's missing? We need to consider the *volume* over which this stress exists.

Let's go back to a differential ring element of radius $r$, thickness $dr$, and length $L$. The torque acting on this ring is $T_r = \frac{Tr}{R}$. The polar moment of inertia of this ring is $dJ = 2\pi r \, dr \cdot r^2 = 2\pi r^3 \, dr$.
The shear stress in this ring is $\tau_r = \frac{Tr}{J}$.

The strain energy in this elemental ring $dU$ can be expressed as:

$$ dU = \frac{1}{2} \frac{T_r^2 L}{G dJ} $$

This approach gets complicated quickly. A more direct way is to consider the strain energy per unit volume.

#### Strain Energy Per Unit Volume (Modulus of Resilience in Shear)

The strain energy per unit volume, often denoted by $u$, is given by:

$$ u = \frac{1}{2} \tau \gamma $$

where $\tau$ is the shear stress and $\gamma$ is the shear strain. Since $\tau = G\gamma$, we can write $\gamma = \frac{\tau}{G}$.
Substituting this:

$$ u = \frac{1}{2} \tau \left(\frac{\tau}{G}\right) $$
$$ u = \frac{\tau^2}{2G} $$

This is the strain energy per unit volume in shear. To get the total strain energy, we need to integrate this over the entire volume of the shaft.

Consider a solid circular shaft. We can divide it into thin cylindrical shells of radius $r$, thickness $dr$, and length $L$. The volume of such a shell is $dV = (2\pi r \, dr) L$.
The shear stress in this shell is $\tau = \frac{Tr}{J}$.
The strain energy in this differential shell is $dU = u \cdot dV = \frac{\tau^2}{2G} dV$.

$$ dU = \frac{1}{2G} \left(\frac{Tr}{J}\right)^2 (2\pi r \, dr \, L) $$
$$ dU = \frac{T^2}{2GJ^2} r^2 (2\pi r L \, dr) $$
$$ dU = \frac{\pi L T^2}{GJ^2} r^3 \, dr $$

Now, integrate this from $r=0$ to $r=R$ to find the total strain energy $U$:

$$ U = \int_0^R dU = \int_0^R \frac{\pi L T^2}{GJ^2} r^3 \, dr $$
$$ U = \frac{\pi L T^2}{GJ^2} \int_0^R r^3 \, dr $$
$$ U = \frac{\pi L T^2}{GJ^2} \left[ \frac{r^4}{4} \right]_0^R $$
$$ U = \frac{\pi L T^2}{GJ^2} \frac{R^4}{4} $$

Now, remember for a solid circular shaft, $J = \frac{\pi R^4}{2}$. So, $R^4 = \frac{2J}{\pi}$.
Substitute this back:

$$ U = \frac{\pi L T^2}{GJ^2} \frac{1}{4} \left(\frac{2J}{\pi}\right) $$
$$ U = \frac{\pi L T^2}{GJ^2} \frac{J}{2\pi} $$
$$ U = \frac{L T^2}{2GJ} $$

Ah, we arrived at the same formula again! This confirms our earlier derivation and gives us confidence. This formula $U = \frac{T^2 L}{2GJ}$ is incredibly important.

#### For Hollow Circular Shafts

What if we have a hollow shaft? Let the outer radius be $R_o$ and the inner radius be $R_i$.
The polar moment of inertia $J$ for a hollow shaft is $J = \frac{\pi}{32} (D_o^4 - D_i^4) = \frac{\pi}{2} (R_o^4 - R_i^4)$.
The formula for strain energy in torsion remains the same in its structure:

$$ U = \frac{T^2 L}{2GJ} $$

We just need to use the correct $J$ for the hollow shaft.

### Example: The Drive Shaft of a Bicycle

Imagine the pedals and gears of a bicycle. When you pedal, you apply a torque to the crank, which is transmitted through the chain to the rear wheel. The axle connecting the rear wheel to the frame effectively acts as a shaft. If you're pedaling hard, this axle is experiencing torsion. The strain energy stored in that axle is what allows it to spring back a bit after you stop pedaling, and also contributes to the overall stiffness of the bicycle frame.

Let's say a bicycle axle is a solid steel rod of length $L = 0.5$ m, diameter $d = 1.5$ cm (so radius $R = 0.75$ cm $= 0.0075$ m).
Let the applied torque $T = 50$ Nm.
The shear modulus of steel, $G \approx 80$ GPa $= 80 \times 10^9$ N/m$^2$.

First, calculate the polar moment of inertia, $J$:
$J = \frac{\pi R^4}{2} = \frac{\pi (0.0075 \text{ m})^4}{2} \approx \frac{\pi \times 3.164 \times 10^{-9} \text{ m}^4}{2} \approx 4.97 \times 10^{-9} \text{ m}^4$.

Now, calculate the strain energy $U$:
$$ U = \frac{T^2 L}{2GJ} = \frac{(50 \text{ Nm})^2 \times 0.5 \text{ m}}{2 \times (80 \times 10^9 \text{ N/m}^2) \times (4.97 \times 10^{-9} \text{ m}^4)} $$
$$ U = \frac{2500 \text{ Nm}^2 \times 0.5 \text{ m}}{2 \times 397.6 \text{ Nm}^{-2}} $$
$$ U = \frac{1250 \text{ Nm}^3}{795.2 \text{ Nm}^{-2}} \approx 1.57 \text{ J} $$

So, about 1.57 Joules of energy are stored in that small axle when you apply 50 Nm of torque. This might not sound like much, but it's a direct measure of the internal deformation work.

### Connection to Course Outcomes

*   **CO1 (Recall fundamental terms):** This topic reinforces the definitions of torque, shear stress, shear strain, shear modulus, polar moment of inertia, and strain energy.
*   **CO2 (Explain behavior under loading):** We're explaining the internal energy storage mechanism when a shaft is twisted, which is a key part of its behavior under torsional loads.
*   **CO3 (Apply principles to calculate strain energies):** This is the core of the topic. We've derived and applied the formula for strain energy in torsion.
*   **CO5 (Perform stress transformations):** While not directly about stress transformation on inclined planes, understanding shear stress distribution in torsion is foundational. The shear stresses developed in torsion are essentially acting on planes inclined to the axis of the shaft.
*   **CO6 (Analyse for safe load/proportioning):** Strain energy calculations can be used in energy methods (like Castigliano's theorem) to determine deflections (twist angles) and in energy absorption capacities, which are vital for designing shafts to prevent failure. For example, a shaft with higher strain energy capacity (perhaps due to a larger $J$ or being made of a tougher material) can absorb more torsional energy before yielding.

### Key Takeaways and Exam Focus

*   **The Formula:** The most crucial takeaway is $U = \frac{T^2 L}{2GJ}$. Make sure you can derive it and use it.
*   **Units:** Always be careful with units! Ensure consistency (e.g., all in meters, Pascals, or Newtons). GPa needs to be converted to Pa (N/m$^2$).
*   **Polar Moment of Inertia (J):** For a solid circle, $J = \frac{\pi D^4}{32} = \frac{\pi R^4}{2}$. For a hollow circle, $J = \frac{\pi}{32}(D_o^4 - D_i^4) = \frac{\pi}{2}(R_o^4 - R_i^4)$. Know these.
*   **Shear Modulus (G):** This is a material property.
*   **Application:** Problems often involve finding $U$, or using $U$ to find $T$, $L$, $G$, or $J$ if other values are known. Sometimes, you might be asked about the strain energy stored in a specific section of a shaft.

Remember, strain energy is a measure of the "effort" the material puts in to resist deformation. In torsion, this resistance manifests as stored shear strain energy.

### Relationship to Other Stress Fields (Brief Mention for Context)

While this topic is specifically about torsion, it's worth noting that strain energy principles apply to other stress fields too. For example, strain energy due to axial load is $U = \frac{P^2 L}{2AE}$, and strain energy due to bending is more complex but also derivable. The general idea of integrating strain energy per unit volume over the stressed region holds true across all loading scenarios. This topic is a specific instance of that broader principle.

***

### Sample Questions and Answers

**Q1. Define Strain Energy in Torsion and state the formula for its calculation for a solid circular shaft.**

**Answer:** Strain energy in torsion is the energy absorbed by a shaft when it is subjected to a twisting moment (torque). This energy is stored internally within the material due to the shear stresses and shear strains developed. For a solid circular shaft of length $L$, polar moment of inertia $J$, subjected to a torque $T$, and having a shear modulus $G$, the strain energy $U$ is given by:

$$ U = \frac{T^2 L}{2GJ} $$

This formula arises from integrating the work done by the applied torque over the angle of twist, or by integrating the strain energy per unit volume over the entire volume of the shaft.

**Q2. A solid steel shaft is subjected to a torque of 10 kNm. If the shaft has a diameter of 100 mm and a length of 2 m, calculate the strain energy stored in the shaft. Take the shear modulus of steel as 80 GPa.**

**Solution:**
Given:
Torque, $T = 10 \text{ kNm} = 10 \times 10^3 \text{ Nm}$
Diameter, $d = 100 \text{ mm} = 0.1 \text{ m}$
Radius, $R = d/2 = 0.05 \text{ m}$
Length, $L = 2 \text{ m}$
Shear Modulus, $G = 80 \text{ GPa} = 80 \times 10^9 \text{ N/m}^2$

First, calculate the polar moment of inertia ($J$) for the solid circular shaft:
$J = \frac{\pi R^4}{2} = \frac{\pi (0.05 \text{ m})^4}{2} = \frac{\pi \times 6.25 \times 10^{-6} \text{ m}^4}{2} \approx 9.817 \times 10^{-6} \text{ m}^4$

Now, use the formula for strain energy in torsion:
$$ U = \frac{T^2 L}{2GJ} $$
$$ U = \frac{(10 \times 10^3 \text{ Nm})^2 \times 2 \text{ m}}{2 \times (80 \times 10^9 \text{ N/m}^2) \times (9.817 \times 10^{-6} \text{ m}^4)} $$
$$ U = \frac{100 \times 10^6 \text{ Nm}^2 \times 2 \text{ m}}{1.5707 \times 10^4 \text{ Nm}^{-2}} $$
$$ U = \frac{200 \times 10^6 \text{ Nm}^3}{1.5707 \times 10^4 \text{ Nm}^{-2}} $$
$$ U \approx 12732 \text{ J} $$

So, the strain energy stored in the shaft is approximately 12732 Joules or 12.732 kJ.

**Q3. Explain how the strain energy stored in a shaft under torsion contributes to the material's ability to withstand torsional loads. What would happen if the applied torque exceeds the limit of proportionality of the material?**

**Answer:** The strain energy stored in a shaft under torsion represents the internal work done by the material to resist the applied torque and the resulting deformation (twist). This stored energy is a measure of the shaft's elastic capacity to absorb work. A higher strain energy capacity means the shaft can absorb more work before permanent deformation (yielding) occurs.

If the applied torque exceeds the limit of proportionality (elastic limit) of the material, the relationship between torque and angle of twist (or shear stress and shear strain) becomes non-linear. The material starts to deform plastically. In this scenario:
1.  **Non-linear Behavior:** The formulas derived for elastic strain energy, which assume linear elastic behavior ($T \propto \theta$, $\tau \propto \gamma$), are no longer directly applicable without modification for stress-strain relationships beyond the elastic limit.
2.  **Permanent Deformation:** The shaft will not return to its original shape when the torque is removed. It will retain some amount of twist.
3.  **Energy Dissipation:** Some of the energy will be dissipated as heat during the plastic deformation process. The total work done will be greater than the recoverable elastic strain energy. The concept of "modulus of toughness" becomes relevant, representing the total energy a material can absorb before fracture.

Essentially, exceeding the elastic limit means the shaft has begun to yield, and its ability to absorb energy elastically is compromised, leading to permanent damage.
