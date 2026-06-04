---
title: "Broaching – different machines, cutter for broaching, internal and external broaching – applications."
subject: "MACHINE TOOLS AND METROLOGY"
module: "Module 2: Drilling Machines –Operations, drill bit nomenclature, process parameters, machining time calculations and cutting forces."
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f0d"
status: "completed"
scrapedAt: "2026-05-20T17:54:05.667Z"
---
# Machine Tools and Metrology - Module 2: Drilling Machines

## Topic: Broaching

This topic delves into the process of broaching, a versatile machining operation used to produce internal and external shapes that are difficult or impossible to achieve with other machining methods. We will explore the different types of broaching machines, the design of broaching cutters, the principles of internal and external broaching, and their diverse applications.

### Learning Outcomes Addressed:

*   **CO1: Describe various machine tool operations.** (This topic directly addresses broaching as a machine tool operation.)
*   **CO2: Determine machining time and power consumption in various machining processes.** (While not the primary focus of this specific topic, the principles of cutting forces in broaching are relevant to calculating machining time and power.)

### 1. Introduction to Broaching

Broaching is a **chipping operation** that utilizes a multi-toothed cutting tool, known as a **broach**, to remove material and create a desired shape. The broach moves linearly through or across the workpiece, with each successive tooth removing a small amount of material. This process is characterized by:

*   **High accuracy and surface finish:** Broaching can produce very precise and smooth surfaces.
*   **High production rates:** Due to the multi-tooth nature of the broach, material is removed efficiently, leading to faster cycle times compared to other methods for similar features.
*   **Versatility:** Capable of producing complex shapes like keyways, splines, gears, and internal profiles.

**(Reference: Hajra Choudhury & Roy, Vol-II, Chapter on Broaching)**

---

### 2. Broaching Machines

Broaching machines are designed to provide the linear motion for the broach and to hold the workpiece securely. They can be categorized based on the direction of the broach movement or the driving mechanism.

#### 2.1 Classification based on Broach Movement:

*   **Horizontal Broaching Machines:**
    *   **Description:** The broach is pulled or pushed horizontally through the workpiece. These are common for external broaching and some internal broaching operations.
    *   **Advantages:** Can accommodate longer broaches, suitable for long workpieces.
    *   **Disadvantages:** Requires a longer machine bed, may require support for heavy workpieces.
    *   **Examples:** Pull-type horizontal broaching machines, push-type horizontal broaching machines.

*   **Vertical Broaching Machines:**
    *   **Description:** The broach is moved vertically, typically pulled downwards or pushed upwards. These are predominantly used for internal broaching.
    *   **Advantages:** Compact design, gravity aids in chip removal, suitable for heavy workpieces as they are supported from below.
    *   **Disadvantages:** Limited by the length of the broach and workpiece height.
    *   **Examples:**
        *   **Pull-down Vertical Broaching Machines:** Broach is pulled downwards through the workpiece.
        *   **Pull-up Vertical Broaching Machines:** Broach is pulled upwards through the workpiece.
        *   **Push-down Vertical Broaching Machines:** Broach is pushed downwards (less common for internal broaching).

#### 2.2 Classification based on Driving Mechanism:

*   **Hydraulic Broaching Machines:**
    *   **Description:** Utilizes hydraulic power to drive the broach. Offers smooth and controllable motion, capable of high forces.
    *   **Advantages:** High power, smooth operation, variable speed control, good for heavy-duty cutting.
    *   **Disadvantages:** Requires hydraulic power unit, potential for leaks.

*   **Mechanical Broaching Machines:**
    *   **Description:** Driven by mechanical means, such as a screw or a pinion and rack system.
    *   **Advantages:** Simpler mechanism, lower initial cost.
    *   **Disadvantages:** Less smooth motion compared to hydraulic, limited stroke length, not ideal for very high forces.

*   **Electrical/Servo Broaching Machines:**
    *   **Description:** Driven by electric motors, often with servo control for precise motion and force.
    *   **Advantages:** High precision, energy efficient, programmable motion.
    *   **Disadvantages:** Higher initial cost.

**(Reference: Hajra Choudhury & Roy, Vol-II, Chapter on Broaching)**
**(Reference: Ghosh & Mallik, Chapter on Machining Processes)**

---

### 3. The Broach (Cutter for Broaching)

The broach is the heart of the broaching process. It is a long, multi-toothed cutting tool with a precise geometry designed to remove material in stages.

#### 3.1 Anatomy of a Broach:

A typical broach can be divided into three main sections:

*   **Entrance (Starting) Section:**
    *   **Purpose:** To guide the broach into the workpiece and begin the cutting process.
    *   **Design:** Consists of a few teeth with a gradual increase in diameter. The first few teeth may be slightly chamfered.

*   **Roughing Section:**
    *   **Purpose:** To remove the bulk of the material.
    *   **Design:** Teeth are uniformly spaced and increase in diameter from one tooth to the next. The depth of cut per tooth (chip thickness) is significant in this section.

*   **Finishing Section:**
    *   **Purpose:** To achieve the final desired dimensions and surface finish.
    *   **Design:** Teeth have very small increments in diameter, leading to a fine chip. This section refines the profile created by the roughing section.

*   **Semi-finishing Section (Optional):**
    *   **Purpose:** To provide a smoother transition between the roughing and finishing sections, improving surface finish and tool life.

*   **Burnishing Section (Optional):**
    *   **Purpose:** To improve surface finish by plastic deformation of the workpiece material rather than cutting. These teeth are designed without cutting edges.

*   **Shank (End):**
    *   **Purpose:** To connect the broach to the broach holder in the machine.

#### 3.2 Key Geometrical Features of Broach Teeth:

*   **Pitch (P):** The distance between the centers of consecutive teeth along the cutting surface.
    *   **Calculation:** $P = L_{rough} / N_{rough}$, where $L_{rough}$ is the length of the roughing section and $N_{rough}$ is the number of teeth in the roughing section.
    *   **Factors influencing pitch:** Broach length, workpiece material, depth of cut.

*   **Depth of Cut per Tooth (d):** The increase in diameter or height from one tooth to the next.
    *   **Calculation:** $d = (D_{final} - D_{initial}) / N_{total}$, where $D_{final}$ and $D_{initial}$ are the final and initial diameters/heights, and $N_{total}$ is the total number of cutting teeth.
    *   **Factors influencing depth of cut:** Workpiece material hardness, broach material, desired surface finish. Softer materials and rougher finishes allow for larger depths of cut.

*   **Land Width (L):** The width of the tooth face behind the cutting edge. It provides support to the cutting edge and helps in guiding the broach.

*   **Hook Angle (α):** The angle of the cutting face relative to the radial line.
    *   **Purpose:** Influences chip formation and cutting force.
    *   **Ranges:** Typically 0° to 15° for most materials. Positive hook angles reduce cutting forces but can lead to faster tool wear. Negative hook angles increase cutting forces but can improve surface finish.

*   **Rake Angle (γ):** The angle of the cutting face. For broaches, it's often designed to be a clearance angle rather than a sharp rake.

*   **Clearance Angle (β):** The angle at the back of the tooth, ensuring clearance between the land and the workpiece. It prevents rubbing and reduces friction.

*   **Back Taper:** A slight increase in tooth diameter towards the shank. This compensates for wear and ensures that the finishing teeth maintain the correct size after some sharpening.

#### 3.3 Types of Broaches:

*   **Pull Broaches:** The most common type. The broach is pulled through the workpiece.
*   **Push Broaches:** The broach is pushed through the workpiece. Used for short, straight holes where pushing is feasible.
*   **Surface Broaches:** Used for external shapes. The broach moves across the surface of the workpiece.

#### 3.4 Broach Materials:

*   **High-Speed Steel (HSS):** Common for general-purpose broaching.
*   **Carbide Tipped:** Used for harder materials or higher production rates to improve tool life and cutting speed.
*   **Ceramics/Polycrystalline Diamond (PCD):** For very hard materials or specialized applications.

**(Reference: Hajra Choudhury & Roy, Vol-II, Chapter on Broaching)**
**(Reference: Ghosh & Mallik, Chapter on Machining Processes)**
**(Reference: Kalpakjian & Schmid, Chapter on Machining Processes)**

---

### 4. Internal Broaching

Internal broaching is used to produce internal shapes in a workpiece, such as keyways, splines, gears, and non-circular holes.

#### 4.1 Process:

1.  **Drill/Bore a Starting Hole:** A starting hole of sufficient diameter must be drilled or bored in the workpiece to allow the broach to enter. The diameter of this hole is crucial for successful broaching.
2.  **Secure the Workpiece:** The workpiece is securely held in a fixture on the broaching machine.
3.  **Broach Engagement:** The shank of the broach is attached to the pulling mechanism of the machine. The broach is then guided into the starting hole.
4.  **Broaching Stroke:** The broach is pulled through the workpiece, removing material with each tooth until the desired internal shape is formed.
5.  **Broach Retrieval:** After the stroke, the broach is retracted (either pulled back or pushed out from the other side), and the workpiece is removed.

#### 4.2 Common Internal Shapes Produced by Broaching:

*   **Keyways:** Straight or tapered slots for fitting keys.
*   **Splines:** Internal splines for mating with external splines on shafts.
*   **Gears:** Internal gear teeth.
*   **Hexagonal Holes:**
*   **Square Holes:**
*   **Complex Profiles:** Custom shapes as required.

#### 4.3 Advantages of Internal Broaching:

*   **High Accuracy and Surface Finish:** Excellent for producing precise and smooth internal features.
*   **High Production Rate:** Efficient material removal for complex shapes.
*   **Cost-Effective for Large Batches:** Although broaches can be expensive, their longevity and speed make them economical for mass production.
*   **Single Operation:** Produces the final shape in a single pass.

#### 4.4 Considerations:

*   **Starting Hole Size and Quality:** Critical for successful broaching.
*   **Chip Clearance:** Adequate chip gullets are necessary to prevent chip clogging.
*   **Lubrication:** Essential for reducing friction, heat, and tool wear.
*   **Broach Strength:** Broaches are subject to high tensile forces during pulling.

**(Reference: Hajra Choudhury & Roy, Vol-II, Chapter on Broaching)**
**(Reference: Kalpakjian & Schmid, Chapter on Machining Processes)**

---

### 5. External Broaching

External broaching is used to produce shapes on the external surface of a workpiece.

#### 5.1 Process:

1.  **Machine the Blank:** The workpiece is typically prepared with a suitable blank size before broaching.
2.  **Secure the Workpiece:** The workpiece is held firmly in a fixture on the broaching machine.
3.  **Broach Movement:** The broach is moved linearly across or through the workpiece.
    *   **Push-Type External Broaching:** The broach is pushed across the surface of the workpiece. This is common for producing flats, grooves, or simple profiles.
    *   **Pull-Type External Broaching:** The broach is pulled across the surface. Less common for external shapes compared to push type.
    *   **Surface Broaching:** The broach has a rectangular section and moves in a single pass, removing material from a flat or contoured surface. This is a very common form of external broaching.

#### 5.2 Common External Shapes Produced by Broaching:

*   **Flats:** Flat surfaces on cylindrical parts.
*   **Grooves:** Slots or channels on surfaces.
*   **Splines:** External splines on shafts.
*   **Gears:** External gear teeth.
*   **Complex Contours:** Forming irregular profiles on surfaces.
*   **Chamfers and Radii:**

#### 5.3 Types of Surface Broaches:

*   **Flat Broaches:** Produce flat surfaces.
*   **Contour Broaches:** Produce curved or irregular profiles.
*   **Form Broaches:** Produce specific shapes like gear teeth.

#### 5.4 Advantages of External Broaching:

*   **High Production Rate:** Efficiently produces complex external features.
*   **Good Accuracy and Surface Finish:** Comparable to internal broaching.
*   **Cost-Effective for Large Batches:**
*   **Single-Pass Operation:** Can generate complex shapes in one pass.

#### 5.5 Considerations:

*   **Workpiece Rigidity:** The workpiece must be rigidly supported to prevent vibration and deflection.
*   **Chip Load and Tooth Spacing:** Critical for efficient cutting and tool life.
*   **Lubrication:** Essential for cooling and chip removal.

**(Reference: Hajra Choudhury & Roy, Vol-II, Chapter on Broaching)**
**(Reference: Kalpakjian & Schmid, Chapter on Machining Processes)**

---

### 6. Applications of Broaching

Broaching is widely used in various industries due to its efficiency and ability to produce high-quality finished parts.

*   **Automotive Industry:**
    *   Manufacturing of gears, splines, transmission components, connecting rod big ends, cylinder liners.
    *   Producing keyways in crankshafts and camshafts.

*   **Aerospace Industry:**
    *   Machining of turbine blades, compressor components, aircraft engine parts.
    *   Creating intricate internal and external profiles on high-strength alloys.

*   **Manufacturing of Small Arms:**
    *   Rifling of gun barrels (internal broaching).

*   **General Manufacturing:**
    *   Producing keyways in pulleys, sprockets, and couplings.
    *   Machining hexagonal or square holes in nuts, bolts, and fittings.
    *   Forming teeth on gears and splines for various machinery.
    *   Creating intricate shapes in molds and dies.

*   **Appliance Manufacturing:**
    *   Producing splined shafts for motors.

**(Reference: Hajra Choudhury & Roy, Vol-II, Chapter on Broaching)**
**(Reference: Ghosh & Mallik, Chapter on Machining Processes)**

---

### 7. Machining Time and Cutting Forces in Broaching (Brief Mention - Relates to CO2)

While a detailed calculation is beyond the scope of this specific topic, it's important to note that broaching has unique aspects regarding time and forces.

*   **Machining Time:** Primarily determined by the broaching speed, the length of the broach stroke, and the time for loading/unloading.
    *   $T_{machining} = L_{stroke} / V_{broach} + T_{loading/unloading}$
    *   $V_{broach}$ is the broaching speed (linear velocity).

*   **Cutting Forces:** The total cutting force in broaching is the sum of the forces exerted by each cutting tooth.
    *   $F_{total} = N_{rough} \times F_{tooth}$
    *   $F_{tooth}$ is the force per tooth, which depends on the depth of cut, width of cut, cutting speed, material properties, and broach geometry.
    *   **Key Concept:** Broaching forces are generally high due to the large number of teeth cutting simultaneously. This necessitates strong broaches and robust machines.

**(Reference: Ghosh & Mallik, Chapter on Machining Processes and Cutting Forces)**

---

### Key Points to Remember:

*   Broaching is a **single-pass, multi-tooth** cutting process.
*   It excels at producing **complex internal and external shapes** with high accuracy and surface finish.
*   The **broach** is the specialized cutting tool, composed of entrance, roughing, and finishing sections.
*   **Internal broaching** is used for keyways, splines, and non-circular holes.
*   **External broaching** is used for splines, gears, and surface features.
*   **Hydraulic machines** are most common for broaching due to the high forces involved.
*   The **starting hole diameter** is critical for internal broaching.
*   Broaching offers **high production rates** but requires significant investment in broaches.

---

### Practice Questions and Answers:

**Q1. What are the main sections of a broach?**
**A1.** The main sections of a broach are the Entrance (Starting) section, Roughing section, and Finishing section. Some broaches may also include semi-finishing and burnishing sections.

**Q2. List three applications of internal broaching.**
**A2.** Three applications of internal broaching are:
    *   Producing keyways in shafts.
    *   Machining internal splines.
    *   Creating hexagonal or square holes.

**Q3. What is the primary advantage of using a hydraulic broaching machine?**
**A3.** The primary advantage of using a hydraulic broaching machine is its ability to provide smooth and controlled motion with high forces, which are necessary for efficient broaching, especially with large broaches or tough materials.

**Q4. What is the purpose of the finishing section of a broach?**
**A4.** The purpose of the finishing section of a broach is to remove a small amount of material with each tooth to achieve the final desired dimensions and a high-quality surface finish.

**Q5. Differentiate between internal and external broaching.**
**A5.**
    *   **Internal Broaching:** Used to produce shapes within a pre-drilled hole (e.g., keyways, splines). The broach is pulled or pushed through the existing hole.
    *   **External Broaching:** Used to produce shapes on the outer surface of a workpiece (e.g., external splines, flats). The broach moves across the external surface.

**Q6. Which section of a broach removes the bulk of the material?**
**A6.** The **Roughing section** of a broach removes the bulk of the material.

**Q7. Name two industries where broaching is extensively used.**
**A7.** Two industries where broaching is extensively used are the **Automotive industry** and the **Aerospace industry**.

---

This concludes the notes for the topic of Broaching. Remember to refer to the specified textbooks for more in-depth understanding and detailed diagrams.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
