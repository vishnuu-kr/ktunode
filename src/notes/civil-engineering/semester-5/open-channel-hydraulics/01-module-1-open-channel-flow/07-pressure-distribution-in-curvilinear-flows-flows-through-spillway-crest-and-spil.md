---
title: "Pressure distribution in curvilinear flows- flows through spillway crest and spillway bucket"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 1: Open channel flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810ea9"
status: "completed"
scrapedAt: "2026-05-20T18:49:48.163Z"
---
# Open Channel Hydraulics - Module 1: Open Channel Flow

## Topic: Pressure Distribution in Curvilinear Flows - Flows Through Spillway Crest and Spillway Bucket

---

### **Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Understand the concept of curvilinear flow in open channels, particularly in the context of spillways.
*   Explain the principles governing pressure distribution in curvilinear flows.
*   Analyze the pressure distribution on the spillway crest.
*   Analyze the pressure distribution in the spillway bucket.
*   Apply fundamental hydraulic principles to solve problems related to pressure in spillway structures.

---

### **1. Introduction to Curvilinear Flow in Open Channels**

**1.1 Definition:**

*   **Curvilinear Flow:** A type of fluid flow where the streamlines are not straight and parallel. The fluid particles follow curved paths, implying the presence of a centripetal acceleration.
*   **Open Channel Flow:** Flow in a channel where the free surface of the liquid is exposed to the atmosphere. This is in contrast to pipe flow, where the fluid is fully confined.
*   **Spillways:** Structures built on dams or other water retaining structures to safely pass excess water or floodwater. They are designed to manage high-velocity flows, often involving significant changes in direction and curvature.

**1.2 Importance in Spillways:**

*   Spillways, by their very nature, involve significant changes in the flow path, particularly at the **crest** (the upstream edge) and the **bucket** (the downstream energy dissipation section).
*   These changes in direction lead to **curvilinear flow**, which significantly influences the **pressure distribution** within the water.
*   Understanding this pressure distribution is crucial for:
    *   **Structural Design:** To ensure the spillway structure can withstand the forces exerted by the water.
    *   **Cavitation Prevention:** High negative pressures can lead to cavitation, which can damage the spillway surface.
    *   **Energy Dissipation:** The pressure variations play a role in the energy dissipation process in the bucket.

---

### **2. Principles Governing Pressure Distribution in Curvilinear Flows**

**2.1 Fundamental Concept: Centripetal Acceleration**

*   In curvilinear flow, fluid particles are constantly changing direction. This change in velocity direction requires a force acting towards the center of curvature.
*   This force is provided by a pressure gradient.
*   **Newton's Second Law:** The net force acting on a fluid particle is equal to its mass times its acceleration ($F = ma$). For a fluid particle moving along a curved path, the acceleration is centripetal ($a_c = v^2/r$), directed towards the center of curvature.

**2.2 Pressure Gradient in Curvilinear Flow:**

*   Consider a fluid particle of mass $dm$ moving with velocity $v$ along a curved path with radius of curvature $r$.
*   The centripetal force required is $dF_c = dm \cdot (v^2/r)$.
*   This force is typically provided by a pressure difference across the particle. If the flow is curved horizontally, the pressure is higher on the outer side of the curve and lower on the inner side. If the flow is curved vertically, the pressure distribution is also affected by gravity.
*   **Hydrostatic pressure distribution:** In still fluid or uniform rectilinear flow, pressure increases linearly with depth ($\frac{\partial p}{\partial z} = -\rho g$, where $z$ is vertical upward).
*   **Bernoulli's Equation (for streamline analysis):** Along a streamline, $\frac{p}{\rho g} + \frac{v^2}{2g} + z = \text{constant}$. This equation is applicable if viscous effects are negligible and the flow is steady.
*   **Radial Equilibrium Equation (for curvilinear flow):** In steady, incompressible flow, the equation of motion in the radial direction is:
    $$ \frac{1}{\rho} \frac{\partial p}{\partial n} = \frac{v^2}{r} $$
    Where:
    *   $\frac{\partial p}{\partial n}$ is the pressure gradient in the radial direction (perpendicular to the streamline).
    *   $\rho$ is the fluid density.
    *   $v$ is the velocity.
    *   $r$ is the radius of curvature of the streamline.

**2.3 Key Implication:**

*   The radial equilibrium equation shows that in curvilinear flow, there is a pressure gradient perpendicular to the streamlines.
*   **On the inner side of a curve (smaller $r$), the pressure gradient is steeper.** This means pressure increases more rapidly outwards from the center of curvature.
*   **On the outer side of a curve (larger $r$), the pressure gradient is less steep.**
*   This pressure gradient is superimposed on the hydrostatic pressure distribution.

---

### **3. Pressure Distribution on the Spillway Crest**

**3.1 General Shape of Spillway Crests:**

*   Spillway crests are typically designed with a smooth, rounded profile (often a circular arc or a parabolic segment) to minimize head loss and prevent cavitation.
*   The water flowing over the crest follows a curved path.

**3.2 Flow Dynamics at the Crest:**

*   As water approaches the crest, its velocity increases, and it begins to curve downwards and over the crest.
*   This downward curvature means the streamlines are concave upwards.
*   For streamlines that are concave upwards, the pressure must be higher at the bottom of the streamline and lower at the top to provide the necessary upward centripetal force.

**3.3 Pressure Distribution Analysis:**

*   Consider a streamline passing over the spillway crest. The flow is generally accelerating and turning.
*   Using the radial equilibrium equation in a vertical plane for flow over the crest:
    $$ \frac{1}{\rho} \frac{\partial p}{\partial y} = -\frac{v^2}{r} $$
    Where:
    *   $y$ is the vertical direction, with the positive direction usually taken upwards.
    *   $\frac{\partial p}{\partial y}$ is the vertical pressure gradient.
    *   $r$ is the radius of curvature of the streamline (positive in this case as it's concave upwards).
    *   The negative sign indicates that the pressure gradient is downwards, meaning pressure decreases upwards.
*   **Pressure Deficit on the Upper Surface:** The free surface of the water on the crest is at atmospheric pressure. As we move downwards from the free surface, the pressure increases due to the acceleration and curvature. However, if the curvature is sharp enough and the velocity high enough, the pressure at the upper layers of the flow can become significantly reduced.
*   **Sub-atmospheric Pressure:** In some cases, especially with high velocities and sharp curvatures, the pressure at the top layers of the water flowing over the crest can become *less than atmospheric pressure* (i.e., negative gauge pressure). This phenomenon is critical for spillway design.

**3.4 Example: Free Overfall and Crest Pressure**

*   Imagine water flowing over a sharp edge (like a weir crest). The streamlines become significantly curved.
*   The pressure at the points on the streamline where the flow turns sharply downwards will be reduced.
*   The standard spillway crest profile is designed to be a "nappe" that springs cleanly from the crest, creating a region of low pressure beneath the nappe.

**3.5 Impact on Spillway Design:**

*   **Uplift Pressure:** Reduced pressure on the underside of the crest can create an uplift force on the spillway structure.
*   **Cavitation:** If the pressure drops below the vapor pressure of water, cavitation can occur, leading to pitting and damage. Spillway profiles are designed to maintain pressures above vapor pressure.
*   **Discharge Capacity:** The shape of the crest influences the discharge capacity of the spillway.

---

### **4. Pressure Distribution in the Spillway Bucket**

**4.1 Purpose of the Spillway Bucket:**

*   The spillway bucket is located at the downstream end of the spillway chute.
*   Its primary function is to dissipate the kinetic energy of the high-velocity water before it is discharged into the downstream river or channel.
*   Common types include:
    *   **Stilling Basins:** Pools with structures like baffles, sills, and dentated ends to create turbulence and dissipate energy.
    *   **Hydraulic Jump Basins:** Designed to induce a hydraulic jump, a phenomenon where rapid flow transitions to subcritical flow with significant energy loss.
    *   **Ski-Type or Flip Buckets:** Redirect the high-velocity jet upwards and away from the dam toe.

**4.2 Flow Characteristics in Buckets:**

*   The flow in the bucket is typically high-velocity, turbulent, and often involves significant curvature, especially in flip buckets.
*   In **stilling basins** with energy dissipators, the flow is highly chaotic with intense turbulence.
*   In **hydraulic jump basins**, the flow transitions from supercritical to subcritical, with a significant roller of recirculating water.
*   In **flip buckets**, the water jet follows a parabolic trajectory.

**4.3 Pressure Distribution Analysis:**

*   **Stilling Basins:** The pressure distribution here is complex due to intense turbulence and the presence of various structures.
    *   **Stagnation Points:** Areas where the velocity is zero or very low (e.g., behind baffles) can experience higher pressures (stagnation pressure).
    *   **Turbulent Eddies:** Localized high and low-pressure zones exist within the turbulent eddies.
    *   **Pressure on Structures:** The design of baffles and sills must account for the impact forces and pressures exerted by the water.

*   **Hydraulic Jump Basins:**
    *   **Upstream of the Jump (Supercritical Flow):** The flow is relatively uniform, with pressure increasing with depth.
    *   **Within the Jump:** This is a highly turbulent zone with a rapid transition in depth and velocity. The pressure distribution is non-uniform and fluctuates. A strong recirculating roller forms. The pressure on the floor of the basin beneath the jump can be higher than hydrostatic due to the downward momentum transfer.
    *   **Downstream of the Jump (Subcritical Flow):** The flow becomes more uniform, and the pressure distribution approaches hydrostatic again, increasing with depth.

*   **Flip Buckets (Ski-Type Buckets):**
    *   The water jet exiting the bucket follows a trajectory influenced by gravity and air resistance.
    *   The bucket itself is typically curved.
    *   **Pressure on the Bucket Surface:** The streamlines of water flowing over the curved surface of the bucket are concave upwards. This means there will be lower pressure on the upper surface of the water layer and higher pressure on the lower surface, pushing the water upwards and outwards.
    *   The magnitude of this pressure depends on the velocity of the water and the radius of curvature of the bucket.
    *   **Sub-atmospheric Pressures are Possible:** Similar to spillway crests, if the curvature is sharp and velocities are high, sub-atmospheric pressures can develop on the underside of the water jet as it leaves the bucket, which can influence the trajectory and potentially cause cavitation on the bucket's surface.

**4.4 Example: Flip Bucket Trajectory**

*   A flip bucket projects a high-velocity jet of water. The bucket surface is curved to impart an upward momentum.
*   The pressure distribution on the water immediately after it leaves the bucket dictates the initial angle and trajectory.
*   If the bucket is sharply curved and the velocity is very high, the water on the upper boundary of the jet may experience reduced pressure.

**4.5 Impact on Spillway Design:**

*   **Energy Dissipation Effectiveness:** Understanding pressure variations helps in optimizing the shape and components of stilling basins for efficient energy dissipation.
*   **Structural Integrity:** The forces generated by pressure distributions on the bucket surfaces and within the turbulent zones must be considered for structural stability.
*   **Scour Protection:** The energy dissipation in the bucket is crucial to prevent scour of the downstream riverbed.

---

### **5. Key Concepts and Definitions to Remember**

*   **Curvilinear Flow:** Flow along curved streamlines.
*   **Centripetal Acceleration:** Acceleration towards the center of curvature required for curvilinear motion ($a_c = v^2/r$).
*   **Radial Equilibrium:** The balance of forces (primarily pressure and inertia) acting perpendicular to the streamlines in curvilinear flow.
*   **Radial Equilibrium Equation:** $\frac{1}{\rho} \frac{\partial p}{\partial n} = \frac{v^2}{r}$.
*   **Pressure Gradient:** The rate of change of pressure with distance.
*   **Spillway Crest:** Upstream rounded edge where water flows over.
*   **Spillway Bucket:** Downstream energy dissipation section.
*   **Sub-atmospheric Pressure (Negative Gauge Pressure):** Pressure lower than atmospheric pressure. Can occur in regions of high velocity and sharp curvature.
*   **Cavitation:** Formation and collapse of vapor bubbles due to low pressure, leading to material damage.
*   **Stilling Basin:** A structure at the end of a spillway designed to dissipate energy through turbulence and hydraulic phenomena.
*   **Hydraulic Jump:** A phenomenon where supercritical flow abruptly transitions to subcritical flow, with substantial energy loss.
*   **Flip Bucket (Ski Bucket):** A bucket designed to throw the water jet upwards and away from the structure.
*   **Nappe:** The sheet of water flowing over a weir or spillway crest.

---

### **6. Important Points to Remember**

*   Curvilinear flow inherently involves a pressure gradient perpendicular to the streamlines.
*   Pressure is higher on the outer side of a curve and lower on the inner side (for horizontal curves), and distribution is modified by vertical curvature.
*   On spillway crests, the downward curvature can lead to reduced pressures on the upper layers of the water.
*   Sub-atmospheric pressures can occur at spillway crests and flip buckets if velocities are high and curvatures are sharp, posing risks of cavitation.
*   Spillway bucket design focuses on energy dissipation, and pressure distribution within these zones is complex due to turbulence and specific structures.
*   Understanding pressure distribution is vital for the safe and efficient design of spillway structures.

---

### **7. Practice Questions and Exercises**

**Question 1:**

Explain why pressure is not uniformly distributed across the depth of flow over a spillway crest.

**Answer:**

Over a spillway crest, the water streamlines curve downwards. This downward curvature means the water particles are experiencing centripetal acceleration towards the center of curvature (which is below the streamline). According to Newton's second law, a force is required to produce this acceleration. This force is provided by a pressure gradient perpendicular to the streamlines. Specifically, the pressure must be higher on the lower side of the streamline and lower on the upper side. Since the free surface is at atmospheric pressure, the pressure will increase as you move downwards from the free surface, but this increase is not simply hydrostatic due to the additional centripetal acceleration term.

**Question 2:**

What is the primary concern with the pressure distribution in a spillway bucket designed as a flip bucket?

**Answer:**

The primary concern with pressure distribution in a spillway bucket designed as a flip bucket is the potential for **sub-atmospheric pressures** to develop on the underside of the water jet as it leaves the curved bucket surface. This can happen if the velocity is high and the radius of curvature is small. These low pressures can lead to **cavitation**, which can damage the spillway surface, and can also slightly influence the trajectory of the water jet.

**Question 3:**

A spillway chute discharges water with a velocity of $15 \text{ m/s}$ over a bucket with a radius of curvature of $5 \text{ m}$. Calculate the pressure gradient in the radial direction at the point of maximum curvature if the water density is $1000 \text{ kg/m}^3$.

**Solution:**

We use the radial equilibrium equation:
$$ \frac{1}{\rho} \frac{\partial p}{\partial n} = \frac{v^2}{r} $$
Given:
*   $v = 15 \text{ m/s}$
*   $r = 5 \text{ m}$
*   $\rho = 1000 \text{ kg/m}^3$

Substituting the values:
$$ \frac{1}{1000} \frac{\partial p}{\partial n} = \frac{(15)^2}{5} $$
$$ \frac{\partial p}{\partial n} = 1000 \times \frac{225}{5} $$
$$ \frac{\partial p}{\partial n} = 1000 \times 45 $$
$$ \frac{\partial p}{\partial n} = 45000 \text{ N/m}^3 $$

The pressure gradient in the radial direction is $45000 \text{ N/m}^3$. This means that for every meter you move radially outward (away from the center of curvature) in the fluid, the pressure increases by $45000 \text{ N/m}^2$ (or $45 \text{ kPa}$), assuming the pressure gradient is constant over that distance and perpendicular to the streamlines.

**Question 4:**

True or False: In curvilinear flow, pressure increases with distance from the center of curvature.

**Answer:**

False. The radial equilibrium equation ($\frac{1}{\rho} \frac{\partial p}{\partial n} = \frac{v^2}{r}$) shows that the pressure gradient ($\frac{\partial p}{\partial n}$) is positive, meaning pressure increases in the direction of $\frac{\partial n}$ (which is radially outward). Therefore, pressure increases with distance from the center of curvature. The statement is generally true, but the phrasing "increases with distance from the center of curvature" implies it is higher at larger radii, which is correct. Let's re-evaluate the typical scenario: for a concave upward curve (like a spillway crest), the center of curvature is *below* the streamline. Thus, $\partial p / \partial y$ is negative (pressure decreases upwards), and $n$ could be considered pointing upwards. If we consider horizontal curves, $n$ points outwards from the center. So, pressure *increases* as you move away from the center of curvature. Let's assume the question implies increasing pressure outwards from the center.

**Rephrased Answer for Clarity:** The statement is generally **True** in the context of how pressure is distributed to maintain circular motion. For a fluid element moving along a curved path, the pressure is lower on the side closer to the center of curvature and higher on the side further away. This pressure difference provides the necessary centripetal force.

**Question 5:**

Discuss the role of pressure distribution in the design of a stilling basin.

**Answer:**

In a stilling basin, the primary goal is to dissipate the high kinetic energy of the flow from the spillway. The pressure distribution plays a crucial role in several ways:

1.  **Forces on Structures:** Structures within stilling basins, such as baffles, chute blocks, and end sills, are subjected to significant pressure forces and impact forces from the turbulent water. The design of these components must account for these pressures to ensure they can withstand the loads without failing.
2.  **Turbulence Generation:** The pressure gradients and fluctuations associated with turbulent eddies are fundamental to the energy dissipation process. These pressure variations drive the mixing and shear that break down the large kinetic energy into heat.
3.  **Uplift and Downward Forces:** On the floor of the stilling basin, especially beneath a hydraulic jump, the pressure distribution can lead to net upward or downward forces on the apron. The apron must be designed to resist these forces and prevent scour or structural damage.
4.  **Cavitation Potential:** While less prominent than at the crest, high-velocity jets and sharp corners within some stilling basin designs can still lead to localized low pressures and potential cavitation issues.

---
